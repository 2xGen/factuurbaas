/**
 * Soft attribution: guest made an invoice PDF before creating an account.
 */
export const GUEST_INVOICE_STORAGE_KEY = 'fb_guest_invoice_at';

export function markGuestInvoiceCreated() {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(GUEST_INVOICE_STORAGE_KEY, new Date().toISOString());
  } catch {
    // ignore quota / private mode
  }
}

/** Read and clear the guest-invoice flag. Returns ISO string or null. */
export function consumeGuestInvoiceFlag() {
  if (typeof window === 'undefined') return null;
  try {
    const value = localStorage.getItem(GUEST_INVOICE_STORAGE_KEY);
    if (value) localStorage.removeItem(GUEST_INVOICE_STORAGE_KEY);
    return value || null;
  } catch {
    return null;
  }
}
