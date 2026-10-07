import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { FACTUUR_MAKEN_GATE_FAQS } from '@/lib/factuurMakenGate';
import { ArrowIcon, btn, FaqList } from '@/components/site/editorial';

const TOOL_HREF = '/create-invoice';

const PROSE =
  'article-body prose prose-lg max-w-none prose-p:leading-[1.75] prose-h2:text-[1.85rem] sm:prose-h2:text-[2.15rem] prose-h3:text-[1.35rem] [&>section:first-child>h2:first-child]:mt-0';

const INLINE_LINK =
  'font-medium text-ink underline decoration-ember/45 underline-offset-4 transition-colors hover:text-ember-600 hover:decoration-ember';

function Cta({ href = TOOL_HREF, label }) {
  return (
    <div className="not-prose my-8 flex">
      <Link href={href} className={`${btn.primary} w-full text-center sm:w-auto`}>
        {label}
        <ArrowIcon />
      </Link>
    </div>
  );
}

function BulletList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

const COMPARISON_ROWS = [
  ['Zelf template maken of aanpassen', 'Professionele templates'],
  ['Zelf btw berekenen', 'Automatische berekening'],
  ['Factuur zelf opslaan', 'Facturen kunnen worden bewaard'],
  ['Zelf factuurnummers bijhouden', 'Facturen beheren'],
  ['PDF meestal zelf maken', 'Direct als PDF downloaden'],
  ['Geen online administratie', 'Online facturen beheren'],
];

const TOOL_LINKS = [
  { label: 'BTW-calculator', href: '/tools/btw-calculator', text: 'Bereken btw snel over een bedrag.' },
  { label: 'Offerte maken', href: '/tools/offerte-maker', text: 'Maak online een professionele offerte.' },
  { label: 'Uurtarief berekenen', href: '/tools/uurtarief-calculator', text: 'Bereken welk uurtarief bij je gewenste inkomen past.' },
  { label: 'Betalingstermijn berekenen', href: '/tools/betaaltermijn-calculator', text: 'Bereken wanneer een factuur betaald moet zijn.' },
  { label: 'Marge berekenen', href: '/tools/marge-calculator', text: 'Bereken je brutomarge.' },
  { label: 'Factuurnummer genereren', href: '/tools/factuurnummer-generator', text: 'Genereer eenvoudig een volgend factuurnummer.' },
];

const MORE_LINKS = [
  { label: 'Factuur voorbeeld', href: '/factuur-voorbeeld' },
  { label: 'Factuur voorbeeld zzp', href: '/voorbeeld' },
  { label: 'Gratis factuur template', href: '/factuur-template' },
  { label: 'Wat moet er op een factuur staan?', href: '/blogs/factuur-maken-zzp' },
  { label: 'Factuur maken zonder account', href: '/blogs/factureren-zonder-account' },
  { label: 'Factuur maken als zzp\'er', href: '/factuur-maken/zzp' },
  { label: 'Factuur met btw maken', href: '/blogs/btw-factuur-zzp' },
  { label: 'Factuur zonder btw maken', href: '/factuur-template/zonder-btw' },
  { label: 'Voorschotfactuur maken', href: '/blogs/factuur-maken-zzp' },
  { label: 'Creditfactuur maken', href: '/blogs/factuur-fouten-voorkomen' },
  { label: 'Factuur met betalingstermijn', href: '/tools/betaaltermijn-calculator' },
  { label: 'Factuur naar het buitenland', href: '/blogs/buitenlandse-klanten-factureren' },
];

const STEPS = [
  {
    title: 'Vul je bedrijfsgegevens in',
    text: 'Vul bijvoorbeeld je bedrijfsnaam, adres, KvK-nummer en btw-nummer in.',
  },
  {
    title: 'Voeg je klant en factuurregels toe',
    text: 'Vul de gegevens van je klant in en voeg de producten of diensten toe waarvoor je factureert. Je kunt daarbij onder andere aantallen, prijzen en btw invullen.',
  },
  {
    title: 'Controleer en download je factuur',
    text: 'Controleer de gegevens, kies eventueel een andere factuurstijl en download je factuur als PDF.',
  },
];

