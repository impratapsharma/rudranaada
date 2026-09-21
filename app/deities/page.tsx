import type {Metadata} from 'next';
import Link from 'next/link';
import {deityHubs} from '@/lib/content';
import {Breadcrumbs} from '@/components/Breadcrumbs';

export const metadata:Metadata={title:'Deities',description:'Explore Krishna, Shiva, Devi, Hanuman, Narasimha and Parashurama through RudraNāda stories, music and devotional context.',alternates:{canonical:'/deities'}};

export default function Page(){return <>
  <section className="pageHero"><div className="shell"><Breadcrumbs items={[{label:'Deities',href:'/deities'}]}/><div className="eyebrow">Deities</div><h1>Every name opens a different doorway.</h1><p>Krishna does not ask the same thing of the heart as Kali. Hanuman does not carry the same mood as Shiva. Each form gathers its own stories, symbols, practices and way of approaching the sacred.</p></div></section>
  <section className="section"><div className="shell"><div className="sectionHead"><div><div className="eyebrow">Begin with the name you know</div><h2>Then discover what you have not met yet.</h2></div><p>These guides connect the music to the stories and devotional ideas behind it. Where a tradition has more than one telling, we make room for that too.</p></div><div className="grid3">{deityHubs.map(d=><Link className="card" href={'/deities/'+d.slug} key={d.slug}><h3>{d.name}</h3><p>{d.description}</p><strong>Enter →</strong></Link>)}</div></div></section>
</>}
