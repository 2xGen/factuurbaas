import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

/*
 * Shared building blocks for the public site (homepage design language):
 * warm paper backgrounds, Newsreader display headings with italic <em> accents,
 * mono eyebrows, hairline ink borders, rounded-full ink buttons.
 * Server-safe: no hooks, entrance animation is CSS-only (motion-safe:animate-rise).
 */

export const btn = {
  primary:
    'group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-[15px] font-medium text-white shadow-[0_1px_2px_rgba(6,26,48,0.2),0_8px_20px_-8px_rgba(6,26,48,0.5)] transition-colors hover:bg-ink-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2',
  secondary:
    'group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3 text-[15px] font-medium text-ink transition-colors hover:border-ink/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2',
  light:
    'group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-[15px] font-medium text-ink transition-colors hover:bg-paper-100',
  ghostDark:
    'group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-[15px] font-medium text-white transition-colors hover:border-white/50',
  link: 'group inline-flex items-center gap-1.5 text-sm font-medium text-ink underline decoration-ink/20 underline-offset-[6px] transition-colors hover:decoration-ember',
};

export function ArrowIcon({ className }) {
  return (
    <ArrowRight
      className={cn('h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5', className)}
      aria-hidden
    />
  );
}

export function Eyebrow({ children, className, tone = 'ember' }) {
  return (
    <p
      className={cn(
        'font-mono text-[11px] uppercase tracking-[0.18em]',
        tone === 'ember' && 'text-ember',
        tone === 'muted' && 'text-ink-400',
        tone === 'light' && 'text-white/55',
        className
      )}
    >
      {children}
    </p>
  );
}

/** Pill-shaped eyebrow used at the top of page headers. */
export function EyebrowPill({ children, icon: Icon, className }) {
  return (
    <p
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-700 backdrop-blur',
        className
      )}
    >
      {Icon && <Icon className="h-3.5 w-3.5 text-ember" aria-hidden />}
      {children}
    </p>
  );
}

const headingSizes = {
  xl: 'text-[2.6rem] leading-[1] tracking-[-0.035em] sm:text-6xl lg:text-[4.25rem]',
  lg: 'text-[2.2rem] leading-[1.04] tracking-[-0.03em] sm:text-5xl',
  md: 'text-[1.75rem] leading-[1.1] tracking-[-0.025em] sm:text-[2.25rem]',
  sm: 'text-[1.4rem] leading-[1.2] tracking-[-0.02em]',
};

