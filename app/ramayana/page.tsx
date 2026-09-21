import type {Metadata} from 'next';
import {fullSongs} from '@/lib/content';
import {Breadcrumbs} from '@/components/Breadcrumbs';
import {MusicCard} from '@/components/MusicCard';

export const metadata:Metadata={title:'Ramayana: Story, Devotion & Music',description:'Enter the Ramayana through Rama, Hanuman, exile, devotion, return and RudraNāda music while keeping different textual and regional tellings visible.',alternates:{canonical:'/ramayana'},robots:{index:true,follow:true}};

export default function Page(){
  const releases=fullSongs.filter(v=>v.themes.some(t=>['Ramayana','Rama','Hanuman'].includes(t)));
  return <>
    <section className="pageHero"><div className="shell"><Breadcrumbs items={[{label:'Ramayana',href:'/ramayana'}]}/><div className="eyebrow">Ramayana</div><h1>A promise is kept. A kingdom is left behind. The journey begins.</h1><p>The Ramayana is a story of exile and return, but it is also a long meditation on duty, love, loyalty, grief, kingship and devotion. It has been retold in many languages, regions and devotional traditions, and those voices do not always tell every moment in the same way.</p></div></section>

    <section className="section"><div className="shell copyColumns"><div><div className="eyebrow">One story, many tellings</div><h2>There is no need to erase the differences to love the Ramayana.</h2></div><div className="sectionCopy"><p>Valmiki’s Ramayana is a foundational Sanskrit text, but it is not the only Ramayana people have lived with. Tulsidas, Kamban, regional performance traditions, temple narratives and oral retellings have shaped how generations meet Rama, Sita, Lakshmana, Hanuman and Ravana.</p><p>RudraNāda will name those layers when they matter. A later devotional tradition can be spiritually powerful without being quietly presented as though it appears in the earliest text.</p></div></div></section>

    <section className="section"><div className="shell"><div className="sectionHead"><div><div className="eyebrow">Listen</div><h2>Sometimes the story begins with a name.</h2></div><p>Rama can be approached through epic narrative, but also through remembrance. The Ram Naam chant and our orchestral Ramayana release hold those two moods side by side.</p></div><div className="grid3">{releases.map(v=><MusicCard entry={v} key={v.videoId}/>)}</div></div></section>

    <section className="section sacredStatement"><div className="shell"><div className="eyebrow">The path ahead</div><h2>Rama is not the only center of the Ramayana.</h2><p>As this library grows, Sita, Hanuman, Lakshmana, Bharata, Ravana and the women, sages and kingdoms around them will receive their own space. The epic becomes richer when no single character is forced to carry the whole meaning.</p></div></section>
  </>
}
