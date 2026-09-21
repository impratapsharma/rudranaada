import type {Metadata} from 'next';
import Link from 'next/link';
import {articles} from '@/lib/content';
import {Breadcrumbs} from '@/components/Breadcrumbs';

export const metadata:Metadata={title:'Guru Bodha',description:'RudraNāda reflections on the guru, the student, humility, inquiry, discipline and lived spiritual understanding.',alternates:{canonical:'/guru'}};

export default function Page(){
  const guruArticles=articles.filter(a=>a.category==='Guru Bodha');
  return <>
    <section className="pageHero guruHero"><div className="shell"><Breadcrumbs items={[{label:'Guru Bodha',href:'/guru'}]}/><div className="eyebrow">Guru Bodha</div><h1>A teaching is not complete because it was heard.</h1><p>Guru Bodha is RudraNāda’s space for the relationship between teacher and student, and for the slow work by which knowledge becomes understanding.</p></div></section>

    <section className="section"><div className="shell copyColumns"><div><div className="eyebrow">Why the guru matters</div><h2>The problem is not always a lack of information.</h2></div><div className="sectionCopy"><p>There are moments when the seeker does not need another quotation. They need correction, context, a question they cannot escape, or someone who can see where understanding has become self-deception.</p><p>The classical texts do not describe this relationship as passive. Bhagavad Gita 4.34 places humility beside inquiry and service. Mundaka Upanishad 1.2.12 asks the seeker to approach a teacher who is both grounded in the teaching and established in what it points toward.</p></div></div></section>

    <section className="section"><div className="shell"><div className="sectionHead"><div><div className="eyebrow">Three movements</div><h2>Bow. Ask. Practise.</h2></div><p>Not as a formula, but as a rhythm of learning: humility makes room, inquiry keeps the mind awake, and practice reveals what words alone cannot.</p></div><div className="grid3">
      <div className="card"><h3>Humility</h3><p>Not self-erasure. The willingness to admit that your present view may not be the whole view.</p></div>
      <div className="card"><h3>Inquiry</h3><p>A sincere student asks. Reverence that is afraid of questions becomes fragile very quickly.</p></div>
      <div className="card"><h3>Practice</h3><p>A teaching becomes yours only when life has had the chance to test it.</p></div>
    </div></div></section>

    <section className="section"><div className="shell"><div className="sectionHead"><div><div className="eyebrow">Read Guru Bodha</div><h2>Teachings for the student, not slogans for the wall.</h2></div></div>{guruArticles.map(a=><Link className="listLink" href={'/articles/'+a.slug} key={a.slug}><div><div className="cardMeta">{a.readingMinutes} min</div><h3>{a.title}</h3><p>{a.dek}</p></div><span>→</span></Link>)}</div></section>

    <section className="section sacredStatement"><div className="shell"><div className="eyebrow">About the name</div><h2>Bodha is more than information.</h2><p>The Sanskrit word can carry senses of knowing, understanding, awakening and instruction. “Guru Bodha” is the name we use for this RudraNāda series. It is an editorial title, not the name of a single canonical scripture or formal genre.</p></div></section>
  </>
}
