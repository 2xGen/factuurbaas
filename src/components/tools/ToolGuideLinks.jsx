import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function ToolGuideLinks({
  guides,
  title = 'Gidsen',
  viewAllHref,
  viewAllLabel = 'Bekijk alle gidsen',
  linkLabel = 'Lees gids',
}) {
  if (!guides?.length) return null;

  return (
    <section className="not-prose">
      <div className="flex flex-col gap-4 border-b border-ink/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="font-display text-[1.85rem] font-normal leading-[1.1] tracking-[-0.025em] text-ink sm:text-[2.15rem]">
          {title}
        </h2>
        {viewAllHref && (
          <Link
            href={viewAllHref}
            className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-ink underline decoration-ink/20 underline-offset-[6px] transition-colors hover:decoration-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2"
          >
            {viewAllLabel}
            <ArrowRight
              className="h-4 w-4 text-ember transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>
        )}
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide) => (
          <Link
            key={guide.href}
            href={guide.href}
            className="group flex h-full flex-col rounded-2xl border border-ink/[0.08] bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-ink/15 hover:shadow-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2"
          >
            <h3 className="line-clamp-2 font-display text-[1.3rem] font-normal leading-[1.2] tracking-[-0.015em] text-ink">
              {guide.title}
            </h3>
            <p className="mt-3 line-clamp-3 flex-grow text-sm leading-relaxed text-ink-500">
              {guide.description}
            </p>
            <span className="mt-6 inline-flex items-center gap-1.5 border-t border-ink/10 pt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-700">
              {linkLabel}
              <ArrowUpRight
                className="h-3.5 w-3.5 text-ember transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden
              />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
