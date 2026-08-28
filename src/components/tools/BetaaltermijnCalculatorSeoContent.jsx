import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { BETAALTERMIJN_FAQS, formatDutchDate } from '@/lib/betaaltermijnCalculator';
import { addDays } from 'date-fns';

function ToolCtas({
  toolHref,
  primaryLabel = 'Bereken vervaldatum',
  showInvoice = true,
  className = '',
}) {
  return (
    <div className={`flex flex-col items-start gap-3 sm:flex-row sm:items-center ${className}`}>
      <Button asChild size="lg" className="rounded-xl px-8">
        <Link href={toolHref}>
          {primaryLabel}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
      {showInvoice && (
        <Button asChild variant="outline" size="lg" className="rounded-xl px-8">
          <Link href="/create-invoice">Maak gratis factuur</Link>
        </Button>
      )}
    </div>
  );
}

export default function BetaaltermijnCalculatorSeoContent({
  toolHref = '/tools/betaaltermijn-calculator/berekenen',
}) {
  const exampleDate = new Date(2026, 6, 10);
  const exampleDue = addDays(exampleDate, 14);
  const augustExample = new Date(2026, 7, 1);
  const augustDue = addDays(augustExample, 30);

  return (
    <div className="space-y-14 sm:space-y-16">
      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Wanneer moet mijn klant betalen?
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          De <strong>vervaldatum van een factuur</strong> is de datum waarop je klant de factuur
          uiterlijk moet betalen. De vervaldatum hangt meestal af van de afgesproken betalingstermijn.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          Stuur je bijvoorbeeld op 10 juli een factuur met een betalingstermijn van 14 dagen, dan is
          de vervaldatum 24 juli. Met de betaaltermijn calculator bereken je dit automatisch.
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
        <ToolCtas toolHref={toolHref} className="mt-6" />
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Vervaldatum factuur berekenen
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">De berekening is eenvoudig:</p>
        <p className="mt-4 rounded-lg bg-slate-50 px-4 py-3 font-mono text-sm text-slate-800">
          Vervaldatum = factuurdatum + betalingstermijn
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          Heb je bijvoorbeeld een factuurdatum van {formatDutchDate(augustExample)} en een
          betalingstermijn van 30 dagen? Dan is de vervaldatum{' '}
          <strong>{formatDutchDate(augustDue)}</strong>.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          Let erop dat je de betalingstermijn correct toepast en dat je de afgesproken termijn
          duidelijk op je factuur vermeldt.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Wat is een vervaldatum?
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          De vervaldatum is de datum waarop een betaling uiterlijk moet zijn voldaan.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          Bij een factuur betekent de vervaldatum dus: de uiterste datum waarop je klant de factuur
          volgens de afgesproken betalingstermijn moet betalen.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          De vervaldatum wordt vaak bepaald door:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            'de factuurdatum',
            'de afgesproken betalingstermijn',
            'eventuele afspraken in je overeenkomst of algemene voorwaarden',
          ].map((item) => (
            <li key={item} className="flex gap-2.5 text-slate-600">
              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-warm-orange" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 leading-relaxed text-slate-600">
          Een factuur kan bijvoorbeeld een betalingstermijn van 14 dagen, 30 dagen of een andere
          termijn hebben.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Wat is de betalingstermijn van een factuur?
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          De betalingstermijn is het aantal dagen dat een klant krijgt om een factuur te betalen.
        </p>
        <p className="mt-4 font-medium text-deep-blue">Veel voorkomende betalingstermijnen zijn:</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            {
              term: '7 dagen',
              when:
                'Een korte betalingstermijn die bijvoorbeeld kan worden gebruikt voor kleinere opdrachten of wanneer snelle betaling gewenst is.',
            },
            {
              term: '14 dagen',
              when: 'Een veelgebruikte betalingstermijn voor zzp\'ers en kleinere opdrachten.',
            },
            {
              term: '30 dagen',
              when: 'Een termijn die vaak wordt gebruikt bij zakelijke klanten en grotere bedrijven.',
            },
          ].map((item) => (
            <div key={item.term} className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="font-semibold text-deep-blue">{item.term}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.when}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 leading-relaxed text-slate-600">
          De juiste betalingstermijn hangt af van je afspraken met de klant en de regels die in jouw
          situatie gelden.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Wat is het verschil tussen factuurdatum en vervaldatum?
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          De <strong>factuurdatum</strong> is de datum waarop de factuur wordt opgesteld of
          uitgereikt.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          De <strong>vervaldatum</strong> is de datum waarop de factuur uiterlijk betaald moet zijn.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">Bijvoorbeeld:</p>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-sm text-slate-600 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col" />
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Datum
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3 font-medium text-deep-blue">Factuurdatum</td>
                <td className="px-4 py-3">{formatDutchDate(exampleDate)}</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3 font-medium text-deep-blue">Betalingstermijn</td>
                <td className="px-4 py-3">14 dagen</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-deep-blue">Vervaldatum</td>
                <td className="px-4 py-3 font-semibold text-deep-blue">
                  {formatDutchDate(exampleDue)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 leading-relaxed text-slate-600">De twee datums zijn dus niet hetzelfde.</p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Hoeveel dagen heeft een klant om een factuur te betalen?
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Dat hangt af van de afgesproken betalingstermijn. Een betalingstermijn kan bijvoorbeeld 7,
          14 of 30 dagen zijn.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          Heb je met je klant een specifieke termijn afgesproken? Dan gebruik je die termijn om de
          vervaldatum te berekenen.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          Bij zakelijke transacties gelden in sommige situaties wettelijke regels voor
          betalingstermijnen. Zo gelden er specifieke regels voor betalingen tussen bedrijven en voor
          betalingen door overheidsinstanties. De afgesproken betalingstermijn is daarom niet altijd
          volledig vrij te kiezen.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Wat als de klant niet betaalt op de vervaldatum?
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Is de vervaldatum verstreken en heeft je klant nog niet betaald? Dan is de factuur
          achterstallig.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          Controleer eerst of de betaling misschien onderweg is. Je kunt vervolgens een
          betalingsherinnering sturen waarin je de klant vriendelijk wijst op de openstaande
          factuur.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          Betaalt de klant daarna nog steeds niet, dan kun je afhankelijk van je situatie verdere
          stappen nemen, zoals een aanmaning.
        </p>
        <Link
          href="/blogs/factuur-niet-betaald-wat-mag-je-doen"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-warm-orange hover:underline"
        >
          <ArrowRight className="h-3.5 w-3.5" />
          Lees wat je kunt doen als een factuur niet wordt betaald
        </Link>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Moet de vervaldatum op een factuur staan?
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Het is verstandig om de betalingstermijn duidelijk op je factuur te vermelden. Je kunt
          daarnaast ook de concrete vervaldatum opnemen.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">Bijvoorbeeld:</p>
        <div className="mt-4 rounded-lg bg-slate-50 px-4 py-3 text-sm text-slate-800 sm:text-base">
          <p>Betalingstermijn: 14 dagen</p>
          <p>Vervaldatum: {formatDutchDate(exampleDue)}</p>
        </div>
        <p className="mt-4 leading-relaxed text-slate-600">
          Zo weet je klant precies wanneer de betaling uiterlijk wordt verwacht.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Betaaltermijn calculator voor zzp&apos;ers
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Als zzp&apos;er stuur je regelmatig facturen naar klanten. Een verkeerde berekening van de
          vervaldatum kan onnodige verwarring veroorzaken.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          Met deze betaaltermijn calculator hoef je de datum niet handmatig uit te rekenen. Vul je
          factuurdatum en betalingstermijn in en je ziet direct de juiste vervaldatum.
        </p>
        <p className="mt-4 font-medium text-deep-blue">
          Gebruik de calculator bijvoorbeeld voor:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            '7 dagen betalingstermijn',
            '14 dagen betalingstermijn',
            '30 dagen betalingstermijn',
            'zakelijke facturen',
            'facturen aan particulieren',
            'facturen aan andere bedrijven',
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
          Bereken de vervaldatum
        </h2>
        <ToolCtas
          toolHref={toolHref}
          primaryLabel="Bereken vervaldatum"
          className="mt-6 justify-center"
        />
      </div>

      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 text-center shadow-sm sm:p-8">
        <h2 className="font-heading text-xl font-bold text-deep-blue sm:text-2xl">
          Direct een factuur maken
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-slate-600 sm:text-base">
          Weet je wanneer je factuur betaald moet zijn? Maak daarna direct je factuur. Met
          FactuurBaas maak je gratis een professionele factuur, zonder account, en download je deze
          direct als PDF.
        </p>
        <Button asChild size="lg" className="mt-6 rounded-xl px-8">
          <Link href="/create-invoice">
            Maak gratis factuur
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
