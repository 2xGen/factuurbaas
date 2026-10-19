import React from 'react';
import Link from 'next/link';
import { Shield } from 'lucide-react';
import LegalDocument from '@/components/site/LegalDocument';
import { btn } from '@/components/site/editorial';

export const metadata = {
  title: 'Privacybeleid | FactuurBaas',
  description:
    'Privacybeleid van FactuurBaas: welke gegevens we verwerken voor facturen, offertes, klanten, uren, inkomsten, uitgaven en boekhouderaanvragen, en welke rechten je hebt.',
  alternates: { canonical: 'https://factuurbaas.nl/privacybeleid' },
};

const sections = [
  { id: 'verantwoordelijke', label: '1. Wie is verantwoordelijk' },
  { id: 'gegevens', label: '2. Welke gegevens' },
  { id: 'waarom', label: '3. Waarom we verwerken' },
  { id: 'inzage', label: '4. Wie kan gegevens bekijken' },
  { id: 'delen', label: '5. Delen met derden' },
  { id: 'boekhouder', label: '6. Boekhouder vinden' },
  { id: 'dienstverleners', label: '7. Technische dienstverleners' },
  { id: 'locatie', label: '8. Waar gegevens worden verwerkt' },
  { id: 'bewaartermijn', label: '9. Bewaartermijnen' },
  { id: 'beveiliging', label: '10. Beveiliging' },
  { id: 'rechtsgronden', label: '11. Rechtsgronden' },
  { id: 'rechten', label: '12. Jouw rechten' },
  { id: 'klanten', label: '13. Gegevens van jouw klanten' },
  { id: 'cookies', label: '14. Cookies' },
  { id: 'wijzigingen', label: '15. Wijzigingen' },
  { id: 'contact', label: '16. Contact' },
];

