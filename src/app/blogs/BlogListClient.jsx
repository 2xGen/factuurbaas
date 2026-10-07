'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { EASE_OUT, Reveal } from '@/components/landing/page/motion';
import { blogPillars, formatPillarTitle } from '@/lib/blogPillars';
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

function getPillarId(item) {
  for (const pillar of blogPillars) {
    if (item.type === 'guide' && (pillar.guideSlugs || []).includes(item.slug)) {
      return pillar.id;
    }
    if (item.type !== 'guide' && pillar.slugs.includes(item.slug)) {
      return pillar.id;
    }
  }
  return 'other';
}

/** Round-robin across pillars so the grid mixes topics instead of stacking by date. */
function interleaveByPillar(items) {
  const pillarOrder = [...blogPillars.map((p) => p.id), 'other'];
  const queues = new Map(pillarOrder.map((id) => [id, []]));

  for (const item of sortByDate(items)) {
    const id = getPillarId(item);
    if (!queues.has(id)) queues.set(id, []);
    queues.get(id).push(item);
  }

  const result = [];
  let remaining = true;
  while (remaining) {
    remaining = false;
    for (const id of pillarOrder) {
      const queue = queues.get(id);
      if (queue?.length) {
        result.push(queue.shift());
        remaining = true;
      }
    }
  }
  return result;
}

const pillarLabels = new Map(blogPillars.map((p) => [p.id, p.cardTitle || p.title]));

function HubTitle({ title, titleAccent }) {
  const parts = formatPillarTitle(title, titleAccent);
  if (typeof parts === 'string') {
    // Fallback: highlight common zzp markers
    for (const marker of ["zzp'ers", "zzp'er"]) {
      const index = title.indexOf(marker);
      if (index !== -1) {
        return (
          <>
            {title.slice(0, index)}
            <em className="text-ink-700">{marker}</em>
            {title.slice(index + marker.length)}
          </>
        );
      }
    }
    return title;
  }

  return (
    <>
      {parts.before}
      <em className="text-ink-700">{parts.accent}</em>
      {parts.after}
    </>
  );
}

function ItemMeta({ item }) {
  const label = pillarLabels.get(getPillarId(item));
  return (
    <p className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-400">
      {label && <span className="text-ember">{label}</span>}
      {label && <span aria-hidden>·</span>}
      <span>{item.type === 'guide' ? 'Gids' : 'Artikel'}</span>
    </p>
  );
}

function ItemCard({ item, index, featured = false }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: Math.min(index, 8) * 0.05, ease: EASE_OUT }}
      className={`group relative flex flex-col ${
        featured ? 'md:col-span-2 lg:row-span-2' : ''
      }`}
      role="listitem"
      aria-labelledby={`post-title-${item.slug}`}
    >
      <Link
        href={item.href}
        className={`relative block overflow-hidden rounded-2xl bg-paper-200 ring-1 ring-inset ring-ink/5 ${
          featured ? 'aspect-[16/10] lg:aspect-auto lg:flex-1' : 'aspect-[16/10]'
        }`}
        aria-hidden="true"
        tabIndex={-1}
      >
        <img
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.035]"
          alt={item.image.alt}
          src={item.image.url}
          loading={index < 6 ? 'eager' : 'lazy'}
          fetchPriority={index < 3 ? 'high' : undefined}
        />
        <div className="absolute inset-0 bg-ink-950/0 transition-colors duration-500 group-hover:bg-ink-950/10" />
      </Link>
      <div className={featured ? 'mt-6' : 'mt-5'}>
        <ItemMeta item={item} />
        <h2
          id={`post-title-${item.slug}`}
          className={`mt-2.5 font-display font-normal tracking-[-0.02em] text-ink ${
            featured
              ? 'max-w-[24ch] text-[1.9rem] leading-[1.08] sm:text-[2.4rem]'
              : 'text-[1.4rem] leading-[1.18] line-clamp-3'
          }`}
        >
          <Link
            href={item.href}
            className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]"
          >
            {item.title}
          </Link>
        </h2>
        <p
          className={`mt-3 text-ink-500 ${
            featured ? 'max-w-xl text-base leading-relaxed line-clamp-3' : 'text-[15px] leading-relaxed line-clamp-2'
          }`}
        >
          {item.excerpt}
        </p>
        <Link
          href={item.href}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink"
          aria-label={`Lees meer: ${item.title}`}
        >
          {item.type === 'guide' ? 'Lees gids' : 'Lees artikel'}
          <ArrowRight className="h-3.5 w-3.5 text-ember transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
}

