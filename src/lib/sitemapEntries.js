import { articles } from '@/lib/blogData';
import { getAllTemplateSlugs } from '@/lib/templateLandingPages';
import { getAllVoorbeeldSlugs } from '@/lib/voorbeeldLandingPages';
import { getAllOfferteVoorbeeldSlugs } from '@/lib/offerteVoorbeeldLandingPages';

export const SITEMAP_BASE_URL = 'https://factuurbaas.nl';

export function getSitemapEntries() {
  const staticPages = [
    { url: SITEMAP_BASE_URL, lastModified: new Date('2026-07-09'), changeFrequency: 'daily', priority: 1 },
    { url: `${SITEMAP_BASE_URL}/create-invoice`, lastModified: new Date('2026-07-09'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITEMAP_BASE_URL}/factuur-maken`, lastModified: new Date('2026-07-09'), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITEMAP_BASE_URL}/template`, lastModified: new Date('2026-07-09'), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITEMAP_BASE_URL}/factuur-template`, lastModified: new Date('2026-07-09'), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${SITEMAP_BASE_URL}/offerte-template`, lastModified: new Date('2026-07-09'), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${SITEMAP_BASE_URL}/voorbeeld`, lastModified: new Date('2026-07-09'), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITEMAP_BASE_URL}/factuur-voorbeeld`, lastModified: new Date('2026-07-09'), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${SITEMAP_BASE_URL}/offerte-voorbeeld`, lastModified: new Date('2026-07-09'), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${SITEMAP_BASE_URL}/tools`, lastModified: new Date('2026-07-09'), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITEMAP_BASE_URL}/tools/btw-calculator`, lastModified: new Date('2026-07-09'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITEMAP_BASE_URL}/tools/offerte-maker`, lastModified: new Date('2026-07-09'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITEMAP_BASE_URL}/tools/uurtarief-calculator`, lastModified: new Date('2026-07-09'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITEMAP_BASE_URL}/tools/uurtarief-naar-inkomen`, lastModified: new Date('2026-07-10'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITEMAP_BASE_URL}/tools/factuurnummer-generator`, lastModified: new Date('2026-07-10'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITEMAP_BASE_URL}/tools/marge-calculator`, lastModified: new Date('2026-07-10'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITEMAP_BASE_URL}/tools/betaaltermijn-calculator`, lastModified: new Date('2026-07-10'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITEMAP_BASE_URL}/tools/kor-calculator`, lastModified: new Date('2026-07-10'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITEMAP_BASE_URL}/tools/factuur-maken`, lastModified: new Date('2026-07-09'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITEMAP_BASE_URL}/premium`, lastModified: new Date('2026-02-05'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITEMAP_BASE_URL}/blogs`, lastModified: new Date('2026-02-05'), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITEMAP_BASE_URL}/2xgen`, lastModified: new Date('2026-02-05'), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITEMAP_BASE_URL}/privacybeleid`, lastModified: new Date('2026-02-05'), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITEMAP_BASE_URL}/algemene-voorwaarden`, lastModified: new Date('2026-02-05'), changeFrequency: 'yearly', priority: 0.3 },
  ];

  const blogPages = articles.map((article) => ({
    url: `${SITEMAP_BASE_URL}/blogs/${article.slug}`,
    lastModified: article.dateModified ? new Date(article.dateModified) : new Date(article.datePublished || '2026-02-05'),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const templatePages = getAllTemplateSlugs().map((slug) => ({
    url: `${SITEMAP_BASE_URL}/factuur-template/${slug}`,
    lastModified: new Date('2026-07-09'),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const voorbeeldPages = getAllVoorbeeldSlugs().map((slug) => ({
    url: `${SITEMAP_BASE_URL}/factuur-voorbeeld/${slug}`,
    lastModified: new Date('2026-07-09'),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const offerteVoorbeeldPages = getAllOfferteVoorbeeldSlugs().map((slug) => ({
    url: `${SITEMAP_BASE_URL}/offerte-voorbeeld/${slug}`,
    lastModified: new Date('2026-07-09'),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticPages, ...templatePages, ...voorbeeldPages, ...offerteVoorbeeldPages, ...blogPages];
}
