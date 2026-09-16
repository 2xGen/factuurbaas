import { useEffect, useRef } from 'react';
import { logToolUsage } from '@/lib/toolUsageLog';

/**
 * Log a calculation after the user pauses typing.
 * @param {string} table
 * @param {string|null} fingerprint
 * @param {number} [delayMs=1500]
 * @param {{ oncePerVisit?: boolean }} [options] - if true, only log once per page visit
 */
export function useDebouncedCalculationLog(table, fingerprint, delayMs = 1500, options = {}) {
  const { oncePerVisit = false } = options;
  const lastLogged = useRef(null);
  const hasLoggedVisit = useRef(false);

  useEffect(() => {
    if (!fingerprint) return;
    if (oncePerVisit && hasLoggedVisit.current) return;
    if (lastLogged.current === fingerprint) return;

    const timer = setTimeout(() => {
      lastLogged.current = fingerprint;
      hasLoggedVisit.current = true;
      logToolUsage(table);
    }, delayMs);

    return () => clearTimeout(timer);
  }, [table, fingerprint, delayMs, oncePerVisit]);
}
