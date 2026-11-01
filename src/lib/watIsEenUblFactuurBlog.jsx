import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const TextLink = ({ href, children }) => (
  <Link href={href} className="text-warm-orange hover:underline">
    {children}
  </Link>
);

const CtaButton = ({ href, label }) => (
  <div className="my-8 text-center">
    <Button asChild className="rounded-lg bg-warm-orange px-6 py-3 text-lg font-bold text-white hover:bg-orange-600">
      <Link href={href}>{label}</Link>
    </Button>
  </div>
);

const xmlExample = `<cbc:ID>2026-001</cbc:ID>
<cbc:IssueDate>2026-11-01</cbc:IssueDate>
<cbc:DocumentCurrencyCode>EUR</cbc:DocumentCurrencyCode>`;

export const watIsEenUblFactuurArticle = {
  slug: 'wat-is-een-ubl-factuur',
  relatedSlugs: ['ubl-factuur-maken', 'wat-is-peppol', 'factureren-zonder-account', 'factuur-maken-zzp'],
  metaTitle: 'Wat is een UBL-factuur? Uitleg, voorbeeld & voordelen',
  metaDescription:
    'Wat is een UBL-factuur en hoe werkt het? Ontdek het verschil met PDF, bekijk wat een UBL XML-bestand bevat en maak gratis een UBL-factuur.',
  title: 'Wat is een UBL-factuur? Uitleg, voorbeeld en voordelen',
  excerpt:
    'Wat is een UBL-factuur? Ontdek hoe een UBL XML-bestand werkt, welke factuurgegevens erin staan en waarom bedrijven UBL gebruiken. Inclusief voorbeeld en gratis factuurmaker.',
  keywords:
    'wat is een ubl factuur, ubl factuur, ubl betekenis, ubl xml, ubl factuur voorbeeld, elektronische factuur, ubl factuur maken',
  image: {
    url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/wat%20is%20een%20ubl%20factuur.jpg',
    alt: 'Uitleg van een UBL-factuur: een gestructureerd XML-bestand naast een leesbare factuur.',
  },
  datePublished: '2026-11-01',
  dateModified: '2026-11-01',
  faq: [
    {
      question: 'Waar staat UBL voor?',
      answer:
        'UBL staat voor Universal Business Language. Het is een internationale standaard voor het vastleggen en uitwisselen van gestructureerde zakelijke documenten, waaronder facturen.',
    },
    {
      question: 'Wat is een UBL XML-bestand?',
      answer:
        'Een UBL XML-bestand is een document waarin factuurgegevens volgens de UBL-structuur zijn opgeslagen. Geschikte boekhoudsoftware kan de gegevens automatisch herkennen en verwerken.',
    },
    {
      question: 'Is UBL hetzelfde als XML?',
      answer:
        'Nee. XML is de algemene techniek om gestructureerde gegevens vast te leggen. UBL is een specifieke standaard die XML gebruikt voor zakelijke documenten. Niet ieder XML-bestand is dus een UBL-bestand.',
    },
    {
      question: 'Is een UBL-factuur verplicht?',
      answer:
        'Niet voor iedere factuur. Of je een gestructureerde elektronische factuur moet gebruiken, hangt af van de toepasselijke regels en de eisen van je opdrachtgever. Bij bepaalde overheidsopdrachten en zakelijke processen kunnen specifieke e-facturatieverplichtingen gelden.',
    },
    {
      question: 'Kan ik een UBL-factuur gratis maken?',
      answer:
        'Ja. Met FactuurBaas kun je gratis een factuur maken en downloaden als UBL/XML-bestand, zonder account of abonnement.',
    },
    {
      question: 'Hoe open ik een UBL-factuur?',
      answer:
        'Een UBL-bestand kun je als XML openen in een teksteditor. Wil je de factuur overzichtelijk bekijken, dan heb je een geschikte UBL-viewer of boekhoudprogramma nodig.',
    },
    {
      question: 'Kan ik een UBL-factuur per e-mail versturen?',
      answer:
        'Ja, je kunt een UBL-bestand als bijlage versturen als de ontvanger deze aanlevermethode accepteert. Dat is niet hetzelfde als een factuur verzenden via Peppol.',
    },
    {
      question: 'Kan ik een PDF omzetten naar UBL?',
      answer:
        'Dat kan met geschikte conversiesoftware. De gegevens uit de PDF moeten worden herkend, gestructureerd en gecontroleerd. Een PDF omzetten naar UBL is daarom niet altijd foutloos of volledig automatisch mogelijk.',
    },
    {
      question: 'Is een UBL-factuur hetzelfde als Peppol?',
      answer:
        'Nee. UBL is een bestandsformaat en Peppol is een netwerk voor elektronische documentuitwisseling. Een UBL-factuur kan onderdeel zijn van Peppol-facturatie, maar moet daarvoor aan de toepasselijke specificaties voldoen.',
    },
  ],
  content: (
    <>
      <p>
        Een UBL-factuur is een elektronische factuur die boekhoudsoftware automatisch kan uitlezen. In plaats van alleen een leesbare PDF bevat een UBL-factuur gestructureerde gegevens, zoals het factuurnummer, de klantgegevens, bedragen en btw. Hierdoor kunnen bedrijven facturen sneller verwerken en hoeven ze minder gegevens handmatig over te nemen.
      </p>
      <p>
        In dit artikel lees je wat UBL betekent, hoe een UBL-factuur werkt, wat het verschil is met een PDF en wanneer je een UBL-bestand nodig hebt.
      </p>
      <p>
        Wil je zelf een UBL-factuur maken? Met FactuurBaas kun je gratis een factuur opstellen en downloaden als XML-bestand, zonder account.
      </p>
      <CtaButton href="/ubl-factuur-maken" label="Maak gratis een UBL-factuur" />

      <h2>Wat betekent UBL?</h2>
      <p>
        UBL staat voor <strong>Universal Business Language</strong>. Het is een internationale standaard voor het elektronisch uitwisselen van zakelijke documenten, waaronder facturen, creditnota&apos;s en bestellingen.
      </p>
      <p>De standaard wordt ontwikkeld en onderhouden door OASIS, een internationale organisatie voor open standaarden.</p>
      <p>
        Een UBL-factuur gebruikt XML (<em>Extensible Markup Language</em>). Daarmee worden factuurgegevens opgeslagen in vaste, herkenbare onderdelen.
      </p>
      <p>
        Bijvoorbeeld: in een gewone PDF ziet iemand het factuurnummer bovenaan de pagina staan. In een UBL-bestand wordt dat nummer opgeslagen in een specifiek gegevensveld. Geschikte software weet daardoor welk gegeven het factuurnummer is.
      </p>
      <p>
        UBL zorgt er dus voor dat computers factuurgegevens kunnen herkennen zonder eerst de visuele opmaak van een document te moeten interpreteren.
      </p>

      <h2>Hoe werkt een UBL-factuur?</h2>
      <p>
        Stel: je bent zzp&apos;er en hebt een opdracht uitgevoerd voor een zakelijke klant. Je maakt een factuur van € 1.000 exclusief 21% btw.
      </p>
      <p>
        Bij een gewone PDF-factuur ziet de klant de bedragen en bedrijfsgegevens op een document. Om die gegevens in een boekhoudprogramma te verwerken, moet de klant ze mogelijk overtypen of laten herkennen door software.
      </p>
      <p>Bij een UBL-factuur staan dezelfde gegevens gestructureerd in een XML-bestand.</p>
      <p>De verwerking kan er dan zo uitzien:</p>
      <ol>
        <li>Je maakt een factuur met je bedrijfsgegevens, klantgegevens en factuurregels.</li>
        <li>Je downloadt de factuur als UBL/XML-bestand.</li>
        <li>Je levert het bestand aan via een methode die je klant ondersteunt.</li>
        <li>De boekhoudsoftware van je klant leest de gestructureerde gegevens uit.</li>
        <li>De klant controleert en verwerkt de factuur in de administratie.</li>
      </ol>
      <p>Wanneer de systemen goed op elkaar aansluiten, kan een groot deel van dit proces automatisch verlopen.</p>
      <p>
        Een UBL-factuur betekent overigens niet dat de betaling automatisch wordt uitgevoerd. Het bestand bevat factuurgegevens; het betaalproces blijft daarvan gescheiden.
      </p>

      <h2>Hoe ziet een UBL-factuur eruit?</h2>
      <p>
        Een UBL-factuur ziet er anders uit dan een PDF. Je krijgt meestal een bestand met de extensie <code>.xml</code>.
      </p>
      <p>Open je dat bestand in een teksteditor, dan zie je XML-code met gegevensvelden.</p>
      <p>Een vereenvoudigd voorbeeld van enkele velden:</p>
      <pre className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-relaxed text-slate-800">
        <code>{xmlExample}</code>
      </pre>
      <p>Hierin staat:</p>
      <ul>
        <li><strong>ID:</strong> het factuurnummer 2026-001.</li>
        <li><strong>IssueDate:</strong> de factuurdatum 1 november 2026.</li>
        <li><strong>DocumentCurrencyCode:</strong> de valuta EUR.</li>
      </ul>
      <p>
        Een volledig UBL-bestand bevat veel meer informatie, zoals de leverancier, de klant, de factuurregels, btw-specificaties en totaalbedragen. Het bovenstaande is alleen een illustratief fragment, geen complete UBL-factuur.
      </p>
      <p>Je hoeft deze XML-code niet zelf te schrijven. Een factuurprogramma kan de gegevens omzetten naar het juiste bestandsformaat.</p>

      <h2>Wat staat er in een UBL-factuur?</h2>
      <p>Een UBL-factuur kan onder andere de volgende informatie bevatten:</p>
      <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
        <table className="w-full min-w-[420px] text-sm text-slate-700 sm:text-base">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Onderdeel</th>
              <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Voorbeeld</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Factuurnummer', '2026-001'],
              ['Factuurdatum', '1 november 2026'],
              ['Vervaldatum', '15 november 2026'],
              ['Leverancier', 'Jouw bedrijfsnaam en adres'],
              ['Klant', 'Bedrijfsnaam en adres'],
              ['Omschrijving', 'Websiteonderhoud'],
              ['Bedrag exclusief btw', '€ 1.000,00'],
              ['Btw (21%)', '€ 210,00'],
              ['Totaal inclusief btw', '€ 1.210,00'],
              ['Betaalgegevens', 'IBAN en betalingskenmerk'],
            ].map(([label, value]) => (
              <tr key={label} className="border-b border-slate-100 last:border-0">
                <td className="px-4 py-3 font-medium text-deep-blue">{label}</td>
                <td className="px-4 py-3">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>Daarnaast kunnen identificatienummers, orderreferenties, belastingcategorieën en andere gegevens nodig zijn.</p>
      <p>
        Welke velden verplicht zijn, hangt af van de toepasselijke factuurregels en het elektronische factuurprofiel dat de ontvanger gebruikt.
      </p>

      <h2>Wat is het verschil tussen een UBL-factuur en een PDF?</h2>
      <p>
        Het belangrijkste verschil is dat een PDF bedoeld is om een factuur te lezen, terwijl UBL bedoeld is om factuurgegevens gestructureerd uit te wisselen.
      </p>
      <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
        <table className="w-full min-w-[480px] text-sm text-slate-700 sm:text-base">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">PDF-factuur</th>
              <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">UBL-factuur</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Leesbaar document met een vaste opmaak', 'Gestructureerd XML-bestand'],
              ['Gemakkelijk te openen en printen', 'Bedoeld voor verwerking door software'],
              ['Kan per e-mail worden verstuurd', 'Kan via ondersteunde systemen worden uitgewisseld'],
              ['Gegevensherkenning kan extra stappen vragen', 'Gegevens staan in herkenbare velden'],
              ['Geschikt voor visuele controle', 'Geschikt voor geautomatiseerde verwerking'],
            ].map(([pdf, ubl]) => (
              <tr key={pdf} className="border-b border-slate-100 last:border-0">
                <td className="px-4 py-3">{pdf}</td>
                <td className="px-4 py-3">{ubl}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>Een PDF kan digitaal zijn gemaakt en toch geen gestructureerde elektronische factuur zijn.</p>
      <p>Omgekeerd kan een UBL-bestand alle relevante factuurgegevens bevatten zonder een mooie visuele factuuropmaak.</p>
      <p>
        Sommige bedrijven gebruiken daarom beide formaten: een PDF om de factuur eenvoudig te bekijken en een UBL-bestand om de gegevens automatisch te verwerken.
      </p>
      <p>
        Met FactuurBaas kun je dezelfde factuur downloaden als PDF of UBL/XML in de{' '}
        <TextLink href="/create-invoice">gratis factuurmaker</TextLink>.
      </p>

      <h2>Wat zijn de voordelen van een UBL-factuur?</h2>
      <h3>1. Minder handmatig invoerwerk</h3>
      <p>Boekhoudsoftware kan gegevens zoals factuurnummers, bedragen en btw rechtstreeks uit het bestand halen.</p>
      <p>Hierdoor hoeft de ontvanger minder informatie handmatig over te nemen.</p>
      <h3>2. Minder kans op overtypfouten</h3>
      <p>Bij handmatige invoer kunnen fouten ontstaan in bedragen, factuurnummers of klantgegevens.</p>
      <p>
        Een goed opgebouwd UBL-bestand maakt het mogelijk om deze gegevens rechtstreeks over te nemen. De oorspronkelijke factuurgegevens moeten natuurlijk nog steeds correct zijn.
      </p>
      <h3>3. Snellere factuurverwerking</h3>
      <p>
        Wanneer een boekhoudprogramma het bestand ondersteunt, kan de factuur sneller worden ingelezen en klaargezet voor controle of verwerking.
      </p>
      <p>Dat is vooral handig voor bedrijven die veel inkoopfacturen ontvangen.</p>
      <h3>4. Geschikt voor geautomatiseerde administratie</h3>
      <p>UBL maakt het gemakkelijker om facturen te koppelen aan digitale administratieve processen.</p>
      <p>Denk aan het herkennen van leveranciers, controleren van bedragen en verwerken van facturen in een boekhoudsysteem.</p>
      <h3>5. Een gestandaardiseerd formaat</h3>
      <p>UBL is een open standaard. Daardoor hoeven bedrijven niet voor iedere leverancier een volledig eigen bestandsformaat te gebruiken.</p>
      <p>
        Dat betekent niet dat ieder UBL-bestand automatisch door ieder boekhoudprogramma wordt geaccepteerd. Verschillende systemen kunnen specifieke versies of aanvullende eisen hanteren.
      </p>

      <h2>Wanneer heb je een UBL-factuur nodig?</h2>
      <p>Niet iedere ondernemer heeft voor iedere factuur een UBL-bestand nodig.</p>
      <p>Een UBL-factuur kan handig of noodzakelijk zijn wanneer:</p>
      <ul>
        <li>Een zakelijke klant vraagt om een gestructureerde elektronische factuur.</li>
        <li>Je factureert aan een organisatie die facturen automatisch verwerkt.</li>
        <li>Je boekhoudsoftware UBL-bestanden kan importeren.</li>
        <li>Je opdrachtgever een specifiek elektronisch factuurformaat voorschrijft.</li>
        <li>Je facturen wilt aanleveren voor een geautomatiseerd administratief proces.</li>
      </ul>
      <p>
        <strong>Voorbeeld:</strong> een zzp&apos;er levert diensten aan een groot bedrijf. Dat bedrijf ontvangt dagelijks honderden facturen en vraagt leveranciers om een UBL-bestand aan te leveren. De factuurgegevens kunnen dan direct door het administratieve systeem worden herkend.
      </p>
      <p>Voor een kleine opdrachtgever die alleen een leesbare factuur per e-mail wil ontvangen, kan een gewone PDF voldoende zijn.</p>
      <p>Vraag daarom bij twijfel welk factuurformaat en welke aanlevermethode je klant accepteert.</p>

      <h2>Is een UBL-factuur hetzelfde als een e-factuur?</h2>
      <p>Een UBL-factuur is een vorm van een gestructureerde elektronische factuur, ook wel e-factuur genoemd.</p>
      <p>Maar niet iedere digitaal verstuurde factuur is automatisch een gestructureerde e-factuur.</p>
      <p>
        Een PDF die je per e-mail verstuurt, is digitaal verzonden. Toch bevat zo&apos;n PDF niet noodzakelijk de gestructureerde gegevens die nodig zijn voor automatische elektronische factuurverwerking.
      </p>
      <p>
        Bij e-facturatie volgens een standaard zoals EN 16931 moeten de factuurgegevens aan specifieke inhoudelijke en technische eisen voldoen.
      </p>
      <p>UBL is een van de XML-formaten die daarvoor gebruikt kunnen worden.</p>

      <h2>Wat is het verschil tussen UBL en Peppol?</h2>
      <p>UBL en Peppol worden vaak samen genoemd, maar betekenen iets anders.</p>
      <p>
        <strong>UBL is het bestandsformaat. Peppol is een netwerk voor het uitwisselen van elektronische zakelijke documenten.</strong>
      </p>
      <p>Je kunt het zo vergelijken:</p>
      <ul>
        <li>UBL bepaalt hoe de factuurgegevens in het bestand zijn gestructureerd.</li>
        <li>Peppol maakt het mogelijk om geschikte elektronische facturen via aangesloten dienstverleners uit te wisselen.</li>
      </ul>
      <p>
        Voor facturen via Peppol wordt onder andere gebruikgemaakt van de specificatie Peppol BIS Billing 3.0, die aanvullende eisen stelt aan de factuurgegevens.
      </p>
      <p>Een willekeurig UBL-bestand is daarom niet automatisch geschikt voor Peppol.</p>
      <p>Ook betekent het downloaden van een UBL-bestand niet dat de factuur via Peppol is verstuurd.</p>
      <p>
        Met FactuurBaas kun je een UBL/XML-bestand downloaden. FactuurBaas verstuurt dit bestand momenteel niet rechtstreeks via het Peppol-netwerk.
      </p>

      <h2>Zelf gratis een UBL-factuur maken</h2>
      <p>Wil je een UBL-factuur maken zonder een uitgebreid boekhoudprogramma aan te schaffen?</p>
      <p>Met FactuurBaas kun je gratis een factuur opstellen en als UBL/XML-bestand downloaden.</p>
      <p>Dat werkt als volgt:</p>
      <ol>
        <li>
          Open de <TextLink href="/create-invoice">gratis factuurmaker</TextLink>.
        </li>
        <li>Vul je bedrijfsgegevens en klantgegevens in.</li>
        <li>Voeg de producten of diensten toe die je factureert.</li>
        <li>Controleer de bedragen, btw en betaalgegevens.</li>
        <li>Open het factuurvoorbeeld.</li>
        <li>
          Kies <strong>Download UBL (XML)</strong> om het XML-bestand te downloaden.
        </li>
      </ol>
      <p>Je kunt dezelfde factuur ook als PDF downloaden.</p>
      <p>Een account is niet verplicht. Wil je je facturen en klanten bewaren, dan kun je optioneel een gratis account aanmaken.</p>
      <CtaButton href="/ubl-factuur-maken" label="Maak gratis een UBL-factuur" />
      <p>
        <em>
          Let op: controleer vooraf of je klant of boekhoudsoftware het gegenereerde UBL-formaat accepteert. Een UBL-download is geen garantie voor compatibiliteit met iedere elektronische factuurstandaard.
        </em>
      </p>

      <h2>Veelgestelde vragen over UBL-facturen</h2>
      <h3>Waar staat UBL voor?</h3>
      <p>
        UBL staat voor Universal Business Language. Het is een internationale standaard voor het vastleggen en uitwisselen van gestructureerde zakelijke documenten, waaronder facturen.
      </p>
      <h3>Wat is een UBL XML-bestand?</h3>
      <p>
        Een UBL XML-bestand is een document waarin factuurgegevens volgens de UBL-structuur zijn opgeslagen. Geschikte boekhoudsoftware kan de gegevens automatisch herkennen en verwerken.
      </p>
      <h3>Is UBL hetzelfde als XML?</h3>
      <p>
        Nee. XML is de algemene techniek om gestructureerde gegevens vast te leggen. UBL is een specifieke standaard die XML gebruikt voor zakelijke documenten. Niet ieder XML-bestand is dus een UBL-bestand.
      </p>
      <h3>Is een UBL-factuur verplicht?</h3>
      <p>
        Niet voor iedere factuur. Of je een gestructureerde elektronische factuur moet gebruiken, hangt af van de toepasselijke regels en de eisen van je opdrachtgever. Bij bepaalde overheidsopdrachten en zakelijke processen kunnen specifieke e-facturatieverplichtingen gelden.
      </p>
      <h3>Kan ik een UBL-factuur gratis maken?</h3>
      <p>Ja. Met FactuurBaas kun je gratis een factuur maken en downloaden als UBL/XML-bestand, zonder account of abonnement.</p>
      <h3>Hoe open ik een UBL-factuur?</h3>
      <p>
        Een UBL-bestand kun je als XML openen in een teksteditor. Wil je de factuur overzichtelijk bekijken, dan heb je een geschikte UBL-viewer of boekhoudprogramma nodig.
      </p>
      <h3>Kan ik een UBL-factuur per e-mail versturen?</h3>
      <p>
        Ja, je kunt een UBL-bestand als bijlage versturen als de ontvanger deze aanlevermethode accepteert. Dat is niet hetzelfde als een factuur verzenden via Peppol.
      </p>
      <h3>Kan ik een PDF omzetten naar UBL?</h3>
      <p>
        Dat kan met geschikte conversiesoftware. De gegevens uit de PDF moeten worden herkend, gestructureerd en gecontroleerd. Een PDF omzetten naar UBL is daarom niet altijd foutloos of volledig automatisch mogelijk.
      </p>
      <h3>Is een UBL-factuur hetzelfde als Peppol?</h3>
      <p>
        Nee. UBL is een bestandsformaat en Peppol is een netwerk voor elektronische documentuitwisseling. Een UBL-factuur kan onderdeel zijn van Peppol-facturatie, maar moet daarvoor aan de toepasselijke specificaties voldoen.
      </p>

      <h2>Gratis een UBL-factuur maken met FactuurBaas</h2>
      <p>
        Een UBL-factuur helpt bedrijven om factuurgegevens elektronisch te verwerken. Vooral wanneer je klant gestructureerde facturen accepteert, kan dit tijd besparen en handmatig werk verminderen.
      </p>
      <p>Met FactuurBaas hoef je geen uitgebreid boekhoudprogramma te gebruiken om een UBL-bestand te maken.</p>
      <p>
        <strong>Maak gratis een factuur en download deze als PDF of UBL/XML.</strong>
      </p>
      <CtaButton href="/ubl-factuur-maken" label="Maak nu je gratis UBL-factuur" />
      <p>
        <em>Gratis, zonder account en zonder abonnement.</em>
      </p>
    </>
  ),
};
