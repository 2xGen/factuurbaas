import { Suspense } from 'react';
import AuthCallbackClient from './AuthCallbackClient';
import { Loader2 } from 'lucide-react';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Inloggen | FactuurBaas',
  robots: { index: false, follow: false },
};

export default function AuthCallbackPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-slate-50">
          <Loader2 className="h-10 w-10 animate-spin text-deep-blue" />
        </div>
      }
    >
      <AuthCallbackClient />
    </Suspense>
  );
}
