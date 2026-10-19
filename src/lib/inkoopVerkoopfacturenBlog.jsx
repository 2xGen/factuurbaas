import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const linkClass = 'text-warm-orange hover:underline';

function TextLink({ href, children }) {
  return (
    <Link href={href} className={linkClass}>
      {children}
    </Link>
  );
}

function Cta({ href, label }) {
  return (
    <div className="my-8 text-center">
      <Button asChild className="bg-warm-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg">
        <Link href={href}>{label}</Link>
      </Button>
    </div>
  );
}

function DataTable({ headers, rows, align }) {
  return (
    <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
      <table className="w-full min-w-[320px] text-sm text-slate-700 sm:text-base">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            {headers.map((header, index) => (
              <th
                key={header}
                className={`px-4 py-3 font-semibold text-deep-blue ${align?.[index] === 'right' ? 'text-right' : 'text-left'}`}
                scope="col"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="border-b border-slate-100 last:border-0">
              {row.map((cell, index) => (
                <td key={`${row[0]}-${index}`} className={`px-4 py-3 ${align?.[index] === 'right' ? 'text-right' : ''}`}>
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

export const inkoopVerkoopfacturenArticle = {
  slug: 'inkoopfacturen-en-verkoopfacturen',
  relatedSlugs: [
    'facturen-verwerken-boekhouding',
    'facturen-en-btw-aangifte',
    'facturen-bijhouden-zzp',
    'gratis-factuurtool-vs-boekhoudprogramma',
  ],
  metaTitle: 'Inkoopfacturen en verkoopfacturen uitgelegd',
  title: 'Inkoopfacturen en verkoopfacturen: wat is het verschil?',
  excerpt:
    "Wat is het verschil tussen inkoopfacturen en verkoopfacturen? Bekijk voorbeelden, btw-regels en hoe je beide factuursoorten verwerkt als zzp'er.",
  keywords:
    'inkoopfacturen, verkoopfacturen, verschil inkoopfactuur verkoopfactuur, inkoopfactuur verwerken, verkoopfactuur zzp',
  image: {
    url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/Inkoopfacturen%20en%20verkoopfacturen.jpg',
    alt: "Zzp'er werkt aan inkoopfacturen en verkoopfacturen.",
  },
  datePublished: '2026-10-18',
  dateModified: '2026-10-18',
  faq: [
    {
      question: 'Wat is het verschil tussen een inkoopfactuur en een verkoopfactuur?',
      answer: 'Een inkoopfactuur ontvang je van een leverancier. Een verkoopfactuur verstuur je zelf naar een klant.',
    },
    {
      question: 'Is een inkoopfactuur hetzelfde als een bonnetje?',
      answer:
        'Niet altijd. Een kassabon kan onder bepaalde voorwaarden als factuur dienen, maar niet iedere bon voldoet aan alle factuureisen. De benodigde gegevens hangen af van de situatie.',
    },
    {
      question: 'Moet ik inkoopfacturen bewaren?',
      answer:
        'Ja. Inkoopfacturen maken onderdeel uit van je administratie en moeten gedurende de toepasselijke bewaartermijn worden bewaard.',
    },
    {
      question: 'Moet ik btw betalen over verkoopfacturen?',
      answer:
        'Wanneer je een btw-belaste levering of dienst verricht, ben je doorgaans btw verschuldigd. Er kunnen bijzondere regelingen, vrijstellingen of verleggingsregels gelden.',
    },
    {
      question: 'Mag ik btw op iedere inkoopfactuur aftrekken?',
      answer: 'Nee. Btw is alleen aftrekbaar wanneer je aan de voorwaarden voor aftrek van voorbelasting voldoet.',
    },
    {
      question: 'Kan ik inkoopfacturen en verkoopfacturen zelf bijhouden?',
      answer: 'Ja. Je kunt je administratie zelf bijhouden, zolang deze aan de wettelijke eisen voldoet.',
    },
    {
      question: 'Heb ik een boekhoudprogramma nodig?',
      answer:
        'Niet verplicht. Wel kan boekhoudsoftware handig zijn wanneer je veel transacties verwerkt of je administratie wilt automatiseren.',
    },
    {
      question: 'Kan ik met FactuurBaas verkoopfacturen maken?',
      answer:
        'Ja. Met FactuurBaas kun je gratis verkoopfacturen maken en met een account je facturen en betalingsstatussen bijhouden.',
    },
  ],
  content: (
    <>
      <p>
        Als zzp&apos;er krijg je te maken met twee belangrijke soorten facturen: inkoopfacturen en verkoopfacturen. Je
        stuurt zelf facturen naar klanten, maar ontvangt ook facturen van leveranciers.
      </p>
      <p>
        Beide soorten facturen horen bij je administratie. Toch worden ze op een andere manier verwerkt in je
        boekhouding en btw-aangifte.
      </p>
      <p>Wat is precies het verschil? Hoe houd je ze overzichtelijk bij? En welke software kun je hiervoor gebruiken?</p>
      <p>
        In dit artikel leggen we het stap voor stap uit, met praktische voorbeelden voor zzp&apos;ers. Hoe je die
        facturen daarna in de administratie zet, lees je in{' '}
        <TextLink href="/blogs/facturen-verwerken-boekhouding">facturen verwerken in je boekhouding</TextLink>.
      </p>

      <h2>Wat is een verkoopfactuur?</h2>
      <p>
        Een verkoopfactuur is een factuur die je als ondernemer verstuurt naar een klant voor geleverde producten of
        diensten.
      </p>
      <p>
        Je gebruikt een verkoopfactuur om vast te leggen wat je hebt geleverd, welk bedrag de klant moet betalen en
        welke btw eventueel van toepassing is.
      </p>

      <h3>Voorbeeld verkoopfactuur</h3>
      <p>Stel dat je als freelance webdesigner een website hebt gemaakt voor een klant.</p>
      <DataTable
        headers={['Onderdeel', 'Bedrag']}
        align={['left', 'right']}
        rows={[
          ['Website ontwerpen', '€1.000'],
          ['Btw 21%', '€210'],
          ['Totaal te betalen', '€1.210'],
        ]}
      />
      <p>Je stuurt de klant een verkoopfactuur van €1.210.</p>
      <p>Voor jouw onderneming betekent dit in beginsel:</p>
      <ul>
        <li>Je hebt €1.000 omzet exclusief btw gefactureerd.</li>
        <li>Je hebt €210 btw in rekening gebracht.</li>
        <li>Je hebt een vordering van €1.210 op de klant totdat deze betaalt.</li>
      </ul>
      <p>De exacte btw-verwerking hangt af van je situatie en de toepasselijke regels.</p>

      <h3>Wat moet er op een verkoopfactuur staan?</h3>
      <p>Een Nederlandse verkoopfactuur moet doorgaans voldoen aan de factuureisen van de Belastingdienst.</p>
      <p>Daarbij horen onder andere:</p>
      <ul>
        <li>Naam en adres van jou en je klant.</li>
        <li>Je btw-identificatienummer, wanneer vereist.</li>
        <li>Je KvK-nummer, wanneer vereist.</li>
        <li>Een uniek, opeenvolgend factuurnummer.</li>
        <li>De factuurdatum.</li>
        <li>Een omschrijving van de geleverde producten of diensten.</li>
        <li>De hoeveelheid of omvang van de levering.</li>
        <li>De leveringsdatum of datum van dienstverlening, wanneer deze afwijkt en vermeld moet worden.</li>
        <li>Het bedrag exclusief btw.</li>
        <li>Het toepasselijke btw-tarief en btw-bedrag, tenzij een bijzondere regeling geldt.</li>
      </ul>
      <p>Voor sommige facturen gelden vereenvoudigde of afwijkende regels.</p>
      <p>
        Met FactuurBaas kun je <TextLink href="/create-invoice">gratis verkoopfactuur maken</TextLink>.
      </p>
      <Cta href="/create-invoice" label="Maak gratis een verkoopfactuur" />

      <h2>Wat is een inkoopfactuur?</h2>
      <p>Een inkoopfactuur is een factuur die je als ondernemer ontvangt van een leverancier.</p>
      <p>Bijvoorbeeld wanneer je:</p>
      <ul>
        <li>Zakelijke software aanschaft.</li>
        <li>Materialen koopt voor een opdracht.</li>
        <li>Een laptop bestelt.</li>
        <li>Een boekhouder inschakelt.</li>
        <li>Een zakelijke dienst afneemt.</li>
        <li>Kantoorbenodigdheden koopt.</li>
      </ul>
      <p>Een inkoopfactuur laat zien welke producten of diensten je hebt gekocht en hoeveel je daarvoor moet betalen.</p>

      <h3>Voorbeeld inkoopfactuur</h3>
      <p>Je koopt zakelijke materialen bij een leverancier.</p>
      <DataTable
        headers={['Onderdeel', 'Bedrag']}
        align={['left', 'right']}
        rows={[
          ['Materialen', '€300'],
          ['Btw 21%', '€63'],
          ['Totaal te betalen', '€363'],
        ]}
      />
      <p>Voor jouw onderneming is dit een inkoopfactuur.</p>
      <p>Je moet de aankoop correct verwerken in je administratie.</p>
      <p>
        Wanneer de aankoop voldoet aan de voorwaarden voor aftrek van voorbelasting, mag je de €63 btw mogelijk
        aftrekken in je btw-aangifte.
      </p>
      <p>
        Niet iedere zakelijke aankoop is direct volledig aftrekbaar als kosten. Voor sommige bedrijfsmiddelen gelden
        bijvoorbeeld afschrijvingsregels.
      </p>

      <h2>Verschil tussen inkoopfacturen en verkoopfacturen</h2>
      <p>Het belangrijkste verschil is eenvoudig:</p>
      <p>
        <strong>Een verkoopfactuur stuur je naar een klant. Een inkoopfactuur ontvang je van een leverancier.</strong>
      </p>
      <DataTable
        headers={['Onderdeel', 'Verkoopfactuur', 'Inkoopfactuur']}
        rows={[
          ['Wie maakt de factuur?', 'Jij als verkoper', 'Je leverancier'],
          ['Wie ontvangt de factuur?', 'Je klant', 'Jij als koper'],
          ['Financiële betekenis', 'Verkoop / omzet', 'Inkoop / uitgave'],
          ['Btw', 'Vaak verschuldigde btw', 'Mogelijk aftrekbare btw'],
          ['Betaling', 'Je ontvangt geld', 'Je betaalt geld'],
          ['Administratie', 'Verkoopadministratie', 'Inkoopadministratie'],
          ['Openstaand bedrag', 'Klant moet jou betalen', 'Jij moet leverancier betalen'],
        ]}
      />
      <p>Beide factuursoorten zijn belangrijk om je administratie volledig en controleerbaar te houden.</p>

      <h2>Hoe verwerk je verkoopfacturen in je boekhouding?</h2>
      <p>Wanneer je een verkoopfactuur verstuurt, moet je deze opnemen in je administratie.</p>
      <p>Dat betekent dat je onder andere registreert:</p>
      <ol>
        <li>Het factuurnummer.</li>
        <li>De klant.</li>
        <li>De factuurdatum.</li>
        <li>Het bedrag exclusief btw.</li>
        <li>De verschuldigde btw.</li>
        <li>Het totale factuurbedrag.</li>
        <li>De betalingsstatus.</li>
      </ol>

      <h3>Voorbeeld: verkoopfactuur verwerken</h3>
      <p>Je stuurt een factuur van €500 exclusief 21% btw.</p>
      <p>De klant moet €605 betalen.</p>
      <p>Bij een gebruikelijke boekhoudkundige verwerking registreer je:</p>
      <ul>
        <li>Omzet: €500</li>
        <li>Verschuldigde btw: €105</li>
        <li>Debiteurenvordering: €605</li>
      </ul>
      <p>Wanneer de klant betaalt, wordt de openstaande vordering afgeboekt tegen de ontvangen betaling.</p>
      <p>Zo voorkom je dat de betaling opnieuw als omzet wordt geregistreerd.</p>

      <h3>Verkoopfacturen bijhouden met FactuurBaas</h3>
      <p>Met FactuurBaas kun je verkoopfacturen maken, bewaren in je account en de betalingsstatus bijhouden.</p>
      <p>Dat helpt je om te zien welke facturen al zijn betaald en welke bedragen nog openstaan.</p>
      <Cta href="/create-invoice" label="Maak en beheer gratis je facturen" />

      <h2>Hoe verwerk je inkoopfacturen in je boekhouding?</h2>
      <p>Een inkoopfactuur moet je eveneens opnemen in je administratie.</p>
      <p>Controleer eerst of de factuur klopt.</p>
      <p>Let daarbij op:</p>
      <ul>
        <li>De gegevens van de leverancier.</li>
        <li>De factuurdatum.</li>
        <li>Het factuurnummer.</li>
        <li>De omschrijving van de aankoop.</li>
        <li>Het bedrag exclusief btw.</li>
        <li>Het btw-tarief.</li>
        <li>Het btw-bedrag.</li>
        <li>Het totale bedrag.</li>
      </ul>
      <p>Vervolgens bepaal je hoe de aankoop administratief en fiscaal verwerkt moet worden.</p>

      <h3>Voorbeeld: inkoopfactuur verwerken</h3>
      <p>Je ontvangt een factuur van €200 exclusief 21% btw voor zakelijke software.</p>
      <DataTable
        headers={['Onderdeel', 'Bedrag']}
        align={['left', 'right']}
        rows={[
          ['Software', '€200'],
          ['Btw', '€42'],
          ['Totaal', '€242'],
        ]}
      />
      <p>
        Wanneer de aankoop volledig zakelijk is, direct als kosten verwerkt mag worden en de btw volledig aftrekbaar is,
        registreer je in een gebruikelijke boekhouding:
      </p>
      <ul>
        <li>Softwarekosten: €200</li>
        <li>Te vorderen btw: €42</li>
        <li>Crediteurenschuld: €242</li>
      </ul>
      <p>Wanneer je de leverancier betaalt, wordt de openstaande schuld afgeboekt.</p>
      <p>
        De precieze verwerking kan anders zijn bij vooruitbetaalde abonnementen, investeringen, buitenlandse facturen of
        beperkte btw-aftrek.
      </p>

      <h2>Inkoopfacturen en verkoopfacturen bij de btw-aangifte</h2>
      <p>Beide soorten facturen spelen een belangrijke rol bij je btw-aangifte.</p>

      <h3>Btw op verkoopfacturen</h3>
      <p>De btw die je aan klanten in rekening brengt, moet je doorgaans aangeven en afdragen.</p>
      <p>
        Bij het factuurstelsel is het juiste factuurtijdvak meestal bepalend, ook wanneer je klant nog niet heeft
        betaald.
      </p>

      <h3>Btw op inkoopfacturen</h3>
      <p>
        De btw die leveranciers aan jou in rekening brengen, mag je onder bepaalde voorwaarden aftrekken als
        voorbelasting.
      </p>
      <p>Dat hangt onder andere af van het zakelijke gebruik en of je recht hebt op btw-aftrek.</p>

      <h3>Voorbeeld btw-aangifte</h3>
      <p>Stel dat je in een kwartaal:</p>
      <ul>
        <li>€8.000 omzet exclusief 21% btw factureert.</li>
        <li>€1.680 btw over je verkopen verschuldigd bent.</li>
        <li>€400 aftrekbare btw op zakelijke inkopen hebt.</li>
      </ul>
      <p>Dan is de berekening:</p>
      <DataTable
        headers={['Onderdeel', 'Bedrag']}
        align={['left', 'right']}
        rows={[
          ['Verschuldigde btw', '€1.680'],
          ['Aftrekbare voorbelasting', '€400'],
          ['Te betalen btw', '€1.280'],
        ]}
      />
      <p>
        Dit is een vereenvoudigd voorbeeld. Bij de KOR, btw-vrijstellingen, verleggingsregelingen en buitenlandse
        transacties kan de verwerking anders zijn.
      </p>
      <p>
        Lees ook:{' '}
        <TextLink href="/blogs/facturen-en-btw-aangifte">
          Facturen en btw-aangifte: wat moet je als zzp&apos;er weten?
        </TextLink>
      </p>

      <h2>Hoe houd je inkoopfacturen en verkoopfacturen overzichtelijk bij?</h2>
      <p>Een goede administratie begint met een vaste werkwijze.</p>

      <h3>1. Bewaar verkoopfacturen en inkoopfacturen</h3>
      <p>Zorg dat je de documenten later eenvoudig kunt terugvinden.</p>
      <p>Je kunt bijvoorbeeld aparte mappen of categorieën gebruiken.</p>

      <h3>2. Controleer factuurnummers</h3>
      <p>Je eigen verkoopfacturen moeten voldoen aan de regels voor factuurnummering.</p>
      <p>Bij inkoopfacturen gebruik je doorgaans het factuurnummer van de leverancier als referentie.</p>

      <h3>3. Houd betalingen apart bij</h3>
      <p>Een factuur kan al in je administratie staan terwijl deze nog niet betaald is.</p>
      <p>
        Controleer daarom zowel de factuurgegevens als de daadwerkelijke betalingen. Hoe je openstaande bedragen
        bijhoudt, lees je in{' '}
        <TextLink href="/blogs/facturen-bijhouden-zzp">facturen bijhouden als zzp&apos;er</TextLink>.
      </p>

      <h3>4. Registreer de btw correct</h3>
      <p>Controleer of het juiste btw-tarief is toegepast en of btw op inkopen aftrekbaar is.</p>

      <h3>5. Controleer regelmatig je administratie</h3>
      <p>Vergelijk je facturen met je banktransacties en controleer of er geen documenten ontbreken.</p>

      <h2>Inkoopfacturen en verkoopfacturen in Excel bijhouden</h2>
      <p>Wanneer je weinig facturen hebt, kun je beginnen met een spreadsheet.</p>
      <p>Maak bijvoorbeeld twee tabbladen:</p>
      <p>
        <strong>Verkoopfacturen</strong>
      </p>
      <DataTable
        headers={['Factuurnummer', 'Klant', 'Bedrag', 'Status']}
        align={['left', 'left', 'right', 'left']}
        rows={[
          ['2026-001', 'Klant A', '€605', 'Betaald'],
          ['2026-002', 'Klant B', '€1.210', 'Openstaand'],
        ]}
      />
      <p>
        <strong>Inkoopfacturen</strong>
      </p>
      <DataTable
        headers={['Factuurnummer leverancier', 'Leverancier', 'Bedrag', 'Status']}
        align={['left', 'left', 'right', 'left']}
        rows={[
          ['INV-105', 'Leverancier A', '€121', 'Betaald'],
          ['INV-106', 'Leverancier B', '€363', 'Openstaand'],
        ]}
      />
      <p>Met deze overzichten kun je bijhouden wat je nog moet ontvangen en betalen.</p>
      <p>
        Een spreadsheet is echter niet automatisch een volledige boekhouding. Je moet zelf zorgen voor correcte
        verwerking, onderbouwing en bewaring.
      </p>

      <h2>Factuurprogramma of boekhoudprogramma gebruiken?</h2>
      <p>Voor verkoopfacturen kan een gratis factuurprogramma voldoende zijn.</p>
      <p>
        Wil je ook inkoopfacturen, banktransacties, grootboekrekeningen en btw-verwerking uitgebreider beheren? Dan kan
        boekhoudsoftware handig zijn.
      </p>
      <DataTable
        headers={['Functie', 'Factuurprogramma', 'Boekhoudprogramma']}
        rows={[
          ['Verkoopfacturen maken', 'Ja', 'Meestal'],
          ['Klantgegevens beheren', 'Vaak', 'Meestal'],
          ['Betalingsstatussen bijhouden', 'Vaak', 'Meestal'],
          ['Inkoopfacturen boekhoudkundig verwerken', 'Beperkt of niet', 'Vaak'],
          ['Grootboekadministratie', 'Niet altijd', 'Meestal'],
          ['Banktransacties verwerken', 'Afhankelijk van pakket', 'Vaak'],
          ['Btw-aangifte voorbereiden', 'Beperkt', 'Vaak'],
        ]}
      />
      <p>Welke oplossing geschikt is, hangt af van je onderneming.</p>

      <h3>Gratis beginnen met FactuurBaas</h3>
      <p>FactuurBaas helpt je met facturen, offertes, klantenbeheer en financiële overzichten.</p>
      <p>Je kunt ook inkomsten en uitgaven registreren.</p>
      <p>
        Voor volledige boekhoudkundige verwerking van inkoopfacturen en andere transacties kan aanvullende software
        nodig zijn.
      </p>
      <Cta href="/create-invoice" label="Maak gratis je eerste factuur" />

      <h3>Boekhoudprogramma&apos;s vergelijken</h3>
      <p>Wil je meer automatiseren, bijvoorbeeld bij het verwerken van inkoopfacturen of banktransacties?</p>
      <p>
        Vergelijk dan de mogelijkheden van verschillende boekhoudprogramma&apos;s in de kennisbank over{' '}
        <TextLink href="/blogs?pillar=boekhouden">boekhoudprogramma&apos;s vergelijken</TextLink>.
      </p>
      <Cta href="/blogs?pillar=boekhouden" label="Vergelijk boekhoudprogramma's voor zzp'ers" />

      <h2>Veelgemaakte fouten bij inkoop- en verkoopfacturen</h2>
      <h3>1. Inkoopfacturen verwarren met verkoopfacturen</h3>
      <p>Een inkoopfactuur is een factuur die je ontvangt. Een verkoopfactuur is een factuur die je zelf verstuurt.</p>
      <p>Verwarring kan leiden tot verkeerde registratie van omzet en kosten.</p>

      <h3>2. Btw verkeerd verwerken</h3>
      <p>De btw op een verkoopfactuur is niet hetzelfde als de mogelijk aftrekbare btw op een inkoopfactuur.</p>
      <p>Controleer altijd de toepasselijke regels.</p>

      <h3>3. Facturen dubbel registreren</h3>
      <p>
        Een factuur die twee keer wordt verwerkt, kan je administratie onjuist maken. Hoe je zo&apos;n fout herstelt,
        lees je in <TextLink href="/blogs/factuur-verkeerd-geboekt">factuur verkeerd geboekt</TextLink>.
      </p>

      <h3>4. Betalingen als nieuwe omzet boeken</h3>
      <p>
        Wanneer een verkoopfactuur al als omzet is geboekt, mag de latere betaling niet opnieuw als omzet worden
        verwerkt.
      </p>

      <h3>5. Zakelijke aankopen direct volledig als kosten verwerken</h3>
      <p>
        Niet iedere aankoop mag direct volledig ten laste van de winst worden gebracht. Voor sommige investeringen
        gelden afschrijvingsregels.
      </p>

      <h3>6. Facturen niet bewaren</h3>
      <p>Je moet facturen en andere relevante administratieve gegevens gedurende de toepasselijke wettelijke bewaartermijn bewaren.</p>
      <p>
        Voor veel onderdelen van de Nederlandse ondernemersadministratie geldt een algemene bewaartermijn van zeven
        jaar. Voor bepaalde gegevens gelden langere termijnen.
      </p>

      <h2>Wanneer is een boekhouder handig?</h2>
      <p>Veel zzp&apos;ers kunnen hun verkoopfacturen zelf maken en bijhouden.</p>
      <p>Maar het verwerken van inkoopfacturen, zakelijke kosten en btw kan ingewikkelder worden.</p>
      <p>Een boekhouder kan helpen wanneer:</p>
      <ul>
        <li>Je veel facturen ontvangt en verstuurt.</li>
        <li>Je niet zeker weet welke kosten aftrekbaar zijn.</li>
        <li>Je regelmatig met buitenlandse leveranciers werkt.</li>
        <li>Je vragen hebt over btw.</li>
        <li>Je administratie veel tijd kost.</li>
        <li>Je de verwerking van facturen liever uitbesteedt.</li>
      </ul>

      <h3>Geen tijd om al je facturen te verwerken?</h3>
      <p>
        Laat je inkoop- en verkoopfacturen overzichtelijk verwerken en houd meer tijd over voor je onderneming. Vraag{' '}
        <TextLink href="/boekhouder-vinden">hulp bij je administratie</TextLink>.
      </p>
      <Cta href="/boekhouder-vinden" label="Vind hulp bij je administratie" />
      <p className="text-center text-slate-600">Een aanvraag via FactuurBaas is gratis en vrijblijvend.</p>

      <h2>Conclusie: houd inkoopfacturen en verkoopfacturen apart</h2>
      <p>Inkoopfacturen en verkoopfacturen zijn allebei belangrijk voor je boekhouding, maar hebben een andere functie.</p>
      <p>Verkoopfacturen laten zien wat je aan klanten factureert. Inkoopfacturen laten zien welke producten en diensten je bij leveranciers afneemt.</p>
      <p>Door beide goed te registreren, houd je inzicht in je inkomsten, uitgaven, betalingen en btw.</p>
      <p>Met FactuurBaas kun je gratis verkoopfacturen maken en je belangrijkste administratieve gegevens bijhouden.</p>
      <Cta href="/create-invoice" label="Maak gratis een factuur" />
      <p>Wil je liever hulp bij de verwerking van je volledige administratie?</p>
      <Cta href="/boekhouder-vinden" label="Vind een boekhouder" />
    </>
  ),
};
