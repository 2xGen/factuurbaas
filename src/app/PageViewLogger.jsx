'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';

export function PageViewLogger() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname?.startsWith('/M@tthijs1997') || pathname?.startsWith('/admin-dashboard') || pathname?.startsWith('/admin-login')) {
      return;
    }
    const logPageView = async () => {
      try {
        await supabase.from('page_views').insert({
          page_path: pathname + (typeof window !== 'undefined' ? window.location.search : ''),
          user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
        });
      } catch (e) {
        console.warn('Page view log:', e?.message);
      }
    };
    logPageView();
  }, [pathname]);

  return null;
}
