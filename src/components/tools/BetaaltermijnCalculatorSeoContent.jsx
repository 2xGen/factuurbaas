import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { BETAALTERMIJN_FAQS, formatDutchDate } from '@/lib/betaaltermijnCalculator';
import { addDays } from 'date-fns';
import { ArrowIcon, btn, Eyebrow, FaqList } from '@/components/site/editorial';

const PROSE =
  'article-body prose prose-lg max-w-none prose-p:leading-[1.75] prose-h2:text-[1.85rem] sm:prose-h2:text-[2.15rem] prose-h3:text-[1.35rem] [&>section:first-child>h2:first-child]:mt-0';

function ToolCtas({
  toolHref,
  primaryLabel = 'Bereken vervaldatum',
  showInvoice = true,
  className = '',
}) {
  return (
    <div className={`not-prose my-8 flex flex-col gap-3 sm:flex-row sm:items-center ${className}`}>
      <Link href={toolHref} className={btn.primary}>
        {primaryLabel}
        <ArrowIcon />
      </Link>
      {showInvoice && (
        <Link href="/create-invoice" className={btn.secondary}>
          Maak gratis factuur
        </Link>
      )}
    </div>
  );
}

function LedgerRow({ label, children, strong = false }) {
  return (
    <li className="flex items-baseline justify-between gap-4 border-b border-ink/10 py-3 last:border-0">
      <span className="text-ink-500">{label}</span>
      <span className={strong ? 'font-medium text-ink' : 'text-ink-700'}>{children}</span>
    </li>
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
    <div className={PROSE}>
      <section>
        <h2>Wanneer moet mijn klant betalen?</h2>
        <p>
          De <strong>vervaldatum van een factuur</strong> is de datum waarop je klant de factuur
          uiterlijk moet betalen. De vervaldatum hangt meestal af van de afgesproken betalingstermijn.
        </p>
        <p>
          Stuur je bijvoorbeeld op 10 juli een factuur met een betalingstermijn van 14 dagen, dan is
          de vervaldatum 24 juli. Met de betaaltermijn calculator bereken je dit automatisch.
        </p>
        <div className="not-prose my-8 rounded-2xl border border-ink/[0.08] bg-white p-6 shadow-paper sm:p-7">
          <Eyebrow>Voorbeeld</Eyebrow>
          <ul className="mt-4 text-[15px] tabular-nums sm:text-base">
            <LedgerRow label="Factuurdatum:">{formatDutchDate(exampleDate)}</LedgerRow>
            <LedgerRow label="Betalingstermijn:">14 dagen</LedgerRow>
            <LedgerRow label="Vervaldatum:" strong>
              <strong className="font-display text-xl font-normal">{formatDutchDate(exampleDue)}</strong>
            </LedgerRow>
          </ul>
        </div>
        <ToolCtas toolHref={toolHref} />
      </section>

      <section>
        <h2>Vervaldatum factuur berekenen</h2>
        <p>De berekening is eenvoudig:</p>
        <p className="not-prose my-6 rounded-2xl border border-ink/10 bg-paper px-5 py-4 font-mono text-[13px] uppercase tracking-[0.08em] text-ink sm:text-sm">
          Vervaldatum = factuurdatum + betalingstermijn
        </p>
        <p>
          Heb je bijvoorbeeld een factuurdatum van {formatDutchDate(augustExample)} en een
          betalingstermijn van 30 dagen? Dan is de vervaldatum{' '}
          <strong>{formatDutchDate(augustDue)}</strong>.
        </p>
        <p>
          Let erop dat je de betalingstermijn correct toepast en dat je de afgesproken termijn
          duidelijk op je factuur vermeldt.
        </p>
      </section>

      <section>
        <h2>Wat is een vervaldatum?</h2>
        <p>De vervaldatum is de datum waarop een betaling uiterlijk moet zijn voldaan.</p>
        <p>
          Bij een factuur betekent de vervaldatum dus: de uiterste datum waarop je klant de factuur
          volgens de afgesproken betalingstermijn moet betalen.
        </p>
        <p>De vervaldatum wordt vaak bepaald door:</p>
        <ul>
          {[
            'de factuurdatum',
            'de afgesproken betalingstermijn',
            'eventuele afspraken in je overeenkomst of algemene voorwaarden',
          ].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          Een factuur kan bijvoorbeeld een betalingstermijn van 14 dagen, 30 dagen of een andere
          termijn hebben.
        </p>
      </section>

      <section>
        <h2>Wat is de betalingstermijn van een factuur?</h2>
        <p>De betalingstermijn is het aantal dagen dat een klant krijgt om een factuur te betalen.</p>
        <p className="font-medium text-ink">Veel voorkomende betalingstermijnen zijn:</p>
        <div className="not-prose my-8 grid overflow-hidden rounded-2xl border border-ink/[0.08] bg-white sm:grid-cols-3">
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
            <div
              key={item.term}
              className="border-b border-ink/10 p-6 last:border-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
            >
              <p className="font-display text-[1.75rem] leading-none tracking-[-0.02em] text-ink">
                {item.term}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">{item.when}</p>
            </div>
          ))}
        </div>
        <p>
          De juiste betalingstermijn hangt af van je afspraken met de klant en de regels die in jouw
          situatie gelden.
        </p>
      </section>

      <section>
        <h2>Wat is het verschil tussen factuurdatum en vervaldatum?</h2>
        <p>
          De <strong>factuurdatum</strong> is de datum waarop de factuur wordt opgesteld of
          uitgereikt.
        </p>
        <p>
          De <strong>vervaldatum</strong> is de datum waarop de factuur uiterlijk betaald moet zijn.
        </p>
        <p>Bijvoorbeeld:</p>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th scope="col" />
                <th scope="col">Datum</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-medium text-ink">Factuurdatum</td>
                <td>{formatDutchDate(exampleDate)}</td>
              </tr>
              <tr>
                <td className="font-medium text-ink">Betalingstermijn</td>
                <td>14 dagen</td>
              </tr>
              <tr>
                <td className="font-medium text-ink">Vervaldatum</td>
                <td className="font-semibold text-ink">{formatDutchDate(exampleDue)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>De twee datums zijn dus niet hetzelfde.</p>
      </section>

      <section>
        <h2>Hoeveel dagen heeft een klant om een factuur te betalen?</h2>
        <p>
          Dat hangt af van de afgesproken betalingstermijn. Een betalingstermijn kan bijvoorbeeld 7,
          14 of 30 dagen zijn.
        </p>
        <p>
          Heb je met je klant een specifieke termijn afgesproken? Dan gebruik je die termijn om de
          vervaldatum te berekenen.
        </p>
        <p>
          Bij zakelijke transacties gelden in sommige situaties wettelijke regels voor
          betalingstermijnen. Zo gelden er specifieke regels voor betalingen tussen bedrijven en voor
          betalingen door overheidsinstanties. De afgesproken betalingstermijn is daarom niet altijd
          volledig vrij te kiezen.
        </p>
      </section>

      <section>
        <h2>Wat als de klant niet betaalt op de vervaldatum?</h2>
        <p>
          Is de vervaldatum verstreken en heeft je klant nog niet betaald? Dan is de factuur
          achterstallig.
        </p>
        <p>
          Controleer eerst of de betaling misschien onderweg is. Je kunt vervolgens een
          betalingsherinnering sturen waarin je de klant vriendelijk wijst op de openstaande
          factuur.
        </p>
        <p>
          Betaalt de klant daarna nog steeds niet, dan kun je afhankelijk van je situatie verdere
          stappen nemen, zoals een aanmaning.
        </p>
        <div className="not-prose">
          <Link
            href="/blogs/factuur-niet-betaald-wat-mag-je-doen"
            className={`${btn.link} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2`}
          >
            <ArrowRight className="h-4 w-4 shrink-0 text-ember" aria-hidden />
            Lees wat je kunt doen als een factuur niet wordt betaald
          </Link>
        </div>
      </section>

      <section>
        <h2>Moet de vervaldatum op een factuur staan?</h2>
        <p>
          Het is verstandig om de betalingstermijn duidelijk op je factuur te vermelden. Je kunt
          daarnaast ook de concrete vervaldatum opnemen.
        </p>
        <p>Bijvoorbeeld:</p>
        <div className="not-prose my-6 max-w-sm rounded-2xl border border-ink/10 bg-paper px-5 py-4 font-mono text-[13px] leading-loose text-ink tabular-nums sm:text-sm">
          <p>Betalingstermijn: 14 dagen</p>
          <p>Vervaldatum: {formatDutchDate(exampleDue)}</p>
        </div>
        <p>Zo weet je klant precies wanneer de betaling uiterlijk wordt verwacht.</p>
      </section>

      <section>
        <h2>Betaaltermijn calculator voor zzp&apos;ers</h2>
        <p>
          Als zzp&apos;er stuur je regelmatig facturen naar klanten. Een verkeerde berekening van de
          vervaldatum kan onnodige verwarring veroorzaken.
        </p>
        <p>
          Met deze betaaltermijn calculator hoef je de datum niet handmatig uit te rekenen. Vul je
          factuurdatum en betalingstermijn in en je ziet direct de juiste vervaldatum.
        </p>
        <p className="font-medium text-ink">Gebruik de calculator bijvoorbeeld voor:</p>
        <ul>
          {[
            '7 dagen betalingstermijn',
            '14 dagen betalingstermijn',
            '30 dagen betalingstermijn',
            'zakelijke facturen',
            'facturen aan particulieren',
            'facturen aan andere bedrijven',
          ].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Veelgestelde vragen</h2>
        <FaqList
          className="not-prose mt-8"
          items={BETAALTERMIJN_FAQS.map(({ q, a }) => ({ question: q, answer: a }))}
        />
      </section>

      <section className="not-prose mt-16">
        <h2 className="border-b border-ink/10 pb-5 font-display text-[1.6rem] font-normal leading-[1.15] tracking-[-0.02em] text-ink sm:text-[1.9rem]">
          Gerelateerde tools
        </h2>
        <ul>
          {[
            { label: 'Factuur maken', href: '/tools/factuur-maken' },
            { label: 'Factuurnummer generator', href: '/tools/factuurnummer-generator' },
            { label: 'BTW calculator', href: '/tools/btw-calculator' },
          ].map((link) => (
            <li key={link.href} className="border-b border-ink/10">
              <Link
                href={link.href}
                className="group flex items-center justify-between gap-4 py-4 text-[15px] text-ink transition-colors hover:text-ember-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
              >
                {link.label}
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 text-ember transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="not-prose mt-16 grid gap-4 md:grid-cols-2">
        <div className="flex flex-col rounded-2xl border border-ink/[0.08] bg-white p-6 shadow-paper sm:p-8">
          <Eyebrow>Calculator</Eyebrow>
          <h2 className="mt-3 font-display text-[1.6rem] font-normal leading-[1.15] tracking-[-0.02em] text-ink sm:text-[1.9rem]">
            Bereken de vervaldatum
          </h2>
          <ToolCtas
            toolHref={toolHref}
            primaryLabel="Bereken vervaldatum"
            className="mb-0 mt-auto pt-6 sm:flex-wrap"
          />
        </div>

        <div className="grain relative flex flex-col overflow-hidden rounded-2xl border border-ink/[0.08] bg-paper p-6 sm:p-8">
          <Eyebrow>Factuur</Eyebrow>
          <h2 className="mt-3 font-display text-[1.6rem] font-normal leading-[1.15] tracking-[-0.02em] text-ink sm:text-[1.9rem]">
            Direct een factuur maken
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            Weet je wanneer je factuur betaald moet zijn? Maak daarna direct je factuur. Met
            FactuurBaas maak je gratis een professionele factuur, zonder account, en download je deze
            direct als PDF.
          </p>
          <div className="mt-auto pt-6">
            <Link href="/create-invoice" className={btn.primary}>
              Maak gratis factuur
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
