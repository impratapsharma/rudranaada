'use client';

import Link from 'next/link';
import {festivalCalendar2026} from '@/lib/festival-calendar';

const fmt=(date:string)=>new Intl.DateTimeFormat('en-IN',{day:'numeric',month:'short'}).format(new Date(date+'T12:00:00'));

export function UpcomingFestivals(){
  const today=new Date();
  today.setHours(0,0,0,0);
  const upcoming=festivalCalendar2026
    .filter(item=>new Date(item.date+'T23:59:59')>=today)
    .slice(0,5);

  if(!upcoming.length){
    return <div className="calendarEmpty">The 2026 curated calendar is complete. The next yearly calendar will appear here.</div>;
  }

  return <div className="upcomingFestivalGrid">
    {upcoming.map(item=><article className="upcomingFestivalCard" key={item.date+item.name}>
      <div className="calendarDate">{fmt(item.date)}</div>
      <div>
        <h3>{item.name}</h3>
        <p>{item.meaning}</p>
        {item.href&&<Link href={item.href}>Explore →</Link>}
      </div>
    </article>)}
  </div>;
}
