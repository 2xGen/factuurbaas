import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import {
  FACTUURNUMMER_FAQS,
  FACTUURNUMMER_FORMAT_EXAMPLES,
} from '@/lib/factuurnummerGenerator';

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
                  className={`px-4 py-3 ${i === 1 ? 'font-mono font-medium text-slate-800' : i === 0 ? 'font-medium text-slate-700' : 'text-slate-600'}`}
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

export default function FactuurnummerGeneratorSeoContent({
  toolHref = '/tools/factuurnummer-generator/maken',
}) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="space-y-14 sm:space-y-16">
      <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <p className="text-sm font-semibold text-deep-blue">Direct verder?</p>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
          Genereer een nummer en gebruik het meteen in de gratis factuur maker.
        </p>
        <Link
          href={toolHref}
          className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-warm-orange hover:underline"
        >
          <ArrowRight className="h-3.5 w-3.5" />
          Open factuurnummer generator
        </Link>
      </div>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Wat is een factuurnummer en waarom is het verplicht?
        </h2>
        <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
          <p>
            Elke factuur die je als ondernemer verstuurt, moet een <strong>uniek factuurnummer</strong>{' '}
            hebben. Dit is een wettelijke eis van de Belastingdienst. Het nummer helpt jou, je klant
            en de fiscus om facturen te herkennen en je administratie te controleren.
          </p>
          <p>
            Zoek je op &quot;factuurnummer maken&quot; of &quot;factuurnummer voorbeeld&quot;, dan wil
            je meestal snel een correct nummer voor je volgende factuur. Met onze gratis generator
            kies je jaar, voorvoegsel en startnummer — en kopieer je het resultaat direct naar je
            factuur.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Waarom een goed factuurnummer belangrijk is
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Een logische nummering houdt je administratie overzichtelijk en voorkomt fouten bij je
          boekhouding of btw-aangifte.
        </p>
        <ul className="mt-6 space-y-3">
          {[
            'Elke factuur is uniek en traceerbaar',
            'Je ziet in één oogopslag welk jaar en welk volgnummer het is',
            'Klanten en boekhouders herkennen professionele nummering',
            'Je voorkomt dubbele facturatie door verwarring met nummers',
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
          Veelgebruikte factuurnummer formaten
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Er is geen enkel verplicht formaat, zolang nummers uniek en opeenvolgend zijn. Dit zijn
          populaire opbouwvormen onder zzp&apos;ers en mkb:
        </p>
        <CalcTable
          headers={['Type', 'Voorbeeld', 'Wanneer gebruiken']}
          rows={FACTUURNUMMER_FORMAT_EXAMPLES.map(([type, example, when]) => [
            type,
            example.replace('2026', String(currentYear)),
            when,
          ])}
        />
        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
          <p className="font-semibold text-deep-blue">Snelle voorbeelden voor {currentYear}</p>
          <ul className="mt-4 space-y-2 font-mono text-sm text-slate-700 sm:text-base">
            <li>{currentYear}-001</li>
            <li>FACT-{currentYear}-001</li>
            <li>INV-{currentYear}-001</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Hoe maak je een factuurnummer met deze tool?
        </h2>
        <ol className="mt-6 space-y-6">
          {[
            {
              title: '1. Kies het jaar',
              text: 'Meestal het jaar waarin je de factuur verstuurt, bijvoorbeeld 2026.',
            },
            {
              title: '2. Voeg een voorvoegsel toe (optioneel)',
              text: 'FACT, INV of laat leeg voor alleen jaar-nummer.',
            },
            {
              title: '3. Vul je startnummer in',
              text: 'Bij je eerste factuur van het jaar vaak 001. Bij je tiende factuur: 010.',
            },
            {
              title: '4. Kopieer of maak direct een factuur',
              text: 'Gebruik het nummer in je factuur maker — wij vullen het automatisch voor je in.',
            },
          ].map((step) => (
            <li key={step.title}>
              <h3 className="font-semibold text-deep-blue">{step.title}</h3>
              <p className="mt-2 text-slate-600">{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-6">
          <Button asChild size="lg" className="rounded-xl px-8">
            <Link href={toolHref}>
              Open generator
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Regels voor factuurnummering als zzp&apos;er
        </h2>
        <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
          <p>
            Houd je aan deze basisregels om problemen met je administratie te voorkomen:
          </p>
          <ul className="space-y-2">
            {[
              'Nummering moet uniek zijn — nooit hetzelfde nummer twee keer gebruiken',
              'Nummering moet opeenvolgend zijn — vermijd gaten waar mogelijk',
              'Het nummer hoort op elke factuur vermeld te staan',
              'Bewaar een overzicht van uitgegeven nummers in je administratie',
            ].map((rule) => (
              <li key={rule} className="flex gap-2.5">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-warm-orange" />
                <span>{rule}</span>
              </li>
            ))}
          </ul>
          <p>
            Meer over verplichte factuurgegevens lees je in ons artikel over{' '}
            <Link href="/blogs/factuur-maken-zzp" className="text-warm-orange hover:underline">
              factuur maken als zzp&apos;er
            </Link>
            .
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Veelgestelde vragen
        </h2>
        <div className="mt-6 space-y-4">
          {FACTUURNUMMER_FAQS.map(({ q, a }) => (
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
          Genereer je factuurnummer en maak direct een factuur
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-slate-600 sm:text-base">
          Gratis, zonder account. Kopieer je nummer of ga direct naar de factuur maker.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="rounded-xl px-8">
            <Link href={toolHref}>
              Open generator
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
