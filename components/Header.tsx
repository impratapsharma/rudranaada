import Link from 'next/link';
import {site} from '@/lib/site';

const nav=[
  ['Stories','/articles'],
  ['Mahabharata','/mahabharata'],
  ['Ramayana','/ramayana'],
  ['Deities','/deities'],
  ['Guru','/guru'],
  ['Mantras','/mantras'],
  ['Music','/music']
];

export function Header(){return <header className="siteHeader">
  <div className="shell headerInner">
    <Link className="brand brandLogo" href="/" aria-label="RudraNāda home"><img src="/rudranaada-logo.svg" alt="RudraNāda"/></Link>

    <nav className="desktopNav" aria-label="Primary navigation">
      <ul className="navList">{nav.map(([label,href])=><li key={href}><Link href={href}>{label}</Link></li>)}</ul>
    </nav>

    <a className="button buttonSmall headerYoutube" href={site.youtube} rel="noreferrer" target="_blank">YouTube ↗</a>

    <details className="mobileMenu">
      <summary>Menu</summary>
      <div className="mobileMenuPanel">
        <nav aria-label="Mobile navigation">
          {nav.map(([label,href])=><Link href={href} key={href}>{label}</Link>)}
        </nav>
        <a className="mobileYoutube" href={site.youtube} rel="noreferrer" target="_blank">YouTube ↗</a>
      </div>
    </details>
  </div>
</header>}
