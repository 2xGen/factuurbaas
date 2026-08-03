import { notFound } from 'next/navigation';
import ArticlePostClient from '@/components/articles/ArticlePostClient';
import { getGuideBySlug, getRelatedGuideItems, guides } from '@/lib/guideData';
import { clusterToPillarId } from '@/lib/guideHub';
import { siteOpenGraphImages, SITE_OG_IMAGE } from '@/lib/siteOg';

export const dynamic = 'force-dynamic';

export async function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = typeof params.then === 'function' ? await params : params;
  const guide = getGuideBySlug(resolvedParams.slug);
  if (!guide) return { title: 'Gids | FactuurBaas' };

  const title = guide.seoTitle || guide.title;
  const published = guide.datePublished ? `${guide.datePublished}T12:00:00+01:00` : '';
  const modified = guide.dateModified ? `${guide.dateModified}T12:00:00+01:00` : published;
  const guideUrl = `https://factuurbaas.nl/gidsen/${guide.slug}`;

  return {
    title: `${title} | FactuurBaas`,
    description: guide.excerpt,
    keywords: guide.keywords,
    openGraph: {
      title,
      description: guide.excerpt,
      url: guideUrl,
      type: 'article',
      siteName: 'FactuurBaas',
      images: siteOpenGraphImages,
      publishedTime: published,
      modifiedTime: modified,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: guide.excerpt,
      images: [SITE_OG_IMAGE],
    },
    alternates: { canonical: guideUrl },
  };
}

export default async function GuidePostPage({ params }) {
  const resolvedParams = typeof params.then === 'function' ? await params : params;
  const guide = getGuideBySlug(resolvedParams.slug);
  if (!guide) notFound();

  const pillarId = clusterToPillarId(guide.cluster);
  const listHref = pillarId ? `/blogs?pillar=${pillarId}` : '/blogs';

  return (
    <ArticlePostClient
      article={guide}
      relatedItems={getRelatedGuideItems(guide)}
      basePath="/gidsen"
      listHref={listHref}
      listLabel="Terug naar gidsen"
      breadcrumbSection="Gidsen"
    />
  );
}
