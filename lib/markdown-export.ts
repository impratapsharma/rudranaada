import {getArticle} from '@/lib/content';
import {getFestivalGuide} from '@/lib/festival-guides';
import {getKanda,kandaGuides,ramayanaOverview,ramayanaSources} from '@/lib/ramayana';
import {getHubEnhancement} from '@/lib/hub-enhancements';
import {getMusic,fullSongs} from '@/lib/music';
import {getRichMusic} from '@/lib/rich-music';
import {resolveSourceHref} from '@/lib/source-links';
import {toIast} from '@/lib/sanskrit-iast';
import {vishnuSahasranamaSections} from '@/lib/vishnu-sahasranama';
import {site} from '@/lib/site';

const articleSlugs=new Set([
  'adi-shankaracharya-life-sannyasa-peethams',
  'why-krishna-showed-arjuna-vishvarupa-bhagavad-gita',
  'why-hanuman-forgot-his-powers-jambavan-ramayana',
  'karna-mahabharata-story-text-popular-retellings'
]);
const festivalSlugs=new Set(['navratri','diwali']);
const musicSlugs=new Set(['uth-parth','surya-putra-karna','kalabhairava-ashtakam']);

function sourceLine(source:{label:string;note?:string;href?:string}){
  const href=resolveSourceHref(source);
  return '- '+(href?'['+source.label+']('+href+')':source.label)+(source.note?' — '+source.note:'');
}

function articleMarkdown(slug:string,kind:'article'|'festival'){
  const a=kind==='article'?getArticle(slug):getFestivalGuide(slug);
  if(!a)return null;
  const canonical=site.url+(kind==='article'?'/articles/':'/festivals/')+a.slug;
  const lines=[
    '# '+a.title,
    '',
    '> '+a.dek,
    '',
    'Canonical: '+canonical,
    '',
    '## In brief',
    '',
    a.quickAnswer??a.description,
    ''
  ];
  if(a.keyTakeaways?.length){
    lines.push('## Key takeaways','',...a.keyTakeaways.map(item=>'- '+item),'');
  }
  for(const section of a.body){
    if(section.heading)lines.push('## '+section.heading,'');
    lines.push(...section.paragraphs.flatMap(p=>[p,'']));
    if(section.table){
      const cell=(value:string)=>value.replace(/\|/g,'\\|').replace(/\n/g,' ');
      lines.push(section.table.caption,'','| '+section.table.headers.map(cell).join(' | ')+' |','| '+section.table.headers.map(()=>'---').join(' | ')+' |',...section.table.rows.map(row=>'| '+row.map(cell).join(' | ')+' |'),'');
    }
    if(section.items?.length)lines.push(...section.items.map(item=>'- '+item),'');
  }
  if(a.faq?.length){
    lines.push('## Questions readers ask','');
    for(const item of a.faq)lines.push('### '+item.question,'',item.answer,'');
  }
  if(a.sources?.length)lines.push('## Sources','',...a.sources.map(sourceLine),'');
  if(a.relatedLinks?.length)lines.push('## Continue reading','',...a.relatedLinks.map(link=>'- ['+link.label+']('+site.url+link.href+')'),'');
  return lines.join('\n');
}

function ramayanaMarkdown(kanda?:string){
  if(kanda){
    const guide=getKanda(kanda);
    if(!guide)return null;
    const sourceKeys=guide.number===7?[guide.sourceKey,'scholarship']:[guide.sourceKey];
    const lines=[
      '# '+guide.title,'','> '+guide.dek,'',
      'Canonical: '+site.url+'/ramayana/'+guide.slug,'',
      '## '+guide.name+' in brief','',guide.summary,''
    ];
    for(const section of guide.sections){
      lines.push('## '+section.heading,'',...section.paragraphs.flatMap(p=>[p,'']));
      if(section.reference)lines.push('Reference: '+guide.name+', '+section.reference,'');
    }
    lines.push('## Chapter-range guide','');
    for(const row of guide.readingMap)lines.push('- **'+(row.from===row.to?row.from:row.from+'–'+row.to)+': '+row.title+'** — '+row.summary);
    lines.push('','## Questions readers ask','');
    for(const item of guide.questions)lines.push('### '+item.question,'',item.answer,'');
    lines.push('## Sources','');
    for(const key of sourceKeys){
      const source=ramayanaSources[key];
      lines.push('- ['+source.label+']('+source.href+') — '+source.note);
    }
    lines.push('','## All seven Kandas','');
    for(const item of kandaGuides)lines.push('- ['+item.name+']('+site.url+'/ramayana/'+item.slug+')');
    return lines.join('\n');
  }

  const guide=ramayanaOverview;
  const lines=[
    '# '+guide.title,'','> '+guide.dek,'',
    'Canonical: '+site.url+'/ramayana','',
    '## In brief','',guide.summary,'',
    '## The seven Kandas',''
  ];
  for(const item of kandaGuides)lines.push('- ['+item.name+']('+site.url+'/ramayana/'+item.slug+') — '+item.title);
  lines.push('');
  for(const section of guide.sections)lines.push('## '+section.heading,'',...section.paragraphs.flatMap(p=>[p,'']));
  lines.push('## Questions readers ask','');
  for(const item of guide.questions)lines.push('### '+item.question,'',item.answer,'');
  lines.push('## Sources','');
  for(const source of Object.values(ramayanaSources))lines.push('- ['+source.label+']('+source.href+') — '+source.note);
  return lines.join('\n');
}

