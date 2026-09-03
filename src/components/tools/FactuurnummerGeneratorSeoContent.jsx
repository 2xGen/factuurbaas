import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
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
  const nextYear = currentYear + 1;

  return (
    <div className="space-y-14 sm:space-y-16">
      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Wat is een factuurnummer?
        </h2>
        <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
          <p>
            Een factuurnummer is een uniek identificatienummer voor een factuur. Je gebruikt het
            nummer om facturen terug te vinden en je administratie overzichtelijk te houden.
          </p>
          <p>
            Bijvoorbeeld: <strong className="font-mono text-deep-blue">FACT-{currentYear}-001</strong>
          </p>
          <p>
            Of eenvoudiger: <strong className="font-mono text-deep-blue">{currentYear}-001</strong>
          </p>
          <p>
            Het belangrijkste is dat je factuurnummering logisch is en dat ieder factuurnummer uniek
            is.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Hoe maak je een factuurnummer?
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Je mag zelf bepalen hoe je je facturen nummert, zolang je nummering aan de
          administratieve eisen voldoet. Een eenvoudige manier is om het jaar en een volgnummer te
          gebruiken:
        </p>
        <ul className="mt-4 space-y-1 font-mono text-sm text-slate-700 sm:text-base">
          <li>{currentYear}-001</li>
          <li>{currentYear}-002</li>
          <li>{currentYear}-003</li>
          <li>{currentYear}-004</li>
        </ul>
        <p className="mt-4 leading-relaxed text-slate-600">
          Je kunt ook een voorvoegsel toevoegen:
        </p>
        <ul className="mt-4 space-y-1 font-mono text-sm text-slate-700 sm:text-base">
          <li>FACT-{currentYear}-001</li>
          <li>FACT-{currentYear}-002</li>
          <li>FACT-{currentYear}-003</li>
        </ul>
        <p className="mt-4 leading-relaxed text-slate-600">
          Zo herken je direct dat het om een factuur gaat. Met de gratis factuurnummer generator van
          FactuurBaas kun je zelf een jaar, voorvoegsel en startnummer kiezen.
        </p>
        <div className="mt-6">
          <Button asChild size="lg" className="rounded-xl px-8">
            <Link href={toolHref}>
              Genereer een factuurnummer
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Factuurnummer voorbeelden
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
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
        <p className="mt-4 leading-relaxed text-slate-600">
          Voor de meeste zzp&apos;ers is een eenvoudige nummering voldoende.
        </p>

        <h3 className="mt-8 font-heading text-xl font-bold text-deep-blue">
          Voorbeeld van een jaarlijkse nummering
        </h3>
        <p className="mt-3 leading-relaxed text-slate-600">
          Je kunt ieder kalenderjaar opnieuw beginnen:
        </p>
        <ul className="mt-3 space-y-1 font-mono text-sm text-slate-700 sm:text-base">
          <li>{currentYear}-001</li>
          <li>{currentYear}-002</li>
          <li>{currentYear}-003</li>
        </ul>
        <p className="mt-4 leading-relaxed text-slate-600">In het volgende jaar:</p>
        <ul className="mt-3 space-y-1 font-mono text-sm text-slate-700 sm:text-base">
          <li>{nextYear}-001</li>
          <li>{nextYear}-002</li>
          <li>{nextYear}-003</li>
        </ul>
        <p className="mt-4 leading-relaxed text-slate-600">Je kunt er ook voor kiezen om door te nummeren:</p>
        <ul className="mt-3 space-y-1 font-mono text-sm text-slate-700 sm:text-base">
          <li>{currentYear}-047</li>
          <li>{currentYear}-048</li>
          <li>{nextYear}-049</li>
        </ul>
        <p className="mt-4 leading-relaxed text-slate-600">
          Beide systemen kunnen overzichtelijk zijn. Kies vooral één systeem dat bij je
          administratie past en gebruik dit consequent.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Welke regels gelden voor factuurnummers?
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Een factuurnummer moet aan een aantal belangrijke voorwaarden voldoen.
        </p>

        <h3 className="mt-8 font-heading text-xl font-bold text-deep-blue">
          Elk factuurnummer moet uniek zijn
        </h3>
        <p className="mt-3 leading-relaxed text-slate-600">
          Gebruik nooit hetzelfde factuurnummer voor twee verschillende facturen. Bijvoorbeeld hetzelfde
          nummer voor klant A én klant B is geen goede nummering. Iedere factuur moet een eigen nummer
          hebben.
        </p>

        <h3 className="mt-8 font-heading text-xl font-bold text-deep-blue">
          De nummering moet een logische opeenvolging vormen
        </h3>
        <p className="mt-3 leading-relaxed text-slate-600">
          Je factuurnummers moeten onderdeel zijn van een opeenvolgende reeks, bijvoorbeeld{' '}
          <span className="font-mono text-deep-blue">
            {currentYear}-001 → {currentYear}-002 → {currentYear}-003
          </span>
          . Je hoeft geen ingewikkeld systeem te bedenken. Een eenvoudige doorlopende nummering is
          vaak het meest praktisch.
        </p>

        <h3 className="mt-8 font-heading text-xl font-bold text-deep-blue">
          Het nummer moet op de factuur staan
        </h3>
        <p className="mt-3 leading-relaxed text-slate-600">
          Het factuurnummer is één van de gegevens die op een correcte factuur moeten worden
          vermeld. Wil je weten welke gegevens nog meer op een factuur horen? Lees{' '}
          <Link href="/blogs/factuur-maken-zzp" className="text-warm-orange hover:underline">
            factuur maken als zzp&apos;er
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Mag je zelf een factuurnummer kiezen?
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Ja. Je bent niet verplicht om bijvoorbeeld {currentYear}-001 te gebruiken. Je kunt zelf een
          systeem kiezen dat past bij je administratie.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            ['001', '002', '003'],
            ['FACT-001', 'FACT-002', 'FACT-003'],
            [`${currentYear}-001`, `${currentYear}-002`, `${currentYear}-003`],
          ].map((group) => (
            <ul
              key={group[0]}
              className="rounded-xl border border-slate-200 bg-white p-4 font-mono text-sm text-slate-700"
            >
              {group.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ))}
        </div>
        <p className="mt-4 leading-relaxed text-slate-600">
          Een jaartal of voorvoegsel kan handig zijn omdat je facturen daardoor makkelijker te
          herkennen zijn.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Mag je letters gebruiken in een factuurnummer?
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Ja, je kunt letters gebruiken in je factuurnummer. Bijvoorbeeld{' '}
          <strong className="font-mono">FACT-{currentYear}-001</strong> of{' '}
          <strong className="font-mono">INV-{currentYear}-001</strong>. Een voorvoegsel zoals FACT of
          INV is niet noodzakelijk, maar kan je administratie overzichtelijker maken.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Wat als je een factuurnummer overslaat?
        </h2>
        <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
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
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Wanneer kun je het beste met 001 beginnen?
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Als je net begint met factureren, is 001 een eenvoudige manier om je eerste factuur te
          nummeren. Bijvoorbeeld <strong className="font-mono">FACT-{currentYear}-001</strong>, daarna{' '}
          <strong className="font-mono">FACT-{currentYear}-002</strong> en{' '}
          <strong className="font-mono">FACT-{currentYear}-003</strong>.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          Het gebruik van drie cijfers zorgt ervoor dat je nummers er netjes uitzien wanneer je veel
          facturen maakt. Je kunt natuurlijk ook gewoon 1, 2, 3 gebruiken.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Factuurnummer automatisch maken
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Wil je niet zelf een nummer bedenken? Met de gratis FactuurBaas factuurnummer generator
          kun je automatisch een nummer samenstellen. Je kiest:
        </p>
        <ol className="mt-6 space-y-3 text-slate-600">
          <li>
            <strong className="text-deep-blue">1. Het jaar</strong>
          </li>
          <li>
            <strong className="text-deep-blue">2. Een eventueel voorvoegsel</strong>
          </li>
          <li>
            <strong className="text-deep-blue">3. Het startnummer</strong>
          </li>
        </ol>
        <p className="mt-4 leading-relaxed text-slate-600">
          Daarna genereert de tool een factuurnummer dat je direct kunt kopiëren of gebruiken bij
          het maken van een factuur. Bijvoorbeeld{' '}
          <strong className="font-mono">FACT-{currentYear}-001</strong>.
        </p>
        <div className="mt-6">
          <Button asChild size="lg" className="rounded-xl px-8">
            <Link href={toolHref}>
              Open de factuurnummer generator
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Factuurnummer en factuur maken
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Heb je je factuurnummer bepaald? Dan kun je direct je factuur maken. Met de{' '}
          <Link href="/tools/factuur-maken" className="text-warm-orange hover:underline">
            gratis factuurmaker
          </Link>{' '}
          van FactuurBaas kun je een factuur online invullen en als PDF downloaden.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Veelgestelde vragen over factuurnummers
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

      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:p-8">
        <h2 className="font-heading text-xl font-bold text-deep-blue sm:text-2xl">
          Genereer je factuurnummer
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-slate-600 sm:text-base">
          Kies je jaar, voorvoegsel en startnummer en genereer direct een nummer voor je volgende
          factuur.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="rounded-xl px-8">
            <Link href={toolHref}>
              Maak gratis een factuurnummer
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-xl px-8">
            <Link href="/tools/factuur-maken">Maak daarna je factuur</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
