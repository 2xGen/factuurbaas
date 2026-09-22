'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Check, Download, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { usePwaInstall } from '@/components/pwa/usePwaInstall';

/**
 * Prominent PWA install CTA for the gratis-factuur-app guide (and reusable elsewhere).
 */
export default function InstallAppCta({
  title = 'Download de gratis FactuurBaas app',
  text = 'Zet FactuurBaas op je beginscherm. Geen App Store nodig — open hem daarna als een gewone app.',
  className = '',
}) {
  const { user } = useAuth();
  const { canPrompt, isInstalled, isIos, promptInstall } = usePwaInstall(user?.id);
  const [busy, setBusy] = useState(false);
  const [showIosHint, setShowIosHint] = useState(false);

  const onInstall = async () => {
    if (canPrompt) {
      setBusy(true);
      try {
        await promptInstall();
      } finally {
        setBusy(false);
      }
      return;
    }
    if (isIos) {
      setShowIosHint(true);
      return;
    }
    // Desktop / unsupported: nudge toward login so Chrome can offer install after engagement
    setShowIosHint(false);
  };

  if (isInstalled) {
    return (
      <div
        className={`my-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 sm:p-6 not-prose ${className}`}
      >
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600">
            <Check className="h-5 w-5 text-white" aria-hidden />
          </div>
          <div>
            <p className="font-heading text-lg font-semibold text-deep-blue">
              FactuurBaas staat al op je apparaat
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Open de app vanaf je beginscherm, of ga direct naar je dashboard.
            </p>
            <Button
              asChild
              className="mt-4 rounded-lg bg-deep-blue px-6 py-3 text-base font-bold text-white hover:bg-deep-blue/90"
            >
              <Link href="/dashboard">Naar dashboard →</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      id="app-downloaden"
      className={`my-8 rounded-2xl border border-deep-blue/15 bg-deep-blue p-5 text-white sm:p-6 not-prose ${className}`}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="font-heading text-lg font-semibold sm:text-xl">{title}</p>
          <p className="mt-1.5 text-sm leading-relaxed text-white/85">{text}</p>
          {isIos && (
            <p className="mt-3 text-sm text-white/90">
              Op iPhone: open deze pagina in <strong>Safari</strong>, tik op{' '}
              <Share className="inline h-3.5 w-3.5 align-text-bottom" aria-hidden />{' '}
              <strong>Delen</strong> → <strong>Zet op beginscherm</strong>.
            </p>
          )}
          {showIosHint && !isIos && !canPrompt && (
            <p className="mt-3 text-sm text-white/90">
              Tip: open FactuurBaas in <strong>Chrome</strong> op je telefoon (of log eerst in).
              Daarna verschijnt de installatieknop automatisch wanneer je browser het toelaat.
            </p>
          )}
          {showIosHint && isIos && (
            <p className="mt-3 rounded-lg bg-white/10 px-3 py-2 text-sm text-white">
              Scroll omhoog naar de adresbalk → Delen → Zet op beginscherm.
            </p>
          )}
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:items-end">
          <Button
            type="button"
            disabled={busy}
            onClick={onInstall}
            className="h-auto rounded-lg bg-warm-orange px-6 py-3 text-base font-bold text-white hover:bg-orange-600 disabled:opacity-70"
          >
            <Download className="mr-2 h-5 w-5" aria-hidden />
            {busy ? 'Bezig…' : canPrompt ? 'Download de gratis app' : isIos ? 'Toon iPhone-stappen' : 'Download de gratis app'}
          </Button>
          {!user && canPrompt === false && !isIos && (
            <Link
              href="/login?next=/dashboard"
              className="text-center text-sm font-medium text-white/90 underline-offset-2 hover:underline sm:text-right"
            >
              Of log in om te installeren →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
