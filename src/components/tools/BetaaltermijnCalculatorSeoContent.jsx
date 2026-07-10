import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { BETAALTERMIJN_FAQS, formatDutchDate } from '@/lib/betaaltermijnCalculator';
import { addDays } from 'date-fns';

export default function BetaaltermijnCalculatorSeoContent({
  toolHref = '/tools/betaaltermijn-calculator/berekenen',
}) {
  const exampleDate = new Date(2026, 6, 10);
  const exampleDue = addDays(exampleDate, 14);

  return (
    <div className="space-y-14 sm:space-y-16">
      <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <p className="text-sm font-semibold text-deep-blue">Direct verder?</p>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
          Bereken je vervaldatum en maak direct een factuur met de juiste data.
        </p>
        <Link
          href={toolHref}
          className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-warm-orange hover:underline"
        >
          <ArrowRight className="h-3.5 w-3.5" />
          Open betaaltermijn calculator
        </Link>
      </div>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Wanneer moet mijn klant betalen?
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Stuur je vandaag een factuur? Dan wil je weten wanneer de betaling uiterlijk binnen moet
          zijn. Met de betaaltermijn calculator bereken je in seconden de <strong>vervaldatum</strong>{' '}
          op basis van je factuurdatum en betalingstermijn.
        </p>
        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
          <p className="font-semibold text-deep-blue">Voorbeeld</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-600 sm:text-base">
            <li>Factuurdatum: {formatDutchDate(exampleDate)}</li>
            <li>Betalingstermijn: 14 dagen</li>
            <li>
              Vervaldatum:{' '}
              <strong className="text-deep-blue">{formatDutchDate(exampleDue)}</strong>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Hoe bereken je de vervaldatum van een factuur?
        </h2>
        <p className="mt-4 font-medium text-deep-blue">Formule:</p>
        <p className="mt-2 rounded-lg bg-slate-50 px-4 py-3 font-mono text-sm text-slate-800">
          Vervaldatum = factuurdatum + betalingstermijn in dagen
        </p>
        <ul className="mt-6 space-y-3">
          {[
            'Kies de dag waarop je de factuur verstuurt (factuurdatum)',
            'Bepaal je betalingstermijn — vaak 14 of 30 dagen',
            'Tel het aantal dagen op bij de factuurdatum',
            'Vermeld de termijn of vervaldatum op je factuur',
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
          Welke betalingstermijn is gebruikelijk?
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { term: '7 dagen', when: 'Snelle betaling, kleine opdrachten' },
            { term: '14 dagen', when: 'Meest gangbaar voor zzp\'ers' },
            { term: '30 dagen', when: 'Grotere bedrijven en langere projecten' },
          ].map((item) => (
            <div key={item.term} className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="font-semibold text-deep-blue">{item.term}</p>
              <p className="mt-2 text-sm text-slate-600">{item.when}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Veelgestelde vragen
        </h2>
        <div className="mt-6 space-y-4">
          {BETAALTERMIJN_FAQS.map(({ q, a }) => (
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
        <h2 className="font-heading text-lg font-bold text-deep-blue">Gerelateerde tools</h2>
        <ul className="mt-4 space-y-2">
          {[
            { label: 'Factuur maken', href: '/tools/factuur-maken' },
            { label: 'Factuurnummer generator', href: '/tools/factuurnummer-generator' },
            { label: 'BTW calculator', href: '/tools/btw-calculator' },
          ].map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-flex items-center gap-2 text-sm font-medium text-warm-orange hover:underline"
              >
                <ArrowRight className="h-3.5 w-3.5" />
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:p-8">
        <h2 className="font-heading text-xl font-bold text-deep-blue sm:text-2xl">
          Bereken je vervaldatum en maak direct een factuur
        </h2>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="rounded-xl px-8">
            <Link href={toolHref}>
              Open calculator
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-xl px-8">
            <Link href="/tools/factuur-maken">Maak factuur</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
