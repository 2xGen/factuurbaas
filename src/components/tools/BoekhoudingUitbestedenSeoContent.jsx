import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { FaqList } from '@/components/site/editorial';
import { OUTSOURCE_ARTICLES, OUTSOURCE_FAQS } from '@/lib/boekhoudingUitbestedenCalculator';

const PROSE =
  'article-body prose prose-lg max-w-none prose-p:leading-[1.75] prose-h2:text-[1.85rem] sm:prose-h2:text-[2.15rem] prose-h3:text-[1.35rem] [&>section:first-child>h2:first-child]:mt-0';

const SMALL_HEADING =
  'font-display text-[1.6rem] font-normal leading-[1.15] tracking-[-0.02em] text-ink sm:text-[1.9rem]';

function CalcTable({ headers, rows, align }) {
  return (
    <div className="not-prose mt-5 overflow-x-auto rounded-2xl border border-ink/[0.08] bg-white">
      <table className="w-full min-w-[280px] text-left text-sm tabular-nums sm:text-[15px]">
        <thead>
          <tr className="border-b border-ink/15">
            {headers.map((header, index) => (
              <th
                key={header}
                className={`px-5 py-3.5 font-mono text-[11px] font-normal uppercase tracking-[0.14em] text-ink-400 ${align?.[index] === 'right' ? 'text-right' : ''}`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="border-b border-ink/[0.07] last:border-0">
              {row.map((cell, index) => (
                <td
                  key={`${row[0]}-${index}`}
                  className={`px-5 py-3 ${index === 0 ? 'font-medium text-ink' : 'text-ink-500'} ${align?.[index] === 'right' ? 'text-right' : ''}`}
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

export default function BoekhoudingUitbestedenSeoContent({
  toolHref = '/tools/boekhouding-uitbesteden-calculator/berekenen',
}) {
  return (
    <div className={PROSE}>
      <section>
        <h2>Wat kost zelf je boekhouding doen?</h2>
        <p>
          Als zzp&apos;er kun je je administratie zelf bijhouden. Maar de tijd die je besteedt aan facturen verwerken,
          betalingen controleren en btw-aangiften voorbereiden, kun je niet aan andere werkzaamheden besteden.
        </p>
        <p>Met onze calculator ontdek je:</p>
        <ul>
          <li>Hoeveel uur je maandelijks aan facturen besteedt.</li>
          <li>Wat deze tijd vertegenwoordigt op basis van je uurtarief.</li>
          <li>Wat een boekhouder je naar schatting zou kosten.</li>
          <li>Hoeveel tijd je mogelijk bespaart door uit te besteden.</li>
          <li>Bij welke kosten uitbesteden financieel interessant kan worden.</li>
        </ul>
        <p>
          De berekening telt ook de tijd mee die je zelf nog besteedt aan het aanleveren en controleren van documenten.
          Bespaarde uren hebben alleen financiële waarde als je ze productief kunt inzetten.
        </p>
        <p>
          <Link href={toolHref}>Bereken je administratieve kosten →</Link>
        </p>
      </section>

      <section>
        <h2>Hoe werkt de boekhouding uitbesteden calculator?</h2>
        <h3>1. Vul je aantal facturen in</h3>
        <p>Geef aan hoeveel inkoop- en verkoopfacturen je gemiddeld per maand verwerkt.</p>
        <h3>2. Schat je verwerkingstijd</h3>
        <p>Hoeveel minuten besteed je gemiddeld aan een factuur? Denk aan controleren, registreren en betalingen bijhouden.</p>
        <h3>3. Vul de waarde van je tijd in</h3>
        <p>Gebruik bijvoorbeeld je gebruikelijke uurtarief om de economische waarde van je administratietijd te berekenen.</p>
        <h3>4. Vergelijk met een boekhouder</h3>
        <p>
          Vul de geschatte maandelijkse boekhoudkosten in en hoeveel tijd je zelf nog kwijt verwacht te zijn aan het
          aanleveren en controleren van gegevens.
        </p>
        <p>Je ziet direct het verschil.</p>
      </section>

      <section>
        <h2>Voorbeeld: zelf boekhouden of uitbesteden?</h2>
        <p>Stel dat je als zzp&apos;er maandelijks 50 facturen verwerkt.</p>
        <CalcTable
          headers={['Onderdeel', 'Waarde']}
          align={['left', 'right']}
          rows={[
            ['Facturen per maand', '50'],
            ['Tijd per factuur', '5 minuten'],
            ['Waarde eigen tijd', '€60 per uur'],
            ['Eigen administratietijd', '4,17 uur'],
            ['Berekende tijdswaarde', '€250'],
            ['Geschatte boekhoudkosten', '€125 per maand'],
            ['Resterende eigen tijd bij uitbesteden', '1 uur'],
            ['Totale berekende kosten bij uitbesteden', '€185'],
            ['Potentieel verschil', '€65 per maand'],
          ]}
        />
        <p>In dit voorbeeld vertegenwoordigt uitbesteden een potentieel voordeel van €65 per maand.</p>
        <p>
          Dit is geen gegarandeerde besparing. De berekening houdt rekening met een geschatte waarde van je tijd, niet
          met gegarandeerde extra omzet.
        </p>
        <p>
          <Link href={toolHref}>Bereken jouw situatie →</Link>
        </p>
      </section>

      <section>
        <h2>Wanneer is zelf boekhouden voordeliger?</h2>
        <p>
          Zelf boekhouden kan aantrekkelijk zijn wanneer je weinig facturen hebt, je administratie eenvoudig is en je de
          benodigde kennis hebt.
        </p>
        <p>Bijvoorbeeld als je:</p>
        <ul>
          <li>Slechts enkele facturen per maand verwerkt.</li>
          <li>Weinig verschillende zakelijke kosten hebt.</li>
          <li>Zelf je btw-aangifte kunt voorbereiden.</li>
          <li>Je administratie met geschikte software snel kunt bijhouden.</li>
        </ul>
        <p>Met FactuurBaas kun je gratis verkoopfacturen maken, klantgegevens beheren en betalingsstatussen bijhouden.</p>
        <p>
          <Link href="/create-invoice">Maak gratis een factuur →</Link>
        </p>
      </section>

      <section>
        <h2>Wanneer is een boekhouder uitbesteden voordeliger?</h2>
        <p>
          Uitbesteden kan interessant zijn wanneer je administratie veel tijd kost of wanneer je behoefte hebt aan
          professionele ondersteuning.
        </p>
        <p>Dat geldt bijvoorbeeld als je:</p>
        <ul>
          <li>Veel inkoopfacturen ontvangt.</li>
          <li>Regelmatig vragen hebt over btw.</li>
          <li>Veel tijd kwijt bent aan administratieve controles.</li>
          <li>Je boekhouding steeds uitstelt.</li>
          <li>Meer tijd wilt besteden aan klanten en opdrachten.</li>
        </ul>
        <p>Een boekhouder kan ook helpen bij het voorkomen en corrigeren van administratieve fouten.</p>
        <p>
          <Link href="/boekhouder-vinden">Vind een boekhouder →</Link>
        </p>
      </section>

      <section>
        <h2>Wat kost een boekhouder per maand?</h2>
        <p>
          De kosten hangen af van het aantal transacties, de complexiteit van je administratie en welke werkzaamheden je
          uitbesteedt.
        </p>
        <p>
          Voor een eenvoudige zzp-administratie kun je bijvoorbeeld een rekenbedrag van €50 tot €150 per maand gebruiken.
          Uitgebreidere dienstverlening kan meer kosten.
        </p>
        <p>
          Dit zijn uitsluitend budgetindicaties. De werkelijke kosten hangen af van de offerte en de inbegrepen
          werkzaamheden.
        </p>
        <p>Met onze calculator kun je zelf het maandbedrag aanpassen.</p>
      </section>

      <section>
        <h2>Veelgestelde vragen</h2>
        <FaqList
          className="not-prose mt-8"
          items={OUTSOURCE_FAQS.map(({ q, a }) => ({ question: q, answer: a }))}
        />
      </section>

      <section className="not-prose mt-20">
        <h2 className="border-b border-ink/10 pb-6 font-display text-[1.85rem] font-normal leading-[1.1] tracking-[-0.025em] text-ink sm:text-[2.15rem]">
          Meer over zelf boekhouden en uitbesteden
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {OUTSOURCE_ARTICLES.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="group flex h-full flex-col rounded-2xl border border-ink/[0.08] bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-ink/15 hover:shadow-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2"
            >
              <h3 className="font-display text-[1.3rem] font-normal leading-[1.2] tracking-[-0.015em] text-ink">
                {article.title}
              </h3>
              <p className="mt-3 flex-grow text-sm leading-relaxed text-ink-500">{article.description}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 border-t border-ink/10 pt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-700">
                Lees verder
                <ArrowUpRight
                  className="h-3.5 w-3.5 text-ember transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="not-prose mt-16">
        <h2 className={`${SMALL_HEADING} border-b border-ink/10 pb-5`}>Gerelateerde tools</h2>
        <ul>
          {[
            {
              label: 'Gratis factuur maken',
              detail: 'Maak professionele verkoopfacturen en houd je facturen overzichtelijk bij.',
              href: '/create-invoice',
            },
            {
              label: 'Uurtarief calculator',
              detail: 'Bereken welk uurtarief past bij jouw gewenste inkomen en kosten.',
              href: '/tools/uurtarief-calculator',
            },
          ].map((link) => (
            <li key={link.href} className="border-b border-ink/10">
              <Link
                href={link.href}
                className="group flex items-center justify-between gap-4 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
              >
                <span>
                  <span className="block text-[15px] text-ink transition-colors group-hover:text-ember-600">
                    {link.label}
                  </span>
                  <span className="mt-1 block text-sm text-ink-500">{link.detail}</span>
                </span>
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 text-ember transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
