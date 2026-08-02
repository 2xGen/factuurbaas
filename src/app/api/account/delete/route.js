import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';
import { sendAccountDeletedEmail } from '@/lib/welcomeEmail';

/**
 * AVG account deletion. Requires Authorization: Bearer <user access token>.
 * Sends a confirmation email first, then deletes auth.users (cascades data).
 */
export async function DELETE(request) {
  const authHeader = request.headers.get('authorization') || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;

  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !anonKey) {
    return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 });
  }

  const userClient = createClient(supabaseUrl, anonKey, {
    global: { headers: { Authorization: `Bearer ${token}` } },
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const {
    data: { user },
    error: userError,
  } = await userClient.auth.getUser(token);

  if (userError || !user) {
    return NextResponse.json({ error: 'Invalid session' }, { status: 401 });
  }

  // Capture name for the email before data disappears
  let fullName =
    user.user_metadata?.full_name || user.user_metadata?.name || null;

  if (serviceKey) {
    const admin = createClient(supabaseUrl, serviceKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
    const { data: profile } = await admin
      .from('profiles')
      .select('full_name')
      .eq('id', user.id)
      .maybeSingle();
    if (profile?.full_name) fullName = profile.full_name;
  } else {
    const { data: profile } = await userClient
      .from('profiles')
      .select('full_name')
      .eq('id', user.id)
      .maybeSingle();
    if (profile?.full_name) fullName = profile.full_name;
  }

  // Email before delete (failure must not block AVG deletion)
  await sendAccountDeletedEmail(user, { fullName });

  // Prefer RPC (no service role needed if SQL migration applied)
  const { error: rpcError } = await userClient.rpc('delete_own_account');
  if (!rpcError) {
    return NextResponse.json({ ok: true });
  }

  if (!serviceKey) {
    return NextResponse.json(
      {
        error:
          'Account verwijderen vereist SUPABASE_SERVICE_ROLE_KEY of de delete_own_account RPC. ' +
          (rpcError.message || ''),
      },
      { status: 500 }
    );
  }

  const admin = createClient(supabaseUrl, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  await admin.from('clients').delete().eq('user_id', user.id);
  await admin.from('invoices').delete().eq('user_id', user.id);
  await admin.from('profiles').delete().eq('id', user.id);

  const { data: files } = await admin.storage.from('user-logos').list(user.id);
  if (files?.length) {
    await admin.storage
      .from('user-logos')
      .remove(files.map((f) => `${user.id}/${f.name}`));
  }

  const { error: deleteError } = await admin.auth.admin.deleteUser(user.id);
  if (deleteError) {
    return NextResponse.json({ error: deleteError.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
