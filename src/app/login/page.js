import { Suspense } from 'react';
import LoginPage from '@/views/LoginPage';
import { Loader2 } from 'lucide-react';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Inloggen | FactuurBaas',
  description: 'Log in met Google om facturen op te slaan en je dashboard te bekijken.',
  robots: { index: false, follow: false },
};

export default function LoginRoute() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-deep-blue" />
        </div>
      }
    >
      <LoginPage />
    </Suspense>
  );
}
