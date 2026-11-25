#!/usr/bin/env node
// Block new article publication if actual featured/inline image files are missing.
import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';
const cwd=process.cwd();
const args=process.argv.slice(2);
const forced=args.includes('--slug')?args[args.indexOf('--slug')+1]:null;
const all=args.includes('--all');
const cutoff='2026-11-23';
const errors=[];
let scanned=0,checked=0;
function prop(obj,key){
  if(!obj||!ts.isObjectLiteralExpression(obj))return null;
  const p=obj.properties.find(p=>ts.isPropertyAssignment(p)&&(ts.isStringLiteral(p.name)||ts.isIdentifier(p.name))&&p.name.text===key);
  return p?.initializer??null;
}
const str=n=>n&&ts.isStringLiteralLike(n)?n.text:null;
function validate(n,slug,label,seen){
  const src=str(prop(n,'src')),alt=str(prop(n,'alt'));
  if(!src||!src.startsWith('/images/articles/'+slug+'/')||!/^\/images\/articles\/[a-z0-9-]+\/[a-z0-9-]+\.(webp|png|jpe?g|avif|svg)$/.test(src)){
    errors.push(slug+': '+label+' requires a real local /images/articles/'+slug+'/ image path');return;
  }
  if(!alt||alt.trim().length<18)errors.push(slug+': '+label+' requires descriptive alt text');
  if(seen.has(src))errors.push(slug+': duplicate image '+src);
  seen.add(src);
  const filename=path.join(cwd,'public',src.slice(1));
  if(!fs.existsSync(filename)){errors.push(slug+': missing binary asset '+src);return;}
  const b=fs.readFileSync(filename),ext=path.extname(src);
  if(ext==='.svg' ? (b.length<2000||b.length>1000000) : (b.length<15000||b.length>6000000)) errors.push(slug+': abnormal image size '+src);
  const safeSvg=ext==='.svg'&&b.toString('utf8').includes('<svg')&&!/<script|<foreignObject|onload\s*=|href\s*=\s*["']https?:|javascript:|<image/i.test(b.toString('utf8'));
  const valid=ext==='.svg'?safeSvg:ext==='.webp'?b.toString('ascii',0,4)==='RIFF'&&b.toString('ascii',8,12)==='WEBP':
    ext==='.png'?b.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10])):
    ext==='.jpg'||ext==='.jpeg'?b[0]===255&&b[1]===216:
    ext==='.avif'?b.toString('ascii',4,16).includes('ftypavi'):false;
  if(!valid)errors.push(slug+': invalid image bytes '+src);
}
for(const file of fs.readdirSync(path.join(cwd,'lib')).filter(f=>f.endsWith('-article.ts'))){
  const source=fs.readFileSync(path.join(cwd,'lib',file),'utf8');
  const ast=ts.createSourceFile(file,source,ts.ScriptTarget.Latest,true);
  function scan(node){
    if(ts.isVariableDeclaration(node)&&node.initializer&&ts.isObjectLiteralExpression(node.initializer)){
      const obj=node.initializer,slug=str(prop(obj,'slug')),date=str(prop(obj,'publishedAt'));
      if(slug&&date){
        scanned++;
        if(forced?slug===forced:(all||date>=cutoff)){
          checked++;
          const seen=new Set();
          validate(prop(obj,'featuredImage'),slug,'featured image',seen);
          let count=0;const body=prop(obj,'body');
          if(body&&ts.isArrayLiteralExpression(body)){
            for(const section of body.elements){const img=prop(section,'image');if(img){count++;validate(img,slug,'inline image '+count,seen);}}
          }
          if(count<2)errors.push(slug+': expected at least two inline images, found '+count);
        }
      }
    }
    ts.forEachChild(node,scan);
  }
  scan(ast);
}
if(forced&&checked!==1)errors.push('Article slug not found or not unique: '+forced);
if(!scanned)errors.push('No article source files found');
if(errors.length){errors.forEach(e=>console.error('IMAGE CHECK FAILED:',e));process.exit(1);}
console.log('Verified image metadata and local binary files for '+checked+' article(s).');
