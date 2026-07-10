'use client';
import React from 'react';
import { BookOpen } from 'lucide-react';
import ToolUsageLogSection from '@/components/admin/ToolUsageLogSection';
import { INVOICE_LOG_READ_TABLE } from '@/lib/toolUsageLog';

const InvoiceLogSection = () => (
  <ToolUsageLogSection
    title="Factuur Creaties"
    description="Statistieken en logboek van aangemaakte facturen."
    table={INVOICE_LOG_READ_TABLE}
    statsRpc="get_invoice_creation_stats"
    icon={BookOpen}
    emptyMessage="Nog geen facturen aangemaakt."
  />
);

export default InvoiceLogSection;
