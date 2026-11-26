import { Suspense } from 'react';
import Link from 'next/link';
import { Calculator } from 'lucide-react';
import BookkeeperCostCalculator from '@/components/tools/BookkeeperCostCalculator';
import BookkeeperLeadForm from '@/components/leads/BookkeeperLeadForm';
import BookkeeperStickyCta from '@/components/leads/BookkeeperStickyCta';
import BookkeeperClusterLinks from '@/components/leads/BookkeeperClusterLinks';
import AdministratieTijdWaardeCalculator from '@/components/leads/AdministratieTijdWaardeCalculator';
import {
  ArrowIcon,
  ClosingCta,
  DisplayHeading,
  FaqList,
  PageHeader,
  PaperCard,
  TrustList,
  btn,
} from '@/components/site/editorial';

const title = 'Wat kost een boekhouder in 2026? Tarieven per maand | FactuurBaas';
const description =
  'Wat kost een boekhouder voor ZZP, VOF of BV? Bekijk indicatieve tarieven vanaf €100 per maand, vergelijk kosten en bereken gratis jouw boekhoudkosten.';

const FEATURED_IMAGE = {
  url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/wat%20kost%20een%20boekhouder%20per%20jaar.jpg',
  alt: 'Wat kost een boekhouder? Indicatieve tarieven per maand en per jaar.',
};

