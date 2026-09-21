import type {Metadata} from 'next';
import Link from 'next/link';
import {fullSongs} from '@/lib/content';
import {Breadcrumbs} from '@/components/Breadcrumbs';
import {MusicCard} from '@/components/MusicCard';
import {JsonLd} from '@/components/JsonLd';
import {site} from '@/lib/site';

export const metadata: Metadata = {
  title: 'Mahabharata: Stories, Characters & RudraNāda Music',
  description: 'Explore the Mahabharata through RudraNāda songs and story guides on Krishna, Arjuna, Karna, Abhimanyu, Draupadi, Bhishma, Kurukshetra and the Bhagavad Gita.',
  alternates: {canonical: '/mahabharata'},
  robots: {index: true, follow: true},
};

const pathways=[
  {title:'Krishna & Arjuna',text:'Begin at the chariot on Kurukshetra, where Arjuna’s crisis becomes the setting of the Bhagavad Gita.',href:'/music/uth-parth'},
  {title:'Karna',text:'Follow the tragedy of Surya Putra Karna: birth, identity, loyalty, generosity and his place in the war.',href:'/music/surya-putra-karna'},
  {title:'Abhimanyu',text:'Enter the Chakravyuha through the story of the young warrior whose final battle became one of the epic’s most remembered episodes.',href:'/music/abhimanyus-last-battle'},
  {title:'Draupadi',text:'Explore Draupadi as a central force in the Mahabharata, from her birth from fire to the humiliation that reshapes the political and moral conflict.',href:'/music/draupadi-agni-ki-putri'},
  {title:'Bhishma',text:'Meet the grandsire whose vows, loyalties and final moments bind together generations of the Kuru story.',href:'/music/bhishmas-final-moments'},
];

export default function Page(){
  const releases=fullSongs.filter(video=>video.themes.includes('Mahabharata'));
  const uthParth=releases.find(video=>video.slug==='uth-parth');
  return <>
    <JsonLd data={{
      '@context':'https://schema.org',
      '@type':'CollectionPage',
      name:'Mahabharata | RudraNāda',
      description:'RudraNāda music and story pathways through the Mahabharata.',
      url:site.url+'/mahabharata',
      hasPart:releases.map(video=>({'@type':'VideoObject',name:video.title,url:site.url+'/music/'+video.slug}))
    }}/>

    <section className="pageHero mahabharataHero">
      <div className="shell">
        <Breadcrumbs items={[{label:'Mahabharata',href:'/mahabharata'}]}/>
        <div className="eyebrow">Epic library</div>
        <h1>The Mahabharata, through story and sound.</h1>
        <p>A growing RudraNāda journey through Krishna, Arjuna, Karna, Abhimanyu, Draupadi, Bhishma and the questions of dharma that connect them.</p>
        {uthParth&&<div className="heroActions"><Link className="button" href="/music/uth-parth">Start with Uth Parth</Link><Link className="button buttonGhost" href="/music">Browse all music</Link></div>}
      </div>
    </section>

    <section className="section">
      <div className="shell">
        <div className="sectionHead">
          <div><div className="eyebrow">Start here</div><h2>Why Uth Parth is the doorway.</h2></div>
          <p>The Bhagavad Gita begins inside a human crisis. Arjuna sees teachers, elders, relatives and friends across the battlefield, loses the will to fight, and turns to Krishna. Uth Parth follows that movement from collapse toward clarity and action.</p>
        </div>
        {uthParth&&<div className="featuredRelease"><MusicCard entry={uthParth}/><div className="featuredCopy"><h3>From paralysis to action</h3><p>The flagship Uth Parth page now pairs the song with its lyrics, meaning, Kurukshetra context, Vishwaroopa imagery and direct Bhagavad Gita references. It also labels RudraNāda’s artistic paraphrases clearly instead of presenting them as scripture.</p><Link href="/music/uth-parth">Read the lyrics and Gita context →</Link></div></div>}
      </div>
    </section>

    <section className="section">
      <div className="shell">
        <div className="sectionHead">
          <div><div className="eyebrow">Five entry points</div><h2>Meet the people carrying the epic.</h2></div>
          <p>The Mahabharata is too large to flatten into a single summary. These paths begin with individual lives and let the larger conflict emerge around them.</p>
        </div>
        <div className="pathwayGrid">
          {pathways.map(item=><Link className="pathwayCard" href={item.href} key={item.title}><span>{item.title}</span><p>{item.text}</p><strong>Explore →</strong></Link>)}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="shell">
        <div className="sectionHead">
          <div><div className="eyebrow">RudraNāda Mahabharata</div><h2>Listen through the epic.</h2></div>
          <p>Each release is becoming a connected page with video, context, meaning and links into the people and events around it.</p>
        </div>
        <div className="grid3">{releases.map(video=><MusicCard entry={video} key={video.videoId}/>)}</div>
      </div>
    </section>

    <section className="section">
      <div className="shell readingPath">
        <div><div className="eyebrow">How we read it</div><h2>Text first. Tradition labelled. Art kept honest.</h2></div>
        <div className="readingPrinciples">
          <p><strong>Scripture:</strong> When a song echoes a specific Bhagavad Gita or Mahabharata passage, we point to the textual reference.</p>
          <p><strong>Tradition:</strong> Later retellings and regional traditions are valuable, but they are identified as later traditions rather than silently folded into the earliest text.</p>
          <p><strong>RudraNāda:</strong> Our songs use compression, metaphor and cinematic imagery. We label artistic interpretation as interpretation.</p>
        </div>
      </div>
    </section>
  </>;
}
