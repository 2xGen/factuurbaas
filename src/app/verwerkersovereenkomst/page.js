import React from 'react';
import Link from 'next/link';
import { FileSignature } from 'lucide-react';
import LegalDocument from '@/components/site/LegalDocument';

export const metadata = {
  title: 'Verwerkersovereenkomst (DPA) | FactuurBaas',
  description:
    'Verwerkersovereenkomst van FactuurBaas.nl — afspraken wanneer wij persoonsgegevens van uw klanten verwerken als verwerker.',
  alternates: { canonical: 'https://factuurbaas.nl/verwerkersovereenkomst' },
};

const sections = [
  { id: 'partijen', label: '1. Partijen' },
  { id: 'onderwerp', label: '2. Onderwerp van de verwerking' },
  { id: 'duur', label: '3. Duur' },
  { id: 'instructies', label: '4. Instructies' },
  { id: 'verplichtingen', label: '5. Verplichtingen van de verwerker' },
  { id: 'subverwerkers', label: '6. Subverwerkers en andere dienstverleners' },
  { id: 'locatie', label: '7. Locatie' },
  { id: 'verwijdering', label: '8. Verwijdering en export' },
  { id: 'aansprakelijkheid', label: '9. Aansprakelijkheid' },
  { id: 'contact', label: '10. Contact' },
];

