import {GuideRelated} from '@/components/RamayanaGuide';
import {ramayanaConnections} from '@/lib/ramayana';
import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {getMusic,music,deityHubs} from '@/lib/content';
import {getRichMusic} from '@/lib/rich-music';
import {formatDate,formatDuration,formatIsoDuration,getDisplayTitle} from '@/lib/music-format';
import {site} from '@/lib/site';
import {Breadcrumbs} from '@/components/Breadcrumbs';
import {JsonLd} from '@/components/JsonLd';
import {MusicCard} from '@/components/MusicCard';

export function generateStaticParams(){return music.map(m=>({slug:m.slug}));}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const m=getMusic((await params).slug);
  if(!m)return {};
  const rich=getRichMusic(m.slug);
  const title=rich?.seoTitle ?? m.title;
  const description=rich?.metaDescription ?? m.summary;
  return {
    title,
    description,
    alternates:{canonical:'/music/'+m.slug},
    robots:{index:m.format==='video',follow:true},
    openGraph:{title,description,url:site.url+'/music/'+m.slug,type:'video.other',images:[{url:m.thumbnail}]},
    twitter:{card:'summary_large_image',title,description,images:[m.thumbnail]}
  };
}

export default async function Page({params}:{params:Promise<{slug:string}>}){
  const m=getMusic((await params).slug);
  if(!m)notFound();
  const rich=getRichMusic(m.slug);
  const displayTitle=rich?.displayTitle ?? getDisplayTitle(m.slug,m.title);
  const related=music.filter(v=>v.videoId!==m.videoId&&v.format==='video'&&v.themes.some(t=>m.themes.includes(t))).sort((a,b)=>Number(b.videoId===m.relatedVideoId)-Number(a.videoId===m.relatedVideoId)).slice(0,3);
  const hubs=deityHubs.filter(d=>m.themes.some(t=>t.toLowerCase()===d.name.toLowerCase()));

  const schemas:Record<string,unknown>[]=[{
    '@context':'https://schema.org',
    '@type':'VideoObject',
    name:m.title,
    description:m.description||m.summary,
    thumbnailUrl:m.thumbnail,
    uploadDate:m.publishedAt,
    duration:formatIsoDuration(m.durationSeconds),
    embedUrl:`https://www.youtube-nocookie.com/embed/${m.videoId}`,
    url:site.url+'/music/'+m.slug,
    sameAs:m.youtubeUrl,
    creator:{'@type':'Organization',name:'RudraNāda',url:site.url}
  }];

  return <>
    <article className="articleWrap musicArticle">
      <JsonLd data={schemas}/>
      <Breadcrumbs items={[{label:'Music',href:'/music'},{label:displayTitle,href:'/music/'+m.slug}]}/>
      <div className="eyebrow">{m.eyebrow}</div>
      <h1>{displayTitle}</h1>
      <p className="lede">{rich?.dek ?? m.summary}</p>
      <div className="articleMeta">
        <span>{m.format==='short'?'YouTube Short':'Full video'}</span>
        <span>{formatDuration(m.durationSeconds)}</span>
        <time dateTime={m.publishedAt}>{formatDate(m.publishedAt)}</time>
      </div>
      <div className={`videoEmbed${m.format==='short'?' videoEmbedShort':''}`}>
        <iframe src={`https://www.youtube-nocookie.com/embed/${m.videoId}`} title={m.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"/>
      </div>
      <div className="heroActions">
        <a className="button" href={m.youtubeUrl} target="_blank" rel="noreferrer">Watch on YouTube ↗</a>
        {m.themes.includes('Mahabharata') && <Link className="button buttonGhost" href="/mahabharata">Explore Mahabharata</Link>}
        {!m.themes.includes('Mahabharata') && <Link className="button buttonGhost" href="/music">Explore all music</Link>}
      </div>

      {rich ? <>
        <section className="answerBlock">
          <div className="eyebrow">In brief</div>
          <p className="answerLead">{rich.quickAnswer}</p>
          <ul>{rich.keyTakeaways.map(item=><li key={item}>{item}</li>)}</ul>
        </section>
        <div className="callout richNote"><strong>Before you read</strong><p>{rich.editorialNote}</p></div>

        <div className="articleBody">
          <h2>{rich.contextHeading}</h2>
          {rich.context.map((paragraph,index)=><p key={index}>{paragraph}</p>)}

          <h2>The lyrics</h2>
          <p className="sectionIntro">{rich.lyricsIntro}</p>
          <div className="lyrics">
            {rich.lyrics.map(section=><section className="lyricSection" key={section.label}>
              <h3>{section.label}</h3>
              <p className="lyricOriginal">{section.lines.map((line,index)=><span className="lyricLine" key={index}>{line}</span>)}</p>
              {section.transliteration&&<p className="lyricTransliteration">{section.transliteration.map((line,index)=><span className="lyricLine" key={index}>{line}</span>)}</p>}
            </section>)}
          </div>

          <h2>{rich.meaningsHeading}</h2>
          <div className="meaningGrid">
            {rich.meanings.map(item=><section className="meaningCard" key={item.heading}><h3>{item.heading}</h3><p>{item.text}</p></section>)}
          </div>

          <h2>{rich.referencesHeading}</h2>
          <p className="sectionIntro">{rich.referencesIntro}</p>
          <div className="referenceList">
            {rich.references.map(ref=><section className="referenceItem" key={ref.verse}>
              <div className="referenceVerse">{ref.verse}</div>
              <h3>{ref.title}</h3>
              <p>{ref.note}</p>
              <div className="referenceSource">{ref.source ?? 'Reference checked: IIT Kanpur Gita Supersite'}</div>
            </section>)}
          </div>

          <h2>Questions listeners ask</h2>
          <div className="faqList">
            {rich.faq.map(item=><details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}
          </div>

          <div className="sourceNote">{rich.sourceNote}</div>
        </div>
      </> : m.description && <div className="articleBody"><h2>About the song</h2><div className="releaseDescription">{m.description}</div></div>}

      {ramayanaConnections[m.slug]&&<GuideRelated links={ramayanaConnections[m.slug]}/>}
      <div className="tagRow">{m.themes.map(t=><span className="tag" key={t}>{t}</span>)}</div>
      {hubs.length>0&&<div className="heroActions">{hubs.map(d=><Link key={d.slug} href={'/deities/'+d.slug}>Explore {d.name} →</Link>)}</div>}
    </article>

    {related.length>0&&<section className="section"><div className="shell"><div className="sectionHead"><div><div className="eyebrow">Stay in this world</div><h2>More from the same story-world</h2></div></div><div className="grid3">{related.map(v=><MusicCard key={v.videoId} entry={v}/>)}</div></div></section>}
  </>;
}
