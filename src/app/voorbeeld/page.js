import LandingHubPage from '@/components/landing/LandingHubPage';

export const metadata = {
  title: "Factuur en offerte voorbeelden | Gratis templates voor ZZP'ers",
  description:
    'Bekijk professionele factuur- en offertevoorbeelden voor ZZP\'ers, bouw, uren, consultants en freelance. Gebruik een voorbeeld als inspiratie en maak gratis je eigen document.',
  alternates: { canonical: 'https://factuurbaas.nl/voorbeeld' },
};

const categoryLinks = [
  {
    label: 'Factuur voorbeelden',
    href: '/factuur-voorbeeld',
    description:
      "6 voorbeelden voor ZZP'ers, bouw, uren, consultants en KOR.",
    tag: 'Factuur',
    footerLabel: 'Bekijk factuur voorbeelden',
    example: {
      layout: 'corporate',
      invoiceNumber: '#2026-014',
      date: '9 juli 2026',
      paymentTerm: '14 dagen',
      from: { name: 'Studio Jansen', detail: 'KvK 12345678' },
      to: { name: 'Klant BV', detail: 'Amsterdam' },
      lineItems: [{ description: 'Advies en uitvoering', quantity: '8 uur', amount: '€ 640,00' }],
      subtotal: '€ 640,00',
      btwLabel: 'BTW 21%',
      btwAmount: '€ 134,40',
      total: '€ 774,40',
    },
  },
  {
    label: 'Offerte voorbeelden',
    href: '/offerte-voorbeeld',
    description: 'Professionele offertevoorbeelden voor diensten, bouw en freelance.',
    tag: 'Offerte',
    footerLabel: 'Bekijk offerte voorbeelden',
    docType: 'quote',
    example: {
      layout: 'corporate',
      quoteNumber: 'OFF-2026-014',
      date: '9 juli 2026',
      validUntil: '23 juli 2026',
      from: { name: 'Studio Jansen', detail: 'KvK 12345678' },
      to: { name: 'Klant BV', detail: 'Amsterdam' },
      lineItems: [{ description: 'Website ontwerp', quantity: '1', amount: '€ 2.400,00' }],
      subtotal: '€ 2.400,00',
      btwLabel: 'BTW 21%',
      btwAmount: '€ 504,00',
      total: '€ 2.904,00',
    },
  },
];

export default function VoorbeeldenHubPage() {
  return (
    <LandingHubPage
      title="Factuur & offerte voorbeelden"
      description="Bekijk professionele factuur- en offertevoorbeelden voor verschillende soorten ondernemers. Van ZZP facturen tot bouw offertes en freelance opdrachten."
      descriptionExtra="Gebruik een voorbeeld als inspiratie en maak daarna gratis je eigen document."
      linksTitle="Kies een categorie"
      linksDescription="Bekijk ingevulde voorbeelden per type werk en maak direct je eigen versie in de gratis tool."
      showHeroCta={false}
      showPreview
      links={categoryLinks}
      showFooterCtas={false}
    />
  );
}
