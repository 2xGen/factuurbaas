import AovCalculator from '@/components/tools/AovCalculator';
import InsifyAovSticky from '@/components/aov/InsifyAovSticky';

export const metadata = {
  title: "AOV berekenen zzp | Inkomensdekking calculator | FactuurBaas",
  description:
    "Bereken gratis hoeveel inkomen je als zzp'er wilt beschermen met een AOV. Zie je benodigde dekking en wat je tijdens de wachttijd zelf moet opvangen. Geen premieadvies.",
  keywords:
    "aov berekenen zzp, aov calculator zzp, arbeidsongeschiktheidsverzekering berekenen, aov dekking berekenen, aov wachttijd, aov zzp",
  alternates: { canonical: 'https://factuurbaas.nl/tools/aov-berekenen-zzp' },
  openGraph: {
    title: "AOV berekenen zzp | Inkomensdekking calculator | FactuurBaas",
    description:
      "Bereken hoeveel inkomen je wilt beschermen en welk bedrag je tijdens de wachttijd zelf moet kunnen opvangen.",
    url: 'https://factuurbaas.nl/tools/aov-berekenen-zzp',
    siteName: 'FactuurBaas',
    type: 'website',
  },
};

export default function AovBerekenenZzpPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-8 sm:py-12">
      <InsifyAovSticky />
      <div className="container mx-auto px-4 sm:px-6">
        <AovCalculator />
      </div>
    </div>
  );
}
