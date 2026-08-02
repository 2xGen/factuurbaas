'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.45, ease: 'easeOut' },
};

const COSTS = [
  'KVK-inschrijving',
  'Zakelijke rekening',
  'Verzekeringen',
  'Boekhouder',
  'Software-abonnementen',
];

const BASICS = [
  'Facturen maken en als PDF downloaden',
  'Facturen opslaan in je account',
  'Betalingen en status bijhouden',
  'Btw-overzicht bekijken',
];

const TRUST = [
  { title: 'Export wanneer jij wilt', text: 'Haal je facturen eruit als JSON of CSV.' },
  { title: 'Wissen op verzoek', text: 'Verwijder facturen of je hele account.' },
  {
    title: 'EU-opslag',
    text: (
      <>
        Beveiligde opslag in Stockholm — zie{' '}
        <Link href="/veiligheid" className="text-warm-orange underline-offset-2 hover:underline">
          Veiligheid
        </Link>
        .
      </>
    ),
  },
  {
    title: 'Partners die helpen',
    text: 'Als we samenwerken met andere bedrijven, kiezen we alleen partners die ondernemers echt vooruithelpen.',
  },
];

export default function WhyFreeContent() {
  return (
    <div className="min-h-screen bg-[#f4f6f9]">
      <section className="relative overflow-hidden bg-deep-blue text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 70% -10%, rgba(255,127,80,0.35), transparent 55%), radial-gradient(ellipse 50% 40% at 10% 80%, rgba(255,255,255,0.08), transparent 50%)',
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage: 'linear-gradient(to bottom, black, transparent)',
          }}
        />

        <div className="relative container mx-auto max-w-4xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <p className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              FactuurBaas
            </p>
            <h1 className="mt-6 max-w-2xl font-heading text-3xl font-bold leading-[1.15] tracking-tight sm:text-5xl">
              Waarom is FactuurBaas gratis?
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              Maak professionele facturen zonder maandelijkse kosten. Ondernemers verdienen eenvoudige tools —
              zonder meteen weer een rekening erbij.
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="rounded-xl bg-warm-orange px-6 font-semibold text-white hover:bg-orange-600"
              >
                <Link href="/create-invoice">
                  Maak gratis factuur <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
        <motion.section {...fadeUp} className="mb-20 sm:mb-28">
          <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
            Ondernemen is al duur genoeg
          </h2>
          <p className="mt-4 max-w-2xl text-slate-600 leading-relaxed">
            Starten betekent vaak meteen kosten. Wij vinden dat iedere ondernemer een eenvoudige manier moet hebben
            om facturen te maken — zonder meteen weer een maandelijkse rekening.
          </p>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {COSTS.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200/90 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeUp} className="mb-20 sm:mb-28">
          <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
            Waarom geen abonnement?
          </h2>
          <p className="mt-4 max-w-2xl text-slate-600 leading-relaxed">
            Veel ondernemers starten klein. Een abonnement van €10 of €20 per maand voelt misschien niet groot, maar
            voor iemand die net begint zijn alle vaste kosten belangrijk. Daarom willen wij eerst waarde bieden —
            factureren zonder abonnement te moeten nemen.
          </p>
        </motion.section>

        <motion.section
          {...fadeUp}
          className="mb-20 border-y border-slate-200 py-14 sm:mb-28 sm:py-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-warm-orange">Missie</p>
          <p className="mt-4 font-heading text-2xl font-bold leading-snug tracking-tight text-deep-blue sm:text-4xl sm:leading-tight">
            Nederlandse ondernemers helpen om eenvoudiger hun administratie te regelen.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {['Geen ingewikkelde systemen', 'Geen lange contracten', 'Geen verplicht abonnement'].map(
              (line) => (
                <p key={line} className="text-sm font-medium text-slate-600 sm:text-base">
                  {line}.
                </p>
              )
            )}
          </div>
        </motion.section>

        <motion.section {...fadeUp} className="mb-20 sm:mb-28">
          <div className="rounded-3xl bg-deep-blue px-6 py-10 text-white shadow-lg shadow-deep-blue/20 sm:px-10 sm:py-12">
            <Shield className="mb-5 h-7 w-7 text-warm-orange" strokeWidth={1.75} />
            <h2 className="font-heading text-2xl font-bold leading-snug sm:text-3xl">
              Jij bent onze gebruiker, niet ons product.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              Wij verdienen niet door jouw facturen of bedrijfsgegevens te verkopen. Jouw administratie blijft van
              jou.
            </p>
          </div>
        </motion.section>

        <motion.section {...fadeUp} className="mb-20 sm:mb-28">
          <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
            Hoe blijft FactuurBaas beschikbaar?
          </h2>
          <p className="mt-4 max-w-2xl text-slate-600 leading-relaxed">
            Een product onderhouden kost tijd en geld. Wanneer we samenwerken met andere bedrijven, kiezen we alleen
            partners die ondernemers echt kunnen helpen — denk aan banken, verzekeringen of betaaloplossingen.
          </p>
          <p className="mt-4 max-w-2xl text-slate-600 leading-relaxed">
            Die samenwerkingen zijn altijd optioneel. Jij besluit zelf of iets past bij jouw bedrijf. Zo blijft de
            kern van FactuurBaas toegankelijk.
          </p>
        </motion.section>

        <motion.section {...fadeUp} className="mb-20 sm:mb-28">
          <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
            Wat blijft toegankelijk?
          </h2>
          <p className="mt-4 max-w-2xl text-slate-600 leading-relaxed">
            De basisfuncties die je nodig hebt om te factureren en overzicht te houden.
          </p>
          <ul className="mt-8 space-y-0 divide-y divide-slate-200 border-y border-slate-200">
            {BASICS.map((item) => (
              <li key={item} className="flex items-center gap-3 py-4 text-slate-800">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-deep-blue/5 text-deep-blue">
                  <Check className="h-4 w-4" strokeWidth={2.5} />
                </span>
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-slate-500">
            We beloven geen “alles forever gratis zonder uitzondering” — wel dat de kern van factureren toegankelijk
            blijft voor wie daarop rekent.
          </p>
        </motion.section>

        <motion.section {...fadeUp} className="mb-20 sm:mb-28">
          <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
            Transparantie staat voorop
          </h2>
          <p className="mt-4 max-w-2xl text-slate-600 leading-relaxed">
            Gratis software werkt alleen als je weet waar je aan toe bent.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {TRUST.map((item) => (
              <div key={item.title} className="border-l-2 border-warm-orange/80 pl-4">
                <h3 className="font-heading text-lg font-semibold text-deep-blue">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          {...fadeUp}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-deep-blue to-[#0d3a5c] px-6 py-12 text-center sm:px-12 sm:py-16"
        >
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-warm-orange/20 blur-3xl"
            aria-hidden
          />
          <h2 className="relative font-heading text-2xl font-bold text-white sm:text-3xl">
            Klaar om te factureren?
          </h2>
          <p className="relative mx-auto mt-3 max-w-md text-white/70">
            Ben jij ondernemer? Begin gratis. Help je ondernemers? Laten we samenwerken.
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-xl bg-warm-orange px-6 font-semibold text-white hover:bg-orange-600"
            >
              <Link href="/create-invoice">
                Maak gratis factuur <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="rounded-xl font-semibold text-white hover:bg-white/10 hover:text-white"
            >
              <a href="mailto:mail@factuurbaas.nl?subject=Samenwerking%20FactuurBaas">Samenwerken</a>
            </Button>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
