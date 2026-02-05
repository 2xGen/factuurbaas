import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Crown } from 'lucide-react';

export const metadata = {
  title: 'Privacybeleid | FactuurBaas',
  description: 'Privacybeleid van FactuurBaas.nl - hoe we omgaan met je gegevens.',
  alternates: { canonical: 'https://factuurbaas.nl/privacybeleid' },
};

export default function PrivacyPolicyPage() {
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
            <ShieldCheck className="w-16 h-16 sm:w-20 sm:h-20 text-deep-blue mx-auto mb-4" />
            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-deep-blue">
              Privacybeleid
            </h1>
            <p className="text-gray-500 mt-2 text-sm">Laatst bijgewerkt: {lastUpdatedDate}</p>
          </header>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p>FactuurBaas.nl (&quot;wij&quot;, &quot;ons&quot;, &quot;onze&quot;) respecteert uw privacy. Dit privacybeleid beschrijft hoe wij omgaan met de informatie die u verstrekt bij het gebruik van onze website en diensten voor het maken van facturen.</p>
            <h2>1. Gegevensverzameling</h2>
            <p>Voor het genereren van een factuur voert u gegevens in zoals uw bedrijfsdetails, klantgegevens en factuurspecificaties. Deze gegevens worden uitsluitend gebruikt om de factuur-PDF voor u te genereren. Wij slaan deze gegevens niet op onze servers op nadat u de factuur heeft gedownload of de pagina verlaat.</p>
            <p>Wij kunnen geanonimiseerde gebruiksgegevens verzamelen (zoals bezochte pagina&apos;s, gebruikte features) om onze website te verbeteren. Deze gegevens zijn niet te herleiden tot individuele personen of specifieke factuurinhoud.</p>
            <h2>2. Gebruik van Gegevens</h2>
            <p>De door u ingevoerde factuurgegevens worden lokaal in uw browser verwerkt om de factuur te genereren. Ze worden niet verzonden naar of opgeslagen op onze servers voor later gebruik.</p>
            <h2>3. Gegevensbeveiliging</h2>
            <p>Omdat wij uw factuurgegevens niet opslaan, is het risico op datalekken van deze specifieke informatie via onze systemen geminimaliseerd. U bent zelf verantwoordelijk voor de veilige opslag van de door u gedownloade PDF-facturen.</p>
            <h2>4. Cookies</h2>
            <p>FactuurBaas.nl kan gebruik maken van functionele cookies om de basiswerking van de website te garanderen (bijvoorbeeld het onthouden van bepaalde keuzes tijdens uw sessie). Wij gebruiken geen tracking cookies die persoonlijke informatie verzamelen voor advertentiedoeleinden.</p>
            <h2>5. Derden</h2>
            <p>Wij delen uw ingevoerde factuurgegevens niet met derden. Geanonimiseerde gebruiksdata kan worden verwerkt door analyse-tools (zoals Google Analytics, indien gebruikt) onder hun eigen privacyvoorwaarden.</p>
            <h2>6. Uw Rechten</h2>
            <p>Aangezien wij uw factuurgegevens niet bewaren, zijn verzoeken tot inzage, correctie of verwijdering van deze specifieke gegevens niet van toepassing op onze systemen. Voor vragen over ons privacybeleid kunt u contact opnemen via <a href="mailto:mail@factuurbaas.nl" className="text-warm-orange hover:underline">mail@factuurbaas.nl</a>.</p>
            <h2>7. Wijzigingen in dit Beleid</h2>
            <p>Wij kunnen dit privacybeleid van tijd tot tijd bijwerken. Wijzigingen worden op deze pagina gepubliceerd. Het is uw verantwoordelijkheid om dit beleid regelmatig te controleren.</p>
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
