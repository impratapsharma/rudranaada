import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {Breadcrumbs} from '@/components/Breadcrumbs';
import {isIndicScript,scriptMeta,toIndicScript,type IndicScript} from '@/lib/indic-script';
import {vishnuSahasranamaSections,vishnuSahasranamaCounts} from '@/lib/vishnu-sahasranama';

const languages:IndicScript[]=['hindi','telugu','kannada'];

export function generateStaticParams(){return languages.map(language=>({language}));}

export async function generateMetadata({params}:{params:Promise<{language:string}>}):Promise<Metadata>{
  const {language}=await params;
  if(!isIndicScript(language))return{};
  const meta=scriptMeta[language];
  const path='/stotrams/vishnu-sahasranama/'+language;
  return {
    title:'Vishnu Sahasranama Full Text in '+meta.label,
    description:'Complete Sri Vishnu Sahasranama Sanskrit recitation text in '+meta.label+' script: pūrvapīṭhikā, nyāsa, dhyāna, 108 verses and phalaśruti.',
    alternates:{
      canonical:path,
      languages:{
        'sa-Deva':'/stotrams/vishnu-sahasranama/hindi',
        'sa-Telu':'/stotrams/vishnu-sahasranama/telugu',
        'sa-Knda':'/stotrams/vishnu-sahasranama/kannada'
      }
    },
    robots:{index:true,follow:true}
  };
}

const digitSets:Record<IndicScript,string>={
  hindi:'०१२३४५६७८९',
  telugu:'౦౧౨౩౪౫౬౭౮౯',
  kannada:'೦೧೨೩೪೫೬೭೮೯'
};

function localNumber(number:number,script:IndicScript){
  return String(number).replace(/\d/g,d=>digitSets[script][Number(d)]);
}

export default async function Page({params}:{params:Promise<{language:string}>}){
  const {language}=await params;
  if(!isIndicScript(language))notFound();
  const meta=scriptMeta[language];
  const title=toIndicScript('श्रीविष्णुसहस्रनामस्तोत्रम्',language);

  return <div className="stotraReaderPage">
    <section className="pageHero stotraHero"><div className="shell">
      <Breadcrumbs items={[{label:'Stotrams',href:'/stotrams'},{label:'Vishnu Sahasranāma',href:'/stotrams/vishnu-sahasranama'},{label:meta.label,href:'/stotrams/vishnu-sahasranama/'+language}]}/>
      <div className="eyebrow">{meta.nativeLabel}</div>
      <h1 lang={meta.htmlLang}>{title}</h1>
      <p>Complete Vishnu Sahasranāma for recitation in {meta.label} script. The Sanskrit wording is unchanged across scripts.</p>
      <div className="stotraStats"><span>{vishnuSahasranamaCounts.sahasranamaVerses} core verses</span><span>•</span><span>Pūrvapīṭhikā + Nyāsa + Dhyāna + Phalaśruti</span></div>
    </div></section>

    <div className="stotraLanguageBar"><div className="shell">
      <span className="stotraLanguageBarLabel">Script</span>
      {languages.map(item=><Link className={item===language?'active':''} href={'/stotrams/vishnu-sahasranama/'+item} key={item}>{scriptMeta[item].nativeLabel}</Link>)}
    </div></div>

    <section className="section compactSection"><div className="shell">
      <div className="stotraAccuracyNote">
        <strong>Reading note:</strong> This is Sanskrit rendered in {meta.label} script, not a paraphrased translation. A single Devanagari Sanskrit master generates all three script editions, reducing the chance of lyrics drifting between language pages. The master follows the Śaṅkara/Śṛṅgeri textual policy described on the <Link href="/stotrams/vishnu-sahasranama">source page</Link>.
      </div>
    </div></section>

    <article className="stotraText shell" lang={meta.htmlLang}>
      {vishnuSahasranamaSections.map(section=><section className="stotraSection" id={section.id} key={section.id}>
        <div className="stotraSectionHead">
          <div className="eyebrow">{section.englishTitle}</div>
          <h2>{toIndicScript(section.title,language)}</h2>
        </div>
        <div className="stotraBlocks">
          {section.blocks.map((block,index)=>{
            if(block.type==='speaker')return <h3 className="stotraSpeaker" key={index}>{toIndicScript(block.text,language)}</h3>;
            if(block.type==='line')return <p className="stotraStandalone" key={index}>{toIndicScript(block.text,language)}</p>;
            return <div className="stotraVerse" key={index}>
              {block.number&&<span className="stotraVerseNumber" aria-label={'Verse '+block.number}>{localNumber(block.number,language)}</span>}
              <div>{block.lines.map((line,lineIndex)=><span className="stotraLine" key={lineIndex}>{toIndicScript(line,language)}{lineIndex===block.lines.length-1?' ॥':' ।'}</span>)}</div>
            </div>;
          })}
        </div>
      </section>)}
    </article>

    <section className="section"><div className="shell"><div className="stotraSourcePanel">
      <div className="eyebrow">Accuracy and variants</div>
      <h2>Why this text may differ slightly from another book.</h2>
      <p>Vishnu Sahasranāma has small pāṭhabhedas across printed traditions. This reader intentionally keeps one Śaṅkara-aligned master rather than mixing variants. If you recite from a family or maṭha edition with a different reading, follow your received tradition.</p>
      <Link href="/stotrams/vishnu-sahasranama">See the source policy and references →</Link>
    </div></div></section>
  </div>;
}
