'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

const STORAGE_KEY = 'factuurbaas_cookie_consent';
const CONSENT_VERSION = 1;

const defaultConsent = {
  necessary: true,
  analytics: false,
  marketing: false,
  timestamp: null,
  version: CONSENT_VERSION,
};

function readStoredConsent() {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed?.version !== CONSENT_VERSION) return null;
    return {
      necessary: true,
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
      timestamp: parsed.timestamp ?? null,
      version: CONSENT_VERSION,
    };
  } catch {
    return null;
  }
}

function persistConsent(consent) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      ...consent,
      timestamp: consent.timestamp ?? new Date().toISOString(),
      version: CONSENT_VERSION,
    }));
  } catch {}
}

const CookieConsentContext = createContext(null);

export function CookieConsentProvider({ children }) {
  const [consent, setConsentState] = useState(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    const stored = readStoredConsent();
    setConsentState(stored);
    setShowBanner(stored === null);
  }, []);

  const setConsent = useCallback((next) => {
    const value = {
      ...defaultConsent,
      ...next,
      necessary: true,
      timestamp: new Date().toISOString(),
      version: CONSENT_VERSION,
    };
    setConsentState(value);
    persistConsent(value);
    setShowBanner(false);
    setShowPreferences(false);
  }, []);

  const openCookiePreferences = useCallback(() => {
    setShowPreferences(true);
    setShowBanner(true);
  }, []);

  const acceptAll = useCallback(() => {
    setConsent({ analytics: true, marketing: true });
  }, [setConsent]);

  const rejectNonEssential = useCallback(() => {
    setConsent({ analytics: false, marketing: false });
  }, [setConsent]);

  const value = {
    consent,
    showBanner,
    showPreferences,
    setShowPreferences,
    setConsent,
    openCookiePreferences,
    acceptAll,
    rejectNonEssential,
  };

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) throw new Error('useCookieConsent must be used within CookieConsentProvider');
  return ctx;
}
