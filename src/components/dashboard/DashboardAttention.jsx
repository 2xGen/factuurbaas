'use client';

import React from 'react';
import Link from 'next/link';
import { AlertTriangle, ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

function TextAction({ href, onClick, children, muted }) {
  const className = cn(
    'inline-flex items-center gap-1 text-sm underline-offset-4 hover:underline',
    muted ? 'font-medium text-slate-500' : 'font-semibold text-deep-blue'
  );
  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    );
  }
  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export default function DashboardAttention({
  actions = [],
  nextStep = null,
  nextSteps = null,
  onboarding = null,
  onViewInvoice,
  onSendReminder,
  onMarkPaid,
}) {
  const hasActions = actions.length > 0;
  const steps = onboarding?.length
    ? onboarding
    : nextSteps?.length
      ? nextSteps
      : nextStep
        ? [nextStep]
        : [];

  return (
    <div className="mb-8 space-y-4">
      {hasActions ? (
        <section className="overflow-hidden rounded-2xl border border-red-200/80 bg-white">
          <div className="border-b border-red-100 px-5 py-4 sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-red-600">
              Actie nodig
            </p>
            <h2 className="mt-0.5 font-heading text-lg font-semibold text-deep-blue">
              {actions.length === 1 ? 'Er staat iets open' : `${actions.length} dingen vragen aandacht`}
            </h2>
          </div>
          <ul className="divide-y divide-slate-100">
            {actions.map((item) => {
              const isOverdue = item.type === 'overdue' && item.invoice;

              return (
                <li
                  key={item.id}
                  className="flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6"
                >
                  <div className="flex min-w-0 items-start gap-3">
                    <span
                      className={cn(
                        'mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg',
                        item.tone === 'urgent'
                          ? 'bg-red-100 text-red-600'
                          : 'bg-amber-100 text-amber-700'
                      )}
                    >
                      {item.tone === 'urgent' ? (
                        <AlertTriangle className="h-4 w-4" strokeWidth={1.75} />
                      ) : (
                        <Clock className="h-4 w-4" strokeWidth={1.75} />
                      )}
                    </span>
                    <div className="min-w-0">
                      {isOverdue ? (
                        <button
                          type="button"
                          className="text-left font-semibold text-deep-blue hover:underline"
                          onClick={() => onViewInvoice?.(item.invoice.id)}
                        >
                          {item.title}
                        </button>
                      ) : (
                        <p className="font-semibold text-deep-blue">{item.title}</p>
                      )}
                      {item.detail && (
                        <p className="mt-0.5 text-sm text-slate-500">{item.detail}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 sm:shrink-0 sm:justify-end">
                    {isOverdue ? (
                      <>
                        <TextAction onClick={() => onSendReminder?.(item.invoice)}>
                          Stuur herinnering
                        </TextAction>
                        <span className="hidden text-slate-300 sm:inline" aria-hidden>
                          ·
                        </span>
                        <TextAction muted onClick={() => onMarkPaid?.(item.invoice)}>
                          Markeer als betaald
                        </TextAction>
                      </>
                    ) : item.href && item.cta ? (
                      <TextAction href={item.href}>{item.cta}</TextAction>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}

      {steps.length > 0 && (
        <section className="px-1 sm:px-0">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Maak FactuurBaas compleet
          </p>
          <ul className="mt-2 divide-y divide-slate-200 border-y border-slate-200">
            {steps.map((step) => (
              <li
                key={step.id || step.title}
                className="flex flex-col gap-2 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <div className="min-w-0">
                  <p className="font-medium text-deep-blue">{step.title}</p>
                  {step.detail && <p className="mt-0.5 text-sm text-slate-500">{step.detail}</p>}
                </div>
                {step.href && step.cta && (
                  <div className="flex shrink-0">
                    <TextAction href={step.href}>{step.cta}</TextAction>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {!hasActions && steps.length === 0 && (
        <section className="flex items-start gap-3 px-1">
          <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" strokeWidth={1.75} />
          <div>
            <p className="font-medium text-deep-blue">Alles bijgewerkt</p>
            <p className="mt-0.5 text-sm text-slate-500">Niets dat nu aandacht vraagt.</p>
          </div>
        </section>
      )}
    </div>
  );
}
