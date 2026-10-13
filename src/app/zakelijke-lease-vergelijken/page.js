import Link from 'next/link';
import { Car } from 'lucide-react';
import CarLeaseComparisonWidget from '@/components/tools/CarLeaseComparisonWidget';
import { Reveal } from '@/components/landing/page/motion';
import {
  ArrowIcon,
  ClosingCta,
  DisplayHeading,
  FaqList,
  PageHeader,
  TrustList,
  btn,
} from '@/components/site/editorial';
import { siteOpenGraphImages, SITE_OG_IMAGE } from '@/lib/siteOg';
import { ZAKELIJKE_LEASE_GUIDES } from '@/lib/zakelijkeLease';

const title = "Zakelijke lease vergelijken voor zzp'ers | FactuurBaas";
const description =
  "Vergelijk zakelijke lease voor zzp'ers. Bekijk financial lease en operational lease, looptijd en maandbedrag. Private lease is niet automatisch zakelijke lease.";

export const metadata = {
  title,
  description,
  keywords:
    "zakelijke lease vergelijken, zakelijk auto leasen zzp, financial lease zzp, operational lease zzp, leaseauto vergelijken",
  alternates: { canonical: 'https://factuurbaas.nl/zakelijke-lease-vergelijken' },
  openGraph: {
    title,
    description,
    url: 'https://factuurbaas.nl/zakelijke-lease-vergelijken',
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
    q: 'Wat is het verschil tussen financial lease en operational lease?',
    a: 'Bij financial lease financier je de auto meestal en staat die vaak op jouw balans. Bij operational lease huur je het gebruik; onderhoud en risico liggen vaker bij de leasemaatschappij. Welke vorm past, hangt af van je administratie, cashflow en of je de auto wilt bezitten.',
  },
  {
    q: 'Is private lease hetzelfde als zakelijke lease?',
    a: 'Nee. Private lease is meestal een privécontract. Dat is niet automatisch een auto van de zaak en de fiscale behandeling verschilt. Deze vergelijker is ingesteld op zakelijke (business) lease.',
  },
  {
    q: "Kan ik als zzp'er een auto zakelijk leasen?",
    a: 'Vaak wel, afhankelijk van de aanbieder, je KvK-inschrijving, inkomen of cijfers en de gekozen leasevorm. Voorwaarden verschillen per aanbieder.',
  },
  {
    q: 'Zijn leasekosten aftrekbaar?',
    a: 'Dat hangt af van de leasevorm, of de auto tot je onderneming behoort en van privégebruik. Dit is geen fiscaal advies; controleer de regels bij de Belastingdienst of je boekhouder.',
  },
  {
    q: 'Heb ik een jaarrekening nodig om te leasen?',
    a: 'Niet altijd. Sommige aanbieders kijken naar bankafschriften of recente omzet in plaats van een jaarrekening. Dat verschilt per partij en leasevorm.',
  },
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

export default function ZakelijkeLeaseVergelijkenPage() {
  return (
    <div className="min-h-screen bg-paper-50 text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHeader
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Tools', href: '/tools' },
          { name: 'Zakelijke lease vergelijken' },
        ]}
        eyebrow="Vergelijker"
        eyebrowIcon={Car}
        title="Zakelijke lease vergelijken voor zzp'ers"
        size="lg"
        containerClassName="max-w-5xl"
        lead={
          <>
            <p>
              Vergelijk zakelijke leaseauto&apos;s voor zzp&apos;ers en ondernemers. Bekijk
              maandbedrag, looptijd en kilometers. De vergelijker hieronder is ingesteld op
              zakelijke lease.
            </p>
            <p className="text-base text-ink-400 sm:text-lg">
              Financial lease, operational lease en private lease zijn niet hetzelfde. Lees de
              verschillen voordat je een aanbod kiest.
            </p>
          </>
        }
      >
        <a href="#vergelijker" className={btn.primary}>
          Naar de vergelijker
          <ArrowIcon />
        </a>
        <TrustList items={['Gratis vergelijken', 'Geen account nodig']} className="mt-8" />
      </PageHeader>

      <section id="vergelijker" className="scroll-mt-28 border-t border-ink/[0.06] py-12 sm:py-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-[1.85rem] font-normal leading-tight tracking-[-0.025em] text-ink sm:text-[2.15rem]">
            Vergelijk zakelijke lease
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-500">
            Filter op merk, brandstof, looptijd en maandbedrag. Aanbiedingen komen van de
            vergelijkingspartner. Controleer altijd of het contract zakelijk is, en welke
            voorwaarden gelden.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-ink/[0.08] bg-white p-3 shadow-paper sm:p-5">
            <CarLeaseComparisonWidget />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ink-400">
            Prijzen en beschikbaarheid worden door de vergelijkingspartner bijgehouden. Een aanbod
            in de lijst is niet automatisch een auto van de zaak of fiscaal aftrekbaar.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <article className="article-body prose prose-lg max-w-none [&>h2:first-child]:mt-0">
            <h2>Welke leasevorm bekijk je?</h2>
            <p>
              Onder &quot;lease&quot; vallen verschillende contracten. Die verschillen in eigendom,
              onderhoud, risico en fiscale behandeling. Vergelijk daarom niet alleen het
              maandbedrag.
            </p>

            <h3>Financial lease</h3>
            <p>
              Je financiert de auto meestal over een vaste looptijd. De auto staat vaak op naam van
              je onderneming. Aan het einde van het contract kun je de auto meestal overnemen.
              Onderhoud en verzekering regel je vaker zelf.
            </p>
            <p>
              Meer lezen:{' '}
              <Link href="/blogs/financial-lease-zzp">Financial lease voor zzp&apos;ers</Link>.
            </p>

            <h3>Operational lease</h3>
            <p>
              Je betaalt voor het gebruik van de auto. Onderhoud, banden of verzekering zitten
              vaak (deels) in het maandbedrag. Je wordt meestal geen eigenaar. Dat kan overzichtelijk
              zijn als je geen restwaarde wilt dragen.
            </p>
            <p>
              Meer lezen:{' '}
              <Link href="/blogs/operational-lease-zzp">Operational lease voor zzp&apos;ers</Link>.
            </p>

            <h3>Private lease</h3>
            <p>
              Private lease is meestal een privécontract. Het is geen zakelijke lease, ook niet als
              je de auto voor werk gebruikt. Voor je hypotheek kan private lease als financiële
              verplichting meetellen. Deze vergelijker filtert op zakelijke (business) lease.
            </p>

            <h2>Waar let je op bij het vergelijken?</h2>
            <ul>
              <li>leasevorm (financial of operational);</li>
              <li>looptijd en kilometers per jaar;</li>
              <li>wat er in het maandbedrag zit;</li>
              <li>aanbetaling, slottermijn of overname;</li>
              <li>of je een jaarrekening of andere cijfers moet aanleveren;</li>
              <li>privégebruik en mogelijke bijtelling.</li>
            </ul>
            <p>
              Twijfel je tussen vormen? Lees{' '}
              <Link href="/blogs/financial-lease-vs-operational-lease">
                financial lease vs operational lease
              </Link>
              .
            </p>
          </article>

          <div className="mt-20 border-t border-ink/10 pt-14">
            <Reveal>
              <span className="block h-px w-10 bg-ember" aria-hidden />
              <DisplayHeading size="md" className="mb-8 mt-6">
                Veelgestelde <em>vragen</em>
              </DisplayHeading>
            </Reveal>
            <FaqList items={FAQS.map(({ q, a }) => ({ question: q, answer: a }))} />
          </div>
        </div>
      </section>

      <ClosingCta
        title="Vergelijk zakelijke lease voor jouw bedrijf"
        text="Bekijk actuele aanbiedingen en controleer daarna de voorwaarden bij de aanbieder."
        primary={{ href: '#vergelijker', label: 'Terug naar de vergelijker' }}
      />

      <p className="mx-auto max-w-3xl px-4 py-8 text-center text-sm leading-relaxed text-ink-400 sm:px-6">
        Affiliate disclosure: FactuurBaas kan een vergoeding ontvangen wanneer je via de
        vergelijker een product afneemt. De vergelijker wordt aangeboden door Daisycon. De
        beschikbare aanbieders vormen niet noodzakelijk een volledig overzicht van de markt. Dit is
        geen fiscaal of financieel advies.
      </p>

      <section className="bg-paper py-14 sm:py-16">
        <div className="container mx-auto grid max-w-5xl gap-6 px-4 sm:px-6 md:grid-cols-[14rem_1fr] md:gap-10">
          <h2 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">Gidsen</h2>
          <div className="flex flex-wrap gap-2.5">
            {ZAKELIJKE_LEASE_GUIDES.map((link) => (
              <Link
                key={link.slug}
                href={`/blogs/${link.slug}`}
                className="group inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-white px-4 py-2 text-sm text-ink-700 transition-colors hover:border-ink/30 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2"
              >
                {link.label}
                <ArrowIcon className="h-3.5 w-3.5 text-ember" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
