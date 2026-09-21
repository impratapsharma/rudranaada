import type {Metadata} from 'next';
import {Breadcrumbs} from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Mahabharata',
  description: 'Stories, characters and questions from the Mahabharata, explored with clear sourcing and context.',
  alternates: {canonical: '/mahabharata'},
  robots: {index: false, follow: true},
};

export default function Page() {
  return (
    <section className="pageHero">
      <div className="shell">
        <Breadcrumbs items={[{label:'Mahabharata',href:'/mahabharata'}]} />
        <div className="eyebrow">Epic library</div>
        <h1>The Mahabharata, one story at a time.</h1>
        <p>Characters, turning points, moral tensions, textual references and RudraNāda music will grow here into a connected reading and listening journey.</p>
      </div>
    </section>
  );
}
