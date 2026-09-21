import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {deityHubs,fullSongs} from '@/lib/content';
import {deityProfiles} from '@/lib/deity-content';
import {Breadcrumbs} from '@/components/Breadcrumbs';
import {MusicCard} from '@/components/MusicCard';
import {QuickAnswer} from '@/components/QuickAnswer';
import {FaqSection} from '@/components/FaqSection';
import {getHubEnhancement} from '@/lib/hub-enhancements';

export function generateStaticParams(){return deityHubs.map(d=>({slug:d.slug}));}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const d=deityHubs.find(x=>x.slug===slug);if(!d)return{};return{title:d.name,description:d.description,alternates:{canonical:'/deities/'+d.slug},robots:{index:false,follow:true}}}

export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const d=deityHubs.find(x=>x.slug===slug);const profile=deityProfiles[slug];const enhancement=getHubEnhancement('deity-'+slug);if(!d||!profile||!enhancement)notFound();const related=fullSongs.filter(m=>m.themes.some(t=>t.toLowerCase()===d.name.toLowerCase()||t.toLowerCase()===d.slug));return <>
  <section className="pageHero"><div className="shell"><Breadcrumbs items={[{label:'Deities',href:'/deities'},{label:d.name,href:'/deities/'+d.slug}]}/><div className="eyebrow">{profile.eyebrow}</div><h1>{d.name}</h1><p>{profile.intro}</p></div></section>
  <section className="section compactSection"><div className="shell"><div className="hubLongform"><QuickAnswer answer={enhancement.quickAnswer} takeaways={enhancement.keyTakeaways}/></div></div></section>
  {profile.sections.map((section,index)=><section className="section" key={section.heading}><div className="shell copyColumns"><div>{index===0&&<div className="eyebrow">In the tradition</div>}<h2>{section.heading}</h2></div><div className="sectionCopy">{section.paragraphs.map(p=><p key={p}>{p}</p>)}</div></div></section>)}
  {related.length>0&&<section className="section"><div className="shell"><div className="sectionHead"><div><div className="eyebrow">Listen</div><h2>{d.name} in RudraNāda.</h2></div><p>Music offers another way into the same questions. Start with the recordings below, then return to the story with different ears.</p></div><div className="grid3">{related.map(m=><MusicCard entry={m} key={m.videoId}/>)}</div></div></section>}
  <section className="section"><div className="shell"><div className="hubLongform"><FaqSection items={enhancement.faq}/></div></div></section>
</>}
