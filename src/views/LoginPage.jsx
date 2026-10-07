'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import PrivacyConsentCheckbox from '@/components/auth/PrivacyConsentCheckbox';
import NewsletterOptInCheckbox from '@/components/auth/NewsletterOptInCheckbox';
import { markPrivacyConsentPending } from '@/lib/privacyConsent';
import { completeAuthSideEffects } from '@/lib/authSideEffects';
import { recordReferralVisitOnce, storeReferralCode } from '@/lib/referral';
import { supabase } from '@/lib/customSupabaseClient';
import { useToast } from '@/components/ui/use-toast';
import { ArrowLeft, Crown, Loader2 } from 'lucide-react';

function GoogleIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

const inputClassName =
  'h-12 w-full rounded-xl border border-ink/15 bg-white px-4 text-[15px] text-ink transition placeholder:text-ink-400 hover:border-ink/25 focus:border-ink/40 focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-1 disabled:bg-paper-100 disabled:text-ink-400';

const MOCK_INVOICES = [
  { number: '2026-014', client: 'Studio Noord', amount: '€ 1.250', status: 'Betaald', tone: 'paid' },
  { number: '2026-015', client: 'Van Dijk Advies', amount: '€ 980', status: 'Open', tone: 'open' },
  { number: '2026-013', client: 'Klant BV', amount: '€ 520', status: 'Te laat', tone: 'late' },
];

const STATUS_TONES = {
  paid: 'bg-emerald-50 text-emerald-700 ring-emerald-600/15',
  open: 'bg-amber-50 text-amber-700 ring-amber-600/15',
  late: 'bg-rose-50 text-rose-700 ring-rose-600/15',
};

