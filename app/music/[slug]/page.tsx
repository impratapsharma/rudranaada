import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {getMusic,music} from '@/lib/content';
import {site} from '@/lib/site';
import {Breadcrumbs} from '@/components/Breadcrumbs';
import {JsonLd} from '@/components/JsonLd';

export function generateStaticParams() {
  return music.map((m) => ({slug: m.slug}));
}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}): Promise<Metadata> {
  const {slug} = await params;
  const m = getMusic(slug);
  if (!m) return {};
  return {
    title: m.title,
    description: m.description,
    alternates: {canonical: '/music/' + m.slug},
    robots: {index: false, follow: true},
    openGraph: {
      title: m.title,
      description: m.description,
      url: site.url + '/music/' + m.slug,
      type: 'music.song',
    },
  };
}

export default async function Page({params}:{params:Promise<{slug:string}>}) {
  const {slug} = await params;
  const m = getMusic(slug);
  if (!m) notFound();

  return (
    <article className="articleWrap">
      <JsonLd data={{
        '@context':'https://schema.org',
        '@type':'MusicRecording',
        name:m.title,
        url:site.url+'/music/'+m.slug,
        byArtist:{'@type':'MusicGroup',name:'RudraNāda'},
        genre:'Devotional / Epic'
      }} />
      <Breadcrumbs items={[{label:'Music',href:'/music'},{label:m.title,href:'/music/'+m.slug}]} />
      <div className="eyebrow">{m.eyebrow}</div>
      <h1>{m.title}</h1>
      <p className="lede">{m.description}</p>
      <div className="callout">The exact YouTube video URL will be connected before this page is opened to search indexing.</div>
      <div className="articleBody">
        <h2>The world behind the song</h2>
        <p>{m.story}</p>
        <p>Each RudraNāda music page can grow into lyrics, transliteration, meaning, textual references and related stories.</p>
      </div>
      <div className="heroActions">
        <a className="button" href={m.youtubeUrl ?? site.youtube} target="_blank" rel="noreferrer">Watch on YouTube ↗</a>
      </div>
      <div className="tagRow">
        {m.themes.map((t) => <span className="tag" key={t}>{t}</span>)}
      </div>
    </article>
  );
}
