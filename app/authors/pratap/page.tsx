import type {Metadata} from 'next';
import Link from 'next/link';
import {articles} from '@/lib/content';
import {Breadcrumbs} from '@/components/Breadcrumbs';
import {JsonLd} from '@/components/JsonLd';
import {site} from '@/lib/site';

export const metadata:Metadata={
  title:'Pratap Sharma | Author',
  description:'Articles by Pratap Sharma, founder and editor of RudraNāda, on Indian epics, devotional traditions, sacred sound and textual interpretation.',
  alternates:{canonical:'/authors/pratap'}
};

export default function Page(){
  const authored=articles.filter(a=>a.author==='Pratap Sharma');
  return <>
    <JsonLd data={{'@context':'https://schema.org','@type':'ProfilePage',url:site.url+'/authors/pratap',mainEntity:{'@type':'Person','@id':site.url+'/authors/pratap#person',name:'Pratap Sharma',url:site.url+'/authors/pratap',jobTitle:'Founder & Editor',worksFor:{'@id':site.url+'/#organization'},knowsAbout:['Mahabharata','Ramayana','Bhagavad Gita','Hindu devotional traditions','Mantras','Indian epics']}}}/>
    <section className="pageHero"><div className="shell">
      <Breadcrumbs items={[{label:'Authors',href:'/articles'},{label:'Pratap Sharma',href:'/authors/pratap'}]}/>
      <div className="eyebrow">Founder & Editor</div>
      <h1>Pratap Sharma</h1>
      <p>Pratap Sharma founded RudraNāda to bring devotional music, India’s epics and careful reading into the same space. He writes about the Mahabharata, sacred sound, teachers and the places where popular retellings diverge from older texts. The approach is simple: devotion deserves warmth, and tradition deserves careful reading.</p>
    </div></section>
    <section className="section"><div className="shell">
      <div className="sectionHead"><div><div className="eyebrow">By Pratap Sharma</div><h2>Research, stories and reflections.</h2></div></div>
      {authored.map(a=><Link className="listLink" href={'/articles/'+a.slug} key={a.slug}><div><div className="cardMeta">{a.category} · {a.readingMinutes} min</div><h3>{a.title}</h3><p>{a.dek}</p></div><span>→</span></Link>)}
    </div></section>
  </>;
}
