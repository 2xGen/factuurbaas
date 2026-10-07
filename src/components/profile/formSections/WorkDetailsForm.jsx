'use client';

import React from 'react';
import { Label } from '@/components/ui/label';

const fieldClass =
  'w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-deep-blue/40 focus:ring-2 focus:ring-deep-blue/10';

export default function WorkDetailsForm({ form, onChange, disabled }) {
  const set = (name, value) => onChange({ ...form, [name]: value });

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="space-y-1.5">
        <Label htmlFor="work-rate">Uurtarief (excl. btw)</Label>
        <input
          id="work-rate"
          className={fieldClass}
          inputMode="decimal"
          placeholder="52"
          value={form.hourlyRate}
          onChange={(e) => set('hourlyRate', e.target.value)}
          disabled={disabled}
        />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="work-hours">Uren per week</Label>
        <input
          id="work-hours"
          className={fieldClass}
          inputMode="decimal"
          placeholder="32"
          value={form.hoursPerWeek}
          onChange={(e) => set('hoursPerWeek', e.target.value)}
          disabled={disabled}
        />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="work-weeks">Werkweken per jaar</Label>
        <input
          id="work-weeks"
          className={fieldClass}
          inputMode="decimal"
          placeholder="46"
          value={form.weeksPerYear}
          onChange={(e) => set('weeksPerYear', e.target.value)}
          disabled={disabled}
        />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="work-income">Gewenst inkomen per maand</Label>
        <input
          id="work-income"
          className={fieldClass}
          inputMode="decimal"
          placeholder="3000"
          value={form.desiredNetMonthly}
          onChange={(e) => set('desiredNetMonthly', e.target.value)}
          disabled={disabled}
        />
      </div>
      <div className="space-y-1.5 sm:col-span-2">
        <Label htmlFor="work-term">Standaard betaaltermijn (dagen)</Label>
        <input
          id="work-term"
          className={fieldClass}
          inputMode="numeric"
          placeholder="14"
          value={form.defaultPaymentTermDays}
          onChange={(e) => set('defaultPaymentTermDays', e.target.value)}
          disabled={disabled}
        />
        <p className="text-xs text-slate-400">Nieuwe facturen gebruiken deze termijn automatisch.</p>
      </div>
    </div>
  );
}
