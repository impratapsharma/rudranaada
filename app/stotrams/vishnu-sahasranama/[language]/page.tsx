import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {isIndicScript,scriptMeta,type IndicScript} from '@/lib/indic-script';
import {VishnuSahasranamaReader} from '@/components/VishnuSahasranamaReader';

const languages:IndicScript[]=['hindi','telugu','kannada'];

export function generateStaticParams(){return languages.map(language=>({language}));}

export async function generateMetadata({params}:{params:Promise<{language:string}>}):Promise<Metadata>{
  const {language}=await params;
  if(!isIndicScript(language))return{};
  const meta=scriptMeta[language];
  const path='/stotrams/vishnu-sahasranama/'+language;
  const languageName=language==='hindi'?'Hindi / Devanagari':meta.label;
  return {
    title:'Vishnu Sahasranama in '+languageName+' | Full Stotram',
    description:'Read the complete Sri Vishnu Sahasranama in '+languageName+' script, including pūrvapīṭhikā, nyāsa, dhyāna, all 108 core verses and phalaśruti.',
    alternates:{
      canonical:path,
      languages:{
        'sa-Latn':'/stotrams/vishnu-sahasranama',
        'sa-Deva':'/stotrams/vishnu-sahasranama/hindi',
        'sa-Telu':'/stotrams/vishnu-sahasranama/telugu',
        'sa-Knda':'/stotrams/vishnu-sahasranama/kannada'
      }
    },
    robots:{index:true,follow:true}
  };
}

export default async function Page({params}:{params:Promise<{language:string}>}){
  const {language}=await params;
  if(!isIndicScript(language))notFound();
  return <VishnuSahasranamaReader script={language}/>;
}
