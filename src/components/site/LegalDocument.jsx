import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { EyebrowPill } from '@/components/site/editorial';

function TocList({ sections }) {
  return (
    <ol className="mt-4 space-y-0.5 border-l border-ink/10">
      {sections.map(({ id, label }) => (
        <li key={id}>
          <a
            href={`#${id}`}
            className="-ml-px block border-l border-transparent py-1.5 pl-4 text-[13px] leading-snug text-ink-500 transition-colors hover:border-ember hover:text-ink focus-visible:border-ember focus-visible:text-ink focus-visible:outline-none"
          >
            {label}
          </a>
        </li>
      ))}
    </ol>
  );
}

/**
 * Editorial layout for legal documents. `sections` must match the `id`s on the
 * document's h2 headings; they drive the sticky table of contents.
 */
export default function LegalDocument({
  backHref,
  backLabel,
  eyebrow,
  eyebrowIcon,
  title,
  meta,
  sections = [],
  children,
}) {
  const rise = (ms) => ({ animationDelay: `${ms}ms` });

  return (
    <div className="bg-paper-50 text-ink">
      <header className="grain relative isolate overflow-hidden border-b border-ink/10 bg-paper">
        <div className="bg-ledger mask-fade-y pointer-events-none absolute inset-0 -z-10" aria-hidden />
        <div
          className="pointer-events-none absolute -right-40 -top-48 -z-10 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(210,96,26,0.12),transparent_65%)]"
          aria-hidden
        />
        <div className="container mx-auto max-w-6xl px-4 pb-14 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:pt-20">
          <Link
            href={backHref}
            className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400 transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 motion-safe:animate-rise"
          >
            <ArrowLeft
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-0.5"
              aria-hidden
            />
            {backLabel}
          </Link>

          {eyebrow && (
            <div className="mt-10 motion-safe:animate-rise" style={rise(60)}>
              <EyebrowPill icon={eyebrowIcon}>{eyebrow}</EyebrowPill>
            </div>
          )}

          <h1
            className="mt-6 max-w-[20ch] font-display text-[2.4rem] font-normal leading-[1.03] tracking-[-0.03em] motion-safe:animate-rise sm:text-[3.4rem] lg:text-[3.9rem]"
            style={rise(120)}
          >
            {title}
          </h1>

          {meta && (
            <div
              className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-ink/10 pt-6 text-sm text-ink-500 motion-safe:animate-rise"
              style={rise(180)}
            >
              {meta}
            </div>
          )}
        </div>
      </header>

      <div className="container mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 sm:pt-16 lg:pb-28">
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-16 xl:gap-24">
          <div className="mx-auto w-full min-w-0 max-w-[44rem] lg:mx-0 lg:justify-self-end">
            {sections.length > 0 && (
              <details className="group mb-10 rounded-2xl border border-ink/[0.08] bg-white px-5 shadow-paper lg:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500 marker:content-none [&::-webkit-details-marker]:hidden">
                  Inhoud
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-ink/15 text-base leading-none text-ember transition-transform duration-300 group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <div className="pb-5">
                  <TocList sections={sections} />
                </div>
              </details>
            )}

            <article className="article-body prose prose-lg max-w-none break-words prose-p:leading-[1.75] prose-h2:text-[1.85rem] prose-h3:text-[1.35rem] sm:prose-h2:text-[2.15rem] sm:prose-h3:text-[1.5rem] [&_h2]:scroll-mt-28">
              {children}
            </article>

            <div className="mt-16 border-t border-ink/10 pt-8">
              <Link
                href="/"
                className="group inline-flex items-center gap-3 font-display text-xl tracking-[-0.02em] text-ink transition-colors hover:text-ink-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2"
              >
                <img
                  src="/crown-favicon.svg"
                  alt=""
                  aria-hidden
                  className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
                />
                FactuurBaas.nl
              </Link>
            </div>
          </div>

          {sections.length > 0 && (
            <aside className="hidden lg:block" aria-label="Inhoudsopgave">
              <nav className="sticky top-28" aria-label="In dit document">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-400">In dit document</p>
                <TocList sections={sections} />
              </nav>
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}
