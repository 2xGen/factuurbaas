import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { FACTUUR_MAKEN_GATE_FAQS } from '@/lib/factuurMakenGate';

const TOOL_HREF = '/create-invoice';

function Cta({ href = TOOL_HREF, label }) {
  return (
    <Button asChild size="lg" className="rounded-xl px-8">
      <Link href={href}>
        {label}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </Button>
  );
}

function BulletList({ items }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-slate-600">
          <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-warm-orange" />
          <span>{item}</span>
        </li>
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

export default function FactuurMakenSeoContent() {
  return (
    <div className="space-y-14">
      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Online een factuur maken
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Wil je snel een factuur maken zonder eerst een ingewikkeld boekhoudprogramma te
          installeren? Met de online factuurmaker van FactuurBaas maak je in een paar stappen een
          professionele factuur.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Je hoeft geen Word- of Excel-bestand te openen en ook geen betaald abonnement af te
          sluiten. Je vult je gegevens in, voegt de factuurregels toe en FactuurBaas berekent de
          bedragen en btw voor je.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Daarna kun je de factuur direct als PDF downloaden en naar je klant sturen.
        </p>

        <h3 className="mt-8 font-heading text-xl font-bold text-deep-blue sm:text-2xl">
          Zo maak je online een factuur
        </h3>
        <ol className="mt-6 space-y-4">
          {[
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
          ].map((step, index) => (
            <li
              key={step.title}
              className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5"
            >
              <p className="font-semibold text-deep-blue">
                <span className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-sm text-blue-700">
                  {index + 1}
                </span>
                {step.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">{step.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Zo kun je snel zelf een factuur maken zonder eerst een volledig boekhoudprogramma te
          gebruiken.
        </p>
        <div className="mt-6">
          <Cta label="Maak nu je factuur" />
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Gratis factuur maken zonder account
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Een account is niet nodig om met FactuurBaas een factuur te maken.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Je kunt de factuur invullen, controleren en als PDF downloaden zonder registratie. Dat is
          handig als je bijvoorbeeld één keer snel een factuur moet maken of nog niet met een
          boekhoudprogramma werkt.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Wil je je facturen bewaren en later opnieuw bekijken? Dan kun je{' '}
          <Link href="/login?next=/create-invoice" className="font-medium text-warm-orange hover:underline">
            gratis een account aanmaken
          </Link>
          . Met een account kun je je administratie makkelijker bijhouden en heb je toegang tot
          extra functies van FactuurBaas.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Gratis factuurprogramma voor zzp&apos;ers
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          FactuurBaas is meer dan alleen een losse factuurmaker. Je kunt het gebruiken als
          eenvoudig gratis factuurprogramma voor je administratie.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Voor zzp&apos;ers en kleine ondernemers kan een uitgebreid boekhoudpakket onnodig
          ingewikkeld zijn als je vooral professionele facturen wilt maken.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">Met FactuurBaas kun je onder andere:</p>
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
        <p className="mt-4 text-slate-600 leading-relaxed">
          Je kunt dus beginnen met alleen een factuur maken en later, wanneer je administratie
          groeit, meer functies gebruiken.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Factuur maken als zzp&apos;er
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Als zzp&apos;er stuur je waarschijnlijk regelmatig facturen naar klanten. Een goede
          factuur hoeft niet ingewikkeld te zijn, maar moet wel de juiste gegevens bevatten.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">Denk bijvoorbeeld aan:</p>
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
        <p className="mt-4 text-slate-600 leading-relaxed">
          Welke gegevens precies op je factuur moeten staan, hangt af van je situatie.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Meer weten? Bekijk{' '}
          <Link href="/blogs/factuur-maken-zzp" className="font-medium text-warm-orange hover:underline">
            wat er op een factuur moet staan
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Zelf een factuur maken
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Je kunt op verschillende manieren zelf een factuur maken. Bijvoorbeeld met Word, Excel,
          een template of een online factuurprogramma.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Het belangrijkste is dat je factuur professioneel is opgebouwd en de benodigde gegevens
          bevat. Met een online factuurmaker heb je het voordeel dat je niet zelf alle berekeningen
          en opmaak hoeft te doen. FactuurBaas berekent de btw automatisch en zorgt voor een vaste
          professionele opmaak.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Dat verkleint de kans op eenvoudige reken- of opmaakfouten en bespaart tijd wanneer je
          regelmatig facturen verstuurt.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Factuur maken in Word of Excel
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Een factuur maken in Word of Excel kan prima wanneer je af en toe een factuur verstuurt.
          Je moet dan wel zelf zorgen voor de opmaak, berekeningen en het bijhouden van
          factuurnummers. Bij veel facturen wordt dat al snel onhandig.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Een online factuurmaker kan dan praktischer zijn:
        </p>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[320px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 font-semibold text-deep-blue">Word / Excel</th>
                <th className="px-4 py-3 font-semibold text-deep-blue">FactuurBaas</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map(([left, right]) => (
                <tr key={left} className="border-b border-slate-100 last:border-0">
                  <td className="px-4 py-3 text-slate-600">{left}</td>
                  <td className="px-4 py-3 font-medium text-slate-700">{right}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Wil je liever met een template werken? Bekijk onze{' '}
          <Link href="/factuur-template" className="font-medium text-warm-orange hover:underline">
            gratis factuurtemplates
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Factuur opmaken
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Een professionele factuur hoeft niet overdreven uitgebreid te zijn. De belangrijkste
          informatie moet duidelijk zichtbaar zijn en de klant moet in één oogopslag kunnen zien
          wat hij moet betalen.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Een goede factuur bevat daarom een duidelijke structuur:
        </p>
        <ul className="mt-4 space-y-3 text-slate-600">
          <li>
            <strong className="text-deep-blue">Factuurgegevens</strong> — factuurnummer,
            factuurdatum en eventuele vervaldatum.
          </li>
          <li>
            <strong className="text-deep-blue">Gegevens van jou en je klant</strong> — naam, adres
            en relevante bedrijfsgegevens.
          </li>
          <li>
            <strong className="text-deep-blue">Factuurregels</strong> — een duidelijke omschrijving
            van de geleverde producten of diensten, met aantallen en prijzen.
          </li>
          <li>
            <strong className="text-deep-blue">Btw en totaalbedrag</strong> — het bedrag exclusief
            btw, de btw en het totaal inclusief btw.
          </li>
          <li>
            <strong className="text-deep-blue">Betaling</strong> — bijvoorbeeld je IBAN,
            betaaltermijn en eventuele betalingsreferentie.
          </li>
        </ul>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Met de templates van FactuurBaas kun je kiezen uit verschillende stijlen zonder zelf de
          volledige factuuropmaak te hoeven ontwerpen. Bekijk{' '}
          <Link href="/factuur-voorbeeld" className="font-medium text-warm-orange hover:underline">
            factuurvoorbeelden
          </Link>{' '}
          en kies de stijl die bij jouw bedrijf past.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Factuur als PDF maken
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Een PDF is handig om een factuur naar je klant te sturen omdat de opmaak behouden blijft.
          Met FactuurBaas kun je je factuur direct als PDF downloaden nadat je hem hebt ingevuld.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Je kunt de PDF vervolgens bijvoorbeeld per e-mail naar je klant sturen of op je eigen
          computer bewaren.
        </p>
        <div className="mt-6">
          <Cta label="Maak gratis een PDF-factuur" />
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Online factureren zonder boekhoudprogramma
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Je hebt niet altijd een uitgebreid boekhoudprogramma nodig om een factuur te maken.
          Wanneer je bijvoorbeeld net bent gestart als zzp&apos;er en slechts enkele facturen per
          maand verstuurt, kan een eenvoudige online factuurmaker voldoende zijn.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          FactuurBaas is bedoeld voor ondernemers die snel een professionele factuur willen maken
          zonder eerst een uitgebreid boekhoudpakket te moeten leren gebruiken. Je kunt bovendien
          gratis beginnen.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Van factuur maken naar je administratie
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Een factuur maken is slechts een onderdeel van je administratie. Wanneer je bedrijf
          groeit, wil je waarschijnlijk ook je klanten, openstaande facturen, betalingen en
          btw-overzicht bijhouden.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Daarom kun je binnen FactuurBaas niet alleen losse facturen maken, maar je facturen ook
          bewaren en beheren met een gratis account. Zo hoef je niet voor iedere nieuwe factuur
          opnieuw een document in Word of Excel te maken.
        </p>
        <div className="mt-6">
          <Cta href="/login?next=/dashboard" label="Maak gratis een account aan" />
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Veelgestelde vragen over facturen maken
        </h2>
        <div className="mt-6 space-y-4">
          {FACTUUR_MAKEN_GATE_FAQS.map(({ q, a }) => (
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
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                {a}
                {q.includes('op een factuur staan') && (
                  <>
                    {' '}
                    <Link
                      href="/blogs/factuur-maken-zzp"
                      className="font-medium text-warm-orange hover:underline"
                    >
                      Lees ook: Wat moet er op een factuur staan?
                    </Link>
                  </>
                )}
                {q.includes('offerte') && (
                  <>
                    {' '}
                    <Link
                      href="/tools/offerte-maker"
                      className="font-medium text-warm-orange hover:underline"
                    >
                      Maak een gratis offerte
                    </Link>
                  </>
                )}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Handige factuurtools
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Naast de factuurmaker vind je op FactuurBaas verschillende gratis tools voor je
          administratie.
        </p>
        <ul className="mt-4 space-y-3">
          {TOOL_LINKS.map((tool) => (
            <li key={tool.href} className="text-slate-600">
              <Link href={tool.href} className="font-medium text-warm-orange hover:underline">
                {tool.label}
              </Link>
              {' — '}
              {tool.text}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Meer over facturen
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Wil je eerst meer weten over facturen, voordat je er een maakt? Bekijk dan onze
          praktische uitleg en voorbeelden.
        </p>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {MORE_LINKS.map((link) => (
            <Link
              key={`${link.href}-${link.label}`}
              href={link.href}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-warm-orange/40 hover:text-warm-orange"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
