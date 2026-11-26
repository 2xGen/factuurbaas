import Link from 'next/link';
import { Suspense } from 'react';
import { Search } from 'lucide-react';
import BookkeeperLeadForm from '@/components/leads/BookkeeperLeadForm';
import BookkeeperStickyCta from '@/components/leads/BookkeeperStickyCta';
import BookkeeperClusterLinks from '@/components/leads/BookkeeperClusterLinks';
import { ArrowIcon, DisplayHeading, FaqList, PageHeader, TrustList, btn } from '@/components/site/editorial';
const title = 'Boekhouder vinden voor ZZP, BV en MKB | FactuurBaas';
const description =
  "Een boekhouder vinden voor je eenmanszaak, VOF, BV of MKB? Bekijk indicatieve kosten en vraag gratis en vrijblijvend hulp aan bij het vinden van een boekhouder.";

const FEATURED_IMAGE = {
  url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/boekhouder%20voor%20zzp.jpg',
  alt: "Boekhouder vinden voor zzp'ers, BV en MKB.",
};

export const metadata = {
  title,
  description,
  keywords:
    'boekhouder vinden, boekhouder zoeken, zoek een boekhouder, boekhouder zzp, boekhouder eenmanszaak, boekhouder bv, boekhouder mkb, boekhouding uitbesteden, boekhouder zakelijk',
  alternates: { canonical: 'https://factuurbaas.nl/boekhouder-vinden' },
  openGraph: {
    title,
    description,
    url: 'https://factuurbaas.nl/boekhouder-vinden',
    siteName: 'FactuurBaas',
    type: 'website',
    images: [
      {
        url: FEATURED_IMAGE.url,
        width: 1200,
        height: 630,
        alt: FEATURED_IMAGE.alt,
      },
    ],
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
    q: 'Hoe vind ik een goede boekhouder?',
    a: 'Zoek een boekhouder met ervaring in jouw rechtsvorm en branche. Let daarnaast op tarieven, bereikbaarheid, dienstverlening en de manier waarop je jouw administratie kunt aanleveren. Via FactuurBaas kun je gratis en vrijblijvend hulp aanvragen bij het vinden van een passende boekhouder.',
  },
  {
    q: 'Wat kost een boekhouder voor een zzp’er?',
    a: 'Voor volledige uitbesteding van de boekhouding van een eenmanszaak kun je indicatief rekening houden met €100 tot €150 per maand. De uiteindelijke prijs hangt af van het aantal transacties, de complexiteit en de gewenste dienstverlening.',
  },
  {
    q: 'Wat kost een boekhouder voor een BV?',
    a: 'Voor een afzonderlijke werkmaatschappij beginnen de indicatieve kosten bij ongeveer €250 per maand. Voor een afzonderlijke holding beginnen de indicatieve kosten bij ongeveer €100 per maand. Bij meerdere ondernemingen, personeel of aanvullende adviesbehoeften kunnen de kosten hoger uitvallen.',
  },
  {
    q: 'Wat kost een boekhouder voor een VOF?',
    a: 'Voor een VOF liggen de indicatieve kosten voor volledige boekhouding tussen €150 en €250 per maand. De daadwerkelijke kosten zijn afhankelijk van de administratie en gewenste ondersteuning.',
  },
  {
    q: 'Is een boekhouder verplicht voor zzp’ers?',
    a: 'Nee. Een zzp’er is niet verplicht om een boekhouder in te schakelen. Je bent wel verantwoordelijk voor een correcte administratie en het nakomen van je fiscale verplichtingen.',
  },
  {
    q: 'Kan ik alleen mijn btw-aangifte uitbesteden?',
    a: 'Dat is bij sommige boekhouders mogelijk. Veel administratiekantoren richten zich echter op doorlopende samenwerkingen waarbij meerdere administratieve werkzaamheden worden gecombineerd. Bespreek vooraf welke ondersteuning je nodig hebt.',
  },
  {
    q: 'Kan ik zelf facturen blijven maken als ik een boekhouder heb?',
    a: 'Ja. Je kunt zelf facturen maken met FactuurBaas en deze aanleveren bij je boekhouder. Bespreek vooraf welke bestandsformaten en aanlevermethoden jouw boekhouder accepteert.',
  },
  {
    q: 'Moet mijn boekhouder in de buurt zitten?',
    a: 'Nee. Veel boekhouders werken digitaal, waardoor je ook kunt samenwerken met een administratiekantoor buiten jouw regio. Als persoonlijk contact op locatie belangrijk voor je is, kun je dit aangeven bij het bespreken van je wensen.',
  },
  {
    q: 'Kan ik overstappen naar een andere boekhouder?',
    a: 'Ja. Controleer wel de afspraken en eventuele opzegtermijn bij je huidige boekhouder. Zorg daarnaast voor een goede overdracht van je administratie en openstaande werkzaamheden.',
  },
  {
    q: 'Kan ik een boekhouder vinden voor een MKB-bedrijf met personeel?',
    a: 'Ja. Je kunt een aanvraag indienen voor ondersteuning bij de administratie van je MKB-bedrijf. Bespreek daarbij ook of salarisadministratie, financiële rapportages en aanvullende dienstverlening nodig zijn.',
  },
  {
    q: 'Is een boekhouder vinden via FactuurBaas gratis?',
    a: 'Het indienen van een aanvraag via FactuurBaas is gratis en vrijblijvend. De uiteindelijke dienstverlening van een boekhouder is doorgaans betaald. Je maakt hierover zelf afspraken met de betreffende dienstverlener.',
  },
  {
    q: 'Wat gebeurt er met mijn aanvraag?',
    a: 'FactuurBaas stuurt je aanvraag na jouw toestemming door naar samenwerkingspartner WRKD B.V. Deze kan contact met je opnemen om jouw wensen en de mogelijkheden te bespreken. Je bent niet verplicht om een samenwerking aan te gaan.',
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

function LeadForm() {
  return (
    <div>
      <p className="font-display text-[1.65rem] font-normal leading-tight tracking-[-0.02em] text-ink">
        Vind een boekhouder voor jouw onderneming
      </p>
      <p className="mt-2 mb-4 text-sm leading-relaxed text-ink-500">
        Vertel ons welke bedrijfsvorm je hebt en laat je contactgegevens achter. Onze samenwerkingspartner
        neemt contact met je op om de mogelijkheden te bespreken.
      </p>
      <Suspense
        fallback={<div className="min-h-[28rem] rounded-2xl border border-ink/[0.08] bg-white shadow-paper" />}
      >
        <BookkeeperLeadForm source="/boekhouder-vinden" sourceType="seo" id="boekhouder-formulier" />
      </Suspense>
      <p className="mt-3 text-[13px] leading-relaxed text-ink-500">
        Je aanvraag wordt doorgestuurd naar WRKD B.V., die contact met je kan opnemen over het
        vinden van een passende boekhouder.
      </p>
    </div>
  );
}

export default function BoekhouderVindenPage() {
  return (
    <div className="min-h-screen bg-paper-50 text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHeader
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Boekhouden', href: '/boekhouden' },
          { name: 'Boekhouder vinden' },
        ]}
        eyebrow="Boekhouder vinden"
        eyebrowIcon={Search}
        title="Boekhouder vinden voor ZZP, BV en MKB"
        size="lg"
        align="start"
        containerClassName="max-w-6xl"
        lead={
          <>
            <p>
              Op zoek naar een boekhouder die past bij jouw onderneming? Of je nu net bent begonnen als
              zzp&apos;er, een groeiend MKB-bedrijf hebt of de administratie van je BV wilt uitbesteden:
              via FactuurBaas vraag je gratis en vrijblijvend hulp aan bij het vinden van een passende
              boekhouder.
            </p>
            <p className="mt-4">
              Van btw-aangiften en dagelijkse administratie tot jaarrekeningen, salarisadministratie en
              fiscaal advies.
            </p>
          </>
        }
        aside={<LeadForm />}
      >
        <TrustList
          items={[
            'Gratis en vrijblijvend aanvragen',
            "Voor eenmanszaken, VOF's, stichtingen en BV's",
            'Voor startende en bestaande ondernemingen',
            'Binnen één minuut een aanvraag indienen',
            'Geen verplichting om een boekhouder in te schakelen',
          ]}
        />
      </PageHeader>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <span className="block h-px w-10 bg-ember" aria-hidden />
          <DisplayHeading size="md" className="mb-4 mt-6 max-w-[22ch]">
            Hoe vind je een boekhouder via FactuurBaas?
          </DisplayHeading>
          <p className="max-w-2xl text-lg leading-relaxed text-ink-500">
            Een goede boekhouder vinden hoeft niet ingewikkeld te zijn. Je hoeft niet zelf verschillende
            administratiekantoren te benaderen om een eerste stap te zetten.
          </p>
          <ol className="mt-10 grid gap-4 lg:grid-cols-3">
            {[
              [
                '1',
                'Vertel ons over je onderneming',
                'Selecteer je bedrijfsvorm en vul je bedrijfsnaam, vestigingsplaats en contactgegevens in.',
              ],
              [
                '2',
                'Bespreek jouw boekhoudkundige wensen',
                'Onze samenwerkingspartner kan contact met je opnemen om te bespreken welke werkzaamheden je wilt uitbesteden, wat je belangrijk vindt en welke ondersteuning bij jouw onderneming past.',
              ],
              [
                '3',
                'Beslis zelf of je wilt samenwerken',
                'Bespreek de dienstverlening, tarieven en mogelijkheden. Je bepaalt zelf of je daadwerkelijk een samenwerking aangaat.',
              ],
            ].map(([number, heading, text]) => (
              <li key={number} className="rounded-2xl border border-ink/[0.08] bg-white p-6 shadow-paper">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ember">Stap {number}</p>
                <h3 className="mt-3 font-display text-2xl font-normal leading-snug tracking-[-0.02em] text-ink">
                  {heading}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-500">{text}</p>
              </li>
            ))}
          </ol>
          <FormCta>Vind vrijblijvend een boekhouder</FormCta>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <DisplayHeading size="md" className="max-w-[18ch]">
            Een boekhouder voor iedere onderneming
          </DisplayHeading>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-500">
            Niet iedere onderneming heeft dezelfde boekhoudkundige behoeften. Een zzp&apos;er met enkele
            facturen per maand heeft andere verplichtingen dan een BV met personeel of een groeiend
            MKB-bedrijf.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ['/boekhouder-zzp', "Boekhouder voor zzp'ers", '€100 – €150 / maand', 'Voor eenmanszaken en freelancers'],
              ['/boekhouder-bv', 'Boekhouder voor BV', 'Vanaf €250 / maand', 'Voor werkmaatschappij en holding'],
              ['/boekhouder-mkb', 'Boekhouder voor MKB', 'Op maat', 'Voor groeiende bedrijven'],
              ['/boekhouding-uitbesteden', 'Boekhouding uitbesteden', 'Deels of volledig', 'Zelf factureren, administratie uitbesteden'],
              ['/boekhouder-overstappen', 'Niet tevreden over je huidige boekhouder?', 'Vrijblijvend', 'Overstappen zonder direct op te zeggen'],
              ['/online-boekhouder', 'Online boekhouder', 'Digitaal', 'Samenwerken zonder kantoor om de hoek'],
            ].map(([href, heading, price, text]) => (
              <Link
                key={href}
                href={href}
                className="rounded-2xl border border-ink/[0.08] bg-white p-6 shadow-paper transition-colors hover:border-ink/25"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ember">{price}</p>
                <h3 className="mt-3 font-display text-2xl font-normal leading-snug tracking-[-0.02em] text-ink">
                  {heading}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <span className="block h-px w-10 bg-ember" aria-hidden />
          <DisplayHeading size="md" className="mb-4 mt-6">
            Wanneer heb je een <em>boekhouder</em> nodig?
          </DisplayHeading>
          <div className="space-y-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            <p>
              Niet iedere ondernemer heeft vanaf de eerste dag een boekhouder nodig. Als je weinig
              facturen verstuurt en je administratie overzichtelijk is, kun je veel zelf doen. Maar
              naarmate je onderneming groeit, wordt het bijhouden van inkomsten, uitgaven en
              belastingverplichtingen ingewikkelder.
            </p>
            <p>Een boekhouder kan helpen wanneer:</p>
          </div>
          <ul className="mt-6 space-y-4">
            {[
              [
                'Je administratie te veel tijd kost.',
                'Je bent iedere maand uren bezig met facturen, bonnetjes en banktransacties.',
              ],
              [
                'Je twijfelt over je btw-aangifte.',
                'Je weet niet zeker welke btw je mag terugvragen of hoe je bepaalde kosten moet verwerken.',
              ],
              [
                'Je meer zakelijke transacties krijgt.',
                'Je administratie wordt lastiger te overzien doordat je meer klanten, leveranciers en kosten hebt.',
              ],
              [
                'Je belastingaangifte ingewikkelder wordt.',
                'Je hebt vragen over zakelijke kosten, afschrijvingen, investeringen of fiscale regelingen.',
              ],
              [
                'Je een BV hebt of personeel aanneemt.',
                'Je krijgt te maken met aanvullende administratieve en fiscale verplichtingen.',
              ],
            ].map(([heading, text]) => (
              <li key={heading} className="border-t border-ink/10 pt-4">
                <p className="font-medium text-ink">{heading}</p>
                <p className="mt-1 text-[15px] leading-relaxed text-ink-500">{text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 space-y-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            <p>
              Een boekhouder inschakelen betekent niet dat je alles hoeft uit te besteden. Veel
              ondernemers maken zelf hun facturen en laten alleen de boekhouding of belastingaangiften
              verzorgen.
            </p>
            <p>
              Met de gratis factuurmaker van FactuurBaas kun je zelf{' '}
              <TextLink href="/factuur-maken">facturen opstellen</TextLink>. Een boekhouder kan
              vervolgens helpen bij het verwerken van die facturen in je administratie.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <DisplayHeading size="md" className="max-w-[18ch]">
            Welke werkzaamheden doet een boekhouder?
          </DisplayHeading>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-500">
            Een boekhouder helpt ondernemers om hun financiële administratie correct en overzichtelijk
            bij te houden. Welke werkzaamheden je uitbesteedt, hangt af van je onderneming en de
            afspraken die je maakt.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl border border-ink/[0.08] bg-white p-6 shadow-paper">
              <h3 className="font-display text-2xl font-normal leading-snug tracking-[-0.02em] text-ink">
                Facturen en administratie verwerken
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                Een boekhouder kan verkoopfacturen, inkoopfacturen, bonnetjes en banktransacties
                verwerken. Zo krijg je inzicht in je inkomsten, uitgaven en openstaande bedragen.
              </p>
            </article>
            <article className="rounded-2xl border border-ink/[0.08] bg-white p-6 shadow-paper">
              <h3 className="font-display text-2xl font-normal leading-snug tracking-[-0.02em] text-ink">
                Btw-aangifte verzorgen
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                De meeste btw-plichtige ondernemers doen periodiek btw-aangifte. Een boekhouder kan
                berekenen hoeveel btw je moet afdragen of terugkrijgt en de aangifte verzorgen.
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                Wil je zelf controleren hoe btw werkt? Gebruik dan de{' '}
                <TextLink href="/tools/btw-calculator">btw-calculator</TextLink> of lees onze uitleg
                over <TextLink href="/blogs/btw-factuur-zzp">btw op een factuur</TextLink>.
              </p>
            </article>
            <article className="rounded-2xl border border-ink/[0.08] bg-white p-6 shadow-paper">
              <h3 className="font-display text-2xl font-normal leading-snug tracking-[-0.02em] text-ink">
                Jaarafsluiting en belastingaangiften
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                Aan het einde van het boekjaar moeten de financiële gegevens worden verwerkt voor de
                jaarafsluiting en relevante belastingaangiften. Een boekhouder kan hierbij helpen of
                samenwerken met een belastingadviseur of accountant.
              </p>
            </article>
            <article className="rounded-2xl border border-ink/[0.08] bg-white p-6 shadow-paper">
              <h3 className="font-display text-2xl font-normal leading-snug tracking-[-0.02em] text-ink">
                Financieel inzicht en advies
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                Een goede administratie laat zien hoeveel omzet je maakt, welke kosten je hebt en
                hoeveel geld je moet reserveren voor belastingen. Sommige boekhouders bieden daarnaast
                financieel of fiscaal advies aan.
              </p>
            </article>
          </div>
          <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-ink-500">
            Niet iedere boekhouder biedt alle werkzaamheden aan. Vraag daarom vooraf welke diensten
            inbegrepen zijn en welke werkzaamheden apart worden berekend.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <article>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ember">Eenmanszaak</p>
            <h2 className="mt-3 font-display text-[1.85rem] font-normal leading-tight tracking-[-0.025em] text-ink sm:text-[2.15rem]">
              Boekhouder voor ZZP&apos;ers en eenmanszaken
            </h2>
            <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-ink-500">
              <p>
                Als ZZP&apos;er wil je vooral ondernemen, klanten helpen en betaald krijgen. Toch moet
                je ook je zakelijke administratie bijhouden.
              </p>
              <p>
                Een boekhouder voor ZZP&apos;ers kan helpen bij het verwerken van facturen,
                controleren van zakelijke kosten, verzorgen van btw-aangiften en voorbereiden van de
                jaarlijkse inkomstenbelasting.
              </p>
            </div>
            <h3 className="mt-8 font-display text-2xl font-normal text-ink">Wat kun je als ZZP&apos;er zelf doen?</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
              Bij een eenvoudige administratie kun je vaak zelf:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-ink-500">
              <li>Verkoopfacturen maken en versturen.</li>
              <li>Inkoopfacturen en bonnetjes bewaren.</li>
              <li>Zakelijke inkomsten en uitgaven registreren.</li>
              <li>Openstaande facturen bijhouden.</li>
              <li>Je administratie voorbereiden voor de btw-aangifte.</li>
            </ul>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
              Lees ook onze gids over{' '}
              <TextLink href="/gidsen/zelf-boekhouden-zzp">zelf boekhouden als ZZP&apos;er</TextLink>.
            </p>
            <h3 className="mt-8 font-display text-2xl font-normal text-ink">
              Wanneer is een boekhouder voor ZZP handig?
            </h3>
            <div className="mt-3 space-y-4 text-[15px] leading-relaxed text-ink-500">
              <p>
                Een boekhouder wordt vooral interessant als je weinig tijd hebt voor administratie,
                onzeker bent over belastingregels of regelmatig fouten moet herstellen.
              </p>
              <p>
                Je kunt ook kiezen voor een combinatie: zelf factureren met FactuurBaas en de
                btw-aangifte of jaarafsluiting uitbesteden.
              </p>
            </div>
            <p className="mt-6 text-sm font-medium text-ink">Een boekhouder zoeken als ZZP&apos;er?</p>
            <p className="mt-1 text-[15px] leading-relaxed text-ink-500">
              Vraag gratis en vrijblijvend hulp aan bij het vinden van een boekhouder voor jouw
              eenmanszaak.
            </p>
            <FormCta>Vind een ZZP-boekhouder</FormCta>
          </article>

          <article className="rounded-2xl border border-ink/[0.08] bg-white p-7 shadow-paper sm:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ember">BV</p>
            <h2 className="mt-3 font-display text-[1.85rem] font-normal leading-tight tracking-[-0.025em] text-ink">
              Boekhouder voor een BV
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
              Een BV heeft andere administratieve verplichtingen dan een eenmanszaak. Naast het
              verwerken van facturen en btw-aangiften moet je onder andere rekening houden met de
              jaarrekening, vennootschapsbelasting en eventueel salarisadministratie.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
              Een boekhouder met ervaring in BV&apos;s kan helpen met:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-ink-500">
              <li>De dagelijkse financiële administratie.</li>
              <li>Btw-aangiften en aangifte vennootschapsbelasting.</li>
              <li>De voorbereiding of opstelling van de jaarrekening.</li>
              <li>Administratie rond het salaris van een directeur-grootaandeelhouder (DGA).</li>
              <li>Administratieve verplichtingen bij personeel.</li>
              <li>Het bijhouden van financiële verplichtingen en betalingen.</li>
            </ul>
            <h3 className="mt-8 font-display text-2xl font-normal text-ink">
              Heb je voor een BV een accountant nodig?
            </h3>
            <div className="mt-3 space-y-4 text-[15px] leading-relaxed text-ink-500">
              <p>
                Niet iedere BV is verplicht een accountant in te schakelen. Voor de dagelijkse
                boekhouding is een accountant met een AA- of RA-titel doorgaans niet noodzakelijk.
              </p>
              <p>
                Of een wettelijke accountantscontrole verplicht is, hangt onder andere af van de
                omvang en omstandigheden van de onderneming.
              </p>
              <p>
                Het is daarom belangrijk om te zoeken naar een boekhouder of administratiekantoor met
                ervaring in jouw type BV en de werkzaamheden die je nodig hebt.
              </p>
            </div>
            <FormCta>Vind hulp bij de boekhouding van je BV</FormCta>
          </article>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <span className="block h-px w-10 bg-ember" aria-hidden />
          <DisplayHeading size="md" className="mt-6 max-w-[16ch]">
            Wat kost een <em>boekhouder</em>?
          </DisplayHeading>
          <div className="mt-4 max-w-2xl space-y-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            <p>
              De kosten van een boekhouder hangen af van je rechtsvorm, het aantal financiële
              transacties, de complexiteit van je administratie en de werkzaamheden die je wilt
              uitbesteden.
            </p>
            <p>
              Onderstaande bedragen zijn indicatieve tarieven voor een doorlopende samenwerking waarbij
              de boekhouding volledig wordt uitbesteed.
            </p>
          </div>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[36rem] border-y border-ink/10 text-left text-[15px]">
              <caption className="sr-only">Indicatieve kosten van een boekhouder per rechtsvorm</caption>
              <thead>
                <tr className="border-b border-ink/10">
                  <th scope="col" className="py-3 pr-6 font-medium text-ink">
                    Rechtsvorm
                  </th>
                  <th scope="col" className="py-3 pr-6 font-medium text-ink">
                    Kosten per maand
                  </th>
                  <th scope="col" className="py-3 font-medium text-ink">
                    Kosten per jaar
                  </th>
                </tr>
              </thead>
              <tbody className="text-ink-500">
                {[
                  ['Eenmanszaak / zzp', '€100 – €150', '€1.200 – €1.800'],
                  ['VOF', '€150 – €250', '€1.800 – €3.000'],
                  ['BV – werkmaatschappij', 'Vanaf €250', 'Vanaf €3.000'],
                  ['BV – holding', 'Vanaf €100', 'Vanaf €1.200'],
                ].map(([form, month, year]) => (
                  <tr key={form} className="border-b border-ink/10">
                    <th scope="row" className="py-4 pr-6 align-top font-medium text-ink">
                      {form}
                    </th>
                    <td className="py-4 pr-6 align-top">{month}</td>
                    <td className="py-4 align-top">{year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 max-w-3xl text-[13px] leading-relaxed text-ink-500">
            Bron: indicatieve tarieven van onze samenwerkingspartner WRKD B.V. De daadwerkelijke kosten
            zijn afhankelijk van jouw situatie en de afspraken met de boekhouder. Dit zijn geen bindende
            offertes. Vraag altijd of bedragen inclusief of exclusief btw zijn.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/boekhouder-kosten" className={btn.secondary}>
              Wat kost een boekhouder?
              <ArrowIcon />
            </Link>
            <Link href="/tools/boekhouder-kosten-calculator" className={btn.secondary}>
              Bereken jouw boekhoudkosten
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <DisplayHeading size="md" className="max-w-[20ch]">
            Zelf boekhouden of je boekhouding uitbesteden?
          </DisplayHeading>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-500">
            Twijfel je of je een boekhouder nodig hebt? Beide opties kunnen goed werken. De beste
            keuze hangt af van de omvang van je administratie, je kennis en de tijd die je beschikbaar
            hebt.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[36rem] border-y border-ink/10 text-left text-[15px]">
              <caption className="sr-only">Zelf boekhouden vergeleken met uitbesteden</caption>
              <thead>
                <tr className="border-b border-ink/10">
                  <th scope="col" className="w-1/2 py-3 pr-6 font-medium text-ink">
                    Zelf boekhouden
                  </th>
                  <th scope="col" className="w-1/2 py-3 font-medium text-ink">
                    Boekhouding uitbesteden
                  </th>
                </tr>
              </thead>
              <tbody className="text-ink-500">
                {[
                  ['Je houdt zelf inkomsten en uitgaven bij.', 'Een professional verwerkt de afgesproken administratie.'],
                  ['Je hebt meer directe controle over de verwerking.', 'Je besteedt minder tijd aan administratieve werkzaamheden.'],
                  ['Je moet zelf belastingregels en deadlines bijhouden.', 'Je kunt ondersteuning krijgen bij aangiften en verplichtingen.'],
                  ['Je betaalt mogelijk minder voor externe hulp.', 'Je betaalt voor de dienstverlening van een boekhouder.'],
                  [
                    'Geschikt bij een eenvoudige administratie en voldoende kennis.',
                    'Interessant bij tijdgebrek, complexiteit of behoefte aan ondersteuning.',
                  ],
                ].map(([self, outsource]) => (
                  <tr key={self} className="border-b border-ink/10">
                    <td className="py-4 pr-6 align-top leading-relaxed">{self}</td>
                    <td className="py-4 align-top leading-relaxed">{outsource}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 className="mt-10 font-display text-2xl font-normal text-ink">
            Je kunt ook een deel zelf blijven doen
          </h3>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-500">
            Je hoeft niet te kiezen tussen volledig zelf boekhouden en alles uitbesteden.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
            Een praktische combinatie voor veel ZZP&apos;ers is:
          </p>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-[15px] leading-relaxed text-ink-500">
            <li>Zelf facturen maken en versturen.</li>
            <li>Bonnetjes en zakelijke uitgaven bewaren.</li>
            <li>Banktransacties overzichtelijk bijhouden.</li>
            <li>De btw-aangifte of jaarafsluiting laten verzorgen door een boekhouder.</li>
          </ol>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink-500">
            Wil je weten welke software bij jouw situatie past? Bekijk dan{' '}
            <TextLink href="/boekhoudprogramma-vergelijken">boekhoudprogramma&apos;s vergelijken</TextLink>{' '}
            of onze gids over <TextLink href="/gidsen/boekhouding-zzp">boekhouding voor ZZP&apos;ers</TextLink>.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Waar moet je op letten bij het kiezen van een boekhouder?</DisplayHeading>
          <p className="mt-4 text-lg leading-relaxed text-ink-500">
            Een boekhouder vinden gaat niet alleen over de laagste prijs. Je wilt iemand die begrijpt
            hoe jouw onderneming werkt en duidelijke afspraken maakt.
          </p>
          <ol className="mt-8 space-y-6">
            {[
              [
                'Ervaring met jouw bedrijfsvorm',
                'Een boekhouder voor een eenmanszaak hoeft niet dezelfde expertise te hebben als een boekhouder voor een BV met meerdere werknemers. Vraag of het kantoor ervaring heeft met vergelijkbare ondernemingen.',
              ],
              [
                'Welke werkzaamheden zijn inbegrepen?',
                'Controleer of je betaalt voor alleen de dagelijkse administratie of ook voor btw-aangiften, jaarwerk en belastingaangiften.',
              ],
              [
                'Hoe lever je facturen en bonnetjes aan?',
                'Sommige boekhouders werken met een online boekhoudprogramma, terwijl andere ook losse documenten of exports accepteren. Bespreek vooraf hoe je jouw administratie aanlevert.',
              ],
              [
                'Bereikbaarheid en communicatie',
                'Wil je telefonisch kunnen overleggen, per e-mail vragen stellen of regelmatig inzicht krijgen in je cijfers? Maak hierover duidelijke afspraken.',
              ],
              [
                'Ervaring met jouw branche',
                'Een ondernemer in de bouw, horeca of zakelijke dienstverlening kan te maken hebben met andere administratieve aandachtspunten. Branchekennis kan daarom een voordeel zijn.',
              ],
              [
                'Duidelijke tarieven',
                'Vraag naar een offerte waarin staat wat inbegrepen is en wanneer aanvullende kosten worden berekend.',
              ],
            ].map(([heading, text], index) => (
              <li key={heading} className="border-t border-ink/10 pt-6">
                <h3 className="font-display text-2xl font-normal text-ink">
                  {index + 1}. {heading}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Boekhouder of accountant: wat is het verschil?</DisplayHeading>
          <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            <p>De termen boekhouder en accountant worden vaak door elkaar gebruikt, maar ze betekenen niet hetzelfde.</p>
            <p>
              Een boekhouder houdt zich doorgaans bezig met het verwerken en organiseren van de
              financiële administratie, het voorbereiden van cijfers en het ondersteunen bij
              belastingaangiften.
            </p>
            <p>
              Een accountant heeft een beschermde beroepstitel, zoals Accountant-Administratieconsulent
              (AA) of Registeraccountant (RA). Accountants kunnen onder meer administratieve,
              adviserende en assurancewerkzaamheden uitvoeren, afhankelijk van hun bevoegdheden en
              opdracht.
            </p>
            <p>
              Voor een eenvoudige ZZP-administratie is een accountant meestal niet noodzakelijk. Bij
              complexere vraagstukken of een verplichte accountantscontrole kunnen specifieke
              deskundigheid en bevoegdheden nodig zijn.
            </p>
            <p>Kijk daarom eerst welke werkzaamheden je nodig hebt en zoek vervolgens de juiste professional.</p>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <span className="block h-px w-10 bg-ember" aria-hidden />
          <DisplayHeading size="md" className="mb-8 mt-6">
            Veelgestelde vragen over een boekhouder vinden
          </DisplayHeading>
          <FaqList items={FAQS.map(({ q, a }) => ({ question: q, answer: a }))} />
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md" className="max-w-[18ch]">
            Vind een boekhouder die past bij jouw onderneming
          </DisplayHeading>
          <p className="mt-4 text-lg leading-relaxed text-ink-500">
            Of je nu net bent begonnen als ZZP&apos;er, je administratie wilt uitbesteden of een
            boekhouder voor je BV zoekt: via FactuurBaas kun je eenvoudig een aanvraag indienen.
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
            Gratis aanvragen. Geen verplichting om een boekhouder in te schakelen.
          </p>
          <a href="#boekhouder-formulier" className={`${btn.primary} mt-8`}>
            Vind mijn boekhouder
            <ArrowIcon />
          </a>
          <p className="mt-8 max-w-2xl text-[13px] leading-relaxed text-ink-500">
            FactuurBaas werkt voor deze aanvragen samen met WRKD B.V. Je gegevens worden na jouw
            toestemming doorgestuurd voor opvolging van je aanvraag. FactuurBaas kan hiervoor een
            vergoeding ontvangen. De genoemde tarieven zijn indicatief. De informatie op deze pagina is
            algemeen en vormt geen persoonlijk financieel of fiscaal advies.
          </p>
        </div>
      </section>
      <BookkeeperClusterLinks currentHref="/boekhouder-vinden" />
      <BookkeeperStickyCta />
    </div>
  );
}
