'use client';

import React from 'react';

/**
 * Optional marketing opt-in. Must stay unchecked by default (AVG).
 * Stored on profiles.newsletter_opt_in after OAuth callback / profile save.
 */
export default function NewsletterOptInCheckbox({
  checked,
  onCheckedChange,
  id = 'newsletter-opt-in',
  disabled = false,
}) {
  return (
    <label htmlFor={id} className="flex cursor-pointer items-start gap-3 text-sm text-slate-600">
      <input
        id={id}
        type="checkbox"
        className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300 text-deep-blue focus:ring-deep-blue"
        checked={checked}
        onChange={(e) => onCheckedChange(e.target.checked)}
        disabled={disabled}
      />
      <span className="leading-relaxed">
        Ja, ik wil tips en nieuws van FactuurBaas ontvangen{' '}
        <span className="text-slate-500">(optioneel — geen spam, altijd uitschrijven)</span>.
      </span>
    </label>
  );
}
