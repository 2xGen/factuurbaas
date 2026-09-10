import { REFERRAL_UNLOCK_GOAL } from '@/lib/baasStatus';

/** Available without an account. */
export const GUEST_LAYOUT_IDS = ['plain', 'modern'];

/** All free styles once logged in (includes guest styles). */
export const FREE_LAYOUT_IDS = [
  'plain',
  'modern',
  'classic',
  'creative',
  'minimalist',
  'corporate',
];

export const PREMIUM_LAYOUT_IDS = ['ocean', 'noir', 'forest'];

export const LAYOUT_OPTIONS = [
  {
    id: 'plain',
    name: 'Standaard',
    previewStyle: {
      bg: 'bg-gray-100',
      text: 'text-gray-700',
      border: 'border-gray-300',
      accent: 'bg-blue-500',
    },
  },
  {
    id: 'modern',
    name: 'Modern Donker',
    previewStyle: {
      bg: 'bg-slate-800',
      text: 'text-gray-100',
      border: 'border-slate-600',
      accent: 'bg-sky-400',
    },
  },
  {
    id: 'classic',
    name: 'Klassiek Licht',
    requiresAccount: true,
    previewStyle: {
      bg: 'bg-stone-200',
      text: 'text-gray-900',
      border: 'border-stone-400',
      accent: 'bg-stone-700',
    },
  },
  {
    id: 'creative',
    name: 'Creatieve Kleuren',
    requiresAccount: true,
    previewStyle: {
      bg: 'bg-gradient-to-tr from-purple-500 via-pink-500 to-red-500',
      text: 'text-white',
      border: 'border-white/50',
      accent: 'bg-yellow-300',
    },
  },
  {
    id: 'minimalist',
    name: 'Minimalistisch',
    requiresAccount: true,
    previewStyle: {
      bg: 'bg-white',
      text: 'text-gray-700',
      border: 'border-gray-200',
      accent: 'bg-black',
    },
  },
  {
    id: 'corporate',
    name: 'Zakelijk Blauw',
    requiresAccount: true,
    previewStyle: {
      bg: 'bg-blue-100',
      text: 'text-blue-800',
      border: 'border-blue-300',
      accent: 'bg-blue-700',
    },
  },
  {
    id: 'ocean',
    name: 'Studio Midnight',
    premium: true,
    unlockReferrals: REFERRAL_UNLOCK_GOAL,
    previewStyle: {
      bg: 'bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950',
      text: 'text-slate-50',
      border: 'border-sky-400/50',
      accent: 'bg-sky-400',
    },
  },
  {
    id: 'noir',
    name: 'Luxe Goud',
    premium: true,
    unlockReferrals: REFERRAL_UNLOCK_GOAL,
    previewStyle: {
      bg: 'bg-gradient-to-br from-black via-neutral-950 to-neutral-900',
      text: 'text-amber-50',
      border: 'border-amber-400',
      accent: 'bg-amber-400',
    },
  },
  {
    id: 'forest',
    name: 'Champagne',
    premium: true,
    unlockReferrals: REFERRAL_UNLOCK_GOAL,
    previewStyle: {
      bg: 'bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50',
      text: 'text-stone-800',
      border: 'border-amber-600/40',
      accent: 'bg-amber-700',
    },
  },
];

