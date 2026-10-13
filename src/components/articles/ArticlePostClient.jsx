'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import CallToActionSection from '@/components/landing/page/sections/CallToActionSection';
import { EASE_OUT, Reveal, Stagger, staggerItem } from '@/components/landing/page/motion';
import { blogPillars } from '@/lib/blogPillars';

function formatDate(iso) {
  if (!iso) return null;
  try {
    return new Date(iso).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' });
  } catch {
    return null;
  }
}

function resolveRelatedHref(item) {
  if (item.type === 'guide') return `/gidsen/${item.slug}`;
  if (item.type === 'tool') return item.href;
  return `/blogs/${item.slug}`;
}

function findPillar(slug, isGuide) {
  return blogPillars.find((pillar) =>
    isGuide ? (pillar.guideSlugs || []).includes(slug) : pillar.slugs.includes(slug)
  );
}

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 64);
}

/** Reads the rendered article to derive reading time and a table of contents. */
function useArticleOutline(ref) {
  const [outline, setOutline] = useState({ minutes: null, headings: [] });
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return undefined;

    const words = (root.innerText || '').trim().split(/\s+/).filter(Boolean).length;
    const used = new Set();
    const headings = Array.from(root.querySelectorAll('h2'))
      .filter((el) => !el.closest('.not-prose'))
      .map((el) => {
        const text = el.textContent.trim();
        if (!el.id) {
          let id = slugify(text) || 'sectie';
          let n = 2;
          while (used.has(id) || document.getElementById(id)) id = `${slugify(text)}-${n++}`;
          el.id = id;
        }
        used.add(el.id);
        el.style.scrollMarginTop = '7rem';
        return { id: el.id, text, el };
      });

    setOutline({ minutes: Math.max(1, Math.round(words / 220)), headings });

    if (!headings.length || typeof IntersectionObserver === 'undefined') return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-15% 0px -70% 0px' }
    );
    headings.forEach(({ el }) => observer.observe(el));
    return () => observer.disconnect();
  }, [ref]);

  return { ...outline, activeId };
}

function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });
  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-ember"
      style={{ scaleX }}
      aria-hidden
    />
  );
}

function Breadcrumbs({ items }) {
  return (
    <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <li key={`${item.name}-${index}`} className="flex min-w-0 items-center gap-2">
            {index > 0 && <span aria-hidden className="text-ink/20">/</span>}
            {isLast || !item.href ? (
              <span className="max-w-[26ch] truncate text-ink-500" aria-current={isLast ? 'page' : undefined}>
                {item.name}
              </span>
            ) : (
              <Link href={item.href} className="transition-colors hover:text-ink">
                {item.name}
              </Link>
            )}
          </li>
        );
      })}
    </ol>
  );
}

