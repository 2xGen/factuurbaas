import BtwCalculator from '@/components/tools/BtwCalculator';

export const metadata = {
  title: 'BTW Berekenen – Gratis Online Tool | FactuurBaas',
  description: 'Bereken direct BTW toevoegen of BTW uit een bedrag halen. Gratis, geen account.',
  robots: { index: false },
};

export default function BtwCalculatorToolPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <BtwCalculator />
    </div>
  );
}