/** Serif display heading. Wrap the accent words in <em> for the italic treatment. */
export function DisplayHeading({ as: Tag = 'h2', size = 'lg', className, children, ...props }) {
  return (
    <Tag
      className={cn(
        'font-display font-normal text-ink [&_em]:text-ink-700',
        headingSizes[size],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

export function Breadcrumbs({ items, className }) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.name}-${index}`} className="flex min-w-0 items-center gap-2">
              {index > 0 && (
                <span aria-hidden className="text-ink/20">
                  /
                </span>
              )}
              {isLast || !item.href ? (
                <span className="max-w-[30ch] truncate text-ink-500" aria-current={isLast ? 'page' : undefined}>
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
    </nav>
  );
}

/**
 * Page header on paper with grain + ledger grid. `aside` renders in a right
 * column on large screens (e.g. a preview, form or illustration).
 */
export function PageHeader({
  breadcrumbs,
  eyebrow,
  eyebrowIcon,
  title,
  lead,
  children,
  aside,
  className,
  containerClassName,
  size = 'xl',
}) {
  const rise = (ms) => ({ animationDelay: `${ms}ms` });
  return (
    <header className={cn('grain relative isolate overflow-hidden bg-paper text-ink', className)}>
      <div className="bg-ledger mask-fade-y pointer-events-none absolute inset-0 -z-10" aria-hidden />
      <div
        className="pointer-events-none absolute -right-40 -top-48 -z-10 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(210,96,26,0.12),transparent_65%)]"
        aria-hidden
      />
      <div
        className={cn(
          'container mx-auto px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20',
          containerClassName
        )}
      >
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} className="mb-10 motion-safe:animate-rise" />}
        <div className={cn(aside && 'grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16')}>
          <div>
            {eyebrow && (
              <div className="motion-safe:animate-rise" style={rise(40)}>
                <EyebrowPill icon={eyebrowIcon}>{eyebrow}</EyebrowPill>
              </div>
            )}
            <DisplayHeading
              as="h1"
              size={size}
              className={cn('max-w-[18ch] motion-safe:animate-rise', eyebrow && 'mt-6')}
              style={rise(100)}
            >
              {title}
            </DisplayHeading>
            {lead && (
              <div
                className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-500 motion-safe:animate-rise sm:text-xl [&_p+p]:mt-4"
                style={rise(160)}
              >
                {lead}
              </div>
            )}
            {children && (
              <div className="mt-9 motion-safe:animate-rise" style={rise(220)}>
                {children}
              </div>
            )}
          </div>
          {aside && (
            <div className="motion-safe:animate-rise" style={rise(260)}>
              {aside}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

/** Inline list of check-style trust points under a header. */
export function TrustList({ items, className, tone = 'dark' }) {
  if (!items?.length) return null;
  return (
    <ul className={cn('flex flex-wrap gap-x-6 gap-y-2.5', className)}>
      {items.map((item) => (
        <li
          key={typeof item === 'string' ? item : item.label}
          className={cn(
            'flex items-center gap-2 text-sm',
            tone === 'dark' ? 'text-ink-500' : 'text-white/65'
          )}
        >
          <span className="h-px w-3 bg-ember" aria-hidden />
          {typeof item === 'string' ? item : item.label}
        </li>
      ))}
    </ul>
  );
}

/** Dark ink panel used for closing CTAs. */
export function DarkPanel({ children, className, innerClassName }) {
  return (
    <section className={cn('bg-paper px-3 py-3 sm:px-6 sm:py-6', className)}>
      <div
        className={cn(
          'grain-light relative isolate mx-auto max-w-[88rem] overflow-hidden rounded-[1.75rem] bg-ink-950 px-6 py-16 text-white sm:rounded-[2.25rem] sm:px-12 sm:py-24',
          innerClassName
        )}
      >
        <div className="bg-ledger-dark mask-fade-y pointer-events-none absolute inset-0 -z-10" aria-hidden />
        <div
          className="pointer-events-none absolute -bottom-40 left-1/2 -z-10 h-[28rem] w-[56rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(210,96,26,0.26),transparent_62%)]"
          aria-hidden
        />
        {children}
      </div>
    </section>
  );
}

/** Centered closing CTA inside a DarkPanel. */
export function ClosingCta({ title, text, primary, secondary, note }) {
  return (
    <DarkPanel innerClassName="text-center">
      <img src="/crown-favicon.svg" alt="" aria-hidden className="mx-auto h-9 w-9" />
      <h2 className="mx-auto mt-7 max-w-[20ch] font-display text-[2.3rem] font-normal leading-[1.04] tracking-[-0.03em] sm:text-5xl lg:text-[3.6rem] [&_em]:text-ember-100">
        {title}
      </h2>
      {text && <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">{text}</p>}
      {(primary || secondary) && (
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {primary && (
            <Link href={primary.href} className={cn(btn.light, 'w-full sm:w-auto')}>
              {primary.label}
              <ArrowIcon />
            </Link>
          )}
          {secondary && (
            <Link href={secondary.href} className={cn(btn.ghostDark, 'w-full sm:w-auto')}>
              {secondary.label}
            </Link>
          )}
        </div>
      )}
      {note && <p className="mt-6 text-sm text-white/50">{note}</p>}
    </DarkPanel>
  );
}

/** Hairline FAQ list (native <details>, no JS). */
export function FaqList({ items, className }) {
  if (!items?.length) return null;
  return (
    <div className={cn('border-t border-ink/15', className)}>
      {items.map(({ question, answer }) => (
        <details key={question} className="group border-b border-ink/15">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 font-display text-xl leading-snug text-ink marker:content-none sm:text-[1.35rem] [&::-webkit-details-marker]:hidden">
            {question}
            <span
              className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-ink/15 text-lg leading-none text-ember transition-transform duration-300 group-open:rotate-45"
              aria-hidden
            >
              +
            </span>
          </summary>
          <div className="max-w-2xl pb-7 pr-12 text-[15px] leading-relaxed text-ink-500 sm:text-base">{answer}</div>
        </details>
      ))}
    </div>
  );
}

/** White card with hairline + soft paper shadow. */
export function PaperCard({ as: Tag = 'div', className, children, ...props }) {
  return (
    <Tag className={cn('rounded-2xl border border-ink/[0.08] bg-white shadow-paper', className)} {...props}>
      {children}
    </Tag>
  );
}
