import { blogPillars } from '@/lib/blogPillars';

export const GUIDES_PER_PAGE = 18;

/** Pillars that include at least one guide. */
export function getGuidePillars() {
  return blogPillars.filter((pillar) => pillar.guideSlugs?.length);
}

export const guideHubIntro = {
  default: {
    title: 'Factuur tips voor zzp\'ers',
    paragraphs: [
      'Artikelen en gidsen over factuur maken, btw berekenen, offertes en factuurbeheer. Praktische uitleg voor zzp\'ers en kleine ondernemers — zonder ingewikkelde taal.',
      'Filter op onderwerp of blader door alles. Elke gids koppelt door naar onze gratis tools, zodat je direct een factuur, offerte of btw-berekening kunt maken.',
    ],
  },
  'btw-belasting': {
    title: 'Btw-gidsen voor zzp\'ers',
    paragraphs: [
      'Welke btw moet je rekenen? Hoe bereken je btw terug uit een bedrag inclusief btw? In deze gidsen lees je alles over 21%, 9% en 0% btw, veelgemaakte fouten en btw voor buitenlandse klanten.',
      'Gebruik onze gratis btw calculator om bedragen direct te berekenen en lees de gids die bij jouw situatie past.',
    ],
  },
  offertes: {
    title: 'Offerte-gidsen: maken, versturen en factureren',
    paragraphs: [
      'Een professionele offerte helpt je om duidelijke afspraken te maken vóór je start met een opdracht. In deze gidsen lees je hoe je een offerte maakt, wat erop moet staan, hoe je deze als PDF verstuurt en hoe je na akkoord omzet naar een factuur.',
      'Maak gratis een offerte met FactuurBaas — zonder account en direct downloadbaar als PDF.',
    ],
  },
  uurtarief: {
    title: "Uurtarief-gidsen voor zzp'ers",
    paragraphs: [
      "Welk uurtarief moet je vragen? Hoe bereken je omzet uit je tarief? In deze gidsen leer je hoe je als zzp'er een realistisch uurtarief bepaalt op basis van inkomen, kosten en factureerbare uren.",
      'Gebruik onze gratis uurtarief calculator om direct te berekenen welk tarief bij jouw situatie past.',
    ],
  },
  tools: {
    title: "Tools voor zzp'ers",
    paragraphs: [
      "Welke online tools helpen je als zzp'er met factureren, offertes, btw en uurtarieven? In deze gidsen lees je welke tools handig zijn — en ga je direct aan de slag zonder account.",
      'Alle FactuurBaas-tools zijn gratis. Kies een tool, lees hoe het werkt en download wat je nodig hebt.',
    ],
  },
  boekhouden: {
    title: "Boekhouden als zzp'er",
    paragraphs: [
      "Kun je zelf je boekhouding doen? Wanneer heb je een boekhoudprogramma nodig? En wat is het verschil tussen een factuurtool en boekhoudsoftware? In deze gidsen lees je hoe je als zzp'er je administratie regelt.",
      'Doe ook de gratis boekhoudprogramma-check om te zien welk type oplossing bij jouw situatie past.',
    ],
  },
};

