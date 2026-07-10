import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import {
  BTW_ADD_TABLE,
  BTW_FAQS,
  BTW_REVERSE_TABLE,
  RELATED_ARTICLES,
  formatEuro,
} from '@/lib/btwCalculator';

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

export default function BtwCalculatorSeoContent({
  toolHref = '/tools/btw-calculator/berekenen',
}) {
  return (
    <div className="space-y-14 sm:space-y-16">
      <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <p className="text-sm font-semibold text-deep-blue">Ook nodig?</p>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
          Maak direct een factuur met de juiste BTW-berekening.
        </p>
        <Link
          href="/tools/factuur-maken"
          className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-warm-orange hover:underline"
        >
          <ArrowRight className="h-3.5 w-3.5" />
          Gratis factuur maken
        </Link>
      </div>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          BTW berekenen voor je factuur
        </h2>
        <div className="mt-4 space-y-4 text-slate-600 leading-relaxed">
          <p>
            Veel ondernemers gebruiken een BTW calculator voordat ze een factuur maken. Op een
            correcte factuur moet duidelijk staan welk BTW-bedrag wordt berekend en welk BTW-tarief
            wordt toegepast.
          </p>
          <p>
            Voor de meeste zzp&apos;ers geldt het standaardtarief van 21% BTW. Voor sommige producten
            en diensten geldt het verlaagde tarief van 9% BTW of het 0% BTW-tarief.
          </p>
          <p>
            Met FactuurBaas bereken je niet alleen BTW, maar maak je daarna direct een professionele
            factuur als PDF.
          </p>
        </div>
        <div className="mt-6">
          <p className="text-sm font-semibold text-deep-blue">Lees ook:</p>
          <ul className="mt-3 space-y-2">
            {RELATED_ARTICLES.slice(0, 2).map((article) => (
              <li key={article.href}>
                <Link
                  href={article.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-warm-orange hover:underline"
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Hoe bereken je BTW?
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">BTW berekenen werkt eenvoudig.</p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h3 className="font-heading text-lg font-bold text-deep-blue">
              BTW toevoegen aan een bedrag
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Wil je BTW bovenop een bedrag zetten?
            </p>
            <p className="mt-4 text-sm font-medium text-slate-700">Formule:</p>
            <p className="mt-1 rounded-lg bg-slate-50 px-3 py-2 font-mono text-sm text-slate-800">
              BTW = bedrag × BTW percentage
            </p>
            <p className="mt-4 text-sm font-medium text-slate-700">Voorbeeld:</p>
            <ul className="mt-2 space-y-1 text-sm text-slate-600">
              <li>€100 × 21% = €21 BTW</li>
              <li>€100 + €21 = €121 inclusief BTW</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h3 className="font-heading text-lg font-bold text-deep-blue">
              BTW uit een bedrag halen
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Heb je een bedrag inclusief BTW en wil je weten hoeveel BTW erin zit?
            </p>
            <p className="mt-4 text-sm font-medium text-slate-700">Formule:</p>
            <p className="mt-1 rounded-lg bg-slate-50 px-3 py-2 font-mono text-sm text-slate-800">
              Bedrag excl. BTW = inclusief bedrag ÷ 1,21
            </p>
            <p className="mt-4 text-sm font-medium text-slate-700">Voorbeeld:</p>
            <ul className="mt-2 space-y-1 text-sm text-slate-600">
              <li>€121 ÷ 1,21 = €100 exclusief BTW</li>
              <li>BTW = €21</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Veelgebruikte BTW berekeningen
        </h2>

        <div className="mt-8 space-y-10">
          <div>
            <h3 className="font-heading text-lg font-semibold text-deep-blue">
              21% BTW berekenen
            </h3>
            <CalcTable
              headers={['Bedrag exclusief BTW', 'BTW', 'Inclusief BTW']}
              rows={BTW_ADD_TABLE.map((row) => [
                formatEuro(row.excl),
                formatEuro(row.btw),
                formatEuro(row.incl),
              ])}
            />
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-deep-blue">BTW terugrekenen</h3>
            <CalcTable
              headers={['Bedrag inclusief BTW', 'Exclusief BTW', 'BTW']}
              rows={BTW_REVERSE_TABLE.map((row) => [
                formatEuro(row.incl),
                formatEuro(row.excl),
                formatEuro(row.btw),
              ])}
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          BTW calculator voor ZZP&apos;ers
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Als zzp&apos;er krijg je regelmatig te maken met BTW. Je berekent BTW bijvoorbeeld bij:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            'het maken van offertes',
            'het versturen van facturen',
            'het bepalen van je uurtarief',
            'het controleren van betalingen',
            'je BTW-aangifte',
          ].map((item) => (
            <li key={item} className="flex gap-2.5 text-slate-600">
              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-warm-orange" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Met een goede berekening voorkom je fouten op je facturen.
        </p>
        <p className="mt-4 font-medium text-deep-blue">
          Wil je daarna direct een correcte factuur maken?{' '}
          <Link href="/tools/factuur-maken" className="text-warm-orange hover:underline">
            Maak gratis een factuur zonder account →
          </Link>
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Veelgestelde vragen
        </h2>
        <div className="mt-6 space-y-4">
          {BTW_FAQS.map(({ q, a }) => (
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
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Meer over BTW en factureren
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {RELATED_ARTICLES.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-warm-orange/30 hover:shadow-md"
            >
              <h3 className="font-semibold text-deep-blue group-hover:text-warm-orange">
                {article.title}
              </h3>
              <p className="mt-2 flex-grow text-sm leading-relaxed text-slate-600">
                {article.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-deep-blue group-hover:text-warm-orange">
                Lees artikel
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-heading text-lg font-bold text-deep-blue">Gerelateerde tools</h2>
        <ul className="mt-4 space-y-2">
          {[
            { label: 'Factuur maken', href: '/tools/factuur-maken' },
            { label: 'Offerte maker', href: '/tools/offerte-maker' },
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
          Klaar om BTW te berekenen?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-slate-600 sm:text-base">
          Open de gratis calculator en bereken direct bedragen inclusief of exclusief BTW.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="rounded-xl px-8">
            <Link href={toolHref}>
              Open BTW calculator
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
