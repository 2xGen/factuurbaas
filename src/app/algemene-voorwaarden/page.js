import React from 'react';
import Link from 'next/link';
import { FileText as FileTextIcon } from 'lucide-react';
import LegalDocument from '@/components/site/LegalDocument';

export const metadata = {
  title: 'Algemene Voorwaarden | FactuurBaas',
  description:
    'Algemene voorwaarden van FactuurBaas: facturen, offertes, administratie, dashboard, boekhouderaanvragen, Baas-status en aansprakelijkheid.',
  alternates: { canonical: 'https://factuurbaas.nl/algemene-voorwaarden' },
};

const sections = [
  { id: 'aanbieder', label: '1. Aanbieder en toepasselijkheid' },
  { id: 'dienst', label: '2. Beschrijving van de Dienst' },
  { id: 'accounts', label: '3. Gratis gebruik en accounts' },
  { id: 'verantwoordelijkheid', label: '4. Verantwoordelijkheid van de gebruiker' },
  { id: 'berekeningen', label: '5. Financiële berekeningen' },
  { id: 'opslag', label: '6. Gegevensopslag en beschikbaarheid' },
  { id: 'toegang', label: '7. Toegang tot opgeslagen gegevens' },
  { id: 'boekhouder', label: '8. Boekhouder vinden' },
  { id: 'baas-status', label: '9. Baas-status en referrals' },
  { id: 'toegestaan', label: '10. Toegestaan gebruik' },
  { id: 'intellectueel-eigendom', label: '11. Intellectueel eigendom' },
  { id: 'advies', label: '12. Geen professioneel advies' },
  { id: 'aansprakelijkheid', label: '13. Aansprakelijkheid' },
  { id: 'privacy', label: '14. Privacy' },
  { id: 'beeindiging', label: '15. Accountverwijdering' },
  { id: 'wijzigingen-dienst', label: '16. Wijzigingen in de Dienst' },
  { id: 'wijzigingen', label: '17. Wijzigingen in de voorwaarden' },
  { id: 'recht', label: '18. Toepasselijk recht' },
  { id: 'contact', label: '19. Contact' },
];

const docLink = 'text-warm-orange hover:underline';

function MailLink() {
  return (
    <a href="mailto:mail@factuurbaas.nl" className={docLink}>
      mail@factuurbaas.nl
    </a>
  );
}

