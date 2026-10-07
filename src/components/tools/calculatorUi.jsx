'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calculator } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { btn, PageHeader } from '@/components/site/editorial';
import { AnimatedNumber } from '@/components/landing/page/motion';

export const fieldInputClass =
  'h-12 rounded-xl border-ink/15 bg-white text-lg text-ink tabular shadow-[inset_0_1px_2px_rgba(10,42,77,0.04)] transition-colors placeholder:text-ink-400 hover:border-ink/25 focus-visible:border-ink/40 focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-1';

export const fieldLabelClass =
  'mb-2 block font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500';

export const resultButton = {
  primary: cn(btn.light, 'w-full'),
  secondary: cn(btn.ghostDark, 'w-full'),
};

export function CalculatorPage({ breadcrumbLabel, eyebrow = 'Gratis tool', title, lead, children }) {
  return (
    <div className="min-h-screen bg-paper-50 text-ink">
      <PageHeader
        size="lg"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Tools', href: '/tools' },
          { name: breadcrumbLabel },
        ]}
        eyebrow={eyebrow}
        eyebrowIcon={Calculator}
        title={title}
        lead={lead}
        containerClassName="max-w-6xl pb-10 pt-8 sm:pb-12 sm:pt-10 lg:pb-14 lg:pt-12"
      />
      <div className="border-t border-ink/[0.06] pb-20 pt-8 sm:pb-24 sm:pt-12">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">{children}</div>
      </div>
    </div>
  );
}

export function ToolGrid({ children, className }) {
  return (
    <div
      className={cn(
        'grid items-start gap-6 motion-safe:animate-rise lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-8',
        className
      )}
      style={{ animationDelay: '280ms' }}
    >
      {children}
    </div>
  );
}

export function ToolCard({ title, titleAs: Title = 'h2', description, icon: Icon = Calculator, children, className }) {
  return (
    <div className={cn('rounded-2xl border border-ink/[0.08] bg-white p-5 shadow-window sm:p-8', className)}>
      {title && (
        <div className="mb-7 flex items-center gap-3">
          {Icon && (
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white">
              <Icon className="h-4 w-4" aria-hidden />
            </span>
          )}
          <div className="min-w-0">
            <Title className="font-display text-xl font-normal leading-tight tracking-[-0.015em] text-ink sm:text-[1.4rem]">
              {title}
            </Title>
            {description && <p className="mt-0.5 text-sm text-ink-400">{description}</p>}
          </div>
        </div>
      )}
      {children}
    </div>
  );
}

export function FieldLabel({ htmlFor, children, className }) {
  const Comp = htmlFor ? 'label' : 'p';
  return (
    <Comp htmlFor={htmlFor} className={cn(fieldLabelClass, className)}>
      {children}
    </Comp>
  );
}

export function AffixInput({ id, value, onChange, prefix, suffix, className, ...props }) {
  return (
    <div className="relative">
      {prefix && (
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-400">{prefix}</span>
      )}
      <Input
        id={id}
        type="text"
        inputMode="decimal"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(fieldInputClass, prefix && 'pl-9', suffix && 'pr-10', className)}
        {...props}
      />
      {suffix && (
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink-400">{suffix}</span>
      )}
    </div>
  );
}

export function FieldHint({ children, className }) {
  return <p className={cn('text-xs leading-relaxed text-ink-400', className)}>{children}</p>;
}

/**
 * Pill-style radio group with a sliding active indicator. Uses native radios so
 * keyboard arrows and screen readers behave as a regular radio group.
 */
