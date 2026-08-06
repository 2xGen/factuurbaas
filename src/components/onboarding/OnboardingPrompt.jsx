'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import OnboardingFields from '@/components/onboarding/OnboardingFields';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { supabase } from '@/lib/customSupabaseClient';
import {
  emptyOnboardingForm,
  onboardingFormToDbFields,
} from '@/lib/onboardingProfile';

const SKIP_PATHS = ['/login', '/auth/callback', '/admin-dashboard', '/admin-login'];

/**
 * Skippable soft onboarding after login when onboarding_completed_at is empty.
 */
export default function OnboardingPrompt() {
  const { user, loading: authLoading } = useAuth();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [checking, setChecking] = useState(false);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState(emptyOnboardingForm());

  const shouldSkipPath = SKIP_PATHS.some(
    (p) => pathname === p || pathname?.startsWith(`${p}/`)
  );

  const checkProfile = useCallback(async () => {
    if (!user?.id || shouldSkipPath) {
      setOpen(false);
      return;
    }

    setChecking(true);
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('onboarding_completed_at')
        .eq('id', user.id)
        .maybeSingle();

      if (error) throw error;

      if (!data?.onboarding_completed_at) {
        setForm(emptyOnboardingForm());
        setOpen(true);
      } else {
        setOpen(false);
      }
    } catch {
      setOpen(false);
    } finally {
      setChecking(false);
    }
  }, [user?.id, shouldSkipPath]);

  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      setOpen(false);
      return;
    }
    checkProfile();
  }, [user, authLoading, checkProfile]);

  const persist = async ({ skip }) => {
    if (!user?.id) return;
    setSaving(true);
    try {
      const now = new Date().toISOString();
      const payload = {
        id: user.id,
        onboarding_completed_at: now,
        updated_at: now,
        ...(skip ? {} : onboardingFormToDbFields(form)),
      };

      const { error } = await supabase.from('profiles').upsert(payload, { onConflict: 'id' });
      if (error) throw error;
      setOpen(false);
    } catch {
      // Still close on skip failure? Keep open so they can retry — but skip should close
      if (skip) setOpen(false);
    } finally {
      setSaving(false);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    persist({ skip: false });
  };

  if (authLoading || checking || !user || shouldSkipPath) return null;

  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent
        className="max-h-[90vh] overflow-y-auto sm:max-w-md"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle className="font-heading text-deep-blue">
            Kort even kennismaken
          </DialogTitle>
          <DialogDescription>
            Optioneel — helpt ons FactuurBaas beter te maken voor jouw type onderneming. Je kunt dit
            later aanpassen in je profiel.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSave} className="space-y-5 py-1">
          <OnboardingFields form={form} onChange={setForm} disabled={saving} />

          <DialogFooter className="flex-col gap-2 sm:flex-row sm:justify-between">
            <Button
              type="button"
              variant="ghost"
              className="text-slate-500"
              disabled={saving}
              onClick={() => persist({ skip: true })}
            >
              Overslaan
            </Button>
            <Button
              type="submit"
              disabled={saving}
              className="bg-deep-blue hover:bg-deep-blue/90"
            >
              {saving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Opslaan
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
