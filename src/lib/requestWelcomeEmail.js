/**
 * Fire-and-forget welcome email for the current session user.
 * Safe to call on every auth callback — server de-dupes via welcome_email_sent_at.
 */
export async function requestWelcomeEmail(supabase) {
  try {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session?.access_token) return;

    await fetch('/api/emails/welcome', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${session.access_token}`,
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    console.warn('Welcome email request failed:', err?.message || err);
  }
}
