'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { Reveal, Stagger, staggerItem } from '@/components/landing/page/motion';
import {
  ArrowIcon,
  ClosingCta,
  DarkPanel,
  DisplayHeading,
  PageHeader,
  btn,
} from '@/components/site/editorial';

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
        <Link
          href="/veiligheid"
          className="text-ink underline decoration-ink/20 underline-offset-[6px] transition-colors hover:decoration-ember"
        >
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

const numeral = (i) => String(i + 1).padStart(2, '0');

function EditorialRow({ title, children, className = '' }) {
  return (
    <div
      className={`grid gap-6 border-t border-ink/15 py-14 sm:py-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24 lg:py-20 ${className}`}
    >
      <Reveal className="lg:sticky lg:top-32 lg:self-start">
        <DisplayHeading size="md" className="max-w-[16ch]">
          {title}
        </DisplayHeading>
      </Reveal>
      <Reveal delay={0.08} className="text-base leading-relaxed text-ink-500 sm:text-[1.05rem] [&>p+p]:mt-4 [&>p]:max-w-2xl">
        {children}
      </Reveal>
    </div>
  );
}

export default function WhyFreeContent() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <PageHeader
        eyebrow="FactuurBaas"
        title={
          <>
            Waarom is FactuurBaas <em>gratis</em>?
          </>
        }
        lead={
          <p>
            Maak professionele facturen zonder maandelijkse kosten. Ondernemers verdienen eenvoudige tools —
            zonder meteen weer een rekening erbij.
          </p>
        }
      >
        <Link href="/create-invoice" className={btn.primary}>
          Maak gratis factuur
          <ArrowIcon />
        </Link>
      </PageHeader>

      <div className="container mx-auto px-4 sm:px-6">
        <EditorialRow title="Ondernemen is al duur genoeg" className="border-t-0">
          <p>
            Starten betekent vaak meteen kosten. Wij vinden dat iedere ondernemer een eenvoudige manier moet hebben
            om facturen te maken — zonder meteen weer een maandelijkse rekening.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {COSTS.map((item) => (
              <li
                key={item}
                className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm text-ink-700 shadow-paper"
              >
                {item}
              </li>
            ))}
          </ul>
        </EditorialRow>

        <EditorialRow title="Waarom geen abonnement?">
          <p>
            Veel ondernemers starten klein. Een abonnement van €10 of €20 per maand voelt misschien niet groot, maar
            voor iemand die net begint zijn alle vaste kosten belangrijk. Daarom willen wij eerst waarde bieden —
            factureren zonder abonnement te moeten nemen.
          </p>
        </EditorialRow>
      </div>

      <section className="grain relative isolate border-y border-ink/[0.06] bg-paper-50">
        <div className="bg-ledger mask-fade-y pointer-events-none absolute inset-0 -z-10 opacity-70" aria-hidden />
        <div className="container mx-auto px-4 py-20 sm:px-6 sm:py-24 lg:py-28">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ember">Missie</p>
            <p className="mt-6 max-w-[24ch] font-display text-[2rem] font-normal leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl lg:text-[3.4rem]">
              Nederlandse ondernemers helpen om <em className="text-ink-700">eenvoudiger</em> hun administratie te
              regelen.
            </p>
          </Reveal>
          <Stagger className="mt-12 grid border-t border-ink/15 sm:grid-cols-3">
            {['Geen ingewikkelde systemen', 'Geen lange contracten', 'Geen verplicht abonnement'].map(
              (line, i) => (
                <motion.p
                  key={line}
                  variants={staggerItem}
                  className="flex items-baseline gap-4 border-b border-ink/15 py-5 text-base text-ink-700 sm:border-b-0 sm:py-7 sm:pr-6 sm:[&:not(:first-child)]:border-l sm:[&:not(:first-child)]:pl-6"
                >
                  <span className="font-display text-xl italic leading-none text-ember" aria-hidden>
                    {numeral(i)}
                  </span>
                  {line}.
                </motion.p>
              )
            )}
          </Stagger>
        </div>
      </section>

      <DarkPanel className="py-6 sm:py-10">
        <Reveal className="mx-auto max-w-3xl">
          <Shield className="h-7 w-7 text-ember-100" strokeWidth={1.5} aria-hidden />
          <h2 className="mt-7 font-display text-[2.1rem] font-normal leading-[1.06] tracking-[-0.03em] sm:text-5xl">
            Jij bent onze gebruiker, <em className="text-ember-100">niet ons product.</em>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
            Wij verdienen niet door jouw facturen of bedrijfsgegevens te verkopen. Jouw administratie blijft van
            jou.
          </p>
        </Reveal>
      </DarkPanel>

      <div className="container mx-auto px-4 pb-10 sm:px-6 sm:pb-16">
        <EditorialRow title="Hoe blijft FactuurBaas beschikbaar?" className="border-t-0">
          <p>
            Een product onderhouden kost tijd en geld. Wanneer we samenwerken met andere bedrijven, kiezen we alleen
            partners die ondernemers echt kunnen helpen — denk aan banken, verzekeringen of betaaloplossingen.
          </p>
          <p>
            Die samenwerkingen zijn altijd optioneel. Jij besluit zelf of iets past bij jouw bedrijf. Zo blijft de
            kern van FactuurBaas toegankelijk.
          </p>
        </EditorialRow>

        <EditorialRow title="Wat blijft toegankelijk?">
          <p>De basisfuncties die je nodig hebt om te factureren en overzicht te houden.</p>
          <ul className="mt-8 border-t border-ink/15">
            {BASICS.map((item, i) => (
              <li
                key={item}
                className="grid grid-cols-[2.75rem_1fr] items-baseline gap-2 border-b border-ink/15 py-4 sm:grid-cols-[3.5rem_1fr] sm:py-5"
              >
                <span className="font-display text-lg italic leading-none text-ember" aria-hidden>
                  {numeral(i)}
                </span>
                <span className="text-ink">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-ink-400">
            We beloven geen “alles forever gratis zonder uitzondering” — wel dat de kern van factureren toegankelijk
            blijft voor wie daarop rekent.
          </p>
        </EditorialRow>

        <EditorialRow title="Transparantie staat voorop">
          <p>Gratis software werkt alleen als je weet waar je aan toe bent.</p>
          <div className="mt-8 grid gap-x-10 border-t border-ink/15 sm:grid-cols-2">
            {TRUST.map((item) => (
              <div key={item.title} className="border-b border-ink/15 py-6">
                <h3 className="font-display text-[1.35rem] font-normal leading-tight tracking-[-0.02em] text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{item.text}</p>
              </div>
            ))}
          </div>
        </EditorialRow>
      </div>

      <ClosingCta
        title={
          <>
            Klaar om te <em>factureren</em>?
          </>
        }
        text="Ben jij ondernemer? Begin gratis. Help je ondernemers? Laten we samenwerken."
        primary={{ href: '/create-invoice', label: 'Maak gratis factuur' }}
        secondary={{ href: 'mailto:mail@factuurbaas.nl?subject=Samenwerking%20FactuurBaas', label: 'Samenwerken' }}
      />
    </div>
  );
}
