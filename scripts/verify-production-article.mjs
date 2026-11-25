#!/usr/bin/env node
// Verify live HTML, actual image assets and sitemap, retrying Vercel propagation.
const slug=process.argv[2];
if(!slug||!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug))throw Error('Usage: node scripts/verify-production-article.mjs <slug>');
const base='https://rudranaada.com',url=base+'/articles/'+slug;
const fs=await import('node:fs/promises');
const manifest=JSON.parse(await fs.readFile('data/article-visuals/'+slug+'.json','utf8'));
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const timeout=Date.now()+6*60*1000;
let detail='';
async function get(url){const response=await fetch(url,{redirect:'follow',headers:{'Cache-Control':'no-cache'},signal:AbortSignal.timeout(20000)});return response;}
while(Date.now()<timeout){
  try{
    const res=await get(url);
    const html=res.ok?await res.text():'';
    const titleOk=html.includes('<h1>')&&html.includes('articleFeaturedImage')&&html.includes('articleInlineImage');
    const expected=manifest.images.every(i=>html.includes(i.file));
    const sitemap=await get(base+'/sitemap.xml'),map=sitemap.ok?await sitemap.text():'';
    let assets=true;
    for(const img of manifest.images){
      const asset=await get(base+'/images/articles/'+slug+'/'+img.file);
      if(!asset.ok||!(asset.headers.get('content-type')||'').startsWith('image/')){assets=false;break;}
      const payload=await asset.arrayBuffer();
      if(payload.byteLength<(img.file.endsWith('.svg')?2000:15000)){assets=false;break;}
    }
    if(res.ok&&titleOk&&expected&&sitemap.ok&&map.includes(url)&&assets){
      console.log('LIVE VERIFIED: '+url+' (HTTP 200, featured plus inline images, assets and sitemap)');
      process.exit(0);
    }
    detail='page='+res.status+', markup='+titleOk+', references='+expected+', sitemap='+sitemap.status+', assets='+assets;
  }catch(e){detail=String(e.message||e);}
  console.log('Awaiting production '+slug+': '+detail);
  await sleep(15000);
}
throw Error('Production verification did not pass within six minutes: '+detail);
