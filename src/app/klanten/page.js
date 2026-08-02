import ProtectedRoute from '@/components/auth/ProtectedRoute';
import KlantenPage from '@/views/KlantenPage';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Klanten | FactuurBaas',
  description: 'Sla klanten op en vul ontvangergegevens snel in bij het maken van een factuur.',
};

export default function KlantenRoute() {
  return (
    <ProtectedRoute>
      <KlantenPage />
    </ProtectedRoute>
  );
}
