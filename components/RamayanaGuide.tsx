import Link from 'next/link';
import {GuideText} from '@/components/GuideText';
import {kandaGuides,ramayanaSources,type GuideSection,type GuideLink,type KandaGuide} from '@/lib/ramayana';

export function GuideContents({items}:{items:{id:string;heading:string}[]}){
  return <nav className="guideContents" aria-label="On this page">
    <details open><summary>On this page</summary><ol>{items.map(item=><li key={item.id}><a href={'#'+item.id}>{item.heading}</a></li>)}</ol></details>
  </nav>;
}

export function GuideSections({sections,guide}:{sections:GuideSection[];guide?:KandaGuide}){
  return <div className="guideProse">{sections.map(section=><section id={section.id} key={section.id}>
    <h2>{section.heading}</h2>
    {section.paragraphs.map((paragraph,index)=><p key={index}><GuideText text={paragraph}/></p>)}
    {section.reference&&guide&&<p className="guideReference"><a href={ramayanaSources[guide.sourceKey].href}>Source: {guide.name}, {section.reference.includes('–')?'sargas':'sarga'} {section.reference}</a><span> · Edition identified below</span></p>}
  </section>)}</div>;
}

export function KandaDirectory({current}:{current?:string}){
  return <ol className="kandaDirectory">{kandaGuides.map(guide=><li key={guide.slug}>
    <Link href={'/ramayana/'+guide.slug} aria-current={current===guide.slug?'page':undefined}>
      <span className="kandaNumber">{String(guide.number).padStart(2,'0')}</span>
      <div><span className="kandaName">{guide.name}</span><span className="kandaDescription">{guide.title.split(': ')[1]}</span></div>
      <span aria-hidden="true">↗</span>
    </Link>
  </li>)}</ol>;
}

export function GuideSources({sourceKeys,editionNote}:{sourceKeys:string[];editionNote?:string}){
  return <section id="sources" className="guideSources">
    <div className="eyebrow">Read the sources</div><h2>Texts, editions and references</h2>
    {editionNote&&<p>{editionNote}</p>}
    <ul>{sourceKeys.map(key=>{const source=ramayanaSources[key];return <li key={key}><a href={source.href}>{source.label} ↗</a><p>{source.note}</p></li>})}</ul>
    <p>Our narrative summaries and reflections are original prose. Translations and commentary at the linked sources remain the work of their named authors. The chapter maps help you locate passages; they do not replace reading the full text.</p>
  </section>;
}

export function GuideRelated({links}:{links:GuideLink[]}){
  return <nav className="guideRelated" aria-label="Related reading"><h2>Continue reading and listening</h2><ul>{links.map(link=><li key={link.href}><Link href={link.href}>{link.label} <span aria-hidden="true">→</span></Link></li>)}</ul></nav>;
}

export function KandaReadingMap({guide}:{guide:KandaGuide}){
  return <section id="chapter-guide" className="guideReadingMap">
    <div className="eyebrow">Read at your own pace</div><h2>{guide.name}: chapter-range guide</h2>
    <p>The ranges follow the source edition below. Each row groups a continuous part of the story; together they cover its main numbered chapter sequence.</p>
    <div className="guideTableScroll" role="region" aria-label={guide.name+' chapter ranges'} tabIndex={0}>
      <table><caption>{guide.chapterCount} main numbered sargas{guide.number===7?' plus the supplementary groups noted below':''}</caption><thead><tr><th scope="col">Sargas</th><th scope="col">What happens</th></tr></thead>
      <tbody>{guide.readingMap.map(row=><tr key={row.from}><th scope="row">{row.from===row.to?row.from:`${row.from}–${row.to}`}</th><td><strong>{row.title}</strong><p>{row.summary}</p></td></tr>)}</tbody></table>
    </div>
    <p className="guideReference"><a href={ramayanaSources[guide.sourceKey].href}>Open the {guide.name} source contents and choose a sarga ↗</a></p>
  </section>;
}

export function KandaPagination({guide}:{guide:KandaGuide}){
  const previous=kandaGuides[guide.number-2];
  const next=kandaGuides[guide.number];
  return <nav className="kandaPagination" aria-label="Continue through the Ramayana">
    <Link href={previous?'/ramayana/'+previous.slug:'/ramayana'}><span>← {previous?'Previous book':'Main guide'}</span><strong>{previous?.name??'The Valmiki Ramayana'}</strong></Link>
    <Link href={next?'/ramayana/'+next.slug:'/ramayana'}><span>{next?'Next book':'Return to the guide'} →</span><strong>{next?.name??'Explore the whole epic'}</strong></Link>
  </nav>;
}
