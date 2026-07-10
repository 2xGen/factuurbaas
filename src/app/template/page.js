import LandingHubPage from '@/components/landing/LandingHubPage';

export const metadata = {
  title: 'Factuur templates & offerte templates | Gratis PDF voorbeelden - FactuurBaas',
  description:
    'Gebruik gratis factuur templates en offerte templates voor jouw bedrijf. Kies een layout, vul online in en download direct je PDF. Geen Word, Excel of account nodig.',
  alternates: { canonical: 'https://factuurbaas.nl/template' },
};

const categoryLinks = [
  {
    label: 'Factuur templates',
    href: '/factuur-template',
    description:
      "Templates voor ZZP'ers, bouw, uren, Word, Excel en PDF. Online invullen en direct downloaden.",
    tag: 'Factuur',
    footerLabel: 'Bekijk factuur templates',
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
    label: 'Offerte templates',
    href: '/offerte-template',
    description:
      'Professionele offerte templates voor diensten, bouw en freelance. Maak en download direct als PDF.',
    tag: 'Offerte',
    footerLabel: 'Bekijk offerte templates',
    docType: 'quote',
    example: {
      layout: 'corporate',
      quoteNumber: 'OFF-2026-001',
      date: '9 juli 2026',
      validUntil: '23 juli 2026',
      from: { name: 'Studio Jansen', detail: 'KvK 12345678' },
      to: { name: 'Klant BV', detail: 'Amsterdam' },
      lineItems: [{ description: 'Project offerte', quantity: '1', amount: '€ 2.400,00' }],
      subtotal: '€ 2.400,00',
      btwLabel: 'BTW 21%',
      btwAmount: '€ 504,00',
      total: '€ 2.904,00',
    },
  },
];

export default function TemplateHubPage() {
  return (
    <LandingHubPage
      title="Gratis factuur en offerte templates"
      description="Gebruik gratis factuur templates en offerte templates voor jouw bedrijf."
      descriptionExtra="Kies een professionele layout, vul online je gegevens in en download direct je PDF. Geen Word, Excel of account nodig."
      linksTitle="Kies een categorie"
      linksDescription="Factuur- en offerte templates per type werk of formaat. Open een template en maak direct je eigen versie."
      showHeroCta={false}
      showPreview
      previewBadge="Template"
      links={categoryLinks}
      showFooterCtas={false}
    />
  );
}
