import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import {
  BRANCH_RATES_TABLE,
  RELATED_ARTICLES,
  UURTARIEF_FAQS,
  formatEuro,
} from '@/lib/uurtariefCalculator';

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

export default function UurtariefCalculatorSeoContent({
  toolHref = '/tools/uurtarief-calculator/maken',
}) {
  return (
    <div className="space-y-14 sm:space-y-16">
      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Hoe bereken je je uurtarief als zzp&apos;er?
        </h2>
        <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
          <p>
            Je uurtarief hangt niet alleen af van wat je wilt verdienen. Als ondernemer moet je
            rekening houden met kosten, belastingen, vakantiedagen en uren die je niet kunt
            factureren.
          </p>
          <p className="font-medium text-deep-blue">Een eenvoudige berekening:</p>
          <p>
            Uurtarief = benodigde omzet ÷ aantal declarabele uren
          </p>
        </div>

        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
          <p className="font-semibold text-deep-blue">Bijvoorbeeld:</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-600 sm:text-base">
            <li>Gewenst inkomen: {formatEuro(3000)} netto per maand</li>
            <li>Zakelijke kosten: {formatEuro(500)} per maand</li>
            <li>Beschikbare werkuren: 160 uur per maand</li>
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Niet alle uren zijn factureerbaar. Denk aan administratie, acquisitie en vakantie.
          </p>
          <p className="mt-3 text-sm font-medium text-deep-blue sm:text-base">
            Als je 80 uur per maand kunt factureren: {formatEuro(4000)} omzet ÷ 80 uur ={' '}
            {formatEuro(50)} per uur
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Wat heb je nodig om je uurtarief te berekenen?
        </h2>
        <ol className="mt-6 space-y-6">
          <li>
            <h3 className="font-semibold text-deep-blue">1. Gewenst inkomen</h3>
            <p className="mt-2 text-slate-600">
              Bepaal hoeveel je maandelijks wilt overhouden.
            </p>
          </li>
          <li>
            <h3 className="font-semibold text-deep-blue">2. Zakelijke kosten</h3>
            <p className="mt-2 text-slate-600">Denk aan:</p>
            <ul className="mt-3 space-y-2">
              {['software', 'apparatuur', 'verzekeringen', 'kantoorruimte', 'vervoer'].map(
                (item) => (
                  <li key={item} className="flex gap-2.5 text-slate-600">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-warm-orange" />
                    <span>{item}</span>
                  </li>
                )
              )}
            </ul>
          </li>
          <li>
            <h3 className="font-semibold text-deep-blue">3. Declarabele uren</h3>
            <p className="mt-2 text-slate-600">
              Een zzp&apos;er werkt bijvoorbeeld 40 uur per week, maar kan vaak niet alle uren
              factureren.
            </p>
          </li>
        </ol>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Gemiddeld uurtarief zzp&apos;er
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Het gemiddelde uurtarief verschilt sterk per branche en ervaring.
        </p>
        <p className="mt-3 font-medium text-deep-blue">Voorbeelden:</p>
        <CalcTable headers={['Branche', 'Veelvoorkomend uurtarief']} rows={BRANCH_RATES_TABLE} />
        <p className="mt-4 text-slate-600">Gebruik de calculator om je eigen tarief te bepalen.</p>
        <div className="mt-6">
          <Button asChild size="lg" className="rounded-xl px-8">
            <Link href={toolHref}>
              Open uurtarief calculator
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Uurtarief calculator gebruiken voor je offertes en facturen
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Een goed berekend uurtarief helpt je om professionele offertes te maken en voorkomt dat je
          te weinig rekent voor je werk.
        </p>
        <p className="mt-4 font-medium text-deep-blue">
          Met FactuurBaas kun je daarna direct:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            'een offerte maken',
            'je werkzaamheden toevoegen',
            'een factuur maken',
            'PDF downloaden',
          ].map((item) => (
            <li key={item} className="flex gap-2.5 text-slate-600">
              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-warm-orange" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="outline" size="lg" className="rounded-xl px-8">
            <Link href="/tools/offerte-maker">Offerte maker</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-xl px-8">
            <Link href="/tools/factuur-maken">Factuur maken</Link>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Gerelateerde artikelen
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
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
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Veelgestelde vragen
        </h2>
        <div className="mt-6 space-y-4">
          {UURTARIEF_FAQS.map(({ q, a }) => (
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
            { label: 'Offerte maker', href: '/tools/offerte-maker' },
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
          Klaar om je uurtarief te berekenen?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-slate-600 sm:text-base">
          Bereken direct welk tarief past bij jouw situatie.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="rounded-xl px-8">
            <Link href={toolHref}>
              Open uurtarief calculator
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-xl px-8">
            <Link href="/tools/factuur-maken">Maak gratis factuur</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
