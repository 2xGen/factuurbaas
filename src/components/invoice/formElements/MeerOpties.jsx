'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function MeerOpties({ children, defaultOpen = false, label = 'Meer opties' }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="pt-2">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors"
      >
        {label}
        <ChevronDown className={cn('h-4 w-4 text-slate-500 transition-transform', open && 'rotate-180')} />
      </button>
      {open && <div className="mt-4 space-y-4">{children}</div>}
    </div>
  );
}
