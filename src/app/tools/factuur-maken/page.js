import Link from 'next/link';
import ToolGatePage from '@/components/tools/ToolGatePage';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import {
  FACTUUR_MAKEN_GATE_FAQS,
  getFactuurMakenGateSchema,
} from '@/lib/factuurMakenGate';

export const metadata = {
  title: 'Gratis Factuur Maken 2026 – Online voor ZZP\'ers | FactuurBaas',
  description:
    'Maak gratis een professionele factuur als zzp\'er. Vul je gegevens in, kies een layout en download direct als PDF. Geen account nodig.',
  alternates: { canonical: 'https://factuurbaas.nl/tools/factuur-maken' },
};

const TOOL_HREF = '/create-invoice';

export default function FactuurMakenGatePage() {
  return (
    <ToolGatePage
      breadcrumbLabel="Factuur maken"
      h1="Gratis factuur maken"
      intro="Maak in minuten een professionele factuur en download direct als PDF."
      introExtra="FactuurBaas is gemaakt voor zzp'ers die snel willen factureren zonder ingewikkeld boekhoudsoftware. Geen account, geen abonnement — gewoon invullen en downloaden."
      trustPoints={[
        'Gratis zonder account',
        'Direct PDF downloaden',
        'Automatische btw-berekening',
        'Klaar in onder 2 minuten',
      ]}
      toolHref={TOOL_HREF}
      toolCtaLabel="Open factuur tool"
      secondaryHref="/voorbeeld"
      secondaryCtaLabel="Bekijk voorbeelden"
      faqSchema={getFactuurMakenGateSchema()}
    >
      <div className="space-y-14">
        <section>
          <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
            Waarom FactuurBaas voor je factuur?
          </h2>
          <ul className="mt-6 space-y-3">
            {[
              'Geen Word of Excel nodig — alles online',
              'Btw en totalen worden automatisch berekend',
              'Meerdere professionele layouts',
              'Geschikt voor zzp\'ers en kleine ondernemers',
            ].map((item) => (
              <li key={item} className="flex gap-2.5 text-slate-600">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-warm-orange" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-8 font-heading text-xl font-bold text-deep-blue sm:text-2xl">
            Voor wie is deze factuurmaker?
          </h3>
          <ul className="mt-4 space-y-3">
            {[
              "ZZP'ers",
              'Freelancers',
              'Kleine ondernemers',
              'Dienstenbedrijven',
              'Startende ondernemers',
            ].map((item) => (
              <li key={item} className="flex gap-2.5 text-slate-600">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-warm-orange" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
            Zo maak je je factuur
          </h2>
          <ol className="mt-6 space-y-4">
            {[
              'Vul je bedrijfs- en klantgegevens in',
              'Voeg je diensten of uren toe met btw',
              'Kies een layout en download als PDF',
            ].map((step, index) => (
              <li
                key={step}
                className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4"
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-700">
                  {index + 1}
                </span>
                <span className="text-slate-700">{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-6">
            <Button asChild size="lg" className="rounded-xl px-8">
              <Link href={TOOL_HREF}>
                Start met factureren
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
            Veelgestelde vragen
          </h2>
          <div className="mt-6 space-y-4">
            {FACTUUR_MAKEN_GATE_FAQS.map(({ q, a }) => (
              <details
                key={q}
                className="group rounded-xl border border-slate-200 bg-white p-4 sm:p-5"
              >
                <summary className="cursor-pointer list-none font-semibold text-deep-blue marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-3">
                    {q}
                    <span className="text-warm-orange transition-transform group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-heading text-lg font-bold text-deep-blue">Gerelateerd</h2>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {[
              { label: 'Factuur voorbeelden', href: '/factuur-voorbeeld' },
              { label: 'Offerte voorbeelden', href: '/offerte-voorbeeld' },
              { label: 'Factuur templates', href: '/factuur-template' },
              { label: 'BTW calculator', href: '/tools/btw-calculator' },
              { label: 'Offerte maker', href: '/tools/offerte-maker' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-warm-orange/40 hover:text-warm-orange"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </ToolGatePage>
  );
}
