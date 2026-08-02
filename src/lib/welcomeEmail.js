import { Resend } from 'resend';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://factuurbaas.nl';
const FROM =
  process.env.RESEND_FROM_EMAIL || 'FactuurBaas <mail@factuurbaas.nl>';

export function getResendClient() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

export function buildWelcomeEmail({ name, email }) {
  const displayName = name?.trim() || 'ondernemer';
  const subject = 'Welkom bij FactuurBaas';

  const text = [
    `Hoi ${displayName},`,
    '',
    'Welkom bij FactuurBaas — de makkelijke manier om professionele facturen te maken.',
    '',
    'Dit kun je meteen doen:',
    `• Factuur maken: ${SITE_URL}/create-invoice`,
    `• Dashboard: ${SITE_URL}/dashboard`,
    `• Klanten opslaan: ${SITE_URL}/klanten`,
    '',
    'Gratis, zonder abonnement. Jij bent onze gebruiker — niet ons product.',
    '',
    'Vragen? Antwoord op deze mail of mail mail@factuurbaas.nl.',
    '',
    'Groet,',
    'FactuurBaas',
    SITE_URL,
  ].join('\n');

  const html = `<!DOCTYPE html>
<html lang="nl">
<head><meta charset="utf-8" /><meta name="viewport" content="width=device-width" /></head>
<body style="margin:0;padding:0;background:#f4f6f9;font-family:Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#0A2A4D;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f4f6f9;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e2e8f0;">
          <tr>
            <td style="background:#0A2A4D;padding:28px 32px;">
              <p style="margin:0;font-size:22px;font-weight:700;color:#ffffff;">FactuurBaas</p>
              <p style="margin:8px 0 0;font-size:14px;color:#cbd5e1;">Welkom — je bent er klaar voor</p>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 32px;">
              <p style="margin:0 0 16px;font-size:16px;line-height:1.5;">Hoi ${escapeHtml(displayName)},</p>
              <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#334155;">
                Welkom bij FactuurBaas. Maak professionele facturen, download ze als PDF, en houd met een gratis account
                overzicht over openstaande bedragen, btw en klanten.
              </p>
              <p style="margin:0 0 8px;font-size:15px;font-weight:600;">Snel starten:</p>
              <ul style="margin:0 0 24px;padding-left:18px;color:#334155;font-size:15px;line-height:1.7;">
                <li><a href="${SITE_URL}/create-invoice" style="color:#FF7F50;font-weight:600;">Factuur maken</a></li>
                <li><a href="${SITE_URL}/dashboard" style="color:#FF7F50;font-weight:600;">Dashboard</a></li>
                <li><a href="${SITE_URL}/klanten" style="color:#FF7F50;font-weight:600;">Klanten opslaan</a></li>
              </ul>
              <table role="presentation" cellspacing="0" cellpadding="0" style="margin:0 0 24px;">
                <tr>
                  <td style="border-radius:10px;background:#FF7F50;">
                    <a href="${SITE_URL}/create-invoice" style="display:inline-block;padding:12px 22px;color:#ffffff;text-decoration:none;font-weight:600;font-size:15px;">
                      Maak gratis factuur
                    </a>
                  </td>
                </tr>
              </table>
              <p style="margin:0;font-size:13px;line-height:1.6;color:#64748b;">
                Gratis, zonder abonnement. Jij bent onze gebruiker — niet ons product.<br />
                Vragen? Antwoord op deze mail of schrijf naar
                <a href="mailto:mail@factuurbaas.nl" style="color:#0A2A4D;">mail@factuurbaas.nl</a>.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 32px 24px;border-top:1px solid #e2e8f0;font-size:12px;color:#94a3b8;">
              © FactuurBaas.nl · <a href="${SITE_URL}" style="color:#64748b;">factuurbaas.nl</a><br />
              Verstuurd naar ${escapeHtml(email)}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return { from: FROM, subject, html, text };
}

export function buildAccountDeletedEmail({ name, email }) {
  const displayName = name?.trim() || 'ondernemer';
  const subject = 'Je FactuurBaas-account is verwijderd';

  const text = [
    `Hoi ${displayName},`,
    '',
    'Je FactuurBaas-account is verwijderd zoals je hebt gevraagd.',
    '',
    'Wat is gewist:',
    '• je account en login',
    '• opgeslagen facturen en profielgegevens',
    '• opgeslagen klanten en logo’s (indien aanwezig)',
    '',
    'Je kunt FactuurBaas nog steeds zonder account gebruiken om een PDF te maken.',
    `Tool: ${SITE_URL}/create-invoice`,
    '',
    'Was dit niet de bedoeling? Neem contact op via mail@factuurbaas.nl.',
    '',
    'Groet,',
    'FactuurBaas',
    SITE_URL,
  ].join('\n');

  const html = `<!DOCTYPE html>
<html lang="nl">
<head><meta charset="utf-8" /><meta name="viewport" content="width=device-width" /></head>
<body style="margin:0;padding:0;background:#f4f6f9;font-family:Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#0A2A4D;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f4f6f9;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e2e8f0;">
          <tr>
            <td style="background:#0A2A4D;padding:28px 32px;">
              <p style="margin:0;font-size:22px;font-weight:700;color:#ffffff;">FactuurBaas</p>
              <p style="margin:8px 0 0;font-size:14px;color:#cbd5e1;">Account verwijderd</p>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 32px;">
              <p style="margin:0 0 16px;font-size:16px;line-height:1.5;">Hoi ${escapeHtml(displayName)},</p>
              <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#334155;">
                Je FactuurBaas-account is verwijderd zoals je hebt gevraagd (AVG / recht op vergetelheid).
              </p>
              <p style="margin:0 0 8px;font-size:15px;font-weight:600;">Wat is gewist:</p>
              <ul style="margin:0 0 24px;padding-left:18px;color:#334155;font-size:15px;line-height:1.7;">
                <li>je account en login</li>
                <li>opgeslagen facturen en profielgegevens</li>
                <li>opgeslagen klanten en logo’s (indien aanwezig)</li>
              </ul>
              <p style="margin:0 0 24px;font-size:15px;line-height:1.6;color:#334155;">
                Je kunt FactuurBaas nog steeds <strong>zonder account</strong> gebruiken om een factuur als PDF te maken.
              </p>
              <table role="presentation" cellspacing="0" cellpadding="0" style="margin:0 0 24px;">
                <tr>
                  <td style="border-radius:10px;background:#FF7F50;">
                    <a href="${SITE_URL}/create-invoice" style="display:inline-block;padding:12px 22px;color:#ffffff;text-decoration:none;font-weight:600;font-size:15px;">
                      Factuur maken zonder account
                    </a>
                  </td>
                </tr>
              </table>
              <p style="margin:0;font-size:13px;line-height:1.6;color:#64748b;">
                Was dit niet de bedoeling? Neem contact op via
                <a href="mailto:mail@factuurbaas.nl" style="color:#0A2A4D;">mail@factuurbaas.nl</a>.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 32px 24px;border-top:1px solid #e2e8f0;font-size:12px;color:#94a3b8;">
              © FactuurBaas.nl · <a href="${SITE_URL}" style="color:#64748b;">factuurbaas.nl</a><br />
              Verstuurd naar ${escapeHtml(email)}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return { from: FROM, subject, html, text };
}

