import type {MetadataRoute} from 'next';
import {articles,fullSongs} from '@/lib/content';
import {site} from '@/lib/site';

export default function sitemap():MetadataRoute.Sitemap{
  const staticRoutes=['','/about','/articles','/music','/deities','/mahabharata','/ramayana','/mantras','/festivals','/guru','/authors/pratap'];
  return [
    ...staticRoutes.map(path=>({url:site.url+path,lastModified:new Date(),changeFrequency:'weekly' as const,priority:path===''?1:['/mahabharata','/ramayana','/guru'].includes(path)?0.85:0.7})),
    ...fullSongs.map(video=>({url:site.url+'/music/'+video.slug,lastModified:new Date(video.publishedAt),changeFrequency:'monthly' as const,priority:video.slug==='uth-parth'?0.9:0.8})),
    ...articles.map(article=>({url:site.url+'/articles/'+article.slug,lastModified:new Date(article.publishedAt),changeFrequency:'monthly' as const,priority:0.8}))
  ];
}
