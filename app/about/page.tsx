import type {Metadata} from 'next';
import Link from 'next/link';
import {Breadcrumbs} from '@/components/Breadcrumbs';
import {QuickAnswer} from '@/components/QuickAnswer';
import {FaqSection} from '@/components/FaqSection';
import {getHubEnhancement} from '@/lib/hub-enhancements';

export const metadata:Metadata={title:'About RudraNāda',description:'Why RudraNāda brings devotional music, Indian epics, sacred stories and reflective writing together.',alternates:{canonical:'/about'}};

export default function Page(){const enhancement=getHubEnhancement('about');return <>
  <section className="pageHero"><div className="shell"><Breadcrumbs items={[{label:'About',href:'/about'}]}/><div className="eyebrow">About RudraNāda</div><h1>The old stories were never meant to sit quietly on a shelf.</h1><p>They were recited, sung, argued over, remembered in homes, carried into temples and returned to when life became difficult. RudraNāda is our way of keeping that living conversation alive.</p></div></section>
  <section className="section compactSection"><div className="shell"><div className="hubLongform"><QuickAnswer answer={enhancement.quickAnswer} takeaways={enhancement.keyTakeaways}/></div></div></section>

  <section className="section"><div className="shell copyColumns"><div><div className="eyebrow">Why music</div><h2>Sometimes the ear reaches a truth before the mind is ready to explain it.</h2></div><div className="sectionCopy"><p>A song can do something an index cannot. It can make Kurukshetra feel close. It can turn the name of Rama into breath. It can make the fierceness of Kali feel less like fear and more like refuge.</p><p>That is where RudraNāda begins. We create original devotional and epic music, then open the story behind the sound: lyrics, meaning, characters, philosophy, textual references and the traditions that carried these ideas forward.</p></div></div></section>

  <section className="section"><div className="shell"><div className="sectionHead"><div><div className="eyebrow">What belongs here</div><h2>Music is the doorway, not the boundary.</h2></div></div><div className="grid4">
    <Link className="card" href="/music"><h3>Music</h3><p>Original songs, chants, meditations and cinematic retellings.</p></Link>
    <Link className="card" href="/mahabharata"><h3>Epics</h3><p>Characters and moments from the Mahabharata and Ramayana, told without rushing past their difficult questions.</p></Link>
    <Link className="card" href="/guru"><h3>Guru Bodha</h3><p>Reflections on teachers, students, inquiry, discipline and the inner work of understanding.</p></Link>
    <Link className="card" href="/mantras"><h3>Sacred sound</h3><p>Mantras, stotras, nāma-japa and their meanings, kept distinct rather than thrown into one bucket.</p></Link>
  </div></div></section>

  <section className="section sacredStatement"><div className="shell"><div className="eyebrow">A small promise</div><h2>Devotion is not an excuse to be careless.</h2><p>We will not invent Sanskrit to make a line sound ancient. We will not call a modern lyric a scripture verse. We will not quietly merge Valmiki, later retellings, regional tradition and our own imagination into one voice. Where the layers differ, we will say so.</p></div></section>

  <section className="section"><div className="shell copyColumns"><div><div className="eyebrow">What we hope remains</div><h2>Not more information. Better remembrance.</h2></div><div className="sectionCopy"><p>The internet already contains more facts than a person can hold. RudraNāda is interested in what stays after the tab is closed.</p><p>A verse you return to. A story that becomes clearer when you are older. A song that changes the atmosphere of a room. A question that follows you long enough to become practice.</p><p>That is the work.</p></div></div></section>
  <section className="section"><div className="shell"><div className="hubLongform"><FaqSection items={enhancement.faq}/></div></div></section>
</>}
