'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, FilePlus2, MapPin, User, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LandingSection, SectionHeader } from '@/components/landing/LandingSection';

const DEMO_CLIENTS = [
  {
    name: 'Studio Noord',
    contact: 'Emma de Vries',
    email: 'emma@studionoord.nl',
    address: 'Keizersgracht 12 · 1015 CN Amsterdam',
  },
  {
    name: 'Bakkerij De Wind',
    contact: 'Jan Bakker',
    email: 'info@dewind.nl',
    address: 'Dorpsstraat 8 · 3511 AB Utrecht',
  },
  {
    name: 'TechFix Utrecht',
    contact: 'Sara Mol',
    email: 'sara@techfix.nl',
    address: 'Vredenburg 40 · 3511 BD Utrecht',
  },
];

const STEPS = [
  {
    icon: User,
    title: 'Sla klanten één keer op',
    text: 'Bedrijf, contact, adres, KvK en btw — klaar voor hergebruik.',
  },
  {
    icon: Zap,
    title: 'Kies bij factureren',
    text: 'Vul de ontvanger in één klik in. Geen copy-paste meer.',
  },
  {
    icon: FilePlus2,
    title: 'Factureer sneller',
    text: 'Vanuit Klanten direct een nieuwe factuur starten.',
  },
];

export default function KlantenHomeSection() {
  return (
    <LandingSection bg="white" className="overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45 }}
        >
          <SectionHeader
            align="left"
            eyebrow="Klanten"
            title="Factureer sneller met opgeslagen klanten"
            description="Bewaar klantgegevens in je account en vul ze met één klik in op elke nieuwe factuur. Straat, postcode, plaats en land — netjes gestructureerd."
            className="mb-8 sm:mb-10"
          />

          <div className="space-y-5">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * i, duration: 0.35 }}
                  className="flex gap-3"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-deep-blue/5 text-deep-blue">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="font-heading text-base font-semibold text-deep-blue">{step.title}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-slate-600">{step.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 rounded-xl px-6 font-semibold">
              <Link href="/register">
                Maak gratis account <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-xl border-slate-300 px-6 font-semibold text-deep-blue"
            >
              <Link href="/login?next=/klanten">Naar klanten</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="relative"
        >
          <div
            className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-deep-blue/10 via-transparent to-warm-orange/15 blur-2xl sm:-inset-6"
            aria-hidden
          />

          <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-[#f4f6f9] shadow-2xl shadow-deep-blue/10 sm:rounded-3xl">
            <div className="flex items-center gap-2 border-b border-slate-200/80 bg-white px-4 py-3 sm:px-5">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <div className="ml-3 flex-1 truncate rounded-md bg-slate-100 px-3 py-1 text-center text-[11px] text-slate-500 sm:text-xs">
                factuurbaas.nl/klanten
              </div>
            </div>

            <div className="p-3 sm:p-5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="font-heading text-lg font-bold text-deep-blue">Klanten</p>
                  <p className="text-xs text-slate-500">3 opgeslagen · klaar om te factureren</p>
                </div>
                <span className="rounded-full bg-deep-blue px-3 py-1 text-[11px] font-semibold text-white">
                  + Nieuwe klant
                </span>
              </div>

              <div className="mb-3 overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-sm">
                <div className="border-b border-slate-100 bg-slate-50/80 px-3 py-2 text-[10px] font-semibold uppercase tracking-wide text-slate-400 sm:px-4">
                  Opgeslagen klant kiezen
                </div>
                <div className="flex items-center gap-2 px-3 py-2.5 sm:px-4">
                  <User className="h-4 w-4 text-warm-orange" />
                  <span className="text-sm font-medium text-deep-blue">Studio Noord</span>
                  <span className="ml-auto rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                    Ingevuld
                  </span>
                </div>
              </div>

              <ul className="space-y-2">
                {DEMO_CLIENTS.map((client, i) => (
                  <li
                    key={client.name}
                    className={`rounded-xl border bg-white px-3 py-3 shadow-sm sm:px-4 ${
                      i === 0 ? 'border-warm-orange/40 ring-1 ring-warm-orange/20' : 'border-slate-200/80'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="font-heading text-sm font-semibold text-deep-blue">{client.name}</p>
                        <p className="mt-0.5 text-xs text-slate-500">
                          {client.contact} · {client.email}
                        </p>
                        <p className="mt-1.5 flex items-start gap-1.5 text-[11px] leading-snug text-slate-500">
                          <MapPin className="mt-0.5 h-3 w-3 shrink-0 text-slate-400" />
                          {client.address}
                        </p>
                      </div>
                      <span className="shrink-0 rounded-lg bg-deep-blue/5 px-2 py-1 text-[10px] font-semibold text-deep-blue">
                        Factureer
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </LandingSection>
  );
}
