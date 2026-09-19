'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Percent,
  PiggyBank,
  Plus,
  Receipt,
  Repeat,
  Search,
  Wallet,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LandingSection, SectionHeader } from '@/components/landing/LandingSection';
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
    <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-[#f4f6f9] shadow-2xl shadow-deep-blue/10 sm:rounded-3xl">
      <div className="flex items-center gap-2 border-b border-slate-200/80 bg-white px-4 py-3 sm:px-5">
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <div className="ml-3 flex-1 truncate rounded-md bg-slate-100 px-3 py-1 text-center text-[11px] text-slate-500 sm:text-xs">
          factuurbaas.nl/uitgaven
        </div>
      </div>

      <div className="p-3 sm:p-5">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="font-heading text-lg font-bold text-deep-blue sm:text-xl">Uitgaven</p>
            <p className="text-xs text-slate-500 sm:text-sm">
              Zakelijke kosten · deze maand € 1.240 excl. btw
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-xl bg-deep-blue px-3 py-2 text-xs font-semibold text-white">
            <Plus className="h-3.5 w-3.5" />
            Nieuwe uitgave
          </span>
        </div>

        <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
          {[
            { icon: Wallet, label: 'Uitgaven', value: '€ 1.240' },
            { icon: Percent, label: 'Btw op kosten', value: '€ 260' },
            { icon: Repeat, label: 'Terugkerend', value: '2 posten' },
            { icon: PiggyBank, label: 'Resultaat', value: '€ 3.610' },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="rounded-xl border border-slate-200/80 bg-white px-3 py-3"
              >
                <div className="mb-1 flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
                  <Icon className="h-3.5 w-3.5 text-deep-blue" strokeWidth={1.75} />
                  {stat.label}
                </div>
                <p className="font-heading text-base font-bold text-deep-blue sm:text-lg">
                  {stat.value}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mb-3 flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs text-slate-400">
          <Search className="h-3.5 w-3.5" />
          Zoek op omschrijving, leverancier of categorie…
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-100 text-[10px] uppercase tracking-wide text-slate-400">
                  <th className="px-3 py-2.5 font-medium sm:px-4">Datum</th>
                  <th className="px-3 py-2.5 font-medium">Omschrijving</th>
                  <th className="px-3 py-2.5 font-medium">Categorie</th>
                  <th className="px-3 py-2.5 text-right font-medium">Excl.</th>
                  <th className="px-3 py-2.5 text-right font-medium sm:px-4">Incl.</th>
                </tr>
              </thead>
              <tbody>
                {DEMO_ROWS.map((row) => (
                  <tr key={row.description} className="border-b border-slate-50 last:border-0">
                    <td className="whitespace-nowrap px-3 py-2.5 text-slate-500 sm:px-4">
                      {row.date}
                    </td>
                    <td className="px-3 py-2.5">
                      <p className="font-medium text-deep-blue">{row.description}</p>
                      <p className="text-[11px] text-slate-500">
                        {row.supplier}
                        {row.recurring ? ' · Terugkerend' : ''}
                      </p>
                    </td>
                    <td className="px-3 py-2.5 text-slate-600">{row.category}</td>
                    <td className="whitespace-nowrap px-3 py-2.5 text-right font-medium text-slate-800">
                      {row.excl}
                    </td>
                    <td className="whitespace-nowrap px-3 py-2.5 text-right font-medium text-slate-800 sm:px-4">
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

  return (
    <div className="min-h-screen bg-white">
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <section className="bg-gradient-to-br from-deep-blue via-sky-700 to-indigo-600 py-12 text-white sm:py-16">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">
          <nav className="mb-6 text-sm text-blue-200" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-white">Uitgaven bijhouden</li>
            </ol>
          </nav>

          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-200">
            Gratis met account
          </p>
          <h1 className="font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Zakelijke uitgaven bijhouden als zzp&apos;er
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-blue-100 sm:text-lg">
            Registreer zakelijke kosten, houd btw op uitgaven bij en zie wat er overblijft van je
            omzet. Gratis met een FactuurBaas-account.
          </p>

          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            {[
              'Kosten & btw registreren',
              'Terugkerende lasten',
              'Resultaat naast facturen',
              'Gratis account',
            ].map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 text-sm text-blue-100 sm:text-base"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-green-300" />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="xl"
              variant="secondary"
              className="h-auto min-h-14 gap-2 px-8 py-4 text-base font-semibold"
            >
              <Link href={UITGAVEN_SIGNUP_HREF}>
                Houd mijn uitgaven gratis bij
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="xl"
              variant="outline"
              className="h-auto min-h-14 border-white/30 bg-transparent px-8 py-4 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
            >
              <Link href={UITGAVEN_BLOG_PATH}>Lees de gids</Link>
            </Button>
          </div>
        </div>
      </section>

      <LandingSection bg="muted" className="overflow-hidden !py-12 sm:!py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-5xl"
        >
          <UitgavenMockup />
        </motion.div>
      </LandingSection>

      <LandingSection bg="white">
        <SectionHeader
          eyebrow="Wat je krijgt"
          title="Alles om je zakelijke kosten bij te houden"
          description="Geen nep-tool: dit is de echte uitgavenfunctie in FactuurBaas — naast je facturen en dashboard."
        />
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:gap-8">
          {UITGAVEN_BENEFITS.map((item, i) => {
            const Icon = BENEFIT_ICONS[i] || Receipt;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.35 }}
                className="flex gap-3"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-deep-blue/5 text-deep-blue">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="font-heading text-base font-semibold text-deep-blue">{item.title}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-slate-600">{item.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </LandingSection>

      <LandingSection bg="muted">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeader
            eyebrow="Gratis starten"
            title="Houd je zakelijke uitgaven gratis bij"
            description="Registreer kosten en btw en zie automatisch je resultaat — samen met je facturen."
          />
          <Button asChild size="lg" className="h-12 rounded-xl px-8 font-semibold">
            <Link href={UITGAVEN_SIGNUP_HREF}>
              Houd mijn uitgaven gratis bij
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <p className="mt-4 text-sm text-slate-500">
            Of lees eerst:{' '}
            <Link href={UITGAVEN_BLOG_PATH} className="font-medium text-warm-orange hover:underline">
              Zakelijke uitgaven bijhouden als zzp&apos;er
            </Link>
          </p>
        </div>
      </LandingSection>

      <LandingSection bg="white">
        <SectionHeader
          eyebrow="Veelgestelde vragen"
          title="Uitgaven bijhouden — FAQ"
          description="Kort antwoord op de vragen die zzp'ers het vaakst stellen."
        />
        <div className="mx-auto max-w-3xl space-y-4">
          {UITGAVEN_FAQS.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-slate-200 bg-slate-50/50 px-5 py-4 open:bg-white open:shadow-sm"
            >
              <summary className="cursor-pointer list-none font-heading text-base font-semibold text-deep-blue marker:content-none">
                <span className="flex items-start justify-between gap-3">
                  {item.question}
                  <span className="mt-0.5 text-slate-400 transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </LandingSection>
    </div>
  );
}
