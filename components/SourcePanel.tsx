import {resolveSourceHref,type SourceLike} from '@/lib/source-links';

export function SourcePanel({sources,title='Primary texts and references'}:{sources:SourceLike[];title?:string}){
  if(!sources.length)return null;
  return <section className="section"><div className="shell"><div className="hubLongform articleSources">
    <div className="eyebrow">Sources</div>
    <h2>{title}</h2>
    <p className="sourceIntro">These links are provided so readers and machines can trace important claims back to the text or reference used.</p>
    {sources.map(source=>{const href=resolveSourceHref(source);return <div className="sourceReference" key={source.label}>
      {href?<strong><a href={href} target="_blank" rel="noreferrer">{source.label} ↗</a></strong>:<strong>{source.label}</strong>}
      {source.note&&<span>{source.note}</span>}
    </div>})}
  </div></div></section>;
}
