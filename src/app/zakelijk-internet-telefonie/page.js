import Link from 'next/link';
import { Phone, Wifi } from 'lucide-react';
import { Reveal } from '@/components/landing/page/motion';
import {
  ArrowIcon,
  DarkPanel,
  DisplayHeading,
  FaqList,
  PageHeader,
  PaperCard,
  btn,
} from '@/components/site/editorial';
import { siteOpenGraphImages, SITE_OG_IMAGE } from '@/lib/siteOg';
import { KpnAffiliateLink } from '@/components/tools/KpnAffiliateCta';
import {
  KPN_AFFILIATE,
  ZIT_DISCLOSURE,
  ZIT_INTERNET_GUIDES,
  ZIT_INTERNET_PATH,
  ZIT_MOBILE_GUIDES,
  ZIT_SIM_PATH,
} from '@/lib/zakelijkInternetTelefonie';

const title = "Zakelijk Internet & Telefonie voor ZZP'ers (2026)";
const description =
  "Zakelijk internet en telefonie voor zzp'ers vergelijken? Ontdek kosten, Sim Only, glasvezel, abonnementen en fiscale regels.";

export const metadata = {
  title,
  description,
  keywords:
    'zakelijk internet en telefonie, internet en telefonie zzp, zakelijk internet en mobiel, zakelijke abonnementen zzp',
  alternates: { canonical: 'https://factuurbaas.nl/zakelijk-internet-telefonie' },
  openGraph: {
    title,
    description,
    url: 'https://factuurbaas.nl/zakelijk-internet-telefonie',
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
    q: 'Heb ik als zzp’er zakelijk internet nodig?',
    a: 'Nee. Je bent als zzp’er niet verplicht een zakelijk internetabonnement af te sluiten. Een particulier abonnement kan voldoende zijn, afhankelijk van je werkzaamheden en de contractvoorwaarden.',
  },
  {
    q: 'Heb ik als zzp’er een zakelijk telefoonabonnement nodig?',
    a: 'Nee. Een zakelijk mobiel abonnement is niet verplicht. Het kan wel interessant zijn wanneer je een apart zakelijk nummer of specifieke zakelijke diensten wilt.',
  },
  {
    q: 'Kan ik zakelijk internet en mobiel combineren?',
    a: 'Ja, sommige providers bieden beide diensten aan. Controleer of een combinatie daadwerkelijk financiële of praktische voordelen biedt.',
  },
  {
    q: 'Is zakelijk internet duurder dan particulier internet?',
    a: 'Dat kan, maar niet altijd. Zakelijke abonnementen kunnen aanvullende diensten bevatten. Vergelijk de totale kosten en voorwaarden.',
  },
  {
    q: 'Is zakelijk Sim Only goedkoper dan een abonnement met telefoon?',
    a: 'Wanneer je al een goede smartphone hebt, kan Sim Only voordelig zijn omdat je geen nieuw toestel via het abonnement aanschaft.',
  },
  {
    q: 'Zijn internet- en telefoonkosten aftrekbaar?',
    a: 'Dat kan onder voorwaarden. Voor thuisinternet en bepaalde privételefoonabonnementen gelden specifieke fiscale regels. Het zakelijke karakter van een contract is niet op zichzelf doorslaggevend.',
  },
  {
    q: 'Kan ik de btw op internet en telefonie aftrekken?',
    a: 'Dat kan onder voorwaarden als je recht hebt op btw-aftrek. Bij privégebruik gelden aanvullende regels. Onder de KOR kun je in beginsel geen voorbelasting terugvragen.',
  },
  {
    q: 'Kan ik mijn bestaande telefoonnummer behouden?',
    a: 'Bij veel providers is nummerbehoud mogelijk. Controleer de voorwaarden voor de overstap, vooral bij omzetting van een particulier naar een zakelijk contract.',
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

function CompareTable({ headers, rows }) {
  return (
    <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-ink/[0.08] bg-white shadow-paper">
      <table className="w-full min-w-[320px] text-sm text-ink-700 sm:text-base">
        <thead>
          <tr className="border-b border-ink/10 bg-paper-50 text-left">
            {headers.map((header) => (
              <th key={header} className="px-4 py-3 font-semibold text-ink">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="border-b border-ink/[0.06] last:border-0">
              {row.map((cell, index) => (
                <td key={`${row[0]}-${index}`} className="px-4 py-3">
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

function GuideList({ items }) {
  return (
    <ul className="mt-6 space-y-4">
      {items.map((item) => (
        <li key={item.slug}>
          <Link href={`/blogs/${item.slug}`} className="group block">
            <p className="font-medium text-ink underline decoration-ink/20 underline-offset-[6px] transition-colors group-hover:decoration-ember">
              {item.label}
            </p>
            <p className="mt-1 text-[15px] leading-relaxed text-ink-500">{item.text}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function ZakelijkInternetTelefoniePage() {
  return (
    <div className="min-h-screen bg-paper-50 text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHeader
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Zakelijk internet & telefonie' },
        ]}
        eyebrow="Zakelijk internet & telefonie"
        title="Zakelijk internet en telefonie voor zzp'ers"
        size="lg"
        containerClassName="max-w-5xl"
        lead={
          <>
            <p>
              Goed bereikbaar zijn, betrouwbaar internet en abonnementen die bij jouw onderneming
              passen.
            </p>
            <p className="text-base text-ink-400 sm:text-lg">
              Vergelijk je mogelijkheden, begrijp de kosten en kies abonnementen die bij je
              onderneming passen.
            </p>
          </>
        }
      />

      <section className="border-t border-ink/[0.06] py-12 sm:py-16">
        <div className="container mx-auto grid max-w-5xl gap-6 px-4 sm:px-6 md:grid-cols-2">
          <PaperCard className="flex flex-col p-6 sm:p-8">
            <Wifi className="h-6 w-6 text-ember" aria-hidden />
            <h2 className="mt-4 font-display text-2xl font-normal tracking-[-0.02em] text-ink">
              Zakelijk internet
            </h2>
            <p className="mt-2 text-sm font-medium text-ink-700">
              Een betrouwbare internetverbinding voor thuis of kantoor.
            </p>
            <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-500">
              Snelheid, glasvezel, kosten en beschikbaarheid. Ontdek waar je op moet letten bij
              een internetabonnement voor je onderneming.
            </p>
            <p className="mt-6">
              <Link href={ZIT_INTERNET_PATH} className={btn.primary}>
                Bekijk internet
                <ArrowIcon />
              </Link>
            </p>
          </PaperCard>
          <PaperCard className="flex flex-col p-6 sm:p-8">
            <Phone className="h-6 w-6 text-ember" aria-hidden />
            <h2 className="mt-4 font-display text-2xl font-normal tracking-[-0.02em] text-ink">
              Zakelijk Sim Only
            </h2>
            <p className="mt-2 text-sm font-medium text-ink-700">
              Een zakelijk mobiel abonnement zonder nieuw toestel.
            </p>
            <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-500">
              Mobiele databundels, looptijd en abonnementen. Gebruik je bestaande smartphone en
              kies een bundel die aansluit op je werk.
            </p>
            <p className="mt-6">
              <Link href={ZIT_SIM_PATH} className={btn.primary}>
                Bekijk Sim Only
                <ArrowIcon />
              </Link>
            </p>
          </PaperCard>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <article className="article-body prose prose-lg max-w-none [&>h2:first-child]:mt-0">
            <h2>Heb je als zzp&apos;er zakelijk internet en telefonie nodig?</h2>
            <p>
              Nee. Als zzp&apos;er ben je niet verplicht om zakelijke internet- of
              telefoonabonnementen af te sluiten.
            </p>
            <p>
              Veel zelfstandigen beginnen met hun bestaande particuliere abonnementen. Dat kan
              een praktische oplossing zijn, vooral wanneer je vanuit huis werkt en weinig
              zakelijke extra&apos;s nodig hebt.
            </p>
            <p>
              Toch kunnen zakelijke abonnementen interessant worden wanneer je onderneming groeit
              of je specifieke diensten nodig hebt. Denk bijvoorbeeld aan een apart
              telefoonnummer voor klanten, zakelijke ondersteuning bij storingen, een
              internetverbinding voor een afzonderlijke bedrijfsruimte of overzichtelijke
              abonnementskosten voor je administratie.
            </p>
            <p>
              Of een zakelijk abonnement voordeliger is, hangt af van je gebruik, de tarieven en
              de voorwaarden.
            </p>

            <h2>Zakelijk of privé?</h2>
            <p>
              Een zakelijk abonnement is niet automatisch voordeliger dan een particulier
              abonnement. De beste keuze hangt af van de manier waarop je internet en telefonie
              gebruikt.
            </p>
            <CompareTable
              headers={['Situatie', 'Wat kun je overwegen?']}
              rows={[
                [
                  'Je werkt af en toe vanuit huis',
                  'Bestaand particulier internet kan voldoende zijn',
                ],
                [
                  'Je werkt dagelijks online',
                  'Vergelijk snelheid, betrouwbaarheid en ondersteuning',
                ],
                ['Je wilt een apart werknummer', 'Een afzonderlijk zakelijk mobiel abonnement'],
                ['Je hebt al een goede smartphone', 'Zakelijk Sim Only'],
                ['Je hebt een afzonderlijk kantoor', 'Een internetabonnement voor je bedrijfsruimte'],
                [
                  'Je werkt regelmatig in het buitenland',
                  'Een mobiele bundel met passende roamingvoorwaarden',
                ],
              ]}
            />
            <p>
              Een zakelijk contract kan bepaalde administratieve voordelen bieden, maar bepaalt
              niet op zichzelf welke kosten fiscaal aftrekbaar zijn. Lees verder:{' '}
              <Link href="/blogs/internet-zakelijk-of-prive-zzp">
                internet zakelijk of privé als zzp&apos;er
              </Link>{' '}
              en{' '}
              <Link href="/blogs/telefoon-zakelijk-of-prive-zzp">
                telefoon zakelijk of privé als zzp&apos;er
              </Link>
              .
            </p>

            <h2>Zakelijk internet: wat zijn je mogelijkheden?</h2>
            <p>
              Bij het kiezen van zakelijk internet zijn vooral snelheid, de beschikbare
              verbinding op je adres, contractvoorwaarden en eventuele zakelijke ondersteuning
              belangrijk. Glasvezel, kabel of DSL verschillen per adres; de upload telt minstens
              zo zwaar als de download.
            </p>
            <p>
              Voor reguliere zakelijke internetabonnementen kun je als globale
              budgetinschatting rekenen op enkele tientallen euro&apos;s per maand exclusief
              btw. Uitgebreidere pakketten kunnen duurder zijn. Let niet alleen op de
              maandprijs: een introductiekorting kan aantrekkelijk lijken, terwijl het
              abonnement daarna duurder wordt.
            </p>
            <p>
              Uitgebreider:{' '}
              <Link href="/blogs/zakelijk-internet-kosten">wat kost zakelijk internet?</Link>
              . Of ga direct naar{' '}
              <Link href={ZIT_INTERNET_PATH}>zakelijk internet voor zzp&apos;ers</Link>.
            </p>

            <h2>Zakelijk Sim Only of een abonnement met telefoon?</h2>
            <p>
              Heb je al een goede smartphone? Dan kun je kiezen voor een zakelijk
              Sim Only-abonnement: je betaalt voor bellen, sms&apos;en en mobiele data, zonder
              een nieuw toestel bij je abonnement.
            </p>
            <p>
              Wil je een nieuwe smartphone? Vergelijk dan de totale kosten van een abonnement
              met toestel met de combinatie van een los toestel en Sim Only.
            </p>
            <CompareTable
              headers={['Onderdeel', 'Zakelijk Sim Only', 'Abonnement met toestel']}
              rows={[
                ['Nieuwe telefoon inbegrepen', 'Nee', 'Ja'],
                ['Bestaande telefoon gebruiken', 'Ja', 'Niet noodzakelijk'],
                ['Maandkosten', 'Zonder inbegrepen toestel', 'Kunnen toestelkosten bevatten'],
                [
                  'Geschikt voor',
                  'Ondernemers met een goede telefoon',
                  'Ondernemers die een nieuw toestel nodig hebben',
                ],
              ]}
            />
            <p>
              <Link href={ZIT_SIM_PATH}>Bekijk zakelijk Sim Only</Link>.
            </p>

            <h2>Zijn zakelijke internet- en telefoonkosten aftrekbaar?</h2>
            <p>
              Internet- en telefoonkosten kunnen onder voorwaarden zakelijke kosten zijn. Bij
              een internetverbinding op een afzonderlijk bedrijfspand is de zakelijke bestemming
              doorgaans duidelijker dan bij een bestaand huishoudelijk internetabonnement.
            </p>
            <p>
              Een abonnement op naam van je onderneming is niet automatisch volledig aftrekbaar.
              Als je recht hebt op aftrek van voorbelasting, kan de btw op zakelijk gebruikte
              diensten onder voorwaarden aftrekbaar zijn. Onder de KOR kun je in beginsel geen
              btw terugvragen.
            </p>
            <p>
              Meer informatie in de gidsen over{' '}
              <Link href="/blogs/internetkosten-aftrekbaar-zzp">internetkosten aftrekken</Link>
              ,{' '}
              <Link href="/blogs/telefoonkosten-aftrekbaar-zzp">telefoonkosten aftrekken</Link>{' '}
              en{' '}
              <Link href="/blogs/btw-telefoon-aftrekken-zzp">btw op telefoonkosten</Link>.
            </p>
          </article>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] bg-paper py-16 sm:py-20">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <Reveal>
            <span className="block h-px w-10 bg-ember" aria-hidden />
            <DisplayHeading size="md" className="mt-6">
              Alles over zakelijk internet en <em>telefonie</em>
            </DisplayHeading>
          </Reveal>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-500">
            Wil je meer weten voordat je een abonnement kiest? Bekijk onze praktische gidsen
            voor zzp&apos;ers.
          </p>
          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ember">
                Internet · 5 gidsen
              </p>
              <h2 className="mt-3 font-display text-2xl font-normal tracking-[-0.02em] text-ink">
                Zakelijk internet
              </h2>
              <GuideList items={ZIT_INTERNET_GUIDES} />
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ember">
                Telefonie · 7 gidsen
              </p>
              <h2 className="mt-3 font-display text-2xl font-normal tracking-[-0.02em] text-ink">
                Zakelijke mobiele telefonie
              </h2>
              <GuideList items={ZIT_MOBILE_GUIDES} />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-display text-[1.85rem] font-normal leading-tight tracking-[-0.025em] text-ink sm:text-[2.15rem]">
            Zakelijk internet en telefonie bij KPN
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500">
            KPN biedt zakelijke internet- en mobiele abonnementen voor ondernemers. Welke
            producten, snelheden en aanvullende diensten beschikbaar zijn, hangt af van het
            gekozen abonnement en, voor vast internet, je adres.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <PaperCard className="flex flex-col p-5">
              <h3 className="font-display text-xl font-normal tracking-[-0.02em] text-ink">
                Zakelijk internet
              </h3>
              <p className="mt-4">
                <KpnAffiliateLink href={KPN_AFFILIATE.zakelijk} className="font-medium text-ember underline decoration-ember/30 underline-offset-[6px] hover:decoration-ember">
                  Bekijk KPN Zakelijk Internet
                </KpnAffiliateLink>
              </p>
            </PaperCard>
            <PaperCard className="flex flex-col p-5">
              <h3 className="font-display text-xl font-normal tracking-[-0.02em] text-ink">
                Zakelijk Sim Only
              </h3>
              <p className="mt-4">
                <KpnAffiliateLink href={KPN_AFFILIATE.simOnly} className="font-medium text-ember underline decoration-ember/30 underline-offset-[6px] hover:decoration-ember">
                  Bekijk KPN Zakelijk Sim Only
                </KpnAffiliateLink>
              </p>
            </PaperCard>
            <PaperCard className="flex flex-col p-5">
              <h3 className="font-display text-xl font-normal tracking-[-0.02em] text-ink">
                Zakelijk mobiel
              </h3>
              <p className="mt-4">
                <KpnAffiliateLink href={KPN_AFFILIATE.mobiel} className="font-medium text-ember underline decoration-ember/30 underline-offset-[6px] hover:decoration-ember">
                  Bekijk KPN Zakelijk Mobiel
                </KpnAffiliateLink>
              </p>
            </PaperCard>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-ink-400">
            Controleer de actuele tarieven, beschikbaarheid en contractvoorwaarden bij de
            aanbieder. {ZIT_DISCLOSURE}
          </p>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <Reveal>
            <span className="block h-px w-10 bg-ember" aria-hidden />
            <DisplayHeading size="md" className="mb-8 mt-6">
              Veelgestelde <em>vragen</em>
            </DisplayHeading>
          </Reveal>
          <FaqList items={FAQS.map(({ q, a }) => ({ question: q, answer: a }))} />
        </div>
      </section>

      <DarkPanel innerClassName="text-center">
        <h2 className="font-display text-[1.85rem] font-normal leading-tight tracking-[-0.025em] text-white sm:text-[2.15rem]">
          Kies het abonnement dat bij je onderneming past
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          Of je nu op zoek bent naar betrouwbaar internet voor je kantoor of een mobiel
          abonnement zonder nieuw toestel: vergelijk de mogelijkheden voordat je een contract
          afsluit.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
          <Link href={ZIT_INTERNET_PATH} className={`${btn.light} w-full sm:w-auto`}>
            Bekijk zakelijk internet
            <ArrowIcon />
          </Link>
          <Link href={ZIT_SIM_PATH} className={`${btn.ghostDark} w-full sm:w-auto`}>
            Bekijk zakelijk Sim Only
          </Link>
        </div>
      </DarkPanel>

      <p className="mx-auto max-w-3xl px-4 py-8 text-center text-sm leading-relaxed text-ink-400 sm:px-6">
        {ZIT_DISCLOSURE} De informatie op deze pagina is algemeen van aard en vormt geen
        persoonlijk fiscaal of financieel advies. Tarieven, voorwaarden en belastingregels
        kunnen wijzigen.
      </p>
    </div>
  );
}