export const INVOICE_LAYOUT_STYLES = {
  plain: {
    bg: 'bg-white',
    text: 'text-gray-800',
    primary: 'text-blue-600',
    secondary: 'text-gray-600',
    headerBg: 'bg-gray-100',
    tableHeaderBg: 'bg-gray-50',
    borderColor: 'border-gray-200',
    fontFamily: 'font-sans',
    padding: 'p-6 md:p-8',
  },
  modern: {
    bg: 'bg-gradient-to-br from-slate-900 to-slate-800',
    text: 'text-gray-100',
    primary: 'text-sky-400',
    secondary: 'text-gray-300',
    headerBg: 'bg-slate-700/50',
    tableHeaderBg: 'bg-slate-700',
    borderColor: 'border-slate-600',
    fontFamily: 'font-mono',
    padding: 'p-6 md:p-8',
  },
  classic: {
    bg: 'bg-gradient-to-br from-stone-100 to-stone-200',
    text: 'text-gray-900',
    primary: 'text-stone-700',
    secondary: 'text-gray-700',
    headerBg: 'bg-stone-200/50',
    tableHeaderBg: 'bg-stone-100',
    borderColor: 'border-stone-400',
    fontFamily: 'font-serif',
    padding: 'p-6 md:p-8',
  },
  creative: {
    bg: 'bg-gradient-to-tr from-purple-500 via-pink-500 to-red-500',
    text: 'text-white',
    primary: 'text-yellow-300',
    secondary: 'text-pink-100',
    headerBg: 'bg-white/10',
    tableHeaderBg: 'bg-white/20',
    borderColor: 'border-white/30',
    fontFamily: "font-['Comic_Sans_MS',_cursive]",
    padding: 'p-6 md:p-8',
  },
  minimalist: {
    bg: 'bg-white',
    text: 'text-gray-700',
    primary: 'text-black',
    secondary: 'text-gray-500',
    headerBg: 'bg-white',
    tableHeaderBg: 'bg-white',
    borderColor: 'border-gray-100',
    fontFamily: "font-['Helvetica_Neue',_Helvetica,_Arial,_sans-serif]",
    padding: 'p-6 md:p-8',
  },
  corporate: {
    bg: 'bg-blue-50',
    text: 'text-gray-800',
    primary: 'text-blue-800',
    secondary: 'text-gray-600',
    headerBg: 'bg-blue-100',
    tableHeaderBg: 'bg-blue-200',
    borderColor: 'border-blue-300',
    fontFamily: "font-['Arial',_sans-serif]",
    padding: 'p-6 md:p-8',
  },
  ocean: {
    bg: 'bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950',
    text: 'text-slate-50',
    primary: 'text-sky-300',
    secondary: 'text-slate-300',
    headerBg: 'bg-white/5',
    tableHeaderBg: 'bg-sky-500/10',
    borderColor: 'border-sky-400/30',
    fontFamily: 'font-sans',
    padding: 'p-6 md:p-8',
  },
  noir: {
    bg: 'bg-gradient-to-br from-black via-neutral-950 to-neutral-900',
    text: 'text-amber-50',
    primary: 'text-amber-400',
    secondary: 'text-neutral-300',
    headerBg: 'bg-amber-500/10',
    tableHeaderBg: 'bg-amber-500/15',
    borderColor: 'border-amber-400/40',
    fontFamily: 'font-serif',
    padding: 'p-6 md:p-8',
  },
  forest: {
    bg: 'bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50',
    text: 'text-stone-800',
    primary: 'text-amber-800',
    secondary: 'text-stone-600',
    headerBg: 'bg-amber-100/60',
    tableHeaderBg: 'bg-amber-100/80',
    borderColor: 'border-amber-700/25',
    fontFamily: "font-['Georgia',_serif]",
    padding: 'p-6 md:p-8',
  },
};

