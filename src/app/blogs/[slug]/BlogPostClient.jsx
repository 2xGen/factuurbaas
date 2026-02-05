'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

function formatDate(iso) {
  if (!iso) return null;
  try {
    return new Date(iso).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' });
  } catch {
    return null;
  }
}

export default function BlogPostClient({ article }) {
  const articleUrl = `https://factuurbaas.nl/blogs/${article.slug}`;
  const published = article.datePublished ? `${article.datePublished}T12:00:00+01:00` : new Date().toISOString();
  const modified = article.dateModified ? `${article.dateModified}T12:00:00+01:00` : published;

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: { '@type': 'WebPage', '@id': articleUrl },
    headline: article.title,
    description: article.excerpt,
    image: article.image.url,
    author: { '@type': 'Organization', name: 'FactuurBaas', url: 'https://factuurbaas.nl' },
    publisher: {
      '@type': 'Organization',
      name: 'FactuurBaas',
      logo: { '@type': 'ImageObject', url: 'https://factuurbaas.nl/crown-favicon.svg' },
    },
    datePublished: published,
    dateModified: modified,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factuurbaas.nl' },
      { '@type': 'ListItem', position: 2, name: 'Blogs', item: 'https://factuurbaas.nl/blogs' },
      { '@type': 'ListItem', position: 3, name: article.title, item: articleUrl },
    ],
  };

  const publishedFormatted = formatDate(published);
  const modifiedFormatted = formatDate(modified);
  const showDates = publishedFormatted || modifiedFormatted;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-64 md:h-96 w-full"
        >
          <img
            src={article.image.url}
            alt={article.image.alt}
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white container mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading leading-tight">
              {article.title}
            </h1>
            {showDates && (
              <p className="mt-2 text-sm text-white/90">
                {publishedFormatted && (
                  <time dateTime={published}>Gepubliceerd: {publishedFormatted}</time>
                )}
                {publishedFormatted && modifiedFormatted && modified !== published && (
                  <> · <time dateTime={modified}>Bijgewerkt: {modifiedFormatted}</time></>
                )}
              </p>
            )}
          </div>
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-12 md:py-16">
          <nav aria-label="Breadcrumb" className="mb-8">
            <Link
              href="/blogs"
              className="inline-flex items-center text-sky-600 hover:text-warm-orange transition-colors group"
            >
              <span className="mr-2 group-hover:-translate-x-1 transition-transform inline-block">←</span>
              Terug naar alle blogs
            </Link>
          </nav>
          <article className="prose prose-lg lg:prose-xl max-w-none text-slate-700 leading-relaxed">
            {article.content}
          </article>
        </div>
      </div>
    </>
  );
}
