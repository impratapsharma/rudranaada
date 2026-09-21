"""Import public metadata only; never downloads video/audio.

First: python -m yt_dlp --flat-playlist --dump-single-json --skip-download \
  https://www.youtube.com/channel/UCm0nm2PjdBv5-2OVwEYtu4g > /tmp/channel.json
Then: python scripts/import-youtube.py /tmp/channel.json
"""
import concurrent.futures
import datetime
import json
from pathlib import Path
import re
import sys
import urllib.request

CHANNEL = 'UCm0nm2PjdBv5-2OVwEYtu4g'
ROOT = Path(__file__).resolve().parents[1]


def extract(entry, kind):
    video_id = entry['id']
    url = f'https://www.youtube.com/watch?v={video_id}'
    for attempt in range(3):
        try:
            request = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(request, timeout=45) as response:
                html = response.read().decode()
            match = re.search(r'var ytInitialPlayerResponse\s*=\s*', html)
            if not match:
                raise ValueError('Missing public player metadata')
            player, _ = json.JSONDecoder().raw_decode(html[match.end():])
            details = player['videoDetails']
            meta = player['microformat']['playerMicroformatRenderer']
            if details['channelId'] != CHANNEL or details.get('isPrivate') or meta.get('isUnlisted'):
                raise ValueError('Video is not a public upload from the expected channel')
            item = {
                'videoId': video_id, 'title': details['title'],
                'youtubeUrl': f'https://www.youtube.com/shorts/{video_id}' if kind == 'short' else url,
                'format': kind, 'description': details.get('shortDescription', ''),
                'publishedAt': meta['publishDate'], 'durationSeconds': int(details['lengthSeconds']),
                'thumbnail': details['thumbnail']['thumbnails'][-1]['url'],
                'channelId': CHANNEL,
            }
            print(f'OK {kind} {video_id}', flush=True)
            return item
        except Exception:
            if attempt == 2:
                raise


def main():
    source = json.loads(Path(sys.argv[1]).read_text())
    if source.get('channel_id') != CHANNEL:
        raise ValueError('Unexpected source channel')
    work = []
    for tab in source['entries']:
        kind = 'short' if tab['title'].endswith(' - Shorts') else 'video'
        work.extend((entry, kind) for entry in tab['entries'])
    with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
        items = list(pool.map(lambda pair: extract(*pair), work))
    ids = [item['videoId'] for item in items]
    if len(set(ids)) != len(ids):
        raise ValueError('Duplicate video IDs; review channel tabs')
    # Only replace the snapshot after every public video has been verified.
    data = {'channelId': CHANNEL, 'channelUrl': source['channel_url'],
            'fetchedAt': datetime.datetime.now(datetime.timezone.utc).isoformat(),
            'videos': sorted(items, key=lambda v: v['publishedAt'], reverse=True)}
    (ROOT / 'data' / 'youtube-catalogue.json').write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n')
    print(f'Saved {len(items)} verified public videos.')


if __name__ == '__main__':
    main()
