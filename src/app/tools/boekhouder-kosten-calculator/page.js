import { Suspense } from 'react';
import Link from 'next/link';
import BookkeeperCostCalculator from '@/components/tools/BookkeeperCostCalculator';
import { ArrowIcon, DisplayHeading, FaqList, PageHeader, TrustList, btn } from '@/components/site/editorial';
import { siteOpenGraphImages, SITE_OG_IMAGE } from '@/lib/siteOg';

const title = 'Boekhouder Kosten Calculator – Gratis Berekenen | FactuurBaas';
const description =
  'Bereken gratis wat een boekhouder kost voor jouw zzp, VOF of BV. Direct inzicht in je maandelijkse en jaarlijkse boekhoudkosten, zonder account.';

export const metadata = {
  title,
  description,
  keywords:
    'boekhouder kosten berekenen, boekhouder kosten calculator, boekhoudkosten berekenen, kosten boekhouding berekenen, boekhouder prijs berekenen, boekhouder kosten per jaar berekenen',
  alternates: { canonical: 'https://factuurbaas.nl/tools/boekhouder-kosten-calculator' },
  openGraph: {
    title,
    description,
    url: 'https://factuurbaas.nl/tools/boekhouder-kosten-calculator',
    siteName: 'FactuurBaas',
    type: 'website',
    images: siteOpenGraphImages,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [SITE_OG_IMAGE],
  },
};

const FAQS = [
  {
    q: 'Is de calculator gratis?',
    a: 'Ja. De boekhouder kosten calculator is volledig gratis en vereist geen account.',
  },
  {
    q: 'Kan ik de kosten voor mijn BV berekenen?',
    a: 'Ja. Je kunt kiezen voor een werkmaatschappij, holding of een combinatie van beide.',
  },
  {
    q: 'Wordt salarisadministratie meegenomen?',
    a: 'Wanneer je salarisadministratie selecteert, wordt een indicatieve toeslag toegevoegd aan de berekening.',
  },
  {
    q: 'Hoe nauwkeurig is de berekening?',
    a: 'De calculator geeft een eerste indicatie. De daadwerkelijke prijs hangt af van het aantal transacties, de complexiteit van je administratie en de werkzaamheden die je wilt uitbesteden.',
  },
  {
    q: 'Moet ik mijn gegevens achterlaten?',
    a: 'Nee. Alleen wanneer je vrijblijvend hulp wilt aanvragen bij het vinden van een boekhouder, vragen we om je contactgegevens.',
  },
];

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Boekhouder kosten calculator',
  url: 'https://factuurbaas.nl/tools/boekhouder-kosten-calculator',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description,
};

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
    { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://factuurbaas.nl/tools' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Boekhouder kosten calculator',
      item: 'https://factuurbaas.nl/tools/boekhouder-kosten-calculator',
    },
  ],
};

export default function BoekhouderKostenCalculatorPage() {
  return (
    <div className="min-h-screen bg-paper-50 text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHeader
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Tools', href: '/tools' },
          { name: 'Boekhouder kosten calculator' },
        ]}
        eyebrow="Gratis tool"
        title="Boekhouder kosten calculator"
        size="lg"
        align="start"
        lead={
          <p>
            Bereken gratis wat een boekhouder voor jouw onderneming kost. Selecteer je rechtsvorm, vul je
            administratieve situatie in en krijg direct een indicatie van je maandelijkse en jaarlijkse boekhoudkosten.
          </p>
        }
      >
        <TrustList items={['Gratis', 'Zonder account', 'Direct resultaat']} />
      </PageHeader>

      <section className="pb-16 sm:pb-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <Suspense fallback={<div className="min-h-[32rem] rounded-[1.5rem] border border-ink/[0.08] bg-white" />}>
            <BookkeeperCostCalculator source="tool-page" />
          </Suspense>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 space-y-10">
          <div>
            <DisplayHeading size="md">Hoe werkt de boekhouder kosten calculator?</DisplayHeading>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
              Met deze calculator krijg je in enkele stappen inzicht in de indicatieve kosten voor het volledig
              uitbesteden van je boekhouding.
            </p>
            <ol className="mt-5 list-decimal space-y-2 pl-5 text-[15px] leading-relaxed text-ink-500">
              <li>Selecteer je rechtsvorm.</li>
              <li>Geef aan hoeveel financiële transacties je verwerkt.</li>
              <li>Geef aan of je salarisadministratie wilt uitbesteden.</li>
              <li>Selecteer je huidige boekhoudkundige situatie.</li>
              <li>Bekijk direct je indicatieve maandelijkse en jaarlijkse kosten.</li>
            </ol>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
              Je hoeft geen account aan te maken of contactgegevens achter te laten om de calculator te gebruiken.
            </p>
          </div>

          <div>
            <DisplayHeading size="md">Voor welke ondernemingen is deze calculator geschikt?</DisplayHeading>
            <ul className="mt-4 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-ink-500">
              <li>Eenmanszaken en zzp&apos;ers.</li>
              <li>Vennootschappen onder firma (VOF).</li>
              <li>Besloten vennootschappen (BV).</li>
              <li>Holdings.</li>
              <li>Ondernemingen met een holding en werkmaatschappij.</li>
            </ul>
          </div>

          <div>
            <DisplayHeading size="md">Hoe worden de boekhoudkosten berekend?</DisplayHeading>
            <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-ink-500">
              <p>
                De calculator gebruikt indicatieve tarieven voor volledige uitbesteding van de boekhouding, gebaseerd op
                informatie van onze samenwerkingspartner WRKD B.V.
              </p>
              <p>
                Eventuele salarisadministratie wordt afzonderlijk meegenomen wanneer je deze optie selecteert. Het aantal
                transacties en de complexiteit van je administratie kunnen invloed hebben op de daadwerkelijke prijs.
              </p>
              <p>
                Wil je meer weten over de tarieven? Lees dan onze uitgebreide gids{' '}
                <Link href="/boekhouder-kosten" className="underline decoration-ink/20 underline-offset-4 hover:decoration-ember">
                  Wat kost een boekhouder?
                </Link>
                .
              </p>
            </div>
          </div>

          <div>
            <DisplayHeading size="md">Is zelf boekhouden goedkoper?</DisplayHeading>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
              Zelf boekhouden kan goedkoper zijn in directe kosten, maar kost ook tijd. Door je administratietijd en
              zakelijke uurtarief in te vullen, krijg je inzicht in de potentiële waarde van de tijd die je aan je
              administratie besteedt.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Ontvang een prijsindicatie voor jouw specifieke onderneming</DisplayHeading>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
            De calculator geeft een algemene indicatie. Wil je weten wat een boekhouder daadwerkelijk kost voor jouw
            onderneming? Vraag gratis en vrijblijvend hulp aan bij het vinden van een passende boekhouder.
          </p>
          <Link href="/boekhouder-vinden?bron=kosten-calculator" className={`${btn.primary} mt-8`}>
            Vind mijn boekhouder
            <ArrowIcon />
          </Link>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md" className="mb-8">
            Veelgestelde vragen
          </DisplayHeading>
          <FaqList items={FAQS.map(({ q, a }) => ({ question: q, answer: a }))} />
          <p className="mt-8 text-[13px] leading-relaxed text-ink-500">
            De berekende bedragen zijn indicatief en vormen geen offerte. FactuurBaas werkt voor boekhouderaanvragen
            samen met WRKD B.V. en kan hiervoor een vergoeding ontvangen.
          </p>
        </div>
      </section>
    </div>
  );
}
