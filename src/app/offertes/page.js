import { Suspense } from 'react';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import OffertesPage from '@/views/OffertesPage';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Offertes | FactuurBaas',
  description: 'Bekijk en beheer je opgeslagen offertes.',
};

export default function OffertesRoute() {
  return (
    <ProtectedRoute>
      <Suspense
        fallback={
          <div className="flex h-[70vh] items-center justify-center text-slate-500">
            Offertes laden…
          </div>
        }
      >
        <OffertesPage />
      </Suspense>
    </ProtectedRoute>
  );
}
