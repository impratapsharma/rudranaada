import Link from 'next/link';
import {scriptMeta,toIndicScript,type IndicScript} from '@/lib/indic-script';
import {toIast} from '@/lib/sanskrit-iast';
import {vishnuSahasranamaSections,vishnuSahasranamaCounts} from '@/lib/vishnu-sahasranama';
import {Breadcrumbs} from '@/components/Breadcrumbs';

export type ReaderScript='english'|IndicScript;

const languages:ReaderScript[]=['english','telugu','hindi','kannada'];

const readerMeta:Record<ReaderScript,{label:string;nativeLabel:string;htmlLang:string}>={
  english:{label:'English (IAST)',nativeLabel:'English',htmlLang:'sa-Latn'},
  hindi:{label:scriptMeta.hindi.label,nativeLabel:scriptMeta.hindi.nativeLabel,htmlLang:scriptMeta.hindi.htmlLang},
  telugu:{label:scriptMeta.telugu.label,nativeLabel:scriptMeta.telugu.nativeLabel,htmlLang:scriptMeta.telugu.htmlLang},
  kannada:{label:scriptMeta.kannada.label,nativeLabel:scriptMeta.kannada.nativeLabel,htmlLang:scriptMeta.kannada.htmlLang}
};

const digitSets:Record<ReaderScript,string>={
  english:'0123456789',
  hindi:'०१२३४५६७८९',
  telugu:'౦౧౨౩౪౫౬౭౮౯',
  kannada:'೦೧೨೩೪೫೬೭೮೯'
};

function localNumber(number:number,script:ReaderScript){
  return String(number).replace(/\d/g,d=>digitSets[script][Number(d)]!);
}

function renderText(text:string,script:ReaderScript){
  if(script==='english')return toIast(text);
  return toIndicScript(text,script);
}

function scriptHref(script:ReaderScript){
  return script==='english'
    ? '/stotrams/vishnu-sahasranama'
    : '/stotrams/vishnu-sahasranama/'+script;
}

export function VishnuSahasranamaReader({script}:{script:ReaderScript}){
  const meta=readerMeta[script];
  const title=script==='english'?'Śrī Viṣṇu Sahasranāma Stotram':renderText('श्री विष्णु सहस्रनाम स्तोत्रम्',script);
  const punctuation=(last:boolean)=>script==='english'?(last?' ||':' |'):(last?' ॥':' ।');

  return <div className={'stotraReaderPage stotraScript-'+script}>
    <section className="pageHero stotraHero"><div className="shell">
      <Breadcrumbs items={[
        {label:'Stotrams',href:'/stotrams'},
        {label:'Vishnu Sahasranāma',href:'/stotrams/vishnu-sahasranama'},
        ...(script==='english'?[]:[{label:meta.label,href:scriptHref(script)}])
      ]}/>
      <div className="eyebrow">Vishnu Sahasranāma · {meta.nativeLabel}</div>
      <h1 className="stotraMainTitle" lang={meta.htmlLang}>{title}</h1>
      <p className="stotraHeroDek">{script==='english'
        ? 'The complete Sanskrit Vishnu Sahasranāma in accurate IAST Roman transliteration, made for easy reading and recitation.'
        : <>The complete Sanskrit Vishnu Sahasranāma in {meta.label} script, generated from the same verified master text.</>
      }</p>
      <div className="stotraHeroActions">
        <a className="button buttonSmall" href="#purva-pithika">Start recitation ↓</a>
        <span className="stotraCount">{vishnuSahasranamaCounts.sahasranamaVerses} core verses</span>
      </div>
    </div></section>

    <div className="stotraLanguageBar" aria-label="Choose script"><div className="shell">
      <span className="stotraLanguageBarLabel">Read in</span>
      {languages.map(item=><Link
        className={item===script?'active':''}
        href={scriptHref(item)}
        key={item}
        aria-current={item===script?'page':undefined}
      >{readerMeta[item].nativeLabel}</Link>)}
    </div></div>

    <div className="stotraUtility shell">
      <nav className="stotraJumpNav" aria-label="Jump to section">
        <a href="#purva-pithika">Opening</a>
        <a href="#dhyana">Dhyānam</a>
        <a href="#sahasranama">1000 Names</a>
        <a href="#phala-shruti">Phalaśruti</a>
      </nav>

      <details className="stotraAccuracyNote">
        <summary>About this text & accuracy</summary>
        <div>
          <p>{script==='english'
            ? 'This is Sanskrit transliterated into the Roman alphabet using IAST, not an English meaning-translation.'
            : <>This is Sanskrit rendered in {meta.label} script, not a paraphrased translation.</>
          } All script editions are generated from one Devanagari Sanskrit master so the wording stays identical across versions.</p>
          <p>The master follows the Śaṅkara/Śṛṅgeri textual policy described in the source notes below.</p>
        </div>
      </details>
    </div>

    <article className="stotraText shell" lang={meta.htmlLang}>
      {vishnuSahasranamaSections.map(section=><section className="stotraSection" id={section.id} key={section.id}>
        <div className="stotraSectionHead">
          <div className="eyebrow">{section.englishTitle}</div>
          <h2>{renderText(section.title,script)}</h2>
        </div>
        <div className="stotraBlocks">
          {section.blocks.map((block,index)=>{
            if(block.type==='speaker')return <h3 className="stotraSpeaker" key={index}>{renderText(block.text,script)}</h3>;
            if(block.type==='line')return <p className="stotraStandalone" key={index}>{renderText(block.text,script)}</p>;
            return <div className="stotraVerse" key={index}>
              {block.number&&<span className="stotraVerseNumber" aria-label={'Verse '+block.number}>{localNumber(block.number,script)}</span>}
              <div>{block.lines.map((line,lineIndex)=><span className="stotraLine" key={lineIndex}>{renderText(line,script)}{punctuation(lineIndex===block.lines.length-1)}</span>)}</div>
            </div>;
          })}
        </div>
      </section>)}
    </article>

    <section className="section stotraSourceSection"><div className="shell"><div className="stotraSourcePanel">
      <div className="eyebrow">Accuracy and variants</div>
      <h2>Why this text may differ slightly from another book.</h2>
      <p>Vishnu Sahasranāma has small pāṭhabhedas across printed traditions. This reader intentionally keeps one Śaṅkara-aligned master rather than mixing variants. If you recite from a family or maṭha edition with a different reading, follow your received tradition.</p>
      <p>Primary editorial reference: the Śṛṅgeri Śāradā Pīṭham Sanskrit edition, which states that its text follows Śrī Śaṅkara Bhagavatpāda's commentary tradition.</p>
      <div className="stotraSourceLinks">
        <a href="https://books.sringeri.net/products/sri-vishnu-sahasranama-stotra" target="_blank" rel="noreferrer">Śṛṅgeri edition ↗</a>
        <a href="https://sanskritdocuments.org/doc_vishhnu/vsahasranew.html" target="_blank" rel="noreferrer">Sanskrit Documents cross-check ↗</a>
      </div>
    </div></div></section>
  </div>;
}