export default function FactuurMakenSeoContent() {
  return (
    <div className={PROSE}>
      <section>
        <h2>Online een factuur maken</h2>
        <p>
          Wil je snel een factuur maken zonder eerst een ingewikkeld boekhoudprogramma te
          installeren? Met de online factuurmaker van FactuurBaas maak je in een paar stappen een
          professionele factuur.
        </p>
        <p>
          Je hoeft geen Word- of Excel-bestand te openen en ook geen betaald abonnement af te
          sluiten. Je vult je gegevens in, voegt de factuurregels toe en FactuurBaas berekent de
          bedragen en btw voor je.
        </p>
        <p>Daarna kun je de factuur direct als PDF downloaden en naar je klant sturen.</p>

        <h3>Zo maak je online een factuur</h3>
        <ol className="not-prose my-8 border-t border-ink/15">
          {STEPS.map((step, index) => (
            <li
              key={step.title}
              className="grid grid-cols-[2.75rem_1fr] gap-x-4 border-b border-ink/15 py-6 sm:grid-cols-[4rem_1fr]"
            >
              <span
                className="font-display text-[1.75rem] italic leading-none text-ember sm:text-[2rem]"
                aria-hidden
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <p className="font-display text-[1.3rem] leading-snug tracking-[-0.015em] text-ink">
                  <span className="sr-only">{index + 1}. </span>
                  {step.title}
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-500 sm:text-base">
                  {step.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <p>
          Zo kun je snel zelf een factuur maken zonder eerst een volledig boekhoudprogramma te
          gebruiken.
        </p>
        <Cta label="Maak nu je factuur" />
      </section>

      <section>
        <h2>Gratis factuur maken zonder account</h2>
        <p>Een account is niet nodig om met FactuurBaas een factuur te maken.</p>
        <p>
          Je kunt de factuur invullen, controleren en als PDF downloaden zonder registratie. Dat is
          handig als je bijvoorbeeld één keer snel een factuur moet maken of nog niet met een
          boekhoudprogramma werkt.
        </p>
        <p>
          Wil je je facturen bewaren en later opnieuw bekijken? Dan kun je{' '}
          <Link href="/login?next=/create-invoice">gratis een account aanmaken</Link>. Met een
          account kun je je administratie makkelijker bijhouden en heb je toegang tot extra functies
          van FactuurBaas.
        </p>
      </section>

      <section>
        <h2>Gratis factuurprogramma voor zzp&apos;ers</h2>
        <p>
          FactuurBaas is meer dan alleen een losse factuurmaker. Je kunt het gebruiken als
          eenvoudig gratis factuurprogramma voor je administratie.
        </p>
        <p>
          Voor zzp&apos;ers en kleine ondernemers kan een uitgebreid boekhoudpakket onnodig
          ingewikkeld zijn als je vooral professionele facturen wilt maken.
        </p>
        <p>Met FactuurBaas kun je onder andere:</p>
        <BulletList
          items={[
            'facturen maken en bewaren',
            'klantgegevens beheren',
            'facturen als betaald of openstaand markeren',
            'btw-bedragen bijhouden',
            'factuurtemplates gebruiken',
            'offertes maken',
            'je facturen als PDF downloaden',
          ]}
        />
        <p>
          Je kunt dus beginnen met alleen een factuur maken en later, wanneer je administratie
          groeit, meer functies gebruiken.
        </p>
      </section>

      <section>
        <h2>Factuur maken als zzp&apos;er</h2>
        <p>
          Als zzp&apos;er stuur je waarschijnlijk regelmatig facturen naar klanten. Een goede
          factuur hoeft niet ingewikkeld te zijn, maar moet wel de juiste gegevens bevatten.
        </p>
        <p>Denk bijvoorbeeld aan:</p>
        <BulletList
          items={[
            'je bedrijfsnaam en adres',
            'je KvK-nummer',
            'je btw-identificatienummer, wanneer van toepassing',
            'de gegevens van je klant',
            'een uniek factuurnummer',
            'de factuurdatum',
            'de datum waarop je de dienst of het product hebt geleverd, wanneer van toepassing',
            'een duidelijke omschrijving van de producten of diensten',
            'het bedrag exclusief btw',
            'het btw-bedrag',
            'het totaalbedrag inclusief btw',
            'de betalingstermijn en betaalgegevens',
          ]}
        />
        <p>Welke gegevens precies op je factuur moeten staan, hangt af van je situatie.</p>
        <p>
          Meer weten? Bekijk{' '}
          <Link href="/blogs/factuur-maken-zzp">wat er op een factuur moet staan</Link>.
        </p>
      </section>

      <section>
        <h2>Zelf een factuur maken</h2>
        <p>
          Je kunt op verschillende manieren zelf een factuur maken. Bijvoorbeeld met Word, Excel,
          een template of een online factuurprogramma.
        </p>
        <p>
          Het belangrijkste is dat je factuur professioneel is opgebouwd en de benodigde gegevens
          bevat. Met een online factuurmaker heb je het voordeel dat je niet zelf alle berekeningen
          en opmaak hoeft te doen. FactuurBaas berekent de btw automatisch en zorgt voor een vaste
          professionele opmaak.
        </p>
        <p>
          Dat verkleint de kans op eenvoudige reken- of opmaakfouten en bespaart tijd wanneer je
          regelmatig facturen verstuurt.
        </p>
      </section>

      <section>
        <h2>Factuur maken in Word of Excel</h2>
        <p>
          Een factuur maken in Word of Excel kan prima wanneer je af en toe een factuur verstuurt.
          Je moet dan wel zelf zorgen voor de opmaak, berekeningen en het bijhouden van
          factuurnummers. Bij veel facturen wordt dat al snel onhandig.
        </p>
        <p>Een online factuurmaker kan dan praktischer zijn:</p>
        <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-ink/[0.08] bg-white">
          <table className="w-full min-w-[320px] text-left text-sm sm:text-[15px]">
            <thead>
              <tr className="border-b border-ink/15">
                <th className="px-5 py-3.5 font-mono text-[11px] font-normal uppercase tracking-[0.14em] text-ink-400">
                  Word / Excel
                </th>
                <th className="bg-paper-50 px-5 py-3.5 font-mono text-[11px] font-normal uppercase tracking-[0.14em] text-ember">
                  FactuurBaas
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map(([left, right]) => (
                <tr key={left} className="border-b border-ink/[0.07] last:border-0">
                  <td className="px-5 py-3.5 text-ink-500">{left}</td>
                  <td className="bg-paper-50 px-5 py-3.5 font-medium text-ink">{right}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Wil je liever met een template werken? Bekijk onze{' '}
          <Link href="/factuur-template">gratis factuurtemplates</Link>.
        </p>
      </section>

      <section>
        <h2>Factuur opmaken</h2>
        <p>
          Een professionele factuur hoeft niet overdreven uitgebreid te zijn. De belangrijkste
          informatie moet duidelijk zichtbaar zijn en de klant moet in één oogopslag kunnen zien
          wat hij moet betalen.
        </p>
        <p>Een goede factuur bevat daarom een duidelijke structuur:</p>
        <ul>
          <li>
            <strong>Factuurgegevens</strong> — factuurnummer, factuurdatum en eventuele vervaldatum.
          </li>
          <li>
            <strong>Gegevens van jou en je klant</strong> — naam, adres en relevante
            bedrijfsgegevens.
          </li>
          <li>
            <strong>Factuurregels</strong> — een duidelijke omschrijving van de geleverde producten
            of diensten, met aantallen en prijzen.
          </li>
          <li>
            <strong>Btw en totaalbedrag</strong> — het bedrag exclusief btw, de btw en het totaal
            inclusief btw.
          </li>
          <li>
            <strong>Betaling</strong> — bijvoorbeeld je IBAN, betaaltermijn en eventuele
            betalingsreferentie.
          </li>
        </ul>
        <p>
          Met de templates van FactuurBaas kun je kiezen uit verschillende stijlen zonder zelf de
          volledige factuuropmaak te hoeven ontwerpen. Bekijk{' '}
          <Link href="/factuur-voorbeeld">factuurvoorbeelden</Link> en kies de stijl die bij jouw
          bedrijf past.
        </p>
      </section>

      <section>
        <h2>Factuur als PDF maken</h2>
        <p>
          Een PDF is handig om een factuur naar je klant te sturen omdat de opmaak behouden blijft.
          Met FactuurBaas kun je je factuur direct als PDF downloaden nadat je hem hebt ingevuld.
        </p>
        <p>
          Je kunt de PDF vervolgens bijvoorbeeld per e-mail naar je klant sturen of op je eigen
          computer bewaren.
        </p>
        <Cta label="Maak gratis een PDF-factuur" />
      </section>

      <section>
        <h2>Online factureren zonder boekhoudprogramma</h2>
        <p>
          Je hebt niet altijd een uitgebreid boekhoudprogramma nodig om een factuur te maken.
          Wanneer je bijvoorbeeld net bent gestart als zzp&apos;er en slechts enkele facturen per
          maand verstuurt, kan een eenvoudige online factuurmaker voldoende zijn.
        </p>
        <p>
          FactuurBaas is bedoeld voor ondernemers die snel een professionele factuur willen maken
          zonder eerst een uitgebreid boekhoudpakket te moeten leren gebruiken. Je kunt bovendien
          gratis beginnen.
        </p>
      </section>

      <section>
        <h2>Van factuur maken naar je administratie</h2>
        <p>
          Een factuur maken is slechts een onderdeel van je administratie. Wanneer je bedrijf
          groeit, wil je waarschijnlijk ook je klanten, openstaande facturen, betalingen en
          btw-overzicht bijhouden.
        </p>
        <p>
          Daarom kun je binnen FactuurBaas niet alleen losse facturen maken, maar je facturen ook
          bewaren en beheren met een gratis account. Zo hoef je niet voor iedere nieuwe factuur
          opnieuw een document in Word of Excel te maken.
        </p>
        <Cta href="/login?next=/dashboard" label="Maak gratis een account aan" />
      </section>

      <section>
        <h2>Veelgestelde vragen over facturen maken</h2>
        <FaqList
          className="not-prose mt-8"
          items={FACTUUR_MAKEN_GATE_FAQS.map(({ q, a }) => ({
            question: q,
            answer: (
              <p>
                {a}
                {q.includes('op een factuur staan') && (
                  <>
                    {' '}
                    <Link href="/blogs/factuur-maken-zzp" className={INLINE_LINK}>
                      Lees ook: Wat moet er op een factuur staan?
                    </Link>
                  </>
                )}
                {q.includes('offerte') && (
                  <>
                    {' '}
                    <Link href="/tools/offerte-maker" className={INLINE_LINK}>
                      Maak een gratis offerte
                    </Link>
                  </>
                )}
              </p>
            ),
          }))}
        />
      </section>

      <section>
        <h2>Handige factuurtools</h2>
        <p>
          Naast de factuurmaker vind je op FactuurBaas verschillende gratis tools voor je
          administratie.
        </p>
        <ul className="not-prose mt-6 grid border-t border-ink/10 sm:grid-cols-2 sm:gap-x-10">
          {TOOL_LINKS.map((tool) => (
            <li key={tool.href} className="border-b border-ink/10">
              <Link
                href={tool.href}
                className="group flex items-start justify-between gap-4 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
              >
                <span>
                  <span className="block font-medium text-ink transition-colors group-hover:text-ember-600">
                    {tool.label}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-ink-500">
                    <span className="sr-only"> — </span>
                    {tool.text}
                  </span>
                </span>
                <ArrowUpRight
                  className="mt-1 h-4 w-4 shrink-0 text-ember transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Meer over facturen</h2>
        <p>
          Wil je eerst meer weten over facturen, voordat je er een maakt? Bekijk dan onze
          praktische uitleg en voorbeelden.
        </p>
        <div className="not-prose mt-6 flex flex-wrap gap-2.5">
          {MORE_LINKS.map((link) => (
            <Link
              key={`${link.href}-${link.label}`}
              href={link.href}
              className="rounded-full border border-ink/15 bg-white px-4 py-2 text-sm text-ink-700 transition-colors hover:border-ink/35 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
