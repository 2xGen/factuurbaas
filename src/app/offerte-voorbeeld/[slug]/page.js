import { notFound } from 'next/navigation';
import OfferteVoorbeeldLandingPage from '@/components/landing/OfferteVoorbeeldLandingPage';
import {
  getAllOfferteVoorbeeldSlugs,
  getOfferteVoorbeeldPage,
} from '@/lib/offerteVoorbeeldLandingPages';
import { siteOpenGraphImages } from '@/lib/siteOg';

export async function generateStaticParams() {
  return getAllOfferteVoorbeeldSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getOfferteVoorbeeldPage(slug);
  if (!page) return {};

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `https://factuurbaas.nl/offerte-voorbeeld/${slug}` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `https://factuurbaas.nl/offerte-voorbeeld/${slug}`,
      type: 'website',
      images: siteOpenGraphImages,
    },
  };
}

export default async function OfferteVoorbeeldSlugPage({ params }) {
  const { slug } = await params;
  const page = getOfferteVoorbeeldPage(slug);
  if (!page) notFound();

  return <OfferteVoorbeeldLandingPage page={page} />;
}
