'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Lock,
  Percent,
  PiggyBank,
  Plus,
  Receipt,
  Repeat,
  Search,
  Wallet,
} from 'lucide-react';
import { SectionHeader } from '@/components/landing/LandingSection';
import { EASE_OUT, Reveal, Stagger, staggerItem } from '@/components/landing/page/motion';
import {
  ArrowIcon,
  DarkPanel,
  FaqList,
  PageHeader,
  TrustList,
  btn,
} from '@/components/site/editorial';
import {
  UITGAVEN_BENEFITS,
  UITGAVEN_BLOG_PATH,
  UITGAVEN_FAQS,
  UITGAVEN_SIGNUP_HREF,
  getUitgavenFaqSchema,
  getUitgavenSoftwareSchema,
} from '@/lib/uitgavenLanding';

const DEMO_ROWS = [
  {
    date: '1 sep. 2026',
    description: 'Adobe Creative Cloud',
    supplier: 'Adobe',
    category: 'Software',
    excl: '€ 52,89',
    btw: '€ 11,11',
    incl: '€ 64,00',
    recurring: true,
  },
  {
    date: '28 aug. 2026',
    description: 'Zakelijke verzekering',
    supplier: 'NN',
    category: 'Verzekering',
    excl: '€ 41,32',
    btw: '€ 8,68',
    incl: '€ 50,00',
    recurring: true,
  },
  {
    date: '22 aug. 2026',
    description: 'Laptopstandaard & kabel',
    supplier: 'Coolblue',
    category: 'Materiaal',
    excl: '€ 66,12',
    btw: '€ 13,88',
    incl: '€ 80,00',
    recurring: false,
  },
  {
    date: '15 aug. 2026',
    description: 'Treinritten klantbezoek',
    supplier: 'NS',
    category: 'Reiskosten',
    excl: '€ 28,93',
    btw: '€ 2,60',
    incl: '€ 31,53',
    recurring: false,
  },
];

const BENEFIT_ICONS = [Receipt, Repeat, Percent, PiggyBank];

