'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Calendar,
  Calculator,
  Clock,
  FileText,
  Percent,
  Receipt,
  Wallet,
} from 'lucide-react';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { supabase } from '@/lib/customSupabaseClient';
import { fetchBusinessSettings } from '@/lib/businessSettings';
import { formatEuro } from '@/lib/dashboardCockpit';
import { formatHourlyRate } from '@/lib/uurtariefCalculator';

const PRODUCT_TOOLS = [
  {
    title: 'Uurtarief',
    href: '/tools/uurtarief-calculator/maken',
    description: 'Bereken je tarief en bewaar het voor facturen en uren.',
    icon: Clock,
  },
  {
    title: 'Uurtarief → inkomen',
    href: '/tools/uurtarief-naar-inkomen/berekenen',
    description: 'Zie wat je tarief per jaar oplevert. Zet het als jaardoel.',
    icon: Wallet,
  },
  {
    title: 'BTW',
    href: '/tools/btw-calculator/berekenen',
    description: 'Reken btw uit en gebruik het in een factuur, inkomst of uitgave.',
    icon: Percent,
  },
  {
    title: 'KOR',
    href: '/tools/kor-calculator/berekenen',
    description: 'Check de KOR-grens met je echte omzet.',
    icon: Calculator,
  },
  {
    title: 'Marge',
    href: '/tools/marge-calculator/berekenen',
    description: 'Winst op een verkoop. Voeg hem daarna toe als inkomst.',
    icon: Receipt,
  },
  {
    title: 'Betaaltermijn',
    href: '/tools/betaaltermijn-calculator/berekenen',
    description: 'Stel je standaardtermijn in. Nieuwe facturen gebruiken hem.',
    icon: Calendar,
  },
];

export default function RekenenPage() {
  const { user } = useAuth();
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    if (!user?.id) return;
    fetchBusinessSettings(supabase, user.id)
      .then(setSettings)
      .catch(() => setSettings(null));
  }, [user?.id]);

  const facts = [];
  if (settings?.hourlyRate) facts.push(`${formatHourlyRate(settings.hourlyRate)} /uur`);
  if (settings?.hoursPerWeek) facts.push(`${settings.hoursPerWeek} uur/week`);
  if (settings?.defaultPaymentTermDays) {
    facts.push(`${settings.defaultPaymentTermDays} dagen betaaltermijn`);
  }
  if (settings?.yearlyGoal) facts.push(`Jaardoel ${formatEuro(settings.yearlyGoal)}`);

  return (
    <div className="bg-[#f6f4f1]">
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
            Hulpmiddelen
          </p>
          <h1 className="mt-1 font-heading text-2xl font-bold tracking-tight text-deep-blue">
            Tools
          </h1>
          <p className="mt-1 max-w-xl text-sm text-slate-500">
            Reken iets uit, bewaar het, en FactuurBaas gebruikt het daarna op facturen, uren en je
            overzicht.
          </p>

          {facts.length > 0 && (
            <div className="mt-6 rounded-2xl border border-slate-200/80 bg-white px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Jouw cijfers
              </p>
              <p className="mt-1.5 text-sm text-deep-blue">{facts.join(' · ')}</p>
              <Link href="/profile" className="mt-2 inline-block text-sm font-medium text-deep-blue underline-offset-4 hover:underline">
                Aanpassen in profiel
              </Link>
            </div>
          )}

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {PRODUCT_TOOLS.map(({ title, href, description, icon: Icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="flex h-full gap-3 rounded-2xl border border-slate-200/80 bg-white p-4 transition hover:border-deep-blue/25"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-warm-orange">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-medium text-deep-blue">{title}</p>
                    <p className="mt-0.5 text-sm text-slate-500">{description}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Factureren
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Op een nieuwe factuur staan je bedrijfsgegevens, logo, IBAN en het volgende
              factuurnummer al klaar — vanuit wat jij in je account hebt gezet.
            </p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold text-deep-blue">
              <Link href="/create-invoice" className="inline-flex items-center gap-1.5 hover:underline">
                <FileText className="h-3.5 w-3.5" /> Nieuwe factuur
              </Link>
              <Link href="/offertes" className="hover:underline">
                Offertes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
