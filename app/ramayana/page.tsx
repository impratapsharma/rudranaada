import type {Metadata} from 'next';
import Link from 'next/link';
import {Breadcrumbs} from '@/components/Breadcrumbs';
import {JsonLd} from '@/components/JsonLd';
import {FaqSection} from '@/components/FaqSection';
import {MusicCard} from '@/components/MusicCard';
import {GuideContents,GuideSections,GuideSources,KandaDirectory} from '@/components/RamayanaGuide';
import {ramayanaOverview as guide,ramayanaSources,ramayanaUpdatedAt,readingMinutes} from '@/lib/ramayana';
import {fullSongs} from '@/lib/music';
import {site} from '@/lib/site';

export const metadata:Metadata={
  title:'Valmiki Ramayana: Story, Seven Kandas & Characters',description:guide.description,
  alternates:{canonical:'/ramayana'},robots:{index:true,follow:true},
  openGraph:{title:guide.title,description:guide.description,type:'article',url:site.url+'/ramayana',modifiedTime:ramayanaUpdatedAt},
  twitter:{card:'summary_large_image',title:guide.title,description:guide.description}
};

const contents=[
  {id:'seven-kandas',heading:'The seven Kandas'},
  ...guide.sections.slice(0,2).map(({id,heading})=>({id,heading})),
  {id:'story-beginnings',heading:'The story in sequence'},
  {id:'characters',heading:'Characters and relationships'},
  {id:'places',heading:'Places in the narrative'},
  ...guide.sections.slice(9).map(({id,heading})=>({id,heading})),
  {id:'listen',heading:'Listen to RudraNāda'},
  {id:'questions',heading:'Questions readers ask'},
  {id:'sources',heading:'Sources and editions'}
];

export default function Page(){
  const releases=fullSongs.filter(song=>['ramayana-orchestral','ram-naam'].includes(song.slug));
  return <article className="ramayanaGuide">
    <JsonLd data={{'@context':'https://schema.org','@type':'Article',headline:guide.title,description:guide.description,
      mainEntityOfPage:site.url+'/ramayana',dateModified:ramayanaUpdatedAt,inLanguage:'en-IN',
      author:{'@type':'Organization',name:site.name,url:site.url},publisher:{'@id':site.url+'/#organization'},
      citation:Object.values(ramayanaSources).map(source=>source.href)}}/>
    <header className="guideHero shell">
      <Breadcrumbs items={[{label:'Ramayana',href:'/ramayana'}]}/>
      <div className="eyebrow">The epics · A reading guide</div>
      <h1>{guide.title}</h1><p className="guideDek">{guide.dek}</p>
      <div className="guideMeta"><span>By RudraNāda</span><span>Updated <time dateTime={ramayanaUpdatedAt}>24 September 2026</time></span><span>{readingMinutes(guide)} min read</span></div>
      <div className="guideQuickAnswer"><strong>In brief</strong><p>{guide.summary}</p></div>
    </header>
    <div className="shell guideLayout">
      <aside className="guideSidebar"><GuideContents items={contents}/></aside>
      <div className="guideBody">
        <section id="seven-kandas"><div className="eyebrow">Choose a book</div><h2>The seven Kandas of the Ramayana</h2><p>Follow the story in order, or enter through a book you want to understand more closely. Every guide includes its own narrative, chapter ranges and source notes.</p><KandaDirectory/></section>
        <GuideSections sections={guide.sections.slice(0,9)}/>
        <section id="characters"><h2>The main characters and their relationships</h2>
          <div className="guideTableScroll" role="region" aria-label="Ramayana characters" tabIndex={0}><table><caption>People whose choices shape the epic</caption><thead><tr><th scope="col">Character</th><th scope="col">Relationship and role</th></tr></thead><tbody>{guide.characters.map(([name,relationship,role])=><tr key={name}><th scope="row">{name}</th><td><strong>{relationship}</strong><p>{role}</p></td></tr>)}</tbody></table></div>
          <p>Continue with the existing guides to <Link href="/deities/hanuman">Hanuman</Link> and <Link href="/deities/parashurama">Parashurama</Link>.</p>
        </section>
        <section id="places"><h2>Where the story unfolds</h2><p>This is a guide to the places’ narrative roles. Modern geographical identifications and claims about exact routes or historical dates require separate evidence.</p><dl className="guidePlaces">{guide.places.map(([name,role])=><div key={name}><dt>{name}</dt><dd>{role}</dd></div>)}</dl></section>
        <GuideSections sections={guide.sections.slice(9)}/>
        <section id="listen"><div className="eyebrow">From story to sound</div><h2>Listen to RudraNāda</h2><p>Our music offers an artistic response to the epic and to living devotion. It is distinct from the source text and the narrative explanations above.</p><div className="guideMusic">{releases.map(song=><MusicCard key={song.videoId} entry={song}/>)}</div></section>
        <div id="questions"><FaqSection items={guide.questions}/></div>
        <GuideSources sourceKeys={Object.keys(ramayanaSources)}/>
      </div>
    </div>
  </article>;
}
