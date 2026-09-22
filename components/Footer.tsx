import Link from 'next/link';
import {site} from '@/lib/site';

export function Footer(){return <footer className="footer">
  <div className="shell footerGrid">
    <div className="footerIntro">
      <Link className="brand footerBrand brandLogo" href="/" aria-label="RudraNāda home"><img src="/rudranaada-logo.svg" alt="RudraNāda"/></Link>
      <p>Original devotional music, epic stories and reflections for people who want to stay with the meaning a little longer.</p>
    </div>

    <div className="footerColumn">
      <div className="footerLabel">Explore</div>
      <nav className="footerNav" aria-label="Footer navigation">
        <Link href="/about">About</Link>
        <Link href="/articles">Stories</Link>
        <Link href="/mahabharata">Mahabharata</Link>
        <Link href="/ramayana">Ramayana</Link>
        <Link href="/deities">Deities</Link>
        <Link href="/guru">Guru Bodha</Link>
        <Link href="/mantras">Mantras</Link>
        <Link href="/music">Music</Link>
        <a href="/feed.xml">RSS</a>
      </nav>
    </div>

    <div className="footerColumn">
      <div className="footerLabel">Follow</div>
      <div className="footerSocials" aria-label="RudraNāda social channels">
        <a href={site.youtube} target="_blank" rel="noreferrer">YouTube ↗</a>
        <a href={site.instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
        <a href={site.x} target="_blank" rel="noreferrer">X ↗</a>
      </div>
    </div>
  </div>

  <div className="shell footerBottom">
    <span>© {new Date().getFullYear()} RudraNāda.</span>
    <span>Listen deeply. Read carefully.</span>
  </div>
</footer>}
