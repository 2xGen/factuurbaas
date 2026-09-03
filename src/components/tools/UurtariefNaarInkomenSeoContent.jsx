import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import {
  UURTARIEF_NAAR_INKOMEN_FAQS,
  INCOME_RATE_EXAMPLES,
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
      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Hoeveel verdien je met €75 per uur?
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Een uurtarief zegt op zichzelf nog niet hoeveel je per maand verdient. Dat hangt vooral af
          van hoeveel uren je daadwerkelijk aan klanten kunt factureren.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">Stel dat je:</p>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li>€75 per uur rekent;</li>
          <li>120 uur per maand factureert;</li>
          <li>€500 per maand aan zakelijke kosten hebt.</li>
        </ul>
        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
          <p className="text-sm font-medium text-deep-blue sm:text-base">
            €75 × 120 uur = <strong>€9.000 omzet per maand</strong>
          </p>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            Na €500 aan zakelijke kosten blijft er <strong>€8.500 winst vóór belasting</strong>.
          </p>
        </div>
        <p className="mt-4 leading-relaxed text-slate-600">
          Je uiteindelijke netto-inkomen ligt lager, omdat je daar nog belasting en eventuele andere
          persoonlijke lasten vanaf moet trekken.
        </p>
        <div className="mt-6">
          <Button asChild size="lg" className="rounded-xl px-8">
            <Link href={toolHref}>
              Bereken wat jouw uurtarief oplevert
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Uurtarief berekenen: welke formule gebruik je?
        </h2>
        <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
          <p>Je maandelijkse omzet berekenen is eenvoudig:</p>
          <p className="rounded-lg bg-slate-50 px-4 py-3 font-mono text-sm text-slate-800">
            Uurtarief × factureerbare uren = omzet
          </p>
          <p>
            Voorbeeld: <strong>€75 × 120 uur = €9.000 omzet</strong>
          </p>
          <p>
            Wil je ook een eenvoudige schatting van je winst maken? Trek dan je zakelijke kosten van
            je omzet af:
          </p>
          <p className="rounded-lg bg-slate-50 px-4 py-3 font-mono text-sm text-slate-800">
            Omzet − zakelijke kosten = winst vóór belasting
          </p>
          <p>
            Je moet daarbij wel rekening houden met het verschil tussen{' '}
            <strong>gewerkte uren en factureerbare uren</strong>. Als je bijvoorbeeld 40 uur per week
            werkt, betekent dat niet automatisch dat je 40 uur aan klanten kunt factureren. Je bent
            als zzp&apos;er ook tijd kwijt aan administratie, offertes, acquisitie, marketing en
            andere werkzaamheden.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Hoeveel factureerbare uren per maand?
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Het aantal uren dat je kunt factureren verschilt sterk per zzp&apos;er. Iemand die
          voornamelijk voor één klant werkt, kan een groter deel van zijn werktijd factureren dan
          iemand die veel tijd besteedt aan acquisitie, administratie of voorbereiding.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          Daarom is het verstandiger om met je <strong>werkelijke factureerbare uren</strong> te
          rekenen.
        </p>
        <CalcTable
          headers={['Uurtarief', 'Factureerbare uren', 'Omzet per maand']}
          rows={INCOME_RATE_EXAMPLES}
        />
        <p className="mt-4 leading-relaxed text-slate-600">
          Wil je je eigen situatie berekenen? Vul je uurtarief en het aantal factureerbare uren in
          de calculator in.
        </p>
        <div className="mt-6">
          <Button asChild size="lg" className="rounded-xl px-8">
            <Link href={toolHref}>
              Bereken je maandelijkse omzet
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Wat houd je over van je uurtarief?
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Je uurtarief is niet hetzelfde als wat je uiteindelijk privé overhoudt. Van je omzet
          kunnen bijvoorbeeld nog zakelijke kosten afgaan, zoals:
        </p>
        <ul className="mt-4 space-y-2 text-slate-600">
          <li>software;</li>
          <li>verzekeringen;</li>
          <li>vervoer;</li>
          <li>apparatuur;</li>
          <li>telefoon en internet;</li>
          <li>kantoor- of werkruimte;</li>
          <li>andere zakelijke kosten.</li>
        </ul>
        <p className="mt-4 leading-relaxed text-slate-600">
          Daarna krijg je te maken met belastingen en eventuele andere premies. Daarom is €75 per
          uur <strong>niet hetzelfde als €75 netto per uur</strong>.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          De calculator op deze pagina helpt je om je omzet en een eenvoudige winstinschatting te
          berekenen. Voor een exacte berekening van je netto-inkomen moet je rekening houden met je
          volledige persoonlijke en fiscale situatie. Meer over belasting reserveren:{' '}
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
          Voorbeelden: wat levert een uurtarief op?
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            {
              title: '€50 per uur',
              omzet: '€50 × 100 = €5.000 omzet',
              winst: 'Bij €500 zakelijke kosten blijft er €4.500 winst vóór belasting over.',
            },
            {
              title: '€75 per uur',
              omzet: '€75 × 100 = €7.500 omzet',
              winst: 'Bij €500 zakelijke kosten blijft er €7.000 winst vóór belasting over.',
            },
            {
              title: '€100 per uur',
              omzet: '€100 × 100 = €10.000 omzet',
              winst: 'Bij €500 zakelijke kosten blijft er €9.500 winst vóór belasting over.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h3 className="font-semibold text-deep-blue">{item.title}</h3>
              <p className="mt-2 text-sm font-medium text-slate-700">{item.omzet}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.winst}</p>
              <p className="mt-2 text-xs text-slate-500">Bij 100 factureerbare uren per maand</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm leading-relaxed text-slate-600">
          Dit zijn voorbeelden. Je werkelijke resultaat hangt af van je aantal factureerbare uren en
          je zakelijke kosten.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Welk uurtarief heb je nodig?
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Misschien weet je nog niet welk uurtarief je moet vragen. In dat geval werkt de berekening
          andersom: je begint met het inkomen of de omzet die je wilt bereiken en berekent welk
          uurtarief daarbij past.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          Daarvoor kun je de{' '}
          <Link href="/tools/uurtarief-calculator" className="text-warm-orange hover:underline">
            uurtarief calculator
          </Link>{' '}
          gebruiken. Uitgebreide uitleg staat in{' '}
          <Link
            href="/gidsen/welk-uurtarief-moet-ik-rekenen"
            className="text-warm-orange hover:underline"
          >
            welk uurtarief moet ik rekenen?
          </Link>
        </p>
        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
          <p className="font-semibold text-deep-blue">Deze twee tools vullen elkaar aan:</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 sm:text-base">
            <li>
              <strong>Uurtarief naar inkomen:</strong> je weet je uurtarief en wilt weten wat het
              oplevert.
            </li>
            <li>
              <strong>Uurtarief calculator:</strong> je weet wat je wilt verdienen en wilt berekenen
              welk uurtarief daarbij past.
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Bereken je uurtarief in 3 stappen
        </h2>
        <ol className="mt-6 space-y-6">
          <li>
            <h3 className="font-semibold text-deep-blue">1. Kies je uurtarief</h3>
            <p className="mt-2 text-slate-600">
              Vul het bedrag in dat je per uur aan klanten rekent, bijvoorbeeld €75.
            </p>
          </li>
          <li>
            <h3 className="font-semibold text-deep-blue">2. Vul je factureerbare uren in</h3>
            <p className="mt-2 text-slate-600">
              Geef aan hoeveel uren je gemiddeld per maand daadwerkelijk aan klanten factureert.
            </p>
          </li>
          <li>
            <h3 className="font-semibold text-deep-blue">3. Voeg je zakelijke kosten toe</h3>
            <p className="mt-2 text-slate-600">
              Je kunt je maandelijkse zakelijke kosten invullen om ook een eenvoudige schatting van
              je winst te krijgen.
            </p>
          </li>
        </ol>
        <ul className="mt-6 space-y-2">
          {['Maandelijkse omzet', 'Zakelijke kosten', 'Geschatte winst vóór belasting'].map(
            (item) => (
              <li key={item} className="flex gap-2.5 text-slate-600">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-warm-orange" />
                <span>{item}</span>
              </li>
            )
          )}
        </ul>
        <div className="mt-6">
          <Button asChild size="lg" className="rounded-xl px-8">
            <Link href={toolHref}>
              Bereken je resultaat
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Wanneer is deze calculator handig?
        </h2>
        <ul className="mt-6 space-y-3">
          {[
            'wilt weten wat een uurtarief van €50, €75 of €100 oplevert;',
            'een nieuw uurtarief overweegt;',
            'wilt berekenen hoeveel omzet je per maand kunt maken;',
            "je inkomsten als zzp'er wilt plannen;",
            'fulltime en parttime werken wilt vergelijken;',
            'wilt zien hoeveel factureerbare uren je nodig hebt voor een bepaalde omzet.',
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
          Veelgestelde vragen over uurtarief berekenen
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
            {
              label: 'Uurtarief calculator',
              href: '/tools/uurtarief-calculator',
              extra: ' – bereken welk uurtarief je nodig hebt.',
            },
            {
              label: 'Offerte maker',
              href: '/tools/offerte-maker',
              extra: ' – maak een professionele offerte.',
            },
            {
              label: 'Factuur maken',
              href: '/tools/factuur-maken',
              extra: ' – maak gratis een factuur.',
            },
            {
              label: 'BTW calculator',
              href: '/tools/btw-calculator',
              extra: ' – bereken btw over een bedrag.',
            },
          ].map((link) => (
            <li key={link.href} className="text-sm text-slate-600">
              <Link
                href={link.href}
                className="inline-flex items-center gap-2 font-medium text-warm-orange hover:underline"
              >
                <ArrowRight className="h-3.5 w-3.5" />
                {link.label}
              </Link>
              {link.extra}
            </li>
          ))}
        </ul>
      </section>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:p-8">
        <h2 className="font-heading text-xl font-bold text-deep-blue sm:text-2xl">
          Bereken wat jouw uurtarief oplevert
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-slate-600 sm:text-base">
          Vul je uurtarief, factureerbare uren en eventuele zakelijke kosten in en bereken direct je
          omzet en geschatte winst vóór belasting.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="rounded-xl px-8">
            <Link href={toolHref}>
              Bereken je uurtarief naar omzet
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
