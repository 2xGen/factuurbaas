'use client';

import React from 'react';
import Link from 'next/link';

/**
 * Required acceptance of terms, privacy policy and DPA at login / account signup.
 * Timestamp is stored on profiles.privacy_accepted_at after OAuth callback.
 */
export default function PrivacyConsentCheckbox({
  checked,
  onCheckedChange,
  id = 'privacy-consent',
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
        Ik ga akkoord met de{' '}
        <Link
          href="/algemene-voorwaarden"
          target="_blank"
          className="font-medium text-warm-orange hover:underline"
        >
          Algemene voorwaarden
        </Link>
        , het{' '}
        <Link href="/privacybeleid" target="_blank" className="font-medium text-warm-orange hover:underline">
          Privacybeleid
        </Link>{' '}
        en de{' '}
        <Link href="/verwerkersovereenkomst" target="_blank" className="font-medium text-warm-orange hover:underline">
          Verwerkersovereenkomst
        </Link>
        . Facturen worden alleen opgeslagen als ik dat kies.
      </span>
    </label>
  );
}
