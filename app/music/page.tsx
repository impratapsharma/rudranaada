import type {Metadata} from 'next';
import {music,fullSongs,shorts} from '@/lib/content';
import {Breadcrumbs} from '@/components/Breadcrumbs';
import {MusicCatalogue} from '@/components/MusicCatalogue';
import {site} from '@/lib/site';

export const metadata:Metadata={title:'Original Music',description:'Explore RudraNāda devotional songs, epic music, chants and Shorts. Listen by deity, character or epic.',alternates:{canonical:'/music'}};
export default function Page(){return <>
  <section className="pageHero"><div className="shell"><Breadcrumbs items={[{label:'Music',href:'/music'}]}/><div className="eyebrow">Original RudraNāda</div><h1>Hear the story.</h1><p>Devotional chants, epic characters and quiet moments. Explore {fullSongs.length} full videos and {shorts.length} Shorts from RudraNāda.</p><div className="heroActions"><a className="button buttonGhost" href={site.youtube} target="_blank" rel="noreferrer">Visit the YouTube channel ↗</a></div></div></section>
  <section className="section catalogueSection"><div className="shell"><MusicCatalogue entries={music}/></div></section>
</>}
