import React from 'react';
import Link from 'next/link';
import { FileSignature } from 'lucide-react';
import LegalDocument from '@/components/site/LegalDocument';

export const metadata = {
  title: 'Verwerkersovereenkomst (DPA) | FactuurBaas',
  description:
    'Verwerkersovereenkomst van FactuurBaas: afspraken wanneer wij persoonsgegevens van klanten, facturen, offertes, uren, inkomsten en uitgaven verwerken als verwerker.',
  alternates: { canonical: 'https://factuurbaas.nl/verwerkersovereenkomst' },
};

const sections = [
  { id: 'partijen', label: '1. Partijen en rollen' },
  { id: 'onderwerp', label: '2. Onderwerp en aard' },
  { id: 'betrokkenen', label: '3. Betrokkenen en gegevens' },
  { id: 'doeleinden', label: '4. Doeleinden en instructies' },
  { id: 'duur', label: '5. Duur van de verwerking' },
  { id: 'verplichtingen', label: '6. Verplichtingen van FactuurBaas' },
  { id: 'geheimhouding', label: '7. Geheimhouding en toegang' },
  { id: 'beveiliging', label: '8. Beveiliging' },
  { id: 'subverwerkers', label: '9. Subverwerkers' },
  { id: 'export', label: '10. Export, verwijdering en back-ups' },
  { id: 'doorgifte', label: '11. Internationale doorgifte' },
  { id: 'datalekken', label: '12. Datalekken' },
  { id: 'rechten', label: '13. Rechten van betrokkenen' },
  { id: 'audits', label: '14. Informatie, controle en audits' },
  { id: 'verplichtingen-gebruiker', label: '15. Verplichtingen van de Gebruiker' },
  { id: 'aansprakelijkheid', label: '16. Aansprakelijkheid' },
  { id: 'rangorde', label: '17. Rangorde en wijzigingen' },
  { id: 'contact', label: '18. Contact' },
];

const docLink = 'text-warm-orange hover:underline';

function MailLink() {
  return (
    <a href="mailto:mail@factuurbaas.nl" className={docLink}>
      mail@factuurbaas.nl
    </a>
  );
}

