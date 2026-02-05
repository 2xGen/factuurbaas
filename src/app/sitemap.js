import { articles } from '@/lib/blogData';

const BASE_URL = 'https://factuurbaas.nl';

/** @type {import('next').MetadataRoute.Sitemap} */
export default function sitemap() {
  const staticPages = [
    { url: BASE_URL, lastModified: new Date('2026-02-05'), changeFrequency: 'daily', priority: 1 },
    { url: `${BASE_URL}/create-invoice`, lastModified: new Date('2026-02-05'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/blogs`, lastModified: new Date('2026-02-05'), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/2xgen`, lastModified: new Date('2026-02-05'), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/privacybeleid`, lastModified: new Date('2026-02-05'), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/algemene-voorwaarden`, lastModified: new Date('2026-02-05'), changeFrequency: 'yearly', priority: 0.3 },
  ];

  const blogPages = articles.map((article) => ({
    url: `${BASE_URL}/blogs/${article.slug}`,
    lastModified: article.dateModified ? new Date(article.dateModified) : new Date(article.datePublished || '2026-02-05'),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
