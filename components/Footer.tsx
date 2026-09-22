import Link from 'next/link';
import {site} from '@/lib/site';

export function Footer(){return <footer className="footer">
  <div className="shell footerGrid">
    <div>
      <Link className="brand footerBrand brandLogo" href="/" aria-label="RudraNāda home"><img src="/rudranaada-logo.svg" alt="RudraNāda"/></Link>
      <p className="muted">Original devotional music, epic stories and reflections for people who want to stay with the meaning a little longer.</p>
    </div>
    <div className="footerLinks">
      <Link href="/about">About</Link>
      <Link href="/articles">Stories</Link>
      <Link href="/guru">Guru Bodha</Link>
      <Link href="/mantras">Mantras</Link>
      <Link href="/music">Music</Link>
      <a href="/feed.xml">RSS</a>
      <a href={site.youtube} target="_blank" rel="noreferrer">YouTube</a>
      <a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
      <a href={site.x} target="_blank" rel="noreferrer">X</a>
    </div>
  </div>
  <div className="shell footerBottom">© {new Date().getFullYear()} RudraNāda. Listen deeply. Read carefully.</div>
</footer>}
