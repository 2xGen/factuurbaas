import LandingHubPage from '@/components/landing/LandingHubPage';
import { popularTemplates } from '@/lib/invoiceLandingData';
import { getVoorbeeldPage } from '@/lib/voorbeeldLandingPages';

export const metadata = {
  title: 'Factuur Template – Gratis Download | FactuurBaas',
  description:
    'Gratis factuur templates voor zzp, bouw, freelance en meer. Gebruik onze online tool in plaats van Word of Excel.',
  alternates: { canonical: 'https://factuurbaas.nl/factuur-template' },
};

const formatLinks = [
  {
    label: 'Word template',
    href: '/factuur-template/word',
    description: 'Liever geen Word? Maak je factuur direct online en download als PDF.',
    tag: 'Formaat',
    format: 'word',
  },
  {
    label: 'Excel template',
    href: '/factuur-template/excel',
    description: 'Geen formules nodig. Vul in, reken automatisch en exporteer als PDF.',
    tag: 'Formaat',
    format: 'excel',
  },
  {
    label: 'PDF template',
    href: '/factuur-template/pdf',
    description: 'Direct een professionele factuur als PDF — klaar om te versturen.',
    tag: 'Formaat',
    format: 'pdf',
  },
];

const professionLinks = popularTemplates.map((t) => {
  const voorbeeld = getVoorbeeldPage(t.slug);
  return {
    label: t.title,
    href: `/factuur-template/${t.slug}`,
    description: t.description,
    tag: t.tag,
    example: voorbeeld?.example,
  };
});

export default function FactuurTemplateHubPage() {
  return (
    <LandingHubPage
      title="Factuur templates"
      description="Kies een professionele factuur template en pas hem aan in onze gratis tool. Geen Word of Excel nodig."
      linksTitle="Kies je template"
      linksDescription="Open een template, pas je gegevens aan en download direct als PDF. Gratis en zonder account."
      linkFooterLabel="Bekijk template"
      showPreview
      previewBadge="Template"
      linkGroups={[
        { title: 'Per formaat', links: formatLinks },
        { title: 'Per type werk', links: professionLinks },
      ]}
    />
  );
}