function DashboardSnippet() {
  return (
    <div className="relative w-full max-w-md" aria-hidden>
      <div className="rounded-2xl bg-white p-5 text-ink shadow-window">
        <div className="flex items-baseline justify-between gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-400">Oktober</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-400">factuurbaas.nl/dashboard</p>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-ink p-4 text-white">
            <p className="text-xs text-white/70">Je hield over</p>
            <p className="mt-2 font-display text-[1.65rem] leading-none tabular">€ 5.280</p>
          </div>
          <div className="rounded-xl border border-ink/[0.07] bg-paper-50 p-4">
            <p className="text-xs text-ink-500">Moet je nog ontvangen</p>
            <p className="mt-2 font-display text-[1.65rem] leading-none tabular">€ 2.750</p>
          </div>
        </div>
        <ul className="mt-4 divide-y divide-ink/[0.06] rounded-xl border border-ink/[0.07] text-[13px]">
          {MOCK_INVOICES.map((inv) => (
            <li key={inv.number} className="grid grid-cols-[1fr_auto_auto] items-center gap-3 px-3.5 py-2.5">
              <span className="min-w-0">
                <span className="block truncate font-medium">{inv.client}</span>
                <span className="block font-mono text-[10px] text-ink-400">#{inv.number}</span>
              </span>
              <span className="tabular">{inv.amount}</span>
              <span
                className={`inline-flex w-[4.25rem] justify-center rounded-full px-2 py-0.5 text-[11px] font-medium ring-1 ring-inset ${STATUS_TONES[inv.tone]}`}
              >
                {inv.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function AuthField({
  id,
  label,
  type,
  value,
  onChange,
  disabled,
  autoComplete = 'off',
  placeholder,
  required = true,
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        autoComplete={autoComplete}
        placeholder={placeholder}
        required={required}
        className={inputClassName}
      />
    </div>
  );
}

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const { user, loading, signInWithGoogle, signIn, signUp } = useAuth();
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [mode, setMode] = useState('login'); // 'login' | 'signup'
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [newsletterOptIn, setNewsletterOptIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const next = searchParams.get('next') || '/dashboard';
  const safeNext = next.startsWith('/') ? next : '/dashboard';
  const busy = isSubmitting || loading;

  useEffect(() => {
    const ref = searchParams.get('ref');
    if (!ref) return;
    storeReferralCode(ref);
    void recordReferralVisitOnce(supabase, ref);
  }, [searchParams]);

  useEffect(() => {
    if (!loading && user) {
      router.replace(safeNext);
    }
  }, [loading, user, router, safeNext]);

  const requirePrivacy = () => {
    if (privacyAccepted) return true;
    toast({
      title: 'Akkoord vereist',
      description: 'Bevestig het privacybeleid en de voorwaarden om door te gaan.',
      variant: 'destructive',
    });
    return false;
  };

  const handleGoogle = async () => {
    if (!requirePrivacy()) return;
    setIsSubmitting(true);
    markPrivacyConsentPending({ newsletterOptIn });
    await signInWithGoogle(safeNext);
    setIsSubmitting(false);
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!requirePrivacy()) return;

    const trimmedEmail = email.trim();
    if (!trimmedEmail || !password) {
      toast({
        title: 'Bijna klaar',
        description: 'Vul je e-mailadres en wachtwoord in.',
        variant: 'destructive',
      });
      return;
    }

    if (mode === 'signup') {
      if (password.length < 6) {
        toast({
          title: 'Wachtwoord te kort',
          description: 'Kies een wachtwoord van minimaal 6 tekens.',
          variant: 'destructive',
        });
        return;
      }
      if (password !== confirmPassword) {
        toast({
          title: 'Wachtwoorden komen niet overeen',
          description: 'Check je wachtwoord en probeer opnieuw.',
          variant: 'destructive',
        });
        return;
      }
    }

    setIsSubmitting(true);
    markPrivacyConsentPending({ newsletterOptIn });

    try {
      if (mode === 'signup') {
        const { error, needsEmailConfirmation } = await signUp(trimmedEmail, password, safeNext);
        if (error) return;

        if (needsEmailConfirmation) {
          toast({
            title: 'Bevestig je e-mail',
            description:
              'We hebben een bevestigingslink gestuurd. Open die om je account te activeren, daarna kun je inloggen.',
          });
          setMode('login');
          setPassword('');
          setConfirmPassword('');
          return;
        }

        await completeAuthSideEffects();
        toast({
          title: 'Account aangemaakt',
          description: 'Welkom bij FactuurBaas.',
        });
        router.replace(safeNext);
        return;
      }

      const { error } = await signIn(trimmedEmail, password);
      if (error) return;

      await completeAuthSideEffects();
      router.replace(safeNext);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid min-h-[calc(100vh-var(--header-height,5rem))] bg-paper text-ink lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
      <section className="grain relative isolate flex min-w-0 flex-col overflow-hidden px-4 py-8 sm:px-8 sm:py-10 lg:px-12">
        <div className="bg-ledger mask-fade-y pointer-events-none absolute inset-0 -z-10" aria-hidden />
        <div
          className="pointer-events-none absolute -left-40 -top-48 -z-10 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(210,96,26,0.10),transparent_65%)]"
          aria-hidden
        />

        <Link
          href="/"
          className="group inline-flex items-center gap-2 self-start rounded-full font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400 transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2"
        >
          <ArrowLeft
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-0.5"
            aria-hidden
          />
          Terug naar Home
        </Link>

        <div className="flex flex-1 items-center justify-center py-8 sm:py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-[28rem] space-y-6 rounded-2xl border border-ink/[0.08] bg-white p-6 shadow-paper sm:p-9"
          >
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-2.5 rounded-full font-display text-xl tracking-[-0.02em] text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2"
              >
                <Crown className="h-5 w-5 text-ember" aria-hidden />
                FactuurBaas.nl
              </Link>
              <h2 className="mt-6 font-display text-[2rem] font-normal leading-[1.08] tracking-[-0.03em] text-ink sm:text-[2.3rem]">
                Inloggen of account maken
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                Sla facturen veilig op en bekijk openstaande bedragen in je dashboard. Gratis met Google
                of met e-mail en wachtwoord.
              </p>
            </div>

        {!showEmailForm && (
          <div className="space-y-3 rounded-xl bg-paper-50 p-4 ring-1 ring-inset ring-ink/[0.06]">
            <PrivacyConsentCheckbox
              checked={privacyAccepted}
              onCheckedChange={setPrivacyAccepted}
              disabled={busy}
            />
            <NewsletterOptInCheckbox
              checked={newsletterOptIn}
              onCheckedChange={setNewsletterOptIn}
              disabled={busy}
            />
          </div>
        )}

        <Button
          type="button"
          size="lg"
          variant="outline"
          className="h-12 w-full gap-3 rounded-full border-ink/15 bg-white text-[15px] font-medium text-ink hover:border-ink/35 hover:bg-white hover:text-ink focus-visible:ring-ember"
          onClick={handleGoogle}
          disabled={busy || !privacyAccepted}
        >
          {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" /> : <GoogleIcon className="h-5 w-5" />}
          Doorgaan met Google
        </Button>

        {!showEmailForm ? (
          <button
            type="button"
            onClick={() => setShowEmailForm(true)}
            disabled={busy}
            className="mx-auto block rounded text-center text-sm font-medium text-ink underline decoration-ink/20 underline-offset-[6px] transition-colors hover:decoration-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 disabled:opacity-60"
          >
            of met e-mail?
          </button>
        ) : (
          <div className="space-y-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden>
                <div className="w-full border-t border-ink/10" />
              </div>
              <div className="relative flex justify-center font-mono text-[11px] uppercase tracking-[0.16em]">
                <span className="bg-white px-3 text-ink-400">of met e-mail</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-1 rounded-full bg-paper-200/70 p-1">
              <button
                type="button"
                onClick={() => setMode('login')}
                disabled={busy}
                aria-pressed={mode === 'login'}
                className={`h-10 rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember ${
                  mode === 'login'
                    ? 'bg-white text-ink shadow-[0_1px_2px_rgba(10,42,77,0.12)]'
                    : 'text-ink-500 hover:text-ink'
                }`}
              >
                Inloggen
              </button>
              <button
                type="button"
                onClick={() => setMode('signup')}
                disabled={busy}
                aria-pressed={mode === 'signup'}
                className={`h-10 rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember ${
                  mode === 'signup'
                    ? 'bg-white text-ink shadow-[0_1px_2px_rgba(10,42,77,0.12)]'
                    : 'text-ink-500 hover:text-ink'
                }`}
              >
                Account maken
              </button>
            </div>

            <form onSubmit={handleEmailSubmit} className="space-y-4" autoComplete="off">
              <AuthField
                id="fb-login-email"
                label="E-mail"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={busy}
                autoComplete="off"
                placeholder="jouw@email.nl"
              />
              <AuthField
                id="fb-login-password"
                label="Wachtwoord"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={busy}
                autoComplete="new-password"
                placeholder="Minimaal 6 tekens"
              />
              {mode === 'signup' && (
                <AuthField
                  id="fb-login-confirm-password"
                  label="Bevestig wachtwoord"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  disabled={busy}
                  autoComplete="new-password"
                  placeholder="Herhaal je wachtwoord"
                />
              )}

              <div className="space-y-3 rounded-xl bg-paper-50 p-4 ring-1 ring-inset ring-ink/[0.06]">
                <PrivacyConsentCheckbox
                  id="privacy-consent-email"
                  checked={privacyAccepted}
                  onCheckedChange={setPrivacyAccepted}
                  disabled={busy}
                />
                <NewsletterOptInCheckbox
                  id="newsletter-opt-in-email"
                  checked={newsletterOptIn}
                  onCheckedChange={setNewsletterOptIn}
                  disabled={busy}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="h-12 w-full rounded-full bg-ink text-[15px] font-medium text-white shadow-[0_1px_2px_rgba(6,26,48,0.2),0_8px_20px_-8px_rgba(6,26,48,0.5)] hover:bg-ink-950 hover:opacity-100 focus-visible:ring-ember"
                disabled={busy || !privacyAccepted}
              >
                {isSubmitting ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : mode === 'signup' ? (
                  'Account aanmaken'
                ) : (
                  'Inloggen met e-mail'
                )}
              </Button>
            </form>

            {mode === 'signup' && (
              <p className="text-center text-xs leading-relaxed text-ink-400">
                Na het aanmaken sturen we een bevestigingsmail. Pas daarna kun je inloggen.
              </p>
            )}
          </div>
        )}
          </motion.div>
        </div>
      </section>

      <aside className="grain-light relative isolate hidden overflow-hidden bg-ink-950 text-white lg:flex lg:flex-col lg:justify-between lg:px-12 lg:py-14 xl:px-16">
        <div className="bg-ledger-dark mask-fade-y pointer-events-none absolute inset-0 -z-10" aria-hidden />
        <div
          className="pointer-events-none absolute -bottom-40 left-1/2 -z-10 h-[30rem] w-[44rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(210,96,26,0.24),transparent_62%)]"
          aria-hidden
        />

        <div className="motion-safe:animate-rise">
          <img src="/crown-favicon.svg" alt="" aria-hidden className="h-9 w-9" />
          <p className="mt-8 max-w-[18ch] font-display text-[2.6rem] font-normal leading-[1.04] tracking-[-0.03em] xl:text-[3.1rem]">
            Sla facturen veilig op en bekijk <em className="text-ember-100">openstaande bedragen</em> in je
            dashboard.
          </p>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-white/55">
            Gratis met Google of met e-mail en wachtwoord
          </p>
        </div>

        <div className="mt-12 motion-safe:animate-rise" style={{ animationDelay: '160ms' }}>
          <DashboardSnippet />
        </div>
      </aside>
    </div>
  );
}
