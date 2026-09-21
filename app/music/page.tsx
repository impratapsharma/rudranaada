import type {Metadata} from 'next';
import {music,fullSongs,shorts} from '@/lib/content';
import {Breadcrumbs} from '@/components/Breadcrumbs';
import {MusicCatalogue} from '@/components/MusicCatalogue';
import {site} from '@/lib/site';

export const metadata:Metadata={title:'Original Devotional Music',description:'Listen to RudraNāda songs, chants, meditations and epic music inspired by the Mahabharata, Ramayana, Shiva, Krishna, Devi, Hanuman and more.',alternates:{canonical:'/music'}};

export default function Page(){return <>
  <section className="pageHero"><div className="shell"><Breadcrumbs items={[{label:'Music',href:'/music'}]}/><div className="eyebrow">Original RudraNāda</div><h1>Some stories are better heard before they are explained.</h1><p>From Kurukshetra to Kailash, from a whispered name to a full cinematic chorus. Explore {fullSongs.length} full releases and {shorts.length} Shorts.</p><div className="heroActions"><a className="button buttonGhost" href={site.youtube} target="_blank" rel="noreferrer">Listen on YouTube ↗</a></div></div></section>
  <section className="section catalogueSection"><div className="shell"><MusicCatalogue entries={music}/></div></section>
</>}
