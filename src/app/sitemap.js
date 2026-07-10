import { getSitemapEntries } from '@/lib/sitemapEntries';

/** @type {import('next').MetadataRoute.Sitemap} */
export default function sitemap() {
  return getSitemapEntries();
}
