'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { blogPillars } from '@/lib/blogPillars';

export default function BlogListClient({ articles }) {
  const searchParams = useSearchParams();
  const pillarFromUrl = searchParams.get('pillar');
  const [selectedPillar, setSelectedPillar] = useState(() => {
    if (pillarFromUrl && blogPillars.some((p) => p.id === pillarFromUrl)) return pillarFromUrl;
    return null;
  });

  useEffect(() => {
    if (pillarFromUrl && blogPillars.some((p) => p.id === pillarFromUrl)) {
      setSelectedPillar(pillarFromUrl);
    }
  }, [pillarFromUrl]);

  const filteredArticles = useMemo(() => {
    if (!selectedPillar) return articles;
    const pillar = blogPillars.find((p) => p.id === selectedPillar);
    if (!pillar) return articles;
    const slugSet = new Set(pillar.slugs);
    return articles.filter((a) => slugSet.has(a.slug));
  }, [articles, selectedPillar]);

  const handlePillarChange = (pillarId) => {
    setSelectedPillar(pillarId);
    const url = new URL(window.location.href);
    if (pillarId) {
      url.searchParams.set('pillar', pillarId);
    } else {
      url.searchParams.delete('pillar');
    }
    window.history.replaceState({}, '', url.pathname + url.search);
  };

  return (
    <main className="bg-slate-50 py-16 sm:py-24" aria-label="Blog overzicht">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-deep-blue tracking-tight font-heading">
            Inzichten voor <span className="text-warm-orange">Ondernemers</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            Artikelen en gidsen om je te helpen met facturatie, administratie en de groei van je bedrijf.
          </p>
        </motion.header>

        {/* Pillar filter */}
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-10"
          aria-label="Filter op onderwerp"
        >
          <div className="flex flex-wrap justify-center gap-2">
            <button
              type="button"
              onClick={() => handlePillarChange(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedPillar === null
                  ? 'bg-warm-orange text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Alle
            </button>
            {blogPillars.map((pillar) => (
              <button
                key={pillar.id}
                type="button"
                onClick={() => handlePillarChange(pillar.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedPillar === pillar.id
                    ? 'bg-warm-orange text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {pillar.title}
              </button>
            ))}
          </div>
        </motion.nav>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          <AnimatePresence mode="popLayout">
          {filteredArticles.map((article, index) => (
            <motion.article
              key={article.slug}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col group hover:shadow-xl transition-shadow duration-300"
              role="listitem"
              aria-labelledby={`blog-title-${article.slug}`}
            >
              <Link href={`/blogs/${article.slug}`} className="block" aria-hidden="true" tabIndex={-1}>
                <div className="relative h-48">
                  <img
                    className="w-full h-full object-cover"
                    alt={article.image.alt}
                    src={article.image.url}
                    loading={index < 6 ? 'eager' : 'lazy'}
                    fetchPriority={index < 3 ? 'high' : undefined}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                </div>
              </Link>
              <div className="p-6 flex-grow flex flex-col">
                <h2 id={`blog-title-${article.slug}`} className="text-xl font-bold text-deep-blue font-heading mb-2 line-clamp-2 group-hover:text-warm-orange transition-colors duration-300">
                  <Link href={`/blogs/${article.slug}`}>{article.title}</Link>
                </h2>
                <p className="text-slate-600 text-sm flex-grow mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="mt-auto">
                  <Link
                    href={`/blogs/${article.slug}`}
                    className="inline-flex items-center font-semibold text-sky-600 group-hover:text-warm-orange transition-colors duration-300"
                    aria-label={`Lees meer: ${article.title}`}
                  >
                    Lees Meer
                    <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
          </AnimatePresence>
        </div>

        {filteredArticles.length === 0 && (
          <p className="text-center text-slate-500 py-12">Geen artikelen in deze categorie.</p>
        )}
      </div>
    </main>
  );
}
