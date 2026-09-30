import {ImageResponse} from 'next/og';
import {OpenGraphCard} from '@/components/OpenGraphCard';
import {getFestivalGuide} from '@/lib/festival-guides';

export const size={width:1200,height:630};
export const contentType='image/png';

export default async function Image({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const guide=getFestivalGuide(slug);
  return new ImageResponse(<OpenGraphCard eyebrow="Festival guide" title={guide?.title??'RudraNāda Festivals'} subtitle={guide?.dek}/>,size);
}
