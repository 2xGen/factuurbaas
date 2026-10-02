'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import { useAppContext } from '@/contexts/AppContext';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { supabase } from '@/lib/customSupabaseClient';
import {
  deleteQuote,
  fetchUserQuotes,
  quotesToExportCsv,
  quotesToExportJson,
  upsertQuote,
} from '@/lib/quotePersistence';

export function useUserQuotes() {
  const router = useRouter();
  const pathname = usePathname();
  const { toast } = useToast();
  const { user, loading: authLoading } = useAuth();
  const { quotes: contextQuotes, setQuotes: setContextQuotes } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoadingQuotes, setIsLoadingQuotes] = useState(true);

  const loginRedirect = useCallback(() => {
    const next = pathname && pathname !== '/login' ? `?next=${encodeURIComponent(pathname)}` : '';
    router.replace(`/login${next}`);
  }, [pathname, router]);

  const fetchQuotes = useCallback(async () => {
    if (!user?.id) {
      setIsLoadingQuotes(false);
      if (!authLoading) loginRedirect();
      return;
    }

    setIsLoadingQuotes(true);
    try {
      const data = await fetchUserQuotes(supabase, user.id);
      setContextQuotes(data);
    } catch (error) {
      console.error('Error fetching quotes:', error);
      toast({
        title: 'Fout bij laden offertes',
        description: error.message || 'Er is iets misgegaan.',
        variant: 'destructive',
      });
      setContextQuotes([]);
    } finally {
      setIsLoadingQuotes(false);
    }
  }, [user, setContextQuotes, toast, authLoading, loginRedirect]);

  useEffect(() => {
    if (authLoading) return;
    if (user?.id) fetchQuotes();
    else {
      setIsLoadingQuotes(false);
      loginRedirect();
    }
  }, [user, authLoading, fetchQuotes, loginRedirect]);

  const onSaveQuote = useCallback(
    async (updatedQuote, activityDescription) => {
      if (!user) {
        toast({
          title: 'Niet ingelogd',
          description: 'Log in om een offerte op te slaan.',
          variant: 'destructive',
        });
        return null;
      }

      try {
        const saved = await upsertQuote(supabase, user.id, updatedQuote, activityDescription);
        setContextQuotes((prev) => {
          const exists = prev.some((q) => q.id === saved.id);
          if (exists) return prev.map((q) => (q.id === saved.id ? saved : q));
          return [saved, ...prev];
        });
        toast({
          title: 'Offerte bijgewerkt',
          description: `Offerte ${saved.quoteNumber || saved.id} is bijgewerkt.`,
        });
        return saved;
      } catch (error) {
        console.error('Error updating quote:', error);
        toast({ title: 'Fout bij bijwerken', description: error.message, variant: 'destructive' });
        return null;
      }
    },
    [user, toast, setContextQuotes]
  );

  const onDeleteQuote = useCallback(
    async (quoteId) => {
      if (!user) return;
      try {
        await deleteQuote(supabase, user.id, quoteId);
        setContextQuotes((prev) => prev.filter((q) => q.id !== quoteId));
      } catch (error) {
        toast({ title: 'Fout bij verwijderen', description: error.message, variant: 'destructive' });
      }
    },
    [user, toast, setContextQuotes]
  );

  const userQuotes = useMemo(() => {
    if (!user || !contextQuotes) return [];
    return contextQuotes.filter((q) => q.user_id === user.id);
  }, [contextQuotes, user]);

  const filteredQuotes = useMemo(() => {
    const q = searchTerm.toLowerCase();
    return userQuotes.filter(
      (quote) =>
        (quote.clientName || '').toLowerCase().includes(q) ||
        (quote.clientDetails?.companyName || '').toLowerCase().includes(q) ||
        (quote.quoteNumber?.toString() || '').toLowerCase().includes(q) ||
        (quote.id?.toString() || '').includes(q)
    );
  }, [userQuotes, searchTerm]);

  const handleExport = useCallback(
    (format) => {
      const payload =
        format === 'csv' ? quotesToExportCsv(userQuotes) : quotesToExportJson(userQuotes);
      const blob = new Blob([payload], {
        type: format === 'csv' ? 'text/csv;charset=utf-8' : 'application/json',
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `factuurbaas-offertes.${format}`;
      a.click();
      URL.revokeObjectURL(url);
    },
    [userQuotes]
  );

  return {
    user,
    authLoading,
    searchTerm,
    setSearchTerm,
    isLoadingQuotes,
    userQuotes,
    filteredQuotes,
    onSaveQuote,
    onDeleteQuote,
    handleExport,
    toast,
    refreshQuotes: fetchQuotes,
  };
}
