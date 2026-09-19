import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { UITGAVEN_PRODUCT_PATH } from '@/lib/uitgavenLanding';

const TextLink = ({ href, children }) => (
  <Link href={href} className="text-warm-orange hover:underline">
    {children}
  </Link>
);

const UitgavenCta = ({
  title = 'Houd je zakelijke uitgaven gratis bij',
  text = 'Registreer zakelijke kosten en btw naast je facturen en zie wat er van je omzet overblijft.',
  label = 'Gratis uitgaven bijhouden →',
}) => (
  <div className="my-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
    <p className="font-heading text-lg font-semibold text-deep-blue">{title}</p>
    <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
    <div className="mt-4">
      <Button
        asChild
        className="rounded-lg bg-warm-orange px-6 py-3 text-base font-bold text-white hover:bg-orange-600"
      >
        <Link href={UITGAVEN_PRODUCT_PATH}>{label}</Link>
      </Button>
    </div>
  </div>
);

export const uitgavenArticles = [
  {
    slug: 'zakelijke-uitgaven-bijhouden-zzp',
    relatedSlugs: [
      'zakelijke-kosten-zzp',
      'btw-zakelijke-kosten-aftrekken',
      'zakelijke-kosten-prive-betaald',
      'privekosten-zakelijk-betalen',
      'software-abonnementen-aftrekken-zzp',
      'reiskosten-aftrekken-zzp',
      'wanneer-boekhoudsoftware-nodig-zzp',
    ],
    metaTitle: "Zakelijke uitgaven bijhouden als zzp'er | Zo werkt het",
    title: "Zakelijke uitgaven bijhouden als zzp'er",
    excerpt:
      "Zakelijke uitgaven bijhouden als zzp'er? Lees hoe je kosten, btw en bonnetjes registreert en houd omzet en uitgaven overzichtelijk bij.",
    keywords:
      "zakelijke uitgaven bijhouden, uitgaven bijhouden zzp, zakelijke kosten bijhouden, kosten bijhouden zzp, zakelijke uitgaven zzp, uitgaven bijhouden als zzp'er, administratie uitgaven zzp",
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/Zakelijke%20uitgaven%20bijhouden%20als%20zzper.jpg',
      alt: "Zakelijke uitgaven bijhouden als zzp'er — bonnetjes en administratie",
    },
    datePublished: '2026-09-19',
    dateModified: '2026-09-19',
    faq: [
      {
        question: "Hoe kan ik als zzp'er mijn uitgaven bijhouden?",
        answer:
          'Je kunt zakelijke uitgaven bijhouden in een spreadsheet, boekhoudprogramma of een eenvoudige administratietool. Registreer in ieder geval gegevens zoals datum, leverancier, omschrijving, bedrag en btw en bewaar relevante facturen en bonnetjes.',
      },
      {
        question: 'Kan ik zakelijke uitgaven gratis bijhouden?',
        answer:
          'Ja. Je kunt bijvoorbeeld zelf een spreadsheet maken. Met een gratis FactuurBaas-account kun je zakelijke uitgaven daarnaast direct naast je facturen registreren en je omzet, uitgaven en resultaat vanuit één dashboard bekijken.',
      },
      {
        question: 'Welke zakelijke uitgaven moet ik bijhouden?',
        answer:
          'Houd kosten bij die betrekking hebben op je onderneming, zoals software, materiaal, marketing, zakelijke verzekeringen en andere bedrijfskosten. Of een kostenpost fiscaal volledig aftrekbaar is, hangt af van het type uitgave en je situatie.',
      },
      {
        question: 'Moet ik bonnetjes van zakelijke uitgaven bewaren?',
        answer:
          'Bewaar relevante facturen, bonnetjes en andere bewijsstukken bij je administratie. Daarmee kun je later aantonen waar een geregistreerde zakelijke uitgave betrekking op had.',
      },
      {
        question: 'Hoe houd ik terugkerende zakelijke kosten bij?',
        answer:
          'Je kunt terugkerende kosten zoals software, hosting en verzekeringen als vaste uitgave opnemen. In FactuurBaas kun je aangeven dat een uitgave terugkerend is, zodat je deze niet iedere periode opnieuw hoeft in te voeren.',
      },
      {
        question: 'Kan ik mijn uitgaven en facturen samen bijhouden?',
        answer:
          'Ja. Dat is juist handig omdat je daardoor niet alleen je omzet ziet, maar ook je zakelijke uitgaven en het verschil daartussen. In FactuurBaas worden je geregistreerde facturen en uitgaven samengebracht op je dashboard.',
      },
    ],
    content: (
      <>
        <p>
          Als zzp&apos;er houd je waarschijnlijk goed bij wat er binnenkomt. Je stuurt facturen,
          controleert welke klanten hebben betaald en ziet hoeveel omzet je maakt.
        </p>
        <p>Maar wat geef je uit?</p>
        <p>
          Software, materiaal, verzekeringen, advertenties, reiskosten en andere zakelijke kosten
          bepalen uiteindelijk hoeveel er werkelijk van je omzet overblijft.
        </p>
        <p>
          Door je <strong>zakelijke uitgaven bij te houden</strong> krijg je meer grip op je
          resultaat én je btw. En dat hoeft niet meteen met ingewikkelde boekhoudsoftware.
        </p>

        <UitgavenCta />

        <h2>Waarom zakelijke uitgaven bijhouden?</h2>
        <p>Alleen je omzet bekijken geeft een onvolledig beeld van je bedrijf.</p>
        <p>Stel dat je deze maand €5.000 factureert.</p>
        <p>
          Dat zegt nog weinig over wat je daadwerkelijk hebt verdiend als je in dezelfde maand ook
          kosten hebt gemaakt voor bijvoorbeeld:
        </p>
        <ul>
          <li>software;</li>
          <li>materiaal;</li>
          <li>advertenties;</li>
          <li>verzekeringen;</li>
          <li>zakelijke diensten;</li>
          <li>vervoer.</li>
        </ul>
        <p>
          Heb je €5.000 omzet en €1.500 aan geregistreerde zakelijke uitgaven, dan blijft er vóór
          belastingen en andere correcties €3.500 over.
        </p>
        <p>Daarom zijn drie bedragen interessant:</p>
        <ul>
          <li>
            <strong>Omzet</strong> — wat komt er binnen?
          </li>
          <li>
            <strong>Uitgaven</strong> — wat geef je zakelijk uit?
          </li>
          <li>
            <strong>Resultaat</strong> — wat blijft er over als je uitgaven van je omzet aftrekt?
          </li>
        </ul>
        <p>
          Door deze bedragen naast elkaar te zetten, krijg je een veel realistischer beeld van je
          onderneming.
        </p>

        <h2>Welke zakelijke uitgaven houd je bij?</h2>
        <p>
          In je administratie wil je zakelijke uitgaven vastleggen die betrekking hebben op je
          onderneming.
        </p>
        <p>Denk bijvoorbeeld aan:</p>
        <ul>
          <li>software en abonnementen;</li>
          <li>kantoorartikelen;</li>
          <li>materialen en gereedschap;</li>
          <li>marketing en advertenties;</li>
          <li>zakelijke verzekeringen;</li>
          <li>hosting en domeinnamen;</li>
          <li>advies- en administratiekosten;</li>
          <li>zakelijke reis- en vervoerskosten;</li>
          <li>telefoon en internet voor zover zakelijk;</li>
          <li>opleidingen en vakliteratuur voor zover zakelijk;</li>
          <li>huur en andere kosten van bedrijfsruimte.</li>
        </ul>
        <p>
          Niet iedere uitgave die je registreert is automatisch volledig fiscaal aftrekbaar. Voor
          sommige kosten gelden beperkingen en bij gemengd zakelijk en privégebruik kan alleen het
          zakelijke deel relevant zijn.
        </p>
        <p>
          Wil je weten welke kosten je als ondernemer mag aftrekken? Bekijk dan:{' '}
          <TextLink href="/blogs/zakelijke-kosten-zzp">
            Zakelijke kosten zzp: welke kosten mag je aftrekken?
          </TextLink>
        </p>

        <h2>Welke gegevens leg je per uitgave vast?</h2>
        <p>
          Je hoeft een zakelijke uitgave niet ingewikkelder te maken dan nodig. Het belangrijkste is
          dat je later kunt terugvinden <strong>wat je hebt gekocht, wanneer, bij wie en voor welk
          bedrag</strong>.
        </p>
        <p>Leg bijvoorbeeld vast:</p>
        <ul>
          <li>datum;</li>
          <li>omschrijving;</li>
          <li>leverancier;</li>
          <li>categorie;</li>
          <li>bedrag exclusief btw;</li>
          <li>btw;</li>
          <li>totaalbedrag inclusief btw;</li>
          <li>eventueel een aanvullende notitie.</li>
        </ul>
        <p>Een softwareabonnement kan er bijvoorbeeld zo uitzien:</p>
        <ul>
          <li>
            <strong>Omschrijving:</strong> Adobe Creative Cloud
          </li>
          <li>
            <strong>Leverancier:</strong> Adobe
          </li>
          <li>
            <strong>Categorie:</strong> Software &amp; abonnementen
          </li>
          <li>
            <strong>Exclusief btw:</strong> €50,00
          </li>
          <li>
            <strong>Btw:</strong> €10,50
          </li>
          <li>
            <strong>Totaal:</strong> €60,50
          </li>
        </ul>
        <p>
          Door steeds dezelfde gegevens vast te leggen, wordt het later veel gemakkelijker om je
          kosten terug te vinden en te vergelijken.
        </p>

        <h2>Gebruik categorieën voor je zakelijke uitgaven</h2>
        <p>
          Categorieën maken een lijst met losse transacties een stuk nuttiger. In plaats van alleen
          te zien dat je €1.500 hebt uitgegeven, kun je bijvoorbeeld zien waar dat geld naartoe
          ging.
        </p>
        <p>Je kunt categorieën gebruiken zoals:</p>
        <ul>
          <li>Software &amp; abonnementen</li>
          <li>Kantoor &amp; materiaal</li>
          <li>Reiskosten</li>
          <li>Telefoon &amp; internet</li>
          <li>Marketing</li>
          <li>Verzekeringen</li>
          <li>Advies &amp; administratie</li>
          <li>Opleiding</li>
          <li>Huisvesting</li>
          <li>Overig</li>
        </ul>
        <p>
          Na verloop van tijd krijg je daarmee inzicht in de kostenstructuur van je onderneming.
          Misschien ontdek je bijvoorbeeld dat je veel meer uitgeeft aan softwareabonnementen dan
          je dacht.
        </p>
        <p>
          Dat maakt uitgaven bijhouden niet alleen nuttig voor je administratie, maar ook voor
          zakelijke beslissingen.
        </p>

        <h2>Bewaar facturen en bonnetjes</h2>
        <p>
          Bij een zakelijke uitgave hoort vaak een factuur, bon of ander bewijsstuk. Bewaar deze
          documenten goed.
        </p>
        <p>Dat helpt om later te kunnen onderbouwen:</p>
        <ul>
          <li>wat je hebt gekocht;</li>
          <li>wanneer je het hebt gekocht;</li>
          <li>bij welke leverancier;</li>
          <li>hoeveel je hebt betaald;</li>
          <li>hoeveel btw in rekening is gebracht.</li>
        </ul>
        <p>
          Wacht bij voorkeur niet tot het einde van het kwartaal om alles uit te zoeken. Een
          praktische routine is:
        </p>
        <ol>
          <li>Je doet een zakelijke aankoop.</li>
          <li>Je bewaart de factuur of bon.</li>
          <li>Je registreert de uitgave.</li>
          <li>Je controleert het btw-bedrag.</li>
          <li>Klaar.</li>
        </ol>
        <p>
          Hoe sneller je dit doet, hoe kleiner de kans dat bonnetjes verdwijnen of je later niet
          meer weet waar een betaling voor was.
        </p>

        <h2>Btw op zakelijke uitgaven bijhouden</h2>
        <p>
          Op veel zakelijke aankopen wordt btw in rekening gebracht. Als ondernemer kun je btw op
          zakelijke kosten onder voorwaarden als voorbelasting aftrekken. Niet iedere uitgave en
          niet ieder btw-bedrag komt daarvoor in aanmerking.
        </p>
        <p>
          Toch is het belangrijk om bij je uitgaven vast te leggen hoeveel btw je hebt betaald.
          Daardoor kun je bijvoorbeeld zien:
        </p>
        <ul>
          <li>
            <strong>Btw op verkoopfacturen:</strong> €1.020
          </li>
          <li>
            <strong>Geregistreerde btw op uitgaven:</strong> €260
          </li>
          <li>
            <strong>Verschil:</strong> €760
          </li>
        </ul>
        <p>
          Dat geeft meer inzicht dan wanneer je alleen de btw op je verkoopfacturen bekijkt.
        </p>
        <p>
          Let op: een overzicht in je administratie bepaalt niet automatisch hoeveel btw je
          uiteindelijk moet betalen of mag aftrekken. Daarvoor gelden de fiscale regels die op jouw
          situatie van toepassing zijn.
        </p>
        <p>
          Lees verder:{' '}
          <TextLink href="/blogs/btw-zakelijke-kosten-aftrekken">
            Btw aftrekken van zakelijke kosten: hoe werkt het?
          </TextLink>
        </p>

        <h2>Houd terugkerende uitgaven apart bij</h2>
        <p>
          Veel zakelijke kosten komen iedere maand, ieder kwartaal of ieder jaar terug. Denk aan:
        </p>
        <ul>
          <li>software;</li>
          <li>hosting;</li>
          <li>domeinnamen;</li>
          <li>verzekeringen;</li>
          <li>telefoon;</li>
          <li>internet;</li>
          <li>huur;</li>
          <li>online diensten.</li>
        </ul>
        <p>Een abonnement van €20 per maand lijkt misschien klein.</p>
        <p>Maar vijf abonnementen van gemiddeld €20 zijn samen al:</p>
        <p>
          <strong>€100 per maand</strong>
        </p>
        <p>
          oftewel: <strong>€1.200 per jaar</strong>
        </p>
        <p>
          Daarom is het verstandig om terugkerende kosten niet uit het oog te verliezen. Gebruik je
          software om je uitgaven bij te houden, dan is het handig wanneer je een terugkerende
          uitgave één keer kunt registreren in plaats van iedere maand dezelfde kosten opnieuw in
          te voeren.
        </p>
        <p>In FactuurBaas kun je daarom aangeven dat een uitgave terugkerend is.</p>

        <h2>Zakelijke uitgaven bijhouden in Excel</h2>
        <p>
          Je kunt je zakelijke uitgaven natuurlijk in Excel of Google Sheets bijhouden. Een
          eenvoudige spreadsheet kan kolommen bevatten voor:
        </p>
        <div className="my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[520px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-3 py-2.5 font-semibold text-deep-blue">Datum</th>
                <th className="px-3 py-2.5 font-semibold text-deep-blue">Leverancier</th>
                <th className="px-3 py-2.5 font-semibold text-deep-blue">Omschrijving</th>
                <th className="px-3 py-2.5 font-semibold text-deep-blue">Categorie</th>
                <th className="px-3 py-2.5 text-right font-semibold text-deep-blue">Excl. btw</th>
                <th className="px-3 py-2.5 text-right font-semibold text-deep-blue">Btw</th>
                <th className="px-3 py-2.5 text-right font-semibold text-deep-blue">Totaal</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-3 py-2.5 text-slate-600">05-09-2026</td>
                <td className="px-3 py-2.5 text-slate-600">Adobe</td>
                <td className="px-3 py-2.5 text-slate-600">Creative Cloud</td>
                <td className="px-3 py-2.5 text-slate-600">Software</td>
                <td className="px-3 py-2.5 text-right text-slate-800">€50,00</td>
                <td className="px-3 py-2.5 text-right text-slate-800">€10,50</td>
                <td className="px-3 py-2.5 text-right text-slate-800">€60,50</td>
              </tr>
              <tr>
                <td className="px-3 py-2.5 text-slate-600">08-09-2026</td>
                <td className="px-3 py-2.5 text-slate-600">Drukkerij</td>
                <td className="px-3 py-2.5 text-slate-600">Flyers</td>
                <td className="px-3 py-2.5 text-slate-600">Marketing</td>
                <td className="px-3 py-2.5 text-right text-slate-800">€100,00</td>
                <td className="px-3 py-2.5 text-right text-slate-800">€21,00</td>
                <td className="px-3 py-2.5 text-right text-slate-800">€121,00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Voor een startende zzp&apos;er met weinig transacties kan dat prima werken. Het nadeel
          ontstaat wanneer je daarnaast ook ergens anders je facturen, openstaande bedragen,
          klanten, btw en uren bijhoudt.
        </p>
        <p>
          Je krijgt dan steeds meer losse bestanden en systemen. Daarom kan het praktischer zijn om
          uitgaven te registreren in dezelfde omgeving waarin je ook je facturen beheert.
        </p>

        <h2>Heb je een boekhoudprogramma nodig om uitgaven bij te houden?</h2>
        <p>Niet per se.</p>
        <p>
          Een volledig boekhoudprogramma kan handig zijn als je uitgebreide administratieve
          functies nodig hebt, zoals bankkoppelingen, automatische verwerking, grootboekadministratie
          of intensieve samenwerking met een boekhouder.
        </p>
        <p>Maar als je vooral wilt weten:</p>
        <ul>
          <li>
            <strong>Wat factureer ik?</strong>
          </li>
          <li>
            <strong>Wat geef ik uit?</strong>
          </li>
          <li>
            <strong>Wat staat nog open?</strong>
          </li>
          <li>
            <strong>Hoeveel btw heb ik geregistreerd?</strong>
          </li>
          <li>
            <strong>Wat blijft er ongeveer over?</strong>
          </li>
        </ul>
        <p>dan heb je misschien nog niet al die functionaliteit nodig.</p>
        <p>
          Je kunt eenvoudig beginnen en later overstappen wanneer je administratie complexer wordt.
        </p>
        <p>
          Twijfel je? Doe de{' '}
          <TextLink href="/tools/boekhoudprogramma-check">boekhoudprogramma-check</TextLink>.
        </p>

        <h2>Omzet en uitgaven naast elkaar bijhouden</h2>
        <p>
          Hier wordt het echt interessant. Als je facturen en zakelijke uitgaven los van elkaar
          bijhoudt, moet je zelf steeds verschillende systemen combineren.
        </p>
        <p>
          Houd je ze bij elkaar, dan kun je direct zien hoe je bedrijf ervoor staat. Bijvoorbeeld:
        </p>
        <ul>
          <li>
            <strong>Omzet deze maand:</strong> €4.850
          </li>
          <li>
            <strong>Uitgaven deze maand:</strong> €1.240
          </li>
          <li>
            <strong>Resultaat:</strong> €3.610
          </li>
          <li>
            <strong>Btw te reserveren:</strong> €760
          </li>
          <li>
            <strong>Openstaande facturen:</strong> €900
          </li>
        </ul>
        <p>
          Dat geeft een veel vollediger beeld dan alleen: &ldquo;Deze maand heb ik €4.850
          gefactureerd.&rdquo; Je ziet namelijk ook wat er tegenover die omzet staat.
        </p>

        <h2>Uitgaven bijhouden met FactuurBaas</h2>
        <p>
          FactuurBaas begon als een eenvoudige manier om gratis facturen te maken. Met een gratis
          account kun je inmiddels ook je zakelijke uitgaven bijhouden.
        </p>
        <p>Je registreert per uitgave onder andere:</p>
        <ul>
          <li>omschrijving;</li>
          <li>datum;</li>
          <li>leverancier;</li>
          <li>categorie;</li>
          <li>bedrag exclusief btw;</li>
          <li>btw;</li>
          <li>totaalbedrag.</li>
        </ul>
        <p>
          Heb je een vaste kostenpost? Dan kun je deze als terugkerende uitgave instellen. Je
          facturen en uitgaven komen vervolgens samen op je dashboard.
        </p>
        <p>Daar zie je onder andere:</p>

        <h3>Omzet</h3>
        <p>Wat je deze maand hebt gefactureerd, exclusief btw.</p>

        <h3>Uitgaven</h3>
        <p>Je geregistreerde zakelijke uitgaven.</p>

        <h3>Resultaat</h3>
        <p>Je omzet minus je geregistreerde uitgaven.</p>

        <h3>Btw te reserveren</h3>
        <p>Btw op je verkoopfacturen minus geregistreerde btw op uitgaven.</p>

        <h3>Openstaand</h3>
        <p>Facturen die nog niet als betaald zijn gemarkeerd.</p>

        <p>
          Zo gebruik je FactuurBaas niet alleen om een factuur te maken, maar ook om gedurende de
          maand te zien hoe je bedrijf ervoor staat.
        </p>

        <UitgavenCta
          title="Gratis zakelijke uitgaven bijhouden"
          text="Houd je facturen en uitgaven op één plek en zie automatisch je omzet, uitgaven en resultaat."
          label="Start gratis met uitgaven bijhouden →"
        />

        <h2>Een simpele routine voor je uitgaven</h2>
        <p>
          Uitgaven bijhouden werkt vooral als je het consequent doet. Maak het daarom niet
          ingewikkelder dan nodig.
        </p>
        <p>
          <strong>Na een zakelijke aankoop</strong>
        </p>
        <p>Bewaar de bon of factuur en registreer de uitgave.</p>
        <p>
          <strong>Eén keer per week</strong>
        </p>
        <p>Controleer of je geen kosten bent vergeten.</p>
        <p>
          <strong>Eén keer per maand</strong>
        </p>
        <p>Bekijk je omzet, uitgaven en resultaat.</p>
        <p>
          <strong>Eén keer per kwartaal</strong>
        </p>
        <p>Controleer je administratie en btw voordat je aangifte doet.</p>
        <p>
          Een paar minuten per week is meestal overzichtelijker dan één grote administratiesessie
          aan het einde van het kwartaal.
        </p>

        <h2>Veelgestelde vragen over zakelijke uitgaven bijhouden</h2>

        <h3>Hoe kan ik als zzp&apos;er mijn uitgaven bijhouden?</h3>
        <p>
          Je kunt zakelijke uitgaven bijhouden in een spreadsheet, boekhoudprogramma of een
          eenvoudige administratietool. Registreer in ieder geval gegevens zoals datum, leverancier,
          omschrijving, bedrag en btw en bewaar relevante facturen en bonnetjes.
        </p>

        <h3>Kan ik zakelijke uitgaven gratis bijhouden?</h3>
        <p>
          Ja. Je kunt bijvoorbeeld zelf een spreadsheet maken. Met een gratis FactuurBaas-account
          kun je zakelijke uitgaven daarnaast direct naast je facturen registreren en je omzet,
          uitgaven en resultaat vanuit één dashboard bekijken.
        </p>

        <h3>Welke zakelijke uitgaven moet ik bijhouden?</h3>
        <p>
          Houd kosten bij die betrekking hebben op je onderneming, zoals software, materiaal,
          marketing, zakelijke verzekeringen en andere bedrijfskosten. Of een kostenpost fiscaal
          volledig aftrekbaar is, hangt af van het type uitgave en je situatie.
        </p>

        <h3>Moet ik bonnetjes van zakelijke uitgaven bewaren?</h3>
        <p>
          Bewaar relevante facturen, bonnetjes en andere bewijsstukken bij je administratie. Daarmee
          kun je later aantonen waar een geregistreerde zakelijke uitgave betrekking op had.
        </p>

        <h3>Hoe houd ik terugkerende zakelijke kosten bij?</h3>
        <p>
          Je kunt terugkerende kosten zoals software, hosting en verzekeringen als vaste uitgave
          opnemen. In FactuurBaas kun je aangeven dat een uitgave terugkerend is, zodat je deze niet
          iedere periode opnieuw hoeft in te voeren.
        </p>

        <h3>Kan ik mijn uitgaven en facturen samen bijhouden?</h3>
        <p>
          Ja. Dat is juist handig omdat je daardoor niet alleen je omzet ziet, maar ook je zakelijke
          uitgaven en het verschil daartussen. In FactuurBaas worden je geregistreerde facturen en
          uitgaven samengebracht op je dashboard.
        </p>

        <h2>Kort samengevat</h2>
        <p>
          Zakelijke uitgaven bijhouden geeft je meer inzicht in wat er werkelijk in je onderneming
          gebeurt.
        </p>
        <p>Registreer in ieder geval:</p>
        <ul>
          <li>wat je hebt gekocht;</li>
          <li>wanneer je het hebt gekocht;</li>
          <li>bij welke leverancier;</li>
          <li>hoeveel het kostte;</li>
          <li>hoeveel btw is geregistreerd;</li>
          <li>in welke categorie de uitgave valt.</li>
        </ul>
        <p>
          Bewaar daarnaast je facturen en bonnetjes en vergeet terugkerende kosten niet. Het
          belangrijkste is vervolgens dat je uitgaven niet los bekijkt van je omzet.
        </p>
        <p>
          <strong>Omzet − uitgaven = een veel nuttiger beeld van je bedrijf.</strong>
        </p>
        <p>
          Met FactuurBaas kun je daarom je zakelijke uitgaven naast je facturen bijhouden.
        </p>

        <UitgavenCta label="Gratis uitgaven bijhouden →" />
      </>
    ),
  },
];
