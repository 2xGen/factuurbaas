import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Calculator,
  Clock,
  FileText,
  Hash,
  Percent,
  Receipt,
  Scale,
  Timer,
  TrendingUp,
  Users,
} from 'lucide-react';

const DASHBOARD_TOOLS = [
  {
    title: 'Factuur maken',
    description: 'Nieuwe factuur opstellen en opslaan.',
    href: '/create-invoice',
    icon: FileText,
  },
  {
    title: 'Klanten',
    description: 'Klanten opslaan voor sneller factureren.',
    href: '/klanten',
    icon: Users,
  },
  {
    title: 'Offerte maker',
    description: 'Professionele offerte als PDF.',
    href: '/tools/offerte-maker/maken',
    icon: Receipt,
  },
  {
    title: 'BTW calculator',
    description: 'Incl. / excl. btw berekenen.',
    href: '/tools/btw-calculator/berekenen',
    icon: Calculator,
  },
  {
    title: 'Uurtarief',
    description: 'Bepaal je minimale uurtarief.',
    href: '/tools/uurtarief-calculator/maken',
    icon: Clock,
  },
  {
    title: 'Uurtarief → inkomen',
    description: 'Omzet en winst uit je tarief.',
    href: '/tools/uurtarief-naar-inkomen/berekenen',
    icon: TrendingUp,
  },
  {
    title: 'Factuurnummer',
    description: 'Genereer een net factuurnummer.',
    href: '/tools/factuurnummer-generator/maken',
    icon: Hash,
  },
  {
    title: 'Marge calculator',
    description: 'Winstmarge op inkoop/verkoop.',
    href: '/tools/marge-calculator/berekenen',
    icon: Percent,
  },
  {
    title: 'Betaaltermijn',
    description: 'Vervaldatum berekenen.',
    href: '/tools/betaaltermijn-calculator/berekenen',
    icon: Timer,
  },
  {
    title: 'KOR check',
    description: 'Past de KOR bij jouw omzet?',
    href: '/tools/kor-calculator/berekenen',
    icon: Scale,
  },
];

export default function DashboardTools() {
  return (
    <section className="mb-10">
      <div className="mb-4 flex items-end justify-between gap-3">
        <div>
          <h2 className="font-heading text-lg font-semibold text-deep-blue sm:text-xl">Tools</h2>
          <p className="mt-1 text-sm text-slate-500">Snel aan de slag — direct openen zonder omwegen.</p>
        </div>
        <Link
          href="/tools"
          className="hidden text-sm font-medium text-warm-orange hover:underline sm:inline-flex sm:items-center sm:gap-1"
        >
          Alle tools <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {DASHBOARD_TOOLS.map((tool) => {
          const Icon = tool.icon;
          return (
            <Link
              key={tool.href}
              href={tool.href}
              className="group flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-deep-blue/20 hover:shadow-md"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-deep-blue transition-colors group-hover:bg-deep-blue group-hover:text-white">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <span className="min-w-0">
                <span className="block font-semibold text-deep-blue group-hover:text-deep-blue">
                  {tool.title}
                </span>
                <span className="mt-0.5 block text-xs leading-relaxed text-slate-500">
                  {tool.description}
                </span>
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
