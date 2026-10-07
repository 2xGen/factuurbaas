import BoekhoudprogrammaCheck from '@/components/tools/BoekhoudprogrammaCheck';

export const metadata = {
  title: 'Boekhoudprogramma-check – Gratis Online Tool | FactuurBaas',
  description:
    "Doe de korte check en ontdek welk type boekhoudprogramma bij jouw zzp-administratie past.",
  robots: { index: false },
};

export default function BoekhoudprogrammaCheckToolPage() {
  return (
    <div className="min-h-screen bg-paper-50 text-ink">
      <BoekhoudprogrammaCheck />
    </div>
  );
}
