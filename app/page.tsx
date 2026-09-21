import {MusicCard} from '@/components/MusicCard';
import Link from 'next/link';
import {articles,deityHubs,fullSongs} from '@/lib/content';
import {site} from '@/lib/site';

const pillars=[
  ['Mahabharata','Dharma becomes difficult when every choice has a cost. Enter through Krishna, Arjuna, Karna, Draupadi, Bhishma and Abhimanyu.','/mahabharata'],
  ['Ramayana','Exile, loyalty, love, kingship, loss and return across one of India’s most beloved story traditions.','/ramayana'],
  ['Deities','Meet Krishna, Shiva, Devi, Hanuman, Narasimha and Parashurama through story, song and devotion.','/deities'],
  ['Guru Bodha','Reflections on the guru, the student, inquiry, discipline and what it means to truly learn.','/guru'],
  ['Mantras','Listen, understand and learn the difference between mantra, stotra, nāma-japa and sacred sayings.','/mantras']
];

export default function Home(){return <>
  <section className="hero"><div className="shell heroGrid"><div>
    <div className="eyebrow">Devotional music · Epics · Wisdom</div>
    <h1>Listen first.<br/>Then go deeper.</h1>
    <p>RudraNāda brings the Mahabharata, Ramayana, bhakti and sacred sound into one living space through original music, stories and reflection.</p>
    <div className="heroActions"><Link className="button" href="/music">Listen to RudraNāda</Link><Link className="button buttonGhost" href="/articles">Read the stories</Link></div>
  </div><div className="heroSeal" aria-label="RudraNāda sacred sound motif"><span>नाद</span></div></div></section>

  <section className="section"><div className="shell">
    <div className="sectionHead"><div><div className="eyebrow">Where to begin</div><h2>Follow the question that brought you here.</h2></div><p>A battlefield, a name of God, a teacher, a mantra, a story heard in childhood. There is no single doorway into these traditions.</p></div>
    <div className="grid5">{pillars.map(([title,text,href])=><Link className="card pillarCard" href={href} key={href}><div><strong>{title}</strong><p>{text}</p></div></Link>)}</div>
  </div></section>

  <section className="section"><div className="shell">
    <div className="sectionHead"><div><div className="eyebrow">Original music</div><h2>Songs born from the stories.</h2></div><Link href="/music">Hear the full catalogue →</Link></div>
    <div className="grid3">{fullSongs.slice(0,3).map(e=><MusicCard key={e.videoId} entry={e}/>)}</div>
  </div></section>

  <section className="section"><div className="shell">
    <div className="sectionHead"><div><div className="eyebrow">Stories & reflections</div><h2>When the song leaves you with a question.</h2></div><Link href="/articles">Read all →</Link></div>
    {articles.map(a=><Link className="listLink" href={'/articles/'+a.slug} key={a.slug}><div><div className="cardMeta">{a.category} · {a.readingMinutes} min</div><h3>{a.title}</h3><p>{a.dek}</p></div><span>→</span></Link>)}
  </div></section>

  <section className="section"><div className="shell">
    <div className="sectionHead"><div><div className="eyebrow">Devotion has many forms</div><h2>Different names. Different moods of the sacred.</h2></div><Link href="/deities">Explore all →</Link></div>
    <div className="grid3">{deityHubs.map(d=><Link className="card" href={'/deities/'+d.slug} key={d.slug}><h3>{d.name}</h3><p>{d.description}</p></Link>)}</div>
  </div></section>

  <section className="section sacredStatement"><div className="shell">
    <div className="eyebrow">RudraNāda</div>
    <h2>A mantra is not a caption. A deity is not an aesthetic. An epic is not a list of trivia.</h2>
    <p>We make devotional art with reverence, and we keep the difference between scripture, later tradition and our own artistic interpretation visible.</p>
    <div className="heroActions"><Link className="button buttonGhost" href="/about">Why we do this</Link><a href={site.youtube} target="_blank" rel="noreferrer">YouTube ↗</a></div>
  </div></section>
</>}
