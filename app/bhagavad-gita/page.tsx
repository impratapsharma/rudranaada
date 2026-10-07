import type {Metadata} from 'next';
import Link from 'next/link';
import {Breadcrumbs} from '@/components/Breadcrumbs';
import {JsonLd} from '@/components/JsonLd';
import {FaqSection} from '@/components/FaqSection';
import {site} from '@/lib/site';

const updatedAt='2026-10-07';

export const metadata:Metadata={
  title:'Bhagavad Gita: 18 Chapters, Meaning & Key Teachings',
  description:'A source-aware guide to the Bhagavad Gita: its place in the Mahabharata, all 18 chapters, karma, jnana, bhakti, dhyana, key verses and Shankara’s commentary.',
  alternates:{canonical:'/bhagavad-gita'},
  authors:[{name:'Pratap Sharma',url:'/authors/pratap'}],
  robots:{index:true,follow:true},
  openGraph:{
    type:'article',
    title:'Bhagavad Gita: 18 Chapters, Meaning & Key Teachings',
    description:'A source-aware guide to Krishna and Arjuna’s dialogue on Kurukshetra, the 18 chapters, major teachings and how to read the Gita without reducing it to isolated quotes.',
    url:site.url+'/bhagavad-gita',
    modifiedTime:updatedAt
  },
  twitter:{
    card:'summary_large_image',
    title:'Bhagavad Gita: 18 Chapters, Meaning & Key Teachings',
    description:'A source-aware guide to the Bhagavad Gita, its 18 chapters and major teachings.'
  }
};

const chapters=[
  ['1','अर्जुनविषादयोग','Arjuna Viṣāda Yoga','Arjuna sees teachers, relatives and friends on both sides of the battlefield. His certainty collapses, and the teaching begins from a real moral crisis.'],
  ['2','साङ्ख्ययोग','Sāṅkhya Yoga','Krishna begins the central teaching: the Self is not destroyed with the body, wisdom requires steadiness, and action can be performed without slavery to its results.'],
  ['3','कर्मयोग','Karma Yoga','Why act at all? Krishna explains disciplined action, yajña, responsibility and action performed without selfish attachment.'],
  ['4','ज्ञानकर्मसंन्यासयोग','Jñāna-Karma-Sannyāsa Yoga','Knowledge, action and renunciation are brought together. Krishna speaks of divine manifestation, the many forms of yajña, and knowledge that burns bondage to action.'],
  ['5','कर्मसंन्यासयोग','Karma-Sannyāsa Yoga','The apparent conflict between renunciation and action is clarified. True renunciation is not merely stopping activity, but freedom from possessiveness and attachment.'],
  ['6','आत्मसंयमयोग','Ātma-Saṃyama / Dhyāna Yoga','The Gita turns to meditation: posture, moderation, attention, the restless mind, failure in yoga and the condition of the disciplined yogin.'],
  ['7','ज्ञानविज्ञानयोग','Jñāna-Vijñāna Yoga','Krishna explains His relation to prakṛti, māyā and the world, and distinguishes merely knowing about the divine from deeper realization.'],
  ['8','अक्षरब्रह्मयोग','Akṣara-Brahma Yoga','Arjuna asks about Brahman, action and remembrance at death. The chapter connects final remembrance with the orientation cultivated throughout life.'],
  ['9','राजविद्याराजगुह्ययोग','Rāja-Vidyā Rāja-Guhya Yoga','Called the royal knowledge and royal secret, this chapter joins metaphysics with devotion: the Lord pervades and sustains the world without being confined by it.'],
  ['10','विभूतियोग','Vibhūti Yoga','Krishna names divine manifestations through which Arjuna can learn to recognize the sacred in greatness, beauty, power, intelligence and order.'],
  ['11','विश्वरूपदर्शनयोग','Viśvarūpa-Darśana Yoga','Arjuna is granted the vision of the universal form. Wonder becomes terror as he sees creation, destruction and Time gathered into a single overwhelming vision.'],
  ['12','भक्तियोग','Bhakti Yoga','Arjuna asks about devotion to the personal Lord and contemplation of the imperishable. Krishna describes devotion and the qualities of a devotee dear to Him.'],
  ['13','क्षेत्रक्षेत्रज्ञविभागयोग','Kṣetra-Kṣetrajña-Vibhāga Yoga','The body and field of experience are distinguished from the knower of the field. The chapter also examines prakṛti, puruṣa and what the Gita calls knowledge.'],
  ['14','गुणत्रयविभागयोग','Guṇa-Traya-Vibhāga Yoga','Sattva, rajas and tamas are explained as the three guṇas of prakṛti. The question becomes not only which quality dominates us, but how one goes beyond all three.'],
  ['15','पुरुषोत्तमयोग','Puruṣottama Yoga','The image of the upside-down aśvattha tree frames saṃsāra. Krishna then teaches the perishable, the imperishable and the Supreme Person, Puruṣottama.'],
  ['16','दैवासुरसम्पद्विभागयोग','Daivāsura-Sampad-Vibhāga Yoga','The Gita contrasts qualities that lead toward freedom with qualities that deepen bondage, making ethics part of spiritual maturity rather than a separate subject.'],
  ['17','श्रद्धात्रयविभागयोग','Śraddhā-Traya-Vibhāga Yoga','Faith, food, sacrifice, austerity and giving are examined through the three guṇas. What we revere and how we practice reveal the texture of our mind.'],
  ['18','मोक्षसंन्यासयोग','Mokṣa-Sannyāsa Yoga','The final chapter gathers the entire teaching: action, knowledge, guṇas, svadharma, renunciation, devotion and surrender. Arjuna finally says his delusion is gone and he will act.']
];

