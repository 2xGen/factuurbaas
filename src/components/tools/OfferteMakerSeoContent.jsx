import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ToolGuideLinks from '@/components/tools/ToolGuideLinks';
import { getGuideLinksBySlugs } from '@/lib/guideData';
import {
  OFFERTE_COMPARISON,
  OFFERTE_FAQS,
  OFFERTE_METHOD_COMPARISON,
  OFFERTE_RELATED,
} from '@/lib/offerteLanding';
import { formatQuoteMoney } from '@/lib/quoteUtils';

const OFFERTE_GUIDES = getGuideLinksBySlugs([
  'hoe-maak-je-een-offerte',
  'wat-moet-er-op-een-offerte-staan',
  'offerte-voorbeeld',
  'offerte-maken-in-pdf',
  'offerte-maken-voor-zzper',
  'geldigheid-van-een-offerte',
  'wanneer-is-een-offerte-bindend',
  'offerte-accepteren-wat-gebeurt-er-na',
  'offerte-omzetten-naar-factuur',
  'digitale-offertes-versturen',
  'offerte-aanpassen',
]);

function ComparisonTable({ comparison }) {
  return (
    <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full min-w-[320px] text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            {comparison.headers.map((header) => (
              <th key={header || 'empty'} className="px-4 py-3 font-semibold text-deep-blue">
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

function CtaButton({ href, label, variant = 'default' }) {
  return (
    <Button asChild size="lg" variant={variant} className="rounded-xl px-8">
      <Link href={href}>
        {label}
        {variant === 'default' && <ArrowRight className="ml-2 h-4 w-4" />}
      </Link>
    </Button>
  );
}

const OFFERTE_STEPS = [
  {
    title: 'Vul je bedrijfsgegevens in',
    text: 'Vermeld je bedrijfsnaam, adres en contactgegevens. Zo weet je klant direct van wie de offerte afkomstig is.',
  },
  {
    title: 'Voeg je klant toe',
    text: 'Vul de gegevens van je opdrachtgever of klant in. Hierdoor is duidelijk voor wie de offerte bedoeld is.',
  },
  {
    title: 'Beschrijf je werkzaamheden',
    text: 'Omschrijf duidelijk welke diensten of producten je aanbiedt. Voeg waar nodig aantallen, uren, eenheden of andere details toe.',
  },
  {
    title: 'Bereken de prijs en btw',
    text: 'Vermeld de prijs van je werkzaamheden en het toepasselijke btw-tarief. De bedragen worden overzichtelijk weergegeven op je offerte.',
  },
  {
    title: 'Voeg voorwaarden toe',
    text: 'Vermeld bijvoorbeeld hoe lang de offerte geldig is, wanneer je start en welke betalings- of leveringsvoorwaarden gelden.',
  },
  {
    title: 'Download je offerte als PDF',
    text: 'Controleer alle gegevens en download je offerte direct als professionele PDF. Je kunt de PDF vervolgens naar je klant sturen.',
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
  'btw-percentage',
  'btw-bedrag',
  'totaalbedrag inclusief btw',
  'geldigheidsduur van de offerte',
  'eventuele betalings-, leverings- en andere voorwaarden',
];

const ZZP_ITEMS = [
  'een omschrijving van de opdracht',
  'het aantal uren of werkzaamheden',
  'je uurtarief of projectprijs',
  'eventuele materiaal- of bijkomende kosten',
  'btw',
  'de geldigheidsduur',
  'afspraken over de uitvoering en betaling',
];

const BOUW_ITEMS = [
  'omschrijving van de werkzaamheden',
  'arbeidsuren',
  'materiaal',
  'aantallen en eenheden',
  'prijs per onderdeel',
  'btw',
  'totaalprijs',
  'geldigheidsduur',
  'aanvullende voorwaarden',
];

const GENERATOR_AUDIENCE = [
  "zzp'ers",
  'freelancers',
  'consultants',
  'bouwbedrijven',
  'klusbedrijven',
  'ontwerpers',
  'fotografen',
  'marketeers',
  'webdesigners',
  'andere ondernemers en dienstverleners',
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
          Een offerte maken hoeft niet ingewikkeld te zijn. Met de gratis offerte maker van
          FactuurBaas maak je in een paar stappen een duidelijke offerte voor je klant. Je vult de
          gegevens in, voegt je werkzaamheden en prijzen toe en downloadt de offerte direct als PDF.
        </p>
        <ol className="mt-6 space-y-4">
          {OFFERTE_STEPS.map((step, index) => (
            <li key={step.title} className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-700">
                {index + 1}
              </span>
              <div>
                <h3 className="font-semibold text-deep-blue">
                  {index + 1}. {step.title}
                </h3>
                <p className="mt-1 text-sm text-slate-600">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-6">
          <CtaButton href={toolHref} label="Maak gratis offerte" />
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Hoe maak je een offerte?
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Een offerte maak je door duidelijk vast te leggen{' '}
          <strong>wat je aanbiedt, wat het kost en onder welke voorwaarden</strong>. Een goede
          offerte bevat je bedrijfsgegevens, de gegevens van je klant, een omschrijving van de
          werkzaamheden, prijzen, btw en relevante voorwaarden.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          Je maakt de offerte voordat de opdracht definitief is. De klant kan de offerte vervolgens
          accepteren. Na akkoord kun je de opdracht uitvoeren en later een factuur sturen.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          Met FactuurBaas hoef je geen Word- of Excel-sjabloon te maken of bedragen handmatig op te
          maken. Je vult de gegevens in de <strong>online offerte maker</strong> in en downloadt
          direct een professionele offerte als PDF.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          Wil je eerst weten hoe je een goede offerte opstelt? Bekijk dan ons{' '}
          <Link href="/gidsen/hoe-maak-je-een-offerte" className="text-warm-orange hover:underline">
            stappenplan voor een offerte maken
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Wat moet er op een offerte staan?
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Er is niet voor iedere offerte één vaste indeling, maar een goede offerte maakt duidelijk
          wat je levert, wat de klant daarvoor betaalt en welke afspraken gelden.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          Zet in ieder geval de volgende gegevens op je offerte:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
          {OFFERTE_REQUIRED_ITEMS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-4 leading-relaxed text-slate-600">
          Lees ook onze uitgebreide uitleg over{' '}
          <Link
            href="/gidsen/wat-moet-er-op-een-offerte-staan"
            className="text-warm-orange hover:underline"
          >
            wat er op een offerte moet staan
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Offerte maken als zzp&apos;er
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Als zzp&apos;er stuur je vaak een offerte voordat je aan een nieuwe opdracht begint.
          Daarmee spreek je vooraf met je klant af wat je gaat doen, hoeveel het kost en welke
          voorwaarden gelden.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          Een goede <strong>zzp-offerte</strong> kan bijvoorbeeld bestaan uit:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
          {ZZP_ITEMS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-4 leading-relaxed text-slate-600">
          Met de gratis offerte maker van FactuurBaas maak je als zzp&apos;er snel een
          professionele offerte en download je deze als PDF.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          Na akkoord kun je de gegevens gebruiken als basis voor je factuur.
        </p>
        <div className="mt-6">
          <CtaButton href={toolHref} label="Maak gratis zzp-offerte" />
        </div>
        <p className="mt-4 leading-relaxed text-slate-600">
          Meer tips vind je in{' '}
          <Link href="/gidsen/offerte-maken-voor-zzper" className="text-warm-orange hover:underline">
            offerte maken als zzp&apos;er
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Offerte maken voor de bouw
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Voor bouw-, klus-, schilder-, installatie- en renovatiewerkzaamheden is het belangrijk om
          duidelijk te beschrijven wat er wordt uitgevoerd en welke kosten daarbij horen.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          Je kunt bijvoorbeeld werkzaamheden, uren, materialen en aantallen op je offerte opnemen.
          Zo weet de klant vooraf beter wat er wordt geleverd en wat de verwachte kosten zijn.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          Een overzichtelijke bouw offerte kan bijvoorbeeld bestaan uit:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
          {BOUW_ITEMS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-4 leading-relaxed text-slate-600">
          Met de online offerte maker maak je ook voor bouw- en kluswerkzaamheden snel een
          professionele offerte.
        </p>
        <div className="mt-6">
          <CtaButton href={toolHref} label="Maak gratis offerte" />
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Offerte maken voor dienstverlening
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Werk je als consultant, marketeer, designer, fotograaf, developer, coach of andere
          dienstverlener? Dan kun je je werkzaamheden en tarieven overzichtelijk in een offerte
          zetten.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">Je kunt bijvoorbeeld werken met:</p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
          <li>uren × uurtarief</li>
          <li>een vaste projectprijs</li>
          <li>verschillende diensten of fases</li>
          <li>aanvullende kosten</li>
        </ul>
        <p className="mt-4 leading-relaxed text-slate-600">
          Beschrijf zo concreet mogelijk wat bij de opdracht is inbegrepen. Dat voorkomt
          onduidelijkheid wanneer de klant akkoord gaat.
        </p>
        <div className="mt-6">
          <CtaButton href={toolHref} label="Maak gratis offerte" />
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Gratis offerte generator en offerte maker
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          De FactuurBaas <strong>offerte generator</strong> helpt je om snel een professionele
          offerte op te stellen.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          Je hoeft geen ingewikkeld offerteprogramma te installeren. Je vult de gegevens online in,
          voegt je werkzaamheden en prijzen toe en krijgt een overzichtelijke offerte die je als PDF
          kunt downloaden.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          De offerte maker is geschikt voor onder andere:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
          {GENERATOR_AUDIENCE.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="mt-6">
          <CtaButton href={toolHref} label="Open de gratis offerte maker" />
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Offerte maken in Word, Excel of online
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Je kunt een offerte maken in Word of Excel, maar voor een snelle professionele offerte is
          een online offerte maker vaak eenvoudiger.
        </p>
        <ComparisonTable comparison={OFFERTE_METHOD_COMPARISON} />
        <p className="mt-4 leading-relaxed text-slate-600">
          Wil je vooral <strong>snel online een offerte maken en als PDF versturen</strong>? Met
          FactuurBaas kan dat gratis en zonder account.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Offerte template nodig?
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Een offerte template of offerte sjabloon kan handig zijn als je vaker vergelijkbare
          offertes maakt.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          Met een template heb je alvast een vaste structuur voor je bedrijfsgegevens,
          klantgegevens, werkzaamheden, prijzen en voorwaarden.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          Wil je liever met een bestaand voorbeeld beginnen? Bekijk onze{' '}
          <Link href="/offerte-template" className="text-warm-orange hover:underline">
            gratis offerte templates
          </Link>{' '}
          voor verschillende soorten ondernemers.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          Wil je de offerte helemaal zelf samenstellen? Gebruik dan direct de{' '}
          <Link href={toolHref} className="text-warm-orange hover:underline">
            gratis offerte maker
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Offerte voorbeeld
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Een offerte kan er bijvoorbeeld zo uitzien:
        </p>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="font-semibold text-deep-blue">Offerte website ontwerp</p>
          <p className="mt-2 text-sm text-slate-500">Offertenummer: OFF-2026-001</p>
          <p className="text-sm text-slate-500">Datum: 10 september 2026</p>
          <p className="text-sm text-slate-500">Geldig tot: 10 oktober 2026</p>
          <div className="mt-6 border-t border-slate-100 pt-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Werkzaamheden
            </p>
            <p className="mt-2 font-semibold text-deep-blue">Website ontwerp</p>
            <p className="text-sm text-slate-600">10 uur × {formatQuoteMoney(75)}</p>
            <div className="mt-4 ml-auto max-w-xs space-y-2 text-sm">
              <div className="flex justify-between text-slate-600">
                <span>Subtotaal</span>
                <span>{formatQuoteMoney(750)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>21% btw</span>
                <span>{formatQuoteMoney(157.5)}</span>
              </div>
              <div className="flex justify-between border-t border-slate-200 pt-2 font-bold text-deep-blue">
                <span>Totaal</span>
                <span>{formatQuoteMoney(907.5)}</span>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-4 leading-relaxed text-slate-600">
          In een echte offerte voeg je daarnaast je bedrijfsgegevens, klantgegevens, voorwaarden en
          overige relevante informatie toe.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          Bekijk meer{' '}
          <Link href="/gidsen/offerte-voorbeeld" className="text-warm-orange hover:underline">
            offerte voorbeelden
          </Link>{' '}
          voor verschillende situaties.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Offerte maken als PDF
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Een PDF is een handige manier om een offerte naar je klant te sturen. De opmaak blijft
          daarbij hetzelfde wanneer je klant het document opent.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          Met FactuurBaas maak je de offerte online en download je deze direct als PDF. Je hoeft de
          offerte dus niet eerst in Word of Excel op te maken en daarna handmatig naar PDF om te
          zetten.
        </p>
        <div className="mt-6">
          <CtaButton href={toolHref} label="Maak gratis offerte als PDF" />
        </div>
        <p className="mt-4 leading-relaxed text-slate-600">
          Meer informatie vind je in onze gids over{' '}
          <Link href="/gidsen/offerte-maken-in-pdf" className="text-warm-orange hover:underline">
            een offerte maken in PDF
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Offerte maken of factuur maken?
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Een offerte en factuur hebben verschillende doelen.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          Een <strong>offerte</strong> stuur je voordat een opdracht definitief is. Je doet daarin
          een voorstel voor werkzaamheden, producten en prijzen.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          Een <strong>factuur</strong> stuur je wanneer je betaling vraagt voor geleverde
          werkzaamheden of producten.
        </p>
        <ComparisonTable comparison={OFFERTE_COMPARISON} />
        <p className="mt-4 leading-relaxed text-slate-600">
          Meer weten? Lees het{' '}
          <Link href="/blogs/verschil-factuur-offerte" className="text-warm-orange hover:underline">
            verschil tussen een offerte en factuur
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Veelgestelde vragen over offertes
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
        linkLabel="Lees de gids"
      />

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Meer over offertes en factureren
        </h2>
        <ul className="mt-6 list-disc space-y-2 pl-5 text-slate-600">
          {OFFERTE_RELATED.map((article) => (
            <li key={article.href}>
              <Link href={article.href} className="text-warm-orange hover:underline">
                {article.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:p-8">
        <h2 className="font-heading text-xl font-bold text-deep-blue sm:text-2xl">
          Klaar om je offerte te maken?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-slate-600 sm:text-base">
          Maak gratis online een professionele offerte en download hem direct als PDF.
        </p>
        <p className="mx-auto mt-2 max-w-lg text-sm font-semibold text-slate-700 sm:text-base">
          Geen account nodig.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CtaButton href={toolHref} label="Maak gratis offerte" />
          <CtaButton href="/create-invoice" label="Maak factuur" variant="outline" />
        </div>
      </div>
    </div>
  );
}
