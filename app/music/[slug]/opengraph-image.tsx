import {ImageResponse} from 'next/og';
import {OpenGraphCard} from '@/components/OpenGraphCard';
import {getMusic} from '@/lib/music';
import {getRichMusic} from '@/lib/rich-music';
import {getDisplayTitle} from '@/lib/music-format';

export const size={width:1200,height:630};
export const contentType='image/png';

export default async function Image({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const music=getMusic(slug);
  const rich=getRichMusic(slug);
  const title=music?(rich?.displayTitle??getDisplayTitle(music.slug,music.title)):'RudraNāda Music';
  return new ImageResponse(<OpenGraphCard eyebrow={music?.eyebrow??'Original music'} title={title} subtitle={rich?.dek??music?.summary}/>,size);
}
