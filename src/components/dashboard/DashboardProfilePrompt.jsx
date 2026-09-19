import React from 'react';
import Link from 'next/link';
import { ArrowRight, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

/**
 * Baas status only — profile onboarding lives in "Volgende stap".
 */
export default function DashboardProfilePrompt({
  baasLevelName = 'Starter',
  badgesUnlocked = 0,
  badgesTotal = 7,
  referralHint = null,
}) {
  return (
    <section className="mb-8 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:flex sm:items-center sm:justify-between sm:gap-4 sm:p-6">
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-warm-orange/10 text-warm-orange">
          <Crown className="h-5 w-5" strokeWidth={1.75} />
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Baas status</p>
          <h2 className="mt-0.5 font-heading text-lg font-semibold text-deep-blue">{baasLevelName}</h2>
          <p className="mt-1 text-sm text-slate-500">
            {badgesUnlocked}/{badgesTotal} badges
            {referralHint ? ` · ${referralHint}` : ''}
          </p>
          <div className="mt-3 flex max-w-xs gap-1.5">
            {Array.from({ length: badgesTotal }).map((_, i) => (
              <span
                key={i}
                className={cn(
                  'h-1.5 flex-1 rounded-full',
                  i < badgesUnlocked ? 'bg-warm-orange' : 'bg-slate-100'
                )}
              />
            ))}
          </div>
        </div>
      </div>
      <Button asChild variant="outline" className="mt-4 rounded-xl border-slate-200 bg-white sm:mt-0">
        <Link href="/baas-status">
          Bekijk Baas status <ArrowRight className="ml-1.5 h-4 w-4" />
        </Link>
      </Button>
    </section>
  );
}
