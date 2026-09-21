import type {MetadataRoute} from 'next';
import {articles} from '@/lib/content';
import {site} from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/about', '/articles', '/music', '/deities'];

  return [
    ...staticRoutes.map((path) => ({
      url: site.url + path,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: path === '' ? 1 : 0.7,
    })),
    ...articles.map((article) => ({
      url: site.url + '/articles/' + article.slug,
      lastModified: new Date(article.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
