import {getFullMarkdownExport} from '@/lib/markdown-export';

export async function GET(){
  return new Response(getFullMarkdownExport(),{
    headers:{
      'Content-Type':'text/markdown; charset=utf-8',
      'Cache-Control':'public, max-age=0, s-maxage=86400, stale-while-revalidate=604800',
      'X-Robots-Tag':'noindex, follow'
    }
  });
}
