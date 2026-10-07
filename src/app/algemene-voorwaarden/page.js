import React from 'react';
import Link from 'next/link';
import { FileText as FileTextIcon } from 'lucide-react';
import LegalDocument from '@/components/site/LegalDocument';

export const metadata = {
  title: 'Algemene Voorwaarden | FactuurBaas',
  description: 'Algemene voorwaarden van FactuurBaas.nl.',
  alternates: { canonical: 'https://factuurbaas.nl/algemene-voorwaarden' },
};

const sections = [
  { id: 'aanbieder', label: '1. Aanbieder en toepasselijkheid' },
  { id: 'dienst', label: '2. Beschrijving van de Dienst' },
  { id: 'gebruik', label: '3. Gebruik van de Dienst' },
  { id: 'baas-status', label: '4. Baas-status en referrals' },
  { id: 'intellectueel-eigendom', label: '5. Intellectueel Eigendom' },
  { id: 'aansprakelijkheid', label: '6. Geen Garanties en Beperking van Aansprakelijkheid' },
  { id: 'privacy', label: '7. Gegevensprivacy en accounts' },
  { id: 'beeindiging', label: '8. Accountbeëindiging' },
  { id: 'wijzigingen', label: '9. Wijzigingen van de Dienst en Voorwaarden' },
  { id: 'recht', label: '10. Toepasselijk recht en geschillen' },
];

