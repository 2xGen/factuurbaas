'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import { useAppContext } from '@/contexts/AppContext';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { supabase } from '@/lib/customSupabaseClient';
import {
  deleteInvoice,
  fetchUserInvoices,
  invoicesToExportCsv,
  invoicesToExportJson,
  upsertInvoice,
} from '@/lib/invoicePersistence';

export function useUserInvoices() {
  const router = useRouter();
  const pathname = usePathname();
  const { toast } = useToast();
  const { user, loading: authLoading } = useAuth();
  const { invoices: contextInvoices, setInvoices: setContextInvoices } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoadingInvoices, setIsLoadingInvoices] = useState(true);

  const loginRedirect = useCallback(() => {
    const next = pathname && pathname !== '/login' ? `?next=${encodeURIComponent(pathname)}` : '';
    router.replace(`/login${next}`);
  }, [pathname, router]);

  const fetchInvoices = useCallback(async () => {
    if (!user?.id) {
      setIsLoadingInvoices(false);
      if (!authLoading) loginRedirect();
      return;
    }

    setIsLoadingInvoices(true);
    try {
      const data = await fetchUserInvoices(supabase, user.id);
      setContextInvoices(data);
    } catch (error) {
      console.error('Error fetching invoices:', error);
      toast({
        title: 'Fout bij laden facturen',
        description: error.message || 'Er is iets misgegaan.',
        variant: 'destructive',
      });
      setContextInvoices([]);
    } finally {
      setIsLoadingInvoices(false);
    }
  }, [user, setContextInvoices, toast, authLoading, loginRedirect]);

  useEffect(() => {
    if (authLoading) return;
    if (user?.id) fetchInvoices();
    else {
      setIsLoadingInvoices(false);
      loginRedirect();
    }
  }, [user, authLoading, fetchInvoices, loginRedirect]);

  const onSaveInvoice = useCallback(
    async (updatedInvoice, activityDescription) => {
      if (!user) {
        toast({
          title: 'Niet ingelogd',
          description: 'Log in om een factuur op te slaan.',
          variant: 'destructive',
        });
        return;
      }

      try {
        const saved = await upsertInvoice(supabase, user.id, updatedInvoice, activityDescription);
        setContextInvoices((prev) => prev.map((inv) => (inv.id === saved.id ? saved : inv)));
        toast({
          title: 'Factuur bijgewerkt',
          description: `Factuur #${saved.invoice_number || saved.id} is bijgewerkt.`,
        });
      } catch (error) {
        console.error('Error updating invoice:', error);
        toast({ title: 'Fout bij bijwerken', description: error.message, variant: 'destructive' });
      }
    },
    [user, toast, setContextInvoices]
  );

  const onDeleteInvoice = useCallback(
    async (invoiceId) => {
      if (!user) return;
      try {
        await deleteInvoice(supabase, user.id, invoiceId);
        setContextInvoices((prev) => prev.filter((inv) => inv.id !== invoiceId));
      } catch (error) {
        toast({ title: 'Fout bij verwijderen', description: error.message, variant: 'destructive' });
      }
    },
    [user, toast, setContextInvoices]
  );

  const userInvoices = useMemo(() => {
    if (!user || !contextInvoices) return [];
    return contextInvoices.filter((inv) => inv.user_id === user.id);
  }, [contextInvoices, user]);

  const filteredInvoices = useMemo(() => {
    const q = searchTerm.toLowerCase();
    return userInvoices.filter(
      (invoice) =>
        (invoice.receiverName || '').toLowerCase().includes(q) ||
        (invoice.receiverDetails?.companyName || '').toLowerCase().includes(q) ||
        (invoice.invoiceName || '').toLowerCase().includes(q) ||
        (invoice.invoice_number?.toString() || '').includes(q) ||
        (invoice.id?.toString() || '').includes(q)
    );
  }, [userInvoices, searchTerm]);

  const handleExport = useCallback(
    (format) => {
      const payload =
        format === 'csv' ? invoicesToExportCsv(userInvoices) : invoicesToExportJson(userInvoices);
      const blob = new Blob([payload], {
        type: format === 'csv' ? 'text/csv;charset=utf-8' : 'application/json',
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `factuurbaas-export.${format}`;
      a.click();
      URL.revokeObjectURL(url);
    },
    [userInvoices]
  );

  return {
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
  };
}