function MailLink() {
  return (
    <a href="mailto:mail@factuurbaas.nl" className="text-warm-orange hover:underline">
      mail@factuurbaas.nl
    </a>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <LegalDocument
      backHref="/"
      backLabel="Terug naar Home"
      eyebrow="Privacy & AVG"
      eyebrowIcon={Shield}
      title="Privacybeleid"
      sections={sections}
      meta={
        <>
          <span>Laatst bijgewerkt: 18 oktober 2026</span>
          <Link href="/verwerkersovereenkomst" className={btn.link}>
            Verwerkersovereenkomst
          </Link>
        </>
      }
    >
      <p>
        Bij FactuurBaas vinden we het belangrijk dat je weet wat er met je persoonsgegevens en
        bedrijfsgegevens gebeurt. Of je nu facturen maakt, offertes opstelt, klanten beheert, uren
        registreert, inkomsten en uitgaven bijhoudt of een boekhouder zoekt: wij gaan zorgvuldig om
        met de gegevens die je aan ons toevertrouwt.
      </p>
      <p>
        In dit privacybeleid leggen we uit welke gegevens wij verwerken, waarom wij dat doen, wie
        toegang kan hebben tot deze gegevens, met welke partijen wij gegevens delen, hoe lang wij
        gegevens bewaren en welke rechten je hebt.
      </p>
      <p>
        Dit privacybeleid is van toepassing op <strong>www.factuurbaas.nl</strong> en de
        bijbehorende diensten van FactuurBaas.
      </p>

      <h2 id="verantwoordelijke">1. Wie is verantwoordelijk voor je gegevens?</h2>
      <p>FactuurBaas wordt geëxploiteerd door:</p>
      <p>
        <strong>2xGen LLC</strong>
        <br />
        1209 Mountain Road Pl NE, STE R
        <br />
        Albuquerque, NM 87110
        <br />
        Verenigde Staten
        <br />
        Registratienummer: 0008045445
      </p>
      <p>
        Alle dagelijkse bedrijfsactiviteiten, het beheer van het platform en de zakelijke
        besluitvorming vinden plaats vanuit Praag, Tsjechië.
      </p>
      <p>
        <strong>Europees contactpunt</strong>
        <br />
        Matthijs van Reek
        <br />
        Praag, Tsjechië
        <br />
        E-mail: <MailLink />
      </p>
      <p>
        Voor vragen over privacy, persoonsgegevens, beveiliging of het uitoefenen van je rechten kun
        je contact opnemen via dit e-mailadres.
      </p>
      <p>
        2xGen LLC is verwerkingsverantwoordelijke voor persoonsgegevens die zij voor eigen
        doeleinden verwerkt. Voor gegevens die zakelijke gebruikers via FactuurBaas over hun eigen
        klanten en relaties verwerken, kunnen afhankelijk van de betreffende functionaliteit andere
        verantwoordelijkheden gelden.
      </p>

      <h2 id="gegevens">2. Welke gegevens verwerken wij?</h2>
      <p>
        FactuurBaas biedt verschillende functies waarmee ondernemers hun bedrijfsadministratie
        kunnen organiseren.
      </p>
      <p>Afhankelijk van welke functies je gebruikt, verwerken wij de volgende gegevens.</p>

      <h3>2.1 Account- en bedrijfsgegevens</h3>
      <ul>
        <li>Naam en e-mailadres</li>
        <li>Bedrijfsnaam en handelsnaam</li>
        <li>Bedrijfsadres en vestigingsplaats</li>
        <li>KvK-nummer en btw-identificatienummer, indien ingevuld</li>
        <li>Telefoonnummer, indien ingevuld</li>
        <li>Accountinstellingen en gebruikersvoorkeuren</li>
        <li>Authenticatie- en beveiligingsgegevens</li>
      </ul>

      <h3>2.2 Facturen</h3>
      <p>Wanneer je facturen maakt, beheert of opslaat, kunnen wij onder andere verwerken:</p>
      <ul>
        <li>Factuurnummers en factuurdatums</li>
        <li>Gegevens van je klanten</li>
        <li>Producten en diensten</li>
        <li>Omschrijvingen en aantallen</li>
        <li>Bedragen en btw-tarieven</li>
        <li>Betaaltermijnen en vervaldatums</li>
        <li>Betalingsstatussen, zoals openstaand, betaald of te laat</li>
        <li>Bankrekeninggegevens die je zelf invult</li>
        <li>Overige gegevens die je op een factuur vermeldt</li>
      </ul>
      <p>
        Deze gegevens worden gebruikt om facturen op te stellen, te bewaren, terug te vinden en te
        verwerken in de relevante overzichten van FactuurBaas.
      </p>

      <h3>2.3 Offertes</h3>
      <p>Bij het maken en beheren van offertes kunnen wij verwerken:</p>
      <ul>
        <li>Offertenummers en datums</li>
        <li>Klantgegevens</li>
        <li>Omschrijvingen van werkzaamheden, producten en diensten</li>
        <li>Aantallen, prijzen en btw</li>
        <li>Geldigheidsdatums en voorwaarden</li>
        <li>Offertestatussen, zoals concept, verzonden, geaccepteerd of afgewezen</li>
      </ul>
      <p>
        Wanneer een offerte wordt omgezet naar een factuur, gebruiken wij de relevante gegevens om
        deze factuur aan te maken.
      </p>

      <h3>2.4 Klanten</h3>
      <p>Wanneer je klanten toevoegt aan FactuurBaas, kunnen wij onder andere verwerken:</p>
      <ul>
        <li>Namen van personen en bedrijven</li>
        <li>Adresgegevens</li>
        <li>E-mailadressen</li>
        <li>Telefoonnummers</li>
        <li>KvK- en btw-gegevens, indien ingevuld</li>
        <li>Factuur- en offertegeschiedenis</li>
        <li>Overige gegevens die je zelf aan een klantprofiel toevoegt</li>
      </ul>
      <p>
        Deze gegevens worden gebruikt om je klantenadministratie te beheren en het maken van
        facturen en offertes eenvoudiger te maken.
      </p>

      <h3>2.5 Urenregistratie</h3>
      <p>Wanneer je uren registreert, kunnen wij verwerken:</p>
      <ul>
        <li>Datum en tijdsduur van werkzaamheden</li>
        <li>Omschrijvingen van werkzaamheden</li>
        <li>Gekoppelde klanten of opdrachten</li>
        <li>Uurtarieven en berekende bedragen</li>
        <li>Status van geregistreerde of gefactureerde uren</li>
      </ul>
      <p>
        Deze gegevens helpen je om je gewerkte uren bij te houden en waar mogelijk te gebruiken bij
        het maken van facturen.
      </p>

      <h3>2.6 Inkomsten</h3>
      <p>
        FactuurBaas biedt de mogelijkheid om inkomsten te registreren, ook wanneer deze niet
        rechtstreeks voortkomen uit een factuur.
      </p>
      <p>Hierbij kunnen wij verwerken:</p>
      <ul>
        <li>Omschrijving van de inkomsten</li>
        <li>Datum van ontvangst</li>
        <li>Bedrag</li>
        <li>Toegepast btw-tarief en btw-bedrag</li>
        <li>Betaalmethode, zoals pin, contant of overboeking</li>
        <li>Eventuele aanvullende informatie die je invoert</li>
      </ul>
      <p>Deze gegevens worden gebruikt om je inkomstenoverzicht en financiële dashboard bij te werken.</p>

      <h3>2.7 Uitgaven</h3>
      <p>Wanneer je zakelijke uitgaven registreert, kunnen wij verwerken:</p>
      <ul>
        <li>Omschrijving van de uitgave</li>
        <li>Datum</li>
        <li>Bedrag</li>
        <li>Btw-tarief en btw-bedrag</li>
        <li>Categorie of soort uitgave</li>
        <li>Eventuele leverancier of zakelijke relatie</li>
        <li>Aanvullende gegevens die je zelf invoert</li>
      </ul>
      <p>
        Deze informatie wordt gebruikt om je uitgaven inzichtelijk te maken en je financiële
        overzichten samen te stellen.
      </p>

      <h3>2.8 Dashboard en financiële overzichten</h3>
      <p>
        FactuurBaas gebruikt gegevens uit je account om een persoonlijk financieel dashboard samen
        te stellen.
      </p>
      <p>Dit dashboard kan onder andere inzicht geven in:</p>
      <ul>
        <li>Je totale inkomsten</li>
        <li>Je geregistreerde uitgaven</li>
        <li>Het verschil tussen inkomsten en uitgaven</li>
        <li>Openstaande en achterstallige facturen</li>
        <li>Bedragen die je mogelijk voor btw moet reserveren</li>
        <li>Maandelijkse inkomsten en uitgaven</li>
        <li>Vergelijkingen met eerdere maanden</li>
        <li>Gemiddelde inkomsten en uitgaven</li>
        <li>Je ingestelde omzetdoel</li>
        <li>De voortgang richting je omzetdoel</li>
        <li>Het bedrag dat je volgens de berekening nog moet verdienen om je doel te bereiken</li>
        <li>Recente facturen en offertes</li>
        <li>Andere overzichten op basis van de door jou ingevoerde gegevens</li>
      </ul>
      <p>
        Deze informatie wordt berekend op basis van de gegevens die je zelf invoert of via de
        beschikbare functies vastlegt.
      </p>
      <p>
        De getoonde bedragen en berekeningen zijn bedoeld om je inzicht te geven in je onderneming.
        Zij vormen niet automatisch een volledige boekhouding, officiële winstberekening,
        belastingaangifte of persoonlijk financieel advies.
      </p>

      <h3>2.9 Gratis tools en calculators</h3>
      <p>
        FactuurBaas biedt daarnaast gratis tools, zoals calculators en generators voor facturen,
        btw, offertes, uurtarieven en andere zakelijke berekeningen.
      </p>
      <p>
        Afhankelijk van de tool kunnen gegevens tijdelijk worden verwerkt om een berekening of
        document te genereren.
      </p>
      <p>
        Wanneer een tool gegevens opslaat in je account, worden deze gebruikt voor de betreffende
        functionaliteit.
      </p>

      <h2 id="waarom">3. Waarom verwerken wij deze gegevens?</h2>
      <p>
        Wij verwerken gegevens om onze diensten aan te bieden en de functionaliteiten van
        FactuurBaas te laten werken.
      </p>
      <p>Dit omvat onder andere:</p>
      <ul>
        <li>Het aanmaken en beheren van gebruikersaccounts.</li>
        <li>Het opstellen, opslaan en beheren van facturen.</li>
        <li>Het opstellen en beheren van offertes.</li>
        <li>Het beheren van klantgegevens.</li>
        <li>Het registreren van gewerkte uren.</li>
        <li>Het registreren van inkomsten en uitgaven.</li>
        <li>Het berekenen van btw-bedragen en financiële totalen.</li>
        <li>Het samenstellen van persoonlijke dashboards.</li>
        <li>Het tonen van omzetdoelen en voortgang.</li>
        <li>Het tonen van openstaande facturen en betalingsstatussen.</li>
        <li>Het verbeteren van de gebruiksvriendelijkheid en betrouwbaarheid van onze diensten.</li>
        <li>Het verwerken van aanvragen en contactverzoeken.</li>
        <li>Het beveiligen van onze systemen.</li>
        <li>Het voldoen aan toepasselijke wettelijke verplichtingen.</li>
      </ul>
      <p>
        Wij gebruiken de door jou ingevoerde gegevens om de functies van FactuurBaas beschikbaar te
        maken en je een zo relevant en overzichtelijk mogelijke gebruikerservaring te bieden.
      </p>
      <p>
        Wij gebruiken je individuele financiële gegevens niet voor het verkopen van persoonlijke
        financiële profielen aan derden.
      </p>

      <h2 id="inzage">4. Wie kan je gegevens bekijken?</h2>
      <p>
        De gegevens die je in FactuurBaas invoert, worden opgeslagen in onze technische systemen en
        databases.
      </p>
      <p>
        Hoewel je financiële dashboard en administratie in de eerste plaats voor jou als gebruiker
        bedoeld zijn, is het technisch mogelijk dat bevoegde beheerders van FactuurBaas toegang
        hebben tot gegevens die in onze database zijn opgeslagen.
      </p>
      <p>Dit kan onder andere betrekking hebben op:</p>
      <ul>
        <li>Facturen en offertes</li>
        <li>Klantgegevens</li>
        <li>Urenregistraties</li>
        <li>Inkomsten en uitgaven</li>
        <li>Financiële totalen en overzichten</li>
        <li>Account- en bedrijfsgegevens</li>
      </ul>
      <p>
        <strong>Wij bekijken de inhoud van individuele administraties niet routinematig.</strong>
      </p>
      <p>Toegang tot gegevens kan noodzakelijk zijn voor:</p>
      <ul>
        <li>Het oplossen van technische problemen.</li>
        <li>Het onderzoeken van fouten in de dienstverlening.</li>
        <li>Het beveiligen van onze systemen.</li>
        <li>Het onderzoeken van vermoedelijk misbruik.</li>
        <li>Het uitvoeren van noodzakelijk onderhoud.</li>
        <li>Het voldoen aan wettelijke verplichtingen.</li>
        <li>Het behandelen van een ondersteuningsverzoek waarvoor inzage noodzakelijk is.</li>
      </ul>
      <h3>Bevoegde medewerkers</h3>
      <p>
        Toegang tot persoonsgegevens en administratieve gegevens is beperkt tot de eigenaar en
        andere personen die uitdrukkelijk door FactuurBaas zijn gemachtigd en voor hun werkzaamheden
        toegang nodig hebben.
      </p>
      <p>
        Personen die namens FactuurBaas toegang krijgen tot deze gegevens, moeten gebonden zijn aan
        passende geheimhoudingsverplichtingen, waaronder waar van toepassing een
        geheimhoudingsovereenkomst (NDA).
      </p>
      <p>
        Toegang tot gegevens is niet bedoeld voor persoonlijk gebruik, commerciële inzage in
        individuele administraties of andere doeleinden die niet noodzakelijk zijn voor het beheer
        en de dienstverlening van FactuurBaas.
      </p>
      <p>
        Wij streven ernaar toegang te beperken tot wat noodzakelijk is voor de betreffende
        werkzaamheden.
      </p>

      <h2 id="delen">5. Worden je financiële gegevens gedeeld met derden?</h2>
      <p>
        Wij delen je facturen, offertes, klantgegevens, urenregistraties, inkomsten en uitgaven niet
        met externe commerciële partijen uitsluitend omdat je deze gegevens in FactuurBaas hebt
        ingevoerd.
      </p>
      <p>Wij gebruiken deze gegevens niet om individuele financiële profielen aan derden te verkopen.</p>
      <p>
        Wel kunnen technische dienstverleners toegang hebben tot persoonsgegevens voor zover dit
        noodzakelijk is voor hosting, opslag, beveiliging of andere technische dienstverlening.
      </p>
      <p>
        Wanneer je zelf gegevens deelt, bijvoorbeeld door een factuur of offerte naar een klant te
        versturen, vindt die verwerking plaats in het kader van de door jou gebruikte
        functionaliteit.
      </p>

      <h2 id="boekhouder">6. Boekhouder vinden en samenwerking met WRKD B.V.</h2>
      <p>
        FactuurBaas biedt ondernemers de mogelijkheid om gratis en vrijblijvend een aanvraag in te
        dienen voor hulp bij het vinden van een boekhouder.
      </p>
      <p>Voor deze dienst werken wij samen met:</p>
      <p>
        <strong>WRKD B.V.</strong>
        <br />
        Vogt 21
        <br />
        6422 RK Heerlen
        <br />
        Nederland
      </p>
      <h3>Welke gegevens verzamelen wij?</h3>
      <p>
        Wanneer je via het formulier <em>Boekhouder vinden</em> een aanvraag indient, kunnen wij de
        volgende gegevens verwerken:
      </p>
      <ul>
        <li>Je naam</li>
        <li>Je bedrijfsnaam</li>
        <li>Je vestigingsplaats</li>
        <li>Je bedrijfsvorm, zoals eenmanszaak, VOF, stichting of BV</li>
        <li>Je e-mailadres</li>
        <li>Je telefoonnummer</li>
        <li>Bevestiging van je KvK-inschrijving</li>
        <li>Eventuele aanvullende informatie die je zelf verstrekt</li>
        <li>Registratiegegevens waarmee wij je toestemming kunnen aantonen</li>
      </ul>
      <h3>Waarvoor gebruiken wij deze gegevens?</h3>
      <p>
        Wij gebruiken deze gegevens om je aanvraag te ontvangen, te verwerken en door te sturen naar
        WRKD B.V.
      </p>
      <p>
        WRKD B.V. ontvangt je gegevens om contact met je op te nemen over je aanvraag en mogelijke
        boekhoudkundige dienstverlening.
      </p>
      <p>
        WRKD B.V. verwerkt de ontvangen persoonsgegevens vervolgens als zelfstandig
        verwerkingsverantwoordelijke.
      </p>
      <h3>Toestemming</h3>
      <p>
        Voordat je een aanvraag verstuurt, vragen wij je uitdrukkelijke toestemming om je gegevens
        met WRKD B.V. te delen.
      </p>
      <p>
        Deze toestemming wordt niet vooraf aangevinkt en is specifiek bedoeld voor het doorsturen en
        opvolgen van je boekhouderaanvraag.
      </p>
      <p>
        Je kunt je toestemming op ieder moment intrekken door een e-mail te sturen naar <MailLink />.
      </p>
      <p>
        Wanneer je toestemming intrekt, heeft dit geen invloed op de rechtmatigheid van verwerkingen
        die vóór de intrekking hebben plaatsgevonden.
      </p>
      <p>
        Als je gegevens al zijn doorgestuurd, kun je voor de verdere verwerking ook rechtstreeks
        contact opnemen met WRKD B.V.
      </p>
      <h3>Vergoeding</h3>
      <p>FactuurBaas kan een vergoeding ontvangen voor het aanleveren van zakelijke aanvragen aan WRKD B.V.</p>
      <p>
        Het indienen van een aanvraag via FactuurBaas is gratis en vrijblijvend. De eventuele
        vergoeding die FactuurBaas ontvangt, brengt voor jou geen kosten met zich mee.
      </p>
      <h3>Geen boekhoudkantoor</h3>
      <p>
        FactuurBaas is zelf geen boekhoudkantoor en voert via deze dienst geen boekhoudkundige
        werkzaamheden uit.
      </p>
      <p>
        Wij bieden de mogelijkheid om een aanvraag in te dienen en in contact te komen met een partij
        die je verder kan helpen.
      </p>

      <h2 id="dienstverleners">7. Welke technische dienstverleners gebruiken wij?</h2>
      <p>Wij gebruiken externe dienstverleners om FactuurBaas technisch mogelijk te maken.</p>
      <h3>Supabase</h3>
      <p>Wij gebruiken Supabase voor databasefunctionaliteiten en gegevensopslag.</p>
      <p>Onze primaire database bevindt zich in Zweden, binnen de Europese Unie.</p>
      <h3>Resend</h3>
      <p>Wij gebruiken Resend voor het verzenden van e-mails.</p>
      <p>Voor onze e-maildienst is een Europese regio in Ierland ingesteld.</p>
      <h3>Vercel</h3>
      <p>
        Wij gebruiken Vercel voor het hosten en beschikbaar stellen van de website en bijbehorende
        technische functionaliteiten.
      </p>
      <p>
        Afhankelijk van de technische configuratie kunnen daarbij gegevens worden verwerkt die
        noodzakelijk zijn voor het functioneren en beveiligen van de website.
      </p>
      <p>
        Met technische dienstverleners maken wij waar vereist afspraken over de verwerking en
        bescherming van persoonsgegevens.
      </p>

      <h2 id="locatie">8. Waar worden gegevens verwerkt?</h2>
      <p>
        FactuurBaas wordt geëxploiteerd door 2xGen LLC, een in de Verenigde Staten geregistreerde
        onderneming.
      </p>
      <p>Het dagelijkse beheer en de administratieve toegang vinden plaats vanuit Praag, Tsjechië.</p>
      <p>
        Onze primaire database wordt gehost in Zweden. Voor e-mailverzending is een Europese regio
        in Ierland ingesteld.
      </p>
      <p>Gegevens worden niet standaard vanuit de Verenigde Staten door ons beheerd.</p>
      <p>
        Wanneer dienstverleners of hun subverwerkers persoonsgegevens buiten de Europese Economische
        Ruimte verwerken of daartoe toegang hebben, beoordelen wij welke doorgifteregels en
        waarborgen van toepassing zijn.
      </p>

      <h2 id="bewaartermijn">9. Hoe lang bewaren wij gegevens?</h2>
      <p>
        Wij bewaren persoonsgegevens niet langer dan noodzakelijk voor het doel waarvoor deze zijn
        verzameld, tenzij een wettelijke verplichting of andere geldige reden verdere bewaring
        vereist.
      </p>
      <h3>Accountgegevens</h3>
      <p>
        Wij bewaren accountgegevens zolang je account actief is en zolang deze nodig zijn voor de
        werking van onze diensten.
      </p>
      <h3>Facturen, offertes, klanten, uren, inkomsten en uitgaven</h3>
      <p>
        Deze gegevens bewaren wij zolang je ze binnen je account gebruikt en zolang opslag
        noodzakelijk is voor de dienstverlening.
      </p>
      <p>
        Wanneer je je account verwijdert, worden deze gegevens verwijderd of geanonimiseerd volgens
        de toepasselijke verwijderprocedure, tenzij een wettelijke verplichting of andere geldige
        reden verdere bewaring vereist.
      </p>
      <p>
        Je blijft als ondernemer zelf verantwoordelijk voor het bewaren van je eigen administratie
        overeenkomstig de wettelijke bewaarplichten die voor jou gelden.
      </p>
      <h3>Boekhouderaanvragen</h3>
      <p>
        Persoonsgegevens die via het formulier <em>Boekhouder vinden</em> worden verzameld, bewaren
        wij maximaal <strong>12 maanden</strong> na ontvangst, tenzij een langere bewaartermijn
        noodzakelijk is vanwege een wettelijke verplichting of een concreet geschil.
      </p>
      <h3>Toestemmingsregistraties</h3>
      <p>
        Gegevens die nodig zijn om aan te tonen dat toestemming is verleend, kunnen afzonderlijk
        worden bewaard zolang dit redelijkerwijs noodzakelijk is voor verantwoording en eventuele
        juridische aanspraken.
      </p>
      <h3>Technische gegevens</h3>
      <p>
        Technische loggegevens bewaren wij niet langer dan noodzakelijk voor beveiliging,
        foutopsporing en het goed functioneren van onze diensten.
      </p>
      <h3>Financiële administratie van FactuurBaas</h3>
      <p>
        Gegevens die onderdeel zijn van onze eigen financiële administratie bewaren wij
        overeenkomstig de toepasselijke wettelijke bewaartermijnen.
      </p>

      <h2 id="beveiliging">10. Hoe beveiligen wij je gegevens?</h2>
      <p>
        Wij nemen passende technische en organisatorische maatregelen om gegevens te beschermen
        tegen verlies, misbruik en ongeautoriseerde toegang.
      </p>
      <p>Deze maatregelen kunnen onder andere bestaan uit:</p>
      <ul>
        <li>Beveiligde verbindingen via HTTPS.</li>
        <li>Authenticatie voor gebruikers en beheerders.</li>
        <li>Beperkte toegang tot databases en beheersystemen.</li>
        <li>Toegangsrechten op basis van de werkzaamheden van bevoegde personen.</li>
        <li>Geheimhoudingsverplichtingen voor personen met toegang tot vertrouwelijke gegevens.</li>
        <li>Beveiligingsmaatregelen van onze hosting- en databaseproviders.</li>
        <li>Technische controles en onderhoud om de betrouwbaarheid van onze diensten te verbeteren.</li>
      </ul>
      <p>
        Geen enkele online dienst kan absolute beveiliging garanderen. Wij streven ernaar passende
        maatregelen te treffen die aansluiten bij de aard van de verwerkte gegevens.
      </p>

      <h2 id="rechtsgronden">11. Rechtsgronden voor verwerking</h2>
      <p>Afhankelijk van de verwerking baseren wij ons op:</p>
      <ul>
        <li>
          <strong>Uitvoering van een overeenkomst:</strong> om de functies van FactuurBaas te leveren.
        </li>
        <li>
          <strong>Toestemming:</strong> bijvoorbeeld voor het doorsturen van een boekhouderaanvraag
          aan WRKD B.V.
        </li>
        <li>
          <strong>Gerechtvaardigd belang:</strong> bijvoorbeeld voor beveiliging en noodzakelijke
          technische ondersteuning, na afweging van de betrokken belangen.
        </li>
        <li>
          <strong>Wettelijke verplichting:</strong> wanneer wij gegevens moeten verwerken of bewaren
          op grond van toepasselijke wetgeving.
        </li>
      </ul>
      <p>
        Wanneer wij optreden als verwerker namens een zakelijke gebruiker, verwerken wij
        persoonsgegevens binnen de toepasselijke afspraken en instructies van die gebruiker.
      </p>

      <h2 id="rechten">12. Jouw privacyrechten</h2>
      <p>Voor zover de AVG van toepassing is, kun je onder de daarvoor geldende voorwaarden verzoeken om:</p>
      <ul>
        <li>Inzage in je persoonsgegevens.</li>
        <li>Correctie van onjuiste gegevens.</li>
        <li>Verwijdering van gegevens.</li>
        <li>Beperking van de verwerking.</li>
        <li>Overdracht van je gegevens.</li>
        <li>Bezwaar tegen bepaalde verwerkingen.</li>
        <li>Intrekking van eerder gegeven toestemming.</li>
      </ul>
      <p>
        Voor privacyverzoeken kun je contact opnemen via <MailLink />.
      </p>
      <p>
        Wij reageren in beginsel binnen één maand op een verzoek. Wanneer een wettelijke verlenging
        van deze termijn mogelijk en noodzakelijk is, informeren wij je hierover.
      </p>
      <p>
        Je hebt daarnaast het recht om een klacht in te dienen bij een bevoegde privacytoezichthouder,
        zoals de Autoriteit Persoonsgegevens in Nederland.
      </p>

      <h2 id="klanten">13. Persoonsgegevens van jouw klanten</h2>
      <p>
        Wanneer je FactuurBaas gebruikt om gegevens van je klanten vast te leggen, ben je zelf
        verantwoordelijk voor het rechtmatig verzamelen en gebruiken van die gegevens.
      </p>
      <p>Dit geldt bijvoorbeeld voor persoonsgegevens die je invoert in:</p>
      <ul>
        <li>Facturen</li>
        <li>Offertes</li>
        <li>Klantprofielen</li>
        <li>Urenregistraties</li>
        <li>Omschrijvingen van werkzaamheden</li>
        <li>Andere administratieve onderdelen</li>
      </ul>
      <p>
        Afhankelijk van de betreffende functionaliteit kan FactuurBaas deze gegevens namens jou
        verwerken.
      </p>
      <p>
        Waar nodig worden de verantwoordelijkheden en verplichtingen van beide partijen vastgelegd in
        een afzonderlijke{' '}
        <Link href="/verwerkersovereenkomst" className="text-warm-orange hover:underline">
          verwerkersovereenkomst
        </Link>
        .
      </p>

      <h2 id="cookies">14. Cookies en websiteanalyse</h2>
      <p>
        FactuurBaas kan functionele cookies en vergelijkbare technieken gebruiken om de website en
        gebruikersaccounts goed te laten functioneren.
      </p>
      <p>
        Daarnaast kunnen wij websiteanalyse gebruiken om de prestaties en gebruiksvriendelijkheid van
        onze diensten te verbeteren.
      </p>
      <p>
        Wanneer voor bepaalde cookies of technieken voorafgaande toestemming vereist is, vragen wij
        deze toestemming voordat ze worden gebruikt.
      </p>

      <h2 id="wijzigingen">15. Wijzigingen in dit privacybeleid</h2>
      <p>
        Wij kunnen dit privacybeleid wijzigen wanneer onze dienstverlening verandert, nieuwe functies
        worden toegevoegd of wet- en regelgeving daarom vraagt.
      </p>
      <p>De meest recente versie is beschikbaar via:</p>
      <p>
        <a href="https://factuurbaas.nl/privacybeleid" className="text-warm-orange hover:underline">
          https://factuurbaas.nl/privacybeleid
        </a>
      </p>
      <p>Bij belangrijke wijzigingen informeren wij gebruikers wanneer dit wettelijk vereist is.</p>

      <h2 id="contact">16. Contact</h2>
      <p>
        <strong>FactuurBaas</strong>
        <br />
        Onderdeel van 2xGen LLC
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
        <a href="https://factuurbaas.nl" className="text-warm-orange hover:underline">
          https://factuurbaas.nl
        </a>
      </p>
    </LegalDocument>
  );
}
