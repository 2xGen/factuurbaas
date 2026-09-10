'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Copy, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { useToast } from '@/components/ui/use-toast';
import { useReferralCount } from '@/hooks/useReferralCount';
import { REFERRAL_UNLOCK_GOAL } from '@/lib/baasStatus';
import { supabase } from '@/lib/customSupabaseClient';
import { buildReferralUrl, ensureReferralCode } from '@/lib/referral';
import {
  LAYOUT_OPTIONS,
  getLayoutLockReason,
  hasPremiumLayoutsUnlocked,
  isPremiumLayout,
} from '@/lib/invoiceLayouts';

const LayoutSelector = ({ currentLayout, onSelectLayout, styleLabel = 'Kies Factuur Stijl:' }) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const { referralCount, loading: loadingUnlock } = useReferralCount();
  const isLoggedIn = Boolean(user);
  const premiumUnlocked = isLoggedIn && hasPremiumLayoutsUnlocked(referralCount);
  const [showReferralHint, setShowReferralHint] = useState(false);
  const [referralCode, setReferralCode] = useState('');
  const [copying, setCopying] = useState(false);

  useEffect(() => {
    if (!isLoggedIn || premiumUnlocked) {
      setReferralCode('');
      setShowReferralHint(false);
      return undefined;
    }

    let cancelled = false;
    (async () => {
      try {
        const code = await ensureReferralCode(supabase);
        if (!cancelled && code) setReferralCode(String(code));
      } catch {
        if (!cancelled) setReferralCode('');
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [isLoggedIn, premiumUnlocked, user?.id]);

  const referralUrl = referralCode ? buildReferralUrl(referralCode) : '';

  const handleCopyLink = async () => {
    if (!referralUrl) return;
    setCopying(true);
    try {
      await navigator.clipboard.writeText(referralUrl);
      toast({ title: 'Baas-link gekopieerd', description: referralUrl });
    } catch {
      toast({
        title: 'Kopiëren mislukt',
        description: referralUrl,
        variant: 'destructive',
      });
    } finally {
      setCopying(false);
    }
  };

  const handleSelect = (option) => {
    const lock = getLayoutLockReason(option.id, { isLoggedIn, referralCount });
    if (lock === 'account') {
      setShowReferralHint(false);
      toast({
        title: 'Account nodig',
        description: 'Maak gratis een account aan om deze stijl te gebruiken.',
      });
      return;
    }
    if (lock === 'referrals') {
      setShowReferralHint(true);
      return;
    }
    setShowReferralHint(false);
    onSelectLayout(option.id);
  };

  return (
    <div className="mb-6">
      <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
        <p className="block text-sm font-medium text-gray-700">{styleLabel}</p>
        {!isLoggedIn ? (
          <p className="text-xs text-slate-500">
            Meer stijlen beschikbaar met een{' '}
            <Link href="/login" className="font-semibold text-warm-orange hover:underline">
              gratis account
            </Link>
          </p>
        ) : !premiumUnlocked ? (
          <p className="text-xs text-slate-500">
            3 exclusieve stijlen na{' '}
            <Link href="/baas-status" className="font-semibold text-warm-orange hover:underline">
              {REFERRAL_UNLOCK_GOAL} referrals
            </Link>
          </p>
        ) : null}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {LAYOUT_OPTIONS.map((option) => {
          const lock = getLayoutLockReason(option.id, { isLoggedIn, referralCount });
          const isLocked = lock !== 'unlocked';
          const isCompact = isLocked && !isLoggedIn;
          const isSelected = currentLayout === option.id && !isLocked;

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => handleSelect(option)}
              className={cn(
                'relative rounded-lg border-2 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-warm-orange',
                isCompact ? 'p-2' : 'p-3',
                option.previewStyle.bg,
                isSelected
                  ? 'border-warm-orange shadow-lg ring-2 ring-warm-orange'
                  : option.previewStyle.border,
                isLocked ? 'cursor-pointer' : 'hover:border-warm-orange/70 hover:shadow-md'
              )}
              aria-label={
                lock === 'account'
                  ? `${option.name} — maak gratis een account aan`
                  : lock === 'referrals'
                    ? `${option.name} — gelocked tot ${REFERRAL_UNLOCK_GOAL} referrals`
                    : `Selecteer ${option.name} layout`
              }
              aria-disabled={isLocked}
            >
              <div
                className={cn(
                  'relative flex w-full flex-col justify-between overflow-hidden rounded-md p-2',
                  isCompact ? 'h-14' : 'h-20'
                )}
              >
                <div className={cn('absolute inset-0', option.previewStyle.bg)} />
                {!isCompact && (
                  <>
                    <div className="relative z-10">
                      <div className={cn('mb-1 h-2 w-1/3 rounded-sm', option.previewStyle.accent)} />
                      <div
                        className={cn(
                          'mb-0.5 h-1 w-full rounded-sm opacity-70',
                          option.previewStyle.text
                        )}
                      />
                      <div
                        className={cn('h-1 w-3/4 rounded-sm opacity-50', option.previewStyle.text)}
                      />
                    </div>
                    <div className="relative z-10 mt-auto">
                      <div
                        className={cn(
                          'mb-0.5 h-1 w-full rounded-sm opacity-60',
                          option.previewStyle.text
                        )}
                      />
                      <div
                        className={cn('h-1 w-1/2 rounded-sm opacity-40', option.previewStyle.text)}
                      />
                    </div>
                  </>
                )}

                {isLocked && (
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-0.5 rounded-md bg-black/45 px-1.5 backdrop-blur-[1px]">
                    <Lock className={cn('text-white', isCompact ? 'h-3.5 w-3.5' : 'h-5 w-5')} />
                    {/* Account CTA lives once in the header; only show referral goal when logged in */}
                    {lock === 'referrals' && (
                      <span className="text-[10px] font-bold uppercase tracking-wide text-white">
                        {loadingUnlock ? '…' : `${REFERRAL_UNLOCK_GOAL} referrals`}
                      </span>
                    )}
                  </div>
                )}
              </div>
              <p
                className={cn(
                  'mt-2 text-center font-medium',
                  isCompact ? 'text-[11px]' : 'text-xs',
                  option.previewStyle.text,
                  isSelected && 'font-semibold text-warm-orange'
                )}
              >
                {option.name}
                {isPremiumLayout(option.id) && (
                  <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-wide opacity-80">
                    {premiumUnlocked ? 'Unlocked' : 'Exclusief'}
                  </span>
                )}
              </p>
            </button>
          );
        })}
      </div>

      {showReferralHint && isLoggedIn && !premiumUnlocked && (
        <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-3 text-sm text-amber-950">
          <p>
            Deze exclusieve stijlen unlock je alleen door je{' '}
            <strong>Baas-link</strong> te delen. Nodig {REFERRAL_UNLOCK_GOAL} ondernemers uit — zodra
            ze een account aanmaken, komen de stijlen vrij.
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2">
            <Link
              href="/baas-status"
              className="font-semibold text-warm-orange underline-offset-2 hover:underline"
            >
              Ga naar Baas-status
            </Link>
            {referralUrl ? (
              <>
                <span className="text-amber-700/50">·</span>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  disabled={copying}
                  className="inline-flex items-center gap-1.5 font-semibold text-warm-orange underline-offset-2 hover:underline disabled:opacity-60"
                >
                  <Copy className="h-3.5 w-3.5" />
                  Kopieer jouw Baas-link
                </button>
              </>
            ) : null}
          </div>
          {referralUrl ? (
            <p className="mt-2 break-all text-xs text-amber-800/80">{referralUrl}</p>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default LayoutSelector;
