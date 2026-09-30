import {ImageResponse} from 'next/og';
import {OpenGraphCard} from '@/components/OpenGraphCard';
import {getArticle} from '@/lib/content';

export const size={width:1200,height:630};
export const contentType='image/png';

export default async function Image({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const article=getArticle(slug);
  return new ImageResponse(<OpenGraphCard eyebrow={article?.category??'RudraNāda'} title={article?.title??'RudraNāda'} subtitle={article?.dek}/>,size);
}
