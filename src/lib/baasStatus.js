export const REFERRAL_UNLOCK_GOAL = 3;
export const REFERRAL_SUPER_GOAL = 10;

/** Primary unlock progress: always /3 referrals. Visits are secondary elsewhere. */
export function getReferralHeroProgress(referralCount) {
  const count = Number(referralCount) || 0;
  const unlocked = count >= REFERRAL_UNLOCK_GOAL;
  const current = Math.min(count, REFERRAL_UNLOCK_GOAL);
  const remaining = Math.max(0, REFERRAL_UNLOCK_GOAL - count);

  if (unlocked) {
    return {
      current: REFERRAL_UNLOCK_GOAL,
      goal: REFERRAL_UNLOCK_GOAL,
      remaining: 0,
      unlocked: true,
      title: `${REFERRAL_UNLOCK_GOAL} referrals`,
      description: 'Unlock vrijgespeeld',
      percent: 100,
    };
  }

  return {
    current,
    goal: REFERRAL_UNLOCK_GOAL,
    remaining,
    unlocked: false,
    title: `${REFERRAL_UNLOCK_GOAL} referrals = unlock`,
    description: null,
    percent: Math.round((current / REFERRAL_UNLOCK_GOAL) * 100),
  };
}

export const BAAS_LEVELS = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Welkom bij FactuurBaas. Maak je eerste factuur om te groeien.',
    minInvoices: 0,
    minReferrals: 0,
    requiresAccount: true,
  },
  {
    id: 'factuur-baas',
    name: 'Factuur-baas',
    description: 'Je hebt je eerste factuur gemaakt. Je bent officieel aan de slag.',
    minInvoices: 1,
    minReferrals: 0,
    requiresAccount: true,
  },
  {
    id: 'doorverwijzer',
    name: 'Doorverwijzer',
    description: 'Iemand heeft een account aangemaakt via jouw link. Dankjewel!',
    minInvoices: 1,
    minReferrals: 1,
    requiresAccount: true,
  },
  {
    id: 'groei-baas',
    name: 'Groei-baas',
    description: 'Drie ondernemers kwamen via jou binnen. Jij helpt FactuurBaas groeien.',
    minInvoices: 1,
    minReferrals: 3,
    requiresAccount: true,
  },
  {
    id: 'superbaas',
    name: 'Superbaas',
    description: 'Tien referrals. Later unlocken we hier speciale functies voor topspreiders.',
    minInvoices: 1,
    minReferrals: 10,
    requiresAccount: true,
  },
];

export const BAAS_BADGES = [
  {
    id: 'account',
    title: 'Account aangemaakt',
    description: 'Je hebt een FactuurBaas-account. Facturen en klanten kun je bewaren.',
    icon: 'crown',
    category: 'basis',
  },
  {
    id: 'first-invoice',
    title: 'Eerste factuur',
    description: 'Je hebt je eerste factuur gemaakt en opgeslagen.',
    icon: 'file',
    category: 'basis',
  },
  {
    id: 'first-client',
    title: 'Eerste klant',
    description: 'Je hebt een klant opgeslagen in je klantenlijst.',
    icon: 'users',
    category: 'basis',
  },
  {
    id: 'profile',
    title: 'Profiel compleet',
    description: 'Bedrijfsnaam, adres en KvK staan in je profiel.',
    icon: 'profile',
    category: 'basis',
  },
  {
    id: 'first-referral',
    title: 'Eerste referral',
    description: 'Iemand heeft een account aangemaakt via jouw unieke link.',
    icon: 'share',
    category: 'groei',
  },
  {
    id: 'referrals-3',
    title: 'Drie baasjes',
    description: 'Drie ondernemers kwamen via jouw link binnen.',
    icon: 'spark',
    category: 'groei',
  },
  {
    id: 'referrals-10',
    title: 'Superbaas',
    description: 'Tien referrals. Hiermee verdien je later speciale unlocks.',
    icon: 'trophy',
    category: 'groei',
  },
  {
    id: 'coming-unlocks',
    title: 'Binnenkort: unlocks',
    description:
      'Extra functies voor gebruikers die FactuurBaas helpen groeien. Wordt later opengezet.',
    icon: 'lock',
    category: 'toekomst',
    comingSoon: true,
  },
];

export function getBaasLevel(stats) {
  const invoiceCount = Number(stats?.invoiceCount) || 0;
  const referralCount = Number(stats?.referralCount) || 0;
  const hasAccount = Boolean(stats?.hasAccount);

  let current = BAAS_LEVELS[0];
  for (const level of BAAS_LEVELS) {
    const invoiceOk = invoiceCount >= (level.minInvoices || 0);
    const referralOk = referralCount >= (level.minReferrals || 0);
    const accountOk = !level.requiresAccount || hasAccount;
    if (invoiceOk && referralOk && accountOk) {
      current = level;
    }
  }
  return current;
}

export function getBadgeStates(stats) {
  const invoiceCount = Number(stats?.invoiceCount) || 0;
  const referralCount = Number(stats?.referralCount) || 0;
  const hasAccount = Boolean(stats?.hasAccount);
  const hasClient = Boolean(stats?.hasClient);
  const profileComplete = Boolean(stats?.profileComplete);

  return BAAS_BADGES.map((badge) => {
    let unlocked = false;
    let progress = 0;
    let progressMax = 1;

    switch (badge.id) {
      case 'account':
        unlocked = hasAccount;
        progress = hasAccount ? 1 : 0;
        break;
      case 'first-invoice':
        unlocked = invoiceCount >= 1;
        progress = Math.min(invoiceCount, 1);
        break;
      case 'first-client':
        unlocked = hasClient;
        progress = hasClient ? 1 : 0;
        break;
      case 'profile':
        unlocked = profileComplete;
        progress = profileComplete ? 1 : 0;
        break;
      case 'first-referral':
        unlocked = referralCount >= 1;
        progress = Math.min(referralCount, 1);
        break;
      case 'referrals-3':
        unlocked = referralCount >= 3;
        progress = Math.min(referralCount, 3);
        progressMax = 3;
        break;
      case 'referrals-10':
        unlocked = referralCount >= 10;
        progress = Math.min(referralCount, 10);
        progressMax = 10;
        break;
      case 'coming-unlocks':
        unlocked = false;
        progress = 0;
        break;
      default:
        unlocked = false;
    }

    return {
      ...badge,
      unlocked,
      progress,
      progressMax,
    };
  });
}

export function getNextLevel(currentLevel) {
  const index = BAAS_LEVELS.findIndex((level) => level.id === currentLevel.id);
  if (index < 0 || index >= BAAS_LEVELS.length - 1) return null;
  return BAAS_LEVELS[index + 1];
}