export default function TermsAndConditionsPage() {
  return (
    <LegalDocument
      backHref="/"
      backLabel="Terug naar Home"
      eyebrow="Voorwaarden"
      eyebrowIcon={FileTextIcon}
      title="Algemene Voorwaarden"
      sections={sections}
      meta={<span>Laatst bijgewerkt: 18 oktober 2026</span>}
    >
      <h2 id="aanbieder">1. Aanbieder en toepasselijkheid</h2>
      <p>FactuurBaas.nl is een online dienst van:</p>
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
        <strong>Europees contactpunt:</strong>
        <br />
        Matthijs van Reek
        <br />
        Praag, Tsjechië
        <br />
        E-mail: <MailLink />
      </p>
      <p>Het dagelijkse beheer en de zakelijke besluitvorming vinden plaats vanuit Praag, Tsjechië.</p>
      <p>
        In deze algemene voorwaarden verwijzen de termen &quot;FactuurBaas&quot;, &quot;wij&quot;, &quot;ons&quot; en
        &quot;onze&quot; naar 2xGen LLC, handelend onder de naam FactuurBaas.
      </p>
      <p>
        Deze voorwaarden zijn van toepassing op het gebruik van de website www.factuurbaas.nl en de bijbehorende
        online diensten, tools en functionaliteiten (hierna gezamenlijk: de &quot;Dienst&quot;).
      </p>
      <p>
        Door de Dienst te gebruiken, gaat u akkoord met deze algemene voorwaarden, voor zover daarvoor rechtsgeldig
        instemming is verkregen.
      </p>

      <h2 id="dienst">2. Beschrijving van de Dienst</h2>
      <p>
        FactuurBaas biedt ondernemers online hulpmiddelen om hun administratie te organiseren en inzicht te krijgen
        in hun bedrijfsactiviteiten.
      </p>
      <p>De Dienst omvat onder andere:</p>
      <h3>2.1 Facturen</h3>
      <p>
        Het maken, downloaden, opslaan en beheren van facturen, inclusief factuurnummers, btw-berekeningen,
        betaaltermijnen, vervaldatums en betalingsstatussen.
      </p>
      <h3>2.2 Offertes</h3>
      <p>
        Het maken, downloaden, opslaan en beheren van offertes, inclusief de mogelijkheid om offertes om te zetten
        naar facturen.
      </p>
      <h3>2.3 Klantenbeheer</h3>
      <p>
        Het opslaan en beheren van klantgegevens en het koppelen van klanten aan facturen, offertes en andere
        administratieve onderdelen.
      </p>
      <h3>2.4 Urenregistratie</h3>
      <p>Het registreren van gewerkte uren, werkzaamheden, klanten en uurtarieven.</p>
      <h3>2.5 Inkomstenregistratie</h3>
      <p>
        Het registreren van zakelijke inkomsten, ook wanneer hiervoor geen factuur via FactuurBaas is aangemaakt.
      </p>
      <p>Gebruikers kunnen onder andere bedragen, datums, omschrijvingen, btw-tarieven en betaalmethoden invoeren.</p>
      <h3>2.6 Uitgavenregistratie</h3>
      <p>Het registreren van zakelijke uitgaven, inclusief bedragen, datums, omschrijvingen en eventuele btw-gegevens.</p>
      <h3>2.7 Financieel dashboard</h3>
      <p>Het tonen van financiële overzichten op basis van de gegevens die de gebruiker heeft ingevoerd.</p>
      <p>Het dashboard kan onder andere bevatten:</p>
      <ul>
        <li>Totale inkomsten en uitgaven</li>
        <li>Het verschil tussen geregistreerde inkomsten en uitgaven</li>
        <li>Openstaande en achterstallige facturen</li>
        <li>Btw-overzichten en indicatieve reserveringen</li>
        <li>Maandelijkse vergelijkingen</li>
        <li>Gemiddelde inkomsten en uitgaven</li>
        <li>Omzetdoelen en voortgang</li>
        <li>Recente facturen en offertes</li>
      </ul>
      <h3>2.8 Gratis tools en calculators</h3>
      <p>
        FactuurBaas biedt verschillende gratis tools, zoals factuurgenerators, btw-calculators, uurtariefcalculators,
        offertemakers en andere hulpmiddelen voor ondernemers.
      </p>
      <h3>2.9 Aanvullende diensten</h3>
      <p>
        FactuurBaas kan daarnaast informatieve artikelen, zakelijke vergelijkingen, doorverwijzingen en andere
        aanvullende diensten aanbieden.
      </p>
      <p>Het beschikbare aanbod kan in de loop van de tijd veranderen.</p>

      <h2 id="accounts">3. Gratis gebruik en gebruikersaccounts</h2>
      <p>De basisfunctionaliteiten van FactuurBaas zijn gratis beschikbaar.</p>
      <p>
        Bepaalde functies kunnen zonder account worden gebruikt, terwijl andere functies vereisen dat de gebruiker
        een account aanmaakt of inlogt.
      </p>
      <h3>3.1 Gebruik zonder account</h3>
      <p>
        Bij gebruik zonder account kunnen gebruikers bepaalde documenten of berekeningen maken zonder een persoonlijk
        account aan te maken.
      </p>
      <p>
        In deze gastmodus worden factuurgegevens niet door FactuurBaas opgeslagen als onderdeel van een blijvende
        online administratie.
      </p>
      <h3>3.2 Gebruik met account</h3>
      <p>Met een account kunnen gebruikers onder andere:</p>
      <ul>
        <li>Facturen en offertes bewaren.</li>
        <li>Klantgegevens beheren.</li>
        <li>Uren registreren.</li>
        <li>Inkomsten en uitgaven bijhouden.</li>
        <li>Financiële dashboards bekijken.</li>
        <li>Bedrijfsgegevens en instellingen opslaan.</li>
        <li>Gebruikmaken van Baas-status en bijbehorende functionaliteiten.</li>
      </ul>
      <p>
        Gegevens die via accountfuncties worden opgeslagen, kunnen in onze database worden bewaard totdat de
        gebruiker deze verwijdert, het account wordt beëindigd of een andere toepasselijke bewaartermijn geldt.
      </p>
      <h3>3.3 Accountbeveiliging</h3>
      <p>Gebruikers zijn verantwoordelijk voor het zorgvuldig omgaan met hun account en de gebruikte inlogmogelijkheden.</p>
      <p>
        Wanneer een gebruiker vermoedt dat onbevoegden toegang hebben tot het account, dient deze passende maatregelen
        te nemen en zo nodig contact op te nemen met FactuurBaas.
      </p>
      <h3>3.4 Dienstgerelateerde e-mails</h3>
      <p>
        FactuurBaas kan transactionele e-mails versturen die noodzakelijk of relevant zijn voor het gebruik van de
        Dienst, zoals accountbevestigingen, beveiligingsmeldingen en bevestigingen van accountverwijdering.
      </p>
      <p>Dergelijke berichten zijn geen commerciële nieuwsbrief.</p>
      <h3>3.5 Akkoord met de algemene voorwaarden</h3>
      <p>
        Bij het inloggen op FactuurBaas wordt de gebruiker gevraagd om actief akkoord te gaan met de geldende
        algemene voorwaarden en kennis te nemen van het{' '}
        <Link href="/privacybeleid" className={docLink}>
          privacybeleid
        </Link>
        .
      </p>
      <p>De gebruiker kan pas inloggen nadat dit akkoord is bevestigd.</p>
      <p>
        FactuurBaas kan registreren wanneer de gebruiker akkoord is gegaan en welke versie van de algemene
        voorwaarden op dat moment van toepassing was.
      </p>
      <p>Bij wijzigingen in de algemene voorwaarden kan opnieuw om akkoord worden gevraagd.</p>

      <h2 id="verantwoordelijkheid">4. Verantwoordelijkheid van de gebruiker</h2>
      <p>
        De gebruiker is zelf verantwoordelijk voor de juistheid, volledigheid en rechtmatigheid van de gegevens die
        via FactuurBaas worden ingevoerd, verwerkt of opgeslagen.
      </p>
      <p>Dit geldt onder andere voor:</p>
      <ul>
        <li>Bedrijfsgegevens</li>
        <li>Klantgegevens</li>
        <li>Factuur- en offertenummers</li>
        <li>Bedragen en btw-tarieven</li>
        <li>Betalingsvoorwaarden</li>
        <li>Inkomsten en uitgaven</li>
        <li>Urenregistraties</li>
        <li>Fiscale en administratieve informatie</li>
      </ul>
      <p>
        De gebruiker blijft zelf verantwoordelijk voor het naleven van toepasselijke wet- en regelgeving, waaronder
        fiscale verplichtingen, factuurvereisten en wettelijke bewaartermijnen.
      </p>
      <p>
        FactuurBaas is een hulpmiddel voor administratieve werkzaamheden en neemt deze wettelijke verantwoordelijkheden
        niet over.
      </p>

      <h2 id="berekeningen">5. Financiële berekeningen en overzichten</h2>
      <p>FactuurBaas kan op basis van ingevoerde gegevens automatisch financiële berekeningen en overzichten samenstellen.</p>
      <p>Dit omvat onder andere:</p>
      <ul>
        <li>Btw-berekeningen</li>
        <li>Inkomsten- en uitgaventotalen</li>
        <li>Openstaande factuurbedragen</li>
        <li>Indicatieve btw-reserveringen</li>
        <li>Omzetdoelen</li>
        <li>Maandelijkse vergelijkingen</li>
        <li>Uurtariefberekeningen</li>
        <li>Andere financiële indicatoren</li>
      </ul>
      <p>Deze berekeningen zijn bedoeld om ondernemers praktisch inzicht te geven in hun administratie.</p>
      <p>
        De uitkomsten zijn afhankelijk van de ingevoerde gegevens, de gebruikte rekenmethoden en de beschikbare
        functionaliteiten.
      </p>
      <p>
        <strong>
          FactuurBaas is geen vervanging voor een boekhouder, accountant, belastingadviseur of volledige
          boekhoudkundige controle.
        </strong>
      </p>
      <p>
        Het financiële dashboard geeft inzicht in geregistreerde inkomsten en uitgaven, maar vormt niet noodzakelijk
        een volledige winst-en-verliesrekening of fiscale berekening.
      </p>
      <p>
        Gebruikers dienen belangrijke financiële en fiscale gegevens zelf te controleren en waar nodig professioneel
        advies in te winnen.
      </p>

      <h2 id="opslag">6. Gegevensopslag en beschikbaarheid</h2>
      <p>
        Wanneer gebruikers gegevens opslaan via hun account, worden deze bewaard in de technische systemen die
        FactuurBaas voor de Dienst gebruikt.
      </p>
      <p>
        Wij streven naar een betrouwbare en veilige dienstverlening, maar kunnen niet garanderen dat de Dienst op
        ieder moment ononderbroken beschikbaar is.
      </p>
      <p>
        Onderhoud, technische storingen, beveiligingsmaatregelen en omstandigheden bij externe dienstverleners kunnen
        de beschikbaarheid tijdelijk beïnvloeden.
      </p>
      <h3>Eigen administratie en back-ups</h3>
      <p>Gebruikers blijven zelf verantwoordelijk voor het bewaren van hun wettelijk verplichte administratie.</p>
      <p>
        Wij adviseren gebruikers om belangrijke facturen, offertes en andere administratieve gegevens regelmatig te
        exporteren of afzonderlijk te bewaren.
      </p>
      <p>
        FactuurBaas mag niet worden beschouwd als de enige gegarandeerde bewaarplaats voor documenten waarvoor een
        wettelijke bewaarplicht geldt.
      </p>

      <h2 id="toegang">7. Toegang tot opgeslagen gegevens</h2>
      <p>
        Gegevens die gebruikers binnen FactuurBaas opslaan, worden verwerkt in onze databases en technische systemen.
      </p>
      <p>
        Voor het beheer, onderhoud, de beveiliging en ondersteuning van de Dienst kunnen bevoegde beheerders technisch
        toegang hebben tot opgeslagen gegevens.
      </p>
      <p>
        Deze toegang is beperkt tot de eigenaar van FactuurBaas en personen die uitdrukkelijk zijn gemachtigd en voor
        hun werkzaamheden toegang nodig hebben.
      </p>
      <p>
        Personen die namens FactuurBaas toegang krijgen tot vertrouwelijke gegevens, dienen gebonden te zijn aan
        passende geheimhoudingsverplichtingen.
      </p>
      <p>FactuurBaas bekijkt individuele administraties niet routinematig.</p>
      <p>
        Meer informatie over de verwerking van persoonsgegevens is beschikbaar in ons{' '}
        <Link href="/privacybeleid" className={docLink}>
          Privacybeleid
        </Link>
        .
      </p>

      <h2 id="boekhouder">8. Boekhouder vinden en externe dienstverlening</h2>
      <p>
        FactuurBaas kan gebruikers de mogelijkheid bieden om via het platform een aanvraag in te dienen voor
        boekhoudkundige of andere zakelijke dienstverlening.
      </p>
      <p>
        Voor de dienst <em>Boekhouder vinden</em> werkt FactuurBaas samen met WRKD B.V., gevestigd in Heerlen,
        Nederland.
      </p>
      <p>
        Wanneer een gebruiker via het betreffende formulier een aanvraag indient en toestemming geeft voor het delen
        van gegevens, kunnen de verstrekte contact- en bedrijfsgegevens worden doorgestuurd naar WRKD B.V.
      </p>
      <p>
        WRKD B.V. is verantwoordelijk voor de verdere opvolging van de aanvraag en eventuele dienstverlening die
        daaruit voortvloeit.
      </p>
      <p>
        FactuurBaas is zelf geen boekhoudkantoor en garandeert niet dat een aanvraag leidt tot een overeenkomst of een
        bepaald resultaat.
      </p>
      <p>
        Een eventuele overeenkomst tussen de gebruiker en een externe dienstverlener komt rechtstreeks tussen die
        partijen tot stand.
      </p>
      <p>
        FactuurBaas kan een vergoeding ontvangen voor zakelijke doorverwijzingen. Het indienen van een
        boekhouderaanvraag via FactuurBaas is gratis en vrijblijvend.
      </p>

      <h2 id="baas-status">9. Baas-status en referrals</h2>
      <p>Gebruikers met een account kunnen deelnemen aan het Baas-statusprogramma.</p>
      <p>Via een persoonlijke Baas-link kunnen gebruikers andere ondernemers uitnodigen om FactuurBaas te gebruiken.</p>
      <p>
        Wanneer iemand via een dergelijke link een account aanmaakt, kan dit meetellen als referral voor de
        Baas-status van de uitnodigende gebruiker.
      </p>
      <h3>Voortgang en beloningen</h3>
      <p>
        Referrals kunnen worden gebruikt als voortgangsmeting voor het vrijspelen van extra functionaliteiten of
        voordelen, zoals exclusieve factuurstijlen.
      </p>
      <p>Linkbezoeken kunnen afzonderlijk worden weergegeven, maar geven op zichzelf geen recht op een beloning.</p>
      <p>Baas-status en eventuele beloningen zijn gratis aanvullende functionaliteiten.</p>
      <h3>Wijzigingen</h3>
      <p>
        FactuurBaas mag de voorwaarden, drempels, voordelen en beschikbaarheid van het Baas-statusprogramma wijzigen,
        pauzeren of beëindigen, met inachtneming van toepasselijke wettelijke verplichtingen.
      </p>
      <p>
        Er bestaat geen onvoorwaardelijk recht op een specifieke beloning of op het blijvend beschikbaar blijven van
        een bepaalde functionaliteit.
      </p>
      <h3>Misbruik</h3>
      <p>Het is niet toegestaan het programma te manipuleren.</p>
      <p>Daaronder valt onder andere:</p>
      <ul>
        <li>Zelf-referrals</li>
        <li>Het aanmaken van nepaccounts</li>
        <li>Geautomatiseerd of kunstmatig klikken</li>
        <li>Manipulatie van verwijzingsstatistieken</li>
        <li>Andere vormen van oneigenlijk gebruik</li>
      </ul>
      <p>
        Bij vastgesteld misbruik kunnen wij onterecht verkregen referrals, voortgang of beloningen corrigeren of
        intrekken.
      </p>

      <h2 id="toegestaan">10. Toegestaan gebruik</h2>
      <p>Gebruikers mogen de Dienst uitsluitend gebruiken voor rechtmatige doeleinden.</p>
      <p>Het is onder andere niet toegestaan om:</p>
      <ul>
        <li>De Dienst te gebruiken voor fraude of andere onwettige activiteiten.</li>
        <li>Onjuiste of misleidende documenten te creëren met een onrechtmatig doel.</li>
        <li>Onbevoegd toegang te verkrijgen tot accounts of gegevens van anderen.</li>
        <li>De beveiliging of werking van de Dienst te verstoren.</li>
        <li>Geautomatiseerde verzoeken te versturen die de Dienst overmatig belasten.</li>
        <li>Schadelijke software te verspreiden.</li>
        <li>De rechten van derden te schenden.</li>
        <li>De Dienst te gebruiken op een manier die schade veroorzaakt aan FactuurBaas of andere gebruikers.</li>
      </ul>
      <p>
        Bij ernstig misbruik kunnen wij passende maatregelen nemen, waaronder het beperken of beëindigen van toegang,
        voor zover wettelijk toegestaan.
      </p>

      <h2 id="intellectueel-eigendom">11. Intellectueel eigendom</h2>
      <p>
        Alle intellectuele eigendomsrechten met betrekking tot FactuurBaas, waaronder de website, software,
        vormgeving, teksten, logo&apos;s en overige door ons ontwikkelde inhoud, berusten bij 2xGen LLC of haar
        licentiegevers.
      </p>
      <p>
        De gebruiker behoudt de rechten op de gegevens en inhoud die hij zelf invoert, voor zover deze rechten bij hem
        berusten.
      </p>
      <p>
        Door gegevens in de Dienst in te voeren, verleent de gebruiker FactuurBaas de toestemming die noodzakelijk is
        om deze gegevens technisch te verwerken, op te slaan, weer te geven en te gebruiken voor de uitvoering van de
        Dienst.
      </p>
      <p>Deze toestemming houdt geen overdracht van eigendom van de ingevoerde gegevens in.</p>
      <p>
        Het is niet toegestaan onze software, vormgeving of andere beschermde onderdelen zonder toestemming te
        kopiëren, verspreiden of commercieel te exploiteren, behalve voor zover dit wettelijk is toegestaan.
      </p>

      <h2 id="advies">12. Geen professioneel financieel of juridisch advies</h2>
      <p>
        De informatie, gidsen, calculators en financiële overzichten op FactuurBaas zijn bedoeld als algemene
        informatie en praktische hulpmiddelen.
      </p>
      <p>
        Hoewel wij streven naar juiste en actuele informatie, kunnen wij niet garanderen dat alle informatie
        volledig, foutloos of in iedere individuele situatie toepasbaar is.
      </p>
      <p>
        FactuurBaas verstrekt via deze algemene functies geen persoonlijk fiscaal, juridisch, boekhoudkundig of
        financieel advies.
      </p>
      <p>
        Gebruikers blijven zelf verantwoordelijk voor zakelijke beslissingen en het controleren van informatie die
        voor hun onderneming van belang is.
      </p>

      <h2 id="aansprakelijkheid">13. Aansprakelijkheid</h2>
      <p>Wij streven ernaar FactuurBaas zorgvuldig te ontwikkelen, te onderhouden en beschikbaar te stellen.</p>
      <p>De Dienst wordt aangeboden op basis van de beschikbare functionaliteiten en technische mogelijkheden.</p>
      <p>Voor zover wettelijk toegestaan, zijn wij niet aansprakelijk voor schade die ontstaat door:</p>
      <ul>
        <li>Onjuiste of onvolledige gegevens die de gebruiker invoert.</li>
        <li>Onjuist gebruik van de Dienst.</li>
        <li>Fiscale of administratieve fouten die voortkomen uit niet-gecontroleerde gegevens of berekeningen.</li>
        <li>Tijdelijke onbeschikbaarheid van de Dienst.</li>
        <li>Storingen bij externe technische dienstverleners.</li>
        <li>Verlies van gegevens dat redelijkerwijs niet kon worden voorkomen ondanks passende maatregelen.</li>
        <li>Handelingen of nalatigheden van externe zakelijke dienstverleners.</li>
      </ul>
      <p>
        Voor zover wettelijk toegestaan, sluiten wij aansprakelijkheid voor indirecte schade, gevolgschade,
        winstderving en gemiste zakelijke kansen uit.
      </p>
      <p>
        Deze bepalingen beperken geen aansprakelijkheid die volgens toepasselijk dwingend recht niet mag worden
        uitgesloten, waaronder aansprakelijkheid voor opzet of bewuste roekeloosheid waar uitsluiting niet is
        toegestaan.
      </p>
      <p>Eventuele aansprakelijkheid wordt beoordeeld volgens het toepasselijke recht en de omstandigheden van het geval.</p>

      <h2 id="privacy">14. Privacy en verwerking van persoonsgegevens</h2>
      <p>FactuurBaas verwerkt persoonsgegevens in overeenstemming met het toepasselijke privacyrecht.</p>
      <p>Meer informatie over welke gegevens wij verwerken, de doeleinden, bewaartermijnen en rechten van betrokkenen is beschikbaar in ons:</p>
      <p>
        <Link href="/privacybeleid" className={docLink}>
          Privacybeleid
        </Link>
      </p>
      <p>
        Wanneer FactuurBaas persoonsgegevens namens zakelijke gebruikers verwerkt, kunnen aanvullende afspraken van
        toepassing zijn zoals opgenomen in onze:
      </p>
      <p>
        <Link href="/verwerkersovereenkomst" className={docLink}>
          Verwerkersovereenkomst (DPA)
        </Link>
      </p>
      <p>Informatie over de beveiliging van de Dienst is beschikbaar op:</p>
      <p>
        <Link href="/veiligheid" className={docLink}>
          Veiligheid
        </Link>
      </p>
      <p>
        Een ondertekende verwerkersovereenkomst kan waar nodig worden aangevraagd via <MailLink />.
      </p>

      <h2 id="beeindiging">15. Accountverwijdering en beëindiging</h2>
      <p>
        Gebruikers kunnen hun account beëindigen via de beschikbare accountinstellingen of door contact op te nemen
        met FactuurBaas.
      </p>
      <h3>Gegevens exporteren</h3>
      <p>
        Gebruikers kunnen de beschikbare exportfunctionaliteit gebruiken om hun gegevens te bewaren, waaronder de
        JSON-export via hun profiel.
      </p>
      <p>Wij adviseren om belangrijke administratieve gegevens te exporteren voordat een account wordt verwijderd.</p>
      <h3>Gegevens verwijderen</h3>
      <p>
        Bij het verwijderen van een account worden de bijbehorende opgeslagen gegevens verwijderd of geanonimiseerd
        volgens de toepasselijke verwijderprocedure, tenzij een wettelijke verplichting of andere geldige reden
        verdere bewaring vereist.
      </p>
      <p>Dit kan onder andere betrekking hebben op:</p>
      <ul>
        <li>Facturen</li>
        <li>Offertes</li>
        <li>Klanten</li>
        <li>Urenregistraties</li>
        <li>Inkomsten en uitgaven</li>
        <li>Bedrijfsinstellingen</li>
        <li>Profielgegevens</li>
        <li>Logo&apos;s</li>
        <li>Baas-statusgegevens</li>
      </ul>
      <p>Wij kunnen een bevestigingsmail sturen wanneer een account wordt verwijderd.</p>
      <h3>Beëindiging door FactuurBaas</h3>
      <p>
        Wij kunnen de toegang tot een account beperken of beëindigen wanneer sprake is van ernstig misbruik, schending
        van deze voorwaarden of een wettelijke verplichting.
      </p>
      <p>Waar redelijkerwijs mogelijk informeren wij de gebruiker hierover.</p>

      <h2 id="wijzigingen-dienst">16. Wijzigingen in de Dienst</h2>
      <p>FactuurBaas ontwikkelt zich voortdurend.</p>
      <p>
        Wij kunnen functionaliteiten toevoegen, wijzigen of verwijderen en de technische inrichting van de Dienst
        aanpassen.
      </p>
      <p>Dit kan onder andere betrekking hebben op:</p>
      <ul>
        <li>Nieuwe tools en calculators</li>
        <li>Dashboardfuncties</li>
        <li>Factuur- en offertesjablonen</li>
        <li>Gebruikersinstellingen</li>
        <li>Integraties</li>
        <li>Gratis aanvullende functionaliteiten</li>
        <li>Baas-status en beloningen</li>
      </ul>
      <p>
        Wij streven ernaar belangrijke wijzigingen zorgvuldig door te voeren en gebruikers te informeren wanneer dit
        redelijkerwijs nodig of wettelijk verplicht is.
      </p>

      <h2 id="wijzigingen">17. Wijzigingen in de algemene voorwaarden</h2>
      <p>
        Wij kunnen deze algemene voorwaarden wijzigen wanneer onze dienstverlening verandert of wanneer dit
        noodzakelijk is vanwege technische, zakelijke of juridische ontwikkelingen.
      </p>
      <p>De meest recente versie wordt gepubliceerd op:</p>
      <p>
        <a href="https://factuurbaas.nl/algemene-voorwaarden" className={docLink}>
          https://factuurbaas.nl/algemene-voorwaarden
        </a>
      </p>
      <p>Bij wezenlijke wijzigingen informeren wij gebruikers wanneer dit wettelijk vereist is.</p>
      <p>Wijzigingen laten bestaande wettelijke rechten van gebruikers onverlet.</p>

      <h2 id="recht">18. Toepasselijk recht en geschillen</h2>
      <p>
        Op deze algemene voorwaarden is <strong>Nederlands recht</strong> van toepassing.
      </p>
      <p>
        Geschillen die voortvloeien uit of verband houden met het gebruik van FactuurBaas worden voorgelegd aan de
        bevoegde rechter in Nederland, voor zover toepasselijke wettelijke bevoegdheidsregels dit toestaan.
      </p>
      <p>
        Deze rechtskeuze laat eventuele dwingendrechtelijke bescherming en bevoegdheidsregels die van toepassing zijn
        onverlet.
      </p>

      <h2 id="contact">19. Contact</h2>
      <p>Voor vragen over de Dienst of deze algemene voorwaarden kun je contact opnemen via:</p>
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
