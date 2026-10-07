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
      // Your current Supabase schema for `factuurbaas_emails` includes:
      // id, email, created_at, discount_percent, discount_cycle, discount_valid_for_life
      // There are no consent_* or source columns. Your RLS policy only checks email IS NOT NULL.
      // So we only insert the existing columns.
      const payload = {
        email: normalizedEmail,
        discount_percent: 50,
        discount_cycle: 'monthly',
        discount_valid_for_life: true,
      };

      const { error } = await supabase.from('factuurbaas_emails').insert([payload]);
      if (error) {
        if (error.code === '23505') {
          toast({
            title: 'Je staat al op de lijst',
            description: 'Bedankt! We hebben je e-mailadres al opgeslagen.',
          });
          return;
        }
        throw error;
      }

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
    <Card className="rounded-2xl border-ink/[0.08] bg-white text-ink shadow-paper">
      <CardHeader className="space-y-2 p-6 pb-4 sm:p-7 sm:pb-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ember">Premium</p>
        <CardTitle className="font-display text-[1.75rem] font-normal leading-[1.1] tracking-[-0.025em] text-ink">
          Claim je korting
        </CardTitle>
        <CardDescription className="text-[15px] leading-relaxed text-ink-500">
          Meld je aan en ontvang altijd 50% korting op Premium.
          Je hoeft nu niets te betalen.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 pt-0 sm:p-7 sm:pt-0">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="premium-signup-email"
              className="block font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500"
            >
              E-mail
            </label>
            <Input
              id="premium-signup-email"
              type="email"
              inputMode="email"
              placeholder="jouw@email.nl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              className="h-12 rounded-xl border-ink/15 bg-white px-4 text-[15px] text-ink placeholder:text-ink-400 focus-visible:ring-ember focus-visible:ring-offset-1"
            />
          </div>

          <div className="flex items-start gap-3 rounded-xl bg-paper-50 p-3.5 ring-1 ring-inset ring-ink/[0.06]">
            <Checkbox
              id="premium-signup-consent"
              checked={consentGiven}
              onCheckedChange={(v) => setConsentGiven(Boolean(v))}
              className="mt-0.5 border-ink/40 focus-visible:ring-ember data-[state=checked]:border-ink data-[state=checked]:bg-ink data-[state=checked]:text-white"
            />
            <label htmlFor="premium-signup-consent" className="text-[13px] leading-relaxed text-ink-700">
              Ik wil als eerste toegang + lifetime 50% korting ontvangen
            </label>
          </div>

          <Button
            type="submit"
            className="h-12 w-full rounded-full bg-ink text-[15px] font-medium text-white shadow-[0_1px_2px_rgba(6,26,48,0.2),0_8px_20px_-8px_rgba(6,26,48,0.5)] hover:bg-ink-950 hover:opacity-100 focus-visible:ring-ember"
            disabled={!canSubmit}
            variant="default"
          >
            {isSubmitting ? 'Bezig met aanmelden...' : 'Meld mij aan'}
          </Button>

          <div className="space-y-1 text-xs leading-relaxed text-ink-400">
            <p>We slaan je e-mailadres alleen op als je de checkbox aanvinkt.</p>
            <p>We mailen je alleen wanneer Premium live gaat. Afmelden kan altijd met één klik.</p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default PremiumSignupCard;

