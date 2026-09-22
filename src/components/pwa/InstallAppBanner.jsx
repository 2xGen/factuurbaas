'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Download, Share, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { useCookieConsent } from '@/contexts/CookieConsentContext';
import { usePwaInstall } from '@/components/pwa/usePwaInstall';

const STORAGE_KEY = 'fb_pwa_install_dismissed_at';
const DISMISS_DAYS = 30;
const SHOW_DELAY_MS = 2500;

const SKIP_PATHS = [
  '/login',
  '/register',
  '/auth/callback',
  '/admin-dashboard',
  '/admin-login',
  '/offline',
];

function wasDismissedRecently() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const at = Number(raw);
    if (!Number.isFinite(at)) return false;
    return Date.now() - at < DISMISS_DAYS * 24 * 60 * 60 * 1000;
  } catch {
    return false;
  }
}

/**
 * Soft bottom banner to install FactuurBaas as an app.
 * Shows after login (not a blocking modal). Chrome uses beforeinstallprompt;
 * iOS shows Share → Zet op beginscherm tips.
 */
export default function InstallAppBanner() {
  const { user, loading: authLoading } = useAuth();
  const { showBanner: showCookieBanner } = useCookieConsent();
  const pathname = usePathname();
  const { canPrompt, isInstalled, isIos, promptInstall } = usePwaInstall(user?.id);
  const [visible, setVisible] = useState(false);

  const shouldSkipPath = SKIP_PATHS.some(
    (p) => pathname === p || pathname?.startsWith(`${p}/`)
  );

  const dismiss = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {
      /* ignore */
    }
    setVisible(false);
  }, []);

  useEffect(() => {
    if (isInstalled) {
      setVisible(false);
      return undefined;
    }
    if (authLoading || !user || shouldSkipPath || showCookieBanner) {
      setVisible(false);
      return undefined;
    }
    if (wasDismissedRecently()) {
      setVisible(false);
      return undefined;
    }

    const timer = setTimeout(() => {
      if (isIos || canPrompt) setVisible(true);
    }, SHOW_DELAY_MS);

    return () => clearTimeout(timer);
  }, [authLoading, user, shouldSkipPath, showCookieBanner, canPrompt, isIos, isInstalled]);

  const onInstall = async () => {
    await promptInstall();
    dismiss();
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="App installeren"
      className="fixed bottom-0 left-0 right-0 z-[90] border-t border-slate-200 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
    >
      <div className="container mx-auto flex items-start gap-3 px-4 py-3.5 sm:items-center sm:px-6">
        <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-deep-blue sm:mt-0">
          <Download className="h-5 w-5 text-warm-orange" aria-hidden />
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-heading text-sm font-bold text-deep-blue sm:text-base">
            Installeer FactuurBaas
          </p>
          {isIos ? (
            <p className="mt-0.5 text-xs text-slate-600 sm:text-sm">
              Tik op <Share className="inline h-3.5 w-3.5 align-text-bottom" aria-hidden /> Delen
              en kies <span className="font-medium">Zet op beginscherm</span>.
            </p>
          ) : (
            <p className="mt-0.5 text-xs text-slate-600 sm:text-sm">
              Sneller openen vanaf je beginscherm — voelt als een app, zonder App Store.
            </p>
          )}
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          {!isIos && canPrompt && (
            <Button
              size="sm"
              onClick={onInstall}
              className="bg-deep-blue text-white hover:bg-deep-blue/90"
            >
              Installeer
            </Button>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={dismiss}
            className="text-slate-500 hover:text-slate-800"
            aria-label="Later"
          >
            {isIos || !canPrompt ? 'Sluiten' : 'Later'}
          </Button>
          <button
            type="button"
            onClick={dismiss}
            className="rounded-md p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 sm:hidden"
            aria-label="Sluiten"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
