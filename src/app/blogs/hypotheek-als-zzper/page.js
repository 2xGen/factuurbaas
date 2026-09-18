import HypotheekHubContent from '@/components/blogs/HypotheekHubContent';
import {
  HYPOTHEEK_HUB_IMAGE,
  HYPOTHEEK_HUB_PATH,
  getHypotheekHubBreadcrumbs,
  getHypotheekHubSections,
} from '@/lib/hypotheekHub';

const PAGE_URL = `https://factuurbaas.nl${HYPOTHEEK_HUB_PATH}`;
const TITLE = "Hypotheek als zzp'er";
const DESCRIPTION =
  "Hoe werkt een hypotheek als zzp'er? Overzicht van inkomen, jaarcijfers, maximale hypotheek, starters en hypotheekadvies voor ondernemers.";

const hubOgImages = [
  {
    url: HYPOTHEEK_HUB_IMAGE.url,
    width: 1200,
    height: 630,
    alt: HYPOTHEEK_HUB_IMAGE.alt,
  },
];

export const metadata = {
  title: `${TITLE} | FactuurBaas`,
  description: DESCRIPTION,
  keywords:
    "hypotheek als zzp'er, hypotheek zzp, hypotheek voor zzp'ers, hypotheek ondernemer, hypotheek berekenen zzp, toetsinkomen zzp, jaarcijfers hypotheek zzp",
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: 'website',
    siteName: 'FactuurBaas',
    images: hubOgImages,
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [HYPOTHEEK_HUB_IMAGE.url],
  },
  alternates: { canonical: PAGE_URL },
};

export default function HypotheekAlsZzperHubPage() {
  const sections = getHypotheekHubSections();
  const allGuides = sections.flatMap((s) => s.articles);
  const crumbs = getHypotheekHubBreadcrumbs();

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.href
        ? `https://factuurbaas.nl${item.href}`
        : PAGE_URL,
    })),
  };

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    image: HYPOTHEEK_HUB_IMAGE.url,
    isPartOf: { '@type': 'WebSite', name: 'FactuurBaas', url: 'https://factuurbaas.nl' },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: allGuides.map((article, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: article.title,
        url: `https://factuurbaas.nl/blogs/${article.slug}`,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <HypotheekHubContent />
    </>
  );
}
