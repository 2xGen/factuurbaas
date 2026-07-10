-- Run once in Supabase SQL Editor — tool usage tracking for all FactuurBaas tools.
--
-- INVOICES: factuurbaas_invoices_created already exists as a VIEW (backed by
-- invoice_creations_log). This script does NOT modify it. The app inserts into
-- invoice_creations_log and reads the view in the admin dashboard.
--
-- All other tools use factuurbaas_* tables below (id + created_at, anonymous inserts).

-- ─── Tables ───────────────────────────────────────────────────────────────────

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

-- ─── Indexes ────────────────────────────────────────────────────────────────

create index if not exists factuurbaas_offertes_created_at_idx
  on public.factuurbaas_offertes_created (created_at desc);
create index if not exists factuurbaas_btw_berekeningen_created_at_idx
  on public.factuurbaas_btw_berekeningen (created_at desc);
create index if not exists factuurbaas_uurtarief_calculator_created_at_idx
  on public.factuurbaas_uurtarief_calculator (created_at desc);
create index if not exists factuurbaas_uurtarief_naar_inkomen_created_at_idx
  on public.factuurbaas_uurtarief_naar_inkomen (created_at desc);
create index if not exists factuurbaas_factuurnummer_generator_created_at_idx
  on public.factuurbaas_factuurnummer_generator (created_at desc);
create index if not exists factuurbaas_marge_calculator_created_at_idx
  on public.factuurbaas_marge_calculator (created_at desc);
create index if not exists factuurbaas_betaaltermijn_calculator_created_at_idx
  on public.factuurbaas_betaaltermijn_calculator (created_at desc);
create index if not exists factuurbaas_kor_calculator_created_at_idx
  on public.factuurbaas_kor_calculator (created_at desc);

-- ─── RLS + insert/read policies ─────────────────────────────────────────────

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

-- ─── Stats helper + per-tool RPCs (admin dashboard) ─────────────────────────

create or replace function public.get_tool_log_stats(table_name text)
returns table (period text, count bigint)
language plpgsql
security definer
set search_path = public
as $$
declare
  sql text;
begin
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
as $$ select * from get_tool_log_stats('factuurbaas_invoices_created'); $$;

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
