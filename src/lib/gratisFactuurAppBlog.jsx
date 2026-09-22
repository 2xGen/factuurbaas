import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import InstallAppCta from '@/components/pwa/InstallAppCta';

const TextLink = ({ href, children }) => (
  <Link href={href} className="text-warm-orange hover:underline">
    {children}
  </Link>
);

const FactuurCta = ({
  title = 'Maak gratis een factuur',
  text = 'Direct op je telefoon of computer. Geen verplicht abonnement. PDF downloaden en naar je klant sturen.',
  label = 'Maak gratis een factuur →',
}) => (
  <div className="my-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
    <p className="font-heading text-lg font-semibold text-deep-blue">{title}</p>
    <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
    <div className="mt-4">
      <Button
        asChild
        className="rounded-lg bg-warm-orange px-6 py-3 text-base font-bold text-white hover:bg-orange-600"
      >
        <Link href="/create-invoice">{label}</Link>
      </Button>
    </div>
  </div>
);

export const gratisFactuurAppArticle = {
  slug: 'gratis-factuur-app',
  relatedSlugs: [
    'gratis-factuur-zzp',
    'factureren-zonder-account',
    'factuur-pdf-downloaden',
    'factuur-maken-zzp',
    'wanneer-boekhoudsoftware-nodig-zzp',
    'gratis-factuurtool-vs-boekhoudprogramma',
  ],
  metaTitle: "Gratis factuur app voor zzp'ers",
  title: "Gratis factuur app voor zzp'ers",
  excerpt:
    "Gratis factuur app voor zzp'ers? Installeer FactuurBaas op je telefoon en maak eenvoudig facturen als PDF. Geen betaald abonnement nodig.",
  keywords:
    'gratis factuur app, factuur app, factuur maken app, factuur app gratis, gratis facturen app, factuur maken op telefoon, factuur app zzp, factuurprogramma app',
  image: {
    url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/factuurbaas%20invoice%20app.jpg',
    alt: "Gratis factuur app voor zzp'ers — factuur maken op je telefoon met FactuurBaas",
  },
  datePublished: '2026-09-22',
  dateModified: '2026-09-22',
  faq: [
    {
      question: 'Is FactuurBaas een app?',
      answer:
        'FactuurBaas is een Progressive Web App (PWA). Je gebruikt FactuurBaas via je browser, maar kunt de web-app op ondersteunde telefoons ook aan je beginscherm toevoegen en vanuit een eigen venster openen.',
    },
    {
      question: 'Is de FactuurBaas factuur app gratis?',
      answer:
        'Ja. Je kunt gratis facturen maken met FactuurBaas. Je hebt geen betaald abonnement nodig om een factuur te maken en als PDF te downloaden.',
    },
    {
      question: 'Kan ik een factuur maken op mijn telefoon?',
      answer:
        'Ja. De factuurmaker van FactuurBaas kan op een smartphone worden gebruikt. Je kunt de factuur invullen en daarna als PDF downloaden.',
    },
    {
      question: 'Kan ik FactuurBaas installeren op Android?',
      answer:
        'Ja, op ondersteunde browsers en apparaten kun je FactuurBaas als web-app installeren. Wanneer installatie beschikbaar is, kan FactuurBaas je hiervoor een installatieoptie tonen.',
    },
    {
      question: 'Kan ik FactuurBaas op mijn iPhone installeren?',
      answer:
        'Je kunt FactuurBaas via Safari aan je beginscherm toevoegen. Open de website, tik op Delen en vervolgens op Zet op beginscherm.',
    },
    {
      question: 'Moet ik een account maken?',
      answer:
        'Nee. Voor het maken van een losse factuur heb je geen account nodig. Een gratis account geeft je toegang tot extra mogelijkheden, waaronder je dashboard.',
    },
    {
      question: 'Kan ik mijn factuur als PDF downloaden?',
      answer:
        'Ja. Nadat je je factuur hebt gemaakt, kun je deze als PDF downloaden en vervolgens zelf naar je klant sturen.',
    },
    {
      question: 'Heb ik een boekhoudprogramma nodig naast een factuur app?',
      answer:
        'Niet altijd. Voor een eenvoudige administratie kan een factuurtool voldoende zijn. Naarmate je meer transacties, kosten en administratieve werkzaamheden krijgt, kan een volledig boekhoudprogramma interessanter worden.',
    },
  ],
  content: (
    <>
      <p>
        Wil je onderweg een factuur maken zonder een duur factuurprogramma te installeren? Met{' '}
        <strong>FactuurBaas kun je gratis facturen maken op je telefoon</strong> en FactuurBaas
        toevoegen aan je beginscherm, zodat je het net als een app kunt openen.
      </p>
      <p>
        Je hoeft geen app uit de App Store of Google Play te downloaden. FactuurBaas werkt via je
        browser en kan als web-app op je telefoon worden geïnstalleerd.
      </p>
      <p>Zo heb je je factuurtool altijd snel bij de hand.</p>

      <InstallAppCta />

      <FactuurCta />

      <h2>Facturen maken met een app</h2>
      <p>
        Voor veel zzp&apos;ers gebeurt administratie allang niet meer alleen achter een laptop.
      </p>
      <p>
        Je hebt een klus afgerond, bent onderweg naar huis of wilt direct na een afspraak een
        factuur maken. Dan is het handig als je dit gewoon vanaf je telefoon kunt doen.
      </p>
      <p>Met FactuurBaas kun je onder andere:</p>
      <ul>
        <li>facturen maken op je telefoon</li>
        <li>verschillende btw-percentages gebruiken</li>
        <li>klant- en bedrijfsgegevens invullen</li>
        <li>factuurregels toevoegen</li>
        <li>automatisch bedragen en btw laten berekenen</li>
        <li>je factuur als PDF downloaden</li>
      </ul>
      <p>
        Voor het maken en downloaden van een factuur heb je geen betaald abonnement nodig.
      </p>

      <h2>Gratis factuur app zonder abonnement</h2>
      <p>
        Veel factuurapps werken met een maandabonnement. Dat kan handig zijn als je uitgebreide
        boekhouding, bankkoppelingen of andere administratieve functies nodig hebt.
      </p>
      <p>Maar niet iedere zzp&apos;er heeft dat nodig.</p>
      <p>
        Als je vooral professionele facturen wilt maken, kun je FactuurBaas gratis gebruiken.
      </p>
      <p>
        Je maakt je factuur online en downloadt hem daarna als PDF. Vervolgens kun je de PDF zelf
        naar je klant sturen.
      </p>
      <p>
        Wil je je facturen bewaren en meer overzicht hebben? Dan kun je ook een gratis account
        gebruiken.
      </p>

      <h2>FactuurBaas installeren als app</h2>
      <p>
        FactuurBaas is een <strong>Progressive Web App (PWA)</strong>. Dat betekent dat je de
        website op ondersteunde apparaten aan je beginscherm kunt toevoegen en vervolgens vrijwel
        zoals een gewone app kunt openen.
      </p>
      <p>
        Na het installeren staat FactuurBaas tussen je andere apps en opent het in een eigen
        venster.
      </p>

      <InstallAppCta
        title="Installeer FactuurBaas nu"
        text="Eén tik en FactuurBaas staat op je beginscherm — sneller dan elke keer de website zoeken."
      />

      <h3>FactuurBaas installeren op Android</h3>
      <p>
        Gebruik de blauwe knop <strong>Download de gratis app</strong> hierboven wanneer die
        beschikbaar is. Of log in op FactuurBaas — dan kan ook de installatiebanner onderaan
        verschijnen.
      </p>
      <p>Daarna kun je FactuurBaas rechtstreeks vanaf je beginscherm openen.</p>

      <h3>FactuurBaas toevoegen op iPhone</h3>
      <p>Op een iPhone kun je FactuurBaas via Safari aan je beginscherm toevoegen.</p>
      <p>Open FactuurBaas in Safari en kies:</p>
      <p>
        <strong>Delen → Zet op beginscherm</strong>
      </p>
      <p>
        Of tik op <strong>Toon iPhone-stappen</strong> in de blauwe downloadblokken op deze pagina.
      </p>
      <p>Daarna verschijnt FactuurBaas als icoon op je iPhone.</p>

      <h2>Moet ik FactuurBaas installeren?</h2>
      <p>Nee.</p>
      <p>Je kunt FactuurBaas ook gewoon in je browser gebruiken.</p>
      <p>
        Installeren is vooral handig wanneer je regelmatig vanaf je telefoon facturen maakt. Je
        hoeft dan niet iedere keer naar de website te zoeken of het adres opnieuw in te voeren.
      </p>
      <p>Tik op het FactuurBaas-icoon en je kunt direct naar je dashboard.</p>

      <h2>Factuur maken op je telefoon</h2>
      <p>
        Een factuur maken vanaf je telefoon werkt in principe hetzelfde als op een computer.
      </p>
      <p>
        Je vult je bedrijfsgegevens en de gegevens van je klant in, voegt je producten of
        werkzaamheden toe en kiest het juiste btw-percentage.
      </p>
      <p>FactuurBaas berekent vervolgens de bedragen voor je.</p>
      <p>Daarna kun je de factuur als PDF downloaden.</p>
      <p>Dat maakt het bijvoorbeeld handig voor:</p>
      <ul>
        <li>schilders</li>
        <li>klusbedrijven</li>
        <li>installateurs</li>
        <li>fotografen</li>
        <li>consultants</li>
        <li>coaches</li>
        <li>hoveniers</li>
        <li>schoonmakers</li>
        <li>andere zzp&apos;ers die veel onderweg zijn</li>
      </ul>
      <p>
        Je hoeft niet te wachten tot je weer achter je computer zit om een factuur te maken.
      </p>

      <FactuurCta
        title="Factuur maken op je telefoon"
        text="Vul je gegevens in, download de PDF en stuur hem naar je klant — ook onderweg."
        label="Start gratis factuur →"
      />

      <h2>Gratis factuur app voor zzp&apos;ers</h2>
      <p>Voor een zzp&apos;er is vooral belangrijk dat een factuurtool snel werkt.</p>
      <p>Je wilt meestal gewoon:</p>
      <p>
        <strong>klus klaar → factuur maken → PDF downloaden → naar de klant sturen.</strong>
      </p>
      <p>
        Daarvoor heb je niet automatisch een uitgebreid boekhoudprogramma nodig.
      </p>
      <p>
        FactuurBaas is daarom vooral geschikt voor ondernemers die eenvoudig facturen willen maken
        zonder direct vast te zitten aan een betaald softwarepakket.
      </p>
      <p>
        Wordt je administratie later uitgebreider? Dan kan een volledig boekhoudprogramma wel
        interessant worden.
      </p>
      <p>
        <TextLink href="/blogs/wanneer-boekhoudsoftware-nodig-zzp">
          Bekijk wanneer je als zzp&apos;er een boekhoudprogramma nodig hebt
        </TextLink>
        .
      </p>

      <h2>Factuur app of boekhoud app?</h2>
      <p>Een factuur app en een boekhoud app zijn niet precies hetzelfde.</p>
      <p>
        Een <strong>factuur app</strong> richt zich vooral op het maken en beheren van facturen.
      </p>
      <p>
        Een volledig <strong>boekhoudprogramma</strong> kan daarnaast functies bieden zoals
        bankkoppelingen, automatische verwerking van transacties, uitgebreide rapportages en
        ondersteuning bij je complete boekhouding.
      </p>
      <p>
        Heb je maar een eenvoudige administratie? Dan kan een gratis factuurtool voldoende zijn.
      </p>
      <p>
        Heb je veel transacties, zakelijke kosten en administratieve handelingen? Dan wordt
        boekhoudsoftware interessanter.
      </p>
      <p>Twijfel je?</p>
      <p>
        <TextLink href="/tools/boekhoudprogramma-check">
          Doe de gratis boekhoudprogramma-check
        </TextLink>
        .
      </p>

      <h2>Gratis factuur app zonder App Store</h2>
      <p>
        Een voordeel van een web-app is dat je niet afhankelijk bent van een traditionele
        app-download.
      </p>
      <p>Je opent FactuurBaas gewoon via je browser.</p>
      <p>
        Wil je sneller toegang? Dan voeg je FactuurBaas toe aan je beginscherm.
      </p>
      <p>
        Hierdoor kun je FactuurBaas gebruiken op je telefoon zonder eerst een traditionele app uit
        een appwinkel te installeren.
      </p>

      <h2>Factuur maken zonder account</h2>
      <p>Wil je alleen snel een factuur maken?</p>
      <p>Daarvoor hoef je bij FactuurBaas geen account aan te maken.</p>
      <p>
        Je kunt direct naar de factuurmaker gaan, je gegevens invullen en je factuur als PDF
        downloaden.
      </p>
      <p>
        Een account is vooral handig wanneer je FactuurBaas vaker gebruikt en toegang wilt tot je
        dashboard en opgeslagen gegevens.
      </p>
      <p>
        <TextLink href="/create-invoice">Maak een gratis factuur zonder account</TextLink>.
      </p>
      <p>
        Meer lezen:{' '}
        <TextLink href="/blogs/factureren-zonder-account">factureren zonder account</TextLink>
        {' · '}
        <TextLink href="/blogs/gratis-factuur-zzp">gratis factuur voor zzp&apos;ers</TextLink>
        {' · '}
        <TextLink href="/blogs/factuur-pdf-downloaden">factuur als PDF downloaden</TextLink>.
      </p>

      <h2>Veelgestelde vragen over de FactuurBaas app</h2>

      <h3>Is FactuurBaas een app?</h3>
      <p>
        FactuurBaas is een Progressive Web App (PWA). Je gebruikt FactuurBaas via je browser, maar
        kunt de web-app op ondersteunde telefoons ook aan je beginscherm toevoegen en vanuit een
        eigen venster openen.
      </p>

      <h3>Is de FactuurBaas factuur app gratis?</h3>
      <p>
        Ja. Je kunt gratis facturen maken met FactuurBaas. Je hebt geen betaald abonnement nodig om
        een factuur te maken en als PDF te downloaden.
      </p>

      <h3>Kan ik een factuur maken op mijn telefoon?</h3>
      <p>
        Ja. De factuurmaker van FactuurBaas kan op een smartphone worden gebruikt. Je kunt de
        factuur invullen en daarna als PDF downloaden.
      </p>

      <h3>Kan ik FactuurBaas installeren op Android?</h3>
      <p>
        Ja, op ondersteunde browsers en apparaten kun je FactuurBaas als web-app installeren.
        Wanneer installatie beschikbaar is, kan FactuurBaas je hiervoor een installatieoptie
        tonen.
      </p>

      <h3>Kan ik FactuurBaas op mijn iPhone installeren?</h3>
      <p>
        Je kunt FactuurBaas via Safari aan je beginscherm toevoegen. Open de website, tik op{' '}
        <strong>Delen</strong> en vervolgens op <strong>Zet op beginscherm</strong>.
      </p>

      <h3>Moet ik een account maken?</h3>
      <p>
        Nee. Voor het maken van een losse factuur heb je geen account nodig. Een gratis account
        geeft je toegang tot extra mogelijkheden, waaronder je dashboard.
      </p>

      <h3>Kan ik mijn factuur als PDF downloaden?</h3>
      <p>
        Ja. Nadat je je factuur hebt gemaakt, kun je deze als PDF downloaden en vervolgens zelf
        naar je klant sturen.
      </p>

      <h3>Heb ik een boekhoudprogramma nodig naast een factuur app?</h3>
      <p>
        Niet altijd. Voor een eenvoudige administratie kan een factuurtool voldoende zijn.
        Naarmate je meer transacties, kosten en administratieve werkzaamheden krijgt, kan een
        volledig boekhoudprogramma interessanter worden.
      </p>

      <h2>Gratis factuur maken vanaf je telefoon</h2>
      <p>
        Wil je geen betaald factuurprogramma en gewoon snel een professionele factuur maken?
      </p>
      <p>
        Gebruik FactuurBaas direct in je browser of voeg de web-app toe aan je beginscherm voor
        snelle toegang.
      </p>
      <p>
        <strong>
          Geen verplicht abonnement. Geen app-download nodig. Gewoon je factuur maken en als PDF
          downloaden.
        </strong>
      </p>

      <InstallAppCta
        title="Zet FactuurBaas op je telefoon"
        text="Download de gratis app naar je beginscherm en maak daarna meteen je eerste factuur."
      />

      <FactuurCta label="Maak nu gratis een factuur →" />
    </>
  ),
};