function UitgavenMockup() {
  return (
    <div className="overflow-hidden rounded-2xl bg-white text-ink shadow-window ring-1 ring-white/10">
      <div className="flex h-11 items-center gap-4 border-b border-ink/[0.07] bg-paper-100 px-4">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        </div>
        <div className="mx-auto flex w-full min-w-0 max-w-xs items-center justify-center gap-1.5 truncate rounded-md border border-ink/[0.06] bg-white py-1 text-[11px] text-ink-500">
          <Lock className="h-3 w-3 shrink-0" aria-hidden />
          factuurbaas.nl/uitgaven
        </div>
        <div className="hidden w-10 sm:block" aria-hidden />
      </div>

      <div className="bg-paper-50/40 p-4 sm:p-7">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="font-display text-xl sm:text-2xl">Uitgaven</p>
            <p className="mt-1 text-xs text-ink-500 sm:text-sm">
              Zakelijke kosten · deze maand € 1.240 excl. btw
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-ink px-3.5 py-1.5 text-xs font-medium text-white">
            <Plus className="h-3.5 w-3.5" aria-hidden />
            Nieuwe uitgave
          </span>
        </div>

        <div className="mb-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { icon: Wallet, label: 'Uitgaven', value: '€ 1.240' },
            { icon: Percent, label: 'Btw op kosten', value: '€ 260' },
            { icon: Repeat, label: 'Terugkerend', value: '2 posten' },
            { icon: PiggyBank, label: 'Resultaat', value: '€ 3.610', answer: true },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`rounded-xl p-4 ${
                  stat.answer
                    ? 'bg-ink text-white shadow-[0_12px_24px_-12px_rgba(10,42,77,0.6)]'
                    : 'border border-ink/[0.07] bg-white'
                }`}
              >
                <div
                  className={`flex items-center gap-1.5 text-xs ${
                    stat.answer ? 'text-white/70' : 'text-ink-500'
                  }`}
                >
                  <Icon
                    className={`h-3.5 w-3.5 ${stat.answer ? 'text-ember-100' : 'text-ember'}`}
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  {stat.label}
                </div>
                <p className="mt-2 font-display text-[1.4rem] leading-none tabular sm:text-[1.65rem]">
                  {stat.value}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mb-3 flex items-center gap-2 rounded-xl border border-ink/[0.07] bg-white px-3.5 py-2.5 text-xs text-ink-400">
          <Search className="h-3.5 w-3.5 shrink-0" aria-hidden />
          <span className="truncate">Zoek op omschrijving, leverancier of categorie…</span>
        </div>

        <div className="overflow-hidden rounded-xl border border-ink/[0.07] bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-xs sm:text-[13px]">
              <thead>
                <tr className="border-b border-ink/[0.07] font-mono text-[10px] uppercase tracking-[0.14em] text-ink-400">
                  <th className="px-4 py-3 font-normal">Datum</th>
                  <th className="px-3 py-3 font-normal">Omschrijving</th>
                  <th className="px-3 py-3 font-normal">Categorie</th>
                  <th className="px-3 py-3 text-right font-normal">Excl.</th>
                  <th className="px-4 py-3 text-right font-normal">Incl.</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink/[0.06]">
                {DEMO_ROWS.map((row) => (
                  <tr key={row.description}>
                    <td className="whitespace-nowrap px-4 py-3 font-mono text-[11px] text-ink-400">
                      {row.date}
                    </td>
                    <td className="px-3 py-3">
                      <p className="font-medium text-ink">{row.description}</p>
                      <p className="text-[11px] text-ink-400">
                        {row.supplier}
                        {row.recurring ? ' · Terugkerend' : ''}
                      </p>
                    </td>
                    <td className="px-3 py-3">
                      <span className="inline-flex rounded-full bg-paper-100 px-2 py-0.5 text-[11px] text-ink-700 ring-1 ring-inset ring-ink/[0.06]">
                        {row.category}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 text-right tabular text-ink-700">
                      {row.excl}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-right font-medium tabular text-ink">
                      {row.incl}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function UitgavenBijhoudenPage() {
  const schemas = [getUitgavenFaqSchema(), getUitgavenSoftwareSchema()];
  const reduce = useReducedMotion();

  return (
    <div className="min-h-screen bg-paper text-ink">
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <PageHeader
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Uitgaven bijhouden' }]}
        eyebrow="Gratis met account"
        eyebrowIcon={Receipt}
        title={
          <>
            Zakelijke uitgaven <em>bijhouden</em> als zzp&apos;er
          </>
        }
        lead={
          <p>
            Registreer zakelijke kosten, houd btw op uitgaven bij en zie wat er overblijft van je
            omzet. Gratis met een FactuurBaas-account.
          </p>
        }
      >
        <TrustList
          items={[
            'Kosten & btw registreren',
            'Terugkerende lasten',
            'Resultaat naast facturen',
            'Gratis account',
          ]}
        />
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link href={UITGAVEN_SIGNUP_HREF} className={btn.primary}>
            Houd mijn uitgaven gratis bij
            <ArrowIcon />
          </Link>
          <Link href={UITGAVEN_BLOG_PATH} className={btn.secondary}>
            Lees de gids
          </Link>
        </div>
      </PageHeader>

      <section className="grain-light relative isolate overflow-hidden bg-ink-950 py-16 text-white sm:py-24 lg:py-28">
        <div className="bg-ledger-dark mask-fade-y pointer-events-none absolute inset-0 -z-10" aria-hidden />
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[36rem] w-[64rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(210,96,26,0.2),transparent_60%)]"
          aria-hidden
        />
        <div className="container mx-auto px-4 sm:px-6">
          <motion.figure
            initial={reduce ? false : { opacity: 0, y: 32, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: EASE_OUT }}
            className="mx-auto max-w-5xl"
          >
            <UitgavenMockup />
          </motion.figure>
        </div>
      </section>

      <section className="bg-paper-50">
        <div className="container mx-auto grid gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24 lg:py-28">
          <Reveal className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeader
              align="left"
              className="!mb-0"
              eyebrow="Wat je krijgt"
              title={
                <>
                  Alles om je zakelijke kosten <em>bij te houden</em>
                </>
              }
              description="Geen nep-tool: dit is de echte uitgavenfunctie in FactuurBaas — naast je facturen en dashboard."
            />
          </Reveal>

          <Stagger as="dl" className="border-t border-ink/15">
            {UITGAVEN_BENEFITS.map((item, i) => {
              const Icon = BENEFIT_ICONS[i] || Receipt;
              return (
                <motion.div
                  key={item.title}
                  variants={staggerItem}
                  className="relative border-b border-ink/15 py-8 pl-16 sm:py-10 sm:pl-[5.5rem]"
                >
                  <dt className="flex items-center gap-3 font-display text-2xl leading-tight sm:text-[1.75rem]">
                    <span
                      className="absolute left-0 top-9 font-display text-2xl italic leading-none text-ember sm:top-11 sm:text-3xl"
                      aria-hidden
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {item.title}
                    <Icon className="hidden h-4 w-4 shrink-0 text-ink-400 sm:block" strokeWidth={1.75} aria-hidden />
                  </dt>
                  <dd className="mt-3 max-w-lg text-base leading-relaxed text-ink-500">{item.text}</dd>
                </motion.div>
              );
            })}
          </Stagger>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] bg-paper">
        <div className="container mx-auto grid gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24 lg:py-28">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeader
              align="left"
              className="!mb-0"
              eyebrow="Veelgestelde vragen"
              title="Uitgaven bijhouden — FAQ"
              description="Kort antwoord op de vragen die zzp'ers het vaakst stellen."
            />
          </div>
          <FaqList items={UITGAVEN_FAQS} />
        </div>
      </section>

      <DarkPanel innerClassName="text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ember-100/70">
          Gratis starten
        </p>
        <h2 className="mx-auto mt-6 max-w-[20ch] font-display text-[2.3rem] font-normal leading-[1.04] tracking-[-0.03em] sm:text-5xl lg:text-[3.6rem]">
          Houd je zakelijke uitgaven <em className="text-ember-100">gratis</em> bij
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
          Registreer kosten en btw en zie automatisch je resultaat — samen met je facturen.
        </p>
        <div className="mt-10 flex justify-center">
          <Link href={UITGAVEN_SIGNUP_HREF} className={`${btn.light} w-full sm:w-auto`}>
            Houd mijn uitgaven gratis bij
            <ArrowIcon />
          </Link>
        </div>
        <p className="mt-6 text-sm text-white/55">
          Of lees eerst:{' '}
          <Link
            href={UITGAVEN_BLOG_PATH}
            className="font-medium text-white underline decoration-white/25 underline-offset-[6px] transition-colors hover:decoration-ember"
          >
            Zakelijke uitgaven bijhouden als zzp&apos;er
          </Link>
        </p>
      </DarkPanel>
    </div>
  );
}
