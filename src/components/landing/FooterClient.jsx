'use client';

import React from "react";
import Link from "next/link";
import { useCookieConsent } from "@/contexts/CookieConsentContext";
import FeatureUpdatesSignup from "@/components/invoice/FeatureUpdatesSignup";
import FooterAppInstallLink from "@/components/pwa/FooterAppInstallLink";

export default function FooterClient() {
  const { openCookiePreferences } = useCookieConsent();

  return (
    <footer className="border-t border-ink/10 bg-paper py-10 text-ink-500">
      <div className="container mx-auto px-6">
        <div className="mb-6 grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-3 xl:grid-cols-6">
          <div className="col-span-2 lg:col-span-1">
            <h3 className="mb-2 flex items-center gap-2 text-base font-semibold tracking-[-0.02em] text-ink">
              <img src="/crown-favicon.svg" alt="" className="h-5 w-5" aria-hidden />
              FactuurBaas
            </h3>
            <p className="max-w-xs text-[13px] leading-relaxed text-ink-500">
              FactuurBaas helpt Nederlandse zzp&apos;ers met facturen, administratie en grip op hun bedrijf. Gratis en eenvoudig.
            </p>
            <FooterAppInstallLink />
          </div>
          <div>
            <h3 className="mb-4 font-mono text-[11px] font-normal uppercase tracking-[0.16em] text-ink-400">Facturen</h3>
            <ul className="space-y-1.5">
              <li><Link href="/factuur-maken" className="text-[13px] transition-colors hover:text-ink">Factuur maken</Link></li>
              <li><Link href="/template" className="text-[13px] transition-colors hover:text-ink">Templates</Link></li>
              <li><Link href="/voorbeeld" className="text-[13px] transition-colors hover:text-ink">Voorbeelden</Link></li>
              <li><Link href="/create-invoice" className="text-[13px] transition-colors hover:text-ink">Gratis factuur tool</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-mono text-[11px] font-normal uppercase tracking-[0.16em] text-ink-400">Boekhouden</h3>
            <ul className="space-y-1.5">
              <li><Link href="/boekhoudprogramma-vergelijken" className="text-[13px] transition-colors hover:text-ink">Boekhoudprogramma vergelijken</Link></li>
              <li><Link href="/uitgaven-bijhouden" className="text-[13px] transition-colors hover:text-ink">Uitgaven bijhouden</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-mono text-[11px] font-normal uppercase tracking-[0.16em] text-ink-400">Meer</h3>
            <ul className="space-y-1.5">
              <li><Link href="/tools" className="text-[13px] transition-colors hover:text-ink">Tools</Link></li>
              <li><Link href="/blogs" className="text-[13px] transition-colors hover:text-ink">Gidsen</Link></li>
              <li><Link href="/blogs/hypotheek-als-zzper" className="text-[13px] transition-colors hover:text-ink">Hypotheek als zzp&apos;er</Link></li>
              <li><Link href="/blogs/aov-zzp" className="text-[13px] transition-colors hover:text-ink">AOV zzp</Link></li>
              <li><Link href="/zakelijke-lease-vergelijken" className="text-[13px] transition-colors hover:text-ink">Zakelijke lease vergelijken</Link></li>
              <li><Link href="/waarom-gratis" className="text-[13px] transition-colors hover:text-ink">Waarom gratis</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-mono text-[11px] font-normal uppercase tracking-[0.16em] text-ink-400">Meer Info</h3>
            <ul className="space-y-1.5">
              <li><Link href="/veiligheid" className="text-[13px] transition-colors hover:text-ink">Veiligheid</Link></li>
              <li><Link href="/privacybeleid" className="text-[13px] transition-colors hover:text-ink">Privacybeleid</Link></li>
              <li><Link href="/verwerkersovereenkomst" className="text-[13px] transition-colors hover:text-ink">Verwerkersovereenkomst</Link></li>
              <li><Link href="/algemene-voorwaarden" className="text-[13px] transition-colors hover:text-ink">Algemene Voorwaarden</Link></li>
              <li>
                <button
                  type="button"
                  onClick={openCookiePreferences}
                  className="text-left text-sm transition-colors hover:text-ember"
                >
                  Cookievoorkeuren
                </button>
              </li>
              <li><a href="mailto:mail@factuurbaas.nl" className="text-[13px] transition-colors hover:text-ink">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-mono text-[11px] font-normal uppercase tracking-[0.16em] text-ink-400">Updates</h3>
            <FeatureUpdatesSignup
              variant="footer"
              showFeatureList={false}
              intro="Krijg een seintje bij nieuwe functies. Optioneel — geen nieuwsbrief."
            />
          </div>
        </div>

        <div className="border-t border-ink/10 pt-6 text-center text-xs text-ink-400">
          <p className="mb-2">&copy; {new Date().getFullYear()} FactuurBaas.nl. Alle rechten voorbehouden.</p>
          <p>
            FactuurBaas.nl is een dienst van{' '}
            <Link href="/2xgen" className="font-semibold text-deep-blue transition-colors hover:text-ember">
              2xGen LLC
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
