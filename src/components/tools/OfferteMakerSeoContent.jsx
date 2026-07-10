import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import {
  OFFERTE_COMPARISON,
  OFFERTE_FAQS,
  OFFERTE_RELATED,
} from '@/lib/offerteLanding';
import { formatQuoteMoney } from '@/lib/quoteUtils';

function ComparisonTable({ comparison }) {
  return (
    <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full min-w-[320px] text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            {comparison.headers.map((header) => (
              <th key={header} className="px-4 py-3 font-semibold text-deep-blue">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {comparison.rows.map((row) => (
            <tr key={row[0]} className="border-b border-slate-100 last:border-0">
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

export default function OfferteMakerSeoContent({
  toolHref = '/tools/offerte-maker/maken',
}) {
  return (
    <div className="space-y-14 sm:space-y-16">
      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Wat is een offerte?
        </h2>
        <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
          <p>
            Een offerte is een voorstel waarin je beschrijft welke werkzaamheden je uitvoert,
            tegen welke prijs en onder welke voorwaarden.
          </p>
          <p>
            Een goede offerte helpt ondernemers om duidelijke afspraken te maken met klanten en
            voorkomt discussies achteraf.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Hoe maak je een offerte als zzp&apos;er?
        </h2>
        <p className="mt-4 text-slate-600">
          Een professionele offerte bevat meestal:
        </p>
        <ol className="mt-6 space-y-4">
          {[
            {
              title: 'Bedrijfsgegevens',
              text: 'Vermeld je naam, adres, KvK-nummer en contactgegevens.',
            },
            {
              title: 'Gegevens van je klant',
              text: 'Voeg de gegevens van de opdrachtgever toe.',
            },
            {
              title: 'Omschrijving van werkzaamheden',
              text: 'Beschrijf duidelijk wat je levert.',
            },
            {
              title: 'Prijs en BTW',
              text: 'Vermeld bedragen exclusief BTW met apart BTW-bedrag.',
            },
            {
              title: 'Geldigheidsduur',
              text: 'Geef aan hoe lang de offerte geldig blijft.',
            },
            {
              title: 'Voorwaarden',
              text: 'Voeg afspraken toe over betaling, levering en wijzigingen.',
            },
          ].map((step, index) => (
            <li key={step.title} className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-700">
                {index + 1}
              </span>
              <div>
                <p className="font-semibold text-deep-blue">{step.title}</p>
                <p className="mt-1 text-sm text-slate-600">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Offerte voorbeeld
        </h2>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold text-slate-500">Voorbeeld offerte website ontwerp</p>
          <p className="mt-1 text-sm text-slate-500">Offerte nummer: OFF-2026-001</p>
          <div className="mt-6 border-t border-slate-100 pt-6">
            <p className="font-semibold text-deep-blue">Website ontwerp</p>
            <p className="text-sm text-slate-600">10 uur × {formatQuoteMoney(75)}</p>
            <div className="mt-4 ml-auto max-w-xs space-y-2 text-sm">
              <div className="flex justify-between text-slate-600">
                <span>Subtotaal</span>
                <span>{formatQuoteMoney(750)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>BTW</span>
                <span>{formatQuoteMoney(157.5)}</span>
              </div>
              <div className="flex justify-between border-t border-slate-200 pt-2 font-bold text-deep-blue">
                <span>Totaal</span>
                <span>{formatQuoteMoney(907.5)}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Offerte maken of factuur maken?
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Een offerte en factuur lijken op elkaar, maar hebben een ander doel. Bij akkoord op de
          offerte kun je de gegevens eenvoudig gebruiken voor een factuur.
        </p>
        <ComparisonTable comparison={OFFERTE_COMPARISON} />
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Veelgestelde vragen
        </h2>
        <div className="mt-6 space-y-4">
          {OFFERTE_FAQS.map(({ q, a }) => (
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
          Meer over offertes en factureren
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {OFFERTE_RELATED.map((article) => (
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

      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:p-8">
        <h2 className="font-heading text-xl font-bold text-deep-blue sm:text-2xl">
          Klaar om je offerte te maken?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-slate-600 sm:text-base">
          Maak gratis een professionele offerte en download direct als PDF. Geen account nodig.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="rounded-xl px-8">
            <Link href={toolHref}>
              Maak gratis offerte
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-xl px-8">
            <Link href="/create-invoice">Maak factuur</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
