import Link from 'next/link';
import { Suspense } from 'react';
import { Search } from 'lucide-react';
import BookkeeperLeadForm from '@/components/leads/BookkeeperLeadForm';
import BookkeeperStickyCta from '@/components/leads/BookkeeperStickyCta';
import { ArrowIcon, DisplayHeading, FaqList, PageHeader, TrustList, btn } from '@/components/site/editorial';
import { siteOpenGraphImages, SITE_OG_IMAGE } from '@/lib/siteOg';

const title = 'Boekhouder vinden voor ZZP & MKB | FactuurBaas';
const description =
  'Boekhouder zoeken voor je eenmanszaak, VOF of BV? Vind hulp bij je administratie, btw-aangifte en jaarrekening. Gratis en vrijblijvend aanvragen.';

export const metadata = {
  title,
  description,
  keywords:
    'boekhouder vinden, boekhouder zoeken, boekhouder zzp, boekhouder eenmanszaak, boekhouder mkb, boekhouder voor bv',
  alternates: { canonical: 'https://factuurbaas.nl/boekhouder-vinden' },
  openGraph: {
    title,
    description,
    url: 'https://factuurbaas.nl/boekhouder-vinden',
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
    q: 'Hoe vind ik een goede boekhouder?',
    a: 'Bepaal eerst welke werkzaamheden je wilt uitbesteden, bijvoorbeeld btw-aangiften, jaarwerk of je volledige administratie. Kijk vervolgens naar ervaring met jouw bedrijfsvorm, tarieven, bereikbaarheid en de manier waarop je documenten aanlevert. Via FactuurBaas kun je vrijblijvend een aanvraag indienen om hulp te krijgen bij je zoektocht.',
  },
  {
    q: 'Wat kost een boekhouder voor een ZZP’er?',
    a: 'Dat hangt af van het aantal transacties, de werkzaamheden en de afspraken met het kantoor. Alleen hulp bij btw-aangiften is doorgaans goedkoper dan het volledig uitbesteden van de administratie. Vraag vooraf een duidelijke prijsopgave en controleer wat inbegrepen is.',
  },
  {
    q: 'Is een boekhouder verplicht voor ZZP’ers?',
    a: 'Nee, als ZZP’er ben je niet verplicht een boekhouder in te schakelen. Je bent wel verantwoordelijk voor een administratie die voldoet aan de wettelijke verplichtingen en voor het correct indienen van je belastingaangiften. Je kunt dit zelf doen of hulp inschakelen.',
  },
  {
    q: 'Wat is het verschil tussen een boekhouder en een accountant?',
    a: 'Een boekhouder verzorgt doorgaans de financiële administratie en ondersteunt bij aangiften. AA en RA zijn beschermde accountantstitels waarvoor specifieke opleiding, registratie en beroepsregels gelden. Niet iedere onderneming heeft een accountant nodig.',
  },
  {
    q: 'Kan ik alleen mijn btw-aangifte laten doen?',
    a: 'Ja, sommige boekhouders bieden ondersteuning bij afzonderlijke werkzaamheden, zoals de btw-aangifte of de jaarlijkse belastingaangifte. Vraag vooraf of dit mogelijk is en wat je zelf moet aanleveren.',
  },
  {
    q: 'Kan ik een boekhouder vinden voor mijn BV?',
    a: 'Ja, je kunt een aanvraag indienen voor een BV. Let bij de keuze op ervaring met vennootschapsbelasting, jaarrekeningen en eventuele salarisadministratie.',
  },
  {
    q: 'Moet mijn boekhouder bij mij in de buurt zitten?',
    a: 'Niet noodzakelijk. Veel administratie kan digitaal worden aangeleverd en besproken. Als je persoonlijk contact belangrijk vindt, kun je bij je aanvraag of het vervolggesprek aangeven dat je een boekhouder in de buurt zoekt.',
  },
  {
    q: 'Hoe werkt het vinden van een boekhouder via FactuurBaas?',
    a: 'Je vult je bedrijfsvorm, bedrijfsgegevens en contactgegevens in. FactuurBaas stuurt je aanvraag door naar samenwerkingspartner WRKD B.V., die contact met je kan opnemen over de mogelijkheden. Je beslist zelf of je vervolgens met een boekhouder wilt samenwerken.',
  },
  {
    q: 'Is een boekhouder vinden via FactuurBaas gratis?',
    a: 'Het indienen van een aanvraag via FactuurBaas is gratis en vrijblijvend. Wanneer je besluit met een boekhouder samen te werken, maak je zelf afspraken over de dienstverlening en bijbehorende kosten.',
  },
  {
    q: 'Welke gegevens moet ik invullen?',
    a: 'We vragen naar je bedrijfsvorm, naam, bedrijfsnaam, plaats, e-mailadres en telefoonnummer. Deze gegevens zijn nodig om je aanvraag te verwerken en contact met je op te kunnen nemen.',
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
        Vind hulp bij je boekhouding
      </p>
      <p className="mt-2 mb-4 text-sm leading-relaxed text-ink-500">
        Vertel ons welke bedrijfsvorm je hebt en laat je contactgegevens achter.
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
        title="Boekhouder vinden voor ZZP en MKB"
        size="lg"
        align="start"
        containerClassName="max-w-6xl"
        lead={
          <p>
            Zoek je een boekhouder voor je eenmanszaak, VOF of BV? Of je nu hulp nodig hebt bij je
            facturen, btw-aangifte, jaarrekening of volledige boekhouding: via FactuurBaas vraag je
            gratis en vrijblijvend hulp aan bij het vinden van een boekhouder die past bij jouw
            onderneming.
          </p>
        }
        aside={<LeadForm />}
      >
        <TrustList
          items={[
            'Gratis en vrijblijvend aanvragen',
            "Voor eenmanszaken, VOF's, stichtingen en BV's",
            'Binnen 1 minuut het formulier invullen',
          ]}
        />
      </PageHeader>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <span className="block h-px w-10 bg-ember" aria-hidden />
          <DisplayHeading size="md" className="mb-4 mt-6 max-w-[22ch]">
            Hoe werkt een boekhouder vinden via FactuurBaas?
          </DisplayHeading>
          <p className="max-w-2xl text-lg leading-relaxed text-ink-500">
            Een boekhouder zoeken hoeft niet ingewikkeld te zijn. Je hoeft niet zelf tientallen
            administratiekantoren te benaderen om een eerste stap te zetten.
          </p>
          <ol className="mt-10 grid gap-4 lg:grid-cols-3">
            {[
              [
                '1',
                'Vertel ons over je onderneming',
                'Selecteer je bedrijfsvorm en vul je bedrijfsnaam, plaats en contactgegevens in. De aanvraag duurt ongeveer één minuut.',
              ],
              [
                '2',
                'Je wordt benaderd over je aanvraag',
                'FactuurBaas stuurt je gegevens door naar onze samenwerkingspartner WRKD B.V. Je kunt vervolgens worden benaderd om je boekhoudkundige wensen te bespreken.',
              ],
              [
                '3',
                'Bespreek de mogelijkheden',
                'Je kunt aangeven welke werkzaamheden je wilt uitbesteden, zoals de btw-aangifte, jaarlijkse belastingaangifte of volledige administratie. Of je daadwerkelijk met een boekhouder gaat samenwerken, bepaal je zelf.',
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
          <FormCta>Vind een boekhouder</FormCta>
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
              De kosten van een boekhouder verschillen per onderneming. Een ZZP&apos;er met enkele
              facturen per maand heeft meestal een andere administratie dan een BV met personeel, veel
              transacties en meerdere belastingverplichtingen.
            </p>
            <p>
              Sommige boekhouders werken met een vast maandbedrag. Anderen rekenen per uur, per
              aangifte of per boekjaar.
            </p>
          </div>
          <h3 className="mt-10 font-display text-2xl font-normal text-ink">Waar hangt de prijs van af?</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[36rem] border-y border-ink/10 text-left text-[15px]">
              <caption className="sr-only">Factoren die de kosten van een boekhouder beïnvloeden</caption>
              <thead>
                <tr className="border-b border-ink/10">
                  <th scope="col" className="py-3 pr-6 font-medium text-ink">
                    Factor
                  </th>
                  <th scope="col" className="py-3 font-medium text-ink">
                    Invloed op de kosten
                  </th>
                </tr>
              </thead>
              <tbody className="text-ink-500">
                {[
                  ['Bedrijfsvorm', 'Een BV heeft doorgaans meer administratieve verplichtingen dan een eenmanszaak.'],
                  ['Aantal transacties', 'Meer facturen, bonnetjes en banktransacties betekenen vaak meer werk.'],
                  ['Werkzaamheden', 'Alleen btw-aangifte kost doorgaans minder dan volledige boekhouding.'],
                  ['Salarisadministratie', 'Loonadministratie kan extra kosten met zich meebrengen.'],
                  [
                    'Complexiteit',
                    'Buitenlandse transacties, meerdere activiteiten of bijzondere fiscale situaties kunnen extra werk opleveren.',
                  ],
                  ['Eigen voorbereiding', 'Een goed bijgehouden administratie kan de verwerking eenvoudiger maken.'],
                ].map(([factor, effect]) => (
                  <tr key={factor} className="border-b border-ink/10">
                    <th scope="row" className="py-4 pr-6 align-top font-medium text-ink">
                      {factor}
                    </th>
                    <td className="py-4 align-top leading-relaxed">{effect}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article>
              <h3 className="font-display text-2xl font-normal text-ink">Vast maandbedrag of uurtarief?</h3>
              <div className="mt-3 space-y-4 text-[15px] leading-relaxed text-ink-500">
                <p>
                  Bij een vast maandbedrag weet je vooraf beter waar je aan toe bent. Controleer wel
                  of de btw-aangiften, jaarafsluiting en belastingaangiften zijn inbegrepen.
                </p>
                <p>
                  Bij een uurtarief betaal je voor de daadwerkelijk bestede tijd. Dat kan aantrekkelijk
                  zijn wanneer je maar af en toe hulp nodig hebt.
                </p>
              </div>
            </article>
            <article>
              <h3 className="font-display text-2xl font-normal text-ink">Hoe voorkom je onverwachte kosten?</h3>
              <div className="mt-3 space-y-4 text-[15px] leading-relaxed text-ink-500">
                <p>
                  Vraag vooraf wat de boekhouder precies doet, welke werkzaamheden je zelf moet
                  uitvoeren en welke diensten apart worden gefactureerd.
                </p>
                <p>
                  Vergelijk niet alleen de prijs, maar ook de bereikbaarheid, ervaring en afspraken
                  over het aanleveren van je administratie.
                </p>
              </div>
            </article>
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
            FactuurBaas werkt voor deze aanvragen samen met WRKD B.V. Je gegevens worden na je
            toestemming doorgestuurd voor opvolging van je aanvraag. FactuurBaas kan hiervoor een
            vergoeding ontvangen. De informatie op deze pagina is algemeen en vormt geen persoonlijk
            fiscaal advies.
          </p>
        </div>
      </section>
      <BookkeeperStickyCta />
    </div>
  );
}
