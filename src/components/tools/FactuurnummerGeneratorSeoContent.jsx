import Link from 'next/link';
import { ArrowIcon, btn, FaqList } from '@/components/site/editorial';
import { Reveal } from '@/components/landing/page/motion';
import {
  FACTUURNUMMER_FAQS,
  FACTUURNUMMER_FORMAT_EXAMPLES,
} from '@/lib/factuurnummerGenerator';

const ARTICLE =
  'article-body prose prose-lg mx-auto max-w-3xl prose-p:leading-[1.75] prose-h2:text-[1.85rem] sm:prose-h2:text-[2.15rem] prose-h3:text-[1.35rem] [&>section:first-child>h2]:mt-0';

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
                  className={`px-5 py-4 align-top ${i === 1 ? 'whitespace-nowrap font-mono text-sm text-ink' : i === 0 ? 'font-medium text-ink' : 'leading-relaxed text-ink-500'}`}
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

function Series({ items, className = 'my-6 w-fit min-w-[13rem]' }) {
  return (
    <ul
      className={`not-prose flex flex-col divide-y divide-ink/[0.06] rounded-xl border border-ink/[0.08] bg-white font-mono text-[15px] tabular-nums text-ink shadow-paper ${className}`}
    >
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3 px-5 py-2.5">
          <span className="h-px w-2.5 bg-ember" aria-hidden />
          {item}
        </li>
      ))}
    </ul>
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

