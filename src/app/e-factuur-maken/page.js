import { articles } from '@/lib/blogData';
import { withBookkeeperCtas } from '@/lib/boekhouderArticleCtas';
import BlogPostClient from '@/app/blogs/[slug]/BlogPostClient';

const SLUG = 'e-factuur-maken';

export const dynamic = 'force-dynamic';

export function generateMetadata() {
  const article = articles.find((item) => item.slug === SLUG);
  const seoTitle = 'Gratis e-factuur maken (UBL/XML) | FactuurBaas';
  const description = article.excerpt;
  const url = 'https://factuurbaas.nl/e-factuur-maken';
  return {
    title: seoTitle,
    description,
    keywords: article.keywords,
    authors: [{ name: 'FactuurBaas', url: 'https://factuurbaas.nl' }],
    robots: { index: true, follow: true },
    openGraph: {
      title: 'Gratis e-factuur maken (UBL/XML)',
      description,
      url,
      type: 'article',
      siteName: 'FactuurBaas',
      images: [
        {
          url: article.image.url,
          width: 1200,
          height: 630,
          alt: article.image.alt,
        },
      ],
      publishedTime: `${article.datePublished}T12:00:00+01:00`,
      modifiedTime: `${article.dateModified}T12:00:00+01:00`,
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Gratis e-factuur maken (UBL/XML)',
      description,
      images: [article.image.url],
    },
    alternates: { canonical: url },
  };
}

export default function EFactuurMakenPage() {
  const article = articles.find((item) => item.slug === SLUG);
  const relatedArticles = (article.relatedSlugs || [])
    .map((slug) => articles.find((item) => item.slug === slug))
    .filter(Boolean);

  return (
    <BlogPostClient
      article={{ ...article, content: withBookkeeperCtas(article.content, article.slug) }}
      relatedArticles={relatedArticles}
    />
  );
}
