import React from 'react';
import { Button } from '@/components/ui/button';
import { FilePlus2, Search } from 'lucide-react';

const DashboardActions = ({ searchTerm, onSearchTermChange, onCreateInvoice, email }) => {
  return (
    <div className="mb-8 space-y-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Overzicht</p>
          <h1 className="mt-1 font-heading text-2xl font-bold tracking-tight text-deep-blue sm:text-3xl">
            Dashboard
          </h1>
          {email && <p className="mt-1 text-sm text-slate-500">{email}</p>}
        </div>
        <Button
          onClick={onCreateInvoice}
          className="rounded-xl bg-deep-blue px-5 font-semibold shadow-sm hover:bg-deep-blue/90"
        >
          <FilePlus2 className="mr-2 h-4 w-4" />
          Maak factuur
        </Button>
      </div>

      <div className="relative">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          type="search"
          placeholder="Zoek op klant, factuurnummer of naam…"
          className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm shadow-sm outline-none transition focus:border-deep-blue/40 focus:ring-2 focus:ring-deep-blue/10"
          value={searchTerm}
          onChange={(e) => onSearchTermChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default DashboardActions;
