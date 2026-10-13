import Link from 'next/link';
import { Wifi } from 'lucide-react';
import { Reveal } from '@/components/landing/page/motion';
import {
  ArrowIcon,
  DarkPanel,
  DisplayHeading,
  FaqList,
  PageHeader,
  PaperCard,
  TrustList,
  btn,
} from '@/components/site/editorial';
import { siteOpenGraphImages, SITE_OG_IMAGE } from '@/lib/siteOg';
import { KpnAffiliateLink } from '@/components/tools/KpnAffiliateCta';
import {
  KPN_AFFILIATE,
  ZIT_DISCLOSURE,
  ZIT_HUB_PATH,
  ZIT_INTERNET_GUIDES,
} from '@/lib/zakelijkInternetTelefonie';

const title = "Zakelijk Internet voor ZZP'ers: Kosten & Abonnementen";
const description =
  "Zakelijk internet afsluiten als zzp'er? Vergelijk kosten, glasvezel, snelheid en contracten. Bekijk zakelijke internetabonnementen bij KPN.";

export const metadata = {
  title,
  description,
  keywords:
    'zakelijk internet, zakelijk internet zzp, zakelijk internet abonnement, zakelijk internet vergelijken, zakelijk glasvezel',
  alternates: { canonical: 'https://factuurbaas.nl/zakelijk-internet' },
  openGraph: {
    title,
    description,
    url: 'https://factuurbaas.nl/zakelijk-internet',
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
    q: 'Wat is het verschil tussen zakelijk en particulier internet?',
    a: 'Het verschil zit vooral in de contractvoorwaarden en mogelijke aanvullende diensten. Een zakelijk abonnement is niet automatisch sneller dan een particulier abonnement.',
  },
  {
    q: 'Wat kost zakelijk internet voor zzp’ers?',
    a: 'De prijs hangt af van de snelheid, provider, aansluiting en dienstverlening. Voor reguliere zakelijke abonnementen kun je als eerste budgetinschatting rekenen op enkele tientallen euro’s per maand exclusief btw. Controleer altijd de actuele tarieven.',
  },
  {
    q: 'Is zakelijk internet verplicht voor zzp’ers?',
    a: 'Nee. Als zzp’er ben je niet verplicht om een zakelijk internetabonnement af te sluiten.',
  },
  {
    q: 'Is glasvezel beter voor zakelijk internet?',
    a: 'Glasvezel kan voordelen bieden, vooral bij intensief uploaden. Of het voor jouw onderneming nodig is, hangt af van je werkzaamheden en de beschikbare alternatieven.',
  },
  {
    q: 'Kan ik zakelijk internet thuis afsluiten?',
    a: 'Ja, bij aanbieders die zakelijke abonnementen op woonadressen aanbieden. Controleer de beschikbaarheid op je adres.',
  },
  {
    q: 'Is zakelijk internet volledig aftrekbaar?',
    a: 'Niet automatisch. De fiscale behandeling hangt af van de omstandigheden en de toepasselijke belastingregels. Vooral bij thuisinternet gelden specifieke beperkingen.',
  },
  {
    q: 'Hoe lang zit ik vast aan een zakelijk internetcontract?',
    a: 'Dat verschilt per aanbieder en abonnement. Controleer de minimale contractduur, opzegtermijn en eventuele kosten bij voortijdige beëindiging.',
  },
  {
    q: 'Welke internetsnelheid heb ik nodig als zzp’er?',
    a: 'Voor eenvoudige administratieve werkzaamheden kan een relatief beperkte snelheid voldoende zijn. Bij meerdere gebruikers, grote bestanden of intensief cloudgebruik kan een hogere snelheid nuttig zijn.',
  },
  {
    q: 'Kan ik mijn zakelijke internetabonnement meenemen bij een verhuizing?',
    a: 'Dat hangt af van de provider, je contract en de beschikbaarheid op het nieuwe adres. Controleer vooraf de verhuisvoorwaarden.',
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

function CompareTable({ headers, rows, numericLast = false }) {
  return (
    <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-ink/[0.08] bg-white shadow-paper">
      <table className="w-full min-w-[280px] text-sm text-ink-700 sm:text-base">
        <thead>
          <tr className="border-b border-ink/10 bg-paper-50 text-left">
            {headers.map((header, index) => (
              <th
                key={header}
                className={`px-4 py-3 font-semibold text-ink ${numericLast && index === headers.length - 1 ? 'text-right' : ''}`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="border-b border-ink/[0.06] last:border-0">
              {row.map((cell, index) => (
                <td
                  key={`${row[0]}-${index}`}
                  className={`px-4 py-3 ${numericLast && index === row.length - 1 ? 'text-right tabular-nums' : ''}`}
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

function AffiliateCard({ title, text, label, note }) {
  return (
    <aside className="not-prose my-10 rounded-2xl border border-ink/[0.08] bg-white p-6 shadow-paper sm:p-8">
      {title ? (
        <p className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">{title}</p>
      ) : null}
      {text ? <p className="mt-3 text-[15px] leading-relaxed text-ink-500 sm:text-base">{text}</p> : null}
      <p className={title || text ? 'mt-6' : ''}>
        <KpnAffiliateLink href={KPN_AFFILIATE.zakelijk} className={btn.primary}>
          {label}
          <ArrowIcon />
        </KpnAffiliateLink>
      </p>
      {note ? <p className="mt-3 text-sm leading-relaxed text-ink-400">{note}</p> : null}
    </aside>
  );
}

export default function ZakelijkInternetPage() {
  return (
    <div className="min-h-screen bg-paper-50 text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHeader
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Zakelijk internet & telefonie', href: ZIT_HUB_PATH },
          { name: 'Zakelijk internet' },
        ]}
        eyebrow="Zakelijk internet"
        eyebrowIcon={Wifi}
        title={
          <>
            Zakelijk internet voor zzp&apos;ers: <em>vergelijk je mogelijkheden</em>
          </>
        }
        size="lg"
        containerClassName="max-w-5xl"
        lead={
          <>
            <p>
              Betrouwbaar internet voor je onderneming. Thuis, op kantoor of in je eigen
              bedrijfsruimte.
            </p>
            <p className="text-base text-ink-400 sm:text-lg">
              Vergelijk snelheid, kosten en mogelijkheden. Controleer welk abonnement op jouw
              adres beschikbaar is.
            </p>
          </>
        }
      >
        <KpnAffiliateLink href={KPN_AFFILIATE.zakelijk} className={btn.primary}>
          Bekijk KPN Zakelijk Internet
          <ArrowIcon />
        </KpnAffiliateLink>
        <p className="mt-4 text-sm leading-relaxed text-ink-400">
          Controleer de beschikbaarheid, actuele prijzen en voorwaarden op jouw adres.
        </p>
        <TrustList items={['Snelheid', 'Kosten', 'Support']} className="mt-8" />
      </PageHeader>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <article className="article-body prose prose-lg max-w-none [&>h2:first-child]:mt-0">
            <h2>Wat is zakelijk internet?</h2>
            <p>
              Als zzp&apos;er ben je vaak afhankelijk van een goede internetverbinding. Voor
              videobellen, online boekhouden, klantencontact en het werken in de cloud wil je een
              verbinding die past bij je dagelijkse werkzaamheden.
            </p>
            <p>
              Zakelijk internet is een internetabonnement dat wordt aangeboden voor ondernemers
              en bedrijven. Net als bij particulier internet kun je kiezen uit verschillende
              snelheden en verbindingstypen. Het verschil zit vooral in de contractvoorwaarden en
              eventuele aanvullende zakelijke dienstverlening.
            </p>
            <p>Denk aan:</p>
            <ul>
              <li>Zakelijke klantenservice.</li>
              <li>Verschillende internetsnelheden.</li>
              <li>Mogelijkheden voor een vast IP-adres.</li>
              <li>Aanvullende ondersteuning bij storingen.</li>
              <li>Extra beveiligings- of netwerkdiensten.</li>
              <li>Facturatie voor je onderneming.</li>
            </ul>
            <p>
              Welke mogelijkheden daadwerkelijk inbegrepen zijn, verschilt per aanbieder en
              abonnement. Een zakelijk internetabonnement is niet verplicht voor zzp&apos;ers.
              Veel ondernemers kunnen ook met een particuliere verbinding prima werken.
            </p>

            <h2>Wat kost zakelijk internet per maand?</h2>
            <p>
              De prijs van zakelijk internet hangt af van je adres, de gekozen snelheid, de
              verbindingstechniek en de aanvullende diensten.
            </p>
            <p>
              Als globale budgetinschatting kun je voor een regulier zakelijk abonnement rekenen
              op enkele tientallen euro&apos;s per maand. Pakketten met hogere snelheden of
              uitgebreidere dienstverlening kunnen duurder zijn.
            </p>
            <CompareTable
              headers={['Type verbinding of pakket', 'Indicatieve maandkosten excl. btw']}
              numericLast
              rows={[
                ['Basis zakelijk internet', '€30 – €50'],
                ['Zakelijk internet met hogere snelheid', '€40 – €70'],
                ['Snel zakelijk glasvezel', '€50 – €90'],
                ['Zakelijk internet met uitgebreide service', '€70 – €120+'],
              ]}
            />
            <p className="text-base text-ink-400">
              Dit zijn globale budgetindicaties, geen geverifieerde actuele aanbiedingen. De
              werkelijke prijzen kunnen afwijken.
            </p>
            <p>
              Let bij het vergelijken niet alleen op de maandprijs, maar ook op
              installatiekosten, tijdelijke kortingen en de totale contractduur. Lees ook:{' '}
              <Link href="/blogs/zakelijk-internet-kosten">Wat kost zakelijk internet?</Link>
            </p>
            <AffiliateCard
              label="Bekijk actuele zakelijke internetabonnementen"
              note="Controleer de beschikbaarheid en actuele tarieven op jouw adres."
            />

            <h2>Welk zakelijk internet past bij jouw onderneming?</h2>
            <p>Niet iedere zzp&apos;er heeft dezelfde internetbehoefte.</p>
            <p>
              Een zelfstandig adviseur die vooral e-mailt en videobelt, gebruikt zijn verbinding
              anders dan een videoproducent die dagelijks grote bestanden uploadt.
            </p>
            <CompareTable
              headers={['Type ondernemer', 'Wat is belangrijk?']}
              rows={[
                [
                  'Administratief zzp’er',
                  'Betrouwbare verbinding voor e-mail, boekhouding en online systemen',
                ],
                ['Consultant of thuiswerker', 'Stabiel videobellen en voldoende uploadcapaciteit'],
                [
                  'Webdesigner of marketeer',
                  'Goede upload- en downloadsnelheid voor cloudbestanden',
                ],
                [
                  'Fotograaf of videomaker',
                  'Snelle uploads en voldoende capaciteit voor grote bestanden',
                ],
                [
                  'Kleine onderneming met meerdere medewerkers',
                  'Capaciteit voor meerdere gelijktijdige gebruikers',
                ],
              ]}
            />
            <p>
              Kies daarom niet automatisch het snelste abonnement. Kijk naar wat je daadwerkelijk
              nodig hebt.
            </p>

            <h2>Hoeveel internetsnelheid heb je nodig?</h2>
            <p>
              De juiste snelheid hangt af van je werkzaamheden, het aantal gebruikers en de
              apparaten die tegelijkertijd verbonden zijn.
            </p>
            <CompareTable
              headers={['Gebruik', 'Praktische snelheidsindicatie']}
              rows={[
                ['E-mail, facturatie en administratie', '50–100 Mbps'],
                ['Regelmatig videobellen en thuiswerken', '100–200 Mbps'],
                ['Meerdere gebruikers en intensief cloudgebruik', '200–500 Mbps'],
                ['Grote bestanden en intensief online werk', '500 Mbps of meer kan nuttig zijn'],
              ]}
            />
            <p>
              Dit zijn richtlijnen, geen harde minimumvereisten. Let bovendien op de
              uploadsnelheid. Die is vooral belangrijk wanneer je bestanden naar de cloud
              verstuurt of regelmatig videobelt.
            </p>
            <p>
              Ook de kwaliteit van je wifi-netwerk speelt een rol. Een snelle internetverbinding
              lost een slechte wifi-ontvangst niet automatisch op.
            </p>

            <h2>Welke verbinding past bij jou?</h2>
            <p>De beschikbare internetverbindingen verschillen per adres.</p>
            <div className="not-prose my-8 grid gap-4 sm:grid-cols-3">
              <PaperCard className="p-5 sm:p-6">
                <h3 className="font-display text-xl font-normal tracking-[-0.02em] text-ink">
                  Zakelijk glasvezel
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                  Kan hoge download- en uploadsnelheden bieden. Interessant als je intensief
                  online werkt. De exacte snelheid hangt af van het abonnement.
                </p>
              </PaperCard>
              <PaperCard className="p-5 sm:p-6">
                <h3 className="font-display text-xl font-normal tracking-[-0.02em] text-ink">
                  Zakelijk kabelinternet
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                  Vaak een goede oplossing voor dagelijkse werkzaamheden. De uploadsnelheid kan
                  lager zijn dan bij bepaalde glasvezelabonnementen.
                </p>
              </PaperCard>
              <PaperCard className="p-5 sm:p-6">
                <h3 className="font-display text-xl font-normal tracking-[-0.02em] text-ink">
                  Zakelijk DSL
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                  Maakt gebruik van bestaande koperen aansluitingen. De snelheid hangt onder
                  andere af van de afstand tot de netwerkapparatuur.
                </p>
              </PaperCard>
            </div>
            <p>
              Niet iedere provider biedt op ieder adres dezelfde verbindingstypen aan. Lees
              verder:{' '}
              <Link href="/blogs/glasvezel-zzp">Glasvezel voor zzp&apos;ers: is het nodig?</Link>
            </p>
          </article>

          <AffiliateCard
            title="Controleer de beschikbaarheid op jouw adres"
            text="Welke verbinding, snelheid en prijs beschikbaar zijn, hangt af van je adres. Bekijk de actuele zakelijke internetabonnementen bij KPN."
            label="Bekijk KPN Zakelijk Internet"
            note="Controleer de actuele aanbiedingen en beschikbaarheid rechtstreeks bij KPN."
          />

          <article className="article-body prose prose-lg max-w-none">
            <h2>Zakelijk internet of particulier internet?</h2>
            <p>
              Veel zzp&apos;ers twijfelen of ze een zakelijk internetabonnement nodig hebben. Een
              particulier abonnement kan voldoende zijn wanneer je vanuit huis werkt en geen
              specifieke zakelijke diensten nodig hebt.
            </p>
            <p>
              Een zakelijk abonnement kan aantrekkelijk zijn wanneer je behoefte hebt aan
              aanvullende ondersteuning, bepaalde netwerkfuncties of zakelijke
              contractvoorwaarden.
            </p>
            <CompareTable
              headers={['Onderdeel', 'Particulier internet', 'Zakelijk internet']}
              rows={[
                ['Doelgroep', 'Huishoudens', 'Ondernemers'],
                ['Beschikbare snelheid', 'Afhankelijk van pakket', 'Afhankelijk van pakket'],
                ['Klantenservice', 'Consumentenondersteuning', 'Mogelijk zakelijke ondersteuning'],
                ['Serviceafspraken', 'Volgens contract', 'Afhankelijk van zakelijk pakket'],
                ['Vast IP-adres', 'Soms beschikbaar', 'Mogelijk als zakelijke optie'],
                ['Maandprijs', 'Afhankelijk van provider', 'Afhankelijk van provider'],
              ]}
            />
            <p>
              Zakelijk internet is niet automatisch sneller of beter dan particulier internet.
              Vergelijk vooral de daadwerkelijke voorwaarden en diensten. Lees ook:{' '}
              <Link href="/blogs/internet-zakelijk-of-prive-zzp">
                Internet zakelijk of privé als zzp&apos;er
              </Link>
              .
            </p>

            <h2>Zakelijk internet thuis afsluiten</h2>
            <p>
              Werk je vanuit huis? Dan kun je bij sommige aanbieders een zakelijk
              internetabonnement op je woonadres afsluiten. Dat kan interessant zijn als je een
              aparte zakelijke aansluiting wilt of specifieke zakelijke diensten nodig hebt.
            </p>
            <p>
              Maar een afzonderlijk zakelijk abonnement is niet voor iedere thuiswerkende
              zzp&apos;er noodzakelijk.
            </p>
            <p>Let bij je keuze op:</p>
            <ul>
              <li>De beschikbare verbinding op je adres.</li>
              <li>De snelheid die je nodig hebt.</li>
              <li>De totale abonnementskosten.</li>
              <li>Eventuele zakelijke ondersteuning.</li>
              <li>Het gebruik door andere gezinsleden.</li>
              <li>De voorwaarden voor zakelijk gebruik.</li>
            </ul>
            <p>
              Ook de fiscale behandeling van thuisinternet vraagt aandacht. Een zakelijk
              contract betekent niet automatisch dat alle kosten aftrekbaar zijn. Meer
              informatie:{' '}
              <Link href="/blogs/zakelijk-internet-thuis">
                Zakelijk internet thuis als zzp&apos;er
              </Link>
              .
            </p>

            <h2>Waar moet je op letten bij het vergelijken?</h2>
            <h3>1. De totale maandkosten</h3>
            <p>
              Controleer of de prijs inclusief of exclusief btw is en of er tijdelijke
              actiekortingen gelden.
            </p>
            <h3>2. De contractduur</h3>
            <p>
              Een langere contractduur kan aantrekkelijk zijn, maar beperkt mogelijk je
              flexibiliteit.
            </p>
            <h3>3. Installatie- en aansluitkosten</h3>
            <p>
              Sommige abonnementen hebben eenmalige kosten voor installatie, activatie of
              apparatuur.
            </p>
            <h3>4. De beschikbare snelheid</h3>
            <p>
              Kijk naar zowel de download- als uploadsnelheid en controleer wat op jouw adres
              mogelijk is.
            </p>
            <h3>5. Zakelijke ondersteuning</h3>
            <p>
              Bekijk welke klantenservice en storingsondersteuning inbegrepen zijn. Ga niet uit
              van een gegarandeerde hersteltijd tenzij die expliciet in het contract staat.
            </p>
            <h3>6. Extra diensten</h3>
            <p>
              Controleer of je aanvullende diensten nodig hebt, zoals een vast IP-adres,
              wifi-apparatuur of een mobiele back-upverbinding.
            </p>
            <h3>7. Verhuizen of opzeggen</h3>
            <p>
              Controleer wat er gebeurt wanneer je verhuist, je onderneming beëindigt of van
              provider wilt veranderen.
            </p>

            <h2>Zijn zakelijke internetkosten aftrekbaar?</h2>
            <p>
              Zakelijke internetkosten kunnen onder voorwaarden aftrekbaar zijn voor de
              inkomstenbelasting. Bij een afzonderlijk bedrijfspand is het zakelijke karakter van
              de verbinding vaak duidelijker dan bij internet thuis.
            </p>
            <p>
              Voor internet op je woonadres gelden specifieke fiscale regels. Je kunt niet
              automatisch een deel van je huishoudelijke abonnement aftrekken omdat je
              thuiswerkt.
            </p>
            <h3>Hoe zit het met de btw?</h3>
            <p>
              Als je recht hebt op aftrek van voorbelasting, kan de btw op zakelijk gebruikte
              internetdiensten onder voorwaarden aftrekbaar zijn. Bij gemengd privé- en zakelijk
              gebruik gelden aanvullende regels.
            </p>
            <p>
              Ondernemers die deelnemen aan de kleineondernemersregeling (KOR), kunnen in
              beginsel geen btw op zakelijke kosten terugvragen. Lees de volledige uitleg:{' '}
              <Link href="/blogs/internetkosten-aftrekbaar-zzp">
                Internetkosten aftrekbaar als zzp&apos;er
              </Link>
              .
            </p>

            <h2>Zakelijk internet bij KPN</h2>
            <p>
              KPN biedt internetabonnementen voor ondernemers, waaronder oplossingen voor
              zzp&apos;ers en kleine bedrijven. Welke verbindingen, snelheden en diensten
              beschikbaar zijn, hangt af van het adres en het gekozen pakket.
            </p>
            <p>Bij het bekijken van een zakelijk internetabonnement kun je onder andere letten op:</p>
            <ul>
              <li>De beschikbare snelheid.</li>
              <li>De maandelijkse abonnementskosten.</li>
              <li>De contractduur.</li>
              <li>Installatie- en aansluitkosten.</li>
              <li>De inbegrepen ondersteuning.</li>
              <li>Eventuele aanvullende diensten.</li>
            </ul>
          </article>

          <AffiliateCard
            label="Bekijk KPN Zakelijk Internet"
            note="Controleer de actuele aanbiedingen en beschikbaarheid rechtstreeks bij KPN."
          />

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

      <DarkPanel innerClassName="text-center">
        <h2 className="font-display text-[1.85rem] font-normal leading-tight tracking-[-0.025em] text-white sm:text-[2.15rem]">
          Zakelijk internet afsluiten als zzp&apos;er?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          Een goed zakelijk internetabonnement hoeft niet het duurste of snelste abonnement te
          zijn. Controleer wat beschikbaar is op jouw adres en vergelijk de totale kosten en
          voorwaarden.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
          <KpnAffiliateLink href={KPN_AFFILIATE.zakelijk} className={`${btn.light} w-full sm:w-auto`}>
            Bekijk KPN Zakelijk Internet
            <ArrowIcon />
          </KpnAffiliateLink>
          <Link href={ZIT_HUB_PATH} className={`${btn.ghostDark} w-full sm:w-auto`}>
            Zakelijk internet en telefonie
          </Link>
        </div>
      </DarkPanel>

      <p className="mx-auto max-w-3xl px-4 py-8 text-center text-sm leading-relaxed text-ink-400 sm:px-6">
        {ZIT_DISCLOSURE} Prijsindicaties zijn niet gebaseerd op gecontroleerde actuele
        aanbiedingen. Tarieven, beschikbaarheid en voorwaarden kunnen wijzigen. De fiscale
        informatie is algemeen en vormt geen persoonlijk belastingadvies.
      </p>

      <section className="bg-paper py-14 sm:py-16">
        <div className="container mx-auto grid max-w-5xl gap-6 px-4 sm:px-6 md:grid-cols-[14rem_1fr] md:gap-10">
          <h2 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">
            Internetgidsen
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {ZIT_INTERNET_GUIDES.map((link) => (
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
