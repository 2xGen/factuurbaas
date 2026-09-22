/**
 * Blog pillars: topic-based grouping of blog slugs.
 * Used on the homepage (category cards) and /blogs pillar filter.
 *
 * title / titleAccent → /blogs hub + filters
 * cardTitle / cardAccent / cardBlurb → homepage cards (short & clean)
 */
export const blogPillars = [
  {
    id: 'starten',
    title: 'Starten met factureren',
    titleAccent: 'factureren',
    cardTitle: 'Starten met factureren',
    cardAccent: 'factureren',
    cardBlurb: 'Je eerste factuur, zonder account.',
    description:
      "Je eerste factuur, gratis factuur maken zonder account en alles voor wie net begint als zzp'er.",
    slugs: [
      'factureren-startende-zzper',
      'factuur-maken-zzp',
      'gratis-factuur-zzp',
      'factureren-zonder-account',
      'gratis-factuur-app',
    ],
  },
  {
    id: 'btw-belasting',
    title: 'Btw & belasting',
    titleAccent: '& belasting',
    cardTitle: 'Btw & belasting',
    cardAccent: '& belasting',
    cardBlurb: 'Tarieven, aangifte en fouten voorkomen.',
    description:
      'Btw op je factuur, belasting reserveren, boetes voorkomen en factureren naar het buitenland.',
    slugs: [
      'factuur-fouten-voorkomen',
      'btw-factuur-zzp',
      'verschil-factuur-offerte',
      'btw-te-laat-betaald',
      'boetes-fouten-facturen',
      'hoeveel-geld-apart-belasting-zzper',
      'buitenlandse-klanten-factureren',
    ],
    guideSlugs: [
      'welke-btw-rekenen-zzper',
      'btw-terugrekenen',
      'btw-uit-bedrag-halen',
      'inclusief-btw-naar-exclusief-btw',
      'verschil-9-en-21-btw',
      'wanneer-gebruik-je-0-btw',
      'btw-berekenen-excel',
      'veelgemaakte-fouten-btw-berekenen',
      'hoe-rond-je-btw-af',
      'btw-berekenen-buitenlandse-klanten',
    ],
  },
  {
    id: 'offertes',
    title: 'Offerte-gidsen: maken, versturen en factureren',
    titleAccent: 'maken, versturen en factureren',
    cardTitle: 'Offertes',
    cardAccent: null,
    cardBlurb: 'Maken, versturen en omzetten naar factuur.',
    description:
      'Offertes maken, voorbeelden en alles over het verschil tussen offerte en factuur.',
    slugs: ['verschil-factuur-offerte'],
    guideSlugs: [
      'hoe-maak-je-een-offerte',
      'wat-moet-er-op-een-offerte-staan',
      'offerte-voorbeeld',
      'offerte-maken-in-pdf',
      'offerte-maken-voor-zzper',
      'geldigheid-van-een-offerte',
      'wanneer-is-een-offerte-bindend',
      'offerte-accepteren-wat-gebeurt-er-na',
      'offerte-omzetten-naar-factuur',
      'digitale-offertes-versturen',
      'offerte-aanpassen',
    ],
  },
  {
    id: 'uurtarief',
    title: 'Uurtarief & inkomen',
    titleAccent: '& inkomen',
    cardTitle: 'Uurtarief & inkomen',
    cardAccent: '& inkomen',
    cardBlurb: 'Bepaal je tarief en bereken je omzet.',
    description:
      "Welk uurtarief moet je rekenen als zzp'er? Bereken je tarief, omzet en inkomen met praktische gidsen en gratis tools.",
    slugs: [],
    guideSlugs: ['welk-uurtarief-moet-ik-rekenen'],
  },
  {
    id: 'tools',
    title: 'Tools & calculators',
    titleAccent: '& calculators',
    cardTitle: 'Tools & calculators',
    cardAccent: '& calculators',
    cardBlurb: 'Gratis calculators, zonder account.',
    description:
      "Gratis online tools voor zzp'ers: factuur maken, btw, offerte, uurtarief en meer — met uitleg hoe je ze gebruikt.",
    slugs: [],
    guideSlugs: ['deze-7-tools-zijn-heel-handig-voor-zzpers'],
  },
  {
    id: 'templates-voorbeelden',
    title: 'Templates & voorbeelden',
    titleAccent: '& voorbeelden',
    cardTitle: 'Templates & voorbeelden',
    cardAccent: '& voorbeelden',
    cardBlurb: 'Templates en PDF-facturen downloaden.',
    description:
      'Professionele factuur templates en je factuur eenvoudig als PDF downloaden.',
    slugs: ['factuur-templates-zzp', 'factuur-pdf-downloaden'],
  },
  {
    id: 'boekhouden',
    title: "Boekhouden als zzp'er",
    titleAccent: "zzp'er",
    cardTitle: "Boekhouden als zzp'er",
    cardAccent: "zzp'er",
    cardBlurb: 'Zelf doen of software kiezen.',
    description:
      "Zelf boekhouden als zzp'er, welk boekhoudprogramma past bij jou, en wanneer software of een boekhouder handig is.",
    slugs: [
      'wanneer-boekhoudsoftware-nodig-zzp',
      'beste-boekhoudprogramma-zzp',
      'gratis-factuurtool-vs-boekhoudprogramma',
      'boekhoudprogramma-eenmanszaak',
      'moneybird-vs-jortt',
      'moneybird-vs-eboekhouden',
      'jortt-vs-eboekhouden',
    ],
    guideSlugs: [
      'zelf-boekhouden-zzp',
      'boekhouding-zzp',
      'kosten-boekhoudprogramma-zzp',
      'gratis-boekhoudprogramma-zzp',
    ],
  },
  {
    id: 'zakelijke-kosten',
    title: 'Zakelijke kosten & uitgaven',
    titleAccent: 'kosten & uitgaven',
    cardTitle: 'Zakelijke kosten & uitgaven',
    cardAccent: 'kosten & uitgaven',
    cardBlurb: 'Wat mag je aftrekken — en hoe houd je het bij.',
    description:
      "Welke kosten zijn aftrekbaar? Alles over zakelijke uitgaven, btw, bonnetjes en kosten bijhouden als zzp'er.",
    slugs: [
      'zakelijke-kosten-zzp',
      'zakelijke-uitgaven-bijhouden-zzp',
      'btw-zakelijke-kosten-aftrekken',
      'zakelijke-kosten-prive-betaald',
      'privekosten-zakelijk-betalen',
      'laptop-aftrekbaar-zzp',
      'telefoon-aftrekbaar-zzp',
      'internet-aftrekbaar-zzp',
      'software-abonnementen-aftrekken-zzp',
      'reiskosten-aftrekken-zzp',
      'werkkleding-aftrekbaar-zzp',
      'werkruimte-thuis-aftrekbaar-zzp',
    ],
  },
  {
    id: 'hypotheek',
    title: "Hypotheek als zzp'er",
    titleAccent: "zzp'er",
    cardTitle: "Hypotheek als zzp'er",
    cardAccent: "zzp'er",
    cardBlurb: 'Inkomen, cijfers en maximale hypotheek.',
    description:
      "Hoe werkt een hypotheek als zzp'er? Overzicht van inkomen, cijfers, maximale hypotheek en advies — start bij de hub.",
    slugs: [
      'hypotheek-als-zzper-hoe-werkt-het',
      'hoeveel-hypotheek-kan-ik-krijgen-als-zzper',
      'hypotheek-met-eenmanszaak',
      'hypotheek-voor-startende-zzpers',
      'hoe-lang-zzper-zijn-voor-hypotheek',
      'welk-inkomen-telt-voor-hypotheek-als-zzper',
      'winst-uit-onderneming-voor-hypotheek',
      'hypotheek-met-wisselend-inkomen-als-zzper',
      'jaarcijfers-nodig-voor-hypotheek-als-zzper',
      'hypotheek-zzp-zonder-3-jaar-cijfers',
      'hypotheek-berekenen-als-zzper',
      'hypotheekadviseur-voor-zzpers',
    ],
  },
  {
    id: 'aov',
    title: "AOV voor zzp'ers",
    titleAccent: "zzp'ers",
    cardTitle: "AOV voor zzp'ers",
    cardAccent: "zzp'ers",
    cardBlurb: 'Dekking, wachttijd en kosten vergelijken.',
    description:
      "Arbeidsongeschiktheidsverzekering voor zzp'ers: dekking, wachttijd, kosten en vergelijken — met gratis calculator.",
    slugs: [
      'aov-zzp',
      'wat-kost-een-aov-voor-zzpers',
      'aov-voor-startende-zzpers',
      'aov-verplicht-voor-zzpers',
      'aov-zonder-medische-keuring',
      'aov-met-korte-wachttijd',
      'aov-met-lange-wachttijd',
      'hoeveel-aov-heb-ik-nodig',
      'aov-berekenen-voor-zzpers',
    ],
  },
  {
    id: 'betaling-beheer',
    title: 'Betaling & beheer',
    titleAccent: '& beheer',
    cardTitle: 'Betaling & beheer',
    cardAccent: '& beheer',
    cardBlurb: 'Sneller betaald en overzicht houden.',
    description:
      "Sneller betaald krijgen, factuurbeheer en je zakelijke rekening als zzp'er.",
    slugs: [
      'factuur-niet-betaald-wat-mag-je-doen',
      'sneller-betalen-factuur',
      'factuurbeheer-overzicht',
      'zakelijke-rekening-zzp',
      'revolut-business-zzp-voordelen-nadelen',
    ],
  },
];

/** Split pillar title so the accent phrase can be rendered in warm-orange. */
export function formatPillarTitle(title, titleAccent) {
  if (!titleAccent) return title;
  const index = title.lastIndexOf(titleAccent);
  if (index === -1) return title;
  return {
    before: title.slice(0, index),
    accent: titleAccent,
    after: title.slice(index + titleAccent.length),
  };
}

export function getPillarHref(pillar) {
  if (pillar.id === 'hypotheek') return '/blogs/hypotheek-als-zzper';
  if (pillar.id === 'aov') return '/blogs/aov-zzp';
  if (pillar.id === 'zakelijke-kosten') return '/blogs/zakelijke-kosten-zzp';
  return `/blogs?pillar=${pillar.id}`;
}
