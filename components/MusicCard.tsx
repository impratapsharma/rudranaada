import Image from 'next/image';
import Link from 'next/link';
import type {MusicEntry} from '@/lib/music';
import {formatDate,formatDuration,getDisplayTitle} from '@/lib/music-format';

export function MusicCard({entry:m}:{entry:MusicEntry}) {
  const displayTitle=getDisplayTitle(m.slug,m.title);
  return <Link className="card musicCard" href={'/music/'+m.slug}>
    <div className="musicThumb">
      <Image src={m.thumbnail} alt="" width={640} height={360} unoptimized sizes="(max-width:620px) 100vw, (max-width:900px) 50vw, 33vw" />
      <span className="duration">{m.format==='short' ? 'Short · ' : ''}{formatDuration(m.durationSeconds)}</span>
    </div>
    <div className="musicCardBody"><div className="cardMeta">{m.eyebrow}</div><h3>{displayTitle}</h3><p>{m.summary}</p><time className="muted" dateTime={m.publishedAt}>{formatDate(m.publishedAt)}</time></div>
  </Link>;
}
