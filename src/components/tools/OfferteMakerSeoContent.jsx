import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ArrowIcon, btn, FaqList } from '@/components/site/editorial';
import { Reveal } from '@/components/landing/page/motion';
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

const ARTICLE =
  'article-body prose prose-lg mx-auto max-w-3xl prose-p:leading-[1.75] prose-h2:text-[1.85rem] sm:prose-h2:text-[2.15rem] prose-h3:text-[1.35rem] [&>section:first-child>h2]:mt-0';

function ComparisonTable({ comparison }) {
  return (
    <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-ink/[0.08] bg-white shadow-paper">
      <table className="w-full min-w-[320px] text-left text-[15px] tabular-nums">
        <thead>
          <tr className="border-b border-ink/10 bg-paper-50">
            {comparison.headers.map((header) => (
              <th
                key={header || 'empty'}
                scope="col"
                className="px-5 py-3.5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-500"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-ink/[0.06]">
          {comparison.rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, i) => (
                <td
                  key={`${row[0]}-${i}`}
                  className={`px-5 py-4 align-top leading-relaxed ${i === 0 ? 'font-medium text-ink' : 'text-ink-500'}`}
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
    <Link href={href} className={variant === 'default' ? btn.primary : btn.secondary}>
      {label}
      {variant === 'default' && <ArrowIcon />}
    </Link>
  );
}

function Cta({ href, label }) {
  return (
    <div className="not-prose my-8">
      <CtaButton href={href} label={label} />
    </div>
  );
}

function List({ items, className }) {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
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
    <div className={ARTICLE}>
      <section>
        <h2>Gratis offerte maken: zo werkt het</h2>
        <p>
          Een offerte maken hoeft niet ingewikkeld te zijn. Met de gratis offerte maker van
          FactuurBaas maak je in een paar stappen een duidelijke offerte voor je klant. Je vult de
          gegevens in, voegt je werkzaamheden en prijzen toe en downloadt de offerte direct als PDF.
        </p>
        <ol className="not-prose my-8 border-t border-ink/10">
          {OFFERTE_STEPS.map((step, index) => (
            <li
              key={step.title}
              className="grid gap-x-6 gap-y-1 border-b border-ink/10 py-6 sm:grid-cols-[3rem_1fr]"
            >
              <span
                className="font-display text-[1.75rem] italic leading-none text-ember"
                aria-hidden
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-display text-[1.35rem] font-normal leading-snug tracking-[-0.02em] text-ink">
                  <span className="sr-only">{index + 1}. </span>
                  {step.title}
                </h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-ink-500 sm:text-base">
                  {step.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <Cta href={toolHref} label="Maak gratis offerte" />
      </section>

      <section>
        <h2>Hoe maak je een offerte?</h2>
        <p>
          Een offerte maak je door duidelijk vast te leggen{' '}
          <strong>wat je aanbiedt, wat het kost en onder welke voorwaarden</strong>. Een goede
          offerte bevat je bedrijfsgegevens, de gegevens van je klant, een omschrijving van de
          werkzaamheden, prijzen, btw en relevante voorwaarden.
        </p>
        <p>
          Je maakt de offerte voordat de opdracht definitief is. De klant kan de offerte vervolgens
          accepteren. Na akkoord kun je de opdracht uitvoeren en later een factuur sturen.
        </p>
        <p>
          Met FactuurBaas hoef je geen Word- of Excel-sjabloon te maken of bedragen handmatig op te
          maken. Je vult de gegevens in de <strong>online offerte maker</strong> in en downloadt
          direct een professionele offerte als PDF.
        </p>
        <p>
          Wil je eerst weten hoe je een goede offerte opstelt? Bekijk dan ons{' '}
          <Link href="/gidsen/hoe-maak-je-een-offerte">stappenplan voor een offerte maken</Link>.
        </p>
      </section>

      <section>
        <h2>Wat moet er op een offerte staan?</h2>
        <p>
          Er is niet voor iedere offerte één vaste indeling, maar een goede offerte maakt duidelijk
          wat je levert, wat de klant daarvoor betaalt en welke afspraken gelden.
        </p>
        <p>Zet in ieder geval de volgende gegevens op je offerte:</p>
        <List items={OFFERTE_REQUIRED_ITEMS} className="sm:columns-2 sm:gap-10 [&>li]:break-inside-avoid" />
        <p>
          Lees ook onze uitgebreide uitleg over{' '}
          <Link href="/gidsen/wat-moet-er-op-een-offerte-staan">
            wat er op een offerte moet staan
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Offerte maken als zzp&apos;er</h2>
        <p>
          Als zzp&apos;er stuur je vaak een offerte voordat je aan een nieuwe opdracht begint.
          Daarmee spreek je vooraf met je klant af wat je gaat doen, hoeveel het kost en welke
          voorwaarden gelden.
        </p>
        <p>
          Een goede <strong>zzp-offerte</strong> kan bijvoorbeeld bestaan uit:
        </p>
        <List items={ZZP_ITEMS} />
        <p>
          Met de gratis offerte maker van FactuurBaas maak je als zzp&apos;er snel een
          professionele offerte en download je deze als PDF.
        </p>
        <p>Na akkoord kun je de gegevens gebruiken als basis voor je factuur.</p>
        <Cta href={toolHref} label="Maak gratis zzp-offerte" />
        <p>
          Meer tips vind je in{' '}
          <Link href="/gidsen/offerte-maken-voor-zzper">offerte maken als zzp&apos;er</Link>.
        </p>
      </section>

      <section>
        <h2>Offerte maken voor de bouw</h2>
        <p>
          Voor bouw-, klus-, schilder-, installatie- en renovatiewerkzaamheden is het belangrijk om
          duidelijk te beschrijven wat er wordt uitgevoerd en welke kosten daarbij horen.
        </p>
        <p>
          Je kunt bijvoorbeeld werkzaamheden, uren, materialen en aantallen op je offerte opnemen.
          Zo weet de klant vooraf beter wat er wordt geleverd en wat de verwachte kosten zijn.
        </p>
        <p>Een overzichtelijke bouw offerte kan bijvoorbeeld bestaan uit:</p>
        <List items={BOUW_ITEMS} className="sm:columns-2 sm:gap-10 [&>li]:break-inside-avoid" />
        <p>
          Met de online offerte maker maak je ook voor bouw- en kluswerkzaamheden snel een
          professionele offerte.
        </p>
        <Cta href={toolHref} label="Maak gratis offerte" />
      </section>

      <section>
        <h2>Offerte maken voor dienstverlening</h2>
        <p>
          Werk je als consultant, marketeer, designer, fotograaf, developer, coach of andere
          dienstverlener? Dan kun je je werkzaamheden en tarieven overzichtelijk in een offerte
          zetten.
        </p>
        <p>Je kunt bijvoorbeeld werken met:</p>
        <ul>
          <li>uren × uurtarief</li>
          <li>een vaste projectprijs</li>
          <li>verschillende diensten of fases</li>
          <li>aanvullende kosten</li>
        </ul>
        <p>
          Beschrijf zo concreet mogelijk wat bij de opdracht is inbegrepen. Dat voorkomt
          onduidelijkheid wanneer de klant akkoord gaat.
        </p>
        <Cta href={toolHref} label="Maak gratis offerte" />
      </section>

      <section>
        <h2>Gratis offerte generator en offerte maker</h2>
        <p>
          De FactuurBaas <strong>offerte generator</strong> helpt je om snel een professionele
          offerte op te stellen.
        </p>
        <p>
          Je hoeft geen ingewikkeld offerteprogramma te installeren. Je vult de gegevens online in,
          voegt je werkzaamheden en prijzen toe en krijgt een overzichtelijke offerte die je als PDF
          kunt downloaden.
        </p>
        <p>De offerte maker is geschikt voor onder andere:</p>
        <List items={GENERATOR_AUDIENCE} className="sm:columns-2 sm:gap-10 [&>li]:break-inside-avoid" />
        <Cta href={toolHref} label="Open de gratis offerte maker" />
      </section>

      <section>
        <h2>Offerte maken in Word, Excel of online</h2>
        <p>
          Je kunt een offerte maken in Word of Excel, maar voor een snelle professionele offerte is
          een online offerte maker vaak eenvoudiger.
        </p>
        <ComparisonTable comparison={OFFERTE_METHOD_COMPARISON} />
        <p>
          Wil je vooral <strong>snel online een offerte maken en als PDF versturen</strong>? Met
          FactuurBaas kan dat gratis en zonder account.
        </p>
      </section>

      <section>
        <h2>Offerte template nodig?</h2>
        <p>
          Een offerte template of offerte sjabloon kan handig zijn als je vaker vergelijkbare
          offertes maakt.
        </p>
        <p>
          Met een template heb je alvast een vaste structuur voor je bedrijfsgegevens,
          klantgegevens, werkzaamheden, prijzen en voorwaarden.
        </p>
        <p>
          Wil je liever met een bestaand voorbeeld beginnen? Bekijk onze{' '}
          <Link href="/offerte-template">gratis offerte templates</Link> voor verschillende soorten
          ondernemers.
        </p>
        <p>
          Wil je de offerte helemaal zelf samenstellen? Gebruik dan direct de{' '}
          <Link href={toolHref}>gratis offerte maker</Link>.
        </p>
      </section>

      <section>
        <h2>Offerte voorbeeld</h2>
        <p>Een offerte kan er bijvoorbeeld zo uitzien:</p>
        <Reveal className="not-prose my-10 overflow-hidden rounded-2xl border border-ink/[0.08] bg-white shadow-window">
          <div className="flex flex-col gap-4 border-b border-ink/[0.08] bg-paper-50 px-6 py-6 sm:flex-row sm:items-start sm:justify-between sm:px-8">
            <p className="font-display text-2xl leading-tight tracking-[-0.02em] text-ink">
              Offerte website ontwerp
            </p>
            <div className="space-y-1 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-500 sm:text-right">
              <p>Offertenummer: OFF-2026-001</p>
              <p>Datum: 10 september 2026</p>
              <p>Geldig tot: 10 oktober 2026</p>
            </div>
          </div>
          <div className="px-6 py-7 sm:px-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ember">Werkzaamheden</p>
            <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-ink/[0.08] pb-4">
              <p className="font-medium text-ink">Website ontwerp</p>
              <p className="text-sm tabular-nums text-ink-500">10 uur × {formatQuoteMoney(75)}</p>
            </div>
            <div className="ml-auto mt-5 max-w-xs space-y-2.5 text-sm tabular-nums">
              <div className="flex justify-between text-ink-500">
                <span>Subtotaal</span>
                <span className="text-ink-700">{formatQuoteMoney(750)}</span>
              </div>
              <div className="flex justify-between text-ink-500">
                <span>21% btw</span>
                <span className="text-ink-700">{formatQuoteMoney(157.5)}</span>
              </div>
              <div className="flex items-baseline justify-between border-t border-ink/15 pt-3 text-ink">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em]">Totaal</span>
                <span className="font-display text-2xl tracking-[-0.02em]">{formatQuoteMoney(907.5)}</span>
              </div>
            </div>
          </div>
        </Reveal>
        <p>
          In een echte offerte voeg je daarnaast je bedrijfsgegevens, klantgegevens, voorwaarden en
          overige relevante informatie toe.
        </p>
        <p>
          Bekijk meer <Link href="/gidsen/offerte-voorbeeld">offerte voorbeelden</Link> voor
          verschillende situaties.
        </p>
      </section>

      <section>
        <h2>Offerte maken als PDF</h2>
        <p>
          Een PDF is een handige manier om een offerte naar je klant te sturen. De opmaak blijft
          daarbij hetzelfde wanneer je klant het document opent.
        </p>
        <p>
          Met FactuurBaas maak je de offerte online en download je deze direct als PDF. Je hoeft de
          offerte dus niet eerst in Word of Excel op te maken en daarna handmatig naar PDF om te
          zetten.
        </p>
        <Cta href={toolHref} label="Maak gratis offerte als PDF" />
        <p>
          Meer informatie vind je in onze gids over{' '}
          <Link href="/gidsen/offerte-maken-in-pdf">een offerte maken in PDF</Link>.
        </p>
      </section>

      <section>
        <h2>Offerte maken of factuur maken?</h2>
        <p>Een offerte en factuur hebben verschillende doelen.</p>
        <p>
          Een <strong>offerte</strong> stuur je voordat een opdracht definitief is. Je doet daarin
          een voorstel voor werkzaamheden, producten en prijzen.
        </p>
        <p>
          Een <strong>factuur</strong> stuur je wanneer je betaling vraagt voor geleverde
          werkzaamheden of producten.
        </p>
        <ComparisonTable comparison={OFFERTE_COMPARISON} />
        <p>
          Meer weten? Lees het{' '}
          <Link href="/blogs/verschil-factuur-offerte">verschil tussen een offerte en factuur</Link>.
        </p>
      </section>

      <section>
        <h2>Veelgestelde vragen over offertes</h2>
        <FaqList
          className="not-prose mt-8"
          items={OFFERTE_FAQS.map(({ q, a }) => ({ question: q, answer: a }))}
        />
      </section>

      <div className="not-prose mt-20">
        <ToolGuideLinks
          guides={OFFERTE_GUIDES}
          title="Gidsen over offertes"
          viewAllHref="/blogs?pillar=offertes"
          viewAllLabel="Alle offerte-gidsen"
          linkLabel="Lees de gids"
        />
      </div>

      <section className="not-prose mt-20">
        <h2 className="font-display text-[1.85rem] font-normal leading-[1.15] tracking-[-0.02em] text-ink sm:text-[2.15rem]">
          Meer over offertes en factureren
        </h2>
        <ul className="mt-8 border-t border-ink/10">
          {OFFERTE_RELATED.map((article) => (
            <li key={article.href} className="border-b border-ink/10">
              <Link
                href={article.href}
                className="group flex items-start justify-between gap-6 py-4 font-display text-xl leading-snug text-ink transition-colors hover:text-ink-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2"
              >
                {article.title}
                <ArrowUpRight
                  className="mt-1 h-4 w-4 shrink-0 text-ember transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
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
          Klaar om je offerte te maken?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-ink-500">
          Maak gratis online een professionele offerte en download hem direct als PDF.
        </p>
        <p className="mx-auto mt-3 flex max-w-lg items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-700">
          <span className="h-px w-3 bg-ember" aria-hidden />
          Geen account nodig.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row [&>a]:w-full sm:[&>a]:w-auto">
          <CtaButton href={toolHref} label="Maak gratis offerte" />
          <CtaButton href="/create-invoice" label="Maak factuur" variant="outline" />
        </div>
      </Reveal>
    </div>
  );
}
