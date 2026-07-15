'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { blogPillars } from '@/lib/blogPillars';
import { GUIDES_PER_PAGE, getBlogHubIntro, guideHubFaqs } from '@/lib/guideHub';

function toListItem(article) {
  return {
    ...article,
    type: 'blog',
    href: `/blogs/${article.slug}`,
  };
}

function sortByDate(items) {
  return [...items].sort((a, b) => {
    const dateA = new Date(a.dateModified || a.datePublished || 0).getTime();
    const dateB = new Date(b.dateModified || b.datePublished || 0).getTime();
    return dateB - dateA;
  });
}

function HubTitle({ title }) {
  const marker = "zzp'ers";
  const index = title.indexOf(marker);
  if (index === -1) return title;

  return (
    <>
      {title.slice(0, index)}
      <span className="text-warm-orange">{marker}</span>
      {title.slice(index + marker.length)}
    </>
  );
}

export default function BlogListClient({ articles, guides = [] }) {
  const searchParams = useSearchParams();
  const pillarFromUrl = searchParams.get('pillar');
  const pageFromUrl = parseInt(searchParams.get('page') || '1', 10);
  const [selectedPillar, setSelectedPillar] = useState(() => {
    if (pillarFromUrl && blogPillars.some((p) => p.id === pillarFromUrl)) return pillarFromUrl;
    return null;
  });
  const [currentPage, setCurrentPage] = useState(() => {
    return Number.isFinite(pageFromUrl) && pageFromUrl > 0 ? pageFromUrl : 1;
  });

  useEffect(() => {
    if (pillarFromUrl && blogPillars.some((p) => p.id === pillarFromUrl)) {
      setSelectedPillar(pillarFromUrl);
    }
  }, [pillarFromUrl]);

  useEffect(() => {
    const page = parseInt(searchParams.get('page') || '1', 10);
    setCurrentPage(Number.isFinite(page) && page > 0 ? page : 1);
  }, [searchParams]);

  const allItems = useMemo(() => {
    const blogItems = articles.map(toListItem);
    return sortByDate([...blogItems, ...guides]);
  }, [articles, guides]);

  const filteredItems = useMemo(() => {
    if (!selectedPillar) return allItems;
    const pillar = blogPillars.find((p) => p.id === selectedPillar);
    if (!pillar) return allItems;

    const blogSlugSet = new Set(pillar.slugs);
    const guideSlugSet = new Set(pillar.guideSlugs || []);

    return sortByDate(
      allItems.filter(
        (item) =>
          (item.type === 'blog' && blogSlugSet.has(item.slug)) ||
          (item.type === 'guide' && guideSlugSet.has(item.slug))
      )
    );
  }, [allItems, selectedPillar]);

  const totalPages = Math.max(1, Math.ceil(filteredItems.length / GUIDES_PER_PAGE));
  const safePage = Math.min(Math.max(1, currentPage), totalPages);

  const paginatedItems = useMemo(() => {
    const start = (safePage - 1) * GUIDES_PER_PAGE;
    return filteredItems.slice(start, start + GUIDES_PER_PAGE);
  }, [filteredItems, safePage]);

  const intro = getBlogHubIntro(selectedPillar);

  const visibleFaqs = useMemo(() => {
    if (!selectedPillar) return guideHubFaqs;
    const pillar = blogPillars.find((p) => p.id === selectedPillar);
    if (!pillar?.guideSlugs?.length) return [];
    const slugSet = new Set(pillar.guideSlugs);
    return guideHubFaqs.filter((faq) => slugSet.has(faq.guideSlug));
  }, [selectedPillar]);

  const updateUrl = (pillarId, page) => {
    const url = new URL(window.location.href);
    if (pillarId) {
      url.searchParams.set('pillar', pillarId);
    } else {
      url.searchParams.delete('pillar');
    }
    if (page > 1) {
      url.searchParams.set('page', String(page));
    } else {
      url.searchParams.delete('page');
    }
    window.history.replaceState({}, '', url.pathname + url.search);
  };

  const handlePillarChange = (pillarId) => {
    setSelectedPillar(pillarId);
    setCurrentPage(1);
    updateUrl(pillarId, 1);
  };

  const handlePageChange = (page) => {
    const nextPage = Math.min(Math.max(1, page), totalPages);
    setCurrentPage(nextPage);
    updateUrl(selectedPillar, nextPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="bg-slate-50 py-16 sm:py-24" aria-label="Blog overzicht">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-deep-blue tracking-tight font-heading">
            <HubTitle title={intro.title} />
          </h1>
          {intro.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="mt-4 text-lg text-slate-600 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </motion.header>

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

        {filteredItems.length > 0 && (
          <p className="text-center text-sm text-slate-500 mb-8">
            {filteredItems.length} {filteredItems.length === 1 ? 'artikel' : 'artikelen'}
            {totalPages > 1 && (
              <>
                {' '}
                · pagina {safePage} van {totalPages}
              </>
            )}
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          <AnimatePresence mode="popLayout">
            {paginatedItems.map((item, index) => (
              <motion.article
                key={`${item.type}-${item.slug}`}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col group hover:shadow-xl transition-shadow duration-300"
                role="listitem"
                aria-labelledby={`post-title-${item.slug}`}
              >
                <Link href={item.href} className="block" aria-hidden="true" tabIndex={-1}>
                  <div className="relative h-48">
                    <img
                      className="w-full h-full object-cover"
                      alt={item.image.alt}
                      src={item.image.url}
                      loading={index < 6 ? 'eager' : 'lazy'}
                      fetchPriority={index < 3 ? 'high' : undefined}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                  </div>
                </Link>
                <div className="p-6 flex-grow flex flex-col">
                  <h2
                    id={`post-title-${item.slug}`}
                    className="text-xl font-bold text-deep-blue font-heading mb-2 line-clamp-2 group-hover:text-warm-orange transition-colors duration-300"
                  >
                    <Link href={item.href}>{item.title}</Link>
                  </h2>
                  <p className="text-slate-600 text-sm flex-grow mb-4 line-clamp-3">{item.excerpt}</p>
                  <div className="mt-auto">
                    <Link
                      href={item.href}
                      className="inline-flex items-center font-semibold text-sky-600 group-hover:text-warm-orange transition-colors duration-300"
                      aria-label={`Lees meer: ${item.title}`}
                    >
                      {item.type === 'guide' ? 'Lees gids' : 'Lees meer'}
                      <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {filteredItems.length === 0 && (
          <p className="text-center text-slate-500 py-12">Geen artikelen in deze categorie.</p>
        )}

        {totalPages > 1 && (
          <nav className="mt-12 flex flex-wrap items-center justify-center gap-2" aria-label="Paginering">
            <button
              type="button"
              disabled={safePage <= 1}
              onClick={() => handlePageChange(safePage - 1)}
              className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft className="h-4 w-4" />
              Vorige
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => handlePageChange(page)}
                aria-current={page === safePage ? 'page' : undefined}
                className={`min-w-[2.5rem] rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  page === safePage
                    ? 'bg-warm-orange text-white shadow-md'
                    : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                }`}
              >
                {page}
              </button>
            ))}
            <button
              type="button"
              disabled={safePage >= totalPages}
              onClick={() => handlePageChange(safePage + 1)}
              className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Volgende
              <ChevronRight className="h-4 w-4" />
            </button>
          </nav>
        )}

        {visibleFaqs.length > 0 && (
          <section className="mt-16 max-w-3xl mx-auto" aria-labelledby="blog-hub-faq-heading">
            <h2
              id="blog-hub-faq-heading"
              className="text-2xl sm:text-3xl font-bold text-deep-blue font-heading text-center mb-8"
            >
              Veelgestelde vragen
            </h2>
            <div className="space-y-3">
              {visibleFaqs.map(({ question, answer, guideSlug }) => (
                <details
                  key={question}
                  className="group rounded-xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm"
                >
                  <summary className="cursor-pointer list-none font-semibold text-deep-blue marker:content-none [&::-webkit-details-marker]:hidden">
                    <span className="flex items-start justify-between gap-3">
                      {question}
                      <span className="text-warm-orange transition-transform group-open:rotate-45">+</span>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{answer}</p>
                  <Link
                    href={`/gidsen/${guideSlug}`}
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-warm-orange hover:underline"
                  >
                    Lees de volledige gids
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </details>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
