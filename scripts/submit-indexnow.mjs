import { submitUrlsToIndexNow } from '../src/lib/indexnow.js';

const DEFAULT_SITEMAP_URL = 'https://factuurbaas.nl/sitemap.xml';

function parseSitemapUrls(xml) {
  const matches = xml.matchAll(/<loc>([^<]+)<\/loc>/g);
  return [...matches].map((match) => match[1].trim());
}

async function fetchSitemapUrls(sitemapUrl) {
  const response = await fetch(sitemapUrl);
  if (!response.ok) {
    throw new Error(`Failed to fetch sitemap (${response.status} ${response.statusText})`);
  }
  const xml = await response.text();
  const urls = parseSitemapUrls(xml);
  if (urls.length === 0) {
    throw new Error('No URLs found in sitemap');
  }
  return urls;
}

async function main() {
  const sitemapUrl = process.env.INDEXNOW_SITEMAP_URL || DEFAULT_SITEMAP_URL;
  console.log(`Reading URLs from ${sitemapUrl}...`);

  const urlList = await fetchSitemapUrls(sitemapUrl);
  console.log(`Submitting ${urlList.length} URLs to IndexNow...`);

  const result = await submitUrlsToIndexNow(urlList);

  if (result.ok) {
    console.log(`IndexNow: ${result.status} ${result.statusText} — URLs submitted successfully.`);
    process.exit(0);
  }

  console.error(`IndexNow failed: ${result.status} ${result.statusText}`);
  process.exit(1);
}

main().catch((error) => {
  console.error('IndexNow submission error:', error.message || error);
  process.exit(1);
});
