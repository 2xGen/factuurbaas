import UurtariefCalculator from '@/components/tools/UurtariefCalculator';

export const metadata = {
  title: 'Uurtarief Berekenen – Gratis Online Tool | FactuurBaas',
  description: 'Bereken direct je uurtarief als zzp\'er. Gratis, geen account.',
  robots: { index: false },
};

export default function UurtariefCalculatorToolPage() {
  return <UurtariefCalculator />;
}
