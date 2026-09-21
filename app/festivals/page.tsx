import type {Metadata} from 'next';
import {Breadcrumbs} from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Festivals',
  description: 'Festival stories, meanings and regional traditions explained with clear sourcing and context.',
  alternates: {canonical: '/festivals'},
  robots: {index: false, follow: true},
};

export default function Page() {
  return (
    <section className="pageHero">
      <div className="shell">
        <Breadcrumbs items={[{label:'Festivals',href:'/festivals'}]} />
        <div className="eyebrow">Calendar & tradition</div>
        <h1>Festival stories with their layers intact.</h1>
        <p>Explore why festivals are celebrated, how stories differ across regions and traditions, and what primary texts do or do not say.</p>
      </div>
    </section>
  );
}
