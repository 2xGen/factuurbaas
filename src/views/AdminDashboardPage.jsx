'use client';

import React from 'react';
import InvoiceLogSection from '@/components/admin/InvoiceLogSection';
import ToolUsageLogSection from '@/components/admin/ToolUsageLogSection';
import FooterLinksSection from '@/components/admin/FooterLinksSection';
import PageViewsSection from '@/components/admin/PageViewsSection';
import RetentionStatsSection from '@/components/admin/RetentionStatsSection';
import { TOOL_USAGE_ADMIN_SECTIONS } from '@/lib/toolUsageLog';
import { Calculator } from 'lucide-react';

const AdminDashboardPage = () => {
  return (
    <div className="container mx-auto min-h-screen bg-slate-50 p-4 md:p-8">
      <header className="mb-8">
        <h1 className="font-heading text-4xl font-bold text-deep-blue">Admin Dashboard</h1>
        <p className="text-slate-600">Beheer hier website content en bekijk statistieken.</p>
      </header>

      <RetentionStatsSection />
      <PageViewsSection />
      <InvoiceLogSection />
      {TOOL_USAGE_ADMIN_SECTIONS.map((section) => (
        <ToolUsageLogSection
          key={section.table}
          title={section.title}
          description={section.description}
          table={section.table}
          statsRpc={section.statsRpc}
          icon={Calculator}
          emptyMessage={section.emptyMessage}
        />
      ))}
      <FooterLinksSection />
    </div>
  );
};

export default AdminDashboardPage;