export const metadata = {
  title,
  description,
  keywords:
    'wat kost een boekhouder, boekhouder kosten, boekhouder kosten per maand, boekhouder kosten per jaar, boekhouder tarieven, kosten boekhouder zzp, wat kost een boekhouder voor een eenmanszaak, boekhouder kosten bv, boekhouder kosten vof, gemiddelde kosten boekhouder, boekhouder uurtarief, kosten administratie uitbesteden, kosten boekhouding zzp, goedkope boekhouder, boekhouder kosten berekenen, boekhouder vaste prijs per maand, kosten administratiekantoor, boekhouder belastingaangifte kosten, boekhouder jaarrekening kosten',
  alternates: { canonical: 'https://factuurbaas.nl/boekhouder-kosten' },
  openGraph: {
    title,
    description,
    url: 'https://factuurbaas.nl/boekhouder-kosten',
    siteName: 'FactuurBaas',
    type: 'website',
    images: [{ url: FEATURED_IMAGE.url, width: 1200, height: 630, alt: FEATURED_IMAGE.alt }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [FEATURED_IMAGE.url],
  },
};

const FAQS = [
  {
    q: 'Wat kost een boekhouder gemiddeld per maand?',
    a: 'Er bestaat geen universeel maandtarief. Bij onze samenwerkingspartner liggen de indicatieve kosten voor volledige uitbesteding tussen €100 en €150 per maand voor een eenmanszaak, tussen €150 en €250 voor een VOF en vanaf €250 voor een afzonderlijke BV-werkmaatschappij.',
  },
  {
    q: "Wat kost een boekhouder per jaar voor een zzp'er?",
    a: 'Voor een eenmanszaak liggen de indicatieve kosten bij onze samenwerkingspartner tussen €1.200 en €1.800 per jaar voor volledige uitbesteding van de boekhouding.',
  },
  {
    q: 'Wat kost een boekhouder voor een BV?',
    a: 'Voor een afzonderlijke BV-werkmaatschappij beginnen de indicatieve kosten bij €250 per maand, oftewel €3.000 per jaar.',
  },
  {
    q: 'Wat kost een boekhouder voor een holding?',
    a: 'Voor een afzonderlijke holding beginnen de indicatieve kosten bij €100 per maand, afhankelijk van de administratieve werkzaamheden en complexiteit.',
  },
  {
    q: 'Zijn de kosten van een boekhouder afhankelijk van mijn omzet?',
    a: 'Omzet kan een rol spelen, maar het aantal financiële transacties, de rechtsvorm, administratieve complexiteit en gewenste dienstverlening zijn eveneens belangrijke prijsfactoren.',
  },
  {
    q: 'Is een online boekhouder goedkoper?',
    a: 'Niet noodzakelijk. Digitale verwerking kan efficiënter zijn, maar de uiteindelijke kosten hangen af van de werkzaamheden en gemaakte prijsafspraken.',
  },
  {
    q: 'Zijn belastingaangiften inbegrepen bij een boekhouder?',
    a: 'Dat hangt af van het gekozen pakket. Vraag specifiek of btw-aangiften, inkomstenbelasting en vennootschapsbelasting zijn inbegrepen.',
  },
  {
    q: 'Is een jaarrekening inbegrepen bij de boekhoudkosten?',
    a: 'Niet altijd. Sommige administratiekantoren nemen de jaarrekening op in hun pakket, terwijl andere hiervoor afzonderlijke kosten rekenen.',
  },
  {
    q: 'Wat kost salarisadministratie per medewerker?',
    a: 'Het tarief verschilt per dienstverlener. In enkele praktijkvoorbeelden van onze samenwerkingspartner bedraagt het aanvullende tarief ongeveer €17 per medewerker per maand, exclusief btw.',
  },
  {
    q: 'Zijn boekhoudkosten aftrekbaar?',
    a: 'Zakelijke boekhoudkosten kunnen in beginsel aftrekbare ondernemingskosten zijn. De fiscale behandeling hangt af van jouw situatie en het zakelijke karakter van de werkzaamheden.',
  },
  {
    q: 'Kan ik besparen door zelf facturen te maken?',
    a: 'Zelf factureren kan helpen om bepaalde administratieve werkzaamheden te beperken. Of dit leidt tot lagere boekhoudkosten hangt af van je overeenkomst met de boekhouder.',
  },
  {
    q: "Is een boekhouder verplicht voor een zzp'er?",
    a: "Een zzp'er met een eenmanszaak is doorgaans niet verplicht om een boekhouder in te schakelen. Je bent wel verantwoordelijk voor een correcte administratie en het nakomen van je fiscale verplichtingen.",
  },
  {
    q: 'Kan ik alleen mijn btw-aangifte uitbesteden?',
    a: 'Bij sommige dienstverleners is gedeeltelijke uitbesteding mogelijk. Vraag vooraf naar de beschikbare dienstverlening en bijbehorende kosten.',
  },
  {
    q: 'Kan ik gratis berekenen wat een boekhouder kost?',
    a: 'Ja. Met de boekhouder kosten calculator van FactuurBaas ontvang je gratis een indicatie van je maandelijkse en jaarlijkse boekhoudkosten.',
  },
  {
    q: 'Is een boekhouder aanvragen via FactuurBaas gratis?',
    a: 'Ja. Het indienen van een aanvraag is gratis en vrijblijvend. De uiteindelijke boekhoudkundige dienstverlening is doorgaans betaald.',
  },
];

const PRICE_CARDS = [
  {
    href: '/boekhouder-zzp',
    label: 'ZZP / Eenmanszaak',
    month: '€100–150',
    year: '€1.200–1.800 per jaar',
  },
  {
    href: '#vof',
    label: 'VOF',
    month: '€150–250',
    year: '€1.800–3.000 per jaar',
  },
  {
    href: '/boekhouder-bv',
    label: 'BV – Werkmaatschappij',
    month: '€250+',
    year: 'Vanaf €3.000 per jaar',
  },
  {
    href: '/boekhouder-bv',
    label: 'BV – Holding',
    month: '€100+',
    year: 'Vanaf €1.200 per jaar',
  },
];

const PRICE_ROWS = [
  ['ZZP / Eenmanszaak', '€100 – €150', '€1.200 – €1.800'],
  ['VOF', '€150 – €250', '€1.800 – €3.000'],
  ['BV – Werkmaatschappij', 'Vanaf €250', 'Vanaf €3.000'],
  ['BV – Holding', 'Vanaf €100', 'Vanaf €1.200'],
  ['Holding en werkmaatschappij', 'Op aanvraag', 'Op aanvraag'],
  ['Complexere MKB-onderneming', 'Op aanvraag', 'Op aanvraag'],
  ['Stichting', 'Op aanvraag', 'Op aanvraag'],
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factuurbaas.nl/' },
    { '@type': 'ListItem', position: 2, name: 'Boekhouden', item: 'https://factuurbaas.nl/boekhouden' },
    { '@type': 'ListItem', position: 3, name: 'Boekhouder kosten', item: 'https://factuurbaas.nl/boekhouder-kosten' },
  ],
};

