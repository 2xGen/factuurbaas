import React from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText as FileTextIcon, Crown } from 'lucide-react';

export const metadata = {
  title: 'Algemene Voorwaarden | FactuurBaas',
  description: 'Algemene voorwaarden van FactuurBaas.nl.',
  alternates: { canonical: 'https://factuurbaas.nl/algemene-voorwaarden' },
};

export default function TermsAndConditionsPage() {
  const lastUpdatedDate = '3 oktober 2025';

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
            <h2>1. Toepasselijkheid</h2>
            <p>Deze algemene voorwaarden zijn van toepassing op elk gebruik van de website FactuurBaas.nl (&quot;Dienst&quot;). Door gebruik te maken van de Dienst, aanvaardt u deze voorwaarden.</p>
            <h2>2. Beschrijving van de Dienst</h2>
            <p>FactuurBaas.nl biedt een online tool waarmee gebruikers facturen kunnen genereren en downloaden als PDF-bestand. De Dienst is gratis te gebruiken en vereist geen registratie.</p>
            <h2>3. Gebruik van de Dienst</h2>
            <p>U bent zelf verantwoordelijk voor de juistheid en volledigheid van de gegevens die u invoert voor het genereren van facturen. U dient zich te houden aan alle toepasselijke wet- en regelgeving, inclusief fiscale verplichtingen.</p>
            <p>Het is niet toegestaan de Dienst te gebruiken voor onwettige doeleinden of op een wijze die schade kan toebrengen aan de Dienst of derden.</p>
            <h2>4. Intellectueel Eigendom</h2>
            <p>Alle intellectuele eigendomsrechten met betrekking tot de Dienst, inclusief de website, software, en content (exclusief door gebruikers ingevoerde data), berusten bij FactuurBaas.nl of haar licentiegevers.</p>
            <h2>5. Geen Garanties en Beperking van Aansprakelijkheid</h2>
            <p>De Dienst wordt geleverd &quot;zoals deze is&quot; (&quot;as is&quot;), zonder enige vorm van garantie. Wij garanderen niet dat de Dienst ononderbroken, foutloos, of veilig zal zijn.</p>
            <p>FactuurBaas.nl is niet aansprakelijk voor enige directe of indirecte schade voortvloeiend uit het gebruik van de Dienst.</p>
            <h2>6. Gegevensprivacy</h2>
            <p>FactuurBaas.nl verwerkt geen persoonlijke gegevens die u invoert voor het maken van facturen op een manier die ze opslaat na het genereren van de PDF. Raadpleeg ons <Link href="/privacybeleid" className="text-warm-orange hover:underline">Privacybeleid</Link> voor meer informatie.</p>
            <h2>7. Wijzigingen van de Dienst en Voorwaarden</h2>
            <p>Wij behouden ons het recht voor om de Dienst en deze algemene voorwaarden op elk moment te wijzigen. Gewijzigde voorwaarden worden van kracht zodra ze op de website zijn gepubliceerd.</p>
            <h2>8. Toepasselijk Recht en Geschillen</h2>
            <p>Op deze voorwaarden is Nederlands recht van toepassing. Eventuele geschillen zullen worden voorgelegd aan de bevoegde rechter in het arrondissement waar FactuurBaas.nl is gevestigd, tenzij dwingend recht anders voorschrijft.</p>
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
