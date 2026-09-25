import type {Metadata} from 'next';
import Link from 'next/link';
import {fullSongs} from '@/lib/content';
import {Breadcrumbs} from '@/components/Breadcrumbs';
import {MusicCard} from '@/components/MusicCard';
import {JsonLd} from '@/components/JsonLd';
import {site} from '@/lib/site';
import {QuickAnswer} from '@/components/QuickAnswer';
import {FaqSection} from '@/components/FaqSection';
import {getHubEnhancement} from '@/lib/hub-enhancements';

export const metadata:Metadata={title:'Mahabharata: Stories, Characters & RudraNāda Music',description:'Explore the Mahabharata through Krishna, Arjuna, Karna, Abhimanyu, Draupadi, Bhishma, Kurukshetra, the Bhagavad Gita and RudraNāda music.',alternates:{canonical:'/mahabharata'},robots:{index:true,follow:true}};

const pathways=[
  {title:'Krishna & Arjuna',text:'A warrior lowers his bow. His charioteer begins to speak. The Bhagavad Gita starts inside that silence.',href:'/music/uth-parth'},
  {title:'Karna',text:'Born with greatness, denied belonging, bound by loyalty. Karna makes every easy judgment uncomfortable.',href:'/music/surya-putra-karna'},
  {title:'Abhimanyu',text:'Young, brilliant and trapped inside the Chakravyuha. His last battle carries courage and tragedy in equal measure.',href:'/music/abhimanyus-last-battle'},
  {title:'Draupadi',text:'Born from fire, humiliated in a royal court, never reduced to the suffering done to her.',href:'/music/draupadi-agni-ki-putri'},
  {title:'Bhishma',text:'A vow that becomes a destiny. A life spent holding together a house that is already breaking apart.',href:'/music/bhishmas-final-moments'}
];

export default function Page(){
  const enhancement=getHubEnhancement('mahabharata');
  const releases=fullSongs.filter(v=>v.themes.includes('Mahabharata'));
  const uthParth=releases.find(v=>v.slug==='uth-parth');
  return <>
    <JsonLd data={{'@context':'https://schema.org','@type':'CollectionPage',name:'Mahabharata | RudraNāda',description:'RudraNāda music and story pathways through the Mahabharata.',url:site.url+'/mahabharata',mainEntity:{'@type':'ItemList',itemListElement:releases.map((v,index)=>({'@type':'ListItem',position:index+1,name:v.title,url:site.url+'/music/'+v.slug}))}}}/>

    <section className="pageHero mahabharataHero"><div className="shell"><Breadcrumbs items={[{label:'Mahabharata',href:'/mahabharata'}]}/><div className="eyebrow">Mahabharata</div><h1>The Mahabharata does not give easy people easy choices.</h1><p>Vows become burdens. Loyalty becomes dangerous. Dharma changes shape depending on who is standing where. We enter the epic through the people who had to choose.</p>{uthParth&&<div className="heroActions"><Link className="button" href="/music/uth-parth">Begin on Kurukshetra</Link><Link className="button buttonGhost" href="/music">Hear all music</Link></div>}</div></section>

    <section className="section compactSection"><div className="shell"><div className="hubLongform"><QuickAnswer answer={enhancement.quickAnswer} takeaways={enhancement.keyTakeaways}/></div></div></section>

    <section className="section"><div className="shell"><div className="sectionHead"><div><div className="eyebrow">Before the teaching</div><h2>First, Arjuna’s hand begins to tremble.</h2></div><p>The Bhagavad Gita does not begin with a calm philosopher asking a tidy question. It begins with a warrior looking at teachers, relatives and friends across the battlefield and losing the will to act.</p></div>{uthParth&&<div className="featuredRelease"><MusicCard entry={uthParth}/><div className="featuredCopy"><h3>Uth Parth</h3><p>The song follows that movement from collapse to action. Its page now includes the lyrics, their meaning, the Kurukshetra setting and the Gita verses behind lines about the self, karma, Vishwaroopa and Time.</p><Link href="/music/uth-parth">Enter the song and the Gita behind it →</Link></div></div>}</div></section>

    <section className="section"><div className="shell"><div className="sectionHead"><div><div className="eyebrow">Five lives</div><h2>Five ways into the same war.</h2></div><p>You do not need to understand the entire Mahabharata before it can speak to you. Begin with one life. The rest of the epic will slowly gather around it.</p></div><div className="pathwayGrid">{pathways.map(item=><Link className="pathwayCard" href={item.href} key={item.title}><span>{item.title}</span><p>{item.text}</p><strong>Enter →</strong></Link>)}</div></div></section>

    <section className="section"><div className="shell">
      <div className="featuredEssay">
        <div className="eyebrow">A harder look at Karna</div>
        <h2>Karna becomes smaller when we make him only a victim or only a villain.</h2>
        <p>Our new essay follows his birth, Duryodhana, Draupadi, his kavach and kundal, Kunti and his death, including the manuscript question around Draupadi’s famous svayamvara rejection.</p>
        <Link href="/articles/karna-mahabharata-story-text-popular-retellings">Read the Karna essay →</Link>
      </div>
    </div></section>

    <section className="section"><div className="shell"><div className="sectionHead"><div><div className="eyebrow">Mahabharata in music</div><h2>Hear the epic through its people.</h2></div><p>These songs do not replace the text. They give a character, a vow or a moment enough emotional weight to make you want to return to the story.</p></div><div className="grid3">{releases.map(v=><MusicCard entry={v} key={v.videoId}/>)}</div></div></section>

    <section className="section sacredStatement"><div className="shell"><div className="eyebrow">How we tell it</div><h2>We would rather say “this is a later telling” than make the story sound simpler than it is.</h2><p>When a song follows a specific passage, we point to it. When a beloved detail comes from a later or regional tradition, we name that layer. When RudraNāda invents a line for dramatic effect, we call it our interpretation.</p></div></section>

    <section className="section"><div className="shell"><div className="hubLongform"><FaqSection items={enhancement.faq}/></div></div></section>
  </>
}
