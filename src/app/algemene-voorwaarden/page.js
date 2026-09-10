import React from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText as FileTextIcon, Crown } from 'lucide-react';

export const metadata = {
  title: 'Algemene Voorwaarden | FactuurBaas',
  description: 'Algemene voorwaarden van FactuurBaas.nl.',
  alternates: { canonical: 'https://factuurbaas.nl/algemene-voorwaarden' },
};

export default function TermsAndConditionsPage() {
  const lastUpdatedDate = '10 september 2026';

  return (
    <div className="min-h-screen bg-gray-100 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center text-deep-blue hover:text-warm-orange transition-colors mb-8 font-semibold group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
          Terug naar Home
        </Link>

        <article className="bg-white p-6 sm:p-10 rounded-2xl shadow-xl border border-gray-200">
          <header className="text-center mb-10">
            <FileTextIcon className="w-16 h-16 sm:w-20 sm:h-20 text-deep-blue mx-auto mb-4" />
            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-deep-blue">
              Algemene Voorwaarden
            </h1>
            <p className="text-gray-500 mt-2 text-sm">Laatst bijgewerkt: {lastUpdatedDate}</p>
          </header>

          <div className="prose prose-lg max-w-none text-gray-700">
            <h2>1. Aanbieder en toepasselijkheid</h2>
            <p>
              FactuurBaas.nl is een dienst van <strong>2xGen LLC</strong>, gevestigd in New Mexico, Verenigde Staten
              (hierna: “FactuurBaas”, “wij”, “ons”). Deze algemene voorwaarden zijn van toepassing op elk gebruik van
              de website FactuurBaas.nl en bijbehorende diensten (“Dienst”). Door gebruik te maken van de Dienst
              aanvaardt u deze voorwaarden.
            </p>
            <h2>2. Beschrijving van de Dienst</h2>
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
            <h2>3. Gebruik van de Dienst</h2>
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
            <h2>4. Baas-status en referrals</h2>
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
            <h2>5. Intellectueel Eigendom</h2>
            <p>
              Alle intellectuele eigendomsrechten met betrekking tot de Dienst, inclusief de website, software en
              content (exclusief door gebruikers ingevoerde data), berusten bij 2xGen LLC / FactuurBaas.nl of haar
              licentiegevers.
            </p>
            <h2>6. Geen Garanties en Beperking van Aansprakelijkheid</h2>
            <p>
              De Dienst wordt geleverd &quot;zoals deze is&quot; (&quot;as is&quot;), zonder enige vorm van garantie. Wij garanderen niet
              dat de Dienst ononderbroken, foutloos of veilig zal zijn.
            </p>
            <p>
              2xGen LLC / FactuurBaas.nl is niet aansprakelijk voor enige directe of indirecte schade voortvloeiend
              uit het gebruik van de Dienst, voor zover wettelijk toegestaan. Dit beperkt niet uw dwingende rechten
              als consument waar van toepassing.
            </p>
            <h2>7. Gegevensprivacy en accounts</h2>
            <p>
              In gastmodus worden factuurgegevens niet op onze servers bewaard voor later gebruik. Met een account
              kunnen opgeslagen facturen en klanten wél worden bewaard totdat u ze of uw account verwijdert.
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
            <h2>8. Accountbeëindiging</h2>
            <p>
              U kunt uw account en bijbehorende opgeslagen gegevens (facturen, klanten, profiel, logo,
              referral-/Baas-statusgegevens) verwijderen via uw profiel of door contact op te nemen via
              mail@factuurbaas.nl. Bij verwijdering kunnen we een bevestigingsmail naar het accountadres
              sturen.
            </p>
            <h2>9. Wijzigingen van de Dienst en Voorwaarden</h2>
            <p>
              Wij behouden ons het recht voor om de Dienst en deze algemene voorwaarden op elk moment te wijzigen.
              Gewijzigde voorwaarden worden van kracht zodra ze op de website zijn gepubliceerd.
            </p>
            <h2>10. Toepasselijk recht en geschillen</h2>
            <p>
              Omdat FactuurBaas.nl zich richt op ondernemers in Nederland, is op deze voorwaarden{' '}
              <strong>Nederlands recht</strong> van toepassing. Geschillen die uit of in verband met de Dienst
              ontstaan, worden voorgelegd aan de bevoegde rechter in Nederland, tenzij dwingend recht anders
              voorschrijft. Dit laat onverlet eventuele dwingende consumentenrechten of bevoegdheidsregels die van
              toepassing zijn.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link href="/" className="flex items-center justify-center text-md font-heading font-bold text-deep-blue hover:text-warm-orange transition-colors group">
              <Crown className="w-6 h-6 mr-2 text-warm-orange transition-transform group-hover:scale-110" />
              FactuurBaas.nl
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
