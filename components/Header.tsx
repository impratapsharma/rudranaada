import Link from 'next/link';
import {site} from '@/lib/site';

const nav=[['Stories','/articles'],['Mahabharata','/mahabharata'],['Ramayana','/ramayana'],['Deities','/deities'],['Guru','/guru'],['Mantras','/mantras'],['Music','/music']];

export function Header(){return <header className="siteHeader"><div className="shell headerInner"><Link className="brand brandLogo" href="/" aria-label="RudraNāda home"><img src="/rudranaada-logo.svg" alt="RudraNāda"/></Link><nav aria-label="Primary navigation"><ul className="navList">{nav.map(([label,href])=><li key={href}><Link href={href}>{label}</Link></li>)}</ul></nav><a className="button buttonSmall" href={site.youtube} rel="noreferrer" target="_blank">YouTube ↗</a></div></header>}
