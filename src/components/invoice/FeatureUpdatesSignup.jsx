'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useToast } from '@/components/ui/use-toast';
import FormInput from '@/components/invoice/formElements/FormInput';

async function subscribeEmail(email, toast) {
  const payload = {
    email,
    discount_percent: 50,
    discount_cycle: 'monthly',
    discount_valid_for_life: true,
  };

  const { error } = await supabase.from('factuurbaas_emails').insert([payload]);
  if (error) {
    if (error.code === '23505') {
      toast({
        title: 'Je staat al op de lijst',
        description: 'We houden je op de hoogte zodra er nieuwe functies zijn.',
      });
      return true;
    }
    throw error;
  }

  toast({
    title: 'Aangemeld',
    description: 'We mailen je alleen over nieuwe FactuurBaas-functies.',
  });
  return true;
}

export default function FeatureUpdatesSignup({ companyEmail = '' }) {
  const { toast } = useToast();
  const [email, setEmail] = useState(companyEmail || '');
  const [consentGiven, setConsentGiven] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setEmail((current) => current || companyEmail || '');
  }, [companyEmail]);

  const normalizedEmail = email.trim().toLowerCase();
  const hasValidEmail = normalizedEmail.includes('@');

  const handleConsentChange = useCallback(
    async (checked) => {
      if (!hasValidEmail || isSubmitting) return;
      setConsentGiven(checked);
      if (!checked) return;

      setIsSubmitting(true);
      try {
        const ok = await subscribeEmail(normalizedEmail, toast);
        if (ok) setSubmitted(true);
      } catch (err) {
        setConsentGiven(false);
        toast({
          title: 'Kon je niet aanmelden',
          description: err?.message || 'Probeer het later opnieuw.',
          variant: 'destructive',
        });
      } finally {
        setIsSubmitting(false);
      }
    },
    [hasValidEmail, isSubmitting, normalizedEmail, toast]
  );

  if (submitted) {
    return (
      <p className="text-sm text-green-700 font-medium">
        Bedankt! We houden je op de hoogte over nieuwe functies.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-600 leading-relaxed">
        FactuurBaas blijft gratis. Laat je e-mailadres achter als je als eerste wilt horen wanneer
        synchronisatie, herinneringen en andere nieuwe functies beschikbaar zijn.
      </p>

      <FormInput
        label="E-mailadres"
        name="updatesEmail"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="jouw@email.nl"
      />

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={consentGiven}
          onChange={(e) => handleConsentChange(e.target.checked)}
          disabled={!hasValidEmail || isSubmitting}
          className="mt-0.5 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 disabled:opacity-50"
        />
        <span className="text-sm text-slate-700">
          {isSubmitting ? 'Bezig met aanmelden...' : 'Houd mij op de hoogte van nieuwe functies'}
        </span>
      </label>
    </div>
  );
}
