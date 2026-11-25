#!/usr/bin/env node
// Resumable Image API -> WebP -> article source workflow. --generate incurs API charges.
import fs from 'node:fs/promises';
import path from 'node:path';
const args=process.argv.slice(2),file=args.find(a=>a.endsWith('.json')),execute=args.includes('--generate');
if(!file)throw Error('Usage: node scripts/generate-article-images.mjs data/article-visuals/<slug>.json [--generate]');
const m=JSON.parse(await fs.readFile(file,'utf8')),slug=m.slug;
if(!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)||!/^lib\/[a-z0-9-]+-article\.ts$/.test(m.articleFile))throw Error('Unsafe slug or article path');
const images=m.images||[];
if(images.length<3||images.length>5||images.filter(v=>v.role==='featured').length!==1||images.filter(v=>v.role==='inline').length<2)throw Error('Need one featured and two to four inline images');
const seen=new Set();
for(const im of images){
  if(!/^[a-z0-9-]+\.webp$/.test(im.file)||seen.has(im.file)||typeof im.prompt!=='string'||im.prompt.length<120||typeof im.alt!=='string'||im.alt.length<18)throw Error('Invalid image filename, prompt or alt text');
  seen.add(im.file);
  if(im.role==='inline'&&typeof im.sectionHeading!=='string')throw Error('Missing exact section heading');
}
const input=await fs.readFile(m.articleFile,'utf8'),keyPos=input.indexOf(':Article=');
const first=input.indexOf('{',keyPos),last=input.lastIndexOf('};');
if(keyPos<0||first<0||last<0)throw Error('Cannot find JSON-compatible Article initializer');
let a;
try{a=JSON.parse(input.slice(first,last+1));}catch{throw Error('Article must be JSON-compatible TypeScript; this script will not rewrite arbitrary TS');}
if(a.slug!==slug)throw Error('Article slug mismatch');
for(const im of images.filter(v=>v.role==='inline'))if(a.body.filter(s=>s.heading===im.sectionHeading).length!==1)throw Error('Missing or repeated section: '+im.sectionHeading);
console.log((execute?'Generate':'Preflight')+': '+images.length+' assets for '+slug);
if(!execute){console.log('Preflight OK; --generate invokes paid Image API');process.exit(0);}
const secret=process.env.OPENAI_API_KEY;
if(!secret)throw Error('Missing OPENAI_API_KEY. Configure secret in GitHub Actions (never commit or paste it).');
const directory=path.join('public','images','articles',slug);
await fs.mkdir(directory,{recursive:true});
async function generate(prompt){
  for(let n=0;n<4;n++){
    const result=await fetch('https://api.openai.com/v1/images/generations',{
      method:'POST',
      headers:{Authorization:'Bearer '+secret,'Content-Type':'application/json'},
      body:JSON.stringify({model:process.env.RUDRANAADA_IMAGE_MODEL||'gpt-image-2.5-flare',prompt,size:'1536x864',quality:'high',output_format:'webp',output_compression:82,n:1}),
      signal:AbortSignal.timeout(180000)
    });
    if(result.ok){const payload=await result.json(),value=payload.data?.[0]?.b64_json;if(!value)throw Error('No base64 image in response');return Buffer.from(value,'base64');}
    if(![429,500,502,503,504].includes(result.status)||n===3)throw Error('Image API status '+result.status+'. Check quota, billing, model availability and policy');
    await new Promise(resolve=>setTimeout(resolve,2000*(2**n)));
  }
}
for(const im of images){
  const output=path.join(directory,im.file);
  try{if((await fs.stat(output)).size>15000){console.log('Reusing '+im.file);continue;}}catch{}
  const image=await generate(im.prompt);
  if(image.length<15000||image.length>6000000||image.toString('ascii',0,4)!=='RIFF'||image.toString('ascii',8,12)!=='WEBP')throw Error('Invalid image response for '+im.file);
  await fs.writeFile(output,image,{flag:'wx'});
  console.log('Saved '+output);
}
const rec=im=>({src:'/images/articles/'+slug+'/'+im.file,alt:im.alt,...(im.caption?{caption:im.caption}:{})});
a.featuredImage=rec(images.find(v=>v.role==='featured'));
for(const im of images.filter(v=>v.role==='inline')){
  const section=a.body.find(s=>s.heading===im.sectionHeading),record=rec(im);
  if(section.image&&section.image.src!==record.src)throw Error('Existing different inline image for '+im.sectionHeading);
  section.image=record;
}
a.updatedAt=new Date().toISOString().slice(0,10);
await fs.writeFile(m.articleFile,input.slice(0,first)+JSON.stringify(a,null,2)+input.slice(last+1),'utf8');
console.log('Attached images to '+m.articleFile+'. Verify them before publishing.');
