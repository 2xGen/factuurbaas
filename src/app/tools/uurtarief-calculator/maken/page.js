import UurtariefCalculator from '@/components/tools/UurtariefCalculator';

export const metadata = {
  title: 'Uurtarief Berekenen – Gratis Online Tool | FactuurBaas',
  description: 'Bereken direct je uurtarief als zzp\'er. Gratis, geen account.',
  robots: { index: false },
};

export default function UurtariefCalculatorToolPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <UurtariefCalculator />
    </div>
  );
}
