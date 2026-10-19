import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const linkClass = 'text-warm-orange hover:underline';

function TextLink({ href, children }) {
  return (
    <Link href={href} className={linkClass}>
      {children}
    </Link>
  );
}

function Cta({ href, label }) {
  return (
    <div className="my-8 text-center">
      <Button asChild className="bg-warm-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg">
        <Link href={href}>{label}</Link>
      </Button>
    </div>
  );
}

function DataTable({ headers, rows, align }) {
  return (
    <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
      <table className="w-full min-w-[320px] text-sm text-slate-700 sm:text-base">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            {headers.map((header, index) => (
              <th
                key={header}
                className={`px-4 py-3 font-semibold text-deep-blue ${align?.[index] === 'right' ? 'text-right' : 'text-left'}`}
                scope="col"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="border-b border-slate-100 last:border-0">
              {row.map((cell, index) => (
                <td key={`${row[0]}-${index}`} className={`px-4 py-3 ${align?.[index] === 'right' ? 'text-right' : ''}`}>
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

export const facturenEnBtwAangifteArticle = {
  slug: 'facturen-en-btw-aangifte',
  relatedSlugs: [
    'factuur-verkeerd-geboekt',
    'facturen-verwerken-boekhouding',
    'facturen-bijhouden-zzp',
    'btw-factuur-zzp',
  ],
  metaTitle: "Facturen en btw-aangifte als zzp'er: uitleg",
  title: "Facturen en btw-aangifte: wat moet je als zzp'er weten?",
  excerpt:
    'Welke facturen tellen mee voor je btw-aangifte? Lees hoe je omzetbelasting berekent, inkoopfacturen verwerkt en veelgemaakte fouten voorkomt.',
  keywords:
    "facturen btw aangifte, btw aangifte zzp, verkoopfacturen btw, inkoopfacturen btw, factuurstelsel, voorbelasting aftrekken",
  image: {
    url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/Facturen%20en%20btw%20aangifte.jpg',
    alt: "Zzp'er met facturen, klaar om de btw-aangifte voor te bereiden.",
  },
  datePublished: '2026-10-18',
  dateModified: '2026-10-18',
  faq: [
    {
      question: 'Moet ik btw aangeven over een factuur die nog niet betaald is?',
      answer:
        'Bij het factuurstelsel doorgaans wel. De btw hoort in beginsel bij het juiste factuurtijdvak, ook wanneer de klant later betaalt. Voor het kasstelsel en bijzondere situaties gelden andere regels.',
    },
    {
      question: 'Mag ik btw aftrekken van alle zakelijke facturen?',
      answer: 'Nee. Je mag alleen btw aftrekken wanneer je aan de voorwaarden voor aftrek van voorbelasting voldoet.',
    },
    {
      question: 'Wat als ik een factuur vergeet in mijn btw-aangifte?',
      answer:
        'Dan moet je beoordelen of je de fout in een volgende aangifte kunt corrigeren of een suppletie moet indienen.',
    },
    {
      question: 'Kan ik zelf mijn btw-aangifte doen?',
      answer:
        "Ja. Veel zzp'ers verzorgen hun btw-aangifte zelf. Bij ingewikkelde situaties kan een boekhouder ondersteuning bieden.",
    },
    {
      question: 'Moet ik btw-aangifte doen als ik de KOR gebruik?',
      answer:
        'Bij deelname aan de KOR hoef je doorgaans geen reguliere btw-aangifte te doen. Er bestaan uitzonderingen, bijvoorbeeld bij bepaalde internationale transacties.',
    },
    {
      question: 'Wat is het verschil tussen btw op verkoopfacturen en inkoopfacturen?',
      answer:
        'Btw op verkoopfacturen is vaak btw die je moet afdragen. Btw op inkoopfacturen kan onder voorwaarden aftrekbare voorbelasting zijn.',
    },
    {
      question: 'Kan FactuurBaas mijn btw-aangifte indienen?',
      answer:
        'FactuurBaas helpt je met facturen, administratieve gegevens en btw-berekeningen, maar dient niet automatisch je btw-aangifte in bij de Belastingdienst.',
    },
  ],
  content: (
    <>
      <p>
        Als zzp&apos;er verstuur je facturen naar klanten en ontvang je facturen van leveranciers. Maar welke facturen
        moet je meenemen in je btw-aangifte? En wat gebeurt er als een klant nog niet heeft betaald?
      </p>
      <p>
        Voor veel ondernemers is de btw-aangifte een terugkerend onderdeel van hun administratie. Je moet bepalen
        hoeveel btw je over je verkopen verschuldigd bent en hoeveel btw je over zakelijke inkopen mag aftrekken.
      </p>
      <p>
        In dit artikel leggen we uit hoe facturen en btw-aangifte samenhangen, welke gegevens je moet bijhouden en hoe
        je veelgemaakte fouten voorkomt. Hoe je facturen in de administratie zet, lees je in{' '}
        <TextLink href="/blogs/facturen-verwerken-boekhouding">facturen verwerken in je boekhouding</TextLink>.
      </p>

      <h2>Hoe werken facturen en btw-aangifte?</h2>
      <p>
        De btw-aangifte is de aangifte waarmee je als ondernemer de omzetbelasting over een bepaalde periode berekent en
        opgeeft aan de Belastingdienst.
      </p>
      <p>Daarbij zijn twee soorten facturen belangrijk:</p>
      <ul>
        <li>
          <strong>Verkoopfacturen:</strong> facturen die je aan klanten stuurt. Hierover ben je vaak btw verschuldigd.
        </li>
        <li>
          <strong>Inkoopfacturen:</strong> facturen die je ontvangt van leveranciers. De btw hierop mag je onder bepaalde
          voorwaarden als voorbelasting aftrekken.
        </li>
      </ul>
      <p>
        Het verschil tussen de verschuldigde btw en de aftrekbare voorbelasting bepaalt hoeveel btw je moet betalen of
        terugkrijgt.
      </p>

      <h3>Voorbeeld btw berekenen</h3>
      <p>Stel dat je in één kwartaal de volgende bedragen hebt:</p>
      <DataTable
        headers={['Onderdeel', 'Bedrag']}
        align={['left', 'right']}
        rows={[
          ['Omzet exclusief btw', '€10.000'],
          ['Verschuldigde btw (21%)', '€2.100'],
          ['Aftrekbare btw op inkopen', '€600'],
          ['Per saldo te betalen btw', '€1.500'],
        ]}
      />
      <p>In dit voorbeeld betaal je €1.500 btw aan de Belastingdienst.</p>
      <p>
        Dit is een vereenvoudigd voorbeeld. Bij vrijgestelde omzet, buitenlandse transacties, de
        kleineondernemersregeling (KOR) of andere bijzondere situaties kan de berekening anders zijn.
      </p>

      <h2>Welke verkoopfacturen tellen mee voor je btw-aangifte?</h2>
      <p>Bij de meeste Nederlandse ondernemers geldt het factuurstelsel.</p>
      <p>
        Dat betekent dat de btw doorgaans wordt aangegeven in het tijdvak waarin je de factuur hebt uitgereikt of
        uiterlijk had moeten uitreiken.
      </p>
      <p>De betaaldatum is daarbij meestal niet bepalend.</p>

      <h3>Voorbeeld: factuur nog niet betaald</h3>
      <p>Je verstuurt op 20 maart een factuur:</p>
      <ul>
        <li>Bedrag exclusief btw: €1.000</li>
        <li>Btw 21%: €210</li>
        <li>Totaal: €1.210</li>
        <li>Betaaltermijn: 30 dagen</li>
      </ul>
      <p>Je klant betaalt pas op 19 april.</p>
      <p>
        Wanneer het factuurstelsel van toepassing is en de factuur terecht in maart is uitgereikt, hoort de €210 btw in
        beginsel bij het eerste kwartaal, ook al ontvang je de betaling pas in april.
      </p>
      <p>
        Daarom is het belangrijk om gefactureerde omzet en ontvangen betalingen apart bij te houden. Hoe je dat
        overzicht houdt, lees je in{' '}
        <TextLink href="/blogs/facturen-bijhouden-zzp">facturen bijhouden als zzp&apos;er</TextLink>.
      </p>

      <h3>Wanneer geldt het kasstelsel?</h3>
      <p>
        Voor bepaalde ondernemers en activiteiten geldt het kasstelsel. Daarbij is het moment waarop je de betaling
        ontvangt doorgaans bepalend voor wanneer je de btw moet aangeven.
      </p>
      <p>
        Of het kasstelsel voor jou geldt, hangt af van je activiteiten en de toepasselijke regels. Je kunt dus niet
        uitsluitend op basis van je eigen voorkeur bepalen dat je btw pas bij betaling aangeeft.
      </p>

      <h2>Welke inkoopfacturen mag je aftrekken?</h2>
      <p>
        Ontvang je een factuur voor een zakelijke aankoop? Dan staat daarop mogelijk btw die je als voorbelasting mag
        aftrekken.
      </p>
      <p>Denk aan:</p>
      <ul>
        <li>Zakelijke software en abonnementen</li>
        <li>Kantoorbenodigdheden</li>
        <li>Materialen voor opdrachten</li>
        <li>Zakelijke apparatuur</li>
        <li>Diensten van andere ondernemers</li>
        <li>Boekhoudkundige ondersteuning</li>
      </ul>
      <p>De btw is niet automatisch aftrekbaar omdat een factuur op naam van je onderneming staat.</p>
      <p>Er gelden voorwaarden, waaronder het zakelijke gebruik, de aard van je activiteiten en de factuureisen.</p>

      <h3>Voorbeeld inkoopfactuur</h3>
      <p>Je koopt zakelijke materialen voor €500 exclusief 21% btw.</p>
      <DataTable
        headers={['Onderdeel', 'Bedrag']}
        align={['left', 'right']}
        rows={[
          ['Materialen', '€500'],
          ['Btw 21%', '€105'],
          ['Totaal', '€605'],
        ]}
      />
      <p>
        Wanneer de aankoop volledig wordt gebruikt voor activiteiten die recht geven op btw-aftrek en aan de overige
        voorwaarden is voldaan, kun je de €105 als voorbelasting aftrekken.
      </p>
      <p>Bij gemengd zakelijk en privégebruik of bij vrijgestelde activiteiten kunnen beperkingen gelden.</p>

      <h2>Wanneer moet je een factuur meenemen in je btw-aangifte?</h2>
      <p>Dat hangt onder andere af van het soort transactie, het btw-stelsel en de factuurdatum.</p>
      <p>
        Voor veel ondernemers met het factuurstelsel geldt dat de btw over verkopen in het juiste factuurtijdvak moet
        worden aangegeven.
      </p>
      <p>
        Bij inkoopfacturen is voor de aftrek van voorbelasting onder meer van belang wanneer de btw in rekening is
        gebracht, of je over een geldige factuur beschikt en of je aan de aftrekvoorwaarden voldoet.
      </p>

      <h3>Voorbeeld per kwartaal</h3>
      <DataTable
        headers={['Factuur', 'Factuurdatum', 'Betaling', 'Btw-tijdvak bij gebruikelijk factuurstelsel']}
        rows={[
          ['Verkoopfactuur A', '12 januari', '25 januari', 'Q1'],
          ['Verkoopfactuur B', '28 maart', '15 april', 'Q1'],
          ['Verkoopfactuur C', '8 april', '20 april', 'Q2'],
        ]}
      />
      <p>
        Het tijdvak van een factuur is dus niet automatisch hetzelfde als het tijdvak waarin de betaling op je
        bankrekening binnenkomt.
      </p>
      <p>Let op: bij vooruitbetalingen, te laat uitgereikte facturen en bijzondere btw-regelingen kunnen andere regels gelden.</p>

      <h2>Hoe verwerk je facturen voor je btw-aangifte?</h2>
      <p>Een overzichtelijke administratie maakt je btw-aangifte een stuk eenvoudiger.</p>

      <h3>Stap 1. Verzamel alle verkoopfacturen</h3>
      <p>Controleer welke facturen bij het aangiftetijdvak horen.</p>
      <p>Bekijk per factuur:</p>
      <ul>
        <li>Factuurdatum</li>
        <li>Bedrag exclusief btw</li>
        <li>Btw-tarief</li>
        <li>Btw-bedrag</li>
        <li>Eventuele bijzondere btw-vermelding</li>
      </ul>

      <h3>Stap 2. Verzamel alle inkoopfacturen</h3>
      <p>Controleer de ontvangen facturen en bepaal welke btw je als voorbelasting mag aftrekken.</p>
      <p>Bewaar ook de bijbehorende documenten.</p>

      <h3>Stap 3. Controleer de btw-tarieven</h3>
      <p>
        In Nederland gelden onder andere het algemene tarief van 21% en het verlaagde tarief van 9%. Voor bepaalde
        leveringen en diensten geldt 0% of een vrijstelling.
      </p>
      <p>
        Het verschil tussen 0% btw en een btw-vrijstelling is belangrijk, onder andere voor het recht op aftrek van
        voorbelasting.
      </p>

      <h3>Stap 4. Controleer bijzondere transacties</h3>
      <p>Heb je te maken met buitenlandse klanten, buitenlandse leveranciers of verlegde btw?</p>
      <p>Dan kunnen aanvullende aangifterubrieken of verplichtingen gelden.</p>

      <h3>Stap 5. Bereken de verschuldigde btw en voorbelasting</h3>
      <p>Maak een overzicht van de btw over je verkopen en de btw die je mag aftrekken.</p>
      <p>Controleer of de totalen aansluiten op je administratie.</p>

      <h3>Stap 6. Dien je btw-aangifte in</h3>
      <p>Dien de aangifte in via de daarvoor beschikbare omgeving van de Belastingdienst of geschikte aangiftesoftware.</p>
      <p>Controleer de deadline en zorg dat eventuele betaling tijdig wordt gedaan.</p>

      <h2>Btw berekenen met FactuurBaas</h2>
      <p>Wil je snel berekenen hoeveel btw er op een bedrag zit?</p>
      <p>Met de gratis btw-calculator van FactuurBaas kun je bedragen inclusief en exclusief btw berekenen.</p>
      <p>Dat is handig wanneer je:</p>
      <ul>
        <li>Een factuurbedrag wilt controleren.</li>
        <li>Btw uit een totaalbedrag wilt halen.</li>
        <li>Een prijs exclusief btw wilt berekenen.</li>
        <li>Het verschil tussen btw-tarieven wilt bekijken.</li>
      </ul>
      <p>
        Je kunt hier direct <TextLink href="/tools/btw-calculator">btw berekenen</TextLink>.
      </p>
      <Cta href="/tools/btw-calculator" label="Gebruik de gratis btw-calculator" />
      <p className="text-center text-slate-600">
        De calculator helpt bij het berekenen van bedragen, maar verzorgt niet automatisch je volledige btw-aangifte.
      </p>

      <h2>Wat als een klant je factuur nog niet heeft betaald?</h2>
      <p>Dit is een veelvoorkomende vraag bij zzp&apos;ers.</p>
      <p>Je hebt een factuur verstuurd, maar de klant heeft nog niet betaald. Moet je de btw dan toch aangeven?</p>
      <p>
        <strong>Bij het factuurstelsel is het antwoord doorgaans ja.</strong>
      </p>
      <p>Je moet de btw in beginsel aangeven in het juiste tijdvak, ook wanneer de betaling nog openstaat.</p>
      <p>
        Wanneer een vordering uiteindelijk oninbaar blijkt, kan onder voorwaarden recht ontstaan op teruggaaf van de
        eerder afgedragen btw.
      </p>
      <p>
        Een vordering wordt voor de btw in ieder geval uiterlijk één jaar na het verstrijken van de afgesproken uiterste
        betaaldatum als oninbaar beschouwd, voor zover deze nog niet is betaald. Ook eerder kan oninbaarheid vaststaan.
      </p>
      <p>Dit betekent niet dat je de btw direct mag terugvragen zodra een klant een paar dagen te laat is.</p>

      <h2>Wat als je een verkeerde factuur hebt verwerkt?</h2>
      <p>Een verkeerd bedrag of btw-tarief kan invloed hebben op je aangifte.</p>
      <p>Voorbeelden zijn:</p>
      <ul>
        <li>Een verkoopfactuur vergeten.</li>
        <li>Een inkoopfactuur dubbel verwerkt.</li>
        <li>Een verkeerd btw-tarief toegepast.</li>
        <li>Btw afgetrokken terwijl dat niet mocht.</li>
        <li>Een factuur in het verkeerde tijdvak verwerkt.</li>
      </ul>
      <p>Ontdek je de fout voordat je aangifte doet? Dan kun je de administratie doorgaans nog corrigeren.</p>
      <p>Ontdek je de fout nadat je aangifte hebt gedaan? Dan moet je beoordelen hoe je de eerdere aangifte moet herstellen.</p>
      <p>
        Bij een btw-correctie van maximaal €1.000 te veel of te weinig aangegeven btw kun je deze onder de daarvoor
        geldende voorwaarden doorgaans verwerken in een volgende btw-aangifte.
      </p>
      <p>Bij grotere correcties is meestal een suppletie omzetbelasting nodig.</p>
      <p>
        Lees ook:{' '}
        <TextLink href="/blogs/factuur-verkeerd-geboekt">Factuur verkeerd geboekt? Zo herstel je de fout</TextLink>.
      </p>

      <h2>Veelgemaakte fouten bij facturen en btw-aangifte</h2>
      <h3>1. Alleen naar bankbetalingen kijken</h3>
      <p>
        Bij het factuurstelsel zijn facturen en het moment van factureren doorgaans bepalend, niet uitsluitend de
        ontvangsten op je bankrekening.
      </p>
      <h3>2. Alle btw op zakelijke kosten aftrekken</h3>
      <p>Niet iedere uitgave geeft recht op volledige btw-aftrek. Controleer altijd de voorwaarden.</p>
      <h3>3. Een verkeerd btw-tarief gebruiken</h3>
      <p>Sommige producten en diensten vallen onder een ander tarief, een vrijstelling of een bijzondere regeling.</p>
      <h3>4. Inkoopfacturen vergeten</h3>
      <p>Wanneer je aftrekbare btw op zakelijke inkopen niet meeneemt, betaal je mogelijk meer btw dan nodig.</p>
      <h3>5. Facturen dubbel registreren</h3>
      <p>Dubbele verwerking kan leiden tot onjuiste omzet, kosten of btw-bedragen.</p>
      <h3>6. Verlegde btw verkeerd verwerken</h3>
      <p>
        Bij de verleggingsregeling berekent en verwerkt de afnemer de btw volgens de toepasselijke regels. Dit vraagt om
        een andere verwerking dan een gewone binnenlandse factuur met btw.
      </p>

      <h2>Wanneer is hulp bij je btw-aangifte verstandig?</h2>
      <p>Veel zzp&apos;ers kunnen hun btw-aangifte zelf voorbereiden, zeker wanneer ze een eenvoudige administratie hebben.</p>
      <p>Maar soms is professionele hulp verstandig.</p>
      <p>Bijvoorbeeld wanneer:</p>
      <ul>
        <li>Je regelmatig twijfelt over btw-tarieven.</li>
        <li>Je buitenlandse klanten of leveranciers hebt.</li>
        <li>Je te maken hebt met verlegde btw.</li>
        <li>Je zowel belaste als vrijgestelde omzet hebt.</li>
        <li>Je fouten uit eerdere aangiften moet corrigeren.</li>
        <li>Je administratie veel tijd kost.</li>
        <li>Je liever zekerheid hebt over de verwerking van je facturen.</li>
      </ul>
      <p>
        Een boekhouder kan je helpen bij het controleren van je administratie, het verwerken van facturen en het
        verzorgen van btw-aangiften, afhankelijk van de afgesproken dienstverlening.
      </p>

      <h3>Liever hulp bij je btw-aangifte?</h3>
      <p>
        Weet je niet zeker of je alle facturen en btw goed hebt verwerkt? Vind boekhoudkundige ondersteuning die past
        bij jouw onderneming, of vraag direct{' '}
        <TextLink href="/boekhouder-vinden">hulp bij btw-aangifte</TextLink>.
      </p>
      <Cta href="/boekhouder-vinden" label="Vind een boekhouder voor je btw" />
      <p className="text-center text-slate-600">Een aanvraag via FactuurBaas is gratis en vrijblijvend.</p>

      <h2>Moet je btw-aangifte doen als je geen omzet hebt?</h2>
      <p>
        Als je verplicht bent om btw-aangifte te doen, moet je doorgaans ook aangifte doen wanneer je in een tijdvak
        geen omzet hebt.
      </p>
      <p>Dit wordt vaak een nihilaangifte genoemd wanneer er niets aan te geven is.</p>
      <p>
        Ben je deelnemer aan de kleineondernemersregeling (KOR)? Dan gelden andere regels en hoef je doorgaans geen
        reguliere btw-aangifte te doen, behalve in bepaalde bijzondere situaties.
      </p>
      <p>Controleer daarom altijd welke aangifteverplichtingen voor jouw onderneming gelden.</p>

      <h2>Facturen bewaren voor de Belastingdienst</h2>
      <p>Je moet je administratie gedurende de wettelijke bewaartermijn bewaren.</p>
      <p>Voor veel onderdelen van de Nederlandse ondernemersadministratie geldt een algemene bewaartermijn van zeven jaar.</p>
      <p>Voor bepaalde gegevens, zoals gegevens over onroerende zaken voor de btw, gelden langere termijnen.</p>
      <p>Bewaar onder andere:</p>
      <ul>
        <li>Verkoopfacturen</li>
        <li>Inkoopfacturen</li>
        <li>Creditfacturen</li>
        <li>Betalingsgegevens</li>
        <li>Relevante administratieve onderbouwing</li>
      </ul>
      <p>Een goede administratie helpt je bij btw-aangiften en eventuele controles door de Belastingdienst.</p>

      <h2>Conclusie: houd je facturen en btw goed bij</h2>
      <p>Een correcte btw-aangifte begint bij een overzichtelijke administratie.</p>
      <p>
        Door verkoopfacturen, inkoopfacturen, btw-bedragen en factuurdatums goed bij te houden, verklein je de kans op
        fouten.
      </p>
      <p>
        Met FactuurBaas kun je <TextLink href="/create-invoice">gratis facturen maken</TextLink> en btw-bedragen
        berekenen. Voor ingewikkeldere btw-vragen of het verzorgen van aangiften kun je een boekhouder inschakelen.
      </p>
      <p>
        <strong>Wil je ondersteuning bij je btw-aangifte of boekhouding?</strong>
      </p>
      <Cta href="/boekhouder-vinden" label="Vind gratis en vrijblijvend een boekhouder" />
    </>
  ),
};
