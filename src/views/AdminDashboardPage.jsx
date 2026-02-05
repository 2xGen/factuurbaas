import React from 'react';
import InvoiceLogSection from '@/components/admin/InvoiceLogSection';
import FooterLinksSection from '@/components/admin/FooterLinksSection';
// BlogListingsSection is removed
import PageViewsSection from '@/components/admin/PageViewsSection';

const AdminDashboardPage = () => {
  return (
    <div className="container mx-auto p-4 md:p-8 bg-slate-50 min-h-screen">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-deep-blue font-heading">Admin Dashboard</h1>
        <p className="text-slate-600">Beheer hier website content en bekijk statistieken.</p>
      </header>

      <PageViewsSection />
      <InvoiceLogSection />
      <FooterLinksSection />
      {/* BlogListingsSection component is no longer rendered here */}

    </div>
  );
};

export default AdminDashboardPage;