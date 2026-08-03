import LandingHubPage from '@/components/landing/LandingHubPage';

export const metadata = {
  title: 'Gratis Factuur Tools voor ZZP\'ers | FactuurBaas',
  description:
    'Gratis online tools voor zzp\'ers: factuur maken, btw calculator, offerte maker en meer. Lees meer en ga direct aan de slag zonder account.',
  alternates: { canonical: 'https://factuurbaas.nl/tools' },
};

const toolLinks = [
  {
    label: 'Factuur maken',
    href: '/tools/factuur-maken',
    description: 'Maak gratis een factuur en download direct als PDF. Geen account nodig.',
    tag: 'Beschikbaar',
    footerLabel: 'Meer info',
  },
  {
    label: 'BTW calculator',
    href: '/tools/btw-calculator',
    description: 'Bereken bedragen inclusief of exclusief btw. 9%, 21% of eigen percentage.',
    tag: 'Beschikbaar',
    footerLabel: 'Meer info',
  },
  {
    label: 'Offerte maker',
    href: '/tools/offerte-maker',
    description: 'Maak professionele offertes en zet ze om naar een factuur.',
    tag: 'Beschikbaar',
    footerLabel: 'Meer info',
  },
  {
    label: 'Uurtarief calculator',
    href: '/tools/uurtarief-calculator',
    description: 'Bereken je uurtarief op basis van gewenst netto-inkomen, kosten en werkuren.',
    tag: 'Beschikbaar',
    footerLabel: 'Meer info',
  },
  {
    label: 'Uurtarief naar inkomen',
    href: '/tools/uurtarief-naar-inkomen',
    description: 'Bereken je maandelijkse omzet en winst op basis van je uurtarief en werkuren.',
    tag: 'Beschikbaar',
    footerLabel: 'Meer info',
  },
  {
    label: 'Factuurnummer generator',
    href: '/tools/factuurnummer-generator',
    description: 'Genereer een uniek, professioneel factuurnummer voor je volgende factuur.',
    tag: 'Beschikbaar',
    footerLabel: 'Meer info',
  },
  {
    label: 'Marge calculator',
    href: '/tools/marge-calculator',
    description: 'Bereken winst en winstmarge op basis van inkoop- en verkoopprijs.',
    tag: 'Beschikbaar',
    footerLabel: 'Meer info',
  },
  {
    label: 'Betaaltermijn calculator',
    href: '/tools/betaaltermijn-calculator',
    description: 'Bereken de vervaldatum van je factuur op basis van factuurdatum en betalingstermijn.',
    tag: 'Beschikbaar',
    footerLabel: 'Meer info',
  },
  {
    label: 'KOR calculator',
    href: '/tools/kor-calculator',
    description: 'Check of de kleineondernemersregeling (KOR) bij jouw verwachte jaaromzet past.',
    tag: 'Beschikbaar',
    footerLabel: 'Meer info',
  },
];

export default function ToolsHubPage() {
  return (
    <LandingHubPage
      title="Tools"
      description="Gratis online tools voor ondernemers. Kies een tool, lees hoe het werkt en ga direct aan de slag."
      linksTitle="Onze tools"
      linksDescription="Kies een gratis tool voor je administratie. Bekijk uitleg, voorbeelden en gebruik daarna direct de online versie."
      linkFooterLabel="Meer info"
      links={toolLinks}
      ctaHref="/factuur-maken"
      ctaLabel="Maak gratis factuur"
      relatedLinksTitle="Lees ook"
      relatedLinks={[
        {
          href: '/gidsen/deze-7-tools-zijn-heel-handig-voor-zzpers',
          label: "Deze 7 tools zijn heel handig voor zzp'ers",
        },
      ]}
    />
  );
}
