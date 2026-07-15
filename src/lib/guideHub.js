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
};

/** Hub FAQs with short answers; each links to a guide. */
export const guideHubFaqs = [
  {
    question: 'Hoe maak je een offerte als zzp\'er?',
    answer: 'Voeg bedrijfs- en klantgegevens toe, beschrijf je werkzaamheden, vermeld prijs en btw, en stel een geldigheidsduur in.',
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
    answer: 'Bedrijfsgegevens, klantgegevens, omschrijving, prijzen, btw, offertenummer, datum en geldigheidsduur.',
    guideSlug: 'wat-moet-er-op-een-offerte-staan',
  },
  {
    question: 'Kan ik een offerte omzetten naar een factuur?',
    answer: 'Ja. Na akkoord kun je de gegevens van je offerte gebruiken om een factuur te maken in FactuurBaas.',
    guideSlug: 'offerte-omzetten-naar-factuur',
  },
  {
    question: 'Hoelang is een offerte geldig?',
    answer: 'Dat bepaal je zelf. Veel ondernemers kiezen 14 of 30 dagen en vermelden dit op de offerte.',
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
    question: 'Wat is het verschil tussen 9% en 21% btw?',
    answer: '21% is het standaardtarief; 9% geldt voor een beperkt aantal producten en diensten, zoals voeding en boeken.',
    guideSlug: 'verschil-9-en-21-btw',
  },
  {
    question: 'Hoe verstuur ik een offerte digitaal?',
    answer: 'Download je offerte als PDF en verstuur per e-mail met offertenummer en geldigheidsduur in je bericht.',
    guideSlug: 'digitale-offertes-versturen',
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
  return null;
}