export default function TermsAndConditionsPage() {
  const lastUpdatedDate = '7 oktober 2026';

  return (
    <LegalDocument
      backHref="/"
      backLabel="Terug naar Home"
      eyebrow="Voorwaarden"
      eyebrowIcon={FileTextIcon}
      title="Algemene Voorwaarden"
      sections={sections}
      meta={<span>Laatst bijgewerkt: {lastUpdatedDate}</span>}
    >
            <h2 id="aanbieder">1. Aanbieder en toepasselijkheid</h2>
            <p>
              FactuurBaas.nl is een dienst van <strong>2xGen LLC</strong>, gevestigd in New Mexico, Verenigde Staten
              (hierna: “FactuurBaas”, “wij”, “ons”). Deze algemene voorwaarden zijn van toepassing op elk gebruik van
              de website FactuurBaas.nl en bijbehorende diensten (“Dienst”). Door gebruik te maken van de Dienst
              aanvaardt u deze voorwaarden.
            </p>
            <h2 id="dienst">2. Beschrijving van de Dienst</h2>
            <p>
              FactuurBaas.nl biedt een online tool waarmee gebruikers facturen kunnen genereren en downloaden als
              PDF-bestand. De basisdienst is gratis en werkt zonder account (gastmodus).
            </p>
            <p>
              Optioneel kunt u inloggen met Google om facturen en klanten op te slaan, statussen bij te houden,
              een dashboard te gebruiken en deel te nemen aan Baas-status (uitnodigen van andere ondernemers via
              een unieke Baas-link, met optionele unlocks zoals exclusieve factuurstijlen). Opslaan in de cloud
              gebeurt alleen wanneer u daarvoor kiest. Bij accountgebruik kunnen we transactionele dienstmails
              sturen (bijv. welkom of bevestiging van accountverwijdering); dit is geen marketingnewsletter.
            </p>
            <h2 id="gebruik">3. Gebruik van de Dienst</h2>
            <p>
              U bent zelf verantwoordelijk voor de juistheid en volledigheid van de gegevens die u invoert voor het
              genereren van facturen. U dient zich te houden aan alle toepasselijke wet- en regelgeving, inclusief
              fiscale verplichtingen.
            </p>
            <p>
              Het is niet toegestaan de Dienst te gebruiken voor onwettige doeleinden of op een wijze die schade kan
              toebrengen aan de Dienst of derden.
            </p>
            <p>
              U bent verantwoordelijk voor de rechtmatigheid van klantgegevens die u opslaat (bijv. persoonsgegevens
              van uw klanten). FactuurBaas faciliteert opslag ten behoeve van uw administratie; u blijft zelf
              verantwoordelijk voor uw relatie met die klanten.
            </p>
            <h2 id="baas-status">4. Baas-status en referrals</h2>
            <p>
              Met een account kunt u een unieke Baas-link delen. Wanneer iemand via die link een account aanmaakt,
              kan dat meetellen als referral voor uw Baas-status. Referrals (accounts via uw link) zijn de
              primaire voortgangsmeting voor unlocks. Linkbezoeken kunnen apart worden getoond als secundaire
              indicator en geven op zichzelf geen unlock.
            </p>
            <p>
              Unlocks (zoals exclusieve factuurstijlen) zijn een gratis extra bij de Dienst. Wij mogen regels,
              drempels, beloningen of beschikbaarheid van het programma wijzigen, pauzeren of beëindigen. Er
              bestaat geen recht op een specifieke beloning of op voortzetting van een unlock als we het programma
              aanpassen.
            </p>
            <p>
              Misbruik is niet toegestaan, waaronder (niet limitatief): zelf-referrals, nepaccounts, geautomatiseerd
              klikken of andere manipulatie van tellers. Bij vermoeden van misbruik kunnen we referrals, bezoeken
              of unlocks corrigeren of intrekken.
            </p>
            <h2 id="intellectueel-eigendom">5. Intellectueel Eigendom</h2>
            <p>
              Alle intellectuele eigendomsrechten met betrekking tot de Dienst, inclusief de website, software en
              content (exclusief door gebruikers ingevoerde data), berusten bij 2xGen LLC / FactuurBaas.nl of haar
              licentiegevers.
            </p>
            <h2 id="aansprakelijkheid">6. Geen Garanties en Beperking van Aansprakelijkheid</h2>
            <p>
              De Dienst wordt geleverd &quot;zoals deze is&quot; (&quot;as is&quot;), zonder enige vorm van garantie. Wij garanderen niet
              dat de Dienst ononderbroken, foutloos of veilig zal zijn.
            </p>
            <p>
              2xGen LLC / FactuurBaas.nl is niet aansprakelijk voor enige directe of indirecte schade voortvloeiend
              uit het gebruik van de Dienst, voor zover wettelijk toegestaan. Dit beperkt niet uw dwingende rechten
              als consument waar van toepassing.
            </p>
            <h2 id="privacy">7. Gegevensprivacy en accounts</h2>
            <p>
              In gastmodus worden factuurgegevens niet op onze servers bewaard voor later gebruik. Met een account
              kunnen opgeslagen facturen, offertes, inkomsten, uitgaven, uren, klanten en bedrijfsinstellingen wél
              worden bewaard totdat u ze of uw account verwijdert.
              Accountgegevens staan in de EU (Supabase, regio eu-north-1 / Stockholm). Transactionele e-mails
              gaan via Resend (eu-west-1 / Ierland). Raadpleeg ons{' '}
              <Link href="/privacybeleid" className="text-warm-orange hover:underline">
                Privacybeleid
              </Link>
              , de{' '}
              <Link href="/verwerkersovereenkomst" className="text-warm-orange hover:underline">
                Verwerkersovereenkomst (DPA)
              </Link>{' '}
              (onderdeel van de dienstverlening) en de pagina{' '}
              <Link href="/veiligheid" className="text-warm-orange hover:underline">
                Veiligheid
              </Link>
              . Een ondertekende DPA is op verzoek beschikbaar via mail@factuurbaas.nl.
            </p>
            <h2 id="beeindiging">8. Accountbeëindiging</h2>
            <p>
              U kunt uw accountgegevens exporteren (JSON via Profiel) en uw account en bijbehorende opgeslagen
              gegevens (facturen, offertes, inkomsten, uitgaven, uren, klanten, profiel, logo,
              referral-/Baas-statusgegevens) verwijderen via uw profiel of door contact op te nemen via
              mail@factuurbaas.nl. Bij verwijdering kunnen we een bevestigingsmail naar het accountadres
              sturen.
            </p>
            <h2 id="wijzigingen">9. Wijzigingen van de Dienst en Voorwaarden</h2>
            <p>
              Wij behouden ons het recht voor om de Dienst en deze algemene voorwaarden op elk moment te wijzigen.
              Gewijzigde voorwaarden worden van kracht zodra ze op de website zijn gepubliceerd.
            </p>
            <h2 id="recht">10. Toepasselijk recht en geschillen</h2>
            <p>
              Omdat FactuurBaas.nl zich richt op ondernemers in Nederland, is op deze voorwaarden{' '}
              <strong>Nederlands recht</strong> van toepassing. Geschillen die uit of in verband met de Dienst
              ontstaan, worden voorgelegd aan de bevoegde rechter in Nederland, tenzij dwingend recht anders
              voorschrijft. Dit laat onverlet eventuele dwingende consumentenrechten of bevoegdheidsregels die van
              toepassing zijn.
            </p>
    </LegalDocument>
  );
}
