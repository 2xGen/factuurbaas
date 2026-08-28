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
            <tr key={label} className={index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
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
    seoTitle: 'Verschil tussen 9% en 21% btw | Uitleg btw-tarieven voor zzp\'ers',
    title: 'Verschil tussen 9% en 21% btw: welk btw-tarief gebruik je?',
    excerpt:
      'Wat is het verschil tussen 9% en 21% btw? Bekijk wanneer je welk btw-tarief gebruikt en bereken btw eenvoudig met de gratis BTW calculator.',
    keywords:
      'verschil 9% en 21% btw, btw tarief zzp, 21% btw, 9% btw, verlaagd btw tarief, standaard btw tarief, welk btw tarief, btw op factuur',
    tool: {
      href: '/tools/btw-calculator',
      label: 'Bereken direct btw',
      ctaLabel: 'Open gratis BTW calculator',
    },
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Factuurbaas/Verschil%20tussen%209%20en%2021%20btw.jpg',
      alt: 'Verschil tussen 9% en 21% btw: euro biljetten en munten',
    },
    datePublished: '2026-07-15',
    dateModified: '2026-07-15',
    relatedSlugs: ['btw-factuur-zzp', 'factureren-zonder-account'],
    relatedGuideSlugs: ['btw-terugrekenen', 'inclusief-btw-naar-exclusief-btw', 'welke-btw-rekenen-zzper'],
    faq: [
      {
        question: 'Wanneer gebruik je 21% btw?',
        answer:
          '21% btw is het standaardtarief en geldt voor de meeste producten en diensten in Nederland.',
      },
      {
        question: 'Wanneer gebruik je 9% btw?',
        answer:
          '9% btw geldt alleen voor bepaalde producten en diensten die onder het verlaagde btw-tarief vallen, zoals sommige voedingsmiddelen, boeken en culturele activiteiten.',
      },
      {
        question: 'Kan een zzp\'er kiezen tussen 9% en 21% btw?',
        answer:
          'Nee. Het btw-tarief wordt bepaald door wat je levert. Je kiest het tarief niet zelf op basis van voorkeur.',
      },
      {
        question: 'Welk btw-tarief gebruik ik op mijn factuur?',
        answer:
          'Dat hangt af van je product of dienst. De meeste zakelijke diensten vallen onder 21% btw. Controleer altijd welk tarief voor jouw levering geldt.',
      },
    ],
    content: (
      <>
        <p>
          In Nederland zijn er verschillende btw-tarieven. Het meest voorkomende verschil is tussen het{' '}
          <strong>21% btw-tarief</strong> en het <strong>9% btw-tarief</strong>.
        </p>
        <p>
          Als ondernemer moet je het juiste btw-tarief gebruiken op je offertes en facturen. Het verkeerde tarief kan zorgen
          voor fouten in je administratie en btw-aangifte.
        </p>
        <p>
          Met de gratis{' '}
          <Link href="/tools/btw-calculator" className="text-warm-orange hover:underline">
            BTW calculator
          </Link>{' '}
          van FactuurBaas bereken je eenvoudig hoeveel btw je moet rekenen bij 9% of 21%.
        </p>

        <GuideToolCta href="/tools/btw-calculator" label="Bereken btw direct →" />

        <h2>21% btw: het standaardtarief</h2>
        <p>
          Het tarief van <strong>21% btw</strong> is het algemene btw-tarief in Nederland. Dit geldt voor de meeste producten
          en diensten.
        </p>
        <p>Voorbeelden:</p>
        <ul>
          <li>zakelijke dienstverlening</li>
          <li>advieswerk</li>
          <li>marketingdiensten</li>
          <li>webdesign</li>
          <li>software en abonnementen</li>
          <li>veel producten en materialen</li>
          <li>bouw- en installatiewerkzaamheden (meestal)</li>
        </ul>

        <h3>Voorbeeld: factuur met 21% btw</h3>
        <p>Een zzp&apos;er stuurt een factuur voor een website:</p>
        <p>Werkzaamheden: €1.000 exclusief btw</p>
        <p>BTW 21%: €210</p>
        <p>
          <strong>Totaal: €1.210 inclusief btw</strong>
        </p>

        <h2>9% btw: het verlaagde tarief</h2>
        <p>
          Het tarief van <strong>9% btw</strong> geldt voor bepaalde producten en diensten die door de overheid zijn
          aangewezen.
        </p>
        <p>Voorbeelden kunnen zijn:</p>
        <ul>
          <li>bepaalde voedingsmiddelen</li>
          <li>boeken en digitale publicaties (onder voorwaarden)</li>
          <li>bepaalde culturele activiteiten</li>
          <li>sommige werkzaamheden aan woningen</li>
          <li>specifieke diensten in de zorg</li>
        </ul>
        <p>
          Niet elke ondernemer mag automatisch 9% btw rekenen. Het hangt af van wat je levert — controleer altijd de actuele
          regels bij de Belastingdienst.
        </p>

        <h2>Voorbeeld: verschil tussen 9% en 21% btw</h2>
        <p>Stel je verkoopt een dienst van €100 exclusief btw.</p>

        <p>
          <strong>Bij 21% btw:</strong>
        </p>
        <CalculationTable
          rows={[
            ['Exclusief btw', '€100'],
            ['BTW', '€21'],
            ['Totaal', '€121'],
          ]}
        />

        <p>
          <strong>Bij 9% btw:</strong>
        </p>
        <CalculationTable
          rows={[
            ['Exclusief btw', '€100'],
            ['BTW', '€9'],
            ['Totaal', '€109'],
          ]}
        />

        <p>
          Het verschil: bij hetzelfde bedrag exclusief btw betaalt de klant bij 21% btw <strong>€12 meer btw</strong>.
        </p>

        <h2>Welk btw-tarief gebruik je als zzp&apos;er?</h2>
        <p>
          Als zzp&apos;er bepaal je het btw-tarief op basis van de dienst of het product dat je levert, niet op basis van je
          beroep.
        </p>
        <p>Bijvoorbeeld:</p>
        <ul>
          <li>Een fotograaf kan verschillende btw-tarieven tegenkomen afhankelijk van de situatie.</li>
          <li>
            Een aannemer kan meestal 21% rekenen, maar voor bepaalde werkzaamheden aan woningen kunnen uitzonderingen gelden.
          </li>
        </ul>
        <p>Controleer daarom altijd welk tarief bij jouw specifieke situatie hoort.</p>

        <h2>Btw op je factuur vermelden</h2>
        <p>Op een correcte factuur vermeld je:</p>
        <ul>
          <li>het btw-bedrag</li>
          <li>het btw-tarief (bijvoorbeeld 21%)</li>
          <li>het bedrag exclusief btw</li>
          <li>het totaalbedrag inclusief btw</li>
        </ul>
        <p>Voorbeeld:</p>
        <pre className="not-prose overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800">
{`Website ontwerp       €1.000,00
BTW 21%                 €210,00
─────────────────────────────
Totaal                 €1.210,00`}
        </pre>
        <p>
          Meer uitleg in{' '}
          <Link href="/blogs/btw-factuur-zzp" className="text-warm-orange hover:underline">
            Btw op je factuur: zo doe je het goed als zzp&apos;er
          </Link>
          .
        </p>

        <h2>Veelgemaakte fouten met btw-tarieven</h2>

        <h3>1. Altijd 21% rekenen</h3>
        <p>
          Veel ondernemers gebruiken automatisch 21%, maar sommige producten en diensten vallen onder 9% of 0%. Controleer
          daarom altijd welk tarief geldt.
        </p>

        <h3>2. Btw berekenen over het verkeerde bedrag</h3>
        <p>Het btw-percentage wordt berekend over het bedrag exclusief btw.</p>
        <p>
          Bijvoorbeeld: <strong>€500 exclusief btw × 21% = €105 btw</strong>
        </p>
        <p>Niet: €500 inclusief btw × 21%.</p>
        <p>
          Zie ook{' '}
          <Link href="/gidsen/inclusief-btw-naar-exclusief-btw" className="text-warm-orange hover:underline">
            bedrag inclusief btw omrekenen naar exclusief btw
          </Link>
          .
        </p>

        <h3>3. Het btw-tarief aanpassen omdat een klant daarom vraagt</h3>
        <p>Het btw-tarief wordt bepaald door de regels, niet door de voorkeur van de klant.</p>

        <h2>Btw berekenen voor je factuur</h2>
        <p>Met de gratis BTW calculator van FactuurBaas bereken je direct:</p>
        <ul>
          <li>21% btw</li>
          <li>9% btw</li>
          <li>0% btw</li>
          <li>inclusief en exclusief btw bedragen</li>
        </ul>
        <p>Daarna maak je direct een professionele factuur als PDF.</p>

        <GuideToolCta href="/tools/btw-calculator" label="Open gratis BTW calculator →" />

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
        <p>21% btw is het standaardtarief en geldt voor de meeste producten en diensten in Nederland.</p>
        <h3>Wanneer gebruik je 9% btw?</h3>
        <p>9% btw geldt alleen voor bepaalde producten en diensten die onder het verlaagde btw-tarief vallen.</p>
        <h3>Kan een zzp&apos;er kiezen tussen 9% en 21% btw?</h3>
        <p>Nee. Het btw-tarief wordt bepaald door wat je levert. Je kiest het tarief niet zelf.</p>
        <h3>Welk btw-tarief gebruik ik op mijn factuur?</h3>
        <p>Dat hangt af van je product of dienst. De meeste zakelijke diensten vallen onder 21% btw.</p>
      </>
    ),
  },
  {
    slug: 'wanneer-gebruik-je-0-btw',
    cluster: 'btw',
    seoTitle: 'Wanneer gebruik je 0% btw? Uitleg btw-tarief 0 procent voor zzp\'ers',
    title: 'Wanneer gebruik je 0% btw? Uitleg voor zzp\'ers en ondernemers',
    excerpt:
      'Wanneer mag je 0% btw rekenen? Lees wanneer het 0%-tarief geldt, wat het verschil is met btw-vrijgesteld en hoe je dit op je factuur vermeldt.',
    keywords:
      '0% btw, wanneer 0% btw, btw tarief 0 procent, nultarief btw, btw verlegd, btw vrijgesteld, export btw, intracommunautaire levering',
    tool: {
      href: '/tools/btw-calculator',
      label: 'Bereken direct btw',
      ctaLabel: 'Open gratis BTW calculator',
    },
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Factuurbaas/Wanneer%20gebruik%20je%200%20btw.jpg',
      alt: 'Wanneer gebruik je 0% btw: euro biljetten op wereldkaart',
    },
    datePublished: '2026-07-15',
    dateModified: '2026-07-15',
    relatedSlugs: ['btw-factuur-zzp', 'buitenlandse-klanten-factureren'],
    relatedGuideSlugs: ['verschil-9-en-21-btw', 'wanneer-gebruik-je-0-btw', 'welke-btw-rekenen-zzper'],
    faq: [
      {
        question: 'Wanneer mag ik 0% btw rekenen?',
        answer:
          'Je mag 0% btw rekenen wanneer je levering of dienst onder een specifieke regeling valt, bijvoorbeeld bepaalde internationale leveringen naar het buitenland.',
      },
      {
        question: 'Moet ik 0% btw op mijn factuur vermelden?',
        answer:
          'Ja. Vermeld duidelijk dat het btw-tarief 0% is en zorg dat je factuur aan de regels voldoet, inclusief je btw-nummer waar van toepassing.',
      },
      {
        question: 'Is 0% btw hetzelfde als geen btw?',
        answer:
          'Nee. Bij 0% btw pas je een btw-tarief toe van nul procent. Geen btw of btw-vrijgesteld (zoals de KOR) zijn andere situaties.',
      },
      {
        question: 'Kan een zzp\'er altijd 0% btw gebruiken?',
        answer:
          'Nee. Het hangt af van wat je levert en aan wie je levert. Een buitenlandse klant betekent niet automatisch 0% btw.',
      },
    ],
    content: (
      <>
        <p>
          Het <strong>0% btw-tarief</strong> betekent dat je wel btw rekent, maar dat het btw-bedrag op de factuur{' '}
          <strong>€0</strong> is.
        </p>
        <p>
          Het 0%-tarief wordt gebruikt in specifieke situaties, bijvoorbeeld bij bepaalde leveringen aan het buitenland.
        </p>
        <p>Het is belangrijk om onderscheid te maken tussen:</p>
        <ul>
          <li>0% btw</li>
          <li>btw vrijgesteld</li>
          <li>geen btw door de KOR</li>
        </ul>
        <p>Deze situaties lijken op elkaar, maar hebben verschillende gevolgen voor je administratie.</p>
        <p>
          Met de gratis{' '}
          <Link href="/tools/btw-calculator" className="text-warm-orange hover:underline">
            BTW calculator
          </Link>{' '}
          van FactuurBaas bereken je eenvoudig bedragen met verschillende btw-tarieven.
        </p>

        <GuideToolCta href="/tools/btw-calculator" label="Bereken btw direct →" />

        <h2>Wat betekent 0% btw?</h2>
        <p>Bij 0% btw blijft je factuur een btw-factuur, maar het btw-bedrag is nul.</p>
        <p>Voorbeeld: je levert een dienst ter waarde van €1.000 exclusief btw.</p>
        <p>Btw 0%: €0 — Totaal: €1.000</p>

        <CalculationTable
          rows={[
            ['Bedrag exclusief btw', '€1.000'],
            ['BTW 0%', '€0'],
            ['Totaal', '€1.000'],
          ]}
        />

        <h2>Wanneer gebruik je 0% btw?</h2>
        <p>Het 0%-tarief geldt vooral in situaties waarbij goederen of diensten internationaal worden geleverd.</p>

        <h3>1. Leveringen naar het buitenland</h3>
        <p>
          Een veelvoorkomende situatie is export naar landen buiten de Europese Unie. Een Nederlandse ondernemer verkoopt
          goederen aan een bedrijf buiten de EU — onder voorwaarden kan het 0%-tarief worden toegepast.
        </p>

        <h3>2. Intracommunautaire levering binnen de EU</h3>
        <p>Bij verkoop van goederen aan een ondernemer in een ander EU-land kan het 0%-tarief gelden. Voorwaarden zijn onder andere:</p>
        <ul>
          <li>de klant heeft een geldig btw-nummer</li>
          <li>de goederen worden naar een ander EU-land vervoerd</li>
          <li>de levering wordt correct verwerkt in de administratie</li>
        </ul>

        <h3>3. Bepaalde internationale diensten</h3>
        <p>
          Voor sommige diensten aan buitenlandse ondernemers gelden speciale btw-regels. Een Nederlandse ondernemer levert een
          zakelijke dienst aan een bedrijf in een ander EU-land — in veel gevallen wordt dan{' '}
          <strong>btw verlegd</strong> in plaats van 0% btw toegepast.
        </p>
        <p>
          Meer hierover:{' '}
          <Link href="/blogs/buitenlandse-klanten-factureren" className="text-warm-orange hover:underline">
            Buitenlandse klanten factureren
          </Link>
          .
        </p>

        <h2>0% btw is niet hetzelfde als btw verlegd</h2>
        <p>Dit is een veelgemaakte verwarring.</p>
        <p>
          <strong>0% btw:</strong> je zet op de factuur btw-tarief 0% en btw-bedrag €0.
        </p>
        <p>
          <strong>Btw verlegd:</strong> de klant berekent zelf de btw in zijn eigen land. Op de factuur vermeld je bijvoorbeeld
          &quot;Btw verlegd&quot;. Dit is een andere situatie.
        </p>

        <h2>0% btw is niet hetzelfde als btw-vrijgesteld</h2>
        <p>
          <strong>0% btw:</strong> je valt onder het btw-systeem en rekent een btw-tarief van 0%. Vaak behoud je recht op
          btw-aftrek.
        </p>
        <p>
          <strong>Btw-vrijgesteld:</strong> je brengt geen btw in rekening omdat jouw activiteit is vrijgesteld. Bij
          vrijgestelde prestaties gelden andere regels voor btw-aftrek.
        </p>
        <p>
          Zie ook{' '}
          <Link href="/gidsen/verschil-9-en-21-btw" className="text-warm-orange hover:underline">
            verschil tussen 9% en 21% btw
          </Link>
          .
        </p>

        <h2>0% btw op je factuur zetten</h2>
        <p>Als je 0% btw toepast, vermeld je duidelijk:</p>
        <ul>
          <li>het btw-tarief</li>
          <li>waarom het 0%-tarief geldt (indien vereist)</li>
          <li>je btw-nummer wanneer van toepassing</li>
        </ul>
        <pre className="not-prose overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800">
{`Dienstverlening buitenland       €1.000,00
BTW 0%                              €0,00
─────────────────────────────────────────
Totaal                            €1.000,00`}
        </pre>
        <p>
          Meer over btw op je factuur:{' '}
          <Link href="/blogs/btw-factuur-zzp" className="text-warm-orange hover:underline">
            Btw op je factuur: zo doe je het goed als zzp&apos;er
          </Link>
          .
        </p>

        <h2>Veelgemaakte fouten met 0% btw</h2>

        <h3>1. 0% btw gebruiken omdat je geen btw wilt rekenen</h3>
        <p>
          Je mag niet zomaar 0% btw gebruiken omdat je klant geen btw wil betalen. Het tarief hangt af van de situatie.
        </p>

        <h3>2. 0% btw verwarren met de KOR</h3>
        <p>
          Bij de kleineondernemersregeling (KOR) breng je geen btw in rekening omdat je bent vrijgesteld van btw-heffing. Dat
          is iets anders dan een factuur met 0% btw.
        </p>
        <p>
          Lees ook:{' '}
          <Link href="/tools/kor-calculator" className="text-warm-orange hover:underline">
            KOR calculator — check of de KOR bij jou past
          </Link>
          .
        </p>

        <h3>3. Buitenlandse klant betekent niet automatisch 0% btw</h3>
        <p>Een buitenlandse klant betekent niet altijd dat je 0% btw toepast. De regels hangen af van:</p>
        <ul>
          <li>EU of buiten EU</li>
          <li>particulier of ondernemer</li>
          <li>product of dienst</li>
        </ul>

        <h2>Btw berekenen voor je factuur</h2>
        <p>Met de gratis BTW calculator van FactuurBaas kun je:</p>
        <ul>
          <li>0% btw berekenen</li>
          <li>9% btw berekenen</li>
          <li>21% btw berekenen</li>
          <li>bedragen inclusief en exclusief btw controleren</li>
        </ul>
        <p>Daarna maak je direct een professionele factuur zonder account.</p>

        <GuideToolCta href="/tools/btw-calculator" label="Open gratis BTW calculator →" />

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
        <h3>Wanneer mag ik 0% btw rekenen?</h3>
        <p>
          Je mag 0% btw rekenen wanneer je levering of dienst onder een specifieke regeling valt, bijvoorbeeld bepaalde
          internationale leveringen.
        </p>
        <h3>Moet ik 0% btw op mijn factuur vermelden?</h3>
        <p>Ja. Vermeld duidelijk dat het btw-tarief 0% is en zorg dat je factuur aan de regels voldoet.</p>
        <h3>Is 0% btw hetzelfde als geen btw?</h3>
        <p>
          Nee. Bij 0% btw pas je een btw-tarief toe van nul procent. Geen btw of btw-vrijgesteld zijn andere situaties.
        </p>
        <h3>Kan een zzp&apos;er altijd 0% btw gebruiken?</h3>
        <p>Nee. Het hangt af van wat je levert en aan wie je levert.</p>
      </>
    ),
  },
  {
    slug: 'welke-btw-rekenen-zzper',
    cluster: 'btw',
    seoTitle: 'Welke btw moet ik rekenen als zzp\'er? | Uitleg 21%, 9% en 0%',
    title: 'Welke btw moet ik rekenen als zzp\'er?',
    excerpt:
      'Welk btw-tarief gebruik je als zzp\'er? Lees wanneer je 21%, 9% of 0% btw rekent, wanneer de KOR geldt en bereken btw direct met de gratis calculator.',
    keywords:
      'welke btw zzp, btw tarief zzp, btw rekenen zzp, 21% btw zzp, 9% btw zzp, 0% btw zzp, btw op factuur zzp, kor zzp',
    tool: {
      href: '/tools/btw-calculator',
      label: 'Bereken direct btw',
      ctaLabel: 'Bereken btw gratis',
    },
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Factuurbaas/Welke%20btw%20moet%20ik%20rekenen%20als%20zzp%20er.jpg',
      alt: 'Welke btw moet ik rekenen als zzp\'er? Calculator en administratie',
    },
    datePublished: '2026-07-15',
    dateModified: '2026-07-15',
    relatedSlugs: ['btw-factuur-zzp', 'buitenlandse-klanten-factureren'],
    relatedGuideSlugs: ['verschil-9-en-21-btw', 'wanneer-gebruik-je-0-btw', 'btw-terugrekenen'],
    faq: [
      {
        question: 'Moet iedere zzp\'er btw rekenen?',
        answer:
          'Nee. De meeste zzp\'ers zijn btw-plichtig, maar sommige ondernemers gebruiken bijvoorbeeld de KOR of vallen onder een btw-vrijstelling.',
      },
      {
        question: 'Welk btw-tarief gebruiken de meeste freelancers?',
        answer: 'De meeste freelancers gebruiken het standaardtarief van 21% btw op zakelijke diensten.',
      },
      {
        question: 'Moet ik btw rekenen aan particulieren?',
        answer:
          'Als je btw-plichtig bent, moet je meestal ook aan particulieren btw rekenen. De klant betaalt het bedrag inclusief btw.',
      },
      {
        question: 'Kan ik een fout btw-tarief later aanpassen?',
        answer:
          'Ja, maar fouten kunnen gevolgen hebben voor je btw-aangifte. Corrigeer fouten zo snel mogelijk met een creditnota of gecorrigeerde factuur.',
      },
    ],
    content: (
      <>
        <p>
          Als zzp&apos;er moet je meestal btw (belasting over de toegevoegde waarde) rekenen over je diensten of producten.
          Maar <strong>welk btw-tarief</strong> gebruik je? In Nederland zijn er drie belangrijke btw-tarieven:{' '}
          <strong>21% btw</strong>, <strong>9% btw</strong> en <strong>0% btw</strong>.
        </p>
        <p>
          Het juiste btw-tarief hangt af van wat je verkoopt, aan wie je levert en waar je klant gevestigd is. Met onze
          gratis{' '}
          <Link href="/tools/btw-calculator" className="text-warm-orange hover:underline">
            BTW calculator
          </Link>{' '}
          bereken je eenvoudig hoeveel btw je moet toevoegen aan je factuur.
        </p>

        <GuideToolCta href="/tools/btw-calculator" label="Bereken direct btw →" />

        <h2>De meeste zzp&apos;ers gebruiken 21% btw</h2>
        <p>Voor de meeste diensten geldt het standaardtarief van <strong>21% btw</strong>.</p>
        <p>Voorbeelden:</p>
        <ul>
          <li>webdesign en websites bouwen</li>
          <li>marketing en social media diensten</li>
          <li>advies en consultancy</li>
          <li>fotografie</li>
          <li>softwareontwikkeling</li>
          <li>coaching en trainingen</li>
          <li>zakelijke dienstverlening</li>
          <li>onderhoud en reparaties</li>
        </ul>

        <h3>Voorbeeld: freelance marketeer</h3>
        <p>Je werkt als freelance marketeer en rekent €75 per uur voor 10 uur.</p>
        <CalculationTable
          rows={[
            ['Uren', '10 uur'],
            ['Tarief', '€75'],
            ['Bedrag exclusief btw', '€750'],
            ['21% btw', '€157,50'],
            ['Totaal factuur', '€907,50'],
          ]}
        />
        <p>
          Je klant betaalt €907,50. De €157,50 btw draag je later af via je btw-aangifte — dit is niet je inkomen.
        </p>

        <h2>Wanneer gebruik je 9% btw?</h2>
        <p>
          Het verlaagde btw-tarief van <strong>9%</strong> geldt alleen voor bepaalde producten en diensten.
        </p>
        <p>Voorbeelden:</p>
        <ul>
          <li>sommige voedingsmiddelen</li>
          <li>boeken en digitale publicaties</li>
          <li>schilderwerk aan woningen ouder dan 2 jaar</li>
          <li>bepaalde werkzaamheden in de zorg</li>
          <li>bepaalde culturele diensten</li>
        </ul>
        <p>Voor veel zzp&apos;ers in zakelijke dienstverlening is 9% btw niet van toepassing.</p>

        <h3>Voorbeeld: schilderwerk</h3>
        <p>Een schilder werkt aan een woning ouder dan 2 jaar.</p>
        <CalculationTable
          rows={[
            ['Schilderwerk', '€1.000'],
            ['9% btw', '€90'],
            ['Totaal', '€1.090'],
          ]}
        />
        <p>
          Let op: niet al het schilderwerk valt automatisch onder 9%. Controleer altijd de voorwaarden. Meer in{' '}
          <Link href="/gidsen/verschil-9-en-21-btw" className="text-warm-orange hover:underline">
            verschil tussen 9% en 21% btw
          </Link>
          .
        </p>

        <h2>Wanneer gebruik je 0% btw?</h2>
        <p>Het <strong>0%-tarief</strong> wordt vooral gebruikt bij bepaalde internationale transacties.</p>
        <p>Voorbeelden:</p>
        <ul>
          <li>goederen leveren aan ondernemers in andere EU-landen</li>
          <li>bepaalde internationale diensten</li>
          <li>export buiten de EU</li>
        </ul>
        <p>
          Bij 0% btw bereken je geen btw aan je klant, maar de prestatie valt wel onder de btw-regels. Lees{' '}
          <Link href="/gidsen/wanneer-gebruik-je-0-btw" className="text-warm-orange hover:underline">
            wanneer gebruik je 0% btw?
          </Link>
          .
        </p>

        <h3>Voorbeeld: dienst aan ondernemer in Duitsland</h3>
        <CalculationTable
          rows={[
            ['Dienst', '€1.000'],
            ['Btw', '€0'],
            ['Totaal', '€1.000'],
          ]}
        />
        <p>Op de factuur vermeld je bijvoorbeeld dat de btw is verlegd.</p>

        <h2>Wanneer hoef je geen btw te rekenen?</h2>
        <p>Sommige ondernemers rekenen helemaal geen btw.</p>

        <h3>Kleineondernemersregeling (KOR)</h3>
        <p>
          Als je gebruikmaakt van de KOR, breng je geen btw in rekening aan klanten. Je mag dan ook geen btw terugvragen
          over zakelijke kosten. Check met de{' '}
          <Link href="/tools/kor-calculator" className="text-warm-orange hover:underline">
            KOR calculator
          </Link>{' '}
          of de KOR bij jou past.
        </p>

        <h3>Btw-vrijgestelde activiteiten</h3>
        <p>Voor sommige beroepen en diensten gelden vrijstellingen, bijvoorbeeld bepaalde zorgdiensten, onderwijsactiviteiten
          en financiële diensten. Niet iedere zzp&apos;er kan gebruikmaken van een btw-vrijstelling.</p>

        <h2>Btw berekenen op je factuur</h2>
        <p>Op een correcte factuur vermeld je:</p>
        <ul>
          <li>het btw-tarief (bijvoorbeeld 21%, 9% of 0%)</li>
          <li>het bedrag exclusief btw</li>
          <li>het btw-bedrag</li>
          <li>het totaal inclusief btw</li>
        </ul>

        <CalculationTable
          rows={[
            ['Dienstverlening', '€500'],
            ['21% btw', '€105'],
            ['Totaal', '€605'],
          ]}
        />
        <p>
          Met een goede factuur voorkom je fouten bij je btw-aangifte. Zie{' '}
          <Link href="/blogs/btw-factuur-zzp" className="text-warm-orange hover:underline">
            Btw op je factuur: zo doe je het goed als zzp&apos;er
          </Link>
          .
        </p>

        <h2>Veelgemaakte fouten met btw door zzp&apos;ers</h2>

        <h3>Het verkeerde btw-tarief gebruiken</h3>
        <p>Niet iedere dienst valt automatisch onder 21%. Controleer of jouw werkzaamheden onder een uitzondering vallen.</p>

        <h3>Btw vergeten op de factuur</h3>
        <p>Als je btw-plichtig bent, moet je btw correct vermelden op je facturen.</p>

        <h3>Btw als inkomen zien</h3>
        <p>De btw die je ontvangt is niet je omzet. Dit bedrag moet je later afdragen aan de Belastingdienst.</p>

        <h3>Geen rekening houden met buitenlandse klanten</h3>
        <p>
          Bij klanten buiten Nederland kunnen andere btw-regels gelden. Lees{' '}
          <Link href="/blogs/buitenlandse-klanten-factureren" className="text-warm-orange hover:underline">
            Buitenlandse klanten factureren
          </Link>
          .
        </p>

        <h2>Welke btw moet ik rekenen? Overzicht</h2>
        <CalculationTable
          rows={[
            ['Algemene diensten', '21%'],
            ['Sommige producten en specifieke diensten', '9%'],
            ['Internationale situaties', '0% of btw verlegd'],
            ['KOR', 'Geen btw rekenen'],
          ]}
        />
        <p>Twijfel je? Controleer altijd de specifieke regels voor jouw branche bij de Belastingdienst.</p>

        <h2>Bereken direct hoeveel btw je moet rekenen</h2>
        <p>
          Met de gratis BTW calculator van FactuurBaas bereken je eenvoudig bedragen inclusief of exclusief btw. Vul een
          bedrag in, kies het btw-tarief en zie direct hoeveel btw je moet toevoegen.
        </p>

        <GuideToolCta href="/tools/btw-calculator" label="Bereken btw gratis →" />

        <h2>Veelgestelde vragen</h2>
        <h3>Moet iedere zzp&apos;er btw rekenen?</h3>
        <p>
          Nee. De meeste zzp&apos;ers zijn btw-plichtig, maar sommige ondernemers gebruiken bijvoorbeeld de KOR of vallen
          onder een btw-vrijstelling.
        </p>
        <h3>Welk btw-tarief gebruiken de meeste freelancers?</h3>
        <p>De meeste freelancers gebruiken het standaardtarief van 21%.</p>
        <h3>Moet ik btw rekenen aan particulieren?</h3>
        <p>
          Als je btw-plichtig bent, moet je meestal ook aan particulieren btw rekenen. De klant betaalt het bedrag
          inclusief btw.
        </p>
        <h3>Kan ik een fout btw-tarief later aanpassen?</h3>
        <p>
          Ja, maar fouten kunnen gevolgen hebben voor je btw-aangifte. Corrigeer fouten zo snel mogelijk.
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
              Verschil tussen 9% en 21% btw
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
    seoTitle: 'Veelgemaakte fouten bij btw berekenen (en hoe je ze voorkomt)',
    title: 'Veelgemaakte fouten bij btw berekenen (en hoe je ze voorkomt)',
    excerpt:
      'Welke fouten maken ondernemers bij btw berekenen? Van verkeerde tarieven tot afrondingsfouten — lees hoe je ze voorkomt en bereken btw direct met de gratis calculator.',
    keywords:
      'fouten btw berekenen, btw berekenen fout, verkeerd btw tarief, btw op factuur fout, btw terugrekenen fout, btw afronden, kor btw fout',
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
    dateModified: '2026-07-15',
    relatedSlugs: ['btw-factuur-zzp', 'factuur-fouten-voorkomen'],
    relatedGuideSlugs: ['btw-terugrekenen', 'welke-btw-rekenen-zzper', 'btw-berekenen-excel'],
    faq: [
      {
        question: 'Hoe weet ik welk btw-tarief ik moet gebruiken?',
        answer:
          'Dit hangt af van je product, dienst en situatie. Voor de meeste zzp-diensten geldt 21% btw. Controleer altijd of 9% of 0% van toepassing is.',
      },
      {
        question: 'Waarom klopt mijn btw-berekening niet?',
        answer:
          'Meestal komt dit door een verkeerde uitgangswaarde (inclusief of exclusief btw), een verkeerd percentage of afrondingsverschillen.',
      },
      {
        question: 'Moet ik btw altijd doorberekenen aan klanten?',
        answer:
          'Als je btw-plichtig bent meestal wel. Er zijn uitzonderingen zoals de KOR of bepaalde vrijstellingen.',
      },
      {
        question: 'Kan een btw-fout gevolgen hebben?',
        answer:
          'Ja. Een verkeerde btw-aangifte kan leiden tot correcties, naheffingen of rente bij de Belastingdienst.',
      },
    ],
    content: (
      <>
        <p>
          Btw berekenen lijkt eenvoudig, maar veel ondernemers maken fouten bij het toevoegen, terugrekenen of verwerken
          van btw op facturen.
        </p>
        <p>
          Een verkeerd btw-tarief, een verkeerde berekening of een fout op je factuur kan leiden tot problemen met je
          administratie en btw-aangifte. In deze gids bespreken we de meest voorkomende fouten bij btw berekenen en hoe je
          ze voorkomt.
        </p>
        <p>
          Met de gratis{' '}
          <Link href="/tools/btw-calculator" className="text-warm-orange hover:underline">
            BTW calculator
          </Link>{' '}
          van FactuurBaas bereken je eenvoudig bedragen inclusief of exclusief btw.
        </p>

        <GuideToolCta href="/tools/btw-calculator" label="Bereken btw direct →" />

        <h2>1. Btw berekenen over een bedrag inclusief btw</h2>
        <p>Een veelgemaakte fout is dat ondernemers 21% berekenen over een bedrag waar de btw al in zit.</p>
        <p>
          Voorbeeld: je ontvangt een bedrag van <strong>€121 inclusief btw</strong>.
        </p>
        <p>
          <strong>Foutieve berekening:</strong> €121 × 21% = €25,41 btw — dat klopt niet.
        </p>
        <p>
          <strong>Juiste berekening:</strong> €121 ÷ 1,21 = €100 exclusief btw. €121 − €100 = <strong>€21 btw</strong>.
        </p>
        <p>
          Meer uitleg:{' '}
          <Link href="/gidsen/btw-terugrekenen" className="text-warm-orange hover:underline">
            Hoe bereken je btw terug?
          </Link>
          .
        </p>

        <h2>2. Het verkeerde btw-tarief gebruiken</h2>
        <p>Niet iedere dienst valt automatisch onder 21% btw.</p>
        <CalculationTable
          rows={[
            ['21%', 'Meeste producten en diensten'],
            ['9%', 'Bepaalde producten en diensten'],
            ['0%', 'Sommige internationale situaties'],
          ]}
        />
        <p>
          Een verkeerde keuze kan betekenen dat je te veel of te weinig btw afdraagt. Zie{' '}
          <Link href="/gidsen/welke-btw-rekenen-zzper" className="text-warm-orange hover:underline">
            welke btw moet ik rekenen als zzp&apos;er?
          </Link>{' '}
          en{' '}
          <Link href="/gidsen/verschil-9-en-21-btw" className="text-warm-orange hover:underline">
            verschil tussen 9% en 21% btw
          </Link>
          .
        </p>

        <h2>3. Het btw-percentage verkeerd invoeren</h2>
        <p>Bij berekeningen in Excel of een calculator gaat dit regelmatig mis.</p>
        <ul>
          <li>
            <strong>Goed:</strong> 21% = 0,21
          </li>
          <li>
            <strong>Fout:</strong> 21 = 21 (100× te hoog)
          </li>
        </ul>
        <p>
          Lees ook{' '}
          <Link href="/gidsen/btw-berekenen-excel" className="text-warm-orange hover:underline">
            btw berekenen in Excel
          </Link>
          .
        </p>

        <h2>4. Btw vergeten op de factuur</h2>
        <p>Sommige startende zzp&apos;ers sturen een factuur met alleen het bedrag van hun werkzaamheden.</p>
        <p>
          <strong>Fout:</strong> Website ontwerp €1.000 — Totaal €1.000
        </p>
        <p>Als je btw-plichtig bent, moet daar meestal nog btw bij:</p>
        <CalculationTable
          rows={[
            ['Website ontwerp', '€1.000'],
            ['21% btw', '€210'],
            ['Totaal', '€1.210'],
          ]}
        />
        <p>Een correcte factuur vermeldt duidelijk bedrag exclusief btw, btw-tarief, btw-bedrag en totaal inclusief btw.</p>

        <h2>5. Btw als omzet of inkomen zien</h2>
        <p>De btw die je ontvangt van je klant is geen inkomen.</p>
        <p>Je stuurt een factuur: dienst €1.000, btw €210 — klant betaalt €1.210.</p>
        <p>
          Die €210 btw is bedoeld voor je btw-aangifte. Je omzet is <strong>€1.000</strong>, niet €1.210.
        </p>

        <h2>6. Btw afronden op de verkeerde manier</h2>
        <p>
          Bij meerdere factuurregels kunnen afrondingsverschillen ontstaan. Als je eerst alle bedragen optelt en daarna
          btw berekent, kan het resultaat verschillen van btw berekenen per regel. Vooral bij grotere facturen is
          correcte afronding belangrijk.
        </p>

        <h2>7. Geen rekening houden met buitenlandse klanten</h2>
        <p>Bij klanten buiten Nederland gelden soms andere btw-regels:</p>
        <ul>
          <li>zakelijke klant in een ander EU-land</li>
          <li>export buiten de EU</li>
          <li>btw verlegd</li>
        </ul>
        <p>
          Een factuur naar een buitenlandse ondernemer kan anders worden opgesteld dan een normale Nederlandse factuur.
          Zie{' '}
          <Link href="/gidsen/wanneer-gebruik-je-0-btw" className="text-warm-orange hover:underline">
            wanneer gebruik je 0% btw?
          </Link>{' '}
          en{' '}
          <Link href="/blogs/buitenlandse-klanten-factureren" className="text-warm-orange hover:underline">
            Buitenlandse klanten factureren
          </Link>
          .
        </p>

        <h2>8. Btw rekenen terwijl je gebruikmaakt van de KOR</h2>
        <p>
          Ondernemers die gebruikmaken van de kleineondernemersregeling (KOR) rekenen geen btw aan klanten. Een
          veelgemaakte fout: KOR gebruiken, maar toch 21% btw op de factuur zetten. Dat mag niet.
        </p>
        <p>
          Controleer met de{' '}
          <Link href="/tools/kor-calculator" className="text-warm-orange hover:underline">
            KOR calculator
          </Link>{' '}
          of je btw-plichtig bent of onder een regeling valt.
        </p>

        <h2>9. Btw vergeten te reserveren</h2>
        <p>
          Je ontvangt btw van klanten, maar dit geld is niet volledig beschikbaar om uit te geven. Veel ondernemers zetten
          de ontvangen btw apart zodat ze voldoende geld hebben voor de btw-aangifte.
        </p>

        <h2>Hoe voorkom je fouten met btw?</h2>
        <ol>
          <li>Controleer welk btw-tarief bij je dienst hoort.</li>
          <li>Bereken btw altijd over het juiste bedrag.</li>
          <li>Vermeld btw duidelijk op je factuur.</li>
          <li>Houd btw-inkomsten apart.</li>
          <li>Gebruik een betrouwbare calculator of factuurtool.</li>
        </ol>
        <p>
          Meer tips:{' '}
          <Link href="/blogs/factuur-fouten-voorkomen" className="text-warm-orange hover:underline">
            7 veelgemaakte fouten op facturen
          </Link>
          .
        </p>

        <h2>Bereken btw zonder fouten</h2>
        <p>Met de gratis BTW calculator van FactuurBaas controleer je snel:</p>
        <ul>
          <li>btw toevoegen aan een bedrag</li>
          <li>btw terugrekenen uit een inclusief bedrag</li>
          <li>21%, 9% en 0% btw berekenen</li>
        </ul>
        <p>Geen Excel-formules nodig.</p>

        <GuideToolCta href="/tools/btw-calculator" label="Bereken btw gratis →" />

        <h2>Veelgestelde vragen</h2>
        <h3>Hoe weet ik welk btw-tarief ik moet gebruiken?</h3>
        <p>Dit hangt af van je product, dienst en situatie. Voor de meeste zzp-diensten geldt 21% btw.</p>
        <h3>Waarom klopt mijn btw-berekening niet?</h3>
        <p>
          Meestal door een verkeerde uitgangswaarde (inclusief of exclusief btw), een verkeerd percentage of
          afrondingsverschillen.
        </p>
        <h3>Moet ik btw altijd doorberekenen aan klanten?</h3>
        <p>Als je btw-plichtig bent meestal wel. Er zijn uitzonderingen zoals de KOR of bepaalde vrijstellingen.</p>
        <h3>Kan een btw-fout gevolgen hebben?</h3>
        <p>Ja. Een verkeerde btw-aangifte kan leiden tot correcties, naheffingen of rente.</p>
      </>
    ),
  },
  {
    slug: 'hoe-rond-je-btw-af',
    cluster: 'btw',
    seoTitle: 'Hoe rond je btw af? Uitleg over btw afronden op facturen',
    title: 'Hoe rond je btw af? Uitleg over btw afronden op facturen',
    excerpt:
      'Hoe rond je btw af op facturen? Lees wanneer je per regel of over het totaal afrondt, welke Excel-formule je gebruikt en bereken btw direct met de gratis calculator.',
    keywords:
      'btw afronden, hoe rond je btw af, btw afronden factuur, afronden op twee decimalen, btw berekenen afronden, AFRONDEN excel btw',
    tool: {
      href: '/tools/btw-calculator',
      label: 'Bereken direct btw',
      ctaLabel: 'Bereken btw gratis',
    },
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Factuurbaas/Hoe%20rond%20je%20btw%20af.jpg',
      alt: 'Hoe rond je btw af: geld tellen en administratie',
    },
    datePublished: '2026-07-15',
    dateModified: '2026-07-15',
    relatedSlugs: ['btw-factuur-zzp', 'factuur-fouten-voorkomen'],
    relatedGuideSlugs: ['veelgemaakte-fouten-btw-berekenen', 'btw-berekenen-excel', 'btw-terugrekenen'],
    faq: [
      {
        question: 'Op hoeveel decimalen rond je btw af?',
        answer: 'Btw-bedragen worden normaal afgerond op twee decimalen op Nederlandse facturen.',
      },
      {
        question: 'Rond je btw per regel of over het totaal af?',
        answer:
          'Beide methodes kunnen voorkomen. Het belangrijkste is dat je consequent dezelfde methode gebruikt in je facturen en administratie.',
      },
      {
        question: 'Mag een factuur een verschil van een paar cent hebben?',
        answer:
          'Kleine afrondingsverschillen kunnen voorkomen, maar je administratie en btw-aangifte moeten uiteindelijk correct aansluiten.',
      },
      {
        question: 'Hoe rond ik btw af in Excel?',
        answer: 'Gebruik de functie AFRONDEN(getal;2) om een bedrag op twee decimalen af te ronden.',
      },
    ],
    content: (
      <>
        <p>
          Bij het maken van een factuur moet je btw correct afronden. Vooral bij facturen met meerdere regels kunnen
          kleine afrondingsverschillen ontstaan.
        </p>
        <p>
          Een verschil van een paar cent lijkt onbelangrijk, maar een correcte btw-berekening zorgt ervoor dat je
          factuur aansluit bij je administratie en btw-aangifte.
        </p>
        <p>
          Met de gratis{' '}
          <Link href="/tools/btw-calculator" className="text-warm-orange hover:underline">
            BTW calculator
          </Link>{' '}
          van FactuurBaas bereken je eenvoudig btw-bedragen en totalen.
        </p>

        <GuideToolCta href="/tools/btw-calculator" label="Bereken btw direct →" />

        <h2>Rond je btw af op twee decimalen</h2>
        <p>In Nederland worden bedragen op facturen normaal gesproken afgerond op <strong>twee decimalen</strong>.</p>
        <p>Voorbeelden: €10,00 · €21,50 · €157,35</p>
        <p>
          Een btw-bedrag mag dus niet worden weergegeven als €21,428571, maar als <strong>€21,43</strong>.
        </p>
        <p>De standaardregel:</p>
        <ul>
          <li>derde decimaal <strong>5 of hoger</strong> → naar boven afronden</li>
          <li>derde decimaal <strong>4 of lager</strong> → naar beneden afronden</li>
        </ul>
        <p>
          Voorbeeld: €21,425 → €21,43 · €21,424 → €21,42
        </p>

        <h2>Btw afronden per factuurregel of over het totaal?</h2>
        <p>Bij facturen met meerdere producten of diensten zijn er twee manieren om btw te berekenen.</p>

        <h3>Methode 1: btw per regel afronden</h3>
        <p>Bij deze methode bereken je eerst de btw per factuurregel.</p>
        <CalculationTable
          rows={[
            ['Dienst 1 — excl. btw', '€10,00'],
            ['Btw 21%', '€2,10'],
            ['Dienst 2 — excl. btw', '€10,00'],
            ['Btw 21%', '€2,10'],
            ['Dienst 3 — excl. btw', '€10,00'],
            ['Btw 21%', '€2,10'],
            ['Totaal btw', '€6,30'],
          ]}
        />
        <p>Deze methode wordt vaak gebruikt bij facturatieprogramma&apos;s.</p>

        <h3>Methode 2: btw over het totaal berekenen</h3>
        <p>Hier tel je eerst alle bedragen exclusief btw op.</p>
        <CalculationTable
          rows={[
            ['Subtotaal', '€30,00'],
            ['21% btw', '€6,30'],
            ['Totaal', '€36,30'],
          ]}
        />
        <p>Bij eenvoudige bedragen geeft dit hetzelfde resultaat.</p>

        <h2>Waarom ontstaan afrondingsverschillen?</h2>
        <p>Bij meerdere regels kan de uitkomst verschillen.</p>
        <p>Voorbeeld met drie regels van €12,34 exclusief btw:</p>
        <p>
          <strong>Per regel afronden:</strong> €12,34 × 21% = €2,5914 → €2,59. 3 × €2,59 = <strong>€7,77 btw</strong>.
        </p>
        <p>
          <strong>Eerst optellen:</strong> €37,02 × 21% = €7,7742 → <strong>€7,77 btw</strong>.
        </p>
        <p>
          In dit voorbeeld is er geen verschil, maar bij andere bedragen kan dat wel gebeuren. Zie ook{' '}
          <Link href="/gidsen/veelgemaakte-fouten-btw-berekenen" className="text-warm-orange hover:underline">
            veelgemaakte fouten bij btw berekenen
          </Link>
          .
        </p>

        <h2>Welke afrondingsmethode moet je gebruiken?</h2>
        <p>Voor de meeste zzp&apos;ers geldt:</p>
        <ul>
          <li>gebruik één vaste methode voor al je facturen</li>
          <li>zorg dat je factuur en administratie dezelfde berekening gebruiken</li>
          <li>gebruik een factuurprogramma als je veel facturen maakt</li>
        </ul>
        <p>
          FactuurBaas berekent btw automatisch en zorgt ervoor dat bedragen correct worden weergegeven op je PDF-factuur.
        </p>

        <h2>Btw afronden in Excel</h2>
        <p>In Excel kun je afronden met de functie:</p>
        <pre className="not-prose overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800">
          =AFRONDEN(getal;2)
        </pre>
        <p>Voorbeeld:</p>
        <pre className="not-prose overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800">
          =AFRONDEN(100*21%;2)
        </pre>
        <p>
          Resultaat: €21,00. De <code>2</code> betekent dat Excel afrondt op twee decimalen. Meer in{' '}
          <Link href="/gidsen/btw-berekenen-excel" className="text-warm-orange hover:underline">
            btw berekenen in Excel
          </Link>
          .
        </p>

        <h2>Veelgemaakte fouten bij btw afronden</h2>

        <h3>Te veel decimalen gebruiken</h3>
        <p>
          Een factuur met &quot;Btw: €157,499999&quot; is niet duidelijk voor je klant. Gebruik altijd twee decimalen.
        </p>

        <h3>Afronden tijdens de berekening</h3>
        <p>
          Bij complexe berekeningen kan te vroeg afronden kleine verschillen veroorzaken. Meestal is het beter om eerst te
          rekenen en pas het eindresultaat af te ronden.
        </p>

        <h3>Verschillende methodes gebruiken</h3>
        <p>
          Als je factuurtool per regel afrondt en je administratie over het totaal rekent, kunnen verschillen ontstaan.
        </p>

        <h2>Btw afronden op je factuur</h2>
        <p>Een professionele factuur toont meestal:</p>
        <CalculationTable
          rows={[
            ['Subtotaal', '€750,00'],
            ['BTW 21%', '€157,50'],
            ['Totaal', '€907,50'],
          ]}
        />
        <p>De klant ziet direct hoe het totaal is opgebouwd.</p>

        <h2>Bereken btw automatisch</h2>
        <p>
          Met de gratis BTW calculator van FactuurBaas hoef je zelf geen btw-formules of afrondingen uit te rekenen.
          Bereken eenvoudig btw toevoegen, btw terugrekenen, 21%/9%/0% btw en bedragen inclusief en exclusief btw.
        </p>

        <GuideToolCta href="/tools/btw-calculator" label="Bereken btw gratis →" />

        <h2>Veelgestelde vragen</h2>
        <h3>Op hoeveel decimalen rond je btw af?</h3>
        <p>Btw-bedragen worden normaal afgerond op twee decimalen.</p>
        <h3>Rond je btw per regel of over het totaal af?</h3>
        <p>Beide methodes kunnen voorkomen. Het belangrijkste is dat je consequent dezelfde methode gebruikt.</p>
        <h3>Mag een factuur een verschil van een paar cent hebben?</h3>
        <p>
          Kleine afrondingsverschillen kunnen voorkomen, maar je administratie en btw-aangifte moeten uiteindelijk
          correct aansluiten.
        </p>
        <h3>Hoe rond ik btw af in Excel?</h3>
        <p>
          Gebruik de functie <code>AFRONDEN(getal;2)</code> om een bedrag op twee decimalen af te ronden.
        </p>
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
    seoTitle: 'Hoe maak je een offerte? Stappenplan voor zzp\'ers en ondernemers',
    title: 'Hoe maak je een offerte? Stappenplan voor zzp\'ers en ondernemers',
    excerpt:
      'Hoe maak je een professionele offerte als zzp\'er? Stap-voor-stap uitleg met voorbeeld, verplichte onderdelen en gratis offerte maker zonder account.',
    keywords:
      'hoe maak je een offerte, offerte maken zzp, offerte maken, professionele offerte, offerte stappenplan, gratis offerte maken, offerte voorbeeld',
    tool: {
      href: '/tools/offerte-maker',
      label: 'Maak gratis offerte',
      ctaLabel: 'Maak gratis offerte',
      relatedTitle: 'Offerte maker',
      relatedExcerpt: 'Maak gratis een professionele offerte en download direct als PDF. Geen account nodig.',
    },
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Factuurbaas/Hoe%20maak%20je%20een%20offerte.jpg',
      alt: 'Hoe maak je een offerte: ondernemer bespreekt offerte met klant',
    },
    datePublished: '2026-07-15',
    dateModified: '2026-07-15',
    relatedSlugs: ['verschil-factuur-offerte', 'factuur-maken-zzp'],
    relatedGuideSlugs: ['wat-moet-er-op-een-offerte-staan', 'offerte-voorbeeld', 'wanneer-is-een-offerte-bindend'],
    faq: [
      {
        question: 'Is een offerte verplicht?',
        answer:
          'Nee, een offerte is meestal niet wettelijk verplicht. Het is wel handig om vooraf duidelijke afspraken te maken met je klant.',
      },
      {
        question: 'Kan ik een offerte gratis maken?',
        answer: 'Ja. Met FactuurBaas maak je gratis een professionele offerte zonder account.',
      },
      {
        question: 'Hoe lang moet een offerte geldig zijn?',
        answer: 'Dat bepaal je zelf. Veel ondernemers gebruiken een termijn van 14 of 30 dagen.',
      },
      {
        question: 'Kan ik van een offerte een factuur maken?',
        answer: 'Ja. Na akkoord kun je de gegevens gebruiken om een factuur te maken in FactuurBaas.',
      },
    ],
    content: (
      <>
        <p>
          Een goede offerte helpt je om duidelijke afspraken te maken met je klant voordat je start met een opdracht. In
          een offerte leg je vast <strong>wat je gaat leveren, hoeveel het kost en onder welke voorwaarden je werkt</strong>.
        </p>
        <p>
          Voor veel zzp&apos;ers is een offerte de eerste stap richting een nieuwe klant. Met een professionele offerte wek
          je vertrouwen en voorkom je misverstanden achteraf.
        </p>
        <p>
          Met de gratis{' '}
          <Link href="/tools/offerte-maker" className="text-warm-orange hover:underline">
            offerte maker
          </Link>{' '}
          van FactuurBaas maak je eenvoudig een professionele offerte, download je deze als PDF en zet je een
          goedgekeurde offerte later om naar een factuur.
        </p>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Maak gratis offerte →" />

        <h2>Wat is een offerte?</h2>
        <p>Een offerte is een voorstel aan een klant waarin je beschrijft:</p>
        <ul>
          <li>welke werkzaamheden of producten je levert</li>
          <li>wat de kosten zijn</li>
          <li>wanneer je de opdracht uitvoert</li>
          <li>welke voorwaarden gelden</li>
        </ul>
        <p>
          Een offerte is meestal bedoeld om een klant akkoord te laten gaan met een opdracht. Pas na akkoord ontstaat er
          vaak een opdrachtbevestiging of overeenkomst.
        </p>

        <h2>Wanneer maak je een offerte?</h2>
        <p>
          Een offerte wordt vooral gebruikt bij opdrachten waarbij vooraf duidelijkheid nodig is over de prijs en
          werkzaamheden.
        </p>
        <p>Voorbeelden:</p>
        <ul>
          <li>een website laten bouwen</li>
          <li>een verbouwing of schilderwerk</li>
          <li>marketingdiensten</li>
          <li>advieswerk</li>
          <li>fotografie</li>
          <li>freelance opdrachten</li>
          <li>zakelijke projecten</li>
        </ul>
        <p>
          Voor kleine werkzaamheden kan een directe factuur voldoende zijn, maar bij grotere opdrachten geeft een offerte
          meer zekerheid.
        </p>

        <h2>Hoe maak je een offerte? Stap voor stap</h2>

        <h3>1. Voeg je bedrijfsgegevens toe</h3>
        <p>Een professionele offerte begint met je eigen gegevens: bedrijfsnaam, adres, KvK-nummer, btw-nummer, e-mail en telefoon.</p>

        <h3>2. Voeg de gegevens van je klant toe</h3>
        <p>Vermeld bedrijfsnaam, contactpersoon, adres en e-mail. Controleer altijd of de gegevens correct zijn.</p>

        <h3>3. Beschrijf de werkzaamheden duidelijk</h3>
        <p>
          Vermijd algemene omschrijvingen zoals &quot;Website werkzaamheden&quot;. Beter: &quot;Ontwerp en ontwikkeling van
          een nieuwe bedrijfswebsite inclusief vijf pagina&apos;s, mobiel ontwerp en basis SEO-instellingen.&quot;
        </p>

        <h3>4. Vermeld de prijs en btw</h3>
        <p>Een offerte moet duidelijk laten zien wat de klant betaalt.</p>
        <CalculationTable
          rows={[
            ['Website ontwerp', '€2.000'],
            ['BTW 21%', '€420'],
            ['Totaal', '€2.420'],
          ]}
        />
        <p>Vermeld altijd of bedragen inclusief of exclusief btw zijn.</p>

        <h3>5. Voeg een geldigheidsduur toe</h3>
        <p>
          Veel ondernemers gebruiken: &quot;Deze offerte is 14 dagen geldig.&quot; Een geldigheidsduur voorkomt dat
          prijzen maanden later nog hetzelfde moeten zijn.
        </p>

        <h3>6. Voeg voorwaarden toe</h3>
        <p>Denk aan betalingstermijn, planning, wijzigingen, annulering en levering. Bijvoorbeeld: &quot;Betaling binnen 14 dagen na factuurdatum.&quot;</p>

        <h2>Wat moet er op een offerte staan?</h2>
        <p>
          Lees de volledige uitleg in{' '}
          <Link href="/gidsen/wat-moet-er-op-een-offerte-staan" className="text-warm-orange hover:underline">
            wat moet er op een offerte staan
          </Link>
          .
        </p>
        <ul>
          <li>Offertenummer</li>
          <li>Datum</li>
          <li>Geldigheidsduur</li>
          <li>Bedrijfsgegevens</li>
          <li>Klantgegevens</li>
          <li>Omschrijving van werkzaamheden</li>
          <li>Prijzen en btw-bedrag</li>
          <li>Algemene voorwaarden</li>
          <li>Betalingsafspraken</li>
        </ul>

        <h2>Offerte voorbeeld</h2>
        <p>Een eenvoudige offerte kan er zo uitzien:</p>
        <pre className="not-prose overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800 whitespace-pre-wrap">
{`Offerte OFF-2026-001

Van: Studio Jansen
Aan: Klant BV

Website ontwerp — 10 uur × €75

Subtotaal:  €750,00
BTW 21%:    €157,50
Totaal:     €907,50

Geldig tot: 24 juli 2026`}
        </pre>

        <h2>Wat gebeurt er na akkoord op een offerte?</h2>
        <p>
          Wanneer een klant akkoord gaat, kun je starten met de opdracht. Na afronding stuur je meestal een factuur. Met
          FactuurBaas gebruik je de offerte als basis, zodat gegevens niet opnieuw ingevoerd hoeven te worden.
        </p>
        <p>
          Lees ook{' '}
          <Link href="/blogs/verschil-factuur-offerte" className="text-warm-orange hover:underline">
            verschil tussen offerte en factuur
          </Link>
          .
        </p>

        <h2>Offerte maken in Word of Excel?</h2>
        <p>Veel ondernemers beginnen met Word of Excel, maar dit heeft nadelen:</p>
        <ul>
          <li>zelf alles opmaken</li>
          <li>btw handmatig berekenen</li>
          <li>geen vaste layout</li>
          <li>grotere kans op fouten</li>
        </ul>
        <p>
          Een online offerte maker maakt het eenvoudiger: vul gegevens in, voeg werkzaamheden toe, bereken automatisch
          btw en download als PDF.
        </p>

        <h2>Maak gratis een offerte</h2>
        <p>Met de gratis offerte maker van FactuurBaas maak je in enkele minuten een professionele offerte. Geen account nodig:</p>
        <ul>
          <li>gratis gebruiken</li>
          <li>direct PDF downloaden</li>
          <li>automatische btw-berekening</li>
          <li>offerte later omzetten naar factuur</li>
        </ul>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Maak gratis offerte →" />

        <h2>Veelgestelde vragen</h2>
        <h3>Is een offerte verplicht?</h3>
        <p>
          Nee, een offerte is meestal niet wettelijk verplicht. Het is wel handig om vooraf duidelijke afspraken te maken.
        </p>
        <h3>Kan ik een offerte gratis maken?</h3>
        <p>Ja. Met FactuurBaas maak je gratis een professionele offerte zonder account.</p>
        <h3>Hoe lang moet een offerte geldig zijn?</h3>
        <p>Dat bepaal je zelf. Veel ondernemers gebruiken een termijn van 14 of 30 dagen.</p>
        <h3>Kan een klant een offerte weigeren?</h3>
        <p>Ja. Een offerte is een voorstel totdat de klant akkoord gaat.</p>
        <h3>Kan ik van een offerte een factuur maken?</h3>
        <p>Ja. Na akkoord kun je de gegevens gebruiken om een factuur te maken.</p>
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

        <h3>Diensten offerte voorbeeld</h3>
        <p>
          Voor consultants, coaches, bureaus en zakelijke dienstverlening.{' '}
          <Link href="/offerte-voorbeeld/diensten" className="text-warm-orange hover:underline">
            Bekijk diensten offerte voorbeeld →
          </Link>
        </p>

        <h3>Horeca offerte voorbeeld</h3>
        <p>
          Voor catering en horeca — bruiloften, events en feesten.{' '}
          <Link href="/offerte-voorbeeld/horeca" className="text-warm-orange hover:underline">
            Bekijk horeca offerte voorbeeld →
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
    seoTitle: 'Offerte maken voor zzp\'ers | Tips, regels en veelgemaakte fouten',
    title: 'Offerte maken voor zzp\'ers: tips, regels en veelgemaakte fouten',
    excerpt:
      'Offerte maken als zzp\'er? Lees praktische tips, belangrijke regels en veelgemaakte fouten. Maak gratis een professionele offerte met FactuurBaas.',
    keywords:
      'offerte maken zzp, offerte zzp, zzp offerte maken, offerte tips zzp, offerte fouten, professionele offerte zzp, gratis offerte zzp',
    tool: {
      href: '/tools/offerte-maker',
      label: 'Maak gratis offerte',
      ctaLabel: 'Open gratis offerte maker',
      relatedTitle: 'Offerte maker',
      relatedExcerpt: 'Maak gratis een professionele offerte en download direct als PDF. Geen account nodig.',
    },
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Factuurbaas/offerte%20maken%20voor%20zzper.jpg',
      alt: 'Offerte maken voor zzp\'er: zelfstandige werkt aan professionele offerte',
    },
    datePublished: '2026-07-15',
    dateModified: '2026-07-15',
    relatedSlugs: ['factuur-maken-zzp', 'verschil-factuur-offerte', 'factureren-zonder-account'],
    relatedGuideSlugs: ['hoe-maak-je-een-offerte', 'wat-moet-er-op-een-offerte-staan', 'offerte-voorbeeld'],
    faq: [
      {
        question: 'Moet een zzp\'er altijd een offerte sturen?',
        answer:
          'Nee, een offerte is niet verplicht. Bij grotere of langdurige opdrachten is het wel verstandig om vooraf duidelijke afspraken vast te leggen.',
      },
      {
        question: 'Wat moet er minimaal op een zzp-offerte staan?',
        answer:
          'Minimaal je bedrijfsgegevens, klantgegevens, omschrijving van werkzaamheden, prijzen, btw-vermelding, datum en geldigheidsduur.',
      },
      {
        question: 'Kan ik als zzp\'er gratis een offerte maken?',
        answer:
          'Ja. Met FactuurBaas maak je gratis een professionele offerte zonder account en download je deze direct als PDF.',
      },
      {
        question: 'Wat is de grootste fout bij offertes voor zzp\'ers?',
        answer:
          'Te vage omschrijvingen van werkzaamheden. Daardoor ontstaan discussies over wat wel of niet is inbegrepen.',
      },
    ],
    content: (
      <>
        <p>
          Als zzp&apos;er wil je snel duidelijke afspraken maken met een klant voordat je aan een opdracht begint. Een
          goede offerte helpt je om <strong>verwachtingen scherp te stellen, discussies te voorkomen en professioneel over
          te komen</strong>.
        </p>
        <p>
          In deze gids lees je praktische tips, belangrijke regels en veelgemaakte fouten bij{' '}
          <strong>offerte maken voor zzp&apos;ers</strong>. Met de gratis{' '}
          <Link href="/tools/offerte-maker" className="text-warm-orange hover:underline">
            offerte maker
          </Link>{' '}
          van FactuurBaas maak je direct een professionele offerte als PDF.
        </p>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Maak gratis offerte →" />

        <h2>Wanneer maakt een zzp&apos;er een offerte?</h2>
        <p>Een offerte is vooral handig bij opdrachten waarbij vooraf duidelijkheid nodig is over prijs en werkzaamheden.</p>
        <p>Typische situaties voor zzp&apos;ers:</p>
        <ul>
          <li>een nieuw project met een vaste prijs of ureninschatting</li>
          <li>meerdere werkzaamheden in één opdracht</li>
          <li>langdurige samenwerking of terugkerend werk</li>
          <li>opdrachten bij zakelijke klanten die een offerte verwachten</li>
        </ul>
        <p>
          Voor kleine, eenmalige klussen kan een directe factuur soms voldoende zijn. Bij twijfel is een offerte meestal
          de veiligere keuze.
        </p>

        <h2>Tips voor een professionele zzp-offerte</h2>

        <h3>1. Beschrijf werkzaamheden concreet</h3>
        <p>
          Vermijd algemene termen zoals &quot;advies&quot; of &quot;website werkzaamheden&quot;. Beschrijf wat je precies
          levert, hoeveel uren of deliverables het betreft en wat niet is inbegrepen.
        </p>

        <h3>2. Werk met een vast offertenummer</h3>
        <p>
          Gebruik een duidelijk nummer zoals OFF-2026-001. Dat helpt bij je administratie en maakt het later makkelijker om
          een factuur aan dezelfde opdracht te koppelen.
        </p>

        <h3>3. Stel een geldigheidsduur</h3>
        <p>
          Veel zzp&apos;ers kiezen 14 of 30 dagen. Zo voorkom je dat een klant maanden later nog dezelfde prijs verwacht
          terwijl jouw kosten inmiddels zijn gestegen.
        </p>

        <h3>4. Toon prijzen en btw apart</h3>
        <p>
          Vermeld subtotaal, btw-tarief, btw-bedrag en totaal. Gebruik je de KOR? Vermeld dan duidelijk dat je
          btw-vrijgesteld bent.
        </p>

        <h3>5. Voeg betalingsafspraken toe</h3>
        <p>
          Leg vast wanneer de klant betaalt, bijvoorbeeld na oplevering of in twee termijnen. Een offerte is geen
          betalingsverzoek — na akkoord factureer je meestal apart.
        </p>

        <h3>6. Stuur je offerte als PDF</h3>
        <p>
          Een PDF blijft netjes opgemaakt en kan niet zomaar worden aangepast. Lees{' '}
          <Link href="/gidsen/offerte-maken-in-pdf" className="text-warm-orange hover:underline">
            offerte maken in PDF
          </Link>{' '}
          voor Word, Excel en online opties.
        </p>

        <h3>7. Bewaar een kopie in je administratie</h3>
        <p>
          Sla elke verstuurde offerte op met datum, klant en status (verstuurd, akkoord, afgewezen). Zo houd je overzicht
          wanneer je later een factuur maakt.
        </p>

        <h2>Belangrijke regels bij offertes voor zzp&apos;ers</h2>
        <ul>
          <li>
            <strong>Controleer klantgegevens</strong> — verkeerde naam of adres leidt tot verwarring en vertraging.
          </li>
          <li>
            <strong>Wees consistent met je tarieven</strong> — afwijkende prijzen zonder uitleg wekken wantrouwen.
          </li>
          <li>
            <strong>Vermeld wat niet is inbegrepen</strong> — revisierondes, reiskosten of extra uren kun je apart
            benoemen.
          </li>
          <li>
            <strong>Gebruik realistische planning</strong> — beloof geen opleverdatum die je niet kunt halen.
          </li>
          <li>
            <strong>Houd rekening met btw-regels</strong> — reken je 21%, 9% of 0% btw? Leg dit duidelijk vast op je
            offerte.
          </li>
          <li>
            <strong>Wacht op akkoord voordat je start</strong> — begin niet met grote werkzaamheden zonder bevestiging
            van de klant.
          </li>
        </ul>
        <p>
          Welke gegevens verplicht zijn en wat je minimaal moet opnemen, lees je in{' '}
          <Link href="/gidsen/wat-moet-er-op-een-offerte-staan" className="text-warm-orange hover:underline">
            wat moet er op een offerte staan
          </Link>
          .
        </p>

        <h2>Veelgemaakte fouten bij zzp-offertes</h2>

        <h3>Te vage omschrijving</h3>
        <p>
          &quot;Marketing ondersteuning&quot; zegt weinig. Beter: &quot;Opzet en uitvoering van een social media campagne
          van 3 maanden inclusief 12 posts en maandelijkse rapportage.&quot;
        </p>

        <h3>Geen geldigheidsduur</h3>
        <p>
          Zonder einddatum kan een klant maanden later nog akkoord gaan tegen een prijs die niet meer actueel is.
        </p>

        <h3>Btw vergeten of verkeerd berekenen</h3>
        <p>
          Controleer of bedragen exclusief of inclusief btw zijn. Handmatig rekenen in Word of Excel leidt snel tot
          afrondingsfouten.
        </p>

        <h3>Geen offertenummer</h3>
        <p>
          Zonder nummer is het lastig om offertes terug te vinden, vooral als je meerdere klanten tegelijk hebt.
        </p>

        <h3>Direct beginnen zonder akkoord</h3>
        <p>
          Een offerte is een voorstel. Wacht op een e-mailbevestiging of handtekening voordat je veel uren investeert.
        </p>

        <h3>Offerte en factuur door elkaar halen</h3>
        <p>
          Een offerte vraagt om akkoord; een factuur vraagt om betaling. Lees het{' '}
          <Link href="/blogs/verschil-factuur-offerte" className="text-warm-orange hover:underline">
            verschil tussen offerte en factuur
          </Link>
          .
        </p>

        <h3>Slechte opmaak of onprofessionele layout</h3>
        <p>
          Een rommelige offerte wekt minder vertrouwen. Gebruik een vaste structuur of een{' '}
          <Link href="/offerte-template" className="text-warm-orange hover:underline">
            offerte template
          </Link>{' '}
          voor een professionele uitstraling.
        </p>

        <h2>Checklist: goede zzp-offerte</h2>
        <ul>
          <li>bedrijfsnaam, KvK en contactgegevens</li>
          <li>klantgegevens en contactpersoon</li>
          <li>offertenummer en datum</li>
          <li>duidelijke omschrijving van werkzaamheden</li>
          <li>prijsopbouw met subtotaal, btw en totaal</li>
          <li>geldigheidsduur</li>
          <li>betalings- en leveringsafspraken</li>
          <li>voorwaarden of verwijzing naar algemene voorwaarden</li>
        </ul>
        <p>
          Bekijk een ingevuld voorbeeld op onze{' '}
          <Link href="/offerte-voorbeeld/zzp" className="text-warm-orange hover:underline">
            ZZP offerte voorbeeld
          </Link>{' '}
          pagina of volg het stappenplan{' '}
          <Link href="/gidsen/hoe-maak-je-een-offerte" className="text-warm-orange hover:underline">
            hoe maak je een offerte
          </Link>
          .
        </p>

        <h2>Offerte maken als zzp&apos;er met FactuurBaas</h2>
        <p>Met FactuurBaas hoef je geen Word- of Excel-template te bouwen. Je kunt:</p>
        <ul>
          <li>je bedrijfsgegevens eenmalig invullen</li>
          <li>klant en werkzaamheden toevoegen</li>
          <li>btw automatisch laten berekenen</li>
          <li>een professionele offerte PDF downloaden</li>
          <li>na akkoord de offerte omzetten naar een factuur</li>
        </ul>
        <p>Gratis, zonder account en klaar in een paar minuten.</p>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Maak gratis zzp-offerte →" />

        <h2>Veelgestelde vragen</h2>
        <h3>Moet een zzp&apos;er altijd een offerte sturen?</h3>
        <p>
          Nee, een offerte is niet verplicht. Bij grotere of langdurige opdrachten is het wel verstandig om vooraf
          duidelijke afspraken vast te leggen.
        </p>
        <h3>Wat moet er minimaal op een zzp-offerte staan?</h3>
        <p>
          Minimaal je bedrijfsgegevens, klantgegevens, omschrijving van werkzaamheden, prijzen, btw-vermelding, datum en
          geldigheidsduur.
        </p>
        <h3>Hoe lang is een offerte geldig?</h3>
        <p>Dat bepaal je zelf. Veel zzp&apos;ers kiezen 14 of 30 dagen.</p>
        <h3>Kan ik een offerte gratis maken als zzp&apos;er?</h3>
        <p>Ja. Met FactuurBaas maak je gratis een professionele offerte zonder account.</p>
        <h3>Wat is de grootste fout bij offertes?</h3>
        <p>
          Te vage omschrijvingen van werkzaamheden. Daardoor ontstaan discussies over wat wel of niet is inbegrepen.
        </p>

        <h2>Maak direct je zzp-offerte</h2>
        <p>
          Vermijd veelgemaakte fouten en maak een duidelijke, professionele offerte. Download direct als PDF — gratis en
          zonder account.
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
          Meer tips voor zzp&apos;ers lees je in{' '}
          <Link href="/gidsen/offerte-maken-voor-zzper" className="text-warm-orange hover:underline">
            offerte maken voor zzp&apos;ers
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
          . Meer zzp-tips vind je in{' '}
          <Link href="/gidsen/offerte-maken-voor-zzper" className="text-warm-orange hover:underline">
            offerte maken voor zzp&apos;ers
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
          Zo voorkom je discussies over onverwachte kosten. Meer tips voor zzp&apos;ers vind je in{' '}
          <Link href="/gidsen/offerte-maken-voor-zzper" className="text-warm-orange hover:underline">
            offerte maken voor zzp&apos;ers
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
    seoTitle: 'Offerte omzetten naar factuur | Zo werkt het stap voor stap',
    title: 'Offerte omzetten naar factuur: zo doe je dat',
    excerpt:
      'Offerte omzetten naar factuur? Lees wanneer je factureert, wat er overgaat van offerte naar factuur en hoe je dit gratis doet met FactuurBaas.',
    keywords:
      'offerte omzetten naar factuur, offerte naar factuur, factuur maken van offerte, offerte factuur, geaccepteerde offerte factureren',
    tool: {
      href: '/tools/offerte-maker',
      label: 'Maak offerte en factuur',
      ctaLabel: 'Open gratis offerte maker',
      relatedTitle: 'Offerte maker',
      relatedExcerpt: 'Maak een offerte en zet deze met één klik om naar een factuur. Gratis en zonder account.',
    },
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Factuurbaas/Offerte%20omzetten%20naar%20factuur.jpg',
      alt: 'Offerte omzetten naar factuur: ondernemer berekent bedragen voor factuur',
    },
    datePublished: '2026-07-15',
    dateModified: '2026-07-15',
    relatedSlugs: ['verschil-factuur-offerte', 'factuur-maken-zzp', 'factuur-pdf-downloaden'],
    relatedGuideSlugs: ['offerte-accepteren-wat-gebeurt-er-na', 'offerte-maken-in-pdf', 'digitale-offertes-versturen'],
    faq: [
      {
        question: 'Kan ik een offerte omzetten naar een factuur?',
        answer:
          'Ja. Nadat een klant akkoord gaat met je offerte, kun je de gegevens gebruiken om een factuur te maken. Met FactuurBaas gaat dat met één klik.',
      },
      {
        question: 'Wanneer zet je een offerte om naar een factuur?',
        answer:
          'Meestal na (deel van) de levering van het werk, volgens de betalingsafspraken op je offerte. Bij een voorschot kun je eerder factureren.',
      },
      {
        question: 'Moet een factuur hetzelfde bedrag hebben als de offerte?',
        answer:
          'In principe wel, tenzij er extra werk is afgesproken of de scope is gewijzigd. Extra werk factureer je apart.',
      },
      {
        question: 'Wat is het verschil tussen een offerte en een factuur?',
        answer:
          'Een offerte is een voorstel vóór de opdracht. Een factuur is een betalingsverzoek na (deel van) de levering.',
      },
    ],
    content: (
      <>
        <p>
          Is je klant akkoord met je offerte? Dan is de volgende stap vaak: <strong>offerte omzetten naar
          factuur</strong>. Zo hoef je gegevens niet opnieuw in te voeren en stuur je een correct betalingsverzoek naar
          je klant.
        </p>
        <p>
          In deze gids lees je wanneer je factureert, wat er overgaat van offerte naar factuur en hoe je dit gratis doet
          met de{' '}
          <Link href="/tools/offerte-maker" className="text-warm-orange hover:underline">
            offerte maker
          </Link>{' '}
          van FactuurBaas.
        </p>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Maak offerte en factuur →" />

        <h2>Wat is het verschil tussen offerte en factuur?</h2>
        <CalculationTable
          rows={[
            ['Offerte', 'Voorstel vóór de opdracht — klant geeft akkoord'],
            ['Factuur', 'Betalingsverzoek na (deel van) levering'],
            ['Moment', 'Offerte eerst, factuur daarna'],
            ['Doel', 'Afspraken maken → betaling ontvangen'],
          ]}
        />
        <p>
          Meer uitleg vind je in{' '}
          <Link href="/blogs/verschil-factuur-offerte" className="text-warm-orange hover:underline">
            verschil tussen offerte en factuur
          </Link>
          .
        </p>

        <h2>Wanneer zet je een offerte om naar een factuur?</h2>
        <p>
          Je factureert meestal <strong>niet direct</strong> bij akkoord op de offerte, maar volgens de afspraken die je
          hebt gemaakt:
        </p>
        <ul>
          <li>
            <strong>Na oplevering</strong> — het meest voorkomend bij zzp&apos;ers
          </li>
          <li>
            <strong>Voorschot</strong> — bijvoorbeeld 50% bij start, 50% na oplevering
          </li>
          <li>
            <strong>In termijnen</strong> — per milestone of per maand bij langere projecten
          </li>
          <li>
            <strong>Na akkoord</strong> — alleen als dat expliciet op de offerte staat
          </li>
        </ul>
        <p>
          Lees ook{' '}
          <Link href="/gidsen/offerte-accepteren-wat-gebeurt-er-na" className="text-warm-orange hover:underline">
            offerte accepteren: wat gebeurt er daarna
          </Link>{' '}
          voor het volledige stappenplan na acceptatie.
        </p>

        <h2>Wat gaat er over van offerte naar factuur?</h2>
        <p>Bij het omzetten van een offerte naar een factuur komen meestal deze gegevens mee:</p>
        <ul>
          <li>jouw bedrijfsgegevens</li>
          <li>klantgegevens</li>
          <li>omschrijving van werkzaamheden of producten</li>
          <li>aantal, prijzen en regels</li>
          <li>btw-tarief en btw-bedrag</li>
          <li>subtotaal en totaalbedrag</li>
        </ul>
        <p>Wat <strong>wél verandert</strong> op de factuur:</p>
        <ul>
          <li>documenttype: van offerte naar factuur</li>
          <li>factuurnummer in plaats van offertenummer</li>
          <li>factuurdatum (en vaak leveringsdatum)</li>
          <li>betaaltermijn en betaalgegevens</li>
        </ul>
        <p>
          Controleer altijd of bedragen en omschrijvingen nog kloppen voordat je de factuur verstuurt — vooral bij
          langere projecten of gewijzigde scope.
        </p>

        <h2>Offerte omzetten naar factuur in FactuurBaas</h2>
        <p>Met FactuurBaas zet je een offerte in een paar stappen om naar een factuur:</p>
        <ol>
          <li>
            Open de{' '}
            <Link href="/tools/offerte-maker/maken" className="text-warm-orange hover:underline">
              offerte maker
            </Link>{' '}
            en maak je offerte (of open een bestaande).
          </li>
          <li>Wacht op akkoord van je klant.</li>
          <li>Klik op <strong>Maak factuur van deze offerte</strong> in de sidebar.</li>
          <li>Je wordt doorgestuurd naar de factuurmaker met ingevulde gegevens.</li>
          <li>Controleer factuurnummer, datum en betaaltermijn.</li>
          <li>Download de factuur als PDF en verstuur naar je klant.</li>
        </ol>
        <p>Gratis, zonder account — en je hoeft geen gegevens dubbel in te voeren.</p>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Zet offerte om naar factuur →" />

        <h2>Handmatig omzetten (Word of Excel)</h2>
        <p>Gebruik je Word of Excel voor je offerte? Dan moet je handmatig overstappen:</p>
        <ol>
          <li>Open je geaccepteerde offerte.</li>
          <li>Kopieer bedrijfsgegevens, klantgegevens en regels naar een factuurtemplate.</li>
          <li>Vervang het offertenummer door een nieuw factuurnummer.</li>
          <li>Voeg factuurdatum, leveringsdatum en betaaltermijn toe.</li>
          <li>Controleer btw-berekening opnieuw.</li>
          <li>Sla op als PDF en verstuur.</li>
        </ol>
        <p>
          Dit kost meer tijd en vergroot de kans op fouten. Een online tool met offerte-naar-factuur functie is meestal
          sneller en betrouwbaarder. Lees ook{' '}
          <Link href="/gidsen/offerte-maken-in-pdf" className="text-warm-orange hover:underline">
            offerte maken in PDF
          </Link>{' '}
          en{' '}
          <Link href="/blogs/factuur-pdf-downloaden" className="text-warm-orange hover:underline">
            factuur PDF downloaden
          </Link>
          .
        </p>

        <h2>Checklist vóór je factureert</h2>
        <ul>
          <li>klant heeft akkoord gegeven op de offerte</li>
          <li>werk is geleverd volgens afspraak (of voorschot is verschuldigd)</li>
          <li>bedragen en omschrijvingen kloppen nog</li>
          <li>nieuw, uniek factuurnummer</li>
          <li>factuurdatum en betaaltermijn ingevuld</li>
          <li>btw en totaalbedrag gecontroleerd</li>
          <li>factuur verstuurd als PDF</li>
        </ul>
        <p>
          Welke gegevens op een factuur verplicht zijn, lees je in{' '}
          <Link href="/blogs/factuur-maken-zzp" className="text-warm-orange hover:underline">
            factuur maken als zzp&apos;er
          </Link>
          .
        </p>

        <h2>Veelgemaakte fouten</h2>

        <h3>Te vroeg factureren</h3>
        <p>
          Een offerte is geen factuur. Stuur pas een factuur wanneer de betalingsafspraak dat toelaat — meestal na
          levering.
        </p>

        <h3>Hetzelfde nummer gebruiken</h3>
        <p>
          Een offerte heeft een offertenummer (bijv. OFF-2026-001). Een factuur krijgt een apart factuurnummer (bijv.
          2026-042).
        </p>

        <h3>Extra werk niet apart factureren</h3>
        <p>
          Werk buiten de offerte valt niet automatisch op dezelfde factuur. Maak een aanvullende offerte of aparte
          factuurregels.
        </p>

        <h3>Gegevens niet controleren</h3>
        <p>
          Bij langere projecten kunnen prijzen of scope zijn gewijzigd. Controleer altijd vóór je de factuur verstuurt.
        </p>

        <h2>Deelfactuur na een offerte</h2>
        <p>
          Bij grote projecten factureer je soms in delen. De eerste factuur kan bijvoorbeeld 40% van het offertebedrag
          zijn, de tweede 60% na oplevering. Gebruik de offerte als basis, maar pas het bedrag aan per factuur en
          vermeld duidelijk welk deel je factureert.
        </p>

        <h2>Veelgestelde vragen</h2>
        <h3>Kan ik een offerte direct omzetten naar een factuur?</h3>
        <p>
          Technisch wel in FactuurBaas, maar factureer pas wanneer dat volgens je afspraken mag — meestal na levering of
          bij een afgesproken voorschot.
        </p>
        <h3>Moet het factuurbedrag gelijk zijn aan de offerte?</h3>
        <p>
          In principe wel, tenzij er extra werk of wijzigingen zijn afgesproken. Extra werk factureer je apart.
        </p>
        <h3>Wat als de klant nog niet akkoord is?</h3>
        <p>
          Wacht op acceptatie voordat je start met grote werkzaamheden of factureert. Lees{' '}
          <Link href="/gidsen/wanneer-is-een-offerte-bindend" className="text-warm-orange hover:underline">
            wanneer is een offerte bindend
          </Link>
          .
        </p>
        <h3>Kan ik meerdere facturen maken van één offerte?</h3>
        <p>
          Ja, bij termijnbetalingen of deelopleveringen. Elke factuur krijgt een eigen factuurnummer.
        </p>

        <h2>Start met een offerte, sluit af met een factuur</h2>
        <p>
          Maak je offerte in FactuurBaas, ontvang akkoord en zet de gegevens met één klik om naar een factuur. Gratis,
          zonder account en direct als PDF.
        </p>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Open gratis offerte maker →" />

        <p>
          Nog geen offerte gemaakt? Begin met{' '}
          <Link href="/gidsen/hoe-maak-je-een-offerte" className="text-warm-orange hover:underline">
            hoe maak je een offerte
          </Link>{' '}
          of bekijk een{' '}
          <Link href="/gidsen/offerte-voorbeeld" className="text-warm-orange hover:underline">
            offerte voorbeeld
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    slug: 'digitale-offertes-versturen',
    cluster: 'offertes',
    seoTitle: 'Digitale offertes versturen | Tips voor e-mail en PDF',
    title: 'Digitale offertes versturen: zo stuur je een professionele offerte per e-mail',
    excerpt:
      'Digitale offertes versturen? Lees hoe je een offerte als PDF per e-mail verstuurt, wat je in je bericht zet en hoe je opvolgt na verzending.',
    keywords:
      'digitale offertes versturen, offerte versturen, offerte per email, offerte mailen, offerte pdf versturen, offerte digitaal verzenden',
    tool: {
      href: '/tools/offerte-maker',
      label: 'Maak en verstuur offerte',
      ctaLabel: 'Open gratis offerte maker',
      relatedTitle: 'Offerte maker',
      relatedExcerpt: 'Maak een professionele offerte, download als PDF en verstuur direct per e-mail.',
    },
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Factuurbaas/Digitale%20offertes%20versturen.jpg',
      alt: 'Digitale offertes versturen: ondernemer verstuurt offerte via smartphone',
    },
    datePublished: '2026-07-15',
    dateModified: '2026-07-15',
    relatedSlugs: ['verschil-factuur-offerte', 'factureren-zonder-account', 'sneller-betalen-factuur'],
    relatedGuideSlugs: ['offerte-maken-in-pdf', 'offerte-accepteren-wat-gebeurt-er-na', 'offerte-aanpassen'],
    faq: [
      {
        question: 'Hoe verstuur ik een offerte digitaal?',
        answer:
          'Maak je offerte, download als PDF en verstuur het bestand per e-mail naar je klant. Voeg een korte, duidelijke toelichting toe in het bericht.',
      },
      {
        question: 'Moet een offerte als PDF worden verstuurd?',
        answer:
          'Een PDF is aan te raden omdat de opmaak hetzelfde blijft en de ontvanger het document niet per ongeluk kan aanpassen.',
      },
      {
        question: 'Wat zet ik in de e-mail bij een offerte?',
        answer:
          'Vermeld kort waar de offerte over gaat, het offertenummer, de geldigheidsduur en hoe de klant akkoord kan geven.',
      },
      {
        question: 'Kan ik een offerte vanaf mijn telefoon versturen?',
        answer:
          'Ja. Maak je offerte online, download de PDF op je telefoon of computer en verstuur via e-mail of een berichten-app.',
      },
    ],
    content: (
      <>
        <p>
          <strong>Digitale offertes versturen</strong> is de snelste manier om een professioneel voorstel naar je klant te
          sturen. In plaats van een Word-bestand of geprinte versie, stuur je een <strong>PDF per e-mail</strong> — netjes
          opgemaakt, makkelijk te openen en overal te bekijken.
        </p>
        <p>
          Met de gratis{' '}
          <Link href="/tools/offerte-maker" className="text-warm-orange hover:underline">
            offerte maker
          </Link>{' '}
          van FactuurBaas maak je je offerte online, download je deze als PDF en verstuur je hem direct naar je klant.
        </p>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Maak offerte als PDF →" />

        <h2>Waarom digitaal versturen?</h2>
        <p>Een digitale offerte per e-mail heeft voordelen ten opzichte van papier of Word:</p>
        <ul>
          <li>de klant ontvangt je offerte direct</li>
          <li>de opmaak blijft hetzelfde op elke computer of telefoon</li>
          <li>PDF&apos;s kunnen niet zomaar worden aangepast</li>
          <li>je bespaart print- en postkosten</li>
          <li>je kunt sneller opvolgen en archiveren</li>
        </ul>
        <p>
          Lees ook{' '}
          <Link href="/gidsen/offerte-maken-in-pdf" className="text-warm-orange hover:underline">
            offerte maken in PDF
          </Link>{' '}
          voor Word, Excel en online opties.
        </p>

        <h2>Hoe verstuur je een digitale offerte? Stap voor stap</h2>

        <h3>Stap 1: Maak je offerte</h3>
        <p>
          Vul je bedrijfsgegevens, klantgegevens, werkzaamheden en prijzen in. Voeg een offertenummer, datum en
          geldigheidsduur toe. Lees{' '}
          <Link href="/gidsen/wat-moet-er-op-een-offerte-staan" className="text-warm-orange hover:underline">
            wat moet er op een offerte staan
          </Link>{' '}
          voor het volledige overzicht.
        </p>

        <h3>Stap 2: Download als PDF</h3>
        <p>
          Download je offerte als PDF via FactuurBaas. Geef het bestand een duidelijke naam, bijvoorbeeld{' '}
          <strong>Offerte-OFF-2026-014-Klant-BV.pdf</strong>.
        </p>

        <h3>Stap 3: Schrijf een korte e-mail</h3>
        <p>
          Voeg de PDF toe als bijlage en schrijf een helder bericht. Houd het kort en professioneel — de offerte zelf
          bevat de details.
        </p>

        <h3>Stap 4: Verstuur naar de juiste persoon</h3>
        <p>
          Stuur je offerte naar de contactpersoon die beslist over de opdracht. Controleer het e-mailadres en vermeld
          eventueel een t.a.v.-regel.
        </p>

        <h3>Stap 5: Vraag om bevestiging</h3>
        <p>
          Vraag de klant om schriftelijk akkoord te geven, bijvoorbeeld per e-mail. Lees{' '}
          <Link href="/gidsen/offerte-accepteren-wat-gebeurt-er-na" className="text-warm-orange hover:underline">
            offerte accepteren: wat gebeurt er daarna
          </Link>
          .
        </p>

        <h3>Stap 6: Bewaar een kopie</h3>
        <p>
          Sla de verstuurde offerte op in je administratie, samen met datum van verzending en eventuele reacties van de
          klant.
        </p>

        <h2>Voorbeeld e-mail bij een offerte</h2>
        <pre className="not-prose overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800 whitespace-pre-wrap">
{`Onderwerp: Offerte OFF-2026-014 – [omschrijving opdracht]

Beste [naam],

Hierbij stuur ik je de offerte voor [omschrijving].
Het totaalbedrag is €907,50 inclusief btw.

Deze offerte is geldig tot 23 juli 2026.

Laat me weten of je akkoord gaat, dan plannen we de opdracht in.

Met vriendelijke groet,
[naam]
[bedrijfsnaam]`}
        </pre>
        <p>Pas de tekst aan naar jouw situatie. Houd het kort — alle details staan in de PDF.</p>

        <h2>Wat zet je in de e-mail (en wat niet)?</h2>
        <CalculationTable
          rows={[
            ['Wel vermelden', 'Offertenummer, korte omschrijving, geldigheidsduur, totaalbedrag, vraag om akkoord'],
            ['In de PDF', 'Volledige prijsopbouw, btw, voorwaarden en alle regels'],
            ['Niet nodig', 'Hele offerte in de e-mailtekst plakken'],
            ['Vermijden', 'Vage onderwerpregels zoals "Offerte" zonder nummer'],
          ]}
        />

        <h2>Offerte versturen vanaf je telefoon</h2>
        <p>
          Als zzp&apos;er ben je vaak onderweg. Je kunt een offerte ook vanaf je telefoon versturen:
        </p>
        <ol>
          <li>Open de offerte maker in je browser.</li>
          <li>Maak of controleer je offerte.</li>
          <li>Download de PDF op je telefoon.</li>
          <li>Voeg de PDF toe in je e-mailapp of berichten-app.</li>
          <li>Verstuur naar je klant.</li>
        </ol>
        <p>
          Zo hoef je niet achter je laptop te zitten om een professionele offerte te versturen. Meer zzp-tips vind je in{' '}
          <Link href="/gidsen/offerte-maken-voor-zzper" className="text-warm-orange hover:underline">
            offerte maken voor zzp&apos;ers
          </Link>
          .
        </p>

        <h2>PDF, Word of link?</h2>
        <p>De meest gebruikte manieren om digitaal te versturen:</p>
        <ul>
          <li>
            <strong>PDF per e-mail</strong> — meest professioneel en het meest gebruikt
          </li>
          <li>
            <strong>Word-bijlage</strong> — kan worden aangepast door de ontvanger, minder aan te raden
          </li>
          <li>
            <strong>Cloudlink</strong> — handig bij grote bestanden, maar PDF per e-mail is meestal voldoende
          </li>
        </ul>
        <p>
          Voor de meeste zzp&apos;ers en mkb-bedrijven is <strong>PDF per e-mail</strong> de beste keuze.
        </p>

        <h2>Hoe vraag je om akkoord?</h2>
        <p>Formuleer duidelijk hoe de klant kan reageren:</p>
        <ul>
          <li>&quot;Laat me weten of je akkoord gaat per e-mail.&quot;</li>
          <li>&quot;Bevestig je akkoord op offerte OFF-2026-014.&quot;</li>
          <li>&quot;Teken de offerte digitaal en stuur deze retour.&quot;</li>
        </ul>
        <p>
          Schriftelijke acceptatie voorkomt misverstanden. Lees{' '}
          <Link href="/gidsen/wanneer-is-een-offerte-bindend" className="text-warm-orange hover:underline">
            wanneer is een offerte bindend
          </Link>{' '}
          voor uitleg over acceptatie.
        </p>

        <h2>Opvolgen na verzending</h2>
        <p>Geen reactie van je klant? Een korte opvolging is normaal en professioneel:</p>
        <ul>
          <li>wacht een paar werkdagen na verzending</li>
          <li>stuur een korte herinnering met offertenummer</li>
          <li>vraag of er vragen zijn over de offerte</li>
          <li>vermeld de geldigheidsdatum als die nadert</li>
        </ul>
        <p>
          <strong>Voorbeeld opvolging:</strong> &quot;Ik wilde even checken of je de offerte OFF-2026-014 hebt ontvangen.
          Heb je nog vragen? De offerte is geldig tot 23 juli.&quot;
        </p>

        <h2>Veelgemaakte fouten bij digitaal versturen</h2>
        <ul>
          <li>
            <strong>Verkeerd e-mailadres</strong> — controleer altijd vóór verzending
          </li>
          <li>
            <strong>Geen offertenummer in het onderwerp</strong> — maakt opvolging lastiger
          </li>
          <li>
            <strong>Word-bestand in plaats van PDF</strong> — oogt minder professioneel
          </li>
          <li>
            <strong>Geen geldigheidsduur vermelden</strong> — klant weet niet tot wanneer het aanbod geldt
          </li>
          <li>
            <strong>Geen kopie bewaren</strong> — lastig bij administratie of discussies
          </li>
          <li>
            <strong>Direct beginnen zonder akkoord</strong> — wacht op bevestiging van de klant
          </li>
        </ul>

        <h2>Checklist digitale offerte</h2>
        <ul>
          <li>offerte gecontroleerd op fouten</li>
          <li>PDF gedownload met duidelijke bestandsnaam</li>
          <li>e-mail met offertenummer in onderwerp</li>
          <li>geldigheidsduur vermeld in e-mail</li>
          <li>PDF als bijlage toegevoegd</li>
          <li>verzonden naar juiste contactpersoon</li>
          <li>kopie bewaard in administratie</li>
        </ul>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Maak en verstuur offerte →" />

        <h2>Veelgestelde vragen</h2>
        <h3>Hoe verstuur ik een offerte per e-mail?</h3>
        <p>
          Maak je offerte, download als PDF, voeg het toe als bijlage en schrijf een korte toelichting met offertenummer
          en geldigheidsduur.
        </p>
        <h3>Moet ik mijn offerte printen en opsturen?</h3>
        <p>
          Nee. Digitaal versturen per e-mail is sneller, goedkoper en gebruikelijker — zeker bij zzp&apos;ers en
          mkb-bedrijven.
        </p>
        <h3>Kan ik een offerte via WhatsApp sturen?</h3>
        <p>
          Ja, dat kan bij informele klanten. Voor zakelijke opdrachten is e-mail meestal professioneler en beter
          traceerbaar voor je administratie.
        </p>
        <h3>Wat als de klant akkoord geeft?</h3>
        <p>
          Bevestig het akkoord schriftelijk, start met de opdracht en zet later de offerte om naar een factuur. Lees{' '}
          <Link href="/gidsen/offerte-omzetten-naar-factuur" className="text-warm-orange hover:underline">
            offerte omzetten naar factuur
          </Link>
          .
        </p>

        <h2>Verstuur je volgende offerte digitaal</h2>
        <p>
          Maak een professionele offerte, download als PDF en verstuur per e-mail. Gratis, zonder account en klaar in een
          paar minuten.
        </p>

        <GuideToolCta href="/tools/offerte-maker/maken" label="Open gratis offerte maker →" />
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
            digitale offertes versturen
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
            offerte maken voor zzp&apos;ers
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
    seoTitle: "Welk uurtarief moet ik rekenen als zzp'er? Bereken het juiste tarief",
    title: "Welk uurtarief moet ik rekenen als zzp'er? Bereken het juiste tarief",
    excerpt:
      "Welk uurtarief moet je vragen als zzp'er? Leer hoe je je tarief bepaalt op basis van inkomen, kosten en factureerbare uren — met gratis calculator.",
    keywords:
      "welk uurtarief moet ik rekenen, uurtarief zzp, uurtarief berekenen, gemiddeld uurtarief zzp, uurtarief calculator, uurtarief exclusief btw, goed uurtarief zzp",
    tool: {
      href: '/tools/uurtarief-calculator',
      label: 'Bereken je uurtarief',
      ctaLabel: 'Open gratis uurtarief calculator',
      relatedTitle: 'Uurtarief calculator',
      relatedExcerpt:
        "Bereken welk uurtarief je nodig hebt op basis van inkomen, kosten en werkuren. Gratis en zonder account.",
    },
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Factuurbaas/welk%20uur%20tarief.jpg',
      alt: "Welk uurtarief moet ik rekenen: zakhorloge op eurobiljetten",
    },
    datePublished: '2026-07-31',
    dateModified: '2026-07-31',
    relatedSlugs: ['factuur-maken-zzp', 'hoeveel-geld-apart-belasting-zzper'],
    relatedGuideSlugs: [],
    faq: [
      {
        question: "Wat is een goed uurtarief voor een zzp'er?",
        answer:
          'Een goed uurtarief is een tarief waarmee je je kosten kunt betalen, belasting kunt reserveren en voldoende inkomen overhoudt. Het juiste bedrag verschilt per beroep en situatie.',
      },
      {
        question: 'Hoe bereken ik mijn minimale uurtarief?',
        answer:
          'Bereken hoeveel omzet je nodig hebt per maand en deel dit door het aantal uren dat je daadwerkelijk kunt factureren.',
      },
      {
        question: 'Moet ik btw bovenop mijn uurtarief rekenen?',
        answer:
          "Ja, meestal vermeld je als zzp'er je uurtarief exclusief btw. De btw wordt apart op je factuur gezet.",
      },
      {
        question: 'Kan ik mijn uurtarief verhogen?',
        answer:
          'Ja. Je kunt je tarief verhogen wanneer je meer ervaring hebt, meer waarde levert of wanneer je kosten stijgen.',
      },
    ],
    content: (
      <>
        <p>
          Als zzp&apos;er is één van de belangrijkste vragen: <strong>welk uurtarief moet ik vragen?</strong> Een te laag
          tarief betekent dat je misschien hard werkt maar onvoldoende overhoudt. Een te hoog tarief zonder goede
          onderbouwing kan ervoor zorgen dat klanten afhaken.
        </p>
        <p>
          Je uurtarief moet passen bij je ervaring, branche, kosten en het inkomen dat je wilt bereiken.
        </p>
        <p>
          Met de gratis{' '}
          <Link href="/tools/uurtarief-calculator" className="text-warm-orange hover:underline">
            uurtarief calculator van FactuurBaas
          </Link>{' '}
          bereken je eenvoudig welk uurtarief je nodig hebt op basis van je gewenste inkomen, kosten en werkuren.
        </p>

        <GuideToolCta href="/tools/uurtarief-calculator/maken" label="Bereken direct je uurtarief →" />

        <h2>Hoe bepaal je je uurtarief?</h2>
        <p>
          Een goed uurtarief bestaat uit meer dan alleen wat je graag wilt verdienen. Als ondernemer betaal je namelijk
          zelf voor zaken die bij een werknemer vaak geregeld zijn, zoals:
        </p>
        <ul>
          <li>pensioen</li>
          <li>verzekeringen</li>
          <li>vakantiedagen</li>
          <li>administratie</li>
          <li>marketing</li>
          <li>opleidingen</li>
          <li>apparatuur en software</li>
          <li>periodes zonder opdrachten</li>
        </ul>
        <p>
          Je uurtarief moet daarom voldoende ruimte geven om deze kosten te betalen én winst over te houden.
        </p>

        <h2>Bereken je uurtarief in 5 stappen</h2>

        <h3>1. Bepaal hoeveel inkomen je wilt verdienen</h3>
        <p>Begin met je gewenste netto inkomen per maand.</p>
        <p>Bijvoorbeeld:</p>
        <p>Je wilt netto €3.500 per maand overhouden.</p>
        <p>
          Dit betekent niet automatisch dat je €3.500 omzet nodig hebt. Als zzp&apos;er moet je ook rekening houden met
          belasting en zakelijke kosten.
        </p>

        <h3>2. Tel je zakelijke kosten erbij op</h3>
        <p>Zakelijke kosten verminderen je winst, maar moeten wel betaald worden vanuit je omzet.</p>
        <p>Voorbeelden:</p>
        <ul>
          <li>laptop en apparatuur</li>
          <li>website en hosting</li>
          <li>boekhoudsoftware</li>
          <li>telefoonabonnement</li>
          <li>auto of vervoer</li>
          <li>verzekeringen</li>
        </ul>
        <p>
          Heb je bijvoorbeeld €500 kosten per maand? Dan moet je uurtarief voldoende omzet opleveren om deze kosten te
          dekken.
        </p>

        <h3>3. Bepaal hoeveel uur je kunt factureren</h3>
        <p>Niet alle uren die je werkt kun je doorberekenen aan klanten.</p>
        <p>Een werkweek van 40 uur bestaat bijvoorbeeld uit:</p>
        <ul>
          <li>klantwerk</li>
          <li>administratie</li>
          <li>offertes maken</li>
          <li>gesprekken</li>
          <li>marketing</li>
          <li>planning</li>
          <li>ontwikkeling</li>
        </ul>
        <p>
          Veel zzp&apos;ers kunnen niet elke gewerkte minuut factureren. Daarom is het belangrijk om realistisch te kijken
          naar je factureerbare uren.
        </p>

        <h3>4. Kijk naar je branche</h3>
        <p>Het gemiddelde uurtarief verschilt sterk per beroep.</p>
        <p>Voorbeelden:</p>
        <ul>
          <li>een startende freelancer kan bijvoorbeeld een lager tarief rekenen om ervaring op te bouwen</li>
          <li>een specialist met jaren ervaring kan vaak een hoger tarief vragen</li>
          <li>technische beroepen hebben vaak andere tarieven dan creatieve diensten</li>
        </ul>
        <p>Vergelijk jezelf daarom niet alleen met anderen, maar kijk ook naar de waarde die je levert.</p>

        <h3>5. Controleer of je tarief haalbaar is</h3>
        <p>Een uurtarief moet niet alleen goed voelen, maar ook financieel werken.</p>
        <p>Vraag jezelf af:</p>
        <ul>
          <li>Kan ik mijn kosten hiermee betalen?</li>
          <li>Houd ik genoeg over voor belasting?</li>
          <li>Past dit bij mijn ervaring?</li>
          <li>Past dit bij mijn klanten?</li>
        </ul>

        <h2>Wat is een normaal uurtarief voor zzp&apos;ers?</h2>
        <p>Het gemiddelde zzp-uurtarief verschilt per sector.</p>
        <p>Een aantal factoren bepalen je tarief:</p>

        <h3>Ervaring</h3>
        <p>Een starter rekent vaak minder dan iemand met jaren ervaring en een sterk portfolio.</p>

        <h3>Specialisatie</h3>
        <p>Een specialist met unieke kennis kan vaak meer vragen dan iemand die algemene diensten aanbiedt.</p>

        <h3>Type klant</h3>
        <p>Zakelijke klanten hebben vaak andere budgetten dan particuliere klanten.</p>

        <h3>Verantwoordelijkheid</h3>
        <p>Meer verantwoordelijkheid of complexiteit betekent meestal een hoger tarief.</p>

        <h2>Uurtarief inclusief of exclusief btw?</h2>
        <p>
          Als zzp&apos;er communiceer je meestal je uurtarief <strong>exclusief btw</strong>.
        </p>
        <p>Voorbeeld:</p>
        <p>Je rekent €75 per uur exclusief btw.</p>
        <p>Met 21% btw betaalt je klant:</p>
        <p>€75 + €15,75 btw = €90,75 inclusief btw.</p>
        <p>
          De btw is geen inkomen voor jou. Deze draag je later af via je btw-aangifte. Lees meer in onze gids over{' '}
          <Link href="/gidsen/welke-btw-rekenen-zzper" className="text-warm-orange hover:underline">
            welke btw je als zzp&apos;er rekent
          </Link>
          .
        </p>

        <h2>Veelgemaakte fouten bij het bepalen van een uurtarief</h2>

        <h3>Je kijkt alleen naar wat anderen vragen</h3>
        <p>
          Iedere ondernemer heeft andere kosten en doelen. Een tarief dat voor iemand anders werkt, hoeft niet voor jou te
          werken.
        </p>

        <h3>Je vergeet niet-factureerbare tijd</h3>
        <p>Administratie, acquisitie en voorbereiding horen ook bij ondernemen.</p>

        <h3>Je rekent jezelf te goedkoop</h3>
        <p>
          Een laag tarief lijkt aantrekkelijk om opdrachten binnen te halen, maar kan ervoor zorgen dat je uiteindelijk te
          weinig verdient.
        </p>

        <h3>Je verhoogt je tarief nooit</h3>
        <p>Veel zzp&apos;ers houden jarenlang hetzelfde tarief terwijl hun ervaring en waarde groeien.</p>

        <h2>Uurtarief berekenen met de gratis calculator</h2>
        <p>
          Met de FactuurBaas{' '}
          <Link href="/tools/uurtarief-calculator" className="text-warm-orange hover:underline">
            uurtarief calculator
          </Link>{' '}
          bereken je eenvoudig welk tarief past bij jouw situatie.
        </p>
        <p>Vul in:</p>
        <ul>
          <li>gewenst netto inkomen</li>
          <li>zakelijke kosten</li>
          <li>werkuren</li>
          <li>aantal factureerbare uren</li>
        </ul>
        <p>Je ziet direct welk uurtarief je ongeveer nodig hebt.</p>

        <GuideToolCta href="/tools/uurtarief-calculator/maken" label="Bereken gratis je uurtarief →" />

        <h2>Veelgestelde vragen</h2>
        <h3>Wat is een goed uurtarief voor een zzp&apos;er?</h3>
        <p>
          Een goed uurtarief is een tarief waarmee je je kosten kunt betalen, belasting kunt reserveren en voldoende
          inkomen overhoudt. Het juiste bedrag verschilt per beroep en situatie.
        </p>
        <h3>Hoe bereken ik mijn minimale uurtarief?</h3>
        <p>
          Bereken hoeveel omzet je nodig hebt per maand en deel dit door het aantal uren dat je daadwerkelijk kunt
          factureren.
        </p>
        <h3>Moet ik btw bovenop mijn uurtarief rekenen?</h3>
        <p>
          Ja, meestal vermeld je als zzp&apos;er je uurtarief exclusief btw. De btw wordt apart op je factuur gezet.
        </p>
        <h3>Kan ik mijn uurtarief verhogen?</h3>
        <p>
          Ja. Je kunt je tarief verhogen wanneer je meer ervaring hebt, meer waarde levert of wanneer je kosten stijgen.
        </p>

        <h2>Bereken jouw ideale uurtarief</h2>
        <p>
          Weet je nog niet welk tarief bij jouw situatie past? Gebruik de gratis uurtarief calculator van FactuurBaas en
          ontdek welk bedrag je nodig hebt.
        </p>

        <GuideToolCta href="/tools/uurtarief-calculator/maken" label="Bereken je uurtarief →" />

        <p>Lees ook:</p>
        <ul>
          <li>
            <Link href="/tools/uurtarief-naar-inkomen" className="text-warm-orange hover:underline">
              Uurtarief naar inkomen berekenen
            </Link>
          </li>
          <li>
            <Link href="/blogs/hoeveel-geld-apart-belasting-zzper" className="text-warm-orange hover:underline">
              Hoeveel geld apart zetten voor belasting als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link href="/blogs/factuur-maken-zzp" className="text-warm-orange hover:underline">
              Factuur maken als zzp&apos;er
            </Link>
          </li>
        </ul>
      </>
    ),
  },
  {
    slug: 'deze-7-tools-zijn-heel-handig-voor-zzpers',
    cluster: 'tools',
    seoTitle: "Deze 7 tools zijn heel handig voor zzp'ers | Gratis online tools",
    title: "Deze 7 tools zijn heel handig voor zzp'ers (thuiswerken & administratie)",
    excerpt:
      "Deze 7 tools zijn heel handig voor zzp'ers die vanuit huis werken: factuur maken, offerte, btw, uurtarief, factuurnummer, betaaltermijn en KOR — gratis en zonder account.",
    keywords:
      "deze 7 tools zijn heel handig om thuis mee te werken als zzp'er, 7 tools zzp, handige tools zzp, gratis tools zzp, tools voor zzp'ers, tools thuiswerken zzp, factuur tools zzp",
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
      alt: "Deze 7 tools zijn heel handig voor zzp'ers — werken vanaf de laptop",
    },
    datePublished: '2026-08-03',
    dateModified: '2026-08-03',
    relatedSlugs: ['factuur-maken-zzp', 'gratis-factuur-zzp', 'factureren-zonder-account'],
    relatedGuideSlugs: [
      'welke-btw-rekenen-zzper',
      'hoe-maak-je-een-offerte',
      'welk-uurtarief-moet-ik-rekenen',
    ],
    faq: [
      {
        question: "Welke tools zijn handig voor zzp'ers die thuiswerken?",
        answer:
          'Voor je administratie zijn een factuurtool, offerte maker, btw calculator, uurtarief calculator, factuurnummer generator, betaaltermijn calculator en KOR-check het handigst. Die vind je gratis bij FactuurBaas.',
      },
      {
        question: 'Heb ik een account nodig om FactuurBaas-tools te gebruiken?',
        answer:
          'Nee. Je kunt facturen, offertes en calculators direct gebruiken zonder account. Wil je facturen opslaan, dan kun je optioneel inloggen.',
      },
      {
        question: 'Zijn deze 7 tools echt gratis?',
        answer:
          'Ja. De tools op FactuurBaas zijn gratis te gebruiken. Je downloadt facturen en offertes direct als PDF.',
      },
      {
        question: 'Wat is het verschil met Zoom, Slack of Trello?',
        answer:
          'Tools zoals Zoom en Slack helpen bij communicatie. FactuurBaas focust op administratie: factureren, offertes, btw, uurtarieven en betaaltermijnen.',
      },
    ],
    content: (
      <>
        <p>
          <strong>Deze 7 tools zijn heel handig voor zzp&apos;ers</strong> die vanuit huis werken — of gewoon hun
          administratie snel willen regelen zonder duur softwarepakket. Geen videobellen of projectborden, maar tools
          die je direct helpen met facturen, offertes, btw en tarieven.
        </p>
        <p>
          Op FactuurBaas vind je gratis online tools zonder account. Hieronder de zeven die je als zzp&apos;er het
          meest gebruikt.
        </p>

        <GuideToolCta href="/tools" label="Bekijk alle gratis tools →" />

        <h2>1. Factuur maken</h2>
        <p>
          De basis van je administratie: een nette factuur met bedrijfsgegevens, klant, regels, btw en betaaltermijn.
          Met de{' '}
          <Link href="/factuur-maken" className="text-warm-orange hover:underline">
            factuur maken tool
          </Link>{' '}
          maak je in een paar minuten een PDF — ideaal als je thuis werkt en snel iets naar een klant wilt sturen.
        </p>
        <ul>
          <li>Geen account nodig</li>
          <li>Direct downloaden als PDF</li>
          <li>Optioneel opslaan in je dashboard</li>
        </ul>
        <GuideToolCta href="/create-invoice" label="Maak gratis een factuur →" />

        <h2>2. Offerte maker</h2>
        <p>
          Voor nieuwe opdrachten stuur je eerst een offerte. De{' '}
          <Link href="/tools/offerte-maker" className="text-warm-orange hover:underline">
            offerte maker
          </Link>{' '}
          helpt je met een professionele prijsopgave, inclusief geldigheidsduur. Na akkoord zet je de gegevens eenvoudig
          om naar een factuur.
        </p>
        <p>
          Lees ook:{' '}
          <Link href="/gidsen/hoe-maak-je-een-offerte" className="text-warm-orange hover:underline">
            Hoe maak je een offerte?
          </Link>
        </p>
        <GuideToolCta href="/tools/offerte-maker/maken" label="Maak een offerte →" />

        <h2>3. BTW calculator</h2>
        <p>
          Thuiswerken betekent ook: snel checken of een bedrag klopt. Met de{' '}
          <Link href="/tools/btw-calculator" className="text-warm-orange hover:underline">
            BTW calculator
          </Link>{' '}
          reken je 21%, 9% of een eigen percentage — inclusief of exclusief btw.
        </p>
        <p>
          Handig bij offertes, facturen en als je btw wilt terugrekenen uit een totaalbedrag. Meer uitleg in{' '}
          <Link href="/gidsen/btw-terugrekenen" className="text-warm-orange hover:underline">
            btw terugrekenen
          </Link>
          .
        </p>
        <GuideToolCta href="/tools/btw-calculator/berekenen" label="Bereken btw →" />

        <h2>4. Uurtarief calculator</h2>
        <p>
          Welk uurtarief moet je vragen? De{' '}
          <Link href="/tools/uurtarief-calculator" className="text-warm-orange hover:underline">
            uurtarief calculator
          </Link>{' '}
          rekent terug vanuit gewenst inkomen, kosten en factureerbare uren — zodat je niet te laag zit.
        </p>
        <p>
          Dieper lezen:{' '}
          <Link href="/gidsen/welk-uurtarief-moet-ik-rekenen" className="text-warm-orange hover:underline">
            Welk uurtarief moet ik rekenen?
          </Link>
        </p>
        <GuideToolCta href="/tools/uurtarief-calculator/maken" label="Bereken je uurtarief →" />

        <h2>5. Factuurnummer generator</h2>
        <p>
          Elke factuur heeft een uniek nummer nodig. De{' '}
          <Link href="/tools/factuurnummer-generator" className="text-warm-orange hover:underline">
            factuurnummer generator
          </Link>{' '}
          helpt je aan een duidelijk, professioneel nummer — handig als je zelf je reeks bijhoudt.
        </p>
        <GuideToolCta href="/tools/factuurnummer-generator/maken" label="Genereer een factuurnummer →" />

        <h2>6. Betaaltermijn calculator</h2>
        <p>
          Wanneer moet de klant betalen? Met de{' '}
          <Link href="/tools/betaaltermijn-calculator" className="text-warm-orange hover:underline">
            betaaltermijn calculator
          </Link>{' '}
          bereken je de vervaldatum op basis van factuurdatum en termijn (bijv. 14 of 30 dagen). Zo zet je altijd de
          juiste datum op je factuur.
        </p>
        <GuideToolCta href="/tools/betaaltermijn-calculator/berekenen" label="Bereken vervaldatum →" />

        <h2>7. KOR calculator</h2>
        <p>
          Past de kleineondernemersregeling bij jouw omzet? De{' '}
          <Link href="/tools/kor-calculator" className="text-warm-orange hover:underline">
            KOR calculator
          </Link>{' '}
          geeft snel inzicht of de KOR bij jouw verwachte jaaromzet past — nuttig bij plannen vanuit huis of bij een
          nieuwe start.
        </p>
        <GuideToolCta href="/tools/kor-calculator/berekenen" label="Check de KOR →" />

        <h2>Bonus: nog meer handige tools</h2>
        <p>Naast deze zeven vind je op FactuurBaas ook:</p>
        <ul>
          <li>
            <Link href="/tools/uurtarief-naar-inkomen" className="text-warm-orange hover:underline">
              Uurtarief naar inkomen
            </Link>{' '}
            — wat levert je tarief per maand op?
          </li>
          <li>
            <Link href="/tools/marge-calculator" className="text-warm-orange hover:underline">
              Marge calculator
            </Link>{' '}
            — winstmarge op inkoop/verkoop
          </li>
        </ul>

        <h2>Waarom deze tools handig zijn als je thuiswerkt</h2>
        <p>
          Als zzp&apos;er werk je vaak alleen — thuis, bij de klant of onderweg. Dan wil je geen zware software, maar
          snelle tools die je administratie afmaken:
        </p>
        <ul>
          <li>factuur of offerte in PDF, klaar om te mailen</li>
          <li>btw en tarieven zonder Excel-rommel</li>
          <li>duidelijke factuurnummers en betaaltermijnen</li>
          <li>alles gratis, in de browser</li>
        </ul>
        <p>
          Communicatie-apps (zoals videobellen of chat) blijven nuttig. Voor je geldzaken en papieren werk zijn deze
          zeven FactuurBaas-tools een sterke basis.
        </p>

        <h2>Direct aan de slag</h2>
        <p>
          Begin met de tool die je nu nodig hebt, of open het overzicht op{' '}
          <Link href="/tools" className="text-warm-orange hover:underline">
            /tools
          </Link>
          .
        </p>
        <GuideToolCta href="/create-invoice" label="Maak je eerste factuur →" />
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
