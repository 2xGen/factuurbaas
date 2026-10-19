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

export const factuurVerkeerdGeboektArticle = {
  slug: 'factuur-verkeerd-geboekt',
  relatedSlugs: [
    'facturen-verwerken-boekhouding',
    'facturen-bijhouden-zzp',
    'facturen-zelf-boekhouden-of-uitbesteden',
    'btw-factuur-zzp',
  ],
  metaTitle: 'Factuur verkeerd geboekt? Zo corrigeer je het',
  title: 'Factuur verkeerd geboekt? Zo herstel je de fout',
  excerpt:
    'Factuur verkeerd geboekt in je administratie? Lees hoe je fouten in bedragen, btw, kosten en betalingen corrigeert en wanneer hulp nodig is.',
  keywords:
    'factuur verkeerd geboekt, factuur verkeerd verwerkt, factuur dubbel geboekt, verkeerde btw geboekt, factuur in verkeerd boekjaar geboekt',
  image: {
    url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/Factuur%20verkeerd%20geboekt.jpg',
    alt: 'Ondernemers bekijken een factuur die verkeerd in de administratie is verwerkt.',
  },
  datePublished: '2026-10-18',
  dateModified: '2026-10-18',
  faq: [
    {
      question: 'Kan ik een verkeerd geboekte factuur verwijderen?',
      answer:
        'Dat hangt af van de situatie. Een foutieve conceptboeking kun je mogelijk aanpassen of verwijderen. Bij een definitief verwerkte factuur moet je zorgen dat de administratie controleerbaar blijft en kan een correctieboeking nodig zijn.',
    },
    {
      question: 'Moet ik een nieuwe factuur maken als ik verkeerd heb geboekt?',
      answer:
        'Niet altijd. Als de oorspronkelijke factuur correct is en alleen de administratieve verwerking fout is, hoef je doorgaans geen nieuwe factuur naar de klant te sturen.',
    },
    {
      question: 'Wat als ik te weinig btw heb aangegeven?',
      answer:
        'Dan moet je beoordelen of een correctie via een volgende btw-aangifte mogelijk is of dat een suppletie nodig is. De omvang en omstandigheden van de fout bepalen welke procedure geldt.',
    },
    {
      question: 'Kan ik een fout uit vorig jaar nog corrigeren?',
      answer:
        'Ja, fouten uit eerdere jaren kunnen vaak nog worden gecorrigeerd. De juiste werkwijze hangt af van de aard van de fout, de betreffende belasting en de toepasselijke termijnen.',
    },
    {
      question: 'Wat gebeurt er als ik een factuur dubbel boek?',
      answer:
        'Je administratie kan daardoor te hoge kosten, omzet of btw laten zien. Corrigeer de dubbele verwerking en controleer of eerdere aangiften zijn beïnvloed.',
    },
    {
      question: 'Is een creditfactuur altijd verplicht bij een fout?',
      answer:
        'Nee. Een creditfactuur is bedoeld voor het corrigeren van een uitgereikte factuur wanneer dat passend of vereist is. Een fout in een interne boeking kan vaak op een andere manier worden hersteld.',
    },
    {
      question: 'Kan een boekhouder mijn boekhouding controleren?',
      answer:
        'Ja. Een boekhouder kan je administratie controleren, fouten helpen herstellen en adviseren over eventuele fiscale correcties.',
    },
  ],
  content: (
    <>
      <p>
        Heb je een factuur verkeerd geboekt in je administratie? Misschien heb je het verkeerde bedrag ingevuld, een
        factuur dubbel verwerkt of de verkeerde btw toegepast.
      </p>
      <p>
        Een fout in je boekhouding is vervelend, maar betekent niet automatisch dat je hele administratie opnieuw moet.
        Veel fouten kun je herstellen door de oorspronkelijke boeking te controleren en een juiste correctie vast te
        leggen.
      </p>
      <p>
        Hoe je dat doet, hangt af van het soort fout en of je de gegevens al hebt gebruikt voor een btw-aangifte of
        andere fiscale verplichtingen.
      </p>
      <p>
        In dit artikel lees je welke fouten vaak voorkomen, hoe je ze corrigeert en wanneer het verstandig is om een
        boekhouder in te schakelen. Hoe je facturen normaal in de administratie zet, lees je in{' '}
        <TextLink href="/blogs/facturen-verwerken-boekhouding">facturen verwerken in je boekhouding</TextLink>.
      </p>

      <h2>Wat betekent een factuur verkeerd boeken?</h2>
      <p>Een factuur verkeerd boeken betekent dat je een factuur onjuist hebt verwerkt in je financiële administratie.</p>
      <p>Dat kan bijvoorbeeld gebeuren wanneer:</p>
      <ul>
        <li>Je een verkeerd bedrag registreert.</li>
        <li>Je het verkeerde btw-tarief gebruikt.</li>
        <li>Je een verkoopfactuur als inkoopfactuur verwerkt.</li>
        <li>Je een factuur twee keer registreert.</li>
        <li>Je een zakelijke uitgave in de verkeerde categorie plaatst.</li>
        <li>Je een betaling aan de verkeerde factuur koppelt.</li>
        <li>Je een factuur in de verkeerde periode verwerkt.</li>
      </ul>
      <p>Niet iedere fout heeft dezelfde gevolgen.</p>
      <p>
        Een verkeerd gekoppelde betaling kan bijvoorbeeld vooral invloed hebben op je overzicht van openstaande
        facturen. Een verkeerd btw-bedrag kan ook gevolgen hebben voor je belastingaangifte.
      </p>
      <p>Daarom is het belangrijk om eerst vast te stellen wat er precies misging.</p>

      <h2>Factuur verkeerd geboekt: wat moet je doen?</h2>
      <p>Volg deze stappen voordat je een boeking wijzigt.</p>

      <h3>Stap 1. Zoek de oorspronkelijke factuur</h3>
      <p>Controleer de originele factuur en vergelijk deze met de gegevens in je administratie.</p>
      <p>Let vooral op:</p>
      <ul>
        <li>Factuurnummer</li>
        <li>Factuurdatum</li>
        <li>Naam van de klant of leverancier</li>
        <li>Bedrag exclusief btw</li>
        <li>Btw-tarief en btw-bedrag</li>
        <li>Totaalbedrag</li>
        <li>Betalingsstatus</li>
      </ul>
      <p>Zo kun je bepalen of de fout in de factuur zelf zit of alleen in de administratieve verwerking.</p>

      <h3>Stap 2. Bepaal welk type fout je hebt gemaakt</h3>
      <p>Een verkeerde boeking kan betrekking hebben op het bedrag, de btw, de categorie, de datum of de betaling.</p>
      <p>Het type fout bepaalt hoe je deze het beste herstelt.</p>

      <h3>Stap 3. Controleer of de periode al is afgesloten</h3>
      <p>Heb je de betreffende btw-aangifte al ingediend? Of is de boekhouding van het betreffende jaar al afgesloten?</p>
      <p>Dan moet je extra zorgvuldig zijn.</p>
      <p>
        Een correctie in een reeds aangegeven periode kan gevolgen hebben voor eerdere aangiften. Alleen het aanpassen
        van een bedrag in je software is dan mogelijk niet voldoende.
      </p>

      <h3>Stap 4. Maak de juiste correctie</h3>
      <p>Afhankelijk van je boekhoudmethode kun je een fout herstellen door:</p>
      <ul>
        <li>Een onjuiste conceptboeking te wijzigen.</li>
        <li>Een foutieve boeking terug te draaien.</li>
        <li>Een correctieboeking te maken.</li>
        <li>Een betaling opnieuw te koppelen.</li>
        <li>Een creditfactuur en eventueel een nieuwe factuur op te stellen.</li>
        <li>Een fiscale correctie te verwerken wanneer dat nodig is.</li>
      </ul>
      <p>Welke methode juist is, hangt af van de situatie.</p>

      <h3>Stap 5. Bewaar de oorspronkelijke gegevens en correctie</h3>
      <p>Zorg dat achteraf duidelijk blijft wat er is gebeurd.</p>
      <p>Bewaar de oorspronkelijke factuur, eventuele creditfacturen en de gegevens die de correctie onderbouwen.</p>
      <p>Zo blijft je administratie controleerbaar.</p>

      <h2>Verkeerd bedrag geboekt op een factuur</h2>
      <p>
        Stel dat je een verkoopfactuur van €1.210 inclusief btw hebt verstuurd, maar per ongeluk €1.120 hebt
        geregistreerd in je boekhouding.
      </p>
      <p>Je administratie wijkt dan €90 af van de oorspronkelijke factuur.</p>
      <DataTable
        headers={['Onderdeel', 'Bedrag']}
        align={['left', 'right']}
        rows={[
          ['Werkelijk factuurbedrag', '€1.210'],
          ['Geregistreerd bedrag', '€1.120'],
          ['Verschil', '€90'],
        ]}
      />
      <p>Controleer eerst of de factuur zelf correct is.</p>
      <p>
        <strong>Is de factuur juist, maar de boeking verkeerd?</strong> Dan moet je de administratieve verwerking
        corrigeren, zonder automatisch een nieuwe factuur naar de klant te sturen.
      </p>
      <p>
        <strong>Is de verstuurde factuur zelf onjuist?</strong> Dan kan een creditfactuur of een andere passende
        factuurcorrectie nodig zijn.
      </p>
      <p>Het is belangrijk om deze situaties niet met elkaar te verwarren.</p>

      <h2>Verkeerde btw geboekt: wat nu?</h2>
      <p>Een veelvoorkomende fout is het toepassen van het verkeerde btw-tarief.</p>
      <p>Bijvoorbeeld wanneer je 9% btw registreert terwijl voor de betreffende prestatie 21% geldt.</p>
      <p>Stel dat je een dienst van €1.000 exclusief btw factureert.</p>
      <DataTable
        headers={['Onderdeel', 'Bij 9% btw', 'Bij 21% btw']}
        align={['left', 'right', 'right']}
        rows={[
          ['Bedrag exclusief btw', '€1.000', '€1.000'],
          ['Btw', '€90', '€210'],
          ['Totaal', '€1.090', '€1.210'],
        ]}
      />
      <p>Het btw-verschil bedraagt €120.</p>
      <p>
        De juiste verwerking hangt af van de oorspronkelijke factuur, de aard van de prestatie en de vraag of je de btw
        al hebt aangegeven.
      </p>

      <h3>Btw-aangifte nog niet ingediend</h3>
      <p>
        Wanneer de betreffende aangifte nog niet is ingediend, kun je de fout doorgaans binnen de administratie
        herstellen en zorgen dat de juiste gegevens in de aangifte worden opgenomen.
      </p>

      <h3>Btw-aangifte al ingediend</h3>
      <p>Heb je een fout ontdekt in een eerdere btw-aangifte? Dan gelden de correctieregels van de Belastingdienst.</p>
      <p>
        Bij een btw-correctie van maximaal €1.000 te veel of te weinig aangegeven btw kun je de correctie in beginsel
        verwerken in een volgende btw-aangifte, binnen de daarvoor geldende voorwaarden.
      </p>
      <p>Bij een correctie van meer dan €1.000 moet je doorgaans een suppletie omzetbelasting indienen.</p>
      <p>
        Voor bepaalde situaties gelden aanvullende regels en termijnen. Controleer daarom altijd de actuele
        voorschriften van de Belastingdienst.
      </p>

      <h3>Twijfel je over een btw-fout?</h3>
      <p>
        Een verkeerd btw-tarief kan gevolgen hebben voor je aangifte en de factuur die je klant heeft ontvangen.
      </p>
      <p>
        Een boekhouder kan beoordelen welke correctie nodig is en hoe je deze juist verwerkt. Vraag{' '}
        <TextLink href="/boekhouder-vinden">hulp bij je boekhouding</TextLink> wanneer je niet zeker weet welke
        correctie past.
      </p>
      <Cta href="/boekhouder-vinden" label="Vind hulp bij je boekhouding" />
      <p className="text-center text-slate-600">Een aanvraag via FactuurBaas is gratis en vrijblijvend.</p>

      <h2>Factuur dubbel geboekt</h2>
      <p>Een dubbele boeking ontstaat wanneer je dezelfde factuur twee keer registreert.</p>
      <p>Bijvoorbeeld wanneer je een inkoopfactuur handmatig invoert en deze later opnieuw verwerkt.</p>
      <p>Stel dat je een zakelijke aankoop van €500 exclusief btw twee keer boekt.</p>
      <p>Dan kunnen je geregistreerde kosten en de bijbehorende btw onterecht te hoog worden weergegeven.</p>

      <h3>Hoe herstel je een dubbele boeking?</h3>
      <p>Controleer eerst of beide boekingen daadwerkelijk betrekking hebben op dezelfde transactie.</p>
      <p>Vergelijk het factuurnummer, de leverancier, de datum en het bedrag.</p>
      <p>
        Wanneer blijkt dat één boeking dubbel is, moet de overbodige boeking op een controleerbare manier worden
        teruggedraaid of gecorrigeerd.
      </p>
      <p>Controleer ook of de dubbele verwerking invloed heeft gehad op je btw-aangifte of andere rapportages.</p>
      <p>
        <strong>Let op:</strong> een dubbele administratieve boeking is niet hetzelfde als een factuur die daadwerkelijk
        twee keer naar een klant is verstuurd.
      </p>

      <h2>Factuur in de verkeerde categorie geboekt</h2>
      <p>
        Misschien heb je zakelijke software geboekt als kantoorkosten, terwijl je hiervoor een andere kostenrekening
        gebruikt.
      </p>
      <p>Of je hebt een investering direct als reguliere kosten verwerkt.</p>
      <p>Niet iedere categoriefout heeft dezelfde gevolgen.</p>
      <p>
        Een verkeerde interne kostenindeling kan vooral invloed hebben op je rapportages. Maar wanneer een investering
        verkeerd wordt verwerkt, kan dit ook gevolgen hebben voor de fiscale winstberekening.
      </p>

      <h3>Wat moet je controleren?</h3>
      <p>Bekijk of de uitgave:</p>
      <ul>
        <li>Zakelijk is.</li>
        <li>Op de juiste kostenrekening staat.</li>
        <li>Direct als kosten mag worden verwerkt.</li>
        <li>Als bedrijfsmiddel moet worden geactiveerd.</li>
        <li>Onder een bijzondere fiscale regeling valt.</li>
      </ul>
      <p>Wanneer de fiscale behandeling verandert, kan een aanvullende correctie noodzakelijk zijn.</p>

      <h2>Factuur in het verkeerde boekjaar geboekt</h2>
      <p>Soms wordt een factuur in het verkeerde jaar verwerkt.</p>
      <p>
        Bijvoorbeeld wanneer een factuur betrekking heeft op werkzaamheden in december, maar pas in januari wordt
        ontvangen of betaald.
      </p>
      <p>
        De juiste verwerking hangt af van de factuurdatum, het moment waarop de prestatie is geleverd, het gehanteerde
        boekhoudstelsel en de toepasselijke fiscale regels.
      </p>
      <p>Voor de btw kunnen andere tijdvakregels gelden dan voor de winstberekening.</p>
      <p>Daarom kun je niet altijd uitsluitend op basis van de betaaldatum bepalen in welk jaar een factuur thuishoort.</p>
      <p>Controleer bij twijfel de oorspronkelijke transactie en de regels die voor jouw onderneming gelden.</p>

      <h2>Betaling aan de verkeerde factuur gekoppeld</h2>
      <p>Een andere veelvoorkomende fout is dat je een betaling aan de verkeerde factuur koppelt.</p>
      <p>
        Stel dat klant A €605 betaalt, maar je deze betaling per ongeluk koppelt aan een openstaande factuur van klant
        B.
      </p>
      <p>Dan lijkt de factuur van klant B betaald, terwijl de factuur van klant A nog openstaat.</p>
      <p>Het totaal ontvangen bedrag verandert niet, maar je overzicht van debiteuren klopt niet meer.</p>
      <p>
        Een vast overzicht van openstaande facturen maakt dit soort fouten eerder zichtbaar. Lees hoe je dat doet in{' '}
        <TextLink href="/blogs/facturen-bijhouden-zzp">facturen bijhouden als zzp&apos;er</TextLink>.
      </p>

      <h3>Hoe los je dit op?</h3>
      <ol>
        <li>Controleer de bankbetaling.</li>
        <li>Zoek de factuur waarop de betaling betrekking heeft.</li>
        <li>Verwijder of herstel de verkeerde koppeling.</li>
        <li>Koppel de betaling aan de juiste factuur.</li>
        <li>Controleer opnieuw de openstaande bedragen.</li>
      </ol>
      <p>Een dergelijke fout vereist niet automatisch een nieuwe factuur of een btw-correctie.</p>

      <h2>Factuur verkeerd geboekt in FactuurBaas</h2>
      <p>
        Gebruik je FactuurBaas om facturen en betalingen bij te houden? Dan is het belangrijk om onderscheid te maken
        tussen een fout in het factuurdocument en een fout in de geregistreerde gegevens.
      </p>

      <h3>Verkeerde betalingsstatus</h3>
      <p>
        Heb je een factuur ten onrechte als betaald geregistreerd? Controleer dan de daadwerkelijke betaling en pas de
        status aan via de beschikbare factuurfunctionaliteiten.
      </p>

      <h3>Verkeerd bedrag op een conceptfactuur</h3>
      <p>Controleer de ingevoerde gegevens voordat je de factuur definitief gebruikt of verstuurt.</p>

      <h3>Fout op een al verstuurde factuur</h3>
      <p>Is de factuur al naar de klant verzonden, dan kan een formele correctie nodig zijn.</p>
      <p>
        Overschrijf niet zomaar een reeds uitgereikte factuur zonder dat de oorspronkelijke gegevens en de correctie
        controleerbaar blijven.
      </p>

      <h3>Verkeerde inkomsten- of uitgavenregistratie</h3>
      <p>
        Controleer of het bedrag, de datum en de btw correct zijn geregistreerd. Pas de gegevens aan via de beschikbare
        bewerkfuncties wanneer dit administratief juist is.
      </p>
      <p>
        FactuurBaas helpt je om facturen, inkomsten, uitgaven en betalingsstatussen overzichtelijk bij te houden. Het is
        geen volledige boekhoudsoftware die automatisch alle fiscale correcties of suppleties verzorgt. Je kunt wel{' '}
        <TextLink href="/create-invoice">gratis facturen maken</TextLink> en de gegevens later corrigeren.
      </p>
      <Cta href="/create-invoice" label="Maak gratis een factuur" />

      <h2>Wanneer heb je een creditfactuur nodig?</h2>
      <p>
        Een creditfactuur gebruik je om een eerder uitgereikte factuur geheel of gedeeltelijk te corrigeren wanneer de
        situatie daarom vraagt.
      </p>
      <p>Bijvoorbeeld wanneer:</p>
      <ul>
        <li>Een klant een deel van de bestelling retourneert.</li>
        <li>Een eerder gefactureerd bedrag moet worden verminderd.</li>
        <li>Een factuur moet worden teruggedraaid.</li>
        <li>Een eerder uitgereikte factuur een inhoudelijke correctie vereist waarvoor creditering passend is.</li>
      </ul>
      <p>Een creditfactuur verwijst bij voorkeur duidelijk naar de oorspronkelijke factuur.</p>
      <p>Niet iedere fout in je administratie vereist een creditfactuur.</p>
      <p>
        Wanneer de factuur zelf correct is en alleen de interne boeking verkeerd is, kan een administratieve correctie
        voldoende zijn.
      </p>

      <h2>Hoe voorkom je verkeerd geboekte facturen?</h2>
      <p>Met een vaste werkwijze kun je veel administratieve fouten voorkomen.</p>

      <h3>Controleer facturen voordat je ze verstuurt</h3>
      <p>Bekijk het factuurnummer, de klantgegevens, bedragen en btw.</p>

      <h3>Houd betalingen regelmatig bij</h3>
      <p>Controleer ontvangen betalingen en werk factuurstatussen bij.</p>

      <h3>Registreer kosten op een vaste manier</h3>
      <p>Gebruik consistente categorieën en bewaar de onderliggende documenten.</p>

      <h3>Controleer je btw vóór de aangifte</h3>
      <p>Vergelijk de btw-overzichten met je facturen en andere relevante administratie.</p>

      <h3>Maak regelmatig een overzicht</h3>
      <p>Controleer je inkomsten, uitgaven en openstaande bedragen.</p>

      <h3>Schakel hulp in bij twijfel</h3>
      <p>
        Wanneer je niet zeker weet hoe een factuur verwerkt moet worden, is het verstandig om dit te laten controleren
        voordat je een aangifte indient.
      </p>

      <h2>Wanneer moet je een boekhouder inschakelen?</h2>
      <p>Een kleine administratieve fout kun je vaak zelf herstellen.</p>
      <p>Maar bij sommige fouten is professionele ondersteuning verstandig.</p>
      <p>
        Of je de rest van de administratie zelf blijft doen, lees je in{' '}
        <TextLink href="/blogs/facturen-zelf-boekhouden-of-uitbesteden">
          facturen zelf boekhouden of uitbesteden
        </TextLink>
        .
      </p>
      <p>Denk bijvoorbeeld aan:</p>
      <ul>
        <li>Een fout in een al ingediende btw-aangifte.</li>
        <li>Een onjuiste boeking in een afgesloten boekjaar.</li>
        <li>Een ingewikkelde factuur met buitenlandse btw.</li>
        <li>Een verkeerd verwerkte investering.</li>
        <li>Meerdere fouten die invloed hebben op je jaarcijfers.</li>
        <li>Onduidelijkheid over creditfacturen of fiscale correcties.</li>
      </ul>
      <p>
        Een boekhouder kan helpen bepalen welke boekingen gecorrigeerd moeten worden en of er gevolgen zijn voor je
        belastingaangiften.
      </p>

      <h3>Twijfel je of je boekhouding klopt?</h3>
      <p>
        Een verkeerde boeking kan gevolgen hebben voor je administratie of btw-aangifte. Een boekhouder kan helpen
        fouten te controleren en te corrigeren.
      </p>
      <Cta href="/boekhouder-vinden" label="Zoek hulp bij je boekhouding" />
      <p className="text-center text-slate-600">Gratis en vrijblijvend aanvragen.</p>

      <h2>Conclusie: een verkeerd geboekte factuur herstellen</h2>
      <p>
        Een verkeerd geboekte factuur hoeft niet direct een groot probleem te zijn. Het belangrijkste is dat je
        vaststelt welke fout is gemaakt en of deze gevolgen heeft voor je administratie of belastingaangifte.
      </p>
      <p>Controleer de oorspronkelijke factuur, herstel de boeking op een controleerbare manier en bewaar de relevante documenten.</p>
      <p>Bij fouten in btw-aangiften, afgesloten boekjaren of ingewikkelde transacties kan professionele hulp verstandig zijn.</p>
      <p>
        <strong>Wil je zeker weten dat je administratie goed wordt verwerkt?</strong>
      </p>
      <Cta href="/boekhouder-vinden" label="Vind een boekhouder" />
    </>
  ),
};
