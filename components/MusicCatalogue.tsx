'use client';
import {useState} from 'react';
import type {MusicEntry} from '@/lib/music';
import {MusicCard} from '@/components/MusicCard';

export function MusicCatalogue({entries}:{entries:MusicEntry[]}) {
  const [format,setFormat] = useState<'video'|'short'>('video');
  const [query,setQuery] = useState('');
  const [theme,setTheme] = useState('');
  const themes = [...new Set(entries.flatMap(m=>m.themes))].sort();
  const found = entries.filter(m=>m.format===format && (!theme || m.themes.includes(theme)) && `${m.title} ${m.themes.join(' ')} ${m.summary}`.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase()));
  return <>
    <div className="catalogueControls">
      <div className="formatSwitch" aria-label="Video format">
        {(['video','short'] as const).map(value=><button type="button" key={value} aria-pressed={format===value} onClick={()=>setFormat(value)}>{value==='video'?'Full videos':'Shorts'} <span>{entries.filter(m=>m.format===value).length}</span></button>)}
      </div>
      <div className="catalogueFilters">
        <label>Search music<input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Title, deity or epic" /></label>
        <label>Explore by theme<select value={theme} onChange={e=>setTheme(e.target.value)}><option value="">All themes</option>{themes.map(t=><option key={t}>{t}</option>)}</select></label>
      </div>
    </div>
    <p className="muted" role="status">{found.length} {format==='video'?'full videos':'Shorts'}</p>
    {found.length ? <div className="grid3">{found.map(m=><MusicCard key={m.videoId} entry={m}/>)}</div> : <div className="callout">No music matches these filters. Try another title or theme.</div>}
  </>;
}
