-- =============================================================================
-- FactuurBaas.nl — FULL BOOTSTRAP for a fresh Supabase project
-- Project: mtadtabmwahpxmpquovg (eu-north-1)
--
-- Run this ONCE in: Supabase → SQL Editor → New query → Run
-- Order: this file is self-contained (accounts + analytics + tools + admin).
-- =============================================================================

-- ─── 1. Profiles + invoices (accounts) ────────────────────────────────────────

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  full_name text,
  company_name text,
  company_address text,
  company_street text,
  company_postal_code text,
  company_city text,
  company_country text default 'Nederland',
  company_kvk text,
  company_btw text,
  company_iban text,
  logo_url text,
  converted_from_guest boolean not null default false,
  privacy_accepted_at timestamptz,
  privacy_policy_version text,
  newsletter_opt_in boolean not null default false,
  newsletter_opt_in_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles
  add column if not exists converted_from_guest boolean not null default false;

alter table public.profiles
  add column if not exists privacy_accepted_at timestamptz;

alter table public.profiles
  add column if not exists privacy_policy_version text;

alter table public.profiles
  add column if not exists welcome_email_sent_at timestamptz;

alter table public.profiles
  add column if not exists newsletter_opt_in boolean not null default false;

alter table public.profiles
  add column if not exists newsletter_opt_in_at timestamptz;

alter table public.profiles
  add column if not exists industry text;

alter table public.profiles
  add column if not exists industry_other text;

alter table public.profiles
  add column if not exists billing_style text;

alter table public.profiles
  add column if not exists partnership_open text;

alter table public.profiles
  add column if not exists onboarding_completed_at timestamptz;

alter table public.profiles enable row level security;

drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own"
  on public.profiles for select to authenticated
  using (id = auth.uid());

drop policy if exists "profiles_insert_own" on public.profiles;
create policy "profiles_insert_own"
  on public.profiles for insert to authenticated
  with check (id = auth.uid());

drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own"
  on public.profiles for update to authenticated
  using (id = auth.uid()) with check (id = auth.uid());

