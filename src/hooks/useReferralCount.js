'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { supabase } from '@/lib/customSupabaseClient';
import { countMyReferrals } from '@/lib/referral';

export function useReferralCount() {
  const { user } = useAuth();
  const [referralCount, setReferralCount] = useState(0);
  const [loading, setLoading] = useState(Boolean(user));

  useEffect(() => {
    let cancelled = false;
    if (!user?.id) {
      setReferralCount(0);
      setLoading(false);
      return undefined;
    }

    setLoading(true);
    (async () => {
      try {
        const count = await countMyReferrals(supabase);
        if (!cancelled) setReferralCount(count);
      } catch {
        if (!cancelled) setReferralCount(0);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [user?.id]);

  return { referralCount, loading, isLoggedIn: Boolean(user) };
}
