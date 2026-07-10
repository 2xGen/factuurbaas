import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { MARGE_FAQS, MARGE_EXAMPLES } from '@/lib/margeCalculator';

function CalcTable({ headers, rows }) {
  return (
    <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full min-w-[280px] text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            {headers.map((header) => (
              <th key={header} className="px-4 py-3 font-semibold text-deep-blue">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.join('-')} className="border-b border-slate-100 last:border-0">
              {row.map((cell, i) => (
                <td
                  key={`${row[0]}-${i}`}
                  className={`px-4 py-3 ${i === 0 ? 'font-medium text-slate-700' : 'text-slate-600'}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function MargeCalculatorSeoContent({
  toolHref = '/tools/marge-calculator/berekenen',
}) {
  return (
    <div className="space-y-14 sm:space-y-16">
      <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <p className="text-sm font-semibold text-deep-blue">Verkoop je met btw?</p>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
          Bereken je marge op bedragen exclusief btw en gebruik daarna de BTW calculator voor je
          factuur.
        </p>
        <Link
          href="/tools/btw-calculator"
          className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-warm-orange hover:underline"
        >
          <ArrowRight className="h-3.5 w-3.5" />
          BTW calculator
        </Link>
      </div>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Marge berekenen voor je producten en diensten
        </h2>
        <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
          <p>
            Als je producten inkoopt en doorverkoopt — of materialen gebruikt voor een klantopdracht
            — wil je weten hoeveel <strong>winst</strong> je maakt en welk <strong>margepercentage</strong>{' '}
            je hanteert. Dat helpt bij prijsstelling, onderhandelen en je rendement beoordelen.
          </p>
          <p>
            Zoek je op &quot;marge berekenen&quot; of &quot;winstmarge berekenen&quot;, dan wil je
            meestal snel twee bedragen vergelijken: wat kost het je, en wat vraag je ervoor?
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Hoe bereken je winst en winstmarge?
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h3 className="font-heading text-lg font-bold text-deep-blue">Winst in euro&apos;s</h3>
            <p className="mt-3 text-sm text-slate-600">
              Het bedrag dat je overhoudt per verkoop, vóór vaste kosten en belasting.
            </p>
            <p className="mt-4 text-sm font-medium text-slate-700">Formule:</p>
            <p className="mt-1 rounded-lg bg-slate-50 px-3 py-2 font-mono text-sm text-slate-800">
              Winst = verkoopprijs − inkoopprijs
            </p>
            <p className="mt-4 text-sm font-medium text-slate-700">Voorbeeld:</p>
            <ul className="mt-2 space-y-1 text-sm text-slate-600">
              <li>Inkoop: €40</li>
              <li>Verkoop: €80</li>
              <li>Winst: €40</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h3 className="font-heading text-lg font-bold text-deep-blue">Winstmarge in %</h3>
            <p className="mt-3 text-sm text-slate-600">
              Het percentage van je verkoopprijs dat winst is — handig om prijzen te vergelijken.
            </p>
            <p className="mt-4 text-sm font-medium text-slate-700">Formule:</p>
            <p className="mt-1 rounded-lg bg-slate-50 px-3 py-2 font-mono text-sm text-slate-800">
              Marge % = (winst ÷ verkoopprijs) × 100
            </p>
            <p className="mt-4 text-sm font-medium text-slate-700">Voorbeeld:</p>
            <ul className="mt-2 space-y-1 text-sm text-slate-600">
              <li>Winst: €40</li>
              <li>Verkoop: €80</li>
              <li>Marge: 50%</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Rekenvoorbeelden: marge berekenen
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Onderstaande voorbeelden tonen hoe winst en marge samenhangen bij verschillende
          inkoop- en verkoopprijzen.
        </p>
        <CalcTable
          headers={['Inkoopprijs', 'Verkoopprijs', 'Winst', 'Marge %']}
          rows={MARGE_EXAMPLES}
        />
        <div className="mt-6">
          <Button asChild size="lg" className="rounded-xl px-8">
            <Link href={toolHref}>
              Bereken je eigen marge
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Wat is een goede winstmarge?
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Een &quot;goede&quot; marge verschilt per branche, product en concurrentie. Richtlijnen:
        </p>
        <ul className="mt-6 space-y-3">
          {[
            'Retail en webshops: vaak 20%–50% marge op verkoopprijs',
            'Horeca: vaak lager door hoge inkoop- en personeelskosten',
            'Dienstverlening en consultancy: vaak hoger, soms 50%+',
            'Groothandel: vaak dunne marges van 10%–20%',
          ].map((item) => (
            <li key={item} className="flex gap-2.5 text-slate-600">
              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-warm-orange" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm leading-relaxed text-slate-600">
          Let op: marge zegt niets over je vaste kosten. Een hoge marge per product betekent niet
          automatisch dat je bedrijf winstgevend is.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Marge vs. opslag — wat is het verschil?
        </h2>
        <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
          <p>
            <strong>Winstmarge</strong> wordt berekend over de verkoopprijs.{' '}
            <strong>Opslag</strong> (markup) wordt berekend over de inkoopprijs. Dat geeft
            verschillende percentages bij dezelfde bedragen.
          </p>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-medium text-deep-blue">Voorbeeld: inkoop €50, verkoop €100</p>
            <ul className="mt-3 space-y-1 text-sm text-slate-600">
              <li>Winst: €50</li>
              <li>Winstmarge: 50% (van verkoopprijs)</li>
              <li>Opslag: 100% (van inkoopprijs)</li>
            </ul>
          </div>
          <p>
            Onze calculator toont de <strong>winstmarge op verkoopprijs</strong> — de meest
            gebruikte manier in retail en ondernemerschap.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Wanneer gebruik je de marge calculator?
        </h2>
        <ul className="mt-6 space-y-3">
          {[
            'Je koopt producten in en wilt je verkoopprijs bepalen',
            'Je vergelijkt leveranciers op basis van marge',
            'Je onderhandelt over inkoopprijs met een klant of leverancier',
            'Je wilt snel checken of een aanbieding nog winstgevend is',
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
          {MARGE_FAQS.map(({ q, a }) => (
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
            { label: 'BTW calculator', href: '/tools/btw-calculator' },
            { label: 'Factuur maken', href: '/tools/factuur-maken' },
            { label: 'Uurtarief calculator', href: '/tools/uurtarief-calculator' },
            { label: 'Uurtarief naar inkomen', href: '/tools/uurtarief-naar-inkomen' },
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
          Bereken direct je winst en winstmarge
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-slate-600 sm:text-base">
          Gratis online tool. Vul inkoop- en verkoopprijs in en zie direct het resultaat.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="rounded-xl px-8">
            <Link href={toolHref}>
              Open marge calculator
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
