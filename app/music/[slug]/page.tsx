import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {getMusic,music,deityHubs} from '@/lib/content';
import {formatDate,formatDuration} from '@/lib/music-format';
import {site} from '@/lib/site';
import {Breadcrumbs} from '@/components/Breadcrumbs';
import {JsonLd} from '@/components/JsonLd';
import {MusicCard} from '@/components/MusicCard';

export function generateStaticParams(){return music.map(m=>({slug:m.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const m=getMusic((await params).slug);
  if(!m)return {};
  return {title:m.title,description:m.summary,alternates:{canonical:'/music/'+m.slug},robots:{index:m.format==='video',follow:true},openGraph:{title:m.title,description:m.summary,url:site.url+'/music/'+m.slug,type:'video.other',images:[{url:m.thumbnail}]},twitter:{card:'summary_large_image',title:m.title,description:m.summary,images:[m.thumbnail]}};
}
export default async function Page({params}:{params:Promise<{slug:string}>}){
  const m=getMusic((await params).slug);
  if(!m)notFound();
  const related=music.filter(v=>v.videoId!==m.videoId&&v.format==='video'&&v.themes.some(t=>m.themes.includes(t))).sort((a,b)=>Number(b.videoId===m.relatedVideoId)-Number(a.videoId===m.relatedVideoId)).slice(0,3);
  const hubs=deityHubs.filter(d=>m.themes.some(t=>t.toLowerCase()===d.name.toLowerCase()));
  return <><article className="articleWrap musicArticle">
    <JsonLd data={{'@context':'https://schema.org','@type':'VideoObject',name:m.title,description:m.description||m.summary,thumbnailUrl:m.thumbnail,uploadDate:m.publishedAt,duration:`PT${m.durationSeconds}S`,embedUrl:`https://www.youtube-nocookie.com/embed/${m.videoId}`,url:site.url+'/music/'+m.slug,sameAs:m.youtubeUrl,creator:{'@type':'Organization',name:'RudraNāda',url:site.url}}}/>
    <Breadcrumbs items={[{label:'Music',href:'/music'},{label:m.title,href:'/music/'+m.slug}]}/>
    <div className="eyebrow">{m.eyebrow}</div><h1>{m.title}</h1><p className="lede">{m.summary}</p>
    <div className="articleMeta"><span>{m.format==='short'?'YouTube Short':'Full video'}</span><span>{formatDuration(m.durationSeconds)}</span><time dateTime={m.publishedAt}>{formatDate(m.publishedAt)}</time></div>
    <div className={`videoEmbed${m.format==='short'?' videoEmbedShort':''}`}><iframe src={`https://www.youtube-nocookie.com/embed/${m.videoId}`} title={m.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"/></div>
    <div className="heroActions"><a className="button" href={m.youtubeUrl} target="_blank" rel="noreferrer">Watch on YouTube ↗</a><Link className="button buttonGhost" href="/music">Explore all music</Link></div>
    {m.description&&<div className="articleBody"><h2>About this release</h2><div className="releaseDescription">{m.description}</div></div>}
    <div className="tagRow">{m.themes.map(t=><span className="tag" key={t}>{t}</span>)}</div>
    {hubs.length>0&&<div className="heroActions">{hubs.map(d=><Link key={d.slug} href={'/deities/'+d.slug}>Explore {d.name} →</Link>)}</div>}
  </article>{related.length>0&&<section className="section"><div className="shell"><h2>Keep listening</h2><div className="grid3">{related.map(v=><MusicCard key={v.videoId} entry={v}/>)}</div></div></section>}</>;
}
