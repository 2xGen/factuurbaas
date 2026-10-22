'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { supabase } from '@/lib/customSupabaseClient';

const DISMISS_MS = 30 * 24 * 60 * 60 * 1000;
const LEAD_EMAIL_KEY = 'fb-boekhouder-lead-email';

function dismissKey(userId) {
  return `fb-boekhouder-offer-dismissed:${userId}`;
}

export function rememberBookkeeperLead(email) {
  try {
    localStorage.setItem(LEAD_EMAIL_KEY, String(email || '').trim().toLowerCase());
  } catch {
    /* private mode */
  }
}

export default function DashboardBookkeeperOffer({
  userId,
  email,
  invoiceCount = 0,
  vatApproaching = false,
  eligible,
  forceVat = false,
}) {
  const [visible, setVisible] = useState(false);
  const canShow = eligible ?? invoiceCount >= 1;

  useEffect(() => {
    if (!userId || !canShow) {
      setVisible(false);
      return undefined;
    }

    let cancelled = false;
    try {
      const until = localStorage.getItem(dismissKey(userId));
      if (until && new Date(until).getTime() > Date.now()) {
        setVisible(false);
        return undefined;
      }
      const remembered = (localStorage.getItem(LEAD_EMAIL_KEY) || '').toLowerCase();
      if (email && remembered === String(email).trim().toLowerCase()) {
        setVisible(false);
        return undefined;
      }
    } catch {
      /* ignore storage */
    }

    (async () => {
      try {
        const { data } = await supabase.auth.getSession();
        const token = data.session?.access_token;
        if (!token) {
          if (!cancelled) setVisible(true);
          return;
        }
        const response = await fetch('/api/leads/boekhouder', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const body = await response.json().catch(() => ({}));
        if (!cancelled) setVisible(!body.submitted);
      } catch {
        if (!cancelled) setVisible(true);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [userId, email, canShow]);

  if (!visible) return null;

  const title = forceVat || vatApproaching
    ? 'Hulp nodig bij je btw-aangifte?'
    : 'Liever je boekhouding uitbesteden?';
  const body = forceVat || vatApproaching
    ? 'Een boekhouder kan je aangifte en administratie nalopen. De aanvraag is gratis en vrijblijvend.'
    : 'Hulp bij je administratie, btw-aangifte en belastingzaken. De aanvraag is gratis en vrijblijvend.';

  function dismiss() {
    try {
      localStorage.setItem(dismissKey(userId), new Date(Date.now() + DISMISS_MS).toISOString());
    } catch {
      /* ignore storage */
    }
    setVisible(false);
  }

  return (
    <section className="mb-3 flex items-start gap-3 rounded-xl border border-slate-200/80 bg-white p-4">
      <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between sm:gap-6">
        <div>
          <p className="font-heading text-base font-semibold text-deep-blue">{title}</p>
          <p className="mt-1 text-sm leading-relaxed text-slate-500">{body}</p>
        </div>
        <Link
          href="/boekhouder-vinden"
          className="mt-3 inline-flex shrink-0 rounded-full bg-deep-blue px-3.5 py-2 text-xs font-semibold text-white hover:bg-deep-blue/90 sm:mt-0"
        >
          Vind een boekhouder
        </Link>
      </div>
      <button
        type="button"
        onClick={dismiss}
        className="mt-0.5 shrink-0 rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
        aria-label="Verberg dit voorstel 30 dagen"
      >
        <X className="h-4 w-4" />
      </button>
    </section>
  );
}
