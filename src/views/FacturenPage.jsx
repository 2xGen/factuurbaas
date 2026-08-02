'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Download, FilePlus2, Loader2, Search } from 'lucide-react';
import ReminderDialog from '@/components/dashboard/dialogs/ReminderDialog';
import ActivityLogDialog from '@/components/dashboard/dialogs/ActivityLogDialog';
import DeleteInvoiceDialog from '@/components/dashboard/dialogs/DeleteInvoiceDialog';
import DashboardContent from '@/components/dashboard/DashboardContent';
import { Button } from '@/components/ui/button';
import { useUserInvoices } from '@/hooks/useUserInvoices';

export default function FacturenPage() {
  const router = useRouter();
  const {
    user,
    authLoading,
    searchTerm,
    setSearchTerm,
    isLoadingInvoices,
    userInvoices,
    filteredInvoices,
    onSaveInvoice,
    onDeleteInvoice,
    handleExport,
    toast,
  } = useUserInvoices();

  const [selectedInvoiceForReminder, setSelectedInvoiceForReminder] = useState(null);
  const [selectedInvoiceForActivityLog, setSelectedInvoiceForActivityLog] = useState(null);
  const [invoiceToDelete, setInvoiceToDelete] = useState(null);

  const openCount = useMemo(
    () => userInvoices.filter((inv) => inv.status !== 'paid').length,
    [userInvoices]
  );

  if (authLoading || (isLoadingInvoices && !userInvoices.length && user)) {
    return (
      <div className="flex h-[70vh] flex-col items-center justify-center bg-[#f7f8fb]">
        <Loader2 className="mb-4 h-10 w-10 animate-spin text-deep-blue" />
        <p className="text-slate-500">Facturen laden…</p>
      </div>
    );
  }

  if (!user && !authLoading) return null;

  const togglePaidStatus = (invoiceId) => {
    const invoice = userInvoices.find((inv) => inv.id === invoiceId);
    if (!invoice) return;
    const newStatus = invoice.status === 'paid' ? 'pending' : 'paid';
    const activityDescription = `Status gewijzigd naar: ${newStatus === 'paid' ? 'Betaald' : 'Openstaand'}`;
    onSaveInvoice({ ...invoice, status: newStatus }, activityDescription);
  };

  const handleConfirmDelete = () => {
    if (!invoiceToDelete) return;
    onDeleteInvoice(invoiceToDelete.id);
    toast({
      title: 'Factuur verwijderd',
      description: `Factuur #${invoiceToDelete.invoice_number || invoiceToDelete.id} is verwijderd.`,
    });
    setInvoiceToDelete(null);
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-[#f7f8fb]">
      <div className="container mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <div className="mb-8 space-y-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Beheer
                </p>
                <h1 className="mt-1 font-heading text-2xl font-bold tracking-tight text-deep-blue sm:text-3xl">
                  Facturen
                </h1>
                <p className="mt-1 text-sm text-slate-500">
                  {userInvoices.length} opgeslagen
                  {openCount > 0 ? ` · ${openCount} openstaand` : ''}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  className="rounded-xl border-slate-200 bg-white text-slate-600"
                  onClick={() => handleExport('json')}
                  disabled={!userInvoices.length}
                >
                  <Download className="mr-1.5 h-3.5 w-3.5" /> JSON
                </Button>
                <Button
                  variant="outline"
                  className="rounded-xl border-slate-200 bg-white text-slate-600"
                  onClick={() => handleExport('csv')}
                  disabled={!userInvoices.length}
                >
                  <Download className="mr-1.5 h-3.5 w-3.5" /> CSV
                </Button>
                <Button
                  onClick={() => router.push('/create-invoice')}
                  className="rounded-xl bg-deep-blue px-5 font-semibold shadow-sm hover:bg-deep-blue/90"
                >
                  <FilePlus2 className="mr-2 h-4 w-4" />
                  Maak factuur
                </Button>
              </div>
            </div>

            <div className="relative">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                placeholder="Zoek op klant, factuurnummer of naam…"
                className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm shadow-sm outline-none transition focus:border-deep-blue/40 focus:ring-2 focus:ring-deep-blue/10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <DashboardContent
            invoices={filteredInvoices}
            calculateInvoiceTotal={(inv) => Number(inv.total_incl) || 0}
            onEdit={(id) => router.push(`/create-invoice?id=${id}`)}
            onTogglePaid={togglePaidStatus}
            onSendReminder={(invoice) => setSelectedInvoiceForReminder(invoice)}
            onOpenActivityLog={(invoice) => setSelectedInvoiceForActivityLog(invoice)}
            onDelete={(invoice) => setInvoiceToDelete(invoice)}
            searchTerm={searchTerm}
            isLoading={isLoadingInvoices && userInvoices.length === 0}
          />

          <p className="mt-6 text-center text-sm text-slate-500">
            Terug naar{' '}
            <Link href="/dashboard" className="font-medium text-deep-blue hover:underline">
              dashboard
            </Link>
          </p>
        </motion.div>
      </div>

      {selectedInvoiceForReminder && (
        <ReminderDialog
          invoice={selectedInvoiceForReminder}
          isOpen={!!selectedInvoiceForReminder}
          onClose={() => setSelectedInvoiceForReminder(null)}
          onActionLog={(invoice, logMessage) => onSaveInvoice(invoice, logMessage)}
          user={user}
        />
      )}
      {selectedInvoiceForActivityLog && (
        <ActivityLogDialog
          invoice={selectedInvoiceForActivityLog}
          isOpen={!!selectedInvoiceForActivityLog}
          onClose={() => setSelectedInvoiceForActivityLog(null)}
          onAddEntry={(invoice, entryDescription) => {
            if (!entryDescription.trim()) {
              toast({
                title: 'Log leeg',
                description: 'Voer een beschrijving in.',
                variant: 'destructive',
              });
              return;
            }
            onSaveInvoice(invoice, entryDescription);
            toast({ title: 'Activiteit gelogd' });
          }}
        />
      )}
      {invoiceToDelete && (
        <DeleteInvoiceDialog
          isOpen={!!invoiceToDelete}
          onClose={() => setInvoiceToDelete(null)}
          onConfirm={handleConfirmDelete}
          invoice={invoiceToDelete}
        />
      )}
    </div>
  );
}
