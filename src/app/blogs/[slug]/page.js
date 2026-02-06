import { notFound } from 'next/navigation';
import { articles } from '@/lib/blogData';
import BlogPostClient from './BlogPostClient';

// Dynamic to avoid auth/context issues during Vercel static build
export const dynamic = 'force-dynamic';

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = typeof params.then === 'function' ? await params : params;
  const article = articles.find((a) => a.slug === resolvedParams.slug);
  if (!article) return { title: 'Blog | FactuurBaas' };
  const published = article.datePublished ? `${article.datePublished}T12:00:00+01:00` : '';
  const modified = article.dateModified ? `${article.dateModified}T12:00:00+01:00` : published;
  const articleUrl = `https://factuurbaas.nl/blogs/${article.slug}`;
  return {
    title: `${article.title} | FactuurBaas`,
    description: article.excerpt,
    keywords: article.keywords,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: articleUrl,
      type: 'article',
      siteName: 'FactuurBaas',
      images: [{ url: article.image.url, width: 1200, height: 630, alt: article.image.alt }],
      publishedTime: published,
      modifiedTime: modified,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.image.url],
    },
    alternates: { canonical: articleUrl },
  };
}

export default async function BlogPostPage({ params }) {
  const resolvedParams = typeof params.then === 'function' ? await params : params;
  const article = articles.find((a) => a.slug === resolvedParams.slug);
  if (!article) notFound();
  const relatedArticles = (article.relatedSlugs?.length
    ? article.relatedSlugs
        .map((slug) => articles.find((a) => a.slug === slug))
        .filter(Boolean)
    : articles.filter((a) => a.slug !== article.slug).slice(0, 4)
  ).slice(0, 4);
  return <BlogPostClient article={article} relatedArticles={relatedArticles} />;
}
