-- =============================================================================
-- FactuurBaas — EXPORT from OLD project
-- Run this in the OLD Supabase project SQL Editor.
--
-- How to use:
-- 1. Open OLD project → SQL Editor
-- 2. Run one section at a time (or all)
-- 3. Copy the result column(s) — each row is a ready INSERT for the NEW project
-- 4. Paste into NEW project → SQL Editor → Run
--
-- Prerequisites on NEW project: run FULL_BOOTSTRAP.sql first.
--
-- SKIPPED on purpose:
-- - auth.users / profiles / invoices  (Google users get new IDs; don't copy casually)
-- - Storage files (guide/blog images can keep old public URLs)
-- =============================================================================

-- ─── A) Email waitlist → factuurbaas_emails ───────────────────────────────────

select format(
  $sql$
insert into public.factuurbaas_emails (id, email, created_at, discount_percent, discount_cycle, discount_valid_for_life)
values (%L::uuid, %L, %L::timestamptz, %L::numeric, %L, %L::boolean)
on conflict (email) do nothing;$sql$,
  id,
  email,
  created_at,
  discount_percent,
  discount_cycle,
  discount_valid_for_life
) as insert_sql
from public.factuurbaas_emails
order by created_at;


-- ─── B) Footer links → managed_blog_links ─────────────────────────────────────

select format(
  $sql$
insert into public.managed_blog_links (id, title, url, created_at, updated_at)
values (%L::uuid, %L, %L, %L::timestamptz, %L::timestamptz)
on conflict (id) do nothing;$sql$,
  id,
  title,
  url,
  created_at,
  coalesce(updated_at, created_at)
) as insert_sql
from public.managed_blog_links
order by created_at;


-- ─── C) Blog listings → blog_post_listings ────────────────────────────────────

select format(
  $sql$
insert into public.blog_post_listings (id, title, image_url, external_url, is_published, created_at, updated_at)
values (%L::uuid, %L, %L, %L, %L::boolean, %L::timestamptz, %L::timestamptz)
on conflict (id) do nothing;$sql$,
  id,
  title,
  image_url,
  external_url,
  coalesce(is_published, true),
  created_at,
  coalesce(updated_at, created_at)
) as insert_sql
from public.blog_post_listings
order by created_at;


-- ─── D) Anonymous invoice download counter ────────────────────────────────────
-- Only migrates timestamps (counts). Skip if you prefer starting at zero.

select format(
  $sql$
insert into public.invoice_creations_log (id, created_at)
values (%L::uuid, %L::timestamptz)
on conflict (id) do nothing;$sql$,
  id,
  created_at
) as insert_sql
from public.invoice_creations_log
order by created_at;


-- If your OLD project only has the VIEW factuurbaas_invoices_created (no base table),
-- use this instead of D:
--
-- select format(
--   $sql$
-- insert into public.invoice_creations_log (id, created_at)
-- values (%L::uuid, %L::timestamptz)
-- on conflict (id) do nothing;$sql$,
--   id,
--   created_at
-- ) as insert_sql
-- from public.factuurbaas_invoices_created
-- order by created_at;


-- ─── E) Tool usage logs (optional — can be large) ─────────────────────────────

select format(
  $sql$
insert into public.factuurbaas_offertes_created (id, created_at)
values (%L::uuid, %L::timestamptz)
on conflict (id) do nothing;$sql$,
  id, created_at
) as insert_sql
from public.factuurbaas_offertes_created
order by created_at;

select format(
  $sql$
insert into public.factuurbaas_btw_berekeningen (id, created_at)
values (%L::uuid, %L::timestamptz)
on conflict (id) do nothing;$sql$,
  id, created_at
) as insert_sql
from public.factuurbaas_btw_berekeningen
order by created_at;

select format(
  $sql$
insert into public.factuurbaas_uurtarief_calculator (id, created_at)
values (%L::uuid, %L::timestamptz)
on conflict (id) do nothing;$sql$,
  id, created_at
) as insert_sql
from public.factuurbaas_uurtarief_calculator
order by created_at;

select format(
  $sql$
insert into public.factuurbaas_uurtarief_naar_inkomen (id, created_at)
values (%L::uuid, %L::timestamptz)
on conflict (id) do nothing;$sql$,
  id, created_at
) as insert_sql
from public.factuurbaas_uurtarief_naar_inkomen
order by created_at;

select format(
  $sql$
insert into public.factuurbaas_factuurnummer_generator (id, created_at)
values (%L::uuid, %L::timestamptz)
on conflict (id) do nothing;$sql$,
  id, created_at
) as insert_sql
from public.factuurbaas_factuurnummer_generator
order by created_at;

select format(
  $sql$
insert into public.factuurbaas_marge_calculator (id, created_at)
values (%L::uuid, %L::timestamptz)
on conflict (id) do nothing;$sql$,
  id, created_at
) as insert_sql
from public.factuurbaas_marge_calculator
order by created_at;

select format(
  $sql$
insert into public.factuurbaas_betaaltermijn_calculator (id, created_at)
values (%L::uuid, %L::timestamptz)
on conflict (id) do nothing;$sql$,
  id, created_at
) as insert_sql
from public.factuurbaas_betaaltermijn_calculator
order by created_at;

select format(
  $sql$
insert into public.factuurbaas_kor_calculator (id, created_at)
values (%L::uuid, %L::timestamptz)
on conflict (id) do nothing;$sql$,
  id, created_at
) as insert_sql
from public.factuurbaas_kor_calculator
order by created_at;


-- ─── F) Page views (OPTIONAL — often huge; prefer CSV export if > few thousand) ─
-- Uncomment only if you really want historical analytics.

-- select format(
--   $sql$
-- insert into public.page_views (id, page_path, view_timestamp, user_agent)
-- values (%L::uuid, %L, %L::timestamptz, %L)
-- on conflict (id) do nothing;$sql$,
--   id,
--   page_path,
--   view_timestamp,
--   user_agent
-- ) as insert_sql
-- from public.page_views
-- order by view_timestamp
-- limit 50000;


-- ─── G) Quick inventory (run on OLD project to see what exists) ────────────────

select 'factuurbaas_emails' as table_name, count(*)::bigint as rows from public.factuurbaas_emails
union all select 'managed_blog_links', count(*) from public.managed_blog_links
union all select 'blog_post_listings', count(*) from public.blog_post_listings
union all select 'invoice_creations_log', count(*) from public.invoice_creations_log
union all select 'page_views', count(*) from public.page_views
union all select 'factuurbaas_offertes_created', count(*) from public.factuurbaas_offertes_created
union all select 'factuurbaas_btw_berekeningen', count(*) from public.factuurbaas_btw_berekeningen
order by table_name;
