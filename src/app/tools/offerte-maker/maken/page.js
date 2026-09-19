import { Suspense } from 'react';
import OfferteMakerPage from '@/views/OfferteMakerPage';

export const metadata = {
  title: 'Offerte Maken – Gratis Online Tool | FactuurBaas',
  description: 'Maak gratis een offerte en download direct als PDF. Geen account nodig.',
  robots: { index: false },
};

export default function OfferteMakerToolPage() {
  return (
    <Suspense
      fallback={
        <div className="container mx-auto px-4 py-16 text-center text-slate-500">Offerte laden…</div>
      }
    >
      <OfferteMakerPage />
    </Suspense>
  );
}
