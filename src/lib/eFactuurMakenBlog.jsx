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

export const eFactuurMakenArticle = {
  slug: 'e-factuur-maken',
  path: '/e-factuur-maken',
  relatedSlugs: ['e-facturatie-verplicht', 'xml-factuur-maken', 'ubl-factuur-maken', 'wat-is-peppol'],
  metaTitle: 'Gratis e-factuur maken (UBL/XML)',
  title: 'Gratis e-factuur maken',
  excerpt:
    'Gratis een e-factuur maken? Maak online je factuur en download direct als UBL/XML of PDF. Zonder account of abonnement. Geen Peppol-verzending.',
  keywords:
    'e factuur maken, e-factuur maken gratis, elektronisch factureren, elektronische factuur maken, e facturatie, e-factuur voorbeeld, e-factuur zzp',
  image: {
    url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/e%20factuur%20maken.jpg',
    alt: 'Gratis een e-factuur maken en downloaden als UBL/XML of PDF.',
  },
  datePublished: '2026-11-01',
  dateModified: '2026-11-01',
  faq: [
    {
      question: 'Kan ik gratis een e-factuur maken?',
      answer:
        'Ja. Met FactuurBaas kun je gratis een factuur opstellen en downloaden als UBL/XML-bestand. Je hebt hiervoor geen account of abonnement nodig.',
    },
    {
      question: 'Wat is een e-factuur?',
      answer:
        'Een e-factuur is een elektronische factuur met gestructureerde gegevens die geschikte software automatisch kan verwerken. UBL/XML is een veelgebruikt formaat.',
    },
    {
      question: 'Is een PDF ook een e-factuur?',
      answer:
        'Een PDF is een digitaal document, maar niet automatisch een gestructureerde e-factuur. Voor automatische verwerking volgens e-factuurstandaarden zijn gestructureerde gegevens nodig.',
    },
    {
      question: 'Hoe maak ik een elektronische factuur?',
      answer:
        'Vul je bedrijfsgegevens, klantgegevens, factuurregels en btw in bij een factuurmaker die een geschikt elektronisch formaat ondersteunt. Controleer de gegevens en download het bestand als UBL/XML.',
    },
    {
      question: 'Wat is het verschil tussen UBL en XML?',
      answer:
        'XML is een algemene techniek om gegevens gestructureerd vast te leggen. UBL is een specifieke standaard die XML gebruikt voor zakelijke documenten, waaronder facturen.',
    },
    {
      question: 'Heb ik een account nodig om een e-factuur te maken?',
      answer: 'Nee. Bij FactuurBaas kun je zonder account een factuur maken en downloaden als UBL/XML of PDF.',
    },
    {
      question: 'Kan ik een e-factuur per e-mail versturen?',
      answer:
        'Je kunt een UBL/XML-bestand per e-mail versturen wanneer je klant deze methode accepteert. Als de klant specifiek Peppol-verzending vereist, is een e-mailbijlage niet voldoende.',
    },
    {
      question: 'Is een UBL-factuur automatisch geschikt voor Peppol?',
      answer:
        'Nee. Voor Peppol gelden specifieke eisen aan de structuur, inhoud en validatie van elektronische facturen. Niet ieder UBL-bestand voldoet daaraan.',
    },
    {
      question: 'Kan ik een bestaande PDF omzetten naar een e-factuur?',
      answer:
        'Dat kan met geschikte conversiesoftware. De factuurgegevens moeten uit de PDF worden gehaald en omgezet naar een gestructureerd formaat. Controleer daarna of alle gegevens correct en volledig zijn. FactuurBaas biedt momenteel UBL/XML-export vanuit de eigen factuurmaker, geen automatische conversie van een bestaande PDF.',
    },
    {
      question: 'Is e-facturatie verplicht voor zzp’ers?',
      answer:
        'Dat hangt af van je opdrachtgever, de transactie en de toepasselijke regels. Niet iedere Nederlandse zzp’er hoeft voor iedere factuur Peppol of UBL te gebruiken.',
    },
  ],
  content: (
    <>
      <p>
        Wil je gratis een e-factuur maken? Met FactuurBaas maak je online een professionele factuur en download je deze direct als <strong>UBL/XML-bestand</strong>. Je kunt dezelfde factuur ook opslaan als PDF. Zonder account, zonder abonnement en zonder ingewikkeld boekhoudprogramma.
      </p>
      <p>
        Een UBL-bestand bevat gestructureerde factuurgegevens die geschikte boekhoudsoftware elektronisch kan verwerken. Zo hoef je niet zelf XML-code te schrijven.
      </p>
      <CtaButton label="Maak gratis een e-factuur" />
      <p>
        <em>Gratis UBL/XML of PDF downloaden. Geen automatische Peppol-verzending.</em>
      </p>

      <h2>E-factuur maken: zo werkt het</h2>
      <p>Een elektronische factuur maken hoeft niet ingewikkeld te zijn. Met de gratis factuurmaker van FactuurBaas kun je direct beginnen.</p>
      <h3>Stap 1. Vul je bedrijfsgegevens in</h3>
      <p>
        Open de factuurmaker en voeg je bedrijfsnaam, adres en de relevante bedrijfsidentificaties toe, zoals je KvK-nummer en btw-identificatienummer.
      </p>
      <h3>Stap 2. Voeg je klantgegevens toe</h3>
      <p>
        Vul de naam en het adres van je klant in. Controleer of je klant aanvullende gegevens nodig heeft, zoals een ordernummer of specifieke elektronische identificatie.
      </p>
      <h3>Stap 3. Voeg je factuurregels toe</h3>
      <p>Omschrijf de geleverde producten of diensten. Vul de aantallen, prijzen en toepasselijke btw-tarieven in.</p>
      <p>Controleer ook het factuurnummer, de factuurdatum, de vervaldatum en de betaalgegevens.</p>
      <h3>Stap 4. Controleer het factuurvoorbeeld</h3>
      <p>Bekijk of de bedrijfsgegevens, klantgegevens en bedragen correct zijn. Let vooral op de btw-berekening en het totaalbedrag.</p>
      <h3>Stap 5. Download je e-factuur als UBL/XML</h3>
      <p>
        Kies bij het factuurvoorbeeld voor <strong>Download UBL (XML)</strong>. Je downloadt een XML-bestand met gestructureerde factuurgegevens.
      </p>
      <p>
        Wil je de factuur ook als leesbaar document bewaren of per e-mail versturen? Kies dan voor <strong>Opslaan als PDF</strong>.
      </p>
      <p>Je hebt geen account nodig om een factuur te maken of te downloaden.</p>
      <CtaButton label="Maak nu gratis je e-factuur" />

      <h2>Wat is een e-factuur?</h2>
      <p>
        Een e-factuur, oftewel elektronische factuur, is een factuur waarvan de gegevens in een gestructureerd elektronisch formaat zijn vastgelegd.
      </p>
      <p>Daardoor kan geschikte software gegevens zoals het factuurnummer, de leverancier, de klant, bedragen en btw automatisch herkennen.</p>
      <p>
        Een veelgebruikt formaat voor elektronische facturen is <strong>UBL (Universal Business Language)</strong>. UBL gebruikt XML om factuurgegevens op een gestandaardiseerde manier vast te leggen.
      </p>
      <p>
        Het verschil met een gewone PDF is dat een PDF vooral bedoeld is om door mensen gelezen te worden. Een gestructureerde e-factuur is juist bedoeld om ook door computers verwerkt te worden.
      </p>
      <p>Een PDF die je per e-mail verstuurt, is dus niet automatisch een gestructureerde e-factuur.</p>
      <p>
        Wil je meer weten over het formaat? Lees dan ook <TextLink href="/blogs/wat-is-een-ubl-factuur">Wat is een UBL-factuur?</TextLink> of bekijk hoe je{' '}
        <TextLink href="/ubl-factuur-maken">gratis een UBL-factuur maakt</TextLink>.
      </p>

      <h2>Wat is het verschil tussen een e-factuur en een gewone factuur?</h2>
      <p>Een gewone factuur en een e-factuur bevatten grotendeels dezelfde zakelijke informatie. Het belangrijkste verschil is hoe de gegevens worden opgeslagen en verwerkt.</p>
      <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
        <table className="w-full min-w-[480px] text-sm text-slate-700 sm:text-base">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Gewone PDF-factuur</th>
              <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Gestructureerde e-factuur</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Leesbaar document', 'Elektronisch gestructureerde gegevens'],
              ['Eenvoudig te bekijken en printen', 'Bedoeld voor automatische verwerking'],
              ['Vaak verstuurd per e-mail', 'Uitwisseling via ondersteunde systemen'],
              ['Gegevens kunnen handmatig moeten worden ingevoerd', 'Software kan gegevens automatisch uitlezen'],
              ['Meestal opgeslagen als .pdf', 'Bijvoorbeeld opgeslagen als .xml'],
            ].map(([left, right]) => (
              <tr key={left} className="border-b border-slate-100 last:border-0">
                <td className="px-4 py-3">{left}</td>
                <td className="px-4 py-3">{right}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>Beide formaten kunnen nuttig zijn.</p>
      <p>
        Voor een klant die alleen een leesbare factuur wil ontvangen, kan een PDF voldoende zijn. Vraagt een zakelijke klant om een gestructureerde elektronische factuur, dan kan een UBL/XML-bestand nodig zijn.
      </p>
      <p>Met FactuurBaas kun je vanuit dezelfde factuurgegevens beide bestanden downloaden.</p>

      <h2>Welke gegevens moet een elektronische factuur bevatten?</h2>
      <p>Een e-factuur moet de relevante gegevens bevatten die ook voor een gewone zakelijke factuur vereist zijn.</p>
      <p>Denk aan:</p>
      <ul>
        <li>Je bedrijfsnaam en adres.</li>
        <li>De naam en het adres van je klant.</li>
        <li>Je btw-identificatienummer en KvK-nummer wanneer vereist.</li>
        <li>Een uniek factuurnummer.</li>
        <li>De factuurdatum.</li>
        <li>De leverdatum of periode wanneer die moet worden vermeld.</li>
        <li>Een omschrijving van de geleverde producten of diensten.</li>
        <li>Aantallen en prijzen.</li>
        <li>De bedragen exclusief btw.</li>
        <li>De toegepaste btw-tarieven en btw-bedragen, of de toepasselijke btw-behandeling.</li>
        <li>Het totaalbedrag.</li>
      </ul>
      <p>Daarnaast kunnen de betaaltermijn, het IBAN, orderreferenties en andere gegevens relevant zijn.</p>
      <p>
        Bij gestructureerde e-facturatie kunnen aanvullende technische eisen gelden. Bijvoorbeeld wanneer je klant een specifieke standaard zoals EN 16931 of Peppol BIS Billing 3.0 gebruikt.
      </p>
      <p>Een UBL/XML-bestand is daarom niet automatisch geschikt voor ieder ontvangend systeem.</p>

      <h2>Wat zijn de voordelen van elektronisch factureren?</h2>
      <h3>Minder handmatig invoerwerk</h3>
      <p>
        Geschikte boekhoudsoftware kan factuurgegevens rechtstreeks uit een gestructureerd bestand lezen. Daardoor hoeven medewerkers minder gegevens over te typen.
      </p>
      <h3>Minder kans op fouten</h3>
      <p>Wanneer factuurgegevens automatisch worden overgenomen, kan dat het aantal handmatige invoerfouten verminderen.</p>
      <p>De gegevens op de oorspronkelijke factuur moeten natuurlijk wel kloppen.</p>
      <h3>Snellere verwerking bij klanten</h3>
      <p>Bedrijven die veel facturen ontvangen, kunnen gestructureerde e-facturen gebruiken om hun administratie efficiënter te verwerken.</p>
      <p>
        Dit betekent niet dat een elektronische factuur automatisch sneller wordt betaald. Dat blijft afhankelijk van de betaalafspraken en de werkwijze van je klant.
      </p>
      <h3>Geschikt voor digitale administratie</h3>
      <p>UBL/XML-bestanden kunnen worden gebruikt in administratieve systemen die het betreffende formaat ondersteunen.</p>
      <p>Dat maakt elektronische facturatie vooral interessant wanneer je regelmatig factureert aan organisaties met geautomatiseerde boekhoudprocessen.</p>

      <h2>Gratis e-factuur maken zonder account</h2>
      <p>Veel ondernemers willen gewoon een elektronische factuur maken zonder direct een uitgebreid boekhoudprogramma te gebruiken.</p>
      <p>Met FactuurBaas kun je een losse factuur maken en downloaden zonder registratie.</p>
      <p>Je vult je gegevens in, controleert de factuur en kiest het gewenste bestandsformaat.</p>
      <p>
        Wil je vaker factureren? Dan kun je optioneel een gratis account aanmaken om je klantgegevens en facturen te bewaren, eerdere facturen opnieuw te gebruiken en openstaande betalingen bij te houden.
      </p>
      <p>Voor het maken van een losse e-factuur is een account niet verplicht.</p>
      <CtaButton label="Gratis elektronisch factureren" />

      <h2>E-factuur maken als zzp&apos;er</h2>
      <p>Ook als zzp&apos;er kun je te maken krijgen met elektronische facturatie.</p>
      <p>Bijvoorbeeld wanneer je werkzaamheden uitvoert voor een grotere onderneming, een overheidsorganisatie of een klant die facturen automatisch verwerkt.</p>
      <p>Het is verstandig om vooraf te vragen hoe je klant de factuur wil ontvangen.</p>
      <p>Er zijn verschillende mogelijkheden:</p>
      <ul>
        <li>
          <strong>PDF per e-mail:</strong> geschikt wanneer je klant een gewone leesbare factuur accepteert.
        </li>
        <li>
          <strong>UBL/XML-bestand:</strong> geschikt wanneer je klant een gestructureerd bestand kan importeren en deze aanlevermethode accepteert.
        </li>
        <li>
          <strong>Peppol:</strong> nodig wanneer je klant facturen via dit netwerk wil ontvangen en de toepasselijke voorwaarden dit vereisen.
        </li>
      </ul>
      <p>Je hoeft dus niet automatisch Peppol te gebruiken zodra een klant om een elektronische factuur vraagt. Controleer eerst de precieze aanlevereisen.</p>

      <h2>Kun je een e-factuur via Peppol versturen?</h2>
      <p>
        Ja, elektronische facturen kunnen via Peppol worden uitgewisseld wanneer ze aan de vereiste specificaties voldoen en via geschikte aangesloten dienstverleners worden verzonden.
      </p>
      <p>Peppol is een netwerk voor het uitwisselen van gestructureerde zakelijke documenten.</p>
      <p>UBL is daarentegen een formaat waarin de factuurgegevens kunnen worden vastgelegd.</p>
      <p>
        <strong>Een UBL-factuur maken is dus niet hetzelfde als een factuur via Peppol versturen.</strong>
      </p>
      <p>Met FactuurBaas kun je momenteel een UBL/XML-bestand downloaden, maar niet rechtstreeks via Peppol verzenden.</p>
      <p>
        Als je klant Peppol vereist, heb je een geschikte Peppol-verzenddienst nodig. Deze moet kunnen controleren of je factuur voldoet aan het vereiste profiel en het document via het netwerk kunnen afleveren.
      </p>
      <p>
        Lees meer in <TextLink href="/blogs/wat-is-peppol">Wat is Peppol?</TextLink>.
      </p>

      <h2>Is elektronisch factureren verplicht in Nederland?</h2>
      <p>Niet iedere Nederlandse ondernemer is verplicht om voor iedere factuur een gestructureerde e-factuur te gebruiken.</p>
      <p>De regels hangen onder andere af van het type klant, de transactie en de toepasselijke wetgeving.</p>
      <h3>E-facturatie aan de overheid</h3>
      <p>Bij bepaalde opdrachten aan Nederlandse overheidsorganisaties gelden verplichtingen voor elektronische facturatie.</p>
      <p>De opdrachtgever kan specifieke eisen stellen aan het formaat en de manier waarop je de factuur moet aanleveren.</p>
      <h3>E-facturatie tussen bedrijven</h3>
      <p>Bij gewone binnenlandse zakelijke transacties geldt niet automatisch voor iedere factuur een algemene Peppol-verplichting.</p>
      <p>Een zakelijke klant kan wel contractueel een bepaalde elektronische aanlevermethode voorschrijven.</p>
      <h3>Europese ontwikkelingen</h3>
      <p>
        Binnen de Europese Unie zijn verdere regels voor elektronische facturatie en digitale btw-rapportage in ontwikkeling of vastgesteld, met verschillende toepassingsmomenten.
      </p>
      <p>Daarbij is een verplichting tot gestructureerde e-facturatie niet hetzelfde als een verplichting om specifiek Peppol te gebruiken.</p>
      <p>Controleer daarom de actuele regelgeving en de eisen van je opdrachtgever voordat je beslist welk formaat of verzendkanaal je nodig hebt.</p>

      <h2>Wanneer heb je een boekhoudprogramma nodig?</h2>
      <p>Voor het maken van een losse e-factuur heb je niet altijd een volledig boekhoudprogramma nodig.</p>
      <p>Met een gratis factuurmaker kun je een factuur opstellen en een UBL/XML-bestand downloaden.</p>
      <p>
        Een uitgebreider boekhoudprogramma kan wel handig worden wanneer je veel facturen verstuurt, inkomende facturen wilt verwerken, btw-aangiften voorbereidt of automatische koppelingen nodig hebt.
      </p>
      <p>Sommige boekhoudprogramma&apos;s bieden ook rechtstreekse Peppol-verzending en ontvangst aan.</p>
      <p>Welke oplossing geschikt is, hangt af van je administratie en de eisen van je klanten.</p>

      <h2>Veelgestelde vragen over e-facturen</h2>
      <h3>Kan ik gratis een e-factuur maken?</h3>
      <p>Ja. Met FactuurBaas kun je gratis een factuur opstellen en downloaden als UBL/XML-bestand. Je hebt hiervoor geen account of abonnement nodig.</p>
      <h3>Wat is een e-factuur?</h3>
      <p>Een e-factuur is een elektronische factuur met gestructureerde gegevens die geschikte software automatisch kan verwerken. UBL/XML is een veelgebruikt formaat.</p>
      <h3>Is een PDF ook een e-factuur?</h3>
      <p>Een PDF is een digitaal document, maar niet automatisch een gestructureerde e-factuur. Voor automatische verwerking volgens e-factuurstandaarden zijn gestructureerde gegevens nodig.</p>
      <h3>Hoe maak ik een elektronische factuur?</h3>
      <p>Vul je bedrijfsgegevens, klantgegevens, factuurregels en btw in bij een factuurmaker die een geschikt elektronisch formaat ondersteunt. Controleer de gegevens en download het bestand als UBL/XML.</p>
      <h3>Wat is het verschil tussen UBL en XML?</h3>
      <p>XML is een algemene techniek om gegevens gestructureerd vast te leggen. UBL is een specifieke standaard die XML gebruikt voor zakelijke documenten, waaronder facturen.</p>
      <h3>Heb ik een account nodig om een e-factuur te maken?</h3>
      <p>Nee. Bij FactuurBaas kun je zonder account een factuur maken en downloaden als UBL/XML of PDF.</p>
      <h3>Kan ik een e-factuur per e-mail versturen?</h3>
      <p>Je kunt een UBL/XML-bestand per e-mail versturen wanneer je klant deze methode accepteert. Als de klant specifiek Peppol-verzending vereist, is een e-mailbijlage niet voldoende.</p>
      <h3>Is een UBL-factuur automatisch geschikt voor Peppol?</h3>
      <p>Nee. Voor Peppol gelden specifieke eisen aan de structuur, inhoud en validatie van elektronische facturen. Niet ieder UBL-bestand voldoet daaraan.</p>
      <h3>Kan ik een bestaande PDF omzetten naar een e-factuur?</h3>
      <p>Dat kan met geschikte conversiesoftware. De factuurgegevens moeten uit de PDF worden gehaald en omgezet naar een gestructureerd formaat. Controleer daarna of alle gegevens correct en volledig zijn.</p>
      <p>FactuurBaas biedt momenteel UBL/XML-export vanuit de eigen factuurmaker, geen automatische conversie van een bestaande PDF.</p>
      <h3>Is e-facturatie verplicht voor zzp&apos;ers?</h3>
      <p>Dat hangt af van je opdrachtgever, de transactie en de toepasselijke regels. Niet iedere Nederlandse zzp&apos;er hoeft voor iedere factuur Peppol of UBL te gebruiken.</p>

      <h2>Maak nu gratis je e-factuur</h2>
      <p>Een elektronische factuur maken hoeft niet ingewikkeld te zijn.</p>
      <p>Met FactuurBaas vul je je factuurgegevens online in en download je direct een UBL/XML-bestand of PDF.</p>
      <CtaButton label="Maak gratis een e-factuur" />
      <p>Gratis, zonder account en zonder abonnement.</p>
      <p>
        <em>
          FactuurBaas ondersteunt momenteel UBL/XML-download, maar geen rechtstreekse Peppol-verzending. Controleer altijd of het bestand voldoet aan de eisen van je klant of ontvangende software.
        </em>
      </p>
    </>
  ),
};