export default function DataProcessingAgreementPage() {
  const lastUpdatedDate = '7 oktober 2026';

  return (
    <LegalDocument
      backHref="/privacybeleid"
      backLabel="Terug naar Privacybeleid"
      eyebrow="Verwerkersovereenkomst"
      eyebrowIcon={FileSignature}
      title="Verwerkersovereenkomst (DPA)"
      sections={sections}
      meta={<span>FactuurBaas.nl — Laatst bijgewerkt: {lastUpdatedDate}</span>}
    >
            <p>
              Deze verwerkersovereenkomst (“DPA”) maakt onderdeel uit van de dienstverlening van FactuurBaas.nl
              (een dienst van 2xGen LLC) wanneer u de Dienst gebruikt om persoonsgegevens te verwerken. Door een
              account te gebruiken en facturen, offertes of andere accountgegevens op te slaan,{' '}
              <strong>aanvaardt u deze DPA als onderdeel van de dienstverlening</strong>, naast ons{' '}
              <Link href="/privacybeleid" className="text-warm-orange hover:underline">
                Privacybeleid
              </Link>{' '}
              en onze{' '}
              <Link href="/algemene-voorwaarden" className="text-warm-orange hover:underline">
                Algemene voorwaarden
              </Link>
              .
            </p>
            <p>
              Een ondertekende exemplaar van deze DPA is op verzoek beschikbaar via{' '}
              <a href="mailto:mail@factuurbaas.nl" className="text-warm-orange hover:underline">
                mail@factuurbaas.nl
              </a>
              .
            </p>

            <h2 id="partijen">1. Partijen</h2>
            <ul>
              <li>
                <strong>Verwerker:</strong> 2xGen LLC, handelend onder de naam FactuurBaas.nl, gevestigd in New
                Mexico, Verenigde Staten (hierna: “FactuurBaas”, “wij”).
              </li>
              <li>
                <strong>Verwerkingsverantwoordelijke:</strong> de natuurlijk of rechtspersoon die een FactuurBaas-
                account gebruikt om facturen/profielgegevens op te slaan (hierna: “u”).
              </li>
            </ul>
            <p>
              Wanneer u FactuurBaas inzet om persoonsgegevens van uw klanten of relaties te verwerken, bent u de
              verwerkingsverantwoordelijke en verwerken wij die gegevens als verwerker. Voor onze eigen
              account-/gebruiksgegevens (bijv. uw login via Google) zijn wij zelf verwerkingsverantwoordelijke; zie
              het Privacybeleid.
            </p>

            <h2 id="onderwerp">2. Onderwerp van de verwerking</h2>
            <p>Wij verwerken in opdracht van u (voor zover u dit opslaat) onder meer:</p>
            <ul>
              <li>factuurgegevens (nummers, datums, bedragen, btw, status, notities);</li>
              <li>offertegegevens (nummers, geldigheid, bedragen, btw, status, notities);</li>
              <li>
                klant-/debiteurgegevens die u invult op facturen, offertes of in uw klantenlijst (naam, adres,
                contact, KvK/btw indien ingevuld);
              </li>
              <li>inkomsten zonder factuur (omschrijving, bedrag, btw, betaalwijze);</li>
              <li>uitgaven (omschrijving, leverancier, categorie, bedrag, btw);</li>
              <li>urenregistratie (datum, uren, omschrijving, uurtarief, gekoppelde klant);</li>
              <li>
                uw bedrijfsprofielgegevens, logo, en optionele bedrijfsinstellingen (uurtarief, uren per week,
                weken per jaar, jaardoel, standaard betaaltermijn) die u koppelt aan facturen of tools.
              </li>
            </ul>
            <p>
              In gastmodus (zonder cloudopslag) verwerken wij factuurinhoud niet op onze servers voor later gebruik.
              Transactionele accountmails (welkom / accountverwijdering) betreffen uw eigen login-e-mail en vallen
              buiten deze DPA; zie het Privacybeleid.
            </p>

            <h3>Categorieën van betrokkenen</h3>
            <p>De verwerking kan betrekking hebben op:</p>
            <ul>
              <li>klanten en zakelijke relaties van de gebruiker;</li>
              <li>contactpersonen binnen organisaties;</li>
              <li>personen genoemd op facturen of offertes.</li>
            </ul>

            <h3>Aard en doel van de verwerking</h3>
            <p>
              De verwerking bestaat uit het opslaan, structureren, weergeven, exporteren en verwijderen van gegevens
              die nodig zijn voor het maken en beheren van facturen, offertes, inkomsten, uitgaven, uren en
              opgeslagen klanten.
            </p>

            <h2 id="duur">3. Duur</h2>
            <p>
              De verwerking duurt zolang u de Dienst met accountopslag gebruikt, tot u facturen, offertes,
              inkomsten, uitgaven, uren of klanten verwijdert of uw account verwijdert, of tot de overeenkomst
              eindigt.
            </p>

            <h2 id="instructies">4. Instructies</h2>
            <p>
              Wij verwerken persoonsgegevens alleen voor het leveren van de Dienst (opslaan, tonen, exporteren,
              verwijderen van facturen, offertes, inkomsten, uitgaven, uren, klanten en profiel) en volgens uw
              instructies via de functionaliteit van de Dienst, tenzij een wettelijke verplichting anders
              voorschrijft.
            </p>

            <h2 id="verplichtingen">5. Verplichtingen van de verwerker</h2>
            <ul>
              <li>vertrouwelijkheid van personen die toegang hebben tot de gegevens;</li>
              <li>
                passende technische en organisatorische maatregelen (o.a. HTTPS, Row Level Security, privé-opslag
                voor logo’s, EU-regio voor database/opslag — zie Privacybeleid en{' '}
                <Link href="/veiligheid" className="text-warm-orange hover:underline">
                  Veiligheid
                </Link>
                );
              </li>
              <li>redelijke bijstand bij AVG-verzoeken van betrokkenen die via u binnenkomen;</li>
              <li>
                redelijke bijstand bij verplichtingen rondom beveiliging, gegevensbeschermingseffectbeoordelingen
                (DPIA&apos;s) en meldingen richting toezichthouders, voor zover relevant voor de dienstverlening;
              </li>
              <li>melding van een datalek aan u zonder onredelijke vertraging nadat wij daarvan kennis nemen;</li>
              <li>geen verkoop van uw factuur- of klantgegevens.</li>
            </ul>

            <h2 id="subverwerkers">6. Subverwerkers en andere dienstverleners</h2>
            <h3>Subverwerkers</h3>
            <p>
              U stemt ermee in dat wij de volgende subverwerkers inzetten voor de opslag en technische verwerking van
              factuur-, offerte-, inkomsten-, uitgaven-, uren-, klant- en profielgegevens:
            </p>
            <ul>
              <li>
                <strong>Supabase</strong> — database, authenticatie-infrastructuur en opslag (regio eu-north-1,
                Stockholm, EU);
              </li>
              <li>
                <strong>Vercel</strong> — hosting van de website / CDN.
              </li>
            </ul>
            <h3>Andere dienstverleners</h3>
            <ul>
              <li>
                <strong>Google OAuth</strong> — authenticatie/identiteit van de gebruiker (e-mail/naam voor login).
                Google verwerkt <strong>geen factuur- of klantinhoud</strong>; wij vragen geen toegang tot Gmail of
                contacten.
              </li>
              <li>
                <strong>Resend</strong> — transactionele e-mails aan u als accountgebruiker (welkom,
                accountverwijdering). Resend verwerkt <strong>geen factuur- of klantendossiers</strong> die u in de
                Dienst opslaat; zie Privacybeleid.
              </li>
            </ul>
            <p>
              Bij materiële wijziging van subverwerkers informeren wij via het Privacybeleid of de Dienst. U kunt
              bezwaar maken door de Dienst te stoppen en uw account te verwijderen.
            </p>

            <h2 id="locatie">7. Locatie</h2>
            <p>
              Opgeslagen accountgegevens (facturen, offertes, inkomsten, uitgaven, uren, klanten, profiel,
              logo&apos;s) worden verwerkt in de EU/EER (Supabase eu-north-1, Stockholm). Hosting/CDN en OAuth
              kunnen edge- of identiteitsverwerking volgens de voorwaarden van die partijen met zich meebrengen.
            </p>

            <h2 id="verwijdering">8. Verwijdering en export</h2>
            <p>
              U kunt uw volledige accountgegevens exporteren (JSON via Profiel), facturen en offertes extra als
              JSON/CSV downloaden, records verwijderen, of uw hele account wissen. Na accountverwijdering wissen
              wij bijbehorende opgeslagen facturen, offertes, inkomsten, uitgaven, uren, klanten, profielgegevens
              en logo’s, behoudens wettelijke bewaarplichten of technische restanten in back-ups die binnen de
              normale retentie van onze provider verlopen. Deze back-ups worden{' '}
              <strong>niet actief gebruikt voor reguliere dienstverlening</strong>.
            </p>

            <h2 id="aansprakelijkheid">9. Aansprakelijkheid</h2>
            <p>
              Aansprakelijkheid is beperkt zoals beschreven in de Algemene voorwaarden, voor zover de wet dat
              toelaat. Deze DPA wijzigt geen dwingende rechten van betrokkenen.
            </p>

            <h2 id="contact">10. Contact</h2>
            <p>
              Vragen of een ondertekende DPA:{' '}
              <a href="mailto:mail@factuurbaas.nl" className="text-warm-orange hover:underline">
                mail@factuurbaas.nl
              </a>
              .
            </p>
    </LegalDocument>
  );
}
