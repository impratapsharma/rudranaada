import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {Breadcrumbs} from '@/components/Breadcrumbs';
import {JsonLd} from '@/components/JsonLd';
import {FaqSection} from '@/components/FaqSection';
import {GuideContents,GuideSections,GuideSources,GuideRelated,KandaReadingMap,KandaPagination,KandaDirectory} from '@/components/RamayanaGuide';
import {getKanda,kandaGuides,ramayanaSources,ramayanaUpdatedAt,readingMinutes} from '@/lib/ramayana';
import {site} from '@/lib/site';

export const dynamicParams=false;
export function generateStaticParams(){return kandaGuides.map(guide=>({kanda:guide.slug}));}
export async function generateMetadata({params}:{params:Promise<{kanda:string}>}):Promise<Metadata>{
  const guide=getKanda((await params).kanda);
  if(!guide)notFound();
  const url=site.url+'/ramayana/'+guide.slug;
  return {title:guide.title,description:guide.description,alternates:{canonical:url},robots:{index:true,follow:true},
    openGraph:{title:guide.title,description:guide.description,type:'article',url,publishedTime:ramayanaUpdatedAt,modifiedTime:ramayanaUpdatedAt},
    twitter:{card:'summary_large_image',title:guide.title,description:guide.description}};
}

export default async function Page({params}:{params:Promise<{kanda:string}>}){
  const guide=getKanda((await params).kanda);
  if(!guide)notFound();
  const sourceKeys=guide.number===7?[guide.sourceKey,'scholarship']:[guide.sourceKey];
  const contents=[...guide.sections.map(({id,heading})=>({id,heading})),{id:'chapter-guide',heading:'Chapter-range guide'},{id:'questions',heading:'Questions readers ask'},{id:'sources',heading:'Sources and edition'},{id:'all-kandas',heading:'All seven Kandas'}];
  return <article className="ramayanaGuide">
    <JsonLd data={{'@context':'https://schema.org','@type':'Article',headline:guide.title,description:guide.description,
      mainEntityOfPage:site.url+'/ramayana/'+guide.slug,datePublished:ramayanaUpdatedAt,dateModified:ramayanaUpdatedAt,inLanguage:'en-IN',
      author:{'@type':'Organization',name:site.name,url:site.url},publisher:{'@id':site.url+'/#organization'},
      isPartOf:{'@type':'CollectionPage',name:'Valmiki Ramayana reading guide',url:site.url+'/ramayana'},
      citation:sourceKeys.map(key=>ramayanaSources[key].href)}}/>
    <header className="guideHero shell">
      <Breadcrumbs items={[{label:'Ramayana',href:'/ramayana'},{label:guide.name,href:'/ramayana/'+guide.slug}]}/>
      <div className="eyebrow">Book {guide.number} of 7 <span aria-hidden="true">·</span> <span lang="sa">{guide.sanskrit}</span></div>
      <h1>{guide.title}</h1><p className="guideDek">{guide.dek}</p>
      <div className="guideMeta"><span>By RudraNāda</span><time dateTime={ramayanaUpdatedAt}>24 September 2026</time><span>{readingMinutes(guide)} min read</span></div>
      <div className="guideQuickAnswer"><strong>{guide.name} in brief</strong><p>{guide.summary}</p></div>
    </header>
    <div className="shell guideLayout">
      <aside className="guideSidebar"><GuideContents items={contents}/></aside>
      <div className="guideBody">
        <p className="guideEdition"><strong>About this reading:</strong> {guide.editionNote}</p>
        <GuideSections sections={guide.sections} guide={guide}/>
        <KandaReadingMap guide={guide}/>
        <div id="questions"><FaqSection items={guide.questions}/></div>
        <GuideRelated links={guide.related}/>
        <GuideSources sourceKeys={sourceKeys} editionNote={guide.editionNote}/>
        <KandaPagination guide={guide}/>
        <section id="all-kandas"><h2>Explore all seven Kandas</h2><KandaDirectory current={guide.slug}/></section>
      </div>
    </div>
  </article>;
}