const keyVerses=[
  ['2.20','The Self is not born and does not die. This is one of the Gita’s clearest statements that the deepest Self is not identical with the perishing body.'],
  ['2.47','Act, but do not make the fruits of action your possession. The verse is not an argument for indifference to results; it attacks bondage to results.'],
  ['2.48','Yoga is linked with equanimity: steadiness in success and failure changes the inner quality of action.'],
  ['3.19','Krishna again joins action with non-attachment, asking Arjuna to perform what must be done without clinging.'],
  ['4.7–8','The famous teaching on divine manifestation appears here: when dharma declines and adharma rises, Krishna speaks of manifesting for protection and restoration.'],
  ['4.34','Knowledge is approached through humility, inquiry and service to those who see the truth. The verse is central to the Gita’s understanding of teacher and student.'],
  ['6.5','The mind can become an ally or an obstacle. Spiritual discipline is not outsourced; one must participate in one’s own upliftment.'],
  ['10.20','Krishna identifies Himself as the Self seated in the hearts of beings, a major bridge between devotion and metaphysical teaching.'],
  ['11.32','In the universal-form vision, Krishna identifies Himself with Time, bringing Arjuna face to face with destruction on a cosmic scale.'],
  ['12.13–14','Compassion, absence of hatred, freedom from possessiveness, steadiness and devotion are among the qualities of the devotee Krishna calls dear.'],
  ['18.66','The Gita’s final movement culminates in taking refuge in Krishna. Different Vedānta traditions interpret the theological implications differently, so commentary matters here.'],
  ['18.73','Arjuna’s response is practical: his confusion has been dispelled and he is ready to act. The Gita ends the crisis by returning him to responsibility.']
];

const faq=[
  {question:'What is the Bhagavad Gita?',answer:'The Bhagavad Gita is a dialogue between Sri Krishna and Arjuna within the Bhishma Parva of the Mahabharata. It begins just before the Kurukshetra war, when Arjuna is overcome by grief and moral confusion.'},
  {question:'How many chapters are in the Bhagavad Gita?',answer:'The Bhagavad Gita has 18 chapters. The commonly received text is usually counted as 700 verses, although manuscript and recension traditions can produce a small variation in verse counting.'},
  {question:'Is the Bhagavad Gita only about Karma Yoga?',answer:'No. Karma Yoga is central, but the Gita also teaches knowledge, meditation, devotion, the Self, Ishvara, prakriti, the three gunas, renunciation and liberation. The text repeatedly integrates these themes rather than presenting them as sealed compartments.'},
  {question:'Where is the Bhagavad Gita in the Mahabharata?',answer:'It occurs in the Bhishma Parva, immediately before the great war fully begins. Chapter numbering differs across editions and recensions, so verse references are more stable when citing the Gita itself by chapter and verse.'},
  {question:'Did Adi Shankaracharya write a commentary on the Bhagavad Gita?',answer:'Yes. Shankara’s Bhagavad Gita Bhashya is the earliest known complete extant commentary on the Gita. Sringeri’s Advaita Sharada preserves the Sanskrit text and commentary online.'},
  {question:'What is the best way to start reading the Bhagavad Gita?',answer:'Read the dialogue in sequence at least once. Chapter 2 gives a broad map, but later chapters refine and sometimes reframe earlier ideas. Use a reliable Sanskrit text and compare more than one traditional commentary when a verse carries major philosophical weight.'}
];

