'use client';

import { useCallback, useEffect, useState } from 'react';
import { logPwaInstall } from '@/lib/toolUsageLog';

let deferredPromptEvent = null;
let installed = false;
let currentUserId = null;
const subscribers = new Set();

function notify() {
  subscribers.forEach((fn) => fn({ deferredPrompt: deferredPromptEvent, installed }));
}

function isStandaloneNow() {
  if (typeof window === 'undefined') return false;
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true
  );
}

export function isIosDevice() {
  if (typeof window === 'undefined') return false;
  return /iphone|ipad|ipod/i.test(window.navigator.userAgent);
}

let listenersBound = false;

function bindGlobalListeners() {
  if (typeof window === 'undefined' || listenersBound) return;
  listenersBound = true;

  if (isStandaloneNow()) {
    installed = true;
  }

  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPromptEvent = event;
    notify();
  });

  window.addEventListener('appinstalled', () => {
    deferredPromptEvent = null;
    installed = true;
    void logPwaInstall({ userId: currentUserId || undefined });
    notify();
  });
}

/**
 * Shared PWA install state for banner + footer CTA.
 * Captures beforeinstallprompt once so multiple UI entry points can trigger it.
 */
export function usePwaInstall(userId) {
  const [state, setState] = useState({
    deferredPrompt: deferredPromptEvent,
    installed: installed || isStandaloneNow(),
  });

  useEffect(() => {
    currentUserId = userId || null;
  }, [userId]);

  useEffect(() => {
    bindGlobalListeners();
    const sync = (next) => setState({ ...next });
    subscribers.add(sync);
    setState({
      deferredPrompt: deferredPromptEvent,
      installed: installed || isStandaloneNow(),
    });
    return () => subscribers.delete(sync);
  }, []);

  const promptInstall = useCallback(async () => {
    const event = deferredPromptEvent;
    if (!event) return { ok: false, reason: 'unavailable' };

    event.prompt();
    try {
      await event.userChoice;
    } catch {
      /* ignore */
    }
    deferredPromptEvent = null;
    notify();
    return { ok: true };
  }, []);

  return {
    canPrompt: Boolean(state.deferredPrompt) && !state.installed,
    isInstalled: state.installed,
    isIos: isIosDevice(),
    promptInstall,
  };
}
