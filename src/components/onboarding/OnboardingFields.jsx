'use client';

import React from 'react';
import {
  BILLING_STYLE_OPTIONS,
  INDUSTRY_OPTIONS,
  PARTNERSHIP_OPTIONS,
} from '@/lib/onboardingProfile';

export default function OnboardingFields({
  form,
  onChange,
  disabled = false,
  idPrefix = 'onboarding',
}) {
  const set = (name, value) => onChange({ ...form, [name]: value });

  return (
    <div className="space-y-4">
      <div>
        <label
          htmlFor={`${idPrefix}-industry`}
          className="mb-1.5 block text-sm font-medium text-slate-700"
        >
          In welke branche werk je?
        </label>
        <select
          id={`${idPrefix}-industry`}
          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-deep-blue/40 focus:ring-2 focus:ring-deep-blue/10"
          value={form.industry}
          onChange={(e) => set('industry', e.target.value)}
          disabled={disabled}
        >
          <option value="">Kies een branche…</option>
          {INDUSTRY_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      {form.industry === 'anders' && (
        <div>
          <label
            htmlFor={`${idPrefix}-industry-other`}
            className="mb-1.5 block text-sm font-medium text-slate-700"
          >
            Welke branche dan?
          </label>
          <input
            id={`${idPrefix}-industry-other`}
            type="text"
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-deep-blue/40 focus:ring-2 focus:ring-deep-blue/10"
            value={form.industryOther}
            onChange={(e) => set('industryOther', e.target.value)}
            placeholder="Bijv. interieurstyling"
            disabled={disabled}
          />
        </div>
      )}

      <div>
        <label
          htmlFor={`${idPrefix}-billing`}
          className="mb-1.5 block text-sm font-medium text-slate-700"
        >
          Hoe factureer je vooral?
        </label>
        <select
          id={`${idPrefix}-billing`}
          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-deep-blue/40 focus:ring-2 focus:ring-deep-blue/10"
          value={form.billingStyle}
          onChange={(e) => set('billingStyle', e.target.value)}
          disabled={disabled}
        >
          <option value="">Kies…</option>
          {BILLING_STYLE_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor={`${idPrefix}-partnership`}
          className="mb-1.5 block text-sm font-medium text-slate-700"
        >
          Mogen we je af en toe benaderen over je ervaring met FactuurBaas?
        </label>
        <select
          id={`${idPrefix}-partnership`}
          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-deep-blue/40 focus:ring-2 focus:ring-deep-blue/10"
          value={form.partnershipOpen}
          onChange={(e) => set('partnershipOpen', e.target.value)}
          disabled={disabled}
        >
          <option value="">Kies…</option>
          {PARTNERSHIP_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <p className="mt-1.5 text-xs text-slate-500">
          Bijvoorbeeld een korte vraag over wat beter kan, of ideeën om FactuurBaas te laten
          groeien. Geen spam — alleen als het relevant is.
        </p>
      </div>
    </div>
  );
}
