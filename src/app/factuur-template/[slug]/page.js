import { notFound } from 'next/navigation';
import InvoiceLandingPage from '@/components/landing/InvoiceLandingPage';
import { getAllTemplateSlugs, getTemplatePage } from '@/lib/templateLandingPages';
import { siteOpenGraphImages } from '@/lib/siteOg';

export async function generateStaticParams() {
  return getAllTemplateSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getTemplatePage(slug);
  if (!page) return {};

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `https://factuurbaas.nl/factuur-template/${slug}` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `https://factuurbaas.nl/factuur-template/${slug}`,
      type: 'website',
      images: siteOpenGraphImages,
    },
  };
}

export default async function FactuurTemplateSlugPage({ params }) {
  const { slug } = await params;
  const page = getTemplatePage(slug);
  if (!page) notFound();

  return (
    <InvoiceLandingPage
      page={page}
      hubHref="/factuur-template"
      hubLabel="Factuur templates"
    />
  );
}
