import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { ArrowIcon, btn, FaqList } from '@/components/site/editorial';
import { Reveal } from '@/components/landing/page/motion';
import { MARGE_FAQS, MARGE_EXAMPLES } from '@/lib/margeCalculator';

const ARTICLE =
  'article-body prose prose-lg mx-auto max-w-3xl prose-p:leading-[1.75] prose-h2:text-[1.85rem] sm:prose-h2:text-[2.15rem] prose-h3:text-[1.35rem] [&>section:first-of-type>h2]:mt-0';

function CalcTable({ headers, rows }) {
  return (
    <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-ink/[0.08] bg-white shadow-paper">
      <table className="w-full min-w-[280px] text-left text-[15px] tabular-nums">
        <thead>
          <tr className="border-b border-ink/10 bg-paper-50">
            {headers.map((header) => (
              <th
                key={header}
                scope="col"
                className="px-5 py-3.5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-500"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-ink/[0.06]">
          {rows.map((row) => (
            <tr key={row.join('-')}>
              {row.map((cell, i) => (
                <td
                  key={`${row[0]}-${i}`}
                  className={`whitespace-nowrap px-5 py-4 ${i === 0 ? 'font-medium text-ink' : i === row.length - 1 ? 'font-medium text-ink' : 'text-ink-700'}`}
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

function FigureRows({ items }) {
  return (
    <ul className="mt-2 border-t border-ink/10 text-sm tabular-nums">
      {items.map((item) => (
        <li key={item} className="border-b border-ink/[0.06] py-2 text-ink-700">
          {item}
        </li>
      ))}
    </ul>
  );
}

function FormulaCard({ title, intro, formula, example }) {
  return (
    <div className="rounded-2xl border border-ink/[0.08] bg-white p-6 shadow-paper sm:p-7">
      <h3 className="font-display text-[1.35rem] font-normal leading-snug tracking-[-0.02em] text-ink">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-500">{intro}</p>
      <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-400">Formule:</p>
      <p className="mt-2 rounded-xl bg-paper px-4 py-3 font-mono text-sm text-ink ring-1 ring-ink/5">
        {formula}
      </p>
      <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-400">Voorbeeld:</p>
      <FigureRows items={example} />
    </div>
  );
}

function CheckList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function MargeCalculatorSeoContent({
  toolHref = '/tools/marge-calculator/berekenen',
}) {
  return (
    <div className={ARTICLE}>
      <div className="not-prose mb-14 flex flex-col gap-4 rounded-2xl border border-ink/[0.08] bg-white p-6 shadow-paper sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-7">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ember">Verkoop je met btw?</p>
          <p className="mt-2 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            Bereken je marge op bedragen exclusief btw en gebruik daarna de BTW calculator voor je
            factuur.
          </p>
        </div>
        <Link href="/tools/btw-calculator" className={`${btn.link} shrink-0`}>
          <ArrowRight className="h-3.5 w-3.5 text-ember" aria-hidden />
          BTW calculator
        </Link>
      </div>

      <section>
        <h2>Marge berekenen voor je producten en diensten</h2>
        <p>
          Als je producten inkoopt en doorverkoopt — of materialen gebruikt voor een klantopdracht
          — wil je weten hoeveel <strong>winst</strong> je maakt en welk <strong>margepercentage</strong>{' '}
          je hanteert. Dat helpt bij prijsstelling, onderhandelen en je rendement beoordelen.
        </p>
        <p>
          Zoek je op &quot;marge berekenen&quot; of &quot;winstmarge berekenen&quot;, dan wil je
          meestal snel twee bedragen vergelijken: wat kost het je, en wat vraag je ervoor?
        </p>
      </section>

      <section>
        <h2>Hoe bereken je winst en winstmarge?</h2>
        <Reveal className="not-prose my-8 grid gap-5 md:grid-cols-2">
          <FormulaCard
            title="Winst in euro's"
            intro="Het bedrag dat je overhoudt per verkoop, vóór vaste kosten en belasting."
            formula="Winst = verkoopprijs − inkoopprijs"
            example={['Inkoop: €40', 'Verkoop: €80', 'Winst: €40']}
          />
          <FormulaCard
            title="Winstmarge in %"
            intro="Het percentage van je verkoopprijs dat winst is — handig om prijzen te vergelijken."
            formula="Marge % = (winst ÷ verkoopprijs) × 100"
            example={['Winst: €40', 'Verkoop: €80', 'Marge: 50%']}
          />
        </Reveal>
      </section>

      <section>
        <h2>Rekenvoorbeelden: marge berekenen</h2>
        <p>
          Onderstaande voorbeelden tonen hoe winst en marge samenhangen bij verschillende
          inkoop- en verkoopprijzen.
        </p>
        <CalcTable
          headers={['Inkoopprijs', 'Verkoopprijs', 'Winst', 'Marge %']}
          rows={MARGE_EXAMPLES}
        />
        <div className="not-prose my-8">
          <Link href={toolHref} className={btn.primary}>
            Bereken je eigen marge
            <ArrowIcon />
          </Link>
        </div>
      </section>

      <section>
        <h2>Wat is een goede winstmarge?</h2>
        <p>
          Een &quot;goede&quot; marge verschilt per branche, product en concurrentie. Richtlijnen:
        </p>
        <CheckList
          items={[
            'Retail en webshops: vaak 20%–50% marge op verkoopprijs',
            'Horeca: vaak lager door hoge inkoop- en personeelskosten',
            'Dienstverlening en consultancy: vaak hoger, soms 50%+',
            'Groothandel: vaak dunne marges van 10%–20%',
          ]}
        />
        <p className="text-base text-ink-500">
          Let op: marge zegt niets over je vaste kosten. Een hoge marge per product betekent niet
          automatisch dat je bedrijf winstgevend is.
        </p>
      </section>

      <section>
        <h2>Marge vs. opslag — wat is het verschil?</h2>
        <p>
          <strong>Winstmarge</strong> wordt berekend over de verkoopprijs.{' '}
          <strong>Opslag</strong> (markup) wordt berekend over de inkoopprijs. Dat geeft
          verschillende percentages bij dezelfde bedragen.
        </p>
        <div className="not-prose my-8 rounded-2xl border border-ink/[0.08] bg-paper p-6 sm:p-7">
          <p className="font-display text-xl leading-snug text-ink">Voorbeeld: inkoop €50, verkoop €100</p>
          <FigureRows
            items={[
              'Winst: €50',
              'Winstmarge: 50% (van verkoopprijs)',
              'Opslag: 100% (van inkoopprijs)',
            ]}
          />
        </div>
        <p>
          Onze calculator toont de <strong>winstmarge op verkoopprijs</strong> — de meest
          gebruikte manier in retail en ondernemerschap.
        </p>
      </section>

      <section>
        <h2>Wanneer gebruik je de marge calculator?</h2>
        <CheckList
          items={[
            'Je koopt producten in en wilt je verkoopprijs bepalen',
            'Je vergelijkt leveranciers op basis van marge',
            'Je onderhandelt over inkoopprijs met een klant of leverancier',
            'Je wilt snel checken of een aanbieding nog winstgevend is',
          ]}
        />
      </section>

      <section>
        <h2>Veelgestelde vragen</h2>
        <FaqList
          className="not-prose mt-8"
          items={MARGE_FAQS.map(({ q, a }) => ({ question: q, answer: a }))}
        />
      </section>

      <section className="not-prose mt-16">
        <h2 className="font-mono text-[11px] font-normal uppercase tracking-[0.18em] text-ember">
          Gerelateerde tools
        </h2>
        <ul className="mt-4 border-t border-ink/10">
          {[
            { label: 'BTW calculator', href: '/tools/btw-calculator' },
            { label: 'Factuur maken', href: '/tools/factuur-maken' },
            { label: 'Uurtarief calculator', href: '/tools/uurtarief-calculator' },
            { label: 'Uurtarief naar inkomen', href: '/tools/uurtarief-naar-inkomen' },
          ].map((link) => (
            <li key={link.href} className="border-b border-ink/10">
              <Link
                href={link.href}
                className="group flex items-center justify-between gap-6 py-4 font-display text-xl leading-snug text-ink transition-colors hover:text-ink-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2"
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

      <Reveal className="not-prose grain relative isolate mt-20 overflow-hidden rounded-2xl border border-ink/[0.08] bg-paper px-6 py-12 text-center shadow-paper sm:px-12 sm:py-14">
        <div className="bg-ledger mask-fade-y pointer-events-none absolute inset-0 -z-10" aria-hidden />
        <h2 className="mx-auto max-w-[22ch] font-display text-[1.9rem] font-normal leading-[1.1] tracking-[-0.03em] text-ink sm:text-[2.4rem]">
          Bereken direct je winst en winstmarge
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-ink-500">
          Gratis online tool. Vul inkoop- en verkoopprijs in en zie direct het resultaat.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href={toolHref} className={`${btn.primary} w-full sm:w-auto`}>
            Open marge calculator
            <ArrowIcon />
          </Link>
          <Link href="/tools/factuur-maken" className={`${btn.secondary} w-full sm:w-auto`}>
            Maak factuur
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
