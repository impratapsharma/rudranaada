import type {Metadata} from 'next';
import Link from 'next/link';
import {fullSongs} from '@/lib/content';
import {Breadcrumbs} from '@/components/Breadcrumbs';
import {MusicCard} from '@/components/MusicCard';

export const metadata:Metadata={title:'Mantras, Stotras & Sacred Sound',description:'Understand the difference between mantra, stotra, nāma-japa and mahāvākya, and listen to RudraNāda sacred-sound recordings with context.',alternates:{canonical:'/mantras'},robots:{index:true,follow:true}};

const featuredSlugs=['kalabhairava-ashtakam','om-namo-narayanaya','om-namo-narayanaya-meditation','om-namah-shivaya-meditation','ram-naam','aham-brahmasmi'];

export default function Page(){
  const releases=fullSongs.filter(v=>featuredSlugs.includes(v.slug));
  return <>
    <section className="pageHero"><div className="shell"><Breadcrumbs items={[{label:'Mantras',href:'/mantras'}]}/><div className="eyebrow">Sacred sound</div><h1>Some words are meant to be understood. Some are also meant to be repeated.</h1><p>This library is for listening with a little more care: what the words mean, what kind of sacred text or practice they belong to, and where a modern musical setting begins.</p></div></section>

    <section className="section"><div className="shell"><div className="sectionHead"><div><div className="eyebrow">First, a useful distinction</div><h2>Not everything sacred and Sanskrit is a mantra.</h2></div><p>Mantra, stotra, nāma-japa and mahāvākya can all enter devotional practice, but they are not interchangeable labels.</p></div><div className="grid4">
      <div className="card"><h3>Mantra</h3><p>A sacred utterance or formula used in recitation, contemplation or ritual. Meaning matters, but so can sound, transmission and practice.</p></div>
      <div className="card"><h3>Stotra</h3><p>A hymn of praise, often poetic and longer in form. Kalabhairava Ashtakam belongs here, not in the same category as a short mantra.</p></div>
      <div className="card"><h3>Nāma-japa</h3><p>The repeated remembrance of a divine name. Ram Naam is powerful precisely because the practice can be simple.</p></div>
      <div className="card"><h3>Mahāvākya</h3><p>A “great saying” of the Upanishadic tradition. Aham Brahmasmi is a mahāvākya, even when modern music places it inside a chant or meditation.</p></div>
    </div></div></section>

    <section className="section"><div className="shell">
      <div className="featuredEssay">
        <div className="eyebrow">Go deeper</div>
        <h2>What does Om Namah Shivaya actually mean?</h2>
        <p>We trace the mantra back to Sri Rudram, explain why Namaḥ Śivāya is called Panchakshara, separate the Vedic phrase from later five-element symbolism, and draw a careful line around modern claims about mantra “benefits.”</p>
        <Link href="/articles/om-namah-shivaya-meaning-origin-panchakshara">Read the Om Namah Shivaya guide →</Link>
      </div>
    </div></section>

    <section className="section"><div className="shell"><div className="sectionHead"><div><div className="eyebrow">Listen</div><h2>Let repetition become attention.</h2></div><p>These RudraNāda recordings move from stotra to mantra, nāma-japa and contemplative music. Listen for the differences in form instead of treating every sacred phrase as the same kind of chant.</p></div><div className="grid3">{releases.map(v=><MusicCard entry={v} key={v.videoId}/>)}</div></div></section>
  </>
}
