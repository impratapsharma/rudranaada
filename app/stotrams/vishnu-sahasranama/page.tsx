import type {Metadata} from 'next';
import Link from 'next/link';
import {Breadcrumbs} from '@/components/Breadcrumbs';
import {vishnuSahasranamaCounts} from '@/lib/vishnu-sahasranama';

export const metadata:Metadata={
  title:'Vishnu Sahasranama Full Stotram | Telugu, Hindi & Kannada',
  description:'Read the complete Sri Vishnu Sahasranama Stotram in Devanagari/Hindi, Telugu or Kannada script. Śaṅkara-recension text with source and variant policy.',
  alternates:{canonical:'/stotrams/vishnu-sahasranama'},
  robots:{index:true,follow:true}
};

const languages=[
  {href:'/stotrams/vishnu-sahasranama/hindi',native:'हिन्दी / देवनागरी',label:'Devanagari'},
  {href:'/stotrams/vishnu-sahasranama/telugu',native:'తెలుగు',label:'Telugu'},
  {href:'/stotrams/vishnu-sahasranama/kannada',native:'ಕನ್ನಡ',label:'Kannada'}
];

export default function Page(){return <>
  <section className="pageHero stotraHero"><div className="shell">
    <Breadcrumbs items={[{label:'Stotrams',href:'/stotrams'},{label:'Vishnu Sahasranāma',href:'/stotrams/vishnu-sahasranama'}]}/>
    <div className="eyebrow">श्रीविष्णुसहस्रनामस्तोत्रम्</div>
    <h1>Vishnu Sahasranāma, complete recitation text.</h1>
    <p>Choose the script you read most naturally. All three pages come from one Sanskrit master, so switching scripts does not switch editions.</p>
  </div></section>

  <section className="section compactSection"><div className="shell">
    <div className="stotraLanguageGrid">{languages.map(item=><Link className="stotraLanguageCard" href={item.href} key={item.href}><span>{item.native}</span><small>{item.label} script</small><strong>Read full text →</strong></Link>)}</div>
  </div></section>

  <section className="section"><div className="shell copyColumns">
    <div><div className="eyebrow">What is included</div><h2>Not only the thousand names.</h2></div>
    <div className="sectionCopy">
      <p>The reader includes {vishnuSahasranamaCounts.purvaPithikaVerses} pūrvapīṭhikā verses, the pūrvanyāsa, {vishnuSahasranamaCounts.dhyanaVerses} dhyāna verses, the complete {vishnuSahasranamaCounts.sahasranamaVerses}-verse Sahasranāma, and {vishnuSahasranamaCounts.phalaAndConcludingVerses} phalaśruti and concluding verses.</p>
      <p>The 108 numbered Sahasranāma verses are kept separate from the opening and concluding material, which helps avoid a common online problem where different recitation traditions are silently blended together.</p>
    </div>
  </div></section>

  <section className="section"><div className="shell"><div className="stotraSourcePanel">
    <div className="eyebrow">Text and source policy</div>
    <h2>Śaṅkara-recension, with Śṛṅgeri as the reference standard.</h2>
    <p>Śṛṅgeri Śāradā Pīṭham's current Sanskrit edition says its Devanagari text is presented in accordance with Śrī Śaṅkara Bhagavatpāda's commentary. RudraNāda follows that recension where identifiable pāṭhabhedas occur and cross-checks the core against Mahābhārata transcriptions. We do not claim this web page is a photographic transcription of the Śṛṅgeri printed book.</p>
    <p>Examples of readings deliberately kept in the master include <strong>विरतो</strong>, <strong>विनयो जयः</strong>, and <strong>अमृताशोऽमृतवपुः</strong>, rather than silently combining alternatives from other editions.</p>
    <div className="stotraSourceLinks">
      <a href="https://books.sringeri.net/products/sri-vishnu-sahasranama-stotra" target="_blank" rel="noreferrer">Śṛṅgeri Śāradā Pīṭham edition ↗</a>
      <a href="https://sanskritdocuments.org/doc_vishhnu/vsahasranew.html" target="_blank" rel="noreferrer">Sanskrit Documents cross-check ↗</a>
    </div>
  </div></div></section>
</>}