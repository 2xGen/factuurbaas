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
      <Link href="/create-invoice">{label}</Link>
    </Button>
  </div>
);

export const ublFactuurMakenArticle = {
  slug: 'ubl-factuur-maken',
  path: '/ubl-factuur-maken',
  relatedSlugs: ['e-factuur-maken', 'wat-is-een-ubl-factuur', 'wat-is-peppol', 'factureren-zonder-account'],
  metaTitle: 'Gratis UBL factuur maken (XML) zonder account',
  title: 'Gratis UBL factuur maken',
  excerpt:
    'Gratis een UBL factuur maken? Vul je gegevens in en download direct een UBL/XML-bestand. Zonder account of abonnement. Geen Peppol-verzending.',
  keywords:
    'ubl factuur maken, gratis ubl factuur maken, ubl factuur, xml factuur maken, e-factuur maken, ubl factuur downloaden',
  image: {
    url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/ubl%20factuur%20maken.jpg',
    alt: 'Gratis UBL factuur maken en downloaden als XML-bestand.',
  },
  datePublished: '2026-11-01',
  dateModified: '2026-11-01',
  faq: [
    {
      question: 'Wat is een UBL-factuur?',
      answer:
        'Een UBL-factuur is een gestructureerd elektronisch factuurbestand, meestal in XML-formaat. Geschikte software kan de gegevens automatisch uitlezen en verwerken.',
    },
    {
      question: 'Kan ik gratis een UBL-factuur maken?',
      answer:
        'Ja. Met de gratis factuurmaker van FactuurBaas kun je een factuur invullen en downloaden als UBL/XML-bestand, zonder betaald abonnement.',
    },
    {
      question: 'Heb ik een account nodig om een UBL-factuur te downloaden?',
      answer:
        'Nee. Je kunt de factuurmaker gebruiken zonder registratie. Een gratis account is optioneel als je facturen en klantgegevens wilt bewaren.',
    },
    {
      question: 'Is een UBL-factuur hetzelfde als een XML-factuur?',
      answer:
        'UBL-facturen worden doorgaans opgeslagen als XML-bestanden. Maar niet ieder XML-bestand is automatisch een UBL-factuur. De gegevens moeten volgens de juiste structuur zijn vastgelegd.',
    },
    {
      question: 'Kan ik een PDF omzetten naar UBL?',
      answer:
        'Dat kan met software die factuurgegevens uit een PDF haalt en omzet naar een gestructureerd bestand. FactuurBaas zet geen bestaande PDF om. Je vult de factuur in en downloadt diezelfde factuur als PDF of als UBL/XML.',
    },
  ],
  content: (
    <>
      <p>
        Maak gratis een UBL-factuur online en download je factuur als gestructureerd XML-bestand. Vul je bedrijfsgegevens, klantgegevens en factuurregels in en kies <strong>Download UBL (XML)</strong>. Zonder account, zonder abonnement en zonder ingewikkeld boekhoudprogramma.
      </p>
      <CtaButton label="Maak nu je gratis UBL-factuur" />
      <p>
        Een UBL-factuur is bedoeld voor elektronische verwerking in geschikte boekhoudsoftware. Wil je liever een gewone factuur versturen? Dan kun je bij FactuurBaas dezelfde factuur ook downloaden als PDF.
      </p>

      <h2>Gratis UBL factuur maken: zo werkt het</h2>
      <p>
        Met FactuurBaas kun je zelf een UBL-factuur maken zonder eerst een account aan te maken. Je gebruikt dezelfde factuurmaker waarmee je een PDF-factuur opstelt.
      </p>
      <p>Dat werkt in vier stappen:</p>
      <ol>
        <li>
          <strong>Open de gratis factuurmaker.</strong> Ga naar FactuurBaas en begin met een{' '}
          <TextLink href="/create-invoice">nieuwe factuur</TextLink>.
        </li>
        <li>
          <strong>Vul je factuurgegevens in.</strong> Voeg je bedrijfsgegevens, klantgegevens, factuurnummer, datum, omschrijving, bedragen en btw toe.
        </li>
        <li>
          <strong>Controleer het factuurvoorbeeld.</strong> Kijk of de gegevens en berekende bedragen kloppen.
        </li>
        <li>
          <strong>Download je UBL-factuur.</strong> Kies bij het afronden voor <em>Download UBL (XML)</em>. Je ontvangt een XML-bestand dat je kunt bewaren of gebruiken in geschikte boekhoudsoftware.
        </li>
      </ol>
      <p>Je hoeft geen account aan te maken en je hebt geen betaald abonnement nodig om het bestand te downloaden.</p>
      <CtaButton label="Maak gratis een UBL-factuur" />

      <h2>Wat is een UBL-factuur?</h2>
      <p>
        Een UBL-factuur is een elektronisch factuurbestand waarin factuurgegevens op een gestructureerde manier zijn vastgelegd.
      </p>
      <p>
        UBL staat voor <em>Universal Business Language</em>. Het is een standaard voor het uitwisselen van zakelijke documenten, waaronder facturen.
      </p>
      <p>
        In plaats van alleen tekst en bedragen op een pagina te tonen, bevat een UBL-factuur herkenbare gegevensvelden voor bijvoorbeeld:
      </p>
      <ul>
        <li>De leverancier en de klant.</li>
        <li>Het factuurnummer en de factuurdatum.</li>
        <li>De omschrijving van producten of diensten.</li>
        <li>Aantallen, prijzen en bedragen.</li>
        <li>Btw-percentages en btw-bedragen.</li>
        <li>Het totaalbedrag en de betaalgegevens.</li>
      </ul>
      <p>
        Boekhoudsoftware die het gebruikte UBL-formaat ondersteunt, kan deze gegevens automatisch uitlezen. Daardoor hoeft de ontvanger mogelijk minder informatie handmatig over te nemen.
      </p>
      <p>
        Een UBL-factuur wordt meestal opgeslagen als een bestand met de extensie <strong>.xml</strong>.
      </p>

      <h2>Wat is het verschil tussen een PDF-factuur en een UBL-factuur?</h2>
      <p>
        Een PDF en een UBL-bestand kunnen dezelfde factuurgegevens bevatten, maar zijn bedoeld voor verschillende manieren van verwerken.
      </p>
      <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
        <table className="w-full min-w-[480px] text-sm text-slate-700 sm:text-base">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">PDF-factuur</th>
              <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">UBL-factuur (XML)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-100">
              <td className="px-4 py-3">Bedoeld om te bekijken en te lezen</td>
              <td className="px-4 py-3">Bedoeld voor elektronische gegevensverwerking</td>
            </tr>
            <tr className="border-b border-slate-100">
              <td className="px-4 py-3">Heeft een visuele factuuropmaak</td>
              <td className="px-4 py-3">Bevat gestructureerde gegevensvelden</td>
            </tr>
            <tr className="border-b border-slate-100">
              <td className="px-4 py-3">Eenvoudig te mailen of printen</td>
              <td className="px-4 py-3">Kan door geschikte software worden geïmporteerd</td>
            </tr>
            <tr className="border-b border-slate-100">
              <td className="px-4 py-3">Gegevens moeten soms handmatig worden overgenomen</td>
              <td className="px-4 py-3">Gegevens kunnen automatisch worden uitgelezen</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Te openen met een PDF-lezer</td>
              <td className="px-4 py-3">Te verwerken met geschikte software of een XML-viewer</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Een PDF is niet automatisch een UBL-factuur. Ook wanneer een PDF digitaal is gemaakt en per e-mail wordt verzonden, bevat deze niet noodzakelijk de gestructureerde gegevens die voor elektronische factuurverwerking nodig zijn.
      </p>
      <p>
        Bij FactuurBaas hoef je niet tussen beide te kiezen tijdens het opstellen. Je kunt dezelfde factuurgegevens gebruiken om een PDF of UBL/XML-bestand te downloaden.
      </p>

      <h2>Welke gegevens heb je nodig voor een UBL-factuur?</h2>
      <p>Een UBL-factuur bevat veel van dezelfde gegevens als een gewone zakelijke factuur.</p>
      <p>Voor een Nederlandse zakelijke factuur gaat het onder andere om:</p>
      <ul>
        <li>Je bedrijfsnaam en adres.</li>
        <li>De naam en het adres van je klant.</li>
        <li>Je factuurnummer en factuurdatum.</li>
        <li>De datum waarop je producten of diensten hebt geleverd, wanneer deze afwijkt en vermeld moet worden.</li>
        <li>Een duidelijke omschrijving van de geleverde producten of diensten.</li>
        <li>De aantallen en prijzen.</li>
        <li>Het bedrag exclusief btw.</li>
        <li>Het toegepaste btw-tarief en btw-bedrag, of de toepasselijke btw-behandeling.</li>
        <li>Het totaalbedrag.</li>
        <li>Je btw-identificatienummer en KvK-nummer wanneer deze volgens de toepasselijke regels vereist zijn.</li>
      </ul>
      <p>Daarnaast kunnen voor bepaalde elektronische factuurstandaarden extra gegevens of specifieke identificaties nodig zijn.</p>
      <p>
        <strong>Let op:</strong> een XML-bestand downloaden betekent niet automatisch dat het voldoet aan iedere UBL-variant, de Europese norm EN 16931 of de eisen voor Peppol-verzending. Controleer welke eisen de ontvangende organisatie of boekhoudsoftware stelt.
      </p>

      <h2>Kan ik gratis een UBL-factuur maken zonder account?</h2>
      <p>Ja. Met FactuurBaas kun je een factuur invullen en als UBL/XML-bestand downloaden zonder eerst een account aan te maken.</p>
      <p>
        Dat is handig wanneer je slechts af en toe een elektronische factuur nodig hebt, bijvoorbeeld omdat een klant een gestructureerd factuurbestand vraagt.
      </p>
      <p>
        Wil je vaker factureren? Dan kun je een gratis account gebruiken om je facturen en klantgegevens te bewaren, eerdere facturen opnieuw te gebruiken en openstaande betalingen bij te houden.
      </p>
      <p>Een account is niet verplicht om een losse UBL-factuur te maken.</p>

      <h2>Kan ik een UBL-factuur via Peppol versturen?</h2>
      <p>Een UBL-factuur en Peppol zijn niet hetzelfde.</p>
      <p>
        <strong>UBL</strong> is een formaat waarin factuurgegevens gestructureerd kunnen worden opgeslagen. <strong>Peppol</strong> is een netwerk waarmee organisaties elektronische zakelijke documenten kunnen uitwisselen.
      </p>
      <p>
        Om een factuur via Peppol te versturen, moet het document voldoen aan de toepasselijke eisen en moet de verzending via een geschikte Peppol-dienst verlopen.
      </p>
      <p>
        Met FactuurBaas kun je momenteel een UBL/XML-bestand downloaden. <strong>De download verstuurt je factuur niet automatisch via Peppol.</strong>
      </p>
      <p>
        Vraagt je klant specifiek om een factuur via Peppol? Controleer dan of je het bestand via een geschikte dienst kunt aanleveren en of het voldoet aan het vereiste factuurprofiel.
      </p>

      <h2>Wanneer is een UBL-factuur handig?</h2>
      <p>
        Een UBL-factuur is vooral nuttig wanneer je klant facturen elektronisch verwerkt of wanneer een organisatie om een gestructureerd factuurbestand vraagt.
      </p>
      <p>
        Denk bijvoorbeeld aan een zzp&apos;er die een factuur verstuurt naar een grotere zakelijke klant, een leverancier die factureert aan een organisatie met geautomatiseerde factuurverwerking, of een ondernemer die factuurgegevens wil importeren in geschikte boekhoudsoftware.
      </p>
      <p>
        Een UBL-bestand kan de verwerking vereenvoudigen, maar alleen als het bestand aansluit op de technische eisen van het ontvangende systeem.
      </p>
      <p>Voor een klant die uitsluitend een leesbare factuur per e-mail wil ontvangen, is een PDF vaak voldoende.</p>

      <h2>Is UBL-facturatie verplicht in Nederland?</h2>
      <p>Of je een elektronische factuur moet gebruiken, hangt af van de toepasselijke regelgeving en de afspraken met je opdrachtgever.</p>
      <p>
        Bij facturatie aan de overheid kunnen specifieke eisen voor e-facturatie gelden. Voor andere zakelijke transacties kunnen andere regels van toepassing zijn.
      </p>
      <p>
        Ook ontwikkelen de Europese regels voor digitale facturatie en rapportage zich verder. Het is daarom belangrijk om onderscheid te maken tussen bestaande verplichtingen, aangekondigde plannen en toekomstige wetgeving.
      </p>
      <p>Een gewone PDF-factuur is bovendien niet hetzelfde als een gestructureerde e-factuur.</p>
      <p>Controleer bij twijfel de actuele informatie van de Belastingdienst, de Rijksoverheid of je opdrachtgever.</p>

      <h2>Veelgestelde vragen over UBL-facturen</h2>
      <h3>Wat is een UBL-factuur?</h3>
      <p>
        Een UBL-factuur is een gestructureerd elektronisch factuurbestand, meestal in XML-formaat. Geschikte software kan de gegevens automatisch uitlezen en verwerken.
      </p>
      <h3>Kan ik gratis een UBL-factuur maken?</h3>
      <p>
        Ja. Met de gratis factuurmaker van FactuurBaas kun je een factuur invullen en downloaden als UBL/XML-bestand, zonder betaald abonnement.
      </p>
      <h3>Heb ik een account nodig om een UBL-factuur te downloaden?</h3>
      <p>
        Nee. Je kunt de factuurmaker gebruiken zonder registratie. Een gratis account is optioneel als je facturen en klantgegevens wilt bewaren.
      </p>
      <h3>Is een UBL-factuur hetzelfde als een XML-factuur?</h3>
      <p>
        UBL-facturen worden doorgaans opgeslagen als XML-bestanden. Maar niet ieder XML-bestand is automatisch een UBL-factuur. De gegevens moeten volgens de juiste structuur zijn vastgelegd.
      </p>
      <h3>Kan ik een PDF omzetten naar UBL?</h3>
      <p>
        Dat kan met software die factuurgegevens uit een PDF haalt en omzet naar een gestructureerd bestand. FactuurBaas zet geen bestaande PDF om. Je vult de factuur in en downloadt diezelfde factuur als PDF of als UBL/XML.
      </p>
    </>
  ),
};