const chipClass = (active) =>
  `shrink-0 rounded-full px-4 py-2 text-sm transition-colors duration-200 ${
    active
      ? 'bg-ink text-white shadow-[0_1px_2px_rgba(6,26,48,0.25)]'
      : 'border border-ink/10 bg-white/70 text-ink-500 hover:border-ink/25 hover:text-ink'
  }`;

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
    return interleaveByPillar([...blogItems, ...guides]);
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

  const showFeatured = safePage === 1 && paginatedItems.length >= 4;

  return (
    <main className="bg-paper text-ink" aria-label="Blog overzicht">
      <header className="grain relative isolate overflow-hidden">
        <div className="bg-ledger mask-fade-y pointer-events-none absolute inset-0 -z-10" aria-hidden />
        <div
          className="pointer-events-none absolute -right-40 -top-48 -z-10 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(210,96,26,0.12),transparent_65%)]"
          aria-hidden
        />
        <div className="container mx-auto px-4 pb-10 pt-14 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
            <div>
              <p
                className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-700 backdrop-blur motion-safe:animate-rise"
              >
                <BookOpen className="h-3.5 w-3.5 text-ember" aria-hidden />
                Kennisbank · {allItems.length} artikelen
              </p>
              <h1
                className="mt-6 max-w-[16ch] font-display text-[2.6rem] font-normal leading-[1] tracking-[-0.035em] sm:text-6xl lg:text-[4.25rem] motion-safe:animate-rise"
                style={{ animationDelay: '80ms' }}
              >
                <HubTitle title={intro.title} titleAccent={intro.titleAccent} />
              </h1>
            </div>
            <div className="motion-safe:animate-rise" style={{ animationDelay: '160ms' }}>
              {intro.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="mt-4 max-w-xl text-base leading-relaxed text-ink-500 first:mt-0 sm:text-[1.05rem]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <nav
            className="-mx-4 mt-12 border-t border-ink/10 px-4 pt-6 motion-safe:animate-rise sm:mx-0 sm:px-0"
            style={{ animationDelay: '240ms' }}
            aria-label="Filter op onderwerp"
          >
            <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] sm:flex-wrap sm:overflow-visible [&::-webkit-scrollbar]:hidden">
              <button
                type="button"
                onClick={() => handlePillarChange(null)}
                aria-pressed={selectedPillar === null}
                className={chipClass(selectedPillar === null)}
              >
                Alles
              </button>
              {blogPillars.map((pillar) => (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => handlePillarChange(pillar.id)}
                  aria-pressed={selectedPillar === pillar.id}
                  className={chipClass(selectedPillar === pillar.id)}
                >
                  {pillar.cardTitle || pillar.title}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 pb-24 sm:px-6 lg:px-8 lg:pb-32">
        {filteredItems.length > 0 && (
          <p className="mb-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-400">
            <span>
              {filteredItems.length} {filteredItems.length === 1 ? 'artikel' : 'artikelen'}
            </span>
            {totalPages > 1 && (
              <>
                <span className="h-px w-6 bg-ink/15" aria-hidden />
                <span>
                  Pagina {safePage} van {totalPages}
                </span>
              </>
            )}
          </p>
        )}

        <div
          key={`${selectedPillar || 'all'}-${safePage}`}
          className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {paginatedItems.map((item, index) => (
            <ItemCard
              key={`${item.type}-${item.slug}`}
              item={item}
              index={index}
              featured={showFeatured && index === 0}
            />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <p className="py-16 text-center font-display text-2xl text-ink-500">Geen artikelen in deze categorie.</p>
        )}

        {totalPages > 1 && (
          <nav
            className="mt-20 flex flex-wrap items-center justify-center gap-1.5 border-t border-ink/10 pt-10"
            aria-label="Paginering"
          >
            <button
              type="button"
              disabled={safePage <= 1}
              onClick={() => handlePageChange(safePage - 1)}
              className="mr-2 inline-flex h-10 items-center gap-1 rounded-full border border-ink/10 bg-white px-4 text-sm text-ink-700 transition-colors hover:border-ink/25 disabled:cursor-not-allowed disabled:opacity-40"
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
                className={`tabular h-10 min-w-[2.5rem] rounded-full px-3 font-mono text-sm transition-colors ${
                  page === safePage ? 'bg-ink text-white' : 'text-ink-500 hover:bg-white hover:text-ink'
                }`}
              >
                {page}
              </button>
            ))}
            <button
              type="button"
              disabled={safePage >= totalPages}
              onClick={() => handlePageChange(safePage + 1)}
              className="ml-2 inline-flex h-10 items-center gap-1 rounded-full border border-ink/10 bg-white px-4 text-sm text-ink-700 transition-colors hover:border-ink/25 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Volgende
              <ChevronRight className="h-4 w-4" />
            </button>
          </nav>
        )}

        {visibleFaqs.length > 0 && (
          <section
            className="mt-24 grid gap-10 border-t border-ink/10 pt-16 lg:mt-32 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:pt-20"
            aria-labelledby="blog-hub-faq-heading"
          >
            <Reveal className="lg:sticky lg:top-32 lg:self-start">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ember">Vragen</p>
              <h2
                id="blog-hub-faq-heading"
                className="mt-4 font-display text-[2.2rem] font-normal leading-[1.05] tracking-[-0.03em] sm:text-5xl"
              >
                Veelgestelde <em className="text-ink-700">vragen</em>
              </h2>
            </Reveal>
            <div className="border-t border-ink/15">
              {visibleFaqs.map(({ question, answer, guideSlug }) => (
                <details key={question} className="group border-b border-ink/15">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 font-display text-xl leading-snug text-ink marker:content-none sm:text-[1.4rem] [&::-webkit-details-marker]:hidden">
                    {question}
                    <span
                      className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ember transition-transform duration-300 group-open:rotate-45"
                      aria-hidden
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </span>
                  </summary>
                  <div className="max-w-2xl pb-7 pr-12">
                    <p className="text-[15px] leading-relaxed text-ink-500 sm:text-base">{answer}</p>
                    <Link
                      href={`/gidsen/${guideSlug}`}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink underline decoration-ink/20 underline-offset-[6px] transition-colors hover:decoration-ember"
                    >
                      Lees de volledige gids
                      <ArrowRight className="h-3.5 w-3.5 text-ember" />
                    </Link>
                  </div>
                </details>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
