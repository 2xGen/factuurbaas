import React from 'react';
import Link from 'next/link';
import { Clock, FilePlus2, FileText, Plus, UserPlus } from 'lucide-react';

const ACTIONS = [
  { href: '/create-invoice', label: 'Factuur', icon: FilePlus2 },
  { href: '/tools/offerte-maker/maken', label: 'Offerte', icon: FileText },
  { href: '/uitgaven', label: 'Uitgave', icon: Plus },
  { href: '/uren', label: 'Uren', icon: Clock },
  { href: '/klanten', label: 'Klant', icon: UserPlus },
];

/** Compact quick-add — no duplicate nav counts. */
export default function DashboardAdmin() {
  return (
    <section className="mb-8">
      <div className="mb-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Snel toevoegen</p>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5 sm:gap-3">
        {ACTIONS.map((action) => {
          const Icon = action.icon;
          return (
            <Link
              key={action.href}
              href={action.href}
              className="flex items-center gap-2.5 rounded-2xl border border-slate-200/80 bg-white px-4 py-3.5 text-sm font-semibold text-deep-blue shadow-sm transition hover:-translate-y-0.5 hover:border-deep-blue/20 hover:shadow-md"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 text-deep-blue">
                <Icon className="h-4 w-4" strokeWidth={1.75} />
              </span>
              {action.label}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