/**
 * Confirmation that the account was deleted. Call BEFORE deleting the user.
 * Does not throw to the caller on Resend failure — returns { sent, reason }.
 */
export async function sendAccountDeletedEmail(user, { fullName } = {}) {
  if (!user?.email) {
    return { sent: false, reason: 'no_email' };
  }

  const resend = getResendClient();
  if (!resend) {
    return { sent: false, reason: 'missing_api_key' };
  }

  const name =
    fullName ||
    user.user_metadata?.full_name ||
    user.user_metadata?.name ||
    user.email?.split('@')[0];

  const payload = buildAccountDeletedEmail({ name, email: user.email });
  const { data, error } = await resend.emails.send({
    from: payload.from,
    to: user.email,
    subject: payload.subject,
    html: payload.html,
    text: payload.text,
  });

  if (error) {
    console.warn('Account deleted email failed:', error.message);
    return { sent: false, reason: error.message || 'send_failed' };
  }

  return { sent: true, id: data?.id || null };
}

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Send welcome email if not already sent for this profile.
 * Uses service-role supabase client for profile read/update.
 */
export async function sendWelcomeEmailIfNeeded(admin, user) {
  if (!user?.id || !user?.email) {
    return { sent: false, reason: 'no_user' };
  }

  const resend = getResendClient();
  if (!resend) {
    return { sent: false, reason: 'missing_api_key' };
  }

  const { data: profile, error: profileError } = await admin
    .from('profiles')
    .select('id, full_name, welcome_email_sent_at')
    .eq('id', user.id)
    .maybeSingle();

  if (profileError) {
    if (/welcome_email_sent_at|schema cache|column/i.test(profileError.message || '')) {
      console.warn('Run supabase/ADD_WELCOME_EMAIL.sql before sending welcome emails.');
      return { sent: false, reason: 'migration_required' };
    }
    throw profileError;
  }

  if (profile?.welcome_email_sent_at) {
    return { sent: false, reason: 'already_sent' };
  }

  // No profile row yet (auth trigger race) — still treat as eligible
  const name =
    profile?.full_name ||
    user.user_metadata?.full_name ||
    user.user_metadata?.name ||
    user.email?.split('@')[0];

  const payload = buildWelcomeEmail({ name, email: user.email });
  const { data, error } = await resend.emails.send({
    from: payload.from,
    to: user.email,
    subject: payload.subject,
    html: payload.html,
    text: payload.text,
  });

  if (error) {
    throw new Error(error.message || 'Resend send failed');
  }

  const sentAt = new Date().toISOString();
  if (profile?.id) {
    const { error: updateError } = await admin
      .from('profiles')
      .update({
        welcome_email_sent_at: sentAt,
        updated_at: sentAt,
      })
      .eq('id', user.id);

    if (updateError) {
      console.warn('welcome_email_sent_at update failed:', updateError.message);
    }
  } else {
    const { error: insertError } = await admin.from('profiles').insert({
      id: user.id,
      full_name: name || null,
      welcome_email_sent_at: sentAt,
    });
    if (insertError && insertError.code !== '23505') {
      console.warn('welcome_email_sent_at insert failed:', insertError.message);
    } else if (insertError?.code === '23505') {
      await admin
        .from('profiles')
        .update({ welcome_email_sent_at: sentAt, updated_at: sentAt })
        .eq('id', user.id);
    }
  }

  return { sent: true, id: data?.id || null };
}
