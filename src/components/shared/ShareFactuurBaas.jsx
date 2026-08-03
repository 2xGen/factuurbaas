'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { Check, Link2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';

const SHARE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://factuurbaas.nl';
const BANNER_DISMISS_KEY = 'fb_share_banner_dismissed';

/**
 * Quiet referral nudge — copy link only.
 * Variants: default (dialog), compact, banner (top strip).
 */
export default function ShareFactuurBaas({
  className,
  compact = false,
  variant = 'default',
  onVisibilityChange,
}) {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (variant !== 'banner') return;
    try {
      if (sessionStorage.getItem(BANNER_DISMISS_KEY) === '1') setDismissed(true);
    } catch {
      // ignore
    }
  }, [variant]);

  useEffect(() => {
    if (variant !== 'banner') return;
    onVisibilityChange?.(!dismissed);
  }, [variant, dismissed, onVisibilityChange]);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(SHARE_URL);
      setCopied(true);
      toast({
        title: 'Link gekopieerd',
        description: 'Plak hem in een app of e-mail naar een collega-ondernemer.',
      });
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({
        title: 'Kopiëren mislukt',
        description: SHARE_URL,
        variant: 'destructive',
      });
    }
  }, [toast]);

  const handleDismiss = useCallback(() => {
    setDismissed(true);
    try {
      sessionStorage.setItem(BANNER_DISMISS_KEY, '1');
    } catch {
      // ignore
    }
  }, []);

  if (variant === 'banner') {
    if (dismissed) return null;

    return (
      <div
        className={cn(
          'border-b border-slate-200/80 bg-slate-50/95 text-slate-700',
          className
        )}
      >
        <div className="container mx-auto flex items-center justify-center gap-2 px-3 py-2 sm:gap-3 sm:px-6">
          <p className="min-w-0 text-center text-xs leading-snug sm:text-left sm:text-sm">
            <span className="block sm:inline">FactuurBaas is gratis dankzij ondernemers zoals jij.</span>{' '}
            <span className="block text-slate-600 sm:inline">
              Ken je een zzp&apos;er? Deel het met hem of haar.
            </span>
          </p>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleCopy}
            className="h-7 shrink-0 border-slate-200 bg-white px-2.5 text-xs text-slate-700 hover:bg-white sm:h-8 sm:px-3"
          >
            {copied ? (
              <>
                <Check className="mr-1 h-3.5 w-3.5 text-green-600" />
                Gekopieerd
              </>
            ) : (
              <>
                <Link2 className="mr-1 h-3.5 w-3.5" />
                Link kopiëren
              </>
            )}
          </Button>
          <button
            type="button"
            onClick={handleDismiss}
            className="shrink-0 rounded p-1 text-slate-400 transition-colors hover:bg-slate-200/60 hover:text-slate-600"
            aria-label="Banner sluiten"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        compact
          ? 'flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between'
          : 'space-y-2.5 border-t border-slate-100 pt-4',
        className
      )}
    >
      <p className={cn('leading-relaxed text-slate-600', compact ? 'text-xs' : 'text-sm')}>
        FactuurBaas is gratis dankzij ondernemers zoals jij. Ken je een zzp&apos;er? Deel het met hem
        of haar.
      </p>
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={handleCopy}
        className={cn(
          'h-9 shrink-0 border-slate-200 bg-white text-slate-700 hover:bg-slate-50',
          compact && 'w-full sm:w-auto'
        )}
      >
        {copied ? (
          <>
            <Check className="mr-1.5 h-3.5 w-3.5 text-green-600" />
            Gekopieerd
          </>
        ) : (
          <>
            <Link2 className="mr-1.5 h-3.5 w-3.5" />
            Link kopiëren
          </>
        )}
      </Button>
    </div>
  );
}
