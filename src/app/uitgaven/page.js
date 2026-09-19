import ProtectedRoute from '@/components/auth/ProtectedRoute';
import UitgavenPage from '@/views/UitgavenPage';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Uitgaven | FactuurBaas',
  description: 'Voeg zakelijke uitgaven toe en houd resultaat en btw bij.',
};

export default function UitgavenRoute() {
  return (
    <ProtectedRoute>
      <UitgavenPage />
    </ProtectedRoute>
  );
}
