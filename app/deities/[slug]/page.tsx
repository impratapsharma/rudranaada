import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import Link from 'next/link';
import {deityHubs,music} from '@/lib/content';
import {Breadcrumbs} from '@/components/Breadcrumbs';

export function generateStaticParams() {
  return deityHubs.map((d) => ({slug: d.slug}));
}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}): Promise<Metadata> {
  const {slug} = await params;
  const d = deityHubs.find((x) => x.slug === slug);
  if (!d) return {};
  return {
    title: d.name,
    description: d.description,
    alternates: {canonical: '/deities/' + d.slug},
    robots: {index: false, follow: true},
  };
}

export default async function Page({params}:{params:Promise<{slug:string}>}) {
  const {slug} = await params;
  const d = deityHubs.find((x) => x.slug === slug);
  if (!d) notFound();

  const related = music.filter((m) =>
    m.themes.some((t) => t.toLowerCase() === d.name.toLowerCase() || t.toLowerCase() === d.slug)
  );

  return (
    <>
      <section className="pageHero">
        <div className="shell">
          <Breadcrumbs items={[{label:'Deities',href:'/deities'},{label:d.name,href:'/deities/'+d.slug}]} />
          <div className="eyebrow">RudraNāda Guide</div>
          <h1>{d.name}</h1>
          <p>{d.description}</p>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <div className="sectionHead">
            <div><h2>A guide built with care.</h2></div>
            <p>This hub will collect researched stories, textual references, meanings, songs and related traditions as RudraNāda publishes them.</p>
          </div>
          {related.length > 0 && (
            <div className="grid3">
              {related.map((m) => (
                <Link className="card" href={'/music/' + m.slug} key={m.slug}>
                  <div className="cardMeta">Music</div>
                  <h3>{m.title}</h3>
                  <p>{m.description}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
