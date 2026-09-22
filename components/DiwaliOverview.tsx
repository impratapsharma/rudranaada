import Link from 'next/link';

const days=[
  {date:'6 Nov',name:'Dhanteras',href:'/articles/dhanteras-2026-date-meaning-dhanvantari',note:'Health, prosperity and preparation'},
  {date:'7–8 Nov',name:'Choti Diwali / Naraka Chaturdashi',href:'/articles/naraka-chaturdashi-2026-choti-diwali-story',note:'Krishna, Narakasura and regional cleansing traditions'},
  {date:'8 Nov',name:'Diwali / Lakshmi Puja',href:'/articles/lakshmi-puja-diwali-2026-meaning-rituals',note:'Main Amavasya night of lamps'},
  {date:'9–10 Nov',name:'Govardhan Puja / Annakut',href:'/articles/govardhan-puja-2026-story-annakut',note:'Krishna, Govardhan and gratitude'},
  {date:'11 Nov',name:'Bhai Dooj',href:'/articles/bhai-dooj-2026-story-meaning',note:'Brothers, sisters and family bonds'}
];

const stories=[
  ['Rama','Return to Ayodhya'],
  ['Lakshmi','Prosperity and auspiciousness'],
  ['Krishna','Narakasura and Govardhan'],
  ['Kali','Amavasya, protection and transformation'],
  ['Jain tradition','Mahavira’s nirvana'],
  ['Sikh tradition','Bandi Chhor Divas']
];

export function DiwaliOverview(){
  return <section className="diwaliOverview" aria-label="Diwali 2026 at a glance">
    <div className="diwaliOverviewHead">
      <div><div className="eyebrow">Diwali 2026 at a glance</div><h2>One festival season. Many stories.</h2></div>
      <div className="diwaliMainDate"><span>Main Diwali night</span><strong>8 November 2026</strong><small>Sunday · Kartika Amavasya</small></div>
    </div>
    <div className="diwaliTimeline">
      {days.map(day=><Link href={day.href} className="diwaliTimelineItem" key={day.name}>
        <span>{day.date}</span><strong>{day.name}</strong><small>{day.note}</small>
      </Link>)}
    </div>
    <div className="diwaliStoryMap">
      <div className="diwaliStoryIntro"><strong>Why is Diwali celebrated?</strong><p>There is no single answer followed everywhere in India.</p></div>
      {stories.map(([name,note])=><div className="diwaliStoryItem" key={name}><strong>{name}</strong><span>{note}</span></div>)}
    </div>
    <p className="diwaliOverviewNote">Dates around the main night can vary by location because Hindu festivals follow lunar tithis and local ritual windows. Use a city-specific panchang for exact puja timings.</p>
  </section>;
}
