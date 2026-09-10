'use client';

import { useEffect } from 'react';
import { supabase } from '@/lib/customSupabaseClient';
import { recordReferralVisitOnce, storeReferralCode } from '@/lib/referral';

/** Captures ?ref= into localStorage and records a (session-deduped) link visit. */
export default function ReferralCapture() {
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const ref = params.get('ref');
      if (!ref) return;
      storeReferralCode(ref);
      void recordReferralVisitOnce(supabase, ref);
    } catch {
      // ignore
    }
  }, []);

  return null;
}
