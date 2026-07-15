import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ToolGuideLinks({
  guides,
  title = 'Gidsen',
  viewAllHref,
  viewAllLabel = 'Bekijk alle gidsen',
  linkLabel = 'Lees gids',
}) {
  if (!guides?.length) return null;

  return (
    <section>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">{title}</h2>
        {viewAllHref && (
          <Link
            href={viewAllHref}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-warm-orange hover:underline"
          >
            {viewAllLabel}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        )}
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide) => (
          <Link
            key={guide.href}
            href={guide.href}
            className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-warm-orange/30 hover:shadow-md"
          >
            <h3 className="font-semibold text-deep-blue group-hover:text-warm-orange line-clamp-2">
              {guide.title}
            </h3>
            <p className="mt-2 flex-grow text-sm leading-relaxed text-slate-600 line-clamp-3">
              {guide.description}
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-deep-blue group-hover:text-warm-orange">
              {linkLabel}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
