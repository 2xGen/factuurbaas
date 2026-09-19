import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calculator, Percent, Receipt, Wallet } from 'lucide-react';

const DASHBOARD_TOOLS = [
  {
    title: 'Offerte maken',
    description: 'Professionele offerte maken en downloaden.',
    href: '/tools/offerte-maker/maken',
    icon: Receipt,
  },
  {
    title: 'BTW calculator',
    description: 'Bereken snel bedragen incl. of excl. btw.',
    href: '/tools/btw-calculator/berekenen',
    icon: Calculator,
  },
  {
    title: 'Uurtarief berekenen',
    description: 'Ontdek welk uurtarief bij je doelen past.',
    href: '/tools/uurtarief-calculator/maken',
    icon: Wallet,
  },
  {
    title: 'Marge calculator',
    description: 'Bereken je marge en verkoopprijs.',
    href: '/tools/marge-calculator/berekenen',
    icon: Percent,
  },
];

export default function DashboardTools() {
  return (
    <section className="mb-8">
      <div className="mb-4 flex items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Tools voor jou
          </p>
          <h2 className="mt-0.5 font-heading text-lg font-semibold text-deep-blue sm:text-xl">
            Handige tools voor je bedrijf
          </h2>
        </div>
        <Link
          href="/tools"
          className="hidden text-sm font-medium text-warm-orange hover:underline sm:inline-flex sm:items-center sm:gap-1"
        >
          Bekijk alle tools <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
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
                <span className="block font-semibold text-deep-blue">{tool.title}</span>
                <span className="mt-0.5 block text-xs leading-relaxed text-slate-500">
                  {tool.description}
                </span>
              </span>
            </Link>
          );
        })}
      </div>

      <div className="mt-3 sm:hidden">
        <Link
          href="/tools"
          className="inline-flex items-center gap-1 text-sm font-medium text-warm-orange hover:underline"
        >
          Bekijk alle tools <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  );
}
