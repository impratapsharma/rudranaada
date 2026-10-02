import type {Metadata} from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {notFound} from 'next/navigation';
import {articles,getArticle} from '@/lib/content';
import {site} from '@/lib/site';
import {Breadcrumbs} from '@/components/Breadcrumbs';
import {JsonLd} from '@/components/JsonLd';
import {getArticleEnhancement} from '@/lib/article-enhancements';
import {QuickAnswer} from '@/components/QuickAnswer';
import {FaqSection} from '@/components/FaqSection';
import {GuideText} from '@/components/GuideText';
import {DiwaliOverview} from '@/components/DiwaliOverview';
import {citationUrls,resolveSourceHref} from '@/lib/source-links';

const markdownSlugs=new Set([
  'adi-shankaracharya-life-sannyasa-peethams',
  'why-krishna-showed-arjuna-vishvarupa-bhagavad-gita',
  'why-hanuman-forgot-his-powers-jambavan-ramayana',
  'karna-mahabharata-story-text-popular-retellings'
]);

export function generateStaticParams(){return articles.map(a=>({slug:a.slug}))}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;
  const a=getArticle(slug);
  if(!a)return{};
  return {
    title:a.seoTitle??a.title,
    description:a.description,
    alternates:{canonical:'/articles/'+a.slug,types:markdownSlugs.has(a.slug)?{'text/markdown':'/markdown/articles/'+a.slug}:undefined},
    authors:[{name:a.author??'Pratap Sharma',url:'/authors/pratap'}],
    openGraph:{type:'article',title:a.seoTitle??a.title,description:a.description,url:site.url+'/articles/'+a.slug,publishedTime:a.publishedAt,modifiedTime:a.updatedAt??a.publishedAt,tags:a.tags,authors:[a.author??'Pratap Sharma'],images:a.featuredImage?[{url:a.featuredImage.src,alt:a.featuredImage.alt}]:undefined},
    twitter:{card:'summary_large_image',title:a.seoTitle??a.title,description:a.description,images:a.featuredImage?[a.featuredImage.src]:undefined}
  };
}

export default async function Page({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const a=getArticle(slug);
  if(!a)notFound();
  const author=a.author??'Pratap Sharma';
  const storedEnhancement=getArticleEnhancement(a.slug);
  const enhancement=storedEnhancement??(a.quickAnswer&&a.keyTakeaways&&a.faq?{quickAnswer:a.quickAnswer,keyTakeaways:a.keyTakeaways,faq:a.faq}:undefined);
  const authorSchema={'@type':'Person','@id':site.url+'/authors/pratap#person',name:author,url:site.url+'/authors/pratap'};
  const citations=citationUrls(a.sources);

  return <div className="articlePage"><article className="articleWrap researchArticle">
    <JsonLd data={{'@context':'https://schema.org','@type':'BlogPosting',headline:a.title,description:a.description,datePublished:a.publishedAt,dateModified:a.updatedAt??a.publishedAt,mainEntityOfPage:site.url+'/articles/'+a.slug,author:authorSchema,image:a.featuredImage?.src,publisher:{'@id':site.url+'/#organization'},articleSection:a.category,about:a.tags.map(name=>({'@type':'Thing',name})),inLanguage:'en-IN',keywords:a.tags.join(', '),citation:citations.length?citations:undefined}}/>
    <Breadcrumbs items={[a.category==='Guru Bodha'?{label:'Gurus & Guru Bodha',href:'/guru'}:{label:'Stories',href:'/articles'},{label:a.title,href:'/articles/'+a.slug}]}/>
    <div className="eyebrow">{a.category}</div>
    <h1>{a.title}</h1>
    <p className="lede">{a.dek}</p>
    <div className="articleMeta">
      <span>{new Date(a.publishedAt).toLocaleDateString('en-IN',{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'})}</span>
      {a.updatedAt&&<><span>·</span><span>Updated {new Date(a.updatedAt).toLocaleDateString('en-IN',{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'})}</span></>}
      <span>·</span><span>{a.readingMinutes} min read</span><span>·</span>
      {a.author?<Link href="/authors/pratap" className="authorLink">{author}</Link>:<span>{author}</span>}
    </div>

    {a.featuredImage&&<figure className="articleFeaturedImage">
      <Image src={a.featuredImage.src} alt={a.featuredImage.alt} width={1280} height={720} sizes="(max-width: 920px) 100vw, 920px"/>
      {a.featuredImage.caption&&<figcaption>{a.featuredImage.caption}</figcaption>}
    </figure>}

    {enhancement&&<QuickAnswer answer={enhancement.quickAnswer} takeaways={enhancement.keyTakeaways}/>} 

    {a.tableOfContents&&<nav className="articleContents" aria-label="On this page"><details><summary>Explore this guide</summary><ol>{a.body.filter(s=>s.id&&s.heading).map(s=><li key={s.id}><a href={'#'+s.id}>{s.heading}</a></li>)}</ol></details></nav>}

    {a.slug==='diwali-2026-date-meaning-five-days-stories'&&<DiwaliOverview/>}

    <div className="articleBody">
      {a.body.map((s,i)=><section key={i} id={s.id}>
        {s.heading&&<h2>{s.heading}</h2>}
        {s.paragraphs.map((p,j)=><p key={j}><GuideText text={p}/></p>)}
        {s.table&&<div className="articleTableWrap" role="region" aria-label={s.table.caption} tabIndex={0}><table><caption>{s.table.caption}</caption><thead><tr>{s.table.headers.map(h=><th scope="col" key={h}>{h}</th>)}</tr></thead><tbody>{s.table.rows.map((row,j)=><tr key={j}>{row.map((cell,k)=>k===0?<th scope="row" key={k}><GuideText text={cell}/></th>:<td key={k}><GuideText text={cell}/></td>)}</tr>)}</tbody></table></div>}
        {s.image&&<figure className="articleInlineImage"><Image src={s.image.src} alt={s.image.alt} width={1280} height={720} sizes="(max-width: 760px) 100vw, 760px"/>{s.image.caption&&<figcaption>{s.image.caption}</figcaption>}</figure>}
        {s.items&&<ul className="articleList">{s.items.map(item=><li key={item}>{item}</li>)}</ul>}
      </section>)}
    </div>

    {enhancement&&<FaqSection items={enhancement.faq}/>} 

    {a.relatedLinks&&a.relatedLinks.length>0&&<section className="internalJourney">
      <div className="eyebrow">Continue inside RudraNāda</div>
      <div className="internalJourneyLinks">{a.relatedLinks.map(link=><Link href={link.href} key={link.href}>{link.label}<span>→</span></Link>)}</div>
    </section>}

    {a.sources&&a.sources.length>0&&<section className="articleSources">
      <div className="eyebrow">Research references</div>
      <h2>Texts and editions consulted</h2>
      <p className="sourceIntro">Linked to the source where a stable public reference is available.</p>
      {a.sources.map(source=>{const href=resolveSourceHref(source);return <div className="sourceReference" key={source.label}>{href?<strong><a href={href} target="_blank" rel="noreferrer">{source.label} ↗</a></strong>:<strong>{source.label}</strong>}{source.note&&<span>{source.note}</span>}</div>})}
    </section>}

    <div className="tagRow">{a.tags.map(t=><span className="tag" key={t}>{t}</span>)}</div>
  </article></div>
}
