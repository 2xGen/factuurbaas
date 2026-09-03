import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ToolGuideLinks from '@/components/tools/ToolGuideLinks';
import { getGuideLinksByCluster } from '@/lib/guideData';
import {
  OFFERTE_COMPARISON,
  OFFERTE_FAQS,
  OFFERTE_METHOD_COMPARISON,
  OFFERTE_RELATED,
} from '@/lib/offerteLanding';
import { formatQuoteMoney } from '@/lib/quoteUtils';

const OFFERTE_GUIDES = getGuideLinksByCluster('offertes');

function ComparisonTable({ comparison }) {
  return (
    <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full min-w-[320px] text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            {comparison.headers.map((header) => (
              <th key={header} className="px-4 py-3 font-semibold text-deep-blue">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {comparison.rows.map((row) => (
            <tr key={row[0]} className="border-b border-slate-100 last:border-0">
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

const OFFERTE_STEPS = [
  {
    title: 'Vul je bedrijfsgegevens in',
    text: 'Vermeld je bedrijfsnaam, adres en andere relevante gegevens.',
  },
  {
    title: 'Voeg je klant toe',
    text: 'Vul de gegevens van de opdrachtgever in, zodat duidelijk is voor wie de offerte bedoeld is.',
  },
  {
    title: 'Beschrijf je werkzaamheden',
    text: 'Omschrijf duidelijk welke diensten of producten je levert. Voeg eventueel aantallen, uren of eenheden toe.',
  },
  {
    title: 'Bereken de prijs en btw',
    text: 'Vermeld de prijs van je werkzaamheden en het toepasselijke btw-tarief.',
  },
  {
    title: 'Voeg voorwaarden toe',
    text: 'Vermeld bijvoorbeeld de geldigheidsduur, betalingstermijn en belangrijke afspraken.',
  },
  {
    title: 'Download je offerte als PDF',
    text: 'Controleer de offerte en download hem direct als professionele PDF.',
  },
];

const OFFERTE_REQUIRED_ITEMS = [
  'je bedrijfsnaam en contactgegevens',
  'gegevens van je klant',
  'offertenummer',
  'datum van de offerte',
  'omschrijving van je producten of diensten',
  'aantallen, uren of eenheden',
  'prijs exclusief btw',
  'btw-percentage en btw-bedrag',
  'totaalbedrag inclusief btw',
  'geldigheidsduur van de offerte',
  'eventuele betalings-, leverings- en andere voorwaarden',
];

export default function OfferteMakerSeoContent({
  toolHref = '/tools/offerte-maker/maken',
}) {
  return (
    <div className="space-y-14 sm:space-y-16">
      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Gratis offerte maken: zo werkt het
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Online offerte maken hoeft niet ingewikkeld te zijn. Met de gratis offerte maker van
          FactuurBaas maak je in een paar stappen een duidelijke offerte voor je klant — zonder
          account, direct als PDF.
        </p>
        <ol className="mt-6 space-y-4">
          {OFFERTE_STEPS.map((step, index) => (
            <li key={step.title} className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-700">
                {index + 1}
              </span>
              <div>
                <p className="font-semibold text-deep-blue">{step.title}</p>
                <p className="mt-1 text-sm text-slate-600">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-6">
          <Button asChild size="lg" className="rounded-xl px-8">
            <Link href={toolHref}>
              Maak gratis offerte
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Hoe maak je een offerte?
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Een offerte maak je door je bedrijfsgegevens, klantgegevens, werkzaamheden, prijzen en
          voorwaarden op één document te zetten. Je stuurt de offerte vóór de opdracht; pas na
          akkoord ga je aan de slag en factureer je achteraf.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          Met FactuurBaas hoef je geen Word- of Excel-sjabloon te bouwen: je vult de velden in de
          offerte maker in en downloadt direct een professionele PDF. Meer uitleg vind je in onze
          gids{' '}
          <Link href="/gidsen/hoe-maak-je-een-offerte" className="text-warm-orange hover:underline">
            hoe maak je een offerte
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Wat moet er op een offerte staan?
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Een goede offerte bevat in ieder geval voldoende informatie om voor jou en je klant
          duidelijk te maken wat je aanbiedt, tegen welke prijs en onder welke voorwaarden.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
          {OFFERTE_REQUIRED_ITEMS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-4 leading-relaxed text-slate-600">
          Uitgebreide uitleg per onderdeel:{' '}
          <Link
            href="/gidsen/wat-moet-er-op-een-offerte-staan"
            className="text-warm-orange hover:underline"
          >
            wat moet er op een offerte staan
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Offerte maken als zzp&apos;er
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Als zzp&apos;er kun je zelf een offerte maken voordat je met een opdracht begint. Een
          goede zzp-offerte maakt duidelijk wat je gaat leveren, hoeveel het kost en onder welke
          voorwaarden — inclusief offertenummer, btw en geldigheidsduur.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          Met de gratis offerte maker maak je als zzp&apos;er direct een professionele offerte en
          download je deze als PDF. Na akkoord kun je eenvoudig door naar een factuur. Meer tips:{' '}
          <Link href="/gidsen/offerte-maken-voor-zzper" className="text-warm-orange hover:underline">
            offerte sturen als zzp&apos;er
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Offerte maken in Word, Excel of online
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Veel ondernemers maken een offerte in Word of Excel. Dat kan, maar een online offerte
          maker is vaak sneller als je vooral een professioneel document wilt opstellen en als PDF
          wilt versturen.
        </p>
        <ComparisonTable comparison={OFFERTE_METHOD_COMPARISON} />
        <p className="mt-4 leading-relaxed text-slate-600">
          Wil je vooral snel online offerte maken en als PDF versturen? Met FactuurBaas kun je dit
          direct doen zonder account. Lees ook{' '}
          <Link href="/gidsen/offerte-maken-in-pdf" className="text-warm-orange hover:underline">
            offerte maken in PDF
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Offerte voorbeeld
        </h2>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold text-slate-500">Voorbeeld offerte website ontwerp</p>
          <p className="mt-1 text-sm text-slate-500">Offertenummer: OFF-2026-001</p>
          <div className="mt-6 border-t border-slate-100 pt-6">
            <p className="font-semibold text-deep-blue">Website ontwerp</p>
            <p className="text-sm text-slate-600">10 uur × {formatQuoteMoney(75)}</p>
            <div className="mt-4 ml-auto max-w-xs space-y-2 text-sm">
              <div className="flex justify-between text-slate-600">
                <span>Subtotaal</span>
                <span>{formatQuoteMoney(750)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>BTW</span>
                <span>{formatQuoteMoney(157.5)}</span>
              </div>
              <div className="flex justify-between border-t border-slate-200 pt-2 font-bold text-deep-blue">
                <span>Totaal</span>
                <span>{formatQuoteMoney(907.5)}</span>
              </div>
            </div>
          </div>
        </div>
        <Link
          href="/gidsen/offerte-voorbeeld"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-warm-orange hover:underline"
        >
          Bekijk meer offerte voorbeelden
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Offerte maken of factuur maken?
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Een offerte en factuur lijken op elkaar, maar hebben een ander doel. Bij akkoord op de
          offerte kun je de gegevens eenvoudig gebruiken voor een factuur.
        </p>
        <ComparisonTable comparison={OFFERTE_COMPARISON} />
        <p className="mt-4 leading-relaxed text-slate-600">
          Meer uitleg:{' '}
          <Link href="/blogs/verschil-factuur-offerte" className="text-warm-orange hover:underline">
            verschil offerte en factuur
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Veelgestelde vragen
        </h2>
        <div className="mt-6 space-y-4">
          {OFFERTE_FAQS.map(({ q, a }) => (
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

      <ToolGuideLinks
        guides={OFFERTE_GUIDES}
        title="Gidsen over offertes"
        viewAllHref="/blogs?pillar=offertes"
        viewAllLabel="Alle offerte-gidsen"
      />

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Meer over offertes en factureren
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {OFFERTE_RELATED.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-warm-orange/30 hover:shadow-md"
            >
              <h3 className="font-semibold text-deep-blue group-hover:text-warm-orange">
                {article.title}
              </h3>
              <p className="mt-2 flex-grow text-sm leading-relaxed text-slate-600">
                {article.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-deep-blue group-hover:text-warm-orange">
                Lees artikel
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:p-8">
        <h2 className="font-heading text-xl font-bold text-deep-blue sm:text-2xl">
          Klaar om je offerte te maken?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-slate-600 sm:text-base">
          Maak gratis online een professionele offerte en download direct als PDF. Geen account
          nodig.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="rounded-xl px-8">
            <Link href={toolHref}>
              Maak gratis offerte
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-xl px-8">
            <Link href="/create-invoice">Maak factuur</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
