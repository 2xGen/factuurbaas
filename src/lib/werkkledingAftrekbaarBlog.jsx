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
  title = 'Houd je zakelijke kosten overzichtelijk bij',
  text = 'Registreer zakelijke uitgaven en btw naast je facturen en zie wat er van je omzet overblijft.',
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

export const werkkledingAftrekbaarArticle = {
  slug: 'werkkleding-aftrekbaar-zzp',
  relatedSlugs: [
    'zakelijke-kosten-zzp',
    'zakelijke-uitgaven-bijhouden-zzp',
    'btw-zakelijke-kosten-aftrekken',
    'zakelijke-kosten-prive-betaald',
    'laptop-aftrekbaar-zzp',
    'telefoon-aftrekbaar-zzp',
    'reiskosten-aftrekken-zzp',
  ],
  metaTitle: "Werkkleding aftrekbaar als zzp'er? Dit zijn de regels",
  title: "Werkkleding aftrekbaar als zzp'er? Dit zijn de regels",
  excerpt:
    "Werkkleding aftrekbaar als zzp'er? Lees welke kleding je mag aftrekken, wanneer een bedrijfslogo nodig is en hoe de 70 cm²-regel werkt.",
  keywords:
    "werkkleding aftrekbaar zzp, werkkleding zzp, kleding aftrekbaar zzp, werkkleding aftrekken, bedrijfskleding aftrekbaar, kleding met logo aftrekbaar, werkschoenen aftrekbaar zzp, pak aftrekbaar zzp, werkkleding logo 70 cm2",
  image: {
    url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/Werkkleding%20aftrekbaar%20als%20zzper.jpg',
    alt: "Werkkleding aftrekbaar als zzp'er — bedrijfskleding en logo",
  },
  datePublished: '2026-09-19',
  dateModified: '2026-09-19',
  faq: [
    {
      question: "Is werkkleding aftrekbaar als zzp'er?",
      answer:
        'Ja. Kleding die je (bijna) uitsluitend tijdens je werkzaamheden kunt dragen kan als werkkleding volledig aftrekbaar zijn.',
    },
    {
      question: 'Is gewone kleding voor mijn werk aftrekbaar?',
      answer:
        'In beginsel niet. Gewone kleding die ook buiten je onderneming gedragen kan worden is geen werkkleding, zelfs wanneer je deze speciaal voor je werk hebt gekocht.',
    },
    {
      question: "Is een pak aftrekbaar als zzp'er?",
      answer:
        'Een normaal zakelijk pak is in beginsel geen aftrekbare werkkleding, omdat het ook buiten je onderneming gedragen kan worden. Een kwalificerend bedrijfslogo kan de beoordeling veranderen.',
    },
    {
      question: 'Hoe groot moet een logo op werkkleding zijn?',
      answer:
        'Als kleding ook buiten je onderneming gedragen kan worden, moeten één of meer duidelijk zichtbare beeldmerken die naar je onderneming verwijzen gezamenlijk minimaal 70 cm² per kledingstuk beslaan.',
    },
    {
      question: 'Is een polo met logo aftrekbaar?',
      answer:
        'Dat kan. Als de polo normaal ook privé gedragen kan worden, moet het zichtbare bedrijfslogo of de gezamenlijke beeldmerken minimaal 70 cm² per kledingstuk zijn.',
    },
    {
      question: 'Is een overall aftrekbaar?',
      answer:
        'Een overall is een voorbeeld van kleding die door zijn aard als werkkleding kan kwalificeren en kan daarom in beginsel volledig aftrekbaar zijn.',
    },
    {
      question: 'Zijn veiligheidsschoenen aftrekbaar?',
      answer:
        'Specifiek veiligheidsschoeisel dat door zijn aard voor de werkzaamheden is bedoeld kan als zakelijke werkkleding kwalificeren. Normale schoenen zijn niet automatisch aftrekbaar doordat je ze tijdens het werk draagt.',
    },
    {
      question: "Zijn werkschoenen aftrekbaar als zzp'er?",
      answer:
        'Dat hangt af van het soort schoenen. Specifiek beroeps- of veiligheidsschoeisel kan kwalificeren. Normale schoenen of sneakers die ook privé kunnen worden gedragen zijn in beginsel geen werkkleding.',
    },
    {
      question: 'Is sportkleding aftrekbaar voor een personal trainer?',
      answer:
        'Normale sportkleding is ook privé draagbaar en is daarom niet automatisch werkkleding. Kleding met een voldoende groot en zichtbaar bedrijfslogo kan wel aan de voorwaarden voor werkkleding voldoen.',
    },
    {
      question: 'Kan ik btw op werkkleding aftrekken?',
      answer:
        'Als sprake is van een zakelijke aankoop en je aan de normale voorwaarden voor btw-aftrek voldoet, kan de btw op werkkleding als voorbelasting aftrekbaar zijn.',
    },
  ],
  content: (
    <>
      <p>
        Koop je als zzp&apos;er kleding speciaal voor je werk? Dan betekent dat niet automatisch
        dat je de kosten mag aftrekken.
      </p>
      <p>
        De Belastingdienst maakt een duidelijk onderscheid tussen{' '}
        <strong>werkkleding</strong> en gewone kleding.
      </p>
      <p>
        Echte werkkleding kan volledig aftrekbaar zijn. Gewone kleding die je ook privé zou
        kunnen dragen is in principe niet aftrekbaar, zelfs wanneer je deze alleen voor je werk
        koopt.
      </p>
      <p>
        Er is wel een belangrijke uitzondering: kleding die ook privé gedragen kan worden, kan
        toch als werkkleding gelden als er een duidelijk zichtbaar bedrijfslogo of ander
        beeldmerk op staat met een totale oppervlakte van minimaal{' '}
        <strong>70 cm² per kledingstuk</strong>.
      </p>
      <p>
        In deze gids lees je wanneer kleding aftrekbaar is, hoe de 70 cm²-regel werkt en hoe het
        zit met veiligheidsschoenen, pakken, bedrijfskleding en btw.
      </p>

      <UitgavenCta />

      <h2>Wanneer is werkkleding aftrekbaar?</h2>
      <p>
        Werkkleding is volgens de Belastingdienst kleding die je{' '}
        <strong>(bijna) alleen voor je onderneming kunt dragen</strong>.
      </p>
      <p>Denk bijvoorbeeld aan:</p>
      <ul>
        <li>een overall;</li>
        <li>een uniform;</li>
        <li>bepaalde beschermende werkkleding;</li>
        <li>
          andere kleding die door de aard of uitstraling vrijwel uitsluitend geschikt is voor het
          werk.
        </li>
      </ul>
      <p>
        Voldoet kleding hieraan? Dan zijn de kosten voor de inkomstenbelasting in beginsel
        volledig aftrekbaar.
      </p>
      <p>
        De Belastingdienst maakt in het overzicht van zakelijke kosten expliciet onderscheid
        tussen:
      </p>
      <p>
        <strong>Werkkleding → 100% aftrekbaar</strong>
      </p>
      <p>en:</p>
      <p>
        <strong>Kleding die geen werkkleding is → 0% aftrekbaar</strong>
      </p>
      <p>Het verschil is dus belangrijk.</p>

      <h2>Gewone kleding is niet aftrekbaar</h2>
      <p>Een veelgemaakte gedachte is:</p>
      <blockquote className="border-l-4 border-slate-300 pl-4 italic text-slate-600">
        Ik heb deze kleding speciaal gekocht voor mijn werk, dus het zijn zakelijke kosten.
      </blockquote>
      <p>Zo eenvoudig werkt het niet.</p>
      <p>
        Gewone kleding heeft ook een persoonlijk karakter en is daarom in beginsel niet
        aftrekbaar. Denk bijvoorbeeld aan:
      </p>
      <ul>
        <li>spijkerbroek;</li>
        <li>blouse;</li>
        <li>overhemd;</li>
        <li>trui;</li>
        <li>jas;</li>
        <li>nette schoenen;</li>
        <li>sneakers;</li>
        <li>pak.</li>
      </ul>
      <p>
        Dat je deze kleding alleen tijdens je werk draagt, maakt gewone kleding niet automatisch
        tot fiscale werkkleding. De vraag is vooral of de kleding naar haar aard geschikt is om
        ook buiten je onderneming te dragen.
      </p>

      <h2>Een pak voor zakelijke afspraken aftrekken?</h2>
      <p>
        Stel dat je consultant bent en speciaal voor klantafspraken een pak van €700 koopt. Je
        draagt het pak alleen:
      </p>
      <ul>
        <li>bij klanten;</li>
        <li>tijdens presentaties;</li>
        <li>op zakelijke evenementen.</li>
      </ul>
      <p>
        Toch is een normaal pak ook geschikt om privé te dragen. Bijvoorbeeld tijdens:
      </p>
      <ul>
        <li>een bruiloft;</li>
        <li>feest;</li>
        <li>diner;</li>
        <li>andere formele gelegenheid.</li>
      </ul>
      <p>
        Het pak wordt daarom niet automatisch werkkleding doordat jij besluit het uitsluitend
        zakelijk te dragen. Gewone representatieve kleding blijft in beginsel niet aftrekbaar.
      </p>

      <h2>Werkkleding met bedrijfslogo</h2>
      <p>
        Er bestaat een belangrijke uitzondering voor kleding die normaal gesproken ook privé
        gedragen zou kunnen worden. Heeft de kleding een duidelijk zichtbaar beeldmerk dat
        verwijst naar je onderneming? Dan kan de kleding toch als werkkleding worden aangemerkt.
      </p>
      <p>
        Daarbij geldt een minimale oppervlakte. Het beeldmerk of de gezamenlijke beeldmerken
        moeten per kledingstuk minimaal <strong>70 cm²</strong> groot zijn. Het logo moet
        bovendien verwijzen naar je onderneming.
      </p>

      <h2>Hoe groot is 70 cm²?</h2>
      <p>70 cm² is een oppervlakte, niet een lengte. Een logo van bijvoorbeeld:</p>
      <p>
        <strong>10 cm × 7 cm = 70 cm²</strong>
      </p>
      <p>voldoet qua oppervlakte. Een logo van:</p>
      <p>
        <strong>8 cm × 5 cm = 40 cm²</strong>
      </p>
      <p>
        is op zichzelf te klein. Heb je meerdere duidelijk zichtbare beeldmerken op hetzelfde
        kledingstuk, dan kan de gezamenlijke oppervlakte relevant zijn. Het gaat om minimaal 70
        cm² <strong>per kledingstuk</strong>.
      </p>

      <h2>Voorbeeld: polo met bedrijfslogo</h2>
      <p>
        Je koopt een normale polo voor €45. Zonder logo zou je deze polo ook gemakkelijk privé
        kunnen dragen. Je laat vervolgens duidelijk zichtbaar je bedrijfslogo op de polo drukken.
        Het logo is:
      </p>
      <p>
        <strong>10 cm × 8 cm = 80 cm²</strong>
      </p>
      <p>
        en verwijst duidelijk naar je onderneming. De polo kan daardoor voldoen aan de
        voorwaarden voor werkkleding. De kosten kunnen dan in beginsel als zakelijke kosten
        worden verwerkt.
      </p>

      <h2>Voorbeeld: klein logo op een T-shirt</h2>
      <p>
        Je koopt een T-shirt voor je onderneming. Op de borst staat een klein bedrijfslogo van:
      </p>
      <p>
        <strong>5 cm × 5 cm = 25 cm²</strong>
      </p>
      <p>
        De kleding is verder een normaal T-shirt dat je ook privé kunt dragen. Het logo is
        kleiner dan 70 cm². Alleen dat kleine logo is daarom onvoldoende om het T-shirt via deze
        regel als werkkleding te laten kwalificeren.
      </p>

      <h2>Mag je meerdere logo&apos;s bij elkaar optellen?</h2>
      <p>
        De Belastingdienst spreekt over één of meer duidelijk zichtbare beeldmerken met
        gezamenlijk een oppervlakte van minimaal 70 cm² per kledingstuk. Je kunt dus bijvoorbeeld
        een logo op de borst en een logo op de rug hebben.
      </p>
      <p>
        Als de beeldmerken voldoen aan de voorwaarden en gezamenlijk minimaal 70 cm² groot zijn,
        kan aan de oppervlakte-eis worden voldaan. Ze moeten wel duidelijk zichtbaar zijn en
        verwijzen naar je onderneming.
      </p>

      <h2>Moet het logo permanent op de kleding staan?</h2>
      <p>
        Het uitgangspunt is dat de kleding zelf voorzien is van het beeldmerk. Een tijdelijk
        visitekaartje, losse sticker of andere eenvoudige constructie om gewone kleding tijdens
        werktijd tijdelijk van een bedrijfsnaam te voorzien, maakt gewone kleding niet vanzelf
        fiscale werkkleding.
      </p>
      <p>
        Wil je gewone bedrijfskleding via de logo-regel als werkkleding behandelen, zorg dan voor
        een duidelijk zichtbaar en daadwerkelijk op het kledingstuk aangebracht bedrijfslogo.
      </p>

      <h2>Overall aftrekbaar als zzp&apos;er</h2>
      <p>
        Een overall is een klassiek voorbeeld van werkkleding. Een overall die je gebruikt tijdens
        bijvoorbeeld:
      </p>
      <ul>
        <li>bouwwerkzaamheden;</li>
        <li>schilderwerk;</li>
        <li>onderhoud;</li>
        <li>installatiewerk;</li>
        <li>technische werkzaamheden;</li>
      </ul>
      <p>
        is door zijn aard veel duidelijker verbonden met het werk dan een normale broek of trui.
        Een dergelijke overall kan daarom als werkkleding kwalificeren.
      </p>
      <p>
        Je hebt dan niet per se een bedrijfslogo nodig wanneer de kleding naar haar aard al
        vrijwel uitsluitend geschikt is om tijdens het werk te dragen.
      </p>

      <h2>Veiligheidskleding aftrekbaar</h2>
      <p>
        Beschermende kleding die je nodig hebt voor je werkzaamheden kan eveneens een duidelijk
        zakelijk karakter hebben. Denk bijvoorbeeld aan:
      </p>
      <ul>
        <li>veiligheidsvest;</li>
        <li>beschermende overall;</li>
        <li>beschermende jas;</li>
        <li>andere gespecialiseerde kleding voor het uitvoeren van je werkzaamheden.</li>
      </ul>
      <p>
        Of iets fiscaal als werkkleding kwalificeert, hangt uiteindelijk af van de aard van het
        kledingstuk en het gebruik. Een kledingstuk dat duidelijk specifiek voor het werk is
        gemaakt, is veel eenvoudiger als werkkleding te kwalificeren dan normale dagelijkse
        kleding.
      </p>

      <h2>Veiligheidsschoenen aftrekbaar als zzp&apos;er</h2>
      <p>
        Schoeisel valt fiscaal ook onder kleding. Normale schoenen of sneakers zijn daarom niet
        automatisch aftrekbaar omdat je ze tijdens het werk draagt.
      </p>
      <p>
        Bij specifieke veiligheidsschoenen ligt dat anders. Denk bijvoorbeeld aan schoenen met
        eigenschappen die specifiek nodig zijn voor je werkzaamheden, zoals beschermend
        veiligheidsschoeisel. Dergelijke schoenen kunnen door hun specifieke functie veel
        duidelijker als zakelijke werkkleding worden aangemerkt.
      </p>
      <p>
        Gewone nette schoenen voor klantafspraken blijven daarentegen normale kleding.
      </p>

      <h2>Sneakers voor werk aftrekken?</h2>
      <p>
        In principe niet wanneer het gewone sneakers zijn die ook privé kunnen worden gedragen.
        Stel dat je als personal trainer iedere dag sneakers draagt tijdens je werkzaamheden. Dat
        je ze intensief voor je werk gebruikt betekent niet automatisch dat normale sneakers
        fiscale werkkleding zijn.
      </p>
      <p>Hetzelfde kan gelden voor gewone:</p>
      <ul>
        <li>sportschoenen;</li>
        <li>trainingsbroeken;</li>
        <li>T-shirts;</li>
        <li>sportshirts.</li>
      </ul>
      <p>
        Kun je de kleding normaal gesproken ook privé gebruiken, dan gelden de normale
        beperkingen voor kleding.
      </p>

      <h2>Sportkleding voor een personal trainer</h2>
      <p>
        Dit is een goed voorbeeld van het verschil tussen praktisch zakelijk gebruik en fiscale
        aftrekbaarheid. Een personal trainer kan sportkleding dagelijks nodig hebben voor het
        werk. Maar een normale sportbroek of sportshirt is ook prima privé te dragen.
      </p>
      <p>
        Daardoor is het niet automatisch aftrekbare werkkleding. Laat je op het kledingstuk een
        duidelijk zichtbaar bedrijfslogo aanbrengen dat aan de 70 cm²-eis voldoet? Dan kan de
        situatie anders worden.
      </p>

      <h2>Werkkleding voor bouw en techniek</h2>
      <p>Voor beroepen in bijvoorbeeld:</p>
      <ul>
        <li>bouw;</li>
        <li>installatie;</li>
        <li>techniek;</li>
        <li>schilderwerk;</li>
        <li>onderhoud;</li>
        <li>logistiek;</li>
      </ul>
      <p>
        is het vaak makkelijker om kleding als werkkleding te kwalificeren. Denk aan een overall
        of andere duidelijk beroepsspecifieke kleding.
      </p>
      <p>
        Een gewone spijkerbroek die je tijdens bouwwerkzaamheden draagt is daarentegen niet
        automatisch werkkleding. Ook niet wanneer de broek tijdens het werk vies wordt.
      </p>

      <h2>Kleding voor horeca</h2>
      <p>
        Werk je zelfstandig in de horeca? Dan kan bijvoorbeeld een herkenbaar uniform of
        beroepsspecifieke kleding als werkkleding kwalificeren.
      </p>
      <p>
        Maar een normale zwarte broek en een normaal wit overhemd worden niet automatisch
        werkkleding alleen omdat een restaurant die combinatie als dresscode gebruikt. Is kleding
        ook normaal buiten het werk draagbaar, dan moet je opnieuw naar de voorwaarden voor
        werkkleding kijken.
      </p>

      <h2>Kleding voor fotografen en videomakers</h2>
      <p>
        Een fotograaf die zwarte kleding draagt om tijdens evenementen minder op te vallen kan
        daar een duidelijke zakelijke reden voor hebben. Maar een normale zwarte broek en zwart
        T-shirt blijven gewone kleding die ook privé gedragen kan worden.
      </p>
      <p>
        Een zakelijk motief alleen is bij kleding dus niet altijd voldoende. Dit is precies
        waarom kleding fiscaal strenger wordt behandeld dan bijvoorbeeld software of een
        treinkaartje.
      </p>

      <h2>Kleding voor influencers en contentmakers</h2>
      <p>
        Ook bij influencers en contentmakers kan kleding een directe rol spelen in het verdienen
        van omzet. Toch betekent dat niet automatisch dat alle kledingkosten aftrekbaar zijn.
      </p>
      <p>
        De Belastingdienst heeft in 2025 zelfs een specifiek kennisgroepstandpunt gepubliceerd
        over kleding die een influencer aanschaft voor unboxingvideo&apos;s. Daaruit blijkt hoe
        belangrijk het onderscheid is tussen:
      </p>
      <ul>
        <li>de zakelijke functie van een aankoop;</li>
        <li>en de specifieke wettelijke aftrekbeperking voor kleding.</li>
      </ul>
      <p>
        Zelfs wanneer kleding voor zakelijke content wordt gekocht, kan de aftrek dus worden
        beperkt als de kleding niet als werkkleding kwalificeert.
      </p>

      <h2>Kleding met je bedrijfsnaam erop</h2>
      <p>Laat je normale kleding bedrukken met:</p>
      <ul>
        <li>je bedrijfsnaam;</li>
        <li>logo;</li>
        <li>ander herkenbaar beeldmerk;</li>
      </ul>
      <p>
        dan kan deze via de logo-regel als werkkleding kwalificeren. Daarvoor moet het beeldmerk:
      </p>
      <ul>
        <li>duidelijk zichtbaar zijn;</li>
        <li>naar je onderneming verwijzen;</li>
        <li>
          per kledingstuk minimaal 70 cm² beslaan, eventueel via meerdere beeldmerken samen.
        </li>
      </ul>
      <p>Een klein subtiel logo is dus niet automatisch voldoende.</p>

      <h2>Jas met bedrijfslogo aftrekbaar</h2>
      <p>
        Een normale jas is in beginsel gewone kleding. Maar laat je een duidelijk zichtbaar
        bedrijfslogo van minimaal 70 cm² op de jas aanbrengen? Dan kan de jas voldoen aan de
        voorwaarden voor werkkleding.
      </p>
      <p>Dat kan interessant zijn voor bijvoorbeeld:</p>
      <ul>
        <li>hoveniers;</li>
        <li>bezorgers;</li>
        <li>klusbedrijven;</li>
        <li>coaches;</li>
        <li>monteurs;</li>
        <li>schoonmaakbedrijven;</li>
        <li>evenementenbedrijven.</li>
      </ul>
      <p>
        Hetzelfde principe kan gelden voor andere normale kledingstukken die van een voldoende
        groot bedrijfslogo worden voorzien.
      </p>

      <h2>Bedrijfskleding voor marketing</h2>
      <p>
        Misschien laat je T-shirts, hoodies of jassen bedrukken met je logo om tijdens
        werkzaamheden reclame te maken voor je onderneming. Als je die kleding zelf draagt, zijn
        voor de fiscale kwalificatie als werkkleding de specifieke kledingregels relevant.
      </p>
      <p>
        Een groot genoeg zichtbaar beeldmerk dat naar je onderneming verwijst kan daarbij het
        verschil maken. Alleen zeggen dat de kleding “marketing” is, maakt normale kleding niet
        automatisch aftrekbaar.
      </p>

      <h2>Kleding voor klanten weggeven</h2>
      <p>
        Koop je kleding niet voor jezelf, maar bijvoorbeeld als merchandise of relatiegeschenk?
        Dan is de fiscale vraag anders. De kleding is dan niet jouw eigen werkkleding.
      </p>
      <p>Afhankelijk van wat je ermee doet kan sprake zijn van bijvoorbeeld:</p>
      <ul>
        <li>handelsvoorraad;</li>
        <li>marketingmateriaal;</li>
        <li>relatiegeschenk.</li>
      </ul>
      <p>
        Daar kunnen andere regels voor inkomstenbelasting en btw op van toepassing zijn. Deze
        gids gaat specifiek over kleding die je als ondernemer zelf tijdens je werkzaamheden
        draagt.
      </p>

      <h2>Kosten van een bedrijfslogo laten drukken</h2>
      <p>
        Laat je bedrijfslogo op kwalificerende bedrijfskleding drukken? Dan zijn de kosten van
        het bedrukken onderdeel van de zakelijke kosten rond de werkkleding.
      </p>
      <p>Bewaar daarom zowel:</p>
      <ul>
        <li>de factuur van de kleding;</li>
        <li>de factuur voor het bedrukken;</li>
      </ul>
      <p>
        als deze apart worden gefactureerd. Zorg ook dat je kunt onderbouwen hoe groot en
        zichtbaar het logo op het kledingstuk is.
      </p>

      <h2>Btw op werkkleding aftrekken</h2>
      <p>
        Naast de inkomstenbelasting speelt btw. Als de kleding daadwerkelijk een zakelijke
        uitgave is en je gebruikt deze voor activiteiten waarvoor je recht hebt op aftrek van
        voorbelasting, kan de btw onder de normale voorwaarden aftrekbaar zijn.
      </p>
      <p>
        Je hebt daarvoor onder andere een correcte btw-factuur nodig. Bij gewone privékleding
        kun je de btw niet zomaar als zakelijke voorbelasting aftrekken omdat je ondernemer bent.
        Het onderscheid tussen werkkleding en gewone kleding blijft dus belangrijk.
      </p>
      <p>
        Lees ook:{' '}
        <TextLink href="/blogs/btw-zakelijke-kosten-aftrekken">
          Btw aftrekken van zakelijke kosten: hoe werkt het? →
        </TextLink>
      </p>

      <h2>Werkkleding onder de KOR</h2>
      <p>
        Doe je mee aan de kleineondernemersregeling? Dan trek je in beginsel geen btw op
        zakelijke kosten af. Dat geldt ook voor werkkleding.
      </p>
      <p>Stel dat kwalificerende werkkleding kost:</p>
      <ul>
        <li>
          <strong>Excl. btw:</strong> €200
        </li>
        <li>
          <strong>Btw:</strong> €42
        </li>
        <li>
          <strong>Totaal:</strong> €242
        </li>
      </ul>
      <p>
        Zonder recht op btw-aftrek kun je de €42 niet als voorbelasting terugvragen. Voor de
        winstberekening kan de niet-aftrekbare btw vervolgens onderdeel zijn van de zakelijke
        kosten.
      </p>

      <h2>Wassen van werkkleding aftrekbaar?</h2>
      <p>
        Kosten die rechtstreeks samenhangen met zakelijke werkkleding kunnen eveneens een
        zakelijk karakter hebben. Laat je bijvoorbeeld kwalificerende werkkleding professioneel
        reinigen, dan kunnen die reinigingskosten zakelijke kosten zijn.
      </p>
      <p>
        Bij thuis wassen wordt de praktische onderbouwing lastiger, omdat elektriciteit, water en
        wasmiddel meestal samen met privéwas worden gebruikt. Voer daarom niet zonder goede
        onderbouwing willekeurige bedragen voor thuis wassen op als zakelijke kosten.
      </p>

      <h2>Reparatie van werkkleding</h2>
      <p>
        Laat je echte werkkleding repareren? Dan kunnen ook de reparatiekosten een zakelijk
        karakter hebben. Bijvoorbeeld het herstellen van:
      </p>
      <ul>
        <li>een overall;</li>
        <li>beschermende kleding;</li>
        <li>andere kwalificerende werkkleding.</li>
      </ul>
      <p>
        Het uitgangspunt blijft dat het kledingstuk zelf daadwerkelijk als werkkleding
        kwalificeert.
      </p>

      <h2>Kleding privé betaald maar zakelijk gebruikt</h2>
      <p>
        Betaal je echte werkkleding vanaf je privérekening? Dan wordt de aankoop daardoor niet
        automatisch privé. Bij een eenmanszaak bepaalt de gebruikte bankrekening niet of een
        uitgave zakelijk is.
      </p>
      <p>
        Een daadwerkelijk zakelijke aankoop die je privé hebt betaald kun je in je zakelijke
        administratie verwerken.
      </p>
      <p>
        Lees:{' '}
        <TextLink href="/blogs/zakelijke-kosten-prive-betaald">
          Zakelijke kosten privé betaald: hoe verwerk je die? →
        </TextLink>
      </p>

      <h2>Gewone kleding zakelijk betaald</h2>
      <p>
        Andersom geldt hetzelfde. Koop je een normale jas voor privégebruik vanaf je zakelijke
        rekening? Dan wordt de jas daardoor niet ineens werkkleding.
      </p>
      <p>
        De betaling moet dan niet als zakelijke kledingkosten worden verwerkt. Bij een
        eenmanszaak is sprake van een privé-uitgave uit het ondernemingsvermogen.
      </p>
      <p>
        Lees:{' '}
        <TextLink href="/blogs/privekosten-zakelijk-betalen">
          Privékosten zakelijk betalen: wat mag wel en niet? →
        </TextLink>
      </p>

      <h2>Voorbeeld: schilder koopt een overall</h2>
      <p>
        Een zelfstandig schilder koopt een overall voor <strong>€80 excl. btw</strong>. De
        overall wordt gebruikt tijdens schilderwerkzaamheden en is naar zijn aard werkkleding.
        De €80 kan in beginsel volledig als zakelijke kosten worden verwerkt.
      </p>
      <p>
        Als de ondernemer recht heeft op btw-aftrek en aan de overige voorwaarden voldoet, kan de
        btw eveneens als voorbelasting worden afgetrokken.
      </p>

      <h2>Voorbeeld: consultant koopt een pak</h2>
      <p>
        Een consultant koopt een pak van <strong>€900</strong>. Hij draagt het uitsluitend
        tijdens klantafspraken. Het pak is echter normale kleding die ook buiten de onderneming
        gedragen kan worden. Er staat geen kwalificerend bedrijfslogo op.
      </p>
      <p>
        Het pak is daarom geen fiscale werkkleding. De kosten zijn niet aftrekbaar als
        werkkleding.
      </p>

      <h2>Voorbeeld: hovenier koopt een jas met logo</h2>
      <p>
        Een hovenier koopt een normale jas voor €120. De jas zou normaal ook privé gedragen
        kunnen worden. Hij laat er duidelijk zichtbaar zijn bedrijfslogo op aanbrengen. Het logo
        is:
      </p>
      <p>
        <strong>10 cm × 8 cm = 80 cm²</strong>
      </p>
      <p>
        en verwijst naar zijn onderneming. Daarmee kan de jas voldoen aan de logo-eis voor
        werkkleding.
      </p>

      <h2>Voorbeeld: coach koopt polo&apos;s met klein logo</h2>
      <p>
        Een coach koopt vijf polo&apos;s die hij tijdens lessen draagt. Iedere polo heeft een
        klein logo van:
      </p>
      <p>
        <strong>5 cm × 5 cm = 25 cm²</strong>
      </p>
      <p>
        De polo&apos;s zijn normale kleding en het beeldmerk haalt de grens van 70 cm² niet. De
        polo&apos;s voldoen alleen door dit kleine logo dus niet aan de logo-eis voor
        werkkleding. Een logo laten aanbrengen is dus niet voldoende: de afmetingen zijn
        belangrijk.
      </p>

      <h2>Voorbeeld: twee logo&apos;s op één kledingstuk</h2>
      <p>Je hebt op een hoodie:</p>
      <ul>
        <li>
          <strong>Logo voorzijde:</strong> 40 cm²
        </li>
        <li>
          <strong>Logo achterzijde:</strong> 50 cm²
        </li>
      </ul>
      <p>
        Samen: <strong>90 cm²</strong>
      </p>
      <p>
        Als beide beeldmerken duidelijk zichtbaar zijn en naar je onderneming verwijzen, is de
        gezamenlijke oppervlakte groter dan 70 cm². Daarmee kan aan de oppervlaktevoorwaarde
        worden voldaan.
      </p>

      <h2>Werkkleding bijhouden in je administratie</h2>
      <p>Bewaar voor zakelijke werkkleding:</p>
      <ul>
        <li>aankoopfactuur;</li>
        <li>datum;</li>
        <li>leverancier;</li>
        <li>bedrag exclusief btw;</li>
        <li>btw;</li>
        <li>totaalbedrag;</li>
        <li>eventueel factuur voor bedrukking.</li>
      </ul>
      <p>
        Bij kleding die dankzij een bedrijfslogo als werkkleding kwalificeert, is het verstandig
        ook te kunnen aantonen dat het logo aan de voorwaarden voldoet. Je kunt bijvoorbeeld een
        foto van de bedrijfskleding en de afmetingen van het logo bewaren bij je administratie.
      </p>

      <h2>Werkkleding bijhouden met FactuurBaas</h2>
      <p>
        Kwalificeert kleding daadwerkelijk als zakelijke werkkleding? Dan kun je de uitgave
        opnemen bij je zakelijke kosten. Bijvoorbeeld:
      </p>
      <ul>
        <li>
          <strong>Omschrijving</strong> — Bedrijfskleding met logo
        </li>
        <li>
          <strong>Categorie</strong> — Kantoor &amp; materiaal / Overig
        </li>
        <li>
          <strong>Excl. btw</strong> — €200
        </li>
        <li>
          <strong>Btw</strong> — €42
        </li>
        <li>
          <strong>Totaal</strong> — €242
        </li>
      </ul>
      <p>
        Zo worden de kosten meegenomen in je overzicht van zakelijke uitgaven. Let wel op dat je
        gewone kleding niet als zakelijke uitgave registreert alleen omdat je deze tijdens je
        werk draagt.
      </p>

      <UitgavenCta
        title="Houd je zakelijke uitgaven overzichtelijk bij"
        text="Registreer echte zakelijke kosten en btw naast je facturen en zie wat er van je omzet overblijft."
      />

      <h2>Veelgemaakte fouten</h2>

      <h3>Denken dat alle kleding voor werk aftrekbaar is</h3>
      <p>
        Dat je kleding speciaal voor je werk koopt, maakt het nog geen fiscale werkkleding.
      </p>

      <h3>Een zakelijk pak aftrekken</h3>
      <p>
        Een normaal pak blijft kleding die ook privé gedragen kan worden en is zonder
        kwalificerend beeldmerk geen werkkleding.
      </p>

      <h3>Een heel klein logo laten drukken</h3>
      <p>
        Voor normale kleding geldt een minimale oppervlakte van 70 cm² aan duidelijk zichtbare
        beeldmerken per kledingstuk.
      </p>

      <h3>Denken dat werkschoenen altijd aftrekbaar zijn</h3>
      <p>
        Gewone schoenen blijven gewone kleding. Specifiek beschermend of beroepsgebonden
        schoeisel kan anders worden behandeld.
      </p>

      <h3>Kleding zakelijk maken door vanaf de bedrijfsrekening te betalen</h3>
      <p>De betaalrekening bepaalt niet of kleding aftrekbaar is.</p>

      <h3>Btw op gewone kleding aftrekken</h3>
      <p>
        Gewone persoonlijke kleding wordt niet een zakelijke aankoop alleen omdat je ondernemer
        bent.
      </p>

      <h2>Veelgestelde vragen</h2>

      <h3>Is werkkleding aftrekbaar als zzp&apos;er?</h3>
      <p>
        Ja. Kleding die je (bijna) uitsluitend tijdens je werkzaamheden kunt dragen kan als
        werkkleding volledig aftrekbaar zijn.
      </p>

      <h3>Is gewone kleding voor mijn werk aftrekbaar?</h3>
      <p>
        In beginsel niet. Gewone kleding die ook buiten je onderneming gedragen kan worden is
        geen werkkleding, zelfs wanneer je deze speciaal voor je werk hebt gekocht.
      </p>

      <h3>Is een pak aftrekbaar als zzp&apos;er?</h3>
      <p>
        Een normaal zakelijk pak is in beginsel geen aftrekbare werkkleding, omdat het ook
        buiten je onderneming gedragen kan worden. Een kwalificerend bedrijfslogo kan de
        beoordeling veranderen.
      </p>

      <h3>Hoe groot moet een logo op werkkleding zijn?</h3>
      <p>
        Als kleding ook buiten je onderneming gedragen kan worden, moeten één of meer duidelijk
        zichtbare beeldmerken die naar je onderneming verwijzen gezamenlijk minimaal 70 cm² per
        kledingstuk beslaan.
      </p>

      <h3>Is een polo met logo aftrekbaar?</h3>
      <p>
        Dat kan. Als de polo normaal ook privé gedragen kan worden, moet het zichtbare
        bedrijfslogo of de gezamenlijke beeldmerken minimaal 70 cm² per kledingstuk zijn.
      </p>

      <h3>Is een overall aftrekbaar?</h3>
      <p>
        Een overall is een voorbeeld van kleding die door zijn aard als werkkleding kan
        kwalificeren en kan daarom in beginsel volledig aftrekbaar zijn.
      </p>

      <h3>Zijn veiligheidsschoenen aftrekbaar?</h3>
      <p>
        Specifiek veiligheidsschoeisel dat door zijn aard voor de werkzaamheden is bedoeld kan
        als zakelijke werkkleding kwalificeren. Normale schoenen zijn niet automatisch
        aftrekbaar doordat je ze tijdens het werk draagt.
      </p>

      <h3>Zijn werkschoenen aftrekbaar als zzp&apos;er?</h3>
      <p>
        Dat hangt af van het soort schoenen. Specifiek beroeps- of veiligheidsschoeisel kan
        kwalificeren. Normale schoenen of sneakers die ook privé kunnen worden gedragen zijn in
        beginsel geen werkkleding.
      </p>

      <h3>Is sportkleding aftrekbaar voor een personal trainer?</h3>
      <p>
        Normale sportkleding is ook privé draagbaar en is daarom niet automatisch werkkleding.
        Kleding met een voldoende groot en zichtbaar bedrijfslogo kan wel aan de voorwaarden
        voor werkkleding voldoen.
      </p>

      <h3>Kan ik btw op werkkleding aftrekken?</h3>
      <p>
        Als sprake is van een zakelijke aankoop en je aan de normale voorwaarden voor btw-aftrek
        voldoet, kan de btw op werkkleding als voorbelasting aftrekbaar zijn.
      </p>

      <h2>Kort samengevat</h2>
      <p>
        Werkkleding kan als zzp&apos;er aftrekbaar zijn, maar de regels zijn strenger dan veel
        ondernemers denken.
      </p>
      <p>Onthoud vooral:</p>
      <ul>
        <li>
          echte werkkleding is <strong>100% aftrekbaar</strong>;
        </li>
        <li>
          gewone kleding is <strong>niet aftrekbaar</strong>;
        </li>
        <li>alleen voor werk dragen is op zichzelf niet voldoende;</li>
        <li>
          kleding die ook privé gedragen kan worden kan toch werkkleding zijn met een duidelijk
          zichtbaar bedrijfslogo;
        </li>
        <li>
          het logo of de gezamenlijke beeldmerken moeten minimaal{' '}
          <strong>70 cm² per kledingstuk</strong> zijn;
        </li>
        <li>
          een overall of andere duidelijk beroepsspecifieke kleding kan zonder logo al
          werkkleding zijn;
        </li>
        <li>
          een normaal pak, blouse, spijkerbroek of gewone schoenen zijn in beginsel geen
          werkkleding;
        </li>
        <li>
          voor btw gelden daarnaast de normale voorwaarden voor aftrek van voorbelasting.
        </li>
      </ul>
      <p>De handigste vuistregel is:</p>
      <p>
        <strong>
          Kun je het kledingstuk normaal gesproken ook buiten je werk dragen? Dan is het meestal
          geen aftrekbare werkkleding, tenzij het voldoet aan de logo-eis.
        </strong>
      </p>
      <p>Heb je echte werkkleding gekocht voor je onderneming?</p>

      <UitgavenCta
        title="Houd je zakelijke uitgaven gratis bij met FactuurBaas"
        label="Gratis uitgaven bijhouden →"
      />

      <p className="mt-4 text-sm text-slate-500">
        Dit artikel is informatief en geen fiscaal advies. Regels kunnen wijzigen; check bij
        twijfel de Belastingdienst of je boekhouder. Zie ook{' '}
        <TextLink href="/blogs/zakelijke-kosten-zzp">zakelijke kosten zzp</TextLink>.
      </p>
    </>
  ),
};
