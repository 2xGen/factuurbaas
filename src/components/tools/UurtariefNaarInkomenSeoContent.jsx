import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import {
  UURTARIEF_NAAR_INKOMEN_FAQS,
  INCOME_RATE_EXAMPLES,
  formatEuro,
} from '@/lib/uurtariefNaarInkomen';

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

export default function UurtariefNaarInkomenSeoContent({
  toolHref = '/tools/uurtarief-naar-inkomen/berekenen',
}) {
  return (
    <div className="space-y-14 sm:space-y-16">
      <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <p className="text-sm font-semibold text-deep-blue">Andersom berekenen?</p>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
          Weet je nog niet welk uurtarief je nodig hebt? Gebruik dan de uurtarief calculator op basis
          van je gewenste inkomen.
        </p>
        <Link
          href="/tools/uurtarief-calculator"
          className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-warm-orange hover:underline"
        >
          <ArrowRight className="h-3.5 w-3.5" />
          Uurtarief calculator
        </Link>
      </div>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Hoeveel verdien je met €75 per uur?
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Een veelgestelde vraag onder zzp&apos;ers: &quot;Als ik €75 per uur vraag, wat verdien ik
          dan per maand?&quot; Het antwoord hangt af van hoeveel uren je daadwerkelijk kunt
          factureren.
        </p>
        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
          <p className="font-semibold text-deep-blue">Rekenvoorbeeld</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-600 sm:text-base">
            <li>Uurtarief: {formatEuro(75)}</li>
            <li>40 uur per week</li>
            <li>160 factureerbare uren per maand</li>
            <li>Zakelijke kosten: {formatEuro(500)}</li>
          </ul>
          <p className="mt-4 text-sm font-medium text-deep-blue sm:text-base">
            Omzet: {formatEuro(75)} × 160 uur = {formatEuro(12000)} per maand
          </p>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            Geschatte winst: {formatEuro(12000)} − {formatEuro(500)} = {formatEuro(11500)} (vóór
            belasting)
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Uurtarief naar maandinkomen berekenen
        </h2>
        <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
          <p>
            Met deze calculator reken je van <strong>uurtarief naar omzet</strong>. Je vult in wat je
            per uur vraagt en hoeveel uren je per maand factureert. Daarna zie je direct je
            maandelijkse omzet en geschatte winst.
          </p>
          <p className="font-medium text-deep-blue">Formule:</p>
          <p className="rounded-lg bg-slate-50 px-4 py-3 font-mono text-sm text-slate-800">
            Maandomzet = uurtarief × factureerbare uren per maand
          </p>
          <p>
            Trek je zakelijke kosten af voor een schatting van je winst. Belasting en premies gaan
            daar nog vanaf — dat is je werkelijke netto-inkomen.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Omzet, winst en inkomen — wat is het verschil?
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Omzet',
              text: 'Alles wat je factureert aan klanten. Dit is je bruto bedrag vóór kosten.',
            },
            {
              title: 'Winst',
              text: 'Omzet minus zakelijke kosten. Nog vóór belasting en premies.',
            },
            {
              title: 'Netto-inkomen',
              text: 'Wat je uiteindelijk overhoudt na kosten, belasting en premies.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h3 className="font-semibold text-deep-blue">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Voorbeelden: uurtarief naar omzet per maand
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Onderstaande tabel laat zien hoeveel omzet verschillende uurtarieven opleveren bij een
          vast aantal factureerbare uren.
        </p>
        <CalcTable
          headers={['Uurtarief', 'Uren per maand', 'Maandomzet']}
          rows={INCOME_RATE_EXAMPLES}
        />
        <div className="mt-6">
          <Button asChild size="lg" className="rounded-xl px-8">
            <Link href={toolHref}>
              Bereken met jouw tarief
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Bereken je omzet als zzp&apos;er in 3 stappen
        </h2>
        <ol className="mt-6 space-y-6">
          <li>
            <h3 className="font-semibold text-deep-blue">1. Vul je uurtarief in</h3>
            <p className="mt-2 text-slate-600">
              Het bedrag dat je per uur aan klanten factureert, bijvoorbeeld {formatEuro(75)}.
            </p>
          </li>
          <li>
            <h3 className="font-semibold text-deep-blue">2. Bepaal je factureerbare uren</h3>
            <p className="mt-2 text-slate-600">
              Hoeveel uren per week werk je, en hoeveel daarvan kun je declareren? Bij 40 uur per
              week en 4 weken per maand reken je met 160 uur — tenzij je tijd kwijt bent aan
              administratie of acquisitie.
            </p>
          </li>
          <li>
            <h3 className="font-semibold text-deep-blue">3. Trek kosten af</h3>
            <p className="mt-2 text-slate-600">
              Vul optioneel je maandelijkse zakelijke kosten in (software, verzekering, vervoer) om
              je geschatte winst te zien.
            </p>
          </li>
        </ol>
        <ul className="mt-6 space-y-2">
          {['Maandelijkse omzet', 'Zakelijke kosten', 'Geschatte winst'].map((item) => (
            <li key={item} className="flex gap-2.5 text-slate-600">
              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-warm-orange" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Wanneer gebruik je deze calculator?
        </h2>
        <ul className="mt-6 space-y-3">
          {[
            'Je overweegt een hoger of lager uurtarief en wilt weten wat dat oplevert',
            'Een klant vraagt je tarief en je wilt inschatten wat een opdracht per maand oplevert',
            'Je plant je financiën en wilt je verwachte omzet berekenen',
            'Je vergelijkt fulltime freelancen met parttime werken',
          ].map((item) => (
            <li key={item} className="flex gap-2.5 text-slate-600">
              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-warm-orange" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm leading-relaxed text-slate-600">
          Meer over belasting reserveren:{' '}
          <Link
            href="/blogs/hoeveel-geld-apart-belasting-zzper"
            className="text-warm-orange hover:underline"
          >
            hoeveel geld apart zetten als zzp&apos;er
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Veelgestelde vragen
        </h2>
        <div className="mt-6 space-y-4">
          {UURTARIEF_NAAR_INKOMEN_FAQS.map(({ q, a }) => (
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
            { label: 'Uurtarief calculator', href: '/tools/uurtarief-calculator' },
            { label: 'Offerte maker', href: '/tools/offerte-maker' },
            { label: 'Factuur maken', href: '/tools/factuur-maken' },
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
          Bereken je inkomen en maak daarna direct een offerte of factuur
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-slate-600 sm:text-base">
          Gratis calculator voor zzp&apos;ers. Geen account nodig.
        </p>
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
