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

function ComparisonTable({ headers, rows }) {
  return (
    <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
      <table className="w-full min-w-[480px] text-sm text-slate-700 sm:text-base">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            {headers.map((header) => (
              <th key={header} className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="border-b border-slate-100 last:border-0">
              {row.map((cell) => (
                <td key={cell} className="px-4 py-3">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const xmlExample = `<cbc:ID>2026-001</cbc:ID>
<cbc:IssueDate>2026-11-01</cbc:IssueDate>
<cbc:DueDate>2026-11-15</cbc:DueDate>
<cbc:DocumentCurrencyCode>EUR</cbc:DocumentCurrencyCode>`;

export const xmlFactuurMakenArticle = {
  slug: 'xml-factuur-maken',
  relatedSlugs: ['e-factuur-maken', 'ubl-factuur-maken', 'wat-is-een-ubl-factuur', 'wat-is-peppol'],
  metaTitle: 'XML factuur maken: gratis downloaden als UBL',
  metaDescription:
    'Zelf een XML factuur maken? Ontdek hoe een XML-factuur werkt, wat UBL betekent en hoe je gratis een factuur als XML-bestand downloadt.',
  title: 'XML factuur maken: wat is het en hoe werkt het?',
  excerpt:
    'Wil je een XML factuur maken? Leer wat een XML-factuur is, hoe het bestand is opgebouwd en waarom UBL wordt gebruikt voor elektronische facturen. Inclusief voorbeeld en gratis XML-download.',
  keywords:
    'xml factuur maken, xml factuur, factuur xml, xml factuur voorbeeld, factuur als xml downloaden, xml factuur genereren, ubl xml',
  image: {
    url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/xml%20factuur%20maken%20wat%20is%20het.jpg',
    alt: 'XML factuur maken: een gestructureerd UBL-bestand downloaden.',
  },
  datePublished: '2026-11-01',
  dateModified: '2026-11-01',
  faq: [
    {
      question: 'Wat is een XML-factuur?',
      answer:
        'Een XML-factuur is een elektronisch bestand waarin factuurgegevens gestructureerd zijn opgeslagen. Geschikte software kan de gegevens herkennen en verwerken.',
    },
    {
      question: 'Kan ik gratis een XML-factuur maken?',
      answer:
        'Ja. Met FactuurBaas kun je gratis een factuur opstellen en downloaden als UBL/XML-bestand. Je hoeft geen account aan te maken.',
    },
    {
      question: 'Is XML hetzelfde als UBL?',
      answer:
        'Nee. XML is een algemene techniek voor gestructureerde gegevens. UBL is een standaard voor zakelijke documenten die XML gebruikt.',
    },
    {
      question: 'Hoe maak ik zelf een XML-factuur?',
      answer:
        'Gebruik een factuurprogramma dat UBL/XML-export ondersteunt. Vul de factuurgegevens in, controleer de bedragen en download het XML-bestand.',
    },
    {
      question: 'Welk programma opent een XML-factuur?',
      answer:
        'Je kunt het bestand openen met een teksteditor. Voor een overzichtelijke weergave of automatische verwerking heb je geschikte boekhoudsoftware of een UBL-viewer nodig.',
    },
    {
      question: 'Kan ik een XML-factuur per e-mail versturen?',
      answer:
        'Ja, wanneer je klant XML-bestanden per e-mail accepteert. Vraagt de klant om Peppol, dan heb je een geschikte verzenddienst nodig.',
    },
    {
      question: 'Is een XML-factuur verplicht?',
      answer:
        'Niet iedere ondernemer hoeft voor iedere factuur een XML-bestand te gebruiken. De verplichtingen hangen af van de toepasselijke regels en de eisen van de opdrachtgever.',
    },
    {
      question: 'Is een XML-factuur automatisch geschikt voor Peppol?',
      answer:
        'Nee. Voor Peppol gelden aanvullende specificaties en validatieregels. Niet ieder XML-bestand voldoet daaraan.',
    },
    {
      question: 'Kan ik een XML-factuur ook als PDF downloaden?',
      answer: 'Ja. Met FactuurBaas kun je dezelfde factuur downloaden als UBL/XML of PDF.',
    },
  ],
  content: (
    <>
      <p>
        Wil je een XML factuur maken? Met FactuurBaas kun je gratis een factuur opstellen en downloaden als <strong>UBL/XML-bestand</strong>. Je vult je bedrijfsgegevens, klantgegevens, factuurregels en btw in. Vervolgens wordt je factuur omgezet naar een gestructureerd XML-bestand dat geschikte boekhoudsoftware kan verwerken.
      </p>
      <p>Je hoeft hiervoor geen XML-code te schrijven, geen account aan te maken en geen boekhoudabonnement af te sluiten.</p>
      <p>
        In deze gids lees je wat een XML-factuur is, hoe het bestand werkt, welke gegevens erin staan en hoe je zelf gratis een XML-factuur maakt.
      </p>
      <CtaButton label="Maak gratis een XML-factuur" />
      <p>
        <em>Download als UBL/XML of PDF. Geen automatische Peppol-verzending.</em>
      </p>

      <h2>Wat is een XML-factuur?</h2>
      <p>Een XML-factuur is een elektronisch bestand waarin factuurgegevens op een gestructureerde manier zijn opgeslagen.</p>
      <p>
        XML staat voor <em>Extensible Markup Language</em>. Het is een techniek om informatie vast te leggen met herkenbare gegevensvelden.
      </p>
      <p>
        Bij een gewone PDF-factuur zie je bijvoorbeeld een factuurnummer, klantnaam en totaalbedrag op een pagina. Bij een XML-factuur staan deze gegevens in afzonderlijke onderdelen die software kan herkennen.
      </p>
      <p>Dat maakt XML geschikt voor het automatisch uitwisselen en verwerken van factuurgegevens.</p>
      <p>
        XML is echter een algemene techniek en geen specifieke factuurstandaard. Daarom gebruiken bedrijven vaak <strong>UBL (Universal Business Language)</strong>: een standaard die XML gebruikt om facturen en andere zakelijke documenten op een afgesproken manier op te bouwen.
      </p>
      <p>Niet ieder XML-bestand is dus automatisch een geldige UBL-factuur.</p>

      <h2>Gratis XML factuur maken in 5 stappen</h2>
      <p>Je hoeft geen programmeerkennis te hebben om een XML-factuur te maken.</p>
      <p>Met de factuurmaker van FactuurBaas kun je een factuur opstellen en als UBL/XML downloaden.</p>
      <h3>Stap 1. Open de gratis factuurmaker</h3>
      <p>
        Ga naar de <TextLink href="/create-invoice">online factuurmaker</TextLink> van FactuurBaas. Je kunt direct beginnen zonder registratie.
      </p>
      <h3>Stap 2. Vul je bedrijfs- en klantgegevens in</h3>
      <p>Voeg je bedrijfsnaam, adres en relevante identificatienummers toe.</p>
      <p>Vul vervolgens de naam en het adres van je klant in.</p>
      <p>Controleer of je klant aanvullende gegevens nodig heeft, zoals een ordernummer of specifieke elektronische identificatie.</p>
      <h3>Stap 3. Voeg de factuurregels toe</h3>
      <p>Vul de geleverde producten of diensten in, inclusief aantallen, prijzen en toepasselijke btw-tarieven.</p>
      <p>Controleer ook het factuurnummer, de factuurdatum, vervaldatum en betaalgegevens.</p>
      <h3>Stap 4. Controleer het factuurvoorbeeld</h3>
      <p>Bekijk of de gegevens en berekende bedragen kloppen.</p>
      <p>Een fout in de oorspronkelijke factuurgegevens kan ook in het XML-bestand terechtkomen.</p>
      <h3>Stap 5. Download je factuur als XML</h3>
      <p>
        Open het factuurvoorbeeld en kies <strong>Download UBL (XML)</strong>.
      </p>
      <p>FactuurBaas genereert vervolgens een XML-bestand met gestructureerde factuurgegevens.</p>
      <p>Wil je daarnaast een leesbare versie bewaren? Dan kun je dezelfde factuur ook downloaden als PDF.</p>
      <CtaButton label="Maak nu gratis een XML-factuur" />

      <h2>Hoe ziet een XML-factuur eruit?</h2>
      <p>Een XML-factuur ziet er anders uit dan een PDF. In plaats van een opgemaakte pagina bevat het bestand gestructureerde gegevens.</p>
      <p>Hieronder staat een vereenvoudigd voorbeeld van enkele factuurvelden in UBL XML:</p>
      <pre className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-relaxed text-slate-800">
        <code>{xmlExample}</code>
      </pre>
      <p>Deze gegevens betekenen:</p>
      <ul>
        <li><strong>ID:</strong> het factuurnummer 2026-001.</li>
        <li><strong>IssueDate:</strong> de factuurdatum 1 november 2026.</li>
        <li><strong>DueDate:</strong> de vervaldatum 15 november 2026.</li>
        <li><strong>DocumentCurrencyCode:</strong> de valuta euro.</li>
      </ul>
      <p>Een volledig UBL-bestand bevat daarnaast gegevens over de leverancier, klant, factuurregels, btw en totaalbedragen.</p>
      <p>Het voorbeeld hierboven is alleen een XML-fragment en geen complete, zelfstandig geldige UBL-factuur.</p>

      <h2>Welke gegevens staan in een XML-factuur?</h2>
      <p>Een XML-factuur bevat doorgaans dezelfde zakelijke informatie als een gewone factuur.</p>
      <ComparisonTable
        headers={['Gegeven', 'Voorbeeld']}
        rows={[
          ['Factuurnummer', '2026-001'],
          ['Factuurdatum', '1 november 2026'],
          ['Vervaldatum', '15 november 2026'],
          ['Leverancier', 'Jouw bedrijfsnaam'],
          ['Klant', 'Bedrijfsnaam opdrachtgever'],
          ['Omschrijving', 'Websiteonderhoud'],
          ['Aantal', '10 uur'],
          ['Prijs per eenheid', '€ 75,00'],
          ['Subtotaal', '€ 750,00'],
          ['Btw 21%', '€ 157,50'],
          ['Totaal', '€ 907,50'],
          ['Valuta', 'EUR'],
        ]}
      />
      <p>Naast deze gegevens kan een XML-factuur informatie bevatten over betaalvoorwaarden, identificatienummers, belastingcategorieën en referenties.</p>
      <p>Welke velden verplicht zijn, hangt af van de gebruikte factuurstandaard en de eisen van de ontvanger.</p>

      <h2>Wat is het verschil tussen XML en UBL?</h2>
      <p>XML en UBL zijn niet hetzelfde.</p>
      <p>
        <strong>XML is de techniek waarmee gegevens worden opgeslagen. UBL is een standaard die bepaalt hoe zakelijke documenten met XML worden opgebouwd.</strong>
      </p>
      <p>Je kunt het vergelijken met een taal en een vaste documentstructuur.</p>
      <p>
        XML biedt de mogelijkheid om gegevens in herkenbare onderdelen vast te leggen. UBL bepaalt welke onderdelen een zakelijke factuur kan bevatten en hoe deze samenhangen.
      </p>
      <ComparisonTable
        headers={['XML', 'UBL']}
        rows={[
          ['Algemene opmaaktaal voor gestructureerde gegevens', 'Standaard voor zakelijke documenten'],
          ['Wordt gebruikt voor veel soorten gegevens', 'Wordt onder andere gebruikt voor facturen'],
          ['Heeft geen universele factuurstructuur', 'Definieert een gestandaardiseerde factuurstructuur'],
          ['Niet ieder XML-bestand is een factuur', 'Een UBL-factuur wordt vastgelegd in XML'],
          ['Kan een zelfbedachte structuur gebruiken', 'Gebruikt de UBL-documentstructuur'],
        ]}
      />
      <p>Wanneer iemand vraagt om een XML-factuur, bedoelt diegene in de praktijk vaak een UBL/XML-factuur.</p>
      <p>Maar dat is niet altijd zo. Vraag daarom welk formaat en welke versie de ontvanger ondersteunt.</p>
      <p>
        Meer weten? Lees <TextLink href="/blogs/wat-is-een-ubl-factuur">Wat is een UBL-factuur?</TextLink>.
      </p>

      <h2>Wat is het verschil tussen een XML-factuur en een PDF?</h2>
      <p>Een XML-factuur en een PDF kunnen dezelfde factuurgegevens bevatten, maar worden op een andere manier gebruikt.</p>
      <ComparisonTable
        headers={['PDF-factuur', 'XML-factuur']}
        rows={[
          ['Bedoeld om te lezen en te printen', 'Bedoeld voor elektronische verwerking'],
          ['Heeft een visuele opmaak', 'Bevat gestructureerde gegevens'],
          ['Eenvoudig te openen met een PDF-lezer', 'Te verwerken met geschikte software'],
          ['Kan per e-mail worden verstuurd', 'Kan worden geïmporteerd of elektronisch uitgewisseld'],
          ['Gegevens moeten soms worden herkend of overgenomen', 'Gegevens staan in afzonderlijke velden'],
        ]}
      />
      <p>Een PDF is handig wanneer een klant een leesbare factuur wil ontvangen.</p>
      <p>Een XML-factuur is vooral handig wanneer een klant factuurgegevens automatisch wil verwerken.</p>
      <p>Je kunt beide formaten naast elkaar gebruiken. Met FactuurBaas kun je een factuur downloaden als PDF of UBL/XML.</p>

      <h2>Waarom gebruiken bedrijven XML-facturen?</h2>
      <h3>Minder handmatig invoerwerk</h3>
      <p>Geschikte boekhoudsoftware kan factuurgegevens rechtstreeks uit het XML-bestand lezen.</p>
      <p>Daardoor hoeft een medewerker minder gegevens handmatig over te nemen.</p>
      <h3>Minder kans op overtypfouten</h3>
      <p>Bij het handmatig invoeren van bedragen, factuurnummers en klantgegevens kunnen fouten ontstaan.</p>
      <p>Een gestructureerd XML-bestand maakt automatische gegevensovername mogelijk, waardoor dat risico kan afnemen.</p>
      <h3>Snellere verwerking</h3>
      <p>Bedrijven die veel facturen ontvangen, kunnen XML-facturen gebruiken om hun administratieve processen te automatiseren.</p>
      <p>De facturen kunnen bijvoorbeeld worden ingelezen, gecontroleerd en klaargezet voor verdere verwerking.</p>
      <h3>Uitwisseling tussen verschillende systemen</h3>
      <p>Wanneer systemen dezelfde standaard ondersteunen, kunnen ze factuurgegevens uitwisselen zonder dat beide bedrijven hetzelfde boekhoudprogramma gebruiken.</p>
      <p>Dat is een belangrijk voordeel van gestandaardiseerde formaten zoals UBL.</p>

      <h2>Wanneer heb je een XML-factuur nodig?</h2>
      <p>Je hebt niet voor iedere factuur een XML-bestand nodig.</p>
      <p>Een XML-factuur kan handig zijn wanneer:</p>
      <ul>
        <li>Je klant om een UBL- of XML-factuur vraagt.</li>
        <li>Je factureert aan een organisatie met geautomatiseerde factuurverwerking.</li>
        <li>Je boekhoudprogramma UBL/XML kan importeren.</li>
        <li>Je factuurgegevens gestructureerd wilt bewaren.</li>
        <li>Je een elektronisch factuurbestand moet aanleveren volgens de eisen van je opdrachtgever.</li>
      </ul>
      <p>
        <strong>Voorbeeld:</strong> je werkt als zzp&apos;er voor een groot bedrijf. De financiële afdeling vraagt om een UBL/XML-bestand omdat het boekhoudsysteem de gegevens automatisch kan inlezen.
      </p>
      <p>Je kunt dan een factuur opstellen en het XML-bestand aanleveren via de methode die je klant accepteert.</p>
      <p>Vraagt de klant alleen om een PDF per e-mail? Dan is een XML-bestand mogelijk niet nodig.</p>

      <h2>Kun je een XML-factuur openen?</h2>
      <p>Ja. Een XML-bestand kun je openen met een gewone teksteditor.</p>
      <p>Je ziet dan de technische structuur en de gegevensvelden.</p>
      <p>Wil je de factuur overzichtelijk bekijken, dan kun je geschikte boekhoudsoftware of een UBL/XML-viewer gebruiken.</p>
      <p>Let op: een XML-bestand kan technisch correct zijn zonder dat het voldoet aan de specifieke factuureisen van een ontvangend systeem.</p>
      <p>Het openen van het bestand zegt dus niet automatisch iets over de geldigheid of compatibiliteit ervan.</p>

      <h2>Kun je een PDF omzetten naar een XML-factuur?</h2>
      <p>Ja, dat is mogelijk met geschikte conversiesoftware.</p>
      <p>Bij een PDF-naar-XML-conversie moeten gegevens zoals de leverancier, klant, factuurregels, bedragen en btw eerst uit de PDF worden gehaald.</p>
      <p>Vervolgens worden deze gegevens omgezet naar een gestructureerd formaat.</p>
      <p>Dat kan fouten opleveren wanneer de PDF onduidelijk is of wanneer belangrijke gegevens ontbreken.</p>
      <p>Daarom is het verstandig om de geconverteerde factuur altijd te controleren.</p>
      <p>
        <strong>FactuurBaas biedt momenteel geen automatische conversie van bestaande PDF-bestanden naar XML.</strong> Je kunt wel rechtstreeks een nieuwe factuur maken en deze als UBL/XML downloaden.
      </p>

      <h2>XML factuur versturen: per e-mail of via Peppol?</h2>
      <p>Een XML-factuur maken en een XML-factuur versturen zijn twee verschillende stappen.</p>
      <p>Je kunt een XML-bestand als e-mailbijlage versturen wanneer je klant deze manier van aanleveren accepteert.</p>
      <p>
        Sommige organisaties vragen echter om elektronische facturen via <strong>Peppol</strong>.
      </p>
      <p>Peppol is een internationaal netwerk voor het uitwisselen van gestructureerde zakelijke documenten.</p>
      <p>Voor verzending via Peppol moet een factuur voldoen aan de toepasselijke specificaties en via een geschikte dienstverlener worden verstuurd.</p>
      <p>Een willekeurig XML- of UBL-bestand is niet automatisch geschikt voor Peppol.</p>
      <p>Met FactuurBaas kun je een UBL/XML-bestand downloaden. Het bestand wordt niet automatisch via Peppol verstuurd.</p>
      <p>
        Lees ook <TextLink href="/blogs/wat-is-peppol">Wat is Peppol en hoe werkt het?</TextLink>.
      </p>

      <h2>Veelgestelde vragen over XML-facturen</h2>
      <h3>Wat is een XML-factuur?</h3>
      <p>Een XML-factuur is een elektronisch bestand waarin factuurgegevens gestructureerd zijn opgeslagen. Geschikte software kan de gegevens herkennen en verwerken.</p>
      <h3>Kan ik gratis een XML-factuur maken?</h3>
      <p>Ja. Met FactuurBaas kun je gratis een factuur opstellen en downloaden als UBL/XML-bestand. Je hoeft geen account aan te maken.</p>
      <h3>Is XML hetzelfde als UBL?</h3>
      <p>Nee. XML is een algemene techniek voor gestructureerde gegevens. UBL is een standaard voor zakelijke documenten die XML gebruikt.</p>
      <h3>Hoe maak ik zelf een XML-factuur?</h3>
      <p>Gebruik een factuurprogramma dat UBL/XML-export ondersteunt. Vul de factuurgegevens in, controleer de bedragen en download het XML-bestand.</p>
      <h3>Welk programma opent een XML-factuur?</h3>
      <p>Je kunt het bestand openen met een teksteditor. Voor een overzichtelijke weergave of automatische verwerking heb je geschikte boekhoudsoftware of een UBL-viewer nodig.</p>
      <h3>Kan ik een XML-factuur per e-mail versturen?</h3>
      <p>Ja, wanneer je klant XML-bestanden per e-mail accepteert. Vraagt de klant om Peppol, dan heb je een geschikte verzenddienst nodig.</p>
      <h3>Is een XML-factuur verplicht?</h3>
      <p>Niet iedere ondernemer hoeft voor iedere factuur een XML-bestand te gebruiken. De verplichtingen hangen af van de toepasselijke regels en de eisen van de opdrachtgever.</p>
      <h3>Is een XML-factuur automatisch geschikt voor Peppol?</h3>
      <p>Nee. Voor Peppol gelden aanvullende specificaties en validatieregels. Niet ieder XML-bestand voldoet daaraan.</p>
      <h3>Kan ik een XML-factuur ook als PDF downloaden?</h3>
      <p>Ja. Met FactuurBaas kun je dezelfde factuur downloaden als UBL/XML of PDF.</p>

      <h2>Maak gratis een XML-factuur met FactuurBaas</h2>
      <p>Een XML-factuur maakt het mogelijk om factuurgegevens gestructureerd vast te leggen en elektronisch te verwerken.</p>
      <p>Met FactuurBaas hoef je geen XML-code te schrijven of een uitgebreid boekhoudprogramma te gebruiken.</p>
      <p>Vul je factuurgegevens online in, controleer het voorbeeld en download je factuur als UBL/XML of PDF.</p>
      <CtaButton label="Maak gratis een XML-factuur" />
      <p>
        <em>Gratis, zonder account en zonder abonnement. FactuurBaas ondersteunt UBL/XML-download, maar geen rechtstreekse Peppol-verzending.</em>
      </p>
    </>
  ),
};
