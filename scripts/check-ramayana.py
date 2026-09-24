"""Check the built reading experience after `npm run build` (standard library only)."""
import json
import re
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote

ROOT=Path(__file__).resolve().parents[1]
BUILD=ROOT/'.next/server/app'
class Page(HTMLParser):
    def __init__(self,html):
        super().__init__();self.ids=[];self.links=[];self.h1=0;self.canonical=[];self.robots=[];self.schemas=[];self.in_schema=False;self.schema='';self.feed(html)
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if 'id' in a:self.ids.append(a['id'])
        if tag=='a' and a.get('href'):self.links.append(a['href'])
        if tag=='h1':self.h1+=1
        if tag=='link' and a.get('rel')=='canonical':self.canonical.append(a.get('href'))
        if tag=='meta' and a.get('name')=='robots':self.robots.append(a.get('content',''))
        if tag=='script' and a.get('type')=='application/ld+json':self.in_schema=True;self.schema=''
    def handle_data(self,text):
        if self.in_schema:self.schema+=text
    def handle_endtag(self,tag):
        if tag=='script' and self.in_schema:self.schemas.append(json.loads(self.schema));self.in_schema=False

def page_for(route):
    p=BUILD/('index.html' if route=='/' else route.lstrip('/')+'.html')
    if not p.exists() and (BUILD/route.lstrip('/')/'route.js').exists():return Page('')
    assert p.exists(),f'Missing static route: {route}'
    return Page(p.read_text())

guides=[json.loads(p.read_text()) for p in (ROOT/'data/ramayana').glob('*-kanda.json')]
routes=['/ramayana']+['/ramayana/'+g['slug'] for g in guides]
cache={}
for route in routes:
    page=page_for(route);cache[route]=page
    assert page.h1==1,(route,'Expected one H1')
    assert len(page.ids)==len(set(page.ids)),(route,'Duplicate section IDs')
    assert page.canonical==['https://rudranaada.com'+route],(route,page.canonical)
    assert page.robots and all('noindex' not in rule for rule in page.robots),(route,'Indexing disabled')
    assert any(isinstance(s,dict) and s.get('@type')=='Article' for s in page.schemas),(route,'Missing Article schema')
    for guide in guides:assert '/ramayana/'+guide['slug'] in page.links,(route,'Kanda missing from navigation')
    for link in page.links:
        u=urlsplit(link)
        if u.netloc and u.netloc!='rudranaada.com':continue
        if u.scheme and u.scheme not in ('https','http'):continue
        target=u.path or route
        if not target.startswith('/'):continue
        if target not in cache:cache[target]=page_for(target)
        if u.fragment:assert unquote(u.fragment) in cache[target].ids,(route,link,'Missing anchor')
    print('PASS',route)
for guide in guides:
    covered=[n for start,end,*_ in guide['readingMap'] for n in range(start,end+1)]
    assert covered==list(range(1,guide['chapterCount']+1)),guide['slug']
    assert len({s['id'] for s in guide['sections']})==len(guide['sections']),guide['slug']

sitemap=(BUILD/'sitemap.xml.body').read_text()
for route in routes:assert '<loc>https://rudranaada.com'+route+'</loc>' in sitemap,route
for route in ['/deities/hanuman','/deities/parashurama','/music/ramayana-orchestral','/music/ram-naam','/festivals/rama-navami','/festivals/hanuman-jayanti','/festivals/dussehra','/festivals/diwali','/articles/why-hanuman-forgot-his-powers-jambavan-ramayana']:
    assert any(h.startswith('/ramayana/') for h in page_for(route).links),(route,'Missing return link')
print('PASS: headings, canonicals, indexability, schemas, internal routes and anchors, Kanda navigation, chapter coverage, sitemap and reciprocal links.')
