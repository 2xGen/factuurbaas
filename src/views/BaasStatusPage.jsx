'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Check,
  Copy,
  Crown,
  FileText,
  Linkedin,
  Loader2,
  Lock,
  Mail,
  Share2,
  Sparkles,
  Trophy,
  UserCircle,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { useUserInvoices } from '@/hooks/useUserInvoices';
import { supabase } from '@/lib/customSupabaseClient';
import {
  buildEmailShareUrl,
  buildLinkedInShareUrl,
  buildReferralShareText,
  buildReferralUrl,
  buildWhatsAppShareUrl,
  countMyReferrals,
  ensureReferralCode,
  getMyReferralVisitCount,
} from '@/lib/referral';
import { getBadgeStates, getBaasLevel, getReferralHeroProgress, REFERRAL_UNLOCK_GOAL } from '@/lib/baasStatus';
import { cn } from '@/lib/utils';

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const ICON_MAP = {
  crown: Crown,
  file: FileText,
  users: Users,
  profile: UserCircle,
  share: Share2,
  spark: Sparkles,
  trophy: Trophy,
  lock: Lock,
};

function BadgeCard({ badge }) {
  const Icon = ICON_MAP[badge.icon] || Crown;
  const isLocked = !badge.unlocked;
  const showProgress = badge.progressMax > 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        'relative flex h-full flex-col rounded-2xl border p-5 shadow-sm transition-colors',
        badge.unlocked
          ? 'border-warm-orange/30 bg-white'
          : 'border-slate-200/80 bg-slate-50/80',
        badge.comingSoon && 'border-dashed'
      )}
    >
      <div className="flex items-start gap-3">
        <div
          className={cn(
            'flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl',
            badge.unlocked ? 'bg-warm-orange/15 text-warm-orange' : 'bg-slate-200/70 text-slate-400'
          )}
        >
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3
              className={cn(
                'font-heading text-base font-bold',
                badge.unlocked ? 'text-deep-blue' : 'text-slate-500'
              )}
            >
              {badge.title}
            </h3>
            {badge.unlocked ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-700">
                <Check className="h-3 w-3" />
                Open
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
                <Lock className="h-3 w-3" />
                {badge.comingSoon ? 'Soon' : 'Locked'}
              </span>
            )}
          </div>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{badge.description}</p>
          {showProgress && (
            <div className="mt-3">
              <div className="mb-1 flex justify-between text-[11px] font-medium text-slate-500">
                <span>Voortgang</span>
                <span>
                  {badge.progress}/{badge.progressMax}
                </span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-slate-200">
                <div
                  className={cn(
                    'h-full rounded-full transition-all',
                    badge.unlocked ? 'bg-warm-orange' : 'bg-deep-blue/60'
                  )}
                  style={{ width: `${(badge.progress / badge.progressMax) * 100}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      {isLocked && !badge.comingSoon && badge.id === 'first-invoice' && (
        <Button asChild variant="outline" size="sm" className="mt-4 w-full rounded-xl">
          <Link href="/create-invoice">Maak je eerste factuur</Link>
        </Button>
      )}
      {isLocked && !badge.comingSoon && badge.id === 'first-client' && (
        <Button asChild variant="outline" size="sm" className="mt-4 w-full rounded-xl">
          <Link href="/klanten">Voeg een klant toe</Link>
        </Button>
      )}
      {isLocked && !badge.comingSoon && badge.id === 'profile' && (
        <Button asChild variant="outline" size="sm" className="mt-4 w-full rounded-xl">
          <Link href="/profile">Vul je profiel aan</Link>
        </Button>
      )}
    </motion.div>
  );
}

export default function BaasStatusPage() {
  const { toast } = useToast();
  const { user } = useAuth();
  const { authLoading, isLoadingInvoices, userInvoices } = useUserInvoices();
  const [referralCode, setReferralCode] = useState('');
  const [referralCount, setReferralCount] = useState(0);
  const [linkVisitCount, setLinkVisitCount] = useState(0);
  const [hasClient, setHasClient] = useState(false);
  const [profileComplete, setProfileComplete] = useState(false);
  const [loadingMeta, setLoadingMeta] = useState(true);
  const [copied, setCopied] = useState(false);

  const loadMeta = useCallback(async () => {
    if (!user?.id) {
      setLoadingMeta(false);
      return;
    }

    setLoadingMeta(true);
    try {
      const [code, count, visits, clientsRes, profileRes] = await Promise.all([
        ensureReferralCode(supabase),
        countMyReferrals(supabase),
        getMyReferralVisitCount(supabase).catch(() => 0),
        supabase.from('clients').select('id', { count: 'exact', head: true }).eq('user_id', user.id),
        supabase
          .from('profiles')
          .select('company_name, company_address, company_kvk, company_street, company_city')
          .eq('id', user.id)
          .maybeSingle(),
      ]);

      setReferralCode(code || '');
      setReferralCount(count);
      setLinkVisitCount(visits);

      if (!clientsRes.error) {
        setHasClient((clientsRes.count || 0) > 0);
      }

      const profile = profileRes.data;
      const complete = Boolean(
        profile?.company_name &&
          (profile?.company_address || (profile?.company_street && profile?.company_city)) &&
          profile?.company_kvk
      );
      setProfileComplete(complete);
    } catch (err) {
      console.warn('Baas status load failed:', err?.message || err);
      toast({
        title: 'Kon Baas-status niet laden',
        description:
          'Misschien moet de referral-migratie nog op Supabase worden uitgevoerd.',
        variant: 'destructive',
      });
    } finally {
      setLoadingMeta(false);
    }
  }, [user?.id, toast]);

  useEffect(() => {
    loadMeta();
  }, [loadMeta]);

  const stats = useMemo(
    () => ({
      hasAccount: Boolean(user),
      invoiceCount: userInvoices.length,
      referralCount,
      hasClient,
      profileComplete,
    }),
    [user, userInvoices.length, referralCount, hasClient, profileComplete]
  );

  const level = useMemo(() => getBaasLevel(stats), [stats]);
  const badges = useMemo(() => getBadgeStates(stats), [stats]);
  const referralHero = useMemo(() => getReferralHeroProgress(referralCount), [referralCount]);
  const referralUrl = useMemo(() => buildReferralUrl(referralCode), [referralCode]);
  const shareText = useMemo(() => buildReferralShareText(referralCode), [referralCode]);
  const whatsappUrl = useMemo(() => buildWhatsAppShareUrl(referralCode), [referralCode]);
  const emailUrl = useMemo(() => buildEmailShareUrl(referralCode), [referralCode]);
  const linkedInUrl = useMemo(() => buildLinkedInShareUrl(referralCode), [referralCode]);

  const unlockedCount = badges.filter((b) => b.unlocked && !b.comingSoon).length;
  const earnableCount = badges.filter((b) => !b.comingSoon).length;
  const referralProgressPct = referralHero.percent;

  const handleCopy = useCallback(async () => {
    if (!referralUrl) return;
    try {
      await navigator.clipboard.writeText(referralUrl);
      setCopied(true);
      toast({
        title: 'Jouw Baas-link gekopieerd',
        description: 'Deel hem met een collega-ondernemer. Nieuwe accounts tellen mee voor jouw status.',
      });
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({
        title: 'Kopiëren mislukt',
        description: referralUrl,
        variant: 'destructive',
      });
    }
  }, [referralUrl, toast]);

  const handleCopyMessage = useCallback(async () => {
    if (!shareText) return;
    try {
      await navigator.clipboard.writeText(shareText);
      toast({
        title: 'Bericht gekopieerd',
        description: 'Plak het in WhatsApp, e-mail of een ander kanaal.',
      });
    } catch {
      toast({
        title: 'Kopiëren mislukt',
        description: shareText,
        variant: 'destructive',
      });
    }
  }, [shareText, toast]);

  if (authLoading || (isLoadingInvoices && !userInvoices.length && user) || loadingMeta) {
    return (
      <div className="flex min-h-[calc(100vh-5rem)] items-center justify-center bg-[#f7f8fb]">
        <Loader2 className="h-8 w-8 animate-spin text-deep-blue" />
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-[#f7f8fb]">
      <div className="container mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Referral & groei
            </p>
            <h1 className="mt-1 font-heading text-3xl font-bold tracking-tight text-deep-blue sm:text-4xl">
              Baas status
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Nodig andere ondernemers uit via jouw link. Daarmee help je FactuurBaas groeien — en
              unlock je later exclusieve functies.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200/80 bg-white px-5 py-4 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
              Jouw niveau
            </p>
            <p className="mt-1 flex items-center gap-2 font-heading text-xl font-bold text-deep-blue">
              <Crown className="h-5 w-5 text-warm-orange" />
              {level.name}
            </p>
            <p className="mt-1 text-xs text-slate-500">
              {unlockedCount}/{earnableCount} badges · {referralCount}/{REFERRAL_UNLOCK_GOAL}{' '}
              referrals
            </p>
          </div>
        </div>

        <section className="mb-8 overflow-hidden rounded-2xl border border-warm-orange/25 bg-white shadow-sm">
          <div className="bg-gradient-to-br from-deep-blue via-sky-800 to-deep-blue px-5 py-6 text-white sm:px-8 sm:py-8">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-blue-200">
              Unlock
            </p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-blue-100">
              Een referral is iemand die via jouw Baas-link een gratis FactuurBaas-account aanmaakt.
              Alleen dan telt die mee voor je unlock — een linkbezoek alleen is niet genoeg.
            </p>
            {referralHero.unlocked ? (
              <div className="mt-4">
                <h2 className="font-heading text-2xl font-bold sm:text-3xl">
                  {REFERRAL_UNLOCK_GOAL} referrals
                </h2>
                <p className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-emerald-200 sm:text-base">
                  <Check className="h-4 w-4" />
                  Unlock vrijgespeeld
                </p>
              </div>
            ) : (
              <div className="mt-4">
                <h2 className="font-heading text-2xl font-bold sm:text-3xl">
                  {REFERRAL_UNLOCK_GOAL} referrals = unlock
                </h2>
                <div className="mt-6 max-w-md">
                  <div className="mb-2 flex items-end justify-between gap-3">
                    <p className="font-heading text-lg font-bold sm:text-xl">
                      {referralHero.current} van {referralHero.goal} referrals
                    </p>
                    <p className="text-xs text-blue-200">{referralProgressPct}%</p>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-white/20">
                    <div
                      className="h-full rounded-full bg-warm-orange transition-all"
                      style={{ width: `${referralProgressPct}%` }}
                    />
                  </div>
                  <p className="mt-2 text-xs text-blue-200">
                    Nog {referralHero.remaining} referral
                    {referralHero.remaining === 1 ? '' : 's'} tot de volgende unlock
                  </p>
                </div>
              </div>
            )}

            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <div className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2">
                <Users className="h-4 w-4 text-blue-200" />
                <span>
                  Referrals:{' '}
                  <strong>
                    {referralCount} / {REFERRAL_UNLOCK_GOAL}
                  </strong>
                </span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2">
                <Share2 className="h-4 w-4 text-blue-200" />
                <span>
                  Linkbezoeken: <strong>{linkVisitCount}</strong>
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="mb-8">
          <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
            <h2 className="font-heading text-lg font-bold text-deep-blue">Jouw unieke Baas-link</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Je link is <strong>{linkVisitCount}</strong> keer bezocht.
              <br />
              Deel je Baas-link om nieuwe gebruikers uit te nodigen.
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <div className="flex min-w-0 flex-1 items-center rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 font-mono text-xs text-slate-700 sm:text-sm">
                <span className="truncate">{referralUrl || '…'}</span>
              </div>
              <Button
                type="button"
                onClick={handleCopy}
                disabled={!referralCode}
                className="rounded-xl bg-deep-blue px-5 font-semibold hover:bg-deep-blue/90"
              >
                {copied ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Gekopieerd
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-4 w-4" />
                    Kopieer link
                  </>
                )}
              </Button>
            </div>

            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Deel via
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                <Button
                  asChild
                  variant="outline"
                  disabled={!referralCode}
                  className="h-auto flex-col gap-1.5 rounded-xl border-emerald-200 bg-emerald-50 py-3 text-emerald-800 hover:bg-emerald-100 hover:text-emerald-900"
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="h-5 w-5" />
                    <span className="text-xs font-semibold">WhatsApp</span>
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  disabled={!referralCode}
                  className="h-auto flex-col gap-1.5 rounded-xl py-3"
                >
                  <a href={emailUrl}>
                    <Mail className="h-5 w-5 text-slate-600" />
                    <span className="text-xs font-semibold">E-mail</span>
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  disabled={!referralCode}
                  className="h-auto flex-col gap-1.5 rounded-xl border-sky-200 bg-sky-50 py-3 text-sky-800 hover:bg-sky-100 hover:text-sky-900"
                >
                  <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                    <span className="text-xs font-semibold">LinkedIn</span>
                  </a>
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  disabled={!referralCode}
                  onClick={handleCopyMessage}
                  className="h-auto flex-col gap-1.5 rounded-xl py-3"
                >
                  <Share2 className="h-5 w-5 text-slate-600" />
                  <span className="text-xs font-semibold">Kopieer tekst</span>
                </Button>
              </div>
              <p className="mt-3 rounded-xl bg-slate-50 px-3 py-2.5 text-xs leading-relaxed text-slate-600">
                WhatsApp-voorbeeld:{' '}
                <span className="italic text-slate-700">
                  “Ik gebruik FactuurBaas om gratis facturen te maken. Misschien heb je er ook wat
                  aan: {referralUrl || '[jouw link]'}”
                </span>
              </p>
            </div>

            {referralCode && (
              <p className="mt-3 text-xs text-slate-500">
                Jouw code: <span className="font-semibold text-slate-700">{referralCode}</span>
              </p>
            )}
          </div>
        </div>

        <section className="mb-10">
          <div className="mb-4 flex items-end justify-between gap-3">
            <div>
              <h2 className="font-heading text-xl font-bold text-deep-blue sm:text-2xl">
                Extra badges
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Optionele mijlpalen naast je referrals. Handig, maar niet het hoofddoel.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {badges.map((badge) => (
              <BadgeCard key={badge.id} badge={badge} />
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-dashed border-slate-300 bg-white/70 p-6 text-center sm:p-8">
          <Lock className="mx-auto h-8 w-8 text-slate-400" />
          <h2 className="mt-3 font-heading text-lg font-bold text-deep-blue">
            Unlocks voor groei-baasjes
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-slate-600">
            Straks kunnen gebruikers die FactuurBaas helpen groeien extra functies unlocken. Deel
            nu al je link — je referrals worden bijgehouden.
          </p>
        </section>
      </div>
    </div>
  );
}
