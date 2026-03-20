import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Crown, CheckCircle2 } from 'lucide-react';
import PremiumSignupCard from '@/components/premium/PremiumSignupCard';

export const metadata = {
  title: 'Premium: lifetime 50% korting | FactuurBaas',
  description:
    'Ontdek de voordelen van FactuurBaas Premium. Snel, simpel en direct professionele facturen maken en downloaden (lifetime 50% korting).',
  keywords: 'FactuurBaas Premium, lifetime 50% korting, factuur maken, pdf factuur, zzp facturen',
  alternates: { canonical: 'https://factuurbaas.nl/premium' },
};

export default function PremiumPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <Link
          href="/create-invoice"
          className="inline-flex items-center text-deep-blue hover:text-warm-orange transition-colors mb-8 font-semibold group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
          Terug naar Factuur Maken
        </Link>

        <article className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-deep-blue to-sky-700 p-7 sm:p-10 text-white">
            <div className="flex items-start gap-4">
              <Crown className="w-12 h-12 text-warm-orange flex-shrink-0" />
              <div>
                <h1 className="text-3xl sm:text-4xl font-heading font-bold">
                  Word FactuurBaas Premium
                </h1>
                <p className="mt-2 text-white/90 text-sm sm:text-base">
                  Krijg lifetime 50% korting en als eerste toegang tot alle Premium-functies.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-10">
            <div className="grid gap-6 lg:grid-cols-2">
              <section className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <h2 className="text-lg font-heading font-bold text-deep-blue flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-warm-orange" />
                  Nu al gratis
                </h2>
                <p className="text-gray-700 mt-3">
                  Maak direct professionele facturen en download ze als PDF.
                  Geen account, geen gedoe — gewoon starten.
                </p>
              </section>

              <section className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <h2 className="text-lg font-heading font-bold text-deep-blue flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-warm-orange" />
                  Waarom Premium?
                </h2>
                <p className="text-gray-700 mt-3">
                  Werk sneller, houd overzicht en krijg sneller betaald.
                </p>
                <div className="mt-4 space-y-3">
                  <div className="text-sm font-heading font-bold text-deep-blue">
                    Met Premium krijg je straks:
                  </div>
                  <ul className="text-gray-700 text-sm space-y-2 list-disc pl-5">
                    <li>Overzicht & dashboard</li>
                    <li>Contacten opslaan</li>
                    <li>Automatische herinneringen</li>
                    <li>Facturen herhalen (dupliceren)</li>
                  </ul>
                </div>
              </section>
            </div>

            <section className="mt-6 rounded-xl border border-gray-200 bg-white p-5">
              <h2 className="text-lg font-heading font-bold text-deep-blue flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-warm-orange" />
                Binnenkort beschikbaar
              </h2>
              <p className="text-gray-700 mt-3">
                We werken aan deze functies en rollen ze als eerste uit naar Premium-gebruikers.
              </p>
            </section>

            <div className="mt-8 grid gap-6 lg:grid-cols-2 items-start">
              <section className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <h2 className="text-lg font-heading font-bold text-deep-blue">Lifetime 50% korting</h2>
                <p className="text-gray-700 mt-2">
                  Meld je nu aan en krijg altijd 50% korting op Premium.
                </p>
                <ul className="text-gray-700 text-sm space-y-2 list-disc pl-5 mt-4">
                  <li>Je hoeft nu niets te betalen.</li>
                  <li>Je krijgt alleen een seintje zodra Premium live gaat.</li>
                </ul>
              </section>

              <section>
                <PremiumSignupCard />
              </section>
            </div>

            <div className="mt-8 flex justify-center">
              <Link
                href="/create-invoice"
                className="inline-flex items-center justify-center rounded-md bg-deep-blue px-6 py-3 text-white font-semibold hover:bg-deep-blue/90 transition-colors"
              >
                Naar factuur maken
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

