import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const TextLink = ({ href, children }) => (
  <Link href={href} className="text-warm-orange hover:underline">
    {children}
  </Link>
);

const CtaButton = ({ label }) => (
  <div className="my-8 text-center">
    <Button asChild className="rounded-lg bg-warm-orange px-6 py-3 text-lg font-bold text-white hover:bg-orange-600">
      <Link href="/ubl-factuur-maken">{label}</Link>
    </Button>
  </div>
);

function ComparisonTable({ headers, rows }) {
  return (
    <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
      <table className="w-full min-w-[480px] text-sm text-slate-700 sm:text-base">
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
              {row.map((cell) => (
                <td key={cell} className="px-4 py-3">
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

export const watIsPeppolArticle = {
  slug: 'wat-is-peppol',
  relatedSlugs: ['e-facturatie-verplicht', 'wat-is-een-ubl-factuur', 'ubl-factuur-maken', 'factureren-zonder-account'],
  metaTitle: 'Wat is Peppol? Werking, kosten en UBL uitgelegd',
  metaDescription:
    'Wat is Peppol en hoe werkt het? Lees alles over Peppol-facturen, access points, kosten en het verschil met UBL. Inclusief gratis UBL-factuurmaker.',
  title: 'Wat is Peppol? Zo werkt elektronisch factureren',
  excerpt:
    'Wat is Peppol en hoe werkt een Peppol-factuur? Ontdek hoe bedrijven elektronische facturen uitwisselen, wat een access point doet en hoe Peppol verschilt van UBL en PDF.',
  keywords:
    'wat is peppol, peppol, peppol factuur, peppol facturatie, peppol access point, peppol kosten, peppol verplicht, peppol ubl',
  image: {
    url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/wat%20is%20peppol.jpg',
    alt: 'Uitleg van Peppol: elektronische facturen uitwisselen tussen bedrijven.',
  },
  datePublished: '2026-11-01',
  dateModified: '2026-11-01',
  faq: [
    {
      question: 'Wat is Peppol in eenvoudige woorden?',
      answer:
        'Peppol is een netwerk waarmee bedrijven en overheidsorganisaties elektronische facturen en andere zakelijke documenten op een gestandaardiseerde manier kunnen uitwisselen.',
    },
    {
      question: 'Waar staat Peppol voor?',
      answer:
        'De naam komt oorspronkelijk van Pan-European Public Procurement Online. Tegenwoordig wordt Peppol gebruikt als naam voor het internationale netwerk en afsprakenstelsel.',
    },
    {
      question: 'Is Peppol hetzelfde als UBL?',
      answer:
        'Nee. UBL is een standaard voor de structuur van elektronische documenten. Peppol is een netwerk voor het uitwisselen van geschikte documenten tussen organisaties.',
    },
    {
      question: 'Is Peppol gratis?',
      answer:
        'Dat hangt af van de aanbieder. Sommige boekhoudprogramma’s bieden Peppol-functionaliteit binnen hun abonnement. Andere diensten rekenen afzonderlijke kosten.',
    },
    {
      question: 'Heb ik een Peppol-ID nodig?',
      answer:
        'Om als ontvanger binnen het netwerk gevonden te worden, gebruikt Peppol een elektronische identificatie. Je dienstverlener helpt doorgaans bij de juiste registratie en identificatie.',
    },
    {
      question: 'Kan ik een PDF via Peppol versturen?',
      answer:
        'Een gewone PDF is op zichzelf geen gestructureerde Peppol-factuur. Voor verzending is een document nodig dat voldoet aan de toepasselijke elektronische factuurspecificaties. Een PDF kan in bepaalde gevallen wel als bijlage bij een gestructureerde factuur worden opgenomen.',
    },
    {
      question: 'Kan ik een UBL-bestand via Peppol versturen?',
      answer:
        'Dat kan wanneer het bestand voldoet aan de vereiste Peppol-specificaties en je gebruikmaakt van een geschikte verzenddienst. Niet ieder UBL-bestand voldoet automatisch aan die eisen.',
    },
    {
      question: 'Is Peppol verplicht voor zzp’ers?',
      answer:
        'Niet voor iedere Nederlandse zzp’er en iedere factuur. Verplichtingen kunnen afhangen van de opdrachtgever, het soort transactie en de toepasselijke regelgeving.',
    },
    {
      question: 'Heb ik een boekhoudprogramma nodig voor Peppol?',
      answer:
        'Niet noodzakelijk. Je kunt ook gebruikmaken van een afzonderlijke e-facturatiedienst die Peppol ondersteunt.',
    },
    {
      question: 'Wordt een Peppol-factuur automatisch betaald?',
      answer:
        'Nee. Peppol verzorgt de elektronische documentuitwisseling. De klant moet de factuur nog verwerken en betalen volgens de gemaakte afspraken.',
    },
  ],
  content: (
    <>
      <p>
        Peppol is een internationaal netwerk waarmee bedrijven en overheidsorganisaties veilig elektronische facturen kunnen uitwisselen. In plaats van een PDF-factuur per e-mail te versturen, wordt een gestructureerde e-factuur via aangesloten dienstverleners rechtstreeks aan het ontvangende systeem aangeboden.
      </p>
      <p>
        Peppol maakt het mogelijk om facturen uit te wisselen tussen organisaties die verschillende boekhoudprogramma&apos;s gebruiken.
      </p>
      <p>Maar hoe werkt Peppol precies? Wat is een Peppol Access Point, wat kost het en wat is het verschil met een UBL-factuur?</p>
      <p>In dit artikel leggen we het stap voor stap uit.</p>
      <p>
        Wil je alvast een elektronische factuur als bestand maken? Met FactuurBaas kun je gratis een UBL/XML-factuur downloaden. Dit is geen rechtstreekse Peppol-verzending.
      </p>
      <CtaButton label="Maak gratis een UBL-factuur" />

      <h2>Wat betekent Peppol?</h2>
      <p>
        Peppol is oorspronkelijk ontstaan uit het Europese project <em>Pan-European Public Procurement Online</em>. Tegenwoordig wordt Peppol gebruikt als naam voor een internationaal stelsel van afspraken, technische standaarden en netwerkdiensten voor het uitwisselen van elektronische zakelijke documenten.
      </p>
      <p>Het netwerk wordt beheerd volgens afspraken van OpenPeppol, een internationale non-profitorganisatie.</p>
      <p>Via Peppol kunnen organisaties onder andere elektronische facturen, creditnota&apos;s en bestellingen uitwisselen.</p>
      <p>Het bijzondere aan Peppol is dat verzender en ontvanger niet hetzelfde boekhoudprogramma of dezelfde dienstverlener hoeven te gebruiken.</p>
      <p>
        Vergelijk het met e-mail: iemand met Gmail kan een bericht sturen naar iemand met Outlook. Beide gebruiken verschillende aanbieders, maar kunnen toch berichten uitwisselen.
      </p>
      <p>Bij Peppol werkt dat principe voor gestructureerde zakelijke documenten.</p>

      <h2>Hoe werkt Peppol?</h2>
      <p>Wanneer je een factuur via Peppol verstuurt, gaat deze niet rechtstreeks van jouw computer naar de computer van je klant.</p>
      <p>De factuur wordt via aangesloten dienstverleners uitgewisseld.</p>
      <p>Dit werkt in vijf stappen:</p>
      <ol>
        <li>
          <strong>Je maakt een elektronische factuur.</strong> Je vult de bedrijfsgegevens, klantgegevens, factuurregels, bedragen en btw in.
        </li>
        <li>
          <strong>De factuur wordt gecontroleerd.</strong> De verzenddienst controleert of het document voldoet aan de vereiste elektronische factuurstandaard.
        </li>
        <li>
          <strong>De ontvanger wordt opgezocht.</strong> Het netwerk gebruikt identificatiegegevens en adresinformatie om te bepalen waar de factuur naartoe moet.
        </li>
        <li>
          <strong>De factuur wordt verzonden.</strong> Het Access Point van de verzender wisselt de factuur uit met het Access Point van de ontvanger.
        </li>
        <li>
          <strong>De ontvanger verwerkt de factuur.</strong> De ontvangende software kan de gestructureerde factuurgegevens uitlezen en verwerken.
        </li>
      </ol>
      <p>De ontvanger kan de factuur vervolgens controleren, goedkeuren en klaarzetten voor betaling.</p>
      <p>Peppol zorgt voor de uitwisseling van het document, maar niet automatisch voor de betaling ervan.</p>

      <h2>Wat is een Peppol Access Point?</h2>
      <p>Een Peppol Access Point is een technisch toegangspunt tot het Peppol-netwerk.</p>
      <p>Je kunt het vergelijken met een dienstverlener die namens jouw bedrijf elektronische facturen verzendt en ontvangt.</p>
      <p>
        Bedrijven hoeven doorgaans niet zelf een Access Point te bouwen. Ze kunnen gebruikmaken van een boekhoudprogramma of e-facturatiedienst die is aangesloten op een Peppol-geaccrediteerde dienstverlener.
      </p>
      <p>Een Access Point verzorgt onder andere:</p>
      <ul>
        <li>De technische verbinding met het Peppol-netwerk.</li>
        <li>Het opzoeken van het ontvangende systeem.</li>
        <li>Het controleren van elektronische documenten.</li>
        <li>Het veilig uitwisselen van facturen.</li>
        <li>Het teruggeven van technische afleverinformatie.</li>
      </ul>
      <p>Het Access Point van de verzender en dat van de ontvanger werken samen om het document af te leveren.</p>

      <h3>Het vierhoeksmodel van Peppol</h3>
      <p>
        Peppol gebruikt een zogenoemd <em>four-corner model</em>, oftewel een vierhoeksmodel.
      </p>
      <p>Daarin zijn vier partijen betrokken:</p>
      <ComparisonTable
        headers={['Onderdeel', 'Rol']}
        rows={[
          ['1. Verzender', 'Het bedrijf dat de factuur maakt'],
          ['2. Access Point verzender', 'De dienstverlener die de factuur verstuurt'],
          ['3. Access Point ontvanger', 'De dienstverlener die de factuur ontvangt'],
          ['4. Ontvanger', 'Het bedrijf dat de factuur moet betalen'],
        ]}
      />
      <p>De route is dus:</p>
      <p>
        <strong>Jouw bedrijf → Jouw Access Point → Access Point van de klant → Jouw klant</strong>
      </p>
      <p>
        Het voordeel is dat je niet voor iedere klant een aparte technische koppeling nodig hebt. Eén geschikte aansluiting kan je toegang geven tot andere aangesloten organisaties.
      </p>

      <h2>Wat is een Peppol-ID?</h2>
      <p>Een Peppol-ID is een elektronische identificatie waarmee een organisatie binnen het Peppol-netwerk kan worden gevonden.</p>
      <p>Het ID bestaat uit een identificatieschema en een bijbehorende waarde. Welke identificatie wordt gebruikt, verschilt per land en organisatie.</p>
      <p>In Nederland kan bijvoorbeeld een identificatie op basis van een KvK-nummer worden gebruikt.</p>
      <p>
        Een Peppol-ID is niet hetzelfde als een e-mailadres. Het helpt de verzenddienst om de juiste ontvanger en diens elektronische ontvangstmogelijkheden te vinden.
      </p>
      <p>Voordat je een factuur verstuurt, moet worden gecontroleerd of de ontvanger via Peppol bereikbaar is en het betreffende documenttype kan ontvangen.</p>

      <h2>Wat is het verschil tussen Peppol en UBL?</h2>
      <p>Peppol en UBL worden vaak in één adem genoemd, maar ze hebben verschillende functies.</p>
      <p>
        <strong>UBL is een bestandsformaat. Peppol is een netwerk voor het uitwisselen van elektronische documenten.</strong>
      </p>
      <p>
        UBL staat voor <em>Universal Business Language</em>. Het is een standaard voor het gestructureerd vastleggen van zakelijke documenten in XML.
      </p>
      <p>Peppol gebruikt gestandaardiseerde documenten, waaronder UBL-facturen, om informatie tussen organisaties uit te wisselen.</p>
      <ComparisonTable
        headers={['UBL', 'Peppol']}
        rows={[
          ['Standaard voor zakelijke documenten', 'Netwerk en afsprakenstelsel voor documentuitwisseling'],
          ['Gebruikt XML', 'Gebruikt aangesloten dienstverleners'],
          ['Beschrijft de factuurgegevens', 'Regelt hoe geschikte documenten worden uitgewisseld'],
          ['Kan als bestand worden gedownload', 'Vereist een geschikte netwerkaansluiting'],
          ['Kan worden geïmporteerd in geschikte software', 'Maakt verzending naar aangesloten ontvangers mogelijk'],
        ]}
      />
      <p>Je kunt dus een UBL-factuur maken zonder deze via Peppol te versturen.</p>
      <p>Andersom moet een factuur die via Peppol wordt verzonden voldoen aan de toepasselijke Peppol-specificaties.</p>
      <p>Een willekeurig UBL/XML-bestand is daarom niet automatisch geschikt voor Peppol.</p>
      <p>
        Wil je meer weten over het bestandsformaat? Lees dan ook onze uitleg over{' '}
        <TextLink href="/blogs/wat-is-een-ubl-factuur">wat een UBL-factuur is</TextLink>.
      </p>

      <h2>Wat is Peppol BIS Billing 3.0?</h2>
      <p>
        Peppol BIS Billing 3.0 is een specificatie voor het elektronisch uitwisselen van facturen en creditnota&apos;s via Peppol.
      </p>
      <p>
        Deze specificatie is gebaseerd op de Europese norm EN 16931 en stelt aanvullende eisen aan de structuur en inhoud van factuurgegevens.
      </p>
      <p>Een factuur moet bijvoorbeeld de juiste identificaties, bedragen, belastinginformatie en documentgegevens bevatten.</p>
      <p>Daarnaast gelden controles op onder andere berekeningen, verplichte velden en de gebruikte codes.</p>
      <p>Dat is belangrijk omdat twee bestanden allebei UBL XML kunnen zijn, terwijl slechts één bestand aan de vereiste Peppol-regels voldoet.</p>
      <p>
        <strong>Een UBL-bestand downloaden is dus niet hetzelfde als een Peppol-conforme factuur maken of versturen.</strong>
      </p>

      <h2>Wat is het verschil tussen Peppol en een PDF-factuur?</h2>
      <p>
        Bij een PDF-factuur ontvang je meestal een document dat bedoeld is om te lezen. Bij een Peppol-factuur ontvangt het systeem een gestructureerd elektronisch document dat automatisch kan worden verwerkt.
      </p>
      <ComparisonTable
        headers={['PDF per e-mail', 'Factuur via Peppol']}
        rows={[
          ['Wordt meestal als bijlage verstuurd', 'Wordt via aangesloten dienstverleners uitgewisseld'],
          ['Is vooral bedoeld om te lezen', 'Is bedoeld voor automatische gegevensverwerking'],
          ['Kan extra gegevensherkenning vereisen', 'Bevat gestandaardiseerde factuurgegevens'],
          ['E-mailadres van klant nodig', 'Elektronische ontvangeridentificatie nodig'],
          ['Ontvangst en verwerking zijn niet standaard gekoppeld', 'Technische afleverinformatie kan beschikbaar zijn'],
        ]}
      />
      <p>Een PDF kan prima geschikt zijn voor veel gewone zakelijke facturen.</p>
      <p>Wanneer een klant echter expliciet om een Peppol-factuur vraagt, is alleen een PDF per e-mail meestal niet voldoende.</p>

      <h2>Wat zijn de voordelen van Peppol?</h2>
      <h3>1. Minder handmatige administratie</h3>
      <p>
        De factuurgegevens kunnen rechtstreeks door geschikte boekhoudsoftware worden verwerkt. Daardoor hoeft de ontvanger minder gegevens over te typen.
      </p>
      <h3>2. Minder kans op fouten</h3>
      <p>Doordat de gegevens gestructureerd worden uitgewisseld, is er minder handmatige invoer nodig. Dat kan het aantal overtypfouten verminderen.</p>
      <p>De factuurgegevens moeten uiteraard nog steeds correct zijn.</p>
      <h3>3. Verschillende boekhoudprogramma&apos;s kunnen samenwerken</h3>
      <p>De verzender en ontvanger hoeven niet hetzelfde programma te gebruiken.</p>
      <p>
        Zolang beide partijen via geschikte Peppol-dienstverleners zijn aangesloten en de juiste documentstandaarden ondersteunen, kunnen ze documenten uitwisselen.
      </p>
      <h3>4. Gestandaardiseerde en beveiligde uitwisseling</h3>
      <p>Peppol gebruikt technische en organisatorische afspraken voor het uitwisselen van documenten tussen aangesloten partijen.</p>
      <p>Dat biedt meer structuur en controle dan een willekeurige XML-bijlage per e-mail.</p>
      <h3>5. Geschikt voor internationale zakelijke facturatie</h3>
      <p>Peppol wordt in meerdere landen gebruikt. Daardoor kunnen organisaties ook over landsgrenzen heen elektronische documenten uitwisselen.</p>
      <p>De toepasselijke wettelijke verplichtingen en technische eisen kunnen per land verschillen.</p>

      <h2>Is Peppol verplicht in Nederland?</h2>
      <p>Peppol is niet automatisch verplicht voor iedere Nederlandse ondernemer of iedere factuur.</p>
      <p>Het is belangrijk om onderscheid te maken tussen drie situaties.</p>
      <h3>Factureren aan de overheid</h3>
      <p>
        Bij bepaalde overheidsopdrachten gelden verplichtingen voor elektronische facturatie. De precieze aanlevervoorwaarden hangen af van de opdrachtgever en de toepasselijke regels.
      </p>
      <p>Peppol is een veelgebruikte manier om dergelijke facturen uit te wisselen, maar niet noodzakelijk het enige toegestane kanaal.</p>
      <h3>Factureren aan andere bedrijven</h3>
      <p>Bij gewone zakelijke facturatie in Nederland bestaat niet voor iedere transactie een algemene verplichting om Peppol te gebruiken.</p>
      <p>Een zakelijke klant kan wel specifieke afspraken maken over de manier waarop leveranciers facturen moeten aanleveren.</p>
      <h3>Toekomstige Europese regels</h3>
      <p>Binnen de Europese Unie wordt gewerkt aan verdere digitalisering van btw-rapportage en elektronische facturatie.</p>
      <p>
        Daarbij moet onderscheid worden gemaakt tussen een verplichting om gestructureerde e-facturen te gebruiken en een verplichting om specifiek het Peppol-netwerk te gebruiken. Dat zijn niet dezelfde zaken.
      </p>
      <p>Controleer altijd de actuele regels voor jouw situatie en het land waarin je factureert.</p>

      <h2>Wat kost Peppol?</h2>
      <p>De kosten van Peppol hangen af van de dienstverlener en de manier waarop je de dienst gebruikt.</p>
      <p>
        Sommige boekhoudprogramma&apos;s bieden Peppol-functionaliteit binnen een abonnement. Andere aanbieders rekenen afzonderlijke kosten voor het verzenden of ontvangen van elektronische facturen.
      </p>
      <p>Veelvoorkomende prijsmodellen zijn:</p>
      <ul>
        <li>Een vast maandbedrag.</li>
        <li>Een bedrag per verzonden factuur.</li>
        <li>Een bundel met een bepaald aantal facturen.</li>
        <li>Peppol-functionaliteit inbegrepen bij een boekhoudabonnement.</li>
      </ul>
      <p>
        Controleer niet alleen de verzendkosten, maar ook eventuele kosten voor registratie, ontvangen, aanvullende gebruikers of grotere factuurvolumes.
      </p>
      <p>Voor een zzp&apos;er die maar enkele elektronische facturen per jaar verstuurt, kan een oplossing zonder vast maandabonnement interessant zijn.</p>

      <h2>Hoe kun je als zzp&apos;er via Peppol factureren?</h2>
      <p>Wil je een factuur via Peppol versturen? Dan kun je deze stappen volgen:</p>
      <ol>
        <li>
          <strong>Vraag je klant naar de factuureisen.</strong> Controleer of Peppol vereist is en welke referenties of identificaties nodig zijn.
        </li>
        <li>
          <strong>Kies een geschikte Peppol-dienstverlener.</strong> Dit kan via je boekhoudprogramma of een afzonderlijke e-facturatiedienst.
        </li>
        <li>
          <strong>Laat je onderneming aansluiten.</strong> De dienstverlener kan hiervoor bedrijfsgegevens en een identiteits- of bevoegdheidscontrole vragen.
        </li>
        <li>
          <strong>Maak een geschikte elektronische factuur.</strong> Zorg dat de gegevens voldoen aan het vereiste factuurprofiel.
        </li>
        <li>
          <strong>Verstuur de factuur via de dienstverlener.</strong> Deze verzorgt de technische verzending via het netwerk.
        </li>
        <li>
          <strong>Controleer de verzendstatus.</strong> Een technische aflevering betekent niet automatisch dat de klant de factuur inhoudelijk heeft goedgekeurd of betaald.
        </li>
      </ol>
      <p>Je hoeft hiervoor meestal geen eigen Access Point te bouwen.</p>

      <h2>Kun je met FactuurBaas een Peppol-factuur maken?</h2>
      <p>Met FactuurBaas kun je momenteel gratis een factuur opstellen en downloaden als PDF of UBL/XML-bestand.</p>
      <p>Dat is handig wanneer je klant een UBL-bestand accepteert of wanneer je het bestand wilt gebruiken in geschikte boekhoudsoftware.</p>
      <p>
        <strong>FactuurBaas biedt momenteel geen rechtstreekse Peppol-verzending aan.</strong>
      </p>
      <p>Een gedownload UBL-bestand is bovendien niet automatisch gevalideerd voor Peppol BIS Billing 3.0.</p>
      <p>
        Wil je een factuur via Peppol versturen? Dan heb je een geschikte dienstverlener nodig die het document kan controleren en verzenden volgens de vereiste specificaties.
      </p>
      <p>Wil je alvast een UBL-factuur maken?</p>
      <CtaButton label="Gratis UBL-factuur maken" />

      <h2>Veelgestelde vragen over Peppol</h2>
      <h3>Wat is Peppol in eenvoudige woorden?</h3>
      <p>
        Peppol is een netwerk waarmee bedrijven en overheidsorganisaties elektronische facturen en andere zakelijke documenten op een gestandaardiseerde manier kunnen uitwisselen.
      </p>
      <h3>Waar staat Peppol voor?</h3>
      <p>
        De naam komt oorspronkelijk van <em>Pan-European Public Procurement Online</em>. Tegenwoordig wordt Peppol gebruikt als naam voor het internationale netwerk en afsprakenstelsel.
      </p>
      <h3>Is Peppol hetzelfde als UBL?</h3>
      <p>
        Nee. UBL is een standaard voor de structuur van elektronische documenten. Peppol is een netwerk voor het uitwisselen van geschikte documenten tussen organisaties.
      </p>
      <h3>Is Peppol gratis?</h3>
      <p>
        Dat hangt af van de aanbieder. Sommige boekhoudprogramma&apos;s bieden Peppol-functionaliteit binnen hun abonnement. Andere diensten rekenen afzonderlijke kosten.
      </p>
      <h3>Heb ik een Peppol-ID nodig?</h3>
      <p>
        Om als ontvanger binnen het netwerk gevonden te worden, gebruikt Peppol een elektronische identificatie. Je dienstverlener helpt doorgaans bij de juiste registratie en identificatie.
      </p>
      <h3>Kan ik een PDF via Peppol versturen?</h3>
      <p>
        Een gewone PDF is op zichzelf geen gestructureerde Peppol-factuur. Voor verzending is een document nodig dat voldoet aan de toepasselijke elektronische factuurspecificaties. Een PDF kan in bepaalde gevallen wel als bijlage bij een gestructureerde factuur worden opgenomen.
      </p>
      <h3>Kan ik een UBL-bestand via Peppol versturen?</h3>
      <p>
        Dat kan wanneer het bestand voldoet aan de vereiste Peppol-specificaties en je gebruikmaakt van een geschikte verzenddienst. Niet ieder UBL-bestand voldoet automatisch aan die eisen.
      </p>
      <h3>Is Peppol verplicht voor zzp&apos;ers?</h3>
      <p>
        Niet voor iedere Nederlandse zzp&apos;er en iedere factuur. Verplichtingen kunnen afhangen van de opdrachtgever, het soort transactie en de toepasselijke regelgeving.
      </p>
      <h3>Heb ik een boekhoudprogramma nodig voor Peppol?</h3>
      <p>Niet noodzakelijk. Je kunt ook gebruikmaken van een afzonderlijke e-facturatiedienst die Peppol ondersteunt.</p>
      <h3>Wordt een Peppol-factuur automatisch betaald?</h3>
      <p>Nee. Peppol verzorgt de elektronische documentuitwisseling. De klant moet de factuur nog verwerken en betalen volgens de gemaakte afspraken.</p>

      <h2>Gratis een elektronische factuur als UBL maken</h2>
      <p>Peppol maakt het mogelijk om elektronische facturen uit te wisselen tussen verschillende organisaties en boekhoudsystemen.</p>
      <p>Wil je eerst een gestructureerde factuur maken? Dan kun je met FactuurBaas gratis een UBL/XML-bestand downloaden.</p>
      <p>Je vult je bedrijfsgegevens, klantgegevens, factuurregels en btw in en kiest vervolgens het gewenste bestandsformaat.</p>
      <CtaButton label="Maak gratis een UBL-factuur" />
      <p>Geen account nodig. Geen abonnement. Ook beschikbaar als PDF.</p>
      <p>
        <em>
          Let op: FactuurBaas verstuurt momenteel niet via Peppol. Controleer of het UBL-bestand voldoet aan de eisen van de ontvangende software of verzenddienst.
        </em>
      </p>
    </>
  ),
};
