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

export default function BlogPostClient({ article, relatedArticles = [] }) {
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

  const faqSchema =
    article.faq?.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: article.faq.map(({ question, answer }) => ({
            '@type': 'Question',
            name: question,
            acceptedAnswer: { '@type': 'Answer', text: answer },
          })),
        }
      : null;

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
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
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

          {relatedArticles.length > 0 && (
            <section className="mt-16 pt-12 border-t border-slate-200" aria-label="Gerelateerde artikelen">
              <h2 className="text-xl font-semibold text-slate-800 font-heading mb-6">Lees ook</h2>
              <ul className="grid gap-6 sm:grid-cols-2">
                {relatedArticles.map((related) => (
                  <li key={related.slug}>
                    <Link
                      href={`/blogs/${related.slug}`}
                      className="group flex gap-4 rounded-lg border border-slate-200 bg-slate-50/50 p-4 transition-colors hover:border-warm-orange/40 hover:bg-white"
                    >
                      <div className="h-20 w-24 shrink-0 overflow-hidden rounded-md bg-slate-200">
                        <img
                          src={related.image.url}
                          alt={related.image.alt}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="font-medium text-slate-800 group-hover:text-warm-orange transition-colors line-clamp-2">
                          {related.title}
                        </span>
                        <p className="mt-1 text-sm text-slate-600 line-clamp-2">{related.excerpt}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </>
  );
}
