export const ZIT_HUB_PATH = '/zakelijk-internet-telefonie';
export const ZIT_INTERNET_PATH = '/zakelijk-internet';
export const ZIT_SIM_PATH = '/zakelijk-sim-only';

/** Daisycon / glp8 KPN destinations. `ws` stays empty until a campaign sub-id is set. */
export const KPN_AFFILIATE = {
  zakelijk: 'https://glp8.net/c/?si=19863&li=1855892&wi=430588&ws=',
  internet: 'https://glp8.net/c/?si=19863&li=1855892&wi=430588&ws=',
  mobiel: 'https://glp8.net/c/?si=19863&li=1865549&wi=430588&ws=',
  simOnly: 'https://glp8.net/c/?si=19863&li=1865554&wi=430588&ws=',
  phones: 'https://glp8.net/c/?si=19863&li=1865556&wi=430588&ws=',
};

export const KPN_AFFILIATE_REL = 'sponsored noopener noreferrer';

export const ZIT_DISCLOSURE =
  'FactuurBaas kan een vergoeding ontvangen wanneer je via een link op deze pagina een abonnement afsluit. Dit kost jou niets extra.';

export const ZIT_SLUGS = [
  'telefoonkosten-aftrekbaar-zzp',
  'telefoon-zakelijk-of-prive-zzp',
  'internetkosten-aftrekbaar-zzp',
  'zakelijk-telefoonabonnement-zzp',
  'zakelijk-internet-thuis',
  'internet-zakelijk-of-prive-zzp',
  'zakelijk-sim-only-zzp',
  'telefoon-van-de-zaak-zzp',
  'zakelijk-internet-kosten',
  'zakelijk-mobiel-zonder-toestel',
  'glasvezel-zzp',
  'btw-telefoon-aftrekken-zzp',
];

export const ZIT_INTERNET_GUIDES = [
  {
    slug: 'zakelijk-internet-kosten',
    label: 'Wat kost zakelijk internet?',
    text: 'Ontdek hoe maandprijzen, installatiekosten, snelheid en contractduur de totale kosten bepalen.',
  },
  {
    slug: 'zakelijk-internet-thuis',
    label: 'Zakelijk internet thuis als zzp’er',
    text: 'Lees wanneer een zakelijk internetabonnement op je woonadres interessant kan zijn.',
  },
  {
    slug: 'internet-zakelijk-of-prive-zzp',
    label: 'Internet zakelijk of privé als zzp’er',
    text: 'Vergelijk particuliere en zakelijke internetabonnementen en ontdek waar je op moet letten.',
  },
  {
    slug: 'glasvezel-zzp',
    label: 'Glasvezel voor zzp’ers: is het nodig?',
    text: 'Ontdek wanneer glasvezel meerwaarde heeft voor jouw werkzaamheden.',
  },
  {
    slug: 'internetkosten-aftrekbaar-zzp',
    label: 'Internetkosten aftrekbaar als zzp’er',
    text: 'Lees welke fiscale regels gelden voor internetkosten en thuisgebruik.',
  },
];

export const ZIT_MOBILE_GUIDES = [
  {
    slug: 'zakelijk-sim-only-zzp',
    label: 'Zakelijk Sim Only voor zzp’ers',
    text: 'Ontdek de voordelen, kosten en aandachtspunten van zakelijke Sim Only.',
  },
  {
    slug: 'zakelijk-mobiel-zonder-toestel',
    label: 'Zakelijk mobiel abonnement zonder toestel',
    text: 'Lees waarom je bestaande smartphone combineren met een abonnement interessant kan zijn.',
  },
  {
    slug: 'zakelijk-telefoonabonnement-zzp',
    label: 'Zakelijk telefoonabonnement voor zzp’ers',
    text: 'Vergelijk de verschillende mogelijkheden voor zakelijke mobiele telefonie.',
  },
  {
    slug: 'telefoon-zakelijk-of-prive-zzp',
    label: 'Telefoon zakelijk of privé als zzp’er',
    text: 'Ontdek welke keuze past bij jouw gebruik en administratie.',
  },
  {
    slug: 'telefoon-van-de-zaak-zzp',
    label: 'Telefoon van de zaak als zzp’er',
    text: 'Lees hoe een zakelijke smartphone fiscaal en administratief werkt.',
  },
  {
    slug: 'telefoonkosten-aftrekbaar-zzp',
    label: 'Telefoonkosten aftrekbaar als zzp’er',
    text: 'Ontdek welke telefoonkosten je onder voorwaarden kunt aftrekken.',
  },
  {
    slug: 'btw-telefoon-aftrekken-zzp',
    label: 'Btw telefoon aftrekken als zzp’er',
    text: 'Lees wanneer je btw op telefoonkosten kunt terugvragen.',
  },
];

export const ZIT_GUIDES = [...ZIT_MOBILE_GUIDES, ...ZIT_INTERNET_GUIDES];

export function isZitGuideSlug(slug) {
  return ZIT_SLUGS.includes(slug);
}

export function getZitArticleBreadcrumbs(articleTitle) {
  return [
    { name: 'Home', href: '/' },
    { name: 'Gidsen', href: '/blogs' },
    { name: 'Zakelijk internet & telefonie', href: '/blogs?pillar=zakelijk-internet-telefonie' },
    { name: articleTitle },
  ];
}
