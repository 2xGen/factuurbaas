import { randomUUID } from 'crypto';
import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';
import { labelForBusinessType, validateBoekhouderLead } from '@/lib/boekhouderLead';
import { affiliateLeadId, amsterdamDayRange, buildWrkdPayload, postWrkdLead, wrkdConfigured } from '@/lib/wrkdLead';
import { getResendClient } from '@/lib/welcomeEmail';

const LEAD_TO = process.env.BOEKHOUDER_LEAD_EMAIL || 'mail@factuurbaas.nl';
const FROM = process.env.RESEND_FROM_EMAIL || 'FactuurBaas <mail@factuurbaas.nl>';
const DUPLICATE_WINDOW_MS = 180 * 24 * 60 * 60 * 1000;

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function utmLines(utm) {
  return Object.entries(utm || {}).map(([key, value]) => `${key}: ${value}`);
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Ongeldige aanvraag.' }, { status: 400 });
  }

  if (String(body?.website || '').trim()) {
    return NextResponse.json({ ok: true });
  }

  const result = validateBoekhouderLead(body);
  if (!result.ok) {
    return NextResponse.json(
      { error: 'Controleer de verplichte velden.', fields: result.errors },
      { status: 400 }
    );
  }

  const lead = result.lead;
  const businessType = labelForBusinessType(lead.businessType);
  const leadId = randomUUID();
  let affiliateId = affiliateLeadId();
  let stored = false;
  let mailed = false;
  let delivered = false;
  let wrkdStatus = 'niet verzonden';

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const admin =
    supabaseUrl && serviceKey
      ? createClient(supabaseUrl, serviceKey, {
          auth: { persistSession: false, autoRefreshToken: false },
        })
      : null;

  if (admin) {
    const since = new Date(Date.now() - DUPLICATE_WINDOW_MS).toISOString();
    const { data: existing, error: lookupError } = await admin
      .from('accountant_leads')
      .select('id')
      .eq('email', lead.email)
      .gte('created_at', since)
      .limit(1);

    if (!lookupError && existing?.length) {
      return NextResponse.json(
        { error: 'We hebben deze aanvraag al ontvangen. Je hoeft het formulier niet opnieuw te versturen.' },
        { status: 409 }
      );
    }

    const range = amsterdamDayRange();
    const { count, error: countError } = await admin
      .from('accountant_leads')
      .select('id', { count: 'exact', head: true })
      .gte('created_at', range.start)
      .lt('created_at', range.end);
    affiliateId = affiliateLeadId(new Date(), countError ? null : (count || 0) + 1);

    const row = {
      id: leadId,
      company_form: businessType,
      services: [],
      company_name: lead.companyName,
      description: null,
      contact_name: lead.name,
      city: lead.city,
      email: lead.email,
      phone: lead.phone,
      source: lead.sourcePage,
      business_type: lead.businessType,
      kvk_confirmed: true,
      source_page: lead.sourcePage,
      source_type: lead.sourceType,
      partner: lead.partner,
      utm: lead.utm,
    };

    let { error } = await admin.from('accountant_leads').insert(row);
    if (error && /column|schema cache/i.test(error.message || '')) {
      const legacy = await admin.from('accountant_leads').insert({
        id: leadId,
        company_form: businessType,
        services: [],
        company_name: lead.companyName,
        description: [`bron: ${lead.sourcePage}`, `type: ${lead.sourceType}`, `partner: ${lead.partner}`, `id: ${affiliateId}`].join('\n'),
        contact_name: lead.name,
        city: lead.city,
        email: lead.email,
        phone: lead.phone,
        source: lead.sourcePage,
      });
      error = legacy.error;
    }
    if (error) console.error('boekhouder lead insert failed:', error.message);
    else stored = true;
  }

  const payload = buildWrkdPayload(lead, affiliateId);
  if (!wrkdConfigured() || !payload) {
    wrkdStatus = 'niet geconfigureerd';
    console.error('WRKD lead skipped: keys missing');
  } else {
    try {
      const wrkd = await postWrkdLead(payload);
      wrkdStatus = wrkd.ok ? `verzonden (${wrkd.status})` : `mislukt (${wrkd.status})`;
      delivered = wrkd.ok;
      if (!wrkd.ok) console.error('WRKD lead failed:', wrkd.status, wrkd.body);
    } catch (error) {
      wrkdStatus = 'mislukt (netwerk)';
      console.error('WRKD lead failed:', error instanceof Error ? error.message : 'unknown');
    }
  }

  const resend = getResendClient();
  if (resend) {
    const lines = [
      `Naam: ${lead.name}`,
      `Bedrijf: ${lead.companyName}`,
      `Plaats: ${lead.city}`,
      `E-mail: ${lead.email}`,
      `Telefoon: ${lead.phone}`,
      `Bedrijfsvorm: ${businessType}`,
      'KvK-inschrijving bevestigd: ja',
      `Partner: ${lead.partner}`,
      `Pagina: ${lead.sourcePage}`,
      `Bron: ${lead.sourceType}`,
      `Lead-id: ${affiliateId}`,
      `WRKD: ${wrkdStatus}`,
      ...utmLines(lead.utm),
    ];

    const internal = await resend.emails.send({
      from: FROM,
      to: LEAD_TO,
      replyTo: lead.email,
      subject: `Nieuwe boekhouder-aanvraag: ${lead.companyName}`,
      text: lines.join('\n'),
    });
    if (internal.error) console.error('boekhouder lead mail failed:', internal.error.message);
    else mailed = true;

    const confirmation = await resend.emails.send({
      from: FROM,
      to: lead.email,
      subject: 'We hebben je aanvraag voor een boekhouder ontvangen',
      text: [
        `Hoi ${lead.name},`,
        '',
        'We hebben je aanvraag ontvangen. WRKD B.V. neemt contact met je op over het vinden van een boekhouder.',
        'De aanvraag is gratis en vrijblijvend. Je zit nergens aan vast.',
        '',
        'Groet,',
        'FactuurBaas',
      ].join('\n'),
      html: `<p>Hoi ${escapeHtml(lead.name)},</p><p>We hebben je aanvraag ontvangen. WRKD B.V. neemt contact met je op over het vinden van een boekhouder. De aanvraag is gratis en vrijblijvend. Je zit nergens aan vast.</p><p>Groet,<br />FactuurBaas</p>`,
    });
    if (confirmation.error) console.error('boekhouder lead confirmation failed:', confirmation.error.message);
  }

  if (!stored && !mailed && !delivered) {
    return NextResponse.json(
      { error: 'Versturen lukt nu niet. Mail ons via mail@factuurbaas.nl.' },
      { status: 503 }
    );
  }

  return NextResponse.json({ ok: true });
}

export async function GET(request) {
  const authHeader = request.headers.get('authorization') || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : '';
  if (!token) return NextResponse.json({ submitted: false });

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !anonKey || !serviceKey) return NextResponse.json({ submitted: false });

  const userClient = createClient(supabaseUrl, anonKey, {
    global: { headers: { Authorization: `Bearer ${token}` } },
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const {
    data: { user },
  } = await userClient.auth.getUser(token);
  const email = String(user?.email || '').trim().toLowerCase();
  if (!email) return NextResponse.json({ submitted: false });

  const admin = createClient(supabaseUrl, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const { data, error } = await admin
    .from('accountant_leads')
    .select('id')
    .eq('email', email)
    .limit(1);

  if (error) return NextResponse.json({ submitted: false });
  return NextResponse.json({ submitted: Boolean(data?.length) });
}
