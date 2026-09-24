import ToolGatePage from '@/components/tools/ToolGatePage';
import AovZzpSeoContent from '@/components/tools/AovZzpSeoContent';
import InsifyAovSticky from '@/components/aov/InsifyAovSticky';
import { getAovZzpGateSchema } from '@/lib/aovZzpGate';

export const metadata = {
  title: "AOV voor zzp'ers: bereken je dekking | FactuurBaas",
  description:
    "AOV voor zzp'ers uitgelegd. Bereken hoeveel inkomen je wilt beschermen, wat een wachttijd betekent en welke factoren je AOV beïnvloeden. Gratis calculator.",
  keywords:
    "AOV zzp, AOV voor zzp'ers, arbeidsongeschiktheidsverzekering zzp, AOV zzp'er, AOV berekenen zzp, AOV dekking zzp, AOV verzekering zzp, arbeidsongeschiktheidsverzekering voor zelfstandigen",
  alternates: { canonical: 'https://factuurbaas.nl/tools/aov-zzp' },
  openGraph: {
    title: "AOV voor zzp'ers: bereken je dekking | FactuurBaas",
    description:
      "AOV voor zzp'ers uitgelegd. Bereken hoeveel inkomen je wilt beschermen, wat een wachttijd betekent en welke factoren je AOV beïnvloeden. Gratis calculator.",
    url: 'https://factuurbaas.nl/tools/aov-zzp',
    siteName: 'FactuurBaas',
    type: 'website',
  },
};

const TOOL_HREF = '/tools/aov-berekenen-zzp';

export default function AovZzpGatePage() {
  return (
    <>
    <InsifyAovSticky />
    <ToolGatePage
      breadcrumbLabel="AOV zzp"
      h1="AOV voor zzp'ers"
      intro="Als zzp'er heb je geen werkgever die je inkomen bij ziekte doorbetaalt. Een arbeidsongeschiktheidsverzekering (AOV) kan je inkomen beschermen als je door ziekte of een ongeval niet of minder kunt werken."
      introExtra="Met de gratis AOV-calculator van FactuurBaas bereken je je benodigde maandelijkse AOV-dekking, de jaarlijkse dekking en het bedrag dat je tijdens een gekozen wachttijd zelf moet kunnen opvangen. We berekenen bewust geen premie: die verschilt per verzekeraar."
      trustPoints={[
        'Hoeveel inkomen wil je beschermen?',
        'Wat betekent een wachttijd voor je eigen buffer?',
        'Inzicht zonder nep-premieberekening',
        'Gratis en zonder account',
      ]}
      toolHref={TOOL_HREF}
      toolCtaLabel="Bereken je benodigde AOV-dekking"
      secondaryHref="/tools"
      secondaryCtaLabel="Bekijk alle tools"
      footerTitle="Start de AOV-calculator"
      footerIntro="Gebruik de calculator om je eigen uitgangspunten scherp te krijgen. Dit is geen premie- of verzekeringsadvies."
      footerCtaLabel="Start de AOV-calculator"
      faqSchema={getAovZzpGateSchema()}
    >
      <AovZzpSeoContent />
    </ToolGatePage>
    </>
  );
}
