import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

function getAdminPassword() {
  return process.env.ADMIN_PASSWORD || 'L@coL@co';
}

function isAuthorized(request) {
  const header = request.headers.get('x-admin-password') || '';
  return header && header === getAdminPassword();
}

async function listAllUsers(admin) {
  const users = [];
  let page = 1;
  const perPage = 200;

  for (;;) {
    const { data, error } = await admin.auth.admin.listUsers({ page, perPage });
    if (error) throw error;
    const batch = data?.users || [];
    users.push(...batch);
    if (batch.length < perPage) break;
    page += 1;
    if (page > 50) break;
  }

  return users;
}

/**
 * Aggregate retention KPIs for admin dashboard.
 * Auth: x-admin-password header matching ADMIN_PASSWORD env.
 */
export async function GET(request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceKey) {
    return NextResponse.json(
      {
        error:
          'Server misconfigured: NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY required.',
      },
      { status: 500 }
    );
  }

  const admin = createClient(supabaseUrl, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  try {
    const users = await listAllUsers(admin);
    const totalAccounts = users.length;

    const ms30d = 30 * 24 * 60 * 60 * 1000;
    const returnedAfter30d = users.filter((u) => {
      if (!u.last_sign_in_at || !u.created_at) return false;
      const created = new Date(u.created_at).getTime();
      const last = new Date(u.last_sign_in_at).getTime();
      return last - created >= ms30d;
    }).length;

    const { data: invoiceRows, error: invError } = await admin.from('invoices').select('user_id');
    if (invError) throw invError;

    const countsByUser = new Map();
    for (const row of invoiceRows || []) {
      if (!row.user_id) continue;
      countsByUser.set(row.user_id, (countsByUser.get(row.user_id) || 0) + 1);
    }

    let activated = 0;
    let withSecondInvoice = 0;
    for (const count of countsByUser.values()) {
      if (count >= 1) activated += 1;
      if (count >= 2) withSecondInvoice += 1;
    }

    let convertedFromGuest = 0;
    const { count: guestCount, error: guestError } = await admin
      .from('profiles')
      .select('id', { count: 'exact', head: true })
      .eq('converted_from_guest', true);

    if (guestError) {
      // Column may not exist yet — treat as 0
      if (!/converted_from_guest|schema cache|column/i.test(guestError.message || '')) {
        throw guestError;
      }
    } else {
      convertedFromGuest = guestCount || 0;
    }

    const pct = (num, den) => (den > 0 ? Math.round((num / den) * 1000) / 10 : 0);

    return NextResponse.json({
      totalAccounts,
      activated,
      activatedPctOfAccounts: pct(activated, totalAccounts),
      withSecondInvoice,
      secondInvoicePctOfActivated: pct(withSecondInvoice, activated),
      convertedFromGuest,
      convertedFromGuestPctOfAccounts: pct(convertedFromGuest, totalAccounts),
      returnedAfter30d,
      returnedAfter30dPctOfAccounts: pct(returnedAfter30d, totalAccounts),
      guestAttributionReady: guestError == null,
    });
  } catch (err) {
    console.error('retention-stats error:', err);
    return NextResponse.json({ error: err.message || 'Failed to load stats' }, { status: 500 });
  }
}
