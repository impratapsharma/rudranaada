import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {festivalGuides,getFestivalGuide} from '@/lib/festival-guides';
import {site} from '@/lib/site';
import {Breadcrumbs} from '@/components/Breadcrumbs';
import {JsonLd} from '@/components/JsonLd';
import {getArticleEnhancement} from '@/lib/article-enhancements';
import {QuickAnswer} from '@/components/QuickAnswer';
import {FaqSection} from '@/components/FaqSection';
import {DiwaliOverview} from '@/components/DiwaliOverview';

export function generateStaticParams(){return festivalGuides.map(guide=>({slug:guide.slug}))}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;
  const guide=getFestivalGuide(slug);
  if(!guide)return{};
  return {
    title:guide.seoTitle??guide.title,
    description:guide.description,
    alternates:{canonical:'/festivals/'+guide.slug},
    authors:[{name:guide.author??'Pratap Sharma',url:'/authors/pratap'}],
    openGraph:{type:'article',title:guide.seoTitle??guide.title,description:guide.description,url:site.url+'/festivals/'+guide.slug,publishedTime:guide.publishedAt,modifiedTime:guide.updatedAt??guide.publishedAt,tags:guide.tags,authors:[guide.author??'Pratap Sharma'],images:guide.featuredImage?[{url:guide.featuredImage.src,alt:guide.featuredImage.alt}]:undefined},
    twitter:{card:'summary_large_image',title:guide.seoTitle??guide.title,description:guide.description,images:guide.featuredImage?[guide.featuredImage.src]:undefined}
  };
}

export default async function Page({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const guide=getFestivalGuide(slug);
  if(!guide)notFound();
  const author=guide.author??'Pratap Sharma';
  const enhancement=getArticleEnhancement(guide.slug);

  return <div className="articlePage festivalGuidePage"><article className="articleWrap researchArticle">
    <JsonLd data={{'@context':'https://schema.org','@type':'Article',headline:guide.title,description:guide.description,datePublished:guide.publishedAt,dateModified:guide.updatedAt??guide.publishedAt,mainEntityOfPage:site.url+'/festivals/'+guide.slug,author:{'@type':'Person',name:author,url:site.url+'/authors/pratap'},image:guide.featuredImage?.src,publisher:{'@id':site.url+'/#organization'},articleSection:'Festivals',about:guide.tags.map(name=>({'@type':'Thing',name})),inLanguage:'en-IN',keywords:guide.tags.join(', ')}}/>

    <Breadcrumbs items={[{label:'Festivals',href:'/festivals'},{label:guide.title,href:'/festivals/'+guide.slug}]}/>
    <div className="eyebrow">Festival guide</div>
    <h1>{guide.title}</h1>
    <p className="lede">{guide.dek}</p>

    <div className="articleMeta">
      <span>{new Date(guide.publishedAt).toLocaleDateString('en-IN',{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'})}</span>
      {guide.updatedAt&&<><span>·</span><span>Updated {new Date(guide.updatedAt).toLocaleDateString('en-IN',{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'})}</span></>}
      <span>·</span><span>{guide.readingMinutes} min read</span><span>·</span><Link href="/authors/pratap" className="authorLink">{author}</Link>
    </div>

    {guide.featuredImage&&<figure className="articleFeaturedImage"><img src={guide.featuredImage.src} alt={guide.featuredImage.alt}/>{guide.featuredImage.caption&&<figcaption>{guide.featuredImage.caption}</figcaption>}</figure>}
    {enhancement&&<QuickAnswer answer={enhancement.quickAnswer} takeaways={enhancement.keyTakeaways}/>}
    {guide.slug==='diwali'&&<DiwaliOverview/>}

    <div className="articleBody">
      {guide.body.map((section,index)=><section key={index}>
        {section.heading&&<h2>{section.heading}</h2>}
        {section.paragraphs.map((paragraph,pIndex)=><p key={pIndex}>{paragraph}</p>)}
        {section.image&&<figure className="articleInlineImage"><img src={section.image.src} alt={section.image.alt} loading="lazy"/>{section.image.caption&&<figcaption>{section.image.caption}</figcaption>}</figure>}
        {section.items&&<ul className="articleList">{section.items.map(item=><li key={item}>{item}</li>)}</ul>}
      </section>)}
    </div>

    {enhancement&&<FaqSection items={enhancement.faq}/>}
    {guide.relatedLinks&&guide.relatedLinks.length>0&&<section className="internalJourney"><div className="eyebrow">Continue inside RudraNāda</div><div className="internalJourneyLinks">{guide.relatedLinks.map(link=><Link href={link.href} key={link.href}>{link.label}<span>→</span></Link>)}</div></section>}
    {guide.sources&&guide.sources.length>0&&<section className="articleSources"><div className="eyebrow">Research references</div><h2>Texts and references consulted</h2><p className="sourceIntro">Listed for transparency. These are references, not outbound links.</p>{guide.sources.map(source=><div className="sourceReference" key={source.label}><strong>{source.label}</strong>{source.note&&<span>{source.note}</span>}</div>)}</section>}
    <div className="tagRow">{guide.tags.map(tag=><span className="tag" key={tag}>{tag}</span>)}</div>
  </article></div>;
}
