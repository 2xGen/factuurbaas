import { notFound } from 'next/navigation';
import { articles } from '@/lib/blogData';
import BlogPostClient from './BlogPostClient';
import { siteOpenGraphImages, SITE_OG_IMAGE } from '@/lib/siteOg';

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
  const seoTitle = article.metaTitle || article.title;
  return {
    title: `${seoTitle} | FactuurBaas`,
    description: article.excerpt,
    keywords: article.keywords,
    openGraph: {
      title: seoTitle,
      description: article.excerpt,
      url: articleUrl,
      type: 'article',
      siteName: 'FactuurBaas',
      images: siteOpenGraphImages,
      publishedTime: published,
      modifiedTime: modified,
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: article.excerpt,
      images: [SITE_OG_IMAGE],
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
