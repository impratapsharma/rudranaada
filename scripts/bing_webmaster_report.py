#!/usr/bin/env python3
"""Fetch Bing Webmaster search metrics using a GitHub Actions secret."""
import json
import os
import sys
import urllib.parse
import urllib.request
from datetime import datetime, timedelta, timezone
from pathlib import Path

API_KEY = os.environ.get("BING_WEBMASTER_API_KEY")
SITE_URL = os.environ.get("BING_SITE_URL", "https://rudranaada.com/")
BASE = "https://ssl.bing.com/webmaster/api.svc/json/"
if not API_KEY:
    sys.exit("Missing BING_WEBMASTER_API_KEY GitHub Actions secret")

def get(method):
    query = urllib.parse.urlencode({"apikey": API_KEY, "siteUrl": SITE_URL})
    req = urllib.request.Request(BASE + method + "?" + query,
        headers={"User-Agent": "RudraNaada-SEO-Reporting/1.0"})
    with urllib.request.urlopen(req, timeout=45) as response:
        payload = json.load(response)
    if "d" not in payload:
        raise ValueError("Unexpected Bing API response")
    return payload["d"]

def normalized(rows):
    if not isinstance(rows, list):
        return []
    return rows

def date_of(row):
    value = str(row.get("Date", ""))
    if "/Date(" in value:
        import re
        match = re.search(r"/Date\((\d+)", value)
        if match:
            return datetime.fromtimestamp(int(match.group(1))/1000, timezone.utc).date()
    try:
        return datetime.fromisoformat(value.replace("Z", "+00:00")).date()
    except ValueError:
        return None

def period_stats(rows, start, end):
    filtered = [r for r in rows if (d := date_of(r)) and start <= d <= end]
    clicks = sum(float(r.get("Clicks", 0) or 0) for r in filtered)
    impressions = sum(float(r.get("Impressions", 0) or 0) for r in filtered)
    weighted_position = sum(float(r.get("AvgClickPosition", 0) or 0) * float(r.get("Clicks", 0) or 0) for r in filtered)
    return {"clicks": clicks, "impressions": impressions,
            "ctr_percent": round(clicks / impressions * 100, 2) if impressions else None,
            "avg_click_position": round(weighted_position / clicks, 2) if clicks else None}

def main():
    data = {}
    errors = {}
    for method in ("GetRankAndTrafficStats", "GetQueryStats", "GetPageStats", "GetCrawlStats"):
        try:
            data[method] = get(method)
        except Exception as exc:
            errors[method] = str(exc).split("apikey=")[0][:250]
    if not data:
        sys.exit("Bing API requests failed; verify site URL and key permissions.")
    today = datetime.now(timezone.utc).date()
    # Allow for Bing's processing lag; use complete periods ending 3 days ago.
    latest_end = today - timedelta(days=3)
    latest_start = latest_end - timedelta(days=6)
    previous_end = latest_start - timedelta(days=1)
    previous_start = previous_end - timedelta(days=6)
    traffic = normalized(data.get("GetRankAndTrafficStats", []))
    report = {
        "site": SITE_URL, "generated_at_utc": datetime.now(timezone.utc).isoformat(),
        "periods": {"latest": [str(latest_start), str(latest_end)],
                    "previous": [str(previous_start), str(previous_end)]},
        "performance": {"latest": period_stats(traffic, latest_start, latest_end),
                        "previous": period_stats(traffic, previous_start, previous_end)},
        "queries": data.get("GetQueryStats", []),
        "pages": data.get("GetPageStats", []),
        "crawl": data.get("GetCrawlStats", []),
        "errors": errors,
        "note": "Bing query/page endpoints may return rolling aggregates, not daily rows; do not label them as period comparisons unless dated."
    }
    Path("bing-report.json").write_text(json.dumps(report, indent=2, default=str))
    print("Bing report created. No API key or search terms printed to logs.")
if __name__ == "__main__":
    main()