export default function FactuurnummerGeneratorSeoContent({
  toolHref = '/tools/factuurnummer-generator/maken',
}) {
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;
  const mono = 'font-mono text-[0.92em] font-medium text-ink';

  return (
    <div className={ARTICLE}>
      <section>
        <h2>Wat is een factuurnummer?</h2>
        <p>
          Een factuurnummer is een uniek identificatienummer voor een factuur. Je gebruikt het
          nummer om facturen terug te vinden en je administratie overzichtelijk te houden.
        </p>
        <p>
          Bijvoorbeeld: <strong className={mono}>FACT-{currentYear}-001</strong>
        </p>
        <p>
          Of eenvoudiger: <strong className={mono}>{currentYear}-001</strong>
        </p>
        <p>
          Het belangrijkste is dat je factuurnummering logisch is en dat ieder factuurnummer uniek
          is.
        </p>
      </section>

      <section>
        <h2>Hoe maak je een factuurnummer?</h2>
        <p>
          Je mag zelf bepalen hoe je je facturen nummert, zolang je nummering aan de
          administratieve eisen voldoet. Een eenvoudige manier is om het jaar en een volgnummer te
          gebruiken:
        </p>
        <Series
          items={[
            `${currentYear}-001`,
            `${currentYear}-002`,
            `${currentYear}-003`,
            `${currentYear}-004`,
          ]}
        />
        <p>Je kunt ook een voorvoegsel toevoegen:</p>
        <Series
          items={[`FACT-${currentYear}-001`, `FACT-${currentYear}-002`, `FACT-${currentYear}-003`]}
        />
        <p>
          Zo herken je direct dat het om een factuur gaat. Met de gratis factuurnummer generator van
          FactuurBaas kun je zelf een jaar, voorvoegsel en startnummer kiezen.
        </p>
        <Cta href={toolHref}>Genereer een factuurnummer</Cta>
      </section>

      <section>
        <h2>Factuurnummer voorbeelden</h2>
        <p>
          Er is niet één verplicht formaat voor een factuurnummer. Je kunt verschillende systemen
          gebruiken.
        </p>
        <CalcTable
          headers={['Formaat', 'Voorbeeld', 'Voordeel']}
          rows={FACTUURNUMMER_FORMAT_EXAMPLES.map(([type, example, when]) => [
            type,
            example.replaceAll('2026', String(currentYear)),
            when,
          ])}
        />
        <p>Voor de meeste zzp&apos;ers is een eenvoudige nummering voldoende.</p>

        <h3>Voorbeeld van een jaarlijkse nummering</h3>
        <p>Je kunt ieder kalenderjaar opnieuw beginnen:</p>
        <Series items={[`${currentYear}-001`, `${currentYear}-002`, `${currentYear}-003`]} />
        <p>In het volgende jaar:</p>
        <Series items={[`${nextYear}-001`, `${nextYear}-002`, `${nextYear}-003`]} />
        <p>Je kunt er ook voor kiezen om door te nummeren:</p>
        <Series items={[`${currentYear}-047`, `${currentYear}-048`, `${nextYear}-049`]} />
        <p>
          Beide systemen kunnen overzichtelijk zijn. Kies vooral één systeem dat bij je
          administratie past en gebruik dit consequent.
        </p>
      </section>

      <section>
        <h2>Welke regels gelden voor factuurnummers?</h2>
        <p>Een factuurnummer moet aan een aantal belangrijke voorwaarden voldoen.</p>

        <h3>Elk factuurnummer moet uniek zijn</h3>
        <p>
          Gebruik nooit hetzelfde factuurnummer voor twee verschillende facturen. Bijvoorbeeld hetzelfde
          nummer voor klant A én klant B is geen goede nummering. Iedere factuur moet een eigen nummer
          hebben.
        </p>

        <h3>De nummering moet een logische opeenvolging vormen</h3>
        <p>
          Je factuurnummers moeten onderdeel zijn van een opeenvolgende reeks, bijvoorbeeld{' '}
          <span className="font-mono text-[0.92em] text-ink">
            {currentYear}-001 → {currentYear}-002 → {currentYear}-003
          </span>
          . Je hoeft geen ingewikkeld systeem te bedenken. Een eenvoudige doorlopende nummering is
          vaak het meest praktisch.
        </p>

        <h3>Het nummer moet op de factuur staan</h3>
        <p>
          Het factuurnummer is één van de gegevens die op een correcte factuur moeten worden
          vermeld. Wil je weten welke gegevens nog meer op een factuur horen? Lees{' '}
          <Link href="/blogs/factuur-maken-zzp">factuur maken als zzp&apos;er</Link>.
        </p>
      </section>

      <section>
        <h2>Mag je zelf een factuurnummer kiezen?</h2>
        <p>
          Ja. Je bent niet verplicht om bijvoorbeeld {currentYear}-001 te gebruiken. Je kunt zelf een
          systeem kiezen dat past bij je administratie.
        </p>
        <div className="not-prose my-8 grid gap-4 sm:grid-cols-3">
          {[
            ['001', '002', '003'],
            ['FACT-001', 'FACT-002', 'FACT-003'],
            [`${currentYear}-001`, `${currentYear}-002`, `${currentYear}-003`],
          ].map((group) => (
            <Series key={group[0]} items={group} className="w-full" />
          ))}
        </div>
        <p>
          Een jaartal of voorvoegsel kan handig zijn omdat je facturen daardoor makkelijker te
          herkennen zijn.
        </p>
      </section>

      <section>
        <h2>Mag je letters gebruiken in een factuurnummer?</h2>
        <p>
          Ja, je kunt letters gebruiken in je factuurnummer. Bijvoorbeeld{' '}
          <strong className={mono}>FACT-{currentYear}-001</strong> of{' '}
          <strong className={mono}>INV-{currentYear}-001</strong>. Een voorvoegsel zoals FACT of
          INV is niet noodzakelijk, maar kan je administratie overzichtelijker maken.
        </p>
      </section>

      <section>
        <h2>Wat als je een factuurnummer overslaat?</h2>
        <p>
          Een factuurnummer kan bijvoorbeeld per ongeluk verkeerd worden ingevoerd of een factuur
          kan worden geannuleerd.
        </p>
        <p>
          Een gat in je nummerreeks betekent niet automatisch dat je factuurnummering ongeldig is.
          Het is wel belangrijk dat je administratie duidelijk maakt wat er met een ontbrekend
          nummer is gebeurd.
        </p>
        <p>
          Gebruik daarom geen willekeurige nummers en houd je factuurnummering goed bij. Als je
          een factuur hebt verwijderd of geannuleerd, bewaar dan voldoende administratie om
          achteraf te kunnen verklaren waarom een nummer ontbreekt.
        </p>
      </section>

      <section>
        <h2>Wanneer kun je het beste met 001 beginnen?</h2>
        <p>
          Als je net begint met factureren, is 001 een eenvoudige manier om je eerste factuur te
          nummeren. Bijvoorbeeld <strong className={mono}>FACT-{currentYear}-001</strong>, daarna{' '}
          <strong className={mono}>FACT-{currentYear}-002</strong> en{' '}
          <strong className={mono}>FACT-{currentYear}-003</strong>.
        </p>
        <p>
          Het gebruik van drie cijfers zorgt ervoor dat je nummers er netjes uitzien wanneer je veel
          facturen maakt. Je kunt natuurlijk ook gewoon 1, 2, 3 gebruiken.
        </p>
      </section>

      <section>
        <h2>Factuurnummer automatisch maken</h2>
        <p>
          Wil je niet zelf een nummer bedenken? Met de gratis FactuurBaas factuurnummer generator
          kun je automatisch een nummer samenstellen. Je kiest:
        </p>
        <ol className="not-prose my-8 border-t border-ink/10">
          {[
            ['1.', 'Het jaar'],
            ['2.', 'Een eventueel voorvoegsel'],
            ['3.', 'Het startnummer'],
          ].map(([num, label]) => (
            <li key={label} className="border-b border-ink/10 py-4">
              <strong className="font-display text-xl font-normal tracking-[-0.01em] text-ink">
                <span className="mr-1.5 italic text-ember">{num}</span> {label}
              </strong>
            </li>
          ))}
        </ol>
        <p>
          Daarna genereert de tool een factuurnummer dat je direct kunt kopiëren of gebruiken bij
          het maken van een factuur. Bijvoorbeeld{' '}
          <strong className={mono}>FACT-{currentYear}-001</strong>.
        </p>
        <Cta href={toolHref}>Open de factuurnummer generator</Cta>
      </section>

      <section>
        <h2>Factuurnummer en factuur maken</h2>
        <p>
          Heb je je factuurnummer bepaald? Dan kun je direct je factuur maken. Met de{' '}
          <Link href="/tools/factuur-maken">gratis factuurmaker</Link> van FactuurBaas kun je een
          factuur online invullen en als PDF downloaden.
        </p>
      </section>

      <section>
        <h2>Veelgestelde vragen over factuurnummers</h2>
        <FaqList
          className="not-prose mt-8"
          items={FACTUURNUMMER_FAQS.map(({ q, a }) => ({ question: q, answer: a }))}
        />
      </section>

      <Reveal className="not-prose grain relative isolate mt-20 overflow-hidden rounded-2xl border border-ink/[0.08] bg-paper px-6 py-12 text-center shadow-paper sm:px-12 sm:py-14">
        <div className="bg-ledger mask-fade-y pointer-events-none absolute inset-0 -z-10" aria-hidden />
        <h2 className="mx-auto max-w-[22ch] font-display text-[1.9rem] font-normal leading-[1.1] tracking-[-0.03em] text-ink sm:text-[2.4rem]">
          Genereer je factuurnummer
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-ink-500">
          Kies je jaar, voorvoegsel en startnummer en genereer direct een nummer voor je volgende
          factuur.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href={toolHref} className={`${btn.primary} w-full sm:w-auto`}>
            Maak gratis een factuurnummer
            <ArrowIcon />
          </Link>
          <Link href="/tools/factuur-maken" className={`${btn.secondary} w-full sm:w-auto`}>
            Maak daarna je factuur
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
