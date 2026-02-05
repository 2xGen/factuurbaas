'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCookieConsent } from '@/contexts/CookieConsentContext';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from '@/components/ui/dialog';

export default function CookieBanner() {
  const {
    consent,
    showBanner,
    showPreferences,
    setShowPreferences,
    setConsent,
    acceptAll,
    rejectNonEssential,
  } = useCookieConsent();

  const [prefs, setPrefs] = useState({
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    if (consent) {
      setPrefs({ analytics: consent.analytics, marketing: consent.marketing });
    } else {
      setPrefs({ analytics: false, marketing: false });
    }
  }, [consent, showPreferences]);

  const savePreferences = () => {
    setConsent({
      analytics: prefs.analytics,
      marketing: prefs.marketing,
    });
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Bottom bar: only when we're not in "preferences only" mode (e.g. reopened from footer with existing consent we only show dialog) */}
      {(!showPreferences || consent === null) && (
        <div
          role="dialog"
          aria-label="Cookievoorkeuren"
          className="fixed bottom-0 left-0 right-0 z-[100] border-t border-slate-200 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
        >
          <div className="container mx-auto px-4 py-4 sm:px-6 sm:py-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-700">
                Wij gebruiken cookies om de website te laten werken, het gebruik te analyseren en
                waar relevant te personaliseren. U kiest zelf welke cookies we mogen plaatsen.{' '}
                <Link
                  href="/privacybeleid"
                  className="font-medium text-deep-blue underline hover:text-warm-orange"
                >
                  Meer in ons privacybeleid
                </Link>
              </p>
              <div className="flex flex-wrap items-center gap-2 sm:shrink-0">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowPreferences(true)}
                  className="border-slate-300 text-slate-700 hover:bg-slate-100"
                >
                  Voorkeuren
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={rejectNonEssential}
                  className="border-slate-300 text-slate-700 hover:bg-slate-100"
                >
                  Alleen noodzakelijk
                </Button>
                <Button
                  size="sm"
                  onClick={acceptAll}
                  className="bg-deep-blue text-white hover:bg-deep-blue/90"
                >
                  Accepteer alles
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Preferences dialog */}
      <Dialog open={showPreferences} onOpenChange={setShowPreferences}>
        <DialogContent
          className="max-w-lg sm:max-w-xl"
          aria-describedby="cookie-preferences-description"
        >
          <DialogHeader>
            <DialogTitle className="font-heading text-deep-blue">
              Cookievoorkeuren
            </DialogTitle>
            <DialogDescription id="cookie-preferences-description">
              Kies welke cookies wij mogen gebruiken. Noodzakelijke cookies zijn altijd actief
              omdat ze nodig zijn voor de werking van de site. U kunt uw keuze later altijd wijzigen
              via de link &quot;Cookievoorkeuren&quot; in de footer.{' '}
              <Link
                href="/privacybeleid"
                className="font-medium text-deep-blue underline hover:text-warm-orange"
              >
                Privacybeleid
              </Link>
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-6 py-4">
            {/* Necessary - always on */}
            <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50/50 p-4">
              <div className="space-y-0.5">
                <Label className="text-base font-semibold text-slate-800">
                  Noodzakelijke cookies
                </Label>
                <p className="text-sm text-slate-600">
                  Vereist voor het functioneren van de website (sessie, voorkeuren, beveiliging).
                  Deze kunnen niet worden uitgeschakeld.
                </p>
              </div>
              <Switch checked disabled className="data-[state=checked]:bg-slate-400" />
            </div>

            {/* Analytics */}
            <div className="flex items-center justify-between rounded-lg border border-slate-200 p-4">
              <div className="space-y-0.5 pr-4">
                <Label htmlFor="cookie-analytics" className="text-base font-semibold text-slate-800">
                  Analytische cookies
                </Label>
                <p className="text-sm text-slate-600">
                  Helpen ons om het gebruik van de website te begrijpen (bijv. bezoekstatistieken)
                  zodat we de site kunnen verbeteren.
                </p>
              </div>
              <Switch
                id="cookie-analytics"
                checked={prefs.analytics}
                onCheckedChange={(v) => setPrefs((p) => ({ ...p, analytics: v }))}
              />
            </div>

            {/* Marketing */}
            <div className="flex items-center justify-between rounded-lg border border-slate-200 p-4">
              <div className="space-y-0.5 pr-4">
                <Label htmlFor="cookie-marketing" className="text-base font-semibold text-slate-800">
                  Marketingcookies
                </Label>
                <p className="text-sm text-slate-600">
                  Gebruikt voor relevante advertenties of campagnes. Alleen geplaatst als u hiervoor
                  toestemming geeft.
                </p>
              </div>
              <Switch
                id="cookie-marketing"
                checked={prefs.marketing}
                onCheckedChange={(v) => setPrefs((p) => ({ ...p, marketing: v }))}
              />
            </div>
          </div>

          <DialogFooter className="flex flex-col gap-2 sm:flex-row">
            <Button
              variant="outline"
              onClick={() => {
                setPrefs({ analytics: false, marketing: false });
                savePreferences();
              }}
              className="sm:mr-auto"
            >
              Weiger optionele cookies
            </Button>
            <Button onClick={savePreferences} className="bg-deep-blue text-white hover:bg-deep-blue/90">
              Bewaar voorkeuren
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
