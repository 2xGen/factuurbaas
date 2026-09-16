import ToolGatePage from '@/components/tools/ToolGatePage';
import HypotheekZzpSeoContent from '@/components/tools/HypotheekZzpSeoContent';
import { getHypotheekZzpGateSchema } from '@/lib/hypotheekZzpGate';

export const metadata = {
  title: "Hypotheek voor zzp'ers: hoeveel kun je lenen? | FactuurBaas",
  description:
    "Hoe werkt een hypotheek als zzp'er? Lees hoe je inkomen wordt berekend, welke cijfers je nodig hebt en hoeveel je kunt lenen. Bereken je maximale hypotheek.",
  keywords:
    "hypotheek zzp, hypotheek voor zzp'ers, hypotheek als zzp'er, hypotheek zzp'er, hypotheek berekenen zzp, maximale hypotheek zzp",
  alternates: { canonical: 'https://factuurbaas.nl/tools/hypotheek-zzp' },
  openGraph: {
    title: "Hypotheek voor zzp'ers: hoeveel kun je lenen? | FactuurBaas",
    description:
      "Hoe werkt een hypotheek als zzp'er? Lees hoe je inkomen wordt berekend, welke cijfers je nodig hebt en hoeveel je kunt lenen. Bereken je maximale hypotheek.",
    url: 'https://factuurbaas.nl/tools/hypotheek-zzp',
    siteName: 'FactuurBaas',
    type: 'website',
  },
};

const TOOL_HREF = '/tools/hypotheek-berekenen-zzp';

export default function HypotheekZzpGatePage() {
  return (
    <ToolGatePage
      breadcrumbLabel="Hypotheek zzp"
      h1="Hypotheek voor zzp'ers"
      intro="Een hypotheek aanvragen als zzp'er werkt anders dan wanneer je in loondienst bent. Je hebt geen vast salaris van een werkgever, waardoor de geldverstrekker je inkomen uit onderneming op een andere manier moet beoordelen."
      introExtra="Hoeveel je als zzp'er kunt lenen hangt onder andere af van je inkomen, de ontwikkeling van je onderneming, je financiële verplichtingen en de woning die je wilt kopen."
      trustPoints={[
        'Uitleg over toetsinkomen',
        'NHG & Inkomensverklaring Ondernemer',
        'Ook voor starters & wisselend inkomen',
        'Gratis maximale hypotheek berekenen',
      ]}
      toolHref={TOOL_HREF}
      toolCtaLabel="Bereken je maximale hypotheek"
      secondaryHref="/tools"
      secondaryCtaLabel="Bekijk alle tools"
      footerTitle="Bereken je hypotheek"
      footerIntro="Wil je als zzp'er weten hoeveel je ongeveer kunt lenen? Doe de gratis berekening en krijg een eerste indicatie van je maximale hypotheek. De berekening is indicatief en vormt geen hypotheekadvies of hypotheekofferte."
      footerCtaLabel="Bereken je maximale hypotheek als zzp'er"
      faqSchema={getHypotheekZzpGateSchema()}
    >
      <HypotheekZzpSeoContent />
    </ToolGatePage>
  );
}
