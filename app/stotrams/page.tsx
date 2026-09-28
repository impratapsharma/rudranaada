import type {Metadata} from 'next';
import Link from 'next/link';
import {Breadcrumbs} from '@/components/Breadcrumbs';

export const metadata:Metadata={
  title:'Stotrams in English, Telugu, Hindi & Kannada',
  description:'A carefully sourced RudraNāda library of Sanskrit stotras for recitation in English/IAST, Telugu, Devanagari/Hindi and Kannada.',
  alternates:{canonical:'/stotrams'},
  robots:{index:true,follow:true}
};

export default function Page(){return <>
  <section className="pageHero stotraHubHero"><div className="shell">
    <Breadcrumbs items={[{label:'Stotrams',href:'/stotrams'}]}/>
    <div className="eyebrow">स्तोत्र • స్తోత్రం • ಸ್ತೋತ್ರ</div>
    <h1>Stotrams, kept close to the text.</h1>
    <p>Read Sanskrit stotras in the script you are most comfortable with. English/IAST is the default reading view, with Telugu, Devanagari/Hindi and Kannada editions generated from the same verified Sanskrit master.</p>
  </div></section>

  <section className="section"><div className="shell">
    <div className="sectionHead"><div><div className="eyebrow">Now available</div><h2>Begin with Vishnu Sahasranāma.</h2></div><p>The complete recitation text includes the pūrvapīṭhikā, nyāsa, dhyāna, all 108 Sahasranāma verses, and the phalaśruti with concluding verses.</p></div>
    <div className="grid3">
      <Link className="card stotraCard" href="/stotrams/vishnu-sahasranama">
        <div className="cardMeta">Viṣṇu • Mahābhārata</div>
        <h3>Śrī Vishnu Sahasranāma Stotram</h3>
        <p>Full Sanskrit recitation text in English/IAST, Telugu, Devanagari and Kannada scripts, with a documented Śaṅkara/Śṛṅgeri-aligned text policy.</p>
        <strong>Open the stotram →</strong>
      </Link>
    </div>
  </div></section>

  <section className="section"><div className="shell copyColumns">
    <div><div className="eyebrow">Editorial standard</div><h2>One master text. No copy-paste drift.</h2></div>
    <div className="sectionCopy"><p>Different printed traditions sometimes preserve small pāṭhabhedas, or textual variants. We record the edition policy on each stotram and keep regional-script pages generated from the same Sanskrit master rather than maintaining separate lyrics files.</p><p>This matters for conjuncts, visarga, sandhi and small readings that can change when devotional text is repeatedly copied online.</p></div>
  </div></section>
</>}