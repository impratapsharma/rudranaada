import type {Metadata} from 'next';
import Link from 'next/link';
import {articles} from '@/lib/content';
import {Breadcrumbs} from '@/components/Breadcrumbs';

export const metadata:Metadata={title:'Stories & Reflections',description:'Read RudraNāda essays on Indian epics, deities, gurus, devotional traditions, sacred sound and philosophy.',alternates:{canonical:'/articles'}};

export default function Page(){return <>
  <section className="pageHero"><div className="shell"><Breadcrumbs items={[{label:'Stories',href:'/articles'}]}/><div className="eyebrow">Stories & reflections</div><h1>Stay with the question a little longer.</h1><p>The music may begin the journey. Here we sit with the story, the source, the disagreement, the symbol and the teaching behind it.</p></div></section>
  <section className="section"><div className="shell">{articles.map(a=><Link className="listLink" href={'/articles/'+a.slug} key={a.slug}><div><div className="cardMeta">{a.category} · {a.readingMinutes} min</div><h3>{a.title}</h3><p>{a.dek}</p></div><span>→</span></Link>)}</div></section>
</>}
