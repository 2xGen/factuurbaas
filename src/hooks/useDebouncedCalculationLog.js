import { useEffect, useRef } from 'react';
import { logToolUsage } from '@/lib/toolUsageLog';

/** Log a calculation once per unique input set, after the user pauses typing. */
export function useDebouncedCalculationLog(table, fingerprint, delayMs = 1500) {
  const lastLogged = useRef(null);

  useEffect(() => {
    if (!fingerprint) return;
    if (lastLogged.current === fingerprint) return;

    const timer = setTimeout(() => {
      lastLogged.current = fingerprint;
      logToolUsage(table);
    }, delayMs);

    return () => clearTimeout(timer);
  }, [table, fingerprint, delayMs]);
}
