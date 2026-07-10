'use client';

import React from "react";
import Link from "next/link";
import { useCookieConsent } from "@/contexts/CookieConsentContext";

export default function FooterClient() {
  const { openCookiePreferences } = useCookieConsent();

  return (
    <footer className="py-12 border-t border-gray-200 bg-slate-50 text-slate-700">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-deep-blue mb-3 font-heading">FactuurBaas</h3>
            <p className="text-sm text-slate-600">
              De makkelijkste manier voor Nederlandse ondernemers om mooie facturen te maken. Gratis, zonder account.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-deep-blue mb-3 font-heading">Facturen</h3>
            <ul className="space-y-2">
              <li><Link href="/factuur-maken" className="text-sm hover:text-warm-orange transition-colors">Factuur maken</Link></li>
              <li><Link href="/template" className="text-sm hover:text-warm-orange transition-colors">Templates</Link></li>
              <li><Link href="/voorbeeld" className="text-sm hover:text-warm-orange transition-colors">Voorbeelden</Link></li>
              <li><Link href="/create-invoice" className="text-sm hover:text-warm-orange transition-colors">Gratis factuur tool</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-deep-blue mb-3 font-heading">Meer</h3>
            <ul className="space-y-2">
              <li><Link href="/tools" className="text-sm hover:text-warm-orange transition-colors">Tools</Link></li>
              <li><Link href="/blogs" className="text-sm hover:text-warm-orange transition-colors">Gidsen</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-deep-blue mb-3 font-heading">Meer Info</h3>
            <ul className="space-y-2">
              <li><Link href="/privacybeleid" className="text-sm hover:text-warm-orange transition-colors">Privacybeleid</Link></li>
              <li><Link href="/algemene-voorwaarden" className="text-sm hover:text-warm-orange transition-colors">Algemene Voorwaarden</Link></li>
              <li>
                <button
                  type="button"
                  onClick={openCookiePreferences}
                  className="text-sm hover:text-warm-orange transition-colors text-left"
                >
                  Cookievoorkeuren
                </button>
              </li>
              <li><a href="mailto:mail@factuurbaas.nl" className="text-sm hover:text-warm-orange transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="text-center text-sm text-slate-500 border-t border-slate-200 pt-8">
          <p className="mb-2">&copy; {new Date().getFullYear()} FactuurBaas.nl. Alle rechten voorbehouden.</p>
          <p>
            FactuurBaas is gebouwd en beheerd door{' '}
            <Link href="/2xgen" className="font-semibold text-deep-blue hover:text-warm-orange transition-colors">
              2xGen
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
