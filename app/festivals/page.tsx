import type {Metadata} from 'next';
import Link from 'next/link';
import {fullSongs} from '@/lib/content';
import {Breadcrumbs} from '@/components/Breadcrumbs';
import {MusicCard} from '@/components/MusicCard';
import {QuickAnswer} from '@/components/QuickAnswer';
import {FaqSection} from '@/components/FaqSection';
import {getHubEnhancement} from '@/lib/hub-enhancements';

export const metadata:Metadata={title:'Festivals: Stories, Meaning & Music',description:'Explore Ganesh Chaturthi, Nag Panchami, Dussehra and other Hindu festivals through their stories, regional traditions and RudraNāda music.',alternates:{canonical:'/festivals'},robots:{index:true,follow:true}};

const festivalSlugs=['aaya-re-ganpati','nag-panchami','mahakali'];

export default function Page(){
  const enhancement=getHubEnhancement('festivals');
  const releases=fullSongs.filter(v=>festivalSlugs.includes(v.slug));
  return <>
    <section className="pageHero"><div className="shell"><Breadcrumbs items={[{label:'Festivals',href:'/festivals'}]}/><div className="eyebrow">Festivals</div><h1>A festival is a story you can walk into.</h1><p>Music in the street, food in the kitchen, a vrata at home, a procession outside, a story remembered again. Festivals make philosophy physical.</p></div></section>

    <section className="section compactSection"><div className="shell"><div className="hubLongform"><QuickAnswer answer={enhancement.quickAnswer} takeaways={enhancement.keyTakeaways}/></div></div></section>

    <section className="section"><div className="shell">
      <div className="featuredEssay">
        <div className="eyebrow">Read before Navratri</div>
        <h2>Navratri 2026: beyond dates, colours and fasting lists.</h2>
        <p>Sharad Navratri begins on 11 October 2026. Our new guide follows the nine forms of Durga, separates textual tradition from later custom, and explains why the nine tithis stretch across ten calendar dates this year.</p>
        <Link href="/articles/navratri-2026-nine-forms-of-durga">Read the Navratri 2026 guide →</Link>
      </div>
    </div></section>

    <section className="section"><div className="shell copyColumns"><div><div className="eyebrow">Why traditions differ</div><h2>The same festival can carry a different memory in the next state, town or family.</h2></div><div className="sectionCopy"><p>Hindu festivals are not a single uniform calendar of identical practices. Regional history, temple traditions, local deities, family customs and different retellings can change what is emphasized and how it is celebrated.</p><p>Our festival guides will keep that diversity visible. We will distinguish a textual story from a regional custom instead of pretending one explanation covers everyone.</p></div></div></section>

    <section className="section"><div className="shell"><div className="sectionHead"><div><div className="eyebrow">From the music</div><h2>Three festivals, three very different moods.</h2></div><p>Ganpati arrives with drums. Nag Panchami can become a quiet prayer for protection. Dussehra can be heard through the fierce presence of Mahakali.</p></div><div className="grid3">{releases.map(v=><MusicCard entry={v} key={v.videoId}/>)}</div></div></section>

    <section className="section"><div className="shell"><div className="hubLongform"><FaqSection items={enhancement.faq}/></div></div></section>
  </>
}
