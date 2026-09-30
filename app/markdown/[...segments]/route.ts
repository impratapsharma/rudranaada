import {getMarkdownExport} from '@/lib/markdown-export';

export async function GET(_request:Request,{params}:{params:Promise<{segments:string[]}>}){
  const {segments}=await params;
  const markdown=getMarkdownExport(segments);
  if(!markdown)return new Response('Not found',{status:404});
  return new Response(markdown,{
    headers:{
      'Content-Type':'text/markdown; charset=utf-8',
      'Cache-Control':'public, max-age=0, s-maxage=86400, stale-while-revalidate=604800',
      'X-Robots-Tag':'noindex, follow'
    }
  });
}
