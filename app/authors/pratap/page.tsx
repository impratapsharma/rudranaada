import type {Metadata} from 'next';
import Link from 'next/link';
import {articles} from '@/lib/content';
import {Breadcrumbs} from '@/components/Breadcrumbs';

export const metadata:Metadata={
  title:'Pratap | Author',
  description:'Articles by Pratap, founder and editor of RudraNāda, on Indian epics, devotional traditions, sacred sound and textual interpretation.',
  alternates:{canonical:'/authors/pratap'}
};

export default function Page(){
  const authored=articles.filter(a=>a.author==='Pratap');
  return <>
    <section className="pageHero"><div className="shell">
      <Breadcrumbs items={[{label:'Authors',href:'/articles'},{label:'Pratap',href:'/authors/pratap'}]}/>
      <div className="eyebrow">Founder & Editor</div>
      <h1>Pratap</h1>
      <p>Pratap founded RudraNāda to bring devotional music, India’s epics and careful reading into the same space. He writes about the Mahabharata, sacred sound, teachers and the places where popular retellings diverge from older texts. The approach is simple: devotion deserves warmth, and tradition deserves careful reading.</p>
    </div></section>
    <section className="section"><div className="shell">
      <div className="sectionHead"><div><div className="eyebrow">By Pratap</div><h2>Research, stories and reflections.</h2></div></div>
      {authored.map(a=><Link className="listLink" href={'/articles/'+a.slug} key={a.slug}><div><div className="cardMeta">{a.category} · {a.readingMinutes} min</div><h3>{a.title}</h3><p>{a.dek}</p></div><span>→</span></Link>)}
    </div></section>
  </>;
}