export const QUOTE_LAYOUT_STYLES = {
  plain: {
    bg: 'bg-white',
    text: 'text-gray-800',
    primary: 'text-blue-800',
    secondary: 'text-gray-600',
    muted: 'text-gray-500',
    headerBg: 'bg-gray-50',
    tableHeaderBg: 'bg-gray-50',
    borderColor: 'border-gray-200',
    termsBg: 'bg-gray-50',
  },
  modern: {
    bg: 'bg-gradient-to-br from-slate-900 to-slate-800',
    text: 'text-gray-100',
    primary: 'text-sky-400',
    secondary: 'text-gray-300',
    muted: 'text-gray-400',
    headerBg: 'bg-slate-700/50',
    tableHeaderBg: 'bg-slate-700',
    borderColor: 'border-slate-600',
    termsBg: 'bg-slate-700/50',
  },
  classic: {
    bg: 'bg-gradient-to-br from-stone-100 to-stone-200',
    text: 'text-gray-900',
    primary: 'text-stone-800',
    secondary: 'text-gray-700',
    muted: 'text-gray-600',
    headerBg: 'bg-stone-200/50',
    tableHeaderBg: 'bg-stone-100',
    borderColor: 'border-stone-400',
    termsBg: 'bg-stone-100',
  },
  creative: {
    bg: 'bg-gradient-to-tr from-purple-500 via-pink-500 to-red-500',
    text: 'text-white',
    primary: 'text-yellow-300',
    secondary: 'text-pink-100',
    muted: 'text-pink-100',
    headerBg: 'bg-white/10',
    tableHeaderBg: 'bg-white/20',
    borderColor: 'border-white/30',
    termsBg: 'bg-white/10',
  },
  minimalist: {
    bg: 'bg-white',
    text: 'text-gray-700',
    primary: 'text-black',
    secondary: 'text-gray-500',
    muted: 'text-gray-500',
    headerBg: 'bg-white',
    tableHeaderBg: 'bg-white',
    borderColor: 'border-gray-100',
    termsBg: 'bg-white',
  },
  corporate: {
    bg: 'bg-blue-50',
    text: 'text-gray-800',
    primary: 'text-blue-800',
    secondary: 'text-gray-600',
    muted: 'text-gray-600',
    headerBg: 'bg-blue-100',
    tableHeaderBg: 'bg-blue-200',
    borderColor: 'border-blue-300',
    termsBg: 'bg-blue-100',
  },
  ocean: {
    bg: 'bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950',
    text: 'text-slate-50',
    primary: 'text-sky-300',
    secondary: 'text-slate-300',
    muted: 'text-slate-400',
    headerBg: 'bg-white/5',
    tableHeaderBg: 'bg-sky-500/10',
    borderColor: 'border-sky-400/30',
    termsBg: 'bg-white/5',
  },
  noir: {
    bg: 'bg-gradient-to-br from-black via-neutral-950 to-neutral-900',
    text: 'text-amber-50',
    primary: 'text-amber-400',
    secondary: 'text-neutral-300',
    muted: 'text-neutral-400',
    headerBg: 'bg-amber-500/10',
    tableHeaderBg: 'bg-amber-500/15',
    borderColor: 'border-amber-400/40',
    termsBg: 'bg-amber-500/5',
  },
  forest: {
    bg: 'bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50',
    text: 'text-stone-800',
    primary: 'text-amber-800',
    secondary: 'text-stone-600',
    muted: 'text-stone-500',
    headerBg: 'bg-amber-100/60',
    tableHeaderBg: 'bg-amber-100/80',
    borderColor: 'border-amber-700/25',
    termsBg: 'bg-amber-50/80',
  },
};

export function isGuestLayout(layoutId) {
  return GUEST_LAYOUT_IDS.includes(layoutId);
}

export function isPremiumLayout(layoutId) {
  return PREMIUM_LAYOUT_IDS.includes(layoutId);
}

export function isAccountLayout(layoutId) {
  return FREE_LAYOUT_IDS.includes(layoutId) && !isGuestLayout(layoutId);
}

export function hasPremiumLayoutsUnlocked(referralCount) {
  return (Number(referralCount) || 0) >= REFERRAL_UNLOCK_GOAL;
}

/**
 * @returns {'unlocked' | 'account' | 'referrals'}
 */
export function getLayoutLockReason(layoutId, { isLoggedIn = false, referralCount = 0 } = {}) {
  const id = layoutId || 'plain';
  if (isGuestLayout(id)) return 'unlocked';
  if (isAccountLayout(id)) return isLoggedIn ? 'unlocked' : 'account';
  if (isPremiumLayout(id)) {
    if (!isLoggedIn) return 'account';
    return hasPremiumLayoutsUnlocked(referralCount) ? 'unlocked' : 'referrals';
  }
  return 'unlocked';
}

/** Fall back to plain when layout is locked for this visitor. */
export function resolveUsableLayoutId(layoutId, referralCount, isLoggedIn = false) {
  const id = layoutId || 'plain';
  if (getLayoutLockReason(id, { isLoggedIn, referralCount }) === 'unlocked') return id;
  return 'plain';
}
