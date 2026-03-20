'use client';
import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabaseClient';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const EmailOptInCard = ({ source = 'invoice_create', mode = 'time_banner' }) => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [consentGiven, setConsentGiven] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const normalizedEmail = useMemo(() => email.trim().toLowerCase(), [email]);
  const canSubmit = normalizedEmail.length > 3 && consentGiven && !isSubmitting;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!consentGiven) {
      toast({
        title: 'Toestemming is nodig',
        description: 'Vink de checkbox aan om je e-mailadres op te mogen slaan.',
        variant: 'destructive',
      });
      return;
    }

    if (!normalizedEmail.includes('@')) {
      toast({
        title: 'Ongeldig e-mailadres',
        description: 'Vul een geldig e-mailadres in.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    try {
      // Insert attempts: your Supabase schema may differ (missing consent/source columns).
      const consentFields = ['consent_given', 'consentgiven', 'consentGiven', 'consent'];
      const payloadAttempts = [
        ...consentFields.map((consentField) => ({
          email: normalizedEmail,
          [consentField]: true,
          source,
        })),
        ...consentFields.map((consentField) => ({
          email: normalizedEmail,
          [consentField]: true,
        })),
        { email: normalizedEmail, source },
        { email: normalizedEmail },
      ];

      let lastError = null;
      for (const payload of payloadAttempts) {
        const { error } = await supabase.from('factuurbaas_emails').insert([payload]);
        if (!error) {
          lastError = null;
          break;
        }
        lastError = error;
      }

      if (lastError) {
        // Unique constraint: user already registered
        if (lastError.code === '23505') {
          toast({
            title: 'Je staat al op de lijst',
            description: 'Bedankt! We hebben je e-mailadres al opgeslagen.',
          });
          return;
        }

        throw lastError;
      }

      toast({
        title: 'Bedankt voor je opt-in',
        description: 'We hebben je e-mailadres opgeslagen voor de Premium lifetime 50% korting.',
      });

      setEmail('');
      setConsentGiven(false);
    } catch (err) {
      console.error('Email opt-in error:', err);
      toast({
        title: 'Kon je e-mailadres niet opslaan',
        description: err?.message || 'Probeer het later opnieuw.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="border-gray-200 shadow-none">
      <CardHeader className="p-4 pb-0">
        {mode === 'premium_notified' ? (
          <>
            <CardTitle className="text-base text-deep-blue">Krijg lifetime 50% korting op Premium</CardTitle>
            <CardDescription className="text-xs text-slate-600">
              Laat je e-mailadres achter. We sturen je een bericht zodra Premium-functies live gaan: overzicht, contacten, herinneringen en
              facturen herhalen/dupliceren.
            </CardDescription>
          </>
        ) : (
          <>
            <CardTitle className="text-base text-deep-blue">Premium</CardTitle>
            <CardDescription className="text-xs text-slate-600">
              <Link href="/premium" className="text-warm-orange hover:underline font-semibold">
                Bekijk Premium
              </Link>
            </CardDescription>
          </>
        )}
      </CardHeader>
      <CardContent className="p-4">
        {mode === 'premium_notified' ? (
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 mb-4">
            <div className="font-semibold text-deep-blue">Binnenkort: jij krijgt een seintje</div>
            <div className="text-xs text-slate-700 mt-1">
              Premium gaat live zodra er genoeg vraag is. Jij meldt je nu aan en krijgt lifetime 50% korting.
            </div>
          </div>
        ) : (
          null
        )}
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="email"
            inputMode="email"
            placeholder="jouw@email.nl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />

          <div className="flex items-start gap-3">
            <Checkbox
              id="factuurbaas-email-consent"
              checked={consentGiven}
              onCheckedChange={(v) => setConsentGiven(Boolean(v))}
            />
            <label htmlFor="factuurbaas-email-consent" className="text-xs text-slate-600 leading-relaxed">
              Ik wil als eerste toegang + lifetime 50% korting ontvangen. Ik geef toestemming om mijn e-mailadres op te slaan en Premium-updates te ontvangen.
            </label>
          </div>

          <Button type="submit" className="w-full" disabled={!canSubmit} variant="default">
            {isSubmitting ? 'Bezig met aanmelden...' : 'Meld mij aan'}
          </Button>
          <p className="text-[11px] text-slate-500">
            We slaan je e-mailadres alleen op als je de checkbox hierboven aanvinkt. Je kunt je later afmelden.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default EmailOptInCard;

