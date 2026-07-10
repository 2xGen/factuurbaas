import { notFound } from 'next/navigation';
import VoorbeeldLandingPage from '@/components/landing/VoorbeeldLandingPage';
import { getAllVoorbeeldSlugs, getVoorbeeldPage } from '@/lib/voorbeeldLandingPages';

export async function generateStaticParams() {
  return getAllVoorbeeldSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getVoorbeeldPage(slug);
  if (!page) return {};

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `https://factuurbaas.nl/factuur-voorbeeld/${slug}` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `https://factuurbaas.nl/factuur-voorbeeld/${slug}`,
      type: 'website',
    },
  };
}

export default async function FactuurVoorbeeldSlugPage({ params }) {
  const { slug } = await params;
  const page = getVoorbeeldPage(slug);
  if (!page) notFound();

  return <VoorbeeldLandingPage page={page} />;
}
