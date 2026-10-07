import ProtectedRoute from '@/components/auth/ProtectedRoute';
import InkomstenPage from '@/views/InkomstenPage';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Inkomsten | FactuurBaas',
  description: 'Houd verkopen en inkomsten bij, ook zonder factuur.',
};

export default function InkomstenRoute() {
  return (
    <ProtectedRoute>
      <InkomstenPage />
    </ProtectedRoute>
  );
}
