import BoekhoudingUitbestedenCalculator from '@/components/tools/BoekhoudingUitbestedenCalculator';

export const metadata = {
  title: 'Zelf boekhouden of uitbesteden berekenen | FactuurBaas',
  description: 'Bereken je administratietijd en vergelijk die met de kosten van een boekhouder. Gratis, geen account.',
  robots: { index: false },
};

export default function BoekhoudingUitbestedenToolPage() {
  return <BoekhoudingUitbestedenCalculator />;
}
