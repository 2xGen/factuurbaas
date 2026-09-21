import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const isBrowser = typeof window !== 'undefined';

/**
 * Single browser Supabase client for the whole app.
 * Multiple createClient() instances sharing localStorage race on PKCE/refresh
 * tokens and can leave OAuth logins stuck on a spinner.
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: isBrowser,
    autoRefreshToken: isBrowser,
    // gotrue-js always auto-exchanges PKCE when ?code= + verifier exist;
    // AuthCallbackClient waits for that session (must not exchange again).
    detectSessionInUrl: true,
    flowType: 'pkce',
    storage: isBrowser ? window.localStorage : undefined,
  },
});
