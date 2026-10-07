import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { ArrowIcon, btn, FaqList } from '@/components/site/editorial';
import { Reveal } from '@/components/landing/page/motion';
import ToolGuideLinks from '@/components/tools/ToolGuideLinks';
import { getGuideLinksByCluster } from '@/lib/guideData';
import {
  BRANCH_RATES_TABLE,
  RELATED_ARTICLES,
  UURTARIEF_FAQS,
  formatEuro,
} from '@/lib/uurtariefCalculator';

const UURTARIEF_GUIDES = getGuideLinksByCluster('uurtarief');

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
                  className={`px-5 py-4 ${i === 0 ? 'font-medium text-ink' : 'whitespace-nowrap text-ink-700'}`}
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

function List({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function UurtariefCalculatorSeoContent({
  toolHref = '/tools/uurtarief-calculator/maken',
}) {
  return (
    <div className={ARTICLE}>
      <section>
        <h2>Hoe bereken je je uurtarief als zzp&apos;er?</h2>
        <p>
          Je uurtarief hangt niet alleen af van wat je wilt verdienen. Als ondernemer moet je
          rekening houden met kosten, belastingen, vakantiedagen en uren die je niet kunt
          factureren.
        </p>
        <p className="font-medium text-ink">Een eenvoudige berekening:</p>
        <p className="not-prose -mt-2 mb-6 rounded-xl bg-paper px-5 py-4 font-mono text-[15px] text-ink ring-1 ring-ink/[0.08]">
          Uurtarief = benodigde omzet ÷ aantal declarabele uren
        </p>

        <div className="not-prose my-8 rounded-2xl border border-ink/[0.08] bg-white p-6 shadow-paper sm:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ember">Bijvoorbeeld:</p>
          <ul className="mt-4 border-t border-ink/10 text-[15px] tabular-nums text-ink-700 sm:text-base">
            <li className="border-b border-ink/[0.06] py-3">
              Gewenst inkomen: {formatEuro(3000)} netto per maand
            </li>
            <li className="border-b border-ink/[0.06] py-3">
              Zakelijke kosten: {formatEuro(500)} per maand
            </li>
            <li className="border-b border-ink/[0.06] py-3">Beschikbare werkuren: 160 uur per maand</li>
          </ul>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            Niet alle uren zijn factureerbaar. Denk aan administratie, acquisitie en vakantie.
          </p>
          <p className="mt-4 border-l-2 border-ember pl-4 font-display text-xl leading-snug tracking-[-0.01em] text-ink tabular-nums">
            Als je 80 uur per maand kunt factureren: {formatEuro(4000)} omzet ÷ 80 uur ={' '}
            {formatEuro(50)} per uur
          </p>
        </div>
      </section>

      <section>
        <h2>Wat heb je nodig om je uurtarief te berekenen?</h2>
        <ol className="not-prose my-8 border-t border-ink/10">
          <li className="border-b border-ink/10 py-6">
            <h3 className={STEP_TITLE}>
              <span className="mr-1 italic text-ember">1.</span> Gewenst inkomen
            </h3>
            <p className="mt-2 leading-relaxed text-ink-500">
              Bepaal hoeveel je maandelijks wilt overhouden.
            </p>
          </li>
          <li className="border-b border-ink/10 py-6">
            <h3 className={STEP_TITLE}>
              <span className="mr-1 italic text-ember">2.</span> Zakelijke kosten
            </h3>
            <p className="mt-2 leading-relaxed text-ink-500">Denk aan:</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {['software', 'apparatuur', 'verzekeringen', 'kantoorruimte', 'vervoer'].map(
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
          </li>
          <li className="border-b border-ink/10 py-6">
            <h3 className={STEP_TITLE}>
              <span className="mr-1 italic text-ember">3.</span> Declarabele uren
            </h3>
            <p className="mt-2 leading-relaxed text-ink-500">
              Een zzp&apos;er werkt bijvoorbeeld 40 uur per week, maar kan vaak niet alle uren
              factureren.
            </p>
          </li>
        </ol>
      </section>

      <section>
        <h2>Gemiddeld uurtarief zzp&apos;er</h2>
        <p>Het gemiddelde uurtarief verschilt sterk per branche en ervaring.</p>
        <p className="font-medium text-ink">Voorbeelden:</p>
        <CalcTable headers={['Branche', 'Veelvoorkomend uurtarief']} rows={BRANCH_RATES_TABLE} />
        <p>Gebruik de calculator om je eigen tarief te bepalen.</p>
        <div className="not-prose my-8">
          <Link href={toolHref} className={btn.primary}>
            Open uurtarief calculator
            <ArrowIcon />
          </Link>
        </div>
      </section>

      <section>
        <h2>Uurtarief calculator gebruiken voor je offertes en facturen</h2>
        <p>
          Een goed berekend uurtarief helpt je om professionele offertes te maken en voorkomt dat je
          te weinig rekent voor je werk.
        </p>
        <p className="font-medium text-ink">Met FactuurBaas kun je daarna direct:</p>
        <List
          items={[
            'een offerte maken',
            'je werkzaamheden toevoegen',
            'een factuur maken',
            'PDF downloaden',
          ]}
        />
        <div className="not-prose my-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/tools/offerte-maker" className={btn.secondary}>
            Offerte maker
          </Link>
          <Link href="/tools/factuur-maken" className={btn.secondary}>
            Factuur maken
          </Link>
        </div>
      </section>

      <div className="not-prose mt-20">
        <ToolGuideLinks
          guides={UURTARIEF_GUIDES}
          title="Gidsen over uurtarief"
          viewAllHref="/blogs?pillar=uurtarief"
          viewAllLabel="Alle uurtarief-gidsen"
        />
      </div>

      <section className="not-prose mt-20">
        <h2 className="font-display text-[1.85rem] font-normal leading-[1.15] tracking-[-0.02em] text-ink sm:text-[2.15rem]">
          Gerelateerde artikelen
        </h2>
        <div className="mt-8 border-t border-ink/10">
          {RELATED_ARTICLES.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="group flex items-start justify-between gap-6 border-b border-ink/10 py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2"
            >
              <div>
                <h3 className="font-display text-xl leading-snug tracking-[-0.01em] text-ink transition-colors group-hover:text-ink-700">
                  {article.title}
                </h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-ink-500">{article.description}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-ink underline decoration-ink/20 underline-offset-[6px] transition-colors group-hover:decoration-ember">
                  Lees artikel
                </span>
              </div>
              <ArrowRight
                className="mt-1.5 h-4 w-4 shrink-0 text-ember transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2>Veelgestelde vragen</h2>
        <FaqList
          className="not-prose mt-8"
          items={UURTARIEF_FAQS.map(({ q, a }) => ({ question: q, answer: a }))}
        />
      </section>

      <section className="not-prose mt-16">
        <h2 className="font-mono text-[11px] font-normal uppercase tracking-[0.18em] text-ember">
          Gerelateerde tools
        </h2>
        <ul className="mt-4 border-t border-ink/10">
          {[
            { label: 'Factuur maken', href: '/tools/factuur-maken' },
            { label: 'Offerte maker', href: '/tools/offerte-maker' },
            { label: 'BTW calculator', href: '/tools/btw-calculator' },
          ].map((link) => (
            <li key={link.href} className="border-b border-ink/10">
              <Link
                href={link.href}
                className="group flex items-center justify-between gap-6 py-4 font-display text-xl leading-snug text-ink transition-colors hover:text-ink-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2"
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

      <Reveal className="not-prose grain relative isolate mt-20 overflow-hidden rounded-2xl border border-ink/[0.08] bg-paper px-6 py-12 text-center shadow-paper sm:px-12 sm:py-14">
        <div className="bg-ledger mask-fade-y pointer-events-none absolute inset-0 -z-10" aria-hidden />
        <h2 className="mx-auto max-w-[22ch] font-display text-[1.9rem] font-normal leading-[1.1] tracking-[-0.03em] text-ink sm:text-[2.4rem]">
          Klaar om je uurtarief te berekenen?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-ink-500">
          Bereken direct welk tarief past bij jouw situatie.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href={toolHref} className={`${btn.primary} w-full sm:w-auto`}>
            Open uurtarief calculator
            <ArrowIcon />
          </Link>
          <Link href="/tools/factuur-maken" className={`${btn.secondary} w-full sm:w-auto`}>
            Maak gratis factuur
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
