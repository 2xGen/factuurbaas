'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import OfferteMaker from '@/components/tools/OfferteMaker';
import QuoteSidebar from '@/components/tools/QuoteSidebar';
import { useQuoteForm } from '@/hooks/useQuoteForm';
import QuotePreview from '@/components/tools/QuotePreview';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/lib/customSupabaseClient';
import {
  fetchProfileForInvoice,
  profileHasCompanyData,
  profileToCompanyDetails,
  resolveProfileLogo,
  saveCompanyDetailsToProfile,
} from '@/lib/profileToInvoice';
import {
  clientToQuoteClientDetails,
  fetchClientById,
  isPersistedClientId,
} from '@/lib/clientPersistence';
import {
  fetchQuoteById,
  isPersistedQuoteId,
  upsertQuote,
} from '@/lib/quotePersistence';
import { Loader2 } from 'lucide-react';

export default function OfferteMakerPage() {
  const previewRef = React.useRef(null);
  const form = useQuoteForm();
  const { quote, setQuote } = form;
  const { user } = useAuth();
  const { toast } = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();
  const clientIdParam = searchParams.get('clientId');
  const quoteIdParam = searchParams.get('id');
  const fromIdParam = searchParams.get('from');

  const [isImportingProfile, setIsImportingProfile] = useState(false);
  const [isSavingToAccount, setIsSavingToAccount] = useState(false);
  const [isSavingQuote, setIsSavingQuote] = useState(false);
  const [isLoadingQuote, setIsLoadingQuote] = useState(Boolean(quoteIdParam || fromIdParam));

  const handleApplyClient = useCallback(
    (receiverOrQuoteDetails) => {
      const hasStreet = Boolean(receiverOrQuoteDetails?.street);
      const clientDetails = hasStreet
        ? {
            companyName: receiverOrQuoteDetails.companyName || '',
            contactPerson: receiverOrQuoteDetails.contactPerson || '',
            email: receiverOrQuoteDetails.email || '',
            street: receiverOrQuoteDetails.street || '',
            postalCode: receiverOrQuoteDetails.postalCode || '',
            city: receiverOrQuoteDetails.city || '',
            country: receiverOrQuoteDetails.country || '',
            address: [
              receiverOrQuoteDetails.street,
              [receiverOrQuoteDetails.postalCode, receiverOrQuoteDetails.city]
                .filter(Boolean)
                .join(' '),
              receiverOrQuoteDetails.country,
            ]
              .filter(Boolean)
              .join('\n'),
          }
        : {
            companyName: receiverOrQuoteDetails.companyName || '',
            contactPerson: receiverOrQuoteDetails.contactPerson || '',
            email: receiverOrQuoteDetails.email || '',
            address: receiverOrQuoteDetails.address || '',
          };

      setQuote((prev) => ({
        ...prev,
        clientDetails: { ...prev.clientDetails, ...clientDetails },
      }));
    },
    [setQuote]
  );

  const handleImportFromProfile = useCallback(async () => {
    if (!user) return;
    setIsImportingProfile(true);
    try {
      const profile = await fetchProfileForInvoice(supabase, user.id);
      if (!profileHasCompanyData(profile)) {
        toast({
          title: 'Geen bedrijfsgegevens in profiel',
          description: 'Vul eerst je bedrijfsgegevens in op je profiel.',
          variant: 'destructive',
        });
        return;
      }
      const companyDetails = profileToCompanyDetails(profile, user.email);
      const logoDisplay = await resolveProfileLogo(supabase, profile);
      setQuote((prev) => ({
        ...prev,
        companyDetails: { ...prev.companyDetails, ...companyDetails },
        logo: logoDisplay || prev.logo,
      }));
      toast({
        title: 'Profiel geïmporteerd',
        description: 'Je bedrijfsgegevens zijn ingevuld op de offerte.',
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
  }, [user, setQuote, toast]);

  const handleSaveToAccount = useCallback(async () => {
    if (!user) return;
    setIsSavingToAccount(true);
    try {
      const { logoUrl } = await saveCompanyDetailsToProfile(
        supabase,
        user,
        quote.companyDetails,
        quote.logo
      );
      if (logoUrl) {
        setQuote((prev) => ({ ...prev, logo: logoUrl || prev.logo }));
      }
      toast({
        title: 'Opgeslagen in je account',
        description: 'Je bedrijfsgegevens staan nu in je profiel.',
      });
    } catch (err) {
      toast({
        title: 'Opslaan mislukt',
        description: err.message || 'Probeer het opnieuw.',
        variant: 'destructive',
      });
    } finally {
      setIsSavingToAccount(false);
    }
  }, [user, quote.companyDetails, quote.logo, setQuote, toast]);

  const handleSaveQuote = useCallback(
    async (activityDescription = 'Offerte opgeslagen') => {
      if (!user) {
        toast({
          title: 'Niet ingelogd',
          description: 'Log in om een offerte op te slaan.',
          variant: 'destructive',
        });
        return null;
      }

      setIsSavingQuote(true);
      try {
        const saved = await upsertQuote(
          supabase,
          user.id,
          { ...quote, status: quote.status || 'concept' },
          activityDescription
        );
        setQuote((prev) => ({ ...prev, ...saved, rememberCompanyDetails: prev.rememberCompanyDetails }));
        if (!isPersistedQuoteId(quote.id) || quote.id !== saved.id) {
          router.replace(`/tools/offerte-maker/maken?id=${saved.id}`);
        }
        toast({
          title: 'Offerte opgeslagen',
          description: `Offerte ${saved.quoteNumber || ''} staat nu onder Offertes.`,
        });
        return saved;
      } catch (err) {
        toast({
          title: 'Opslaan mislukt',
          description: err.message || 'Er ging iets mis.',
          variant: 'destructive',
        });
        return null;
      } finally {
        setIsSavingQuote(false);
      }
    },
    [user, quote, setQuote, router, toast]
  );

  useEffect(() => {
    if (!user?.id || (!quoteIdParam && !fromIdParam)) {
      setIsLoadingQuote(false);
      return;
    }
    if (quoteIdParam && !isPersistedQuoteId(quoteIdParam)) {
      setIsLoadingQuote(false);
      return;
    }
    if (fromIdParam && !isPersistedQuoteId(fromIdParam)) {
      setIsLoadingQuote(false);
      return;
    }

    let cancelled = false;
    setIsLoadingQuote(true);
    (async () => {
      try {
        const sourceId = quoteIdParam || fromIdParam;
        const loaded = await fetchQuoteById(supabase, user.id, sourceId);
        if (cancelled || !loaded) {
          if (!cancelled && (quoteIdParam || fromIdParam)) {
            toast({
              title: 'Offerte niet gevonden',
              description: 'Deze offerte bestaat niet of hoort niet bij jouw account.',
              variant: 'destructive',
            });
          }
          return;
        }
        if (fromIdParam && !quoteIdParam) {
          setQuote({
            ...loaded,
            id: undefined,
            status: 'concept',
            convertedInvoiceId: null,
            quoteNumber: `${loaded.quoteNumber || 'OFF'}-kopie`,
            activity_log: [],
            activityLog: [],
          });
        } else {
          setQuote((prev) => ({
            ...loaded,
            rememberCompanyDetails: prev.rememberCompanyDetails,
          }));
        }
      } catch (err) {
        if (!cancelled) {
          toast({
            title: 'Laden mislukt',
            description: err.message || 'Kon offerte niet laden.',
            variant: 'destructive',
          });
        }
      } finally {
        if (!cancelled) setIsLoadingQuote(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [user?.id, quoteIdParam, fromIdParam, setQuote, toast]);

  useEffect(() => {
    if (!user?.id || !clientIdParam || !isPersistedClientId(clientIdParam)) return;
    if (quoteIdParam) return;
    let cancelled = false;
    (async () => {
      try {
        const client = await fetchClientById(supabase, user.id, clientIdParam);
        if (cancelled || !client) return;
        setQuote((prev) => ({
          ...prev,
          clientDetails: {
            ...prev.clientDetails,
            ...clientToQuoteClientDetails(client),
          },
        }));
      } catch {
        // ignore — user can pick manually
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [user?.id, clientIdParam, quoteIdParam, setQuote]);

  if (isLoadingQuote) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center">
        <Loader2 className="mb-3 h-8 w-8 animate-spin text-deep-blue" />
        <p className="text-sm text-slate-500">Offerte laden…</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="container mx-auto px-4 py-8 sm:px-6"
    >
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Tools</p>
        <h1 className="mt-1 font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Offerte maken
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          {user ? (
            <>
              Opgeslagen offertes vind je onder{' '}
              <Link href="/offertes" className="font-medium text-deep-blue hover:underline">
                Offertes
              </Link>
              .
            </>
          ) : (
            'Download als PDF of log in om offertes op te slaan.'
          )}
        </p>
      </div>

      <div className="fixed left-[-9999px] top-0" aria-hidden>
        <QuotePreview ref={previewRef} quote={quote} />
      </div>

      <div className="grid items-start gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <OfferteMaker
            form={form}
            onImportFromProfile={handleImportFromProfile}
            isImportingProfile={isImportingProfile}
            onSaveToAccount={handleSaveToAccount}
            isSavingToAccount={isSavingToAccount}
            onApplyClient={handleApplyClient}
          />
        </div>
        <div className="self-start lg:sticky lg:top-[calc(var(--header-height,6rem)+1.5rem)] lg:col-span-1">
          <QuoteSidebar
            quote={quote}
            previewRef={previewRef}
            user={user}
            onSave={handleSaveQuote}
            isSaving={isSavingQuote}
            onToggleBranding={(show) =>
              setQuote((prev) => ({
                ...prev,
                options: { ...prev.options, showFactuurBaasBranding: show },
              }))
            }
          />
        </div>
      </div>
    </motion.div>
  );
}