export default function DataProcessingAgreementPage() {
  return (
    <LegalDocument
      backHref="/privacybeleid"
      backLabel="Terug naar Privacybeleid"
      eyebrow="Verwerkersovereenkomst"
      eyebrowIcon={FileSignature}
      title="Verwerkersovereenkomst (DPA)"
      sections={sections}
      meta={<span>FactuurBaas.nl — Laatst bijgewerkt: 18 oktober 2026</span>}
    >
      <p>
        Deze verwerkersovereenkomst (Data Processing Agreement, hierna: &quot;DPA&quot;) maakt onderdeel uit van de
        dienstverlening van FactuurBaas.nl, een dienst van 2xGen LLC.
      </p>
      <p>
        Deze DPA regelt de verwerking van persoonsgegevens die gebruikers via FactuurBaas opslaan of beheren en
        waarvoor FactuurBaas optreedt als verwerker namens de gebruiker.
      </p>
      <p>
        Door bij het aanmaken van een account of het inloggen akkoord te gaan met de{' '}
        <Link href="/algemene-voorwaarden" className={docLink}>
          Algemene voorwaarden
        </Link>{' '}
        en de bijbehorende Verwerkersovereenkomst, aanvaarden zakelijke gebruikers deze DPA als onderdeel van de
        overeenkomst met FactuurBaas.
      </p>
      <p>
        Een afzonderlijk ondertekend exemplaar kan worden aangevraagd via <MailLink />.
      </p>

      <h2 id="partijen">1. Partijen en rollen</h2>
      <h3>1.1 Verwerker</h3>
      <p>
        <strong>2xGen LLC</strong>, handelend onder de naam FactuurBaas.nl
      </p>
      <p>
        1209 Mountain Road Pl NE, STE R
        <br />
        Albuquerque, NM 87110
        <br />
        Verenigde Staten
      </p>
      <p>Registratienummer: 0008045445</p>
      <p>
        <strong>Europees contactpunt:</strong>
        <br />
        Matthijs van Reek
        <br />
        Praag, Tsjechië
        <br />
        E-mail: <MailLink />
      </p>
      <p>Het dagelijkse beheer en de zakelijke besluitvorming vinden plaats vanuit Praag, Tsjechië.</p>
      <h3>1.2 Verwerkingsverantwoordelijke</h3>
      <p>
        De ondernemer, natuurlijke persoon of rechtspersoon die een FactuurBaas-account gebruikt om persoonsgegevens
        van klanten, contactpersonen of andere zakelijke relaties te verwerken.
      </p>
      <p>Hierna aangeduid als &quot;Gebruiker&quot; of &quot;Verwerkingsverantwoordelijke&quot;.</p>
      <h3>1.3 Verdeling van verantwoordelijkheden</h3>
      <p>
        Wanneer de Gebruiker persoonsgegevens van eigen klanten of relaties invoert, verwerkt FactuurBaas deze
        gegevens namens de Gebruiker en overeenkomstig deze DPA.
      </p>
      <p>
        De Gebruiker bepaalt de doeleinden waarvoor de gegevens worden vastgelegd en blijft verantwoordelijk voor de
        rechtmatigheid van deze verwerking.
      </p>
      <p>
        FactuurBaas bepaalt zelfstandig de doeleinden en middelen van bepaalde eigen verwerkingen, zoals
        accountbeheer, beveiliging, gebruikerscommunicatie en het functioneren van het platform.
      </p>
      <p>
        Voor deze eigen verwerkingen treedt FactuurBaas op als zelfstandig verwerkingsverantwoordelijke. Hierop is het{' '}
        <Link href="/privacybeleid" className={docLink}>
          Privacybeleid
        </Link>{' '}
        van toepassing.
      </p>

      <h2 id="onderwerp">2. Onderwerp en aard van de verwerking</h2>
      <p>FactuurBaas biedt een online platform waarmee ondernemers hun administratie kunnen organiseren.</p>
      <p>
        De verwerking in opdracht van de Gebruiker omvat, voor zover persoonsgegevens worden ingevoerd of opgeslagen,
        de volgende onderdelen.
      </p>
      <h3>2.1 Facturen</h3>
      <ul>
        <li>Factuurnummers en datums</li>
        <li>Klant- en contactgegevens</li>
        <li>Omschrijvingen van producten en diensten</li>
        <li>Bedragen en btw</li>
        <li>Betalingsvoorwaarden</li>
        <li>Vervaldatums en betalingsstatussen</li>
        <li>Overige ingevoerde factuurgegevens</li>
      </ul>
      <h3>2.2 Offertes</h3>
      <ul>
        <li>Offertenummers en datums</li>
        <li>Klantgegevens</li>
        <li>Producten, diensten en werkzaamheden</li>
        <li>Bedragen en btw</li>
        <li>Geldigheidsdatums</li>
        <li>Offertestatussen</li>
        <li>Eventuele opmerkingen en aanvullende informatie</li>
      </ul>
      <h3>2.3 Klantenbeheer</h3>
      <ul>
        <li>Namen van klanten en contactpersonen</li>
        <li>Bedrijfsnamen</li>
        <li>Adressen</li>
        <li>E-mailadressen</li>
        <li>Telefoonnummers</li>
        <li>KvK- en btw-gegevens</li>
        <li>Overige door de Gebruiker ingevoerde klantinformatie</li>
      </ul>
      <h3>2.4 Urenregistratie</h3>
      <ul>
        <li>Datums en geregistreerde uren</li>
        <li>Omschrijvingen van werkzaamheden</li>
        <li>Gekoppelde klanten of opdrachten</li>
        <li>Uurtarieven</li>
        <li>Berekende bedragen</li>
      </ul>
      <h3>2.5 Inkomsten</h3>
      <ul>
        <li>Omschrijvingen van inkomsten</li>
        <li>Datums</li>
        <li>Bedragen</li>
        <li>Btw-tarieven en btw-bedragen</li>
        <li>Betaalmethoden</li>
        <li>Eventuele gekoppelde klantgegevens</li>
      </ul>
      <h3>2.6 Uitgaven</h3>
      <ul>
        <li>Omschrijvingen van uitgaven</li>
        <li>Datums</li>
        <li>Bedragen</li>
        <li>Btw-gegevens</li>
        <li>Leveranciersgegevens</li>
        <li>Categorieën</li>
        <li>Overige ingevoerde informatie</li>
      </ul>
      <h3>2.7 Bedrijfsprofiel en instellingen</h3>
      <p>Voor zover deze gegevens onderdeel zijn van de administratie die FactuurBaas namens de Gebruiker verwerkt:</p>
      <ul>
        <li>Bedrijfsnaam en contactgegevens</li>
        <li>Bedrijfslogo</li>
        <li>Bankrekeninggegevens</li>
        <li>Standaard betaaltermijnen</li>
        <li>Uurtarieven</li>
        <li>Ingestelde werkuren en werkdagen</li>
        <li>Omzetdoelen</li>
        <li>Overige administratieve instellingen</li>
      </ul>
      <h3>2.8 Dashboard en financiële overzichten</h3>
      <p>
        FactuurBaas verwerkt de opgeslagen gegevens om financiële overzichten en berekeningen voor de Gebruiker samen
        te stellen.
      </p>
      <p>Dit omvat onder andere:</p>
      <ul>
        <li>Inkomsten- en uitgaventotalen</li>
        <li>Openstaande facturen</li>
        <li>Indicatieve btw-reserveringen</li>
        <li>Maandelijkse vergelijkingen</li>
        <li>Omzetdoelen en voortgang</li>
        <li>Financiële samenvattingen</li>
      </ul>
      <p>Deze berekeningen worden uitgevoerd om de functionaliteiten van de Dienst aan de Gebruiker beschikbaar te stellen.</p>
      <h3>2.9 Aard van de verwerkingshandelingen</h3>
      <p>De verwerking kan bestaan uit:</p>
      <ul>
        <li>Ontvangen</li>
        <li>Vastleggen</li>
        <li>Opslaan</li>
        <li>Structureren</li>
        <li>Berekenen</li>
        <li>Raadplegen voor technische uitvoering</li>
        <li>Weergeven</li>
        <li>Bijwerken</li>
        <li>Exporteren</li>
        <li>Verwijderen</li>
      </ul>

      <h2 id="betrokkenen">3. Categorieën van betrokkenen en persoonsgegevens</h2>
      <h3>3.1 Betrokkenen</h3>
      <p>De verwerking kan betrekking hebben op:</p>
      <ul>
        <li>Klanten van de Gebruiker</li>
        <li>Zakelijke relaties</li>
        <li>Contactpersonen bij bedrijven</li>
        <li>Opdrachtgevers</li>
        <li>Leveranciers</li>
        <li>Andere personen die door de Gebruiker in administratieve gegevens worden vermeld</li>
      </ul>
      <h3>3.2 Persoonsgegevens</h3>
      <p>Afhankelijk van de ingevoerde gegevens kan het gaan om:</p>
      <ul>
        <li>Namen</li>
        <li>Contactgegevens</li>
        <li>Adresgegevens</li>
        <li>Bedrijfsgegevens</li>
        <li>Bankrekeningnummers</li>
        <li>Financiële gegevens</li>
        <li>Factuur- en offertegegevens</li>
        <li>Informatie over werkzaamheden en zakelijke transacties</li>
        <li>Overige persoonsgegevens die de Gebruiker zelf invoert</li>
      </ul>
      <p>
        De Dienst is niet specifiek bedoeld voor het verwerken van bijzondere categorieën persoonsgegevens zoals
        gezondheidsgegevens, religieuze overtuigingen of andere bijzondere persoonsgegevens in de zin van artikel 9
        AVG.
      </p>
      <p>
        De Gebruiker dient dergelijke gegevens niet in te voeren, tenzij daarvoor een geldige rechtsgrond bestaat en de
        verwerking binnen de mogelijkheden en afspraken van de Dienst past.
      </p>

      <h2 id="doeleinden">4. Doeleinden en instructies</h2>
      <p>
        FactuurBaas verwerkt persoonsgegevens uitsluitend voor de doeleinden die noodzakelijk zijn om de overeengekomen
        Dienst namens de Gebruiker uit te voeren.
      </p>
      <p>De Gebruiker geeft instructies via de functionaliteiten van FactuurBaas, waaronder:</p>
      <ul>
        <li>Het aanmaken en beheren van administratieve gegevens.</li>
        <li>Het opslaan van facturen en offertes.</li>
        <li>Het bijhouden van klanten en uren.</li>
        <li>Het registreren van inkomsten en uitgaven.</li>
        <li>Het genereren van financiële overzichten.</li>
        <li>Het exporteren en verwijderen van gegevens.</li>
      </ul>
      <p>Deze DPA en de instructies die via de Dienst worden gegeven, vormen de gedocumenteerde instructies van de Gebruiker.</p>
      <p>
        FactuurBaas verwerkt de gegevens niet voor andere doeleinden, tenzij een toepasselijke wettelijke verplichting
        dit vereist. Wanneer wettelijk toegestaan, informeren wij de Gebruiker vooraf over een dergelijke verplichting.
      </p>
      <p>
        Wanneer FactuurBaas van mening is dat een instructie in strijd is met toepasselijke privacywetgeving,
        informeren wij de Gebruiker hierover.
      </p>

      <h2 id="duur">5. Duur van de verwerking</h2>
      <p>
        Deze DPA geldt zolang de Gebruiker de Dienst gebruikt en FactuurBaas namens de Gebruiker persoonsgegevens
        verwerkt.
      </p>
      <p>De verwerking eindigt wanneer:</p>
      <ul>
        <li>De Gebruiker de betreffende gegevens verwijdert.</li>
        <li>De Gebruiker het account verwijdert.</li>
        <li>De dienstverlening wordt beëindigd.</li>
        <li>Een andere toepasselijke beëindigingsgrond geldt.</li>
      </ul>
      <p>
        Na beëindiging worden de gegevens verwijderd of, op verzoek en voor zover technisch beschikbaar, teruggegeven
        overeenkomstig artikel 10 van deze DPA.
      </p>

      <h2 id="verplichtingen">6. Verplichtingen van FactuurBaas</h2>
      <p>FactuurBaas verplicht zich om:</p>
      <ol>
        <li>
          Persoonsgegevens uitsluitend op basis van gedocumenteerde instructies van de Gebruiker te verwerken, tenzij
          toepasselijke wetgeving anders vereist.
        </li>
        <li>
          Ervoor te zorgen dat personen die toegang hebben tot persoonsgegevens gebonden zijn aan passende
          geheimhoudingsverplichtingen.
        </li>
        <li>Passende technische en organisatorische beveiligingsmaatregelen te treffen.</li>
        <li>Alleen subverwerkers in te schakelen overeenkomstig de afspraken in deze DPA.</li>
        <li>
          De Gebruiker, rekening houdend met de aard van de verwerking, redelijkerwijs te ondersteunen bij verzoeken
          van betrokkenen.
        </li>
        <li>
          De Gebruiker redelijkerwijs te ondersteunen bij verplichtingen met betrekking tot gegevensbeveiliging,
          datalekken, gegevensbeschermingseffectbeoordelingen en voorafgaande raadpleging van toezichthouders, voor
          zover van toepassing en voor zover de benodigde informatie beschikbaar is.
        </li>
        <li>
          De Gebruiker zonder onredelijke vertraging te informeren nadat FactuurBaas kennis heeft genomen van een
          inbreuk in verband met persoonsgegevens die namens de Gebruiker worden verwerkt.
        </li>
        <li>
          Na beëindiging van de dienstverlening de gegevens te verwijderen of terug te geven overeenkomstig de
          toepasselijke afspraken.
        </li>
        <li>
          De informatie beschikbaar te stellen die redelijkerwijs noodzakelijk is om naleving van de verplichtingen uit
          artikel 28 AVG aan te tonen.
        </li>
      </ol>

      <h2 id="geheimhouding">7. Geheimhouding en toegang tot gegevens</h2>
      <p>
        Persoonsgegevens die via FactuurBaas worden opgeslagen, zijn in de eerste plaats bedoeld voor gebruik door de
        betreffende Gebruiker.
      </p>
      <p>
        Voor het uitvoeren, onderhouden en beveiligen van de Dienst kunnen bevoegde beheerders technisch toegang hebben
        tot opgeslagen gegevens.
      </p>
      <p>
        Toegang is beperkt tot de eigenaar van FactuurBaas en andere personen die uitdrukkelijk zijn gemachtigd en voor
        hun werkzaamheden toegang nodig hebben.
      </p>
      <p>
        Personen die namens FactuurBaas toegang krijgen tot persoonsgegevens, moeten gebonden zijn aan passende
        geheimhoudingsverplichtingen, waaronder waar van toepassing een geheimhoudingsovereenkomst (NDA).
      </p>
      <p>FactuurBaas bekijkt de inhoud van individuele administraties niet routinematig.</p>
      <p>
        Toegang tot gegevens kan noodzakelijk zijn voor technische ondersteuning, beveiliging, foutopsporing, onderhoud
        of het voldoen aan wettelijke verplichtingen.
      </p>

      <h2 id="beveiliging">8. Technische en organisatorische beveiliging</h2>
      <p>
        FactuurBaas treft passende maatregelen om persoonsgegevens te beschermen tegen ongeautoriseerde toegang,
        verlies, vernietiging en onrechtmatige verwerking.
      </p>
      <p>Deze maatregelen omvatten, voor zover van toepassing op de betreffende systemen:</p>
      <ul>
        <li>Beveiligde verbindingen via HTTPS.</li>
        <li>Authenticatie voor gebruikers en beheerders.</li>
        <li>Row Level Security voor relevante databasegegevens.</li>
        <li>Toegangsbeperkingen tot beheersystemen.</li>
        <li>Privé-opslag voor bestanden waarvoor openbare toegang niet nodig is.</li>
        <li>Geheimhoudingsverplichtingen voor bevoegde personen.</li>
        <li>Beveiligingsvoorzieningen van onze hosting- en databaseproviders.</li>
        <li>Technische controles en onderhoud.</li>
        <li>Maatregelen voor het beperken van ongeautoriseerde toegang.</li>
      </ul>
      <p>
        De beveiligingsmaatregelen worden afgestemd op de aard van de gegevens, de risico&apos;s van de verwerking en
        de beschikbare technische mogelijkheden.
      </p>
      <p>
        Meer informatie is beschikbaar op onze pagina{' '}
        <Link href="/veiligheid" className={docLink}>
          Veiligheid
        </Link>
        .
      </p>

      <h2 id="subverwerkers">9. Subverwerkers</h2>
      <p>
        De Gebruiker verleent FactuurBaas algemene toestemming voor het inschakelen van subverwerkers die noodzakelijk
        zijn voor het leveren van de Dienst, onder de voorwaarden van dit artikel.
      </p>
      <h3>9.1 Huidige subverwerkers</h3>
      <p>
        <strong>Supabase</strong>
      </p>
      <p>Doel: database, authenticatie-infrastructuur en bestandsopslag.</p>
      <p>Primaire databaseregio: eu-north-1, Stockholm, Zweden.</p>
      <p>
        <strong>Vercel</strong>
      </p>
      <p>Doel: hosting van de website, technische infrastructuur en content delivery.</p>
      <p>Afhankelijk van de configuratie kunnen technische verwerkingen via verschillende infrastructuurlocaties plaatsvinden.</p>
      <h3>9.2 Andere technische dienstverleners</h3>
      <p>
        <strong>Google OAuth</strong>
      </p>
      <p>Voor authenticatie van gebruikers die ervoor kiezen met Google in te loggen.</p>
      <p>FactuurBaas vraagt via deze functionaliteit geen toegang tot Gmail of Google-contacten.</p>
      <p>
        <strong>Resend</strong>
      </p>
      <p>Voor transactionele e-mails aan accountgebruikers, zoals accountgerelateerde meldingen.</p>
      <p>Voor e-mailverzending is een Europese regio in Ierland ingesteld.</p>
      <p>
        De precieze rol van een dienstverlener als subverwerker of zelfstandig verwerkingsverantwoordelijke hangt af
        van de gegevens en de betreffende verwerking.
      </p>
      <h3>9.3 Voorwaarden voor subverwerkers</h3>
      <p>
        Wanneer FactuurBaas een subverwerker inschakelt voor persoonsgegevens die namens de Gebruiker worden verwerkt,
        zorgt FactuurBaas voor passende contractuele afspraken die voldoen aan de toepasselijke eisen van artikel 28
        AVG.
      </p>
      <p>
        FactuurBaas blijft tegenover de Gebruiker verantwoordelijk voor de nakoming van de verplichtingen van
        ingeschakelde subverwerkers zoals bepaald in de AVG.
      </p>
      <h3>9.4 Wijzigingen in subverwerkers</h3>
      <p>
        Bij voorgenomen toevoeging of vervanging van subverwerkers die persoonsgegevens namens de Gebruiker verwerken,
        informeert FactuurBaas de Gebruiker vooraf op een geschikte wijze.
      </p>
      <p>De Gebruiker krijgt de mogelijkheid om op redelijke, gemotiveerde privacygronden bezwaar te maken.</p>
      <p>
        Wanneer partijen geen passende oplossing kunnen bereiken, kan de Gebruiker de verwerking beëindigen door de
        Dienst niet langer te gebruiken en het account te verwijderen.
      </p>

      <h2 id="export">10. Export, verwijdering en back-ups</h2>
      <h3>10.1 Export</h3>
      <p>Gebruikers kunnen de beschikbare exportfunctionaliteiten gebruiken om opgeslagen gegevens te downloaden.</p>
      <p>
        Dit omvat onder andere een JSON-export via het gebruikersprofiel en, waar beschikbaar, aanvullende
        exportmogelijkheden voor facturen en offertes.
      </p>
      <h3>10.2 Verwijdering</h3>
      <p>Gebruikers kunnen afzonderlijke administratieve gegevens verwijderen of het volledige account beëindigen.</p>
      <p>
        Bij accountverwijdering worden de bijbehorende opgeslagen gegevens verwijderd volgens de toepasselijke
        verwijderprocedure, tenzij verdere bewaring wettelijk verplicht is.
      </p>
      <h3>10.3 Back-ups</h3>
      <p>
        Het kan voorkomen dat verwijderde gegevens gedurende een beperkte periode aanwezig blijven in technische
        back-ups van onze dienstverleners.
      </p>
      <p>
        Dergelijke back-ups worden niet gebruikt voor de reguliere dienstverlening en verlopen volgens de toepasselijke
        back-up- en retentieprocedures.
      </p>
      <h3>10.4 Beëindiging</h3>
      <p>
        Na beëindiging van de dienstverlening verwijdert FactuurBaas de namens de Gebruiker verwerkte persoonsgegevens
        of stelt deze, naar keuze van de Gebruiker en voor zover technisch beschikbaar, beschikbaar voor export, tenzij
        toepasselijke wetgeving verdere bewaring vereist.
      </p>

      <h2 id="doorgifte">11. Internationale doorgifte</h2>
      <p>FactuurBaas wordt geëxploiteerd door 2xGen LLC, een in de Verenigde Staten geregistreerde onderneming.</p>
      <p>Het dagelijkse beheer van de Dienst vindt plaats vanuit Praag, Tsjechië.</p>
      <p>Onze primaire database wordt gehost in Zweden.</p>
      <p>
        Het gebruik van externe technische dienstverleners kan ertoe leiden dat bepaalde persoonsgegevens buiten de
        Europese Economische Ruimte worden verwerkt of toegankelijk zijn.
      </p>
      <p>
        Wanneer persoonsgegevens die onder deze DPA vallen internationaal worden doorgegeven en daarvoor aanvullende
        AVG-voorwaarden gelden, zorgt FactuurBaas voor een toepasselijk doorgiftemechanisme en passende waarborgen,
        zoals standaardcontractbepalingen of een toepasselijk adequaatheidsbesluit.
      </p>

      <h2 id="datalekken">12. Datalekken en beveiligingsincidenten</h2>
      <p>
        Wanneer FactuurBaas kennis krijgt van een inbreuk in verband met persoonsgegevens die namens de Gebruiker
        worden verwerkt, informeren wij de Gebruiker zonder onredelijke vertraging.
      </p>
      <p>Voor zover de informatie beschikbaar is, bevat deze melding:</p>
      <ul>
        <li>De aard van het incident.</li>
        <li>De betrokken categorieën gegevens.</li>
        <li>De mogelijke gevolgen.</li>
        <li>De reeds genomen of voorgenomen maatregelen.</li>
        <li>Eventuele aanvullende informatie die noodzakelijk is voor de beoordeling van het incident.</li>
      </ul>
      <p>
        FactuurBaas ondersteunt de Gebruiker redelijkerwijs bij het beoordelen van de gevolgen en het nakomen van
        toepasselijke meldverplichtingen.
      </p>
      <p>
        De Gebruiker blijft als verwerkingsverantwoordelijke verantwoordelijk voor de beoordeling of een melding aan
        een toezichthouder of betrokkenen noodzakelijk is.
      </p>

      <h2 id="rechten">13. Rechten van betrokkenen</h2>
      <p>
        De Gebruiker is als verwerkingsverantwoordelijke in beginsel verantwoordelijk voor het behandelen van verzoeken
        van betrokkenen.
      </p>
      <p>
        Dit kan onder andere gaan om verzoeken tot inzage, correctie, verwijdering, beperking of overdracht van
        persoonsgegevens.
      </p>
      <p>
        FactuurBaas ondersteunt de Gebruiker hierbij, rekening houdend met de aard van de verwerking en de beschikbare
        technische mogelijkheden.
      </p>
      <p>
        Wanneer FactuurBaas rechtstreeks een verzoek ontvangt dat betrekking heeft op gegevens die namens een Gebruiker
        worden verwerkt, kan FactuurBaas de verzoeker doorverwijzen naar de betreffende Gebruiker of het verzoek aan de
        Gebruiker doorgeven, voor zover passend en wettelijk toegestaan.
      </p>

      <h2 id="audits">14. Informatie, controle en audits</h2>
      <p>
        FactuurBaas stelt de informatie beschikbaar die redelijkerwijs noodzakelijk is om aan te tonen dat wordt voldaan
        aan de verplichtingen die op FactuurBaas rusten als verwerker.
      </p>
      <p>De Gebruiker kan gemotiveerd verzoeken om aanvullende informatie over de beveiliging en verwerking van persoonsgegevens.</p>
      <p>
        Voor zover vereist op grond van artikel 28 AVG, maakt FactuurBaas audits en inspecties door de Gebruiker of een
        door deze gemachtigde auditor mogelijk en levert daaraan medewerking.
      </p>
      <p>Bij het uitvoeren van controles houden partijen rekening met:</p>
      <ul>
        <li>De bescherming van gegevens van andere gebruikers.</li>
        <li>De beveiliging en continuïteit van de Dienst.</li>
        <li>De vertrouwelijkheid van bedrijfsinformatie.</li>
        <li>De redelijke omvang en het doel van de controle.</li>
      </ul>
      <p>Partijen stemmen de praktische uitvoering van een audit vooraf af, zonder afbreuk te doen aan wettelijke auditrechten.</p>

      <h2 id="verplichtingen-gebruiker">15. Verplichtingen van de Gebruiker</h2>
      <p>De Gebruiker is verantwoordelijk voor:</p>
      <ul>
        <li>Het rechtmatig verzamelen van persoonsgegevens.</li>
        <li>Het hebben van een geldige rechtsgrond voor de verwerking.</li>
        <li>Het informeren van klanten en andere betrokkenen waar nodig.</li>
        <li>Het invoeren van juiste en relevante gegevens.</li>
        <li>Het beperken van de ingevoerde gegevens tot wat noodzakelijk is.</li>
        <li>Het veilig beheren van het eigen account.</li>
        <li>Het naleven van toepasselijke administratieve en fiscale verplichtingen.</li>
        <li>Het behandelen van privacyverzoeken van eigen klanten en relaties.</li>
      </ul>
      <p>
        De Gebruiker dient FactuurBaas niet te gebruiken voor verwerkingen die in strijd zijn met toepasselijke
        wetgeving of buiten de overeengekomen dienstverlening vallen.
      </p>

      <h2 id="aansprakelijkheid">16. Aansprakelijkheid</h2>
      <p>
        Op de aansprakelijkheid van partijen zijn de bepalingen uit de{' '}
        <Link href="/algemene-voorwaarden" className={docLink}>
          Algemene voorwaarden
        </Link>{' '}
        van toepassing, voor zover wettelijk toegestaan.
      </p>
      <p>
        Deze DPA beperkt geen rechten of verplichtingen die op grond van toepasselijk dwingend privacyrecht niet mogen
        worden uitgesloten of beperkt.
      </p>

      <h2 id="rangorde">17. Rangorde en wijzigingen</h2>
      <p>Deze DPA vormt onderdeel van de contractuele afspraken tussen FactuurBaas en de Gebruiker.</p>
      <p>
        Wanneer bepalingen uit deze DPA en de Algemene voorwaarden met elkaar in strijd zijn voor zover het de
        verwerking van persoonsgegevens namens de Gebruiker betreft, heeft deze DPA voor dat onderwerp voorrang.
      </p>
      <p>
        FactuurBaas kan deze DPA aanpassen wanneer wijzigingen in de Dienst, technische infrastructuur of wet- en
        regelgeving dit noodzakelijk maken.
      </p>
      <p>Bij wezenlijke wijzigingen informeren wij Gebruikers waar dit wettelijk vereist is.</p>

      <h2 id="contact">18. Contact</h2>
      <p>
        Voor vragen over deze DPA, de verwerking van persoonsgegevens of het aanvragen van een afzonderlijk ondertekend
        exemplaar kun je contact opnemen via:
      </p>
      <p>
        <strong>FactuurBaas — 2xGen LLC</strong>
      </p>
      <p>
        1209 Mountain Road Pl NE, STE R
        <br />
        Albuquerque, NM 87110
        <br />
        Verenigde Staten
      </p>
      <p>Registratienummer: 0008045445</p>
      <p>
        <strong>Europees contactpunt:</strong>
        <br />
        Matthijs van Reek
        <br />
        Praag, Tsjechië
      </p>
      <p>
        <strong>E-mail:</strong> <MailLink />
      </p>
      <p>
        <strong>Website:</strong>{' '}
        <a href="https://factuurbaas.nl" className={docLink}>
          https://factuurbaas.nl
        </a>
      </p>
    </LegalDocument>
  );
}
