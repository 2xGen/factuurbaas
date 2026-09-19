'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
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

export default function OfferteMakerPage() {
  const previewRef = React.useRef(null);
  const form = useQuoteForm();
  const { quote, setQuote } = form;
  const { user } = useAuth();
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const clientIdParam = searchParams.get('clientId');

  const [isImportingProfile, setIsImportingProfile] = useState(false);
  const [isSavingToAccount, setIsSavingToAccount] = useState(false);

  const handleApplyClient = useCallback(
    (receiverOrQuoteDetails) => {
      // ClientPicker passes receiverDetails; convert if structured street fields exist
      const hasStreet = Boolean(receiverOrQuoteDetails?.street);
      const clientDetails = hasStreet
        ? {
            companyName: receiverOrQuoteDetails.companyName || '',
            contactPerson: receiverOrQuoteDetails.contactPerson || '',
            email: receiverOrQuoteDetails.email || '',
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

  useEffect(() => {
    if (!user?.id || !clientIdParam || !isPersistedClientId(clientIdParam)) return;
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
  }, [user?.id, clientIdParam, setQuote]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="container mx-auto px-4 py-8 sm:px-6"
    >
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
        <div className="lg:col-span-1">
          <QuoteSidebar quote={quote} previewRef={previewRef} />
        </div>
      </div>
    </motion.div>
  );
}
