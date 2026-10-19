import LandingHubPage from '@/components/landing/LandingHubPage';

export const metadata = {
  title: 'Gratis Factuur Tools voor ZZP\'ers | FactuurBaas',
  description:
    'Gratis tools voor zzp\'ers, gegroepeerd rond je bedrijf: factureren, btw, inkomen en financiële zekerheid. Zonder account.',
  alternates: { canonical: 'https://factuurbaas.nl/tools' },
};

const toolGroups = [
  {
    title: 'Factureren',
    links: [
      {
        label: 'Factuur maken',
        href: '/tools/factuur-maken',
        description: 'Maak een factuur en download hem als PDF. Geen account nodig.',
      },
      {
        label: 'Offerte maken',
        href: '/tools/offerte-maker',
        description: 'Maak een offerte en zet hem later om naar een factuur.',
      },
      {
        label: 'Factuurnummer generator',
        href: '/tools/factuurnummer-generator',
        description: 'Stel een uniek factuurnummer samen.',
      },
      {
        label: 'Betaaltermijn / vervaldatum',
        href: '/tools/betaaltermijn-calculator',
        description: 'Reken uit wanneer een factuur betaald moet zijn.',
      },
    ],
  },
  {
    title: 'BTW & belasting',
    links: [
      {
        label: 'BTW calculator',
        href: '/tools/btw-calculator',
        description: 'Bedrag inclusief of exclusief btw. 9%, 21% of een eigen percentage.',
      },
      {
        label: 'KOR calculator',
        href: '/tools/kor-calculator',
        description: 'Zie of je omzet onder de KOR-grens van € 20.000 blijft.',
      },
    ],
  },
  {
    title: 'Administratie',
    links: [
      {
        label: 'Boekhoudprogramma vergelijken',
        href: '/boekhoudprogramma-vergelijken',
        description: "Vergelijk prijzen, functies en pakketten van boekhoudprogramma's.",
      },
      {
        label: 'Boekhoudprogramma-check',
        href: '/tools/boekhoudprogramma-check',
        description: 'Ontdek welk type oplossing bij jouw administratie past.',
      },
      {
        label: 'Zelf boekhouden of uitbesteden',
        href: '/tools/boekhouding-uitbesteden-calculator',
        description: 'Vergelijk je administratietijd met de kosten van een boekhouder.',
      },
    ],
  },
  {
    title: 'Inkomen & bedrijf',
    links: [
      {
        label: 'Uurtarief calculator',
        href: '/tools/uurtarief-calculator',
        description: 'Welk tarief heb je nodig voor het inkomen dat je wilt.',
      },
      {
        label: 'Uurtarief → inkomen',
        href: '/tools/uurtarief-naar-inkomen',
        description: 'Wat je uurtarief per maand oplevert, vóór belasting.',
      },
      {
        label: 'Marge calculator',
        href: '/tools/marge-calculator',
        description: 'Winst en marge op inkoop- en verkoopprijs.',
      },
    ],
  },
  {
    title: 'Financiële zekerheid',
    links: [
      {
        label: 'Hypotheek ZZP',
        href: '/tools/hypotheek-zzp',
        description: "Hoe een hypotheek als zzp'er werkt, en een indicatie van het maximum.",
      },
      {
        label: 'AOV ZZP',
        href: '/tools/aov-zzp',
        description: 'Hoeveel inkomen je wilt beschermen, en wat een wachttijd betekent.',
      },
      {
        label: 'Zakelijke lease vergelijken',
        href: '/zakelijke-lease-vergelijken',
        description: 'Vergelijk financial en operational lease voor zzp’ers.',
      },
    ],
  },
];

export default function ToolsHubPage() {
  return (
    <LandingHubPage
      title="Tools"
      description="Voor het geld in je bedrijf. Factureren, btw, inkomen en wat je wilt beschermen."
      linkGroups={toolGroups}
      linksTitle={null}
      linkFooterLabel="Openen"
      ctaHref="/factuur-maken"
      ctaLabel="Maak gratis factuur"
      relatedLinksTitle="Ook handig"
      relatedLinks={[
        {
          href: '/boekhoudprogramma-vergelijken',
          label: 'Boekhoudprogramma vergelijken',
        },
        {
          href: '/zakelijke-lease-vergelijken',
          label: 'Zakelijke lease vergelijken',
        },
        {
          href: '/zakelijk-internet-telefonie',
          label: 'Zakelijk internet & telefonie',
        },
        {
          href: '/gidsen/deze-7-tools-zijn-heel-handig-voor-zzpers',
          label: "7 handige tools voor zzp'ers",
        },
      ]}
    />
  );
}
