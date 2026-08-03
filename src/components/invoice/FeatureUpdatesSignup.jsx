'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabaseClient';
import { useToast } from '@/components/ui/use-toast';
import FormInput from '@/components/invoice/formElements/FormInput';
import { COMING_SOON_FEATURES } from '@/lib/comingSoonFeatures';

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

function ComingSoonList({ className = '' }) {
  return (
    <ul className={`space-y-2 ${className}`}>
      {COMING_SOON_FEATURES.map((feature) => (
        <li
          key={feature.title}
          className="flex items-start gap-2.5 rounded-lg border border-slate-100 bg-white/70 px-3 py-2.5"
        >
          <span className="mt-0.5 shrink-0 rounded-full bg-warm-orange/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-warm-orange">
            Binnenkort
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-medium text-deep-blue">{feature.title}</span>
            <span className="mt-0.5 block text-xs leading-relaxed text-slate-500">
              {feature.description}
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
}

function ConsentLabelText({ compact = false, loading = false }) {
  if (loading) {
    return compact ? 'Bezig…' : 'Bezig met aanmelden...';
  }

  return (
    <>
      {compact ? 'Mail mij bij nieuwe functies' : 'Houd mij op de hoogte van nieuwe functies'}. Ik ga
      akkoord met het{' '}
      <Link
        href="/privacybeleid"
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-deep-blue underline decoration-slate-300 underline-offset-2 hover:text-warm-orange hover:decoration-warm-orange"
        onClick={(e) => e.stopPropagation()}
      >
        Privacybeleid
      </Link>{' '}
      en de{' '}
      <Link
        href="/algemene-voorwaarden"
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-deep-blue underline decoration-slate-300 underline-offset-2 hover:text-warm-orange hover:decoration-warm-orange"
        onClick={(e) => e.stopPropagation()}
      >
        Algemene Voorwaarden
      </Link>
      .
    </>
  );
}

/**
 * Coming-soon roadmap + optional e-mail notify (factuurbaas_emails).
 * Used on create-invoice, offerte, download dialog, dashboard, and footer.
 */
export default function FeatureUpdatesSignup({
  companyEmail = '',
  showFeatureList = true,
  intro,
  variant = 'default',
}) {
  const { toast } = useToast();
  const [email, setEmail] = useState(companyEmail || '');
  const [consentGiven, setConsentGiven] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const isFooter = variant === 'footer';

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
      <div className={isFooter ? '' : 'space-y-3'}>
        {showFeatureList && <ComingSoonList />}
        <p className={`text-sm ${isFooter ? 'text-slate-600' : 'font-medium text-green-700'}`}>
          Bedankt — we mailen je alleen over nieuwe functies.
        </p>
      </div>
    );
  }

  if (isFooter) {
    return (
      <div className="space-y-3">
        {intro && <p className="text-sm leading-relaxed text-slate-600">{intro}</p>}
        <input
          type="email"
          name="updatesEmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="jouw@email.nl"
          autoComplete="email"
          className="w-full border-0 border-b border-slate-300 bg-transparent px-0 py-2 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-deep-blue"
        />
        <label className="flex cursor-pointer items-start gap-2.5">
          <input
            type="checkbox"
            checked={consentGiven}
            onChange={(e) => handleConsentChange(e.target.checked)}
            disabled={!hasValidEmail || isSubmitting}
            className="mt-0.5 h-3.5 w-3.5 shrink-0 rounded border-slate-300 text-deep-blue focus:ring-deep-blue disabled:opacity-50"
          />
          <span className="text-xs leading-relaxed text-slate-600">
            <ConsentLabelText compact loading={isSubmitting} />
          </span>
        </label>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <p className="text-sm leading-relaxed text-slate-600">
        {intro ||
          'FactuurBaas blijft gratis. Dit komt eraan — laat je e-mail achter als je als eerste wilt horen wanneer het live is.'}
      </p>

      {showFeatureList && <ComingSoonList />}

      <FormInput
        label="E-mailadres"
        name="updatesEmail"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="jouw@email.nl"
      />

      <label className="flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          checked={consentGiven}
          onChange={(e) => handleConsentChange(e.target.checked)}
          disabled={!hasValidEmail || isSubmitting}
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-gray-300 text-blue-600 focus:ring-blue-500 disabled:opacity-50"
        />
        <span className="text-sm leading-relaxed text-slate-700">
          <ConsentLabelText loading={isSubmitting} />
        </span>
      </label>
    </div>
  );
}
