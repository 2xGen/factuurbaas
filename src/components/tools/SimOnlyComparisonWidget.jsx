'use client';

import Script from 'next/script';
import { useCookieConsent } from '@/contexts/CookieConsentContext';
import { ArrowIcon, btn } from '@/components/site/editorial';

const widgetConfig = {
  mediaId: 430588,
  locale: 'nl-NL',
  language: 'nl',
  buttonText: 'Bekijken',
  limit: 25,
  showFilters: true,
};

export default function SimOnlyComparisonWidget() {
  const { consent, openCookiePreferences } = useCookieConsent();
  const allowed = Boolean(consent?.marketing);

  if (!allowed) {
    return (
      <div className="rounded-2xl border border-ink/[0.08] bg-white px-6 py-10 text-center shadow-paper sm:px-10 sm:py-14">
        <p className="font-display text-2xl leading-snug text-ink sm:text-[1.75rem]">
          Vergelijker tonen
        </p>
        <p className="mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-ink-500">
          De interactieve Sim Only-vergelijker wordt aangeboden door Daisycon en gebruikt
          marketingcookies. Accepteer marketingcookies om bundels, looptijden en prijzen te
          vergelijken.
        </p>
        <button type="button" onClick={openCookiePreferences} className={`${btn.primary} mt-7`}>
          Cookievoorkeuren
          <ArrowIcon />
        </button>
      </div>
    );
  }

  return (
    <>
      <Script src="https://daisycon.tools/sim-only/app.js" strategy="afterInteractive" />
      <div
        className="dc-tool dc-sim-only-tool min-h-[28rem] overflow-x-auto"
        data-config={JSON.stringify(widgetConfig)}
      />
    </>
  );
}
