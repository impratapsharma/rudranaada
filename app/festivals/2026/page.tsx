import type {Metadata} from 'next';
import Link from 'next/link';
import {Breadcrumbs} from '@/components/Breadcrumbs';
import {festivalCalendar2026,festivalsByMonth2026} from '@/lib/festival-calendar';
import {JsonLd} from '@/components/JsonLd';
import {site} from '@/lib/site';

export const metadata:Metadata={
  title:'2026 Hindu Festival Calendar: Dates, Tithis & Meaning',
  description:'A curated 2026 Hindu festival calendar with major dates, tithis, regional notes and short explanations for Navratri, Diwali, Janmashtami, Shivaratri, Rama Navami and more.',
  alternates:{canonical:'/festivals/2026'}
};

export default function Page(){
  return <>
    <JsonLd data={{
      '@context':'https://schema.org',
      '@type':'CollectionPage',
      name:'2026 Hindu Festival Calendar',
      url:site.url+'/festivals/2026',
      description:'A curated RudraNāda calendar of major Hindu festivals in 2026.',
      hasPart:festivalCalendar2026.map(item=>({'@type':'Thing',name:item.name,description:item.meaning}))
    }}/>

    <section className="pageHero festivalCalendarHero"><div className="shell">
      <Breadcrumbs items={[{label:'Festivals',href:'/festivals'},{label:'2026 Calendar',href:'/festivals/2026'}]}/>
      <div className="eyebrow">2026 Festival Calendar</div>
      <h1>The year, told through sacred days.</h1>
      <p>A curated calendar of major Hindu festivals and devotional observances in 2026, with the date, tithi where useful, regional context and the story or practice behind each day.</p>
    </div></section>

    <section className="section compactSection"><div className="shell">
      <div className="calendarNotice">
        <strong>Before you use a date for puja:</strong>
        <p>Festival dates follow lunar tithis, solar movement and local sunrise rules. A festival can differ by a day across traditions or locations. This calendar gives the major India dates; use a reliable local panchang for exact muhurta and city-specific timings.</p>
      </div>
      <nav className="monthJump" aria-label="Jump to month">
        {festivalsByMonth2026.filter(m=>m.festivals.length).map(m=><a href={'#'+m.name.toLowerCase()} key={m.name}>{m.name}</a>)}
      </nav>
    </div></section>

    <section className="section"><div className="shell festivalCalendar">
      {festivalsByMonth2026.filter(month=>month.festivals.length).map(month=><section className="festivalMonth" id={month.name.toLowerCase()} key={month.name}>
        <div className="festivalMonthHead"><span>{String(month.month).padStart(2,'0')}</span><h2>{month.name}</h2></div>
        <div className="festivalRows">
          {month.festivals.map(item=><article className="festivalRow" key={item.date+item.name}>
            <time dateTime={item.date}>
              <strong>{new Date(item.date+'T12:00:00').toLocaleDateString('en-IN',{day:'numeric'})}</strong>
              <span>{new Date(item.date+'T12:00:00').toLocaleDateString('en-IN',{weekday:'short'})}</span>
            </time>
            <div className="festivalRowMain">
              <div className="festivalNameLine"><h3>{item.name}</h3><span className="festivalTradition">{item.tradition}</span></div>
              {item.tithi&&<div className="festivalTithi">{item.tithi}</div>}
              <p>{item.meaning}</p>
              <div className="festivalRegion">{item.region}</div>
              {item.note&&<div className="festivalNote">{item.note}</div>}
            </div>
            <div className="festivalRowAction">{item.href?<Link href={item.href}>Read more →</Link>:<span>Calendar entry</span>}</div>
          </article>)}
        </div>
      </section>)}
    </div></section>

    <section className="section"><div className="shell copyColumns">
      <div><div className="eyebrow">How to read the calendar</div><h2>A date is only the outer edge of a festival.</h2></div>
      <div className="sectionCopy">
        <p>A Gregorian date tells you when to look. A tithi tells you how the day is situated in the lunar calendar. The story, ritual and regional tradition tell you why the day matters.</p>
        <p>That is why RudraNāda will not treat a festival calendar as a spreadsheet of holidays. Each important date should eventually open into a story, a deity, a mantra, a song or a deeper guide.</p>
      </div>
    </div></section>

    <section className="section"><div className="shell">
      <div className="calendarSources">
        <div className="eyebrow">Calendar basis</div>
        <h2>How these dates were checked</h2>
        <p>Major dates were cross-checked against Drik Panchang’s 2026 Indian/Hindu calendars and Prokerala’s 2026 Hindu calendar. Exact puja timings are intentionally not reproduced here because they depend on location.</p>
      </div>
    </div></section>
  </>;
}