drop policy if exists "profiles_delete_own" on public.profiles;
create policy "profiles_delete_own"
  on public.profiles for delete to authenticated
  using (id = auth.uid());

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, full_name)
  values (
    new.id,
    coalesce(
      new.raw_user_meta_data->>'full_name',
      new.raw_user_meta_data->>'name',
      split_part(new.email, '@', 1)
    )
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

create table if not exists public.invoices (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  invoice_number text,
  invoice_name text,
  invoice_date timestamptz,
  due_date timestamptz,
  payment_term_days text,
  status text not null default 'concept'
    check (status in ('concept', 'pending', 'paid')),
  company_details jsonb not null default '{}'::jsonb,
  receiver_details jsonb not null default '{}'::jsonb,
  items jsonb not null default '[]'::jsonb,
  hours_worked jsonb not null default '[]'::jsonb,
  work_type text default 'fixed',
  amount numeric default 0,
  description text,
  currency text default 'EUR',
  tax text default '21',
  custom_tax_rate numeric,
  tax_included boolean default false,
  extra_costs jsonb not null default '{}'::jsonb,
  notes text,
  terms text,
  layout text default 'plain',
  pdf_language text default 'nl',
  logo text,
  activity_log jsonb not null default '[]'::jsonb,
  total_excl numeric not null default 0,
  total_btw numeric not null default 0,
  total_incl numeric not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists invoices_user_created_idx
  on public.invoices (user_id, created_at desc);
create index if not exists invoices_user_status_idx
  on public.invoices (user_id, status);

alter table public.invoices enable row level security;

drop policy if exists "invoices_select_own" on public.invoices;
create policy "invoices_select_own"
  on public.invoices for select to authenticated
  using (user_id = auth.uid());

drop policy if exists "invoices_insert_own" on public.invoices;
create policy "invoices_insert_own"
  on public.invoices for insert to authenticated
  with check (user_id = auth.uid());

drop policy if exists "invoices_update_own" on public.invoices;
create policy "invoices_update_own"
  on public.invoices for update to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());

drop policy if exists "invoices_delete_own" on public.invoices;
create policy "invoices_delete_own"
  on public.invoices for delete to authenticated
  using (user_id = auth.uid());

-- Clients (klanten) for fast invoicing
create table if not exists public.clients (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  company_name text,
  contact_person text,
  email text,
  phone text,
  address text,
  street text,
  postal_code text,
  city text,
  country text,
  kvk text,
  btw text,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists clients_user_created_idx
  on public.clients (user_id, created_at desc);

create index if not exists clients_user_name_idx
  on public.clients (user_id, company_name);

alter table public.clients enable row level security;

drop policy if exists "clients_select_own" on public.clients;
create policy "clients_select_own"
  on public.clients for select to authenticated
  using (user_id = auth.uid());

drop policy if exists "clients_insert_own" on public.clients;
create policy "clients_insert_own"
  on public.clients for insert to authenticated
  with check (user_id = auth.uid());

drop policy if exists "clients_update_own" on public.clients;
create policy "clients_update_own"
  on public.clients for update to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());

drop policy if exists "clients_delete_own" on public.clients;
create policy "clients_delete_own"
  on public.clients for delete to authenticated
  using (user_id = auth.uid());

-- Time entries (uren → factuur)
create table if not exists public.time_entries (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  client_id uuid references public.clients (id) on delete set null,
  entry_date date not null default (timezone('europe/amsterdam', now()))::date,
  hours numeric(8, 2) not null check (hours > 0),
  description text,
  hourly_rate numeric(12, 2),
  invoiced_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists time_entries_user_date_idx
  on public.time_entries (user_id, entry_date desc);

create index if not exists time_entries_user_open_idx
  on public.time_entries (user_id, invoiced_at)
  where invoiced_at is null;

create index if not exists time_entries_client_idx
  on public.time_entries (client_id);

alter table public.time_entries enable row level security;

drop policy if exists "time_entries_select_own" on public.time_entries;
create policy "time_entries_select_own"
  on public.time_entries for select to authenticated
  using (user_id = auth.uid());

drop policy if exists "time_entries_insert_own" on public.time_entries;
create policy "time_entries_insert_own"
  on public.time_entries for insert to authenticated
  with check (user_id = auth.uid());

drop policy if exists "time_entries_update_own" on public.time_entries;
create policy "time_entries_update_own"
  on public.time_entries for update to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());

drop policy if exists "time_entries_delete_own" on public.time_entries;
create policy "time_entries_delete_own"
  on public.time_entries for delete to authenticated
  using (user_id = auth.uid());

-- Private logos
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'user-logos',
  'user-logos',
  false,
  2097152,
  array['image/png', 'image/jpeg', 'image/webp', 'image/svg+xml']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "user_logos_select_own" on storage.objects;
create policy "user_logos_select_own"
  on storage.objects for select to authenticated
  using (bucket_id = 'user-logos' and (storage.foldername(name))[1] = auth.uid()::text);

drop policy if exists "user_logos_insert_own" on storage.objects;
create policy "user_logos_insert_own"
  on storage.objects for insert to authenticated
  with check (bucket_id = 'user-logos' and (storage.foldername(name))[1] = auth.uid()::text);

drop policy if exists "user_logos_update_own" on storage.objects;
create policy "user_logos_update_own"
  on storage.objects for update to authenticated
  using (bucket_id = 'user-logos' and (storage.foldername(name))[1] = auth.uid()::text)
  with check (bucket_id = 'user-logos' and (storage.foldername(name))[1] = auth.uid()::text);

drop policy if exists "user_logos_delete_own" on storage.objects;
create policy "user_logos_delete_own"
  on storage.objects for delete to authenticated
  using (bucket_id = 'user-logos' and (storage.foldername(name))[1] = auth.uid()::text);

create or replace function public.delete_own_account()
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  uid uuid := auth.uid();
begin
  if uid is null then
    raise exception 'Not authenticated';
  end if;

  delete from storage.objects
  where bucket_id = 'user-logos'
    and (storage.foldername(name))[1] = uid::text;

  delete from auth.users where id = uid;
end;
$$;

revoke all on function public.delete_own_account() from public;
grant execute on function public.delete_own_account() to authenticated;

-- ─── 2. Email waitlist ────────────────────────────────────────────────────────

create table if not exists public.factuurbaas_emails (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  created_at timestamptz not null default now(),
  discount_percent numeric,
  discount_cycle text,
  discount_valid_for_life boolean default false,
  constraint factuurbaas_emails_email_unique unique (email)
);

alter table public.factuurbaas_emails enable row level security;

drop policy if exists "emails_anon_insert" on public.factuurbaas_emails;
create policy "emails_anon_insert"
  on public.factuurbaas_emails for insert
  to anon, authenticated
  with check (email is not null);

drop policy if exists "emails_auth_read" on public.factuurbaas_emails;
create policy "emails_auth_read"
  on public.factuurbaas_emails for select
  to authenticated
  using (true);

-- ─── 3. Page views ────────────────────────────────────────────────────────────

create table if not exists public.page_views (
  id uuid primary key default gen_random_uuid(),
  page_path text not null,
  view_timestamp timestamptz not null default now(),
  user_agent text
);

create index if not exists page_views_timestamp_idx
  on public.page_views (view_timestamp desc);
create index if not exists page_views_path_idx
  on public.page_views (page_path);

alter table public.page_views enable row level security;

drop policy if exists "page_views_anon_insert" on public.page_views;
create policy "page_views_anon_insert"
  on public.page_views for insert
  to anon, authenticated
  with check (true);

drop policy if exists "page_views_auth_read" on public.page_views;
create policy "page_views_auth_read"
  on public.page_views for select
  to authenticated
  using (true);

create or replace function public.get_page_view_stats()
returns table (period text, count bigint)
language sql
security definer
set search_path = public
as $$
  select 'last_24_hours'::text, count(*)::bigint
  from page_views where view_timestamp >= now() - interval '24 hours'
  union all
  select 'last_30_days', count(*)::bigint
  from page_views where view_timestamp >= now() - interval '30 days'
  union all
  select 'all_time', count(*)::bigint from page_views;
$$;

create or replace function public.get_page_views_by_path()
returns table (page_path text, view_count bigint)
language sql
security definer
set search_path = public
as $$
  select page_path, count(*)::bigint as view_count
  from page_views
  group by page_path
  order by view_count desc
  limit 100;
$$;

grant execute on function public.get_page_view_stats() to authenticated;
grant execute on function public.get_page_views_by_path() to authenticated;

-- ─── 4. Invoice creation counter (anonymous) ──────────────────────────────────

create table if not exists public.invoice_creations_log (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now()
);

create index if not exists invoice_creations_log_created_at_idx
  on public.invoice_creations_log (created_at desc);

alter table public.invoice_creations_log enable row level security;

drop policy if exists "invoice_log_anon_insert" on public.invoice_creations_log;
create policy "invoice_log_anon_insert"
  on public.invoice_creations_log for insert
  to anon, authenticated
  with check (true);

drop policy if exists "invoice_log_auth_read" on public.invoice_creations_log;
create policy "invoice_log_auth_read"
  on public.invoice_creations_log for select
  to authenticated
  using (true);

create or replace view public.factuurbaas_invoices_created as
  select id, created_at from public.invoice_creations_log;

-- ─── 5. Tool usage tables ─────────────────────────────────────────────────────

create table if not exists public.factuurbaas_offertes_created (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now()
);
create table if not exists public.factuurbaas_btw_berekeningen (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now()
);
create table if not exists public.factuurbaas_uurtarief_calculator (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now()
);
create table if not exists public.factuurbaas_uurtarief_naar_inkomen (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now()
);
create table if not exists public.factuurbaas_factuurnummer_generator (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now()
);
create table if not exists public.factuurbaas_marge_calculator (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now()
);
create table if not exists public.factuurbaas_betaaltermijn_calculator (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now()
);
create table if not exists public.factuurbaas_kor_calculator (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now()
);

do $$
declare
  t text;
begin
  foreach t in array array[
    'factuurbaas_offertes_created',
    'factuurbaas_btw_berekeningen',
    'factuurbaas_uurtarief_calculator',
    'factuurbaas_uurtarief_naar_inkomen',
    'factuurbaas_factuurnummer_generator',
    'factuurbaas_marge_calculator',
    'factuurbaas_betaaltermijn_calculator',
    'factuurbaas_kor_calculator'
  ]
  loop
    execute format('create index if not exists %I on public.%I (created_at desc)', t || '_created_at_idx', t);
    execute format('alter table public.%I enable row level security', t);
    execute format('drop policy if exists "Allow anonymous insert" on public.%I', t);
    execute format(
      'create policy "Allow anonymous insert" on public.%I for insert to anon, authenticated with check (true)',
      t
    );
    execute format('drop policy if exists "Allow authenticated read" on public.%I', t);
    execute format(
      'create policy "Allow authenticated read" on public.%I for select to authenticated using (true)',
      t
    );
  end loop;
end $$;

create or replace function public.get_tool_log_stats(table_name text)
returns table (period text, count bigint)
language plpgsql
security definer
set search_path = public
as $$
declare
  sql text;
begin
  if table_name not in (
    'factuurbaas_invoices_created',
    'invoice_creations_log',
    'factuurbaas_offertes_created',
    'factuurbaas_btw_berekeningen',
    'factuurbaas_uurtarief_calculator',
    'factuurbaas_uurtarief_naar_inkomen',
    'factuurbaas_factuurnummer_generator',
    'factuurbaas_marge_calculator',
    'factuurbaas_betaaltermijn_calculator',
    'factuurbaas_kor_calculator'
  ) then
    raise exception 'Invalid table_name';
  end if;

  sql := format($f$
    select 'last_24_hours'::text as period, count(*)::bigint as count
    from %I where created_at >= now() - interval '24 hours'
    union all
    select 'last_30_days', count(*)::bigint
    from %I where created_at >= now() - interval '30 days'
    union all
    select 'all_time', count(*)::bigint
    from %I
  $f$, table_name, table_name, table_name);

  return query execute sql;
end;
$$;

create or replace function public.get_invoice_creation_stats()
returns table (period text, count bigint)
language sql security definer set search_path = public
as $$ select * from get_tool_log_stats('invoice_creations_log'); $$;

create or replace function public.get_offerte_creation_stats()
returns table (period text, count bigint)
language sql security definer set search_path = public
as $$ select * from get_tool_log_stats('factuurbaas_offertes_created'); $$;

create or replace function public.get_btw_berekening_stats()
returns table (period text, count bigint)
language sql security definer set search_path = public
as $$ select * from get_tool_log_stats('factuurbaas_btw_berekeningen'); $$;

create or replace function public.get_uurtarief_calculator_stats()
returns table (period text, count bigint)
language sql security definer set search_path = public
as $$ select * from get_tool_log_stats('factuurbaas_uurtarief_calculator'); $$;

create or replace function public.get_uurtarief_naar_inkomen_stats()
returns table (period text, count bigint)
language sql security definer set search_path = public
as $$ select * from get_tool_log_stats('factuurbaas_uurtarief_naar_inkomen'); $$;

create or replace function public.get_factuurnummer_generator_stats()
returns table (period text, count bigint)
language sql security definer set search_path = public
as $$ select * from get_tool_log_stats('factuurbaas_factuurnummer_generator'); $$;

create or replace function public.get_marge_calculator_stats()
returns table (period text, count bigint)
language sql security definer set search_path = public
as $$ select * from get_tool_log_stats('factuurbaas_marge_calculator'); $$;

create or replace function public.get_betaaltermijn_calculator_stats()
returns table (period text, count bigint)
language sql security definer set search_path = public
as $$ select * from get_tool_log_stats('factuurbaas_betaaltermijn_calculator'); $$;

create or replace function public.get_kor_calculator_stats()
returns table (period text, count bigint)
language sql security definer set search_path = public
as $$ select * from get_tool_log_stats('factuurbaas_kor_calculator'); $$;

-- ─── 6. Admin content tables ──────────────────────────────────────────────────

create table if not exists public.blog_post_listings (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  image_url text,
  external_url text not null,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.blog_post_listings enable row level security;

drop policy if exists "blog_listings_public_read" on public.blog_post_listings;
create policy "blog_listings_public_read"
  on public.blog_post_listings for select
  to anon, authenticated
  using (is_published = true or true);

-- Authenticated full CRUD for admin (admin UI uses anon key + admin sessionStorage;
-- tighten later with a dedicated admin role if needed)
drop policy if exists "blog_listings_auth_all" on public.blog_post_listings;
create policy "blog_listings_auth_all"
  on public.blog_post_listings for all
  to authenticated
  using (true) with check (true);

create table if not exists public.managed_blog_links (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  url text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.managed_blog_links enable row level security;

drop policy if exists "managed_links_public_read" on public.managed_blog_links;
create policy "managed_links_public_read"
  on public.managed_blog_links for select
  to anon, authenticated
  using (true);

drop policy if exists "managed_links_auth_all" on public.managed_blog_links;
create policy "managed_links_auth_all"
  on public.managed_blog_links for all
  to authenticated
  using (true) with check (true);

-- Optional public image buckets (guide/blog images can stay on old project URLs)
insert into storage.buckets (id, name, public)
values ('Factuurbaas', 'Factuurbaas', true)
on conflict (id) do nothing;

insert into storage.buckets (id, name, public)
values ('Blogs', 'Blogs', true)
on conflict (id) do nothing;
