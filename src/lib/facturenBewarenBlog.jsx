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

function DataTable({ headers, rows }) {
  return (
    <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
      <table className="w-full min-w-[320px] text-sm text-slate-700 sm:text-base">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            {headers.map((header) => (
              <th key={header} className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="border-b border-slate-100 last:border-0">
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

export const facturenBewarenArticle = {
  slug: 'facturen-bewaren-belastingdienst',
  relatedSlugs: [
    'inkoopfacturen-en-verkoopfacturen',
    'facturen-bijhouden-zzp',
    'facturen-verwerken-boekhouding',
    'facturen-en-btw-aangifte',
  ],
  metaTitle: "Facturen bewaren: 7 of 10 jaar? Regels voor zzp'ers",
  title: 'Facturen bewaren voor de Belastingdienst: hoe lang en hoe?',
  excerpt:
    'Hoe lang moet je facturen bewaren voor de Belastingdienst? Lees alles over 7 en 10 jaar bewaarplicht, digitale facturen, bonnetjes en administratie.',
  keywords:
    'facturen bewaren belastingdienst, hoe lang facturen bewaren zzp, facturen 7 of 10 jaar bewaren, facturen digitaal bewaren, bewaarplicht administratie',
  image: {
    url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/Facturen%20bewaren%20voor%20de%20Belastingdienst.jpg',
    alt: 'Ondernemer bewaart facturen digitaal voor de Belastingdienst.',
  },
  datePublished: '2026-10-18',
  dateModified: '2026-10-18',
  faq: [
    {
      question: "Hoe lang moet ik facturen bewaren als zzp'er?",
      answer:
        'Voor de meeste onderdelen van je ondernemersadministratie geldt een bewaartermijn van zeven jaar. Voor bepaalde gegevens gelden langere termijnen.',
    },
    {
      question: 'Moet ik facturen zeven of tien jaar bewaren?',
      answer:
        'Meestal zeven jaar. Voor bepaalde gegevens, zoals gegevens over onroerende zaken voor de btw en specifieke OSS-transacties, geldt een termijn van tien jaar.',
    },
    {
      question: 'Mag ik facturen alleen digitaal bewaren?',
      answer:
        'Ja, mits de digitale administratie voldoet aan de toepasselijke eisen voor beschikbaarheid, leesbaarheid, betrouwbaarheid en controleerbaarheid.',
    },
    {
      question: 'Moet ik bonnetjes bewaren voor de Belastingdienst?',
      answer:
        'Ja, zakelijke bonnetjes en andere bewijsstukken die onderdeel zijn van je administratie moet je gedurende de toepasselijke bewaartermijn bewaren.',
    },
    {
      question: 'Mag ik een papieren factuur weggooien nadat ik deze heb gescand?',
      answer:
        'Dat kan onder voorwaarden, maar niet iedere scan is automatisch voldoende. Controleer of de digitale vervanging voldoet aan de wettelijke eisen.',
    },
    {
      question: 'Moet ik facturen bewaren als ze al betaald zijn?',
      answer:
        'Ja. De betalingsstatus verandert niets aan de algemene verplichting om relevante facturen gedurende de wettelijke bewaartermijn te bewaren.',
    },
    {
      question: 'Moet ik facturen bewaren na het stoppen van mijn onderneming?',
      answer:
        'Ja. Ook na beëindiging van je onderneming blijft de bewaarplicht gelden zolang de wettelijke termijn niet is verstreken.',
    },
    {
      question: 'Is een PDF voldoende voor de Belastingdienst?',
      answer:
        'Een PDF kan een geschikt onderdeel van je administratie zijn, maar je moet ook de overige relevante gegevens en de controleerbaarheid van je administratie waarborgen.',
    },
    {
      question: 'Bewaart FactuurBaas mijn facturen automatisch zeven jaar?',
      answer:
        'FactuurBaas kan facturen opslaan binnen je account, maar garandeert daarmee niet automatisch dat je volledige administratie gedurende zeven jaar wordt bewaard. Je blijft zelf verantwoordelijk voor een geschikte archivering en back-up.',
    },
  ],
  content: (
    <>
      <p>
        Als zzp&apos;er ben je verplicht om je administratie te bewaren. Dat geldt niet alleen voor facturen die je naar
        klanten verstuurt, maar ook voor facturen die je ontvangt, zakelijke bonnetjes en andere belangrijke
        administratieve gegevens.
      </p>
      <p>Maar hoe lang moet je facturen bewaren? Is zeven jaar altijd voldoende? En mag je alles digitaal opslaan?</p>
      <p>
        Voor de meeste onderdelen van je ondernemersadministratie geldt een bewaartermijn van zeven jaar. Voor bepaalde
        gegevens, bijvoorbeeld over onroerende zaken, gelden langere termijnen.
      </p>
      <p>
        In dit artikel lees je welke facturen je moet bewaren, hoe de bewaarplicht werkt en hoe je jouw administratie
        overzichtelijk houdt. Hoe je die facturen eerst in de boekhouding zet, lees je in{' '}
        <TextLink href="/blogs/facturen-verwerken-boekhouding">facturen verwerken in je boekhouding</TextLink>.
      </p>

      <h2>Hoe lang moet je facturen bewaren voor de Belastingdienst?</h2>
      <p>
        Voor de meeste gegevens uit je Nederlandse ondernemersadministratie geldt een wettelijke bewaartermijn van{' '}
        <strong>zeven jaar</strong>.
      </p>
      <p>Dit wordt de fiscale bewaarplicht genoemd.</p>
      <p>De bewaarplicht geldt onder andere voor:</p>
      <ul>
        <li>Verkoopfacturen die je naar klanten verstuurt.</li>
        <li>Inkoopfacturen die je van leveranciers ontvangt.</li>
        <li>Creditfacturen.</li>
        <li>Bankafschriften en betalingsgegevens.</li>
        <li>Administratieve gegevens over inkomsten en uitgaven.</li>
        <li>Andere documenten die nodig zijn om je belastingverplichtingen te controleren.</li>
      </ul>
      <p>Voor bepaalde gegevens geldt een langere termijn.</p>

      <h3>Bewaartermijnen in één overzicht</h3>
      <DataTable
        headers={['Soort administratie', 'Algemene bewaartermijn']}
        rows={[
          ['Verkoopfacturen', '7 jaar'],
          ['Inkoopfacturen', '7 jaar'],
          ['Creditfacturen', '7 jaar'],
          ['Bankafschriften', '7 jaar'],
          ['Zakelijke bonnetjes', '7 jaar'],
          ['Grootboekadministratie', '7 jaar'],
          ['Gegevens over onroerende zaken voor de btw', '10 jaar'],
          ['Gegevens over bepaalde OSS-transacties', '10 jaar'],
        ]}
      />
      <p>Dit zijn algemene termijnen. In bijzondere situaties kunnen aanvullende of afwijkende regels gelden.</p>

      <h2>Wanneer begint de bewaartermijn van zeven jaar?</h2>
      <p>
        De fiscale bewaartermijn begint doorgaans nadat de gegevens hun actuele belang voor de bedrijfsvoering hebben
        verloren.
      </p>
      <p>
        Voor veel administratieve gegevens betekent dit dat de termijn praktisch wordt berekend vanaf het einde van het
        boekjaar waarop de gegevens betrekking hebben.
      </p>

      <h3>Voorbeeld: factuur uit 2026</h3>
      <p>Stel dat je op 15 maart 2026 een factuur verstuurt.</p>
      <p>
        Wanneer de gegevens betrekking hebben op het boekjaar 2026 en hun actuele belang aan het einde van dat jaar
        verliezen, loopt de gebruikelijke bewaartermijn van zeven jaar vanaf het einde van 2026.
      </p>
      <p>In dat geval moet je de gegevens in beginsel bewaren tot en met 31 december 2033.</p>
      <p>
        De exacte bewaartermijn kan afwijken wanneer gegevens langer actueel belang houden of wanneer bijzondere regels
        van toepassing zijn.
      </p>

      <h2>Moet je zowel verkoopfacturen als inkoopfacturen bewaren?</h2>
      <p>Ja. Beide soorten facturen zijn onderdeel van je administratie.</p>

      <h3>Verkoopfacturen bewaren</h3>
      <p>
        Verkoopfacturen laten zien welke producten of diensten je aan klanten hebt geleverd en welke bedragen je
        daarvoor hebt gefactureerd.
      </p>
      <p>Ze zijn onder andere belangrijk voor:</p>
      <ul>
        <li>Je omzetadministratie.</li>
        <li>Je btw-aangifte.</li>
        <li>Het controleren van betalingen.</li>
        <li>Het vaststellen van openstaande vorderingen.</li>
        <li>Eventuele controles door de Belastingdienst.</li>
      </ul>

      <h3>Inkoopfacturen bewaren</h3>
      <p>Inkoopfacturen onderbouwen zakelijke aankopen en kosten.</p>
      <p>Ze kunnen nodig zijn om aan te tonen:</p>
      <ul>
        <li>Welke producten of diensten je hebt gekocht.</li>
        <li>Welke kosten zakelijk zijn.</li>
        <li>Welke btw je eventueel als voorbelasting hebt afgetrokken.</li>
        <li>Wanneer een aankoop is gedaan.</li>
        <li>Of een uitgave betrekking heeft op een investering.</li>
      </ul>
      <p>
        Een bankbetaling alleen bevat niet altijd voldoende informatie om de aard en fiscale behandeling van een aankoop
        te onderbouwen.
      </p>
      <p>
        Lees ook:{' '}
        <TextLink href="/blogs/inkoopfacturen-en-verkoopfacturen">
          Inkoopfacturen en verkoopfacturen: wat is het verschil?
        </TextLink>
      </p>

      <h2>Mag je facturen digitaal bewaren?</h2>
      <p>Ja. Je mag je administratie digitaal bewaren, zolang je voldoet aan de toepasselijke wettelijke eisen.</p>
      <p>Je hoeft dus niet automatisch alle facturen op papier te bewaren.</p>
      <p>
        Digitale opslag kan zelfs praktisch zijn, omdat je documenten eenvoudiger kunt terugvinden, ordenen en
        veiligstellen.
      </p>
      <p>Wel moet je administratie gedurende de bewaartermijn beschikbaar, leesbaar en controleerbaar blijven.</p>

      <h3>Waar moet digitale opslag aan voldoen?</h3>
      <p>Zorg ervoor dat:</p>
      <ol>
        <li>Je facturen gedurende de bewaartermijn toegankelijk blijven.</li>
        <li>De gegevens leesbaar zijn.</li>
        <li>Je documenten en bijbehorende administratieve informatie kunt terugvinden.</li>
        <li>De betrouwbaarheid en integriteit van de gegevens gewaarborgd blijven.</li>
        <li>Je bij een controle de gevraagde gegevens kunt verstrekken.</li>
      </ol>
      <p>
        Bij elektronische facturen moet je bovendien kunnen voldoen aan de eisen rondom de authenticiteit van de
        herkomst, de integriteit van de inhoud en de leesbaarheid.
      </p>

      <h2>Moet je papieren facturen bewaren als je ze scant?</h2>
      <p>Niet altijd.</p>
      <p>
        Onder voorwaarden kan het mogelijk zijn om papieren documenten digitaal te bewaren en de papieren originelen weg
        te doen.
      </p>
      <p>
        Daarbij is het belangrijk dat de digitale versie de relevante informatie volledig en juist weergeeft en dat je
        administratie controleerbaar blijft.
      </p>
      <p>Bij sommige documenten kunnen aanvullende eisen gelden.</p>
      <p>
        Gooi papieren originelen daarom niet zomaar weg zonder te controleren of de digitale vervanging in jouw situatie
        voldoet aan de regels.
      </p>

      <h3>Praktische tip</h3>
      <p>Maak duidelijke scans of foto&apos;s waarop alle gegevens leesbaar zijn.</p>
      <p>Controleer bijvoorbeeld:</p>
      <ul>
        <li>De naam van de leverancier.</li>
        <li>De datum.</li>
        <li>De omschrijving van de aankoop.</li>
        <li>De bedragen.</li>
        <li>De btw.</li>
        <li>Eventuele aanvullende informatie.</li>
      </ul>
      <p>Bewaar de bestanden vervolgens op een vaste, overzichtelijke plek.</p>

      <h2>Facturen bewaren als PDF: is dat voldoende?</h2>
      <p>Een PDF is een veelgebruikt formaat voor het bewaren van facturen.</p>
      <p>Voor veel ondernemers is dit een praktische manier om factuurdocumenten te archiveren.</p>
      <p>Maar alleen een map met PDF-bestanden is niet automatisch een volledige administratie.</p>
      <p>
        Je moet ook andere relevante gegevens bewaren, zoals betalingsinformatie en de administratieve verwerking van
        transacties.
      </p>
      <p>Daarnaast kan het nodig zijn om de oorspronkelijke elektronische gegevens en bijbehorende informatie te behouden.</p>

      <h3>Voorbeeld</h3>
      <p>Je maakt een verkoopfactuur als PDF en stuurt deze naar je klant.</p>
      <p>Voor een goede administratie bewaar je niet alleen de factuur, maar houd je ook bij:</p>
      <ul>
        <li>Wanneer de factuur is verstuurd.</li>
        <li>Op welke klant deze betrekking heeft.</li>
        <li>Welk bedrag is gefactureerd.</li>
        <li>Of de factuur is betaald.</li>
        <li>Wanneer de betaling is ontvangen.</li>
      </ul>
      <p>
        Zo blijft de transactie controleerbaar. Hoe je openstaande betalingen bijhoudt, lees je in{' '}
        <TextLink href="/blogs/facturen-bijhouden-zzp">facturen bijhouden als zzp&apos;er</TextLink>. De btw-kant van
        die facturen staat in{' '}
        <TextLink href="/blogs/facturen-en-btw-aangifte">facturen en btw-aangifte</TextLink>.
      </p>

      <h2>Facturen bewaren met een online factuurprogramma</h2>
      <p>Een online factuurprogramma kan helpen om facturen overzichtelijk te beheren.</p>
      <p>In plaats van losse documenten op verschillende apparaten kun je je facturen bij elkaar houden.</p>
      <p>
        Met FactuurBaas kun je <TextLink href="/create-invoice">gratis facturen maken</TextLink> en met een account je
        facturen bewaren en terugvinden in je dashboard.
      </p>
      <p>Je kunt onder andere:</p>
      <ul>
        <li>Verkoopfacturen maken.</li>
        <li>Facturen downloaden als PDF.</li>
        <li>Klantgegevens beheren.</li>
        <li>Betalingsstatussen bijhouden.</li>
        <li>Openstaande bedragen bekijken.</li>
        <li>Inkomsten en uitgaven registreren.</li>
      </ul>

      <h3>Maak en bewaar je facturen overzichtelijk</h3>
      <p>Gebruik FactuurBaas om gratis facturen te maken en met een account je facturen bij te houden.</p>
      <Cta href="/create-invoice" label="Maak gratis een factuur" />
      <p>
        <strong>Let op:</strong> als ondernemer blijf je zelf verantwoordelijk voor het naleven van de wettelijke
        bewaarplicht. Zorg daarom ook voor een geschikte eigen archivering en back-up van je administratie. Vertrouw
        niet uitsluitend op de beschikbaarheid van één online account.
      </p>

      <h2>Hoe kun je facturen het beste digitaal organiseren?</h2>
      <p>Een vaste structuur helpt je om documenten later eenvoudig terug te vinden.</p>
      <p>Je kunt bijvoorbeeld per jaar aparte mappen gebruiken.</p>

      <h3>Voorbeeld mappenstructuur</h3>
      <p>
        <strong>Administratie 2026</strong>
      </p>
      <ul>
        <li>Verkoopfacturen</li>
        <li>Inkoopfacturen</li>
        <li>Creditfacturen</li>
        <li>Bankafschriften</li>
        <li>Btw-aangiften</li>
        <li>Overige documenten</li>
      </ul>
      <p>Binnen deze mappen kun je documenten een herkenbare bestandsnaam geven.</p>
      <p>Bijvoorbeeld:</p>
      <p>
        <code>2026-001_Klant-A.pdf</code>
      </p>
      <p>of</p>
      <p>
        <code>2026-03-15_Leverancier-Software.pdf</code>
      </p>
      <p>Zo kun je snel zoeken op datum, factuurnummer of klant.</p>

      <h3>Maak regelmatig een back-up</h3>
      <p>Bewaar belangrijke administratieve gegevens bij voorkeur niet op slechts één apparaat of in één online dienst.</p>
      <p>Een back-up helpt je bij verlies, technische problemen of het beëindigen van een softwareabonnement.</p>
      <p>Controleer regelmatig of je back-ups volledig zijn en of je bestanden kunt terugzetten.</p>

      <h2>Moet je facturen bewaren als je stopt als zzp&apos;er?</h2>
      <p>Ja.</p>
      <p>Wanneer je stopt met je onderneming, vervalt de fiscale bewaarplicht niet automatisch.</p>
      <p>Je moet je administratie blijven bewaren zolang de wettelijke bewaartermijnen gelden.</p>
      <p>
        Dat betekent dat je ook na uitschrijving bij de Kamer van Koophandel nog toegang moet hebben tot je relevante
        facturen en andere administratieve gegevens.
      </p>

      <h3>Wat als je je factuurprogramma opzegt?</h3>
      <p>Controleer voordat je een account beëindigt of je alle benodigde documenten en gegevens hebt geëxporteerd.</p>
      <p>Denk aan:</p>
      <ul>
        <li>Verkoopfacturen.</li>
        <li>Inkoopfacturen en bonnetjes.</li>
        <li>Klant- en leveranciersgegevens die voor je administratie nodig zijn.</li>
        <li>Betalingsgegevens.</li>
        <li>Btw-overzichten.</li>
        <li>Andere relevante administratieve gegevens.</li>
      </ul>
      <p>Het beëindigen van een softwareaccount ontslaat je niet van je bewaarplicht.</p>

      <h2>Wat gebeurt er als je facturen niet bewaart?</h2>
      <p>
        Wanneer je administratie ontbreekt of niet controleerbaar is, kan dat problemen veroorzaken bij een
        belastingcontrole.
      </p>
      <p>De Belastingdienst kan je vragen om gegevens waarmee je omzet, kosten en btw-aangiften worden onderbouwd.</p>
      <p>Kun je die informatie niet verstrekken, dan kan dit gevolgen hebben voor de beoordeling van je aangiften.</p>
      <p>
        Afhankelijk van de omstandigheden kan de Belastingdienst bijvoorbeeld aftrekposten weigeren, correcties opleggen
        of een informatiebeschikking afgeven. In bepaalde gevallen kan de bewijslast worden omgekeerd en verzwaard.
      </p>
      <p>Daarom is het verstandig om facturen en andere administratieve documenten zorgvuldig te bewaren.</p>

      <h2>Facturen bewaren en de AVG: hoe zit dat?</h2>
      <p>Facturen kunnen persoonsgegevens bevatten.</p>
      <p>Denk aan namen, adressen en contactgegevens van klanten.</p>
      <p>
        Volgens de AVG moet je persoonsgegevens niet langer bewaren dan noodzakelijk, tenzij een wettelijke bewaarplicht
        van toepassing is.
      </p>
      <p>
        De fiscale bewaarplicht kan een geldige reden zijn om bepaalde persoonsgegevens gedurende de wettelijke termijn
        te bewaren.
      </p>
      <p>Dit betekent niet dat je alle klantgegevens onbeperkt mag opslaan.</p>
      <p>
        Zorg dat je alleen relevante gegevens bewaart, deze passend beveiligt en verwijdert wanneer er geen geldige
        reden meer is om ze te bewaren.
      </p>

      <h2>Wanneer is een boekhouder handig bij je administratie?</h2>
      <p>Veel zzp&apos;ers kunnen hun facturen prima zelf bewaren en organiseren.</p>
      <p>Maar wanneer je veel documenten hebt of twijfelt over de bewaarplicht, kan professionele ondersteuning nuttig zijn.</p>
      <p>Een boekhouder kan bijvoorbeeld helpen bij:</p>
      <ul>
        <li>Het inrichten van je administratie.</li>
        <li>Het organiseren van inkoop- en verkoopfacturen.</li>
        <li>Het controleren van ontbrekende documenten.</li>
        <li>Het voorbereiden van btw-aangiften.</li>
        <li>Het bepalen welke administratieve gegevens je moet bewaren.</li>
        <li>Het begeleiden van administratieve controles.</li>
      </ul>

      <h3>Zeker weten dat je administratie op orde is?</h3>
      <p>
        Een boekhouder kan je helpen bij het organiseren van je administratie en het naleven van fiscale bewaarplichten.
        Vraag <TextLink href="/boekhouder-vinden">hulp bij je administratie</TextLink>.
      </p>
      <Cta href="/boekhouder-vinden" label="Vind een boekhouder" />
      <p className="text-center text-slate-600">Een aanvraag via FactuurBaas is gratis en vrijblijvend.</p>

      <h2>Conclusie: bewaar je facturen minimaal zolang de wet vereist</h2>
      <p>
        Voor de meeste Nederlandse zzp&apos;ers geldt dat facturen en andere relevante administratieve gegevens
        doorgaans zeven jaar bewaard moeten blijven.
      </p>
      <p>In bijzondere situaties kan de bewaartermijn langer zijn.</p>
      <p>Je mag facturen digitaal bewaren, zolang de gegevens toegankelijk, leesbaar en controleerbaar blijven.</p>
      <p>Met FactuurBaas kun je gratis facturen maken, downloaden en met een account overzichtelijk bijhouden.</p>
      <Cta href="/create-invoice" label="Maak gratis een factuur" />
      <p>Wil je liever hulp bij het organiseren van je administratie?</p>
      <Cta href="/boekhouder-vinden" label="Vind een boekhouder" />
    </>
  ),
};
