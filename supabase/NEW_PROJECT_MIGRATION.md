# New Supabase project: FactuurBaas.nl

**Project ID:** `mtadtabmwahpxmpquovg`  
**Region:** `eu-north-1` (Stockholm)  
**API URL:** `https://mtadtabmwahpxmpquovg.supabase.co`

## Security

- Never paste **service_role** or Google **client secret** into chat/git.
- Prefer the classic **anon** JWT (`eyJ...`) as `NEXT_PUBLIC_SUPABASE_ANON_KEY` for this codebase (supabase-js expects that format).
- The new `sb_publishable_...` key is optional; use anon JWT unless you migrate the client later.

## 1. Create schema (required)

In the **new** project → SQL Editor → paste and run:

[`FULL_BOOTSTRAP.sql`](./FULL_BOOTSTRAP.sql)

This creates profiles, invoices (+ RLS), emails, page_views, tool logs, admin tables, storage buckets.

## 2. Point the app at the new project

### Local `.env.local` (create/update, do not commit)

```env
NEXT_PUBLIC_SUPABASE_URL=https://mtadtabmwahpxmpquovg.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon JWT eyJ... from Project Settings → API>
NEXT_PUBLIC_SITE_URL=http://localhost:3000
# Optional, server-only (account delete fallback):
# SUPABASE_SERVICE_ROLE_KEY=<service_role — never NEXT_PUBLIC_>
```

### Vercel / production

Set the same vars (production `NEXT_PUBLIC_SITE_URL=https://factuurbaas.nl`).

Restart `npm run dev` after changing env.

## 3. Google OAuth on the NEW project

1. Authentication → Providers → Google → enable  
2. Client ID + Secret from Google Cloud  
3. Google **Authorized redirect URI**:

```
https://mtadtabmwahpxmpquovg.supabase.co/auth/v1/callback
```

4. Google **JavaScript origins**:

```
https://factuurbaas.nl
http://localhost:3000
```

5. Supabase → Authentication → URL Configuration:

- Site URL: `https://factuurbaas.nl`
- Redirect URLs:
  - `https://factuurbaas.nl/auth/callback`
  - `http://localhost:3000/auth/callback`

6. OAuth consent screen: add yourself as **test user** while status is Testing.

## 4. Migrating data from the OLD project

| Data | Migrate? | How |
|------|----------|-----|
| Auth users | Usually **no** | Users sign in again with Google on the new project (new `auth.users` IDs). |
| Saved invoices / profiles | Only if you had real account data | Export CSV from old Table Editor → import is awkward because `user_id` must match new auth IDs. Prefer fresh start for accounts. |
| `factuurbaas_emails` | Optional | Table Editor → Export CSV on old → Import on new (same columns). |
| Tool logs / page_views | Optional | Same CSV export/import, or start at zero. |
| `blog_post_listings` / `managed_blog_links` | Yes if you use admin CMS | Export/import CSV. |
| Public images (`Factuurbaas` / `Blogs` buckets) | Optional | Guide/blog image URLs in code still point at **old** project `iemgpccgdlwpsrsjuumo`. They keep working as long as the old bucket stays public. Migrate files later if you want one project only. |

### Auth users: do not “copy” casually

Copying `auth.users` between projects is fragile and security-sensitive. For FactuurBaas accounts (Google-only), a clean start is correct.

## 5. Smoke test checklist

1. Homepage loads; page view row appears in `page_views`  
2. Download a PDF → row in `invoice_creations_log`  
3. Google login → profile row auto-created  
4. Save invoice → only your user sees it  
5. Second Google account cannot read first user’s invoices  

## 6. After cutover

- Update Vercel env → redeploy  
- Keep old project read-only until images/emails are migrated or you no longer need them  
- Rotate any secrets that were pasted into chat