const sources=[
  ['Advaita Sharada · Sringeri','https://advaitasharada.sringeri.net/read/bhagavadgita-bhashya/1/','Sanskrit Bhagavad Gita Bhashya of Adi Shankaracharya with chapter navigation and traditional commentary.'],
  ['Sharada Granthalaya · Sringeri','https://books.sringeri.net/products/the-bhagavad-gita','Sringeri’s description of the Gita with the English translation of Adi Shankaracharya’s Bhashya by Alladi Mahadeva Sastri.'],
  ['Gita Supersite · IIT Kanpur','https://www.gitasupersite.iitk.ac.in/srimad/intro','Sanskrit text, chapter structure, translations and multiple classical commentaries.'],
  ['Sringeri · Gita Jayanti','https://www.sringeri.net/events/gita-jayanti-celebrations-2017','Institutional record of full Gita recitation and the 700-verse recitation tradition.']
];

export default function Page(){
  const citation=sources.map(source=>source[1]);
  return <article className="ramayanaGuide">
    <JsonLd data={[
      {'@context':'https://schema.org','@type':'Article',headline:'Bhagavad Gita: 18 Chapters, Meaning & Key Teachings',description:'A source-aware guide to the Bhagavad Gita, its place in the Mahabharata, 18 chapters and major teachings.',mainEntityOfPage:site.url+'/bhagavad-gita',dateModified:updatedAt,inLanguage:'en-IN',author:{'@type':'Person','@id':site.url+'/authors/pratap#person',name:'Pratap Sharma',url:site.url+'/authors/pratap'},publisher:{'@id':site.url+'/#organization'},citation},
      {'@context':'https://schema.org','@type':'FAQPage',mainEntity:faq.map(item=>({'@type':'Question',name:item.question,acceptedAnswer:{'@type':'Answer',text:item.answer}}))}
    ]}/>

    <header className="guideHero shell">
      <Breadcrumbs items={[{label:'Mahabharata',href:'/mahabharata'},{label:'Bhagavad Gita',href:'/bhagavad-gita'}]}/>
      <div className="eyebrow">Mahabharata · Bhagavad Gita</div>
      <h1>Bhagavad Gita: the 18 chapters, the battlefield, and Krishna’s teaching</h1>
      <p className="guideDek">The Gita begins with Arjuna unable to fight. Krishna does not give him one slogan. Across eighteen chapters, the dialogue moves through the Self, action, knowledge, meditation, devotion, the guṇas, dharma, renunciation and liberation.</p>
      <div className="guideMeta"><span>By <Link href="/authors/pratap">Pratap Sharma</Link></span><span>Updated <time dateTime={updatedAt}>7 October 2026</time></span><span>Source-aware reading guide</span></div>
      <div className="guideQuickAnswer"><strong>In brief</strong><p>The Bhagavad Gita is Krishna and Arjuna’s dialogue in the Bhishma Parva of the Mahabharata, spoken on Kurukshetra before battle. The commonly received text has 18 chapters and about 700 verses. Its argument cannot be reduced to “do your duty” or “do not care about results”: it asks what the Self is, what binds action, what freedom means, how knowledge and devotion relate, and how a person should act when every available choice carries consequence.</p></div>
    </header>

    <div className="shell guideLayout">
      <aside className="guideSidebar">
        <nav className="guideContents" aria-label="On this page">
          <strong>On this page</strong>
          <ol>
            <li><a href="#where-it-begins">Where the Gita begins</a></li>
            <li><a href="#eighteen-chapters">The 18 chapters</a></li>
            <li><a href="#main-teachings">Main teachings</a></li>
            <li><a href="#key-verses">Key verses</a></li>
            <li><a href="#shankara">Shankara and the Gita</a></li>
            <li><a href="#how-to-read">How to read it</a></li>
            <li><a href="#questions">Questions</a></li>
            <li><a href="#sources">Sources</a></li>
          </ol>
        </nav>
      </aside>

      <div className="guideBody">
        <section id="where-it-begins">
          <div className="eyebrow">The setting matters</div>
          <h2>The Gita begins before Krishna teaches anything.</h2>
          <p>Two armies face one another at Kurukshetra. Arjuna asks Krishna, his charioteer, to place the chariot between them. He then sees teachers, elders, cousins, friends and kin on both sides. The problem is no longer an abstract question about right and wrong. Whatever he does will wound a world to which he belongs.</p>
          <p>That collapse is essential to the text. The first chapter is not a disposable introduction. Arjuna’s grief exposes the limits of inherited certainty, and in 2.7 he explicitly asks Krishna to teach him what is truly for his good. The Gita therefore unfolds as instruction given to a person whose ordinary moral reasoning has reached a breaking point.</p>
          <p>The dialogue sits inside the <Link href="/mahabharata">Mahabharata</Link>, not outside it. Reading it with the epic around it keeps dharma from becoming a clean formula. Arjuna is not deciding whether action has consequences. He is deciding how to act when consequences are unavoidable.</p>
        </section>

        <section id="eighteen-chapters">
          <div className="eyebrow">A reader’s map</div>
          <h2>The eighteen chapters of the Bhagavad Gita</h2>
          <p>Chapter titles can vary slightly across editions and traditions. The names below follow the widely used Sanskrit chapter traditions. Their value is navigational: the argument of the Gita continues across chapters and should not be boxed into eighteen unrelated topics.</p>
          <div className="guideTableScroll" role="region" aria-label="Bhagavad Gita chapters" tabIndex={0}>
            <table>
              <caption>All 18 chapters with a short reading guide</caption>
              <thead><tr><th scope="col">Chapter</th><th scope="col">Name</th><th scope="col">What changes here</th></tr></thead>
              <tbody>{chapters.map(([number,sanskrit,name,summary])=><tr key={number}><th scope="row">{number}</th><td><strong>{sanskrit}</strong><p>{name}</p></td><td>{summary}</td></tr>)}</tbody>
            </table>
          </div>
        </section>

        <section id="main-teachings">
          <div className="eyebrow">Do not flatten the text</div>
          <h2>The Gita is not one idea repeated for 700 verses.</h2>
          <p><strong>Ātman and the body.</strong> Krishna’s early response to Arjuna separates the enduring Self from the changing body. This is not offered as a way to deny grief, but as a radical revision of what death ultimately destroys.</p>
          <p><strong>Karma Yoga.</strong> Action is unavoidable, but bondage to action is not. The Gita repeatedly asks whether action is driven by possessiveness, craving and ego, or performed as disciplined responsibility without clinging to its fruits.</p>
          <p><strong>Jñāna.</strong> Knowledge in the Gita is not merely collecting correct propositions. It transforms the knower’s understanding of Self, agency, prakṛti and Brahman, and therefore changes the basis from which action occurs.</p>
          <p><strong>Dhyāna.</strong> Chapter 6 makes mental discipline concrete. The mind wanders, practice is difficult, and moderation matters. Meditation belongs inside the Gita’s larger discipline rather than floating free of ethics and action.</p>
          <p><strong>Bhakti.</strong> Devotion grows in importance as Krishna reveals His relation to the cosmos. Bhakti is not presented only as emotion; it includes remembrance, surrender, orientation of action and qualities such as non-hatred, compassion and steadiness.</p>
          <p><strong>Guṇas and prakṛti.</strong> Sattva, rajas and tamas provide a language for understanding why people know, desire, act, worship and give differently. The goal is not simply to become “more sattvic” forever, but ultimately to become free from bondage to the guṇas.</p>
          <p><strong>Svadharma and renunciation.</strong> The closing chapters return to action with greater precision. Renunciation is examined alongside one’s own duty, disposition and place in the larger order. The Gita’s conclusion does not leave Arjuna in philosophical suspension. He says he will act.</p>
        </section>

        <section id="key-verses">
          <div className="eyebrow">Verses worth reading in context</div>
          <h2>Twelve passages that open the larger argument</h2>
          <p>These are entry points, not a substitute for reading the surrounding verses. The most quoted line of the Gita can change meaning when its neighbouring verses are ignored.</p>
          <div className="referenceList">{keyVerses.map(([verse,note])=><div className="referenceItem" key={verse}><div className="referenceVerse">Bhagavad Gita {verse}</div><p>{note}</p></div>)}</div>
          <div className="guideRelated">
            <h2>Continue inside RudraNāda</h2>
            <ul>
              <li><Link href="/articles/why-krishna-showed-arjuna-vishvarupa-bhagavad-gita">Why Krishna showed Arjuna the Viśvarūpa →</Link></li>
              <li><Link href="/music/uth-parth">Uth Parth: Kurukshetra, lyrics and Gita references →</Link></li>
              <li><Link href="/deities/krishna">Explore the Krishna guide →</Link></li>
              <li><Link href="/festivals/gita-jayanti">Gita Jayanti guide →</Link></li>
            </ul>
          </div>
        </section>

        <section id="shankara">
          <div className="eyebrow">Commentary changes the reading</div>
          <h2>Adi Shankaracharya does not treat the Gita as a book of motivational quotations.</h2>
          <p>Shankara’s Bhagavad Gita Bhāṣya is the earliest known complete extant commentary on the text. In the Advaita tradition, the Gita is read alongside the Upanishads and Brahma Sutras as part of the prasthāna-traya, the foundational textual triad for Vedānta.</p>
          <p>That matters because familiar English summaries can make every verse sound as though it teaches the same thing: work hard, stay calm, believe in God. Shankara instead reads distinctions carefully, including action and knowledge, the qualified aspirant, renunciation, the nature of the Self and the role of devotion and meditation within a path oriented toward liberating knowledge.</p>
          <p>RudraNāda will therefore distinguish between <strong>what the Sanskrit verse says</strong>, <strong>how a traditional commentator reads it</strong>, and <strong>our own explanatory or artistic interpretation</strong>. Those layers can speak to one another without pretending they are identical.</p>
          <p>For a deeper biography and the wider Advaita context, read our <Link href="/articles/adi-shankaracharya-life-sannyasa-peethams">Adi Shankaracharya guide</Link>.</p>
        </section>

        <section id="how-to-read">
          <div className="eyebrow">A practical reading path</div>
          <h2>Read the Gita as a conversation that develops, not a quote collection.</h2>
          <p><strong>First pass:</strong> read all eighteen chapters in sequence, even when a section feels difficult. Notice how Arjuna’s questions change and how Krishna revisits earlier ideas from new angles.</p>
          <p><strong>Second pass:</strong> return to Chapters 2, 3, 6, 11, 12, 13 and 18. These give a strong map of Self, action, meditation, the universal form, devotion, field and knower, and the final synthesis.</p>
          <p><strong>Third pass:</strong> compare commentaries. A verse such as 18.66 carries different philosophical weight in Advaita, Viśiṣṭādvaita and Dvaita. Translation alone can hide the interpretive decisions already being made for you.</p>
          <p><strong>Keep the Mahabharata nearby:</strong> the Gita is spoken to Arjuna in a particular crisis. The epic prevents the teaching from becoming weightless philosophy detached from family, politics, promises, violence and consequence.</p>
        </section>

        <div id="questions"><FaqSection items={faq}/></div>

        <section id="sources" className="guideSources">
          <div className="eyebrow">Primary text and traditional references</div>
          <h2>Sources used for this guide</h2>
          <p>We favour stable institutional or scholarly text repositories for the Sanskrit and traditional commentary. Interpretive claims are identified as interpretation rather than silently presented as the only possible reading.</p>
          <ul>{sources.map(([label,href,note])=><li key={href}><a href={href} target="_blank" rel="noreferrer"><strong>{label} ↗</strong></a><p>{note}</p></li>)}</ul>
        </section>
      </div>
    </div>
  </article>;
}
