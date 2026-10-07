import HypotheekZzpCalculator from '@/components/tools/HypotheekZzpCalculator';

export const metadata = {
  title: "Hypotheek berekenen zzp | Maximale hypotheek calculator | FactuurBaas",
  description:
    "Bereken gratis je maximale hypotheek als zzp'er. Vul je toetsinkomen in en krijg direct een indicatie. Geen account nodig.",
  keywords:
    "hypotheek berekenen zzp, maximale hypotheek zzp, hypotheekcalculator zzp, hypotheek als zzp'er berekenen",
  alternates: { canonical: 'https://factuurbaas.nl/tools/hypotheek-berekenen-zzp' },
  openGraph: {
    title: "Hypotheek berekenen zzp | Maximale hypotheek calculator | FactuurBaas",
    description:
      "Bereken gratis je maximale hypotheek als zzp'er. Vul je toetsinkomen in en krijg direct een indicatie.",
    url: 'https://factuurbaas.nl/tools/hypotheek-berekenen-zzp',
    siteName: 'FactuurBaas',
    type: 'website',
  },
};

export default function HypotheekBerekenenZzpPage() {
  return (
    <div className="min-h-screen bg-paper-50 text-ink">
      <HypotheekZzpCalculator />
    </div>
  );
}
