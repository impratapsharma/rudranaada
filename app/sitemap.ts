import type {MetadataRoute} from 'next';
import {articles,fullSongs,deityHubs} from '@/lib/content';
import {site} from '@/lib/site';
import {festivalGuides} from '@/lib/festival-guides';
import {kandaGuides,ramayanaUpdatedAt} from '@/lib/ramayana';

const majorFestivalSlugs=new Set([
  'diwali','navratri','maha-shivaratri','janmashtami','ganesh-chaturthi',
  'rama-navami','holi','dhanteras','kali-puja','govardhan-puja'
]);

export default function sitemap():MetadataRoute.Sitemap{
  const staticRoutes=[
    {path:'',priority:1,frequency:'weekly' as const},
    {path:'/festivals',priority:0.95,frequency:'weekly' as const},
    {path:'/mahabharata',priority:0.9,frequency:'weekly' as const},
    {path:'/ramayana',priority:0.9,frequency:'weekly' as const},
    {path:'/deities',priority:0.9,frequency:'weekly' as const},
    {path:'/mantras',priority:0.9,frequency:'weekly' as const},
    {path:'/music',priority:0.9,frequency:'weekly' as const},
    {path:'/guru',priority:0.85,frequency:'weekly' as const},
    {path:'/festivals/2026',priority:0.85,frequency:'weekly' as const},
    {path:'/articles',priority:0.8,frequency:'weekly' as const},
    {path:'/about',priority:0.6,frequency:'monthly' as const},
    {path:'/authors/pratap',priority:0.55,frequency:'monthly' as const}
  ];

  return [
    ...staticRoutes.map(route=>({
      url:site.url+route.path,
      changeFrequency:route.frequency,
      ...(route.path==='/ramayana'?{lastModified:new Date(ramayanaUpdatedAt)}:{}),
      priority:route.priority
    })),
    ...kandaGuides.map(guide=>({
      url:site.url+'/ramayana/'+guide.slug,
      lastModified:new Date(ramayanaUpdatedAt),
      changeFrequency:'monthly' as const,
      priority:0.82
    })),
    ...deityHubs.map(deity=>({
      url:site.url+'/deities/'+deity.slug,
      changeFrequency:'monthly' as const,
      priority:0.82
    })),
    ...festivalGuides.map(guide=>({
      url:site.url+'/festivals/'+guide.slug,
      lastModified:new Date(guide.updatedAt??guide.publishedAt),
      changeFrequency:'monthly' as const,
      priority:majorFestivalSlugs.has(guide.slug)?0.86:0.78
    })),
    ...articles.map(article=>({
      url:site.url+'/articles/'+article.slug,
      lastModified:new Date(article.updatedAt??article.publishedAt),
      changeFrequency:'monthly' as const,
      priority:0.76
    })),
    ...fullSongs.map(video=>({
      url:site.url+'/music/'+video.slug,
      lastModified:new Date(video.publishedAt),
      changeFrequency:'monthly' as const,
      priority:video.slug==='uth-parth'||video.slug==='kalabhairava-ashtakam'?0.84:0.74
    }))
  ];
}
