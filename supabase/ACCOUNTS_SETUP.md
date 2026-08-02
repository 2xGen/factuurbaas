# FactuurBaas — Google OAuth + accounts setup

## 1. Run SQL

In Supabase → SQL Editor, run:

- `supabase/accounts_invoices.sql`

This creates `profiles`, `invoices`, RLS, profile trigger, private `user-logos` bucket, and `delete_own_account()`.

## 2. Google OAuth (Supabase Dashboard)

1. Authentication → Providers → **Google** → Enable
2. Create OAuth credentials in [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
3. Authorized redirect URI (from Supabase Auth settings):
   - `https://<PROJECT_REF>.supabase.co/auth/v1/callback`
4. Paste Client ID + Secret into Supabase Google provider

## 3. Redirect allow list

Authentication → URL Configuration:

- Site URL: `https://factuurbaas.nl`
- Redirect URLs:
  - `https://factuurbaas.nl/auth/callback`
  - `http://localhost:3000/auth/callback`

## 4. Env vars

Already required:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Optional (fallback if RPC delete fails):

- `SUPABASE_SERVICE_ROLE_KEY` — **server only**, never `NEXT_PUBLIC_`

Optional:

- `NEXT_PUBLIC_SITE_URL=https://factuurbaas.nl`

## 5. Security check

With two Google test users, confirm user A cannot `select` user B’s invoices in the Table Editor / API.

Never put `service_role` in client bundles.
