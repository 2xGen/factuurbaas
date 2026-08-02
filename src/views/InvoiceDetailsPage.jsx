'use client';

import React, { useEffect, useRef, useState, useCallback, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import InvoiceForm from '@/components/invoice/InvoiceForm';
import InvoiceSidebar from '@/components/invoice/InvoiceSidebar';
import AuthModal from '@/components/invoice/dialogs/AuthModal';
import { useInvoiceFormManagement } from '@/hooks/useInvoiceFormManagement';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { supabase } from '@/lib/customSupabaseClient';
import {
  fetchInvoiceById,
  isPersistedInvoiceId,
  upsertInvoice,
} from '@/lib/invoicePersistence';
import {
  clientToReceiverDetails,
  fetchClientById,
  isPersistedClientId,
} from '@/lib/clientPersistence';
import {
  fetchProfileForInvoice,
  profileHasCompanyData,
  profileToCompanyDetails,
  resolveProfileLogo,
  saveCompanyDetailsToProfile,
} from '@/lib/profileToInvoice';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

function InvoiceDetailsInner() {
  const fileInputRef = useRef(null);
  const previewRef = useRef(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const { user, loading: authLoading, signInWithGoogle } = useAuth();
  const { toast } = useToast();

  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isLoadingRemote, setIsLoadingRemote] = useState(false);
  const [isImportingProfile, setIsImportingProfile] = useState(false);
  const [isSavingToAccount, setIsSavingToAccount] = useState(false);
  const [loadError, setLoadError] = useState(null);

  const form = useInvoiceFormManagement();
  const { invoice, setInvoice } = form;

  const invoiceIdParam = searchParams.get('id');
  const clientIdParam = searchParams.get('clientId');

  const handleApplyReceiver = useCallback(
    (details) => {
      setInvoice((prev) => ({
        ...prev,
        receiverDetails: { ...prev.receiverDetails, ...details },
        receiverName: details.companyName || details.contactPerson || prev.receiverName,
      }));
    },
    [setInvoice]
  );

  const handleImportFromProfile = useCallback(async () => {
    if (!user) {
      setAuthModalOpen(true);
      return;
    }

    setIsImportingProfile(true);
    try {
      const profile = await fetchProfileForInvoice(supabase, user.id);
      if (!profileHasCompanyData(profile)) {
        toast({
          title: 'Geen bedrijfsgegevens in profiel',
          description: 'Vul eerst je bedrijfsgegevens in of sla ze op via “Opslaan in account”.',
          variant: 'destructive',
        });
        return;
      }

      const companyDetails = profileToCompanyDetails(profile, user.email);
      const logoDisplay = await resolveProfileLogo(supabase, profile);
      setInvoice((prev) => ({
        ...prev,
        companyDetails: { ...prev.companyDetails, ...companyDetails },
        logo: logoDisplay || prev.logo,
      }));
      toast({
        title: 'Profiel geïmporteerd',
        description: 'Je bedrijfsgegevens zijn ingevuld op de factuur.',
      });
    } catch (err) {
      toast({
        title: 'Importeren mislukt',
        description: err.message || 'Kon profiel niet laden.',
        variant: 'destructive',
      });
    } finally {
      setIsImportingProfile(false);
    }
  }, [user, setInvoice, toast]);

  const handleSaveToAccount = useCallback(async () => {
    if (!user) {
      setAuthModalOpen(true);
      return;
    }

    setIsSavingToAccount(true);
    try {
      const { logoPath, logoUrl } = await saveCompanyDetailsToProfile(
        supabase,
        user,
        invoice.companyDetails,
        invoice.logo
      );
      if (logoPath || logoUrl) {
        setInvoice((prev) => ({ ...prev, logo: logoUrl || prev.logo }));
      }
      toast({
        title: 'Opgeslagen in je account',
        description: 'Je bedrijfsgegevens staan nu in je profiel voor volgende facturen.',
      });
    } catch (err) {
      toast({
        title: 'Opslaan in account mislukt',
        description: err.message || 'Probeer het opnieuw.',
        variant: 'destructive',
      });
    } finally {
      setIsSavingToAccount(false);
    }
  }, [user, invoice.companyDetails, invoice.logo, setInvoice, toast]);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      if (!invoiceIdParam || !isPersistedInvoiceId(invoiceIdParam)) return;
      if (authLoading) return;

      if (!user) {
        setAuthModalOpen(true);
        return;
      }

      setIsLoadingRemote(true);
      setLoadError(null);
      try {
        const remote = await fetchInvoiceById(supabase, user.id, invoiceIdParam);
        if (cancelled) return;
        if (!remote) {
          setLoadError('Factuur niet gevonden of geen toegang.');
          return;
        }
        setInvoice(remote);
      } catch (err) {
        if (!cancelled) {
          setLoadError(err.message || 'Kon factuur niet laden.');
        }
      } finally {
        if (!cancelled) setIsLoadingRemote(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [invoiceIdParam, user, authLoading, setInvoice]);

  useEffect(() => {
    let cancelled = false;

    async function loadClient() {
      if (invoiceIdParam && isPersistedInvoiceId(invoiceIdParam)) return;
      if (!clientIdParam || !isPersistedClientId(clientIdParam)) return;
      if (authLoading) return;

      if (!user) {
        setAuthModalOpen(true);
        return;
      }

      try {
        const client = await fetchClientById(supabase, user.id, clientIdParam);
        if (cancelled || !client) return;
        const details = clientToReceiverDetails(client);
        setInvoice((prev) => ({
          ...prev,
          receiverDetails: { ...prev.receiverDetails, ...details },
          receiverName: details.companyName || details.contactPerson || prev.receiverName,
        }));
      } catch (err) {
        if (!cancelled) {
          toast({
            title: 'Klant laden mislukt',
            description: err.message || 'Kon klantgegevens niet invullen.',
            variant: 'destructive',
          });
        }
      }
    }

    loadClient();
    return () => {
      cancelled = true;
    };
  }, [clientIdParam, invoiceIdParam, user, authLoading, setInvoice, toast]);

  const handleSave = useCallback(async () => {
    if (!user) {
      setAuthModalOpen(true);
      return false;
    }

    setIsSaving(true);
    try {
      const status = invoice.status === 'concept' ? 'pending' : invoice.status;
      const saved = await upsertInvoice(
        supabase,
        user.id,
        { ...invoice, status },
        isPersistedInvoiceId(invoice.id) ? 'Factuur bijgewerkt' : 'Factuur opgeslagen'
      );
      setInvoice(saved);
      if (!isPersistedInvoiceId(invoice.id) || invoice.id !== saved.id) {
        router.replace(`/create-invoice?id=${saved.id}`);
      }
      toast({
        title: 'Factuur opgeslagen',
        description: `Factuur ${saved.invoice_number || saved.id} staat nu in je dashboard.`,
      });
      return true;
    } catch (err) {
      toast({
        title: 'Opslaan mislukt',
        description: err.message || 'Er ging iets mis.',
        variant: 'destructive',
      });
      return false;
    } finally {
      setIsSaving(false);
    }
  }, [user, invoice, setInvoice, router, toast]);

  const handleGoogleLogin = async () => {
    setAuthModalOpen(false);
    const next =
      invoiceIdParam && isPersistedInvoiceId(invoiceIdParam)
        ? `/create-invoice?id=${invoiceIdParam}`
        : '/create-invoice';
    await signInWithGoogle(next);
  };

  if (isLoadingRemote) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center">
        <Loader2 className="mb-3 h-10 w-10 animate-spin text-deep-blue" />
        <p className="text-slate-500">Factuur laden...</p>
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-lg text-red-600">{loadError}</p>
        <button
          type="button"
          className="mt-4 text-warm-orange hover:underline"
          onClick={() => router.push('/dashboard')}
        >
          Terug naar dashboard
        </button>
      </div>
    );
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="container mx-auto px-4 py-8 sm:px-6"
      >
        <div className="grid items-start gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <InvoiceForm
              invoice={invoice}
              onInputChange={form.handleInputChange}
              onDateChange={form.handleDateChange}
              onPaymentTermChange={form.handlePaymentTermChange}
              onRememberChange={form.handleRememberCompanyChange}
              onAddItem={form.handleAddItemBasedOnWorkType}
              onUpdateItem={form.handleUpdateItemBasedOnWorkType}
              onRemoveItem={form.handleRemoveItemBasedOnWorkType}
              onWorkTypeChange={form.handleWorkTypeChange}
              onSelectLayout={form.handleSelectLayout}
              onAddWorkDay={form.handleAddWorkDay}
              onUpdateWorkDay={form.handleUpdateWorkDay}
              onRemoveWorkDay={form.handleRemoveWorkDay}
              fileInputRef={fileInputRef}
              onLogoUpload={form.handleLogoUpload}
              isLoggedIn={Boolean(user)}
              onImportFromProfile={handleImportFromProfile}
              isImportingProfile={isImportingProfile}
              onSaveToAccount={handleSaveToAccount}
              isSavingToAccount={isSavingToAccount}
              onApplyReceiver={handleApplyReceiver}
            />
          </div>
          <div className="self-start lg:sticky lg:top-[calc(var(--header-height,6rem)+1.5rem)] lg:col-span-1">
            <InvoiceSidebar
              invoice={invoice}
              previewRef={previewRef}
              onSave={handleSave}
              isSaving={isSaving}
              isLoggedIn={Boolean(user)}
            />
          </div>
        </div>
      </motion.div>

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        actionText="je factuur op te slaan of te openen"
        onGoogleLogin={handleGoogleLogin}
      />
    </>
  );
}

const InvoiceDetailsPage = () => (
  <Suspense
    fallback={
      <div className="flex min-h-[50vh] items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-deep-blue" />
      </div>
    }
  >
    <InvoiceDetailsInner />
  </Suspense>
);

export default InvoiceDetailsPage;
