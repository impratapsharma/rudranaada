export type SourceLike={label:string;note?:string;href?:string};

const sourceRules:{test:RegExp;href:string}[]=[
  {test:/Gita Supersite|IIT Kanpur/i,href:'https://www.gitasupersite.iitk.ac.in/'},
  {test:/Bhagavad Gita/i,href:'https://www.gitasupersite.iitk.ac.in/'},
  {test:/Valmiki Ramayana/i,href:'https://www.valmikiramayan.net/'},
  {test:/Goldman|Princeton Library of Asian Translations|Uttarakanda, Princeton University Press/i,href:'https://www.jstor.org/stable/j.ctt1gsmwj0'},
  {test:/Śṛṅgeri|Sringeri/i,href:'https://books.sringeri.net/products/sri-vishnu-sahasranama-stotra'},
  {test:/Sanskrit Documents/i,href:'https://sanskritdocuments.org/'},
  {test:/Drik Panchang/i,href:'https://www.drikpanchang.com/'},
  {test:/Prokerala/i,href:'https://www.prokerala.com/'},
  {test:/UNESCO.*Ramlila|Ramlila.*UNESCO/i,href:'https://ich.unesco.org/en/RL/ramlila-the-traditional-performance-of-the-ramayana-00110'},
  {test:/Devi Mahatmya|Durga Saptashati|Devi Kavaca/i,href:'https://sanskritdocuments.org/doc_devii/durga700.html'},
  {test:/Sri Rudram|Śrī Rudram|Rudram/i,href:'https://sanskritdocuments.org/doc_shiva/rudram.html'},
  {test:/Bhagavata Purana|Bhāgavata Purāṇa/i,href:'https://www.wisdomlib.org/hinduism/book/the-bhagavata-purana'},
  {test:/Shiromani Gurdwara Parbandhak Committee|SGPC/i,href:'https://sgpc.net/'}
];

export function resolveSourceHref(source:SourceLike|string){
  if(typeof source!=='string'&&source.href)return source.href;
  const label=typeof source==='string'?source:source.label;
  return sourceRules.find(rule=>rule.test.test(label))?.href;
}

export function citationUrls(sources:SourceLike[]|undefined){
  if(!sources)return [];
  return [...new Set(sources.map(resolveSourceHref).filter((href):href is string=>Boolean(href)))];
}

export type EditorialSource=SourceLike&{title?:string};

export const hubSources:Record<string,EditorialSource[]>={
  guru:[
    {label:'Bhagavad Gita 4.34 · Gita Supersite, IIT Kanpur',href:'https://www.gitasupersite.iitk.ac.in/',note:'Primary verse for humility, inquiry and service in approaching a teacher.'},
    {label:'Mundaka Upanishad 1.2.12',note:'Primary Upanishadic passage on approaching a teacher grounded in the teaching and established in Brahman.'}
  ],
  mantras:[
    {label:'Śrī Rudram · Sanskrit Documents',href:'https://sanskritdocuments.org/doc_shiva/rudram.html',note:'Primary Vedic context for Namaḥ Śivāya / Panchakshara discussion.'},
    {label:'Bhagavad Gita · Gita Supersite, IIT Kanpur',href:'https://www.gitasupersite.iitk.ac.in/',note:'Cross-check for Bhagavad Gita quotations and commentary.'}
  ],
  'deity-krishna':[
    {label:'Bhagavad Gita · Gita Supersite, IIT Kanpur',href:'https://www.gitasupersite.iitk.ac.in/',note:'Primary source for Krishna as Arjuna’s teacher in the Gita.'},
    {label:'Bhagavata Purana',href:'https://www.wisdomlib.org/hinduism/book/the-bhagavata-purana',note:'Source tradition for major Krishna narratives.'}
  ],
  'deity-shiva':[
    {label:'Śrī Rudram · Sanskrit Documents',href:'https://sanskritdocuments.org/doc_shiva/rudram.html',note:'Vedic Rudra material used as a primary source for Shiva-related sacred sound.'}
  ],
  'deity-devi':[
    {label:'Devi Mahatmya / Durga Saptashati · Sanskrit Documents',href:'https://sanskritdocuments.org/doc_devii/durga700.html',note:'Primary Shakta source for major Devi narratives and praise.'}
  ],
  'deity-hanuman':[
    {label:'Valmiki Ramayana',href:'https://www.valmikiramayan.net/',note:'Primary epic source for Hanuman’s role in Kishkindha, Sundara and Yuddha Kandas.'}
  ],
  'deity-narasimha':[
    {label:'Bhagavata Purana',href:'https://www.wisdomlib.org/hinduism/book/the-bhagavata-purana',note:'Source tradition for Prahlada and Narasimha.'}
  ],
  'deity-parashurama':[
    {label:'Valmiki Ramayana · Bala Kanda',href:'https://www.valmikiramayan.net/utf8/baala/baala_contents.htm',note:'Primary Ramayana source for Parashurama’s encounter with Rama.'}
  ]
};
