import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import ToolGuideLinks from '@/components/tools/ToolGuideLinks';
import { getGuideLinksByCluster } from '@/lib/guideData';
import {
  BTW_ADD_TABLE,
  BTW_FAQS,
  BTW_REVERSE_TABLE,
  RELATED_ARTICLES,
  formatEuro,
} from '@/lib/btwCalculator';
import { ArrowIcon, btn, Eyebrow, FaqList } from '@/components/site/editorial';

const BTW_GUIDES = getGuideLinksByCluster('btw');

const PROSE =
  'article-body prose prose-lg max-w-none prose-p:leading-[1.75] prose-h2:text-[1.85rem] sm:prose-h2:text-[2.15rem] prose-h3:text-[1.35rem] [&>section:first-child>h2:first-child]:mt-0';

const ARROW_LINK = `${btn.link} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2`;

const SMALL_HEADING =
  'font-display text-[1.6rem] font-normal leading-[1.15] tracking-[-0.02em] text-ink sm:text-[1.9rem]';

function CalcTable({ headers, rows }) {
  return (
    <div className="not-prose mt-5 overflow-x-auto rounded-2xl border border-ink/[0.08] bg-white">
      <table className="w-full min-w-[280px] text-left text-sm tabular-nums sm:text-[15px]">
        <thead>
          <tr className="border-b border-ink/15">
            {headers.map((header) => (
              <th
                key={header}
                className="px-5 py-3.5 font-mono text-[11px] font-normal uppercase tracking-[0.14em] text-ink-400"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.join('-')} className="border-b border-ink/[0.07] last:border-0">
              {row.map((cell, i) => (
                <td
                  key={`${row[0]}-${i}`}
                  className={`px-5 py-3 ${i === 0 ? 'font-medium text-ink' : 'text-ink-500'}`}
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

function FormulaCard({ title, question, formula, examples }) {
  return (
    <div className="flex flex-col rounded-2xl border border-ink/[0.08] bg-white p-6 shadow-paper sm:p-7">
      <h3 className="font-display text-[1.35rem] font-normal leading-tight tracking-[-0.015em] text-ink">
        {title}
      </h3>
      <p className="mt-3 text-[15px] leading-relaxed text-ink-500">{question}</p>
      <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-ember">Formule:</p>
      <p className="mt-2 rounded-xl border border-ink/10 bg-paper px-4 py-3 font-mono text-[13px] text-ink">
        {formula}
      </p>
      <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-ember">Voorbeeld:</p>
      <ul className="mt-2 border-t border-ink/10 text-[15px] tabular-nums text-ink-700">
        {examples.map((example) => (
          <li key={example} className="border-b border-ink/10 py-2.5">
            {example}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function BtwCalculatorSeoContent({
  toolHref = '/tools/btw-calculator/berekenen',
}) {
  return (
    <div className={PROSE}>
      <div className="not-prose flex flex-col gap-4 rounded-2xl border border-ink/[0.08] bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
        <div>
          <Eyebrow>Ook nodig?</Eyebrow>
          <p className="mt-2 text-[15px] leading-relaxed text-ink-700 sm:text-base">
            Maak direct een factuur met de juiste BTW-berekening.
          </p>
        </div>
        <Link href="/tools/factuur-maken" className={`${ARROW_LINK} shrink-0`}>
          <ArrowRight className="h-4 w-4 text-ember" aria-hidden />
          Gratis factuur maken
        </Link>
      </div>

      <section>
        <h2>BTW berekenen voor je factuur</h2>
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
        <div className="not-prose mt-8">
          <Eyebrow tone="muted">Lees ook:</Eyebrow>
          <ul className="mt-3 border-t border-ink/10">
            {BTW_GUIDES.slice(0, 3).map((guide) => (
              <li key={guide.href} className="border-b border-ink/10">
                <Link
                  href={guide.href}
                  className="group flex items-center justify-between gap-4 py-3.5 text-[15px] text-ink transition-colors hover:text-ember-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
                >
                  {guide.title}
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-ember transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <h2>Hoe bereken je BTW?</h2>
        <p>BTW berekenen werkt eenvoudig.</p>
        <div className="not-prose mt-8 grid gap-4 md:grid-cols-2 md:gap-5">
          <FormulaCard
            title="BTW toevoegen aan een bedrag"
            question="Wil je BTW bovenop een bedrag zetten?"
            formula="BTW = bedrag × BTW percentage"
            examples={['€100 × 21% = €21 BTW', '€100 + €21 = €121 inclusief BTW']}
          />
          <FormulaCard
            title="BTW uit een bedrag halen"
            question="Heb je een bedrag inclusief BTW en wil je weten hoeveel BTW erin zit?"
            formula="Bedrag excl. BTW = inclusief bedrag ÷ 1,21"
            examples={['€121 ÷ 1,21 = €100 exclusief BTW', 'BTW = €21']}
          />
        </div>
      </section>

      <section>
        <h2>Veelgebruikte BTW berekeningen</h2>
        <h3>21% BTW berekenen</h3>
        <CalcTable
          headers={['Bedrag exclusief BTW', 'BTW', 'Inclusief BTW']}
          rows={BTW_ADD_TABLE.map((row) => [
            formatEuro(row.excl),
            formatEuro(row.btw),
            formatEuro(row.incl),
          ])}
        />
        <h3>BTW terugrekenen</h3>
        <CalcTable
          headers={['Bedrag inclusief BTW', 'Exclusief BTW', 'BTW']}
          rows={BTW_REVERSE_TABLE.map((row) => [
            formatEuro(row.incl),
            formatEuro(row.excl),
            formatEuro(row.btw),
          ])}
        />
      </section>

      <section>
        <h2>BTW calculator voor ZZP&apos;ers</h2>
        <p>
          Als zzp&apos;er krijg je regelmatig te maken met BTW. Je berekent BTW bijvoorbeeld bij:
        </p>
        <ul>
          {[
            'het maken van offertes',
            'het versturen van facturen',
            'het bepalen van je uurtarief',
            'het controleren van betalingen',
            'je BTW-aangifte',
          ].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>Met een goede berekening voorkom je fouten op je facturen.</p>
        <p className="font-medium text-ink">
          Wil je daarna direct een correcte factuur maken?{' '}
          <Link href="/tools/factuur-maken">Maak gratis een factuur zonder account →</Link>
        </p>
      </section>

      <section>
        <h2>Veelgestelde vragen</h2>
        <FaqList
          className="not-prose mt-8"
          items={BTW_FAQS.map(({ q, a }) => ({ question: q, answer: a }))}
        />
      </section>

      <div className="not-prose mt-20">
        <ToolGuideLinks
          guides={BTW_GUIDES}
          title="Gidsen over BTW"
          viewAllHref="/blogs?pillar=btw-belasting"
          viewAllLabel="Alle BTW-gidsen"
        />
      </div>

      <section className="not-prose mt-20">
        <h2 className="border-b border-ink/10 pb-6 font-display text-[1.85rem] font-normal leading-[1.1] tracking-[-0.025em] text-ink sm:text-[2.15rem]">
          Meer artikelen over BTW en factureren
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {RELATED_ARTICLES.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="group flex h-full flex-col rounded-2xl border border-ink/[0.08] bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-ink/15 hover:shadow-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2"
            >
              <h3 className="font-display text-[1.3rem] font-normal leading-[1.2] tracking-[-0.015em] text-ink">
                {article.title}
              </h3>
              <p className="mt-3 flex-grow text-sm leading-relaxed text-ink-500">
                {article.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 border-t border-ink/10 pt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-700">
                Lees artikel
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
            { label: 'Factuur maken', href: '/tools/factuur-maken' },
            { label: 'Offerte maker', href: '/tools/offerte-maker' },
          ].map((link) => (
            <li key={link.href} className="border-b border-ink/10">
              <Link
                href={link.href}
                className="group flex items-center justify-between gap-4 py-4 text-[15px] text-ink transition-colors hover:text-ember-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
              >
                {link.label}
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 text-ember transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="grain not-prose relative mt-16 overflow-hidden rounded-2xl border border-ink/[0.08] bg-paper p-6 text-center sm:p-10">
        <h2 className={`${SMALL_HEADING} mx-auto max-w-[22ch]`}>Klaar om BTW te berekenen?</h2>
        <p className="mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-ink-500 sm:text-base">
          Open de gratis calculator en bereken direct bedragen inclusief of exclusief BTW.
        </p>
        <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Link href={toolHref} className={btn.primary}>
            Open BTW calculator
            <ArrowIcon />
          </Link>
          <Link href="/tools/factuur-maken" className={btn.secondary}>
            Maak factuur
          </Link>
        </div>
      </div>
    </div>
  );
}
