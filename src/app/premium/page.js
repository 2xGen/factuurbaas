import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Crown, CheckCircle2 } from 'lucide-react';
import PremiumSignupCard from '@/components/premium/PremiumSignupCard';
import { ArrowIcon, EyebrowPill, PaperCard, btn } from '@/components/site/editorial';

export const metadata = {
  title: 'Premium: lifetime 50% korting | FactuurBaas',
  description:
    'Ontdek de voordelen van FactuurBaas Premium. Snel, simpel en direct professionele facturen maken en downloaden (lifetime 50% korting).',
  keywords: 'FactuurBaas Premium, lifetime 50% korting, factuur maken, pdf factuur, zzp facturen',
  alternates: { canonical: 'https://factuurbaas.nl/premium' },
};

const rise = (ms) => ({ animationDelay: `${ms}ms` });

function DashList({ items, tone = 'dark', className = '' }) {
  return (
    <ul className={`space-y-2.5 ${className}`}>
      {items.map((item) => (
        <li
          key={item}
          className={`flex items-start gap-3 text-[15px] leading-relaxed ${
            tone === 'dark' ? 'text-ink-700' : 'text-white/75'
          }`}
        >
          <span className="mt-3 h-px w-3 shrink-0 bg-ember" aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function PremiumPage() {
  return (
    <div className="bg-paper-50 text-ink">
      <header className="grain relative isolate overflow-hidden border-b border-ink/10 bg-paper">
        <div className="bg-ledger mask-fade-y pointer-events-none absolute inset-0 -z-10" aria-hidden />
        <div
          className="pointer-events-none absolute -right-40 -top-48 -z-10 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(210,96,26,0.12),transparent_65%)]"
          aria-hidden
        />
        <div className="container mx-auto max-w-5xl px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:pt-20">
          <Link
            href="/create-invoice"
            className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400 transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 motion-safe:animate-rise"
          >
            <ArrowLeft
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-0.5"
              aria-hidden
            />
            Terug naar Factuur Maken
          </Link>

          <div className="mt-10 motion-safe:animate-rise" style={rise(60)}>
            <EyebrowPill icon={Crown}>Premium</EyebrowPill>
          </div>
          <h1
            className="mt-6 max-w-[16ch] font-display text-[2.6rem] font-normal leading-[1] tracking-[-0.035em] motion-safe:animate-rise sm:text-6xl lg:text-[4.25rem]"
            style={rise(120)}
          >
            Word FactuurBaas <em className="text-ink-700">Premium</em>
          </h1>
          <p
            className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-500 motion-safe:animate-rise sm:text-xl"
            style={rise(180)}
          >
            Krijg lifetime 50% korting en als eerste toegang tot alle Premium-functies.
          </p>
        </div>
      </header>

      <div className="container mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-5 lg:grid-cols-2">
          <PaperCard as="section" className="p-6 sm:p-8">
            <h2 className="flex items-center gap-2.5 font-display text-2xl font-normal tracking-[-0.02em] text-ink">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-ember" aria-hidden />
              Nu al gratis
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
              Maak direct professionele facturen en download ze als PDF.
              Geen account, geen gedoe — gewoon starten.
            </p>
          </PaperCard>

          <PaperCard as="section" className="p-6 sm:p-8">
            <h2 className="flex items-center gap-2.5 font-display text-2xl font-normal tracking-[-0.02em] text-ink">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-ember" aria-hidden />
              Waarom Premium?
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
              Werk sneller, houd overzicht en krijg sneller betaald.
            </p>
            <div className="mt-6 border-t border-ink/10 pt-5">
              <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-400">
                Met Premium krijg je straks:
              </div>
              <DashList
                className="mt-4"
                items={[
                  'Overzicht & dashboard',
                  'Contacten opslaan',
                  'Automatische herinneringen',
                  'Facturen herhalen (dupliceren)',
                ]}
              />
            </div>
          </PaperCard>
        </div>

        <section className="mt-5 flex flex-col gap-3 rounded-2xl border border-dashed border-ink/15 px-6 py-5 sm:flex-row sm:items-center sm:gap-6 sm:px-8">
          <h2 className="flex shrink-0 items-center gap-2.5 font-display text-xl font-normal tracking-[-0.02em] text-ink">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-ember" aria-hidden />
            Binnenkort beschikbaar
          </h2>
          <p className="text-[15px] leading-relaxed text-ink-500">
            We werken aan deze functies en rollen ze als eerste uit naar Premium-gebruikers.
          </p>
        </section>
      </div>

      <div className="bg-paper-50 px-3 pb-3 sm:px-6 sm:pb-6">
        <div className="grain-light relative isolate mx-auto max-w-[88rem] overflow-hidden rounded-[1.75rem] bg-ink-950 px-5 py-14 text-white sm:rounded-[2.25rem] sm:px-12 sm:py-20">
          <div className="bg-ledger-dark mask-fade-y pointer-events-none absolute inset-0 -z-10" aria-hidden />
          <div
            className="pointer-events-none absolute -bottom-40 left-1/2 -z-10 h-[28rem] w-[56rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(210,96,26,0.26),transparent_62%)]"
            aria-hidden
          />
          <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <section>
              <img src="/crown-favicon.svg" alt="" aria-hidden className="h-9 w-9" />
              <h2 className="mt-7 font-display text-[2.3rem] font-normal leading-[1.04] tracking-[-0.03em] sm:text-5xl">
                Lifetime 50% korting
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-white/65 sm:text-lg">
                Meld je nu aan en krijg altijd 50% korting op Premium.
              </p>
              <DashList
                tone="light"
                className="mt-6"
                items={['Je hoeft nu niets te betalen.', 'Je krijgt alleen een seintje zodra Premium live gaat.']}
              />
            </section>

            <section>
              <PremiumSignupCard />
            </section>
          </div>
        </div>
      </div>

      <div className="flex justify-center px-4 py-14 sm:py-16">
        <Link href="/create-invoice" className={btn.primary}>
          Naar factuur maken
          <ArrowIcon />
        </Link>
      </div>
    </div>
  );
}
