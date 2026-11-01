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
          {rows.map((row, index) => (
            <tr key={`${row[0]}-${index}`} className="border-b border-slate-100 last:border-0">
              {row.map((cell, cellIndex) => (
                <td key={`${index}-${cellIndex}`} className="px-4 py-3">
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

export const eFacturatieVerplichtArticle = {
  slug: 'e-facturatie-verplicht',
  relatedSlugs: ['ubl-factuur-maken', 'e-factuur-maken', 'wat-is-peppol', 'wat-is-een-ubl-factuur'],
  metaTitle: 'E-facturatie verplicht in Nederland? Regels 2026–2030',
  metaDescription:
    "Is e-facturatie verplicht in Nederland? Lees de regels voor zzp'ers, B2B, overheid en EU vanaf 2030. Inclusief UBL en Peppol.",
  title: 'Is e-facturatie verplicht in Nederland? Regels en deadlines',
  excerpt:
    "Is e-facturatie verplicht in Nederland? Lees de regels voor zzp'ers, B2B, overheid en EU vanaf 2030. Inclusief UBL en Peppol.",
  keywords:
    'e facturatie verplicht, e facturatie verplicht 2026, e facturatie 2030, elektronisch factureren verplicht, peppol verplicht nederland, e facturatie zzp, e facturatie overheid',
  image: {
    url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/is%20e%20facturering%20verplicht%20in%20nederland.jpg',
    alt: 'Is e-facturatie verplicht in Nederland? Regels voor ondernemers tot 2030.',
  },
  datePublished: '2026-11-01',
  dateModified: '2026-11-01',
  faq: [
    {
      question: 'Is e-facturatie verplicht in Nederland in 2026?',
      answer:
        'Nee, niet algemeen voor alle zakelijke transacties. Bij facturatie aan de Rijksoverheid gelden al wel e-facturatieverplichtingen. Ook andere opdrachtgevers kunnen elektronische facturen voorschrijven.',
    },
    {
      question: 'Vanaf wanneer wordt e-facturatie verplicht?',
      answer:
        'Vanaf 1 juli 2030 gelden nieuwe Europese regels voor relevante grensoverschrijdende B2B-transacties. Het Nederlandse kabinet wil vanaf dezelfde datum e-facturatie verplicht stellen voor binnenlandse B2B-transacties, maar de nationale wetgeving is nog niet definitief.',
    },
    {
      question: "Is e-facturatie verplicht voor zzp'ers?",
      answer:
        'Dat hangt af van de transactie en de opdrachtgever. De toekomstige regels kunnen ook voor zzp\u2019ers relevant zijn. Voor bepaalde situaties worden uitzonderingen onderzocht of voorgesteld.',
    },
    {
      question: 'Is Peppol verplicht vanaf 2030?',
      answer:
        'Er is geen algemene Europese regel die voorschrijft dat iedere ondernemer vanaf 2030 uitsluitend Peppol moet gebruiken. De regels richten zich op gestructureerde e-facturatie en digitale rapportage.',
    },
    {
      question: 'Mag ik in 2026 nog een PDF-factuur sturen?',
      answer:
        'Ja, bij veel gewone zakelijke transacties kan dat nog, mits aan de toepasselijke regels en afspraken wordt voldaan. Bij facturatie aan de Rijksoverheid of een opdrachtgever die gestructureerde e-facturen vereist, is een gewone PDF niet voldoende.',
    },
    {
      question: 'Wordt e-facturatie verplicht voor de KOR?',
      answer:
        'Het Nederlandse kabinet wil KOR-deelnemers uitzonderen van bepaalde toekomstige binnenlandse e-facturatie- en rapportageverplichtingen. De precieze uitzondering moet nog wettelijk worden uitgewerkt.',
    },
    {
      question: 'Is een UBL-factuur hetzelfde als een Peppol-factuur?',
      answer:
        'Nee. UBL is een standaard voor de structuur van elektronische facturen. Peppol is een netwerk voor documentuitwisseling. Een UBL-bestand is niet automatisch geschikt voor Peppol.',
    },
    {
      question: 'Kan ik gratis een UBL-factuur maken?',
      answer:
        'Ja. Met FactuurBaas kun je gratis een factuur opstellen en downloaden als UBL/XML-bestand, zonder account.',
    },
    {
      question: 'Heb ik vanaf 2030 een betaald boekhoudprogramma nodig?',
      answer:
        'Niet noodzakelijk. De toekomstige regels schrijven niet automatisch voor dat je een volledig boekhoudprogramma moet aanschaffen. Wel heb je een oplossing nodig waarmee je aan de toepasselijke eisen voor elektronische facturatie en eventuele rapportage kunt voldoen.',
    },
  ],
  content: (
    <>
      <p>
        <strong>Is e-facturatie verplicht in Nederland?</strong> In 2026 nog niet voor alle ondernemers. Lever je goederen of diensten aan de Rijksoverheid, dan moet je in beginsel een gestructureerde elektronische factuur versturen. Voor gewone facturen tussen Nederlandse bedrijven bestaat momenteel nog geen algemene wettelijke e-facturatieplicht.
      </p>
      <p>
        Dat gaat waarschijnlijk veranderen. Het kabinet heeft op 11 september 2026 aangekondigd dat het <strong>e-facturatie vanaf 1 juli 2030 verplicht wil stellen voor zowel binnenlandse als grensoverschrijdende zakelijke transacties</strong>. Voor grensoverschrijdende B2B-transacties binnen de EU zijn nieuwe Europese regels al vastgesteld. De Nederlandse uitwerking voor binnenlandse transacties is nog niet definitief.
      </p>
      <p>
        Wat betekent dit voor zzp&apos;ers en mkb-bedrijven? Wanneer mag je nog een PDF-factuur versturen en wanneer heb je UBL of Peppol nodig?
      </p>
      <p>In dit artikel leggen we de huidige regels en de geplande veranderingen uit.</p>
      <p>
        <em>Bijgewerkt: 1 november 2026</em>
      </p>

      <h2>Wanneer is e-facturatie verplicht?</h2>
      <p>Of je verplicht elektronisch moet factureren, hangt af van je opdrachtgever en het soort transactie.</p>
      <ComparisonTable
        headers={['Situatie', 'E-facturatie verplicht?']}
        rows={[
          ['Factuur aan een Nederlands bedrijf in 2026', 'Nee, niet algemeen wettelijk verplicht'],
          ['Factuur aan de Rijksoverheid', 'Ja, in beginsel'],
          ['Factuur aan een gemeente of provincie', 'Afhankelijk van de inkoopvoorwaarden'],
          ['Factuur aan een particulier', 'Niet algemeen verplicht'],
          ['Grensoverschrijdende B2B-transactie binnen de EU vanaf 1 juli 2030', 'Ja, voor transacties die onder de nieuwe EU-regels vallen'],
          ['Binnenlandse Nederlandse B2B-transactie vanaf 1 juli 2030', 'Door het kabinet voorgesteld, nog niet definitief'],
        ]}
      />
      <p>Een opdrachtgever kan ook nu al verlangen dat je een factuur elektronisch aanlevert, bijvoorbeeld via een specifiek netwerk of boekhoudsysteem.</p>
      <p>Dat is iets anders dan een algemene wettelijke verplichting voor alle ondernemers.</p>

      <h2>Wat is verplichte e-facturatie?</h2>
      <p>Bij e-facturatie worden factuurgegevens in een gestructureerd elektronisch formaat uitgewisseld.</p>
      <p>Dat betekent dat gegevens zoals het factuurnummer, de leverancier, klant, bedragen en btw op herkenbare plaatsen in het bestand staan.</p>
      <p>Geschikte boekhoudsoftware kan deze gegevens daardoor automatisch verwerken.</p>
      <p>
        Een veelgebruikt formaat is <strong>UBL (Universal Business Language)</strong>, waarbij factuurgegevens in XML worden vastgelegd.
      </p>
      <p>Een gewone PDF-factuur is niet hetzelfde als een gestructureerde e-factuur.</p>
      <p>Een PDF die je per e-mail verstuurt, is digitaal, maar bevat niet noodzakelijk de gestructureerde gegevens die voor elektronische factuurverwerking vereist zijn.</p>

      <h3>PDF of e-factuur: wat is toegestaan?</h3>
      <p>In 2026 kun je bij veel gewone zakelijke transacties nog een PDF-factuur gebruiken, mits aan de toepasselijke factuurregels en voorwaarden is voldaan.</p>
      <p>Wanneer een opdrachtgever een gestructureerde e-factuur vereist, is alleen een PDF meestal niet voldoende.</p>
      <p>Je moet dan controleren welk elektronisch formaat en welke verzendmethode worden geaccepteerd.</p>

      <h2>Is e-facturatie verplicht voor zzp&apos;ers?</h2>
      <p>Niet iedere zzp&apos;er is in 2026 verplicht om alle facturen elektronisch te versturen.</p>
      <p>Werk je bijvoorbeeld als schilder, webdesigner, consultant of fotograaf voor Nederlandse zakelijke klanten, dan kun je doorgaans nog een gewone PDF-factuur versturen als de klant die accepteert.</p>
      <p>Er zijn wel uitzonderingen.</p>
      <p>Werk je voor de Rijksoverheid of een opdrachtgever die e-facturatie voorschrijft? Dan kunnen specifieke eisen gelden.</p>
      <p>Ook de toekomstige Europese en Nederlandse regels zijn relevant voor zzp&apos;ers die aan andere ondernemers factureren.</p>
      <p>
        <strong>De rechtsvorm is daarbij niet automatisch doorslaggevend.</strong> De aard van de transactie, de btw-regels en eventuele uitzonderingen bepalen welke verplichtingen gelden.
      </p>

      <h2>E-facturatie aan de Rijksoverheid is al verplicht</h2>
      <p>Voor leveranciers van de Rijksoverheid geldt al sinds 2017 een verplichting tot elektronisch factureren bij nieuwe overeenkomsten.</p>
      <p>Een gewone PDF per e-mail voldoet daarvoor niet.</p>
      <p>De Rijksoverheid biedt verschillende manieren om een elektronische factuur aan te leveren, waaronder ondersteunde boekhoudsoftware en het Leveranciersportaal.</p>
      <p>Welke route je kunt gebruiken, hangt af van de situatie en de eisen van de betreffende overheidsorganisatie.</p>

      <h3>Hoe zit het met gemeenten en provincies?</h3>
      <p>Ook gemeenten, provincies en waterschappen kunnen elektronische facturatie voorschrijven.</p>
      <p>Dat betekent niet dat iedere decentrale overheid precies dezelfde voorwaarden hanteert.</p>
      <p>Controleer daarom de factuurinstructies of inkoopvoorwaarden van je opdrachtgever voordat je een factuur verstuurt.</p>

      <h2>Wordt e-facturatie verplicht vanaf 2030?</h2>
      <p>
        <strong>Ja, er komen nieuwe Europese verplichtingen vanaf 1 juli 2030. Daarnaast wil het Nederlandse kabinet e-facturatie vanaf die datum verplicht stellen voor binnenlandse zakelijke transacties.</strong>
      </p>
      <p>Het is belangrijk om die twee ontwikkelingen uit elkaar te houden.</p>

      <h3>Europese verplichting vanaf 1 juli 2030</h3>
      <p>
        De Europese Unie heeft in maart 2025 het pakket <em>VAT in the Digital Age</em> (ViDA) aangenomen.
      </p>
      <p>Dit pakket moderniseert de btw-regels binnen de EU.</p>
      <p>Vanaf 1 juli 2030 worden voor relevante grensoverschrijdende B2B-transacties binnen de EU nieuwe verplichtingen ingevoerd voor gestructureerde elektronische facturatie en digitale rapportage.</p>
      <p>Het doel is om btw-informatie sneller en gestandaardiseerd beschikbaar te maken en grensoverschrijdende administratie te vereenvoudigen.</p>

      <h3>Nederlandse plannen voor binnenlandse facturen</h3>
      <p>Op 11 september 2026 heeft het Nederlandse kabinet bekendgemaakt dat het de verplichting wil uitbreiden naar binnenlandse zakelijke transacties.</p>
      <p>Het kabinet streeft naar:</p>
      <ul>
        <li>
          <strong>1 juli 2030:</strong> verplichte e-facturatie voor binnenlandse B2B-transacties.
        </li>
        <li>
          <strong>1 juli 2030:</strong> Europese e-facturatie en digitale rapportage voor relevante grensoverschrijdende B2B-transacties.
        </li>
        <li>
          <strong>1 juli 2031:</strong> digitale rapportage voor binnenlandse zakelijke transacties.
        </li>
      </ul>
      <p>Het nationale wetsvoorstel moet nog worden uitgewerkt. De regering verwachtte bij de aankondiging het wetsvoorstel vóór de zomer van 2027 in te dienen.</p>
      <p>De binnenlandse verplichting en de precieze uitzonderingen zijn daarom nog niet definitief.</p>

      <h2>Tijdlijn: e-facturatie in Nederland</h2>
      <ComparisonTable
        headers={['Jaar', 'Ontwikkeling']}
        rows={[
          ['2017', 'E-facturatie verplicht bij nieuwe overeenkomsten met de Rijksoverheid'],
          ['2025', 'EU neemt het ViDA-pakket aan'],
          ['2026', 'Kabinet kondigt plannen aan voor binnenlandse B2B-e-facturatie'],
          ['2027', 'Verwachte indiening van het Nederlandse wetsvoorstel'],
          ['1 juli 2030', 'Nieuwe EU-verplichtingen voor relevante grensoverschrijdende B2B-transacties'],
          ['1 juli 2030', 'Beoogde invoering binnenlandse B2B-e-facturatie in Nederland'],
          ['1 juli 2031', 'Beoogde invoering binnenlandse digitale rapportage'],
        ]}
      />
      <p>De data voor de Nederlandse binnenlandse verplichtingen zijn beleidsvoornemens en kunnen nog veranderen.</p>

      <h2>Geldt de verplichting ook voor ondernemers met de KOR?</h2>
      <p>De kleineondernemersregeling (KOR) verdient bijzondere aandacht.</p>
      <p>Het Nederlandse kabinet wil ondernemers die deelnemen aan de KOR vrijstellen van de voorgenomen verplichting om voor binnenlandse zakelijke transacties e-facturen te versturen en digitaal te rapporteren.</p>
      <p>
        <strong>Deze uitzondering is nog niet definitief wettelijk vastgelegd.</strong>
      </p>
      <p>Bovendien betekent een mogelijke binnenlandse uitzondering niet automatisch dat voor iedere grensoverschrijdende transactie dezelfde regels gelden.</p>
      <p>Maak je gebruik van de KOR? Controleer dan de uiteindelijke wetgeving en de eisen die voor jouw transacties gelden.</p>

      <h2>Is Peppol straks verplicht?</h2>
      <p>Een verplichting om elektronisch te factureren betekent niet automatisch dat je verplicht bent om het Peppol-netwerk te gebruiken.</p>
      <p>
        <strong>Peppol is een netwerk voor elektronische documentuitwisseling. UBL is een standaard voor het vastleggen van factuurgegevens.</strong>
      </p>
      <p>Peppol wordt veel gebruikt voor elektronische facturatie, onder andere bij de overheid.</p>
      <p>Maar de Europese e-facturatieregels gaan over gestandaardiseerde elektronische facturen en de bijbehorende rapportageverplichtingen. Dat betekent niet dat iedere ondernemer uitsluitend via Peppol moet factureren.</p>
      <p>Welke verzendmethoden Nederland uiteindelijk voor binnenlandse transacties zal toestaan, moet verder worden uitgewerkt.</p>
      <p>
        Lees meer in <strong><TextLink href="/blogs/wat-is-peppol">Wat is Peppol? Zo werkt elektronisch factureren</TextLink></strong>.
      </p>

      <h2>Is een UBL-factuur voldoende om aan de regels te voldoen?</h2>
      <p>Niet automatisch.</p>
      <p>UBL is een veelgebruikte XML-standaard voor elektronische facturen. Maar een bestand dat volgens een UBL-structuur is opgebouwd, voldoet niet noodzakelijk aan alle eisen van een specifieke e-facturatieregeling.</p>
      <p>Voor bepaalde toepassingen gelden aanvullende vereisten, bijvoorbeeld volgens de Europese norm EN 16931 of de specificatie Peppol BIS Billing 3.0.</p>
      <p>Ook kunnen er eisen zijn voor identificatie, verzending en digitale rapportage.</p>
      <p>Daarom moet je onderscheid maken tussen:</p>
      <ol>
        <li>Een UBL/XML-bestand kunnen maken.</li>
        <li>Een factuur hebben die voldoet aan de toepasselijke elektronische factuurstandaard.</li>
        <li>De factuur via een toegestaan kanaal kunnen verzenden.</li>
        <li>Eventuele rapportageverplichtingen kunnen uitvoeren.</li>
      </ol>
      <p>Een UBL-download alleen garandeert dus niet dat je aan alle toekomstige wettelijke verplichtingen voldoet.</p>

      <h2>Hoe bereid je je als zzp&apos;er voor op e-facturatie?</h2>
      <p>Je hoeft niet tot 2030 te wachten om te ontdekken hoe elektronische facturen werken.</p>
      <p>Je kunt nu al beginnen met een paar praktische stappen.</p>

      <h3>1. Controleer de eisen van je klanten</h3>
      <p>Vraag of je klanten PDF-facturen accepteren of gestructureerde elektronische facturen willen ontvangen.</p>
      <p>Werk je voor de overheid? Controleer dan de specifieke aanleverinstructies.</p>

      <h3>2. Maak kennis met UBL/XML</h3>
      <p>UBL is een veelgebruikt formaat voor gestructureerde factuurgegevens.</p>
      <p>Met FactuurBaas kun je gratis een factuur maken en downloaden als UBL/XML-bestand.</p>
      <p>Dat helpt je om vertrouwd te raken met het formaat, zonder direct een uitgebreid boekhoudprogramma aan te schaffen.</p>
      <CtaButton href="/ubl-factuur-maken" label="Gratis UBL-factuur maken" />

      <h3>3. Controleer je factuurgegevens</h3>
      <p>Zorg dat je bedrijfsgegevens, klantgegevens, factuurnummers, bedragen en btw correct zijn.</p>
      <p>Elektronische verwerking werkt alleen goed wanneer de onderliggende informatie klopt.</p>

      <h3>4. Onderzoek of je software e-facturatie ondersteunt</h3>
      <p>Gebruik je al een factuurprogramma of boekhoudpakket? Controleer dan welke elektronische formaten en verzendmethoden worden ondersteund.</p>
      <p>Vraag ook of de leverancier plannen heeft voor de nieuwe regelgeving.</p>

      <h3>5. Volg de Nederlandse wetgeving</h3>
      <p>De Europese regels zijn vastgesteld, maar de Nederlandse uitwerking voor binnenlandse transacties is nog in ontwikkeling.</p>
      <p>Controleer daarom regelmatig de officiële informatie van de Rijksoverheid, RVO en de Belastingdienst.</p>

      <h2>Gratis een elektronische factuur maken</h2>
      <p>Wil je alvast kennismaken met elektronische facturen?</p>
      <p>Met FactuurBaas kun je gratis een factuur opstellen en downloaden als UBL/XML of PDF.</p>
      <p>Je vult je bedrijfsgegevens, klantgegevens, factuurregels en btw in. Vervolgens kies je het gewenste bestandsformaat.</p>
      <p>Je hoeft geen account aan te maken en hebt geen betaald abonnement nodig.</p>
      <CtaButton href="/e-factuur-maken" label="Maak gratis een e-factuur" />
      <p>
        <em>
          Let op: FactuurBaas biedt momenteel UBL/XML-download, maar geen rechtstreekse Peppol-verzending of digitale btw-rapportage. Het bestand is niet automatisch geschikt voor iedere wettelijke e-facturatiestandaard.
        </em>
      </p>

      <h2>Veelgestelde vragen over verplichte e-facturatie</h2>
      <h3>Is e-facturatie verplicht in Nederland in 2026?</h3>
      <p>Nee, niet algemeen voor alle zakelijke transacties. Bij facturatie aan de Rijksoverheid gelden al wel e-facturatieverplichtingen. Ook andere opdrachtgevers kunnen elektronische facturen voorschrijven.</p>
      <h3>Vanaf wanneer wordt e-facturatie verplicht?</h3>
      <p>Vanaf 1 juli 2030 gelden nieuwe Europese regels voor relevante grensoverschrijdende B2B-transacties. Het Nederlandse kabinet wil vanaf dezelfde datum e-facturatie verplicht stellen voor binnenlandse B2B-transacties, maar de nationale wetgeving is nog niet definitief.</p>
      <h3>Is e-facturatie verplicht voor zzp&apos;ers?</h3>
      <p>Dat hangt af van de transactie en de opdrachtgever. De toekomstige regels kunnen ook voor zzp&apos;ers relevant zijn. Voor bepaalde situaties worden uitzonderingen onderzocht of voorgesteld.</p>
      <h3>Is Peppol verplicht vanaf 2030?</h3>
      <p>Er is geen algemene Europese regel die voorschrijft dat iedere ondernemer vanaf 2030 uitsluitend Peppol moet gebruiken. De regels richten zich op gestructureerde e-facturatie en digitale rapportage.</p>
      <h3>Mag ik in 2026 nog een PDF-factuur sturen?</h3>
      <p>Ja, bij veel gewone zakelijke transacties kan dat nog, mits aan de toepasselijke regels en afspraken wordt voldaan. Bij facturatie aan de Rijksoverheid of een opdrachtgever die gestructureerde e-facturen vereist, is een gewone PDF niet voldoende.</p>
      <h3>Wordt e-facturatie verplicht voor de KOR?</h3>
      <p>Het Nederlandse kabinet wil KOR-deelnemers uitzonderen van bepaalde toekomstige binnenlandse e-facturatie- en rapportageverplichtingen. De precieze uitzondering moet nog wettelijk worden uitgewerkt.</p>
      <h3>Is een UBL-factuur hetzelfde als een Peppol-factuur?</h3>
      <p>Nee. UBL is een standaard voor de structuur van elektronische facturen. Peppol is een netwerk voor documentuitwisseling. Een UBL-bestand is niet automatisch geschikt voor Peppol.</p>
      <h3>Kan ik gratis een UBL-factuur maken?</h3>
      <p>Ja. Met FactuurBaas kun je gratis een factuur opstellen en downloaden als UBL/XML-bestand, zonder account.</p>
      <h3>Heb ik vanaf 2030 een betaald boekhoudprogramma nodig?</h3>
      <p>Niet noodzakelijk. De toekomstige regels schrijven niet automatisch voor dat je een volledig boekhoudprogramma moet aanschaffen. Wel heb je een oplossing nodig waarmee je aan de toepasselijke eisen voor elektronische facturatie en eventuele rapportage kunt voldoen.</p>

      <h2>Bereid je voor op elektronisch factureren</h2>
      <p>Elektronische facturatie wordt steeds belangrijker voor Nederlandse ondernemers.</p>
      <p>Je hoeft niet te wachten op de nieuwe verplichtingen om kennis te maken met gestructureerde facturen.</p>
      <p>Met FactuurBaas kun je nu al gratis een UBL/XML-factuur maken en downloaden.</p>
      <CtaButton href="/ubl-factuur-maken" label="Maak gratis een UBL-factuur" />
      <p>
        <em>
          Gratis, zonder account en zonder abonnement. Voor verzending via Peppol of naleving van specifieke elektronische factuureisen kan een aanvullende dienst nodig zijn.
        </em>
      </p>
    </>
  ),
};