function mahabharataMarkdown(){
  const enhancement=getHubEnhancement('mahabharata');
  const releases=fullSongs.filter(song=>song.themes.includes('Mahabharata'));
  const lines=[
    '# Mahabharata: Stories, Characters & RudraNāda Music','',
    '> Explore the Mahabharata through Krishna, Arjuna, Karna, Abhimanyu, Draupadi, Bhishma, Kurukshetra and the Bhagavad Gita.','',
    'Canonical: '+site.url+'/mahabharata','',
    '## In brief','',enhancement.quickAnswer,'',
    '## Key takeaways','',...enhancement.keyTakeaways.map(item=>'- '+item),'',
    '## Core reading and listening',''
  ];
  const links=[
    ['Krishna and Arjuna · Uth Parth','/music/uth-parth'],
    ['Karna','/articles/karna-mahabharata-story-text-popular-retellings'],
    ['Vishvarupa','/articles/why-krishna-showed-arjuna-vishvarupa-bhagavad-gita']
  ];
  for(const [label,href] of links)lines.push('- ['+label+']('+site.url+href+')');
  for(const song of releases)lines.push('- ['+song.title+']('+site.url+'/music/'+song.slug+')');
  lines.push('','## Questions readers ask','');
  for(const item of enhancement.faq)lines.push('### '+item.question,'',item.answer,'');
  return lines.join('\n');
}

function musicMarkdown(slug:string){
  const m=getMusic(slug);
  if(!m)return null;
  const rich=getRichMusic(slug);
  const lines=['# '+(rich?.displayTitle??m.title),'','> '+(rich?.dek??m.summary),'','Canonical: '+site.url+'/music/'+m.slug,'','YouTube: '+m.youtubeUrl,''];
  if(!rich){
    if(m.description)lines.push('## About the song','',m.description,'');
    return lines.join('\n');
  }
  lines.push('## In brief','',rich.quickAnswer,'','## Key takeaways','',...rich.keyTakeaways.map(item=>'- '+item),'');
  lines.push('## '+rich.contextHeading,'',...rich.context.flatMap(p=>[p,'']));
  lines.push('## Lyrics','');
  for(const section of rich.lyrics){
    lines.push('### '+section.label,'',...section.lines,'');
    if(section.transliteration?.length)lines.push(...section.transliteration,'');
  }
  lines.push('## '+rich.meaningsHeading,'');
  for(const item of rich.meanings)lines.push('### '+item.heading,'',item.text,'');
  lines.push('## '+rich.referencesHeading,'');
  for(const ref of rich.references){
    const href=ref.url??resolveSourceHref(ref.source??ref.verse);
    lines.push('- **'+ref.verse+' · '+ref.title+'** — '+ref.note+(href?' ['+(ref.source??'Source')+']('+href+')':''));
  }
  lines.push('','## Questions listeners ask','');
  for(const item of rich.faq)lines.push('### '+item.question,'',item.answer,'');
  return lines.join('\n');
}

function vishnuMarkdown(){
  const lines=[
    '# Śrī Viṣṇu Sahasranāma Stotram','',
    '> Complete Sanskrit Vishnu Sahasranāma in IAST Roman transliteration, generated from the same verified Sanskrit master used by RudraNāda’s script editions.','',
    'Canonical: '+site.url+'/stotrams/vishnu-sahasranama',''
  ];
  for(const section of vishnuSahasranamaSections){
    lines.push('## '+section.englishTitle,'');
    for(const block of section.blocks){
      if(block.type==='speaker')lines.push('### '+toIast(block.text),'');
      else if(block.type==='line')lines.push(toIast(block.text),'');
      else {
        if(block.number)lines.push('**'+block.number+'.**');
        lines.push(...block.lines.map(line=>toIast(line)),'');
      }
    }
  }
  lines.push('## Sources','',
    '- [Śṛṅgeri Śāradā Pīṭham edition](https://books.sringeri.net/products/sri-vishnu-sahasranama-stotra)',
    '- [Sanskrit Documents cross-check](https://sanskritdocuments.org/doc_vishhnu/vsahasranew.html)'
  );
  return lines.join('\n');
}

export function getMarkdownExport(segments:string[]){
  if(segments[0]==='articles'&&segments[1]&&articleSlugs.has(segments[1]))return articleMarkdown(segments[1],'article');
  if(segments[0]==='festivals'&&segments[1]&&festivalSlugs.has(segments[1]))return articleMarkdown(segments[1],'festival');
  if(segments[0]==='music'&&segments[1]&&musicSlugs.has(segments[1]))return musicMarkdown(segments[1]);
  if(segments[0]==='ramayana')return ramayanaMarkdown(segments[1]);
  if(segments.length===1&&segments[0]==='mahabharata')return mahabharataMarkdown();
  if(segments.join('/')==='stotrams/vishnu-sahasranama')return vishnuMarkdown();
  return null;
}


export const cornerstoneMarkdownPaths=[
  ['articles','adi-shankaracharya-life-sannyasa-peethams'],
  ['ramayana'],
  ...kandaGuides.map(guide=>['ramayana',guide.slug]),
  ['mahabharata'],
  ['articles','why-krishna-showed-arjuna-vishvarupa-bhagavad-gita'],
  ['articles','why-hanuman-forgot-his-powers-jambavan-ramayana'],
  ['articles','karna-mahabharata-story-text-popular-retellings'],
  ['festivals','navratri'],
  ['festivals','diwali'],
  ['music','uth-parth'],
  ['music','surya-putra-karna'],
  ['music','kalabhairava-ashtakam'],
  ['stotrams','vishnu-sahasranama']
];

export function getFullMarkdownExport(){
  return cornerstoneMarkdownPaths
    .map(path=>getMarkdownExport(path))
    .filter((value):value is string=>Boolean(value))
    .join('\n\n---\n\n');
}
