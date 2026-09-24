import Link from 'next/link';
import {Fragment} from 'react';

// A deliberately small renderer for editorial links. All other text stays escaped.
export function GuideText({text}:{text:string}){
  const parts=text.split(/(\[[^\]]+\]\((?:https:\/\/[^\s)]+|\/(?!\/)[^\s)]*)\))/g);
  return <>{parts.map((part,index)=>{
    const link=part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if(!link)return <Fragment key={index}>{part}</Fragment>;
    return link[2].startsWith('/')
      ? <Link key={index} href={link[2]}>{link[1]}</Link>
      : <a key={index} href={link[2]}>{link[1]}</a>;
  })}</>;
}
