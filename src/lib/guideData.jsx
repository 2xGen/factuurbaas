import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { articles } from '@/lib/blogData';

export function GuideToolCta({ href, label = 'Gebruik gratis tool' }) {
  return (
    <div className="my-8 text-center not-prose">
      <Button
        asChild
        className="bg-warm-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg"
      >
        <Link href={href}>{label}</Link>
      </Button>
    </div>
  );
}

function CalculationTable({ rows }) {
  return (
    <div className="my-6 overflow-x-auto not-prose">
      <table className="min-w-full border-collapse border border-slate-200 text-sm">
        <tbody>
          {rows.map(([label, value], index) => (
            <tr key={`${label}-${index}`} className={index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
              <td className="border border-slate-200 px-4 py-2 font-medium text-slate-700">{label}</td>
              <td className="border border-slate-200 px-4 py-2 text-slate-800">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export const guides = [
  {
    slug: 'btw-terugrekenen',
    cluster: 'btw',
    seoTitle: 'Hoe bereken je btw terug? Bereken btw uit een bedrag inclusief btw',
    title: 'Hoe bereken je btw terug? Inclusief btw terugrekenen naar exclusief btw',
    excerpt:
      'Hoe bereken je btw terug uit een bedrag inclusief btw? Leer de formule voor 21% en 9% btw en gebruik gratis de btw calculator van FactuurBaas.',
    keywords:
      'btw terugrekenen, btw uit bedrag halen, inclusief btw omrekenen, btw berekenen inclusief, 21% btw terugrekenen, 9% btw terugrekenen, btw calculator',
    tool: {
      href: '/tools/btw-calculator',
      label: 'Bereken direct btw',
      ctaLabel: 'Open gratis BTW calculator',
    },
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Factuurbaas/Hoe%20bereken%20je%20btw%20terug.jpg',
      alt: 'Hoe bereken je btw terug uit een bedrag inclusief btw?',
    },
    datePublished: '2026-07-15',
    dateModified: '2026-07-15',
    relatedSlugs: ['btw-factuur-zzp', 'factureren-zonder-account'],
    relatedGuideSlugs: ['btw-uit-bedrag-halen', 'inclusief-btw-naar-exclusief-btw', 'verschil-9-en-21-btw', 'welke-btw-rekenen-zzper'],
    faq: [
      {
        question: 'Hoe haal ik 21% btw uit een bedrag?',
        answer:
          'Deel het bedrag inclusief btw door 1,21. Het verschil tussen het totaalbedrag en het bedrag exclusief btw is de btw.',
      },
      {
        question: 'Hoe bereken ik btw terug van €100 inclusief btw?',
        answer:
          'Bij 21% btw: €100 ÷ 1,21 = €82,64 exclusief btw. De btw is €17,36.',
      },
      {
        question: 'Kan ik btw terugvragen als zzp\'er?',
        answer:
          'Als je btw-ondernemer bent, kun je btw op zakelijke kosten meestal terugvragen via je btw-aangifte. Er gelden wel voorwaarden.',
      },
      {
        question: 'Wat is het verschil tussen inclusief en exclusief btw?',
        answer:
          'Een bedrag exclusief btw is het bedrag voordat btw wordt toegevoegd. Een bedrag inclusief btw bevat het btw-bedrag al.',
      },
    ],
    content: (
      <>
        <p>
          Heb je een bedrag <strong>inclusief btw</strong> en wil je weten hoeveel btw daarin zit? Dan moet je de{' '}
          <strong>btw terugrekenen</strong>.
        </p>
        <p>Dit is handig als je bijvoorbeeld:</p>
        <ul>
          <li>een aankoopfactuur controleert</li>
          <li>wilt weten hoeveel btw je kunt terugvragen</li>
          <li>een bedrag exclusief btw nodig hebt</li>
          <li>een offerte of factuur wilt controleren</li>
        </ul>
        <p>
          Met de gratis <Link href="/tools/btw-calculator" className="text-warm-orange hover:underline">BTW calculator</Link> van
          FactuurBaas bereken je direct hoeveel btw in een bedrag zit.
        </p>

        <GuideToolCta href="/tools/btw-calculator" label="Bereken direct btw →" />

        <h2>Btw terugrekenen: de formule</h2>
        <p>Wanneer een bedrag inclusief 21% btw is, deel je het totaalbedrag door 1,21.</p>
        <p>De formule:</p>
        <p>
          <strong>Bedrag exclusief btw = bedrag inclusief btw ÷ 1,21</strong>
        </p>
        <p>De btw bereken je daarna:</p>
        <p>
          <strong>Btw = bedrag inclusief btw - bedrag exclusief btw</strong>
        </p>

        <h2>Voorbeeld: 21% btw terugrekenen</h2>
        <p>Je hebt een factuur van:</p>
        <p>
          <strong>€121 inclusief btw</strong>
        </p>
        <p>Stap 1:</p>
        <p>€121 ÷ 1,21 = <strong>€100 exclusief btw</strong></p>
        <p>Stap 2:</p>
        <p>€121 - €100 = <strong>€21 btw</strong></p>

        <CalculationTable
          rows={[
            ['Bedrag exclusief btw', '€100'],
            ['Btw 21%', '€21'],
            ['Totaal inclusief btw', '€121'],
          ]}
        />

        <h2>Btw terugrekenen bij 9% btw</h2>
        <p>Voor het lage btw-tarief gebruik je een andere factor.</p>
        <p>De formule:</p>
        <p>
          <strong>Bedrag exclusief btw = bedrag inclusief btw ÷ 1,09</strong>
        </p>
        <p>Voorbeeld: een product kost <strong>€109 inclusief 9% btw</strong>.</p>
        <p>Berekening: €109 ÷ 1,09 = <strong>€100 exclusief btw</strong></p>
        <p>Btw: €109 - €100 = <strong>€9</strong></p>

        <CalculationTable
          rows={[
            ['Exclusief btw', '€100'],
            ['Btw 9%', '€9'],
            ['Inclusief btw', '€109'],
          ]}
        />

        <h2>Waarom moet je btw kunnen terugrekenen als ondernemer?</h2>
        <p>Als ondernemer krijg je regelmatig bedragen inclusief btw te zien.</p>

        <h3>Inkoopfacturen</h3>
        <p>
          Een leverancier stuurt een factuur van €605 inclusief btw. Je wilt weten wat de kosten exclusief btw zijn en hoeveel
          btw je mogelijk kunt terugvragen.
        </p>
        <p>
          Berekening: €605 ÷ 1,21 = <strong>€500 exclusief btw</strong>. Btw: <strong>€105</strong>.
        </p>

        <h3>Offertes vergelijken</h3>
        <p>
          Sommige prijzen worden inclusief btw weergegeven, terwijl ondernemers meestal met bedragen exclusief btw rekenen. Door
          btw terug te rekenen kun je verschillende aanbiedingen eerlijk vergelijken.
        </p>

        <h3>Controle van facturen</h3>
        <p>Een fout btw-bedrag op een factuur kan problemen veroorzaken. Controleer daarom:</p>
        <ul>
          <li>klopt het btw-tarief?</li>
          <li>klopt het btw-bedrag?</li>
          <li>klopt het totaalbedrag?</li>
        </ul>
        <p>
          Meer over btw op je factuur lees je in{' '}
          <Link href="/blogs/btw-factuur-zzp" className="text-warm-orange hover:underline">
            Btw op je factuur: zo doe je het goed als zzp&apos;er
          </Link>
          .
        </p>

        <h2>Veelgemaakte fouten bij btw terugrekenen</h2>

        <h3>Fout 1: 21% aftrekken van het totaal</h3>
        <p>Veel mensen doen: €121 - 21% = €95,59. Dit klopt niet.</p>
        <p>
          De btw is namelijk een percentage van het bedrag exclusief btw, niet van het totaalbedrag inclusief btw.
        </p>

        <h3>Fout 2: Het verkeerde btw-tarief gebruiken</h3>
        <ul>
          <li>
            <strong>21% btw</strong> voor het standaardtarief
          </li>
          <li>
            <strong>9% btw</strong> voor bepaalde producten en diensten
          </li>
          <li>
            <strong>0% btw</strong> voor specifieke situaties
          </li>
        </ul>

        <h3>Fout 3: Afrondingen vergeten</h3>
        <p>
          Bij facturen kunnen afrondingsverschillen ontstaan. Rond bedragen daarom altijd correct af op twee decimalen.
        </p>

        <h2>Btw terugrekenen met een calculator</h2>
        <p>Geen zin om zelf formules te gebruiken?</p>
        <p>Met de gratis BTW calculator van FactuurBaas bereken je direct:</p>
        <ul>
          <li>btw uit een inclusief bedrag</li>
          <li>bedragen exclusief btw</li>
          <li>21%, 9% en 0% btw</li>
          <li>totaalbedragen voor facturen</li>
        </ul>

        <GuideToolCta href="/tools/btw-calculator" label="Open gratis BTW calculator →" />

        <h2>Veelgestelde vragen</h2>
        <h3>Hoe haal ik 21% btw uit een bedrag?</h3>
        <p>
          Deel het bedrag inclusief btw door 1,21. Het verschil tussen het totaalbedrag en het bedrag exclusief btw is de btw.
        </p>
        <h3>Hoe bereken ik btw terug van €100 inclusief btw?</h3>
        <p>
          Bij 21% btw: €100 ÷ 1,21 = €82,64 exclusief btw. De btw is €17,36.
        </p>
        <h3>Kan ik btw terugvragen als zzp&apos;er?</h3>
        <p>
          Als je btw-ondernemer bent, kun je btw op zakelijke kosten meestal terugvragen via je btw-aangifte. Er gelden wel
          voorwaarden.
        </p>
        <h3>Wat is het verschil tussen inclusief en exclusief btw?</h3>
        <p>
          Een bedrag exclusief btw is het bedrag voordat btw wordt toegevoegd. Een bedrag inclusief btw bevat het btw-bedrag
          al.
        </p>
      </>
    ),
  },
  {
    slug: 'btw-uit-bedrag-halen',
    cluster: 'btw',
    seoTitle: 'Btw uit een bedrag halen: btw terugrekenen met voorbeelden',
    title: 'Btw uit een bedrag halen: zo reken je btw terug',
    excerpt:
      'Btw uit een bedrag halen? Bereken het btw-bedrag en bedrag exclusief btw vanuit een prijs inclusief btw. Met voorbeelden voor 21% en 9% btw.',
    keywords:
      'btw uit bedrag halen, btw terugrekenen, btw uit inclusief bedrag, inclusief naar exclusief btw, 21% btw terugrekenen, 9% btw terugrekenen, btw calculator',
    tool: {
      href: '/tools/btw-calculator',
      label: 'Bereken direct btw',
      ctaLabel: 'Open gratis BTW calculator',
    },
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Factuurbaas/Btw%20uit%20een%20bedrag%20halen.jpg',
      alt: 'Btw uit een bedrag halen: zo reken je btw terug',
    },
    datePublished: '2026-07-15',
    dateModified: '2026-09-04',
    relatedSlugs: ['btw-factuur-zzp', 'factureren-zonder-account'],
    relatedGuideSlugs: [
      'btw-terugrekenen',
      'inclusief-btw-naar-exclusief-btw',
      'verschil-9-en-21-btw',
      'hoe-rond-je-btw-af',
    ],
    faq: [
      {
        question: 'Hoe haal je btw uit een inclusief bedrag?',
        answer:
          'Bij 21% btw deel je het inclusief-bedrag door 1,21. Bij 9% btw deel je door 1,09. Het verschil tussen het inclusief-bedrag en het bedrag exclusief btw is het btw-bedrag.',
      },
      {
        question: 'Hoeveel btw zit er in €242 inclusief btw?',
        answer: 'Bij 21% btw zit er €42 btw in €242. Het bedrag exclusief btw is €200.',
      },
      {
        question: 'Hoe reken je €100 inclusief btw terug?',
        answer:
          'Bij 21% btw: €100 ÷ 1,21 = €82,64 exclusief btw. Het btw-bedrag is dan €17,36.',
      },
      {
        question: 'Hoe reken je btw terug van 9%?',
        answer:
          'Deel het bedrag inclusief 9% btw door 1,09. Het verschil tussen het oorspronkelijke bedrag en het bedrag exclusief btw is de btw.',
      },
      {
        question: 'Is btw uit een bedrag halen hetzelfde als btw terugrekenen?',
        answer:
          'Ja. Met beide termen wordt meestal bedoeld dat je vanuit een bedrag inclusief btw het bedrag exclusief btw en het btw-deel berekent.',
      },
      {
        question: 'Kan ik btw terugvragen over een zakelijke aankoop?',
        answer:
          'Of je btw op een zakelijke aankoop kunt aftrekken, hangt af van je situatie en de voorwaarden voor aftrek van voorbelasting. De berekening van het btw-bedrag betekent niet automatisch dat je dit bedrag ook volledig kunt aftrekken.',
      },
    ],
    content: (
      <>
        <p>
          Heb je een bedrag <strong>inclusief btw</strong> en wil je weten hoeveel btw daarin zit? Dan kun je de btw
          uit het bedrag halen door het inclusief-bedrag terug te rekenen naar het bedrag exclusief btw.
        </p>
        <p>Dit is handig als je bijvoorbeeld:</p>
        <ul>
          <li>een zakelijke bon of inkoopfactuur wilt controleren</li>
          <li>wilt weten hoeveel btw in een inclusief bedrag zit</li>
          <li>een bedrag inclusief btw wilt omrekenen naar exclusief btw</li>
          <li>een factuur wilt controleren</li>
          <li>bedragen inclusief en exclusief btw met elkaar wilt vergelijken</li>
        </ul>
        <p>
          Met de gratis{' '}
          <Link href="/tools/btw-calculator" className="text-warm-orange hover:underline">
            BTW calculator
          </Link>{' '}
          van FactuurBaas kun je dit direct berekenen.
        </p>

        <GuideToolCta href="/tools/btw-calculator" label="Bereken direct btw →" />

        <h2>Hoe haal je btw uit een bedrag?</h2>
        <p>
          Bij een bedrag inclusief <strong>21% btw</strong> bestaat het totaal uit 100% van het bedrag exclusief btw
          plus 21% btw. Het totaal is daardoor 121% van het bedrag exclusief btw.
        </p>
        <p>
          Om het bedrag exclusief btw terug te rekenen, deel je het inclusief-bedrag door <strong>1,21</strong>.
        </p>

        <h3>Bij 21% btw</h3>
        <p>
          <strong>Bedrag exclusief btw = bedrag inclusief btw ÷ 1,21</strong>
        </p>
        <p>Daarna bereken je het btw-bedrag:</p>
        <p>
          <strong>Btw = bedrag inclusief btw − bedrag exclusief btw</strong>
        </p>

        <h2>Voorbeeld: btw uit €242 halen</h2>
        <p>
          Je hebt een zakelijke aankoop van <strong>€242 inclusief 21% btw</strong>.
        </p>
        <p>Eerst bereken je het bedrag exclusief btw:</p>
        <p>
          <strong>€242 ÷ 1,21 = €200</strong>
        </p>
        <p>Daarna bereken je de btw:</p>
        <p>
          <strong>€242 − €200 = €42</strong>
        </p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[280px] text-sm text-slate-700 sm:text-base">
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Exclusief btw</td>
                <td className="px-4 py-3 text-right">€200,00</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Btw 21%</td>
                <td className="px-4 py-3 text-right">€42,00</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-deep-blue">Inclusief btw</td>
                <td className="px-4 py-3 text-right font-semibold text-deep-blue">€242,00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Er zit dus <strong>€42 btw</strong> in een bedrag van €242 inclusief 21% btw.
        </p>

        <h2>Btw uit een bedrag halen bij 9%</h2>
        <p>
          Ook bij 9% btw kun je vanuit een inclusief bedrag terugrekenen. Omdat 100% + 9% = 109%, deel je het
          inclusief-bedrag door <strong>1,09</strong>.
        </p>

        <h3>Voorbeeld: €54,50 inclusief 9% btw</h3>
        <p>
          <strong>€54,50 ÷ 1,09 = €50,00 exclusief btw</strong>
        </p>
        <p>Het btw-bedrag is:</p>
        <p>
          <strong>€54,50 − €50,00 = €4,50</strong>
        </p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[280px] text-sm text-slate-700 sm:text-base">
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Exclusief btw</td>
                <td className="px-4 py-3 text-right">€50,00</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Btw 9%</td>
                <td className="px-4 py-3 text-right">€4,50</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-deep-blue">Inclusief btw</td>
                <td className="px-4 py-3 text-right font-semibold text-deep-blue">€54,50</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Welke factor gebruik je om btw terug te rekenen?</h2>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[280px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Btw-tarief
                </th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">
                  Inclusief bedrag delen door
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3 font-semibold text-deep-blue">21%</td>
                <td className="px-4 py-3 text-right font-semibold">1,21</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3 font-semibold text-deep-blue">9%</td>
                <td className="px-4 py-3 text-right font-semibold">1,09</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-deep-blue">0%</td>
                <td className="px-4 py-3 text-right font-semibold">1,00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Bij 0% btw verandert het bedrag door de btw niet: het bedrag inclusief btw is dan gelijk aan het bedrag
          exclusief btw.
        </p>
        <p>
          Let wel op dat je eerst moet vaststellen <strong>welk btw-tarief op de betreffende levering of dienst van
          toepassing is</strong>. Niet ieder product of iedere dienst valt automatisch onder 21% of 9%.
        </p>

        <h2>Btw terugrekenen: wat is het verschil met btw berekenen?</h2>
        <p>Bij <strong>btw berekenen</strong> begin je meestal met een bedrag exclusief btw.</p>
        <p>Bijvoorbeeld:</p>
        <p>
          <strong>€200 × 21% = €42 btw</strong>
        </p>
        <p>Het bedrag inclusief btw is dan:</p>
        <p>
          <strong>€200 + €42 = €242</strong>
        </p>
        <p>
          Bij <strong>btw terugrekenen</strong> begin je juist met het bedrag inclusief btw:
        </p>
        <p>
          <strong>€242 ÷ 1,21 = €200 exclusief btw</strong>
        </p>
        <p>Daarna:</p>
        <p>
          <strong>€242 − €200 = €42 btw</strong>
        </p>
        <p>Het zijn dus twee kanten van dezelfde berekening.</p>

        <h2>Btw uit een inclusief bedrag berekenen</h2>
        <p>
          Je kunt het btw-bedrag ook rechtstreeks berekenen zonder eerst het bedrag exclusief btw uit te rekenen.
        </p>
        <p>Bij 21% btw is het btw-deel van een inclusief bedrag:</p>
        <p>
          <strong>inclusief bedrag × 21 ÷ 121</strong>
        </p>
        <p>Bij €242:</p>
        <p>
          <strong>€242 × 21 ÷ 121 = €42</strong>
        </p>
        <p>Bij 9% btw:</p>
        <p>
          <strong>inclusief bedrag × 9 ÷ 109</strong>
        </p>
        <p>Bij €54,50:</p>
        <p>
          <strong>€54,50 × 9 ÷ 109 = €4,50</strong>
        </p>
        <p>
          Voor dagelijks gebruik is delen door <strong>1,21</strong> of <strong>1,09</strong> meestal het
          eenvoudigst.
        </p>

        <h2>Waarvoor gebruik je btw terugrekenen?</h2>

        <h3>Een zakelijke aankoop controleren</h3>
        <p>
          Je koopt iets voor <strong>€1.210 inclusief 21% btw</strong>.
        </p>
        <p>Dan is:</p>
        <ul>
          <li>€1.000 exclusief btw</li>
          <li>€210 btw</li>
          <li>€1.210 inclusief btw</li>
        </ul>
        <p>Zo kun je controleren of het btw-bedrag op de factuur logisch is.</p>

        <h3>Prijzen inclusief en exclusief btw vergelijken</h3>
        <p>
          Een leverancier kan een consumentenprijs inclusief btw tonen, terwijl een zakelijke leverancier een prijs
          exclusief btw vermeldt. Door de btw uit het eerste bedrag te halen, kun je de prijzen op dezelfde basis
          vergelijken.
        </p>

        <h3>Een factuur controleren</h3>
        <p>Heb je een factuur met een bedrag inclusief btw? Controleer dan:</p>
        <ol>
          <li>welk btw-tarief van toepassing is;</li>
          <li>of het bedrag inclusief btw klopt;</li>
          <li>hoeveel btw daarin zit;</li>
          <li>of het bedrag exclusief btw klopt.</li>
        </ol>
        <p>
          Bij meerdere btw-tarieven op één factuur moet je de bedragen per tarief afzonderlijk bekijken.
        </p>

        <h2>Btw uit een bedrag halen met de calculator</h2>
        <p>
          Wil je niet zelf delen en aftrekken? Met de{' '}
          <Link href="/tools/btw-calculator" className="text-warm-orange hover:underline">
            BTW calculator van FactuurBaas
          </Link>{' '}
          kun je een bedrag inclusief of exclusief btw direct omrekenen.
        </p>
        <p>Je kunt onder andere berekenen:</p>
        <ul>
          <li>btw uit een inclusief bedrag</li>
          <li>bedrag exclusief btw</li>
          <li>bedrag inclusief btw</li>
          <li>21% btw</li>
          <li>9% btw</li>
          <li>0% btw</li>
        </ul>

        <GuideToolCta href="/tools/btw-calculator" label="Open de gratis BTW calculator →" />

        <h2>Veelgemaakte fouten bij btw terugrekenen</h2>

        <h3>1. 21% van het totaal aftrekken</h3>
        <p>Een veelgemaakte fout is:</p>
        <p>
          <strong>€121 − 21% = €95,59</strong>
        </p>
        <p>Dat is niet de juiste manier om btw uit een inclusief bedrag te halen.</p>
        <p>Bij €121 inclusief 21% btw is het bedrag exclusief btw namelijk:</p>
        <p>
          <strong>€121 ÷ 1,21 = €100</strong>
        </p>
        <p>
          De btw is dus <strong>€21</strong>.
        </p>

        <h3>2. Delen door 21%</h3>
        <p>Een inclusief bedrag deel je niet door 21% om de btw eruit te halen.</p>
        <p>
          Bij 21% btw moet je het inclusief-bedrag delen door <strong>1,21</strong> om het bedrag exclusief btw te
          vinden.
        </p>

        <h3>3. Het verkeerde btw-tarief gebruiken</h3>
        <p>
          Gebruik niet automatisch 21%. Als op de betreffende levering of dienst bijvoorbeeld 9% btw geldt, gebruik
          je <strong>1,09</strong>.
        </p>
        <p>Het juiste tarief hangt af van wat je levert en van de situatie.</p>

        <h3>4. Afrondingsverschillen negeren</h3>
        <p>
          Bij btw-berekeningen kunnen kleine afrondingsverschillen ontstaan. Vooral wanneer je met meerdere
          factuurregels werkt, is het belangrijk om consequent dezelfde afrondingsmethode te gebruiken.
        </p>
        <p>
          Lees ook:{' '}
          <Link href="/gidsen/hoe-rond-je-btw-af" className="text-warm-orange hover:underline">
            Btw afronden: zo rond je btw correct af
          </Link>
          .
        </p>

        <h2>Veelgestelde vragen</h2>
        <h3>Hoe haal je btw uit een inclusief bedrag?</h3>
        <p>
          Bij 21% btw deel je het inclusief-bedrag door <strong>1,21</strong>. Bij 9% btw deel je door{' '}
          <strong>1,09</strong>. Het verschil tussen het inclusief-bedrag en het bedrag exclusief btw is het
          btw-bedrag.
        </p>
        <h3>Hoeveel btw zit er in €242 inclusief btw?</h3>
        <p>
          Bij 21% btw zit er <strong>€42 btw</strong> in €242. Het bedrag exclusief btw is €200.
        </p>
        <h3>Hoe reken je €100 inclusief btw terug?</h3>
        <p>Bij 21% btw:</p>
        <p>
          <strong>€100 ÷ 1,21 = €82,64 exclusief btw</strong>
        </p>
        <p>
          Het btw-bedrag is dan <strong>€17,36</strong>.
        </p>
        <h3>Hoe reken je btw terug van 9%?</h3>
        <p>
          Deel het bedrag inclusief 9% btw door <strong>1,09</strong>. Het verschil tussen het oorspronkelijke
          bedrag en het bedrag exclusief btw is de btw.
        </p>
        <h3>Is btw uit een bedrag halen hetzelfde als btw terugrekenen?</h3>
        <p>
          Ja. Met beide termen wordt meestal bedoeld dat je vanuit een bedrag inclusief btw het bedrag exclusief btw
          en het btw-deel berekent.
        </p>
        <h3>Kan ik btw terugvragen over een zakelijke aankoop?</h3>
        <p>
          Of je btw op een zakelijke aankoop kunt aftrekken, hangt af van je situatie en de voorwaarden voor aftrek
          van voorbelasting. De berekening van het btw-bedrag betekent niet automatisch dat je dit bedrag ook volledig
          kunt aftrekken.
        </p>

        <h2>Btw terugrekenen zonder zelf te rekenen</h2>
        <p>
          Heb je regelmatig bedragen inclusief btw die je wilt omrekenen? Gebruik dan de gratis BTW calculator van
          FactuurBaas.
        </p>
        <p>
          Vul het bedrag in, kies het btw-tarief en bereken direct het bedrag exclusief btw en het btw-deel.
        </p>

        <GuideToolCta href="/tools/btw-calculator" label="Open gratis BTW calculator →" />
      </>
    ),
  },
  {
    slug: 'inclusief-btw-naar-exclusief-btw',
    cluster: 'btw',
    seoTitle: 'Bedrag inclusief btw omrekenen naar exclusief btw | Gratis calculator',
    title: 'Bedrag inclusief btw omrekenen naar exclusief btw',
    excerpt:
      'Een bedrag inclusief btw omrekenen naar exclusief btw? Leer hoe je btw terugrekent met 21% of 9% btw en bereken het direct met de gratis BTW calculator.',
    keywords:
      'inclusief btw omrekenen naar exclusief, bedrag inclusief btw omrekenen, exclusief btw berekenen, btw terugrekenen, 21% btw omrekenen, 9% btw omrekenen, btw calculator',
    tool: {
      href: '/tools/btw-calculator',
      label: 'Bereken direct btw',
      ctaLabel: 'Open gratis BTW calculator',
    },
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Factuurbaas/Bedrag%20inclusief%20btw%20omrekenen%20naar%20exclusief.jpg',
      alt: 'Bedrag inclusief btw omrekenen naar exclusief btw met calculator',
    },
    datePublished: '2026-07-15',
    dateModified: '2026-07-15',
    relatedSlugs: ['btw-factuur-zzp', 'factureren-zonder-account'],
    relatedGuideSlugs: ['btw-terugrekenen', 'btw-uit-bedrag-halen', 'verschil-9-en-21-btw', 'welke-btw-rekenen-zzper'],
    faq: [
      {
        question: 'Hoe haal ik btw uit een bedrag inclusief btw?',
        answer:
          'Deel een bedrag inclusief 21% btw door 1,21. Het resultaat is het bedrag exclusief btw. Bij 9% btw deel je door 1,09.',
      },
      {
        question: 'Hoe bereken ik exclusief btw bij 21 procent?',
        answer: 'Gebruik: bedrag inclusief btw ÷ 1,21 = bedrag exclusief btw.',
      },
      {
        question: 'Is exclusief btw hetzelfde als zonder btw?',
        answer: 'Ja. Een bedrag exclusief btw is het bedrag voordat btw wordt toegevoegd.',
      },
      {
        question: 'Waarom rekenen bedrijven exclusief btw?',
        answer:
          'Omdat btw voor veel ondernemers geen kostenpost is. Zij verrekenen btw via hun btw-aangifte en vergelijken prijzen daarom vaak exclusief btw.',
      },
    ],
    content: (
      <>
        <p>
          Heb je een bedrag waar de btw al in zit en wil je weten wat het bedrag <strong>zonder btw</strong> is? Dan kun je
          het bedrag <strong>inclusief btw omrekenen naar exclusief btw</strong>.
        </p>
        <p>Dit is handig wanneer je bijvoorbeeld:</p>
        <ul>
          <li>een offerte wilt vergelijken</li>
          <li>een zakelijke aankoop controleert</li>
          <li>kosten exclusief btw wilt berekenen</li>
          <li>een factuur wilt controleren</li>
        </ul>
        <p>
          Met de gratis{' '}
          <Link href="/tools/btw-calculator" className="text-warm-orange hover:underline">
            BTW calculator
          </Link>{' '}
          van FactuurBaas reken je direct een bedrag inclusief btw terug naar exclusief btw.
        </p>

        <GuideToolCta href="/tools/btw-calculator" label="Bereken btw direct →" />

        <h2>Formule: inclusief btw naar exclusief btw</h2>
        <p>De berekening hangt af van het btw-tarief.</p>
        <p>
          <strong>Bij 21% btw:</strong> bedrag exclusief btw = bedrag inclusief btw ÷ 1,21
        </p>
        <p>
          <strong>Bij 9% btw:</strong> bedrag exclusief btw = bedrag inclusief btw ÷ 1,09
        </p>
        <p>Het verschil tussen het bedrag inclusief btw en exclusief btw is het btw-bedrag.</p>

        <h2>Voorbeeld: €121 inclusief btw omrekenen naar exclusief btw</h2>
        <p>
          Factuurbedrag: <strong>€121 inclusief 21% btw</strong>
        </p>
        <p>Berekening: €121 ÷ 1,21 = <strong>€100</strong></p>
        <p>Btw: €121 − €100 = <strong>€21</strong></p>

        <CalculationTable
          rows={[
            ['Exclusief btw', '€100'],
            ['Btw (21%)', '€21'],
            ['Inclusief btw', '€121'],
          ]}
        />

        <h2>Voorbeeld: €250 inclusief btw omrekenen naar exclusief btw</h2>
        <p>
          Een klant betaalt <strong>€250 inclusief 21% btw</strong>.
        </p>
        <p>Berekening: €250 ÷ 1,21 = <strong>€206,61</strong></p>
        <p>Btw: €250 − €206,61 = <strong>€43,39</strong></p>

        <CalculationTable
          rows={[
            ['Exclusief btw', '€206,61'],
            ['Btw (21%)', '€43,39'],
            ['Inclusief btw', '€250'],
          ]}
        />

        <h2>Inclusief btw naar exclusief btw bij 9% btw</h2>
        <p>Niet alle producten en diensten vallen onder het standaardtarief van 21%.</p>
        <p>
          <strong>Voor 9% btw:</strong> bedrag exclusief btw = bedrag inclusief btw ÷ 1,09
        </p>
        <p>Voorbeeld: €109 inclusief btw → €109 ÷ 1,09 = <strong>€100 exclusief btw</strong></p>

        <CalculationTable
          rows={[
            ['Exclusief btw', '€100'],
            ['Btw (9%)', '€9'],
            ['Inclusief btw', '€109'],
          ]}
        />

        <h2>Waarom rekenen ondernemers bedragen exclusief btw?</h2>
        <p>Ondernemers vergelijken prijzen meestal exclusief btw omdat:</p>
        <ul>
          <li>btw vaak wordt teruggevraagd via de btw-aangifte</li>
          <li>zakelijke kosten worden berekend zonder btw</li>
          <li>offertes meestal exclusief btw worden opgesteld</li>
        </ul>
        <p>Voor consumenten is juist het bedrag inclusief btw meestal het belangrijkste bedrag.</p>
        <p>
          Meer uitleg:{' '}
          <Link href="/gidsen/btw-terugrekenen" className="text-warm-orange hover:underline">
            Hoe bereken je btw terug?
          </Link>{' '}
          en{' '}
          <Link href="/gidsen/btw-uit-bedrag-halen" className="text-warm-orange hover:underline">
            Btw uit een bedrag halen
          </Link>
          .
        </p>

        <h2>Veelgemaakte fouten bij btw omrekenen</h2>

        <h3>1. Gewoon 21% aftrekken</h3>
        <p>
          Een veelgemaakte fout: €121 − 21% = €95,59. Dit klopt niet. De 21% btw wordt berekend over het bedrag exclusief
          btw, niet over het totaalbedrag inclusief btw.
        </p>
        <p>
          De juiste berekening: <strong>€121 ÷ 1,21 = €100</strong>
        </p>

        <h3>2. Het verkeerde btw-tarief gebruiken</h3>
        <p>Controleer altijd welk tarief geldt:</p>
        <ul>
          <li>
            <strong>21% btw</strong> → standaardtarief
          </li>
          <li>
            <strong>9% btw</strong> → verlaagd tarief
          </li>
          <li>
            <strong>0% btw</strong> → specifieke situaties
          </li>
        </ul>
        <p>
          Lees ook{' '}
          <Link href="/blogs/btw-factuur-zzp" className="text-warm-orange hover:underline">
            Btw op je factuur: zo doe je het goed als zzp&apos;er
          </Link>
          .
        </p>

        <h2>Reken bedragen inclusief btw direct om</h2>
        <p>Met de gratis BTW calculator van FactuurBaas kun je:</p>
        <ul>
          <li>inclusief btw naar exclusief btw rekenen</li>
          <li>btw uit een bedrag halen</li>
          <li>21%, 9% en 0% btw berekenen</li>
          <li>bedragen controleren voor je factuur</li>
        </ul>

        <GuideToolCta href="/tools/btw-calculator" label="Open gratis BTW calculator →" />

        <h2>Veelgestelde vragen</h2>
        <h3>Hoe haal ik btw uit een bedrag inclusief btw?</h3>
        <p>Deel een bedrag inclusief 21% btw door 1,21. Het resultaat is het bedrag exclusief btw.</p>
        <h3>Hoe bereken ik exclusief btw bij 21 procent?</h3>
        <p>Gebruik: bedrag inclusief btw ÷ 1,21 = bedrag exclusief btw.</p>
        <h3>Is exclusief btw hetzelfde als zonder btw?</h3>
        <p>Ja. Een bedrag exclusief btw is het bedrag voordat btw wordt toegevoegd.</p>
        <h3>Waarom rekenen bedrijven exclusief btw?</h3>
        <p>
          Omdat btw voor veel ondernemers geen kostenpost is. Zij verrekenen btw via hun btw-aangifte.
        </p>
      </>
    ),
  },
  {
    slug: 'verschil-9-en-21-btw',
    cluster: 'btw',
    seoTitle: '9% of 21% btw: wat valt eronder en welk tarief geldt?',
    title: '9% of 21% btw: wat valt eronder?',
    excerpt:
      'Wat valt onder 9% en 21% btw? Bekijk voorbeelden van producten en diensten, ontdek wanneer je 9% of 21% gebruikt en bereken direct de btw.',
    keywords:
      '9% of 21% btw, wat valt onder 9% btw, wat valt onder 21% btw, verschil 9% en 21% btw, btw tarief, verlaagd btw tarief, standaard btw tarief, btw op factuur',
    tool: {
      href: '/tools/btw-calculator',
      label: 'Bereken btw',
      ctaLabel: 'Open gratis btw calculator',
    },
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Factuurbaas/Verschil%20tussen%209%20en%2021%20btw.jpg',
      alt: '9% of 21% btw: wat valt eronder — euro biljetten en munten',
    },
    datePublished: '2026-07-15',
    dateModified: '2026-09-03',
    relatedSlugs: ['btw-factuur-zzp', 'factureren-zonder-account'],
    relatedGuideSlugs: [
      'btw-terugrekenen',
      'inclusief-btw-naar-exclusief-btw',
      'welke-btw-rekenen-zzper',
      'wanneer-gebruik-je-0-btw',
    ],
    faq: [
      {
        question: 'Wanneer gebruik je 21% btw?',
        answer: '21% is het algemene btw-tarief en geldt voor de meeste producten en diensten.',
      },
      {
        question: 'Wanneer gebruik je 9% btw?',
        answer:
          '9% geldt voor specifieke producten en diensten die volgens de btw-regels onder het verlaagde tarief vallen.',
      },
      {
        question: 'Wat valt onder 9% en 21% btw?',
        answer:
          'Onder 21% vallen veel algemene producten en diensten, waaronder veel zakelijke dienstverlening. 9% geldt alleen voor specifiek aangewezen producten en diensten, zoals bepaalde voedingsmiddelen, publicaties en bepaalde werkzaamheden aan woningen.',
      },
      {
        question: 'Kan een zzp\'er kiezen tussen 9% en 21%?',
        answer:
          'Nee. Het toepasselijke btw-tarief wordt bepaald door de aard van de prestatie en de geldende btw-regels.',
      },
      {
        question: 'Welk btw-tarief geldt voor een garage?',
        answer:
          'Voor reparatie en onderhoud aan auto\'s geldt in het algemeen 21% btw. Controleer bij bijzondere situaties altijd de actuele btw-regels.',
      },
      {
        question: 'Welk btw-tarief geldt voor catering?',
        answer:
          'Dat hangt af van wat precies wordt geleverd. Bij catering kunnen verschillende btw-regels relevant zijn. Kijk daarom naar de specifieke prestatie in plaats van automatisch 9% of 21% over de volledige opdracht te rekenen.',
      },
      {
        question: 'Kan één factuur zowel 9% als 21% btw bevatten?',
        answer:
          'Ja. Wanneer verschillende prestaties onder verschillende btw-tarieven vallen, moeten de bedragen per toepasselijk tarief worden uitgesplitst.',
      },
      {
        question: 'Is 9% btw altijd voordeliger?',
        answer:
          'Voor de klant betekent 9% bij dezelfde prijs exclusief btw een lager btw-bedrag. Als ondernemer is het echter niet toegestaan om zelf voor 9% te kiezen wanneer jouw prestatie onder 21% valt.',
      },
      {
        question: 'Hoe bereken ik 21% btw?',
        answer: 'Vermenigvuldig een bedrag exclusief btw met 0,21. Bijvoorbeeld €500 × 0,21 = €105 btw.',
      },
      {
        question: 'Hoe bereken ik 9% btw?',
        answer: 'Vermenigvuldig een bedrag exclusief btw met 0,09. Bijvoorbeeld €500 × 0,09 = €45 btw.',
      },
    ],
    content: (
      <>
        <p>
          In Nederland zijn <strong>9% en 21% btw</strong> de twee belangrijkste btw-tarieven. Maar wanneer gebruik je
          9% en wanneer 21%?
        </p>
        <p>
          Het antwoord hangt af van <strong>wat je precies levert</strong>. Als ondernemer kun je niet zelf kiezen welk
          btw-tarief je gebruikt. Voor de meeste producten en diensten geldt 21%, terwijl 9% alleen geldt voor
          specifieke producten en diensten die onder het verlaagde tarief vallen.
        </p>
        <p>
          Met de gratis{' '}
          <Link href="/tools/btw-calculator" className="text-warm-orange hover:underline">
            btw calculator
          </Link>{' '}
          van FactuurBaas bereken je eenvoudig hoeveel btw je moet rekenen.
        </p>

        <GuideToolCta href="/tools/btw-calculator" label="Bereken btw →" />

        <h2>Kort verschil tussen 9% en 21% btw</h2>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[480px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Btw-tarief
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Wanneer?
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Voorbeelden
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3 font-semibold text-deep-blue">21%</td>
                <td className="px-4 py-3">Het algemene tarief</td>
                <td className="px-4 py-3">Veel zakelijke diensten, producten en werkzaamheden</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-deep-blue">9%</td>
                <td className="px-4 py-3">Voor specifieke producten en diensten</td>
                <td className="px-4 py-3">
                  Onder andere bepaalde voedingsmiddelen, boeken en bepaalde werkzaamheden aan woningen
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Er zijn daarnaast situaties waarin <strong>0% btw</strong>, btw-vrijstelling of{' '}
          <strong>btw verlegd</strong> van toepassing is. Dat is iets anders dan 9% btw.
        </p>

        <h2>21% btw: het standaardtarief</h2>
        <p>
          <strong>21% btw is het algemene btw-tarief in Nederland.</strong> Het geldt voor het grootste deel van de
          producten en diensten.
        </p>
        <p>Voorbeelden zijn onder andere:</p>
        <ul>
          <li>advies en zakelijke dienstverlening</li>
          <li>marketingdiensten</li>
          <li>webdesign</li>
          <li>veel software en digitale diensten</li>
          <li>veel producten en materialen</li>
          <li>veel reparatie- en onderhoudswerkzaamheden</li>
          <li>veel bouw- en installatiewerkzaamheden</li>
        </ul>
        <p>
          Dat betekent niet dat ieder product of iedere dienst van een bepaalde beroepsgroep automatisch 21% is. Het{' '}
          <strong>onderwerp van de levering of dienst</strong> bepaalt welk tarief geldt.
        </p>

        <h3>Voorbeeld 21% btw</h3>
        <p>Je brengt als webdesigner €1.000 exclusief btw in rekening.</p>
        <p>
          <strong>€1.000 × 21% = €210 btw</strong>
        </p>
        <p>De klant betaalt:</p>
        <p>
          <strong>€1.210 inclusief btw</strong>
        </p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[280px] text-sm text-slate-700 sm:text-base">
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Exclusief btw</td>
                <td className="px-4 py-3 text-right">€1.000</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">21% btw</td>
                <td className="px-4 py-3 text-right">€210</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-deep-blue">Inclusief btw</td>
                <td className="px-4 py-3 text-right font-semibold text-deep-blue">€1.210</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>9% btw: het verlaagde tarief</h2>
        <p>
          Het <strong>9%-tarief</strong> geldt niet voor een hele beroepsgroep, maar voor specifieke producten en
          diensten waarvoor het verlaagde tarief is vastgesteld.
        </p>
        <p>Voorbeelden zijn onder andere bepaalde:</p>
        <ul>
          <li>voedingsmiddelen</li>
          <li>boeken en andere publicaties</li>
          <li>culturele prestaties</li>
          <li>werkzaamheden aan woningen die aan de voorwaarden voldoen</li>
          <li>andere specifiek aangewezen goederen en diensten</li>
        </ul>
        <p>
          De precieze voorwaarden kunnen per product of dienst verschillen. Controleer daarom bij twijfel de actuele
          regels van de Belastingdienst.
        </p>

        <h3>Voorbeeld 9% btw</h3>
        <p>Je levert een dienst of product waarvoor het 9%-tarief geldt voor €1.000 exclusief btw.</p>
        <p>
          <strong>€1.000 × 9% = €90 btw</strong>
        </p>
        <p>De klant betaalt:</p>
        <p>
          <strong>€1.090 inclusief btw</strong>
        </p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[280px] text-sm text-slate-700 sm:text-base">
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Exclusief btw</td>
                <td className="px-4 py-3 text-right">€1.000</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">9% btw</td>
                <td className="px-4 py-3 text-right">€90</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-deep-blue">Inclusief btw</td>
                <td className="px-4 py-3 text-right font-semibold text-deep-blue">€1.090</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Wat valt onder 9% en 21% btw?</h2>
        <p>
          De vraag <strong>&quot;wat valt onder 9 en 21 btw?&quot;</strong> is niet met één algemene lijst voor iedere
          ondernemer te beantwoorden. Het tarief hangt af van het product of de dienst.
        </p>
        <p>Een paar praktische voorbeelden:</p>

        <h3>Zakelijke dienstverlening</h3>
        <p>
          Diensten zoals advies, marketing, consultancy en veel andere zakelijke diensten vallen doorgaans onder{' '}
          <strong>21% btw</strong>.
        </p>

        <h3>Voeding en horeca</h3>
        <p>
          Voor bepaalde voedingsmiddelen geldt 9% btw. Bij horeca en catering moet je echter kijken naar{' '}
          <strong>wat precies wordt geleverd</strong>. Niet iedere horeca- of cateringprestatie valt automatisch
          volledig onder 9%.
        </p>

        <h3>Werkzaamheden aan woningen</h3>
        <p>
          Voor bepaalde werkzaamheden aan woningen kan 9% gelden als aan de voorwaarden wordt voldaan. Dit geldt
          bijvoorbeeld voor bepaalde schilder-, stukadoors- en isolatiewerkzaamheden aan woningen die oud genoeg zijn
          om voor het verlaagde tarief in aanmerking te komen.
        </p>
        <p>Andere werkzaamheden kunnen gewoon onder 21% vallen.</p>

        <h3>Reparaties</h3>
        <p>Een reparatie valt niet automatisch onder 9% omdat het om een reparatie gaat.</p>
        <p>
          Bijvoorbeeld een garage die een auto repareert, gebruikt niet simpelweg 9% omdat het om onderhoud of
          reparatie gaat. Voor een dergelijke dienst is in het algemeen het standaardtarief van 21% van toepassing.
        </p>
        <p>Het soort product of dienst en de specifieke btw-regels bepalen het tarief.</p>

        <h2>9% of 21% btw bij één opdracht?</h2>
        <p>
          Soms bevat één opdracht onderdelen waarvoor verschillende btw-tarieven gelden. Bijvoorbeeld bij
          werkzaamheden waarbij een deel van de prestaties onder 9% valt en een ander deel onder 21%.
        </p>
        <p>
          In zo&apos;n situatie moet je de prestaties correct onderscheiden en de btw per toepasselijk tarief
          berekenen. Zet de verschillende tarieven daarom duidelijk op je offerte of factuur.
        </p>

        <h2>Voorbeeld: 9% en 21% op dezelfde factuur</h2>
        <p>Stel dat een opdracht bestaat uit:</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[280px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Omschrijving
                </th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">
                  Bedrag
                </th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">
                  Btw
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Prestatie A</td>
                <td className="px-4 py-3 text-right">€500</td>
                <td className="px-4 py-3 text-right">9%</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Prestatie B</td>
                <td className="px-4 py-3 text-right">€500</td>
                <td className="px-4 py-3 text-right">21%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Dan bereken je de btw afzonderlijk:</p>
        <p>
          <strong>Prestatie A:</strong>
          <br />
          €500 × 9% = €45 btw
        </p>
        <p>
          <strong>Prestatie B:</strong>
          <br />
          €500 × 21% = €105 btw
        </p>
        <p>
          <strong>Totale btw: €150</strong>
        </p>
        <p>
          <strong>Totaal inclusief btw: €1.150</strong>
        </p>
        <p>Zo blijft duidelijk welk deel van de factuur onder welk tarief valt.</p>

        <h2>Kan een zzp&apos;er kiezen tussen 9% en 21%?</h2>
        <p>Nee.</p>
        <p>
          Je kiest het btw-tarief niet op basis van wat financieel aantrekkelijker is voor jou of je klant. Het tarief
          wordt bepaald door <strong>wat je levert en welke btw-regels daarop van toepassing zijn</strong>.
        </p>
        <p>
          Een klant kan dus niet vragen om 9% btw wanneer jouw dienst onder 21% valt. Andersom mag je ook niet zomaar
          21% rekenen wanneer voor jouw prestatie het 9%-tarief verplicht van toepassing is.
        </p>

        <h2>Btw berekenen over je prijs</h2>
        <p>Btw bereken je over het bedrag exclusief btw.</p>
        <p>Bijvoorbeeld:</p>
        <p>
          <strong>€500 exclusief btw × 21% = €105 btw</strong>
        </p>
        <p>Het totaal is dan:</p>
        <p>
          <strong>€605 inclusief btw</strong>
        </p>
        <p>Bij 9%:</p>
        <p>
          <strong>€500 × 9% = €45 btw</strong>
        </p>
        <p>Het totaal is:</p>
        <p>
          <strong>€545 inclusief btw</strong>
        </p>
        <p>
          Wil je vanuit een bedrag inclusief btw terugrekenen? Gebruik dan de juiste formule of de{' '}
          <Link href="/tools/btw-calculator" className="text-warm-orange hover:underline">
            btw calculator
          </Link>
          .
        </p>

        <h2>9% versus 21%: hoeveel verschil is het?</h2>
        <p>Bij dezelfde prijs exclusief btw is het verschil eenvoudig te berekenen.</p>
        <p>
          Bij <strong>€100 exclusief btw</strong>:
        </p>
        <ul>
          <li>9% btw = €9</li>
          <li>21% btw = €21</li>
          <li>
            verschil = <strong>€12</strong>
          </li>
        </ul>
        <p>
          Bij <strong>€1.000 exclusief btw</strong>:
        </p>
        <ul>
          <li>9% btw = €90</li>
          <li>21% btw = €210</li>
          <li>
            verschil = <strong>€120</strong>
          </li>
        </ul>
        <p>
          Het verschil zit dus niet in je verkoopprijs exclusief btw, maar in het btw-bedrag dat bovenop die prijs
          komt.
        </p>

        <h2>Btw op je factuur</h2>
        <p>
          Als je btw rekent, moet je op je factuur duidelijk aangeven welk btw-tarief van toepassing is en welk
          btw-bedrag daarbij hoort.
        </p>
        <p>Bijvoorbeeld:</p>
        <pre className="not-prose overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800 whitespace-pre">
{`Website ontwerp             €1.000,00
BTW 21%                       €210,00
────────────────────────────────────
Totaal                       €1.210,00`}
        </pre>
        <p>
          Gebruik je meerdere btw-tarieven, dan moet je de bedragen per tarief duidelijk uitsplitsen.
        </p>
        <p>
          Lees ook{' '}
          <Link href="/blogs/btw-factuur-zzp" className="text-warm-orange hover:underline">
            btw op je factuur: zo doe je het goed als zzp&apos;er
          </Link>
          .
        </p>

        <h2>9%, 21%, 0% of geen btw?</h2>
        <p>9% en 21% zijn niet de enige situaties die je op een factuur kunt tegenkomen.</p>

        <h3>21% btw</h3>
        <p>Het algemene btw-tarief voor de meeste producten en diensten.</p>

        <h3>9% btw</h3>
        <p>Het verlaagde tarief voor specifiek aangewezen producten en diensten.</p>

        <h3>0% btw</h3>
        <p>
          Het nultarief geldt in specifieke situaties, bijvoorbeeld bij bepaalde internationale leveringen en
          diensten.
        </p>
        <p>
          Lees meer over{' '}
          <Link href="/gidsen/wanneer-gebruik-je-0-btw" className="text-warm-orange hover:underline">
            wanneer je 0% btw gebruikt
          </Link>
          .
        </p>

        <h3>Btw verlegd</h3>
        <p>
          Bij btw verlegd brengt de leverancier geen btw in rekening omdat de btw-heffing volgens de regels naar de
          afnemer wordt verlegd. Dit is bijvoorbeeld bij bepaalde werkzaamheden in de bouw relevant.
        </p>
        <p>
          <strong>0% btw en btw verlegd zijn dus niet hetzelfde.</strong>
        </p>

        <h3>Btw-vrijstelling</h3>
        <p>
          Bij een vrijgestelde prestatie wordt geen btw in rekening gebracht en gelden andere regels voor de
          btw-aftrek.
        </p>
        <p>
          De{' '}
          <Link href="/tools/kor-calculator" className="text-warm-orange hover:underline">
            KOR
          </Link>{' '}
          is weer een aparte regeling waarbij je, als je ervoor in aanmerking komt en eraan deelneemt, geen btw aan
          klanten in rekening brengt.
        </p>

        <h2>Veelgemaakte fouten met 9% en 21% btw</h2>

        <h3>1. Altijd 21% gebruiken</h3>
        <p>
          21% is het standaardtarief, maar niet iedere prestatie valt daaronder. Controleer daarom of jouw product of
          dienst onder 9%, 0% of een vrijstelling valt.
        </p>

        <h3>2. Zelf het laagste tarief kiezen</h3>
        <p>
          Je mag niet zelf kiezen voor 9% omdat dat voor je klant goedkoper is. Het juiste tarief volgt uit de
          btw-regels.
        </p>

        <h3>3. Een beroep koppelen aan één btw-tarief</h3>
        <p>
          Het feit dat je schilder, cateraar, fotograaf of consultant bent, bepaalt niet automatisch welk btw-tarief
          je voor iedere opdracht gebruikt. Kijk naar de specifieke prestatie.
        </p>

        <h3>4. Verschillende tarieven niet uitsplitsen</h3>
        <p>
          Als binnen één opdracht verschillende tarieven van toepassing zijn, maak dan duidelijk welk bedrag onder
          welk tarief valt.
        </p>

        <h3>5. Btw berekenen over een bedrag inclusief btw</h3>
        <p>
          Een percentage van 21% bereken je niet door simpelweg 21% van een inclusief-btw-bedrag te nemen. Gebruik bij
          terugrekenen een geschikte formule of calculator.
        </p>

        <h2>Btw berekenen met FactuurBaas</h2>
        <p>
          Met de gratis{' '}
          <Link href="/tools/btw-calculator" className="text-warm-orange hover:underline">
            btw calculator
          </Link>{' '}
          kun je snel bedragen met 9%, 21% of 0% btw berekenen.
        </p>
        <p>Je kunt bijvoorbeeld berekenen:</p>
        <ul>
          <li>btw over een bedrag exclusief btw</li>
          <li>totaal inclusief btw</li>
          <li>bedrag exclusief btw vanuit inclusief btw</li>
          <li>9% btw</li>
          <li>21% btw</li>
          <li>0% btw</li>
        </ul>

        <GuideToolCta href="/tools/btw-calculator" label="Open gratis btw calculator →" />

        <p>Daarna kun je je factuur maken met de juiste btw-bedragen.</p>

        <div className="my-8 text-center not-prose">
          <Button
            asChild
            variant="outline"
            className="border-deep-blue text-deep-blue hover:bg-deep-blue hover:text-white font-bold py-3 px-6 rounded-lg text-lg"
          >
            <Link href="/create-invoice">Maak gratis factuur →</Link>
          </Button>
        </div>

        <h2>Veelgestelde vragen</h2>
        <h3>Wanneer gebruik je 21% btw?</h3>
        <p>21% is het algemene btw-tarief en geldt voor de meeste producten en diensten.</p>
        <h3>Wanneer gebruik je 9% btw?</h3>
        <p>
          9% geldt voor specifieke producten en diensten die volgens de btw-regels onder het verlaagde tarief vallen.
        </p>
        <h3>Wat valt onder 9% en 21% btw?</h3>
        <p>
          Onder 21% vallen veel algemene producten en diensten, waaronder veel zakelijke dienstverlening. 9% geldt
          alleen voor specifiek aangewezen producten en diensten, zoals bepaalde voedingsmiddelen, publicaties en
          bepaalde werkzaamheden aan woningen.
        </p>
        <h3>Kan een zzp&apos;er kiezen tussen 9% en 21%?</h3>
        <p>
          Nee. Het toepasselijke btw-tarief wordt bepaald door de aard van de prestatie en de geldende btw-regels.
        </p>
        <h3>Welk btw-tarief geldt voor een garage?</h3>
        <p>
          Voor reparatie en onderhoud aan auto&apos;s geldt in het algemeen 21% btw. Controleer bij bijzondere
          situaties altijd de actuele btw-regels.
        </p>
        <h3>Welk btw-tarief geldt voor catering?</h3>
        <p>
          Dat hangt af van wat precies wordt geleverd. Bij catering kunnen verschillende btw-regels relevant zijn.
          Kijk daarom naar de specifieke prestatie in plaats van automatisch 9% of 21% over de volledige opdracht te
          rekenen.
        </p>
        <h3>Kan één factuur zowel 9% als 21% btw bevatten?</h3>
        <p>
          Ja. Wanneer verschillende prestaties onder verschillende btw-tarieven vallen, moeten de bedragen per
          toepasselijk tarief worden uitgesplitst.
        </p>
        <h3>Is 9% btw altijd voordeliger?</h3>
        <p>
          Voor de klant betekent 9% bij dezelfde prijs exclusief btw een lager btw-bedrag. Als ondernemer is het
          echter niet toegestaan om zelf voor 9% te kiezen wanneer jouw prestatie onder 21% valt.
        </p>
        <h3>Hoe bereken ik 21% btw?</h3>
        <p>Vermenigvuldig een bedrag exclusief btw met 0,21. Bijvoorbeeld €500 × 0,21 = €105 btw.</p>
        <h3>Hoe bereken ik 9% btw?</h3>
        <p>Vermenigvuldig een bedrag exclusief btw met 0,09. Bijvoorbeeld €500 × 0,09 = €45 btw.</p>

        <h2>Welk btw-tarief moet je gebruiken?</h2>
        <p>
          Het juiste btw-tarief hangt af van <strong>wat je verkoopt of welke dienst je uitvoert</strong>.
        </p>
        <p>
          21% is het algemene tarief. 9% geldt alleen voor specifieke producten en diensten. In andere situaties kan
          bijvoorbeeld 0% btw, btw verlegd of een vrijstelling van toepassing zijn.
        </p>
        <p>
          Twijfel je over een specifieke situatie? Controleer dan de actuele regels van de Belastingdienst.
        </p>
        <p>
          Wil je alleen het btw-bedrag berekenen? Gebruik dan de gratis btw calculator van FactuurBaas.
        </p>

        <GuideToolCta href="/tools/btw-calculator" label="Bereken je btw gratis →" />
      </>
    ),
  },
  {
    slug: 'wanneer-gebruik-je-0-btw',
    cluster: 'btw',
    seoTitle: '0% btw: wanneer mag je het 0%-tarief gebruiken?',
    title: '0% btw: wanneer mag je het 0%-tarief gebruiken?',
    excerpt:
      'Wanneer mag je 0% btw rekenen? Bekijk voorbeelden voor buitenlandse facturen en het verschil tussen 0% btw, btw verlegd en btw-vrijstelling.',
    keywords:
      '0% btw, wanneer 0% btw, 0%-tarief, nultarief btw, btw verlegd, btw vrijgesteld, export btw, intracommunautaire levering, buitenlandse factuur btw',
    tool: {
      href: '/tools/btw-calculator',
      label: 'Bereken btw',
      ctaLabel: 'Open de gratis btw calculator',
    },
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Factuurbaas/Wanneer%20gebruik%20je%200%20btw.jpg',
      alt: '0% btw: wanneer mag je het 0%-tarief gebruiken?',
    },
    datePublished: '2026-07-15',
    dateModified: '2026-09-03',
    relatedSlugs: ['btw-factuur-zzp', 'buitenlandse-klanten-factureren'],
    relatedGuideSlugs: ['verschil-9-en-21-btw', 'welke-btw-rekenen-zzper', 'btw-berekenen-buitenlandse-klanten'],
    faq: [
      {
        question: 'Wanneer mag ik 0% btw rekenen?',
        answer:
          'Alleen wanneer jouw levering of dienst onder een regeling valt waarvoor het 0%-tarief geldt. Het is geen algemeen tarief dat je kunt kiezen wanneer je geen btw wilt rekenen.',
      },
      {
        question: 'Is 0% btw hetzelfde als geen btw?',
        answer:
          'Nee. Bij 0% btw pas je een btw-tarief van 0% toe. “Geen btw” kan bijvoorbeeld betrekking hebben op btw-vrijstelling, btw-verlegging of de KOR.',
      },
      {
        question: 'Is een factuur naar het buitenland altijd 0% btw?',
        answer:
          'Nee. De btw-behandeling hangt onder andere af van wat je levert, of je klant ondernemer of particulier is, en in welk land de prestatie voor de btw belast is.',
      },
      {
        question: 'Is btw verlegd hetzelfde als 0% btw?',
        answer:
          'Nee. Bij btw-verlegging breng je geen btw in rekening omdat de btw naar de afnemer wordt verlegd. Bij 0% btw pas je het 0%-tarief toe.',
      },
      {
        question: 'Kan ik 0% btw gebruiken voor een buitenlandse klant?',
        answer:
          'Dat kan in bepaalde situaties, maar niet alleen omdat de klant buiten Nederland woont. Controleer eerst welke btw-regels op de levering of dienst van toepassing zijn.',
      },
      {
        question: 'Moet ik 0% btw op mijn factuur zetten?',
        answer:
          'Als het 0%-tarief van toepassing is, moet je de factuur correct opstellen en waar nodig de reden of relevante wettelijke verwijzing vermelden. Welke gegevens nodig zijn, hangt af van de specifieke situatie.',
      },
      {
        question: "Kan een zzp'er 0% btw rekenen?",
        answer:
          'Ja, maar alleen wanneer de betreffende prestatie onder een regeling voor het 0%-tarief valt. Het is niet een tarief dat iedere zzp\'er vrij kan kiezen.',
      },
    ],
    content: (
      <>
        <p>
          Wanneer mag je als zzp&apos;er of ondernemer <strong>0% btw</strong> op een factuur zetten? Dat is vooral
          relevant bij bepaalde internationale leveringen en specifieke goederen en diensten.
        </p>
        <p>
          Let op: <strong>0% btw is niet hetzelfde als btw verlegd, btw-vrijstelling of de KOR</strong>. Je mag niet
          simpelweg 0% btw gebruiken omdat je geen btw wilt rekenen.
        </p>
        <p>
          In deze gids leggen we uit wanneer het 0%-tarief kan gelden, hoe je 0% btw op een factuur vermeldt en wat het
          verschil is met een factuur zonder btw door btw-verlegging.
        </p>
        <p>
          Met de gratis{' '}
          <Link href="/tools/btw-calculator" className="text-warm-orange hover:underline">
            btw calculator van FactuurBaas
          </Link>{' '}
          kun je bedragen met verschillende btw-tarieven berekenen.
        </p>

        <GuideToolCta href="/tools/btw-calculator" label="Bereken btw →" />

        <h2>Wat betekent 0% btw?</h2>
        <p>
          Bij het 0%-tarief is het btw-bedrag <strong>€0</strong>, terwijl de prestatie wel onder het btw-systeem valt.
        </p>
        <p>Voorbeeld:</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[280px] text-sm text-slate-700 sm:text-base">
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Bedrag exclusief btw</td>
                <td className="px-4 py-3 text-right">€1.000,00</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">BTW 0%</td>
                <td className="px-4 py-3 text-right">€0,00</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-deep-blue">Totaal</td>
                <td className="px-4 py-3 text-right font-semibold text-deep-blue">€1.000,00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Je klant betaalt in dit voorbeeld dus €1.000.</p>
        <p>
          Het belangrijke verschil met een vrijgestelde prestatie is dat een prestatie met 0% btw wel belast is tegen
          een btw-tarief van 0%.
        </p>

        <h2>Wanneer mag je 0% btw rekenen?</h2>
        <p>
          Het 0%-tarief geldt niet voor iedere ondernemer en ook niet automatisch voor iedere buitenlandse klant.
        </p>
        <p>
          Er zijn specifieke situaties waarin het 0%-tarief kan worden toegepast. Voor ondernemers zijn vooral
          internationale leveringen van goederen relevant.
        </p>

        <h3>1. Goederen naar een land buiten de EU</h3>
        <p>Bij de uitvoer van goederen naar een land buiten de Europese Unie kan het 0%-tarief gelden.</p>
        <p>
          Je brengt dan geen Nederlandse btw aan je klant in rekening, maar je moet wel kunnen aantonen dat aan de
          voorwaarden voor het 0%-tarief is voldaan.
        </p>
        <p>Bewaar daarom de relevante administratie en bewijsstukken van de uitvoer.</p>

        <h3>2. Goederen aan een ondernemer in een ander EU-land</h3>
        <p>
          Lever je goederen aan een ondernemer in een ander EU-land? Dan kan het 0%-tarief gelden als aan de
          voorwaarden voor een intracommunautaire levering wordt voldaan.
        </p>
        <p>Onder andere moet:</p>
        <ul>
          <li>de klant ondernemer zijn en een geldig btw-identificatienummer hebben</li>
          <li>je de goederen naar een ander EU-land vervoeren of laten vervoeren</li>
          <li>je kunnen aantonen dat de goederen naar het andere EU-land zijn gegaan</li>
          <li>je de levering correct verwerken in je btw-administratie</li>
        </ul>
        <p>
          Bij een intracommunautaire levering vermeld je onder andere je eigen btw-identificatienummer en het
          btw-identificatienummer van je klant op de factuur.
        </p>

        <h3>3. Bepaalde internationale diensten</h3>
        <p>Voor sommige specifieke diensten geldt het 0%-tarief.</p>
        <p>
          Denk bijvoorbeeld aan bepaalde diensten die samenhangen met internationale handel en het vervoer van goederen.
          Voor dergelijke diensten gelden specifieke voorwaarden.
        </p>
        <p>
          Bij diensten aan buitenlandse klanten is het daarom belangrijk om eerst te bepalen{' '}
          <strong>waar de dienst voor de btw belast is</strong>. Een buitenlandse klant betekent namelijk niet
          automatisch dat je 0% btw rekent. Meer hierover in{' '}
          <Link href="/blogs/buitenlandse-klanten-factureren" className="text-warm-orange hover:underline">
            buitenlandse klanten factureren
          </Link>
          .
        </p>

        <h2>Buitenlandse klant zonder btw: 0% of btw verlegd?</h2>
        <p>Dit is een belangrijk onderscheid.</p>
        <p>
          Stel: je bent een Nederlandse zzp&apos;er en levert een gewone zakelijke dienst aan een ondernemer in
          Duitsland.
        </p>
        <p>
          Dan betekent het feit dat je geen Nederlandse btw op de factuur zet{' '}
          <strong>niet automatisch dat je 0% btw toepast</strong>.
        </p>
        <p>
          Bij veel B2B-diensten aan ondernemers in een ander EU-land wordt de btw juist{' '}
          <strong>verlegd naar de klant</strong>. Je stuurt dan een factuur zonder btw en vermeldt daarop bijvoorbeeld:
        </p>
        <p>
          <strong>Btw verlegd</strong>
        </p>
        <p>
          De klant verwerkt de btw vervolgens in zijn eigen land. Voor intracommunautaire diensten moet je de prestatie
          bovendien correct aangeven in je Nederlandse btw-aangifte en Opgaaf intracommunautaire prestaties.
        </p>

        <h3>Kort gezegd</h3>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[520px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Situatie
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Wat kan van toepassing zijn?
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Goederen exporteren buiten de EU</td>
                <td className="px-4 py-3">0% btw, als aan de voorwaarden is voldaan</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Goederen aan ondernemer in ander EU-land</td>
                <td className="px-4 py-3">
                  0% btw bij een intracommunautaire levering, als aan de voorwaarden is voldaan
                </td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Gewone B2B-dienst aan ondernemer in ander EU-land</td>
                <td className="px-4 py-3">Vaak btw verlegd</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Vrijgestelde activiteit</td>
                <td className="px-4 py-3">Btw-vrijstelling</td>
              </tr>
              <tr>
                <td className="px-4 py-3">KOR</td>
                <td className="px-4 py-3">Geen btw in rekening brengen onder de KOR-regeling</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Dit zijn algemene voorbeelden. De btw-behandeling hangt altijd af van wat je levert, aan wie je levert en waar
          de prestatie voor de btw plaatsvindt.
        </p>

        <h2>0% btw is niet hetzelfde als btw verlegd</h2>
        <p>
          Bij <strong>0% btw</strong> pas je een btw-tarief van 0% toe.
        </p>
        <p>
          Bij <strong>btw verlegd</strong> breng je zelf geen btw in rekening omdat de btw naar de afnemer wordt
          verlegd.
        </p>
        <p>
          Bij een verlegde btw-factuur vermeld je onder andere <strong>&quot;btw verlegd&quot;</strong> en het
          btw-identificatienummer van de afnemer wanneer de regeling van toepassing is.
        </p>
        <p>
          Daarom moet je op een buitenlandse factuur niet zomaar <strong>&quot;0% btw&quot;</strong> invullen omdat je
          klant in het buitenland zit.
        </p>

        <h2>0% btw is niet hetzelfde als btw-vrijgesteld</h2>
        <p>
          Bij een vrijgestelde prestatie hoef je geen btw in rekening te brengen omdat de activiteit onder een
          btw-vrijstelling valt.
        </p>
        <p>Dat is iets anders dan het 0%-tarief.</p>
        <p>
          Het onderscheid is belangrijk voor je btw-administratie en bijvoorbeeld voor de vraag of je btw op zakelijke
          kosten als voorbelasting kunt aftrekken. Zie ook{' '}
          <Link href="/gidsen/verschil-9-en-21-btw" className="text-warm-orange hover:underline">
            9% of 21% btw: wat valt eronder
          </Link>
          .
        </p>

        <h2>0% btw is ook niet hetzelfde als de KOR</h2>
        <p>De kleineondernemersregeling (KOR) is weer een andere situatie.</p>
        <p>
          Als je deelneemt aan de KOR, breng je geen btw in rekening aan je klanten. Je brengt dan dus niet simpelweg
          &quot;0% btw&quot; in rekening omdat je een 0%-tarief toepast.
        </p>
        <p>
          Bij de KOR gelden aparte regels voor onder andere btw-aangifte en het aftrekken van btw op zakelijke kosten.
        </p>
        <p>
          Lees meer in de{' '}
          <Link href="/tools/kor-calculator" className="text-warm-orange hover:underline">
            KOR calculator
          </Link>
          .
        </p>

        <h2>Hoe zet je 0% btw op een factuur?</h2>
        <p>Als het 0%-tarief op jouw levering of dienst van toepassing is, moet je de factuur correct opstellen.</p>
        <p>Een eenvoudig voorbeeld:</p>
        <pre className="not-prose overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800 whitespace-pre-wrap">
{`Website-ontwerp                    €1.000,00
BTW 0%                                  €0,00
────────────────────────────────────────────
Totaal                              €1.000,00`}
        </pre>
        <p>
          Afhankelijk van de reden waarom je 0% btw toepast, kunnen aanvullende vermeldingen of bewijsstukken nodig
          zijn.
        </p>
        <p>
          Gebruik daarom niet alleen het btw-tarief als uitgangspunt, maar controleer ook{' '}
          <strong>waarom het 0%-tarief van toepassing is</strong>. Meer over btw op je factuur in{' '}
          <Link href="/blogs/btw-factuur-zzp" className="text-warm-orange hover:underline">
            btw op je factuur als zzp&apos;er
          </Link>
          .
        </p>

        <h2>Factuur naar het buitenland zonder btw</h2>
        <p>Een buitenlandse factuur zonder btw kan dus verschillende oorzaken hebben.</p>
        <p>Bijvoorbeeld:</p>
        <p>
          <strong>0% btw</strong>
        </p>
        <p>
          Je past daadwerkelijk het 0%-tarief toe omdat je levering of dienst onder een regeling voor 0% valt.
        </p>
        <p>
          <strong>Btw verlegd</strong>
        </p>
        <p>Je brengt geen btw in rekening omdat de btw naar je zakelijke klant wordt verlegd.</p>
        <p>
          <strong>Vrijgesteld</strong>
        </p>
        <p>Je verricht een activiteit die onder een btw-vrijstelling valt.</p>
        <p>
          <strong>KOR</strong>
        </p>
        <p>Je neemt deel aan de kleineondernemersregeling en brengt daarom geen btw in rekening.</p>
        <p>
          De factuur kan er in sommige gevallen vergelijkbaar uitzien, maar de btw-behandeling en administratie zijn
          verschillend.
        </p>

        <h2>Veelgemaakte fouten met 0% btw</h2>

        <h3>1. 0% gebruiken omdat je geen btw wilt rekenen</h3>
        <p>
          Je mag niet zelf bepalen dat een factuur 0% btw krijgt. Het 0%-tarief moet op jouw levering of dienst van
          toepassing zijn.
        </p>

        <h3>2. Iedere buitenlandse klant 0% btw geven</h3>
        <p>Een klant in het buitenland betekent niet automatisch dat je 0% btw rekent.</p>
        <p>
          Bij een dienst moet je onder andere kijken naar het soort klant en de plaats waar de dienst voor de btw
          belast is.
        </p>
        <p>Bij een B2B-dienst binnen de EU kan bijvoorbeeld btw-verlegging gelden.</p>

        <h3>3. Btw verlegd verwarren met 0% btw</h3>
        <p>
          Een factuur zonder btw kan zowel bij 0% btw als bij btw-verlegging voorkomen, maar dat betekent niet dat beide
          regelingen hetzelfde zijn.
        </p>

        <h3>4. Geen bewijs bewaren</h3>
        <p>
          Bij bepaalde toepassingen van het 0%-tarief moet je kunnen aantonen dat je terecht 0% hebt toegepast.
        </p>
        <p>Zorg daarom dat je de relevante documenten en administratie bewaart.</p>

        <h2>Btw berekenen voor je factuur</h2>
        <p>Wil je controleren hoeveel btw je over een bedrag moet berekenen?</p>
        <p>
          Met de gratis{' '}
          <Link href="/tools/btw-calculator" className="text-warm-orange hover:underline">
            btw calculator van FactuurBaas
          </Link>{' '}
          kun je onder andere rekenen met:
        </p>
        <ul>
          <li>0% btw</li>
          <li>9% btw</li>
          <li>21% btw</li>
          <li>bedragen inclusief btw</li>
          <li>bedragen exclusief btw</li>
        </ul>

        <GuideToolCta href="/tools/btw-calculator" label="Open de gratis btw calculator →" />

        <p>Wil je daarna een factuur maken? Dat kan ook direct met FactuurBaas.</p>
        <div className="my-8 text-center not-prose">
          <Button
            asChild
            variant="outline"
            className="border-deep-blue text-deep-blue hover:bg-deep-blue hover:text-white font-bold py-3 px-6 rounded-lg text-lg"
          >
            <Link href="/create-invoice">Maak gratis een factuur →</Link>
          </Button>
        </div>

        <h2>Veelgestelde vragen over 0% btw</h2>
        <h3>Wanneer mag ik 0% btw rekenen?</h3>
        <p>
          Alleen wanneer jouw levering of dienst onder een regeling valt waarvoor het 0%-tarief geldt. Het is geen
          algemeen tarief dat je kunt kiezen wanneer je geen btw wilt rekenen.
        </p>
        <h3>Is 0% btw hetzelfde als geen btw?</h3>
        <p>
          Nee. Bij 0% btw pas je een btw-tarief van 0% toe. &quot;Geen btw&quot; kan bijvoorbeeld betrekking hebben op
          btw-vrijstelling, btw-verlegging of de KOR.
        </p>
        <h3>Is een factuur naar het buitenland altijd 0% btw?</h3>
        <p>
          Nee. De btw-behandeling hangt onder andere af van wat je levert, of je klant ondernemer of particulier is, en
          in welk land de prestatie voor de btw belast is.
        </p>
        <h3>Is btw verlegd hetzelfde als 0% btw?</h3>
        <p>
          Nee. Bij btw-verlegging breng je geen btw in rekening omdat de btw naar de afnemer wordt verlegd. Bij 0% btw
          pas je het 0%-tarief toe.
        </p>
        <h3>Kan ik 0% btw gebruiken voor een buitenlandse klant?</h3>
        <p>
          Dat kan in bepaalde situaties, maar niet alleen omdat de klant buiten Nederland woont. Controleer eerst
          welke btw-regels op de levering of dienst van toepassing zijn.
        </p>
        <h3>Moet ik 0% btw op mijn factuur zetten?</h3>
        <p>
          Als het 0%-tarief van toepassing is, moet je de factuur correct opstellen en waar nodig de reden of relevante
          wettelijke verwijzing vermelden. Welke gegevens nodig zijn, hangt af van de specifieke situatie.
        </p>
        <h3>Kan een zzp&apos;er 0% btw rekenen?</h3>
        <p>
          Ja, maar alleen wanneer de betreffende prestatie onder een regeling voor het 0%-tarief valt. Het is niet een
          tarief dat iedere zzp&apos;er vrij kan kiezen.
        </p>
      </>
    ),
  },
  {
    slug: 'welke-btw-rekenen-zzper',
    cluster: 'btw',
    seoTitle: "Welke btw moet ik rekenen als zzp'er? 9%, 21% of 0%",
    title: "Welke btw moet ik rekenen als zzp'er?",
    excerpt:
      "Welke btw moet je als zzp'er rekenen? Bekijk wanneer je 21%, 9% of 0% btw gebruikt en hoe je btw op je factuur vermeldt.",
    keywords:
      "welke btw zzp, btw rekenen zzp, 21% btw zzp, 9% btw zzp, 0% btw zzp, btw op factuur zzp, btw verlegd, kor zzp, exclusief btw",
    tool: {
      href: '/tools/btw-calculator',
      label: 'Bereken btw',
      ctaLabel: 'Bereken gratis btw',
    },
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Factuurbaas/Welke%20btw%20moet%20ik%20rekenen%20als%20zzp%20er.jpg',
      alt: "Welke btw moet ik rekenen als zzp'er?",
    },
    datePublished: '2026-07-15',
    dateModified: '2026-09-03',
    relatedSlugs: ['btw-factuur-zzp', 'buitenlandse-klanten-factureren'],
    relatedGuideSlugs: ['verschil-9-en-21-btw', 'wanneer-gebruik-je-0-btw', 'btw-terugrekenen'],
    faq: [
      {
        question: "Moet iedere zzp'er btw rekenen?",
        answer:
          "Nee. De meeste zzp'ers zijn btw-plichtig, maar er zijn uitzonderingen. Je kunt bijvoorbeeld onder voorwaarden gebruikmaken van de KOR of een btw-vrijgestelde activiteit uitvoeren.",
      },
      {
        question: "Welk btw-tarief gebruiken de meeste zzp'ers?",
        answer:
          "Voor veel zzp'ers die reguliere zakelijke diensten leveren is 21% btw het toepasselijke tarief. Het hangt uiteindelijk af van wat je precies levert.",
      },
      {
        question: 'Wat is het verschil tussen 9% en 21% btw?',
        answer:
          '21% is het algemene btw-tarief. 9% is een verlaagd tarief dat alleen geldt voor bepaalde goederen en diensten.',
      },
      {
        question: 'Moet ik btw rekenen aan particulieren?',
        answer:
          'Als je btw-plichtig bent, moet je meestal ook btw rekenen aan particuliere klanten. Het btw-tarief hangt af van wat je levert.',
      },
      {
        question: 'Is een uurtarief inclusief of exclusief btw?',
        answer:
          'Een zakelijk uurtarief wordt vaak exclusief btw gecommuniceerd. De btw komt dan bovenop het genoemde tarief als je btw in rekening moet brengen.',
      },
      {
        question: 'Kan ik zelf kiezen tussen 9% en 21% btw?',
        answer:
          'Nee. Het toepasselijke btw-tarief wordt bepaald door de btw-regels voor de specifieke goederen of diensten die je levert.',
      },
      {
        question: 'Wat moet ik doen als ik het verkeerde btw-tarief heb gebruikt?',
        answer:
          'Corrigeer de fout zo snel mogelijk. De manier waarop je een fout corrigeert hangt onder andere af van wanneer je de fout ontdekt en hoe de factuur en btw-aangifte zijn verwerkt.',
      },
    ],
    content: (
      <>
        <p>
          Welke btw moet je als zzp&apos;er rekenen? In Nederland zijn de belangrijkste btw-tarieven{' '}
          <strong>21%, 9% en 0%</strong>. Welk tarief je gebruikt, hangt af van wat je levert en aan wie je levert.
        </p>
        <p>
          Voor veel zzp&apos;ers die diensten leveren aan Nederlandse klanten is <strong>21% btw</strong> het
          standaardtarief. Maar voor bepaalde producten en diensten geldt 9%, terwijl in specifieke situaties het
          0%-tarief of een andere btw-regeling van toepassing kan zijn.
        </p>
        <p>
          Ook zijn er situaties waarin je helemaal geen btw op je factuur zet, bijvoorbeeld door de{' '}
          <strong>KOR</strong>, een btw-vrijstelling of btw-verlegging.
        </p>
        <p>
          Met de gratis{' '}
          <Link href="/tools/btw-calculator" className="text-warm-orange hover:underline">
            btw calculator van FactuurBaas
          </Link>{' '}
          bereken je eenvoudig hoeveel btw je over een bedrag moet rekenen.
        </p>

        <GuideToolCta href="/tools/btw-calculator" label="Bereken btw →" />

        <h2>Welke btw-tarieven zijn er?</h2>
        <p>De belangrijkste btw-tarieven in Nederland zijn:</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[420px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Btw-tarief
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Wanneer?
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3 font-semibold text-deep-blue">21%</td>
                <td className="px-4 py-3">Het algemene btw-tarief voor de meeste goederen en diensten</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3 font-semibold text-deep-blue">9%</td>
                <td className="px-4 py-3">
                  Bepaalde goederen en diensten waarvoor het verlaagde tarief geldt
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-deep-blue">0%</td>
                <td className="px-4 py-3">
                  Specifieke situaties, onder andere bij bepaalde internationale leveringen
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Daarnaast bestaan er <strong>btw-vrijstellingen</strong> en situaties waarin btw wordt{' '}
          <strong>verlegd</strong>. Dat zijn geen extra btw-tarieven, maar andere btw-regels.
        </p>

        <h2>De meeste zzp&apos;ers rekenen 21% btw</h2>
        <p>
          Het algemene btw-tarief is <strong>21%</strong>.
        </p>
        <p>Voorbeelden van diensten waarvoor vaak 21% btw geldt:</p>
        <ul>
          <li>webdesign</li>
          <li>websites bouwen</li>
          <li>marketing</li>
          <li>social media diensten</li>
          <li>advies en consultancy</li>
          <li>fotografie</li>
          <li>softwareontwikkeling</li>
          <li>zakelijke dienstverlening</li>
          <li>veel freelance werkzaamheden</li>
        </ul>
        <p>Voorbeeld:</p>
        <p>Je werkt 10 uur als freelance marketeer voor €75 per uur.</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[280px] text-sm text-slate-700 sm:text-base">
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">10 uur × €75</td>
                <td className="px-4 py-3 text-right">€750,00</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">BTW 21%</td>
                <td className="px-4 py-3 text-right">€157,50</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-deep-blue">Totaal</td>
                <td className="px-4 py-3 text-right font-semibold text-deep-blue">€907,50</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Je klant betaalt €907,50. De btw die je in rekening brengt is niet hetzelfde als je eigen inkomen. Je
          verwerkt deze btw in je btw-administratie en btw-aangifte.
        </p>

        <h2>Wanneer gebruik je 9% btw?</h2>
        <p>
          Het <strong>9%-tarief</strong> geldt alleen voor bepaalde goederen en diensten. Je kunt dus niet zelf kiezen
          tussen 9% en 21%.
        </p>
        <p>Voorbeelden van situaties waarin 9% btw kan gelden zijn bepaalde:</p>
        <ul>
          <li>voedingsmiddelen</li>
          <li>boeken en andere publicaties</li>
          <li>werkzaamheden aan woningen onder bepaalde voorwaarden</li>
          <li>culturele diensten</li>
          <li>werkzaamheden in specifieke sectoren</li>
        </ul>
        <p>De voorwaarden verschillen per soort product of dienst.</p>

        <h3>Voorbeeld: schilderwerk</h3>
        <p>
          Voor bepaalde schilderwerkzaamheden aan woningen die aan de voorwaarden voldoen, kan 9% btw gelden.
        </p>
        <p>Bij €1.000 exclusief btw:</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[280px] text-sm text-slate-700 sm:text-base">
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Schilderwerk</td>
                <td className="px-4 py-3 text-right">€1.000,00</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">BTW 9%</td>
                <td className="px-4 py-3 text-right">€90,00</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-deep-blue">Totaal</td>
                <td className="px-4 py-3 text-right font-semibold text-deep-blue">€1.090,00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Niet ieder schilderwerk valt automatisch onder 9%. Controleer daarom altijd of jouw specifieke werkzaamheden
          aan de voorwaarden voldoen.
        </p>
        <p>
          Lees ook:{' '}
          <Link href="/gidsen/verschil-9-en-21-btw" className="text-warm-orange hover:underline">
            9% of 21% btw: wat valt eronder
          </Link>
          .
        </p>

        <h2>9% of 21% btw: hoe weet ik welk tarief geldt?</h2>
        <p>De belangrijkste regel is:</p>
        <p>
          <strong>Kijk eerst naar wat je precies verkoopt of levert.</strong>
        </p>
        <p>
          Het feit dat je zzp&apos;er bent, bepaalt niet welk btw-tarief je gebruikt. Hetzelfde geldt voor je
          functietitel.
        </p>
        <p>
          Een fotograaf kan bijvoorbeeld voor verschillende soorten prestaties met verschillende btw-regels te maken
          krijgen. Een schilder kan onder bepaalde voorwaarden 9% rekenen, terwijl veel andere zakelijke diensten onder
          21% vallen.
        </p>
        <p>Twijfel je? Zoek dan de specifieke prestatie op in de actuele btw-regels van de Belastingdienst.</p>

        <h2>Wanneer gebruik je 0% btw?</h2>
        <p>
          Het <strong>0%-tarief</strong> geldt in specifieke situaties. Het wordt onder andere gebruikt bij bepaalde
          internationale leveringen.
        </p>
        <p>
          Bijvoorbeeld bij een levering van goederen aan een ondernemer in een ander EU-land wanneer aan de voorwaarden
          voor een intracommunautaire levering is voldaan.
        </p>
        <p>Ook bij bepaalde exporttransacties buiten de EU kan 0% btw gelden.</p>
        <p>
          Belangrijk: <strong>een buitenlandse klant betekent niet automatisch 0% btw</strong>.
        </p>
        <p>
          Bij veel B2B-diensten aan ondernemers in een ander EU-land wordt bijvoorbeeld de btw{' '}
          <strong>verlegd</strong> in plaats van dat je 0% btw toepast.
        </p>
        <p>
          Lees meer over{' '}
          <Link href="/gidsen/wanneer-gebruik-je-0-btw" className="text-warm-orange hover:underline">
            wanneer je 0% btw gebruikt
          </Link>
          .
        </p>

        <h2>0% btw, btw verlegd of geen btw?</h2>
        <p>Een factuur zonder een btw-bedrag kan verschillende oorzaken hebben.</p>

        <h3>0% btw</h3>
        <p>Je past daadwerkelijk het 0%-tarief toe omdat jouw prestatie onder een regeling voor 0% valt.</p>

        <h3>Btw verlegd</h3>
        <p>
          De btw wordt naar je klant verlegd. Dit komt bijvoorbeeld bij bepaalde internationale B2B-diensten voor.
        </p>

        <h3>Btw-vrijstelling</h3>
        <p>
          Je activiteit valt onder een btw-vrijstelling. Je brengt dan geen btw in rekening en voorbelasting kan onder
          voorwaarden niet aftrekbaar zijn.
        </p>

        <h3>KOR</h3>
        <p>
          Als je deelneemt aan de kleineondernemersregeling, breng je geen btw in rekening aan je klanten en kun je de
          btw op zakelijke kosten en investeringen niet aftrekken. Check met de{' '}
          <Link href="/tools/kor-calculator" className="text-warm-orange hover:underline">
            KOR calculator
          </Link>{' '}
          of die regeling bij jou past.
        </p>
        <p>
          Dit zijn dus <strong>verschillende situaties</strong>, ook al staat er op de factuur geen normaal
          btw-bedrag zoals 21%.
        </p>

        <h2>Wanneer hoef je geen btw te rekenen?</h2>
        <p>Niet iedere zzp&apos;er brengt btw in rekening.</p>
        <p>Dat kan bijvoorbeeld wanneer:</p>
        <ul>
          <li>je gebruikmaakt van de KOR</li>
          <li>je werkzaamheden onder een btw-vrijstelling vallen</li>
          <li>de btw naar je klant wordt verlegd</li>
          <li>een specifieke regeling voor 0% btw van toepassing is</li>
        </ul>
        <p>
          De reden waarom je geen btw rekent, is belangrijk voor je administratie en de manier waarop je de factuur
          opstelt.
        </p>

        <h2>Btw op je factuur als zzp&apos;er</h2>
        <p>
          Als je btw rekent, moet je op je factuur duidelijk laten zien hoe het bedrag is opgebouwd.
        </p>
        <p>Bijvoorbeeld bij 21% btw:</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[280px] text-sm text-slate-700 sm:text-base">
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Diensten</td>
                <td className="px-4 py-3 text-right">€500,00</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">BTW 21%</td>
                <td className="px-4 py-3 text-right">€105,00</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-deep-blue">Totaal</td>
                <td className="px-4 py-3 text-right font-semibold text-deep-blue">€605,00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Je kunt je uurtarief bijvoorbeeld communiceren als:</p>
        <p>
          <strong>€75 per uur exclusief btw</strong>
        </p>
        <p>De klant betaalt bij 21% btw vervolgens €90,75 per uur inclusief btw.</p>

        <h3>Factuur exclusief btw</h3>
        <p>
          Wanneer je als zzp&apos;er een prijs noemt <strong>exclusief btw</strong>, betekent dit dat de btw nog
          bovenop het genoemde bedrag komt als je btw in rekening moet brengen.
        </p>
        <p>Bijvoorbeeld:</p>
        <p>
          <strong>€1.000 exclusief btw</strong>
        </p>
        <p>Bij 21% btw:</p>
        <ul>
          <li>€1.000 exclusief btw</li>
          <li>€210 btw</li>
          <li>€1.210 inclusief btw</li>
        </ul>
        <p>
          Dit maakt het verschil tussen bedragen <strong>exclusief btw</strong> en <strong>inclusief btw</strong>{' '}
          duidelijk voor je klant. Meer hierover in{' '}
          <Link href="/blogs/btw-factuur-zzp" className="text-warm-orange hover:underline">
            btw op je factuur als zzp&apos;er
          </Link>
          .
        </p>

        <h2>Hoe bereken je btw?</h2>
        <p>Je kunt btw eenvoudig berekenen met een percentage.</p>
        <p>Bij €500 exclusief btw en 21%:</p>
        <p>
          <strong>€500 × 21% = €105 btw</strong>
        </p>
        <p>Totaal:</p>
        <p>
          <strong>€500 + €105 = €605</strong>
        </p>
        <p>
          Wil je een bedrag inclusief btw terugrekenen naar exclusief btw? Dan gebruik je een andere berekening. Zie
          ook{' '}
          <Link href="/gidsen/btw-terugrekenen" className="text-warm-orange hover:underline">
            hoe bereken je btw terug
          </Link>
          .
        </p>
        <p>
          Met de{' '}
          <Link href="/tools/btw-calculator" className="text-warm-orange hover:underline">
            gratis btw calculator van FactuurBaas
          </Link>{' '}
          kun je beide berekeningen snel controleren.
        </p>

        <GuideToolCta href="/tools/btw-calculator" label="Bereken btw →" />

        <h2>Veelgemaakte fouten met btw</h2>

        <h3>Je gebruikt altijd 21%</h3>
        <p>21% is het algemene tarief, maar niet iedere prestatie valt automatisch onder 21%.</p>
        <p>Controleer of jouw product of dienst onder een verlaagd tarief, 0%-tarief of vrijstelling valt.</p>

        <h3>Je gebruikt 9% omdat je minder btw wilt rekenen</h3>
        <p>
          Je kunt niet zelf kiezen voor 9%. Het verlaagde tarief geldt alleen voor specifieke goederen en diensten.
        </p>

        <h3>Je gebruikt 0% voor iedere buitenlandse klant</h3>
        <p>Een buitenlandse klant betekent niet automatisch dat je 0% btw moet rekenen.</p>
        <p>
          Bij internationale diensten gelden aparte regels, waaronder regels over btw-verlegging. Lees{' '}
          <Link href="/blogs/buitenlandse-klanten-factureren" className="text-warm-orange hover:underline">
            buitenlandse klanten factureren
          </Link>
          .
        </p>

        <h3>Je verwart exclusief en inclusief btw</h3>
        <p>
          €1.000 exclusief btw is bij 21% btw <strong>€1.210 inclusief btw</strong>.
        </p>
        <p>
          Zet daarom op offertes en prijsafspraken duidelijk of je bedragen inclusief of exclusief btw noemt.
        </p>

        <h3>Je vergeet btw op je factuur</h3>
        <p>
          Als je btw-plichtig bent en btw moet rekenen, moet je het btw-bedrag correct op je factuur verwerken.
        </p>

        <h2>Welk btw-tarief moet ik gebruiken? Kort overzicht</h2>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[420px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Situatie
                </th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">
                  Btw
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">De meeste diensten en goederen</td>
                <td className="px-4 py-3 text-right font-semibold text-deep-blue">21%</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Specifieke goederen en diensten</td>
                <td className="px-4 py-3 text-right font-semibold text-deep-blue">9%</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Specifieke internationale situaties</td>
                <td className="px-4 py-3 text-right font-semibold text-deep-blue">0%</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Btw wordt naar de klant verlegd</td>
                <td className="px-4 py-3 text-right font-semibold text-deep-blue">Btw verlegd</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">KOR</td>
                <td className="px-4 py-3 text-right font-semibold text-deep-blue">Geen btw in rekening brengen</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Vrijgestelde activiteit</td>
                <td className="px-4 py-3 text-right font-semibold text-deep-blue">Geen btw in rekening brengen</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Dit is een vereenvoudigd overzicht. Het juiste btw-regime hangt af van je specifieke product of dienst, je
          klant en soms het land van de klant.
        </p>

        <h2>Btw berekenen met de gratis calculator</h2>
        <p>Wil je snel controleren hoeveel btw je moet rekenen?</p>
        <p>
          Met de{' '}
          <Link href="/tools/btw-calculator" className="text-warm-orange hover:underline">
            btw calculator van FactuurBaas
          </Link>{' '}
          kun je bedragen berekenen met 0%, 9% en 21% btw en bedragen inclusief en exclusief btw controleren.
        </p>

        <GuideToolCta href="/tools/btw-calculator" label="Bereken gratis btw →" />

        <p>Daarna kun je je factuur direct online maken met FactuurBaas.</p>
        <div className="my-8 text-center not-prose">
          <Button
            asChild
            variant="outline"
            className="border-deep-blue text-deep-blue hover:bg-deep-blue hover:text-white font-bold py-3 px-6 rounded-lg text-lg"
          >
            <Link href="/create-invoice">Maak gratis een factuur →</Link>
          </Button>
        </div>

        <h2>Veelgestelde vragen</h2>
        <h3>Moet iedere zzp&apos;er btw rekenen?</h3>
        <p>
          Nee. De meeste zzp&apos;ers zijn btw-plichtig, maar er zijn uitzonderingen. Je kunt bijvoorbeeld onder
          voorwaarden gebruikmaken van de KOR of een btw-vrijgestelde activiteit uitvoeren.
        </p>
        <h3>Welk btw-tarief gebruiken de meeste zzp&apos;ers?</h3>
        <p>
          Voor veel zzp&apos;ers die reguliere zakelijke diensten leveren is 21% btw het toepasselijke tarief. Het
          hangt uiteindelijk af van wat je precies levert.
        </p>
        <h3>Wat is het verschil tussen 9% en 21% btw?</h3>
        <p>
          21% is het algemene btw-tarief. 9% is een verlaagd tarief dat alleen geldt voor bepaalde goederen en diensten.
        </p>
        <h3>Moet ik btw rekenen aan particulieren?</h3>
        <p>
          Als je btw-plichtig bent, moet je meestal ook btw rekenen aan particuliere klanten. Het btw-tarief hangt af
          van wat je levert.
        </p>
        <h3>Is een uurtarief inclusief of exclusief btw?</h3>
        <p>
          Een zakelijk uurtarief wordt vaak exclusief btw gecommuniceerd. De btw komt dan bovenop het genoemde tarief
          als je btw in rekening moet brengen.
        </p>
        <h3>Kan ik zelf kiezen tussen 9% en 21% btw?</h3>
        <p>
          Nee. Het toepasselijke btw-tarief wordt bepaald door de btw-regels voor de specifieke goederen of diensten
          die je levert.
        </p>
        <h3>Wat moet ik doen als ik het verkeerde btw-tarief heb gebruikt?</h3>
        <p>
          Corrigeer de fout zo snel mogelijk. De manier waarop je een fout corrigeert hangt onder andere af van wanneer
          je de fout ontdekt en hoe de factuur en btw-aangifte zijn verwerkt.
        </p>
      </>
    ),
  },
  {
    slug: 'btw-berekenen-excel',
    cluster: 'btw',
    seoTitle: 'BTW berekenen in Excel: formule voor 21% en 9%',
    title: 'BTW berekenen in Excel',
    excerpt:
      'BTW berekenen in Excel? Bekijk de formules voor 21% en 9% btw, btw erbij optellen en btw uit een inclusief bedrag halen. Met voorbeelden.',
    keywords:
      'btw berekenen excel, excel btw berekenen formule, btw formule excel, formule btw berekenen, btw berekenen 21 procent formule, hoe haal je 21 btw uit een bedrag, btw berekenen formule, btw in excel, bedrag exclusief btw berekenen',
    tool: {
      href: '/tools/btw-calculator',
      label: 'Bereken direct btw',
      ctaLabel: 'Bereken btw gratis',
    },
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Factuurbaas/Btw%20berekenen%20in%20Excel.jpg',
      alt: 'BTW berekenen in Excel met spreadsheet en formules',
    },
    datePublished: '2026-07-15',
    dateModified: '2026-08-28',
    relatedSlugs: ['btw-factuur-zzp', 'factuur-templates-zzp'],
    relatedGuideSlugs: [
      'btw-terugrekenen',
      'inclusief-btw-naar-exclusief-btw',
      'verschil-9-en-21-btw',
      'wanneer-gebruik-je-0-btw',
      'btw-berekenen-buitenlandse-klanten',
      'welke-btw-rekenen-zzper',
    ],
    faq: [
      {
        question: 'Hoe bereken ik 21% btw in Excel?',
        answer: 'Vermenigvuldig het bedrag exclusief btw met 21%. Voorbeeld: =1000*21% geeft €210 btw. Totaal inclusief btw: =1000*1,21 geeft €1.210.',
      },
      {
        question: 'Hoe haal je 21% btw uit een bedrag in Excel?',
        answer: 'Bij een bedrag inclusief 21% btw: btw = =A1*21/121. Bedrag exclusief btw = =A1/1,21. Bij €1.210 inclusief btw is de btw €210 en exclusief btw €1.000.',
      },
      {
        question: 'Wat is de formule voor btw berekenen in Excel?',
        answer: 'Btw over exclusief bedrag: =A1*21% of =A1*9%. Btw erbij: =A1*1,21 of =A1*1,09. Btw uit inclusief bedrag: =A1*21/121 of =A1*9/109. Bedrag excl. btw: =A1/1,21 of =A1/1,09.',
      },
      {
        question: 'Welke formule gebruik ik voor 9% btw in Excel?',
        answer: 'Gebruik =A1*9% voor het btw-bedrag over een exclusief bedrag, =A1*1,09 om 9% erbij te rekenen, of =A1*9/109 om btw uit een inclusief bedrag te halen.',
      },
      {
        question: 'Kan ik een factuur maken in Excel?',
        answer: 'Ja, maar je moet zelf controleren of alle verplichte gegevens aanwezig zijn en of de btw correct wordt berekend en afgerond.',
      },
    ],
    content: (
      <>
        <p>
          Wil je <strong>btw berekenen in Excel</strong>? Met een eenvoudige formule kun je 21% of 9% btw over een bedrag
          berekenen. Je kunt ook btw bij een bedrag optellen of de btw uit een bedrag inclusief btw terugrekenen.
        </p>
        <p>
          Hieronder vind je de belangrijkste Excel-formules met voorbeelden. Wil je sneller rekenen zonder formules?
          Gebruik de gratis{' '}
          <Link href="/tools/btw-calculator" className="text-warm-orange hover:underline">
            BTW calculator
          </Link>{' '}
          van FactuurBaas.
        </p>

        <h2>BTW berekenen in Excel: 21%</h2>
        <p>Voorbeeld: bedrag exclusief btw is €1.000.</p>
        <p>
          <strong>Btw-bedrag:</strong>
        </p>
        <pre className="not-prose overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800">
          =A1*21%
        </pre>
        <p>
          Resultaat: <strong>€210 btw</strong>
        </p>
        <p>
          <strong>Totaal inclusief btw:</strong>
        </p>
        <pre className="not-prose overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800">
          =A1*1,21
        </pre>
        <p>
          Resultaat: <strong>€1.210 inclusief btw</strong>
        </p>

        <h2>BTW berekenen in Excel: 9%</h2>
        <p>Dezelfde aanpak voor het verlaagde tarief:</p>
        <p>
          <strong>Btw-bedrag:</strong>
        </p>
        <pre className="not-prose overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800">
          =A1*9%
        </pre>
        <p>
          <strong>Totaal inclusief btw:</strong>
        </p>
        <pre className="not-prose overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800">
          =A1*1,09
        </pre>

        <h2>BTW uit een bedrag halen in Excel</h2>
        <p>
          Dit is anders dan btw <em>erbij</em> rekenen. Stel: je hebt €1.210 inclusief 21% btw en wilt weten hoeveel btw
          daarvan is.
        </p>
        <p>
          <strong>Btw-bedrag (21/121-methode):</strong>
        </p>
        <pre className="not-prose overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800">
          =A1*21/121
        </pre>
        <p>
          Resultaat: <strong>€210 btw</strong>
        </p>
        <p>
          <strong>Bedrag exclusief btw:</strong>
        </p>
        <pre className="not-prose overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800">
          =A1/1,21
        </pre>
        <p>
          Resultaat: <strong>€1.000 exclusief btw</strong>
        </p>
        <p>
          Meer uitleg:{' '}
          <Link href="/gidsen/btw-terugrekenen" className="text-warm-orange hover:underline">
            BTW terugrekenen
          </Link>
          .
        </p>

        <h2>BTW berekenen van een bedrag inclusief btw</h2>
        <p>
          De <strong>21/121-formule</strong> haalt btw uit een inclusief bedrag bij 21% btw. Bij 9% btw gebruik je{' '}
          <strong>9/109</strong>:
        </p>
        <pre className="not-prose overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800">
          =A1*9/109
        </pre>
        <p>
          Zo bereken je het btw-bedrag direct uit een totaalbedrag inclusief btw — handig bij bonnetjes, offertes of
          facturen waar alleen het eindbedrag staat.
        </p>

        <h2>Bedrag exclusief btw berekenen</h2>
        <p>Heb je een bedrag inclusief btw en wil je het bedrag exclusief btw weten?</p>
        <ul>
          <li>
            <strong>21% btw:</strong> <code className="text-sm">=A1/1,21</code>
          </li>
          <li>
            <strong>9% btw:</strong> <code className="text-sm">=A1/1,09</code>
          </li>
        </ul>
        <p>
          Zie ook:{' '}
          <Link href="/gidsen/inclusief-btw-naar-exclusief-btw" className="text-warm-orange hover:underline">
            bedrag inclusief btw omrekenen naar exclusief btw
          </Link>
          .
        </p>

        <h2>BTW berekenen met een percentage in een aparte cel</h2>
        <p>Handig in Excel: zet het btw-percentage in een aparte cel, zodat je de formule niet hoeft aan te passen.</p>
        <CalculationTable
          rows={[
            ['Bedrag excl. btw (A2)', '€1.000'],
            ['BTW-percentage (B2)', '21%'],
            ['Btw-bedrag', '€210'],
          ]}
        />
        <p>
          <strong>Formule voor btw-bedrag:</strong>
        </p>
        <pre className="not-prose overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800">
          =A2*B2
        </pre>
        <p>
          Wijzig cel B2 naar 9% of 21% — de formule blijft hetzelfde. Gebruik altijd het procentteken (21%) en niet
          alleen het getal 21.
        </p>

        <h2>BTW berekenen in Excel: overzicht formules</h2>
        <p>Stel dat je bedrag in cel A1 staat:</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[480px] text-sm text-slate-700">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Berekening
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Excel-formule (bedrag in A1)
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['21% btw berekenen', '=A1*21%'],
                ['9% btw berekenen', '=A1*9%'],
                ['21% erbij optellen', '=A1*1,21'],
                ['9% erbij optellen', '=A1*1,09'],
                ['21% btw uit inclusief bedrag halen', '=A1*21/121'],
                ['9% btw uit inclusief bedrag halen', '=A1*9/109'],
                ['Bedrag excl. btw bij 21%', '=A1/1,21'],
                ['Bedrag excl. btw bij 9%', '=A1/1,09'],
              ].map(([label, formula]) => (
                <tr key={label} className="border-b border-slate-100 last:border-0">
                  <td className="px-4 py-3 font-medium text-deep-blue">{label}</td>
                  <td className="px-4 py-3 font-mono text-slate-800">{formula}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Meer uitleg over btw berekenen</h2>
        <p>Elke gids behandelt één specifieke vraag — zo hoef je niet alles op één pagina te zoeken:</p>
        <ul>
          <li>
            <Link href="/gidsen/btw-terugrekenen" className="text-warm-orange hover:underline">
              BTW terugrekenen
            </Link>{' '}
            — btw uit een inclusief bedrag halen
          </li>
          <li>
            <Link href="/gidsen/inclusief-btw-naar-exclusief-btw" className="text-warm-orange hover:underline">
              Inclusief btw naar exclusief btw
            </Link>{' '}
            — een bedrag inclusief btw omrekenen
          </li>
          <li>
            <Link href="/gidsen/verschil-9-en-21-btw" className="text-warm-orange hover:underline">
              9% of 21% btw: wat valt eronder
            </Link>{' '}
            — wanneer gebruik je welk tarief?
          </li>
          <li>
            <Link href="/gidsen/wanneer-gebruik-je-0-btw" className="text-warm-orange hover:underline">
              Wanneer gebruik je 0% btw
            </Link>
          </li>
          <li>
            <Link href="/gidsen/btw-berekenen-buitenlandse-klanten" className="text-warm-orange hover:underline">
              BTW berekenen voor buitenlandse klanten
            </Link>
          </li>
          <li>
            <Link href="/gidsen/welke-btw-rekenen-zzper" className="text-warm-orange hover:underline">
              Welke btw moet ik rekenen als zzp&apos;er?
            </Link>
          </li>
        </ul>

        <GuideToolCta href="/tools/btw-calculator" label="Bereken btw direct →" />

        <h2>Veelgemaakte fouten bij btw berekenen in Excel</h2>
        <h3>Het btw-percentage verkeerd invoeren</h3>
        <p>
          Gebruik <strong>21%</strong> en niet <strong>21</strong>. Excel ziet 21% als 0,21 — maar 21 zonder procentteken
          is eenentwintig keer het bedrag.
        </p>
        <h3>Btw afronden op de verkeerde plek</h3>
        <p>
          Bij meerdere factuurregels kan afronding verschillen. Een professionele factuurtool berekent btw meestal
          automatisch per regel volgens de juiste afrondingsregels.
        </p>
        <h3>Bedragen inclusief en exclusief btw door elkaar halen</h3>
        <p>
          Controleer altijd of je startbedrag inclusief of exclusief btw is. €1.210 inclusief 21% btw is niet hetzelfde
          als €1.210 exclusief btw.
        </p>

        <h2>Is Excel geschikt voor facturen?</h2>
        <p>
          Excel is prima voor btw-berekeningen, maar voor facturen moet je zelf letten op factuurnummers, verplichte
          gegevens en PDF-opmaak. Groei je als ondernemer, dan wordt een online factuurtool vaak makkelijker.
        </p>

        <h2>Btw berekenen zonder Excel</h2>
        <p>Met de gratis BTW calculator bereken je direct btw toevoegen, btw terugrekenen, en 21%, 9% of 0% btw — zonder formules.</p>
        <GuideToolCta href="/tools/btw-calculator" label="Bereken btw gratis →" />

        <h2>Veelgestelde vragen</h2>
        <h3>Hoe bereken ik 21% btw in Excel?</h3>
        <p>Vermenigvuldig het bedrag exclusief btw met 21%. Voorbeeld: =1000*21% — resultaat: €210 btw.</p>
        <h3>Hoe haal je 21% btw uit een bedrag in Excel?</h3>
        <p>Gebruik =A1*21/121 voor het btw-bedrag, of =A1/1,21 voor het bedrag exclusief btw.</p>
        <h3>Welke formule gebruik ik voor 9% btw?</h3>
        <p>=A1*9% voor btw over exclusief, =A1*1,09 om 9% erbij te rekenen, =A1*9/109 om btw uit inclusief te halen.</p>
        <h3>Kan ik een factuur maken in Excel?</h3>
        <p>Ja, maar controleer zelf of alle verplichte gegevens kloppen en de btw correct is berekend.</p>
      </>
    ),
  },
  {
    slug: 'veelgemaakte-fouten-btw-berekenen',
    cluster: 'btw',
    seoTitle: 'Veelgemaakte fouten bij btw berekenen: 9 fouten uitgelegd',
    title: 'Veelgemaakte fouten bij btw berekenen',
    excerpt:
      'Welke fouten worden vaak gemaakt bij het berekenen van btw? Bekijk 9 veelgemaakte btw-fouten en leer hoe je btw correct berekent en op je factuur verwerkt.',
    keywords:
      'veelgemaakte fouten bij btw berekenen, btw verkeerd berekend, btw terugrekenen, btw doorberekenen, verkeerd btw-tarief, btw berekenen inclusief exclusief, btw op factuur fout, kor btw',
    tool: {
      href: '/tools/btw-calculator',
      label: 'Bereken direct btw',
      ctaLabel: 'Bereken btw gratis',
    },
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Factuurbaas/Veelgemaakte%20fouten%20bij%20btw%20berekenen.jpg',
      alt: 'Veelgemaakte fouten bij btw berekenen: ondernemer met administratie',
    },
    datePublished: '2026-07-15',
    dateModified: '2026-09-03',
    relatedSlugs: ['btw-factuur-zzp', 'factuur-fouten-voorkomen', 'buitenlandse-klanten-factureren'],
    relatedGuideSlugs: [
      'btw-terugrekenen',
      'welke-btw-rekenen-zzper',
      'btw-berekenen-excel',
      'verschil-9-en-21-btw',
      'wanneer-gebruik-je-0-btw',
      'hoe-rond-je-btw-af',
    ],
    faq: [
      {
        question: 'Wat gebeurt er als ik een verkeerd btw-tarief heb gebruikt?',
        answer:
          'Een verkeerd btw-tarief kan betekenen dat je te veel of te weinig btw hebt berekend. Wat je vervolgens moet doen, hangt af van de situatie en of de fout al in je btw-aangifte is verwerkt. Controleer de actuele informatie van de Belastingdienst of vraag advies aan een boekhouder.',
      },
      {
        question: 'Hoe bereken ik btw terug uit een bedrag inclusief btw?',
        answer:
          'Bij 21% btw deel je een bedrag inclusief btw door 1,21 om het bedrag exclusief btw te berekenen. Bijvoorbeeld: €121 ÷ 1,21 = €100 exclusief btw. Het verschil van €21 is de btw.',
      },
      {
        question: 'Moet ik btw altijd doorberekenen aan mijn klant?',
        answer:
          'Als je btw-plichtig bent, moet je in veel gevallen btw in rekening brengen. Er zijn uitzonderingen, bijvoorbeeld bij bepaalde vrijstellingen, de KOR en bepaalde internationale transacties.',
      },
      {
        question: 'Waarom klopt mijn btw-berekening niet?',
        answer:
          'Controleer eerst of je met een bedrag inclusief of exclusief btw werkt. Controleer daarna het gebruikte btw-tarief en kijk of er sprake is van afrondingsverschillen.',
      },
      {
        question: 'Kan een fout in mijn btw-berekening gevolgen hebben?',
        answer:
          'Ja. Een fout kan ertoe leiden dat je te veel of te weinig btw hebt aangegeven of afgedragen. Afhankelijk van de situatie kan dit moeten worden gecorrigeerd. Bij twijfel over een concrete fout: controleer de actuele regels van de Belastingdienst.',
      },
    ],
    content: (
      <>
        <p>
          Btw berekenen lijkt eenvoudig, maar een kleine fout kan ervoor zorgen dat je factuur niet klopt of dat je een
          verkeerd bedrag in je btw-aangifte verwerkt.
        </p>
        <p>
          Vooral het verschil tussen bedragen <strong>inclusief en exclusief btw</strong>, het kiezen van het juiste
          btw-tarief en het verwerken van btw op facturen zorgt regelmatig voor verwarring.
        </p>
        <p>
          In deze gids bespreken we <strong>9 veelgemaakte fouten bij het berekenen van btw</strong> en leggen we uit hoe
          je ze voorkomt.
        </p>
        <p>
          Wil je direct een bedrag inclusief of exclusief btw berekenen? Gebruik dan onze gratis{' '}
          <Link href="/tools/btw-calculator" className="text-warm-orange hover:underline">
            btw calculator
          </Link>
          .
        </p>

        <GuideToolCta href="/tools/btw-calculator" label="Bereken btw direct →" />

        <h2>1. 21% btw berekenen over een bedrag inclusief btw</h2>
        <p>Dit is een van de meest voorkomende fouten bij btw berekenen.</p>
        <p>
          Stel dat een bedrag <strong>€121 inclusief 21% btw</strong> is. Je kunt dan niet simpelweg 21% van €121 nemen.
        </p>
        <h3>Foutieve berekening</h3>
        <p>€121 × 21% = €25,41 btw</p>
        <h3>Juiste berekening</h3>
        <p>€121 ÷ 1,21 = €100 exclusief btw</p>
        <p>
          €121 − €100 = <strong>€21 btw</strong>
        </p>
        <p>Het bedrag van €121 bestaat dus uit €100 exclusief btw en €21 btw.</p>
        <p>
          Dit is het verschil tussen <strong>btw toevoegen</strong> en{' '}
          <Link href="/gidsen/btw-terugrekenen" className="text-warm-orange hover:underline">
            btw terugrekenen
          </Link>
          .
        </p>

        <h2>2. Het verkeerde btw-tarief gebruiken</h2>
        <p>Niet iedere ondernemer gebruikt automatisch 21% btw. In Nederland zijn onder andere deze tarieven van belang:</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[480px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Btw-tarief
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Wanneer?
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3 font-medium text-deep-blue">21%</td>
                <td className="px-4 py-3">Het algemene btw-tarief voor de meeste goederen en diensten</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3 font-medium text-deep-blue">9%</td>
                <td className="px-4 py-3">Voor bepaalde goederen en diensten</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-deep-blue">0%</td>
                <td className="px-4 py-3">
                  Onder bepaalde omstandigheden, bijvoorbeeld bij bepaalde internationale transacties
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Welk tarief je moet gebruiken, hangt af van wat je levert en van de omstandigheden van de transactie. Een
          verkeerd btw-tarief kan ervoor zorgen dat je te veel of te weinig btw in rekening brengt.
        </p>
        <p>
          Twijfel je welk tarief je moet gebruiken? Lees{' '}
          <Link href="/gidsen/welke-btw-rekenen-zzper" className="text-warm-orange hover:underline">
            welke btw moet ik rekenen als zzp&apos;er?
          </Link>{' '}
          en{' '}
          <Link href="/gidsen/verschil-9-en-21-btw" className="text-warm-orange hover:underline">
            9% of 21% btw: wat valt eronder
          </Link>
          .
        </p>

        <h2>3. Een percentage verkeerd invoeren</h2>
        <p>Een fout in een calculator, spreadsheet of boekhoudprogramma kan een groot verschil maken.</p>
        <p>
          Voor een berekening met 21% gebruik je bijvoorbeeld: <strong>21% = 0,21</strong>
        </p>
        <p>Een veelgemaakte fout is om 21 in plaats van 0,21 als percentage te gebruiken. Hetzelfde geldt voor andere percentages:</p>
        <ul>
          <li>9% = 0,09</li>
          <li>21% = 0,21</li>
        </ul>
        <p>
          Controleer daarom altijd of een programma om een percentage of een decimaal getal vraagt. Meer uitleg in{' '}
          <Link href="/gidsen/btw-berekenen-excel" className="text-warm-orange hover:underline">
            btw berekenen in Excel
          </Link>
          .
        </p>

        <h2>4. Btw vergeten op de factuur</h2>
        <p>Als je btw-plichtig bent, moet je btw in veel gevallen afzonderlijk op je factuur vermelden. Bijvoorbeeld:</p>
        <CalculationTable
          rows={[
            ['Website ontwerp', '€1.000'],
            ['21% btw', '€210'],
            ['Totaal', '€1.210'],
          ]}
        />
        <p>
          Een factuur moet duidelijk maken welk bedrag exclusief btw wordt berekend, welk btw-tarief wordt toegepast en
          hoeveel btw in rekening wordt gebracht. Lees ook{' '}
          <Link href="/blogs/btw-factuur-zzp" className="text-warm-orange hover:underline">
            btw op je factuur als zzp&apos;er
          </Link>
          .
        </p>
        <p>
          Er zijn wel situaties waarin je geen Nederlandse btw in rekening brengt. Denk bijvoorbeeld aan bepaalde
          vrijstellingen, de KOR of bepaalde internationale transacties.
        </p>

        <h2>5. Btw verwarren met omzet of inkomen</h2>
        <p>Btw die je aan een klant in rekening brengt, is niet hetzelfde als je omzet.</p>
        <p>Stel dat je een dienst levert voor €1.000 exclusief btw en daar 21% btw over rekent. Dan betaalt je klant:</p>
        <ul>
          <li>Omzet: €1.000</li>
          <li>Btw: €210</li>
          <li>Totaal: €1.210</li>
        </ul>
        <p>
          Je omzet is <strong>€1.000</strong>. De €210 is btw die je van je klant ontvangt en die je vervolgens in je
          btw-administratie verwerkt.
        </p>
        <p>
          Dit betekent ook dat je voorzichtig moet zijn met het uitgeven van ontvangen btw. Afhankelijk van je situatie
          kan een deel daarvan later moeten worden afgedragen.
        </p>

        <h2>6. Btw verkeerd afronden</h2>
        <p>Bij meerdere factuurregels kunnen afrondingsverschillen ontstaan.</p>
        <p>
          Stel dat je een factuur met veel verschillende producten of diensten maakt. Je kunt btw per regel berekenen en
          afronden, maar ook eerst bepaalde bedragen optellen en vervolgens de btw berekenen. Daardoor kunnen kleine
          verschillen ontstaan.
        </p>
        <p>
          Vooral bij grotere facturen is het daarom belangrijk om consequent dezelfde berekeningsmethode te gebruiken en
          te controleren of het btw-bedrag op de factuur klopt. Meer uitleg in{' '}
          <Link href="/gidsen/hoe-rond-je-btw-af" className="text-warm-orange hover:underline">
            hoe rond je btw af?
          </Link>
          . Een goede factuurtool kan hierbij helpen.
        </p>

        <h2>7. Btw bij buitenlandse klanten verkeerd verwerken</h2>
        <p>Een buitenlandse klant betekent niet automatisch dat je 0% btw moet rekenen. De btw-behandeling hangt onder andere af van:</p>
        <ul>
          <li>of je klant een ondernemer of particulier is;</li>
          <li>in welk land je klant gevestigd is;</li>
          <li>wat je verkoopt of welke dienst je levert;</li>
          <li>of het om een levering of dienst gaat;</li>
          <li>welke btw-regels voor de specifieke situatie gelden.</li>
        </ul>
        <p>
          Bij bepaalde zakelijke diensten aan ondernemers in een ander EU-land kan bijvoorbeeld sprake zijn van{' '}
          <strong>btw verlegd</strong>. In andere situaties kunnen weer andere regels gelden.
        </p>
        <p>
          Gebruik daarom niet zomaar 0% btw omdat je klant buiten Nederland zit. Lees{' '}
          <Link href="/gidsen/wanneer-gebruik-je-0-btw" className="text-warm-orange hover:underline">
            wanneer gebruik je 0% btw?
          </Link>{' '}
          en{' '}
          <Link href="/blogs/buitenlandse-klanten-factureren" className="text-warm-orange hover:underline">
            buitenlandse klanten factureren
          </Link>
          .
        </p>

        <h2>8. Btw rekenen terwijl je onder een vrijstelling of regeling valt</h2>
        <p>
          Niet iedere ondernemer brengt btw in rekening. Een voorbeeld is de{' '}
          <strong>kleineondernemersregeling (KOR)</strong>. Ondernemers die deelnemen aan de KOR brengen in principe geen
          btw in rekening aan hun klanten. Ook zijn er verschillende btw-vrijstellingen.
        </p>
        <p>
          Het is daarom belangrijk om eerst te bepalen of je btw moet rekenen voordat je een percentage op je factuur zet.
        </p>
        <p>
          Let op: of de KOR of een vrijstelling op jouw situatie van toepassing is, hangt af van de voorwaarden. Gebruik
          een calculator alleen als hulpmiddel en controleer de actuele regels bij de Belastingdienst. Een eerste
          inschatting maak je met de{' '}
          <Link href="/tools/kor-calculator" className="text-warm-orange hover:underline">
            KOR calculator
          </Link>
          .
        </p>

        <h2>9. Btw niet goed doorberekenen aan je klant</h2>
        <p>
          Een andere veelgemaakte fout ontstaat wanneer je een prijs afspreekt zonder duidelijk te bepalen of deze{' '}
          <strong>inclusief of exclusief btw</strong> is.
        </p>
        <p>
          Stel dat je met een klant €1.000 afspreekt en later blijkt dat dit bedrag inclusief btw moet zijn. Bij 21% btw
          is je omzet dan niet €1.000. Je moet de btw uit het totaalbedrag terugrekenen:
        </p>
        <p>€1.000 ÷ 1,21 = €826,45 exclusief btw</p>
        <p>
          Btw: €1.000 − €826,45 = <strong>€173,55</strong>
        </p>
        <p>
          Maak daarom bij offertes en prijsafspraken duidelijk of bedragen inclusief of exclusief btw zijn. Meer over de
          formule in{' '}
          <Link href="/gidsen/btw-terugrekenen" className="text-warm-orange hover:underline">
            btw terugrekenen
          </Link>
          .
        </p>

        <h2>Hoe voorkom je fouten bij btw berekenen?</h2>
        <p>Met een paar eenvoudige controles kun je veel btw-fouten voorkomen:</p>
        <ol>
          <li>
            <strong>Controleer of je bedrag inclusief of exclusief btw is.</strong>
          </li>
          <li>
            <strong>Controleer welk btw-tarief van toepassing is.</strong>
          </li>
          <li>
            <strong>Gebruik het juiste percentage</strong>, bijvoorbeeld 0,21 voor 21%.
          </li>
          <li>
            <strong>Controleer of je btw-plichtig bent</strong> en of er een vrijstelling of regeling geldt.
          </li>
          <li>
            <strong>Maak duidelijk of je prijzen inclusief of exclusief btw zijn.</strong>
          </li>
          <li>
            <strong>Controleer je factuur voordat je deze naar de klant stuurt.</strong>
          </li>
          <li>
            <strong>Let extra goed op bij buitenlandse klanten en btw verlegd.</strong>
          </li>
        </ol>
        <p>
          Meer over factuurfouten in het algemeen:{' '}
          <Link href="/blogs/factuur-fouten-voorkomen" className="text-warm-orange hover:underline">
            7 veelgemaakte fouten op facturen
          </Link>
          .
        </p>

        <h2>Btw berekenen zonder ingewikkelde formules</h2>
        <p>
          Wil je snel controleren hoeveel btw er op een bedrag zit? Met de gratis{' '}
          <Link href="/tools/btw-calculator" className="text-warm-orange hover:underline">
            BTW calculator van FactuurBaas
          </Link>{' '}
          kun je onder andere:
        </p>
        <ul>
          <li>btw bij een bedrag optellen;</li>
          <li>btw uit een inclusief bedrag terugrekenen;</li>
          <li>21% btw berekenen;</li>
          <li>9% btw berekenen;</li>
          <li>0% btw berekenen.</li>
        </ul>
        <p>Zo hoef je niet iedere keer zelf met een formule te rekenen.</p>

        <GuideToolCta href="/tools/btw-calculator" label="Gebruik de gratis btw calculator →" />

        <h2>Veelgestelde vragen over fouten met btw</h2>
        <h3>Wat gebeurt er als ik een verkeerd btw-tarief heb gebruikt?</h3>
        <p>
          Een verkeerd btw-tarief kan betekenen dat je te veel of te weinig btw hebt berekend. Wat je vervolgens moet
          doen, hangt af van de situatie en of de fout al in je btw-aangifte is verwerkt. Controleer bij een concrete
          fout de actuele informatie van de Belastingdienst of vraag advies aan een boekhouder of belastingadviseur.
        </p>
        <h3>Hoe bereken ik btw terug uit een bedrag inclusief btw?</h3>
        <p>
          Bij 21% btw deel je een bedrag inclusief btw door <strong>1,21</strong> om het bedrag exclusief btw te
          berekenen. Bijvoorbeeld: €121 ÷ 1,21 = €100 exclusief btw. Het verschil van €21 is de btw.
        </p>
        <h3>Moet ik btw altijd doorberekenen aan mijn klant?</h3>
        <p>
          Als je btw-plichtig bent, moet je in veel gevallen btw in rekening brengen. Er zijn echter uitzonderingen,
          bijvoorbeeld bij bepaalde vrijstellingen, de KOR en bepaalde internationale transacties.
        </p>
        <h3>Waarom klopt mijn btw-berekening niet?</h3>
        <p>
          Controleer eerst of je met een bedrag inclusief of exclusief btw werkt. Controleer daarna het gebruikte
          btw-tarief en kijk of er sprake is van afrondingsverschillen.
        </p>
        <h3>Kan een fout in mijn btw-berekening gevolgen hebben?</h3>
        <p>
          Ja. Een fout kan ertoe leiden dat je te veel of te weinig btw hebt aangegeven of afgedragen. Afhankelijk van de
          situatie kan dit moeten worden gecorrigeerd. Bij twijfel over een concrete btw-fout is het verstandig om de
          actuele regels van de Belastingdienst te controleren.
        </p>

        <h2>Btw berekenen of een factuur maken?</h2>
        <p>Met FactuurBaas kun je niet alleen btw berekenen, maar ook gratis facturen en offertes maken.</p>
        <ul>
          <li>
            <Link href="/tools/btw-calculator" className="text-warm-orange hover:underline">
              Gratis btw berekenen
            </Link>
          </li>
          <li>
            <Link href="/tools/factuur-maken" className="text-warm-orange hover:underline">
              Gratis factuur maken
            </Link>
          </li>
          <li>
            <Link href="/tools/offerte-maker" className="text-warm-orange hover:underline">
              Gratis offerte maken
            </Link>
          </li>
        </ul>
      </>
    ),
  },
  {
    slug: 'hoe-rond-je-btw-af',
    cluster: 'btw',
    seoTitle: 'Btw afronden: zo rond je btw correct af',
    title: 'Btw afronden: zo rond je btw correct af',
    excerpt:
      'Hoe rond je btw af op een factuur? Lees hoe btw op twee decimalen wordt afgerond en wat het verschil is tussen afronden per factuurregel en over het totaal.',
    keywords:
      'btw afronden, btw afronden op 2 decimalen, btw afronden per regel, btw afronden over totaal, btw afronding factuur, btw afronden Excel, btw berekenen en afronden, afrondingsverschil btw',
    tool: {
      href: '/tools/btw-calculator',
      label: 'Bereken direct btw',
      ctaLabel: 'Bereken btw gratis',
    },
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Factuurbaas/Hoe%20rond%20je%20btw%20af.jpg',
      alt: 'Btw afronden: zo rond je btw correct af op een factuur',
    },
    datePublished: '2026-07-15',
    dateModified: '2026-09-03',
    relatedSlugs: ['btw-factuur-zzp', 'factuur-fouten-voorkomen'],
    relatedGuideSlugs: ['veelgemaakte-fouten-btw-berekenen', 'btw-berekenen-excel', 'btw-terugrekenen'],
    faq: [
      {
        question: 'Rond je btw af op twee decimalen?',
        answer:
          'Ja, btw-bedragen op een factuur worden normaal gesproken weergegeven op twee decimalen. Bijvoorbeeld €21,43.',
      },
      {
        question: 'Rond je btw per factuurregel af?',
        answer:
          'Dat kan onderdeel zijn van de gekozen factuur- en boekhoudmethode. Bij meerdere regels kan afronden per regel een ander resultaat geven dan btw berekenen over het totaal.',
      },
      {
        question: 'Wat is een afrondingsverschil bij btw?',
        answer:
          'Een afrondingsverschil ontstaat doordat een btw-berekening meer decimalen kan opleveren dan op een factuur worden weergegeven. Bij meerdere regels kan daardoor een verschil van enkele centen ontstaan.',
      },
      {
        question: 'Hoe rond je btw af in Excel?',
        answer: 'Gebruik bijvoorbeeld =AFRONDEN(12,34*21%;2) om de btw over €12,34 op twee decimalen af te ronden.',
      },
      {
        question: 'Waarom klopt mijn btw-totaal niet met de afzonderlijke regels?',
        answer:
          'Controleer of je de btw per factuurregel afrondt of eerst alle bedragen optelt en daarna de btw berekent. Bij meerdere regels kan daardoor een klein verschil ontstaan.',
      },
    ],
    content: (
      <>
        <p>
          Hoe rond je btw af op een factuur? Bij een eenvoudige factuur is het meestal vanzelfsprekend, maar bij
          meerdere factuurregels kunnen er <strong>afrondingsverschillen van een paar cent</strong> ontstaan.
        </p>
        <p>
          In dit artikel lees je hoe je btw afrondt op twee decimalen, wat het verschil is tussen afronden{' '}
          <strong>per factuurregel</strong> en <strong>over het totaal</strong>, en hoe je btw in Excel afrondt.
        </p>
        <p>
          Wil je btw direct berekenen? Gebruik de gratis{' '}
          <Link href="/tools/btw-calculator" className="text-warm-orange hover:underline">
            btw calculator van FactuurBaas
          </Link>
          .
        </p>

        <GuideToolCta href="/tools/btw-calculator" label="Bereken btw gratis →" />

        <h2>Op hoeveel decimalen rond je btw af?</h2>
        <p>
          Op een factuur worden bedragen normaal gesproken weergegeven op <strong>twee decimalen</strong>. Bijvoorbeeld
          €10,00, €21,50 of €157,35.
        </p>
        <p>Bij het afronden van een bedrag kijk je naar de derde decimaal:</p>
        <ul>
          <li>
            <strong>5 of hoger:</strong> naar boven afronden
          </li>
          <li>
            <strong>4 of lager:</strong> naar beneden afronden
          </li>
        </ul>
        <p>Voorbeelden:</p>
        <ul>
          <li>€21,425 → €21,43</li>
          <li>€21,424 → €21,42</li>
          <li>€157,499 → €157,50</li>
        </ul>
        <p>
          Het gaat hierbij om de manier waarop het bedrag op de factuur wordt weergegeven. Bij een berekening kunnen
          tussenstappen meer decimalen bevatten voordat het uiteindelijke bedrag wordt afgerond.
        </p>

        <h2>Btw afronden per factuurregel of over het totaal?</h2>
        <p>
          Bij een factuur met meerdere regels kan de btw op verschillende momenten worden afgerond. Daardoor kan een
          klein verschil ontstaan tussen de btw die je krijgt door iedere regel afzonderlijk af te ronden en de btw die
          je berekent over het totale bedrag.
        </p>

        <h3>Btw per factuurregel afronden</h3>
        <p>Je berekent eerst de btw over iedere afzonderlijke factuurregel en rondt die vervolgens af.</p>
        <p>Bijvoorbeeld drie diensten van €0,01:</p>
        <CalculationTable
          rows={[
            ['Dienst 1 — excl. btw', '€0,01'],
            ['Dienst 1 — 21% btw', '€0,00'],
            ['Dienst 2 — excl. btw', '€0,01'],
            ['Dienst 2 — 21% btw', '€0,00'],
            ['Dienst 3 — excl. btw', '€0,01'],
            ['Dienst 3 — 21% btw', '€0,00'],
            ['Totaal excl. btw', '€0,03'],
            ['Totaal btw (per regel)', '€0,00'],
          ]}
        />

        <h3>Btw over het totaal berekenen</h3>
        <p>Je kunt ook eerst de bedragen exclusief btw optellen en vervolgens de btw over het totaal berekenen.</p>
        <p>
          Bij €0,03 exclusief btw: €0,03 × 21% = €0,0063 → <strong>€0,01 btw</strong>
        </p>
        <p>
          Hier ontstaat dus een verschil van één cent. Bij grotere facturen kan hetzelfde principe een verschil van
          enkele centen veroorzaken.
        </p>

        <h2>Waarom ontstaan afrondingsverschillen bij btw?</h2>
        <p>Het btw-percentage levert regelmatig een bedrag met meer dan twee decimalen op. Bijvoorbeeld:</p>
        <p>
          <strong>€12,34 × 21% = €2,5914</strong> — op de factuur wordt dat afgerond naar <strong>€2,59</strong>.
        </p>
        <p>
          Als je dit bij meerdere regels doet, kan de som van de afzonderlijk afgeronde btw-bedragen verschillen van de
          btw die je krijgt wanneer je eerst alle bedragen optelt en daarna de btw berekent.
        </p>
        <p>
          Daarom is het belangrijk dat je facturatie en administratie dezelfde berekeningsmethode volgen. Meer over
          veelvoorkomende rekenfouten in{' '}
          <Link href="/gidsen/veelgemaakte-fouten-btw-berekenen" className="text-warm-orange hover:underline">
            veelgemaakte fouten bij btw berekenen
          </Link>
          .
        </p>

        <h2>Hoeveel cent verschil mag er ontstaan?</h2>
        <p>
          Een afrondingsverschil van een paar cent kan ontstaan door de manier waarop btw per regel of over het totaal
          wordt berekend.
        </p>
        <p>
          Het belangrijkste is dat je <strong>berekening controleerbaar is en aansluit bij je administratie</strong>.
          Bij structurele verschillen is het verstandig om te controleren welke afrondingsmethode je factuurprogramma en
          boekhouding gebruiken.
        </p>

        <h2>Btw afronden in Excel</h2>
        <p>
          Wil je een btw-bedrag in Excel afronden op twee decimalen? Dan kun je de functie <code>AFRONDEN</code>{' '}
          gebruiken. Bijvoorbeeld:
        </p>
        <pre className="not-prose overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800">
          =AFRONDEN(100*21%;2)
        </pre>
        <p>
          Dit geeft <strong>€21,00</strong>. De <code>2</code> betekent dat Excel afrondt op twee decimalen.
        </p>
        <p>Voor een bedrag van €12,34 exclusief btw:</p>
        <pre className="not-prose overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800">
          =AFRONDEN(12,34*21%;2)
        </pre>
        <p>
          Resultaat: <strong>€2,59</strong>
        </p>
        <p>
          Let bij Excel vooral op het verschil tussen afronden van iedere regel en eerst optellen en daarna afronden.
          Dat kan bij meerdere factuurregels een ander totaal opleveren. Meer formules in{' '}
          <Link href="/gidsen/btw-berekenen-excel" className="text-warm-orange hover:underline">
            btw berekenen in Excel
          </Link>
          .
        </p>

        <h2>Btw afronden op een factuur</h2>
        <p>Een eenvoudige factuur kan er bijvoorbeeld zo uitzien:</p>
        <CalculationTable
          rows={[
            ['Subtotaal excl. btw', '€750,00'],
            ['BTW 21%', '€157,50'],
            ['Totaal incl. btw', '€907,50'],
          ]}
        />
        <p>
          De klant ziet hierdoor duidelijk welk bedrag exclusief btw wordt berekend, hoeveel btw wordt toegevoegd en wat
          het totaalbedrag is. Lees ook{' '}
          <Link href="/blogs/btw-factuur-zzp" className="text-warm-orange hover:underline">
            btw op je factuur als zzp&apos;er
          </Link>
          .
        </p>

        <h2>Veelgemaakte fouten bij btw afronden</h2>
        <h3>1. Te veel decimalen op de factuur tonen</h3>
        <p>
          Een bedrag zoals €157,499999 is voor een klant niet duidelijk. Toon bedragen op de factuur normaal gesproken
          met twee decimalen.
        </p>
        <h3>2. Iedere tussenstap te vroeg afronden</h3>
        <p>
          Door tijdens een berekening steeds af te ronden kunnen onnodige verschillen ontstaan. Rond daarom op het
          juiste moment af volgens de methode die je facturatie gebruikt.
        </p>
        <h3>3. Verschillende afrondingsmethodes gebruiken</h3>
        <p>
          Als je factuur per regel afrondt, maar je administratie de btw opnieuw over het totaal berekent, kunnen
          verschillen ontstaan.
        </p>
        <h3>4. Een afrondingsverschil als btw-fout zien</h3>
        <p>
          Een verschil van één of enkele centen betekent niet automatisch dat het btw-tarief verkeerd is toegepast.
          Controleer eerst hoe de btw is berekend en afgerond.
        </p>

        <h2>Btw berekenen en automatisch afronden</h2>
        <p>
          Wil je niet iedere btw-berekening zelf uitrekenen? Met de gratis{' '}
          <Link href="/tools/btw-calculator" className="text-warm-orange hover:underline">
            btw calculator van FactuurBaas
          </Link>{' '}
          kun je eenvoudig btw berekenen,{' '}
          <Link href="/gidsen/btw-terugrekenen" className="text-warm-orange hover:underline">
            btw terugrekenen
          </Link>{' '}
          en bedragen inclusief en exclusief btw berekenen. Je kunt onder andere rekenen met 21%, 9% en 0% btw.
        </p>

        <GuideToolCta href="/tools/btw-calculator" label="Bereken btw gratis →" />

        <h2>Veelgestelde vragen over btw afronden</h2>
        <h3>Rond je btw af op twee decimalen?</h3>
        <p>Ja, btw-bedragen op een factuur worden normaal gesproken weergegeven op twee decimalen. Bijvoorbeeld €21,43.</p>
        <h3>Rond je btw per factuurregel af?</h3>
        <p>
          Dat kan onderdeel zijn van de gekozen factuur- en boekhoudmethode. Bij meerdere regels kan afronden per regel
          een ander resultaat geven dan btw berekenen over het totaal.
        </p>
        <h3>Wat is een afrondingsverschil bij btw?</h3>
        <p>
          Een afrondingsverschil ontstaat doordat een btw-berekening meer decimalen kan opleveren dan op een factuur
          worden weergegeven. Bij meerdere regels kan daardoor een verschil van enkele centen ontstaan.
        </p>
        <h3>Hoe rond je btw af in Excel?</h3>
        <p>
          Gebruik bijvoorbeeld <code>=AFRONDEN(12,34*21%;2)</code> om de btw over €12,34 op twee decimalen af te ronden.
        </p>
        <h3>Waarom klopt mijn btw-totaal niet met de afzonderlijke regels?</h3>
        <p>
          Controleer of je de btw per factuurregel afrondt of eerst alle bedragen optelt en daarna de btw berekent. Bij
          meerdere regels kan daardoor een klein verschil ontstaan.
        </p>

        <h2>Bereken je btw gratis</h2>
        <p>
          Btw berekenen en afronden hoeft niet ingewikkeld te zijn. Gebruik de gratis btw calculator van FactuurBaas om
          btw toe te voegen, btw terug te rekenen en bedragen inclusief of exclusief btw te berekenen.
        </p>
        <GuideToolCta href="/tools/btw-calculator" label="Open de gratis btw calculator →" />
      </>
    ),
  },
  {
    slug: 'btw-berekenen-buitenlandse-klanten',
    cluster: 'btw',
    seoTitle: 'Factuur naar buitenland: welke btw moet je rekenen?',
    title: 'Factuur naar het buitenland: welke btw moet je rekenen?',
    excerpt:
      'Een factuur naar het buitenland sturen? Lees wanneer je Nederlandse btw, buitenlandse btw of btw verlegd gebruikt bij klanten binnen en buiten de EU.',
    keywords:
      'factuur naar buitenland, factuur buitenland btw, btw verlegd, buitenlandse klanten factureren, 0% btw export, btw eu klant, factuur zonder btw buitenland',
    tool: {
      href: '/tools/btw-calculator',
      label: 'Bereken direct btw',
      ctaLabel: 'Bereken btw gratis',
    },
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Factuurbaas/Btw%20berekenen%20voor%20buitenlandse%20klanten.jpg',
      alt: 'Btw berekenen voor buitenlandse klanten: internationale handel',
    },
    datePublished: '2026-07-15',
    dateModified: '2026-09-04',
    relatedSlugs: ['buitenlandse-klanten-factureren', 'btw-factuur-zzp'],
    relatedGuideSlugs: [
      'wanneer-gebruik-je-0-btw',
      'welke-btw-rekenen-zzper',
      'veelgemaakte-fouten-btw-berekenen',
    ],
    faq: [
      {
        question: 'Moet ik btw rekenen aan een buitenlandse klant?',
        answer:
          'Niet altijd. Het hangt onder andere af van het land van de klant, of de klant ondernemer of particulier is en of je goederen of diensten levert.',
      },
      {
        question: 'Kan ik een factuur zonder btw naar het buitenland sturen?',
        answer:
          'Dat kan in bepaalde situaties. Bijvoorbeeld bij een B2B-dienst waarbij de btw wordt verlegd of bij een prestatie waarvoor het 0%-tarief geldt. Een factuur zonder btw betekent dus niet automatisch dat je 0% btw toepast.',
      },
      {
        question: 'Kan ik een factuur zonder btw naar een bedrijf in Duitsland sturen?',
        answer:
          'Bij een gewone B2B-dienst aan een Duits bedrijf kan de btw vaak worden verlegd. Je vermeldt dan “btw verlegd” en de btw-identificatienummers van jou en je klant.',
      },
      {
        question: 'Moet ik btw rekenen aan een buitenlandse particulier?',
        answer:
          'Dat hangt af van de soort dienst of levering. Bij veel diensten aan particulieren in de EU is Nederlandse btw verschuldigd, maar er zijn uitzonderingen.',
      },
      {
        question: 'Wat betekent btw verlegd bij een buitenlandse factuur?',
        answer:
          'Bij btw-verlegging berekent de leverancier geen btw op de factuur. De btw wordt door de klant aangegeven en betaald volgens de regels die op de transactie van toepassing zijn.',
      },
      {
        question: 'Is btw verlegd hetzelfde als 0% btw?',
        answer:
          'Nee. Bij btw verlegd wordt de btw-heffing naar de afnemer verschoven. Het 0%-tarief is een afzonderlijk btw-tarief.',
      },
      {
        question: 'Hoe bereken ik btw voor een buitenlandse klant?',
        answer:
          'Begin niet alleen met het btw-tarief. Bepaal eerst waar de levering of dienst voor de btw belast is. Daarna bepaal je of Nederlandse btw, buitenlandse btw, 0% of btw-verlegging van toepassing is.',
      },
    ],
    content: (
      <>
        <p>
          Een factuur naar een klant in het buitenland werkt niet altijd hetzelfde als een Nederlandse factuur. Of je
          btw moet rekenen, hangt onder andere af van{' '}
          <strong>
            waar je klant gevestigd is, of het een ondernemer of particulier is en of je goederen of diensten levert
          </strong>
          .
        </p>
        <p>Bij een buitenlandse factuur kun je bijvoorbeeld te maken krijgen met:</p>
        <ul>
          <li>Nederlandse btw</li>
          <li>buitenlandse btw</li>
          <li>btw verlegd</li>
          <li>het 0%-tarief</li>
          <li>andere regels voor goederen en diensten</li>
        </ul>
        <p>
          In deze gids lees je welke btw je op een factuur naar het buitenland zet en wat je op de factuur vermeldt.
        </p>
        <p>
          Met de gratis{' '}
          <Link href="/tools/btw-calculator" className="text-warm-orange hover:underline">
            BTW calculator
          </Link>{' '}
          van FactuurBaas kun je bedragen inclusief en exclusief btw berekenen.
        </p>

        <GuideToolCta href="/tools/btw-calculator" label="Bereken btw direct →" />

        <h2>Welke btw op een factuur naar het buitenland?</h2>
        <p>
          Er is geen algemene regel dat je bij een buitenlandse klant altijd 0% btw rekent. Kijk eerst naar:
        </p>
        <ol>
          <li>Is je klant een ondernemer of particulier?</li>
          <li>Zit de klant in Nederland, een ander EU-land of buiten de EU?</li>
          <li>Lever je een dienst of een goed?</li>
          <li>Waar is de levering of dienst voor de btw belast?</li>
        </ol>
        <p>
          Voor veel zakelijke diensten aan ondernemers in een ander EU-land geldt bijvoorbeeld{' '}
          <strong>btw-verlegging</strong>. Bij bepaalde goederenleveringen binnen de EU kan juist het{' '}
          <strong>0%-tarief</strong> gelden.
        </p>

        <h2>Factuur aan een bedrijf in de EU</h2>
        <p>
          Lever je als Nederlandse ondernemer een gewone dienst aan een ondernemer in een ander EU-land? Dan wordt de
          btw vaak naar de klant verlegd.
        </p>
        <p>
          Bijvoorbeeld: je bent een Nederlandse freelance marketeer en levert marketingadvies aan een bedrijf in
          Duitsland.
        </p>
        <CalculationTable
          rows={[
            ['Marketingadvies', '€1.000'],
            ['Nederlandse btw', '€0'],
            ['Totaal', '€1.000'],
          ]}
        />
        <p>
          Je vermeldt op de factuur <strong>&quot;btw verlegd&quot;</strong>. Bij een dergelijke intracommunautaire
          dienst vermeld je ook het btw-identificatienummer van jou en je klant. Controleer het btw-nummer van je klant
          voordat je de factuur verstuurt.
        </p>
        <p>De klant verwerkt de btw vervolgens volgens de regels in zijn eigen land.</p>

        <h3>Btw verlegd is niet hetzelfde als 0% btw</h3>
        <p>
          Op de factuur staat in deze situatie niet simpelweg dat je 0% btw rekent. Het gaat om{' '}
          <strong>btw-verlegging</strong>.
        </p>
        <p>Dat onderscheid is belangrijk:</p>
        <ul>
          <li>
            <strong>Btw verlegd:</strong> de btw wordt door de afnemer aangegeven.
          </li>
          <li>
            <strong>0% btw:</strong> je brengt btw in rekening tegen het 0%-tarief, maar het is wel een btw-belaste
            prestatie.
          </li>
          <li>
            <strong>Vrijgesteld:</strong> voor de prestatie geldt een btw-vrijstelling.
          </li>
        </ul>
        <p>
          Lees ook:{' '}
          <Link href="/gidsen/wanneer-gebruik-je-0-btw" className="text-warm-orange hover:underline">
            Wanneer gebruik je 0% btw?
          </Link>
        </p>

        <h2>Factuur naar een particulier in de EU</h2>
        <p>
          Verkoop je aan een particulier in een ander EU-land? Dan gelden andere regels dan bij een zakelijke klant.
        </p>
        <p>
          Voor veel diensten aan particulieren is Nederlandse btw verschuldigd. Maar er bestaan uitzonderingen,
          bijvoorbeeld voor bepaalde digitale diensten en andere diensten waarvoor specifieke plaats-van-dienstregels
          gelden.
        </p>
        <p>
          Bij bepaalde diensten kan daardoor btw van het land van de consument verschuldigd zijn.
        </p>
        <p>
          Verkoop je bijvoorbeeld een digitale dienst aan een consument in Frankrijk, dan moet je dus niet automatisch
          21% Nederlandse btw rekenen. Controleer eerst waar de dienst voor de btw belast is.
        </p>

        <h2>Factuur aan een bedrijf buiten de EU</h2>
        <p>
          Lever je een dienst aan een ondernemer buiten de EU, bijvoorbeeld een bedrijf in de Verenigde Staten? Dan is
          de dienst bij veel gewone B2B-diensten niet in Nederland belast.
        </p>
        <p>
          Of dat daadwerkelijk zo is, hangt af van de soort dienst en de plaats waar de dienst volgens de btw-regels
          belast is.
        </p>
        <p>Voor een gewone zakelijke dienst kan een factuur er bijvoorbeeld zo uitzien:</p>
        <CalculationTable
          rows={[
            ['Marketingadvies', '€2.000'],
            ['Nederlandse btw', '€0'],
            ['Totaal', '€2.000'],
          ]}
        />
        <p>
          Let op: dit betekent niet automatisch dat je bij iedere buitenlandse klant buiten de EU geen btw hoeft te
          rekenen. Voor bijzondere diensten kunnen andere regels gelden.
        </p>

        <h2>Factuur naar het buitenland zonder btw</h2>
        <p>Een buitenlandse factuur zonder btw kan dus verschillende redenen hebben.</p>

        <h3>1. Btw verlegd</h3>
        <p>Bijvoorbeeld bij een gewone B2B-dienst aan een ondernemer in een ander EU-land.</p>
        <p>
          Je rekent geen Nederlandse btw en vermeldt <strong>&quot;btw verlegd&quot;</strong>.
        </p>

        <h3>2. Dienst is buiten Nederland belast</h3>
        <p>
          Bij bepaalde diensten aan klanten buiten de EU kan de dienst in het buitenland belast zijn.
        </p>

        <h3>3. 0%-tarief</h3>
        <p>
          Bij bepaalde internationale goederenleveringen en specifieke internationale diensten kan het 0%-tarief
          gelden. Voor een goederenlevering naar een ondernemer in een ander EU-land gelden bijvoorbeeld voorwaarden
          voordat je 0% mag toepassen.
        </p>

        <h3>4. Vrijstelling</h3>
        <p>
          Sommige prestaties zijn vrijgesteld van btw. Dat staat los van het feit dat de klant in het buitenland zit.
        </p>
        <p>
          Daarom betekent <strong>&quot;factuur zonder btw&quot; niet automatisch &quot;0% btw&quot;</strong>.
        </p>

        <h2>Goederen verkopen aan een klant in het buitenland</h2>
        <p>Voor goederen gelden andere regels dan voor diensten.</p>

        <h3>Goederen naar een ondernemer in een ander EU-land</h3>
        <p>
          Lever je goederen aan een ondernemer in een ander EU-land die aan de voorwaarden voldoet, dan kan het{' '}
          <strong>0%-tarief</strong> van toepassing zijn.
        </p>
        <p>
          Dit is dus iets anders dan de btw-verlegging die bij veel B2B-diensten wordt gebruikt.
        </p>

        <h3>Goederen exporteren buiten de EU</h3>
        <p>
          Bij export van goederen naar een land buiten de EU kan onder voorwaarden het 0%-tarief gelden.
        </p>
        <p>Bewaar daarbij de administratie en bewijsstukken waarmee je de export kunt aantonen.</p>

        <h2>Wat moet er op een buitenlandse factuur staan?</h2>
        <p>
          Een buitenlandse factuur bevat in de basis dezelfde belangrijke factuurgegevens als een Nederlandse factuur:
        </p>
        <ul>
          <li>jouw bedrijfsnaam en adres</li>
          <li>gegevens van je klant</li>
          <li>factuurdatum</li>
          <li>factuurnummer</li>
          <li>omschrijving van de goederen of diensten</li>
          <li>bedrag</li>
          <li>btw-bedrag of de juiste btw-vermelding</li>
          <li>btw-identificatienummer wanneer dat in de situatie vereist is</li>
        </ul>
        <p>
          Bij een B2B-dienst binnen de EU waarbij de btw wordt verlegd, vermeld je het btw-identificatienummer van jou
          en je klant en <strong>&quot;btw verlegd&quot;</strong>.
        </p>

        <h2>Voorbeeld factuur naar Duitsland</h2>
        <p>
          Stel: je bent een Nederlandse zzp&apos;er en levert €1.000 aan marketingadvies aan een Duits bedrijf met een
          geldig btw-identificatienummer.
        </p>
        <p>Dan kan de factuur er bijvoorbeeld zo uitzien:</p>
        <p>
          <strong>Marketingadvies:</strong> €1.000
          <br />
          <strong>Btw:</strong> €0
          <br />
          <strong>Totaal:</strong> €1.000
        </p>
        <p>
          <strong>Btw verlegd</strong>
        </p>
        <p>Het Duitse bedrijf verwerkt de verschuldigde btw volgens de regels in Duitsland.</p>
        <p>Controleer vooraf het btw-identificatienummer van je klant.</p>

        <h2>Nederlandse of buitenlandse btw?</h2>
        <p>Een handige eerste indeling:</p>
        <CalculationTable
          rows={[
            ['Nederlandse klant', 'Vaak Nederlandse btw'],
            ['EU-bedrijf, gewone B2B-dienst', 'Vaak btw verlegd'],
            ['EU-particulier', 'Afhankelijk van de dienst'],
            ['Bedrijf buiten EU', 'Afhankelijk van de dienst'],
            ['Goederen naar EU-bedrijf', 'Vaak 0% onder voorwaarden'],
            ['Export buiten EU', 'Vaak 0% onder voorwaarden'],
          ]}
        />
        <p>
          Dit is een vereenvoudigd overzicht. Bij internationale btw zijn er uitzonderingen en bijzondere regels per
          type dienst of levering.
        </p>
        <p>
          Wil je zeker weten waar jouw dienst of levering belast is? Gebruik daarvoor het{' '}
          <a
            href="https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/zakendoen_met_het_buitenland/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-warm-orange hover:underline"
          >
            hulpmiddel van de Belastingdienst voor zakendoen met het buitenland
          </a>
          .
        </p>

        <h2>Buitenlandse btw op je factuur</h2>
        <p>Als je buitenlandse btw moet rekenen, kun je niet zomaar het Nederlandse btw-tarief gebruiken.</p>
        <p>Je moet dan onder andere kijken naar:</p>
        <ul>
          <li>het land waar de btw verschuldigd is</li>
          <li>het toepasselijke btw-tarief</li>
          <li>de factuureisen van dat land</li>
          <li>hoe en waar je de btw moet aangeven</li>
        </ul>
        <p>
          Bij bepaalde diensten aan EU-particulieren kan bijvoorbeeld btw van het land van de klant verschuldigd zijn.
          Voor dergelijke situaties kan het Europese eenloketsysteem (OSS) relevant zijn.
        </p>

        <h2>Buitenlandse factuur en je btw-aangifte</h2>
        <p>Een factuur naar het buitenland kan ook gevolgen hebben voor je Nederlandse btw-aangifte.</p>
        <p>
          Bij intracommunautaire diensten aan ondernemers in andere EU-landen moet je de dienst bijvoorbeeld in je
          btw-aangifte verwerken en kan een <strong>Opgaaf intracommunautaire prestaties (ICP)</strong> nodig zijn.
        </p>
        <p>
          Daarom is alleen &quot;€0 btw op de factuur&quot; niet voldoende. De omzet moet ook op de juiste manier in je
          administratie en aangifte worden verwerkt.
        </p>

        <h2>Veelgemaakte fouten bij een buitenlandse factuur</h2>

        <h3>Automatisch 0% btw gebruiken</h3>
        <p>Een buitenlandse klant betekent niet automatisch dat je 0% btw mag rekenen.</p>

        <h3>Btw verlegd en 0% door elkaar halen</h3>
        <p>Btw verlegd en het 0%-tarief zijn verschillende btw-regelingen.</p>

        <h3>Geen btw-nummer controleren</h3>
        <p>
          Bij een zakelijke EU-klant is het belangrijk om het btw-identificatienummer te controleren.
        </p>

        <h3>Een buitenlandse particulier hetzelfde behandelen als een bedrijf</h3>
        <p>Voor particulieren gelden vaak andere regels dan voor ondernemers.</p>

        <h3>Alleen naar het land van de klant kijken</h3>
        <p>
          Ook het soort dienst of levering is bepalend. Een adviesdienst, onroerende zaak, evenement, cateringdienst
          en goederenlevering kunnen verschillende btw-regels hebben.
        </p>

        <h2>Buitenlandse klant factureren met FactuurBaas</h2>
        <p>Met FactuurBaas maak je snel een professionele factuur met:</p>
        <ul>
          <li>duidelijke factuurgegevens</li>
          <li>bedragen exclusief en inclusief btw</li>
          <li>btw-regels</li>
          <li>een professionele PDF-layout</li>
          <li>de benodigde klantgegevens</li>
        </ul>
        <p>Je kunt de factuur vervolgens als PDF downloaden en zelf naar je klant versturen.</p>

        <div className="my-8 text-center not-prose">
          <Button
            asChild
            className="bg-warm-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg"
          >
            <Link href="/create-invoice">Maak gratis factuur →</Link>
          </Button>
        </div>

        <h2>Veelgestelde vragen</h2>
        <h3>Moet ik btw rekenen aan een buitenlandse klant?</h3>
        <p>
          Niet altijd. Het hangt onder andere af van het land van de klant, of de klant ondernemer of particulier is
          en of je goederen of diensten levert.
        </p>
        <h3>Kan ik een factuur zonder btw naar het buitenland sturen?</h3>
        <p>
          Dat kan in bepaalde situaties. Bijvoorbeeld bij een B2B-dienst waarbij de btw wordt verlegd of bij een
          prestatie waarvoor het 0%-tarief geldt. Een factuur zonder btw betekent dus niet automatisch dat je 0% btw
          toepast.
        </p>
        <h3>Kan ik een factuur zonder btw naar een bedrijf in Duitsland sturen?</h3>
        <p>
          Bij een gewone B2B-dienst aan een Duits bedrijf kan de btw vaak worden verlegd. Je vermeldt dan &quot;btw
          verlegd&quot; en de btw-identificatienummers van jou en je klant.
        </p>
        <h3>Moet ik btw rekenen aan een buitenlandse particulier?</h3>
        <p>
          Dat hangt af van de soort dienst of levering. Bij veel diensten aan particulieren in de EU is Nederlandse btw
          verschuldigd, maar er zijn uitzonderingen.
        </p>
        <h3>Wat betekent btw verlegd bij een buitenlandse factuur?</h3>
        <p>
          Bij btw-verlegging berekent de leverancier geen btw op de factuur. De btw wordt door de klant aangegeven en
          betaald volgens de regels die op de transactie van toepassing zijn.
        </p>
        <h3>Is btw verlegd hetzelfde als 0% btw?</h3>
        <p>
          Nee. Bij btw verlegd wordt de btw-heffing naar de afnemer verschoven. Het 0%-tarief is een afzonderlijk
          btw-tarief.
        </p>
        <h3>Hoe bereken ik btw voor een buitenlandse klant?</h3>
        <p>
          Begin niet alleen met het btw-tarief. Bepaal eerst waar de levering of dienst voor de btw belast is. Daarna
          bepaal je of Nederlandse btw, buitenlandse btw, 0% of btw-verlegging van toepassing is.
        </p>

        <div className="my-8 text-center not-prose">
          <Button
            asChild
            className="bg-warm-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg"
          >
            <Link href="/create-invoice">Maak gratis je factuur met FactuurBaas →</Link>
          </Button>
        </div>
      </>
    ),
  },
  {
    slug: 'hoe-maak-je-een-offerte',
    cluster: 'offertes',
    seoTitle: "Offerte maken: stappenplan en voorbeeld voor zzp'ers",
    title: "Offerte maken: eenvoudig stappenplan voor zzp'ers",
    excerpt:
      "Een offerte maken als zzp'er of ondernemer? Volg dit eenvoudige stappenplan, bekijk een offertevoorbeeld en maak gratis een professionele offerte als PDF.",
    keywords:
      "offerte maken, offerte maken zzp, hoe maak je een offerte, offerte stappenplan, offerte voorbeeld, gratis offerte maken, professionele offerte",
    tool: {
      href: '/tools/offerte-maker',
      label: 'Maak gratis een offerte',
      ctaLabel: 'Maak gratis een offerte',
      relatedTitle: 'Offerte maker',
      relatedExcerpt: 'Maak gratis een professionele offerte en download direct als PDF. Geen account nodig.',
    },
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Factuurbaas/Hoe%20maak%20je%20een%20offerte.jpg',
      alt: "Offerte maken: eenvoudig stappenplan voor zzp'ers",
    },
    datePublished: '2026-07-15',
    dateModified: '2026-09-03',
    relatedSlugs: ['verschil-factuur-offerte', 'factuur-maken-zzp'],
    relatedGuideSlugs: ['wat-moet-er-op-een-offerte-staan', 'offerte-voorbeeld', 'wanneer-is-een-offerte-bindend'],
    faq: [
      {
        question: 'Hoe maak ik een professionele offerte?',
        answer:
          'Begin met je bedrijfs- en klantgegevens en beschrijf vervolgens zo concreet mogelijk wat je gaat leveren. Voeg de prijs, btw, geldigheidsduur en belangrijkste voorwaarden toe. Zorg tot slot voor een duidelijke en professionele opmaak.',
      },
      {
        question: 'Wat moet er in een offerte staan?',
        answer:
          'Een goede offerte bevat onder andere een offertenummer, datum, bedrijfsgegevens, klantgegevens, omschrijving van de opdracht, prijzen, btw, geldigheidsduur en relevante betalings- en leveringsvoorwaarden.',
      },
      {
        question: 'Is een offerte verplicht?',
        answer:
          'Nee, voor veel opdrachten ben je niet verplicht om vooraf een offerte te maken. Het kan wel verstandig zijn om vooraf duidelijke afspraken over de opdracht en prijs vast te leggen.',
      },
      {
        question: 'Hoe lang moet een offerte geldig zijn?',
        answer:
          'Dat bepaal je zelf. Een geldigheidsduur van bijvoorbeeld 14 of 30 dagen is gebruikelijk, maar je kunt een andere termijn kiezen die bij je opdracht past.',
      },
      {
        question: 'Kan een klant een offerte weigeren?',
        answer:
          'Ja. Een offerte is een voorstel aan de klant. De klant kan ermee akkoord gaan, de offerte afwijzen of eventueel vragen om aanpassingen.',
      },
      {
        question: 'Kan ik na een offerte een factuur maken?',
        answer:
          'Ja. Nadat de klant akkoord is gegaan en je de opdracht hebt uitgevoerd, kun je een factuur sturen. Bij FactuurBaas kun je een goedgekeurde offerte als basis gebruiken voor een factuur.',
      },
      {
        question: 'Kan ik gratis een offerte maken?',
        answer:
          'Ja. Met de gratis offerte maker van FactuurBaas kun je online een offerte maken en als PDF downloaden, zonder account.',
      },
    ],
    content: (
      <>
        <p>
          Een goede offerte maakt vooraf duidelijk{' '}
          <strong>wat je gaat leveren, wat het kost en welke afspraken gelden</strong>. Daarmee weet je klant precies
          waar hij aan toe is en verklein je de kans op misverstanden.
        </p>
        <p>
          Een offerte maken hoeft niet ingewikkeld te zijn. In dit stappenplan lees je welke onderdelen je nodig hebt,
          hoe je de prijs en btw vermeldt en hoe je een professionele offerte opstelt.
        </p>
        <p>
          Met de gratis{' '}
          <Link href="/tools/offerte-maker" className="text-warm-orange hover:underline">
            offerte maker van FactuurBaas
          </Link>{' '}
          maak je online een offerte, bereken je automatisch de btw en download je de offerte als PDF.
        </p>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Maak gratis een offerte →" />

        <h2>Hoe maak je een offerte?</h2>
        <p>
          Een goede offerte bevat in ieder geval duidelijke informatie over jou, je klant, de werkzaamheden, de prijs
          en de voorwaarden.
        </p>
        <p>Je kunt deze 7 stappen volgen:</p>
        <ol>
          <li>Vul je eigen bedrijfsgegevens in</li>
          <li>Voeg de gegevens van je klant toe</li>
          <li>Geef de offerte een nummer en datum</li>
          <li>Beschrijf wat je gaat leveren</li>
          <li>Vermeld de prijs en btw</li>
          <li>Geef de geldigheidsduur aan</li>
          <li>Voeg belangrijke voorwaarden en afspraken toe</li>
        </ol>
        <p>Hieronder leggen we iedere stap uit.</p>

        <h2>1. Vul je bedrijfsgegevens in</h2>
        <p>Begin met de gegevens van je eigen onderneming. Denk bijvoorbeeld aan:</p>
        <ul>
          <li>bedrijfsnaam</li>
          <li>adres</li>
          <li>KvK-nummer</li>
          <li>btw-nummer, als dat van toepassing is</li>
          <li>e-mailadres</li>
          <li>telefoonnummer</li>
        </ul>
        <p>
          Zo kan je klant gemakkelijk zien van wie de offerte afkomstig is en hoe hij contact met je kan opnemen.
        </p>

        <h2>2. Voeg de gegevens van je klant toe</h2>
        <p>Vermeld vervolgens voor wie de offerte bedoeld is.</p>
        <p>Bij een zakelijke klant kun je bijvoorbeeld de volgende gegevens opnemen:</p>
        <ul>
          <li>bedrijfsnaam</li>
          <li>naam van de contactpersoon</li>
          <li>adres</li>
          <li>e-mailadres</li>
        </ul>
        <p>
          Controleer de gegevens voordat je de offerte verstuurt. Zeker bij zakelijke opdrachten is het handig om de
          offerte op naam van de juiste onderneming te zetten.
        </p>

        <h2>3. Geef de offerte een nummer en datum</h2>
        <p>
          Geef iedere offerte een herkenbaar offertenummer, bijvoorbeeld: <strong>OFF-2026-001</strong>. Vermeld
          daarnaast de datum waarop je de offerte uitbrengt.
        </p>
        <p>
          Een vaste nummering maakt je administratie overzichtelijk en maakt het later eenvoudiger om een goedgekeurde
          offerte aan een opdracht of factuur te koppelen.
        </p>

        <h2>4. Beschrijf duidelijk wat je gaat leveren</h2>
        <p>Dit is een van de belangrijkste onderdelen van een offerte.</p>
        <p>Vermijd vage omschrijvingen zoals:</p>
        <blockquote>Website werkzaamheden</blockquote>
        <p>Maak liever concreet wat de klant krijgt:</p>
        <blockquote>
          Ontwerp en ontwikkeling van een bedrijfswebsite met vijf pagina&apos;s, responsive ontwerp en basis
          SEO-instellingen.
        </blockquote>
        <p>Bij een dienst kun je eventueel ook aangeven:</p>
        <ul>
          <li>welke werkzaamheden je uitvoert</li>
          <li>hoeveel uren of dagen je verwacht nodig te hebben</li>
          <li>welke producten of materialen inbegrepen zijn</li>
          <li>wat wel en niet binnen de opdracht valt</li>
          <li>wanneer je de werkzaamheden uitvoert</li>
        </ul>
        <p>Hoe duidelijker de omschrijving, hoe kleiner de kans op discussie achteraf.</p>

        <h2>5. Vermeld de prijs en btw</h2>
        <p>
          Laat duidelijk zien hoeveel de verschillende onderdelen kosten en of de bedragen inclusief of exclusief btw
          zijn.
        </p>
        <p>Een eenvoudige offerte kan bijvoorbeeld zo worden opgebouwd:</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[280px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Omschrijving
                </th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">
                  Bedrag
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Website ontwerp</td>
                <td className="px-4 py-3 text-right">€2.000,00</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">BTW 21%</td>
                <td className="px-4 py-3 text-right">€420,00</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-deep-blue">Totaal</td>
                <td className="px-4 py-3 text-right font-semibold text-deep-blue">€2.420,00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Werk je met meerdere diensten of producten? Dan kun je ieder onderdeel afzonderlijk vermelden.</p>
        <p>
          Bij een uurtarief kun je bijvoorbeeld aangeven: <strong>10 uur × €75 = €750</strong>. Vermeld vervolgens het
          btw-bedrag en het totaalbedrag.
        </p>

        <h2>6. Geef aan hoe lang de offerte geldig is</h2>
        <p>
          Een offerte hoeft niet onbeperkt geldig te blijven. Je kunt daarom een geldigheidsduur opnemen, bijvoorbeeld:{' '}
          <strong>Deze offerte is geldig tot en met 24 juli 2026.</strong>
        </p>
        <p>
          Een termijn van 14 of 30 dagen komt bijvoorbeeld vaak voor, maar je bepaalt zelf welke termijn bij jouw
          situatie past.
        </p>
        <p>
          Een geldigheidsduur is vooral handig wanneer prijzen, beschikbaarheid of andere omstandigheden kunnen
          veranderen.
        </p>

        <h2>7. Voeg belangrijke voorwaarden en afspraken toe</h2>
        <p>Bij een grotere opdracht is het verstandig om ook de belangrijkste afspraken in de offerte te zetten.</p>
        <p>Denk bijvoorbeeld aan:</p>
        <ul>
          <li>betalingstermijn</li>
          <li>verwachte startdatum</li>
          <li>planning of levertijd</li>
          <li>aantal inbegrepen revisies</li>
          <li>afspraken over meerwerk</li>
          <li>annulering</li>
          <li>geldigheid van de offerte</li>
          <li>toepasselijke algemene voorwaarden</li>
        </ul>
        <p>Je kunt bijvoorbeeld opnemen:</p>
        <blockquote>Betaling dient binnen 14 dagen na factuurdatum te worden voldaan.</blockquote>
        <p>
          Als je algemene voorwaarden gebruikt, kun je in de offerte aangeven dat deze van toepassing zijn en hoe de
          klant ze kan bekijken.
        </p>

        <h2>Wat moet er op een offerte staan?</h2>
        <p>
          Er is niet één algemene wettelijke checklist met precies dezelfde verplichte gegevens voor iedere offerte. Een
          offerte is vooral een <strong>voorstel met duidelijke afspraken over een opdracht</strong>.
        </p>
        <p>Voor een professionele offerte zijn in ieder geval deze onderdelen verstandig:</p>
        <ul>
          <li>offertenummer</li>
          <li>datum</li>
          <li>jouw bedrijfsgegevens</li>
          <li>klantgegevens</li>
          <li>omschrijving van de werkzaamheden of producten</li>
          <li>prijs</li>
          <li>btw en totaalbedrag, indien van toepassing</li>
          <li>geldigheidsduur</li>
          <li>betalingsafspraken</li>
          <li>relevante voorwaarden</li>
        </ul>
        <p>
          Wil je specifiek weten welke onderdelen je op een offerte kunt zetten? Bekijk dan ook{' '}
          <Link href="/gidsen/wat-moet-er-op-een-offerte-staan" className="text-warm-orange hover:underline">
            wat moet er op een offerte staan
          </Link>
          .
        </p>

        <h2>Offerte voorbeeld</h2>
        <p>Een eenvoudige offerte voor een zakelijke dienst kan er bijvoorbeeld zo uitzien:</p>
        <pre className="not-prose overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800 whitespace-pre-wrap">
{`OFF-2026-001
Datum: 10 juli 2026

Van:
Studio Jansen
Voorbeeldstraat 10
1234 AB Amsterdam
KvK: 12345678
BTW: NL123456789B01

Aan:
Klant BV
Voorbeeldlaan 20
1234 CD Utrecht

Website ontwerp en ontwikkeling
10 uur × €75,00                 €750,00

BTW 21%                         €157,50
Totaal                          €907,50

Deze offerte is geldig tot en met
24 juli 2026.

Betaling: binnen 14 dagen na
factuurdatum.`}
        </pre>
        <p>
          Het exacte ontwerp kan natuurlijk verschillen. Het belangrijkste is dat de klant snel kan zien{' '}
          <strong>wat je aanbiedt, wat het kost en onder welke voorwaarden</strong>.
        </p>

        <h2>Offerte maken voor een zzp-opdracht</h2>
        <p>Als zzp&apos;er maak je bijvoorbeeld een offerte voor:</p>
        <ul>
          <li>een website</li>
          <li>marketingwerkzaamheden</li>
          <li>advies</li>
          <li>fotografie</li>
          <li>tekstschrijven</li>
          <li>ontwerpwerk</li>
          <li>bouw- of schilderwerk</li>
          <li>coaching</li>
          <li>een ander freelance project</li>
        </ul>
        <p>
          Bij een opdracht met een vaste prijs is het handig om vooraf precies te omschrijven wat binnen die prijs valt.
        </p>
        <p>
          Werk je op uurbasis? Dan kun je je uurtarief, het verwachte aantal uren en eventueel een inschatting van de
          totale kosten vermelden.
        </p>
        <p>
          Bijvoorbeeld: <strong>20 uur × €75 = €1.500 exclusief btw</strong>
        </p>
        <p>
          Als het uiteindelijke aantal uren kan afwijken, maak dan duidelijk dat het om een inschatting gaat en spreek
          af hoe je met extra uren omgaat.
        </p>

        <h2>Offerte maken in Word of Excel</h2>
        <p>
          Je kunt een offerte natuurlijk zelf opmaken in Word of Excel. Dat werkt prima als je maar af en toe een
          offerte maakt.
        </p>
        <p>Je moet dan wel zelf zorgen voor:</p>
        <ul>
          <li>de juiste bedrijfs- en klantgegevens</li>
          <li>een nette opmaak</li>
          <li>correcte berekening van btw</li>
          <li>een offertenummer</li>
          <li>de geldigheidsduur</li>
          <li>een PDF-versie die je naar de klant kunt sturen</li>
        </ul>
        <p>
          Maak je regelmatig offertes? Dan kan een online{' '}
          <Link href="/tools/offerte-maker" className="text-warm-orange hover:underline">
            offerte maker
          </Link>{' '}
          handiger zijn. Je vult de gegevens in, voegt je producten of diensten toe en kunt de offerte vervolgens als
          PDF downloaden.
        </p>

        <h2>Wat gebeurt er nadat de klant akkoord gaat?</h2>
        <p>
          Een offerte is een voorstel. Zodra je klant akkoord gaat, kunnen de afspraken uit de offerte onderdeel worden
          van de overeenkomst tussen jou en je klant.
        </p>
        <p>Daarna kun je met de opdracht beginnen volgens de afgesproken planning en voorwaarden.</p>
        <p>Na het uitvoeren van de werkzaamheden stuur je meestal een factuur.</p>
        <p>
          Met FactuurBaas kun je een goedgekeurde offerte later als basis voor een factuur gebruiken, zodat je gegevens
          niet opnieuw hoeft in te voeren.
        </p>
        <p>
          Lees ook:{' '}
          <Link href="/blogs/verschil-factuur-offerte" className="text-warm-orange hover:underline">
            wat is het verschil tussen een offerte en een factuur?
          </Link>
        </p>

        <h2>Gratis een offerte maken</h2>
        <p>
          Wil je niet zelf een offerte in Word of Excel opmaken? Met de gratis{' '}
          <Link href="/tools/offerte-maker" className="text-warm-orange hover:underline">
            offerte maker van FactuurBaas
          </Link>{' '}
          maak je online een professionele offerte.
        </p>
        <p>Je kunt:</p>
        <ul>
          <li>gratis een offerte maken</li>
          <li>je eigen gegevens en klantgegevens toevoegen</li>
          <li>producten of diensten toevoegen</li>
          <li>btw automatisch laten berekenen</li>
          <li>de offerte als PDF downloaden</li>
          <li>een goedgekeurde offerte later gebruiken als basis voor een factuur</li>
        </ul>
        <p>Je hebt geen account nodig om een offerte te maken.</p>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Maak gratis een offerte →" />

        <h2>Veelgestelde vragen over offertes maken</h2>
        <h3>Hoe maak ik een professionele offerte?</h3>
        <p>
          Begin met je bedrijfs- en klantgegevens en beschrijf vervolgens zo concreet mogelijk wat je gaat leveren. Voeg
          de prijs, btw, geldigheidsduur en belangrijkste voorwaarden toe. Zorg tot slot voor een duidelijke en
          professionele opmaak.
        </p>
        <h3>Wat moet er in een offerte staan?</h3>
        <p>
          Een goede offerte bevat onder andere een offertenummer, datum, bedrijfsgegevens, klantgegevens, omschrijving
          van de opdracht, prijzen, btw, geldigheidsduur en relevante betalings- en leveringsvoorwaarden.
        </p>
        <h3>Is een offerte verplicht?</h3>
        <p>
          Nee, voor veel opdrachten ben je niet verplicht om vooraf een offerte te maken. Het kan wel verstandig zijn om
          vooraf duidelijke afspraken over de opdracht en prijs vast te leggen.
        </p>
        <h3>Hoe lang moet een offerte geldig zijn?</h3>
        <p>
          Dat bepaal je zelf. Een geldigheidsduur van bijvoorbeeld 14 of 30 dagen is gebruikelijk, maar je kunt een
          andere termijn kiezen die bij je opdracht past.
        </p>
        <h3>Kan een klant een offerte weigeren?</h3>
        <p>
          Ja. Een offerte is een voorstel aan de klant. De klant kan ermee akkoord gaan, de offerte afwijzen of
          eventueel vragen om aanpassingen.
        </p>
        <h3>Kan ik na een offerte een factuur maken?</h3>
        <p>
          Ja. Nadat de klant akkoord is gegaan en je de opdracht hebt uitgevoerd, kun je een factuur sturen. Bij
          FactuurBaas kun je een goedgekeurde offerte als basis gebruiken voor een factuur.
        </p>
        <h3>Kan ik gratis een offerte maken?</h3>
        <p>
          Ja. Met de gratis offerte maker van FactuurBaas kun je online een offerte maken en als PDF downloaden, zonder
          account.
        </p>
      </>
    ),
  },
  {
    slug: 'wat-moet-er-op-een-offerte-staan',
    cluster: 'offertes',
    seoTitle: 'Wat moet er op een offerte staan? Onderdelen en eisen',
    title: 'Wat moet er op een offerte staan?',
    excerpt:
      'Wat moet er op een offerte staan? Bekijk welke gegevens je opneemt, wat wettelijk verplicht is en welke onderdelen belangrijk zijn voor een duidelijke offerte.',
    keywords:
      'wat moet er op een offerte staan, offerte onderdelen, offerte gegevens, offerte eisen, offerte checklist, professionele offerte, offerte zzp',
    tool: {
      href: '/tools/offerte-maker',
      label: 'Maak gratis offerte',
      ctaLabel: 'Open gratis offerte maker',
      relatedTitle: 'Offerte maker',
      relatedExcerpt: 'Maak gratis een professionele offerte en download direct als PDF. Geen account nodig.',
    },
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Factuurbaas/Wat%20moet%20er%20op%20een%20offerte%20staan.jpg',
      alt: 'Wat moet er op een offerte staan: ondernemer overhandigt offerte aan klant',
    },
    datePublished: '2026-07-15',
    dateModified: '2026-09-04',
    relatedSlugs: ['verschil-factuur-offerte', 'factuur-maken-zzp', 'factureren-zonder-account'],
    relatedGuideSlugs: [
      'hoe-maak-je-een-offerte',
      'offerte-omzetten-naar-factuur',
      'geldigheid-van-een-offerte',
    ],
    faq: [
      {
        question: 'Wat moet er minimaal op een offerte staan?',
        answer:
          'Er is geen algemene wettelijke checklist die voor iedere offerte geldt. Zorg in ieder geval dat duidelijk is wie de offerte uitbrengt, voor wie deze bedoeld is, wat je levert, wat het kost en onder welke voorwaarden.',
      },
      {
        question: 'Welke onderdelen moet een offerte bevatten?',
        answer:
          'Een professionele offerte bevat meestal bedrijfs- en klantgegevens, een offertenummer, datum, omschrijving, prijs, btw-informatie, geldigheidsduur, voorwaarden en een manier om akkoord te geven.',
      },
      {
        question: 'Moet een offerte een offertenummer hebben?',
        answer:
          'Een offertenummer is vooral belangrijk voor je administratie en communicatie. Het maakt het eenvoudig om naar een specifieke offerte te verwijzen.',
      },
      {
        question: 'Moet een offerte btw bevatten?',
        answer:
          'Als je btw rekent, is het verstandig om duidelijk te vermelden of bedragen inclusief of exclusief btw zijn en welk btw-tarief van toepassing is.',
      },
      {
        question: 'Is een offerte altijd vrijblijvend?',
        answer:
          'Nee. Of een offerte vrijblijvend of bindend is, hangt af van de inhoud van het aanbod, eventuele voorwaarden en de omstandigheden. Als je wilt dat een offerte vrijblijvend is, leg dat duidelijk vast.',
      },
      {
        question: 'Hoe lang moet een offerte geldig zijn?',
        answer:
          'Je kunt zelf een geldigheidsduur bepalen. Veel ondernemers kiezen bijvoorbeeld voor 14 of 30 dagen, afhankelijk van het soort opdracht.',
      },
      {
        question: 'Moet een offerte ondertekend worden?',
        answer:
          'Een handtekening is niet in iedere situatie noodzakelijk om een overeenkomst tot stand te laten komen. Zorg vooral voor een duidelijke manier waarop de klant de offerte kan accepteren en leg het akkoord goed vast.',
      },
      {
        question: 'Kan ik een offerte later omzetten naar een factuur?',
        answer:
          'Ja. Na akkoord kun je de gegevens en afspraken uit de offerte gebruiken als basis voor de factuur.',
      },
    ],
    content: (
      <>
        <p>
          Wat moet er op een offerte staan als zzp&apos;er of ondernemer? Een offerte moet vooral duidelijk maken{' '}
          <strong>wat je gaat leveren, wat het kost en onder welke voorwaarden je de opdracht uitvoert</strong>.
        </p>
        <p>
          Anders dan bij een factuur is er in Nederland geen algemene wettelijke checklist met gegevens die op iedere
          offerte moeten staan. Toch zijn er verschillende onderdelen die je vrijwel altijd wilt opnemen om afspraken
          duidelijk vast te leggen en misverstanden te voorkomen.
        </p>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Maak gratis offerte →" />

        <h2>Welke onderdelen moet een offerte bevatten?</h2>
        <p>Een goede offerte bevat meestal:</p>
        <ol>
          <li>je bedrijfsgegevens</li>
          <li>de gegevens van je klant</li>
          <li>een offertenummer</li>
          <li>de datum</li>
          <li>een duidelijke omschrijving van de werkzaamheden of producten</li>
          <li>de prijs en eventuele btw</li>
          <li>de geldigheidsduur</li>
          <li>betalings- en andere voorwaarden</li>
          <li>eventuele algemene voorwaarden</li>
          <li>een duidelijke manier om akkoord te geven</li>
        </ol>
        <p>
          Niet elk onderdeel is in iedere situatie wettelijk verplicht. Zie de lijst daarom vooral als een praktische
          checklist voor een professionele offerte.
        </p>

        <h2>1. Bedrijfsgegevens</h2>
        <p>Vermeld duidelijk wie de offerte uitbrengt.</p>
        <p>Bijvoorbeeld:</p>
        <pre className="not-prose overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800 whitespace-pre-wrap">
{`Studio Jansen
Jansen Webdesign
Straatnaam 12
1234 AB Amsterdam
KvK: 12345678
E-mail: info@voorbeeld.nl
Telefoon: 06-12345678`}
        </pre>
        <p>Je kunt daarnaast bijvoorbeeld je website en btw-nummer vermelden wanneer dat relevant is.</p>

        <h2>2. Gegevens van de klant</h2>
        <p>Maak duidelijk voor wie de offerte bedoeld is.</p>
        <p>Bij een zakelijke klant kun je bijvoorbeeld vermelden:</p>
        <pre className="not-prose overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800 whitespace-pre-wrap">
{`Klant BV
T.a.v. Jan de Vries
Klantstraat 45
5678 CD Utrecht
jan@klant.nl`}
        </pre>
        <p>
          Bij een particuliere klant vermeld je de naam en contactgegevens die nodig zijn om duidelijk vast te leggen
          voor wie de offerte bestemd is.
        </p>

        <h2>3. Offertenummer</h2>
        <p>Geef iedere offerte een herkenbaar nummer.</p>
        <p>Bijvoorbeeld:</p>
        <p>
          <strong>Offertenummer: OFF-2026-001</strong>
        </p>
        <p>Een nummer maakt het makkelijker om een offerte terug te vinden en er later naar te verwijzen.</p>
        <p>Je kunt bijvoorbeeld werken met:</p>
        <ul>
          <li>OFF-2026-001</li>
          <li>OFF-2026-002</li>
          <li>OFF-2026-003</li>
        </ul>
        <p>Gebruik een systeem dat voor jou logisch en overzichtelijk is.</p>

        <h2>4. Datum van de offerte</h2>
        <p>Vermeld de datum waarop je de offerte hebt opgesteld.</p>
        <p>Bijvoorbeeld:</p>
        <p>
          <strong>Offertedatum: 4 september 2026</strong>
        </p>
        <p>De datum is ook handig wanneer je een geldigheidsduur aan de offerte koppelt.</p>

        <h2>5. Omschrijving van de werkzaamheden</h2>
        <p>Dit is één van de belangrijkste onderdelen van je offerte.</p>
        <p>Beschrijf zo duidelijk mogelijk wat je gaat leveren.</p>
        <p>
          <strong>Te algemeen:</strong>
        </p>
        <blockquote>Website maken — €2.500</blockquote>
        <p>
          <strong>Duidelijker:</strong>
        </p>
        <blockquote>
          Ontwerp en ontwikkeling van een bedrijfswebsite met 5 pagina&apos;s, responsive ontwerp, contactformulier
          en basis technische SEO — €2.500
        </blockquote>
        <p>
          Een duidelijke omschrijving helpt om later discussie te voorkomen over wat wel en niet binnen de opdracht
          valt.
        </p>
        <p>Je kunt ook aangeven:</p>
        <ul>
          <li>welke werkzaamheden je uitvoert;</li>
          <li>welke producten je levert;</li>
          <li>hoeveel uren zijn inbegrepen;</li>
          <li>welke materialen worden gebruikt;</li>
          <li>wat buiten de opdracht valt;</li>
          <li>wanneer de werkzaamheden worden uitgevoerd.</li>
        </ul>

        <h2>6. Prijs en btw</h2>
        <p>Vermeld duidelijk wat de klant betaalt.</p>
        <p>Bij een offerte met meerdere onderdelen kun je bijvoorbeeld dit gebruiken:</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[320px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Omschrijving
                </th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">
                  Aantal
                </th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">
                  Bedrag
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Website ontwerp</td>
                <td className="px-4 py-3 text-right">10 uur</td>
                <td className="px-4 py-3 text-right">€750,00</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Website ontwikkeling</td>
                <td className="px-4 py-3 text-right">20 uur</td>
                <td className="px-4 py-3 text-right">€1.500,00</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3 font-semibold text-deep-blue">Subtotaal</td>
                <td className="px-4 py-3" />
                <td className="px-4 py-3 text-right font-semibold text-deep-blue">€2.250,00</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Btw 21%</td>
                <td className="px-4 py-3" />
                <td className="px-4 py-3 text-right">€472,50</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-deep-blue">Totaal inclusief btw</td>
                <td className="px-4 py-3" />
                <td className="px-4 py-3 text-right font-semibold text-deep-blue">€2.722,50</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Als je btw rekent, is het verstandig om duidelijk te maken of genoemde prijzen inclusief of exclusief btw
          zijn.
        </p>
        <p>
          Heb je een bijzondere btw-situatie, bijvoorbeeld de KOR, een vrijstelling of btw verlegd? Zorg dan dat de
          offerte daarbij aansluit.
        </p>

        <h2>7. Geldigheidsduur</h2>
        <p>Geef aan hoe lang de offerte geldig is.</p>
        <p>Bijvoorbeeld:</p>
        <blockquote>Deze offerte is geldig tot en met 18 september 2026.</blockquote>
        <p>Je kunt zelf een passende termijn kiezen, bijvoorbeeld 14 of 30 dagen.</p>
        <p>
          Een geldigheidsduur voorkomt dat een klant maanden later nog aanspraak denkt te kunnen maken op dezelfde
          prijs terwijl omstandigheden inmiddels zijn veranderd.
        </p>

        <h2>8. Planning en levertijd</h2>
        <p>Niet voor iedere offerte is een uitgebreide planning nodig, maar bij projecten is het vaak nuttig.</p>
        <p>Je kunt bijvoorbeeld aangeven:</p>
        <p>
          <strong>Start:</strong> binnen 2 weken na akkoord
          <br />
          <strong>Verwachte oplevering:</strong> 4 weken na start
        </p>
        <p>Bij grotere projecten kun je de belangrijkste fases opnemen.</p>
        <p>Bijvoorbeeld:</p>
        <ol>
          <li>intake</li>
          <li>ontwerp</li>
          <li>uitvoering</li>
          <li>feedback</li>
          <li>oplevering</li>
        </ol>

        <h2>9. Betalingsvoorwaarden</h2>
        <p>Leg vast wanneer en hoe je betaling verwacht.</p>
        <p>Bijvoorbeeld:</p>
        <blockquote>Betaling binnen 14 dagen na factuurdatum.</blockquote>
        <p>Of:</p>
        <blockquote>50% bij aanvang van de opdracht en 50% na oplevering.</blockquote>
        <p>
          Een offerte is normaal gesproken <strong>geen factuur en geen betalingsverzoek</strong>. De daadwerkelijke
          betaling wordt doorgaans via een factuur in rekening gebracht, tenzij je voor een bepaalde constructie iets
          anders hebt afgesproken.
        </p>

        <h2>10. Algemene voorwaarden</h2>
        <p>
          Gebruik je algemene voorwaarden? Verwijs daar dan duidelijk naar en zorg ervoor dat je klant deze voorwaarden
          op de juiste manier kan bekijken voordat de overeenkomst tot stand komt.
        </p>
        <p>Je kunt bijvoorbeeld op de offerte vermelden:</p>
        <blockquote>Op deze offerte zijn onze algemene voorwaarden van toepassing.</blockquote>
        <p>
          Zet algemene voorwaarden niet alleen achteraf ergens op je website als de klant ze niet vooraf kan bekijken.
          Als je je voorwaarden onderdeel wilt maken van de overeenkomst, is het belangrijk dat je ze op de juiste
          manier ter beschikking stelt.
        </p>

        <h2>11. Akkoord</h2>
        <p>Maak duidelijk hoe de klant akkoord kan gaan.</p>
        <p>Bijvoorbeeld:</p>
        <blockquote>
          Door deze offerte te ondertekenen verklaart de klant akkoord te gaan met de omschrijving, prijs en
          voorwaarden.
        </blockquote>
        <p>
          Je kunt ook werken met een schriftelijk akkoord per e-mail of een andere manier die duidelijk vastlegt dat de
          klant de offerte accepteert.
        </p>
        <p>
          Een offerte hoeft dus niet per se een fysieke handtekening te hebben om tot een overeenkomst te kunnen
          leiden.
        </p>

        <h2>Wat is wettelijk verplicht op een offerte?</h2>
        <p>Dit is een belangrijk verschil met een factuur.</p>
        <p>
          Voor een offerte bestaat <strong>geen algemene wettelijke lijst met verplichte factuurachtige gegevens</strong>{' '}
          die in iedere situatie hetzelfde is.
        </p>
        <p>Daarom is het beter om onderscheid te maken tussen:</p>

        <h3>Wettelijk of juridisch relevant</h3>
        <p>
          Afhankelijk van de situatie kunnen bijvoorbeeld afspraken over prijs, prestatie, voorwaarden en andere
          contractuele informatie belangrijk zijn.
        </p>

        <h3>Praktisch belangrijk</h3>
        <p>Voor vrijwel iedere professionele offerte zijn deze gegevens verstandig:</p>
        <ul>
          <li>jouw bedrijfsgegevens;</li>
          <li>klantgegevens;</li>
          <li>datum;</li>
          <li>offertenummer;</li>
          <li>omschrijving;</li>
          <li>prijs;</li>
          <li>btw-behandeling;</li>
          <li>geldigheidsduur;</li>
          <li>betalingsvoorwaarden;</li>
          <li>planning indien relevant;</li>
          <li>algemene voorwaarden indien van toepassing;</li>
          <li>manier van akkoord.</li>
        </ul>
        <p>
          Een offerte hoeft dus niet automatisch aan dezelfde formele eisen te voldoen als een factuur.
        </p>

        <h2>Is een offerte altijd vrijblijvend?</h2>
        <p>Nee, je kunt niet simpelweg zeggen dat iedere offerte altijd vrijblijvend is.</p>
        <p>
          Of een offerte bindend is, hangt onder andere af van de inhoud van het aanbod, eventuele voorwaarden en de
          omstandigheden waarin het is gedaan.
        </p>
        <p>Je kunt in je offerte daarom duidelijk opnemen:</p>
        <blockquote>Deze offerte is geldig tot en met [datum].</blockquote>
        <p>Of, wanneer je dat daadwerkelijk bedoelt:</p>
        <blockquote>
          Deze offerte is vrijblijvend en kan door ons worden ingetrokken zolang deze niet is aanvaard.
        </blockquote>
        <p>Gebruik een dergelijke formulering alleen als deze past bij jouw afspraken en voorwaarden.</p>
        <p>
          Wil je weten hoe een offerte na akkoord verdergaat? Bekijk dan ook{' '}
          <Link href="/gidsen/offerte-omzetten-naar-factuur" className="text-warm-orange hover:underline">
            offerte omzetten naar factuur
          </Link>
          .
        </p>

        <h2>Hoe ziet een goede offerte eruit?</h2>
        <p>
          Een goede offerte is vooral <strong>duidelijk en concreet</strong>.
        </p>
        <p>De klant moet na het lezen snel kunnen beantwoorden:</p>
        <ul>
          <li>Wat krijg ik?</li>
          <li>Wat kost het?</li>
          <li>Wanneer wordt het geleverd?</li>
          <li>Wat is wel en niet inbegrepen?</li>
          <li>Hoe lang is de prijs geldig?</li>
          <li>Wanneer moet ik betalen?</li>
          <li>Hoe geef ik akkoord?</li>
        </ul>
        <p>
          Een professionele offerte hoeft daarom niet tientallen pagina&apos;s lang te zijn. Voor een eenvoudige
          opdracht kan één overzichtelijke pagina voldoende zijn.
        </p>

        <h2>Voorbeeld van een offerte</h2>
        <p>Stel dat je als webdesigner een website voor een klant gaat maken.</p>
        <h3>OFFERTE</h3>
        <p>
          <strong>Offertenummer:</strong> OFF-2026-014
          <br />
          <strong>Datum:</strong> 4 september 2026
          <br />
          <strong>Geldig tot:</strong> 18 september 2026
        </p>
        <p>
          <strong>Van</strong>
          <br />
          Studio Jansen
          <br />
          Jansen Webdesign
          <br />
          Amsterdam
          <br />
          KvK 12345678
        </p>
        <p>
          <strong>Aan</strong>
          <br />
          Klant BV
          <br />
          T.a.v. Jan de Vries
          <br />
          Utrecht
        </p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[280px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Werkzaamheden
                </th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">
                  Bedrag
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Website ontwerp</td>
                <td className="px-4 py-3 text-right">€750</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Website ontwikkeling</td>
                <td className="px-4 py-3 text-right">€1.500</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3 font-semibold text-deep-blue">Subtotaal</td>
                <td className="px-4 py-3 text-right font-semibold text-deep-blue">€2.250</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Btw 21%</td>
                <td className="px-4 py-3 text-right">€472,50</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-deep-blue">Totaal</td>
                <td className="px-4 py-3 text-right font-semibold text-deep-blue">€2.722,50</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Planning:</strong> start binnen 2 weken na akkoord.
          <br />
          <strong>Betaling:</strong> binnen 14 dagen na factuurdatum.
          <br />
          <strong>Geldigheid:</strong> deze offerte is geldig tot 18 september 2026.
        </p>
        <p>
          <strong>Akkoord:</strong>
          <br />
          Naam: __________________
          <br />
          Datum: __________________
        </p>
        <p>
          Dit is slechts een voorbeeld. De inhoud van een offerte moet aansluiten bij de opdracht en de afspraken met
          je klant.
        </p>
        <p>
          Bekijk ook ons{' '}
          <Link href="/offerte-voorbeeld/diensten" className="text-warm-orange hover:underline">
            offerte voorbeeld voor dienstverlening
          </Link>
          .
        </p>

        <h2>Offerte maken als zzp&apos;er</h2>
        <p>
          Als zzp&apos;er kun je een offerte eenvoudig zelf opstellen, bijvoorbeeld in Word of Excel. Een online
          offerte maker kan handig zijn als je snel een vaste structuur en professionele opmaak wilt gebruiken.
        </p>
        <p>Met de gratis offerte maker van FactuurBaas kun je:</p>
        <ul>
          <li>je bedrijfsgegevens invullen;</li>
          <li>klantgegevens toevoegen;</li>
          <li>werkzaamheden en prijzen invoeren;</li>
          <li>btw laten berekenen;</li>
          <li>je offerte als PDF downloaden.</li>
        </ul>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Maak gratis offerte →" />

        <p>
          Lees ook{' '}
          <Link href="/gidsen/hoe-maak-je-een-offerte" className="text-warm-orange hover:underline">
            hoe je een offerte maakt als zzp&apos;er
          </Link>
          .
        </p>

        <h2>Offerte en factuur: wat is het verschil?</h2>
        <p>
          Een <strong>offerte</strong> is een voorstel voor een opdracht. Je beschrijft wat je wilt leveren en tegen
          welke prijs en voorwaarden.
        </p>
        <p>
          Een <strong>factuur</strong> is een betalingsdocument waarmee je betaling vraagt voor geleverde goederen of
          diensten, of voor een afgesproken voorschot of termijn.
        </p>
        <p>Een offerte kan na akkoord de basis vormen voor de uiteindelijke facturatie.</p>

        <h2>Checklist: wat moet er op een offerte staan?</h2>
        <p>Gebruik deze checklist voordat je een offerte verstuurt:</p>
        <ul>
          <li>Bedrijfsgegevens ingevuld</li>
          <li>Klantgegevens ingevuld</li>
          <li>Offertenummer toegevoegd</li>
          <li>Datum toegevoegd</li>
          <li>Werkzaamheden duidelijk omschreven</li>
          <li>Prijzen gecontroleerd</li>
          <li>Btw-behandeling gecontroleerd</li>
          <li>Geldigheidsduur vermeld</li>
          <li>Planning vermeld indien relevant</li>
          <li>Betalingsvoorwaarden vermeld</li>
          <li>Algemene voorwaarden toegevoegd of beschikbaar gesteld indien van toepassing</li>
          <li>Akkoordmethode duidelijk</li>
        </ul>

        <h2>Veelgestelde vragen</h2>
        <h3>Wat moet er minimaal op een offerte staan?</h3>
        <p>
          Er is geen algemene wettelijke checklist die voor iedere offerte geldt. Zorg in ieder geval dat duidelijk is
          wie de offerte uitbrengt, voor wie deze bedoeld is, wat je levert, wat het kost en onder welke voorwaarden.
        </p>
        <h3>Welke onderdelen moet een offerte bevatten?</h3>
        <p>
          Een professionele offerte bevat meestal bedrijfs- en klantgegevens, een offertenummer, datum, omschrijving,
          prijs, btw-informatie, geldigheidsduur, voorwaarden en een manier om akkoord te geven.
        </p>
        <h3>Moet een offerte een offertenummer hebben?</h3>
        <p>
          Een offertenummer is vooral belangrijk voor je administratie en communicatie. Het maakt het eenvoudig om naar
          een specifieke offerte te verwijzen.
        </p>
        <h3>Moet een offerte btw bevatten?</h3>
        <p>
          Als je btw rekent, is het verstandig om duidelijk te vermelden of bedragen inclusief of exclusief btw zijn en
          welk btw-tarief van toepassing is.
        </p>
        <h3>Is een offerte altijd vrijblijvend?</h3>
        <p>
          Nee. Of een offerte vrijblijvend of bindend is, hangt af van de inhoud van het aanbod, eventuele voorwaarden
          en de omstandigheden. Als je wilt dat een offerte vrijblijvend is, leg dat duidelijk vast.
        </p>
        <h3>Hoe lang moet een offerte geldig zijn?</h3>
        <p>
          Je kunt zelf een geldigheidsduur bepalen. Veel ondernemers kiezen bijvoorbeeld voor 14 of 30 dagen,
          afhankelijk van het soort opdracht.
        </p>
        <h3>Moet een offerte ondertekend worden?</h3>
        <p>
          Een handtekening is niet in iedere situatie noodzakelijk om een overeenkomst tot stand te laten komen. Zorg
          vooral voor een duidelijke manier waarop de klant de offerte kan accepteren en leg het akkoord goed vast.
        </p>
        <h3>Kan ik een offerte later omzetten naar een factuur?</h3>
        <p>
          Ja. Na akkoord kun je de gegevens en afspraken uit de offerte gebruiken als basis voor de factuur.
        </p>

        <h2>Maak direct een professionele offerte</h2>
        <p>Maak je eigen offerte met je bedrijfsgegevens, werkzaamheden, prijzen en voorwaarden.</p>
        <p>Met FactuurBaas maak je gratis een offerte en download je deze direct als PDF.</p>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Open gratis offerte maker →" />
      </>
    ),
  },
  {
    slug: 'offerte-voorbeeld',
    cluster: 'offertes',
    seoTitle: "Offerte voorbeeld: professioneel voorbeeld voor zzp'ers",
    title: "Offerte voorbeeld voor zzp'ers en bedrijven",
    excerpt:
      "Bekijk een professioneel offerte voorbeeld voor zzp'ers en bedrijven. Inclusief werkzaamheden, prijzen, btw, geldigheid, voorwaarden en handige voorbeeldteksten.",
    keywords:
      "offerte voorbeeld, offerte voorbeeld zzp, offerte tekst voorbeeld, offerte voorbeeld dienstverlening, offerte voorbeeld bouw, offerte pdf, professionele offerte",
    tool: {
      href: '/tools/offerte-maker',
      label: 'Maak gratis offerte',
      ctaLabel: 'Open gratis offerte maker',
      relatedTitle: 'Offerte maker',
      relatedExcerpt: 'Maak gratis een professionele offerte en download direct als PDF. Geen account nodig.',
    },
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Factuurbaas/offerte%20voorbeeld%20factuurbaas.jpg',
      alt: 'Offerte voorbeeld: ondernemer biedt professionele offerte aan klant',
    },
    datePublished: '2026-07-15',
    dateModified: '2026-09-04',
    relatedSlugs: ['verschil-factuur-offerte', 'factuur-maken-zzp', 'factureren-zonder-account'],
    relatedGuideSlugs: [
      'hoe-maak-je-een-offerte',
      'wat-moet-er-op-een-offerte-staan',
      'geldigheid-van-een-offerte',
      'offerte-omzetten-naar-factuur',
    ],
    faq: [
      {
        question: 'Hoe ziet een goede offerte eruit?',
        answer:
          'Een goede offerte is duidelijk opgebouwd en vermeldt onder andere de aanbieder, klant, werkzaamheden, prijs, eventuele btw, geldigheidsduur en relevante voorwaarden.',
      },
      {
        question: 'Waar kan ik een offerte voorbeeld vinden?',
        answer:
          "Op deze pagina staat een compleet voorbeeld voor een zzp'er of bedrijf. Daarnaast kun je voorbeelden bekijken voor onder andere bouw, dienstverlening, freelance werk, marketing, websites en horeca.",
      },
      {
        question: 'Wat moet er in een offerte staan?',
        answer:
          'Dat hangt af van de opdracht. Gebruikelijk zijn bedrijfs- en klantgegevens, een offertenummer en datum, een omschrijving van de werkzaamheden, prijs, btw indien van toepassing, geldigheidsduur en relevante voorwaarden.',
      },
      {
        question: 'Hoe schrijf je een professionele offerte?',
        answer:
          'Beschrijf duidelijk wat je gaat leveren, hoeveel het kost en wat binnen de opdracht valt. Voeg vervolgens de planning, geldigheidsduur en relevante voorwaarden toe.',
      },
      {
        question: 'Kan ik een offerte voorbeeld kopiëren?',
        answer:
          'Je kunt een voorbeeld als inspiratie gebruiken, maar pas altijd de werkzaamheden, prijzen, gegevens en voorwaarden aan jouw eigen opdracht aan.',
      },
      {
        question: 'Wat is het verschil tussen een offerte en een factuur?',
        answer:
          'Een offerte is een aanbod voor toekomstige werkzaamheden of levering. Een factuur gebruik je om een verschuldigd bedrag in rekening te brengen.',
      },
      {
        question: 'Kan ik gratis een offerte maken?',
        answer:
          'Ja. Met FactuurBaas kun je gratis online een offerte maken, deze als PDF downloaden en vervolgens zelf versturen.',
      },
    ],
    content: (
      <>
        <p>
          Op zoek naar een <strong>offerte voorbeeld</strong>? Hieronder zie je hoe een professionele offerte voor een
          zzp&apos;er of bedrijf eruit kan zien. Je vindt een compleet voorbeeld met werkzaamheden, prijzen, btw,
          geldigheidsduur en voorwaarden.
        </p>
        <p>
          Een goede offerte maakt duidelijk <strong>wat je gaat leveren, wat het kost en onder welke voorwaarden</strong>
          .
        </p>
        <p>
          Wil je daarna direct je eigen offerte maken? Met FactuurBaas maak je gratis een offerte, download je deze als
          PDF en hoef je geen account aan te maken.
        </p>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Maak gratis offerte →" />

        <h2>Voorbeeld offerte</h2>
        <p>Een professionele offerte kan er bijvoorbeeld zo uitzien:</p>

        <h3>OFFERTE</h3>
        <p>
          <strong>Offertenummer:</strong> OFF-2026-014
          <br />
          <strong>Offertedatum:</strong> 9 juli 2026
          <br />
          <strong>Geldig tot:</strong> 23 juli 2026
        </p>
        <p>
          <strong>Van</strong>
          <br />
          Studio Jansen
          <br />
          Jansen Webdesign
          <br />
          Voorbeeldstraat 10
          <br />
          1234 AB Amsterdam
          <br />
          KvK: 12345678
          <br />
          Btw-id: NL123456789B01
        </p>
        <p>
          <strong>Aan</strong>
          <br />
          Klant BV
          <br />
          T.a.v. Jan de Vries
          <br />
          Klantstraat 20
          <br />
          3511 AA Utrecht
        </p>

        <h3>Werkzaamheden</h3>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[320px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Omschrijving
                </th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">
                  Aantal
                </th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">
                  Bedrag
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Website ontwerp</td>
                <td className="px-4 py-3 text-right">8 uur</td>
                <td className="px-4 py-3 text-right">€640,00</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Website ontwikkeling</td>
                <td className="px-4 py-3 text-right">12 uur</td>
                <td className="px-4 py-3 text-right">€960,00</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Technische oplevering</td>
                <td className="px-4 py-3 text-right">1</td>
                <td className="px-4 py-3 text-right">€250,00</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3 font-semibold text-deep-blue">Subtotaal</td>
                <td className="px-4 py-3" />
                <td className="px-4 py-3 text-right font-semibold text-deep-blue">€1.850,00</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3 font-semibold text-deep-blue">Btw 21%</td>
                <td className="px-4 py-3" />
                <td className="px-4 py-3 text-right font-semibold text-deep-blue">€388,50</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-deep-blue">Totaal</td>
                <td className="px-4 py-3" />
                <td className="px-4 py-3 text-right font-semibold text-deep-blue">€2.238,50</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Planning:</strong> start binnen 2 weken na akkoord.
          <br />
          <strong>Geldigheid:</strong> deze offerte is geldig tot 23 juli 2026.
          <br />
          <strong>Betaling:</strong> 14 dagen na factuurdatum.
        </p>

        <h3>Omschrijving</h3>
        <p>
          De opdracht bestaat uit het ontwerpen en ontwikkelen van een nieuwe website voor Klant BV. De werkzaamheden
          omvatten het ontwerp van de belangrijkste pagina&apos;s, technische ontwikkeling en oplevering van de website.
        </p>

        <h3>Voorwaarden</h3>
        <p>
          Meerwerk buiten de hierboven beschreven werkzaamheden wordt alleen uitgevoerd na overleg met en akkoord van de
          klant.
        </p>
        <p>
          Dit is een voorbeeld. Je eigen offerte moet natuurlijk worden aangepast aan je bedrijf, opdracht, prijzen en
          afspraken.
        </p>

        <h2>Wat staat er in een goed offerte voorbeeld?</h2>
        <p>Een professionele offerte kan onder andere deze onderdelen bevatten:</p>

        <h3>1. Bedrijfsgegevens</h3>
        <p>Vermeld wie de offerte uitbrengt. Denk aan:</p>
        <ul>
          <li>bedrijfsnaam</li>
          <li>naam van de ondernemer of contactpersoon</li>
          <li>adres</li>
          <li>e-mailadres en telefoonnummer</li>
          <li>KvK-nummer, wanneer van toepassing</li>
          <li>btw-identificatienummer, wanneer relevant</li>
        </ul>

        <h3>2. Gegevens van de klant</h3>
        <p>Maak duidelijk voor wie de offerte bedoeld is. Vermeld bijvoorbeeld:</p>
        <ul>
          <li>bedrijfsnaam</li>
          <li>naam van de contactpersoon</li>
          <li>adres</li>
          <li>e-mailadres</li>
        </ul>
        <p>
          Een offerte die duidelijk aan één klant is gericht, komt bovendien professioneler over dan een algemeen
          document.
        </p>

        <h3>3. Offertenummer en datum</h3>
        <p>Geef je offerte een herkenbaar nummer, bijvoorbeeld:</p>
        <ul>
          <li>OFF-2026-001</li>
          <li>OFF-2026-002</li>
          <li>OFFERTE-2026-15</li>
        </ul>
        <p>Een duidelijke nummering helpt bij je administratie.</p>

        <h3>4. Omschrijving van de werkzaamheden</h3>
        <p>Beschrijf zo concreet mogelijk wat je gaat leveren.</p>
        <p>
          <strong>Minder duidelijk:</strong>
        </p>
        <blockquote>Marketingwerkzaamheden</blockquote>
        <p>
          <strong>Duidelijker:</strong>
        </p>
        <blockquote>
          Ontwikkeling van een online marketingstrategie, inclusief zoekwoordenonderzoek, contentplanning en een
          maandelijkse rapportage gedurende drie maanden.
        </blockquote>
        <p>
          De klant moet na het lezen van je offerte begrijpen wat wel en niet binnen de opdracht valt.
        </p>

        <h3>5. Prijs</h3>
        <p>Laat zien hoe je tot het totaalbedrag komt.</p>
        <p>Bij een uurtarief kun je bijvoorbeeld vermelden:</p>
        <blockquote>10 uur advies × €75 = €750</blockquote>
        <p>Bij een projectprijs kun je de verschillende onderdelen van het project opsommen.</p>
        <p>Bij meerdere werkzaamheden is een tabel vaak het overzichtelijkst.</p>

        <h3>6. Btw</h3>
        <p>Als je btw rekent, vermeld je het toepasselijke btw-tarief en btw-bedrag duidelijk.</p>
        <p>Bijvoorbeeld:</p>
        <CalculationTable
          rows={[
            ['Subtotaal', '€1.000'],
            ['Btw 21%', '€210'],
            ['Totaal', '€1.210'],
          ]}
        />
        <p>
          Niet iedere ondernemer rekent op dezelfde manier btw. Bij bijvoorbeeld de KOR, vrijgestelde prestaties of
          btw-verlegging kunnen andere regels gelden.
        </p>

        <h3>7. Geldigheidsduur</h3>
        <p>Vermeld hoe lang je offerte geldig is.</p>
        <p>Bijvoorbeeld:</p>
        <blockquote>Deze offerte is geldig tot 30 september 2026.</blockquote>
        <p>Een geldigheidsduur voorkomt onduidelijkheid over hoelang je aanbod geldt.</p>

        <h3>8. Planning en levering</h3>
        <p>
          Bij grotere opdrachten is het verstandig om aan te geven wanneer je verwacht te beginnen en wat de planning
          ongeveer is.
        </p>
        <p>Bijvoorbeeld:</p>
        <blockquote>
          Na akkoord starten de werkzaamheden binnen twee weken. De verwachte doorlooptijd bedraagt ongeveer vier weken.
        </blockquote>

        <h3>9. Betaling</h3>
        <p>Beschrijf de afgesproken betalingsvoorwaarden. Bijvoorbeeld:</p>
        <blockquote>Betaling binnen 14 dagen na factuurdatum.</blockquote>
        <p>
          Bij grotere opdrachten kun je ook afspraken maken over een voorschot of betaling in termijnen.
        </p>

        <h3>10. Voorwaarden</h3>
        <p>Afhankelijk van de opdracht kun je afspraken opnemen over bijvoorbeeld:</p>
        <ul>
          <li>meerwerk</li>
          <li>annulering</li>
          <li>planning</li>
          <li>wijzigingen</li>
          <li>levering</li>
          <li>betaling</li>
          <li>algemene voorwaarden</li>
        </ul>
        <p>Welke voorwaarden je nodig hebt, hangt af van de opdracht.</p>

        <h2>Offerte tekst voorbeeld</h2>
        <p>
          Een goede offerte bestaat niet alleen uit cijfers. De tekst moet ook duidelijk beschrijven wat je aanbiedt.
        </p>

        <h3>Voorbeeld tekst voor dienstverlening</h3>
        <blockquote>
          Voor deze opdracht verzorgen wij het ontwerp en de ontwikkeling van een nieuwe website. De werkzaamheden
          bestaan uit het ontwerpen van de belangrijkste pagina&apos;s, het bouwen van de website en de technische
          oplevering. Na akkoord starten de werkzaamheden binnen twee weken.
        </blockquote>

        <h3>Voorbeeld tekst voor een marketingopdracht</h3>
        <blockquote>
          Wij ontwikkelen een online marketingplan gericht op het vergroten van de organische zichtbaarheid van uw
          website. De opdracht bestaat uit zoekwoordenonderzoek, concurrentieanalyse, een contentplanning en
          maandelijkse rapportage.
        </blockquote>

        <h3>Voorbeeld tekst voor een bouwopdracht</h3>
        <blockquote>
          De werkzaamheden bestaan uit het uitvoeren van schilderwerk aan de buitenzijde van de woning, inclusief
          voorbereiding, twee lagen schilderwerk en het benodigde materiaal. Eventueel meerwerk wordt vooraf besproken.
        </blockquote>
        <p>
          Het belangrijkste is dat de tekst concreet maakt <strong>wat je wel en niet aanbiedt</strong>.
        </p>

        <h2>Offerte voorbeeld zzp</h2>
        <p>Als zzp&apos;er kun je een relatief eenvoudige offerte gebruiken.</p>
        <p>Bijvoorbeeld:</p>
        <p>
          <strong>OFFERTE</strong>
        </p>
        <p>
          <strong>Werkzaamheden:</strong> Advies en begeleiding voor de implementatie van een nieuw CRM-systeem.
        </p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[320px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Omschrijving
                </th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">
                  Uren
                </th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">
                  Tarief
                </th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">
                  Bedrag
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Analyse huidige situatie</td>
                <td className="px-4 py-3 text-right">4</td>
                <td className="px-4 py-3 text-right">€85</td>
                <td className="px-4 py-3 text-right">€340</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Advies en plan van aanpak</td>
                <td className="px-4 py-3 text-right">6</td>
                <td className="px-4 py-3 text-right">€85</td>
                <td className="px-4 py-3 text-right">€510</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Begeleiding implementatie</td>
                <td className="px-4 py-3 text-right">8</td>
                <td className="px-4 py-3 text-right">€85</td>
                <td className="px-4 py-3 text-right">€680</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-deep-blue">Totaal excl. btw</td>
                <td className="px-4 py-3" />
                <td className="px-4 py-3" />
                <td className="px-4 py-3 text-right font-semibold text-deep-blue">€1.530</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Daaronder vermeld je de btw, het totaal, de geldigheidsduur en eventuele voorwaarden.
        </p>
        <p>
          Dit soort offerte is geschikt voor bijvoorbeeld consultants, marketeers, developers, designers en andere
          zelfstandige dienstverleners.
        </p>
        <p>
          Bekijk ook het uitgebreide{' '}
          <Link href="/offerte-voorbeeld/zzp" className="text-warm-orange hover:underline">
            zzp offerte voorbeeld
          </Link>
          .
        </p>

        <h2>Offerte voorbeeld dienstverlening</h2>
        <p>Voor zakelijke dienstverlening kan een offerte bijvoorbeeld bestaan uit:</p>
        <ul>
          <li>analyse of intake</li>
          <li>advies</li>
          <li>uitvoering</li>
          <li>rapportage</li>
          <li>eventuele nazorg</li>
        </ul>
        <p>
          Een consultant kan bijvoorbeeld een vaste projectprijs gebruiken, terwijl een freelancer met een uurtarief
          werkt.
        </p>
        <p>
          Bekijk ook het uitgebreide{' '}
          <Link href="/offerte-voorbeeld/diensten" className="text-warm-orange hover:underline">
            offerte voorbeeld dienstverlening
          </Link>
          .
        </p>

        <h2>Offerte voorbeeld bouw</h2>
        <p>
          Een bouwofferte is vaak uitgebreider omdat je verschillende werkzaamheden en materialen moet kunnen
          specificeren.
        </p>
        <p>Bijvoorbeeld:</p>
        <CalculationTable
          rows={[
            ['Voorbereiding', '€500'],
            ['Arbeid', '€2.000'],
            ['Materialen', '€1.500'],
            ['Transport', '€250'],
            ['Subtotaal', '€4.250'],
          ]}
        />
        <p>
          Bij bouwprojecten is het extra belangrijk om duidelijk te beschrijven welke werkzaamheden en materialen in de
          prijs zijn inbegrepen.
        </p>
        <p>
          Bekijk ook het{' '}
          <Link href="/offerte-voorbeeld/bouw" className="text-warm-orange hover:underline">
            bouw offerte voorbeeld
          </Link>
          .
        </p>

        <h2>Offerte voorbeeld website</h2>
        <p>Voor een websiteproject kun je de verschillende onderdelen afzonderlijk vermelden.</p>
        <p>Bijvoorbeeld:</p>
        <ul>
          <li>ontwerp</li>
          <li>ontwikkeling</li>
          <li>mobiele optimalisatie</li>
          <li>technische configuratie</li>
          <li>testen</li>
          <li>oplevering</li>
        </ul>
        <p>Zo ziet de klant precies waar de projectprijs uit bestaat.</p>
        <p>
          Het complete websitevoorbeeld staat bovenaan deze pagina. Bekijk ook het{' '}
          <Link href="/offerte-voorbeeld/zzp" className="text-warm-orange hover:underline">
            zzp offerte voorbeeld
          </Link>{' '}
          of het{' '}
          <Link href="/offerte-voorbeeld/freelance" className="text-warm-orange hover:underline">
            freelance offerte voorbeeld
          </Link>{' '}
          voor vergelijkbare projecten.
        </p>

        <h2>Offerte voorbeeld freelance</h2>
        <p>
          Een freelance offerte kan op uren, een vaste projectprijs of een combinatie daarvan gebaseerd zijn.
        </p>
        <p>Bij een uurtarief:</p>
        <blockquote>20 uur × €75 = €1.500</blockquote>
        <p>Bij een vaste projectprijs:</p>
        <blockquote>Ontwerp en ontwikkeling website = €2.500</blockquote>
        <p>
          Bij een combinatie kun je bijvoorbeeld een vaste prijs voor het ontwerp en een uurtarief voor aanvullend werk
          gebruiken.
        </p>
        <p>
          Bekijk ook het{' '}
          <Link href="/offerte-voorbeeld/freelance" className="text-warm-orange hover:underline">
            freelance offerte voorbeeld
          </Link>
          .
        </p>

        <h2>Offerte voorbeeld horeca en catering</h2>
        <p>
          Voor catering en horeca zijn onder andere het aantal personen, menu, personeel, materiaal en eventuele
          transportkosten belangrijk.
        </p>
        <p>Een offerte kan bijvoorbeeld bevatten:</p>
        <CalculationTable
          rows={[
            ['Catering 80 personen', '€3.200'],
            ['Personeel', '€1.200'],
            ['Materiaal', '€500'],
            ['Transport', '€250'],
            ['Subtotaal', '€5.150'],
          ]}
        />
        <p>
          Welke btw van toepassing is, hangt af van wat je precies levert. Bij een combinatie van eten, diensten en
          andere onderdelen kunnen verschillende btw-tarieven gelden.
        </p>
        <p>
          Bekijk ook het{' '}
          <Link href="/offerte-voorbeeld/horeca" className="text-warm-orange hover:underline">
            offerte voorbeeld horeca en catering
          </Link>
          .
        </p>

        <h2>Offerte voorbeeld marketing</h2>
        <p>Een marketingofferte kan bijvoorbeeld bestaan uit:</p>
        <CalculationTable
          rows={[
            ['Strategie en onderzoek', '€500'],
            ['Contentplanning', '€400'],
            ['Campagnebeheer', '€750'],
            ['Rapportage', '€250'],
            ['Subtotaal', '€1.900'],
          ]}
        />
        <p>Beschrijf vervolgens wat de klant precies voor deze prijs krijgt.</p>
        <p>
          Bekijk ook het{' '}
          <Link href="/offerte-voorbeeld/marketing" className="text-warm-orange hover:underline">
            marketing offerte voorbeeld
          </Link>
          .
        </p>

        <h2>Offerte voorbeeld PDF</h2>
        <p>
          Veel ondernemers versturen hun offerte uiteindelijk als PDF. Dat is handig omdat de opmaak van het document
          dan behouden blijft.
        </p>
        <p>Een offerte-PDF bevat bijvoorbeeld:</p>
        <ul>
          <li>bedrijfsgegevens</li>
          <li>klantgegevens</li>
          <li>offerte- en datumgegevens</li>
          <li>werkzaamheden</li>
          <li>prijzen</li>
          <li>btw</li>
          <li>geldigheidsduur</li>
          <li>voorwaarden</li>
        </ul>
        <p>
          Je kunt je offerte eerst in Word of een andere tekstverwerker maken en vervolgens als PDF opslaan. Met een
          online offerteprogramma kun je de offerte ook direct als PDF maken.
        </p>

        <h2>Offerte voorbeeld versus offerte template</h2>
        <p>
          Een <strong>offerte voorbeeld</strong> is meestal een ingevulde offerte waarmee je kunt zien hoe een goede
          offerte eruitziet.
        </p>
        <p>
          Een <strong>offerte template</strong> is een lege basis die je zelf kunt invullen.
        </p>
        <p>Kort gezegd:</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[320px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col" />
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Offerte voorbeeld
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Offerte template
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3 font-medium">Ingevuld</td>
                <td className="px-4 py-3">Ja</td>
                <td className="px-4 py-3">Nee</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3 font-medium">Doel</td>
                <td className="px-4 py-3">Inspiratie</td>
                <td className="px-4 py-3">Zelf invullen</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3 font-medium">Voorbeeldprijzen</td>
                <td className="px-4 py-3">Vaak</td>
                <td className="px-4 py-3">Eventueel</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Eigen gegevens toevoegen</td>
                <td className="px-4 py-3">Als basis</td>
                <td className="px-4 py-3">Ja</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Wil je een lege basis gebruiken? Bekijk dan de{' '}
          <Link href="/offerte-template" className="text-warm-orange hover:underline">
            offerte templates
          </Link>{' '}
          van FactuurBaas.
        </p>

        <h2>Offerte voorbeeld of offerteaanvraag?</h2>
        <p>
          Een <strong>offerteaanvraag</strong> is iets anders dan een offerte.
        </p>
        <p>
          Bij een offerteaanvraag vraagt een potentiële klant aan een ondernemer om een prijsvoorstel.
        </p>
        <p>Bijvoorbeeld:</p>
        <blockquote>
          Wij ontvangen graag een offerte voor het schilderen van onze woning, inclusief materiaal en voorbereiding.
        </blockquote>
        <p>
          De ondernemer reageert vervolgens met een offerte waarin de werkzaamheden, prijs en voorwaarden worden
          beschreven.
        </p>

        <h2>Is een offerte vrijblijvend?</h2>
        <p>
          Een offerte is niet automatisch altijd vrijblijvend. De precieze gevolgen hangen onder andere af van de inhoud
          van het aanbod en de afspraken die je maakt.
        </p>
        <p>
          Wil je duidelijkheid geven, vermeld dan bijvoorbeeld expliciet of je aanbod geldig is tot een bepaalde datum
          en welke voorwaarden van toepassing zijn.
        </p>
        <p>
          Lees meer over{' '}
          <Link href="/gidsen/geldigheid-van-een-offerte" className="text-warm-orange hover:underline">
            de geldigheid van een offerte
          </Link>{' '}
          en over{' '}
          <Link href="/gidsen/wat-moet-er-op-een-offerte-staan" className="text-warm-orange hover:underline">
            wat er op een offerte moet staan
          </Link>
          .
        </p>

        <h2>Een professionele offerte maken</h2>
        <p>Een goed offerte voorbeeld heeft vooral één doel: de klant moet snel kunnen begrijpen:</p>
        <p>
          <strong>Wat krijg ik?</strong>
        </p>
        <p>
          <strong>Wat kost het?</strong>
        </p>
        <p>
          <strong>Wanneer wordt het geleverd?</strong>
        </p>
        <p>
          <strong>Welke voorwaarden gelden?</strong>
        </p>
        <p>
          Vermijd daarom vage omschrijvingen en zorg dat de prijsopbouw en werkzaamheden duidelijk zijn.
        </p>
        <p>Met FactuurBaas kun je je eigen offerte online maken:</p>
        <ol>
          <li>Vul je bedrijfsgegevens in.</li>
          <li>Voeg de klant toe.</li>
          <li>Beschrijf de werkzaamheden.</li>
          <li>Voeg prijzen en btw toe.</li>
          <li>Kies een layout.</li>
          <li>Download de offerte als PDF.</li>
        </ol>
        <p>Je kunt de offerte vervolgens zelf naar je klant versturen.</p>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Maak gratis je eigen offerte →" />

        <h2>Veelgestelde vragen</h2>
        <h3>Hoe ziet een goede offerte eruit?</h3>
        <p>
          Een goede offerte is duidelijk opgebouwd en vermeldt onder andere de aanbieder, klant, werkzaamheden, prijs,
          eventuele btw, geldigheidsduur en relevante voorwaarden.
        </p>
        <h3>Waar kan ik een offerte voorbeeld vinden?</h3>
        <p>
          Op deze pagina staat een compleet voorbeeld voor een zzp&apos;er of bedrijf. Daarnaast kun je voorbeelden
          bekijken voor onder andere bouw, dienstverlening, freelance werk, marketing, websites en horeca.
        </p>
        <h3>Wat moet er in een offerte staan?</h3>
        <p>
          Dat hangt af van de opdracht. Gebruikelijk zijn bedrijfs- en klantgegevens, een offertenummer en datum, een
          omschrijving van de werkzaamheden, prijs, btw indien van toepassing, geldigheidsduur en relevante voorwaarden.
        </p>
        <h3>Hoe schrijf je een professionele offerte?</h3>
        <p>
          Beschrijf duidelijk wat je gaat leveren, hoeveel het kost en wat binnen de opdracht valt. Voeg vervolgens de
          planning, geldigheidsduur en relevante voorwaarden toe.
        </p>
        <h3>Kan ik een offerte voorbeeld kopiëren?</h3>
        <p>
          Je kunt een voorbeeld als inspiratie gebruiken, maar pas altijd de werkzaamheden, prijzen, gegevens en
          voorwaarden aan jouw eigen opdracht aan.
        </p>
        <h3>Wat is het verschil tussen een offerte en een factuur?</h3>
        <p>
          Een offerte is een aanbod voor toekomstige werkzaamheden of levering. Een factuur gebruik je om een
          verschuldigd bedrag in rekening te brengen.
        </p>
        <h3>Kan ik gratis een offerte maken?</h3>
        <p>
          Ja. Met FactuurBaas kun je gratis online een offerte maken, deze als PDF downloaden en vervolgens zelf
          versturen.
        </p>

        <h2>Maak je eigen offerte</h2>
        <p>
          Gebruik het voorbeeld hierboven als basis, pas de inhoud aan je eigen opdracht aan en maak vervolgens je
          eigen professionele offerte.
        </p>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Open gratis offerte maker →" />

        <p>Bekijk ook:</p>
        <ul>
          <li>
            <Link href="/offerte-template" className="text-warm-orange hover:underline">
              Offerte template
            </Link>
          </li>
          <li>
            <Link href="/gidsen/wat-moet-er-op-een-offerte-staan" className="text-warm-orange hover:underline">
              Wat moet er op een offerte staan?
            </Link>
          </li>
          <li>
            <Link href="/gidsen/hoe-maak-je-een-offerte" className="text-warm-orange hover:underline">
              Hoe maak je een offerte?
            </Link>
          </li>
          <li>
            <Link href="/gidsen/offerte-maken-voor-zzper" className="text-warm-orange hover:underline">
              Offerte sturen als zzp&apos;er
            </Link>
          </li>
          <li>
            <Link href="/gidsen/offerte-omzetten-naar-factuur" className="text-warm-orange hover:underline">
              Offerte omzetten naar factuur
            </Link>
          </li>
          <li>
            <Link href="/factuur-voorbeeld" className="text-warm-orange hover:underline">
              Factuur voorbeelden
            </Link>
          </li>
        </ul>
      </>
    ),
  },
  {
    slug: 'offerte-maken-in-pdf',
    cluster: 'offertes',
    seoTitle: 'Offerte maken in PDF | Gratis offerte PDF downloaden',
    title: 'Offerte maken in PDF: zo maak je een professionele offerte (Word, Excel of online)',
    excerpt:
      'Offerte maken in PDF? Leer hoe je een offerte opslaat als PDF in Word of Excel, of maak gratis direct een professionele offerte PDF met FactuurBaas — zonder account.',
    keywords:
      'offerte maken in pdf, offerte pdf maken, offerte pdf downloaden, offerte word pdf, offerte excel pdf, gratis offerte pdf, offerte opslaan als pdf',
    tool: {
      href: '/tools/offerte-maker',
      label: 'Maak gratis offerte PDF',
      ctaLabel: 'Download offerte als PDF',
      relatedTitle: 'Offerte maker',
      relatedExcerpt: 'Maak gratis een professionele offerte en download direct als PDF. Geen account nodig.',
    },
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Factuurbaas/offerte%20maken%20in%20pdf.jpg',
      alt: 'Offerte maken in PDF: ondernemer toont professionele offerte aan klant',
    },
    datePublished: '2026-07-15',
    dateModified: '2026-07-15',
    relatedSlugs: ['factuur-pdf-downloaden', 'verschil-factuur-offerte', 'factureren-zonder-account'],
    relatedGuideSlugs: ['hoe-maak-je-een-offerte', 'wat-moet-er-op-een-offerte-staan', 'digitale-offertes-versturen'],
    faq: [
      {
        question: 'Hoe maak ik een offerte in PDF?',
        answer:
          'Je kunt een offerte in Word of Excel maken en opslaan als PDF, of direct een offerte PDF maken met een online tool zoals FactuurBaas en deze downloaden.',
      },
      {
        question: 'Kan ik een offerte gratis als PDF downloaden?',
        answer:
          'Ja. Met FactuurBaas maak je gratis een professionele offerte en download je deze direct als PDF — zonder account.',
      },
      {
        question: 'Wat is het verschil tussen Word en een online offerte maker?',
        answer:
          'In Word maak je zelf de opmaak en btw-berekening. Een online offerte maker berekent btw automatisch, heeft een vaste layout en genereert direct een PDF.',
      },
      {
        question: 'Moet een offerte altijd als PDF verstuurd worden?',
        answer:
          'Een PDF is aan te raden omdat de opmaak hetzelfde blijft en de ontvanger het document niet per ongeluk kan aanpassen.',
      },
    ],
    content: (
      <>
        <p>
          Wil je een <strong>offerte maken in PDF</strong> om naar je klant te sturen? Een PDF-offerte ziet er professioneel
          uit, blijft netjes opgemaakt en kan niet zomaar worden aangepast — ideaal voor zakelijke afspraken.
        </p>
        <p>
          Je kunt een offerte PDF maken in <strong>Word</strong>, <strong>Excel</strong> of met een online tool zoals{' '}
          <Link href="/tools/offerte-maker" className="text-warm-orange hover:underline">
            FactuurBaas
          </Link>
          . Hieronder leggen we alle drie de opties uit.
        </p>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Maak gratis offerte PDF →" />

        <h2>Waarom een offerte als PDF versturen?</h2>
        <p>Een PDF-offerte heeft voordelen ten opzichte van een Word- of Excel-bestand:</p>
        <ul>
          <li>de opmaak blijft hetzelfde op elke computer</li>
          <li>de klant kan het document niet per ongeluk wijzigen</li>
          <li>het oogt professioneler bij zakelijke klanten</li>
          <li>je kunt het eenvoudig per e-mail versturen of printen</li>
        </ul>
        <p>
          Zorg dat je offerte PDF minimaal je bedrijfsgegevens, klantgegevens, werkzaamheden, prijzen, btw en
          geldigheidsduur bevat. Lees{' '}
          <Link href="/gidsen/wat-moet-er-op-een-offerte-staan" className="text-warm-orange hover:underline">
            wat moet er op een offerte staan
          </Link>{' '}
          voor het volledige overzicht.
        </p>

        <h2>Offerte maken in PDF met Word</h2>
        <p>Veel ondernemers beginnen met een offerte in Microsoft Word. Zo sla je die op als PDF:</p>
        <ol>
          <li>Open Word en maak een nieuwe offerte of gebruik een template.</li>
          <li>Vul je bedrijfsgegevens, klantgegevens, werkzaamheden en prijzen in.</li>
          <li>Bereken btw handmatig en voeg subtotaal en totaal toe.</li>
          <li>Ga naar <strong>Bestand → Opslaan als</strong> (of <strong>Exporteren</strong>).</li>
          <li>Kies als bestandstype <strong>PDF</strong> en klik op Opslaan.</li>
        </ol>
        <p>
          <strong>Let op:</strong> in Word moet je zelf de opmaak regelen en btw berekenen. Fouten in formules of
          afronding komen vaak voor. Bekijk een{' '}
          <Link href="/gidsen/offerte-voorbeeld" className="text-warm-orange hover:underline">
            offerte voorbeeld
          </Link>{' '}
          om te zien hoe een goede structuur eruitziet.
        </p>

        <h2>Offerte maken in PDF met Excel</h2>
        <p>Excel is handig als je veel regels, uren of materialen hebt. Zo maak je een offerte PDF in Excel:</p>
        <ol>
          <li>Maak een spreadsheet met kolommen voor omschrijving, aantal, prijs en totaal.</li>
          <li>Gebruik formules voor subtotaal en btw, bijvoorbeeld: <strong>=subtotaal * 0,21</strong> voor 21% btw.</li>
          <li>Voeg bovenaan je bedrijfs- en klantgegevens toe.</li>
          <li>Ga naar <strong>Bestand → Opslaan als</strong>.</li>
          <li>Kies <strong>PDF</strong> als bestandstype en sla op.</li>
        </ol>
        <p>
          Excel werkt goed voor berekeningen, maar een offerte ziet er in een spreadsheet vaak minder professioneel uit
          dan in een vaste layout. Voor een strakkere uitstraling kun je beter een{' '}
          <Link href="/offerte-template" className="text-warm-orange hover:underline">
            offerte template
          </Link>{' '}
          gebruiken.
        </p>

        <h2>Offerte maken in PDF met FactuurBaas</h2>
        <p>
          De snelste manier om een <strong>offerte PDF te maken</strong> is met een online offerte maker. Geen Word, geen
          Excel en geen handmatige btw-berekening.
        </p>
        <p>Met FactuurBaas maak je in een paar stappen een professionele offerte PDF:</p>
        <ol>
          <li>Open de gratis offerte maker.</li>
          <li>Vul je bedrijfsgegevens en klantgegevens in.</li>
          <li>Voeg werkzaamheden, uren of producten toe met prijzen.</li>
          <li>Laat btw automatisch berekenen (21%, 9% of 0%).</li>
          <li>Kies een layout en download direct je offerte als PDF.</li>
        </ol>
        <p>Voordelen ten opzichte van Word of Excel:</p>
        <ul>
          <li>gratis en zonder account</li>
          <li>automatische btw-berekening</li>
          <li>professionele layout</li>
          <li>direct PDF downloaden</li>
          <li>offerte later omzetten naar een factuur</li>
        </ul>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Download offerte als PDF →" />

        <h2>Word, Excel of FactuurBaas: wat is het beste?</h2>
        <CalculationTable
          rows={[
            ['Opmaak zelf regelen', 'Word / Excel'],
            ['Btw automatisch berekenen', 'FactuurBaas'],
            ['Direct PDF downloaden', 'Alle drie'],
            ['Offerte omzetten naar factuur', 'FactuurBaas'],
            ['Geen software installeren', 'FactuurBaas'],
          ]}
        />
        <p>
          Voor incidentele offertes kan Word of Excel voldoende zijn. Maak je vaker offertes, dan bespaar je tijd met een
          online tool. Vergelijkbaar voor facturen: lees ook{' '}
          <Link href="/blogs/factuur-pdf-downloaden" className="text-warm-orange hover:underline">
            factuur PDF downloaden
          </Link>
          .
        </p>

        <h2>Tips voor een professionele offerte PDF</h2>
        <ul>
          <li>gebruik een duidelijk offertenummer (bijv. OFF-2026-001)</li>
          <li>vermeld een geldigheidsduur (bijv. 14 of 30 dagen)</li>
          <li>beschrijf werkzaamheden zo concreet mogelijk</li>
          <li>toon subtotaal, btw en totaal apart</li>
          <li>controleer gegevens voordat je de PDF verstuurt</li>
        </ul>
        <p>
          Bekijk{' '}
          <Link href="/offerte-voorbeeld" className="text-warm-orange hover:underline">
            offerte voorbeelden
          </Link>{' '}
          per branche — van zzp tot bouw en marketing — of volg het stappenplan{' '}
          <Link href="/gidsen/hoe-maak-je-een-offerte" className="text-warm-orange hover:underline">
            hoe maak je een offerte
          </Link>
          .
        </p>

        <h2>Veelgestelde vragen</h2>
        <h3>Hoe maak ik een offerte in PDF?</h3>
        <p>
          Maak je offerte in Word of Excel en kies &quot;Opslaan als PDF&quot;, of gebruik FactuurBaas om direct een
          offerte PDF te downloaden.
        </p>
        <h3>Kan ik een offerte gratis als PDF downloaden?</h3>
        <p>Ja. Met FactuurBaas maak je gratis een professionele offerte en download je deze direct als PDF.</p>
        <h3>Hoe sla ik een Word-offerte op als PDF?</h3>
        <p>
          Ga in Word naar Bestand → Opslaan als (of Exporteren) en kies PDF als bestandstype. Klik op Opslaan.
        </p>
        <h3>Hoe sla ik een Excel-offerte op als PDF?</h3>
        <p>Ga in Excel naar Bestand → Opslaan als en selecteer PDF. Je kunt ook een specifiek bereik selecteren voordat je exporteert.</p>
        <h3>Moet een offerte altijd als PDF verstuurd worden?</h3>
        <p>
          Het is niet verplicht, maar wel aan te raden. Een PDF blijft netjes opgemaakt en voorkomt dat de ontvanger
          bedragen per ongeluk wijzigt.
        </p>

        <h2>Maak direct je offerte PDF</h2>
        <p>
          Vul je gegevens in, kies een layout en download je offerte als PDF. Gratis, zonder account en klaar in een paar
          minuten.
        </p>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Open gratis offerte maker →" />
      </>
    ),
  },
  {
    slug: 'offerte-maken-voor-zzper',
    cluster: 'offertes',
    seoTitle: 'Offerte sturen als zzp\'er: zo doe je dat professioneel',
    title: 'Offerte sturen als zzp\'er: zo doe je dat',
    excerpt:
      'Hoe stuur je een offerte als zzp\'er? Lees hoe je een offerte maakt, als PDF verstuurt, akkoord vraagt en daarna de opdracht en factuur afhandelt.',
    keywords:
      'offerte sturen zzp, offerte versturen, offerte per email, offerte pdf zzp, offerte akkoord, offerte maken zzp, gratis offerte zzp',
    tool: {
      href: '/tools/offerte-maker',
      label: 'Maak gratis een offerte',
      ctaLabel: 'Open gratis offerte maker',
      relatedTitle: 'Offerte maker',
      relatedExcerpt: 'Maak gratis een professionele offerte en download direct als PDF. Geen account nodig.',
    },
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Factuurbaas/offerte%20maken%20voor%20zzper.jpg',
      alt: 'Offerte sturen als zzp\'er: zelfstandige verstuurt professionele offerte per e-mail',
    },
    datePublished: '2026-07-15',
    dateModified: '2026-09-03',
    relatedSlugs: ['factuur-maken-zzp', 'verschil-factuur-offerte', 'factureren-zonder-account'],
    relatedGuideSlugs: ['hoe-maak-je-een-offerte', 'wat-moet-er-op-een-offerte-staan', 'offerte-voorbeeld'],
    faq: [
      {
        question: 'Hoe stuur ik een offerte als zzp\'er?',
        answer:
          'Maak eerst een duidelijke offerte, controleer de gegevens en prijzen en verstuur het document bijvoorbeeld als PDF per e-mail. Vraag de klant om akkoord en bewaar de verstuurde offerte en het akkoord in je administratie.',
      },
      {
        question: 'Moet een zzp\'er altijd een offerte sturen?',
        answer:
          'Nee. Een offerte is niet voor iedere opdracht verplicht. Bij grotere, complexere of duurdere opdrachten is het vaak verstandig om vooraf duidelijke afspraken over werkzaamheden en prijs vast te leggen.',
      },
      {
        question: 'Kan ik een offerte gewoon per e-mail sturen?',
        answer:
          'Ja. Een offerte kan bijvoorbeeld als PDF bij een e-mail worden meegestuurd. Zorg ervoor dat de offerte duidelijk is en dat je klant weet hoe hij akkoord kan gaan.',
      },
      {
        question: 'Moet een offerte ondertekend worden?',
        answer:
          'Niet iedere offerte hoeft per se met een handtekening te worden geaccepteerd. Een klant kan een aanbod ook op een andere manier accepteren. Bij belangrijke opdrachten kan schriftelijk akkoord wel handig zijn als bewijs van de gemaakte afspraken.',
      },
      {
        question: 'Hoe lang moet een offerte geldig zijn?',
        answer:
          'Dat bepaal je zelf. Een geldigheidsduur van bijvoorbeeld 14 of 30 dagen komt vaak voor, maar bij iedere opdracht kan een andere termijn passend zijn.',
      },
      {
        question: 'Wanneer stuur ik de factuur?',
        answer:
          'Meestal factureer je volgens de afspraken uit de offerte nadat de opdracht of een afgesproken deel daarvan is uitgevoerd. Bij grotere opdrachten kunnen ook aanbetalingen of termijnfacturen worden afgesproken.',
      },
      {
        question: 'Kan ik gratis een offerte maken als zzp\'er?',
        answer:
          'Ja. Met de gratis offerte maker van FactuurBaas kun je een offerte maken en als PDF downloaden zonder account.',
      },
    ],
    content: (
      <>
        <p>
          Een klant vraagt je om een prijs voor een opdracht. Je maakt een offerte, maar hoe stuur je die vervolgens op
          een professionele manier?
        </p>
        <p>
          Als zzp&apos;er kun je een offerte bijvoorbeeld als PDF per e-mail versturen. Zorg ervoor dat duidelijk is wat
          je gaat leveren, wat het kost, hoelang de offerte geldig is en welke afspraken gelden.
        </p>
        <p>
          In deze gids lees je <strong>hoe je een offerte maakt en verstuurt als zzp&apos;er</strong>, wat je in de
          begeleidende e-mail zet en wat je doet nadat de klant akkoord gaat.
        </p>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Maak gratis een offerte →" />

        <h2>Hoe stuur je een offerte als zzp&apos;er?</h2>
        <p>Een eenvoudige werkwijze is:</p>
        <ol>
          <li>Bespreek de opdracht en wensen van de klant.</li>
          <li>Maak een duidelijke offerte.</li>
          <li>Controleer werkzaamheden, prijzen en btw.</li>
          <li>Sla de offerte op als PDF.</li>
          <li>Stuur de PDF naar de klant met een korte begeleidende e-mail.</li>
          <li>Geef aan tot wanneer de offerte geldig is.</li>
          <li>Bewaar de verstuurde offerte in je administratie.</li>
          <li>Verwerk het akkoord en start daarna met de opdracht.</li>
        </ol>
        <p>
          Een offerte per e-mail als PDF is voor veel zzp&apos;ers een eenvoudige manier om afspraken schriftelijk vast
          te leggen.
        </p>

        <h2>Wat zet je in een offerte voor een zzp&apos;er?</h2>
        <p>
          De exacte inhoud van een offerte bepaal je grotendeels zelf. Zorg in ieder geval dat de klant goed kan zien
          wat je aanbiedt en tegen welke voorwaarden.
        </p>
        <p>Denk aan:</p>
        <ul>
          <li>je bedrijfsnaam en contactgegevens</li>
          <li>de gegevens van je klant</li>
          <li>offertenummer</li>
          <li>datum</li>
          <li>omschrijving van de opdracht</li>
          <li>werkzaamheden of producten</li>
          <li>eventuele uren of aantallen</li>
          <li>prijs per onderdeel</li>
          <li>subtotaal en totaal</li>
          <li>btw, als dat van toepassing is</li>
          <li>geldigheidsduur van de offerte</li>
          <li>leverings- en betalingsafspraken</li>
          <li>eventuele algemene voorwaarden</li>
        </ul>
        <p>
          Bij een complexe opdracht is het vooral belangrijk om duidelijk te beschrijven{' '}
          <strong>wat wel en niet binnen de prijs valt</strong>.
        </p>
        <p>
          Bekijk ook{' '}
          <Link href="/gidsen/wat-moet-er-op-een-offerte-staan" className="text-warm-orange hover:underline">
            wat er op een offerte moet staan
          </Link>
          .
        </p>

        <h2>Offerte als PDF versturen</h2>
        <p>Een PDF is handig omdat de opmaak van je offerte op verschillende apparaten hetzelfde blijft.</p>
        <p>Controleer voordat je de offerte verstuurt:</p>
        <ul>
          <li>klopt de naam van de klant?</li>
          <li>klopt het bedrag?</li>
          <li>zijn alle werkzaamheden opgenomen?</li>
          <li>zijn extra kosten duidelijk vermeld?</li>
          <li>klopt het btw-tarief?</li>
          <li>staat de geldigheidsduur erbij?</li>
          <li>zijn eventuele algemene voorwaarden toegevoegd of correct vermeld?</li>
        </ul>
        <p>Geef de offerte een duidelijke bestandsnaam, bijvoorbeeld:</p>
        <p>
          <strong>Offerte-OFF-2026-024-Bedrijf-X.pdf</strong>
        </p>
        <p>Zo kunnen jij en je klant het document later gemakkelijk terugvinden.</p>

        <h2>Wat schrijf je in de e-mail bij een offerte?</h2>
        <p>
          Je hoeft geen lange e-mail te schrijven. Leg kort uit wat je meestuurt en wat de klant kan doen als hij
          akkoord is.
        </p>
        <p>Bijvoorbeeld:</p>
        <blockquote>
          Beste Jan,
          <br />
          <br />
          Zoals besproken stuur ik hierbij de offerte voor de werkzaamheden aan jullie website.
          <br />
          <br />
          In de bijlage vind je de offerte met de werkzaamheden, planning en prijs.
          <br />
          <br />
          De offerte is geldig tot 30 september 2026. Als je akkoord bent, kun je dit per e-mail bevestigen.
          <br />
          <br />
          Met vriendelijke groet,
          <br />
          Matthijs
        </blockquote>
        <p>
          De offerte zelf bevat de inhoudelijke afspraken. Houd de begeleidende e-mail daarom meestal kort.
        </p>

        <h2>Hoe vraag je akkoord op een offerte?</h2>
        <p>Maak duidelijk hoe de klant akkoord kan geven.</p>
        <p>Bijvoorbeeld:</p>
        <blockquote>
          “Als je akkoord gaat met deze offerte, kun je dit per e-mail bevestigen onder vermelding van het
          offertenummer.”
        </blockquote>
        <p>
          Bij grotere opdrachten kan een ondertekende offerte of een aparte overeenkomst handig zijn.
        </p>
        <p>
          Bewaar het akkoord samen met de offerte. Zo heb je later een duidelijke administratie van wat er is
          afgesproken.
        </p>
        <p>
          Een geaccepteerde offerte kan onderdeel zijn van de overeenkomst tussen jou en je klant. De precieze
          juridische situatie hangt af van de inhoud van het aanbod en de manier waarop de klant akkoord gaat.
        </p>

        <h2>Wat doe je nadat de klant akkoord is?</h2>
        <p>Na akkoord kun je de opdracht uitvoeren volgens de gemaakte afspraken.</p>
        <p>Afhankelijk van de opdracht kun je:</p>
        <ul>
          <li>een startdatum bevestigen</li>
          <li>een opdrachtbevestiging sturen</li>
          <li>een aanbetaling of eerste termijn factureren</li>
          <li>de werkzaamheden uitvoeren</li>
          <li>tussentijds factureren</li>
          <li>na oplevering de eindfactuur sturen</li>
        </ul>
        <p>
          Bij een eenvoudige opdracht kan een aparte opdrachtbevestiging niet nodig zijn. Bij grotere projecten kan
          het juist prettig zijn om de afspraken nog een keer overzichtelijk te bevestigen.
        </p>

        <h2>Offerte en factuur: wat is het verschil?</h2>
        <p>
          Een <strong>offerte</strong> is een voorstel voor een opdracht. Je beschrijft wat je gaat leveren en tegen
          welke prijs.
        </p>
        <p>
          Een <strong>factuur</strong> gebruik je om een bedrag in rekening te brengen voor geleverde goederen of
          diensten.
        </p>
        <p>Bijvoorbeeld:</p>
        <p>
          <strong>1. Offerte</strong>
          <br />
          Je spreekt met een klant af dat je een website bouwt voor €3.000.
        </p>
        <p>
          <strong>2. Akkoord</strong>
          <br />
          De klant accepteert je offerte.
        </p>
        <p>
          <strong>3. Uitvoering</strong>
          <br />
          Je bouwt de website volgens de afgesproken werkzaamheden.
        </p>
        <p>
          <strong>4. Factuur</strong>
          <br />
          Je brengt de afgesproken €3.000, eventueel in termijnen, in rekening.
        </p>
        <p>
          Bekijk ook het{' '}
          <Link href="/blogs/verschil-factuur-offerte" className="text-warm-orange hover:underline">
            verschil tussen een offerte en een factuur
          </Link>
          .
        </p>

        <h2>Offerte sturen met algemene voorwaarden</h2>
        <p>
          Gebruik je algemene voorwaarden? Vermeld dan in je offerte dat deze van toepassing zijn en zorg dat je
          klant ze kan bekijken voordat de overeenkomst wordt gesloten.
        </p>
        <p>Bijvoorbeeld:</p>
        <blockquote>
          “Op deze offerte zijn onze algemene voorwaarden van toepassing. Deze zijn als bijlage toegevoegd.”
        </blockquote>
        <p>
          Algemene voorwaarden moeten op de juiste manier aan de klant beschikbaar worden gesteld. Alleen ergens op
          je website vermelden dat je voorwaarden hebt, is niet altijd voldoende. KVK adviseert onder meer om de
          klant duidelijk te informeren en de voorwaarden beschikbaar te stellen voordat de overeenkomst wordt
          gesloten.
        </p>

        <h2>Hoe lang moet een offerte geldig zijn?</h2>
        <p>Dat bepaal je zelf. Je kunt bijvoorbeeld kiezen voor 14 of 30 dagen.</p>
        <p>
          Bij opdrachten waarbij prijzen sterk kunnen veranderen, kan een kortere geldigheidsduur verstandig zijn.
          Vermeld altijd duidelijk <strong>tot welke datum</strong> de klant kan reageren.
        </p>
        <p>Bijvoorbeeld:</p>
        <blockquote>Deze offerte is geldig tot en met 30 september 2026.</blockquote>
        <p>
          Een offerte kan ook onder voorwaarden worden uitgebracht, bijvoorbeeld wanneer materiaalprijzen of andere
          kosten sterk kunnen fluctueren.
        </p>

        <h2>Btw op een zzp-offerte</h2>
        <p>
          Bereken je als zzp&apos;er btw? Vermeld dan duidelijk welke bedragen exclusief btw zijn, welk btw-tarief
          wordt toegepast en wat het totaal inclusief btw is.
        </p>
        <p>Bijvoorbeeld:</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[280px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Omschrijving
                </th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">
                  Bedrag
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Werkzaamheden</td>
                <td className="px-4 py-3 text-right">€ 1.000,00</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">21% btw</td>
                <td className="px-4 py-3 text-right">€ 210,00</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-deep-blue">Totaal</td>
                <td className="px-4 py-3 text-right font-semibold text-deep-blue">€ 1.210,00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Gebruik je de KOR, dan breng je geen btw in rekening. De Belastingdienst geeft aan dat deelnemers aan de
          KOR geen btw aan hun klanten berekenen.
        </p>
        <p>
          Het juiste btw-tarief hangt af van de werkzaamheden en situatie. Controleer bij twijfel de actuele
          btw-regels.
        </p>

        <h2>Offerte maken in Word, Excel of online</h2>
        <p>
          Je kunt een offerte maken in Word of Excel, een template gebruiken of een online offerte maker gebruiken.
        </p>
        <p>Word en Excel geven je veel vrijheid, maar je moet zelf letten op:</p>
        <ul>
          <li>berekeningen</li>
          <li>btw</li>
          <li>nummering</li>
          <li>opmaak</li>
          <li>versies</li>
          <li>het opslaan van verstuurde offertes</li>
        </ul>
        <p>
          Een online offerte maker kan dit proces eenvoudiger maken doordat je vanuit een vaste structuur werkt.
        </p>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Maak gratis een offerte met FactuurBaas →" />

        <h2>Veelgemaakte fouten bij het sturen van een offerte</h2>

        <h3>De offerte zonder begeleidende uitleg versturen</h3>
        <p>
          Stuur niet alleen een PDF zonder context. Een korte e-mail maakt duidelijk waarom je de offerte stuurt en
          wat de volgende stap is.
        </p>

        <h3>Niet duidelijk aangeven wat inbegrepen is</h3>
        <p>
          Een lage prijs kan aantrekkelijk lijken, maar als onduidelijk is wat binnen de opdracht valt, ontstaan
          later gemakkelijk discussies.
        </p>

        <h3>Geen geldigheidsduur vermelden</h3>
        <p>Zet duidelijk tot welke datum je prijsvoorstel geldig is.</p>

        <h3>Geen akkoord bewaren</h3>
        <p>
          Bewaar de offerte én het bericht waarin de klant akkoord gaat. Dat maakt je administratie overzichtelijker.
        </p>

        <h3>Offerte en factuur verwarren</h3>
        <p>
          Een offerte is een voorstel. Een factuur is bedoeld om een bedrag in rekening te brengen. Stuur dus niet
          zomaar een factuur wanneer de klant alleen om een offerte heeft gevraagd.
        </p>

        <h3>Algemene voorwaarden pas achteraf sturen</h3>
        <p>Gebruik je algemene voorwaarden, zorg dan dat de klant ze op tijd kan inzien.</p>

        <h2>Checklist voordat je een offerte verstuurt</h2>
        <p>Controleer deze punten voordat je op verzenden klikt:</p>
        <ul>
          <li>juiste klantgegevens</li>
          <li>duidelijk offertenummer</li>
          <li>datum</li>
          <li>duidelijke omschrijving van de opdracht</li>
          <li>alle belangrijke werkzaamheden opgenomen</li>
          <li>prijs en eventuele bijkomende kosten duidelijk</li>
          <li>btw correct vermeld</li>
          <li>geldigheidsduur</li>
          <li>leverings- en betalingsafspraken</li>
          <li>algemene voorwaarden, indien van toepassing</li>
          <li>offerte opgeslagen als PDF</li>
          <li>begeleidende e-mail toegevoegd</li>
        </ul>

        <h2>Voorbeeld van een zzp-offerte</h2>
        <p>Wil je eerst zien hoe een complete offerte eruitziet?</p>
        <p>
          Bekijk ons{' '}
          <Link href="/offerte-voorbeeld/zzp" className="text-warm-orange hover:underline">
            ZZP offerte voorbeeld
          </Link>{' '}
          voor een ingevuld voorbeeld.
        </p>
        <p>
          Wil je zelf een offerte maken? Bekijk dan ook het{' '}
          <Link href="/gidsen/hoe-maak-je-een-offerte" className="text-warm-orange hover:underline">
            stappenplan voor een offerte maken
          </Link>
          .
        </p>

        <h2>Offerte sturen als zzp&apos;er met FactuurBaas</h2>
        <p>
          Met FactuurBaas maak je online een professionele offerte. Vul je gegevens en de opdracht in, controleer de
          bedragen en download je offerte als PDF.
        </p>
        <p>Je kunt direct beginnen zonder account.</p>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Maak gratis je offerte →" />

        <h2>Veelgestelde vragen</h2>
        <h3>Hoe stuur ik een offerte als zzp&apos;er?</h3>
        <p>
          Maak eerst een duidelijke offerte, controleer de gegevens en prijzen en verstuur het document bijvoorbeeld
          als PDF per e-mail. Vraag de klant om akkoord en bewaar de verstuurde offerte en het akkoord in je
          administratie.
        </p>
        <h3>Moet een zzp&apos;er altijd een offerte sturen?</h3>
        <p>
          Nee. Een offerte is niet voor iedere opdracht verplicht. Bij grotere, complexere of duurdere opdrachten is
          het vaak verstandig om vooraf duidelijke afspraken over werkzaamheden en prijs vast te leggen.
        </p>
        <h3>Kan ik een offerte gewoon per e-mail sturen?</h3>
        <p>
          Ja. Een offerte kan bijvoorbeeld als PDF bij een e-mail worden meegestuurd. Zorg ervoor dat de offerte
          duidelijk is en dat je klant weet hoe hij akkoord kan gaan.
        </p>
        <h3>Moet een offerte ondertekend worden?</h3>
        <p>
          Niet iedere offerte hoeft per se met een handtekening te worden geaccepteerd. Een klant kan een aanbod ook
          op een andere manier accepteren. Bij belangrijke opdrachten kan schriftelijk akkoord wel handig zijn als
          bewijs van de gemaakte afspraken.
        </p>
        <h3>Hoe lang moet een offerte geldig zijn?</h3>
        <p>
          Dat bepaal je zelf. Een geldigheidsduur van bijvoorbeeld 14 of 30 dagen komt vaak voor, maar bij iedere
          opdracht kan een andere termijn passend zijn.
        </p>
        <h3>Wanneer stuur ik de factuur?</h3>
        <p>
          Meestal factureer je volgens de afspraken uit de offerte nadat de opdracht of een afgesproken deel daarvan
          is uitgevoerd. Bij grotere opdrachten kunnen ook aanbetalingen of termijnfacturen worden afgesproken.
        </p>
        <h3>Kan ik gratis een offerte maken als zzp&apos;er?</h3>
        <p>
          Ja. Met de gratis offerte maker van FactuurBaas kun je een offerte maken en als PDF downloaden zonder
          account.
        </p>

        <h2>Maak direct je zzp-offerte</h2>
        <p>
          Maak duidelijke afspraken voordat je aan je opdracht begint. Maak je offerte, controleer de gegevens en
          stuur hem professioneel als PDF naar je klant.
        </p>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Open gratis offerte maker →" />
      </>
    ),
  },
  {
    slug: 'geldigheid-van-een-offerte',
    cluster: 'offertes',
    seoTitle: 'Hoe lang is een offerte geldig? Geldigheid en rechtsgeldigheid',
    title: 'Hoe lang is een offerte geldig?',
    excerpt:
      'Hoe lang is een offerte geldig en wanneer is een offerte bindend? Lees alles over geldigheidsduur, akkoord, vrijblijvendheid en rechtsgeldigheid.',
    keywords:
      'hoe lang is een offerte geldig, geldigheid offerte, offerte bindend, offerte vrijblijvend, offerte rechtsgeldig, offerte geldigheidsduur, offerte verlopen',
    tool: {
      href: '/tools/offerte-maker',
      label: 'Maak gratis offerte',
      ctaLabel: 'Open gratis offerte maker',
      relatedTitle: 'Offerte maker',
      relatedExcerpt: 'Maak gratis een professionele offerte met geldigheidsduur en download direct als PDF.',
    },
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Factuurbaas/geldigheid%20van%20een%20offerte.jpg',
      alt: 'Geldigheid van een offerte: ondernemer werkt aan professionele offerte',
    },
    datePublished: '2026-07-15',
    dateModified: '2026-09-04',
    relatedSlugs: ['verschil-factuur-offerte', 'factuur-maken-zzp'],
    relatedGuideSlugs: [
      'wat-moet-er-op-een-offerte-staan',
      'offerte-omzetten-naar-factuur',
      'wanneer-is-een-offerte-bindend',
    ],
    faq: [
      {
        question: 'Hoe lang is een offerte geldig?',
        answer:
          'Dat bepaal je in principe zelf. Veel ondernemers kiezen bijvoorbeeld voor 14 of 30 dagen. Zet de termijn of einddatum duidelijk op de offerte.',
      },
      {
        question: 'Hoe lang is een offerte wettelijk geldig?',
        answer:
          'Er is geen algemene wettelijke termijn die bepaalt dat iedere offerte bijvoorbeeld 14 of 30 dagen geldig is. De inhoud van de offerte en de omstandigheden zijn belangrijk.',
      },
      {
        question: 'Is een offerte altijd vrijblijvend?',
        answer:
          'Nee. Een offerte is niet automatisch vrijblijvend. Als je een aanbod vrijblijvend wilt doen, kun je dat duidelijk in de offerte aangeven.',
      },
      {
        question: 'Is een offerte bindend?',
        answer:
          'Een offerte kan na aanvaarding leiden tot een bindende overeenkomst. Of en wanneer dat het geval is, hangt af van de inhoud van het aanbod, de acceptatie en de omstandigheden.',
      },
      {
        question: 'Is een offerte rechtsgeldig?',
        answer:
          'Een offerte kan juridische gevolgen hebben en na aanvaarding onderdeel worden van een overeenkomst. Zorg daarom dat de werkzaamheden, prijs en voorwaarden duidelijk zijn.',
      },
      {
        question: 'Wat is een goede geldigheidsduur voor een offerte?',
        answer:
          '14 of 30 dagen kan voor veel kleinere opdrachten praktisch zijn. Bij grotere projecten of sterk wisselende kosten kan een andere termijn beter passen.',
      },
      {
        question: 'Wat als een klant na de geldigheidsdatum akkoord gaat?',
        answer:
          'Je kunt een nieuwe offerte sturen, de geldigheidsduur verlengen of schriftelijk bevestigen dat je de oorspronkelijke offerte alsnog accepteert. Kijk daarbij naar de inhoud van je oorspronkelijke offerte en de omstandigheden.',
      },
      {
        question: 'Hoe lang is een getekende offerte geldig?',
        answer:
          'Na acceptatie gaat het niet alleen meer om de oorspronkelijke geldigheidsduur. De geaccepteerde afspraken kunnen onderdeel zijn van een overeenkomst. De precieze juridische gevolgen hangen af van de situatie.',
      },
    ],
    content: (
      <>
        <p>
          Hoe lang blijft een offerte geldig? In Nederland bestaat er{' '}
          <strong>geen algemene wettelijke termijn</strong> van bijvoorbeeld 14 of 30 dagen. Je kunt zelf bepalen
          hoelang je aanbod geldig is en dit duidelijk op de offerte vermelden.
        </p>
        <p>
          Een geldigheidsduur is daarnaast niet hetzelfde als de vraag of een offerte{' '}
          <strong>bindend of vrijblijvend</strong> is. Ook dat hangt af van de inhoud van de offerte, je voorwaarden en
          de omstandigheden.
        </p>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Maak gratis offerte →" />

        <h2>Hoe lang is een offerte geldig?</h2>
        <p>Je bepaalt in principe zelf de geldigheidsduur van je offerte.</p>
        <p>Veel ondernemers kiezen bijvoorbeeld voor:</p>
        <CalculationTable
          rows={[
            ['14 dagen', 'Kleine opdrachten of prijzen die snel kunnen veranderen'],
            ['30 dagen', 'Veel reguliere diensten en projecten'],
            ['60 dagen', 'Grotere of complexere opdrachten'],
            ['90 dagen', 'Langere besluitvorming of grote projecten'],
          ]}
        />
        <p>Er is dus niet één standaardtermijn die voor iedere offerte geldt.</p>
        <p>Je kunt bijvoorbeeld op je offerte zetten:</p>
        <blockquote>
          <strong>Deze offerte is geldig tot en met 18 september 2026.</strong>
        </blockquote>
        <p>Of:</p>
        <blockquote>
          <strong>Deze offerte is 30 dagen geldig vanaf de offertedatum.</strong>
        </blockquote>
        <p>Een concrete einddatum is vaak het duidelijkst.</p>

        <h2>Wat betekent de geldigheidsduur van een offerte?</h2>
        <p>
          De geldigheidsduur geeft aan <strong>tot wanneer je aanbod volgens de voorwaarden van de offerte geldt</strong>
          .
        </p>
        <p>
          Binnen die periode kan je klant de offerte accepteren. Wat er precies gebeurt na afloop van de termijn hangt
          onder andere af van de inhoud van de offerte en het moment waarop de klant reageert.
        </p>
        <p>
          Een geldigheidsduur is vooral praktisch belangrijk omdat prijzen, beschikbaarheid en omstandigheden kunnen
          veranderen.
        </p>
        <p>Bijvoorbeeld:</p>
        <ul>
          <li>je uurtarief kan veranderen;</li>
          <li>materiaalkosten kunnen stijgen;</li>
          <li>je planning kan vol raken;</li>
          <li>een tijdelijke prijsafspraak kan verlopen.</li>
        </ul>

        <h2>Is een offerte altijd vrijblijvend?</h2>
        <p>
          <strong>Nee. Een offerte is niet automatisch altijd vrijblijvend.</strong>
        </p>
        <p>
          Of een offerte vrijblijvend of bindend is, hangt af van de inhoud van het aanbod, eventuele voorwaarden en de
          omstandigheden.
        </p>
        <p>Wil je dat een aanbod vrijblijvend is, dan kun je dit duidelijk in je offerte opnemen.</p>
        <p>Bijvoorbeeld:</p>
        <blockquote>
          <strong>
            Deze offerte is vrijblijvend en kan worden ingetrokken zolang deze niet is aanvaard.
          </strong>
        </blockquote>
        <p>
          Gebruik zo&apos;n formulering alleen wanneer dit ook daadwerkelijk je bedoeling is en aansluit bij je
          voorwaarden.
        </p>
        <p>
          Een offerte met een geldigheidsdatum is bovendien niet automatisch een vrijblijvende offerte.{' '}
          <strong>Geldigheid en vrijblijvendheid zijn twee verschillende onderwerpen.</strong>
        </p>

        <h2>Is een offerte bindend?</h2>
        <p>
          Een offerte kan onder omstandigheden leiden tot een <strong>bindende overeenkomst</strong> wanneer de klant
          het aanbod aanvaardt.
        </p>
        <p>Daarom is het belangrijk dat je offerte duidelijk beschrijft:</p>
        <ul>
          <li>wat je levert;</li>
          <li>tegen welke prijs;</li>
          <li>wanneer je levert;</li>
          <li>welke voorwaarden gelden;</li>
          <li>hoe lang het aanbod geldt;</li>
          <li>hoe de klant akkoord kan geven.</li>
        </ul>
        <p>
          De precieze juridische gevolgen hangen af van de inhoud van de offerte en de omstandigheden.
        </p>
        <p>
          Wil je voorkomen dat je klant denkt dat bepaalde werkzaamheden onderdeel van de opdracht zijn? Omschrijf dan
          duidelijk wat <strong>wel en niet inbegrepen</strong> is.
        </p>

        <h2>Wanneer ontstaat er een overeenkomst?</h2>
        <p>
          Een offerte is een aanbod voor een opdracht. Wanneer een klant het aanbod aanvaardt, kan daarmee een
          overeenkomst tot stand komen.
        </p>
        <p>
          Een fysieke handtekening is niet in alle situaties de enige manier waarop een klant akkoord kan geven. Ook
          een duidelijke schriftelijke acceptatie, bijvoorbeeld per e-mail, kan relevant zijn.
        </p>
        <p>Daarom is het verstandig om het akkoord goed te bewaren.</p>
        <p>Bijvoorbeeld:</p>
        <blockquote>
          “Akkoord met offerte OFF-2026-014. We gaan akkoord met de werkzaamheden en prijs zoals beschreven.”
        </blockquote>
        <p>
          Na akkoord kun je de opdracht uitvoeren volgens de gemaakte afspraken en vervolgens factureren volgens de
          afgesproken voorwaarden.
        </p>
        <p>
          Lees ook{' '}
          <Link href="/gidsen/offerte-omzetten-naar-factuur" className="text-warm-orange hover:underline">
            offerte omzetten naar factuur
          </Link>
          .
        </p>

        <h2>Wat gebeurt er als de geldigheidsduur is verstreken?</h2>
        <p>
          Heeft je offerte een einddatum en reageert de klant pas daarna? Dan moet je niet automatisch aannemen dat je
          nog precies dezelfde prijs en voorwaarden moet aanbieden.
        </p>
        <p>Je kunt bijvoorbeeld:</p>
        <ol>
          <li>
            een <strong>nieuwe offerte</strong> sturen;
          </li>
          <li>
            de bestaande offerte <strong>verlengen</strong>;
          </li>
          <li>schriftelijk bevestigen dat je de oorspronkelijke voorwaarden alsnog accepteert.</li>
        </ol>
        <p>Voorbeeld:</p>
        <blockquote>
          De offerte was geldig tot 18 september. De klant reageert op 25 september. Je kunt dan aangeven dat de
          oorspronkelijke offerte is verlopen en een nieuwe offerte sturen met een actuele prijs en geldigheidsdatum.
        </blockquote>
        <p>
          Wat juridisch precies geldt, kan afhangen van de formulering van de offerte en de omstandigheden.
        </p>

        <h2>Kan een klant na de geldigheidsdatum nog akkoord gaan?</h2>
        <p>Een klant kan na de genoemde einddatum natuurlijk nog steeds aangeven dat hij de opdracht wil.</p>
        <p>
          Maar dat betekent niet automatisch dat je zonder meer dezelfde prijs en voorwaarden moet hanteren.
        </p>
        <p>Je kunt bijvoorbeeld antwoorden:</p>
        <blockquote>
          “Bedankt voor je akkoord. De geldigheidsduur van de offerte is inmiddels verstreken. Ik stuur je graag een
          nieuwe offerte met de actuele prijs en planning.”
        </blockquote>
        <p>Wil je de oude offerte toch honoreren? Leg dan duidelijk vast dat je dat doet.</p>

        <h2>Kan een offerte onbeperkt geldig zijn?</h2>
        <p>
          Je kunt ervoor kiezen geen einddatum te vermelden, maar voor veel ondernemers is een duidelijke
          geldigheidsduur praktischer.
        </p>
        <p>
          Zonder duidelijke termijn kan later discussie ontstaan over de vraag of je oorspronkelijke aanbod nog geldt.
        </p>
        <p>Vooral bij:</p>
        <ul>
          <li>materiaalprijzen;</li>
          <li>reis- en transportkosten;</li>
          <li>tijdelijke kortingen;</li>
          <li>drukke planning;</li>
          <li>uurtarieven</li>
        </ul>
        <p>kan een beperkte geldigheidsduur verstandig zijn.</p>

        <h2>Welke geldigheidsduur kies je?</h2>
        <p>Er is geen universeel beste termijn.</p>

        <h3>Kleine zzp-opdracht</h3>
        <p>
          Bij een eenvoudige opdracht kan <strong>14 dagen</strong> voldoende zijn.
        </p>

        <h3>Consultancy en dienstverlening</h3>
        <p>
          Bij advies- of consultancywerk kan <strong>30 dagen</strong> een praktische termijn zijn.
        </p>

        <h3>Bouw en projecten</h3>
        <p>
          Bij grotere projecten kan een langere termijn nodig zijn, maar als prijzen van materiaal of onderaannemers
          sterk kunnen veranderen kan een kortere termijn juist verstandig zijn.
        </p>

        <h3>Offerte met vaste materiaalkosten</h3>
        <p>
          Wanneer je prijs sterk afhankelijk is van actuele inkoopprijzen, kan een beperkte geldigheidsduur nuttig zijn.
        </p>
        <p>
          Kies dus vooral een termijn die past bij <strong>je prijs, planning en risico</strong>.
        </p>

        <h2>Hoe vermeld je de geldigheid op een offerte?</h2>
        <p>Gebruik een duidelijke formulering.</p>

        <h3>Voorbeeld 1: einddatum</h3>
        <blockquote>
          <strong>Deze offerte is geldig tot en met 18 september 2026.</strong>
        </blockquote>

        <h3>Voorbeeld 2: aantal dagen</h3>
        <blockquote>
          <strong>Deze offerte is 30 dagen geldig vanaf de offertedatum.</strong>
        </blockquote>

        <h3>Voorbeeld 3: geldigheid en vrijblijvendheid</h3>
        <blockquote>
          <strong>Deze vrijblijvende offerte is geldig tot en met 18 september 2026.</strong>
        </blockquote>
        <p>
          De derde formulering combineert twee verschillende dingen: de geldigheidsduur en het vrijblijvende karakter.
        </p>
        <p>
          Gebruik &quot;vrijblijvend&quot; alleen wanneer je daadwerkelijk wilt dat het aanbod die betekenis heeft.
        </p>

        <h2>Wat is de offertedatum?</h2>
        <p>
          De <strong>offertedatum</strong> is de datum waarop je de offerte uitbrengt.
        </p>
        <p>Bijvoorbeeld:</p>
        <p>
          <strong>Offertedatum: 4 september 2026</strong>
        </p>
        <p>
          Als je met een termijn van 30 dagen werkt, kun je daarnaast een concrete einddatum opnemen. Dat maakt voor jou
          en je klant direct duidelijk wanneer de termijn afloopt.
        </p>
        <p>
          Bekijk ook{' '}
          <Link href="/gidsen/wat-moet-er-op-een-offerte-staan" className="text-warm-orange hover:underline">
            wat moet er op een offerte staan?
          </Link>{' '}
          voor de overige onderdelen van een professionele offerte.
        </p>

        <h2>Geldigheid van een getekende offerte</h2>
        <p>
          Heeft een klant een offerte ondertekend? Dan is het belangrijk om onderscheid te maken tussen de{' '}
          <strong>geldigheidsduur van het oorspronkelijke aanbod</strong> en de afspraken die na acceptatie zijn
          ontstaan.
        </p>
        <p>
          Een getekende of op andere wijze geaccepteerde offerte kan onderdeel zijn van de overeenkomst tussen jou en
          je klant.
        </p>
        <p>
          De oorspronkelijke geldigheidsdatum betekent dan niet simpelweg dat alle afspraken na die datum automatisch
          vervallen.
        </p>
        <p>Bijvoorbeeld:</p>
        <ul>
          <li>offerte uitgebracht op 4 september;</li>
          <li>geldig tot 18 september;</li>
          <li>klant accepteert op 12 september;</li>
          <li>werkzaamheden starten op 25 september.</li>
        </ul>
        <p>
          Het feit dat de werkzaamheden na 18 september plaatsvinden, betekent niet automatisch dat de eerder gemaakte
          afspraken daardoor vervallen.
        </p>

        <h2>Wat als je een offerte wilt verlengen?</h2>
        <p>Je kunt een klant laten weten dat je de offerte langer wilt laten gelden.</p>
        <p>Bijvoorbeeld:</p>
        <blockquote>
          “De geldigheidsduur van offerte OFF-2026-014 wordt verlengd tot en met 30 september 2026. De overige
          voorwaarden blijven ongewijzigd.”
        </blockquote>
        <p>Bewaar deze bevestiging bij de offerte.</p>
        <p>Bij grotere opdrachten kan het praktischer zijn om een nieuwe offerte uit te brengen.</p>

        <h2>Veelgemaakte fouten</h2>

        <h3>1. Geen geldigheidsduur vermelden</h3>
        <p>Een duidelijke termijn voorkomt onzekerheid over hoe lang je aanbod geldt.</p>

        <h3>2. Een te lange termijn kiezen</h3>
        <p>Bij sterk wisselende kosten kan een offerte van 90 dagen onhandig zijn.</p>

        <h3>3. Geldigheid en vrijblijvendheid door elkaar halen</h3>
        <p>
          Een offerte kan een geldigheidsduur hebben en toch niet automatisch &quot;vrijblijvend&quot; zijn.
        </p>

        <h3>4. Niet duidelijk zijn over prijswijzigingen</h3>
        <p>
          Als prijzen afhankelijk zijn van actuele kosten, leg dan duidelijk vast hoe daarmee wordt omgegaan.
        </p>

        <h3>5. Akkoord niet bewaren</h3>
        <p>
          Bewaar de offerte en de bevestiging van de klant. Zo kun je later terugzien welke afspraken zijn gemaakt.
        </p>

        <h3>6. Beginnen zonder duidelijke opdrachtbevestiging</h3>
        <p>
          Zorg bij grotere opdrachten dat duidelijk is dat de klant akkoord is en welke werkzaamheden precies zijn
          afgesproken.
        </p>

        <h2>Geldigheid van een offerte: kort samengevat</h2>
        <ul>
          <li>Er is geen algemene wettelijke geldigheidsduur van 14, 30 of 60 dagen.</li>
          <li>Je kunt zelf een passende termijn bepalen.</li>
          <li>Een concrete einddatum maakt de offerte duidelijk.</li>
          <li>
            <strong>Geldigheid is niet hetzelfde als vrijblijvendheid.</strong>
          </li>
          <li>Een offerte kan na acceptatie onderdeel worden van een overeenkomst.</li>
          <li>
            Na het verstrijken van de termijn kun je vaak een nieuwe offerte of verlenging gebruiken, maar de
            juridische situatie hangt af van de omstandigheden.
          </li>
          <li>Bewaar het akkoord van je klant.</li>
        </ul>

        <h2>Offerte maken met een geldigheidsdatum</h2>
        <p>
          Met de gratis offerte maker van FactuurBaas kun je een professionele offerte maken en een geldigheidsdatum
          toevoegen.
        </p>
        <ol>
          <li>Vul je bedrijfsgegevens in.</li>
          <li>Voeg de gegevens van je klant toe.</li>
          <li>Voeg je werkzaamheden en prijzen toe.</li>
          <li>Stel de geldigheidsdatum in.</li>
          <li>Download de offerte als PDF.</li>
        </ol>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Maak gratis offerte →" />

        <h2>Veelgestelde vragen</h2>
        <h3>Hoe lang is een offerte geldig?</h3>
        <p>
          Dat bepaal je in principe zelf. Veel ondernemers kiezen bijvoorbeeld voor 14 of 30 dagen. Zet de termijn of
          einddatum duidelijk op de offerte.
        </p>
        <h3>Hoe lang is een offerte wettelijk geldig?</h3>
        <p>
          Er is geen algemene wettelijke termijn die bepaalt dat iedere offerte bijvoorbeeld 14 of 30 dagen geldig is.
          De inhoud van de offerte en de omstandigheden zijn belangrijk.
        </p>
        <h3>Is een offerte altijd vrijblijvend?</h3>
        <p>
          Nee. Een offerte is niet automatisch vrijblijvend. Als je een aanbod vrijblijvend wilt doen, kun je dat
          duidelijk in de offerte aangeven.
        </p>
        <h3>Is een offerte bindend?</h3>
        <p>
          Een offerte kan na aanvaarding leiden tot een bindende overeenkomst. Of en wanneer dat het geval is, hangt af
          van de inhoud van het aanbod, de acceptatie en de omstandigheden.
        </p>
        <h3>Is een offerte rechtsgeldig?</h3>
        <p>
          Een offerte kan juridische gevolgen hebben en na aanvaarding onderdeel worden van een overeenkomst. Zorg
          daarom dat de werkzaamheden, prijs en voorwaarden duidelijk zijn.
        </p>
        <h3>Wat is een goede geldigheidsduur voor een offerte?</h3>
        <p>
          14 of 30 dagen kan voor veel kleinere opdrachten praktisch zijn. Bij grotere projecten of sterk wisselende
          kosten kan een andere termijn beter passen.
        </p>
        <h3>Wat als een klant na de geldigheidsdatum akkoord gaat?</h3>
        <p>
          Je kunt een nieuwe offerte sturen, de geldigheidsduur verlengen of schriftelijk bevestigen dat je de
          oorspronkelijke offerte alsnog accepteert. Kijk daarbij naar de inhoud van je oorspronkelijke offerte en de
          omstandigheden.
        </p>
        <h3>Hoe lang is een getekende offerte geldig?</h3>
        <p>
          Na acceptatie gaat het niet alleen meer om de oorspronkelijke geldigheidsduur. De geaccepteerde afspraken
          kunnen onderdeel zijn van een overeenkomst. De precieze juridische gevolgen hangen af van de situatie.
        </p>

        <h2>Maak een offerte met duidelijke geldigheid</h2>
        <p>
          Bepaal een passende geldigheidsduur, leg je afspraken duidelijk vast en geef je klant een eenvoudige manier
          om akkoord te gaan.
        </p>
        <p>Met FactuurBaas maak je gratis een offerte en download je deze direct als PDF.</p>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Open gratis offerte maker →" />
      </>
    ),
  },
  {
    slug: 'wanneer-is-een-offerte-bindend',
    cluster: 'offertes',
    seoTitle: 'Wanneer is een offerte bindend? | Uitleg voor ondernemers',
    title: 'Wanneer is een offerte bindend?',
    excerpt:
      'Wanneer is een offerte bindend? Lees wanneer een offerte een overeenkomst wordt, wat acceptatie betekent en welke afspraken je als ondernemer het beste vastlegt.',
    keywords:
      'offerte bindend, wanneer is een offerte bindend, offerte acceptatie, offerte akkoord, bindende offerte, offerte overeenkomst',
    tool: {
      href: '/tools/offerte-maker',
      label: 'Maak gratis offerte',
      ctaLabel: 'Open gratis offerte maker',
      relatedTitle: 'Offerte maker',
      relatedExcerpt: 'Maak gratis een professionele offerte en download direct als PDF. Geen account nodig.',
    },
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Factuurbaas/Wanneer%20is%20een%20offerte%20bindend.jpg',
      alt: 'Wanneer is een offerte bindend: ondernemer werkt aan offerte thuis',
    },
    datePublished: '2026-07-15',
    dateModified: '2026-07-15',
    relatedSlugs: ['verschil-factuur-offerte', 'factuur-maken-zzp'],
    relatedGuideSlugs: ['geldigheid-van-een-offerte', 'offerte-accepteren-wat-gebeurt-er-na', 'offerte-maken-voor-zzper'],
    faq: [
      {
        question: 'Is een offerte automatisch bindend?',
        answer:
          'Nee. Een offerte is in principe een voorstel. Pas wanneer de klant akkoord gaat, kan er een bindende overeenkomst ontstaan.',
      },
      {
        question: 'Hoe accepteert een klant een offerte?',
        answer:
          'Dat kan bijvoorbeeld via e-mail, een ondertekende offerte, een akkoordknop of een opdrachtbevestiging.',
      },
      {
        question: 'Is een offerte bindend na de geldigheidsdatum?',
        answer:
          'Meestal niet automatisch. Na de geldigheidsdatum ben je doorgaans niet meer gebonden aan de genoemde prijs en voorwaarden.',
      },
      {
        question: 'Wat als een klant alleen mondeling akkoord geeft?',
        answer:
          'Mondelinge acceptatie kan in sommige situaties meetellen, maar schriftelijke bevestiging is verstandiger om discussies te voorkomen.',
      },
    ],
    content: (
      <>
        <div className="my-6 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900 not-prose">
          <p className="font-medium">Let op: geen juridisch advies</p>
          <p className="mt-1 text-amber-800">
            Deze pagina is uitsluitend bedoeld ter informatie. FactuurBaas is geen advocaat of juridisch adviseur. Bij
            twijfel over een specifieke situatie raden we aan om een juridisch adviseur te raadplegen.
          </p>
        </div>

        <p>
          Stuur je een offerte naar een klant, dan wil je weten: <strong>wanneer is een offerte bindend?</strong> Een
          offerte is meestal een <strong>voorstel</strong> — pas wanneer de klant akkoord gaat, ontstaat er vaak een
          overeenkomst met afspraken over prijs, werkzaamheden en voorwaarden.
        </p>
        <p>
          In deze gids leggen we in begrijpelijke taal uit wanneer een offerte bindend kan worden, wat acceptatie
          betekent en hoe je als ondernemer of zzp&apos;er misverstanden voorkomt. Met de gratis{' '}
          <Link href="/tools/offerte-maker" className="text-warm-orange hover:underline">
            offerte maker
          </Link>{' '}
          van FactuurBaas maak je een duidelijke, professionele offerte als PDF.
        </p>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Maak gratis offerte →" />

        <h2>Wat betekent bindend?</h2>
        <p>
          Een offerte is <strong>bindend</strong> wanneer beide partijen een overeenkomst zijn aangegaan over de
          aangeboden werkzaamheden, prijs en voorwaarden. In de praktijk betekent dit: de klant heeft akkoord gegeven
          en jij gaat (of bent bereid te gaan) aan de slag onder die afspraken.
        </p>
        <p>
          Zolang de klant nog niet heeft geaccepteerd, is een offerte in principe <strong>geen bindend
          betalingsverzoek</strong>, maar een uitnodiging om akkoord te gaan.
        </p>

        <h2>Is een offerte automatisch bindend?</h2>
        <p>
          <strong>Nee.</strong> Een offerte die je verstuurt is doorgaans een voorstel. De klant mag het weigeren,
          onderhandelen of pas later reageren — zolang de offerte nog binnen de geldigheidsduur valt.
        </p>
        <p>Een offerte wordt meestal pas bindend wanneer:</p>
        <ul>
          <li>de klant expliciet akkoord geeft</li>
          <li>beide partijen de afspraken bevestigen</li>
          <li>er een opdrachtbevestiging of overeenkomst ontstaat</li>
        </ul>

        <h2>Wanneer wordt een offerte bindend?</h2>
        <p>Een offerte kan bindend worden zodra er sprake is van <strong>acceptatie</strong> door de klant. Dat kan op verschillende manieren:</p>

        <h3>1. Schriftelijk akkoord per e-mail</h3>
        <p>
          De klant antwoordt bijvoorbeeld: &quot;Ik ga akkoord met offerte OFF-2026-014.&quot; Dit is in de praktijk de
          meest gebruikte manier bij zzp&apos;ers en mkb-bedrijven.
        </p>

        <h3>2. Ondertekende offerte</h3>
        <p>
          De klant tekent de offerte (op papier of digitaal). Dit maakt duidelijk dat beide partijen dezelfde afspraken
          delen.
        </p>

        <h3>3. Opdrachtbevestiging</h3>
        <p>
          Na akkoord stuurt een van beide partijen een bevestiging met de belangrijkste afspraken: prijs, planning en
          scope.
        </p>

        <h3>4. Akkoord via een online systeem</h3>
        <p>
          Sommige tools hebben een akkoordknop of digitale acceptatie. Ook dat kan als bevestiging gelden.
        </p>

        <h3>5. Starten met de opdracht na akkoord</h3>
        <p>
          Als je na een duidelijke acceptatie begint met werkzaamheden en de klant dit niet betwist, kan dat in de
          praktijk wijzen op een overeenkomst — maar schriftelijke bevestiging blijft verstandiger.
        </p>

        <h2>Wat is de rol van de geldigheidsduur?</h2>
        <p>
          De geldigheidsduur bepaalt hoelang je voorstel geldt. Gaat een klant akkoord <em>binnen</em> de termijn, dan
          gelden de genoemde prijs en voorwaarden. Is de offerte verlopen, dan ben je meestal niet meer gebonden aan
          diezelfde aanbieding.
        </p>
        <p>
          Lees meer in{' '}
          <Link href="/gidsen/geldigheid-van-een-offerte" className="text-warm-orange hover:underline">
            geldigheid van een offerte
          </Link>
          .
        </p>

        <h2>Wanneer is een offerte niet bindend?</h2>
        <ul>
          <li>de klant heeft nog niet geaccepteerd</li>
          <li>de offerte is verlopen (na de geldigheidsdatum)</li>
          <li>de klant heeft de offerte afgewezen</li>
          <li>er is onderhandeld over nieuwe voorwaarden zonder definitief akkoord</li>
          <li>de offerte was duidelijk bedoeld als indicatie of richtprijs</li>
        </ul>
        <p>
          Vermeld op je offerte altijd dat het een voorstel is totdat de klant akkoord geeft. Zo voorkom je
          misverstanden.
        </p>

        <h2>Offerte, overeenkomst en factuur: wat is het verschil?</h2>
        <CalculationTable
          rows={[
            ['Offerte', 'Voorstel vóór de opdracht — meestal niet bindend tot acceptatie'],
            ['Overeenkomst', 'Bindende afspraak na akkoord op de offerte'],
            ['Factuur', 'Betalingsverzoek na (deel van) levering'],
          ]}
        />
        <p>
          Meer uitleg vind je in{' '}
          <Link href="/blogs/verschil-factuur-offerte" className="text-warm-orange hover:underline">
            verschil tussen offerte en factuur
          </Link>
          .
        </p>

        <h2>Praktische tips om discussies te voorkomen</h2>
        <ul>
          <li>
            <strong>Maak je offerte zo concreet mogelijk</strong> — beschrijf wat wel en niet is inbegrepen.
          </li>
          <li>
            <strong>Vermeld een geldigheidsduur</strong> — bijvoorbeeld 14 of 30 dagen.
          </li>
          <li>
            <strong>Vraag om schriftelijk akkoord</strong> — e-mail of ondertekening.
          </li>
          <li>
            <strong>Start niet met grote werkzaamheden zonder bevestiging</strong>.
          </li>
          <li>
            <strong>Bewaar alle communicatie</strong> — offerte, akkoord en eventuele wijzigingen.
          </li>
          <li>
            <strong>Gebruik algemene voorwaarden bij grotere opdrachten</strong> — indien van toepassing.
          </li>
        </ul>
        <p>
          Welke gegevens op je offerte horen, lees je in{' '}
          <Link href="/gidsen/wat-moet-er-op-een-offerte-staan" className="text-warm-orange hover:underline">
            wat moet er op een offerte staan
          </Link>
          . Meer over professioneel versturen vind je in{' '}
          <Link href="/gidsen/offerte-maken-voor-zzper" className="text-warm-orange hover:underline">
            offerte sturen als zzp&apos;er
          </Link>
          .
        </p>

        <h2>Wat als een klant de offerte gedeeltelijk accepteert?</h2>
        <p>
          Soms wil een klant alleen een deel van je offerte afnemen of vraagt om aanpassingen. In dat geval is er nog
          geen volledige acceptatie. Stuur dan een <strong>aangepaste offerte</strong> of bevestig schriftelijk welke
          onderdelen zijn overeengekomen en tegen welke prijs.
        </p>

        <h2>Wat als er discussie ontstaat?</h2>
        <p>
          Bij twijfel over of een offerte bindend is, helpt het om terug te gaan naar de communicatie: wat is er
          aangeboden, wat is geaccepteerd en welke voorwaarden golden? Bewaar offertes, e-mails en bevestigingen
          overzichtelijk in je administratie.
        </p>
        <p>
          Bij complexe of grote opdrachten kan het verstandig zijn om juridisch advies in te winnen. Deze gids vervangt
          geen professioneel juridisch advies.
        </p>

        <h2>Offerte opstellen met duidelijke afspraken</h2>
        <p>Met FactuurBaas maak je een professionele offerte met:</p>
        <ul>
          <li>duidelijke omschrijving van werkzaamheden</li>
          <li>prijzen en btw-berekening</li>
          <li>geldigheidsduur</li>
          <li>directe PDF-download</li>
        </ul>
        <p>Gratis, zonder account — ideaal voor zzp&apos;ers en kleine ondernemers.</p>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Maak gratis offerte →" />

        <h2>Veelgestelde vragen</h2>
        <h3>Is een offerte automatisch bindend?</h3>
        <p>
          Nee. Een offerte is in principe een voorstel. Pas bij acceptatie door de klant kan er een bindende overeenkomst
          ontstaan.
        </p>
        <h3>Hoe weet ik of een klant akkoord is?</h3>
        <p>
          Dat blijkt uit schriftelijke bevestiging, een ondertekende offerte, een opdrachtbevestiging of een duidelijke
          e-mail met akkoord.
        </p>
        <h3>Is een mondeling akkoord voldoende?</h3>
        <p>
          Mondelinge acceptatie kan in sommige situaties meetellen, maar schriftelijke bevestiging is veiliger en
          overzichtelijker.
        </p>
        <h3>Is een offerte bindend na de geldigheidsdatum?</h3>
        <p>
          Meestal niet automatisch. Na de geldigheidsdatum ben je doorgaans niet meer gebonden aan de oorspronkelijke
          prijs en voorwaarden.
        </p>
        <h3>Moet ik algemene voorwaarden toevoegen?</h3>
        <p>
          Bij grotere of complexere opdrachten is dat verstandig. Vermeld in ieder geval de belangrijkste afspraken op
          of bij de offerte.
        </p>

        <div className="my-6 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 not-prose">
          <p>
            <strong>Disclaimer:</strong> deze pagina is uitsluitend bedoeld ter informatie en vormt geen juridisch
            advies. Raadpleeg bij twijfel een juridisch adviseur voor jouw specifieke situatie.
          </p>
        </div>

        <h2>Maak een duidelijke offerte</h2>
        <p>
          Een heldere offerte is de basis voor goede afspraken. Maak gratis je offerte, voeg een geldigheidsduur toe en
          download direct als PDF.
        </p>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Open gratis offerte maker →" />
      </>
    ),
  },
  {
    slug: 'offerte-accepteren-wat-gebeurt-er-na',
    cluster: 'offertes',
    seoTitle: 'Offerte accepteren: wat gebeurt er daarna? | Stappenplan',
    title: 'Offerte accepteren: wat gebeurt er daarna?',
    excerpt:
      'Je klant gaat akkoord met je offerte — en nu? Lees wat je doet na acceptatie: bevestigen, starten, plannen en omzetten naar een factuur.',
    keywords:
      'offerte accepteren, offerte akkoord, wat gebeurt na offerte, offerte omzetten factuur, offerte geaccepteerd, na akkoord offerte',
    tool: {
      href: '/tools/offerte-maker',
      label: 'Maak gratis offerte',
      ctaLabel: 'Open gratis offerte maker',
      relatedTitle: 'Offerte maker',
      relatedExcerpt: 'Maak een offerte, ontvang akkoord en zet deze later om naar een factuur. Gratis en zonder account.',
    },
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Factuurbaas/offerte%20accepteren%20wat%20gebeurd%20er%20na.jpg',
      alt: 'Offerte accepteren: ondernemers gaan akkoord na offerte',
    },
    datePublished: '2026-07-15',
    dateModified: '2026-07-15',
    relatedSlugs: ['verschil-factuur-offerte', 'factuur-maken-zzp', 'sneller-betalen-factuur'],
    relatedGuideSlugs: ['wanneer-is-een-offerte-bindend', 'geldigheid-van-een-offerte', 'offerte-aanpassen'],
    faq: [
      {
        question: 'Wat moet ik doen als een klant akkoord gaat met mijn offerte?',
        answer:
          'Bevestig het akkoord schriftelijk, plan de opdracht in, start met de afgesproken werkzaamheden en bewaar de offerte en communicatie in je administratie.',
      },
      {
        question: 'Moet ik een opdrachtbevestiging sturen?',
        answer:
          'Dat is niet altijd verplicht, maar wel verstandig. Een korte bevestiging per e-mail maakt duidelijk dat beide partijen dezelfde afspraken hanteren.',
      },
      {
        question: 'Wanneer stuur ik een factuur na een geaccepteerde offerte?',
        answer:
          'Meestal na oplevering van (een deel van) het werk, volgens de betalingsafspraken op je offerte — bijvoorbeeld achteraf of in termijnen.',
      },
      {
        question: 'Kan ik een geaccepteerde offerte omzetten naar een factuur?',
        answer:
          'Ja. Met FactuurBaas kun je de gegevens van je offerte gebruiken om sneller een factuur te maken.',
      },
    ],
    content: (
      <>
        <p>
          Je klant gaat akkoord met je offerte — en nu? <strong>Offerte accepteren</strong> is een belangrijk moment: de
          afspraken over prijs, werkzaamheden en voorwaarden zijn helder. In deze gids lees je stap voor stap{' '}
          <strong>wat er daarna gebeurt</strong> en hoe je professioneel verder werkt.
        </p>
        <p>
          Met{' '}
          <Link href="/tools/offerte-maker" className="text-warm-orange hover:underline">
            FactuurBaas
          </Link>{' '}
          maak je je offerte, ontvang je akkoord en zet je de gegevens later eenvoudig om naar een factuur.
        </p>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Maak gratis offerte →" />

        <h2>Wat betekent het als een klant akkoord gaat?</h2>
        <p>
          Wanneer een klant je offerte accepteert, gaat hij of zij akkoord met het voorstel: de beschreven
          werkzaamheden, de prijs en de voorwaarden. In de praktijk ontstaat er dan vaak een{' '}
          <strong>overeenkomst</strong> en kun je starten met de opdracht.
        </p>
        <p>
          Lees ook{' '}
          <Link href="/gidsen/wanneer-is-een-offerte-bindend" className="text-warm-orange hover:underline">
            wanneer is een offerte bindend
          </Link>{' '}
          voor uitleg over acceptatie en afspraken.
        </p>

        <h2>Wat gebeurt er na acceptatie? Stap voor stap</h2>

        <h3>Stap 1: Bevestig het akkoord schriftelijk</h3>
        <p>
          Laat de klant akkoord geven per e-mail, ondertekening of opdrachtbevestiging. Jij kunt ook zelf een korte
          bevestiging sturen, bijvoorbeeld:
        </p>
        <p>
          <em>
            &quot;Bedankt voor je akkoord op offerte OFF-2026-014. We starten op [datum] met de afgesproken
            werkzaamheden.&quot;
          </em>
        </p>
        <p>Schriftelijke bevestiging voorkomt misverstanden over wat is afgesproken.</p>

        <h3>Stap 2: Plan de opdracht in</h3>
        <p>
          Zet de opdracht in je agenda of planningssysteem. Noteer startdatum, oplevermoment en eventuele milestones.
          Zo weet jij én je klant wanneer welk deel van het werk plaatsvindt.
        </p>

        <h3>Stap 3: Start met de afgesproken werkzaamheden</h3>
        <p>
          Begin pas met uitvoering als het akkoord duidelijk is. Werk volgens de omschrijving op je offerte en houd
          wijzigingen bij als de klant extra werk vraagt buiten de offerte.
        </p>

        <h3>Stap 4: Houd communicatie en voortgang bij</h3>
        <p>
          Update de klant bij grotere opdrachten over de voortgang. Bij langere projecten helpt een korte tussentijdse
          update om vertrouwen te houden en vragen vroegtijdig op te lossen.
        </p>

        <h3>Stap 5: Lever op volgens de offerte</h3>
        <p>
          Lever wat je hebt beloofd: de afgesproken diensten, producten of resultaten. Zijn er extra wensen? Leg dan
          vast of dat binnen de offerte valt of dat je een aanvullende offerte stuurt.
        </p>

        <h3>Stap 6: Stuur een factuur</h3>
        <p>
          Na (deel van) de levering stuur je meestal een <strong>factuur</strong>. Een offerte is geen
          betalingsverzoek — de factuur wel. Lees het{' '}
          <Link href="/blogs/verschil-factuur-offerte" className="text-warm-orange hover:underline">
            verschil tussen offerte en factuur
          </Link>
          .
        </p>

        <h3>Stap 7: Bewaar alles in je administratie</h3>
        <p>Sla op:</p>
        <ul>
          <li>de originele offerte</li>
          <li>het akkoord van de klant</li>
          <li>eventuele wijzigingen of extra afspraken</li>
          <li>de uiteindelijke factuur</li>
        </ul>
        <p>Dit helpt bij je boekhouding en bij eventuele vragen achteraf.</p>

        <h2>Moet je een opdrachtbevestiging sturen?</h2>
        <p>
          Een opdrachtbevestiging is niet altijd verplicht, maar wel handig. Het is een korte samenvatting van de
          belangrijkste afspraken na akkoord:
        </p>
        <ul>
          <li>offertenummer</li>
          <li>omschrijving van het werk</li>
          <li>totaalbedrag</li>
          <li>planning en startdatum</li>
          <li>betalingsafspraken</li>
        </ul>
        <p>
          Zo hebben beide partijen dezelfde versie van de afspraken, zonder opnieuw alles te moeten uitzoeken in
          e-mails.
        </p>

        <h2>Wanneer stuur je een factuur?</h2>
        <p>Dat hangt af van wat je op je offerte hebt afgesproken. Veelgebruikte modellen:</p>
        <CalculationTable
          rows={[
            ['Betaling na oplevering', 'Factuur sturen zodra het werk is afgerond'],
            ['50% vooraf, 50% na oplevering', 'Eerste factuur bij start, tweede na levering'],
            ['Betaling in termijnen', 'Factuur per milestone of per maand'],
            ['Kleine opdracht', 'Eén factuur na voltooiing'],
          ]}
        />
        <p>
          Meer over facturen maken lees je in{' '}
          <Link href="/blogs/factuur-maken-zzp" className="text-warm-orange hover:underline">
            factuur maken als zzp&apos;er
          </Link>
          .
        </p>

        <h2>Offerte omzetten naar factuur</h2>
        <p>
          Na akkoord hoef je je gegevens niet opnieuw in te voeren. Met FactuurBaas kun je de offerte als basis gebruiken
          voor je factuur:
        </p>
        <ol>
          <li>Open je offerte in FactuurBaas.</li>
          <li>Controleer of bedragen en klantgegevens nog kloppen.</li>
          <li>Zet de offerte om naar een factuur.</li>
          <li>Download de factuur als PDF en verstuur naar je klant.</li>
        </ol>
        <p>
          Zo bespaar je tijd en voorkom je fouten tussen offerte en factuur. Bekijk ook{' '}
          <Link href="/gidsen/offerte-maken-in-pdf" className="text-warm-orange hover:underline">
            offerte maken in PDF
          </Link>{' '}
          als je je offerte nog als PDF wilt versturen.
        </p>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Maak offerte en factuur →" />

        <h2>Wat als de klant extra werk vraagt?</h2>
        <p>
          Vraagt de klant werk dat <strong>niet</strong> in de offerte staat? Stuur dan geen stilzwijgende factuur voor
          extra uren, maar:
        </p>
        <ul>
          <li>leg mondeling uit dat het buiten de offerte valt</li>
          <li>stuur een aanvullende offerte of schriftelijke prijsafspraak</li>
          <li>wacht op akkoord voordat je verder werkt</li>
        </ul>
        <p>
          Zo voorkom je discussies over onverwachte kosten. Meer over professioneel versturen vind je in{' '}
          <Link href="/gidsen/offerte-maken-voor-zzper" className="text-warm-orange hover:underline">
            offerte sturen als zzp&apos;er
          </Link>
          .
        </p>

        <h2>Wat als de klant te laat akkoord geeft?</h2>
        <p>
          Gaat een klant akkoord <em>na</em> de geldigheidsdatum van je offerte? Dan hoef je de oude prijs niet automatisch
          te hanteren. Stuur een nieuwe offerte met actuele prijs en datum, of spreek een verlenging af.
        </p>
        <p>
          Lees{' '}
          <Link href="/gidsen/geldigheid-van-een-offerte" className="text-warm-orange hover:underline">
            geldigheid van een offerte
          </Link>{' '}
          voor meer uitleg.
        </p>

        <h2>Checklist na acceptatie</h2>
        <ul>
          <li>akkoord schriftelijk bevestigd</li>
          <li>opdracht ingepland</li>
          <li>offerte en e-mails bewaard</li>
          <li>werkzaamheden gestart volgens scope</li>
          <li>klant op de hoogte gehouden bij grotere opdrachten</li>
          <li>factuur verstuurd volgens betalingsafspraak</li>
          <li>extra werk apart afgesproken</li>
        </ul>

        <h2>Veelgestelde vragen</h2>
        <h3>Wat moet ik direct doen na akkoord?</h3>
        <p>
          Bevestig het akkoord schriftelijk, plan de opdracht in en start met de afgesproken werkzaamheden. Bewaar de
          offerte en communicatie.
        </p>
        <h3>Moet ik wachten met starten tot ik een factuur heb gestuurd?</h3>
        <p>
          Nee. Eerst ga je aan de slag volgens de offerte. De factuur stuur je meestal na (deel van) de levering, tenzij
          je een voorschot hebt afgesproken.
        </p>
        <h3>Kan ik meteen factureren na akkoord?</h3>
        <p>
          Alleen als dat is afgesproken, bijvoorbeeld bij een voorschot of volledige vooruitbetaling. Anders factureer je
          na oplevering.
        </p>
        <h3>Wat als de klant akkoord geeft per telefoon?</h3>
        <p>
          Vraag om een korte bevestiging per e-mail. Dat maakt de afspraak overzichtelijk en traceerbaar.
        </p>
        <h3>Hoe zet ik een offerte om naar een factuur?</h3>
        <p>
          Met FactuurBaas open je je offerte, controleer je de gegevens en zet je deze om naar een factuur die je als PDF
          kunt downloaden.
        </p>

        <h2>Klaar voor je volgende offerte?</h2>
        <p>
          Maak een duidelijke offerte, ontvang akkoord en zet daarna eenvoudig door naar een factuur. Gratis en zonder
          account.
        </p>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Open gratis offerte maker →" />
      </>
    ),
  },
  {
    slug: 'offerte-omzetten-naar-factuur',
    cluster: 'offertes',
    seoTitle: 'Offerte omzetten naar factuur: zo werkt het',
    title: 'Offerte omzetten naar factuur: zo doe je dat',
    excerpt:
      'Van offerte naar factuur? Lees wanneer je factureert, wat je overneemt en hoe je voorschot- en deelfacturen maakt na een akkoord.',
    keywords:
      'offerte omzetten naar factuur, van offerte naar factuur, voorschotfactuur, deelfactuur, offerte naar factuur, meerwerk factureren, geaccepteerde offerte factureren',
    tool: {
      href: '/tools/offerte-maker',
      label: 'Maak gratis een offerte en factuur',
      ctaLabel: 'Open gratis offerte maker',
      relatedTitle: 'Offerte maker',
      relatedExcerpt: 'Maak een offerte en zet deze met één klik om naar een factuur. Gratis en zonder account.',
    },
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Factuurbaas/Offerte%20omzetten%20naar%20factuur.jpg',
      alt: 'Offerte omzetten naar factuur: ondernemer berekent bedragen voor factuur',
    },
    datePublished: '2026-07-15',
    dateModified: '2026-09-03',
    relatedSlugs: ['verschil-factuur-offerte', 'factuur-maken-zzp', 'factuur-pdf-downloaden'],
    relatedGuideSlugs: ['offerte-accepteren-wat-gebeurt-er-na', 'hoe-maak-je-een-offerte', 'wanneer-is-een-offerte-bindend'],
    faq: [
      {
        question: 'Kan ik een offerte direct omzetten naar een factuur?',
        answer:
          'Ja, een offerte kan de basis vormen voor een factuur. Controleer wel eerst of volgens de gemaakte afspraken het moment is aangebroken om te factureren.',
      },
      {
        question: 'Moet een factuur altijd hetzelfde bedrag hebben als de offerte?',
        answer:
          'Niet altijd. Bij een voorschot of deelfactuur factureer je slechts een deel. Ook afgesproken meerwerk kan het uiteindelijke bedrag veranderen.',
      },
      {
        question: 'Hoe maak ik een voorschotfactuur?',
        answer:
          'Maak een factuur voor het afgesproken voorschotbedrag en vermeld duidelijk dat het om een voorschot gaat en op welke opdracht of offerte het betrekking heeft.',
      },
      {
        question: 'Hoe maak ik een deelfactuur?',
        answer:
          'Gebruik de oorspronkelijke offerte als basis en factureer het afgesproken deel van de opdracht. Vermeld duidelijk welke termijn, fase of werkzaamheden je factureert.',
      },
      {
        question: 'Kan ik meerdere facturen maken van één offerte?',
        answer:
          'Ja. Bij termijnbetalingen, voorschotten en grotere projecten kunnen meerdere facturen bij één offerte horen. Iedere factuur krijgt een eigen factuurnummer.',
      },
      {
        question: 'Wat gebeurt er als er meerwerk is?',
        answer:
          'Leg het extra werk en de prijs eerst duidelijk vast. Na akkoord kun je het meerwerk volgens de gemaakte afspraken factureren.',
      },
      {
        question: 'Wat is het verschil tussen een voorschotfactuur en een deelfactuur?',
        answer:
          'Bij een voorschot betaal je een afgesproken bedrag vooraf. Een deelfactuur brengt een afgesproken deel van de opdracht in rekening, bijvoorbeeld na het behalen van een bepaalde projectfase.',
      },
      {
        question: 'Kan ik een offerte en factuur online maken?',
        answer:
          'Ja. Met een online tool kun je offertes en facturen maken zonder zelf Word- of Excel-bestanden te onderhouden.',
      },
    ],
    content: (
      <>
        <p>
          Is je klant akkoord met je offerte? Dan volgt vaak de volgende stap: <strong>van offerte naar factuur</strong>
          .
        </p>
        <p>
          Je gebruikt de offerte als basis voor je factuur, maar een factuur is een ander document. Het factuurnummer,
          de factuurdatum en de betalingsafspraken moeten bijvoorbeeld correct worden verwerkt.
        </p>
        <p>
          In deze gids lees je wanneer je een offerte omzet naar een factuur, welke gegevens je overneemt en hoe je
          omgaat met <strong>voorschotten, deelfacturen en extra werk</strong>.
        </p>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Maak gratis een offerte en factuur →" />

        <h2>Van offerte naar factuur: hoe werkt het?</h2>
        <p>De meest gebruikelijke volgorde is:</p>
        <p>
          <strong>Offerte → akkoord → uitvoering → factuur</strong>
        </p>
        <p>Maar bij grotere opdrachten kan het ook zo gaan:</p>
        <p>
          <strong>Offerte → akkoord → voorschotfactuur → werkzaamheden → deelfacturen → eindfactuur</strong>
        </p>
        <p>Welke route je gebruikt, hangt af van de afspraken met je klant.</p>
        <p>
          Een offerte is een voorstel voor een opdracht. Een factuur gebruik je om een bedrag in rekening te brengen.
        </p>

        <h2>Wat is het verschil tussen een offerte en een factuur?</h2>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[480px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Onderdeel
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Offerte
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Factuur
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3 font-medium text-slate-700">Doel</td>
                <td className="px-4 py-3">Voorstel voor een opdracht</td>
                <td className="px-4 py-3">Bedrag in rekening brengen</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3 font-medium text-slate-700">Moment</td>
                <td className="px-4 py-3">Voor of bij het aangaan van de opdracht</td>
                <td className="px-4 py-3">Volgens de afgesproken betalingsmomenten</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3 font-medium text-slate-700">Nummer</td>
                <td className="px-4 py-3">Offertenummer</td>
                <td className="px-4 py-3">Factuurnummer</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3 font-medium text-slate-700">Betaling</td>
                <td className="px-4 py-3">Nog geen betalingsverzoek</td>
                <td className="px-4 py-3">Betalingsverzoek</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-slate-700">Status</td>
                <td className="px-4 py-3">Wachten op akkoord</td>
                <td className="px-4 py-3">Te betalen door klant</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Meer uitleg vind je in{' '}
          <Link href="/blogs/verschil-factuur-offerte" className="text-warm-orange hover:underline">
            het verschil tussen een offerte en een factuur
          </Link>
          .
        </p>

        <h2>Wanneer zet je een offerte om naar een factuur?</h2>
        <p>Je maakt een factuur wanneer daar volgens de gemaakte afspraken aanleiding voor is.</p>
        <p>Dat kan bijvoorbeeld zijn:</p>
        <ul>
          <li>na volledige oplevering</li>
          <li>na levering van een product of dienst</li>
          <li>bij een afgesproken voorschot</li>
          <li>bij een afgesproken termijnbetaling</li>
          <li>na een bepaalde mijlpaal in een project</li>
        </ul>
        <p>
          Een akkoord op de offerte betekent dus niet automatisch dat je het volledige offertebedrag direct moet
          factureren.
        </p>
        <p>Staat in je offerte bijvoorbeeld:</p>
        <blockquote>50% bij aanvang en 50% na oplevering</blockquote>
        <p>
          dan kun je na akkoord een voorschotfactuur voor de eerste 50% sturen. De overige 50% factureer je volgens de
          afgesproken voorwaarden.
        </p>

        <h2>Wat neem je over van de offerte?</h2>
        <p>De offerte vormt de basis voor de factuur. Veel gegevens kun je daarom opnieuw gebruiken.</p>
        <p>Denk aan:</p>
        <ul>
          <li>bedrijfsgegevens</li>
          <li>klantgegevens</li>
          <li>omschrijving van de werkzaamheden</li>
          <li>producten of diensten</li>
          <li>aantallen</li>
          <li>prijzen</li>
          <li>btw-tarieven</li>
          <li>eventuele afgesproken kosten</li>
        </ul>
        <p>
          Controleer deze gegevens wel voordat je de factuur verstuurt. Een offerte kan bijvoorbeeld maanden eerder
          zijn gemaakt of tijdens het project zijn gewijzigd.
        </p>

        <h3>Wat verandert er?</h3>
        <p>Een aantal gegevens hoort specifiek bij de factuur:</p>
        <ul>
          <li>
            <strong>offertenummer → factuurnummer</strong>
          </li>
          <li>
            <strong>offertedatum → factuurdatum</strong>
          </li>
          <li>eventuele leverings- of uitvoeringsdatum</li>
          <li>betaaltermijn</li>
          <li>betaalgegevens</li>
          <li>het bedrag dat daadwerkelijk wordt gefactureerd</li>
        </ul>
        <p>
          Ook kan het factuurbedrag verschillen van het oorspronkelijke offertebedrag wanneer er bijvoorbeeld meerwerk
          of andere wijzigingen zijn afgesproken.
        </p>

        <h2>Offerte omzetten naar factuur in FactuurBaas</h2>
        <p>In FactuurBaas kun je een offerte als basis gebruiken voor een factuur.</p>
        <p>De werkwijze:</p>
        <ol>
          <li>
            Maak je offerte met de{' '}
            <Link href="/tools/offerte-maker/maken" className="text-warm-orange hover:underline">
              offerte maker
            </Link>
            .
          </li>
          <li>Laat je klant de offerte beoordelen en akkoord geven.</li>
          <li>Maak wanneer het betalingsmoment is aangebroken een factuur van de offerte.</li>
          <li>Controleer het factuurnummer, de datum en de bedragen.</li>
          <li>Controleer de btw en betaaltermijn.</li>
          <li>Download de factuur als PDF.</li>
          <li>Stuur de factuur naar je klant.</li>
        </ol>
        <p>Zo hoef je gegevens die al in je offerte staan niet opnieuw over te typen.</p>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Maak gratis je offerte en factuur →" />

        <h2>Voorschotfactuur na een offerte</h2>
        <p>
          Een <strong>voorschotfactuur</strong> is een factuur waarmee je een afgesproken bedrag vooraf in rekening
          brengt.
        </p>
        <p>Bijvoorbeeld:</p>
        <p>
          <strong>Totale opdracht volgens offerte:</strong> €4.000 exclusief btw
          <br />
          <strong>Voorschot:</strong> 50%
          <br />
          <strong>Voorschotfactuur:</strong> €2.000 exclusief btw
        </p>
        <p>Je factureert hiermee dus niet automatisch de volledige opdracht.</p>
        <p>
          Zorg dat op de factuur duidelijk staat dat het om een voorschot gaat en op welke opdracht of offerte het
          voorschot betrekking heeft.
        </p>

        <h3>Hoe maak je een voorschotfactuur?</h3>
        <p>
          Controleer eerst wat je in de offerte hebt afgesproken. Staat er bijvoorbeeld dat 50% vooraf wordt betaald,
          dan kun je die eerste termijn factureren nadat de opdracht tot stand is gekomen.
        </p>
        <p>Vermeld bijvoorbeeld:</p>
        <blockquote>Voorschot – 50% van opdracht volgens offerte OFF-2026-024</blockquote>
        <p>Daarna factureer je het resterende bedrag volgens de gemaakte afspraken.</p>

        <h2>Deelfactuur maken van een offerte</h2>
        <p>Bij grotere projecten kun je één offerte gebruiken als basis voor meerdere facturen.</p>
        <p>Bijvoorbeeld:</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[420px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Factuur
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Omschrijving
                </th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">
                  Bedrag excl. btw
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Factuur 1</td>
                <td className="px-4 py-3">Voorschot 30%</td>
                <td className="px-4 py-3 text-right">€1.500</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Factuur 2</td>
                <td className="px-4 py-3">Termijn 40%</td>
                <td className="px-4 py-3 text-right">€2.000</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Factuur 3</td>
                <td className="px-4 py-3">Eindfactuur 30%</td>
                <td className="px-4 py-3 text-right">€1.500</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-deep-blue">Totaal</td>
                <td className="px-4 py-3" />
                <td className="px-4 py-3 text-right font-semibold text-deep-blue">€5.000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Elke factuur krijgt een <strong>eigen factuurnummer</strong>.
        </p>
        <p>
          Vermeld duidelijk welke termijn of welk deel van de opdracht je factureert. Zo voorkom je dat jij of je
          klant later niet meer weet welk bedrag al is gefactureerd.
        </p>

        <h2>Kun je meerdere facturen van één offerte maken?</h2>
        <p>Ja. Dat kan bijvoorbeeld bij:</p>
        <ul>
          <li>termijnbetalingen</li>
          <li>voorschotten</li>
          <li>grote projecten</li>
          <li>maandelijkse werkzaamheden</li>
          <li>verschillende oplevermomenten</li>
        </ul>
        <p>
          Gebruik de oorspronkelijke offerte als referentie, maar factureer per factuur alleen het bedrag dat volgens
          de afspraken op dat moment verschuldigd is.
        </p>

        <h2>Wat doe je met meerwerk?</h2>
        <p>Extra werkzaamheden vallen niet automatisch onder het oorspronkelijke offertebedrag.</p>
        <p>
          Stel dat je een website bouwt voor €3.000 en de klant later vraagt om extra functionaliteit van €500. Leg
          dan eerst duidelijk vast wat het extra werk kost en vraag waar nodig akkoord voordat je het uitvoert.
        </p>
        <p>Het extra bedrag kun je vervolgens volgens de gemaakte afspraken factureren.</p>
        <p>Je kunt het meerwerk bijvoorbeeld als aparte regel op dezelfde factuur zetten:</p>
        <blockquote>Meerwerk – extra functionaliteit volgens akkoord 12 september – €500</blockquote>
        <p>Of je kunt voor het meerwerk een aanvullende offerte gebruiken.</p>
        <p>
          Het belangrijkste is dat de klant weet <strong>wat het extra werk kost en waarmee hij akkoord gaat</strong>.
        </p>

        <h2>Offertenummer en factuurnummer</h2>
        <p>Een offerte en een factuur hebben een eigen nummering.</p>
        <p>Bijvoorbeeld:</p>
        <p>
          <strong>Offerte:</strong> OFF-2026-024
          <br />
          <strong>Factuur:</strong> 2026-042
        </p>
        <p>Gebruik niet hetzelfde nummer voor beide documenten.</p>
        <p>
          Een offertenummer helpt je om de oorspronkelijke afspraak terug te vinden. Het factuurnummer hoort bij de
          uiteindelijke factuur.
        </p>
        <p>
          Bekijk ook onze uitleg over{' '}
          <Link href="/gidsen/hoe-maak-je-een-offerte" className="text-warm-orange hover:underline">
            offertenummers bepalen
          </Link>{' '}
          en{' '}
          <Link href="/tools/factuurnummer-generator" className="text-warm-orange hover:underline">
            factuurnummers maken
          </Link>
          .
        </p>

        <h2>Offerte en factuur online maken</h2>
        <p>
          Gebruik je Word of Excel, dan moet je gegevens vaak handmatig van je offerte naar je factuur kopiëren.
        </p>
        <p>Dat betekent dat je opnieuw moet controleren:</p>
        <ul>
          <li>klantgegevens</li>
          <li>omschrijvingen</li>
          <li>aantallen</li>
          <li>bedragen</li>
          <li>btw</li>
          <li>nummering</li>
          <li>betaaltermijn</li>
        </ul>
        <p>
          Met een online tool kun je dit proces eenvoudiger maken doordat je met dezelfde gegevens kunt werken.
        </p>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Maak gratis een offerte →" />

        <h2>Checklist voordat je de factuur verstuurt</h2>
        <p>Controleer:</p>
        <ul>
          <li>klant heeft akkoord gegeven op de offerte</li>
          <li>het juiste betalingsmoment is aangebroken</li>
          <li>juiste klantgegevens</li>
          <li>nieuw en uniek factuurnummer</li>
          <li>juiste factuurdatum</li>
          <li>juiste omschrijving</li>
          <li>alleen het afgesproken deel gefactureerd</li>
          <li>meerwerk is afgesproken en duidelijk vermeld</li>
          <li>btw correct berekend</li>
          <li>betaaltermijn ingevuld</li>
          <li>betaalgegevens gecontroleerd</li>
          <li>PDF gecontroleerd voordat je deze verstuurt</li>
        </ul>

        <h2>Veelgemaakte fouten bij offerte en factuur</h2>

        <h3>Het volledige offertebedrag direct factureren</h3>
        <p>
          Een klant kan akkoord zijn met een offerte zonder dat het volledige bedrag meteen verschuldigd is.
        </p>
        <p>Controleer daarom eerst de afgesproken betalingsmomenten.</p>

        <h3>Hetzelfde nummer gebruiken</h3>
        <p>
          Gebruik een apart offertenummer en factuurnummer. Bijvoorbeeld OFF-2026-024 voor de offerte en 2026-042 voor
          de factuur.
        </p>

        <h3>Een voorschot als volledige factuur behandelen</h3>
        <p>
          Een voorschot is slechts een deel van de afgesproken opdracht. Vermeld duidelijk dat het om een voorschot
          gaat.
        </p>

        <h3>Een deelfactuur niet duidelijk omschrijven</h3>
        <p>
          Zet bijvoorbeeld “Termijn 2 – werkzaamheden fase 2” op de factuur, zodat duidelijk is welk deel van de
          opdracht je factureert.
        </p>

        <h3>Meerwerk zonder akkoord factureren</h3>
        <p>
          Extra werkzaamheden kunnen tot discussie leiden wanneer vooraf niet duidelijk is afgesproken wat ze kosten.
          Leg meerwerk daarom vooraf vast.
        </p>

        <h3>De offerte niet bewaren</h3>
        <p>
          Bewaar de offerte, eventuele wijzigingen en het akkoord samen met de facturen. Zo kun je later aantonen
          welke afspraken aan de factuur ten grondslag lagen.
        </p>

        <h2>Veelgestelde vragen</h2>
        <h3>Kan ik een offerte direct omzetten naar een factuur?</h3>
        <p>
          Ja, een offerte kan de basis vormen voor een factuur. Controleer wel eerst of volgens de gemaakte afspraken
          het moment is aangebroken om te factureren.
        </p>
        <h3>Moet een factuur altijd hetzelfde bedrag hebben als de offerte?</h3>
        <p>
          Niet altijd. Bij een voorschot of deelfactuur factureer je slechts een deel. Ook afgesproken meerwerk kan
          het uiteindelijke bedrag veranderen.
        </p>
        <h3>Hoe maak ik een voorschotfactuur?</h3>
        <p>
          Maak een factuur voor het afgesproken voorschotbedrag en vermeld duidelijk dat het om een voorschot gaat en
          op welke opdracht of offerte het betrekking heeft.
        </p>
        <h3>Hoe maak ik een deelfactuur?</h3>
        <p>
          Gebruik de oorspronkelijke offerte als basis en factureer het afgesproken deel van de opdracht. Vermeld
          duidelijk welke termijn, fase of werkzaamheden je factureert.
        </p>
        <h3>Kan ik meerdere facturen maken van één offerte?</h3>
        <p>
          Ja. Bij termijnbetalingen, voorschotten en grotere projecten kunnen meerdere facturen bij één offerte horen.
          Iedere factuur krijgt een eigen factuurnummer.
        </p>
        <h3>Wat gebeurt er als er meerwerk is?</h3>
        <p>
          Leg het extra werk en de prijs eerst duidelijk vast. Na akkoord kun je het meerwerk volgens de gemaakte
          afspraken factureren.
        </p>
        <h3>Wat is het verschil tussen een voorschotfactuur en een deelfactuur?</h3>
        <p>
          Bij een voorschot betaal je een afgesproken bedrag vooraf. Een deelfactuur brengt een afgesproken deel van
          de opdracht in rekening, bijvoorbeeld na het behalen van een bepaalde projectfase.
        </p>
        <h3>Kan ik een offerte en factuur online maken?</h3>
        <p>
          Ja. Met een online tool kun je offertes en facturen maken zonder zelf Word- of Excel-bestanden te
          onderhouden.
        </p>

        <h2>Van offerte naar factuur met FactuurBaas</h2>
        <p>
          Een offerte is het begin van de opdracht. Daarna volgen, afhankelijk van je afspraken, een voorschot, één of
          meerdere termijnfacturen en uiteindelijk de eindfactuur.
        </p>
        <p>
          Met FactuurBaas kun je je offerte maken en deze als basis gebruiken voor je factuur. Zo hoef je gegevens
          niet steeds opnieuw in te voeren.
        </p>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Maak gratis je offerte →" />
      </>
    ),
  },
  {
    slug: 'digitale-offertes-versturen',
    cluster: 'offertes',
    seoTitle: 'Online offerte maken: gratis digitaal versturen',
    title: 'Online offerte maken en digitaal versturen',
    excerpt:
      'Online een offerte maken? Maak gratis een professionele offerte, download als PDF en verstuur deze digitaal per e-mail. Zonder account.',
    keywords:
      'online offerte maken, offerte online maken, gratis offerte maken, offerte digitaal versturen, offerte pdf, offerte per email, digitale offerte',
    tool: {
      href: '/tools/offerte-maker',
      label: 'Maak gratis een offerte online',
      ctaLabel: 'Maak gratis een offerte',
      relatedTitle: 'Offerte maker',
      relatedExcerpt: 'Maak online een professionele offerte, download als PDF en verstuur digitaal. Gratis en zonder account.',
    },
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Factuurbaas/Digitale%20offertes%20versturen.jpg',
      alt: 'Online offerte maken: ondernemer maakt en verstuurt offerte digitaal',
    },
    datePublished: '2026-07-15',
    dateModified: '2026-09-03',
    relatedSlugs: ['verschil-factuur-offerte', 'factureren-zonder-account'],
    relatedGuideSlugs: [
      'offerte-maken-in-pdf',
      'offerte-maken-voor-zzper',
      'offerte-omzetten-naar-factuur',
      'wanneer-is-een-offerte-bindend',
    ],
    faq: [
      {
        question: 'Hoe maak ik online een offerte?',
        answer:
          'Je kunt online een offerte maken door je bedrijfsgegevens, klantgegevens, werkzaamheden en prijzen in te vullen. Met de gratis offerte maker van FactuurBaas kun je daarna je offerte als PDF downloaden.',
      },
      {
        question: 'Waar kan ik gratis een offerte maken?',
        answer:
          'Met FactuurBaas kun je gratis online een offerte maken en als PDF downloaden. Een account is niet nodig.',
      },
      {
        question: 'Hoe verstuur ik een digitale offerte?',
        answer:
          'De eenvoudigste manier is om je offerte als PDF te downloaden en deze als bijlage bij een e-mail naar je klant te sturen.',
      },
      {
        question: 'Kan ik een offerte als PDF versturen?',
        answer:
          'Ja. Je kunt een online gemaakte offerte als PDF downloaden en vervolgens per e-mail versturen.',
      },
      {
        question: 'Kan ik een offerte digitaal laten ondertekenen?',
        answer:
          'Dat kan met een aparte digitale ondertekeningsoplossing of door de klant schriftelijk akkoord te laten geven, bijvoorbeeld per e-mail. De offerte maker van FactuurBaas maakt en downloadt de offerte als PDF, maar bevat geen digitale ondertekeningsfunctie.',
      },
      {
        question: 'Kan ik een offerte online maken zonder account?',
        answer:
          'Ja. Met de gratis offerte maker van FactuurBaas kun je zonder account een offerte maken en als PDF downloaden.',
      },
      {
        question: 'Kan ik een online offerte daarna omzetten naar een factuur?',
        answer:
          'Na akkoord kun je de opdracht factureren. FactuurBaas ondersteunt het maken van een factuur vanuit een offerte.',
      },
    ],
    content: (
      <>
        <p>
          Een <strong>online offerte maken</strong> is een snelle manier om een professioneel voorstel naar je klant te
          sturen. Je vult je bedrijfsgegevens, klantgegevens, werkzaamheden en prijzen in, maakt de offerte online en
          downloadt deze als PDF.
        </p>
        <p>
          Met de gratis{' '}
          <Link href="/tools/offerte-maker" className="text-warm-orange hover:underline">
            offerte maker
          </Link>{' '}
          van FactuurBaas maak je direct een offerte als PDF. Je hebt geen account nodig.
        </p>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Maak gratis een offerte online →" />

        <h2>Hoe maak je online een offerte?</h2>
        <p>Een goede digitale offerte maken kan in een paar stappen:</p>

        <h3>1. Vul je bedrijfsgegevens in</h3>
        <p>Vermeld de gegevens van je bedrijf, zoals:</p>
        <ul>
          <li>bedrijfsnaam</li>
          <li>adres</li>
          <li>e-mailadres</li>
          <li>telefoonnummer</li>
          <li>KVK-nummer</li>
          <li>btw-id, indien van toepassing</li>
        </ul>
        <p>Zo weet de klant direct van wie de offerte afkomstig is.</p>

        <h3>2. Vul de klantgegevens in</h3>
        <p>
          Voeg de gegevens van de klant toe. Bij een zakelijke klant vermeld je bijvoorbeeld de bedrijfsnaam,
          contactpersoon en het adres.
        </p>
        <p>Controleer het e-mailadres goed voordat je de offerte verstuurt.</p>

        <h3>3. Geef de offerte een nummer</h3>
        <p>
          Gebruik een uniek offertenummer, bijvoorbeeld <strong>OFF-2026-014</strong>. Een vaste nummering maakt
          offertes makkelijker terug te vinden en helpt bij je administratie.
        </p>

        <h3>4. Beschrijf de werkzaamheden</h3>
        <p>Maak duidelijk wat je gaat leveren.</p>
        <p>Bijvoorbeeld:</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[280px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Omschrijving
                </th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">
                  Aantal
                </th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">
                  Prijs
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Adviesgesprek</td>
                <td className="px-4 py-3 text-right">2 uur</td>
                <td className="px-4 py-3 text-right">€150</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Uitwerking advies</td>
                <td className="px-4 py-3 text-right">1</td>
                <td className="px-4 py-3 text-right">€500</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Rapportage</td>
                <td className="px-4 py-3 text-right">1</td>
                <td className="px-4 py-3 text-right">€100</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Een klant moet op basis van je offerte kunnen begrijpen wat wel en niet binnen de opdracht valt.
        </p>

        <h3>5. Vermeld de prijs en btw</h3>
        <p>
          Geef duidelijk aan wat de werkzaamheden kosten en welk btw-tarief van toepassing is.
        </p>
        <p>Vermeld bijvoorbeeld het bedrag exclusief btw, de btw en het totaal inclusief btw.</p>

        <h3>6. Voeg een geldigheidsduur toe</h3>
        <p>Geef aan tot wanneer je aanbod geldig is. Bijvoorbeeld:</p>
        <p>
          <strong>Deze offerte is geldig tot en met 30 september 2026.</strong>
        </p>
        <p>Dat voorkomt onduidelijkheid wanneer een klant pas weken later reageert.</p>

        <h3>7. Download en verstuur de offerte</h3>
        <p>
          Controleer de offerte en download deze als PDF. Geef het bestand een duidelijke naam, bijvoorbeeld:
        </p>
        <p>
          <strong>Offerte-OFF-2026-014-Klant-BV.pdf</strong>
        </p>
        <p>Daarna kun je de PDF per e-mail naar je klant sturen.</p>

        <h2>Waarom een offerte online maken?</h2>
        <p>Een online offerte heeft een aantal praktische voordelen:</p>
        <ul>
          <li>je kunt de offerte snel maken</li>
          <li>je hoeft geen Word- of Excel-bestand op te maken</li>
          <li>de offerte kan als PDF worden verstuurd</li>
          <li>de opmaak blijft hetzelfde bij de ontvanger</li>
          <li>je kunt overal een offerte maken</li>
          <li>je kunt een kopie van de verstuurde offerte bewaren</li>
        </ul>
        <p>
          Voor veel zzp&apos;ers is een online offerte daarom eenvoudiger dan steeds zelf een document in Word of Excel
          opmaken.
        </p>

        <h2>Een offerte digitaal versturen</h2>
        <p>Nadat je de offerte online hebt gemaakt, kun je hem digitaal naar je klant sturen.</p>
        <p>De eenvoudigste manier is:</p>
        <ol>
          <li>Maak de offerte online.</li>
          <li>Controleer alle gegevens.</li>
          <li>Download de offerte als PDF.</li>
          <li>Open je e-mail.</li>
          <li>Voeg de PDF toe als bijlage.</li>
          <li>Gebruik een duidelijk onderwerp met het offertenummer.</li>
          <li>Vraag de klant om te laten weten of hij akkoord gaat.</li>
        </ol>

        <h3>Voorbeeld van een e-mail</h3>
        <p>
          <strong>Onderwerp: Offerte OFF-2026-014 – adviestraject</strong>
        </p>
        <blockquote>
          Beste [naam],
          <br />
          <br />
          Hierbij stuur ik je de offerte voor [omschrijving van de opdracht].
          <br />
          <br />
          In de bijlage vind je de volledige offerte. Het totaalbedrag bedraagt €907,50 inclusief btw.
          <br />
          <br />
          De offerte is geldig tot en met 30 september 2026.
          <br />
          <br />
          Heb je nog vragen? Laat het gerust weten. Als je akkoord bent, kun je dit per e-mail bevestigen.
          <br />
          <br />
          Met vriendelijke groet,
          <br />
          <br />
          [naam]
          <br />
          [bedrijfsnaam]
          <br />
          [telefoonnummer]
          <br />
          [e-mailadres]
        </blockquote>
        <p>
          Houd de e-mail kort. De volledige omschrijving, prijsopbouw en voorwaarden staan in de offerte zelf.
        </p>

        <h2>Offerte als PDF versturen</h2>
        <p>
          Een <strong>PDF-offerte</strong> is handig omdat de opmaak niet afhankelijk is van het programma waarmee de
          klant de offerte opent.
        </p>
        <p>
          Een Word-bestand kan door de ontvanger worden gewijzigd en de opmaak kan verschillen tussen programma&apos;s.
          Bij een PDF blijft de offerte doorgaans in dezelfde vorm zichtbaar.
        </p>
        <p>
          Daarom is een PDF vaak een praktische keuze voor het digitaal versturen van een offerte.
        </p>
        <p>
          Meer informatie over verschillende manieren om een offerte als PDF te maken vind je in{' '}
          <Link href="/gidsen/offerte-maken-in-pdf" className="text-warm-orange hover:underline">
            offerte maken in PDF
          </Link>
          .
        </p>

        <h2>Kun je een offerte digitaal laten ondertekenen?</h2>
        <p>
          Een offerte kan digitaal worden geaccepteerd. Hoe je dat praktisch regelt, hangt af van je werkwijze en de
          afspraken met je klant.
        </p>
        <p>Je kunt bijvoorbeeld vragen om een schriftelijke bevestiging per e-mail:</p>
        <blockquote>
          &quot;Hierbij bevestig ik dat ik akkoord ga met offerte OFF-2026-014.&quot;
        </blockquote>
        <p>
          Voor sommige opdrachten kan een digitale handtekening of een aparte ondertekeningsdienst handig zijn.
        </p>
        <p>
          <strong>FactuurBaas maakt en downloadt je offerte als PDF.</strong> Het digitaal ondertekenen van de offerte
          is geen onderdeel van de offerte maker.
        </p>
        <p>
          Een schriftelijke bevestiging van de klant kan wel handig zijn om later duidelijk te kunnen aantonen wat er
          is afgesproken.
        </p>
        <p>
          Lees ook{' '}
          <Link href="/gidsen/wanneer-is-een-offerte-bindend" className="text-warm-orange hover:underline">
            wanneer is een offerte bindend
          </Link>
          .
        </p>

        <h2>Offerte online maken voor zzp&apos;ers</h2>
        <p>
          Als zzp&apos;er hoef je een offerte niet ingewikkeld te maken. Zorg vooral dat je klant begrijpt:
        </p>
        <ul>
          <li>wat je gaat doen</li>
          <li>wat het kost</li>
          <li>wat wel en niet inbegrepen is</li>
          <li>wanneer je de werkzaamheden uitvoert</li>
          <li>hoe lang de offerte geldig is</li>
          <li>welke voorwaarden gelden</li>
        </ul>
        <p>
          Een duidelijke offerte verkleint de kans op misverstanden en maakt het voor de klant eenvoudiger om akkoord
          te gaan.
        </p>
        <p>
          Lees ook{' '}
          <Link href="/gidsen/offerte-maken-voor-zzper" className="text-warm-orange hover:underline">
            offerte maken voor zzp&apos;ers
          </Link>
          .
        </p>

        <h2>Online offerte maken: gratis en zonder account</h2>
        <p>
          Met de gratis{' '}
          <Link href="/tools/offerte-maker" className="text-warm-orange hover:underline">
            offerte maker
          </Link>{' '}
          van FactuurBaas kun je online een offerte maken en deze als PDF downloaden.
        </p>
        <p>Je hoeft hiervoor geen account aan te maken.</p>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Maak gratis je offerte →" />

        <h2>Offerte versturen via e-mail, WhatsApp of een link</h2>
        <p>
          Een PDF per e-mail is voor zakelijke offertes meestal de meest overzichtelijke optie. De klant ontvangt één
          duidelijk document met alle afspraken.
        </p>
        <p>
          In sommige situaties kun je een offerte ook via WhatsApp of een andere berichtenapp delen. Bij zakelijke
          opdrachten is e-mail vaak praktischer omdat je de verzending en correspondentie eenvoudiger kunt
          terugvinden.
        </p>
        <p>
          Welke methode je ook gebruikt: zorg dat de klant de volledige offerte ontvangt en dat je zelf een kopie
          bewaart.
        </p>

        <h2>Wat doe je nadat de klant akkoord is?</h2>
        <p>
          Heeft de klant akkoord gegeven? Dan kun je de opdracht uitvoeren volgens de gemaakte afspraken.
        </p>
        <p>Afhankelijk van de opdracht kun je daarna bijvoorbeeld:</p>
        <ul>
          <li>de werkzaamheden inplannen</li>
          <li>een aanbetaling of voorschot factureren als dat is afgesproken</li>
          <li>een deelfactuur sturen</li>
          <li>na afronding de eindfactuur sturen</li>
        </ul>
        <p>
          Een geaccepteerde offerte kan onderdeel zijn van de afspraken met je klant. Zorg daarom dat je offerte
          duidelijk omschrijft wat je aanbiedt.
        </p>
        <p>
          Lees{' '}
          <Link href="/gidsen/offerte-omzetten-naar-factuur" className="text-warm-orange hover:underline">
            offerte omzetten naar factuur
          </Link>{' '}
          voor de volgende stap.
        </p>

        <h2>Veelgemaakte fouten bij online offertes</h2>

        <h3>Een onduidelijke omschrijving</h3>
        <p>&quot;Advieswerk €1.000&quot; zegt weinig. Beschrijf liever wat het advies precies omvat.</p>

        <h3>Geen geldigheidsduur</h3>
        <p>Zonder geldigheidsduur kan onduidelijkheid ontstaan over hoe lang je aanbod blijft staan.</p>

        <h3>Geen duidelijke prijsopbouw</h3>
        <p>Laat zien waar het totaalbedrag uit bestaat, zeker bij grotere opdrachten.</p>

        <h3>De verkeerde bijlage</h3>
        <p>Controleer voordat je op verzenden klikt of je de juiste PDF hebt toegevoegd.</p>

        <h3>Verkeerd e-mailadres</h3>
        <p>Controleer het e-mailadres van de contactpersoon voordat je de offerte verstuurt.</p>

        <h3>Geen kopie bewaren</h3>
        <p>Bewaar de verzonden offerte en relevante communicatie met de klant in je administratie.</p>

        <h2>Checklist voor een digitale offerte</h2>
        <p>Controleer voor verzending:</p>
        <ul>
          <li>bedrijfsgegevens ingevuld</li>
          <li>klantgegevens gecontroleerd</li>
          <li>offertenummer toegevoegd</li>
          <li>datum vermeld</li>
          <li>werkzaamheden duidelijk omschreven</li>
          <li>prijzen gecontroleerd</li>
          <li>btw gecontroleerd</li>
          <li>geldigheidsduur vermeld</li>
          <li>voorwaarden toegevoegd indien van toepassing</li>
          <li>PDF gecontroleerd</li>
          <li>juiste e-mailadres gebruikt</li>
          <li>kopie van de offerte bewaard</li>
        </ul>

        <h2>Veelgestelde vragen</h2>
        <h3>Hoe maak ik online een offerte?</h3>
        <p>
          Je kunt online een offerte maken door je bedrijfsgegevens, klantgegevens, werkzaamheden en prijzen in te
          vullen. Met de gratis offerte maker van FactuurBaas kun je daarna je offerte als PDF downloaden.
        </p>
        <h3>Waar kan ik gratis een offerte maken?</h3>
        <p>
          Met FactuurBaas kun je gratis online een offerte maken en als PDF downloaden. Een account is niet nodig.
        </p>
        <h3>Hoe verstuur ik een digitale offerte?</h3>
        <p>
          De eenvoudigste manier is om je offerte als PDF te downloaden en deze als bijlage bij een e-mail naar je
          klant te sturen.
        </p>
        <h3>Kan ik een offerte als PDF versturen?</h3>
        <p>
          Ja. Je kunt een online gemaakte offerte als PDF downloaden en vervolgens per e-mail versturen.
        </p>
        <h3>Kan ik een offerte digitaal laten ondertekenen?</h3>
        <p>
          Dat kan met een aparte digitale ondertekeningsoplossing of door de klant schriftelijk akkoord te laten
          geven, bijvoorbeeld per e-mail. De offerte maker van FactuurBaas maakt en downloadt de offerte als PDF, maar
          bevat geen digitale ondertekeningsfunctie.
        </p>
        <h3>Kan ik een offerte online maken zonder account?</h3>
        <p>
          Ja. Met de gratis offerte maker van FactuurBaas kun je zonder account een offerte maken en als PDF
          downloaden.
        </p>
        <h3>Kan ik een online offerte daarna omzetten naar een factuur?</h3>
        <p>
          Na akkoord kun je de opdracht factureren. FactuurBaas ondersteunt het maken van een factuur vanuit een
          offerte. Bekijk ook{' '}
          <Link href="/gidsen/offerte-omzetten-naar-factuur" className="text-warm-orange hover:underline">
            offerte omzetten naar factuur
          </Link>
          .
        </p>

        <h2>Maak je volgende offerte online</h2>
        <p>
          Maak je offerte online, controleer de gegevens en download hem als professionele PDF. Daarna kun je hem
          direct digitaal naar je klant versturen.
        </p>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Maak gratis een offerte →" />
      </>
    ),
  },
  {
    slug: 'offerte-aanpassen',
    cluster: 'offertes',
    seoTitle: 'Offerte aanpassen: mag je een offerte wijzigen? | FactuurBaas',
    title: 'Offerte aanpassen: mag je een offerte wijzigen na verzending of akkoord?',
    excerpt:
      'Offerte aanpassen na verzending of akkoord? Lees wanneer dat mag, hoeveel een offerte mag afwijken, wanneer je opnieuw goedkeuring nodig hebt en hoe je een aangepaste offerte maakt.',
    keywords:
      'offerte aanpassen, aangepaste offerte, offerte wijzigen na akkoord, hoeveel mag een offerte afwijken, prijs verhogen na offerte, offerte goedkeuren, is een offerte bindend, fout in offerte herstellen',
    tool: {
      href: '/tools/offerte-maker',
      label: 'Maak aangepaste offerte',
      ctaLabel: 'Open gratis offerte maker',
      relatedTitle: 'Offerte maker',
      relatedExcerpt: 'Pas je offerte aan, maak een nieuwe versie en download direct als PDF. Gratis en zonder account.',
    },
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Factuurbaas/offerte%20aanpassen.jpg',
      alt: 'Offerte aanpassen: ondernemer wijzigt offerte op laptop',
    },
    datePublished: '2026-07-15',
    dateModified: '2026-08-28',
    relatedSlugs: ['verschil-factuur-offerte', 'factuur-maken-zzp'],
    relatedGuideSlugs: ['offerte-accepteren-wat-gebeurt-er-na', 'wanneer-is-een-offerte-bindend', 'offerte-omzetten-naar-factuur'],
    faq: [
      {
        question: 'Kan ik een offerte aanpassen nadat ik deze heb verstuurd?',
        answer:
          'Ja. Als de klant nog geen akkoord heeft gegeven, kun je een aangepaste versie sturen. Zorg ervoor dat duidelijk is welke offerte de juiste versie is.',
      },
      {
        question: 'Mag ik een offerte aanpassen na akkoord?',
        answer:
          'Niet zomaar. Na akkoord geldt de afgesproken prijs, werkzaamheden en voorwaarden in principe als uitgangspunt. Bespreek wijzigingen altijd eerst met de klant en leg een nieuw akkoord schriftelijk vast.',
      },
      {
        question: 'Kan ik een prijs verhogen na een offerte?',
        answer:
          'Alleen als de klant hiermee akkoord gaat of als hierover vooraf afspraken zijn gemaakt.',
      },
      {
        question: 'Hoeveel mag een offerte afwijken?',
        answer:
          'Een offerte mag niet zomaar afwijken van de gemaakte afspraken. Een hogere prijs kan gerechtvaardigd zijn bij extra werkzaamheden, meer uren of materialen, nacalculatie die vooraf in de offerte staat, of als de klant vooraf akkoord gaat met meerwerk.',
      },
      {
        question: 'Moet een aangepaste offerte opnieuw worden goedgekeurd?',
        answer:
          'Ja, als de wijziging invloed heeft op prijs, werkzaamheden of andere belangrijke afspraken. Stuur de nieuwe versie met een duidelijk nieuw offertenummer en vermeld dat deze de vorige offerte vervangt.',
      },
      {
        question: 'Wat doe ik bij een fout in mijn offerte?',
        answer:
          'Maak een gecorrigeerde versie en stuur deze opnieuw naar de klant. Vermeld duidelijk dat de nieuwe offerte de oude vervangt.',
      },
    ],
    content: (
      <>
        <p>
          Een fout in je offerte ontdekt? Een klant vraagt om extra werkzaamheden? Of je wilt een prijs aanpassen omdat
          de situatie is veranderd? Dan vraag je je misschien af: <strong>mag je een offerte nog aanpassen</strong> nadat
          deze is verstuurd of geaccepteerd?
        </p>
        <p>
          In veel gevallen kan een offerte aangepast worden, maar het hangt af van de situatie. Vooral wanneer een klant
          al akkoord heeft gegeven, is het belangrijk om duidelijke afspraken te maken.
        </p>
        <p>
          Met{' '}
          <Link href="/tools/offerte-maker" className="text-warm-orange hover:underline">
            FactuurBaas
          </Link>{' '}
          maak je eenvoudig een nieuwe of aangepaste offerte. Pas je gegevens, werkzaamheden en prijzen aan en download
          direct een professionele PDF.
        </p>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Maak gratis offerte →" />

        <h2>Kun je een offerte aanpassen?</h2>
        <p>
          <strong>Ja</strong>, je kunt een offerte aanpassen zolang de klant deze nog niet heeft geaccepteerd.
        </p>
        <p>Bijvoorbeeld als:</p>
        <ul>
          <li>je ontdekt een fout in de prijs</li>
          <li>je bent een onderdeel vergeten</li>
          <li>de werkzaamheden veranderen</li>
          <li>de klant vraagt om extra opties</li>
        </ul>
        <p>
          Maak in dat geval een nieuwe versie van de offerte en stuur deze opnieuw naar de klant. Het is verstandig om de
          oude offerte duidelijk te vervangen.
        </p>
        <p>
          <strong>Voorbeeld:</strong> Offerte OFF-2026-001 is vervangen door offerte OFF-2026-002. Zo voorkom je verwarring.
        </p>

        <h2>Offerte wijzigen na akkoord: kan dat?</h2>
        <p>
          Na akkoord kun je een offerte <strong>niet zomaar eenzijdig wijzigen</strong>. De klant heeft akkoord gegeven op
          de afgesproken werkzaamheden, prijs en voorwaarden. Wil je daarvan afwijken, bespreek de wijziging dan met de
          klant en leg het nieuwe akkoord schriftelijk vast.
        </p>
        <p>Je kunt dan in principe niet eenzijdig:</p>
        <ul>
          <li>de prijs verhogen</li>
          <li>werkzaamheden aanpassen</li>
          <li>voorwaarden veranderen</li>
        </ul>
        <p>
          Wil je toch iets wijzigen? Bespreek dit dan eerst met de klant. Bijvoorbeeld: &quot;Tijdens de uitvoering blijkt
          dat er extra werkzaamheden nodig zijn. Hiervoor sturen wij een aanvullende offerte.&quot;
        </p>
        <p>
          Laat de klant opnieuw akkoord geven voordat je de extra werkzaamheden uitvoert. Lees ook{' '}
          <Link href="/gidsen/wanneer-is-een-offerte-bindend" className="text-warm-orange hover:underline">
            wanneer is een offerte bindend
          </Link>{' '}
          en{' '}
          <Link href="/gidsen/offerte-accepteren-wat-gebeurt-er-na" className="text-warm-orange hover:underline">
            offerte accepteren: wat gebeurt er daarna
          </Link>
          .
        </p>

        <h2>Prijs verhogen na een offerte: mag dat?</h2>
        <p>
          Een prijs verhogen nadat een offerte is geaccepteerd mag meestal <strong>niet zomaar</strong>. De klant heeft
          akkoord gegeven op de afgesproken prijs.
        </p>
        <p>Een prijswijziging kan wel mogelijk zijn als:</p>
        <ul>
          <li>dit vooraf in de offerte of voorwaarden staat</li>
          <li>de opdracht verandert</li>
          <li>er extra werkzaamheden bijkomen</li>
          <li>de klant akkoord gaat met de nieuwe prijs</li>
        </ul>
        <p>
          <strong>Voorbeeld:</strong> Een schilder maakt een offerte voor het schilderen van een woonkamer. Tijdens de
          werkzaamheden blijkt dat ook herstelwerk aan de muren nodig is. De schilder kan hiervoor een aanvullende offerte
          maken.
        </p>

        <h2>Hoeveel mag een offerte afwijken?</h2>
        <p>
          Een offerte mag <strong>niet zomaar afwijken</strong> van de afspraken die je met de klant hebt gemaakt. Heeft
          de klant de offerte geaccepteerd, dan geldt de afgesproken prijs en inhoud in principe als uitgangspunt.
        </p>
        <p>Een hogere factuur kan bijvoorbeeld gerechtvaardigd zijn wanneer:</p>
        <ul>
          <li>de klant extra werkzaamheden heeft gevraagd;</li>
          <li>er meer uren of materialen nodig zijn dan vooraf ingeschat;</li>
          <li>de offerte duidelijk vermeldt dat bepaalde kosten op nacalculatie worden berekend;</li>
          <li>de klant vooraf akkoord gaat met het meerwerk.</li>
        </ul>
        <p>
          Kun je de extra kosten niet onderbouwen met de oorspronkelijke afspraken of aanvullende toestemming? Dan kan een
          hogere factuur tot discussie met de klant leiden.
        </p>
        <p>
          <strong>Voorbeeld:</strong> je offerte bedraagt €1.000. Tijdens de opdracht vraagt de klant om €250 aan extra
          werkzaamheden. Bespreek dit vooraf en leg de aanvullende kosten vast. Je kunt vervolgens een aanvullende offerte
          of duidelijke schriftelijke afspraak sturen.
        </p>

        <h2>Moet een aangepaste offerte opnieuw worden goedgekeurd?</h2>
        <p>
          <strong>Ja</strong>, als de wijziging invloed heeft op de prijs, werkzaamheden of andere belangrijke afspraken,
          is het verstandig om de aangepaste offerte opnieuw door de klant te laten goedkeuren.
        </p>
        <p>
          Stuur de nieuwe versie met een duidelijk nieuw offertenummer en vermeld dat deze de vorige offerte vervangt. Zo
          is voor beide partijen duidelijk welke afspraken gelden.
        </p>

        <h2>Fout in offerte herstellen</h2>
        <p>Een foutje in een offerte komt regelmatig voor. Denk aan:</p>
        <ul>
          <li>verkeerd btw-bedrag</li>
          <li>verkeerde prijs</li>
          <li>verkeerd aantal uren</li>
          <li>ontbrekende werkzaamheden</li>
          <li>verkeerde klantgegevens</li>
        </ul>

        <h3>Voor verzending</h3>
        <p>Controleer de offerte en pas de gegevens aan voordat je deze verstuurt.</p>

        <h3>Na verzending</h3>
        <p>
          Stuur een aangepaste versie. Vermeld bijvoorbeeld: &quot;Hierbij ontvangt u de aangepaste offerte. Deze vervangt
          de eerder verzonden versie.&quot;
        </p>

        <h3>Na akkoord</h3>
        <p>
          Bespreek de fout met de klant en maak eventueel een nieuwe afspraak of aanvullende offerte. Lees{' '}
          <Link href="/gidsen/digitale-offertes-versturen" className="text-warm-orange hover:underline">
            online offerte maken
          </Link>{' '}
          voor tips over het opnieuw versturen.
        </p>

        <h2>Offerte aanpassen of een nieuwe offerte maken?</h2>
        <p>In veel situaties is het beter om een nieuwe offerte te maken in plaats van een oude offerte te wijzigen.</p>
        <CalculationTable
          rows={[
            ['Nieuwe offerte', 'Prijs verandert, werkzaamheden veranderen, klant moet opnieuw akkoord geven'],
            ['Aanpassing', 'Je bent nog bezig met de offerte, klant heeft nog geen akkoord, kleine administratieve wijziging'],
          ]}
        />
        <p>
          Bij een nieuwe versie is een nieuw versienummer of offertenummer aan te raden, bijvoorbeeld OFF-2026-002. Zo
          houd je je administratie overzichtelijk.
        </p>
        <p>
          Is de offerte al uitgevoerd en is er daarna een fout op de factuur ontdekt? Dan gaat het om het corrigeren van
          een factuur, niet om het aanpassen van de offerte. Lees{' '}
          <Link href="/blogs/boetes-fouten-facturen" className="text-warm-orange hover:underline">
            fouten op facturen: gevolgen en corrigeren
          </Link>
          .
        </p>

        <h2>Hoe voorkom je fouten in offertes?</h2>
        <p>Met een vaste offerte-werkwijze verklein je de kans op fouten. Controleer altijd:</p>
        <ul>
          <li>zijn alle werkzaamheden duidelijk omschreven?</li>
          <li>kloppen de aantallen en prijzen?</li>
          <li>staat de btw correct vermeld?</li>
          <li>is de geldigheidsduur toegevoegd?</li>
          <li>zijn voorwaarden duidelijk?</li>
          <li>zijn de klantgegevens correct?</li>
        </ul>
        <p>
          Meer tips vind je in{' '}
          <Link href="/gidsen/offerte-maken-voor-zzper" className="text-warm-orange hover:underline">
            offerte sturen als zzp&apos;er
          </Link>{' '}
          en{' '}
          <Link href="/gidsen/wat-moet-er-op-een-offerte-staan" className="text-warm-orange hover:underline">
            wat moet er op een offerte staan
          </Link>
          . Bekijk ook een{' '}
          <Link href="/gidsen/offerte-voorbeeld" className="text-warm-orange hover:underline">
            offerte voorbeeld
          </Link>{' '}
          of{' '}
          <Link href="/offerte-template" className="text-warm-orange hover:underline">
            offerte template
          </Link>{' '}
          als startpunt.
        </p>

        <h2>Offerte aanpassen met FactuurBaas</h2>
        <p>Met FactuurBaas maak je eenvoudig een nieuwe of aangepaste offerte. Je kunt:</p>
        <ul>
          <li>je bedrijfsgegevens invullen</li>
          <li>werkzaamheden aanpassen</li>
          <li>prijzen en btw berekenen</li>
          <li>een professionele PDF downloaden</li>
          <li>na akkoord de offerte omzetten naar een factuur</li>
        </ul>
        <p>Gratis, zonder account.</p>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Open gratis offerte maker →" />

        <h2>Veelgestelde vragen</h2>
        <h3>Kan ik een offerte aanpassen nadat ik deze heb verstuurd?</h3>
        <p>
          Ja. Als de klant nog geen akkoord heeft gegeven, kun je een aangepaste versie sturen. Zorg ervoor dat duidelijk
          is welke offerte de juiste versie is.
        </p>
        <h3>Mag ik een offerte aanpassen na akkoord?</h3>
        <p>
          Niet zomaar. Na akkoord geldt de afgesproken prijs, werkzaamheden en voorwaarden in principe als uitgangspunt.
          Bespreek wijzigingen altijd eerst met de klant en leg een nieuw akkoord schriftelijk vast.
        </p>
        <h3>Kan ik een prijs verhogen na een offerte?</h3>
        <p>
          Alleen als de klant hiermee akkoord gaat of als hierover vooraf afspraken zijn gemaakt.
        </p>
        <h3>Hoeveel mag een offerte afwijken?</h3>
        <p>
          Een offerte mag niet zomaar afwijken van de gemaakte afspraken. Een hogere prijs kan gerechtvaardigd zijn bij
          extra werkzaamheden, meer uren of materialen, nacalculatie die vooraf in de offerte staat, of als de klant
          vooraf akkoord gaat met meerwerk.
        </p>
        <h3>Moet een aangepaste offerte opnieuw worden goedgekeurd?</h3>
        <p>
          Ja, als de wijziging invloed heeft op prijs, werkzaamheden of andere belangrijke afspraken. Stuur de nieuwe
          versie met een duidelijk nieuw offertenummer en vermeld dat deze de vorige offerte vervangt.
        </p>
        <h3>Wat doe ik bij een fout in mijn offerte?</h3>
        <p>
          Maak een gecorrigeerde versie en stuur deze opnieuw naar de klant. Vermeld duidelijk dat de nieuwe offerte de
          oude vervangt.
        </p>
        <h3>Moet ik een nieuw offertenummer gebruiken?</h3>
        <p>
          Bij een nieuwe versie na verzending is een nieuw nummer aan te raden, zodat je en je klant weten welke offerte
          actueel is.
        </p>

        <h2>Maak een gecorrigeerde offerte</h2>
        <p>
          Ontdekte je een fout of zijn de werkzaamheden gewijzigd? Maak een nieuwe offerte, download als PDF en verstuur
          naar je klant. Gratis en zonder account.
        </p>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Maak aangepaste offerte →" />

        <p>
          Na akkoord kun je de offerte omzetten naar een factuur. Lees{' '}
          <Link href="/gidsen/offerte-omzetten-naar-factuur" className="text-warm-orange hover:underline">
            offerte omzetten naar factuur
          </Link>{' '}
          of start met{' '}
          <Link href="/gidsen/hoe-maak-je-een-offerte" className="text-warm-orange hover:underline">
            hoe maak je een offerte
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    slug: 'welk-uurtarief-moet-ik-rekenen',
    cluster: 'uurtarief',
    seoTitle: 'Uurtarief zzp berekenen: zo bepaal je je tarief',
    title: 'Uurtarief zzp berekenen: zo bepaal je je tarief',
    excerpt:
      "Welk uurtarief moet je als zzp'er rekenen? Bereken je minimale uurtarief op basis van je kosten, gewenste inkomen en factureerbare uren.",
    keywords:
      'uurtarief zzp berekenen, welk uurtarief moet ik rekenen, minimaal uurtarief zzp, uurtarief calculator, gemiddeld uurtarief zzp, uurtarief exclusief btw, goed uurtarief zzp',
    tool: {
      href: '/tools/uurtarief-calculator',
      label: 'Bereken je uurtarief',
      ctaLabel: 'Bereken je uurtarief',
      relatedTitle: 'Uurtarief calculator',
      relatedExcerpt:
        'Bereken welk uurtarief je nodig hebt op basis van inkomen, kosten en werkuren. Gratis en zonder account.',
    },
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Factuurbaas/welk%20uur%20tarief.jpg',
      alt: 'Uurtarief zzp berekenen: zo bepaal je je tarief',
    },
    datePublished: '2026-07-31',
    dateModified: '2026-09-03',
    relatedSlugs: ['factuur-maken-zzp', 'hoeveel-geld-apart-belasting-zzper'],
    relatedGuideSlugs: [],
    faq: [
      {
        question: "Wat is een goed uurtarief voor een zzp'er?",
        answer:
          'Een goed uurtarief is hoog genoeg om je zakelijke kosten te betalen en het inkomen te ondersteunen dat je wilt bereiken. Het juiste bedrag verschilt per beroep, ervaring en persoonlijke situatie.',
      },
      {
        question: "Hoe bereken ik mijn uurtarief als zzp'er?",
        answer:
          'Een eenvoudige basis is: benodigde omzet ÷ factureerbare uren = minimaal uurtarief. Bepaal eerst hoeveel omzet je nodig hebt en schat vervolgens realistisch hoeveel uren je per maand aan klanten kunt factureren.',
      },
      {
        question: 'Wat is een normaal zzp-uurtarief?',
        answer:
          "Er is geen vast normaal uurtarief voor zzp'ers. Het tarief verschilt sterk per sector, beroep, ervaring, specialisatie en type klant.",
      },
      {
        question: "Wat is een goed uurtarief voor een startende zzp'er?",
        answer:
          'Een starter kan ervoor kiezen om met een lager tarief te beginnen om ervaring en een portfolio op te bouwen. Zorg er wel voor dat het tarief voldoende ruimte biedt voor je zakelijke kosten en dat je niet structureel onder je benodigde tarief werkt.',
      },
      {
        question: 'Moet ik mijn uurtarief inclusief of exclusief btw noemen?',
        answer:
          'Als je btw in rekening brengt, wordt een zakelijk uurtarief meestal exclusief btw gecommuniceerd. De btw wordt vervolgens afzonderlijk aan de klant in rekening gebracht.',
      },
      {
        question: 'Kan ik mijn uurtarief later verhogen?',
        answer:
          'Ja. Je kunt je tarief aanpassen wanneer je meer ervaring hebt, je specialisatie groeit, je kosten veranderen of je meer waarde voor klanten levert.',
      },
    ],
    content: (
      <>
        <p>
          Welk uurtarief moet je als zzp&apos;er rekenen? Dat hangt af van je beroep, ervaring, zakelijke kosten en het
          inkomen dat je wilt overhouden.
        </p>
        <p>
          Een tarief van €50 per uur kan voor de ene ondernemer voldoende zijn, terwijl een andere zzp&apos;er €100 of
          meer nodig heeft. Daarom is het beter om je uurtarief niet alleen te baseren op wat anderen vragen, maar eerst
          te berekenen <strong>wat jij minimaal nodig hebt</strong>.
        </p>
        <p>De basis is eenvoudig:</p>
        <p>
          <strong>Benodigde omzet ÷ factureerbare uren = minimaal uurtarief</strong>
        </p>
        <p>
          Daarna kun je je tarief aanpassen aan je ervaring, specialisatie, markt en de waarde die je voor klanten
          levert.
        </p>
        <p>
          Met de gratis{' '}
          <Link href="/tools/uurtarief-calculator" className="text-warm-orange hover:underline">
            uurtarief calculator van FactuurBaas
          </Link>{' '}
          kun je je benodigde uurtarief berekenen op basis van je eigen situatie.
        </p>

        <GuideToolCta href="/tools/uurtarief-calculator/maken" label="Bereken je uurtarief →" />

        <h2>Hoe bepaal je je uurtarief als zzp&apos;er?</h2>
        <p>
          Je uurtarief moet genoeg omzet opleveren om je zakelijke kosten te betalen en je gewenste inkomen mogelijk te
          maken.
        </p>
        <p>
          Daarnaast werk je als zzp&apos;er niet ieder uur voor een klant. Je besteedt ook tijd aan administratie,
          acquisitie, offertes, marketing, opleiding en andere werkzaamheden.
        </p>
        <p>Daarom zijn vooral deze factoren belangrijk:</p>
        <ul>
          <li>je gewenste inkomen</li>
          <li>je zakelijke kosten</li>
          <li>het aantal uren dat je werkt</li>
          <li>het aantal uren dat je daadwerkelijk kunt factureren</li>
          <li>je beroep en specialisatie</li>
          <li>je ervaring</li>
          <li>het soort klanten waarvoor je werkt</li>
        </ul>

        <h2>Uurtarief berekenen in 5 stappen</h2>

        <h3>1. Bepaal hoeveel je wilt overhouden</h3>
        <p>Begin met het inkomen dat je als ondernemer wilt bereiken.</p>
        <p>
          Bijvoorbeeld: je wilt uiteindelijk ongeveer <strong>€3.500 per maand</strong> overhouden.
        </p>
        <p>
          Je omzet hoeft dan niet €3.500 per maand te zijn. Vanuit je omzet moeten namelijk ook zakelijke kosten en
          belastingen worden betaald.
        </p>
        <p>Je benodigde omzet ligt daarom hoger dan het bedrag dat je privé wilt overhouden.</p>

        <h3>2. Bereken je zakelijke kosten</h3>
        <p>Maak een overzicht van de kosten die je als ondernemer verwacht te maken.</p>
        <p>Denk bijvoorbeeld aan:</p>
        <ul>
          <li>laptop en andere apparatuur</li>
          <li>software en abonnementen</li>
          <li>website en hosting</li>
          <li>telefoon</li>
          <li>vervoer</li>
          <li>verzekeringen</li>
          <li>administratie</li>
          <li>opleidingen</li>
          <li>marketing</li>
        </ul>
        <p>
          Stel dat je gemiddeld <strong>€500 per maand</strong> aan zakelijke kosten hebt. Dan moet je omzet voldoende
          zijn om deze kosten te betalen voordat je bepaalt wat je uiteindelijk overhoudt.
        </p>

        <h3>3. Bepaal je factureerbare uren</h3>
        <p>Dit is een van de belangrijkste onderdelen van je uurtarief.</p>
        <p>
          Een werkweek van 40 uur betekent namelijk niet dat je 40 uur aan klanten kunt factureren.
        </p>
        <p>Je hebt bijvoorbeeld ook tijd nodig voor:</p>
        <ul>
          <li>administratie</li>
          <li>offertes</li>
          <li>klantgesprekken</li>
          <li>acquisitie</li>
          <li>marketing</li>
          <li>planning</li>
          <li>opleiding</li>
          <li>vakantie en vrije dagen</li>
        </ul>
        <p>
          Stel dat je gemiddeld <strong>100 uur per maand</strong> daadwerkelijk aan klanten kunt factureren. Dan moet
          je je benodigde omzet delen door 100 en niet door alle uren die je aan je onderneming besteedt.
        </p>

        <h3>4. Bereken je minimale uurtarief</h3>
        <p>De eenvoudige basisformule is:</p>
        <p>
          <strong>Benodigde omzet ÷ factureerbare uren = uurtarief</strong>
        </p>
        <p>Stel dat je €8.000 omzet per maand nodig hebt en 100 uur kunt factureren:</p>
        <p>
          <strong>€8.000 ÷ 100 = €80 per uur</strong>
        </p>
        <p>
          Je minimale uurtarief is in dit voorbeeld dus ongeveer <strong>€80 per uur exclusief btw</strong>.
        </p>
        <p>
          Dit is een rekenkundig uitgangspunt. Je uiteindelijke tarief kan hoger liggen als je bijvoorbeeld meer waarde
          levert, gespecialiseerd werk doet of een hogere winstmarge wilt.
        </p>

        <h2>Voorbeeld: €50, €75 of €100 per uur</h2>
        <p>Het verschil tussen een uurtarief van €50 en €100 is groot.</p>
        <p>Bij 100 factureerbare uren per maand:</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[320px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">
                  Uurtarief
                </th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">
                  Factureerbare uren
                </th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">
                  Omzet per maand
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3 text-right">€50</td>
                <td className="px-4 py-3 text-right">100</td>
                <td className="px-4 py-3 text-right">€5.000</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3 text-right">€75</td>
                <td className="px-4 py-3 text-right">100</td>
                <td className="px-4 py-3 text-right">€7.500</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-right">€100</td>
                <td className="px-4 py-3 text-right">100</td>
                <td className="px-4 py-3 text-right">€10.000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Dit zijn bedragen <strong>exclusief btw</strong>.
        </p>
        <p>
          Je omzet is bovendien niet hetzelfde als je inkomen. Van je omzet betaal je onder andere je zakelijke kosten
          en belastingen. Wil je zien wat een tarief ongeveer oplevert? Gebruik dan{' '}
          <Link href="/tools/uurtarief-naar-inkomen" className="text-warm-orange hover:underline">
            uurtarief naar inkomen
          </Link>
          .
        </p>

        <h2>Wat is een goed uurtarief voor een zzp&apos;er?</h2>
        <p>Er bestaat geen universeel goed zzp-uurtarief.</p>
        <p>Een passend tarief hangt onder andere af van je beroep, ervaring en type klant.</p>

        <h3>Starter</h3>
        <p>
          Als starter heb je misschien nog weinig ervaring of een beperkt portfolio. Een lager tarief kan dan een manier
          zijn om ervaring en referenties op te bouwen.
        </p>
        <p>Dat betekent niet dat je structureel te goedkoop moet werken.</p>

        <h3>Ervaren zzp&apos;er</h3>
        <p>
          Met meer ervaring, een sterk portfolio en bewezen resultaten kun je vaak een hoger tarief onderbouwen.
        </p>

        <h3>Specialist</h3>
        <p>
          Specialistische kennis kan een hoger uurtarief rechtvaardigen, zeker wanneer er relatief weinig aanbieders
          zijn of wanneer je kennis voor de klant veel waarde heeft.
        </p>

        <h3>Zakelijke klanten</h3>
        <p>
          Het budget en de verwachtingen kunnen verschillen per type klant. Een opdracht voor een grote organisatie kan
          bijvoorbeeld een andere prijsstructuur hebben dan werk voor een kleine ondernemer of particulier.
        </p>

        <h2>Wat is het gemiddelde uurtarief van een zzp&apos;er?</h2>
        <p>Het gemiddelde uurtarief zegt niet automatisch wat jij zou moeten rekenen.</p>
        <p>
          Uurtarieven verschillen sterk per beroep en sector. Een ICT-specialist, marketeer, fotograaf, consultant en
          bouwvakker hebben bijvoorbeeld verschillende werkzaamheden, kosten en markten.
        </p>
        <p>
          Gebruik gemiddelden daarom vooral als <strong>referentie</strong>, niet als berekening van jouw eigen tarief.
        </p>
        <p>Je eigen kosten en factureerbare uren zijn belangrijker voor het bepalen van je minimale tarief.</p>

        <h2>Uurtarief voor een zzp&apos;er in de ICT</h2>
        <p>
          Voor ICT&apos;ers kunnen uurtarieven sterk verschillen afhankelijk van specialisatie en ervaring.
        </p>
        <p>
          Een junior freelancer en een ervaren specialist met specifieke technische kennis hebben bijvoorbeeld niet
          automatisch hetzelfde tarief.
        </p>
        <p>
          Kijk daarom niet alleen naar wat andere ICT-zzp&apos;ers rekenen. Bereken eerst welk tarief jij nodig hebt en
          vergelijk dat vervolgens met de markt.
        </p>

        <h2>Uurtarief inclusief of exclusief btw?</h2>
        <p>
          Als je btw-plichtig bent, vermeld je je zakelijke uurtarief meestal <strong>exclusief btw</strong>.
        </p>
        <p>Bijvoorbeeld:</p>
        <p>
          <strong>Uurtarief: €75 exclusief btw</strong>
        </p>
        <p>Bij 21% btw betaalt een klant:</p>
        <ul>
          <li>Uurtarief: €75,00</li>
          <li>BTW 21%: €15,75</li>
          <li>Totaal: €90,75</li>
        </ul>
        <p>
          De €15,75 btw is geen omzet die je zelf houdt. De btw wordt afzonderlijk op de factuur vermeld en wordt
          vervolgens verwerkt in je btw-aangifte.
        </p>
        <p>
          Niet iedere ondernemer rekent echter op dezelfde manier btw. Er kunnen bijvoorbeeld andere btw-regels of
          vrijstellingen gelden. Lees meer in{' '}
          <Link href="/gidsen/welke-btw-rekenen-zzper" className="text-warm-orange hover:underline">
            welke btw je als zzp&apos;er rekent
          </Link>
          .
        </p>

        <h2>Veelgemaakte fouten bij het bepalen van je uurtarief</h2>

        <h3>Je neemt het tarief van een concurrent over</h3>
        <p>
          Wat voor een andere zzp&apos;er werkt, hoeft niet voor jou te werken. Kosten, ervaring, aantal factureerbare
          uren en gewenste inkomsten verschillen.
        </p>

        <h3>Je rekent met alle gewerkte uren</h3>
        <p>Als je 40 uur per week werkt, kun je die 40 uur niet automatisch allemaal factureren.</p>

        <h3>Je vergeet zakelijke kosten</h3>
        <p>
          Software, apparatuur, verzekeringen, vervoer en andere kosten moeten uiteindelijk uit je omzet worden betaald.
        </p>

        <h3>Je houdt geen rekening met rustige periodes</h3>
        <p>
          Als je niet iedere week of maand volledig volgeboekt bent, moet je tarief voldoende ruimte bieden voor
          periodes met minder opdrachten.
        </p>

        <h3>Je kijkt alleen naar je inkomen</h3>
        <p>
          Je uurtarief moet eerst voldoende omzet opleveren om alle zakelijke kosten en andere financiële verplichtingen
          van je onderneming te kunnen dragen.
        </p>

        <h3>Je verhoogt je tarief nooit</h3>
        <p>
          Je ervaring, specialisatie en de waarde die je levert kunnen in de loop van de tijd groeien. Het is daarom
          verstandig je tarief regelmatig opnieuw te beoordelen.
        </p>

        <h2>Bereken je uurtarief met de gratis calculator</h2>
        <p>Wil je weten welk uurtarief bij jouw situatie past?</p>
        <p>
          Met de gratis{' '}
          <Link href="/tools/uurtarief-calculator" className="text-warm-orange hover:underline">
            uurtarief calculator van FactuurBaas
          </Link>{' '}
          kun je je tarief berekenen op basis van onder andere:
        </p>
        <ul>
          <li>gewenst inkomen</li>
          <li>zakelijke kosten</li>
          <li>werkuren</li>
          <li>factureerbare uren</li>
        </ul>
        <p>Je krijgt een indicatie van het uurtarief dat je nodig hebt.</p>

        <GuideToolCta href="/tools/uurtarief-calculator/maken" label="Bereken gratis je uurtarief →" />

        <h2>Veelgestelde vragen over uurtarieven</h2>
        <h3>Wat is een goed uurtarief voor een zzp&apos;er?</h3>
        <p>
          Een goed uurtarief is hoog genoeg om je zakelijke kosten te betalen en het inkomen te ondersteunen dat je wilt
          bereiken. Het juiste bedrag verschilt per beroep, ervaring en persoonlijke situatie.
        </p>
        <h3>Hoe bereken ik mijn uurtarief als zzp&apos;er?</h3>
        <p>Een eenvoudige basis is:</p>
        <p>
          <strong>Benodigde omzet ÷ factureerbare uren = minimaal uurtarief.</strong>
        </p>
        <p>
          Bepaal eerst hoeveel omzet je nodig hebt en schat vervolgens realistisch hoeveel uren je per maand aan klanten
          kunt factureren.
        </p>
        <h3>Wat is een normaal zzp-uurtarief?</h3>
        <p>
          Er is geen vast normaal uurtarief voor zzp&apos;ers. Het tarief verschilt sterk per sector, beroep, ervaring,
          specialisatie en type klant.
        </p>
        <h3>Wat is een goed uurtarief voor een startende zzp&apos;er?</h3>
        <p>
          Een starter kan ervoor kiezen om met een lager tarief te beginnen om ervaring en een portfolio op te bouwen.
          Zorg er wel voor dat het tarief voldoende ruimte biedt voor je zakelijke kosten en dat je niet structureel
          onder je benodigde tarief werkt.
        </p>
        <h3>Moet ik mijn uurtarief inclusief of exclusief btw noemen?</h3>
        <p>
          Als je btw in rekening brengt, wordt een zakelijk uurtarief meestal exclusief btw gecommuniceerd. De btw wordt
          vervolgens afzonderlijk aan de klant in rekening gebracht.
        </p>
        <h3>Kan ik mijn uurtarief later verhogen?</h3>
        <p>
          Ja. Je kunt je tarief aanpassen wanneer je meer ervaring hebt, je specialisatie groeit, je kosten veranderen
          of je meer waarde voor klanten levert.
        </p>

        <h2>Bereken jouw zzp-uurtarief</h2>
        <p>Weet je nog niet welk uurtarief je nodig hebt?</p>
        <p>
          Bereken eerst je benodigde omzet en factureerbare uren en gebruik daarna de gratis uurtarief calculator van
          FactuurBaas om een indicatie van je tarief te krijgen.
        </p>

        <GuideToolCta href="/tools/uurtarief-calculator/maken" label="Bereken je uurtarief →" />
      </>
    ),
  },
  {
    slug: 'deze-7-tools-zijn-heel-handig-voor-zzpers',
    cluster: 'tools',
    seoTitle: "7 handige tools voor zzp'ers | Gratis online tools",
    title: "7 handige tools voor zzp'ers",
    excerpt:
      "Ontdek 7 handige gratis tools voor zzp'ers. Maak facturen en offertes, bereken btw en je uurtarief en regel je administratie eenvoudig online.",
    keywords:
      "7 handige tools voor zzp'ers, handige tools zzp, gratis tools zzp, tools voor zzp'ers, gratis online tools zzp, factuur maken, offerte maken, btw berekenen, uurtarief berekenen",
    tool: {
      href: '/tools',
      label: 'Bekijk alle tools',
      ctaLabel: 'Open gratis tools',
      relatedTitle: 'Gratis factuur tools',
      relatedExcerpt:
        'Factuur maken, btw calculator, offerte maker en meer. Gratis en zonder account.',
    },
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/tools%20voor%20zzpers.jpg',
      alt: "7 handige tools voor zzp'ers — factuur, offerte, btw en uurtarief",
    },
    datePublished: '2026-08-03',
    dateModified: '2026-09-03',
    relatedSlugs: ['factuur-maken-zzp', 'gratis-factuur-zzp', 'factureren-zonder-account'],
    relatedGuideSlugs: [
      'welke-btw-rekenen-zzper',
      'hoe-maak-je-een-offerte',
      'welk-uurtarief-moet-ik-rekenen',
    ],
    faq: [
      {
        question: "Welke tools zijn handig voor zzp'ers?",
        answer:
          'Voor je administratie zijn een factuurmaker, offerte maker, btw-calculator, uurtariefcalculator, factuurnummergenerator, betaaltermijncalculator en KOR-calculator het handigst. Die vind je gratis bij FactuurBaas.',
      },
      {
        question: 'Heb ik een account nodig om deze tools te gebruiken?',
        answer:
          'Nee. Je kunt facturen, offertes en calculators direct online gebruiken zonder account. Wil je facturen opslaan, dan kun je optioneel inloggen.',
      },
      {
        question: "Zijn deze 7 tools voor zzp'ers echt gratis?",
        answer:
          'Ja. De tools op FactuurBaas zijn gratis te gebruiken. Je downloadt facturen en offertes direct als PDF.',
      },
      {
        question: 'Welke tool gebruik ik het eerst als ik net start als zzp\'er?',
        answer:
          'Begin meestal met de factuurmaker. Heb je een nieuwe opdracht, start dan met de offerte maker. Voor tarieven en btw gebruik je de calculators.',
      },
    ],
    content: (
      <>
        <p>
          Als zzp&apos;er wil je je administratie waarschijnlijk zo eenvoudig mogelijk houden. Een factuur maken, een
          offerte opstellen, je btw berekenen of bepalen welk uurtarief je nodig hebt: het zijn kleine taken, maar
          samen kunnen ze behoorlijk wat tijd kosten.
        </p>
        <p>
          Daarom hebben we 7 handige gratis tools voor zzp&apos;ers verzameld. Je kunt ze direct online gebruiken,
          zonder ingewikkelde software of lange installatie.
        </p>

        <GuideToolCta href="/tools" label="Bekijk alle gratis tools →" />

        <h2>1. Factuur maken</h2>
        <p>
          Een professionele factuur maken hoeft niet ingewikkeld te zijn. Met een{' '}
          <Link href="/tools/factuur-maken" className="text-warm-orange hover:underline">
            online factuurmaker
          </Link>{' '}
          vul je je bedrijfsgegevens, klantgegevens, factuurregels en btw in en maak je snel een duidelijke factuur.
        </p>
        <p>
          Met de gratis FactuurBaas factuurmaker kun je direct een factuur maken en als PDF downloaden. Je kunt daarbij
          verschillende btw-tarieven gebruiken, zoals 0%, 9% en 21%.
        </p>
        <p>
          <strong>Handig voor:</strong> zzp&apos;ers die snel een factuur willen maken zonder een uitgebreid
          boekhoudprogramma.
        </p>
        <GuideToolCta href="/tools/factuur-maken" label="Gratis factuur maken →" />

        <h2>2. Offerte maken</h2>
        <p>
          Voordat je een opdracht uitvoert, wil je je klant natuurlijk eerst een duidelijke offerte kunnen sturen. Een
          goede offerte maakt inzichtelijk wat je gaat leveren, hoeveel het kost en welke voorwaarden gelden.
        </p>
        <p>
          Met een{' '}
          <Link href="/tools/offerte-maker" className="text-warm-orange hover:underline">
            online offerte maker
          </Link>{' '}
          kun je eenvoudig een professionele offerte opstellen. Zo hoef je niet iedere keer zelf een document vanaf nul
          te maken.
        </p>
        <p>
          <strong>Handig voor:</strong> zzp&apos;ers die regelmatig nieuwe klanten of opdrachten binnenhalen.
        </p>
        <GuideToolCta href="/tools/offerte-maker" label="Gratis offerte maken →" />

        <h2>3. Btw berekenen</h2>
        <p>
          Btw berekenen is een van de meest voorkomende administratieve taken voor ondernemers. Vooral wanneer je
          bedragen inclusief en exclusief btw wilt omrekenen, is een snelle calculator handig.
        </p>
        <p>
          Met een{' '}
          <Link href="/tools/btw-calculator" className="text-warm-orange hover:underline">
            btw-calculator
          </Link>{' '}
          kun je bijvoorbeeld berekenen hoeveel 21% of 9% btw over een bedrag is en wat het bedrag inclusief of
          exclusief btw wordt.
        </p>
        <p>
          <strong>Handig voor:</strong> iedere zzp&apos;er die snel btw wil berekenen zonder zelf met percentages te
          rekenen.
        </p>
        <GuideToolCta href="/tools/btw-calculator" label="Btw berekenen met de gratis btw-calculator →" />

        <h2>4. Uurtarief berekenen</h2>
        <p>Wat moet je als zzp&apos;er eigenlijk per uur verdienen?</p>
        <p>
          Je uurtarief hangt niet alleen af van wat je netto wilt overhouden. Je moet ook rekening houden met belasting,
          vakantiedagen, pensioen, verzekeringen, zakelijke kosten en het aantal uren dat je daadwerkelijk kunt
          factureren.
        </p>
        <p>
          Met een{' '}
          <Link href="/tools/uurtarief-calculator" className="text-warm-orange hover:underline">
            uurtariefcalculator
          </Link>{' '}
          kun je daarom beter inschatten welk tarief bij jouw gewenste inkomen past.
        </p>
        <p>
          <strong>Handig voor:</strong> startende zzp&apos;ers en ondernemers die hun huidige uurtarief opnieuw willen
          bepalen.
        </p>
        <GuideToolCta href="/tools/uurtarief-calculator" label="Bereken je uurtarief →" />

        <h2>5. Factuurnummer genereren</h2>
        <p>
          Elke factuur heeft een uniek factuurnummer nodig. Als je net begint als zzp&apos;er kan het lastig zijn om een
          logische nummering te kiezen.
        </p>
        <p>
          Een eenvoudige nummering, bijvoorbeeld 2026-001, 2026-002 en 2026-003, maakt je administratie overzichtelijk.
        </p>
        <p>
          Met een{' '}
          <Link href="/tools/factuurnummer-generator" className="text-warm-orange hover:underline">
            factuurnummergenerator
          </Link>{' '}
          kun je snel een geschikt factuurnummer genereren.
        </p>
        <p>
          <strong>Handig voor:</strong> startende ondernemers die een eenvoudige en overzichtelijke factuurnummering
          willen gebruiken.
        </p>
        <GuideToolCta href="/tools/factuurnummer-generator" label="Genereer een factuurnummer →" />

        <h2>6. Betaaltermijn berekenen</h2>
        <p>Wanneer moet je klant een factuur uiterlijk betalen?</p>
        <p>
          Bij een betaaltermijn van bijvoorbeeld 14 of 30 dagen kan het handig zijn om direct de uiterste betaaldatum te
          berekenen. Zo weet je wanneer je betaling verwacht en wanneer je eventueel een herinnering kunt sturen.
        </p>
        <p>
          Met een{' '}
          <Link href="/tools/betaaltermijn-calculator" className="text-warm-orange hover:underline">
            betaaltermijncalculator
          </Link>{' '}
          bereken je eenvoudig de vervaldatum van een factuur.
        </p>
        <p>
          <strong>Handig voor:</strong> zzp&apos;ers die hun facturen en openstaande betalingen overzichtelijk willen
          bijhouden.
        </p>
        <GuideToolCta href="/tools/betaaltermijn-calculator" label="Bereken een betaaltermijn →" />

        <h2>7. KOR calculator</h2>
        <p>
          De kleineondernemersregeling (KOR) kan interessant zijn voor bepaalde ondernemers met een relatief lage
          omzet. Als je aan de voorwaarden voldoet, hoef je onder de KOR in principe geen btw aan klanten in rekening te
          brengen.
        </p>
        <p>
          Of de KOR interessant voor je is, hangt echter van je persoonlijke en zakelijke situatie af. Een calculator
          kan daarom vooral helpen om snel een eerste inschatting te maken.
        </p>
        <p>
          Met de{' '}
          <Link href="/tools/kor-calculator" className="text-warm-orange hover:underline">
            KOR-calculator
          </Link>{' '}
          kun je bekijken hoe je verwachte omzet zich verhoudt tot de omzetgrens van de regeling.
        </p>
        <p>
          <strong>Handig voor:</strong> zzp&apos;ers en kleine ondernemers die willen onderzoeken of de KOR mogelijk
          relevant voor hen is.
        </p>
        <p>
          Let op: een calculator geeft alleen een indicatie. Controleer altijd de actuele voorwaarden bij de{' '}
          <a
            href="https://www.belastingdienst.nl"
            className="text-warm-orange hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Belastingdienst
          </a>
          .
        </p>
        <GuideToolCta href="/tools/kor-calculator" label="Gebruik de KOR calculator →" />

        <h2>Extra handige calculators voor zzp&apos;ers</h2>
        <p>
          Naast deze 7 tools zijn er nog andere calculators die handig kunnen zijn wanneer je je administratie of
          financiële planning wilt verbeteren.
        </p>

        <h3>Van uurtarief naar inkomen</h3>
        <p>
          Benieuwd wat een bepaald uurtarief ongeveer betekent voor je inkomen? Met deze calculator kun je verschillende
          scenario&apos;s naast elkaar zetten.
        </p>
        <p>
          <Link href="/tools/uurtarief-naar-inkomen" className="text-warm-orange hover:underline">
            Bereken je inkomen op basis van je uurtarief
          </Link>
        </p>

        <h3>Marge berekenen</h3>
        <p>
          Verkoop je producten of diensten en wil je weten hoeveel marge je overhoudt? Met een margecalculator kun je
          snel je verkoopprijs, inkoopprijs en marge met elkaar vergelijken.
        </p>
        <p>
          <Link href="/tools/marge-calculator" className="text-warm-orange hover:underline">
            Bereken je marge
          </Link>
        </p>

        <h2>Waarom online tools handig zijn voor zzp&apos;ers</h2>
        <p>
          Als zzp&apos;er hoef je niet voor iedere kleine berekening een uitgebreid boekhoudprogramma te openen. Voor
          veel dagelijkse taken is een eenvoudige online tool voldoende.
        </p>
        <p>
          Een calculator kan je helpen om snel een bedrag uit te rekenen. Een factuurmaker helpt je een professionele
          factuur op te stellen. En met een offerte maker kun je een nieuwe opdracht netjes aan je klant presenteren.
        </p>
        <p>Het voordeel is vooral dat je deze tools direct kunt gebruiken wanneer je ze nodig hebt.</p>

        <h2>Alle gratis zzp-tools op één plek</h2>
        <p>
          Wil je meer van dit soort hulpmiddelen gebruiken? Bekijk dan alle{' '}
          <Link href="/tools" className="text-warm-orange hover:underline">
            gratis tools van FactuurBaas
          </Link>
          .
        </p>
        <p>
          Van facturen en offertes tot btw, uurtarieven en andere berekeningen: de tools zijn gemaakt om de
          administratie van zzp&apos;ers zo eenvoudig mogelijk te maken.
        </p>
        <GuideToolCta href="/tools" label="Bekijk alle gratis tools voor zzp'ers →" />
      </>
    ),
  },
  {
    slug: 'zelf-boekhouden-zzp',
    cluster: 'boekhouden',
    seoTitle: "Zelf boekhouden als zzp'er: zo pak je het aan",
    title: "Zelf boekhouden als zzp'er: zo pak je het aan",
    excerpt:
      "Zelf boekhouden als zzp'er? Lees wat je moet bijhouden, hoe je omgaat met facturen, kosten, btw en inkomstenbelasting en wanneer software handig is.",
    keywords:
      "zelf boekhouden zzp, zelf boekhouden als zzp'er, boekhouding zelf doen zzp, boekhouding zzp zelf doen, zelf administratie doen zzp",
    tool: {
      href: '/tools/boekhoudprogramma-check',
      label: 'Doe de boekhoudprogramma-check',
      ctaLabel: 'Doe de boekhoudprogramma-check',
      relatedTitle: 'Boekhoudprogramma-check',
      relatedExcerpt:
        "Ontdek welk type boekhoudprogramma bij jouw zzp-administratie past. Gratis, 8 korte vragen, geen account nodig.",
    },
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Blogs/Zelf%20boekhouden%20als%20zzp.jpg',
      alt: "Zelf boekhouden als zzp'er: zo pak je het aan",
    },
    datePublished: '2026-09-05',
    dateModified: '2026-09-05',
    relatedSlugs: [
      'wanneer-boekhoudsoftware-nodig-zzp',
      'gratis-factuurtool-vs-boekhoudprogramma',
      'beste-boekhoudprogramma-zzp',
      'zakelijke-rekening-zzp',
    ],
    relatedGuideSlugs: ['boekhouding-zzp', 'kosten-boekhoudprogramma-zzp', 'gratis-boekhoudprogramma-zzp'],
    faq: [
      {
        question: "Kan ik als zzp'er zelf mijn boekhouding doen?",
        answer:
          'Ja. Je kunt je administratie zelf bijhouden. Je bent niet verplicht om een boekhouder in te schakelen. Wel moet je ervoor zorgen dat je administratie goed wordt bijgehouden en dat je aan je fiscale verplichtingen voldoet.',
      },
      {
        question: "Is boekhouden moeilijk als zzp'er?",
        answer:
          'Dat hangt af van je situatie. Een zzp\'er met weinig klanten en weinig kosten heeft meestal een veel eenvoudigere administratie dan iemand met veel transacties en verschillende soorten kosten.',
      },
      {
        question: 'Kan ik mijn boekhouding in Excel doen?',
        answer:
          'Dat kan bij een eenvoudige administratie een praktische oplossing zijn. Naarmate je administratie groeit, kan een boekhoudprogramma handiger worden vanwege automatisering en overzicht.',
      },
      {
        question: "Heb ik als zzp'er een boekhoudprogramma nodig?",
        answer:
          'Niet per se. Een boekhoudprogramma is een hulpmiddel. Als je administratie klein en overzichtelijk is, kun je deze ook op een andere manier bijhouden.',
      },
      {
        question: 'Is een factuurprogramma hetzelfde als een boekhoudprogramma?',
        answer:
          'Nee. Een factuurprogramma richt zich vooral op het maken van verkoopfacturen. Een boekhoudprogramma is bedoeld voor een bredere administratie, zoals inkomsten, kosten, banktransacties en btw.',
      },
      {
        question: 'Wanneer moet ik een boekhouder nemen?',
        answer:
          'Dat is afhankelijk van je administratie en hoeveel je zelf wilt doen. Een boekhouder kan interessant zijn als je weinig tijd of kennis hebt, je administratie complex wordt of je professionele controle wilt.',
      },
      {
        question: "Hoeveel kost een boekhouder voor een zzp'er?",
        answer:
          'De kosten verschillen sterk per boekhouder en per hoeveelheid werk. Vraag daarom offertes op basis van jouw administratie in plaats van uit te gaan van één vast bedrag.',
      },
    ],
    content: (
      <>
        <p>
          Kun je als zzp&apos;er zelf je boekhouding doen? <strong>Ja.</strong> Voor veel zzp&apos;ers is het prima
          mogelijk om de administratie zelf bij te houden.
        </p>
        <p>
          Je hoeft niet automatisch een boekhouder in te huren en je hoeft ook niet direct een uitgebreid
          boekhoudprogramma te nemen. Wel moet je weten{' '}
          <strong>wat je moet bijhouden, welke gegevens je moet bewaren en wanneer je aangifte moet doen</strong>.
        </p>
        <p>
          In dit artikel lees je stap voor stap hoe je je boekhouding als zzp&apos;er zelf kunt doen, wat je nodig hebt
          en wanneer het verstandig kan zijn om software of een boekhouder in te schakelen.
        </p>

        <h2>Kun je als zzp&apos;er zelf je boekhouding doen?</h2>
        <p>Ja. Je mag als zzp&apos;er zelf je administratie bijhouden.</p>
        <p>
          Dat betekent niet dat je administratie vrijblijvend is. Je moet je zakelijke administratie goed bijhouden en
          kunnen onderbouwen met bijvoorbeeld facturen, bonnetjes en andere bewijsstukken.
        </p>
        <p>
          Wat je precies moet bijhouden en hoe uitgebreid je administratie is, hangt onder andere af van je
          onderneming, je inkomsten, je kosten en je btw-situatie.
        </p>
        <p>
          Voor een zzp&apos;er met een paar klanten en weinig kosten kan de administratie relatief eenvoudig zijn. Heb
          je veel klanten, kosten en transacties, dan wordt het al snel uitgebreider.
        </p>

        <h2>Wat moet je als zzp&apos;er bijhouden?</h2>
        <p>Een goede basisadministratie bestaat onder andere uit:</p>
        <ul>
          <li>
            <strong>verkoopfacturen</strong> die je naar klanten stuurt;
          </li>
          <li>
            <strong>inkoopfacturen</strong> en bonnetjes van zakelijke kosten;
          </li>
          <li>
            <strong>banktransacties</strong>;
          </li>
          <li>
            je <strong>btw-administratie</strong>, als je btw in rekening brengt;
          </li>
          <li>
            gegevens die nodig zijn voor je <strong>inkomstenbelasting</strong>;
          </li>
          <li>afspraken en andere zakelijke documenten die onderdeel zijn van je administratie.</li>
        </ul>
        <p>
          Het doel is dat je achteraf kunt zien waar je omzet vandaan komt, welke zakelijke kosten je hebt gemaakt en
          hoe je onderneming ervoor staat.
        </p>

        <h2>1. Houd je verkoopfacturen bij</h2>
        <p>Iedere keer dat je een klant factureert, moet je een administratie van die factuur hebben.</p>
        <p>Bewaar daarom bijvoorbeeld:</p>
        <ul>
          <li>factuurnummer;</li>
          <li>factuurdatum;</li>
          <li>klantgegevens;</li>
          <li>omschrijving van je werkzaamheden of producten;</li>
          <li>bedragen;</li>
          <li>btw;</li>
          <li>betaalstatus;</li>
          <li>en de uiteindelijke betaling.</li>
        </ul>
        <p>
          Gebruik bij voorkeur een consequente nummering voor je facturen. Zo houd je makkelijk overzicht over welke
          facturen je hebt gemaakt.
        </p>
        <p>
          Met{' '}
          <Link href="/create-invoice" className="text-warm-orange hover:underline">
            FactuurBaas
          </Link>{' '}
          kun je gratis online een professionele factuur maken. Je hebt daarvoor geen account nodig. Je downloadt de
          factuur als PDF en verstuurt deze zelf naar je klant.
        </p>
        <GuideToolCta href="/create-invoice" label="Maak gratis een factuur →" />

        <h2>2. Bewaar je zakelijke kosten</h2>
        <p>Niet alleen je inkomsten zijn belangrijk. Ook zakelijke uitgaven horen bij je administratie.</p>
        <p>Denk bijvoorbeeld aan:</p>
        <ul>
          <li>softwareabonnementen;</li>
          <li>telefoon en internet;</li>
          <li>kantoorbenodigdheden;</li>
          <li>zakelijke reiskosten;</li>
          <li>apparatuur;</li>
          <li>opleidingen;</li>
          <li>zakelijke diensten;</li>
          <li>en andere kosten die met je onderneming te maken hebben.</li>
        </ul>
        <p>Bewaar de bijbehorende facturen en bonnetjes.</p>
        <p>
          Het is handig om zakelijke en privé-uitgaven zoveel mogelijk gescheiden te houden. Een aparte{' '}
          <Link href="/blogs/zakelijke-rekening-zzp" className="text-warm-orange hover:underline">
            zakelijke bankrekening
          </Link>{' '}
          kan daarbij helpen, ook als je situatie dat niet per se verplicht stelt.
        </p>

        <h2>3. Houd je banktransacties bij</h2>
        <p>Je bankrekening vormt een belangrijk onderdeel van je administratie.</p>
        <p>Je moet kunnen verklaren welke bedragen je ontvangt en betaalt.</p>
        <p>Bijvoorbeeld:</p>
        <p>
          <strong>€1.210 ontvangen van klant → betaling van factuur</strong>
        </p>
        <p>of:</p>
        <p>
          <strong>€121 betaald aan softwareleverancier → zakelijke kosten</strong>
        </p>
        <p>
          Bij een kleine administratie kun je dit zelf overzichtelijk bijhouden. Heb je iedere maand tientallen of
          honderden transacties, dan wordt handmatig verwerken steeds minder aantrekkelijk.
        </p>
        <p>Daar kan een boekhoudprogramma met een bankkoppeling veel werk besparen.</p>

        <h2>4. Houd je btw bij</h2>
        <p>Ben je btw-plichtig, dan moet je je btw-administratie bijhouden.</p>
        <p>
          Bij je verkoopfacturen registreer je bijvoorbeeld hoeveel btw je aan klanten in rekening hebt gebracht. Bij
          zakelijke kosten kan er onder voorwaarden sprake zijn van aftrekbare voorbelasting.
        </p>
        <p>Je administratie moet uiteindelijk aansluiten op je btw-aangifte.</p>
        <p>
          Hoe vaak je btw-aangifte moet doen, hangt af van je situatie. Veel ondernemers doen dit per kwartaal.
        </p>
        <p>
          <strong>Let op:</strong> de regels rondom btw en aftrek kunnen afhankelijk zijn van het soort kosten, de
          klant, het land en je situatie. Controleer bij twijfel de actuele informatie van de Belastingdienst of vraag
          advies aan een deskundige.
        </p>

        <h2>5. Houd rekening met je inkomstenbelasting</h2>
        <p>
          Naast je btw-administratie krijg je als zzp&apos;er te maken met de aangifte inkomstenbelasting.
        </p>
        <p>
          Daarbij zijn niet alleen je facturen belangrijk. Ook je zakelijke kosten en andere gegevens uit je
          administratie kunnen van belang zijn.
        </p>
        <p>
          Een eenvoudige administratie waarin je omzet en kosten goed zijn bijgehouden, maakt het aan het einde van het
          jaar een stuk makkelijker om je aangifte voor te bereiden.
        </p>
        <p>
          Een boekhouder kan je hierbij helpen als je niet zeker weet welke gegevens voor jouw situatie van toepassing
          zijn.
        </p>

        <h2>6. Bewaar je administratie goed</h2>
        <p>Je administratie bestaat uit meer dan alleen je boekhoudprogramma.</p>
        <p>Denk ook aan:</p>
        <ul>
          <li>facturen;</li>
          <li>bonnetjes;</li>
          <li>bankgegevens;</li>
          <li>contracten;</li>
          <li>urenregistratie als die relevant is;</li>
          <li>zakelijke correspondentie;</li>
          <li>en andere documenten die bij je onderneming horen.</li>
        </ul>
        <p>Bewaar je administratie op een manier waarop je gegevens later makkelijk kunt terugvinden.</p>
        <p>
          De Belastingdienst hanteert bewaartermijnen voor administratieve gegevens. Voor veel basisgegevens geldt een
          bewaartermijn van zeven jaar, maar voor bepaalde gegevens kunnen andere regels gelden.
        </p>

        <h2>Hoe doe je zelf je boekhouding?</h2>
        <p>Je kunt je administratie op verschillende manieren organiseren.</p>

        <h3>Optie 1: Excel of spreadsheet</h3>
        <p>Bij een kleine onderneming kun je inkomsten en kosten bijvoorbeeld in een spreadsheet bijhouden.</p>
        <p>
          <strong>Voordelen:</strong>
        </p>
        <ul>
          <li>goedkoop;</li>
          <li>flexibel;</li>
          <li>je bepaalt zelf de indeling;</li>
          <li>geschikt voor een eenvoudige administratie.</li>
        </ul>
        <p>
          <strong>Nadelen:</strong>
        </p>
        <ul>
          <li>veel moet je zelf invoeren;</li>
          <li>meer kans op handmatige fouten;</li>
          <li>minder automatisering;</li>
          <li>btw en rapportages moet je zelf goed organiseren;</li>
          <li>het kan snel onoverzichtelijk worden als je onderneming groeit.</li>
        </ul>
        <p>
          Excel kan dus prima werken voor een eenvoudige administratie, maar is niet automatisch de beste oplossing
          zodra je veel transacties krijgt.
        </p>

        <h3>Optie 2: Factuurtool + eigen administratie</h3>
        <p>
          Je kunt je facturen met een eenvoudige factuurtool maken en je overige administratie zelf bijhouden.
        </p>
        <p>
          Dit kan interessant zijn als je vooral professionele facturen nodig hebt en verder weinig administratie hebt.
        </p>
        <p>Bijvoorbeeld:</p>
        <p>
          <strong>FactuurBaas → verkoopfacturen</strong>
        </p>
        <p>
          <strong>Excel/eigen administratie → inkomsten en kosten</strong>
        </p>
        <p>Dit kan voor een startende zzp&apos;er een eenvoudige manier zijn om te beginnen.</p>

        <h3>Optie 3: Boekhoudprogramma</h3>
        <p>Een boekhoudprogramma brengt meer van je administratie bij elkaar.</p>
        <p>Afhankelijk van het programma kun je bijvoorbeeld werken met:</p>
        <ul>
          <li>verkoopfacturen;</li>
          <li>inkoopfacturen;</li>
          <li>kosten;</li>
          <li>banktransacties;</li>
          <li>btw;</li>
          <li>financiële overzichten;</li>
          <li>en automatische verwerking.</li>
        </ul>
        <p>Het voordeel is vooral dat je minder handmatig hoeft te doen.</p>
        <p>Wil je weten of je voor jouw situatie eigenlijk een boekhoudprogramma nodig hebt?</p>
        <GuideToolCta href="/tools/boekhoudprogramma-check" label="Doe de boekhoudprogramma-check →" />

        <h2>Wat is de beste manier om zelf te boekhouden?</h2>
        <p>Er is geen methode die voor iedere zzp&apos;er het beste is.</p>
        <p>Een eenvoudige manier kan bijvoorbeeld zijn:</p>
        <p>
          <strong>
            Facturen maken → facturen bewaren → inkomsten en kosten bijhouden → btw bijhouden → administratie
            controleren → aangiftes doen
          </strong>
        </p>
        <p>Het belangrijkste is dat je administratie consequent wordt bijgehouden.</p>
        <p>
          Wacht niet tot het einde van het jaar om alles bij elkaar te zoeken. Een paar minuten of een uurtje
          administratie per week of maand kan veel werk achteraf voorkomen.
        </p>

        <h2>Een eenvoudige maandelijkse routine</h2>
        <p>Een praktische routine kan er bijvoorbeeld zo uitzien:</p>

        <h3>Iedere keer dat je factureert</h3>
        <p>Maak de factuur en bewaar een kopie.</p>

        <h3>Iedere keer dat je iets zakelijks koopt</h3>
        <p>Bewaar de factuur of bon en noteer de kosten in je administratie.</p>

        <h3>Een keer per week of maand</h3>
        <p>Controleer je banktransacties en werk je administratie bij.</p>

        <h3>Voor je btw-aangifte</h3>
        <p>Controleer je verkoopfacturen, zakelijke kosten en btw-bedragen.</p>

        <h3>Aan het einde van het jaar</h3>
        <p>
          Controleer of je administratie compleet is en verzamel de gegevens die je nodig hebt voor je
          inkomstenbelasting.
        </p>
        <p>
          Hoe vaak je bepaalde handelingen moet uitvoeren, hangt af van je situatie. Het belangrijkste is dat je
          administratie gedurende het jaar bijgehouden wordt.
        </p>

        <h2>Wat zijn de voordelen van zelf boekhouden?</h2>
        <p>Zelf je boekhouding doen heeft een aantal duidelijke voordelen.</p>

        <h3>Je bespaart geld</h3>
        <p>Je hoeft niet voor iedere administratieve handeling een boekhouder te betalen.</p>

        <h3>Je weet wat er in je bedrijf gebeurt</h3>
        <p>
          Omdat je zelf je inkomsten en uitgaven verwerkt, krijg je directer inzicht in je financiële situatie.
        </p>

        <h3>Je houdt controle</h3>
        <p>Je weet waar je administratie staat en kunt zelf je cijfers controleren.</p>

        <h3>Je kunt software gebruiken zonder alles uit te besteden</h3>
        <p>
          Je hoeft niet te kiezen tussen volledig zelf doen en alles aan een boekhouder geven. Je kunt software
          gebruiken om het werk eenvoudiger te maken en alleen bepaalde onderdelen uitbesteden.
        </p>

        <h2>Wat zijn de nadelen van zelf boekhouden?</h2>
        <p>Er zijn ook nadelen.</p>

        <h3>Het kost tijd</h3>
        <p>
          Administratie hoort nu eenmaal bij ondernemen. Iedere factuur, kostenpost en banktransactie moet worden
          verwerkt.
        </p>

        <h3>Je moet weten wat je doet</h3>
        <p>
          Een fout in je administratie kan gevolgen hebben voor bijvoorbeeld je btw-aangifte of inkomstenbelasting.
        </p>

        <h3>Je moet het blijven bijhouden</h3>
        <p>Een administratie die maanden blijft liggen, wordt snel een vervelend en tijdrovend project.</p>

        <h3>Je mist mogelijk fiscale kennis</h3>
        <p>
          Een boekhouder kan niet alleen cijfers verwerken, maar ook meedenken over fiscale en financiële
          vraagstukken.
        </p>
        <p>
          Daarom is zelf boekhouden vooral aantrekkelijk als je administratie overzichtelijk is en je bereid bent om
          er tijd in te steken.
        </p>

        <h2>Wanneer is een boekhoudprogramma handig?</h2>
        <p>Je hoeft niet automatisch een boekhoudprogramma te gebruiken omdat je zzp&apos;er bent.</p>
        <p>Het wordt vooral interessant wanneer je administratie groeit.</p>
        <p>Bijvoorbeeld wanneer:</p>
        <ul>
          <li>je steeds meer facturen verstuurt;</li>
          <li>je veel zakelijke kosten hebt;</li>
          <li>je veel bonnetjes moet verwerken;</li>
          <li>je tientallen of honderden banktransacties hebt;</li>
          <li>je een bankkoppeling wilt;</li>
          <li>je btw-overzicht wilt automatiseren;</li>
          <li>je inzicht wilt in omzet, kosten en resultaat;</li>
          <li>of je steeds meer tijd kwijt bent aan administratie.</li>
        </ul>
        <p>Een belangrijk verschil is dus:</p>
        <p>
          <strong>Zelf boekhouden</strong> betekent niet noodzakelijk <strong>alles handmatig doen</strong>.
        </p>
        <p>
          Je kunt prima zelf verantwoordelijk zijn voor je administratie en ondertussen software gebruiken om het werk
          te automatiseren.
        </p>
        <GuideToolCta
          href="/tools/boekhoudprogramma-check"
          label="Ontdek welk boekhoudprogramma bij jouw situatie past →"
        />

        <h2>Wanneer is een boekhouder verstandig?</h2>
        <p>Een boekhouder is niet alleen voor grote bedrijven.</p>
        <p>Ook als zzp&apos;er kan het handig zijn om een boekhouder in te schakelen wanneer je:</p>
        <ul>
          <li>weinig tijd hebt;</li>
          <li>boekhouden lastig vindt;</li>
          <li>een complexere administratie hebt;</li>
          <li>veel fiscale vragen hebt;</li>
          <li>internationale klanten of transacties hebt;</li>
          <li>of gewoon zekerheid wilt dat je administratie goed wordt verwerkt.</li>
        </ul>
        <p>Je kunt ook voor een tussenweg kiezen.</p>
        <p>Bijvoorbeeld:</p>
        <p>
          <strong>Zelf de dagelijkse administratie doen + boekhouder voor controle</strong>
        </p>
        <p>Of:</p>
        <p>
          <strong>Zelf facturen en kosten verwerken + boekhouder voor bepaalde aangiftes</strong>
        </p>
        <p>
          Zo houd je een deel van de kosten laag terwijl je wel professionele hulp hebt waar dat nodig is.
        </p>

        <h2>Zelf boekhouden of uitbesteden?</h2>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[36rem] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col" />
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Zelf doen
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Uitbesteden
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Kosten', 'Lager', 'Hoger'],
                ['Tijd', 'Meer', 'Minder'],
                ['Controle', 'Hoog', 'Lager'],
                ['Eigen kennis nodig', 'Ja', 'Minder'],
                ['Flexibiliteit', 'Hoog', 'Afhankelijk van boekhouder'],
                ['Geschikt voor eenvoudige administratie', 'Vaak', 'Kan, maar niet altijd nodig'],
                ['Geschikt voor complexe administratie', 'Niet altijd', 'Vaak interessanter'],
              ].map(([label, zelf, uitbesteden]) => (
                <tr key={label} className="border-b border-slate-100">
                  <td className="px-4 py-3 font-medium text-slate-800">{label}</td>
                  <td className="px-4 py-3">{zelf}</td>
                  <td className="px-4 py-3">{uitbesteden}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>Voor een eenvoudige onderneming kan zelf boekhouden een prima keuze zijn.</p>
        <p>
          Wordt je administratie complexer of kost het je steeds meer tijd? Dan kan uitbesteden aantrekkelijker worden.
        </p>

        <h2>Wanneer moet je overstappen?</h2>
        <p>
          Er is geen vast moment waarop iedere zzp&apos;er van Excel naar een boekhoudprogramma moet overstappen.
        </p>
        <p>Een goede reden om over te stappen is wanneer je merkt dat:</p>
        <blockquote>
          <p>
            <strong>je meer tijd besteedt aan het bijhouden van je administratie dan je zou willen.</strong>
          </p>
        </blockquote>
        <p>
          Ook veel transacties, meerdere soorten inkomsten, veel zakelijke kosten of behoefte aan automatisering zijn
          duidelijke signalen.
        </p>
        <p>Wil je weten welke oplossing bij jouw situatie past?</p>
        <GuideToolCta href="/tools/boekhoudprogramma-check" label="Doe de boekhoudprogramma-check →" />
        <p>
          De check kijkt onder andere naar je aantal facturen, zakelijke kosten, banktransacties, behoefte aan
          automatisering en hoeveel van je administratie je zelf wilt doen.
        </p>

        <h2>Veelgestelde vragen</h2>
        <h3>Kan ik als zzp&apos;er zelf mijn boekhouding doen?</h3>
        <p>
          Ja. Je kunt je administratie zelf bijhouden. Je bent niet verplicht om een boekhouder in te schakelen. Wel
          moet je ervoor zorgen dat je administratie goed wordt bijgehouden en dat je aan je fiscale verplichtingen
          voldoet.
        </p>
        <h3>Is boekhouden moeilijk als zzp&apos;er?</h3>
        <p>
          Dat hangt af van je situatie. Een zzp&apos;er met weinig klanten en weinig kosten heeft meestal een veel
          eenvoudigere administratie dan iemand met veel transacties en verschillende soorten kosten.
        </p>
        <h3>Kan ik mijn boekhouding in Excel doen?</h3>
        <p>
          Dat kan bij een eenvoudige administratie een praktische oplossing zijn. Naarmate je administratie groeit, kan
          een boekhoudprogramma handiger worden vanwege automatisering en overzicht.
        </p>
        <h3>Heb ik als zzp&apos;er een boekhoudprogramma nodig?</h3>
        <p>
          Niet per se. Een boekhoudprogramma is een hulpmiddel. Als je administratie klein en overzichtelijk is, kun je
          deze ook op een andere manier bijhouden.
        </p>
        <p>
          <Link href="/blogs/wanneer-boekhoudsoftware-nodig-zzp" className="text-warm-orange hover:underline">
            Lees wanneer een boekhoudprogramma interessant wordt →
          </Link>
        </p>
        <h3>Is een factuurprogramma hetzelfde als een boekhoudprogramma?</h3>
        <p>
          Nee. Een factuurprogramma richt zich vooral op het maken van verkoopfacturen. Een boekhoudprogramma is
          bedoeld voor een bredere administratie, zoals inkomsten, kosten, banktransacties en btw.
        </p>
        <p>
          <Link
            href="/blogs/gratis-factuurtool-vs-boekhoudprogramma"
            className="text-warm-orange hover:underline"
          >
            Bekijk het verschil tussen een factuurprogramma en boekhoudprogramma →
          </Link>
        </p>
        <h3>Wanneer moet ik een boekhouder nemen?</h3>
        <p>
          Dat is afhankelijk van je administratie en hoeveel je zelf wilt doen. Een boekhouder kan interessant zijn als
          je weinig tijd of kennis hebt, je administratie complex wordt of je professionele controle wilt.
        </p>
        <h3>Hoeveel kost een boekhouder voor een zzp&apos;er?</h3>
        <p>
          De kosten verschillen sterk per boekhouder en per hoeveelheid werk. Vraag daarom offertes op basis van jouw
          administratie in plaats van uit te gaan van één vast bedrag.
        </p>

        <h2>Conclusie</h2>
        <p>
          <strong>Zelf boekhouden als zzp&apos;er kan prima</strong>, vooral wanneer je administratie overzichtelijk is
          en je bereid bent om er regelmatig tijd aan te besteden.
        </p>
        <p>
          Zorg in ieder geval dat je je{' '}
          <strong>
            facturen, zakelijke kosten, banktransacties, btw-administratie en gegevens voor je inkomstenbelasting
          </strong>{' '}
          goed bijhoudt en bewaart.
        </p>
        <p>
          Je kunt klein beginnen met een eenvoudige administratie. Wordt je onderneming groter, dan kun je altijd
          overstappen naar boekhoudsoftware of een deel van je administratie uitbesteden.
        </p>
        <p>Twijfel je over wat je nodig hebt?</p>
        <GuideToolCta href="/tools/boekhoudprogramma-check" label="Doe de gratis boekhoudprogramma-check →" />
        <p>Of begin eenvoudig met je facturen:</p>
        <GuideToolCta href="/create-invoice" label="Maak gratis een factuur met FactuurBaas →" />
      </>
    ),
  },
  {
    slug: 'boekhouding-zzp',
    cluster: 'boekhouden',
    seoTitle: "Boekhouding voor zzp'ers: wat moet je bijhouden?",
    title: "Boekhouding voor zzp'ers: wat moet je bijhouden?",
    excerpt:
      "Boekhouding voor zzp'ers uitgelegd. Lees wat je moet bijhouden van inkomsten, kosten, facturen, btw en banktransacties en hoe je je administratie organiseert.",
    keywords:
      "boekhouding zzp, boekhouding zzp bijhouden, boekhouding voor zzp, boekhouding zzp'er, administratie zzp",
    tool: {
      href: '/tools/boekhoudprogramma-check',
      label: 'Doe de boekhoudprogramma-check',
      ctaLabel: 'Doe de boekhoudprogramma-check',
      relatedTitle: 'Boekhoudprogramma-check',
      relatedExcerpt:
        "Ontdek welk type boekhoudprogramma bij jouw zzp-administratie past. Gratis, 8 korte vragen, geen account nodig.",
    },
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Blogs/Boekhouding%20voor%20zzp%20ers.jpg',
      alt: "Boekhouding voor zzp'ers: wat moet je bijhouden?",
    },
    datePublished: '2026-09-05',
    dateModified: '2026-09-05',
    relatedSlugs: [
      'wanneer-boekhoudsoftware-nodig-zzp',
      'gratis-factuurtool-vs-boekhoudprogramma',
      'beste-boekhoudprogramma-zzp',
      'zakelijke-rekening-zzp',
    ],
    relatedGuideSlugs: ['zelf-boekhouden-zzp', 'kosten-boekhoudprogramma-zzp', 'gratis-boekhoudprogramma-zzp'],
    faq: [
      {
        question: "Wat moet een zzp'er bijhouden in de boekhouding?",
        answer:
          'Je moet onder andere je inkomsten, verkoopfacturen, zakelijke kosten, banktransacties en – als dat voor jou van toepassing is – je btw-administratie bijhouden. Ook moet je relevante bewijsstukken en andere zakelijke documenten bewaren.',
      },
      {
        question: "Moet een zzp'er een boekhouding hebben?",
        answer:
          'Als ondernemer moet je een administratie bijhouden. Je bent daarbij niet verplicht om een specifiek boekhoudprogramma of een boekhouder te gebruiken.',
      },
      {
        question: 'Kan ik mijn boekhouding zelf doen?',
        answer:
          'Ja. Je kunt je administratie zelf bijhouden. Bij een eenvoudige onderneming kan dat bijvoorbeeld met een spreadsheet of een combinatie van een factuurtool en eigen administratie.',
      },
      {
        question: "Heb ik een boekhoudprogramma nodig als zzp'er?",
        answer:
          'Niet per se. Een boekhoudprogramma is vooral een hulpmiddel. Het kan interessant worden wanneer je veel facturen, kosten of banktransacties hebt of wanneer je meer automatisering wilt.',
      },
      {
        question: 'Is een factuurprogramma hetzelfde als een boekhoudprogramma?',
        answer:
          'Nee. Een factuurprogramma richt zich vooral op het maken van verkoopfacturen. Een boekhoudprogramma is bedoeld voor een bredere administratie, zoals inkomsten, kosten, banktransacties en btw.',
      },
      {
        question: 'Hoe lang moet ik mijn boekhouding bewaren?',
        answer:
          'Voor veel administratieve basisgegevens geldt een bewaartermijn van zeven jaar. Voor sommige gegevens kunnen andere regels gelden. Controleer daarom de actuele bewaartermijnen van de Belastingdienst voor jouw situatie.',
      },
      {
        question: 'Kan ik mijn boekhouding in Excel doen?',
        answer:
          'Bij een eenvoudige administratie kan Excel of een andere spreadsheet een praktische oplossing zijn. Naarmate je administratie groter wordt, kan een boekhoudprogramma meer overzicht en automatisering bieden.',
      },
      {
        question: 'Wanneer heb ik een boekhouder nodig?',
        answer:
          "Er is niet één vast moment waarop je als zzp'er een boekhouder moet nemen. Het kan interessant zijn als je administratie complex wordt, je weinig tijd hebt, je fiscale vragen hebt of professionele controle wilt.",
      },
    ],
    content: (
      <>
        <p>
          Als zzp&apos;er moet je je administratie goed bijhouden. Maar wat valt er precies onder je boekhouding?
          Welke facturen, kosten en bonnetjes moet je bewaren? En moet je daarvoor een boekhoudprogramma of boekhouder
          gebruiken?
        </p>
        <p>
          Voor een kleine onderneming kan de boekhouding relatief eenvoudig zijn. Je moet vooral zorgen dat je{' '}
          <strong>inkomsten, kosten, facturen, banktransacties en btw</strong> goed kunt terugvinden en onderbouwen.
        </p>
        <p>
          In deze gids leggen we uit wat er bij een boekhouding voor zzp&apos;ers komt kijken, wat je moet bewaren en
          welke manieren er zijn om je administratie bij te houden.
        </p>

        <h2>Wat is een boekhouding?</h2>
        <p>Je boekhouding is het overzicht van de financiële administratie van je onderneming.</p>
        <p>Daarin leg je bijvoorbeeld vast:</p>
        <ul>
          <li>welke omzet je hebt gemaakt;</li>
          <li>welke facturen je hebt verstuurd;</li>
          <li>welke zakelijke kosten je hebt gemaakt;</li>
          <li>welke betalingen zijn binnengekomen en gedaan;</li>
          <li>hoeveel btw je hebt ontvangen en betaald;</li>
          <li>en welke gegevens je nodig hebt voor je belastingaangiften.</li>
        </ul>
        <p>
          Een goede boekhouding zorgt ervoor dat je achteraf kunt zien{' '}
          <strong>wat er financieel in je onderneming is gebeurd</strong>.
        </p>
        <p>
          Je boekhouding hoeft niet ingewikkeld te zijn. De omvang hangt vooral af van je werkzaamheden, het aantal
          klanten, je kosten en de manier waarop je onderneemt.
        </p>

        <h2>Wat moet je als zzp&apos;er bijhouden?</h2>
        <p>Een zzp-administratie bestaat meestal uit verschillende onderdelen.</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[32rem] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Onderdeel
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Wat houd je bij?
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Omzet', 'Je inkomsten uit je werkzaamheden of verkopen'],
                ['Verkoopfacturen', 'Facturen die je naar klanten stuurt'],
                ['Zakelijke kosten', 'Aankopen en andere zakelijke uitgaven'],
                ['Bonnetjes en facturen', 'Bewijsstukken van je kosten'],
                ['Banktransacties', 'Ontvangen en betaalde bedragen'],
                ['Btw', 'In rekening gebrachte en betaalde btw'],
                ['Contracten', 'Zakelijke overeenkomsten en afspraken'],
                [
                  'Overige administratie',
                  'Gegevens die relevant zijn voor je onderneming en belastingaangiften',
                ],
              ].map(([onderdeel, wat]) => (
                <tr key={onderdeel} className="border-b border-slate-100">
                  <td className="px-4 py-3 font-medium text-slate-800">{onderdeel}</td>
                  <td className="px-4 py-3">{wat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Niet iedere zzp&apos;er heeft precies dezelfde administratie nodig. Een consultant met weinig kosten heeft
          bijvoorbeeld een andere administratie dan een ondernemer met voorraad, een bedrijfsauto of veel zakelijke
          aankopen.
        </p>

        <h2>1. Houd je inkomsten en omzet bij</h2>
        <p>Een belangrijk onderdeel van je boekhouding is je omzet.</p>
        <p>Iedere keer dat je een klant factureert, moet je kunnen terugvinden:</p>
        <ul>
          <li>aan wie je hebt gefactureerd;</li>
          <li>wanneer je de factuur hebt verstuurd;</li>
          <li>wat je hebt geleverd;</li>
          <li>hoeveel je hebt gefactureerd;</li>
          <li>hoeveel btw je hebt berekend, als dat van toepassing is;</li>
          <li>en wanneer de factuur is betaald.</li>
        </ul>
        <p>Je verkoopfacturen vormen daarmee een belangrijk onderdeel van je administratie.</p>
        <p>
          Met{' '}
          <Link href="/create-invoice" className="text-warm-orange hover:underline">
            FactuurBaas
          </Link>{' '}
          kun je gratis online een professionele factuur maken. Je hebt geen account nodig en kunt de factuur direct
          als PDF downloaden en zelf naar je klant versturen.
        </p>
        <GuideToolCta href="/create-invoice" label="Maak gratis een factuur →" />

        <h3>Houd je factuurnummers overzichtelijk</h3>
        <p>
          Gebruik een consequente factuurnummering. Zo kun je later makkelijk terugvinden welke facturen je hebt
          gemaakt en controleren of je administratie compleet is.
        </p>
        <p>Bewaar ook een kopie van de facturen die je hebt verstuurd.</p>

        <h2>2. Houd je zakelijke kosten bij</h2>
        <p>Naast je omzet horen ook je zakelijke uitgaven in je administratie.</p>
        <p>Denk bijvoorbeeld aan:</p>
        <ul>
          <li>software;</li>
          <li>telefoon en internet;</li>
          <li>kantoorbenodigdheden;</li>
          <li>apparatuur;</li>
          <li>opleidingen;</li>
          <li>zakelijke reiskosten;</li>
          <li>marketing;</li>
          <li>zakelijke verzekeringen;</li>
          <li>diensten van andere ondernemers;</li>
          <li>en andere kosten die met je onderneming te maken hebben.</li>
        </ul>
        <p>Bewaar de bijbehorende facturen en bonnetjes.</p>
        <p>
          Het is belangrijk om onderscheid te maken tussen zakelijke en privé-uitgaven. Niet iedere uitgave die je als
          ondernemer doet, is automatisch volledig zakelijk of aftrekbaar.
        </p>
        <p>
          Bij twijfel over een specifieke kostenpost kun je de actuele informatie van de Belastingdienst controleren of
          advies vragen aan een boekhouder.
        </p>

        <h2>3. Bewaar facturen en bonnetjes</h2>
        <p>
          Je boekhouding bestaat niet alleen uit bedragen die je in een spreadsheet of boekhoudprogramma invoert.
        </p>
        <p>Ook de documenten achter die bedragen zijn belangrijk.</p>
        <p>Bewaar bijvoorbeeld:</p>
        <ul>
          <li>verkoopfacturen;</li>
          <li>inkoopfacturen;</li>
          <li>kassabonnen;</li>
          <li>betaalbewijzen;</li>
          <li>contracten;</li>
          <li>bankgegevens;</li>
          <li>en andere relevante zakelijke documenten.</li>
        </ul>
        <p>Een praktische regel is:</p>
        <blockquote>
          <p>
            <strong>
              Zorg dat je voor belangrijke inkomsten en uitgaven kunt laten zien waar het bedrag vandaan komt.
            </strong>
          </p>
        </blockquote>
        <p>
          Maak daarom bijvoorbeeld niet alleen een administratie met €250 softwarekosten, maar bewaar ook de factuur
          waarop die €250 staat.
        </p>

        <h2>4. Houd je banktransacties bij</h2>
        <p>Je bankrekening is een belangrijk onderdeel van je administratie.</p>
        <p>Je moet kunnen verklaren welke bedragen je ontvangt en betaalt.</p>
        <p>Bijvoorbeeld:</p>
        <p>
          <strong>€1.210 ontvangen → betaling van een klantfactuur</strong>
        </p>
        <p>of:</p>
        <p>
          <strong>€121 betaald → zakelijke softwarekosten</strong>
        </p>
        <p>Bij een kleine onderneming kun je dit overzicht zelf bijhouden.</p>
        <p>
          Heb je iedere maand veel transacties? Dan kan het steeds meer werk worden om alles handmatig te verwerken.
          Een boekhoudprogramma met een bankkoppeling kan dan tijd besparen.
        </p>
        <p>
          Een aparte{' '}
          <Link href="/blogs/zakelijke-rekening-zzp" className="text-warm-orange hover:underline">
            zakelijke bankrekening
          </Link>{' '}
          kan daarnaast helpen om je zakelijke en privétransacties overzichtelijk te houden.
        </p>

        <h2>5. Houd je btw-administratie bij</h2>
        <p>Ben je btw-plichtig, dan is je btw-administratie een belangrijk onderdeel van je boekhouding.</p>
        <p>
          Bij je verkoopfacturen houd je bijvoorbeeld bij hoeveel btw je aan klanten in rekening hebt gebracht.
        </p>
        <p>
          Bij zakelijke kosten kan er onder voorwaarden btw op de factuur staan die als voorbelasting aftrekbaar is.
        </p>
        <p>Je administratie moet uiteindelijk aansluiten op je btw-aangifte.</p>
        <p>
          Veel zzp&apos;ers doen per kwartaal btw-aangifte, maar de aangifteperiode kan per ondernemer verschillen.
        </p>
        <p>
          De precieze btw-behandeling kan bovendien afhangen van bijvoorbeeld het soort kosten, je klant en het land
          waarin je klant gevestigd is.
        </p>
        <p>
          <strong>Let op:</strong> btw-regels kunnen veranderen en zijn afhankelijk van je situatie. Controleer bij
          twijfel de actuele informatie van de Belastingdienst.
        </p>

        <h2>6. Houd rekening met je inkomstenbelasting</h2>
        <p>Je boekhouding is ook belangrijk voor je inkomstenbelasting.</p>
        <p>
          Je omzet en zakelijke kosten geven je inzicht in het resultaat van je onderneming. Die gegevens heb je
          vervolgens nodig bij het voorbereiden van je aangifte inkomstenbelasting.
        </p>
        <p>
          Daarom is het verstandig om niet alleen je facturen te bewaren, maar gedurende het jaar ook je kosten en
          andere relevante gegevens bij te houden.
        </p>
        <p>
          Hoe beter je administratie gedurende het jaar is bijgewerkt, hoe minder werk je aan het einde van het jaar
          hebt.
        </p>

        <h2>7. Bewaar je administratie</h2>
        <p>Je moet je administratie bewaren en toegankelijk houden.</p>
        <p>
          Voor veel belangrijke basisgegevens geldt een bewaartermijn van <strong>zeven jaar</strong>. Voor bepaalde
          gegevens kunnen andere bewaartermijnen gelden.
        </p>
        <p>
          Bewaar je administratie daarom op een manier waarop je documenten later makkelijk kunt terugvinden.
        </p>
        <p>
          Dat kan bijvoorbeeld digitaal. Zorg er dan voor dat bestanden niet zomaar verdwijnen en dat je belangrijke
          documenten logisch ordent.
        </p>
        <p>Een mogelijke indeling is:</p>
        <p>
          <strong>2026 → Omzet → Kosten → Bank → Btw → Contracten</strong>
        </p>
        <p>
          Het belangrijkste is niet welke mappenstructuur je gebruikt, maar dat je administratie compleet en
          terugvindbaar blijft.
        </p>

        <h2>Hoe houd je je boekhouding als zzp&apos;er bij?</h2>
        <p>Er zijn verschillende manieren om je boekhouding te organiseren.</p>
        <p>
          Welke oplossing het beste werkt, hangt af van de omvang en complexiteit van je administratie.
        </p>

        <h3>Optie 1: Zelf bijhouden in Excel</h3>
        <p>Bij een eenvoudige administratie kun je inkomsten en kosten bijvoorbeeld in een spreadsheet bijhouden.</p>
        <p>
          <strong>Voordelen:</strong>
        </p>
        <ul>
          <li>goedkoop;</li>
          <li>flexibel;</li>
          <li>je bepaalt zelf de indeling;</li>
          <li>geschikt voor een eenvoudige administratie.</li>
        </ul>
        <p>
          <strong>Nadelen:</strong>
        </p>
        <ul>
          <li>veel handmatig werk;</li>
          <li>grotere kans op invoerfouten;</li>
          <li>weinig automatisering;</li>
          <li>btw en rapportages moet je zelf goed organiseren;</li>
          <li>minder handig wanneer je administratie groeit.</li>
        </ul>
        <p>
          Voor een kleine onderneming kan een spreadsheet prima werken. Het is alleen belangrijk dat je administratie
          ook daadwerkelijk compleet en consequent wordt bijgehouden.
        </p>

        <h3>Optie 2: Factuurtool + eigen administratie</h3>
        <p>
          Je kunt ook een eenvoudige factuurtool gebruiken voor je verkoopfacturen en de rest van je administratie zelf
          bijhouden.
        </p>
        <p>Bijvoorbeeld:</p>
        <p>
          <strong>FactuurBaas → verkoopfacturen</strong>
        </p>
        <p>
          <strong>Eigen administratie → inkomsten, kosten en overige gegevens</strong>
        </p>
        <p>
          Dit kan een praktische oplossing zijn als je vooral facturen wilt maken en je overige administratie beperkt
          is.
        </p>
        <p>
          Met FactuurBaas kun je gratis een factuur maken zonder account. Je downloadt de factuur als PDF en verstuurt
          deze zelf naar je klant.
        </p>
        <GuideToolCta href="/create-invoice" label="Maak gratis een factuur →" />

        <h3>Optie 3: Boekhoudprogramma</h3>
        <p>Een boekhoudprogramma is bedoeld om een groter deel van je administratie bij elkaar te brengen.</p>
        <p>Afhankelijk van het programma kun je bijvoorbeeld werken met:</p>
        <ul>
          <li>verkoopfacturen;</li>
          <li>inkoopfacturen;</li>
          <li>kosten;</li>
          <li>banktransacties;</li>
          <li>btw;</li>
          <li>financiële overzichten;</li>
          <li>en andere administratieve gegevens.</li>
        </ul>
        <p>
          Het grote voordeel is vooral <strong>overzicht en automatisering</strong>.
        </p>
        <p>
          Je hoeft daardoor minder handmatig te verwerken en kunt je administratie makkelijker gedurende het jaar
          bijhouden.
        </p>
        <p>Wil je weten welke oplossing waarschijnlijk bij jouw administratie past?</p>
        <GuideToolCta href="/tools/boekhoudprogramma-check" label="Doe de gratis boekhoudprogramma-check →" />

        <h2>Heb je als zzp&apos;er een boekhoudprogramma nodig?</h2>
        <p>Niet automatisch.</p>
        <p>
          Een boekhoudprogramma is een hulpmiddel om je administratie te organiseren. Je bent niet verplicht om
          specifiek een bepaald programma te gebruiken omdat je zzp&apos;er bent.
        </p>
        <p>Bij een kleine administratie kan zelf bijhouden voldoende zijn.</p>
        <p>
          Een boekhoudprogramma wordt vooral interessant wanneer je administratie groter of tijdrovender wordt.
        </p>
        <p>Bijvoorbeeld wanneer je:</p>
        <ul>
          <li>veel facturen verstuurt;</li>
          <li>veel zakelijke kosten hebt;</li>
          <li>veel bonnetjes moet verwerken;</li>
          <li>veel banktransacties hebt;</li>
          <li>een bankkoppeling wilt;</li>
          <li>meer automatisering wilt;</li>
          <li>of steeds meer tijd kwijt bent aan je administratie.</li>
        </ul>
        <p>Het verschil is dus niet simpelweg:</p>
        <p>
          <strong>kleine zzp&apos;er = geen software</strong>
        </p>
        <p>en</p>
        <p>
          <strong>grote zzp&apos;er = wel software.</strong>
        </p>
        <p>Het gaat vooral om hoeveel administratie je hebt en hoeveel werk je zelf wilt doen.</p>
        <GuideToolCta
          href="/tools/boekhoudprogramma-check"
          label="Ontdek welke oplossing bij jouw administratie past →"
        />

        <h2>Zelf je boekhouding doen of een boekhouder inschakelen?</h2>
        <p>
          Je kunt je boekhouding zelf doen, maar je kunt deze ook geheel of gedeeltelijk uitbesteden. Meer hierover
          lees je in{' '}
          <Link href="/gidsen/zelf-boekhouden-zzp" className="text-warm-orange hover:underline">
            zelf boekhouden als zzp&apos;er
          </Link>
          .
        </p>

        <h3>Zelf doen</h3>
        <p>Zelf je boekhouding doen kan interessant zijn als:</p>
        <ul>
          <li>je administratie overzichtelijk is;</li>
          <li>je kosten beperkt wilt houden;</li>
          <li>je voldoende tijd hebt;</li>
          <li>en je het prettig vindt om zelf inzicht te houden in je cijfers.</li>
        </ul>
        <p>
          Je blijft dan zelf verantwoordelijk voor het bijhouden van je administratie en het aanleveren van de
          benodigde gegevens voor je aangiften.
        </p>

        <h3>Boekhouder inschakelen</h3>
        <p>Een boekhouder kan interessant zijn als:</p>
        <ul>
          <li>je weinig tijd hebt;</li>
          <li>je administratie complexer wordt;</li>
          <li>je veel fiscale vragen hebt;</li>
          <li>je internationale klanten of transacties hebt;</li>
          <li>of je gewoon professionele ondersteuning wilt.</li>
        </ul>
        <p>Een boekhouder kan ook helpen bij onderdelen die je liever niet zelf doet.</p>

        <h3>Een combinatie kan ook</h3>
        <p>Je hoeft niet alles zelf te doen of alles uit te besteden.</p>
        <p>Een tussenweg kan bijvoorbeeld zijn:</p>
        <p>
          <strong>Zelf facturen en kosten bijhouden → boekhouder controleert de administratie</strong>
        </p>
        <p>Of:</p>
        <p>
          <strong>Zelf de dagelijkse administratie → boekhouder verzorgt bepaalde aangiftes</strong>
        </p>
        <p>
          Welke combinatie verstandig is, hangt af van je situatie en hoeveel werk je zelf wilt doen.
        </p>

        <h2>Hoe vaak moet je je boekhouding bijwerken?</h2>
        <p>Je hoeft niet iedere dag uren aan je boekhouding te besteden.</p>
        <p>Het is vooral belangrijk dat je administratie niet maanden blijft liggen.</p>
        <p>Een eenvoudige routine kan bijvoorbeeld zijn:</p>

        <h3>Iedere keer dat je factureert</h3>
        <p>Maak de factuur en bewaar een kopie.</p>

        <h3>Iedere keer dat je iets zakelijks koopt</h3>
        <p>Bewaar de factuur of bon.</p>

        <h3>Iedere week of maand</h3>
        <p>Werk je inkomsten en kosten bij en controleer je banktransacties.</p>

        <h3>Voor je btw-aangifte</h3>
        <p>Controleer je omzet, kosten en btw-bedragen.</p>

        <h3>Aan het einde van het jaar</h3>
        <p>
          Controleer of je administratie compleet is en verzamel de gegevens die je nodig hebt voor je aangifte
          inkomstenbelasting.
        </p>
        <p>
          Hoe vaak je bepaalde onderdelen moet verwerken, hangt af van je administratie en aangifteverplichtingen.
        </p>

        <h2>Wat gebeurt er als je je boekhouding niet goed bijhoudt?</h2>
        <p>
          Een slechte administratie kan ervoor zorgen dat je niet goed weet hoeveel je hebt verdiend of uitgegeven.
        </p>
        <p>Daarnaast kan een onvolledige administratie problemen veroorzaken bij je belastingaangiften.</p>
        <p>Denk bijvoorbeeld aan:</p>
        <ul>
          <li>ontbrekende facturen;</li>
          <li>vergeten zakelijke kosten;</li>
          <li>fouten in btw-bedragen;</li>
          <li>transacties die je niet meer kunt verklaren;</li>
          <li>of documenten die je niet meer kunt terugvinden.</li>
        </ul>
        <p>
          Daarom is het meestal verstandiger om je administratie regelmatig bij te werken dan alles op het laatste
          moment te doen.
        </p>

        <h2>Boekhouding voor een startende zzp&apos;er</h2>
        <p>
          Als je net begint als zzp&apos;er, hoef je je administratie niet direct onnodig ingewikkeld te maken.
        </p>
        <p>Begin met een duidelijke basis:</p>
        <p>
          <strong>1. Maak je facturen</strong>
        </p>
        <p>
          <strong>2. Bewaar je facturen en bonnetjes</strong>
        </p>
        <p>
          <strong>3. Houd je inkomsten en kosten bij</strong>
        </p>
        <p>
          <strong>4. Controleer je banktransacties</strong>
        </p>
        <p>
          <strong>5. Houd je btw bij als dat voor jou van toepassing is</strong>
        </p>
        <p>
          <strong>6. Bewaar je administratie</strong>
        </p>
        <p>Naarmate je onderneming groeit, kun je je manier van werken aanpassen.</p>
        <p>
          Misschien is een spreadsheet eerst voldoende. Later kan een boekhoudprogramma tijd besparen. En als je
          administratie complex wordt, kan een boekhouder een logische volgende stap zijn.
        </p>

        <h2>Wat is de beste oplossing voor jouw boekhouding?</h2>
        <p>Er is niet één beste manier om de boekhouding van iedere zzp&apos;er te doen.</p>
        <p>
          Een zzp&apos;er met vijf facturen per maand en weinig kosten heeft een andere behoefte dan iemand met
          tientallen klanten, veel zakelijke uitgaven en honderden banktransacties.
        </p>
        <p>Je kunt grofweg kiezen uit:</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[32rem] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Situatie
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Mogelijke oplossing
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Weinig facturen en weinig kosten', 'Zelf bijhouden'],
                ['Vooral facturen nodig', 'Factuurtool + eigen administratie'],
                ['Regelmatig inkomsten en kosten', 'Boekhoudprogramma'],
                ['Veel administratie of weinig tijd', 'Boekhoudprogramma + eventueel boekhouder'],
                ['Complexe administratie', 'Boekhoudprogramma + professionele hulp'],
              ].map(([situatie, oplossing]) => (
                <tr key={situatie} className="border-b border-slate-100">
                  <td className="px-4 py-3 font-medium text-slate-800">{situatie}</td>
                  <td className="px-4 py-3">{oplossing}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Het belangrijkste is dat je oplossing past bij je{' '}
          <strong>hoeveelheid administratie, kennis, tijd en behoefte aan automatisering</strong>.
        </p>

        <h2>Wil je weten wat bij jouw administratie past?</h2>
        <p>
          Twijfel je tussen zelf bijhouden, een factuurtool, een boekhoudprogramma of een boekhouder?
        </p>
        <p>Daarvoor hoef je niet meteen verschillende programma&apos;s uit te proberen.</p>
        <GuideToolCta href="/tools/boekhoudprogramma-check" label="Doe de gratis boekhoudprogramma-check →" />
        <p>
          Beantwoord een paar vragen over je facturen, kosten, transacties en manier van werken. Je krijgt vervolgens
          een indicatie welke oplossing waarschijnlijk het beste bij jouw situatie past en waarom.
        </p>

        <h2>Veelgestelde vragen</h2>
        <h3>Wat moet een zzp&apos;er bijhouden in de boekhouding?</h3>
        <p>
          Je moet onder andere je inkomsten, verkoopfacturen, zakelijke kosten, banktransacties en – als dat voor jou
          van toepassing is – je btw-administratie bijhouden. Ook moet je relevante bewijsstukken en andere zakelijke
          documenten bewaren.
        </p>
        <h3>Moet een zzp&apos;er een boekhouding hebben?</h3>
        <p>
          Als ondernemer moet je een administratie bijhouden. Je bent daarbij niet verplicht om een specifiek
          boekhoudprogramma of een boekhouder te gebruiken.
        </p>
        <h3>Kan ik mijn boekhouding zelf doen?</h3>
        <p>
          Ja. Je kunt je administratie zelf bijhouden. Bij een eenvoudige onderneming kan dat bijvoorbeeld met een
          spreadsheet of een combinatie van een factuurtool en eigen administratie.
        </p>
        <h3>Heb ik een boekhoudprogramma nodig als zzp&apos;er?</h3>
        <p>
          Niet per se. Een boekhoudprogramma is vooral een hulpmiddel. Het kan interessant worden wanneer je veel
          facturen, kosten of banktransacties hebt of wanneer je meer automatisering wilt.
        </p>
        <p>
          <Link href="/blogs/wanneer-boekhoudsoftware-nodig-zzp" className="text-warm-orange hover:underline">
            Lees wanneer een boekhoudprogramma interessant wordt →
          </Link>
        </p>
        <h3>Is een factuurprogramma hetzelfde als een boekhoudprogramma?</h3>
        <p>
          Nee. Een factuurprogramma richt zich vooral op het maken van verkoopfacturen. Een boekhoudprogramma is
          bedoeld voor een bredere administratie, zoals inkomsten, kosten, banktransacties en btw.
        </p>
        <p>
          <Link
            href="/blogs/gratis-factuurtool-vs-boekhoudprogramma"
            className="text-warm-orange hover:underline"
          >
            Bekijk het verschil tussen een factuurprogramma en boekhoudprogramma →
          </Link>
        </p>
        <h3>Hoe lang moet ik mijn boekhouding bewaren?</h3>
        <p>
          Voor veel administratieve basisgegevens geldt een bewaartermijn van zeven jaar. Voor sommige gegevens kunnen
          andere regels gelden. Controleer daarom de actuele bewaartermijnen van de Belastingdienst voor jouw situatie.
        </p>
        <h3>Kan ik mijn boekhouding in Excel doen?</h3>
        <p>
          Bij een eenvoudige administratie kan Excel of een andere spreadsheet een praktische oplossing zijn. Naarmate
          je administratie groter wordt, kan een boekhoudprogramma meer overzicht en automatisering bieden.
        </p>
        <h3>Wanneer heb ik een boekhouder nodig?</h3>
        <p>
          Er is niet één vast moment waarop je als zzp&apos;er een boekhouder moet nemen. Het kan interessant zijn als
          je administratie complex wordt, je weinig tijd hebt, je fiscale vragen hebt of professionele controle wilt.
        </p>

        <h2>Conclusie</h2>
        <p>
          Een goede <strong>boekhouding voor zzp&apos;ers</strong> hoeft niet ingewikkeld te zijn, maar je moet wel
          weten wat je moet bijhouden.
        </p>
        <p>Zorg in ieder geval dat je overzicht hebt over je:</p>
        <ul>
          <li>
            <strong>inkomsten en omzet;</strong>
          </li>
          <li>
            <strong>verkoopfacturen;</strong>
          </li>
          <li>
            <strong>zakelijke kosten;</strong>
          </li>
          <li>
            <strong>facturen en bonnetjes;</strong>
          </li>
          <li>
            <strong>banktransacties;</strong>
          </li>
          <li>
            <strong>btw-administratie, als die voor jou van toepassing is;</strong>
          </li>
          <li>en andere relevante zakelijke documenten.</li>
        </ul>
        <p>
          Je kunt je administratie zelf bijhouden, een factuurtool gebruiken, overstappen naar een boekhoudprogramma of
          bepaalde werkzaamheden uitbesteden aan een boekhouder.
        </p>
        <p>
          <strong>De beste oplossing hangt af van jouw administratie.</strong>
        </p>
        <p>Wil je snel weten welke optie waarschijnlijk bij jou past?</p>
        <GuideToolCta href="/tools/boekhoudprogramma-check" label="Doe de gratis boekhoudprogramma-check →" />
        <p>Of begin met je facturen:</p>
        <GuideToolCta href="/create-invoice" label="Maak gratis een factuur met FactuurBaas →" />
      </>
    ),
  },
  {
    slug: 'kosten-boekhoudprogramma-zzp',
    cluster: 'boekhouden',
    seoTitle: 'Kosten boekhoudprogramma zzp: wat betaal je?',
    title: "Wat kost een boekhoudprogramma voor zzp'ers?",
    excerpt:
      "Wat kost een boekhoudprogramma voor zzp'ers? Vergelijk gratis, goedkope en uitgebreidere pakketten en ontdek wat je krijgt voor €5, €10, €20 of €40+ per maand.",
    keywords:
      'kosten boekhoudprogramma zzp, boekhoudprogramma zzp kosten, goedkoop boekhoudprogramma zzp, goedkoopste boekhoudprogramma zzp, kosten boekhouden zzp, boekhoudprogramma kosten, boekhoudprogramma zzp goedkoop, wat kost een boekhoudprogramma, gratis boekhoudprogramma zzp',
    tool: {
      href: '/tools/boekhoudprogramma-check',
      label: 'Doe de boekhoudprogramma-check',
      ctaLabel: 'Doe de boekhoudprogramma-check',
      relatedTitle: 'Boekhoudprogramma-check',
      relatedExcerpt:
        "Ontdek welk type boekhoudprogramma bij jouw zzp-administratie past. Gratis, 8 korte vragen, geen account nodig.",
    },
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Blogs/Wat%20kost%20een%20boekhoudprogramma%20voor%20zzp%20ers.jpg',
      alt: "Wat kost een boekhoudprogramma voor zzp'ers?",
    },
    datePublished: '2026-09-05',
    dateModified: '2026-09-05',
    relatedSlugs: [
      'beste-boekhoudprogramma-zzp',
      'wanneer-boekhoudsoftware-nodig-zzp',
      'gratis-factuurtool-vs-boekhoudprogramma',
    ],
    relatedGuideSlugs: ['boekhouding-zzp', 'zelf-boekhouden-zzp', 'gratis-boekhoudprogramma-zzp'],
    faq: [
      {
        question: "Wat kost een boekhoudprogramma voor een zzp'er?",
        answer:
          'De prijs varieert van gratis of enkele euro’s per maand tot €20, €30 of €40+ per maand. De uiteindelijke prijs hangt af van het programma en het pakket dat je kiest.',
      },
      {
        question: "Wat is een goedkoop boekhoudprogramma voor zzp'ers?",
        answer:
          'Goedkope boekhoudprogramma’s zijn onder andere te vinden in de prijsklasse van ongeveer €5 tot €10 per maand. Kijk wel naar welke functies en limieten bij die prijs horen.',
      },
      {
        question: 'Wat is het goedkoopste boekhoudprogramma?',
        answer:
          'Dat hangt af van je situatie en van wat je onder goedkoop verstaat. Een lage maandprijs is niet automatisch de laagste totale kosten als je daardoor veel handmatig werk moet doen of snel een duurder pakket nodig hebt.',
      },
      {
        question: 'Is een gratis boekhoudprogramma goed genoeg?',
        answer:
          'Voor een eenvoudige administratie kan een gratis oplossing voldoende zijn. Controleer wel of het daadwerkelijk om gratis gebruik gaat en welke functies en limieten daarbij horen.',
      },
      {
        question: 'Hoeveel kost Moneybird?',
        answer:
          'Op het moment van schrijven worden de pakketten van Moneybird weergegeven vanaf €15 per maand. Er zijn daarnaast uitgebreidere pakketten van €29 en €41 per maand. De beschikbare functies en limieten verschillen per pakket.',
      },
      {
        question: 'Hoeveel kost e-Boekhouden.nl?',
        answer:
          'Op het moment van schrijven wordt het ZZP-pakket weergegeven voor €4,98 per maand bij de aangeboden korting. Daarnaast worden pakketten weergegeven vanaf €7,25 per maand en €12 per maand voor boekhouden en factureren. Voor startende ondernemers is er bovendien een startersaanbod waarbij de eerste 15 maanden gratis kunnen zijn.',
      },
      {
        question: 'Is een duurder boekhoudprogramma beter?',
        answer:
          'Niet automatisch. Een duurder programma biedt vaak meer functies, automatisering of hogere limieten. Als je die functies niet nodig hebt, kan een goedkoper programma beter bij je passen.',
      },
      {
        question: 'Is een boekhouder goedkoper dan een boekhoudprogramma?',
        answer:
          'Niet per definitie. Een boekhouder kost meer dan alleen software, maar je krijgt daar persoonlijke dienstverlening en kennis voor terug. De juiste keuze hangt af van hoeveel administratie je zelf wilt doen.',
      },
      {
        question: "Kan ik als zzp'er eerst goedkoop beginnen?",
        answer:
          'Ja. Je kunt bijvoorbeeld beginnen met een eenvoudige administratie en later overstappen naar uitgebreidere software wanneer je onderneming groeit.',
      },
    ],
    content: (
      <>
        <p>
          Wat kost een boekhoudprogramma als zzp&apos;er? Dat hangt vooral af van hoeveel administratie je hebt en
          welke functies je nodig hebt.
        </p>
        <p>
          Je kunt al beginnen met een goedkope oplossing van een paar euro per maand. Andere boekhoudprogramma&apos;s
          kosten €20, €30 of meer per maand. En als je je administratie grotendeels uitbesteedt aan een boekhouder,
          lopen de totale kosten uiteraard verder op.
        </p>
        <p>
          Maar <strong>goedkoop is niet automatisch beter</strong>. Het belangrijkste is wat je voor dat bedrag krijgt.
        </p>
        <p>
          In deze gids bekijken we de verschillende prijsklassen van boekhoudsoftware voor zzp&apos;ers, wat je
          daarvoor kunt verwachten en wanneer het de moeite waard is om meer te betalen.
        </p>

        <h2>Wat kost een boekhoudprogramma voor zzp&apos;ers?</h2>
        <p>Voor een zzp&apos;er kun je grofweg rekening houden met deze prijsklassen:</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[36rem] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Prijsklasse
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Wat je meestal krijgt
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Geschikt voor
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Gratis', 'Basisadministratie of tijdelijke gratis periode', 'Starters en zeer kleine administraties'],
                ['€5–€10 per maand', 'Basis boekhouden en soms factureren', 'Eenvoudige administratie'],
                ['€10–€20 per maand', 'Uitgebreidere boekhouding en facturatie', "Veel zzp'ers"],
                [
                  '€20+ per maand',
                  'Meer automatisering en uitgebreide functies',
                  'Groeiende of uitgebreidere administratie',
                ],
                ['Boekhouder', 'Software + persoonlijke dienstverlening', 'Wie administratie wil uitbesteden'],
              ].map(([prijs, krijgt, geschikt]) => (
                <tr key={prijs} className="border-b border-slate-100">
                  <td className="px-4 py-3 font-medium text-slate-800">{prijs}</td>
                  <td className="px-4 py-3">{krijgt}</td>
                  <td className="px-4 py-3">{geschikt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Dit zijn geen vaste grenzen. Boekhoudprogramma&apos;s werken met verschillende pakketten, functies en
          aanbiedingen.
        </p>
        <p>Ook kan een programma bijvoorbeeld goedkoper zijn wanneer je jaarlijks betaalt.</p>

        <h2>Is een gratis boekhoudprogramma genoeg?</h2>
        <p>Een gratis oplossing klinkt natuurlijk aantrekkelijk.</p>
        <p>
          Voor een startende zzp&apos;er met weinig facturen, weinig kosten en een eenvoudige administratie kan een
          gratis of zeer goedkope oplossing voldoende zijn.
        </p>
        <p>
          Maar kijk goed naar <strong>wat er daadwerkelijk gratis is</strong>.
        </p>
        <p>
          Een gratis proefperiode is iets anders dan permanent gratis boekhouden. Ook kunnen bepaalde functies alleen
          in een betaald pakket beschikbaar zijn.
        </p>
        <p>Let daarom niet alleen op de prijs, maar bijvoorbeeld ook op:</p>
        <ul>
          <li>factureren;</li>
          <li>kosten verwerken;</li>
          <li>banktransacties;</li>
          <li>btw-administratie;</li>
          <li>automatische verwerking;</li>
          <li>aantal gebruikers;</li>
          <li>aantal transacties;</li>
          <li>rapportages;</li>
          <li>en eventuele beperkingen.</li>
        </ul>
        <p>
          Soms is €5 per maand voor een compleet pakket uiteindelijk voordeliger dan een gratis programma waarin je
          veel handmatig moet doen.
        </p>

        <h2>Boekhoudprogramma voor €5 tot €10 per maand</h2>
        <p>In deze prijsklasse vind je relatief goedkope boekhoudoplossingen.</p>
        <p>
          Een voorbeeld is <strong>e-Boekhouden.nl</strong>. Op het moment van schrijven wordt het ZZP-pakket
          aangeboden voor €4,98 per maand bij de weergegeven aanbieding. Het pakket is gericht op boekhouden en
          factureren en kent een maximum aantal boekingen.
        </p>
        <p>
          e-Boekhouden.nl biedt daarnaast een Standaard-pakket voor €7,25 per maand bij de weergegeven aanbieding.
          Daarmee krijg je onbeperkt boekhouden. Voor onbeperkt boekhouden én factureren wordt het pakket Standaard +
          Factureren weergegeven voor €12 per maand.
        </p>
        <p>
          Voor startende ondernemers wordt daarnaast een startersaanbod weergegeven waarbij e-Boekhouden.nl de eerste
          15 maanden gratis kan zijn.
        </p>
        <p>
          Let hierbij goed op het verschil tussen de <strong>reguliere prijs en een tijdelijke of startersaanbieding</strong>.
        </p>

        <h3>Wat krijg je in deze prijsklasse?</h3>
        <p>Een goedkoop boekhoudprogramma kan al een groot deel van de basisadministratie afhandelen.</p>
        <p>Denk aan:</p>
        <ul>
          <li>inkomsten verwerken;</li>
          <li>kosten bijhouden;</li>
          <li>boekhouden;</li>
          <li>factureren;</li>
          <li>btw-administratie;</li>
          <li>en financiële overzichten.</li>
        </ul>
        <p>De precieze functies en limieten verschillen per programma en pakket.</p>
        <p>Voor een zzp&apos;er met een relatief eenvoudige administratie kan dit al ruim voldoende zijn.</p>

        <h2>Boekhoudprogramma voor €10 tot €20 per maand</h2>
        <p>In deze prijsklasse kom je bij uitgebreidere pakketten terecht.</p>
        <p>
          Je betaalt dan niet alleen voor het kunnen bijhouden van je administratie, maar vaak ook voor meer gemak,
          automatisering en extra functies.
        </p>
        <p>
          Een goed voorbeeld is <strong>Moneybird</strong>. Het Start-pakket wordt op het moment van schrijven
          weergegeven voor €15 per maand.
        </p>
        <p>
          Dit pakket is gericht op freelancers en starters en bevat onder andere functies voor het verwerken van
          documenten en bonnetjes. Er zijn ook limieten op bijvoorbeeld verwerkte transacties en gebruikers.
        </p>
        <p>Moneybird biedt daarnaast uitgebreidere pakketten aan voor €29 en €41 per maand.</p>
        <p>
          Dat laat goed zien dat de prijs van boekhoudsoftware niet alleen afhangt van het programma zelf, maar ook van{' '}
          <strong>hoe uitgebreid je pakket moet zijn</strong>.
        </p>

        <h3>Wanneer is €10–€20 per maand interessant?</h3>
        <p>Voor veel zzp&apos;ers is dit een interessante middenklasse.</p>
        <p>
          Je krijgt doorgaans meer gemak dan bij een heel eenvoudige oplossing, zonder meteen te betalen voor de meest
          uitgebreide functies.
        </p>
        <p>Deze prijsklasse kan bijvoorbeeld interessant zijn als je:</p>
        <ul>
          <li>regelmatig factureert;</li>
          <li>meerdere zakelijke kosten hebt;</li>
          <li>je administratie online wilt bijhouden;</li>
          <li>meer overzicht wilt;</li>
          <li>of minder handmatig werk wilt doen.</li>
        </ul>

        <h2>Boekhoudprogramma voor €20 tot €30 per maand</h2>
        <p>
          Vanaf ongeveer €20 per maand wordt de nadruk vaak steeds meer gelegd op uitgebreidere functionaliteit en
          automatisering.
        </p>
        <p>
          Je kunt bijvoorbeeld meer gebruikers, bankrekeningen of transacties krijgen, afhankelijk van het pakket.
        </p>
        <p>
          Moneybird heeft bijvoorbeeld een Groei-pakket dat op het moment van schrijven wordt weergegeven voor €29 per
          maand.
        </p>
        <p>
          Daarbij ligt de nadruk sterker op automatisering en samenwerken met meerdere gebruikers.
        </p>
        <p>
          Dat kan interessant zijn wanneer je onderneming groeit en je administratie meer tijd begint te kosten.
        </p>
        <p>
          Maar als je als zzp&apos;er maar een paar facturen per maand hebt, heb je waarschijnlijk niet automatisch zo&apos;n
          uitgebreid pakket nodig.
        </p>

        <h2>Boekhoudprogramma van €30 of €40+ per maand</h2>
        <p>Er zijn ook boekhoudpakketten die €30, €40 of meer per maand kosten.</p>
        <p>Dat betekent niet dat zo&apos;n programma automatisch beter is voor iedere zzp&apos;er.</p>
        <p>Je betaalt in deze prijsklasse vooral voor een uitgebreider pakket.</p>
        <p>Bijvoorbeeld:</p>
        <ul>
          <li>meer automatisering;</li>
          <li>meer bankrekeningen;</li>
          <li>meer transacties;</li>
          <li>meer gebruikers;</li>
          <li>uitgebreidere administratie;</li>
          <li>of minder beperkingen.</li>
        </ul>
        <p>
          Moneybird heeft bijvoorbeeld een Compleet-pakket dat op het moment van schrijven €41 per maand kost.
        </p>
        <p>Dat pakket is gericht op onbeperkt boekhouden en uitgebreidere administraties.</p>
        <p>
          Voor een zzp&apos;er met een eenvoudige administratie kan dat onnodig duur zijn. Voor iemand met veel
          transacties of een uitgebreidere administratie kan het juist interessant zijn.
        </p>

        <h2>Wat krijg je eigenlijk voor je geld?</h2>
        <p>De belangrijkste vraag is daarom niet:</p>
        <blockquote>
          <p>
            <strong>Wat is het goedkoopste boekhoudprogramma?</strong>
          </p>
        </blockquote>
        <p>Maar:</p>
        <blockquote>
          <p>
            <strong>Wat krijg ik voor mijn maandelijkse bedrag?</strong>
          </p>
        </blockquote>
        <p>
          Stel dat je €5 per maand betaalt voor software, maar iedere maand twee uur extra bezig bent met handmatig
          werk.
        </p>
        <p>Dan is die €5 misschien niet de goedkoopste oplossing.</p>
        <p>
          Andersom kan een pakket van €30 per maand onnodig duur zijn als je maar vijf facturen per maand hebt en
          nauwelijks kosten maakt.
        </p>
        <p>
          Kijk daarom naar de combinatie van <strong>prijs, functies en tijdsbesparing</strong>.
        </p>

        <h2>Goedkoop boekhoudprogramma voor zzp&apos;ers</h2>
        <p>
          Als je specifiek op zoek bent naar een goedkoop boekhoudprogramma, kijk dan eerst naar de omvang van je
          administratie.
        </p>

        <h3>Je hebt weinig administratie</h3>
        <p>Heb je:</p>
        <ul>
          <li>weinig klanten;</li>
          <li>weinig facturen;</li>
          <li>weinig zakelijke kosten;</li>
          <li>weinig banktransacties;</li>
        </ul>
        <p>dan kan een goedkoop basispakket voldoende zijn.</p>
        <p>Misschien heb je zelfs nog geen uitgebreid boekhoudprogramma nodig.</p>

        <h3>Je hebt een gemiddelde administratie</h3>
        <p>Verstuur je regelmatig facturen en heb je iedere maand meerdere kosten en transacties?</p>
        <p>Dan kan een pakket van ongeveer €10 tot €20 per maand interessant zijn.</p>
        <p>
          Je betaalt dan voor meer overzicht en gemak zonder direct voor de uitgebreidste functies te kiezen.
        </p>

        <h3>Je hebt veel administratie</h3>
        <p>Heb je veel transacties, meerdere bankrekeningen, veel kosten of meerdere gebruikers?</p>
        <p>Dan kan een uitgebreider pakket logischer zijn.</p>
        <p>
          In dat geval kan de hogere maandprijs zich terugverdienen doordat je minder handmatig hoeft te doen.
        </p>

        <h2>Wat is het goedkoopste boekhoudprogramma voor zzp&apos;ers?</h2>
        <p>Er is niet één programma dat altijd het goedkoopste is.</p>
        <p>Dat komt doordat de prijs afhankelijk is van:</p>
        <ul>
          <li>het pakket;</li>
          <li>het aantal transacties;</li>
          <li>het aantal gebruikers;</li>
          <li>facturatie;</li>
          <li>bankkoppelingen;</li>
          <li>automatisering;</li>
          <li>en eventuele tijdelijke aanbiedingen.</li>
        </ul>
        <p>
          Een programma dat €5 per maand kost, kan bijvoorbeeld goedkoper lijken dan een programma van €15. Maar als je
          voor belangrijke functies moet upgraden, verandert de vergelijking.
        </p>
        <p>
          Daarom is het verstandiger om te kijken naar de <strong>totale kosten voor jouw situatie</strong>.
        </p>

        <h2>Let op tijdelijke aanbiedingen</h2>
        <p>
          Bij het vergelijken van prijzen moet je goed kijken naar het verschil tussen de normale prijs en een
          aanbieding.
        </p>
        <p>Dat is vooral relevant bij starters.</p>
        <p>
          Een programma kan bijvoorbeeld de eerste maanden gratis zijn of tijdelijk met korting worden aangeboden. Dat
          kan een uitstekende manier zijn om goedkoop te beginnen, maar kijk ook naar wat je daarna betaalt.
        </p>
        <p>Vraag jezelf dus af:</p>
        <p>
          <strong>Wat kost het programma na de actieperiode?</strong>
        </p>
        <p>En:</p>
        <p>
          <strong>Welke functies blijven beschikbaar in het pakket dat ik daarna gebruik?</strong>
        </p>

        <h2>Is gratis boekhouden goedkoper dan een betaald programma?</h2>
        <p>Niet altijd.</p>
        <p>Je kunt bijvoorbeeld gratis of goedkoop beginnen met:</p>
        <ul>
          <li>een spreadsheet;</li>
          <li>een gratis factuurtool;</li>
          <li>of een tijdelijk gratis boekhoudpakket.</li>
        </ul>
        <p>Daar staat tegenover dat je meer zelf moet doen.</p>
        <p>
          Een betaald boekhoudprogramma kan juist tijd besparen door bijvoorbeeld automatisering en koppelingen.
        </p>
        <p>Daarom kun je de kosten van boekhoudsoftware het beste op twee manieren bekijken:</p>
        <p>
          <strong>1. Wat betaal ik per maand?</strong>
        </p>
        <p>
          <strong>2. Hoeveel tijd kost mijn administratie mij?</strong>
        </p>
        <p>
          Als een programma je iedere maand een paar uur administratie bespaart, kan €10 of €20 per maand relatief
          weinig zijn.
        </p>

        <h2>Wat kost boekhouden met een boekhouder?</h2>
        <p>Een boekhouder is een andere kostenpost dan alleen boekhoudsoftware.</p>
        <p>
          Je betaalt dan niet alleen voor het programma, maar vooral voor de dienstverlening van de boekhouder.
        </p>
        <p>De prijs kan sterk verschillen afhankelijk van bijvoorbeeld:</p>
        <ul>
          <li>de omvang van je administratie;</li>
          <li>het aantal transacties;</li>
          <li>het aantal aangiftes;</li>
          <li>de werkzaamheden die je uitbesteedt;</li>
          <li>de complexiteit van je onderneming;</li>
          <li>en de mate waarin je zelf je administratie bijhoudt.</li>
        </ul>
        <p>
          Je kunt bijvoorbeeld zelf je facturen en kosten verwerken en een boekhouder alleen inschakelen voor controle
          en bepaalde aangiftes.
        </p>
        <p>Of je kunt vrijwel je volledige administratie uitbesteden.</p>
        <p>
          Daarom is er geen zinvol universeel bedrag voor <strong>“een boekhouder voor een zzp&apos;er”</strong>.
        </p>
        <p>Vraag offertes op basis van je eigen situatie als je administratie wilt uitbesteden.</p>

        <h2>Boekhoudprogramma + boekhouder</h2>
        <p>Je hoeft ook niet te kiezen tussen alleen software of alleen een boekhouder.</p>
        <p>Een combinatie kan juist handig zijn.</p>
        <p>Bijvoorbeeld:</p>
        <p>
          <strong>Boekhoudprogramma → dagelijkse administratie</strong>
        </p>
        <p>
          <strong>Boekhouder → controle en aangiftes</strong>
        </p>
        <p>Of:</p>
        <p>
          <strong>Boekhoudprogramma → jij verwerkt alles</strong>
        </p>
        <p>
          <strong>Boekhouder → controle één of enkele keren per jaar</strong>
        </p>
        <p>
          Dit kan een goede middenweg zijn wanneer je zelf controle wilt houden, maar niet alle fiscale of
          administratieve werkzaamheden wilt doen.
        </p>

        <h2>Hoeveel moet je als zzp&apos;er eigenlijk uitgeven?</h2>
        <p>Voor veel zzp&apos;ers is een uitgebreid boekhoudpakket niet noodzakelijk.</p>
        <p>
          Als je administratie klein is, kan een goedkoop pakket of zelfs een eenvoudige eigen administratie voldoende
          zijn.
        </p>
        <p>
          Heb je meer transacties en wil je automatisering, dan kan €10 tot €20 per maand een logische prijsklasse zijn.
        </p>
        <p>Wordt je administratie uitgebreider, dan kan een duurder pakket de moeite waard zijn.</p>
        <p>
          En als je helemaal geen tijd of zin hebt om je boekhouding te doen, kan een boekhouder belangrijker zijn dan
          het verschil tussen een programma van €10 en €20 per maand.
        </p>
        <p>De juiste vraag is daarom:</p>
        <blockquote>
          <p>
            <strong>Hoeveel administratie heb ik en hoeveel daarvan wil ik zelf doen?</strong>
          </p>
        </blockquote>

        <h2>Waar moet je op letten naast de prijs?</h2>
        <p>Een boekhoudprogramma vergelijken op alleen de maandprijs is meestal niet genoeg.</p>
        <p>Let bijvoorbeeld op:</p>

        <h3>Factureren</h3>
        <p>Kun je vanuit het programma professionele facturen maken?</p>

        <h3>Kosten verwerken</h3>
        <p>Kun je zakelijke kosten en bonnetjes makkelijk toevoegen?</p>

        <h3>Bankkoppeling</h3>
        <p>Kun je je bankrekening koppelen zodat transacties automatisch worden verwerkt?</p>

        <h3>Btw</h3>
        <p>Kun je je btw-administratie en aangifte goed bijhouden?</p>

        <h3>Automatisering</h3>
        <p>Hoeveel handmatig werk blijft er over?</p>

        <h3>Gebruikers</h3>
        <p>Kunnen jij en bijvoorbeeld je boekhouder of medewerker in hetzelfde systeem werken?</p>

        <h3>Limieten</h3>
        <p>
          Zijn er beperkingen op het aantal transacties, facturen, klanten, gebruikers of bankrekeningen?
        </p>

        <h3>Ondersteuning</h3>
        <p>Kun je hulp krijgen als je ergens niet uitkomt?</p>
        <p>
          Een programma van €5 per maand kan op papier aantrekkelijk zijn, maar als je tegen allerlei limieten
          aanloopt, kan een duurder pakket uiteindelijk beter passen.
        </p>

        <h2>Wat kost een boekhoudprogramma per jaar?</h2>
        <p>Het is makkelijk om alleen naar het maandbedrag te kijken.</p>
        <p>Maar je kunt beter ook naar de jaarlijkse kosten kijken.</p>
        <p>Bijvoorbeeld:</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[20rem] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">
                  Per maand
                </th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">
                  Per jaar
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['€5', '€60'],
                ['€10', '€120'],
                ['€15', '€180'],
                ['€20', '€240'],
                ['€30', '€360'],
                ['€40', '€480'],
              ].map(([maand, jaar]) => (
                <tr key={maand} className="border-b border-slate-100">
                  <td className="px-4 py-3 text-right font-medium text-slate-800">{maand}</td>
                  <td className="px-4 py-3 text-right">{jaar}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>Een verschil van €10 per maand betekent dus €120 per jaar.</p>
        <p>
          Dat klinkt misschien aanzienlijk, maar als het duurdere programma je iedere maand tijd bespaart, kan dat
          verschil relatief klein zijn.
        </p>
        <p>
          Controleer bij jaarlijkse abonnementen ook of de prijs per maand alleen geldt bij een jaarbetaling.
        </p>

        <h2>Wat is de beste prijs voor een zzp&apos;er?</h2>
        <p>Er is geen ideale prijs.</p>
        <p>
          Voor een zzp&apos;er met een eenvoudige administratie kan <strong>€5 tot €10 per maand</strong> al voldoende
          zijn.
        </p>
        <p>
          Voor iemand die meer automatisering en functies nodig heeft, kan <strong>€10 tot €20 per maand</strong> een
          betere keuze zijn.
        </p>
        <p>
          Voor uitgebreidere administraties kan <strong>€20+ per maand</strong> logisch zijn.
        </p>
        <p>
          En als je je administratie grotendeels wilt uitbesteden, kunnen de kosten van een{' '}
          <strong>boekhouder</strong> belangrijker worden dan de softwareprijs.
        </p>
        <p>Het doel is niet om zo weinig mogelijk te betalen.</p>
        <p>
          Het doel is om <strong>niet meer te betalen dan je nodig hebt</strong>.
        </p>

        <h2>Wil je niet alleen naar de prijs kijken?</h2>
        <p>De goedkoopste optie is niet automatisch de beste optie.</p>
        <p>
          Misschien heb je helemaal geen uitgebreid boekhoudprogramma nodig. Of misschien is een goedkoop pakket juist
          onhandig omdat je veel handmatig moet verwerken.
        </p>
        <p>Daarom kun je beter eerst bepalen wat voor administratie je hebt.</p>
        <GuideToolCta href="/tools/boekhoudprogramma-check" label="Doe de gratis boekhoudprogramma-check →" />
        <p>
          Beantwoord een paar vragen over bijvoorbeeld je facturen, kosten, transacties en behoefte aan automatisering.
          Je krijgt vervolgens een indicatie welke oplossing waarschijnlijk bij jouw situatie past en waarom.
        </p>

        <h2>Welke boekhoudprogramma&apos;s passen bij jouw situatie?</h2>
        <p>
          Heb je eenmaal bepaald welk type oplossing je nodig hebt, dan kun je de verschillende boekhoudprogramma&apos;s
          met elkaar vergelijken.
        </p>
        <p>
          Denk bijvoorbeeld aan programma&apos;s zoals <strong>Moneybird, Jortt en e-Boekhouden.nl</strong>.
        </p>
        <p>
          Ze verschillen onder andere in prijs, functies, automatisering en de manier waarop ze hun pakketten opbouwen.
        </p>
        <p>
          Bekijk daarom niet alleen welk programma het goedkoopste is, maar vooral welk programma aansluit op jouw
          administratie.
        </p>
        <GuideToolCta
          href="/blogs/beste-boekhoudprogramma-zzp"
          label="Bekijk de beste boekhoudprogramma's voor zzp'ers →"
        />
        <p>
          Daar vergelijken we verschillende boekhoudprogramma&apos;s op onder andere prijs, functies en gebruiksgemak.
        </p>

        <h2>Veelgestelde vragen</h2>
        <h3>Wat kost een boekhoudprogramma voor een zzp&apos;er?</h3>
        <p>
          De prijs varieert van gratis of enkele euro&apos;s per maand tot €20, €30 of €40+ per maand. De uiteindelijke
          prijs hangt af van het programma en het pakket dat je kiest.
        </p>
        <h3>Wat is een goedkoop boekhoudprogramma voor zzp&apos;ers?</h3>
        <p>
          Goedkope boekhoudprogramma&apos;s zijn onder andere te vinden in de prijsklasse van ongeveer €5 tot €10 per
          maand. Kijk wel naar welke functies en limieten bij die prijs horen.
        </p>
        <h3>Wat is het goedkoopste boekhoudprogramma?</h3>
        <p>
          Dat hangt af van je situatie en van wat je onder goedkoop verstaat. Een lage maandprijs is niet automatisch
          de laagste totale kosten als je daardoor veel handmatig werk moet doen of snel een duurder pakket nodig hebt.
        </p>
        <h3>Is een gratis boekhoudprogramma goed genoeg?</h3>
        <p>
          Voor een eenvoudige administratie kan een gratis oplossing voldoende zijn. Controleer wel of het daadwerkelijk
          om gratis gebruik gaat en welke functies en limieten daarbij horen.
        </p>
        <h3>Hoeveel kost Moneybird?</h3>
        <p>
          Op het moment van schrijven worden de pakketten van Moneybird weergegeven vanaf €15 per maand. Er zijn
          daarnaast uitgebreidere pakketten van €29 en €41 per maand. De beschikbare functies en limieten verschillen
          per pakket.
        </p>
        <h3>Hoeveel kost e-Boekhouden.nl?</h3>
        <p>
          Op het moment van schrijven wordt het ZZP-pakket weergegeven voor €4,98 per maand bij de aangeboden korting.
          Daarnaast worden pakketten weergegeven vanaf €7,25 per maand en €12 per maand voor boekhouden en factureren.
          Voor startende ondernemers is er bovendien een startersaanbod waarbij de eerste 15 maanden gratis kunnen
          zijn.
        </p>
        <h3>Is een duurder boekhoudprogramma beter?</h3>
        <p>
          Niet automatisch. Een duurder programma biedt vaak meer functies, automatisering of hogere limieten. Als je
          die functies niet nodig hebt, kan een goedkoper programma beter bij je passen.
        </p>
        <h3>Is een boekhouder goedkoper dan een boekhoudprogramma?</h3>
        <p>
          Niet per definitie. Een boekhouder kost meer dan alleen software, maar je krijgt daar persoonlijke
          dienstverlening en kennis voor terug. De juiste keuze hangt af van hoeveel administratie je zelf wilt doen.
        </p>
        <h3>Kan ik als zzp&apos;er eerst goedkoop beginnen?</h3>
        <p>
          Ja. Je kunt bijvoorbeeld beginnen met een eenvoudige administratie en later overstappen naar uitgebreidere
          software wanneer je onderneming groeit.
        </p>

        <h2>Conclusie</h2>
        <p>Een boekhoudprogramma voor zzp&apos;ers hoeft niet duur te zijn.</p>
        <p>
          Je vindt oplossingen van <strong>enkele euro&apos;s per maand</strong>, maar ook uitgebreidere pakketten van{' '}
          <strong>€20, €30 of €40+ per maand</strong>. Daarnaast kun je ervoor kiezen om je administratie geheel of
          gedeeltelijk uit te besteden aan een boekhouder.
        </p>
        <p>De belangrijkste vraag is daarom niet:</p>
        <p>
          <strong>“Wat is het goedkoopste boekhoudprogramma?”</strong>
        </p>
        <p>Maar:</p>
        <p>
          <strong>“Welke administratie heb ik en welke functies heb ik daadwerkelijk nodig?”</strong>
        </p>
        <p>Heb je weinig facturen en kosten? Dan kan een goedkope oplossing voldoende zijn.</p>
        <p>
          Heb je meer transacties en wil je automatisering? Dan kan een uitgebreider programma de extra kosten waard
          zijn.
        </p>
        <p>
          Wil je vooral zo min mogelijk tijd aan je administratie besteden? Dan kan een combinatie van software en een
          boekhouder interessant zijn.
        </p>
        <p>
          <strong>Wil je eerst bepalen welke oplossing bij jouw situatie past?</strong>
        </p>
        <GuideToolCta href="/tools/boekhoudprogramma-check" label="Doe de gratis boekhoudprogramma-check →" />
        <p>En als je weet welk type boekhoudprogramma je zoekt:</p>
        <GuideToolCta
          href="/blogs/beste-boekhoudprogramma-zzp"
          label="Bekijk de beste boekhoudprogramma's voor zzp'ers →"
        />
      </>
    ),
  },
  {
    slug: 'gratis-boekhoudprogramma-zzp',
    cluster: 'boekhouden',
    seoTitle: 'Gratis boekhoudprogramma zzp: wat is echt gratis?',
    title: "Gratis boekhoudprogramma voor zzp'ers: is gratis genoeg?",
    excerpt:
      'Op zoek naar een gratis boekhoudprogramma voor zzp? Ontdek wat gratis software kan, waar de beperkingen zitten en wanneer betaald boekhouden slimmer is.',
    keywords:
      'gratis boekhoudprogramma zzp, gratis boekhoudprogramma voor zzp, boekhoudprogramma zzp gratis, beste gratis boekhoudprogramma zzp, gratis boekhouden zzp, gratis boekhouding zzp, goedkoop boekhoudprogramma zzp',
    tool: {
      href: '/tools/boekhoudprogramma-check',
      label: 'Doe de boekhoudprogramma-check',
      ctaLabel: 'Doe de boekhoudprogramma-check',
      relatedTitle: 'Boekhoudprogramma-check',
      relatedExcerpt:
        "Ontdek welk type boekhoudprogramma bij jouw zzp-administratie past. Gratis, 8 korte vragen, geen account nodig.",
    },
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Blogs/Gratis%20boekhoudprogramma%20voor%20zzp%20ers.jpg',
      alt: "Gratis boekhoudprogramma voor zzp'ers: is gratis genoeg?",
    },
    datePublished: '2026-09-05',
    dateModified: '2026-09-05',
    relatedSlugs: [
      'beste-boekhoudprogramma-zzp',
      'wanneer-boekhoudsoftware-nodig-zzp',
      'gratis-factuurtool-vs-boekhoudprogramma',
    ],
    relatedGuideSlugs: [
      'kosten-boekhoudprogramma-zzp',
      'boekhouding-zzp',
      'zelf-boekhouden-zzp',
    ],
    faq: [
      {
        question: "Is er een volledig gratis boekhoudprogramma voor zzp'ers?",
        answer:
          'Dat kan, maar je moet goed controleren welke functies daadwerkelijk gratis zijn. Sommige aanbieders hebben een gratis basisversie of tijdelijke gratis periode, terwijl uitgebreidere functies betaald zijn.',
      },
      {
        question: "Wat is het beste gratis boekhoudprogramma voor zzp'ers?",
        answer:
          'Dat hangt af van je administratie. Als je alleen facturen nodig hebt, kan een gratis factuurtool voldoende zijn. Als je ook kosten, banktransacties en btw wilt verwerken, heb je meer uitgebreide software nodig.',
      },
      {
        question: "Kan ik als zzp'er gratis boekhouden?",
        answer:
          'Ja, dat kan bij een eenvoudige administratie. Je kunt bijvoorbeeld je administratie zelf bijhouden met een spreadsheet of gebruikmaken van gratis of tijdelijk gratis software.',
      },
      {
        question: 'Is FactuurBaas een gratis boekhoudprogramma?',
        answer:
          'Nee. FactuurBaas is een gratis online factuurtool. Je kunt er professionele facturen mee maken zonder account en als PDF downloaden. Voor een volledige boekhouding moet je je overige administratie op een andere manier bijhouden.',
      },
      {
        question: 'Is een gratis boekhoudprogramma goed genoeg?',
        answer:
          'Voor sommige zzp’ers wel. Vooral wanneer je weinig facturen, kosten en transacties hebt. Wordt je administratie groter, dan kan betaald boekhoudprogramma interessanter worden vanwege extra functies en automatisering.',
      },
      {
        question: "Wat is het goedkoopste boekhoudprogramma voor zzp'ers?",
        answer:
          'Er is geen programma dat in iedere situatie het goedkoopste is. Kijk naast de maandprijs ook naar functies, limieten en eventuele tijdelijke aanbiedingen.',
      },
      {
        question: 'Is een gratis proefperiode hetzelfde als gratis boekhouden?',
        answer:
          'Nee. Bij een gratis proefperiode betaal je meestal niets gedurende een beperkte periode. Daarna begint het betaalde abonnement.',
      },
      {
        question: 'Wanneer moet ik overstappen van gratis naar betaald?',
        answer:
          'Een logisch moment is wanneer je administratie groeit of wanneer je merkt dat je gratis oplossing je te veel handmatig werk kost.',
      },
      {
        question: 'Heb ik als starter een boekhoudprogramma nodig?',
        answer:
          'Niet automatisch. Als je administratie klein is, kun je mogelijk beginnen met een eenvoudige oplossing. Naarmate je onderneming groeit, kun je altijd overstappen naar uitgebreidere software.',
      },
    ],
    content: (
      <>
        <p>
          Ben je zzp&apos;er en zoek je een <strong>gratis boekhoudprogramma</strong>? Dan kom je al snel allerlei
          programma&apos;s tegen die gratis lijken, maar waarbij belangrijke functies alleen in een betaald pakket
          beschikbaar zijn.
        </p>
        <p>Daarnaast is er een andere vraag die je jezelf misschien eerst moet stellen:</p>
        <p>
          <strong>Heb ik eigenlijk wel een volledig boekhoudprogramma nodig?</strong>
        </p>
        <p>
          Als je weinig facturen, kosten en transacties hebt, kan een eenvoudige administratie of een gratis
          factuurtool misschien al voldoende zijn.
        </p>
        <p>
          Heb je wel een uitgebreidere administratie, dan kan betaald boekhoudprogramma juist interessanter zijn.
        </p>
        <p>
          In deze gids leggen we uit wat je van gratis boekhoudsoftware mag verwachten, waar de beperkingen zitten en
          wanneer gratis boekhouden voor een zzp&apos;er voldoende is.
        </p>

        <h2>Wat is een gratis boekhoudprogramma?</h2>
        <p>
          Met een gratis boekhoudprogramma kun je zonder maandelijkse abonnementskosten je administratie bijhouden.
        </p>
        <p>Maar “gratis” kan verschillende dingen betekenen.</p>
        <p>Een programma kan bijvoorbeeld:</p>
        <ul>
          <li>permanent gratis zijn;</li>
          <li>alleen een gratis basispakket hebben;</li>
          <li>tijdelijk gratis zijn;</li>
          <li>een gratis proefperiode aanbieden;</li>
          <li>of bepaalde functies gratis aanbieden terwijl andere functies betaald zijn.</li>
        </ul>
        <p>
          Daarom is het belangrijk om niet alleen naar het woord <strong>gratis</strong> te kijken.
        </p>
        <p>Vraag vooral:</p>
        <blockquote>
          <p>
            <strong>Welke administratie kan ik daadwerkelijk gratis bijhouden?</strong>
          </p>
        </blockquote>

        <h2>Gratis factuurprogramma is niet hetzelfde als gratis boekhoudprogramma</h2>
        <p>Dit verschil is belangrijk.</p>
        <p>
          Een <strong>factuurprogramma</strong> is vooral bedoeld om verkoopfacturen te maken.
        </p>
        <p>
          Een <strong>boekhoudprogramma</strong> richt zich op een veel bredere administratie.
        </p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[36rem] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col" />
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Gratis factuurtool
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Boekhoudprogramma
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Facturen maken', '✅', 'Vaak'],
                ['Facturen bewaren', '✅', 'Vaak'],
                ['Kosten bijhouden', 'Beperkt / zelf', '✅'],
                ['Banktransacties', 'Zelf bijhouden', 'Vaak'],
                ['Btw-administratie', 'Beperkt / zelf', 'Vaak'],
                ['Financiële overzichten', 'Beperkt', 'Vaak'],
                ['Automatisering', 'Beperkt', 'Vaak'],
                ['Volledige boekhouding', '❌', '✅'],
              ].map(([feature, factuur, boekhoud]) => (
                <tr key={feature} className="border-b border-slate-100">
                  <td className="px-4 py-3 font-medium text-slate-800">{feature}</td>
                  <td className="px-4 py-3">{factuur}</td>
                  <td className="px-4 py-3">{boekhoud}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Dat betekent dat een gratis factuurtool niet automatisch een gratis boekhoudprogramma is.
        </p>
        <p>En dat hoeft ook helemaal geen probleem te zijn.</p>
        <p>
          Als je alleen facturen hoeft te maken en je overige administratie klein en overzichtelijk is, heb je
          misschien helemaal geen uitgebreid boekhoudprogramma nodig.
        </p>
        <p>
          Meer over dit verschil lees je in{' '}
          <Link
            href="/blogs/gratis-factuurtool-vs-boekhoudprogramma"
            className="text-warm-orange hover:underline"
          >
            factuurprogramma of boekhoudprogramma
          </Link>
          .
        </p>

        <h2>Wanneer is een gratis factuurtool genoeg?</h2>
        <p>Een gratis factuurtool kan interessant zijn als je administratie eenvoudig is.</p>
        <p>Bijvoorbeeld wanneer je:</p>
        <ul>
          <li>weinig klanten hebt;</li>
          <li>weinig facturen verstuurt;</li>
          <li>weinig zakelijke kosten hebt;</li>
          <li>weinig banktransacties hebt;</li>
          <li>en je overige administratie zelf overzichtelijk kunt bijhouden.</li>
        </ul>
        <p>
          In dat geval kan het onnodig zijn om iedere maand te betalen voor functies die je nauwelijks gebruikt.
        </p>

        <h3>FactuurBaas als gratis factuurtool</h3>
        <p>
          Met <strong>FactuurBaas</strong> kun je gratis online facturen maken zonder account.
        </p>
        <p>Je maakt je factuur, downloadt deze als PDF en verstuurt hem zelf naar je klant.</p>
        <p>
          Dat maakt FactuurBaas vooral interessant voor zzp&apos;ers die{' '}
          <strong>een gratis manier zoeken om professioneel te factureren</strong>, maar nog geen uitgebreide
          boekhoudsoftware nodig hebben.
        </p>
        <GuideToolCta href="/create-invoice" label="Maak gratis een factuur →" />
        <p>Let wel op het verschil:</p>
        <p>
          <strong>FactuurBaas is een gratis factuurtool, geen volledig boekhoudprogramma.</strong>
        </p>
        <p>Je overige administratie moet je dus op een andere manier bijhouden.</p>

        <h2>Wanneer is gratis boekhoudsoftware voldoende?</h2>
        <p>
          Een gratis boekhoudprogramma kan voldoende zijn wanneer je administratie klein is én de gratis versie alle
          functies bevat die jij nodig hebt.
        </p>
        <p>Kijk bijvoorbeeld of je gratis:</p>
        <ul>
          <li>inkomsten kunt verwerken;</li>
          <li>zakelijke kosten kunt registreren;</li>
          <li>facturen kunt maken;</li>
          <li>btw kunt bijhouden;</li>
          <li>banktransacties kunt verwerken;</li>
          <li>documenten kunt bewaren;</li>
          <li>en de overzichten kunt maken die je nodig hebt.</li>
        </ul>
        <p>
          Als één van deze functies achter een betaalde versie zit, moet je bepalen of je zonder die functie kunt
          werken.
        </p>

        <h2>Wat zit er vaak niet in een gratis pakket?</h2>
        <p>Gratis software heeft vaak beperkingen.</p>
        <p>Welke beperkingen gelden, verschilt per programma, maar denk bijvoorbeeld aan:</p>
        <ul>
          <li>een maximum aantal transacties;</li>
          <li>een maximum aantal facturen;</li>
          <li>geen of beperkte bankkoppelingen;</li>
          <li>minder automatisering;</li>
          <li>minder gebruikers;</li>
          <li>beperkte rapportages;</li>
          <li>geen uitgebreide facturatie;</li>
          <li>of functies die pas in een betaald pakket beschikbaar zijn.</li>
        </ul>
        <p>
          Daarom kan een gratis pakket prima zijn om te starten, maar minder geschikt worden zodra je onderneming
          groeit.
        </p>

        <h2>Gratis betekent niet altijd gratis</h2>
        <p>Let ook op het verschil tussen:</p>
        <p>
          <strong>Gratis</strong>
        </p>
        <p>en:</p>
        <p>
          <strong>Eerste maanden gratis.</strong>
        </p>
        <p>
          Een gratis proefperiode kan handig zijn om software uit te proberen. Maar als je daarna €15, €25 of €40 per
          maand betaalt, is het uiteindelijk geen gratis boekhoudprogramma.
        </p>
        <p>Kijk daarom altijd naar:</p>
        <p>
          <strong>Wat betaal ik na de gratis periode?</strong>
        </p>
        <p>En:</p>
        <p>
          <strong>Welke functies krijg ik daarna voor dat bedrag?</strong>
        </p>
        <p>Dat is vooral belangrijk wanneer je een startersaanbieding ziet.</p>

        <h2>Een paar gratis opties voor zzp&apos;ers</h2>
        <p>
          Er zijn verschillende manieren waarop je als zzp&apos;er gratis of bijna gratis kunt beginnen.
        </p>

        <h3>1. Een gratis factuurtool</h3>
        <p>Als je vooral facturen nodig hebt, kun je een gratis factuurtool gebruiken.</p>
        <p>
          Met FactuurBaas kun je bijvoorbeeld zonder account een professionele factuur maken en als PDF downloaden.
        </p>
        <p>
          Daarmee hoef je niet direct een betaald boekhoudprogramma af te sluiten als je administratie verder
          eenvoudig is.
        </p>
        <GuideToolCta href="/create-invoice" label="Maak gratis een factuur met FactuurBaas →" />

        <h3>2. Een spreadsheet</h3>
        <p>
          Je kunt je inkomsten en kosten ook zelf bijhouden in Excel, Google Sheets of een andere spreadsheet.
        </p>
        <p>Dit kost geen abonnementskosten als je de software al tot je beschikking hebt.</p>
        <p>Het nadeel is dat je veel zelf moet verwerken.</p>
        <p>
          Voor een heel kleine administratie kan dat prima werken. Zodra je veel transacties krijgt, wordt het al
          snel minder aantrekkelijk.
        </p>

        <h3>3. Een gratis of tijdelijk gratis boekhoudpakket</h3>
        <p>
          Sommige aanbieders hebben een gratis basisversie, gratis proefperiode of tijdelijke aanbieding.
        </p>
        <p>Dat kan interessant zijn wanneer je daadwerkelijk boekhoudsoftware nodig hebt.</p>
        <p>
          Controleer wel altijd welke functies onderdeel zijn van de gratis versie en wat je na een eventuele
          actieperiode betaalt.
        </p>

        <h2>Gratis boekhouden versus goedkoop boekhouden</h2>
        <p>Stel dat je kunt kiezen tussen:</p>
        <p>
          <strong>Gratis → veel zelf doen</strong>
        </p>
        <p>of:</p>
        <p>
          <strong>€10 per maand → meer automatisering</strong>
        </p>
        <p>Dan is gratis niet automatisch de goedkoopste optie.</p>
        <p>
          Als je door gratis software iedere maand twee uur extra administratie hebt, betaal je misschien met je
          tijd.
        </p>
        <p>Daarom kun je beter kijken naar:</p>
        <blockquote>
          <p>
            <strong>Wat kost de software + hoeveel tijd kost mijn administratie?</strong>
          </p>
        </blockquote>
        <p>
          Voor sommige zzp&apos;ers is €10 of €15 per maand een kleine prijs voor veel minder handmatig werk.
        </p>
        <p>
          Voor anderen is dat geld juist onnodig als ze maar een paar facturen per maand hebben.
        </p>

        <h2>Wanneer is een betaald boekhoudprogramma de moeite waard?</h2>
        <p>Een betaald programma wordt interessanter wanneer je administratie groeit.</p>
        <p>Bijvoorbeeld als je:</p>
        <ul>
          <li>regelmatig facturen verstuurt;</li>
          <li>veel zakelijke kosten hebt;</li>
          <li>veel bonnetjes verwerkt;</li>
          <li>veel banktransacties hebt;</li>
          <li>een bankkoppeling wilt;</li>
          <li>minder handmatig werk wilt;</li>
          <li>automatisch meer van je administratie wilt verwerken;</li>
          <li>of meer financiële overzichten nodig hebt.</li>
        </ul>
        <p>Dan betaal je niet alleen voor software.</p>
        <p>
          Je betaalt vooral voor <strong>tijdwinst, overzicht en automatisering</strong>.
        </p>

        <h2>Wat kost een goedkoop boekhoudprogramma?</h2>
        <p>Je hoeft ook niet meteen €30 of €40 per maand uit te geven.</p>
        <p>Er zijn boekhoudprogramma&apos;s in verschillende prijsklassen.</p>
        <p>Je kunt grofweg denken aan:</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[32rem] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Prijs
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Wat je kunt verwachten
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['€0', 'Basis of tijdelijke gratis oplossing'],
                ['€5–€10 p/m', 'Eenvoudige boekhouding'],
                ['€10–€20 p/m', 'Meer functies en gemak'],
                ['€20–€30 p/m', 'Uitgebreidere administratie en automatisering'],
                ['€30+ p/m', 'Uitgebreide pakketten en hogere limieten'],
              ].map(([prijs, verwachting]) => (
                <tr key={prijs} className="border-b border-slate-100">
                  <td className="px-4 py-3 font-medium text-slate-800">{prijs}</td>
                  <td className="px-4 py-3">{verwachting}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>De exacte functies verschillen per aanbieder.</p>
        <p>
          Een goedkoop betaald pakket kan daarom soms interessanter zijn dan een gratis pakket met veel beperkingen.
        </p>
        <GuideToolCta
          href="/gidsen/kosten-boekhoudprogramma-zzp"
          label="Lees wat een boekhoudprogramma voor zzp'ers kost →"
        />

        <h2>Gratis boekhoudprogramma voor starters</h2>
        <p>
          Als je net begint als zzp&apos;er, is de verleiding groot om alles gratis te willen doen.
        </p>
        <p>Dat is begrijpelijk.</p>
        <p>Je hebt misschien maar een paar klanten en wilt nog geen vaste maandelijkse kosten.</p>
        <p>Dat betekent niet dat je per se een gratis boekhoudprogramma nodig hebt.</p>
        <p>Je kunt bijvoorbeeld beginnen met:</p>
        <p>
          <strong>Factuurtool + eenvoudige eigen administratie</strong>
        </p>
        <p>en later overstappen wanneer je administratie groter wordt.</p>
        <p>
          Of je kunt direct een goedkoop boekhoudprogramma gebruiken als je verwacht dat je veel facturen en kosten
          krijgt.
        </p>
        <p>
          Het is vooral belangrijk dat je <strong>niet betaalt voor functies die je niet nodig hebt</strong>, maar ook
          niet te lang vasthoudt aan een gratis oplossing die je onnodig veel tijd kost.
        </p>

        <h2>Wat is het beste gratis boekhoudprogramma voor zzp&apos;ers?</h2>
        <p>Er is geen gratis boekhoudprogramma dat voor iedere zzp&apos;er het beste is.</p>
        <p>De juiste keuze hangt af van wat je onder “gratis” verstaat en wat je nodig hebt.</p>

        <h3>Heb je vooral een factuur nodig?</h3>
        <p>Dan kan een gratis factuurtool voldoende zijn.</p>
        <p>
          <strong>FactuurBaas</strong> is hiervoor een eenvoudige optie: je kunt zonder account gratis een factuur
          maken en als PDF downloaden.
        </p>

        <h3>Wil je je volledige administratie bijhouden?</h3>
        <p>Dan heb je een oplossing nodig die verder gaat dan alleen factureren.</p>
        <p>Kijk dan bijvoorbeeld naar:</p>
        <ul>
          <li>inkomsten;</li>
          <li>kosten;</li>
          <li>btw;</li>
          <li>banktransacties;</li>
          <li>rapportages;</li>
          <li>automatisering;</li>
          <li>en eventuele limieten.</li>
        </ul>

        <h3>Wil je gratis beginnen, maar later uitbreiden?</h3>
        <p>Dan kan een boekhoudprogramma met een gratis startersperiode interessant zijn.</p>
        <p>
          Let daarbij vooral op de prijs en functies nadat de gratis periode afgelopen is.
        </p>

        <h2>Wat is beter: gratis of betaald?</h2>
        <p>Dat hangt af van je administratie.</p>

        <h3>Gratis is waarschijnlijk voldoende als:</h3>
        <ul>
          <li>je weinig facturen hebt;</li>
          <li>je weinig kosten hebt;</li>
          <li>je administratie overzichtelijk is;</li>
          <li>je weinig transacties hebt;</li>
          <li>en je bereid bent om een deel van het werk zelf te doen.</li>
        </ul>

        <h3>Betaald is waarschijnlijk interessanter als:</h3>
        <ul>
          <li>je veel transacties hebt;</li>
          <li>je veel kosten verwerkt;</li>
          <li>je een bankkoppeling wilt;</li>
          <li>je veel tijd kwijt bent aan administratie;</li>
          <li>je meer automatisering wilt;</li>
          <li>of je administratie groeit.</li>
        </ul>
        <p>Er is dus geen regel dat je als startende zzp&apos;er altijd gratis moet beginnen.</p>

        <h2>Gratis boekhoudprogramma of boekhouder?</h2>
        <p>Een boekhoudprogramma en een boekhouder lossen verschillende problemen op.</p>
        <p>
          Software helpt je om je administratie te organiseren en bepaalde werkzaamheden te automatiseren.
        </p>
        <p>Een boekhouder levert daarnaast persoonlijke kennis en ondersteuning.</p>
        <p>Als je weinig administratie hebt en het zelf wilt doen, kan software voldoende zijn.</p>
        <p>
          Heb je weinig tijd, vind je administratie lastig of heb je een complexere onderneming? Dan kan een
          boekhouder interessanter zijn.
        </p>
        <p>Je kunt beide ook combineren.</p>
        <p>Bijvoorbeeld:</p>
        <p>
          <strong>Boekhoudprogramma → dagelijkse administratie</strong>
        </p>
        <p>
          <strong>Boekhouder → controle en aangiftes</strong>
        </p>
        <p>
          Zo houd je een deel van de administratie zelf in de hand, maar heb je professionele hulp waar dat nodig is.
        </p>

        <h2>Wil je weten wat jij echt nodig hebt?</h2>
        <p>
          De vraag <strong>“Wat is het beste gratis boekhoudprogramma?”</strong> is misschien niet de beste eerste
          vraag.
        </p>
        <p>Begin liever met:</p>
        <blockquote>
          <p>
            <strong>“Hoe uitgebreid is mijn administratie?”</strong>
          </p>
        </blockquote>
        <p>
          Heb je vijf facturen per maand en nauwelijks kosten? Dan heb je waarschijnlijk andere behoeften dan iemand
          met vijftig facturen, veel zakelijke uitgaven en honderden banktransacties.
        </p>
        <p>
          Met de gratis <strong>boekhoudprogramma-check</strong> kun je kijken welke oplossing waarschijnlijk bij jouw
          situatie past.
        </p>
        <GuideToolCta href="/tools/boekhoudprogramma-check" label="Doe de gratis boekhoudprogramma-check →" />
        <p>
          Je krijgt een indicatie of een eenvoudige factuurtool, basis boekhoudsoftware, uitgebreider
          boekhoudprogramma of een combinatie met een boekhouder waarschijnlijk het beste aansluit — en waarom.
        </p>

        <h2>Welke boekhoudprogramma&apos;s zijn geschikt?</h2>
        <p>
          Als uit de check blijkt dat je daadwerkelijk boekhoudsoftware nodig hebt, kun je daarna de verschillende
          programma&apos;s vergelijken.
        </p>
        <p>
          Voor zzp&apos;ers zijn bijvoorbeeld <strong>Moneybird, Jortt en e-Boekhouden.nl</strong> interessante opties
          om naast elkaar te leggen.
        </p>
        <p>
          Ze verschillen in prijs, functies, automatisering en de manier waarop hun pakketten zijn opgebouwd.
        </p>
        <GuideToolCta
          href="/blogs/beste-boekhoudprogramma-zzp"
          label="Bekijk de beste boekhoudprogramma's voor zzp'ers →"
        />
        <p>Daar kun je verder kijken welke programma&apos;s bij jouw situatie passen.</p>

        <h2>Veelgestelde vragen</h2>
        <h3>Is er een volledig gratis boekhoudprogramma voor zzp&apos;ers?</h3>
        <p>
          Dat kan, maar je moet goed controleren welke functies daadwerkelijk gratis zijn. Sommige aanbieders hebben
          een gratis basisversie of tijdelijke gratis periode, terwijl uitgebreidere functies betaald zijn.
        </p>
        <h3>Wat is het beste gratis boekhoudprogramma voor zzp&apos;ers?</h3>
        <p>
          Dat hangt af van je administratie. Als je alleen facturen nodig hebt, kan een gratis factuurtool voldoende
          zijn. Als je ook kosten, banktransacties en btw wilt verwerken, heb je meer uitgebreide software nodig.
        </p>
        <h3>Kan ik als zzp&apos;er gratis boekhouden?</h3>
        <p>
          Ja, dat kan bij een eenvoudige administratie. Je kunt bijvoorbeeld je administratie zelf bijhouden met een
          spreadsheet of gebruikmaken van gratis of tijdelijk gratis software.
        </p>
        <h3>Is FactuurBaas een gratis boekhoudprogramma?</h3>
        <p>
          Nee. FactuurBaas is een gratis online factuurtool. Je kunt er professionele facturen mee maken zonder
          account en als PDF downloaden. Voor een volledige boekhouding moet je je overige administratie op een andere
          manier bijhouden.
        </p>
        <h3>Is een gratis boekhoudprogramma goed genoeg?</h3>
        <p>
          Voor sommige zzp&apos;ers wel. Vooral wanneer je weinig facturen, kosten en transacties hebt. Wordt je
          administratie groter, dan kan betaald boekhoudprogramma interessanter worden vanwege extra functies en
          automatisering.
        </p>
        <h3>Wat is het goedkoopste boekhoudprogramma voor zzp&apos;ers?</h3>
        <p>
          Er is geen programma dat in iedere situatie het goedkoopste is. Kijk naast de maandprijs ook naar functies,
          limieten en eventuele tijdelijke aanbiedingen.
        </p>
        <h3>Is een gratis proefperiode hetzelfde als gratis boekhouden?</h3>
        <p>
          Nee. Bij een gratis proefperiode betaal je meestal niets gedurende een beperkte periode. Daarna begint het
          betaalde abonnement.
        </p>
        <h3>Wanneer moet ik overstappen van gratis naar betaald?</h3>
        <p>
          Een logisch moment is wanneer je administratie groeit of wanneer je merkt dat je gratis oplossing je te veel
          handmatig werk kost.
        </p>
        <h3>Heb ik als starter een boekhoudprogramma nodig?</h3>
        <p>
          Niet automatisch. Als je administratie klein is, kun je mogelijk beginnen met een eenvoudige oplossing.
          Naarmate je onderneming groeit, kun je altijd overstappen naar uitgebreidere software.
        </p>

        <h2>Conclusie</h2>
        <p>
          Een <strong>gratis boekhoudprogramma voor zzp&apos;ers</strong> kan een goede oplossing zijn, maar gratis is
          niet altijd nodig en ook niet altijd de goedkoopste keuze.
        </p>
        <p>
          Heb je een eenvoudige administratie? Dan kun je mogelijk prima beginnen met een gratis factuurtool,
          spreadsheet of eenvoudige boekhoudoplossing.
        </p>
        <p>
          Heb je veel facturen, kosten en transacties? Dan kan betaald boekhoudprogramma interessanter zijn omdat je
          meer automatisering en overzicht krijgt.
        </p>
        <p>Kijk daarom niet alleen naar de prijs.</p>
        <p>Kijk naar:</p>
        <p>
          <strong>Wat heb ik nodig?</strong>
        </p>
        <p>
          <strong>Hoeveel administratie heb ik?</strong>
        </p>
        <p>
          <strong>Hoeveel wil ik zelf doen?</strong>
        </p>
        <p>
          <strong>En hoeveel tijd bespaart software mij?</strong>
        </p>
        <p>Wil je eerst bepalen welke oplossing bij jouw administratie past?</p>
        <GuideToolCta href="/tools/boekhoudprogramma-check" label="Doe de gratis boekhoudprogramma-check →" />
        <p>En als je daarna verschillende programma&apos;s wilt vergelijken:</p>
        <GuideToolCta
          href="/blogs/beste-boekhoudprogramma-zzp"
          label="Bekijk de beste boekhoudprogramma's voor zzp'ers →"
        />
        <p>Of heb je alleen een professionele factuur nodig?</p>
        <GuideToolCta href="/create-invoice" label="Maak gratis een factuur met FactuurBaas →" />
      </>
    ),
  },
];

export function getGuideBySlug(slug) {
  return guides.find((guide) => guide.slug === slug);
}

export function getGuideListItems() {
  return guides.map(({ slug, title, excerpt, image, datePublished, dateModified, cluster }) => ({
    slug,
    title,
    excerpt,
    image,
    datePublished,
    dateModified,
    cluster,
    type: 'guide',
    href: `/gidsen/${slug}`,
  }));
}

/** Tool-page cards linking to guides in a cluster. */
export function getGuideLinksByCluster(cluster) {
  return guides
    .filter((guide) => guide.cluster === cluster)
    .map(({ slug, title, excerpt }) => ({
      href: `/gidsen/${slug}`,
      title,
      description: excerpt,
    }));
}

export function getGuideLinksBySlugs(slugs) {
  return slugs
    .map((slug) => {
      const guide = guides.find((g) => g.slug === slug);
      if (!guide) return null;
      return {
        href: `/gidsen/${guide.slug}`,
        title: guide.title,
        description: guide.excerpt,
      };
    })
    .filter(Boolean);
}

export function buildGuideItemListSchema(guideLinks, listName) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: listName,
    itemListElement: guideLinks.map((guide, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `https://factuurbaas.nl${guide.href}`,
      name: guide.title,
    })),
  };
}

export function getRelatedGuideItems(guide) {
  const blogItems = (guide.relatedSlugs || [])
    .map((slug) => {
      const article = articles.find((a) => a.slug === slug);
      if (!article) return null;
      return { type: 'blog', slug: article.slug, title: article.title, excerpt: article.excerpt, image: article.image };
    })
    .filter(Boolean);

  const relatedGuideItems = (guide.relatedGuideSlugs || [])
    .map((slug) => {
      const related = guides.find((g) => g.slug === slug);
      if (!related) return null;
      return {
        type: 'guide',
        slug: related.slug,
        title: related.title,
        excerpt: related.excerpt,
        image: related.image,
      };
    })
    .filter(Boolean);

  const toolItem = guide.tool
    ? {
        type: 'tool',
        href: guide.tool.href,
        title: guide.tool.relatedTitle || 'BTW calculator',
        excerpt:
          guide.tool.relatedExcerpt ||
          'Bereken bedragen inclusief of exclusief btw. 9%, 21% of 0%. Gratis en zonder account.',
        image: guide.image,
      }
    : null;

  return [...relatedGuideItems, ...blogItems, ...(toolItem ? [toolItem] : [])];
}
