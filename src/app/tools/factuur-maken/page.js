import ToolGatePage from '@/components/tools/ToolGatePage';
import FactuurMakenSeoContent from '@/components/tools/FactuurMakenSeoContent';
import { getFactuurMakenGateSchema } from '@/lib/factuurMakenGate';

export const metadata = {
  title: 'Gratis factuur maken online – Zonder account | FactuurBaas',
  description:
    'Maak gratis een professionele factuur online. Bereken automatisch de btw, kies een template en download je factuur direct als PDF. Zonder account.',
  keywords:
    'factuur maken, gratis factuur maken, online factuur maken, factuur maken online, factuur online maken, gratis factuurprogramma, factuurprogramma gratis, factuur maken zzp, zelf factuur maken, factuur opmaken, factuur genereren, online factureren, factuur PDF maken, gratis factuur maken online',
  alternates: { canonical: 'https://factuurbaas.nl/tools/factuur-maken' },
  openGraph: {
    title: 'Gratis factuur maken online – Zonder account | FactuurBaas',
    description:
      'Maak gratis een professionele factuur online. Bereken automatisch de btw, kies een template en download je factuur direct als PDF. Zonder account.',
    url: 'https://factuurbaas.nl/tools/factuur-maken',
    siteName: 'FactuurBaas',
    type: 'website',
  },
};

const TOOL_HREF = '/create-invoice';

export default function FactuurMakenGatePage() {
  return (
    <ToolGatePage
      breadcrumbLabel="Factuur maken"
      h1="Gratis factuur maken online"
      intro="Maak direct een professionele factuur met FactuurBaas. Vul je bedrijfs- en klantgegevens in, voeg je producten of diensten toe en laat de btw automatisch berekenen. Download je factuur daarna direct als PDF."
      introExtra="Geen account nodig. Geen abonnement. Gewoon gratis online een factuur maken."
      trustPoints={[
        'Gratis een factuur maken zonder account',
        'Direct downloaden als PDF',
        'Automatische btw-berekening',
        'Professionele factuurtemplates',
        'Snel klaar, ook als je weinig ervaring hebt met factureren',
      ]}
      toolHref={TOOL_HREF}
      toolCtaLabel="Open de gratis factuurmaker"
      secondaryHref="/factuur-voorbeeld"
      secondaryCtaLabel="Bekijk voorbeelden"
      footerTitle="Klaar om je factuur te maken?"
      footerIntro="Je hoeft geen account aan te maken en geen betaald boekhoudprogramma te gebruiken. Vul je gegevens in, maak je factuur en download hem direct als PDF. FactuurBaas is gratis voor Nederlandse zzp'ers en ondernemers."
      footerCtaLabel="Gratis factuur maken"
      faqSchema={getFactuurMakenGateSchema()}
    >
      <FactuurMakenSeoContent />
    </ToolGatePage>
  );
}