/** Hub FAQs with short answers; each links to a guide. */
export const guideHubFaqs = [
  {
    question: 'Hoe maak je een offerte als zzp\'er?',
    answer: 'Vul je bedrijfs- en klantgegevens in, geef de offerte een nummer, beschrijf wat je levert, vermeld prijs en btw, en voeg geldigheidsduur en voorwaarden toe.',
    guideSlug: 'hoe-maak-je-een-offerte',
  },
  {
    question: 'Welke btw moet ik rekenen als zzp\'er?',
    answer: 'Meestal 21% btw, soms 9% voor specifieke producten of diensten, en 0% bij export of btw-verlegd.',
    guideSlug: 'welke-btw-rekenen-zzper',
  },
  {
    question: 'Hoe bereken je btw terug uit een bedrag inclusief btw?',
    answer: 'Deel het bedrag inclusief btw door 1,21 (bij 21%) om het bedrag exclusief btw te krijgen.',
    guideSlug: 'btw-terugrekenen',
  },
  {
    question: 'Wat moet er op een offerte staan?',
    answer:
      'Er is geen vaste wettelijke checklist. Neem in ieder geval bedrijfs- en klantgegevens, omschrijving, prijs, btw-info, datum, geldigheid en voorwaarden op.',
    guideSlug: 'wat-moet-er-op-een-offerte-staan',
  },
  {
    question: 'Kan ik een offerte omzetten naar een factuur?',
    answer:
      'Ja. Na akkoord kun je de offerte als basis gebruiken voor een factuur. Factureer volgens de afgesproken betalingsmomenten — bijvoorbeeld na oplevering of bij een voorschot.',
    guideSlug: 'offerte-omzetten-naar-factuur',
  },
  {
    question: 'Hoe lang is een offerte geldig?',
    answer:
      'Er is geen vaste wettelijke termijn. Kies zelf een passende geldigheidsduur (vaak 14 of 30 dagen) en vermeld die duidelijk op de offerte.',
    guideSlug: 'geldigheid-van-een-offerte',
  },
  {
    question: 'Mag ik een offerte aanpassen na verzending?',
    answer: 'Ja, zolang de klant nog geen akkoord heeft gegeven. Stuur een nieuwe versie met een duidelijk offertenummer.',
    guideSlug: 'offerte-aanpassen',
  },
  {
    question: 'Wanneer is een offerte bindend?',
    answer: 'Pas wanneer de klant akkoord gaat. Vóór acceptatie is een offerte meestal een voorstel.',
    guideSlug: 'wanneer-is-een-offerte-bindend',
  },
  {
    question: 'Wat valt onder 9% en 21% btw?',
    answer:
      '21% is het algemene tarief voor de meeste producten en diensten. 9% geldt alleen voor specifiek aangewezen producten en diensten, zoals bepaalde voeding, publicaties en bepaalde werkzaamheden aan woningen.',
    guideSlug: 'verschil-9-en-21-btw',
  },
  {
    question: 'Hoe maak ik online een offerte?',
    answer:
      'Vul bedrijfs- en klantgegevens, werkzaamheden en prijzen in. Met FactuurBaas download je de offerte gratis als PDF en verstuur je hem digitaal — zonder account.',
    guideSlug: 'digitale-offertes-versturen',
  },
  {
    question: "Welk uurtarief moet ik rekenen als zzp'er?",
    answer:
      'Bereken je benodigde omzet en deel die door je factureerbare uren. Dat geeft je minimale uurtarief. Gebruik de gratis uurtarief calculator voor jouw situatie.',
    guideSlug: 'welk-uurtarief-moet-ik-rekenen',
  },
  {
    question: "Welke tools zijn handig voor zzp'ers?",
    answer:
      'Voor je administratie: factuur maken, offerte maker, btw calculator, uurtarief calculator, factuurnummer generator, betaaltermijn calculator en KOR-check — allemaal gratis bij FactuurBaas.',
    guideSlug: 'deze-7-tools-zijn-heel-handig-voor-zzpers',
  },
  {
    question: "Kan ik als zzp'er zelf mijn boekhouding doen?",
    answer:
      'Ja. Je mag je administratie zelf bijhouden. Zorg wel dat je facturen, kosten, banktransacties en btw goed bijhoudt en bewaart.',
    guideSlug: 'zelf-boekhouden-zzp',
  },
  {
    question: "Wat moet een zzp'er bijhouden in de boekhouding?",
    answer:
      'Onder andere inkomsten, verkoopfacturen, zakelijke kosten, banktransacties, btw (indien van toepassing) en de bijbehorende bewijsstukken.',
    guideSlug: 'boekhouding-zzp',
  },
  {
    question: "Wat kost een boekhoudprogramma voor een zzp'er?",
    answer:
      'De prijs varieert van gratis of enkele euro’s per maand tot €20, €30 of €40+ per maand, afhankelijk van pakket en functies.',
    guideSlug: 'kosten-boekhoudprogramma-zzp',
  },
  {
    question: "Is er een gratis boekhoudprogramma voor zzp'ers?",
    answer:
      'Soms wel, maar controleer altijd welke functies echt gratis zijn. Een gratis factuurtool is niet hetzelfde als een volledig boekhoudprogramma.',
    guideSlug: 'gratis-boekhoudprogramma-zzp',
  },
];

export function getBlogHubIntro(pillarId) {
  if (pillarId && guideHubIntro[pillarId]) {
    return guideHubIntro[pillarId];
  }
  if (pillarId) {
    const pillar = blogPillars.find((p) => p.id === pillarId);
    if (pillar) {
      return {
        title: pillar.title,
        paragraphs: [pillar.description],
      };
    }
  }
  return guideHubIntro.default;
}

/** @deprecated Use getBlogHubIntro */
export function getGuideHubIntro(pillarId) {
  return getBlogHubIntro(pillarId);
}

export function clusterToPillarId(cluster) {
  if (cluster === 'offertes') return 'offertes';
  if (cluster === 'btw') return 'btw-belasting';
  if (cluster === 'uurtarief') return 'uurtarief';
  if (cluster === 'tools') return 'tools';
  if (cluster === 'boekhouden') return 'boekhouden';
  return null;
}
