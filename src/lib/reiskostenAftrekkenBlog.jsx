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
  title = 'Houd je zakelijke reiskosten bij',
  text = 'Registreer zakelijke kosten naast je facturen en zie wat er van je omzet overblijft.',
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

export const reiskostenAftrekkenArticle = {
  slug: 'reiskosten-aftrekken-zzp',
  relatedSlugs: [
    'zakelijke-kosten-zzp',
    'zakelijke-uitgaven-bijhouden-zzp',
    'btw-zakelijke-kosten-aftrekken',
    'zakelijke-kosten-prive-betaald',
  ],
  metaTitle: "Reiskosten aftrekken als zzp'er: regels & €0,25/km in 2026",
  title: "Reiskosten aftrekken als zzp'er: wat mag je aftrekken?",
  excerpt:
    "Welke reiskosten mag je als zzp'er aftrekken? Lees over €0,25 per zakelijke kilometer in 2026, auto, trein, taxi, vliegtuig en btw.",
  keywords:
    "reiskosten aftrekken zzp, reiskosten zzp, reiskosten aftrekbaar zzp, zakelijke reiskosten zzp, kilometervergoeding zzp 2026, zakelijke kilometers zzp, kilometervergoeding ondernemer, treinkosten aftrekbaar zzp, parkeerkosten zzp, benzine aftrekbaar zzp",
  image: {
    url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/Reiskosten%20aftrekken%20als%20zzper.jpg',
    alt: "Reiskosten aftrekken als zzp'er — zakelijke kilometers en reizen",
  },
  datePublished: '2026-09-19',
  dateModified: '2026-09-19',
  faq: [
    {
      question: "Hoeveel reiskosten mag je als zzp'er aftrekken?",
      answer:
        'Dat hangt af van het vervoermiddel. Gebruik je in 2026 een privévervoermiddel voor zakelijke ritten, dan mag je €0,25 per zakelijke kilometer van je winst aftrekken. Voor zakelijk openbaar vervoer, taxi en vliegtuig zijn in beginsel de werkelijk gemaakte kosten aftrekbaar.',
    },
    {
      question: "Hoe hoog is de kilometervergoeding voor zzp'ers in 2026?",
      answer:
        'Voor een privévervoermiddel dat je zakelijk gebruikt mag je in 2026 €0,25 per zakelijke kilometer van je winst aftrekken.',
    },
    {
      question: 'Was de kilometervergoeding niet €0,23?',
      answer:
        'In 2024 en 2025 was het bedrag €0,23 per zakelijke kilometer. Voor 2026 is het verhoogd naar €0,25.',
    },
    {
      question: 'Mag ik benzine aftrekken naast de kilometervergoeding?',
      answer:
        'Nee. Bij gebruik van je privéauto zijn brandstof en andere autokosten voor de inkomstenbelasting verwerkt in het vaste bedrag van €0,25 per zakelijke kilometer.',
    },
    {
      question: 'Mag ik parkeerkosten apart aftrekken?',
      answer:
        'Niet bij de kilometerregeling voor je privévervoermiddel. Parkeerkosten zijn daarin verwerkt.',
    },
    {
      question: 'Is woon-werkverkeer zakelijk voor een zzp\'er?',
      answer:
        'Voor de inkomstenbelasting rekent de Belastingdienst woon-werkverkeer bij gebruik van een privévervoermiddel tot de zakelijke kilometers. Voor de btw gelden bij auto\'s andere regels.',
    },
    {
      question: "Zijn treinkosten aftrekbaar voor zzp'ers?",
      answer:
        'Ja. Zakelijke reiskosten met het openbaar vervoer zijn in beginsel voor 100% aftrekbaar op basis van de werkelijk gemaakte kosten.',
    },
    {
      question: 'Zijn taxikosten aftrekbaar?',
      answer:
        'Ja, daadwerkelijk gemaakte taxikosten voor zakelijke reizen zijn in beginsel volledig aftrekbaar.',
    },
    {
      question: 'Kan ik vliegtickets zakelijk aftrekken?',
      answer:
        'Een vliegticket voor een daadwerkelijk zakelijke reis kan een zakelijke kostenpost zijn. Combineer je de reis met vakantie, dan moet je zakelijke en privé-uitgaven van elkaar onderscheiden.',
    },
    {
      question: 'Kan ik zakelijke fietskilometers aftrekken?',
      answer:
        'Ja. Gebruik je je eigen privéfiets voor zakelijke ritten, dan valt die in 2026 eveneens onder het bedrag van €0,25 per zakelijke kilometer.',
    },
    {
      question: 'Mag ik meer dan €0,25 per kilometer aan mijn klant factureren?',
      answer:
        'Ja. Wat je aan je klant rekent is een commerciële afspraak. Het fiscale aftrekbedrag voor zakelijke kilometers met je privévervoermiddel staat daar los van.',
    },
  ],
  content: (
    <>
      <p>
        Rijd je als zzp&apos;er naar klanten, neem je de trein naar een opdracht of vlieg je voor
        een zakelijke afspraak naar het buitenland? Dan kunnen je reiskosten zakelijk aftrekbaar
        zijn.
      </p>
      <p>
        Hoeveel je mag aftrekken hangt af van <strong>hoe je reist</strong>.
      </p>
      <p>
        Gebruik je in 2026 bijvoorbeeld je privéauto voor zakelijke ritten? Dan mag je{' '}
        <strong>€0,25 per zakelijke kilometer</strong> van je winst aftrekken.
      </p>
      <p>
        Reis je zakelijk met de trein, taxi of het vliegtuig? Dan zijn in principe de werkelijk
        gemaakte zakelijke kosten aftrekbaar.
      </p>
      <p>
        In deze gids lees je welke reiskosten je als zzp&apos;er mag aftrekken, hoe de
        kilometervergoeding werkt en welke kosten je moet bijhouden.
      </p>

      <UitgavenCta />

      <h2>Welke reiskosten zijn aftrekbaar als zzp&apos;er?</h2>
      <p>
        Zakelijke reiskosten kunnen aftrekbaar zijn als je de reis maakt voor je onderneming. Denk
        bijvoorbeeld aan reizen naar:
      </p>
      <ul>
        <li>klanten;</li>
        <li>opdrachtgevers;</li>
        <li>zakelijke afspraken;</li>
        <li>leveranciers;</li>
        <li>een cursus voor je bestaande vakkennis;</li>
        <li>een beurs;</li>
        <li>een zakelijke bijeenkomst;</li>
        <li>een tijdelijke werklocatie;</li>
        <li>je bedrijfsruimte.</li>
      </ul>
      <p>Hoe je de kosten verwerkt hangt af van het vervoermiddel.</p>
      <p>Er is een belangrijk verschil tussen:</p>
      <ol>
        <li>reizen met een privéauto of ander privévervoermiddel;</li>
        <li>reizen met openbaar vervoer;</li>
        <li>reizen met taxi;</li>
        <li>zakelijke vliegreizen;</li>
        <li>een auto die tot het ondernemingsvermogen behoort.</li>
      </ol>
      <p>Vooral bij de auto gelden aparte regels.</p>

      <h2>Privéauto zakelijk gebruiken als zzp&apos;er</h2>
      <p>
        Gebruik je je privéauto voor zakelijke ritten? Dan mag je in 2026{' '}
        <strong>€0,25 per zakelijke kilometer</strong> van je winst aftrekken.
      </p>
      <p>In 2025 was dit €0,23 per kilometer.</p>
      <p>
        Stel dat je in 2026 in totaal 5.000 zakelijke kilometers met je privéauto rijdt. Dan
        bedraagt je aftrek:
      </p>
      <p>
        <strong>5.000 × €0,25 = €1.250</strong>
      </p>
      <p>
        Je trekt dus €1.250 af van je winst. Je trekt niet de werkelijke autokosten af.
      </p>

      <h2>Welke kosten zitten in die €0,25 per kilometer?</h2>
      <p>
        Gebruik je een privéauto voor zakelijke ritten, dan zijn volgens de Belastingdienst onder
        andere deze kosten verwerkt in het vaste bedrag per kilometer:
      </p>
      <ul>
        <li>brandstof;</li>
        <li>verzekering;</li>
        <li>onderhoud;</li>
        <li>reparaties;</li>
        <li>afschrijving;</li>
        <li>parkeren;</li>
        <li>tol.</li>
      </ul>
      <p>
        Je mag deze kosten voor de inkomstenbelasting dus niet nog eens afzonderlijk van je winst
        aftrekken. Dat zou dubbele aftrek betekenen.
      </p>
      <p>
        De berekening is simpelweg: <strong>Zakelijke kilometers × €0,25</strong> voor 2026.
      </p>

      <h2>Voorbeeld: 8.000 zakelijke kilometers</h2>
      <p>Je rijdt in 2026 met je privéauto:</p>
      <p>
        <strong>8.000 zakelijke kilometers</strong>
      </p>
      <p>De aftrek bedraagt:</p>
      <p>
        <strong>8.000 × €0,25 = €2.000</strong>
      </p>
      <p>
        Het maakt voor deze berekening niet uit of je werkelijk €1.500, €3.000 of €5.000 aan
        brandstof, verzekering en onderhoud hebt uitgegeven. Voor de inkomstenbelasting werk je
        met het vaste bedrag per zakelijke kilometer.
      </p>

      <h2>Mag je benzine daarnaast aftrekken?</h2>
      <p>
        Niet wanneer je je privéauto gebruikt en de €0,25 per zakelijke kilometer toepast. De
        brandstofkosten zitten al verwerkt in het kilometerbedrag.
      </p>
      <p>Je kunt dus niet doen:</p>
      <p>
        <strong>5.000 km × €0,25</strong>
      </p>
      <p>én daarnaast:</p>
      <p>
        <strong>€800 brandstofkosten aftrekken</strong>
      </p>
      <p>Voor de inkomstenbelasting zou dat dubbele aftrek zijn.</p>

      <h2>Mag je parkeerkosten daarnaast aftrekken?</h2>
      <p>
        Ook parkeerkosten zitten bij een privévervoermiddel in het vaste bedrag van €0,25 per
        zakelijke kilometer. Je kunt zakelijke parkeerkosten bij gebruik van je privéauto voor de
        inkomstenbelasting dus niet nog eens afzonderlijk aftrekken.
      </p>
      <p>
        Hetzelfde geldt voor tol. Dat is een belangrijk verschil met sommige andere soorten
        zakelijke reizen.
      </p>

      <h2>Geldt €0,25 ook voor een motor of fiets?</h2>
      <p>
        Ja. De regeling voor een privévervoermiddel geldt niet alleen voor een auto. Gebruik je
        een vervoermiddel dat privé van jou is of dat je privé huurt voor zakelijke ritten,
        bijvoorbeeld een:
      </p>
      <ul>
        <li>auto;</li>
        <li>motor;</li>
        <li>fiets;</li>
      </ul>
      <p>
        dan mag je in 2026 €0,25 per zakelijke kilometer van je winst aftrekken. Dat maakt de
        regeling interessant voor zzp&apos;ers die zakelijke afspraken bijvoorbeeld met een eigen
        fiets of e-bike bezoeken.
      </p>

      <h2>Woon-werkverkeer als zzp&apos;er</h2>
      <p>
        Voor ondernemers is er een belangrijk verschil met sommige andere fiscale regels. Voor de
        inkomstenbelasting rekent de Belastingdienst{' '}
        <strong>woon-werkverkeer tot de zakelijke kilometers</strong> bij gebruik van een
        privévervoermiddel voor de onderneming.
      </p>
      <p>
        Rijd je bijvoorbeeld vanuit huis naar je eigen bedrijfsruimte? Dan kunnen die kilometers
        voor deze regeling dus zakelijke kilometers zijn.
      </p>
      <p>
        Let op: voor de btw gelden bij auto&apos;s andere regels. Daar kan woon-werkverkeer juist
        als privégebruik worden behandeld. Inkomstenbelasting en btw zijn dus niet altijd hetzelfde.
      </p>

      <h2>Kilometerregistratie bijhouden</h2>
      <p>
        Als je zakelijke kilometers wilt aftrekken, moet je kunnen onderbouwen hoeveel zakelijke
        kilometers je hebt gereden. Houd daarom een kilometeradministratie bij.
      </p>
      <p>Noteer bijvoorbeeld:</p>
      <ul>
        <li>datum;</li>
        <li>vertrekadres;</li>
        <li>bestemmingsadres;</li>
        <li>reden van de rit;</li>
        <li>aantal zakelijke kilometers.</li>
      </ul>
      <p>Bijvoorbeeld:</p>
      <p>
        <strong>12 september 2026</strong>
        <br />
        Amsterdam → Utrecht
        <br />
        Klantafspraak
        <br />
        <strong>92 km retour</strong>
      </p>
      <p>
        Aftrek: <strong>92 × €0,25 = €23</strong>
      </p>
      <p>
        Door dit gedurende het jaar bij te houden hoef je aan het einde van het jaar niet alle
        ritten opnieuw te reconstrueren.
      </p>

      <h2>Moet je de kilometerstand bijhouden?</h2>
      <p>
        Voor alleen het berekenen van de zakelijke kilometeraftrek is vooral belangrijk dat je het
        aantal zakelijke kilometers kunt onderbouwen. Een goede ritten- of kilometerregistratie
        maakt dat veel eenvoudiger.
      </p>
      <p>
        Gebruik je een auto van de onderneming of spelen privégebruik en bijtelling een rol? Dan
        kunnen uitgebreidere registratie-eisen relevant zijn.
      </p>

      <h2>Openbaar vervoer aftrekken als zzp&apos;er</h2>
      <p>
        Reis je voor je onderneming met het openbaar vervoer? Dan zijn de werkelijk gemaakte
        zakelijke reiskosten in principe volledig aftrekbaar.
      </p>
      <p>Denk aan:</p>
      <ul>
        <li>trein;</li>
        <li>bus;</li>
        <li>tram;</li>
        <li>metro.</li>
      </ul>
      <p>
        Stel dat je voor een klantafspraak een retourtreinkaartje koopt voor €38. Dan kun je die
        €38 als zakelijke reiskosten verwerken.
      </p>
      <p>
        Je gebruikt hier dus niet de kilometerregeling van €0,25. Die regeling hoort bij het
        gebruik van een privévervoermiddel.
      </p>

      <h2>Bewijs van zakelijke OV-kosten</h2>
      <p>
        Je moet kunnen aantonen dat je de kosten daadwerkelijk hebt gemaakt. Bewaar daarom
        bijvoorbeeld:
      </p>
      <ul>
        <li>treinkaartjes;</li>
        <li>facturen;</li>
        <li>betaalbewijzen;</li>
        <li>reisoverzichten.</li>
      </ul>
      <p>
        Reis je met een OV-chipkaart? Dan kun je een overzicht van je reizen bewaren. Zo kun je
        later aantonen welke ritten zakelijk waren.
      </p>

      <h2>Taxi aftrekbaar als zzp&apos;er</h2>
      <p>
        Neem je voor je onderneming een taxi? Dan kunnen de werkelijk gemaakte zakelijke
        taxikosten volledig aftrekbaar zijn.
      </p>
      <p>Bijvoorbeeld:</p>
      <p>
        Je reist naar een zakelijke bijeenkomst en betaalt:
      </p>
      <ul>
        <li>
          <strong>Taxi heen:</strong> €32
        </li>
        <li>
          <strong>Taxi terug:</strong> €35
        </li>
      </ul>
      <p>
        Totale zakelijke taxikosten: <strong>€67</strong>
      </p>
      <p>
        Als de ritten volledig zakelijk zijn, kun je die €67 in beginsel als zakelijke reiskosten
        verwerken. Bewaar het betaalbewijs of andere gegevens waarmee je de rit kunt onderbouwen.
      </p>

      <h2>Uber en andere taxidiensten</h2>
      <p>
        Gebruik je Uber of een vergelijkbare taxidienst voor een zakelijke rit? Dan geldt in de
        basis hetzelfde principe. Is de rit zakelijk? Dan kunnen de werkelijk gemaakte kosten
        zakelijke reiskosten zijn.
      </p>
      <p>Bewaar bijvoorbeeld de digitale ritfactuur waarop staat:</p>
      <ul>
        <li>datum;</li>
        <li>traject;</li>
        <li>bedrag;</li>
        <li>leverancier.</li>
      </ul>
      <p>
        Dat maakt de zakelijke aard van de rit veel makkelijker te onderbouwen.
      </p>

      <h2>Vliegtickets aftrekken als zzp&apos;er</h2>
      <p>
        Moet je voor je onderneming vliegen? Dan kunnen ook zakelijke vliegtickets aftrekbare
        reiskosten zijn. Bijvoorbeeld voor:
      </p>
      <ul>
        <li>klantbezoek;</li>
        <li>beurs;</li>
        <li>conferentie;</li>
        <li>zakelijke opdracht;</li>
        <li>bezoek aan leverancier.</li>
      </ul>
      <p>
        Stel dat je voor een zakelijke beurs naar Berlijn vliegt en je ticket €180 kost. Als de
        reis daadwerkelijk zakelijk is, kunnen de ticketkosten in beginsel als zakelijke
        reiskosten worden verwerkt.
      </p>

      <h2>Zakelijke reis combineren met vakantie</h2>
      <p>
        Hier moet je opletten. Stel dat je naar Spanje vliegt voor een zakelijke conferentie en
        daarna nog een week vakantie houdt. Dan heeft de reis zowel een zakelijk als
        privékarakter.
      </p>
      <p>
        Je kunt niet automatisch alle kosten van de hele reis als zakelijke kosten behandelen. Je
        moet kijken naar:
      </p>
      <ul>
        <li>het zakelijke doel van de reis;</li>
        <li>welke kosten daadwerkelijk zakelijk zijn;</li>
        <li>welke kosten uitsluitend privé zijn;</li>
        <li>eventuele extra kosten die door het privégedeelte ontstaan.</li>
      </ul>
      <p>
        Een extra hotelweek voor je vakantie wordt bijvoorbeeld niet zakelijk omdat je reis
        oorspronkelijk begon met een zakelijke afspraak.
      </p>

      <h2>Hotelkosten tijdens een zakelijke reis</h2>
      <p>
        Moet je vanwege een zakelijke reis ergens overnachten? Dan kunnen zakelijke hotelkosten
        eveneens aftrekbaar zijn.
      </p>
      <p>Bijvoorbeeld:</p>
      <ul>
        <li>
          <strong>Trein:</strong> €80
        </li>
        <li>
          <strong>Hotel:</strong> €140
        </li>
        <li>
          <strong>Taxi:</strong> €30
        </li>
      </ul>
      <p>
        Als de reis volledig zakelijk is, kunnen deze kosten in beginsel zakelijke kosten zijn.
        Hotelkosten zijn administratief geen kilometervergoeding, maar kosten die je daadwerkelijk
        voor de zakelijke reis hebt gemaakt. Bewaar daarom de hotelrekening.
      </p>

      <h2>Eten tijdens een zakelijke reis</h2>
      <p>
        Eten en drinken vraagt extra aandacht. Dat je onderweg bent voor je onderneming betekent
        niet automatisch dat iedere maaltijd volledig aftrekbaar is.
      </p>
      <p>
        Voor bepaalde kosten voor eten, drinken en representatie gelden beperkingen voor de
        inkomstenbelasting. Ook voor de btw gelden aparte regels.
      </p>
      <p>
        De btw over eten en drinken dat je als eindgebruiker in een horecagelegenheid nuttigt, is
        bijvoorbeeld niet aftrekbaar. Behandel een restaurantbon tijdens een zakenreis daarom niet
        automatisch hetzelfde als een treinkaartje.
      </p>

      <h2>Btw op openbaar vervoer en taxi</h2>
      <p>
        Voor btw gelden aparte regels naast de aftrek voor de inkomstenbelasting. Of en hoeveel
        btw je kunt aftrekken hangt onder andere af van:
      </p>
      <ul>
        <li>het soort vervoersdienst;</li>
        <li>of er btw in rekening is gebracht;</li>
        <li>het zakelijke gebruik;</li>
        <li>of je recht hebt op aftrek van voorbelasting.</li>
      </ul>
      <p>
        Bij openbaar vervoer en taxi&apos;s gelden bovendien afwijkende factuurregels: er hoeft
        niet altijd een normale btw-factuur te worden uitgereikt. Bewaar daarom altijd het
        kaartje, reisbewijs of betaalbewijs.
      </p>

      <h2>Btw en je privéauto</h2>
      <p>
        Gebruik je je privéauto ook voor zakelijke ritten? Dan werkt de btw anders dan de
        inkomstenbelasting.
      </p>
      <p>
        Voor de inkomstenbelasting gebruik je in 2026 het vaste bedrag van:{' '}
        <strong>€0,25 per zakelijke kilometer</strong>
      </p>
      <p>
        Voor de btw kan onder voorwaarden btw over onderhoud en gebruik van je privéauto
        aftrekbaar zijn voor zover de auto wordt gebruikt voor belaste omzet. Je moet daarbij
        rekening houden met het privégebruik.
      </p>
      <p>
        De kilometerregeling van €0,25 vervangt dus niet automatisch de btw-regels.
      </p>

      <h2>Woon-werkverkeer: inkomstenbelasting versus btw</h2>
      <p>
        Dit is een veelvoorkomende bron van verwarring. Voor de{' '}
        <strong>inkomstenbelasting</strong> geldt woon-werkverkeer van een ondernemer met een
        privévervoermiddel als zakelijke kilometers. Voor de <strong>btw</strong> wordt
        woon-werkverkeer bij de auto als privégebruik behandeld.
      </p>
      <p>
        Dezelfde rit kan voor verschillende belastingen dus anders worden behandeld. Houd daarom
        inkomstenbelasting en btw uit elkaar.
      </p>

      <h2>Auto van de zaak</h2>
      <p>
        Staat je auto op de zaak? Dan gebruik je niet simpelweg de regeling van €0,25 per
        zakelijke kilometer voor een privévervoermiddel.
      </p>
      <p>
        Bij een auto die tot het ondernemingsvermogen behoort kunnen de werkelijke autokosten
        onderdeel zijn van je onderneming. Denk aan:
      </p>
      <ul>
        <li>brandstof;</li>
        <li>verzekering;</li>
        <li>onderhoud;</li>
        <li>reparaties;</li>
        <li>motorrijtuigenbelasting;</li>
        <li>afschrijving;</li>
        <li>leasekosten.</li>
      </ul>
      <p>
        Gebruik je de zakelijke auto ook privé? Dan kun je daarnaast te maken krijgen met een
        correctie voor privégebruik en eventueel bijtelling. De keuze tussen een auto zakelijk of
        privé houden is daarom een aparte fiscale beslissing.
      </p>

      <h2>Privéauto versus auto van de zaak</h2>
      <p>In grote lijnen:</p>

      <h3>Privéauto</h3>
      <p>
        Je trekt in 2026 <strong>€0,25 per zakelijke kilometer</strong> af van je winst.
        Brandstof, verzekering, parkeren en andere autokosten trek je voor de inkomstenbelasting
        niet afzonderlijk af.
      </p>

      <h3>Auto van de onderneming</h3>
      <p>
        De werkelijke zakelijke autokosten lopen via je onderneming. Bij privégebruik kunnen
        vervolgens andere fiscale regels gelden.
      </p>
      <p>Welke optie voordeliger is hangt onder andere af van:</p>
      <ul>
        <li>waarde van de auto;</li>
        <li>jaarlijkse autokosten;</li>
        <li>aantal zakelijke kilometers;</li>
        <li>aantal privékilometers;</li>
        <li>type auto;</li>
        <li>btw-situatie.</li>
      </ul>
      <p>
        Daarom verdient auto zakelijk of privé een eigen uitgebreide gids.
      </p>

      <h2>Gehuurde auto voor een zakelijke reis</h2>
      <p>
        Hier moet je onderscheid maken tussen privé en zakelijk huren. Huur je privé een
        vervoermiddel en gebruik je het vervolgens voor zakelijke ritten? Dan valt een privé
        gehuurd vervoermiddel onder de kilometerregeling voor privévervoermiddelen. In 2026 kun je
        dan €0,25 per zakelijke kilometer aftrekken.
      </p>
      <p>
        Huur je een auto rechtstreeks als zakelijke kostenpost binnen je onderneming, dan kan de
        fiscale verwerking anders zijn. Kijk daarom goed naar wie de auto huurt en hoe de auto
        fiscaal wordt behandeld.
      </p>

      <h2>Fiets zakelijk gebruiken</h2>
      <p>
        Ook zakelijke kilometers met een eigen privéfiets kunnen onder de kilometerregeling
        vallen. Stel dat je als zzp&apos;er regelmatig met je eigen fiets naar klanten rijdt. Je
        rijdt in een jaar:
      </p>
      <p>
        <strong>1.000 zakelijke kilometers</strong>
      </p>
      <p>Dan bedraagt de aftrek in 2026:</p>
      <p>
        <strong>1.000 × €0,25 = €250</strong>
      </p>
      <p>
        Dat kan ook gelden voor een privé-e-bike. Je hoeft dus niet per se een auto te gebruiken
        om zakelijke kilometers te kunnen aftrekken.
      </p>

      <h2>Reiskosten doorberekenen aan je klant</h2>
      <p>
        Misschien spreek je met een klant af dat je reiskosten doorberekent. Bijvoorbeeld:
      </p>
      <ul>
        <li>
          <strong>Werkzaamheden:</strong> €1.000
        </li>
        <li>
          <strong>Reiskosten:</strong> €50
        </li>
      </ul>
      <p>
        Dat je de reiskosten aan je klant doorberekent, betekent niet dat de oorspronkelijke reis
        uit je administratie verdwijnt. Je hebt enerzijds zakelijke reiskosten gemaakt. Anderzijds
        ontvang je een bedrag van je klant.
      </p>
      <p>
        Het bedrag dat je aan je klant factureert is onderdeel van je factuur en moet volgens de
        toepasselijke btw-regels worden behandeld.
      </p>

      <h2>Mag je meer dan €0,25 per kilometer aan je klant rekenen?</h2>
      <p>
        Ja, het fiscale aftrekbedrag voor je privévervoermiddel bepaalt niet automatisch wat je
        commercieel met je klant afspreekt. Je kunt bijvoorbeeld met een klant afspreken dat je{' '}
        <strong>€0,35 per kilometer</strong> aan reiskosten factureert.
      </p>
      <p>
        Dat staat los van de vraag hoeveel je voor de inkomstenbelasting voor het zakelijke
        gebruik van je privéauto van je winst mag aftrekken. Je fiscale aftrek blijft in 2026
        volgens de daarvoor geldende regeling €0,25 per zakelijke kilometer.
      </p>

      <h2>Is de kilometervergoeding omzet?</h2>
      <p>
        Breng je reiskosten aan je klant in rekening? Dan maakt dat bedrag onderdeel uit van wat
        je klant aan jou betaalt voor de prestatie.
      </p>
      <p>
        Verwar dit niet met de €0,25 die je voor de inkomstenbelasting mag aftrekken bij zakelijke
        ritten met je privévervoermiddel. Het zijn twee verschillende zaken:
      </p>
      <p>
        <strong>Aan klant:</strong> wat jij commercieel factureert.
      </p>
      <p>
        <strong>Belastingaangifte:</strong> het bedrag dat je volgens de fiscale regels voor je
        zakelijke kilometers mag aftrekken.
      </p>

      <h2>Voorbeeld: klantbezoek met privéauto</h2>
      <p>
        Je rijdt <strong>120 km retour</strong> naar een klant. Je gebruikt je privéauto. Aftrek
        in 2026:
      </p>
      <p>
        <strong>120 × €0,25 = €30</strong>
      </p>
      <p>
        Stel dat je daarnaast €12 aan parkeren betaalt. Voor de inkomstenbelasting trek je die €12
        niet nog eens apart af. Parkeren zit al verwerkt in het vaste kilometerbedrag. Je aftrek
        blijft dus: <strong>€30</strong>
      </p>

      <h2>Voorbeeld: klantbezoek met trein</h2>
      <p>
        Je reist met de trein naar dezelfde klant. Retour: <strong>€42</strong>
      </p>
      <p>
        De werkelijk gemaakte zakelijke OV-kosten zijn aftrekbaar. Je trekt dan{' '}
        <strong>€42</strong> af als zakelijke reiskosten. Je berekent hier geen
        kilometervergoeding van €0,25.
      </p>

      <h2>Voorbeeld: zakelijke afspraak met fiets</h2>
      <p>
        Je fietst met je eigen fiets <strong>16 kilometer heen en terug</strong> naar een
        zakelijke afspraak. Aftrek:
      </p>
      <p>
        <strong>16 × €0,25 = €4</strong>
      </p>
      <p>
        Doe je dit honderd keer per jaar? Dan gaat het om:{' '}
        <strong>1.600 km × €0,25 = €400</strong>
      </p>
      <p>
        Ook kleine zakelijke ritten kunnen over een heel jaar dus oplopen.
      </p>

      <h2>Reiskosten betaald met je privérekening</h2>
      <p>
        Heb je een zakelijk treinkaartje met je privérekening betaald? Dan wordt de reis daardoor
        niet privé. Het doel van de reis bepaalt of de kosten zakelijk zijn.
      </p>
      <p>
        Bij een eenmanszaak kun je een daadwerkelijk zakelijke uitgave die privé is betaald in je
        administratie verwerken.
      </p>
      <p>
        Lees:{' '}
        <TextLink href="/blogs/zakelijke-kosten-prive-betaald">
          Zakelijke kosten privé betaald: hoe verwerk je die? →
        </TextLink>
      </p>

      <h2>Privéreis betaald vanaf je zakelijke rekening</h2>
      <p>
        Andersom geldt hetzelfde. Boek je een treinkaartje voor een weekendje weg en betaal je dit
        vanaf je zakelijke rekening? Dan wordt die reis daardoor niet zakelijk.
      </p>
      <p>
        De kosten hebben een privékarakter en horen niet tussen je zakelijke reiskosten.
      </p>
      <p>
        Lees:{' '}
        <TextLink href="/blogs/privekosten-zakelijk-betalen">
          Privékosten zakelijk betalen: wat mag wel en niet? →
        </TextLink>
      </p>

      <h2>Reiskosten en de KOR</h2>
      <p>
        Doe je mee aan de kleineondernemersregeling? Dan blijft de verwerking van zakelijke kosten
        voor de inkomstenbelasting relevant. De KOR is een btw-regeling.
      </p>
      <p>
        Je kunt tijdens deelname aan de KOR echter in beginsel geen btw op zakelijke kosten als
        voorbelasting aftrekken. Het is dus belangrijk om onderscheid te blijven maken tussen:
      </p>
      <ul>
        <li>aftrekbare zakelijke kosten voor de winst;</li>
        <li>btw-aftrek.</li>
      </ul>
      <p>Dat zijn twee verschillende zaken.</p>

      <h2>Welke gegevens moet je van zakelijke reizen bewaren?</h2>
      <p>Dat hangt af van het vervoermiddel.</p>

      <h3>Eigen privévervoermiddel</h3>
      <p>Bewaar een overzicht van:</p>
      <ul>
        <li>datum;</li>
        <li>bestemming;</li>
        <li>zakelijke reden;</li>
        <li>aantal kilometers.</li>
      </ul>

      <h3>Openbaar vervoer</h3>
      <p>Bewaar bijvoorbeeld:</p>
      <ul>
        <li>kaartjes;</li>
        <li>facturen;</li>
        <li>reisoverzichten.</li>
      </ul>

      <h3>Taxi</h3>
      <p>Bewaar:</p>
      <ul>
        <li>ritbewijs;</li>
        <li>digitale factuur;</li>
        <li>betaalbewijs.</li>
      </ul>

      <h3>Vliegtuig</h3>
      <p>Bewaar:</p>
      <ul>
        <li>boekingsbevestiging;</li>
        <li>factuur;</li>
        <li>ticket;</li>
        <li>zakelijke reden van de reis.</li>
      </ul>

      <h3>Hotel</h3>
      <p>Bewaar:</p>
      <ul>
        <li>hotelrekening;</li>
        <li>betaalbewijs;</li>
        <li>
          informatie waarmee je het zakelijke doel van de reis kunt onderbouwen.
        </li>
      </ul>
      <p>
        Een duidelijke administratie maakt het veel makkelijker om later te bepalen welke
        reiskosten daadwerkelijk zakelijk waren.
      </p>

      <h2>Reiskosten bijhouden met FactuurBaas</h2>
      <p>
        Treinkaartjes, taxi&apos;s, hotels en andere zakelijke reisuitgaven kun je als zakelijke
        uitgaven registreren. Bijvoorbeeld:
      </p>
      <ul>
        <li>
          <strong>Omschrijving</strong> — Trein klantafspraak Utrecht
        </li>
        <li>
          <strong>Categorie</strong> — Reiskosten
        </li>
        <li>
          <strong>Bedrag</strong> — €42
        </li>
        <li>
          <strong>Datum</strong> — 12 september 2026
        </li>
      </ul>
      <p>
        Zo worden je zakelijke reisuitgaven meegenomen in je kostenoverzicht. Voor zakelijke
        kilometers met een privéauto is een kilometerregistratie handiger dan iedere tankbeurt als
        losse zakelijke kosten invoeren. Je fiscale aftrek is immers gebaseerd op het aantal
        zakelijke kilometers.
      </p>

      <UitgavenCta
        title="Houd je zakelijke kosten overzichtelijk bij"
        text="Registreer zakelijke reisuitgaven naast je facturen en zie hoeveel je werkelijk overhoudt."
      />

      <h2>Veelgemaakte fouten</h2>

      <h3>Brandstof én €0,25 per kilometer aftrekken</h3>
      <p>
        Bij een privéauto zitten de autokosten voor de inkomstenbelasting al verwerkt in de
        kilometervergoeding.
      </p>

      <h3>Parkeren apart aftrekken bij de privéauto</h3>
      <p>
        Ook parkeerkosten zijn verwerkt in het vaste bedrag per zakelijke kilometer.
      </p>

      <h3>Geen kilometerregistratie bijhouden</h3>
      <p>
        Zonder goede administratie wordt het moeilijk om je zakelijke kilometers te onderbouwen.
      </p>

      <h3>Denken dat woon-werkverkeer altijd privé is</h3>
      <p>
        Voor de inkomstenbelasting worden deze kilometers bij een ondernemer met een
        privévervoermiddel als zakelijk gezien. Voor de btw kan dat anders zijn.
      </p>

      <h3>De €0,25 gebruiken voor treinreizen</h3>
      <p>
        Bij zakelijk openbaar vervoer trek je de werkelijk gemaakte kosten af.
      </p>

      <h3>Privéreizen als zakelijk verwerken</h3>
      <p>
        Een betaling vanaf je zakelijke rekening maakt een vakantie of andere privéreis niet
        zakelijk.
      </p>

      <h3>Iedere maaltijd tijdens een zakenreis volledig aftrekken</h3>
      <p>
        Voor eten en drinken gelden afzonderlijke fiscale beperkingen en btw-regels.
      </p>

      <h2>Veelgestelde vragen</h2>

      <h3>Hoeveel reiskosten mag je als zzp&apos;er aftrekken?</h3>
      <p>
        Dat hangt af van het vervoermiddel. Gebruik je in 2026 een privévervoermiddel voor
        zakelijke ritten, dan mag je €0,25 per zakelijke kilometer van je winst aftrekken. Voor
        zakelijk openbaar vervoer, taxi en vliegtuig zijn in beginsel de werkelijk gemaakte kosten
        aftrekbaar.
      </p>

      <h3>Hoe hoog is de kilometervergoeding voor zzp&apos;ers in 2026?</h3>
      <p>
        Voor een privévervoermiddel dat je zakelijk gebruikt mag je in 2026 €0,25 per zakelijke
        kilometer van je winst aftrekken.
      </p>

      <h3>Was de kilometervergoeding niet €0,23?</h3>
      <p>
        In 2024 en 2025 was het bedrag €0,23 per zakelijke kilometer. Voor 2026 is het verhoogd
        naar €0,25.
      </p>

      <h3>Mag ik benzine aftrekken naast de kilometervergoeding?</h3>
      <p>
        Nee. Bij gebruik van je privéauto zijn brandstof en andere autokosten voor de
        inkomstenbelasting verwerkt in het vaste bedrag van €0,25 per zakelijke kilometer.
      </p>

      <h3>Mag ik parkeerkosten apart aftrekken?</h3>
      <p>
        Niet bij de kilometerregeling voor je privévervoermiddel. Parkeerkosten zijn daarin
        verwerkt.
      </p>

      <h3>Is woon-werkverkeer zakelijk voor een zzp&apos;er?</h3>
      <p>
        Voor de inkomstenbelasting rekent de Belastingdienst woon-werkverkeer bij gebruik van een
        privévervoermiddel tot de zakelijke kilometers. Voor de btw gelden bij auto&apos;s andere
        regels.
      </p>

      <h3>Zijn treinkosten aftrekbaar voor zzp&apos;ers?</h3>
      <p>
        Ja. Zakelijke reiskosten met het openbaar vervoer zijn in beginsel voor 100% aftrekbaar op
        basis van de werkelijk gemaakte kosten.
      </p>

      <h3>Zijn taxikosten aftrekbaar?</h3>
      <p>
        Ja, daadwerkelijk gemaakte taxikosten voor zakelijke reizen zijn in beginsel volledig
        aftrekbaar.
      </p>

      <h3>Kan ik vliegtickets zakelijk aftrekken?</h3>
      <p>
        Een vliegticket voor een daadwerkelijk zakelijke reis kan een zakelijke kostenpost zijn.
        Combineer je de reis met vakantie, dan moet je zakelijke en privé-uitgaven van elkaar
        onderscheiden.
      </p>

      <h3>Kan ik zakelijke fietskilometers aftrekken?</h3>
      <p>
        Ja. Gebruik je je eigen privéfiets voor zakelijke ritten, dan valt die in 2026 eveneens
        onder het bedrag van €0,25 per zakelijke kilometer.
      </p>

      <h3>Mag ik meer dan €0,25 per kilometer aan mijn klant factureren?</h3>
      <p>
        Ja. Wat je aan je klant rekent is een commerciële afspraak. Het fiscale aftrekbedrag voor
        zakelijke kilometers met je privévervoermiddel staat daar los van.
      </p>

      <h2>Kort samengevat</h2>
      <p>Zakelijke reiskosten kunnen als zzp&apos;er aftrekbaar zijn.</p>
      <p>Voor 2026 zijn vooral deze regels belangrijk:</p>
      <ul>
        <li>
          privéauto zakelijk gebruikt: <strong>€0,25 per zakelijke kilometer</strong>;
        </li>
        <li>
          eigen privéfiets of motor: eveneens{' '}
          <strong>€0,25 per zakelijke kilometer</strong>;
        </li>
        <li>
          brandstof, verzekering, parkeren en tol trek je bij deze kilometerregeling niet nog eens
          apart af;
        </li>
        <li>
          woon-werkverkeer telt voor de inkomstenbelasting als zakelijke kilometers;
        </li>
        <li>zakelijk openbaar vervoer: werkelijk gemaakte kosten aftrekbaar;</li>
        <li>zakelijke taxi: werkelijk gemaakte kosten aftrekbaar;</li>
        <li>zakelijke vliegreis: werkelijk gemaakte kosten aftrekbaar;</li>
        <li>houd bewijsstukken en zakelijke kilometers goed bij;</li>
        <li>
          voor btw kunnen andere regels gelden dan voor de inkomstenbelasting.
        </li>
      </ul>
      <p>
        Gebruik je regelmatig trein, taxi of andere zakelijke vervoersdiensten? Neem die kosten
        dan mee in je uitgavenoverzicht.
      </p>

      <UitgavenCta
        title="Gratis zakelijke uitgaven bijhouden met FactuurBaas"
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
