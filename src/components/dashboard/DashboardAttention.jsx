'use client';

import React from 'react';
import Link from 'next/link';
import { AlertTriangle, ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

/**
 * Actie nodig = real problems only.
 * Volgende stap = one soft onboarding nudge underneath.
 */
export default function DashboardAttention({
  actions = [],
  nextStep = null,
  onViewInvoice,
  onSendReminder,
  onMarkPaid,
}) {
  const hasActions = actions.length > 0;

  return (
    <div className="mb-8 space-y-3">
      {hasActions ? (
        <section className="overflow-hidden rounded-2xl border border-red-200/80 bg-gradient-to-br from-red-50/70 to-white shadow-sm">
          <div className="border-b border-red-100/80 px-5 py-4 sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-red-600">
              Actie nodig
            </p>
            <h2 className="mt-0.5 font-heading text-lg font-semibold text-deep-blue sm:text-xl">
              {actions.length === 1 ? 'Er staat iets open' : `${actions.length} dingen vragen aandacht`}
            </h2>
          </div>
          <ul className="divide-y divide-slate-100">
            {actions.map((item) => (
              <li
                key={item.id}
                className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6"
              >
                <div className="flex min-w-0 items-start gap-3">
                  <span
                    className={cn(
                      'mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg',
                      item.tone === 'urgent' ? 'bg-red-100 text-red-600' : 'bg-amber-100 text-amber-700'
                    )}
                  >
                    {item.tone === 'urgent' ? (
                      <AlertTriangle className="h-4 w-4" strokeWidth={1.75} />
                    ) : (
                      <Clock className="h-4 w-4" strokeWidth={1.75} />
                    )}
                  </span>
                  <div className="min-w-0">
                    <p className="font-semibold text-deep-blue">{item.title}</p>
                    {item.detail && <p className="mt-0.5 text-sm text-slate-500">{item.detail}</p>}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 sm:shrink-0 sm:justify-end">
                  {item.type === 'overdue' && item.invoice && (
                    <>
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-xl border-slate-200 bg-white"
                        onClick={() => onViewInvoice?.(item.invoice.id)}
                      >
                        Bekijk factuur
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-xl border-slate-200 bg-white"
                        onClick={() => onSendReminder?.(item.invoice)}
                      >
                        Herinnering
                      </Button>
                      <Button
                        size="sm"
                        className="rounded-xl bg-deep-blue font-semibold hover:bg-deep-blue/90"
                        onClick={() => onMarkPaid?.(item.invoice.id)}
                      >
                        Markeer betaald
                      </Button>
                    </>
                  )}
                  {item.href && item.cta && (
                    <Button
                      asChild
                      size="sm"
                      className="rounded-xl bg-deep-blue font-semibold hover:bg-deep-blue/90"
                    >
                      <Link href={item.href}>
                        {item.cta}
                        <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <section className="overflow-hidden rounded-2xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 to-white p-5 shadow-sm sm:px-6">
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
              <CheckCircle2 className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700/80">
                Actie nodig
              </p>
              <h2 className="mt-0.5 font-heading text-lg font-semibold text-deep-blue">
                Alles bijgewerkt
              </h2>
              <p className="mt-1 text-sm text-slate-500">Geen verlopen facturen of openstaande uren.</p>
            </div>
          </div>
        </section>
      )}

      {nextStep && (
        <section className="flex flex-col gap-3 rounded-2xl border border-slate-200/80 bg-white px-5 py-4 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Volgende stap
            </p>
            <p className="mt-0.5 font-semibold text-deep-blue">{nextStep.title}</p>
            {nextStep.detail && <p className="mt-0.5 text-sm text-slate-500">{nextStep.detail}</p>}
          </div>
          <Button asChild size="sm" className="shrink-0 rounded-xl bg-deep-blue font-semibold hover:bg-deep-blue/90">
            <Link href={nextStep.href}>
              {nextStep.cta}
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </Button>
        </section>
      )}
    </div>
  );
}
