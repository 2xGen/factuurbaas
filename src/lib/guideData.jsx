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
    seoTitle: 'Btw uit een bedrag halen – bereken inclusief naar exclusief (21% en 9%)',
    title: 'Btw uit een bedrag halen: zo splits je een inclusief bedrag',
    excerpt:
      'Hoe haal je btw uit een bedrag? Leer stap voor stap hoe je een inclusief bedrag omzet naar exclusief btw, met voorbeelden voor 21% en 9%. Gratis BTW calculator.',
    keywords:
      'btw uit bedrag halen, btw uit inclusief bedrag halen, btw splitsen, inclusief naar exclusief btw, 21% btw uit bedrag, 9% btw uit bedrag, btw calculator',
    tool: {
      href: '/tools/btw-calculator',
      label: 'Bereken direct btw',
      ctaLabel: 'Open gratis BTW calculator',
    },
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Factuurbaas/Btw%20uit%20een%20bedrag%20halen.jpg',
      alt: 'Btw uit een bedrag halen: calculator en euro biljetten',
    },
    datePublished: '2026-07-15',
    dateModified: '2026-07-15',
    relatedSlugs: ['btw-factuur-zzp', 'factureren-zonder-account'],
    relatedGuideSlugs: ['btw-terugrekenen', 'inclusief-btw-naar-exclusief-btw', 'verschil-9-en-21-btw', 'welke-btw-rekenen-zzper'],
    faq: [
      {
        question: 'Hoe haal je btw uit een inclusief bedrag?',
        answer:
          'Deel het totaalbedrag door 1,21 (bij 21% btw) of 1,09 (bij 9% btw). Het resultaat is het bedrag exclusief btw. Trek dat af van het totaalbedrag om het btw-deel te krijgen.',
      },
      {
        question: 'Hoeveel btw zit er in €242 inclusief btw?',
        answer:
          'Bij 21% btw: €242 ÷ 1,21 = €200 exclusief btw. De btw is €242 − €200 = €42.',
      },
      {
        question: 'Wat is het verschil tussen btw uit een bedrag halen en btw terugrekenen?',
        answer:
          'Het is dezelfde berekening. "Btw uit een bedrag halen" benadrukt dat je het btw-deel uit een totaalbedrag wilt isoleren. "Btw terugrekenen" benadrukt dat je van inclusief naar exclusief wilt omrekenen.',
      },
      {
        question: 'Mag je 21% van het totaalbedrag aftrekken?',
        answer:
          'Nee. 21% btw wordt berekend over het bedrag exclusief btw, niet over het totaal inclusief btw. Deel daarom door 1,21 in plaats van 21% af te trekken.',
      },
    ],
    content: (
      <>
        <p>
          Staat er op een bon, factuur of offerte een bedrag <strong>inclusief btw</strong> en wil je weten hoeveel daarvan
          btw is? Dan moet je <strong>btw uit een bedrag halen</strong>.
        </p>
        <p>Dat is handig als je:</p>
        <ul>
          <li>een kassabon of inkoopfactuur wilt uitsplitsen</li>
          <li>wilt weten hoeveel btw je als voorbelasting kunt aftrekken</li>
          <li>een prijs inclusief btw wilt omzetten naar exclusief btw</li>
          <li>controleert of het btw-bedrag op een factuur klopt</li>
        </ul>
        <p>
          Met de gratis{' '}
          <Link href="/tools/btw-calculator" className="text-warm-orange hover:underline">
            BTW calculator
          </Link>{' '}
          van FactuurBaas splits je een inclusief bedrag direct in exclusief btw en het btw-deel.
        </p>

        <GuideToolCta href="/tools/btw-calculator" label="Bereken direct btw →" />

        <h2>Btw uit een bedrag halen: zo werkt het</h2>
        <p>
          Bij 21% btw bestaat een inclusief bedrag uit <strong>100% grondslag + 21% btw</strong>. Het totaal is dus 121%.
          Deel het inclusief bedrag door 1,21 om het deel exclusief btw te krijgen. Wat overblijft is het btw-bedrag.
        </p>
        <p>De formules:</p>
        <p>
          <strong>Exclusief btw = inclusief bedrag ÷ 1,21</strong>
        </p>
        <p>
          <strong>Btw = inclusief bedrag − exclusief btw</strong>
        </p>

        <h2>Voorbeeld: btw uit €242 halen (21%)</h2>
        <p>Je betaalt €242 inclusief btw voor zakelijke software.</p>
        <p>Stap 1 — exclusief btw berekenen:</p>
        <p>€242 ÷ 1,21 = <strong>€200 exclusief btw</strong></p>
        <p>Stap 2 — btw-deel isoleren:</p>
        <p>€242 − €200 = <strong>€42 btw</strong></p>

        <CalculationTable
          rows={[
            ['Bedrag exclusief btw', '€200'],
            ['Btw 21%', '€42'],
            ['Totaal inclusief btw', '€242'],
          ]}
        />

        <h2>Btw uit een bedrag halen bij 9% btw</h2>
        <p>Bij het lage tarief deel je door <strong>1,09</strong> in plaats van 1,21.</p>
        <p>Voorbeeld: een lunch of boek kost <strong>€54,50 inclusief 9% btw</strong>.</p>
        <p>€54,50 ÷ 1,09 = <strong>€50 exclusief btw</strong></p>
        <p>Btw: €54,50 − €50 = <strong>€4,50</strong></p>

        <CalculationTable
          rows={[
            ['Exclusief btw', '€50,00'],
            ['Btw 9%', '€4,50'],
            ['Inclusief btw', '€54,50'],
          ]}
        />

        <h2>Handig overzicht: welke factor gebruik je?</h2>
        <CalculationTable
          rows={[
            ['Btw-tarief', 'Delen door', 'Voorbeeld inclusief → exclusief'],
            ['21%', '1,21', '€121 → €100'],
            ['9%', '1,09', '€109 → €100'],
            ['0%', '1,00', '€100 → €100'],
          ]}
        />

        <h2>Waar gebruik je dit als ondernemer voor?</h2>

        <h3>Voorbelasting op inkoopfacturen</h3>
        <p>
          Een leverancier factureert €1.210 inclusief btw. Je wilt weten hoeveel btw je in je aangifte kunt verrekenen:
          €1.210 ÷ 1,21 = <strong>€1.000 exclusief</strong>, btw = <strong>€210</strong>.
        </p>

        <h3>Prijzen vergelijken</h3>
        <p>
          De ene aanbieder noemt een prijs inclusief btw, de andere exclusief. Door btw uit het inclusief bedrag te halen,
          vergelijk je op basis van hetzelfde bedrag exclusief btw.
        </p>

        <h3>Facturen controleren</h3>
        <p>Check altijd of het btw-deel past bij het tarief op de regel:</p>
        <ul>
          <li>klopt het percentage (21%, 9% of 0%)?</li>
          <li>klopt het berekende btw-bedrag?</li>
          <li>klopt het totaal inclusief btw?</li>
        </ul>
        <p>
          Meer hierover in{' '}
          <Link href="/blogs/btw-factuur-zzp" className="text-warm-orange hover:underline">
            Btw op je factuur: zo doe je het goed als zzp&apos;er
          </Link>
          . Gerelateerd:{' '}
          <Link href="/gidsen/btw-terugrekenen" className="text-warm-orange hover:underline">
            Hoe bereken je btw terug?
          </Link>
          .
        </p>

        <h2>Veelgemaakte fouten</h2>

        <h3>Fout 1: 21% van het totaal aftrekken</h3>
        <p>
          €121 − 21% = €95,59 lijkt logisch, maar klopt niet. Btw wordt berekend over het bedrag <em>exclusief</em> btw,
          niet over het totaal inclusief btw.
        </p>

        <h3>Fout 2: Verkeerd tarief toepassen</h3>
        <p>
          Gebruik 1,21 voor het standaardtarief, 1,09 voor het lage tarief en 1,00 bij 0% btw. Het verkeerde tarief geeft
          een verkeerd btw-deel.
        </p>

        <h3>Fout 3: Niet afronden op centen</h3>
        <p>Op facturen reken je bedragen af op twee decimalen. Kleine verschillen door afronding komen voor — noteer het correct.</p>

        <h2>Direct btw uit een bedrag halen met de calculator</h2>
        <p>Geen zin om zelf te delen en aftrekken? Met de BTW calculator van FactuurBaas bereken je in seconden:</p>
        <ul>
          <li>het btw-deel uit een inclusief bedrag</li>
          <li>het bedrag exclusief btw</li>
          <li>21%, 9% en 0% btw</li>
          <li>totalen voor je factuur of administratie</li>
        </ul>

        <GuideToolCta href="/tools/btw-calculator" label="Open gratis BTW calculator →" />

        <h2>Veelgestelde vragen</h2>
        <h3>Hoe haal je btw uit een inclusief bedrag?</h3>
        <p>
          Deel door 1,21 (21% btw) of 1,09 (9% btw). Het resultaat is exclusief btw. Het verschil met het originele bedrag
          is het btw-deel.
        </p>
        <h3>Hoeveel btw zit er in €242 inclusief btw?</h3>
        <p>Bij 21% btw: €242 ÷ 1,21 = €200 exclusief. De btw is €42.</p>
        <h3>Is btw uit een bedrag halen hetzelfde als btw terugrekenen?</h3>
        <p>Ja, het is dezelfde berekening — alleen een andere benaming voor dezelfde handeling.</p>
        <h3>Kan ik btw terugvragen als zzp&apos;er?</h3>
        <p>
          Als btw-plichtige ondernemer kun je btw op zakelijke kosten meestal verrekenen via je btw-aangifte. Gebruik je de
          KOR? Dan gelden andere regels.
        </p>
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
    seoTitle: 'Btw berekenen voor buitenlandse klanten | Factuur naar het buitenland',
    title: 'Btw berekenen voor buitenlandse klanten: btw op facturen naar het buitenland',
    excerpt:
      'Hoe bereken je btw voor buitenlandse klanten? Lees wanneer je btw verlegt, 0% btw gebruikt of Nederlandse btw rekent — en maak direct een correcte factuur.',
    keywords:
      'btw buitenlandse klanten, btw verlegd, factuur buitenland btw, export btw, intracommunautaire levering, btw eu klant, factuur buiten eu',
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
    dateModified: '2026-07-15',
    relatedSlugs: ['buitenlandse-klanten-factureren', 'btw-factuur-zzp'],
    relatedGuideSlugs: ['wanneer-gebruik-je-0-btw', 'welke-btw-rekenen-zzper', 'veelgemaakte-fouten-btw-berekenen'],
    faq: [
      {
        question: 'Moet ik btw rekenen aan een buitenlandse klant?',
        answer:
          'Dat hangt af van het land van je klant, of het een ondernemer of particulier is en wat je levert.',
      },
      {
        question: 'Wat betekent btw verlegd?',
        answer:
          'Bij btw verlegd bereken jij geen btw. De klant verwerkt de btw zelf in zijn eigen btw-aangifte.',
      },
      {
        question: 'Kan ik een factuur zonder btw sturen naar een bedrijf in Duitsland?',
        answer:
          'Vaak wel als het een zakelijke klant is met een geldig btw-nummer en je de btw-verlegging correct vermeldt.',
      },
      {
        question: 'Welk btw-tarief gebruik ik voor een buitenlandse klant?',
        answer:
          'Dat kan 0%, Nederlandse btw of buitenlandse btw zijn afhankelijk van de situatie en het type levering.',
      },
    ],
    content: (
      <>
        <p>
          Als zzp&apos;er kun je klanten hebben in Nederland én in het buitenland. Wanneer je een buitenlandse klant
          factureert, gelden vaak andere btw-regels dan bij een Nederlandse klant.
        </p>
        <p>Of je btw moet rekenen hangt af van:</p>
        <ul>
          <li>waar je klant gevestigd is</li>
          <li>of je klant een ondernemer of particulier is</li>
          <li>of je goederen of diensten levert</li>
          <li>of je klant binnen of buiten de EU zit</li>
        </ul>
        <p>
          In deze gids leggen we uit hoe je btw berekent voor buitenlandse klanten en wat je op je factuur moet
          vermelden.
        </p>
        <p>
          Met de gratis{' '}
          <Link href="/tools/btw-calculator" className="text-warm-orange hover:underline">
            BTW calculator
          </Link>{' '}
          van FactuurBaas bereken je eenvoudig bedragen inclusief en exclusief btw.
        </p>

        <GuideToolCta href="/tools/btw-calculator" label="Bereken btw direct →" />

        <h2>Factuur aan een zakelijke klant binnen de EU</h2>
        <p>
          Lever je een dienst aan een ondernemer in een ander EU-land? Dan geldt vaak de regeling <strong>btw verlegd</strong>.
          Je rekent dan meestal <strong>0% Nederlandse btw</strong>.
        </p>
        <p>Voorwaarden:</p>
        <ul>
          <li>je klant is een ondernemer</li>
          <li>je klant heeft een geldig buitenlands btw-nummer</li>
          <li>je vermeldt de btw-verlegging correct op de factuur</li>
        </ul>
        <p>Voorbeeld: je bent een Nederlandse freelance marketeer en werkt voor een bedrijf in Duitsland.</p>
        <CalculationTable
          rows={[
            ['Marketingadvies', '€1.000'],
            ['Nederlandse btw', '€0'],
            ['Totaal factuur', '€1.000'],
          ]}
        />
        <p>
          Op de factuur vermeld je bijvoorbeeld: <strong>&quot;Btw verlegd&quot;</strong>. De klant verwerkt de btw
          vervolgens zelf in zijn eigen land. Meer in{' '}
          <Link href="/gidsen/wanneer-gebruik-je-0-btw" className="text-warm-orange hover:underline">
            wanneer gebruik je 0% btw?
          </Link>
          .
        </p>

        <h2>Factuur aan een buitenlandse particulier binnen de EU</h2>
        <p>Bij particuliere klanten binnen de EU kunnen andere regels gelden.</p>
        <p>
          Voor veel diensten geldt dat je Nederlandse btw moet rekenen, maar er zijn uitzonderingen — bijvoorbeeld bij
          digitale diensten, online cursussen, software en bepaalde elektronische diensten. Bij deze diensten kan de btw
          van het land van de klant gelden.
        </p>
        <p>
          Voorbeeld: je verkoopt een digitale dienst aan een consument in Frankrijk. Dan kan Franse btw van toepassing
          zijn.
        </p>

        <h2>Factuur buiten de EU</h2>
        <p>Lever je diensten aan een klant buiten de Europese Unie? Dan hoef je vaak geen Nederlandse btw te rekenen.</p>
        <p>Voorbeeld: je levert een marketingdienst aan een bedrijf in de Verenigde Staten.</p>
        <CalculationTable
          rows={[
            ['Dienstverlening', '€2.000'],
            ['Nederlandse btw', '€0'],
            ['Totaal', '€2.000'],
          ]}
        />
        <p>Ook hierbij gelden specifieke regels afhankelijk van het soort dienst en de situatie.</p>

        <h2>Btw bij goederen verkopen aan buitenlandse klanten</h2>
        <p>Voor goederen gelden andere regels dan voor diensten.</p>

        <h3>Goederen binnen de EU</h3>
        <p>
          Verkoop je goederen aan een ondernemer in een ander EU-land? Dan kan vaak het 0%-tarief of btw-verlegging
          gelden.
        </p>

        <h3>Export buiten de EU</h3>
        <p>
          Bij export naar landen buiten de EU geldt vaak het 0%-tarief als je aan de voorwaarden voldoet. Bewaar altijd
          bewijs van de levering.
        </p>

        <h2>Wat moet er op een buitenlandse factuur staan?</h2>
        <p>Een factuur naar een buitenlandse klant bevat meestal:</p>
        <ul>
          <li>jouw bedrijfsgegevens</li>
          <li>gegevens van de klant</li>
          <li>factuurdatum en factuurnummer</li>
          <li>omschrijving van de dienst of goederen</li>
          <li>bedrag exclusief btw</li>
          <li>btw-vermelding</li>
          <li>eventueel btw-nummer van de klant</li>
        </ul>
        <p>
          Bij btw-verlegging vermeld je bijvoorbeeld <strong>&quot;Btw verlegd&quot;</strong>. Zie ook{' '}
          <Link href="/blogs/btw-factuur-zzp" className="text-warm-orange hover:underline">
            Btw op je factuur: zo doe je het goed als zzp&apos;er
          </Link>
          .
        </p>

        <h2>Buitenlandse btw of Nederlandse btw berekenen?</h2>
        <CalculationTable
          rows={[
            ['Nederlandse klant', 'Meestal wel'],
            ['EU-bedrijf met geldig btw-nummer', 'Vaak btw verlegd'],
            ['EU-particulier', 'Afhankelijk van dienst'],
            ['Bedrijf buiten EU', 'Vaak geen Nederlandse btw'],
          ]}
        />
        <p>
          Let op: btw-regels verschillen per type levering. Meer achtergrond in{' '}
          <Link href="/blogs/buitenlandse-klanten-factureren" className="text-warm-orange hover:underline">
            Buitenlandse klanten factureren
          </Link>
          .
        </p>

        <h2>Veelgemaakte fouten bij buitenlandse btw</h2>

        <h3>Btw rekenen terwijl btw verlegd moet worden</h3>
        <p>
          Een Nederlandse ondernemer brengt soms toch 21% btw in rekening aan een zakelijke EU-klant. Controleer altijd het
          btw-nummer van je klant.
        </p>

        <h3>Geen btw-vermelding op de factuur zetten</h3>
        <p>Bij btw-verlegging moet duidelijk op de factuur staan waarom geen btw wordt berekend.</p>

        <h3>Buitenlandse klant als Nederlandse klant behandelen</h3>
        <p>
          Een klant in België, Duitsland of Frankrijk kan andere btw-regels hebben dan een Nederlandse klant.
        </p>

        <h3>Geen administratie bijhouden</h3>
        <p>Bewaar gegevens zoals btw-nummers, facturen en bewijsstukken. Dit kan belangrijk zijn bij controles.</p>
        <p>
          Zie ook{' '}
          <Link href="/gidsen/veelgemaakte-fouten-btw-berekenen" className="text-warm-orange hover:underline">
            veelgemaakte fouten bij btw berekenen
          </Link>
          .
        </p>

        <h2>Buitenlandse klanten en je btw-aangifte</h2>
        <p>
          Als je diensten levert aan ondernemers in andere EU-landen, moet je mogelijk een <strong>ICP-opgave</strong>{' '}
          doen naast je btw-aangifte. Daarin geef je aan welke EU-ondernemers je hebt gefactureerd.
        </p>

        <h2>Maak eenvoudig een correcte factuur voor buitenlandse klanten</h2>
        <p>
          Met FactuurBaas maak je snel een professionele factuur met juiste bedragen, btw-vermelding, duidelijke
          PDF-layout en alle belangrijke factuurgegevens.
        </p>

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
          Dat hangt af van het land van je klant, of het een ondernemer of particulier is en wat je levert.
        </p>
        <h3>Wat betekent btw verlegd?</h3>
        <p>Bij btw verlegd bereken jij geen btw. De klant verwerkt de btw zelf in zijn eigen btw-aangifte.</p>
        <h3>Kan ik een factuur zonder btw sturen naar een bedrijf in Duitsland?</h3>
        <p>Vaak wel als het een zakelijke klant is met een geldig btw-nummer.</p>
        <h3>Welk btw-tarief gebruik ik voor een buitenlandse klant?</h3>
        <p>Dat kan 0%, Nederlandse btw of buitenlandse btw zijn afhankelijk van de situatie.</p>
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
    seoTitle: 'Wat moet er op een offerte staan? Volledige uitleg voor zzp\'ers',
    title: 'Wat moet er op een offerte staan? Volledige uitleg voor zzp\'ers',
    excerpt:
      'Welke gegevens moeten op een offerte staan? Overzicht van alle onderdelen voor een professionele offerte als zzp\'er, met voorbeelden en gratis offerte maker.',
    keywords:
      'wat moet er op een offerte staan, offerte gegevens, offerte onderdelen, professionele offerte, offerte zzp, offerte verplichte gegevens, offerte maken',
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
    dateModified: '2026-07-15',
    relatedSlugs: ['verschil-factuur-offerte', 'factuur-maken-zzp', 'factureren-zonder-account'],
    relatedGuideSlugs: ['hoe-maak-je-een-offerte', 'offerte-voorbeeld', 'geldigheid-van-een-offerte'],
    faq: [
      {
        question: 'Is een offerte verplicht?',
        answer:
          'Nee, een offerte is meestal niet verplicht. Voor veel opdrachten is het wel verstandig om vooraf afspraken vast te leggen.',
      },
      {
        question: 'Moet een offerte BTW bevatten?',
        answer:
          'Als je BTW rekent, moet je dit duidelijk vermelden op je offerte. Vermeld het BTW-tarief en het BTW-bedrag apart.',
      },
      {
        question: 'Hoe lang is een offerte geldig?',
        answer: 'Je bepaalt zelf de geldigheidsduur. Veel ondernemers kiezen voor 14 of 30 dagen.',
      },
      {
        question: 'Kan ik een offerte omzetten naar een factuur?',
        answer:
          'Ja. Nadat een klant akkoord gaat met de offerte kun je de gegevens gebruiken om een factuur te maken.',
      },
    ],
    content: (
      <>
        <p>
          Een goede offerte maakt duidelijk wat je gaat leveren, tegen welke prijs en onder welke voorwaarden. Hoewel een
          offerte in Nederland niet aan dezelfde wettelijke eisen hoeft te voldoen als een factuur, zijn er wel belangrijke
          onderdelen die je altijd moet opnemen om professioneel over te komen en misverstanden met klanten te voorkomen.
        </p>
        <p>
          Met de gratis{' '}
          <Link href="/tools/offerte-maker" className="text-warm-orange hover:underline">
            offerte maker
          </Link>{' '}
          van FactuurBaas maak je eenvoudig een professionele offerte, vul je de gegevens in en download je deze direct als
          PDF.
        </p>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Maak gratis offerte →" />

        <h2>Welke gegevens moeten op een offerte staan?</h2>
        <p>Een professionele offerte bevat meestal de volgende onderdelen:</p>

        <h3>1. Bedrijfsgegevens</h3>
        <p>Vermeld altijd duidelijk wie de offerte uitbrengt:</p>
        <ul>
          <li>bedrijfsnaam</li>
          <li>naam van de ondernemer</li>
          <li>adresgegevens</li>
          <li>e-mailadres en telefoonnummer</li>
          <li>KvK-nummer (indien van toepassing)</li>
          <li>btw-nummer (indien van toepassing)</li>
        </ul>
        <pre className="not-prose overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800 whitespace-pre-wrap">
{`Studio Jansen
Jansen Webdesign
Straatnaam 12
1234 AB Amsterdam
KvK: 12345678
BTW: NL123456789B01`}
        </pre>
        <p>Dit zorgt ervoor dat de klant weet met wie hij zaken doet.</p>

        <h3>2. Gegevens van de klant</h3>
        <p>Een offerte is gericht aan een specifieke opdrachtgever. Vermeld daarom de gegevens van de klant:</p>
        <ul>
          <li>bedrijfsnaam of naam particulier</li>
          <li>contactpersoon</li>
          <li>adres</li>
          <li>e-mailadres</li>
        </ul>
        <pre className="not-prose overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800 whitespace-pre-wrap">
{`Klant BV
T.a.v. Jan de Vries
Klantstraat 45
5678 CD Utrecht`}
        </pre>

        <h3>3. Offertenummer</h3>
        <p>Geef iedere offerte een uniek nummer, bijvoorbeeld:</p>
        <p>
          <strong>Offertenummer: OFF-2026-001</strong>
        </p>
        <p>Een duidelijk nummer helpt bij communicatie met de klant, administratie, later terugvinden en omzetten naar een factuur.</p>
        <p>Gebruik bijvoorbeeld een combinatie van jaar en volgnummer: OFF-2026-001, OFF-2026-002, OFF-2026-003.</p>

        <h3>4. Datum van de offerte</h3>
        <p>Vermeld wanneer je de offerte hebt opgesteld, bijvoorbeeld:</p>
        <p>
          <strong>Offertedatum: 15 juli 2026</strong>
        </p>
        <p>De datum is belangrijk omdat deze vaak gekoppeld is aan de geldigheidsduur van de offerte.</p>

        <h3>5. Omschrijving van werkzaamheden of producten</h3>
        <p>Dit is één van de belangrijkste onderdelen van je offerte. Beschrijf duidelijk wat je levert, welke werkzaamheden je uitvoert en hoeveel tijd of producten het betreft.</p>
        <p>
          Een slechte omschrijving: &quot;Website maken&quot;. Een betere omschrijving: &quot;Ontwerp en ontwikkeling van een
          bedrijfswebsite inclusief 5 pagina&apos;s, mobiele optimalisatie en basis SEO-instellingen.&quot;
        </p>
        <p>Hoe specifieker je offerte, hoe kleiner de kans op discussie achteraf.</p>

        <h3>6. Prijs en btw</h3>
        <p>Vermeld duidelijk de kosten. Een professionele offerte toont prijs per onderdeel, aantal uren of producten, subtotaal, btw-bedrag en totaal inclusief btw.</p>
        <div className="my-6 overflow-x-auto not-prose">
          <table className="min-w-full border-collapse border border-slate-200 text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-200 px-4 py-2 text-left font-medium text-slate-700">Omschrijving</th>
                <th className="border border-slate-200 px-4 py-2 text-left font-medium text-slate-700">Aantal</th>
                <th className="border border-slate-200 px-4 py-2 text-right font-medium text-slate-700">Bedrag</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-4 py-2 text-slate-800">Website ontwerp</td>
                <td className="border border-slate-200 px-4 py-2 text-slate-800">10 uur</td>
                <td className="border border-slate-200 px-4 py-2 text-right text-slate-800">€750</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-slate-200 px-4 py-2 text-slate-800">Subtotaal</td>
                <td className="border border-slate-200 px-4 py-2 text-slate-800" />
                <td className="border border-slate-200 px-4 py-2 text-right text-slate-800">€750</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-4 py-2 text-slate-800">BTW 21%</td>
                <td className="border border-slate-200 px-4 py-2 text-slate-800" />
                <td className="border border-slate-200 px-4 py-2 text-right text-slate-800">€157,50</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-slate-200 px-4 py-2 font-medium text-slate-800">Totaal</td>
                <td className="border border-slate-200 px-4 py-2 text-slate-800" />
                <td className="border border-slate-200 px-4 py-2 text-right font-medium text-slate-800">€907,50</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Gebruik je de KOR of ben je vrijgesteld van btw? Vermeld dit dan duidelijk op je offerte. Meer over btw lees je in
          onze{' '}
          <Link href="/gidsen/welke-btw-rekenen-zzper" className="text-warm-orange hover:underline">
            btw-gids voor zzp&apos;ers
          </Link>
          .
        </p>

        <h3>7. Geldigheidsduur van de offerte</h3>
        <p>Een offerte hoeft niet onbeperkt geldig te blijven. Veel ondernemers gebruiken 14, 30 of 60 dagen.</p>
        <p>
          <strong>Voorbeeld: Deze offerte is geldig tot 29 juli 2026.</strong>
        </p>
        <p>
          Dit voorkomt dat klanten maanden later dezelfde prijs verwachten terwijl kosten inmiddels veranderd kunnen zijn.
        </p>

        <h3>8. Betalingsvoorwaarden</h3>
        <p>Maak duidelijk wanneer en hoe de klant moet betalen. Voorbeelden:</p>
        <ul>
          <li>betaling binnen 14 dagen na factuurdatum</li>
          <li>50% vooraf, 50% na oplevering</li>
          <li>betaling na akkoord van de offerte</li>
        </ul>
        <p>
          Let op: een offerte is meestal nog geen betalingsverzoek. Na uitvoering van de opdracht stuur je normaal gesproken
          een factuur.
        </p>

        <h3>9. Algemene voorwaarden</h3>
        <p>Veel ondernemers voegen algemene voorwaarden toe aan hun offerte. Hierin kun je afspraken vastleggen over:</p>
        <ul>
          <li>betaling</li>
          <li>annulering</li>
          <li>aansprakelijkheid</li>
          <li>levering</li>
          <li>wijzigingen in de opdracht</li>
        </ul>
        <p>
          Vermeld bijvoorbeeld: &quot;Op deze offerte zijn onze algemene voorwaarden van toepassing.&quot;
        </p>

        <h3>10. Handtekening of akkoord</h3>
        <p>Een offerte wordt sterker wanneer de klant deze officieel accepteert. Dit kan bijvoorbeeld via:</p>
        <ul>
          <li>digitale ondertekening</li>
          <li>e-mailbevestiging</li>
          <li>akkoordknop</li>
        </ul>
        <p>Na akkoord ontstaat vaak een overeenkomst tussen jou en de klant.</p>

        <h2>Wat is verplicht op een offerte?</h2>
        <p>
          In tegenstelling tot een factuur heeft een offerte geen vaste wettelijke lijst met verplichte onderdelen. Toch is
          het verstandig om minimaal op te nemen:
        </p>
        <ul>
          <li>jouw bedrijfsgegevens</li>
          <li>klantgegevens</li>
          <li>omschrijving van werkzaamheden</li>
          <li>prijzen</li>
          <li>btw-vermelding</li>
          <li>offertedatum</li>
          <li>geldigheidsduur</li>
          <li>voorwaarden</li>
        </ul>
        <p>Zo weet iedereen precies wat is afgesproken.</p>

        <h2>Offerte maken als zzp&apos;er</h2>
        <p>Als zzp&apos;er wil je vooral snel een duidelijke offerte kunnen maken zonder ingewikkelde software.</p>
        <p>Met FactuurBaas kun je:</p>
        <ul>
          <li>je bedrijfsgegevens invullen</li>
          <li>je klant toevoegen</li>
          <li>werkzaamheden en prijzen invoeren</li>
          <li>btw automatisch laten berekenen</li>
          <li>de offerte downloaden als PDF</li>
        </ul>
        <p>
          Lees ook{' '}
          <Link href="/gidsen/hoe-maak-je-een-offerte" className="text-warm-orange hover:underline">
            hoe maak je een offerte
          </Link>{' '}
          voor een stap-voor-stap stappenplan.
        </p>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Maak gratis een offerte zonder account →" />

        <h2>Veelgestelde vragen</h2>
        <h3>Is een offerte verplicht?</h3>
        <p>
          Nee, een offerte is meestal niet verplicht. Voor veel opdrachten is het wel verstandig om vooraf afspraken vast te
          leggen.
        </p>
        <h3>Moet een offerte btw bevatten?</h3>
        <p>
          Als je btw rekent, moet je dit duidelijk vermelden op je offerte. Vermeld het btw-tarief en het btw-bedrag apart.
        </p>
        <h3>Hoe lang is een offerte geldig?</h3>
        <p>Je bepaalt zelf de geldigheidsduur. Veel ondernemers kiezen voor 14 of 30 dagen.</p>
        <h3>Kan ik een offerte omzetten naar een factuur?</h3>
        <p>
          Ja. Nadat een klant akkoord gaat met de offerte kun je de gegevens gebruiken om een factuur te maken. Lees meer
          over het{' '}
          <Link href="/blogs/verschil-factuur-offerte" className="text-warm-orange hover:underline">
            verschil tussen offerte en factuur
          </Link>
          .
        </p>

        <h2>Maak direct je eigen offerte</h2>
        <p>
          Maak een professionele offerte met je eigen gegevens, prijzen en voorwaarden. Download direct als PDF — gratis en
          zonder account.
        </p>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Open gratis offerte maker →" />
      </>
    ),
  },
  {
    slug: 'offerte-voorbeeld',
    cluster: 'offertes',
    seoTitle: 'Offerte voorbeeld | Professioneel voorbeeld voor ZZP\'ers',
    title: 'Offerte voorbeeld: zo ziet een professionele offerte eruit (ZZP + bedrijven)',
    excerpt:
      'Bekijk een professioneel offerte voorbeeld voor zzp\'ers en bedrijven. Ontdek wat er op een offerte staat en maak gratis je eigen offerte als PDF met FactuurBaas.',
    keywords:
      'offerte voorbeeld, offerte voorbeeld zzp, professionele offerte, offerte template, gratis offerte voorbeeld, offerte pdf, offerte maken',
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
    dateModified: '2026-07-15',
    relatedSlugs: ['verschil-factuur-offerte', 'factuur-maken-zzp', 'factureren-zonder-account'],
    relatedGuideSlugs: ['hoe-maak-je-een-offerte', 'wat-moet-er-op-een-offerte-staan', 'offerte-maken-in-pdf'],
    faq: [
      {
        question: 'Is een offerte voorbeeld gratis te gebruiken?',
        answer:
          'Ja. Een voorbeeld kun je gebruiken als inspiratie voor je eigen offerte. Pas altijd de gegevens, prijzen en voorwaarden aan.',
      },
      {
        question: 'Wat is het verschil tussen een offerte voorbeeld en een offerte template?',
        answer:
          'Een offerte voorbeeld is een ingevulde offerte zodat je ziet hoe deze eruitziet. Een offerte template is een lege basis die je zelf invult.',
      },
      {
        question: 'Kan ik een offerte voorbeeld omzetten naar een echte offerte?',
        answer:
          'Ja. Met de offerte maker van FactuurBaas kun je eenvoudig je eigen gegevens toevoegen en een professionele PDF maken.',
      },
      {
        question: 'Moet een offerte btw bevatten?',
        answer:
          'Als je btw rekent, is het verstandig om het btw-tarief en btw-bedrag duidelijk te vermelden op je offerte.',
      },
    ],
    content: (
      <>
        <p>
          Een goed offerte voorbeeld helpt je om snel te zien hoe een professionele offerte eruitziet. Een offerte bevat
          meestal je bedrijfsgegevens, de gegevens van je klant, een duidelijke omschrijving van je werkzaamheden, prijzen,
          btw en voorwaarden.
        </p>
        <p>
          Met{' '}
          <Link href="/tools/offerte-maker" className="text-warm-orange hover:underline">
            FactuurBaas
          </Link>{' '}
          maak je gratis een professionele offerte. Vul je gegevens in, kies een layout en download direct je offerte als
          PDF.
        </p>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Maak gratis offerte →" />

        <h2>Voorbeeld van een offerte</h2>
        <p>Een professionele offerte kan er bijvoorbeeld zo uitzien:</p>
        <pre className="not-prose overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800 whitespace-pre-wrap">
{`OFFERTE

Offertenummer: OFF-2026-014
Datum: 9 juli 2026
Geldig tot: 23 juli 2026

Van
Studio Jansen
Jansen Webdesign
Amsterdam
KvK: 12345678
BTW: NL123456789B01

Aan
Klant BV
T.a.v. Jan de Vries
Utrecht

Werkzaamheden
Omschrijving              Aantal    Bedrag
Website ontwerp en        8 uur     €640,00
ontwikkeling

Subtotaal:  €640,00
BTW 21%:    €134,40
Totaal:     €774,40`}
        </pre>
        <p>
          Dit is een eenvoudig voorbeeld van een offerte voor een zzp&apos;er die uren factureert. Bekijk het volledige
          voorbeeld met layout op onze{' '}
          <Link href="/offerte-voorbeeld/zzp" className="text-warm-orange hover:underline">
            ZZP offerte voorbeeld
          </Link>{' '}
          pagina.
        </p>

        <h2>Wat staat er in een goed offerte voorbeeld?</h2>
        <p>Een professionele offerte bevat meestal de volgende onderdelen:</p>

        <h3>1. Bedrijfsgegevens</h3>
        <p>Bovenaan vermeld je wie de offerte maakt: bedrijfsnaam, naam ondernemer, adres, e-mail, telefoon, KvK-nummer en btw-nummer (indien van toepassing).</p>
        <p>Zo weet de klant precies van wie de offerte afkomstig is.</p>

        <h3>2. Klantgegevens</h3>
        <p>Een offerte richt je altijd aan een specifieke klant: bedrijfsnaam, contactpersoon, adres en e-mailadres. Dit voorkomt verwarring wanneer je meerdere offertes verstuurt.</p>

        <h3>3. Offertenummer en datum</h3>
        <p>
          Een offerte krijgt vaak een uniek nummer, bijvoorbeeld OFF-2026-001 of OFF-2026-002. Een duidelijk nummer helpt bij
          je administratie en maakt het later makkelijker om een factuur aan de offerte te koppelen.
        </p>

        <h3>4. Omschrijving van werkzaamheden</h3>
        <p>
          Een goede offerte beschrijft duidelijk wat je gaat leveren. Minder duidelijk: &quot;Marketing werkzaamheden&quot;.
          Beter: &quot;Ontwikkeling en uitvoering van een social media campagne gedurende 3 maanden inclusief contentplanning,
          advertenties en maandelijkse rapportage.&quot;
        </p>
        <p>Hoe duidelijker je omschrijving, hoe minder discussie achteraf.</p>

        <h3>5. Prijs en btw</h3>
        <p>Een offerte voorbeeld laat duidelijk zien hoe de prijs is opgebouwd.</p>
        <CalculationTable
          rows={[
            ['Werkzaamheden', '€1.000'],
            ['BTW 21%', '€210'],
            ['Totaal', '€1.210'],
          ]}
        />
        <p>Vermeld altijd of bedragen inclusief of exclusief btw zijn.</p>

        <h3>6. Geldigheidsduur</h3>
        <p>
          Een offerte blijft meestal niet onbeperkt geldig. Veel ondernemers gebruiken 14, 30 of 60 dagen. Bijvoorbeeld:
          &quot;Deze offerte is geldig tot 23 juli 2026.&quot;
        </p>

        <h3>7. Voorwaarden</h3>
        <p>
          Veel offertes bevatten afspraken over betaling, levering, wijzigingen, annulering en planning. Bij grotere
          opdrachten worden vaak algemene voorwaarden toegevoegd.
        </p>
        <p>
          Lees de volledige uitleg in{' '}
          <Link href="/gidsen/wat-moet-er-op-een-offerte-staan" className="text-warm-orange hover:underline">
            wat moet er op een offerte staan
          </Link>
          .
        </p>

        <h2>Offerte voorbeeld per situatie</h2>
        <p>
          Niet iedere ondernemer gebruikt dezelfde offerte. Een bouwbedrijf heeft bijvoorbeeld andere informatie nodig dan
          een freelancer. Op{' '}
          <Link href="/offerte-voorbeeld" className="text-warm-orange hover:underline">
            offerte voorbeelden
          </Link>{' '}
          vind je zes ingevulde voorbeelden per type werk:
        </p>

        <h3>ZZP offerte voorbeeld</h3>
        <p>
          Voor zelfstandigen die diensten leveren: freelance opdrachten, advies, ontwerp, administratie en marketing.{' '}
          <Link href="/offerte-voorbeeld/zzp" className="text-warm-orange hover:underline">
            Bekijk ZZP offerte voorbeeld →
          </Link>
        </p>

        <h3>Bouw offerte voorbeeld</h3>
        <p>
          Voor aannemers, schilders, installatiebedrijven en klusbedrijven — vaak met materialen, uren en meerdere
          werkzaamheden.{' '}
          <Link href="/offerte-voorbeeld/bouw" className="text-warm-orange hover:underline">
            Bekijk bouw offerte voorbeeld →
          </Link>
        </p>

        <h3>Freelance offerte voorbeeld</h3>
        <p>
          Voor designers, developers, tekstschrijvers en marketeers — vaak gebaseerd op uren of een projectprijs.{' '}
          <Link href="/offerte-voorbeeld/freelance" className="text-warm-orange hover:underline">
            Bekijk freelance offerte voorbeeld →
          </Link>
        </p>

        <h3>Offerte voorbeeld dienstverlening</h3>
        <p>
          Voor consultants, coaches, bureaus en zakelijke dienstverlening.{' '}
          <Link href="/offerte-voorbeeld/diensten" className="text-warm-orange hover:underline">
            Bekijk offerte voorbeeld dienstverlening →
          </Link>
        </p>

        <h3>Offerte voorbeeld horeca en catering</h3>
        <p>
          Voor catering en horeca — bruiloften, events en feesten.{' '}
          <Link href="/offerte-voorbeeld/horeca" className="text-warm-orange hover:underline">
            Bekijk offerte voorbeeld horeca en catering →
          </Link>
        </p>

        <h3>Marketing offerte voorbeeld</h3>
        <p>
          Voor social media, campagnes en online marketing.{' '}
          <Link href="/offerte-voorbeeld/marketing" className="text-warm-orange hover:underline">
            Bekijk marketing offerte voorbeeld →
          </Link>
        </p>

        <h2>Offerte voorbeeld maken in plaats van kopiëren</h2>
        <p>
          Een voorbeeld helpt om de structuur te begrijpen, maar je offerte moet altijd aangepast worden aan jouw eigen
          bedrijf en opdracht.
        </p>
        <p>Met FactuurBaas kun je:</p>
        <ul>
          <li>je bedrijfsgegevens invullen</li>
          <li>je klant toevoegen</li>
          <li>werkzaamheden en prijzen invoeren</li>
          <li>btw automatisch berekenen</li>
          <li>de offerte downloaden als PDF</li>
        </ul>
        <p>
          Liever een lege basis? Bekijk ook onze{' '}
          <Link href="/offerte-template" className="text-warm-orange hover:underline">
            offerte templates
          </Link>
          . Lees{' '}
          <Link href="/gidsen/hoe-maak-je-een-offerte" className="text-warm-orange hover:underline">
            hoe maak je een offerte
          </Link>{' '}
          voor een stap-voor-stap stappenplan.
        </p>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Maak gratis je eigen offerte →" />

        <h2>Veelgestelde vragen</h2>
        <h3>Is een offerte voorbeeld gratis te gebruiken?</h3>
        <p>
          Ja. Een voorbeeld kun je gebruiken als inspiratie voor je eigen offerte. Pas altijd de gegevens, prijzen en
          voorwaarden aan.
        </p>
        <h3>Wat is het verschil tussen een offerte voorbeeld en een offerte template?</h3>
        <p>
          Een offerte voorbeeld is een ingevulde offerte zodat je ziet hoe deze eruitziet. Een{' '}
          <Link href="/offerte-template" className="text-warm-orange hover:underline">
            offerte template
          </Link>{' '}
          is een lege basis die je zelf invult.
        </p>
        <h3>Kan ik een offerte voorbeeld omzetten naar een echte offerte?</h3>
        <p>
          Ja. Met de offerte maker kun je eenvoudig je eigen gegevens toevoegen en een professionele PDF maken.
        </p>
        <h3>Moet een offerte btw bevatten?</h3>
        <p>
          Als je btw rekent, is het verstandig om het btw-tarief en btw-bedrag duidelijk te vermelden.
        </p>

        <h2>Maak je eigen offerte</h2>
        <p>
          Bekijk een voorbeeld, pas het aan naar jouw situatie en maak direct een professionele offerte. Gratis, zonder
          account en direct downloaden als PDF.
        </p>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Open gratis offerte maker →" />

        <p>
          Meer inspiratie? Bekijk ook{' '}
          <Link href="/factuur-voorbeeld" className="text-warm-orange hover:underline">
            factuur voorbeelden
          </Link>{' '}
          of lees het{' '}
          <Link href="/blogs/verschil-factuur-offerte" className="text-warm-orange hover:underline">
            verschil tussen offerte en factuur
          </Link>
          .
        </p>
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
    seoTitle: 'Geldigheid van een offerte | Hoelang is een offerte geldig?',
    title: 'Geldigheid van een offerte: hoelang is een offerte geldig?',
    excerpt:
      'Hoelang is een offerte geldig? Lees alles over de geldigheid van een offerte, gangbare termijnen (14, 30 of 60 dagen) en wat te doen als een offerte verloopt.',
    keywords:
      'geldigheid offerte, hoelang is een offerte geldig, offerte geldigheidsduur, offerte geldig tot, offerte verlopen, offerte termijn',
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
    dateModified: '2026-07-15',
    relatedSlugs: ['verschil-factuur-offerte', 'factuur-maken-zzp'],
    relatedGuideSlugs: ['wat-moet-er-op-een-offerte-staan', 'wanneer-is-een-offerte-bindend', 'hoe-maak-je-een-offerte'],
    faq: [
      {
        question: 'Hoelang is een offerte geldig?',
        answer:
          'Dat bepaal je zelf. Veel ondernemers kiezen 14, 30 of 60 dagen. Vermeld de geldigheidsduur altijd duidelijk op je offerte.',
      },
      {
        question: 'Is er een wettelijke termijn voor de geldigheid van een offerte?',
        answer:
          'Nee. In Nederland is er geen vaste wettelijke termijn. Je mag zelf bepalen hoelang je offerte geldig blijft, zolang je dit duidelijk vermeldt.',
      },
      {
        question: 'Wat gebeurt er als een offerte is verlopen?',
        answer:
          'Na de geldigheidsdatum hoef je de offerte niet meer tegen dezelfde prijs of voorwaarden uit te voeren. Je kunt een nieuwe offerte sturen.',
      },
      {
        question: 'Kan ik de geldigheid van een offerte verlengen?',
        answer:
          'Ja. Je kunt met de klant afspreken om de offerte te verlengen of een nieuwe offerte met een nieuwe datum en prijs te sturen.',
      },
    ],
    content: (
      <>
        <p>
          Stuur je een offerte naar een klant, dan is het belangrijk om vast te leggen <strong>hoelang die offerte
          geldig blijft</strong>. De <strong>geldigheid van een offerte</strong> bepaalt tot wanneer de klant akkoord kan
          gaan tegen de genoemde prijs en voorwaarden.
        </p>
        <p>
          Zonder geldigheidsduur kan een klant maanden later nog akkoord gaan — terwijl jouw kosten, planning of
          beschikbaarheid inmiddels veranderd kunnen zijn. Met de gratis{' '}
          <Link href="/tools/offerte-maker" className="text-warm-orange hover:underline">
            offerte maker
          </Link>{' '}
          van FactuurBaas voeg je eenvoudig een geldigheidsdatum toe aan je offerte.
        </p>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Maak offerte met geldigheidsduur →" />

        <h2>Wat is de geldigheid van een offerte?</h2>
        <p>
          De geldigheid van een offerte is de periode waarin je voorstel geldig blijft. Binnen die termijn kan de klant
          akkoord gaan met de prijs, werkzaamheden en voorwaarden die je hebt genoemd.
        </p>
        <p>Op een offerte vermeld je meestal:</p>
        <ul>
          <li>de offertedatum</li>
          <li>een geldigheidsduur (bijv. 14 dagen)</li>
          <li>of een concrete einddatum (bijv. geldig tot 23 juli 2026)</li>
        </ul>
        <p>
          <strong>Voorbeeld:</strong> &quot;Deze offerte is geldig tot 23 juli 2026&quot; of &quot;Deze offerte is 30 dagen
          geldig na offertedatum.&quot;
        </p>

        <h2>Hoelang is een offerte geldig?</h2>
        <p>
          Er is geen vaste wettelijke termijn in Nederland. Je bepaalt zelf hoelang een offerte geldig blijft. Wel zijn
          er gangbare termijnen die veel ondernemers gebruiken:
        </p>
        <CalculationTable
          rows={[
            ['14 dagen', 'Korte termijn, bij snelle beslissingen of kleinere opdrachten'],
            ['30 dagen', 'Meest gebruikte termijn voor zzp\'ers en mkb'],
            ['60 dagen', 'Langere termijn bij grotere of complexe projecten'],
            ['90 dagen', 'Minder gebruikelijk, vooral bij langdurige trajecten'],
          ]}
        />
        <p>
          Als zzp&apos;er kies je vaak voor <strong>14 of 30 dagen</strong>. Dat geeft de klant voldoende tijd om te
          beslissen, zonder dat je maandenlang aan een oude prijs vastzit.
        </p>

        <h2>Waarom is een geldigheidsduur belangrijk?</h2>
        <p>Een duidelijke geldigheidsduur op je offerte voorkomt problemen achteraf:</p>
        <ul>
          <li>
            <strong>Bescherming tegen prijsstijgingen</strong> — materiaal-, uur- of inkoopkosten kunnen veranderen.
          </li>
          <li>
            <strong>Duidelijke planning</strong> — je weet wanneer je een opdracht wel of niet kunt inplannen.
          </li>
          <li>
            <strong>Minder discussie</strong> — de klant weet tot wanneer het aanbod geldt.
          </li>
          <li>
            <strong>Professionele indruk</strong> — een complete offerte met datum en geldigheid oogt zorgvuldig.
          </li>
        </ul>
        <p>
          Lees ook{' '}
          <Link href="/gidsen/wat-moet-er-op-een-offerte-staan" className="text-warm-orange hover:underline">
            wat moet er op een offerte staan
          </Link>{' '}
          voor alle verplichte onderdelen.
        </p>

        <h2>Wat gebeurt er na de geldigheidsdatum?</h2>
        <p>
          Is de geldigheidsdatum verstreken, dan is de offerte in principe <strong>verlopen</strong>. Dat betekent:
        </p>
        <ul>
          <li>je bent niet meer gebonden aan de genoemde prijs</li>
          <li>de klant kan niet automatisch verwachten dat alle voorwaarden hetzelfde blijven</li>
          <li>je stuurt meestal een nieuwe offerte met actuele prijs en datum</li>
        </ul>
        <p>
          Gaat een klant <em>na</em> de geldigheidsdatum alsnog akkoord? Dan kun je een nieuwe offerte opstellen of
          schriftelijk bevestigen dat je de opdracht alsnog uitvoert tegen de oude of een aangepaste prijs.
        </p>

        <h2>Kan een klant akkoord gaan na afloop van de geldigheid?</h2>
        <p>
          Technisch kan een klant altijd interesse tonen, maar jij bent niet verplicht om de offerte te honoreren na de
          vervaldatum. In de praktijk heb je drie opties:
        </p>
        <ol>
          <li>
            <strong>Nieuwe offerte sturen</strong> — met actuele prijs, datum en geldigheidsduur.
          </li>
          <li>
            <strong>Offerte verlengen</strong> — spreek af dat dezelfde voorwaarden nog een periode gelden.
          </li>
          <li>
            <strong>Aangepaste prijs aanbieden</strong> — als kosten inmiddels zijn gestegen.
          </li>
        </ol>
        <p>
          Leg verlengingen altijd schriftelijk vast via e-mail of een nieuwe offerte, zodat er geen misverstanden
          ontstaan.
        </p>

        <h2>Hoe zet je de geldigheid op je offerte?</h2>
        <p>Formuleer de geldigheidsduur duidelijk en concreet. Goede voorbeelden:</p>
        <ul>
          <li>&quot;Deze offerte is geldig tot 23 juli 2026.&quot;</li>
          <li>&quot;Deze offerte is 14 dagen geldig na offertedatum.&quot;</li>
          <li>&quot;Geldigheidsduur: 30 dagen vanaf 15 juli 2026.&quot;</li>
        </ul>
        <p>Vermijd vage formuleringen zoals:</p>
        <ul>
          <li>&quot;Geldig zolang de voorraad strekt&quot; (tenzij dat echt van toepassing is)</li>
          <li>helemaal geen geldigheidsduur vermelden</li>
        </ul>
        <p>
          Op onze{' '}
          <Link href="/offerte-voorbeeld/zzp" className="text-warm-orange hover:underline">
            ZZP offerte voorbeeld
          </Link>{' '}
          pagina zie je hoe een geldigheidsdatum er professioneel uitziet in een complete offerte.
        </p>

        <h2>Geldigheid per type opdracht</h2>
        <p>De juiste termijn hangt af van je branche en type werk:</p>
        <ul>
          <li>
            <strong>Kleine zzp-opdrachten</strong> — vaak 14 dagen
          </li>
          <li>
            <strong>Consultancy of dienstverlening</strong> — vaak 30 dagen
          </li>
          <li>
            <strong>Bouw of grotere projecten</strong> — vaak 30 tot 60 dagen
          </li>
          <li>
            <strong>Offertes met materiaalkosten</strong> — kortere termijn (14–30 dagen) vanwege prijsfluctuaties
          </li>
        </ul>
        <p>
          Meer over professioneel versturen lees je in{' '}
          <Link href="/gidsen/offerte-maken-voor-zzper" className="text-warm-orange hover:underline">
            offerte sturen als zzp&apos;er
          </Link>
          .
        </p>

        <h2>Veelgemaakte fouten bij geldigheid</h2>
        <ul>
          <li>
            <strong>Geen geldigheidsduur vermelden</strong> — de klant weet niet tot wanneer het aanbod geldt.
          </li>
          <li>
            <strong>Te lange termijn</strong> — 6 maanden geldig maakt het lastig om prijzen later aan te passen.
          </li>
          <li>
            <strong>Alleen &quot;30 dagen&quot; zonder startdatum</strong> — vermeld altijd de offertedatum of een
            concrete einddatum.
          </li>
          <li>
            <strong>Starten met werk vóór akkoord</strong> — wacht op bevestiging binnen de geldigheidsperiode.
          </li>
          <li>
            <strong>Verlopen offerte niet opvolgen</strong> — stuur proactief een nieuwe offerte als de termijn bijna
            afloopt.
          </li>
        </ul>

        <h2>Offerte met geldigheidsduur maken</h2>
        <p>Met FactuurBaas voeg je eenvoudig een geldigheidsdatum toe aan je offerte:</p>
        <ol>
          <li>Open de gratis offerte maker.</li>
          <li>Vul je bedrijfs- en klantgegevens in.</li>
          <li>Voeg werkzaamheden en prijzen toe.</li>
          <li>Stel de geldigheidsdatum in.</li>
          <li>Download je offerte als PDF en verstuur naar je klant.</li>
        </ol>
        <p>
          Volg het volledige stappenplan in{' '}
          <Link href="/gidsen/hoe-maak-je-een-offerte" className="text-warm-orange hover:underline">
            hoe maak je een offerte
          </Link>
          .
        </p>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Maak gratis offerte →" />

        <h2>Veelgestelde vragen</h2>
        <h3>Hoelang is een offerte geldig?</h3>
        <p>
          Dat bepaal je zelf. Veel ondernemers kiezen 14, 30 of 60 dagen. Vermeld de termijn altijd duidelijk op je
          offerte.
        </p>
        <h3>Is er een wettelijke termijn?</h3>
        <p>
          Nee. Er is geen vaste wettelijke geldigheidsduur voor offertes in Nederland. Je mag zelf bepalen hoelang je
          offerte geldig blijft.
        </p>
        <h3>Wat als een klant te laat akkoord geeft?</h3>
        <p>
          Na de geldigheidsdatum ben je niet meer gebonden aan de oude prijs. Stuur een nieuwe offerte of spreek een
          verlenging af.
        </p>
        <h3>Kan ik een offerte onbeperkt geldig maken?</h3>
        <p>
          Dat kan, maar is meestal niet verstandig. Een termijn beschermt je tegen prijs- en planningswijzigingen.
        </p>
        <h3>Moet de geldigheidsduur op elke offerte staan?</h3>
        <p>
          Het is niet wettelijk verplicht, maar wel sterk aan te raden. Het voorkomt misverstanden en maakt je offerte
          compleet.
        </p>

        <h2>Maak een offerte met duidelijke geldigheid</h2>
        <p>
          Stel een geldigheidsduur in, download je offerte als PDF en verstuur een professioneel voorstel naar je klant.
          Gratis en zonder account.
        </p>

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
