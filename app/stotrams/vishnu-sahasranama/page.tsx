import type {Metadata} from 'next';
import {VishnuSahasranamaReader} from '@/components/VishnuSahasranamaReader';

export const metadata:Metadata={
  title:'Vishnu Sahasranama in English | Full Stotram (IAST)',
  description:'Read the complete Sri Vishnu Sahasranama in English/Roman IAST transliteration, including pūrvapīṭhikā, nyāsa, dhyāna, all 108 core verses and phalaśruti.',
  alternates:{
    canonical:'/stotrams/vishnu-sahasranama',
    languages:{
      'sa-Latn':'/stotrams/vishnu-sahasranama',
      'sa-Deva':'/stotrams/vishnu-sahasranama/hindi',
      'sa-Telu':'/stotrams/vishnu-sahasranama/telugu',
      'sa-Knda':'/stotrams/vishnu-sahasranama/kannada'
    },
    types:{'text/markdown':'/markdown/stotrams/vishnu-sahasranama'}
  },
  robots:{index:true,follow:true}
};

export default function Page(){
  return <VishnuSahasranamaReader script="english"/>;
}