export default function ArticlePostClient({
  article,
  relatedItems = [],
  basePath = '/blogs',
  listHref = '/blogs',
  listLabel = 'Terug naar alle blogs',
  breadcrumbSection = 'Blogs',
  breadcrumbItems = null,
}) {
  const reduce = useReducedMotion();
  const bodyRef = useRef(null);
  const { minutes, headings, activeId } = useArticleOutline(bodyRef);

  const articleUrl = `https://factuurbaas.nl${basePath}/${article.slug}`;
  const published = article.datePublished ? `${article.datePublished}T12:00:00+01:00` : new Date().toISOString();
  const modified = article.dateModified ? `${article.dateModified}T12:00:00+01:00` : published;
  const isGuide = basePath === '/gidsen';
  const pillar = findPillar(article.slug, isGuide);

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

  const breadcrumbTrail =
    breadcrumbItems?.length > 0
      ? breadcrumbItems
      : [
          { name: 'Home', href: '/' },
          { name: breadcrumbSection, href: listHref },
          { name: article.title },
        ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbTrail.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.href
        ? {
            item: item.href.startsWith('http')
              ? item.href
              : `https://factuurbaas.nl${item.href}`,
          }
        : { item: articleUrl }),
    })),
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
  const showModified = publishedFormatted && modifiedFormatted && modified !== published;

  const showHypotheekHubLink = breadcrumbItems?.some((item) => item.href === '/blogs/hypotheek-als-zzper');
  const showToc = headings.length >= 3;

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

      <ReadingProgress />

      <div className="bg-paper-50 text-ink">
        <header className="grain relative isolate overflow-hidden bg-paper">
          <div className="bg-ledger mask-fade-y pointer-events-none absolute inset-0 -z-10" aria-hidden />
          <div
            className="pointer-events-none absolute -right-40 -top-48 -z-10 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(210,96,26,0.12),transparent_65%)]"
            aria-hidden
          />
          <div className="container mx-auto max-w-4xl px-4 pb-36 pt-12 sm:px-6 sm:pb-48 sm:pt-16 lg:pt-20">
            <nav aria-label="Breadcrumb" className="motion-safe:animate-rise">
              {breadcrumbItems?.length > 0 ? (
                <Breadcrumbs items={breadcrumbItems} />
              ) : (
                <Link
                  href={listHref}
                  className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400 transition-colors hover:text-ink"
                >
                  <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
                  {listLabel}
                </Link>
              )}
            </nav>

            {pillar && (
              <p
                className="mt-10 font-mono text-[11px] uppercase tracking-[0.18em] text-ember motion-safe:animate-rise"
                style={{ animationDelay: '60ms' }}
              >
                {pillar.cardTitle || pillar.title} · {isGuide ? 'Gids' : 'Artikel'}
              </p>
            )}

            <h1
              className={`${pillar ? 'mt-4' : 'mt-10'} max-w-[22ch] font-display text-[2.4rem] font-normal leading-[1.03] tracking-[-0.03em] sm:text-[3.4rem] lg:text-[3.9rem] motion-safe:animate-rise`}
              style={{ animationDelay: '120ms' }}
            >
              {article.title}
            </h1>

            {article.excerpt && (
              <p
                className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-500 sm:text-xl motion-safe:animate-rise"
                style={{ animationDelay: '180ms' }}
              >
                {article.excerpt}
              </p>
            )}

            <div
              className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-ink/10 pt-6 text-sm text-ink-500 motion-safe:animate-rise"
              style={{ animationDelay: '240ms' }}
            >
              <span className="inline-flex items-center gap-2.5 text-ink">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/10 bg-white">
                  <img src="/crown-favicon.svg" alt="" aria-hidden className="h-4 w-4" />
                </span>
                <span className="font-medium">FactuurBaas</span>
              </span>
              {publishedFormatted && (
                <span>
                  <time dateTime={published}>{publishedFormatted}</time>
                </span>
              )}
              {showModified && (
                <span className="text-ink-400">
                  Bijgewerkt <time dateTime={modified}>{modifiedFormatted}</time>
                </span>
              )}
              {minutes && (
                <span className="inline-flex items-center gap-1.5 text-ink-400">
                  <Clock className="h-3.5 w-3.5" aria-hidden />
                  {minutes} min lezen
                </span>
              )}
            </div>
          </div>
        </header>

        <div className="container mx-auto -mt-28 max-w-6xl px-4 sm:-mt-40 sm:px-6">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: EASE_OUT }}
            className="relative aspect-[16/10] overflow-hidden rounded-[1.25rem] bg-paper-200 shadow-paper ring-1 ring-ink/5 sm:aspect-[2/1] sm:rounded-[1.75rem]"
          >
            <img
              src={article.image.url}
              alt={article.image.alt}
              className="absolute inset-0 h-full w-full object-cover"
              fetchPriority="high"
            />
          </motion.div>
        </div>

        <div className="container mx-auto max-w-6xl px-4 pb-20 pt-14 sm:px-6 sm:pt-20 lg:pb-28">
          <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-16 xl:gap-24">
            <div className="mx-auto w-full max-w-[42rem] lg:mx-0 lg:justify-self-end">
              <article
                ref={bodyRef}
                className="article-body prose prose-lg max-w-none prose-p:leading-[1.75] prose-h2:text-[1.85rem] prose-h3:text-[1.35rem] prose-img:rounded-2xl sm:prose-h2:text-[2.15rem] sm:prose-h3:text-[1.5rem]"
              >
                {article.content}
              </article>

              {showHypotheekHubLink && (
                <p className="mt-12">
                  <Link
                    href="/blogs/hypotheek-als-zzper"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-ink underline decoration-ink/20 underline-offset-[6px] transition-colors hover:decoration-ember"
                  >
                    <ArrowLeft className="h-3.5 w-3.5 text-ember transition-transform duration-300 group-hover:-translate-x-0.5" />
                    Hypotheek als zzp&apos;er: alle onderwerpen
                  </Link>
                </p>
              )}
            </div>

            <aside className="hidden lg:block" aria-label="Bij dit artikel">
              <div className="sticky top-28 space-y-10">
                {showToc && (
                  <nav aria-label="In dit artikel">
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-400">In dit artikel</p>
                    <ol className="mt-4 space-y-0.5 border-l border-ink/10">
                      {headings.map(({ id, text }) => {
                        const active = id === activeId;
                        return (
                          <li key={id}>
                            <a
                              href={`#${id}`}
                              className={`-ml-px block border-l py-1.5 pl-4 text-[13px] leading-snug transition-colors ${
                                active
                                  ? 'border-ember text-ink'
                                  : 'border-transparent text-ink-400 hover:text-ink'
                              }`}
                            >
                              <span className="line-clamp-2">{text}</span>
                            </a>
                          </li>
                        );
                      })}
                    </ol>
                  </nav>
                )}

                <div className="grain-light relative isolate overflow-hidden rounded-2xl bg-ink-950 p-6 text-white">
                  <div
                    className="pointer-events-none absolute -bottom-24 -right-16 -z-10 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(210,96,26,0.35),transparent_65%)]"
                    aria-hidden
                  />
                  <img src="/crown-favicon.svg" alt="" aria-hidden className="h-6 w-6" />
                  <p className="mt-4 font-display text-[1.4rem] leading-[1.15] tracking-[-0.02em]">
                    Gratis factuur maken, <em className="text-ember-100">zonder account.</em>
                  </p>
                  <Link
                    href="/create-invoice"
                    className="group mt-5 inline-flex h-10 items-center gap-1.5 rounded-full bg-white px-4 text-sm font-medium text-ink transition-colors hover:bg-paper-100"
                  >
                    Maak gratis factuur
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {relatedItems.length > 0 && (
          <section className="border-t border-ink/10 bg-paper" aria-labelledby="related-heading">
            <div className="container mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
              <Reveal className="flex flex-wrap items-end justify-between gap-6">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ember">Verder lezen</p>
                  <h2
                    id="related-heading"
                    className="mt-4 font-display text-[2.2rem] font-normal leading-[1.05] tracking-[-0.03em] sm:text-5xl"
                  >
                    Gerelateerde <em className="text-ink-700">artikelen</em>
                  </h2>
                </div>
                <Link
                  href={listHref}
                  className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink underline decoration-ink/20 underline-offset-[6px] transition-colors hover:decoration-ember"
                >
                  {isGuide ? 'Alle gidsen' : 'Alle artikelen'}
                  <ArrowRight className="h-3.5 w-3.5 text-ember transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </Reveal>

              <Stagger
                as="ul"
                className={`mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 ${
                  relatedItems.length % 4 === 0 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
                }`}
              >
                {relatedItems.map((item) => (
                  <motion.li key={item.slug || item.href} variants={staggerItem}>
                    <Link href={resolveRelatedHref(item)} className="group block">
                      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-paper-200 ring-1 ring-inset ring-ink/5">
                        {item.image?.url ? (
                          <img
                            src={item.image.url}
                            alt={item.image.alt || item.title}
                            loading="lazy"
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                          />
                        ) : (
                          <div className="bg-ledger absolute inset-0 flex items-center justify-center">
                            <img src="/crown-favicon.svg" alt="" aria-hidden className="h-10 w-10 opacity-80" />
                          </div>
                        )}
                      </div>
                      <p className="mt-4 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-400">
                        {item.type === 'guide' ? 'Gids' : item.type === 'tool' ? 'Tool' : 'Artikel'}
                      </p>
                      <h3 className="mt-2 font-display text-[1.3rem] leading-[1.2] tracking-[-0.015em] text-ink line-clamp-3">
                        <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]">
                          {item.title}
                        </span>
                      </h3>
                      {item.excerpt && (
                        <p className="mt-2 text-sm leading-relaxed text-ink-500 line-clamp-2">{item.excerpt}</p>
                      )}
                    </Link>
                  </motion.li>
                ))}
              </Stagger>
            </div>
          </section>
        )}

        <CallToActionSection />
      </div>
    </>
  );
}
