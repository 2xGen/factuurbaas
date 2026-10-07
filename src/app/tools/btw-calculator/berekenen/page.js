import BtwCalculator from '@/components/tools/BtwCalculator';

export const metadata = {
  title: 'BTW Berekenen – Gratis Online Tool | FactuurBaas',
  description: 'Bereken direct BTW toevoegen of BTW uit een bedrag halen. Gratis, geen account.',
  robots: { index: false },
};

export default function BtwCalculatorToolPage() {
  return <BtwCalculator />;
}
