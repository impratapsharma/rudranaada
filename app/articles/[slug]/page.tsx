import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {articles,getArticle} from '@/lib/content';
import {site} from '@/lib/site';
import {Breadcrumbs} from '@/components/Breadcrumbs';
import {JsonLd} from '@/components/JsonLd';

export function generateStaticParams(){return articles.map(a=>({slug:a.slug}))}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;
  const a=getArticle(slug);
  if(!a)return{};
  return {title:a.title,description:a.description,alternates:{canonical:'/articles/'+a.slug},openGraph:{type:'article',title:a.title,description:a.description,url:site.url+'/articles/'+a.slug,publishedTime:a.publishedAt,tags:a.tags}};
}

export default async function Page({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const a=getArticle(slug);
  if(!a)notFound();
  return <article className="articleWrap">
    <JsonLd data={{'@context':'https://schema.org','@type':'BlogPosting',headline:a.title,description:a.description,datePublished:a.publishedAt,mainEntityOfPage:site.url+'/articles/'+a.slug,author:{'@type':'Organization',name:'RudraNāda'},publisher:{'@id':site.url+'/#organization'},inLanguage:'en-IN',keywords:a.tags.join(', ')}}/>
    <Breadcrumbs items={[{label:'Stories',href:'/articles'},{label:a.title,href:'/articles/'+a.slug}]}/>
    <div className="eyebrow">{a.category}</div>
    <h1>{a.title}</h1>
    <p className="lede">{a.dek}</p>
    <div className="articleMeta"><span>{new Date(a.publishedAt).toLocaleDateString('en-IN',{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'})}</span><span>·</span><span>{a.readingMinutes} min read</span><span>·</span><span>RudraNāda</span></div>
    <div className="articleBody">{a.body.map((s,i)=><section key={i}>{s.heading&&<h2>{s.heading}</h2>}{s.paragraphs.map((p,j)=><p key={j}>{p}</p>)}</section>)}</div>

    {a.sources&&a.sources.length>0&&<section className="articleSources">
      <div className="eyebrow">Sources & passages</div><h2>Read further</h2>
      {a.sources.map(source=><a href={source.url} target="_blank" rel="noreferrer" key={source.url}><strong>{source.label}</strong>{source.note&&<span>{source.note}</span>}<b>↗</b></a>)}
    </section>}

    {a.category==='Guru Bodha'&&<div className="heroActions"><Link className="button buttonGhost" href="/guru">More from Guru Bodha</Link></div>}
    <div className="tagRow">{a.tags.map(t=><span className="tag" key={t}>{t}</span>)}</div>
  </article>
}
