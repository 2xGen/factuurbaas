import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ArrowIcon, btn, FaqList } from '@/components/site/editorial';
import { Reveal } from '@/components/landing/page/motion';
import {
  UURTARIEF_NAAR_INKOMEN_FAQS,
  INCOME_RATE_EXAMPLES,
} from '@/lib/uurtariefNaarInkomen';

const ARTICLE =
  'article-body prose prose-lg mx-auto max-w-3xl prose-p:leading-[1.75] prose-h2:text-[1.85rem] sm:prose-h2:text-[2.15rem] prose-h3:text-[1.35rem] [&>section:first-child>h2]:mt-0';

const STEP_TITLE =
  'font-display text-[1.35rem] font-normal leading-snug tracking-[-0.02em] text-ink';

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

function Formula({ children }) {
  return (
    <p className="not-prose my-6 rounded-xl bg-paper px-5 py-4 font-mono text-[15px] text-ink ring-1 ring-ink/[0.08]">
      {children}
    </p>
  );
}

function Cta({ href, children }) {
  return (
    <div className="not-prose my-8">
      <Link href={href} className={btn.primary}>
        {children}
        <ArrowIcon />
      </Link>
    </div>
  );
}

function List({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function UurtariefNaarInkomenSeoContent({
  toolHref = '/tools/uurtarief-naar-inkomen/berekenen',
}) {
  return (
    <div className={ARTICLE}>
      <section>
        <h2>Hoeveel verdien je met €75 per uur?</h2>
        <p>
          Een uurtarief zegt op zichzelf nog niet hoeveel je per maand verdient. Dat hangt vooral af
          van hoeveel uren je daadwerkelijk aan klanten kunt factureren.
        </p>
        <p>Stel dat je:</p>
        <List
          items={[
            '€75 per uur rekent;',
            '120 uur per maand factureert;',
            '€500 per maand aan zakelijke kosten hebt.',
          ]}
        />
        <div className="not-prose my-8 rounded-2xl border border-ink/[0.08] bg-white p-6 tabular-nums shadow-paper sm:p-8">
          <p className="font-display text-xl leading-snug tracking-[-0.01em] text-ink sm:text-2xl">
            €75 × 120 uur = <strong className="font-normal italic text-ink-700">€9.000 omzet per maand</strong>
          </p>
          <p className="mt-3 border-t border-ink/10 pt-3 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            Na €500 aan zakelijke kosten blijft er{' '}
            <strong className="font-medium text-ink">€8.500 winst vóór belasting</strong>.
          </p>
        </div>
        <p>
          Je uiteindelijke netto-inkomen ligt lager, omdat je daar nog belasting en eventuele andere
          persoonlijke lasten vanaf moet trekken.
        </p>
        <Cta href={toolHref}>Bereken wat jouw uurtarief oplevert</Cta>
      </section>

      <section>
        <h2>Uurtarief berekenen: welke formule gebruik je?</h2>
        <p>Je maandelijkse omzet berekenen is eenvoudig:</p>
        <Formula>Uurtarief × factureerbare uren = omzet</Formula>
        <p>
          Voorbeeld: <strong>€75 × 120 uur = €9.000 omzet</strong>
        </p>
        <p>
          Wil je ook een eenvoudige schatting van je winst maken? Trek dan je zakelijke kosten van
          je omzet af:
        </p>
        <Formula>Omzet − zakelijke kosten = winst vóór belasting</Formula>
        <p>
          Je moet daarbij wel rekening houden met het verschil tussen{' '}
          <strong>gewerkte uren en factureerbare uren</strong>. Als je bijvoorbeeld 40 uur per week
          werkt, betekent dat niet automatisch dat je 40 uur aan klanten kunt factureren. Je bent
          als zzp&apos;er ook tijd kwijt aan administratie, offertes, acquisitie, marketing en
          andere werkzaamheden.
        </p>
      </section>

      <section>
        <h2>Hoeveel factureerbare uren per maand?</h2>
        <p>
          Het aantal uren dat je kunt factureren verschilt sterk per zzp&apos;er. Iemand die
          voornamelijk voor één klant werkt, kan een groter deel van zijn werktijd factureren dan
          iemand die veel tijd besteedt aan acquisitie, administratie of voorbereiding.
        </p>
        <p>
          Daarom is het verstandiger om met je <strong>werkelijke factureerbare uren</strong> te
          rekenen.
        </p>
        <CalcTable
          headers={['Uurtarief', 'Factureerbare uren', 'Omzet per maand']}
          rows={INCOME_RATE_EXAMPLES}
        />
        <p>
          Wil je je eigen situatie berekenen? Vul je uurtarief en het aantal factureerbare uren in
          de calculator in.
        </p>
        <Cta href={toolHref}>Bereken je maandelijkse omzet</Cta>
      </section>

      <section>
        <h2>Wat houd je over van je uurtarief?</h2>
        <p>
          Je uurtarief is niet hetzelfde als wat je uiteindelijk privé overhoudt. Van je omzet
          kunnen bijvoorbeeld nog zakelijke kosten afgaan, zoals:
        </p>
        <List
          items={[
            'software;',
            'verzekeringen;',
            'vervoer;',
            'apparatuur;',
            'telefoon en internet;',
            'kantoor- of werkruimte;',
            'andere zakelijke kosten.',
          ]}
        />
        <p>
          Daarna krijg je te maken met belastingen en eventuele andere premies. Daarom is €75 per
          uur <strong>niet hetzelfde als €75 netto per uur</strong>.
        </p>
        <p>
          De calculator op deze pagina helpt je om je omzet en een eenvoudige winstinschatting te
          berekenen. Voor een exacte berekening van je netto-inkomen moet je rekening houden met je
          volledige persoonlijke en fiscale situatie. Meer over belasting reserveren:{' '}
          <Link href="/blogs/hoeveel-geld-apart-belasting-zzper">
            hoeveel geld apart zetten als zzp&apos;er
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Voorbeelden: wat levert een uurtarief op?</h2>
        <Reveal className="not-prose my-8 grid gap-4 md:grid-cols-3">
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
              className="flex flex-col rounded-2xl border border-ink/[0.08] bg-white p-6 tabular-nums shadow-paper"
            >
              <h3 className="font-display text-[1.6rem] font-normal leading-tight tracking-[-0.02em] text-ink">
                {item.title}
              </h3>
              <p className="mt-3 border-t border-ink/10 pt-3 font-mono text-[13px] text-ink">
                {item.omzet}
              </p>
              <p className="mt-2 flex-grow text-sm leading-relaxed text-ink-500">{item.winst}</p>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-400">
                Bij 100 factureerbare uren per maand
              </p>
            </div>
          ))}
        </Reveal>
        <p className="text-base text-ink-500">
          Dit zijn voorbeelden. Je werkelijke resultaat hangt af van je aantal factureerbare uren en
          je zakelijke kosten.
        </p>
      </section>

      <section>
        <h2>Welk uurtarief heb je nodig?</h2>
        <p>
          Misschien weet je nog niet welk uurtarief je moet vragen. In dat geval werkt de berekening
          andersom: je begint met het inkomen of de omzet die je wilt bereiken en berekent welk
          uurtarief daarbij past.
        </p>
        <p>
          Daarvoor kun je de <Link href="/tools/uurtarief-calculator">uurtarief calculator</Link>{' '}
          gebruiken. Uitgebreide uitleg staat in{' '}
          <Link href="/gidsen/welk-uurtarief-moet-ik-rekenen">welk uurtarief moet ik rekenen?</Link>
        </p>
        <div className="not-prose my-8 rounded-2xl border border-ink/[0.08] bg-paper p-6 sm:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ember">
            Deze twee tools vullen elkaar aan:
          </p>
          <ul className="mt-4 border-t border-ink/10 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            <li className="border-b border-ink/10 py-4">
              <strong className="font-display text-lg font-normal text-ink">Uurtarief naar inkomen:</strong> je weet je uurtarief en wilt weten wat het
              oplevert.
            </li>
            <li className="py-4">
              <strong className="font-display text-lg font-normal text-ink">Uurtarief calculator:</strong> je weet wat je wilt verdienen en wilt berekenen
              welk uurtarief daarbij past.
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Bereken je uurtarief in 3 stappen</h2>
        <ol className="not-prose my-8 border-t border-ink/10">
          <li className="border-b border-ink/10 py-6">
            <h3 className={STEP_TITLE}>
              <span className="mr-1 italic text-ember">1.</span> Kies je uurtarief
            </h3>
            <p className="mt-2 leading-relaxed text-ink-500">
              Vul het bedrag in dat je per uur aan klanten rekent, bijvoorbeeld €75.
            </p>
          </li>
          <li className="border-b border-ink/10 py-6">
            <h3 className={STEP_TITLE}>
              <span className="mr-1 italic text-ember">2.</span> Vul je factureerbare uren in
            </h3>
            <p className="mt-2 leading-relaxed text-ink-500">
              Geef aan hoeveel uren je gemiddeld per maand daadwerkelijk aan klanten factureert.
            </p>
          </li>
          <li className="border-b border-ink/10 py-6">
            <h3 className={STEP_TITLE}>
              <span className="mr-1 italic text-ember">3.</span> Voeg je zakelijke kosten toe
            </h3>
            <p className="mt-2 leading-relaxed text-ink-500">
              Je kunt je maandelijkse zakelijke kosten invullen om ook een eenvoudige schatting van
              je winst te krijgen.
            </p>
          </li>
        </ol>
        <ul className="not-prose my-6 flex flex-wrap gap-2">
          {['Maandelijkse omzet', 'Zakelijke kosten', 'Geschatte winst vóór belasting'].map(
            (item) => (
              <li
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-3.5 py-1.5 text-sm text-ink-700"
              >
                <span className="h-px w-2.5 bg-ember" aria-hidden />
                {item}
              </li>
            )
          )}
        </ul>
        <Cta href={toolHref}>Bereken je resultaat</Cta>
      </section>

      <section>
        <h2>Wanneer is deze calculator handig?</h2>
        <List
          items={[
            'wilt weten wat een uurtarief van €50, €75 of €100 oplevert;',
            'een nieuw uurtarief overweegt;',
            'wilt berekenen hoeveel omzet je per maand kunt maken;',
            "je inkomsten als zzp'er wilt plannen;",
            'fulltime en parttime werken wilt vergelijken;',
            'wilt zien hoeveel factureerbare uren je nodig hebt voor een bepaalde omzet.',
          ]}
        />
      </section>

      <section>
        <h2>Veelgestelde vragen over uurtarief berekenen</h2>
        <FaqList
          className="not-prose mt-8"
          items={UURTARIEF_NAAR_INKOMEN_FAQS.map(({ q, a }) => ({ question: q, answer: a }))}
        />
      </section>

      <section className="not-prose mt-16">
        <h2 className="font-mono text-[11px] font-normal uppercase tracking-[0.18em] text-ember">
          Gerelateerde tools
        </h2>
        <ul className="mt-4 border-t border-ink/10">
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
            <li
              key={link.href}
              className="flex flex-wrap items-baseline gap-x-1.5 gap-y-1 border-b border-ink/10 py-4 text-[15px] text-ink-500"
            >
              <Link
                href={link.href}
                className="group inline-flex items-center gap-1.5 font-display text-xl leading-snug text-ink transition-colors hover:text-ink-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2"
              >
                {link.label}
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 text-ember transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
              {link.extra}
            </li>
          ))}
        </ul>
      </section>

      <Reveal className="not-prose grain relative isolate mt-20 overflow-hidden rounded-2xl border border-ink/[0.08] bg-paper px-6 py-12 text-center shadow-paper sm:px-12 sm:py-14">
        <div className="bg-ledger mask-fade-y pointer-events-none absolute inset-0 -z-10" aria-hidden />
        <h2 className="mx-auto max-w-[22ch] font-display text-[1.9rem] font-normal leading-[1.1] tracking-[-0.03em] text-ink sm:text-[2.4rem]">
          Bereken wat jouw uurtarief oplevert
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-ink-500">
          Vul je uurtarief, factureerbare uren en eventuele zakelijke kosten in en bereken direct je
          omzet en geschatte winst vóór belasting.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href={toolHref} className={`${btn.primary} w-full sm:w-auto`}>
            Bereken je uurtarief naar omzet
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