const linkClass = 'underline decoration-ink/20 underline-offset-4 hover:decoration-ember';

function TextLink({ href, children }) {
  return (
    <Link href={href} className={linkClass}>
      {children}
    </Link>
  );
}

function FormCta({ children }) {
  return (
    <a href="#boekhouder-formulier" className={`${btn.secondary} mt-8`}>
      {children}
      <ArrowIcon />
    </a>
  );
}

export default function BoekhouderKostenPage() {
  return (
    <div className="min-h-screen bg-paper-50 text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHeader
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Boekhouden', href: '/boekhouden' },
          { name: 'Boekhouder kosten' },
        ]}
        eyebrow="Boekhouder kosten"
        eyebrowIcon={Calculator}
        title="Wat kost een boekhouder? Kosten per maand en per jaar"
        size="lg"
        align="start"
        containerClassName="max-w-6xl"
        lead={
          <p>
            Bekijk tarieven per maand en per jaar voor ZZP, VOF, BV en MKB. Indicatief vanaf €100 per maand bij
            volledige uitbesteding.
          </p>
        }
      >
        <TrustList
          items={[
            'Bekijk indicatieve boekhoudtarieven',
            'Vergelijk maand- en jaarkosten',
            'Bereken jouw verwachte kosten',
            'Gratis en vrijblijvend hulp aanvragen',
          ]}
        />
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#boekhouder-kosten-calculator" className={btn.primary}>
            Bereken jouw boekhoudkosten
            <ArrowIcon />
          </a>
          <a href="#boekhouder-formulier" className={btn.secondary}>
            Vind mijn boekhouder
            <ArrowIcon />
          </a>
        </div>
      </PageHeader>

      <section className="border-t border-ink/[0.06] py-14 sm:py-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ember">
            Wat kost een boekhouder voor jouw onderneming?
          </p>
          <h2 className="mt-3 font-display text-3xl font-normal tracking-[-0.03em] text-ink sm:text-4xl">
            Indicatieve tarieven voor volledige uitbesteding
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PRICE_CARDS.map((card) => (
              <Link
                key={card.label}
                href={card.href}
                className="rounded-2xl border border-ink/[0.08] bg-white p-5 shadow-paper transition-colors hover:border-ink/25"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">{card.label}</p>
                <p className="mt-3 font-display text-3xl font-normal tracking-[-0.03em] text-ink">{card.month}</p>
                <p className="mt-1 text-sm text-ink-500">per maand</p>
                <p className="mt-3 text-sm text-ink-500">{card.year}</p>
                <p className="mt-4 text-sm font-medium text-ink underline decoration-ink/20 underline-offset-4">
                  Bekijk mogelijkheden
                </p>
              </Link>
            ))}
          </div>
          <p className="mt-5 text-[13px] leading-relaxed text-ink-400">
            Indicatieve tarieven van WRKD B.V. Geen bindende offerte.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <DisplayHeading size="md" className="max-w-[20ch]">
            Bereken wat een boekhouder jou kost
          </DisplayHeading>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-500">
            Direct resultaat, geen account of contactgegevens nodig. De calculator geeft een indicatie, geen bindende
            offerte.
          </p>
          <div className="mt-10">
            <Suspense fallback={<div className="min-h-[32rem] rounded-[1.5rem] border border-ink/[0.08] bg-white" />}>
              <BookkeeperCostCalculator source="seo-page" />
            </Suspense>
          </div>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-500">
            Liever de tool-first pagina?{' '}
            <TextLink href="/tools/boekhouder-kosten-calculator">Open de volledige boekhouder kosten calculator</TextLink>
            .
          </p>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <DisplayHeading size="md">Wat kost een boekhouder per maand?</DisplayHeading>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-500">
            Onderstaande tabel geeft een indicatie wanneer je jouw boekhouding volledig uitbesteedt.
          </p>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-ink/[0.08] bg-white shadow-paper">
            <table className="w-full min-w-[36rem] text-left text-sm">
              <thead>
                <tr className="border-b border-ink/10 text-[11px] uppercase tracking-[0.14em] text-ink-400">
                  <th className="px-5 py-3 font-mono font-normal">Rechtsvorm</th>
                  <th className="px-5 py-3 font-mono font-normal">Kosten per maand</th>
                  <th className="px-5 py-3 font-mono font-normal">Kosten per jaar</th>
                </tr>
              </thead>
              <tbody className="text-ink-700">
                {PRICE_ROWS.map(([form, month, year]) => (
                  <tr key={form} className="border-b border-ink/[0.06] last:border-0">
                    <td className="px-5 py-3.5 font-medium text-ink">{form}</td>
                    <td className="px-5 py-3.5">{month}</td>
                    <td className="px-5 py-3.5">{year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 max-w-3xl text-[13px] leading-relaxed text-ink-400">
            Bron: indicatieve tarieven van WRKD B.V. voor doorlopende, volledige uitbesteding. Dit zijn geen
            onafhankelijk berekende landelijke gemiddelden. Vraag altijd welke werkzaamheden zijn inbegrepen en of
            bedragen inclusief of exclusief btw zijn.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <DisplayHeading size="md" className="max-w-[16ch]">
            Kosten per rechtsvorm
          </DisplayHeading>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <PaperCard className="p-6">
              <h3 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">
                Wat kost een boekhouder voor een zzp&apos;er?
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                Indicatief €100–€150 per maand (€1.200–€1.800 per jaar) bij volledige uitbesteding. Kosten stijgen bij
                meer transacties, internationale klanten of fiscale complexiteit.
              </p>
              <Link href="/boekhouder-zzp" className={`${btn.secondary} mt-6`}>
                Vind een boekhouder voor zzp&apos;ers
                <ArrowIcon />
              </Link>
            </PaperCard>
            <PaperCard id="vof" className="scroll-mt-28 p-6">
              <h3 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">
                Wat kost een boekhouder voor een VOF?
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                Indicatief €150–€250 per maand (€1.800–€3.000 per jaar). Denk aan winstverdeling, kapitaalrekeningen en
                of IB-aangiften van vennoten apart worden gefactureerd.
              </p>
              <a href="#boekhouder-formulier" className={`${btn.secondary} mt-6`}>
                Vind een boekhouder voor je VOF
                <ArrowIcon />
              </a>
            </PaperCard>
            <PaperCard className="p-6">
              <h3 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">
                Wat kost een boekhouder voor een BV?
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                Werkmaatschappij vanaf €250 p/m; holding vanaf €100 p/m. Holding + werkmaatschappij vraagt om een
                gecombineerde offerte. Meer over <TextLink href="/boekhouder-bv">boekhouder voor je BV</TextLink>.
              </p>
              <Link href="/boekhouder-bv" className={`${btn.secondary} mt-6`}>
                Vind een boekhouder voor je BV
                <ArrowIcon />
              </Link>
            </PaperCard>
            <PaperCard className="p-6">
              <h3 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">
                Wat kost een boekhouder voor het MKB?
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                Geen universeel maandtarief. Transacties, medewerkers, vestigingen, rapportages en advies bepalen de
                prijs. Bekijk <TextLink href="/boekhouder-mkb">boekhouder voor het MKB</TextLink>.
              </p>
              <Link href="/boekhouder-mkb" className={`${btn.secondary} mt-6`}>
                Vind een boekhouder voor het MKB
                <ArrowIcon />
              </Link>
            </PaperCard>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <DisplayHeading size="md" className="max-w-[20ch]">
            Wat bepaalt jouw boekhoudkosten?
          </DisplayHeading>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ['Rechtsvorm', 'Eenmanszaak, VOF, BV en stichting hebben andere verplichtingen.'],
              ['Transacties', 'Meer facturen, betalingen en uitgaven vragen meer verwerking.'],
              ['Personeel', 'Salarisadministratie kan aanvullende kosten met zich meebrengen.'],
              ['Internationaal', 'Buitenlandse klanten en btw-regelingen vragen extra aandacht.'],
              ['Software', 'Soms inbegrepen, soms afzonderlijk gefactureerd.'],
              ['Advies', 'Regelmatig fiscaal of financieel overleg kan extra kosten betekenen.'],
            ].map(([heading, text]) => (
              <PaperCard key={heading} className="p-5">
                <h3 className="font-display text-xl font-normal tracking-[-0.02em] text-ink">{heading}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{text}</p>
              </PaperCard>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <AdministratieTijdWaardeCalculator />
          <p className="mt-5 text-[15px] leading-relaxed text-ink-500">
            Meer over de afweging zelf doen of uitbesteden? Lees{' '}
            <TextLink href="/boekhouding-uitbesteden">boekhouding uitbesteden</TextLink>.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <DisplayHeading size="md">Praktijkvoorbeelden</DisplayHeading>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ['IT-consultant', 'Eenmanszaak · uitgebreide ondersteuning', 'Vanaf €3.000/jaar'],
              ['Transportbedrijf', 'BV · 1 medewerker · salarisadministratie', 'Vanaf €3.500/jaar'],
              ['Horeca VOF', 'VOF · 2 medewerkers · doorlopende administratie', '€150–200/maand'],
            ].map(([title, text, price]) => (
              <PaperCard key={title} className="p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ember">{price}</p>
                <h3 className="mt-3 font-display text-xl font-normal tracking-[-0.02em] text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{text}</p>
              </PaperCard>
            ))}
          </div>
          <p className="mt-5 text-[13px] leading-relaxed text-ink-400">
            Partner practice examples, exclusief btw. Aanvullende diensten kunnen gelden. Geen klantcases van
            FactuurBaas en geen bindende offertes.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Wat is inbegrepen?</DisplayHeading>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-ink/[0.08] bg-white shadow-paper">
            <table className="w-full min-w-[32rem] text-left text-sm">
              <thead>
                <tr className="border-b border-ink/10 text-[11px] uppercase tracking-[0.14em] text-ink-400">
                  <th className="px-5 py-3 font-mono font-normal">Werkzaamheid</th>
                  <th className="px-5 py-3 font-mono font-normal">Waar moet je op letten?</th>
                </tr>
              </thead>
              <tbody className="text-ink-700">
                {[
                  ['Financiële administratie', 'Welke documenten en transacties worden verwerkt?'],
                  ['Btw-aangifte', 'Is iedere aangifte inbegrepen?'],
                  ['Inkomstenbelasting', 'Is de jaarlijkse aangifte inbegrepen?'],
                  ['Vennootschapsbelasting', 'Geldt dit voor iedere BV binnen je structuur?'],
                  ['Jaarafsluiting / jaarrekening', 'Worden hiervoor extra kosten gerekend?'],
                  ['Salarisadministratie', 'Geldt een apart tarief per medewerker?'],
                  ['Boekhoudsoftware', 'Is het abonnement inbegrepen?'],
                  ['Financieel advies', 'Inbegrepen of uurtarief?'],
                  ['Administratieve overdracht', 'Zijn er eenmalige opstartkosten?'],
                ].map(([work, note]) => (
                  <tr key={work} className="border-b border-ink/[0.06] last:border-0">
                    <td className="px-5 py-3.5 font-medium text-ink">{work}</td>
                    <td className="px-5 py-3.5">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Wat kost salarisadministratie?</DisplayHeading>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
            In enkele praktijkvoorbeelden van WRKD B.V. bedraagt het aanvullende tarief ongeveer €17 per medewerker per
            maand, exclusief btw.
          </p>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-ink/[0.08] bg-white shadow-paper">
            <table className="w-full min-w-[24rem] text-left text-sm">
              <thead>
                <tr className="border-b border-ink/10 text-[11px] uppercase tracking-[0.14em] text-ink-400">
                  <th className="px-5 py-3 font-mono font-normal">Medewerkers</th>
                  <th className="px-5 py-3 font-mono font-normal">Per maand</th>
                  <th className="px-5 py-3 font-mono font-normal">Per jaar</th>
                </tr>
              </thead>
              <tbody className="text-ink-700">
                {[
                  ['1', '€17', '€204'],
                  ['2', '€34', '€408'],
                  ['5', '€85', '€1.020'],
                  ['10', '€170', '€2.040'],
                  ['20', '€340', '€4.080'],
                ].map(([count, month, year]) => (
                  <tr key={count} className="border-b border-ink/[0.06] last:border-0">
                    <td className="px-5 py-3.5 font-medium text-ink">{count}</td>
                    <td className="px-5 py-3.5">{month}</td>
                    <td className="px-5 py-3.5">{year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[13px] leading-relaxed text-ink-400">
            Uitsluitend een rekenvoorbeeld. Geen algemeen vastgesteld salarisadministratietarief.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Vast maandbedrag of uurtarief?</DisplayHeading>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-ink/[0.08] bg-white shadow-paper">
            <table className="w-full min-w-[28rem] text-left text-sm">
              <thead>
                <tr className="border-b border-ink/10 text-[11px] uppercase tracking-[0.14em] text-ink-400">
                  <th className="px-5 py-3 font-mono font-normal">Vast maandbedrag</th>
                  <th className="px-5 py-3 font-mono font-normal">Uurtarief</th>
                </tr>
              </thead>
              <tbody className="text-ink-700">
                {[
                  ['Voorspelbare periodieke kosten', 'Betalen voor bestede tijd'],
                  ['Geschikt voor doorlopende administratie', 'Geschikt voor losse werkzaamheden'],
                  ['Duidelijke pakketafspraken nodig', 'Kosten kunnen variëren'],
                  ['Aanvullende werkzaamheden mogelijk apart', 'Minder geschikt voor vaste budgettering'],
                ].map(([fixed, hourly]) => (
                  <tr key={fixed} className="border-b border-ink/[0.06] last:border-0">
                    <td className="px-5 py-3.5">{fixed}</td>
                    <td className="px-5 py-3.5">{hourly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-500">
            Alleen btw? Bekijk <TextLink href="/btw-aangifte-uitbesteden">btw-aangifte uitbesteden</TextLink>. Digitaal
            werken? <TextLink href="/online-boekhouder">Online boekhouder</TextLink>.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Heb je al een boekhouder?</DisplayHeading>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            Vergelijk niet alleen het maandbedrag, maar ook aanvullende jaarlijkse kosten, software, aangiften,
            bereikbaarheid en kwaliteit. Gebruik de kostenvergelijker om je huidige kosten naast indicatieve tarieven
            te leggen.
          </p>
          <Link href="/boekhouder-overstappen" className={`${btn.secondary} mt-8`}>
            Vergelijk mijn huidige boekhoudkosten
            <ArrowIcon />
          </Link>
          <p className="mt-4 text-sm text-ink-500">
            Je hoeft je huidige boekhouder niet op te zeggen om vrijblijvend andere mogelijkheden te onderzoeken.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Besparen op boekhoudkosten</DisplayHeading>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-ink-500">
            <li>Maak zelf gratis verkoopfacturen met FactuurBaas.</li>
            <li>Lever waar mogelijk UBL-bestanden aan.</li>
            <li>Bewaar bonnetjes digitaal en lever regelmatig aan.</li>
            <li>Houd zakelijke en privétransacties overzichtelijk gescheiden.</li>
            <li>Bespreek welke werkzaamheden je zelf blijft doen.</li>
            <li>Vraag naar een vast pakket met duidelijke inbegrepen diensten.</li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/" className={btn.secondary}>
              Maak gratis een factuur
              <ArrowIcon />
            </Link>
            <TextLink href="/boekhoudprogramma-vergelijken">Boekhoudprogramma vergelijken</TextLink>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Fiscale aftrekbaarheid</DisplayHeading>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            Zakelijke boekhoudkundige kosten kunnen in beginsel ondernemingskosten zijn. Btw op zakelijke
            dienstverlening kan, afhankelijk van je situatie, als voorbelasting aftrekbaar zijn. Bij KOR of
            btw-vrijgestelde activiteiten gelden andere regels. Privékosten zijn niet automatisch zakelijk.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <span className="block h-px w-10 bg-ember" aria-hidden />
          <DisplayHeading size="md" className="mb-4 mt-6 max-w-[22ch]">
            Ontdek wat een boekhouder voor jouw onderneming kost
          </DisplayHeading>
          <p className="max-w-2xl text-lg leading-relaxed text-ink-500">
            Gratis en vrijblijvend. Geen verplichting om een boekhouder in te schakelen.
          </p>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start">
            <ol className="space-y-5">
              {[
                ['1', 'Vertel ons over je onderneming', 'Selecteer rechtsvorm en vul bedrijfs- en contactgegevens in.'],
                [
                  '2',
                  'Bespreek je administratieve behoeften',
                  'WRKD B.V. kan contact opnemen over administratie en gewenste dienstverlening.',
                ],
                ['3', 'Ontdek de kosten', 'Welke werkzaamheden, tarieven en inbegrepen diensten gelden.'],
                ['4', 'Beslis zelf', 'Jij bepaalt of je een samenwerking aangaat.'],
              ].map(([number, heading, text]) => (
                <li key={number} className="border-t border-ink/10 pt-5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ember">Stap {number}</p>
                  <h3 className="mt-2 font-display text-xl font-normal tracking-[-0.02em] text-ink">{heading}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-500">{text}</p>
                </li>
              ))}
            </ol>
            <div>
              <Suspense
                fallback={
                  <div className="min-h-[28rem] rounded-2xl border border-ink/[0.08] bg-white shadow-paper" />
                }
              >
                <BookkeeperLeadForm source="/boekhouder-kosten" sourceType="seo" id="boekhouder-formulier" />
              </Suspense>
              <p className="mt-3 text-[13px] leading-relaxed text-ink-500">
                Je gegevens worden na jouw toestemming doorgestuurd naar WRKD B.V. voor opvolging van je aanvraag.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Veelgestelde vragen over boekhouder kosten</DisplayHeading>
          <FaqList className="mt-8" items={FAQS.map(({ q, a }) => ({ question: q, answer: a }))} />
        </div>
      </section>

      <BookkeeperClusterLinks currentHref="/boekhouder-kosten" />

      <ClosingCta
        title="Vind een boekhouder die past bij jouw onderneming én budget"
        text="Bereken eerst jouw indicatieve boekhoudkosten en bespreek vervolgens welke dienstverlening bij je past."
        primary={{ href: '#boekhouder-formulier', label: 'Vind mijn boekhouder' }}
        secondary={{ href: '#boekhouder-kosten-calculator', label: 'Bereken mijn boekhoudkosten' }}
        note="FactuurBaas werkt voor boekhouderaanvragen samen met WRKD B.V. Je gegevens worden na jouw toestemming doorgestuurd. FactuurBaas kan hiervoor een vergoeding ontvangen. Genoemde tarieven zijn indicatief en afkomstig van onze samenwerkingspartner — geen landelijke gemiddelden of bindende offertes. De informatie op deze pagina is algemeen en vormt geen persoonlijk financieel, juridisch of fiscaal advies."
      />

      <BookkeeperStickyCta />
    </div>
  );
}
