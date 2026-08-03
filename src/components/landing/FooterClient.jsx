'use client';

import React from "react";
import Link from "next/link";
import { useCookieConsent } from "@/contexts/CookieConsentContext";
import FeatureUpdatesSignup from "@/components/invoice/FeatureUpdatesSignup";

export default function FooterClient() {
  const { openCookiePreferences } = useCookieConsent();

  return (
    <footer className="py-12 border-t border-gray-200 bg-slate-50 text-slate-700">
      <div className="container mx-auto px-6">
        <div className="mb-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <h3 className="mb-3 font-heading text-lg font-semibold text-deep-blue">FactuurBaas</h3>
            <p className="text-sm text-slate-600">
              De makkelijkste manier voor Nederlandse ondernemers om mooie facturen te maken. Gratis, zonder account.
            </p>
          </div>
          <div>
            <h3 className="mb-3 font-heading text-lg font-semibold text-deep-blue">Facturen</h3>
            <ul className="space-y-2">
              <li><Link href="/factuur-maken" className="text-sm transition-colors hover:text-warm-orange">Factuur maken</Link></li>
              <li><Link href="/template" className="text-sm transition-colors hover:text-warm-orange">Templates</Link></li>
              <li><Link href="/voorbeeld" className="text-sm transition-colors hover:text-warm-orange">Voorbeelden</Link></li>
              <li><Link href="/create-invoice" className="text-sm transition-colors hover:text-warm-orange">Gratis factuur tool</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-heading text-lg font-semibold text-deep-blue">Meer</h3>
            <ul className="space-y-2">
              <li><Link href="/tools" className="text-sm transition-colors hover:text-warm-orange">Tools</Link></li>
              <li><Link href="/blogs" className="text-sm transition-colors hover:text-warm-orange">Gidsen</Link></li>
              <li><Link href="/waarom-gratis" className="text-sm transition-colors hover:text-warm-orange">Waarom gratis</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-heading text-lg font-semibold text-deep-blue">Meer Info</h3>
            <ul className="space-y-2">
              <li><Link href="/veiligheid" className="text-sm transition-colors hover:text-warm-orange">Veiligheid</Link></li>
              <li><Link href="/privacybeleid" className="text-sm transition-colors hover:text-warm-orange">Privacybeleid</Link></li>
              <li><Link href="/verwerkersovereenkomst" className="text-sm transition-colors hover:text-warm-orange">Verwerkersovereenkomst</Link></li>
              <li><Link href="/algemene-voorwaarden" className="text-sm transition-colors hover:text-warm-orange">Algemene Voorwaarden</Link></li>
              <li>
                <button
                  type="button"
                  onClick={openCookiePreferences}
                  className="text-left text-sm transition-colors hover:text-warm-orange"
                >
                  Cookievoorkeuren
                </button>
              </li>
              <li><a href="mailto:mail@factuurbaas.nl" className="text-sm transition-colors hover:text-warm-orange">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-heading text-lg font-semibold text-deep-blue">Updates</h3>
            <FeatureUpdatesSignup
              variant="footer"
              showFeatureList={false}
              intro="Krijg een seintje bij nieuwe functies. Optioneel — geen nieuwsbrief."
            />
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
          <p className="mb-2">&copy; {new Date().getFullYear()} FactuurBaas.nl. Alle rechten voorbehouden.</p>
          <p>
            FactuurBaas.nl is een dienst van{' '}
            <Link href="/2xgen" className="font-semibold text-deep-blue transition-colors hover:text-warm-orange">
              2xGen LLC
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