export function Segmented({ name, options, value, onChange, layoutId, ariaLabel, stackOnMobile = false, className }) {
  return (
    <div
      role="radiogroup"
      aria-label={ariaLabel}
      className={cn(
        'gap-1 bg-paper-200/70 p-1',
        stackOnMobile
          ? 'grid rounded-2xl sm:auto-cols-fr sm:grid-flow-col sm:rounded-full'
          : 'inline-flex max-w-full flex-wrap rounded-[1.4rem]',
        className
      )}
    >
      {options.map((opt) => {
        const active = value === opt.value;
        return (
          <label
            key={String(opt.value)}
            className={cn(
              'relative flex min-h-10 cursor-pointer items-center justify-center px-4 py-2 text-center text-sm font-medium transition-colors',
              stackOnMobile ? 'rounded-xl sm:rounded-full' : 'rounded-full',
              active ? 'text-white' : 'text-ink-500 hover:text-ink'
            )}
          >
            <input
              type="radio"
              name={name}
              checked={active}
              onChange={() => onChange(opt.value)}
              className="peer sr-only"
            />
            {active && (
              <motion.span
                layoutId={layoutId}
                className={cn(
                  'absolute inset-0 bg-ink shadow-[0_1px_2px_rgba(6,26,48,0.2),0_6px_14px_-6px_rgba(6,26,48,0.5)]',
                  stackOnMobile ? 'rounded-xl sm:rounded-full' : 'rounded-full'
                )}
                transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                aria-hidden
              />
            )}
            <span
              className={cn(
                'pointer-events-none absolute inset-0 ring-ember ring-offset-1 peer-focus-visible:ring-2',
                stackOnMobile ? 'rounded-xl sm:rounded-full' : 'rounded-full'
              )}
              aria-hidden
            />
            <span className="relative">{opt.label}</span>
          </label>
        );
      })}
    </div>
  );
}

export function CheckboxRow({ checked, onChange, children }) {
  return (
    <label className="flex cursor-pointer items-start gap-3">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border-ink/30 accent-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2"
      />
      <span className="text-sm leading-relaxed text-ink-700">{children}</span>
    </label>
  );
}

export function ResultPanel({ title = 'Resultaat', titleAs: Title = 'h2', children, footnote, className }) {
  return (
    <div
      className={cn(
        'grain-light relative isolate overflow-hidden rounded-2xl bg-ink-950 p-6 text-white shadow-window sm:p-8',
        className
      )}
    >
      <div className="bg-ledger-dark mask-fade-y pointer-events-none absolute inset-0 -z-10" aria-hidden />
      <div
        className="pointer-events-none absolute -right-24 -top-28 -z-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(210,96,26,0.28),transparent_65%)]"
        aria-hidden
      />
      <div className="flex items-center gap-2.5">
        <span className="h-1.5 w-1.5 rounded-full bg-ember" aria-hidden />
        <Title className="font-mono text-[11px] font-normal uppercase tracking-[0.18em] text-white/55">{title}</Title>
      </div>
      {children}
      {footnote && (
        <div className="mt-6 border-t border-white/10 pt-5 text-xs leading-relaxed text-white/50 [&_a]:text-white [&_a]:underline [&_a]:decoration-white/30 [&_a]:underline-offset-4 hover:[&_a]:decoration-ember">
          {footnote}
        </div>
      )}
    </div>
  );
}

export function ResultEmpty({ children }) {
  return (
    <div className="mt-6 rounded-xl border border-dashed border-white/15 px-5 py-8 text-sm leading-relaxed text-white/60">
      {children}
    </div>
  );
}

export function ResultHero({ label, value, format, sub, className }) {
  return (
    <div className={cn('mt-6', className)}>
      <p className="text-sm text-white/65">{label}</p>
      <AnimatedNumber
        value={value}
        format={format}
        className="mt-2 block break-words font-display text-[2.6rem] leading-none tracking-[-0.03em] text-white tabular sm:text-[3.25rem]"
      />
      {sub && <p className="mt-2 text-sm text-white/55">{sub}</p>}
    </div>
  );
}

export function ResultRows({ children, className }) {
  return <div className={cn('mt-6 border-t border-white/10', className)}>{children}</div>;
}

export function ResultRow({ label, value, format, display, detail, strong = false, valueClassName }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-white/10 py-3.5">
      <div className="min-w-0">
        <p className={cn('text-sm', strong ? 'font-medium text-white' : 'text-white/65')}>{label}</p>
        {detail && <p className="mt-0.5 text-xs text-white/40 tabular">{detail}</p>}
      </div>
      <span
        className={cn(
          'shrink-0 text-right tabular',
          strong ? 'font-display text-2xl leading-none text-white' : 'text-[15px] font-medium text-white',
          valueClassName
        )}
      >
        {display ?? <AnimatedNumber value={value} format={format} />}
      </span>
    </div>
  );
}

export function ResultActions({ children }) {
  return <div className="mt-7 flex flex-col gap-2.5">{children}</div>;
}

export function RelatedLink({ href, children }) {
  return (
    <div className="mt-14 flex justify-center border-t border-ink/[0.08] pt-8 sm:mt-16">
      <Link href={href} className={cn(btn.link, 'text-[15px]')}>
        {children}
      </Link>
    </div>
  );
}
