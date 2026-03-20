'use client';
import React, { useMemo, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const PremiumSignupCard = ({ source = 'premium_page' }) => {
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
        title: 'Vink de checkbox aan',
        description: 'Je moet toestemming geven om je e-mailadres op te slaan.',
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
      const consentFields = ['consent_given', 'consentgiven', 'consentGiven', 'consent'];
      const payloadAttempts = [
        // Try with explicit consent column
        ...consentFields.map((consentField) => ({
          email: normalizedEmail,
          [consentField]: true,
          source,
        })),
        // Try consent column without source (source column may not exist)
        ...consentFields.map((consentField) => ({
          email: normalizedEmail,
          [consentField]: true,
        })),
        // As a last resort, try without any consent column
        { email: normalizedEmail, source },
        // Final fallback: insert with only email (no consent/source columns)
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

        // Unique constraint: user already registered
        if (error?.code === '23505') {
          toast({
            title: 'Je staat al op de lijst',
            description: 'Bedankt! We hebben je e-mailadres al opgeslagen.',
          });
          return;
        }
      }

      if (lastError) throw lastError;

      toast({
        title: 'Aangemeld',
        description: 'Dank je! Je ontvangt een seintje zodra Premium live gaat.',
      });

      setEmail('');
      setConsentGiven(false);
    } catch (err) {
      console.error('Premium signup error:', err);
      console.error('Premium signup error details:', {
        message: err?.message,
        code: err?.code,
        details: err?.details,
        toString: err?.toString?.(),
        keys: Object.keys(err || {}),
      });
      toast({
        title: 'Kon je aanmelding niet opslaan',
        description:
          err?.message ||
          err?.toString?.() ||
          'Probeer het later opnieuw.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="border-gray-200 shadow-none">
      <CardHeader className="p-5 pb-3">
        <CardTitle className="text-xl font-heading text-deep-blue">
          Claim je korting
        </CardTitle>
        <CardDescription className="text-sm text-slate-600">
          Meld je aan en ontvang altijd 50% korting op Premium.
          Je hoeft nu niets te betalen.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-5 pt-0">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="email"
              inputMode="email"
              placeholder="jouw@email.nl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>

          <div className="flex items-start gap-3">
            <Checkbox
              id="premium-signup-consent"
              checked={consentGiven}
              onCheckedChange={(v) => setConsentGiven(Boolean(v))}
            />
            <label htmlFor="premium-signup-consent" className="text-xs text-slate-700 leading-relaxed">
              Ik wil als eerste toegang + lifetime 50% korting ontvangen
            </label>
          </div>

          <Button type="submit" className="w-full" disabled={!canSubmit} variant="default">
            {isSubmitting ? 'Bezig met aanmelden...' : 'Meld mij aan'}
          </Button>

          <div className="text-[11px] text-slate-500 space-y-1">
            <p>We slaan je e-mailadres alleen op als je de checkbox aanvinkt.</p>
            <p>We mailen je alleen wanneer Premium live gaat. Afmelden kan altijd met één klik.</p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default PremiumSignupCard;

