const KEY = 'factuurbaas_money_prefill';

export function saveMoneyPrefill({ kind, description, amountExcl, amountIncl, vatRate }) {
  if (typeof window === 'undefined') return;
  sessionStorage.setItem(
    KEY,
    JSON.stringify({
      kind,
      description: description || '',
      amountExcl,
      amountIncl,
      vatRate,
    })
  );
}

export function peekMoneyPrefill() {
  if (typeof window === 'undefined') return null;
  const raw = sessionStorage.getItem(KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function consumeMoneyPrefill() {
  const parsed = peekMoneyPrefill();
  if (typeof window !== 'undefined') sessionStorage.removeItem(KEY);
  return parsed;
}
