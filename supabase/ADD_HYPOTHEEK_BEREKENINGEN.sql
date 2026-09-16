-- Run once in Supabase SQL Editor — usage tracking for hypotheek berekenen zzp.
-- Safe to re-run (IF NOT EXISTS / drop policy if exists).

create table if not exists public.factuurbaas_hypotheek_berekeningen (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now()
);

create index if not exists factuurbaas_hypotheek_berekeningen_created_at_idx
  on public.factuurbaas_hypotheek_berekeningen (created_at desc);

alter table public.factuurbaas_hypotheek_berekeningen enable row level security;

drop policy if exists "Allow anonymous insert" on public.factuurbaas_hypotheek_berekeningen;
create policy "Allow anonymous insert"
  on public.factuurbaas_hypotheek_berekeningen
  for insert
  to anon, authenticated
  with check (true);

drop policy if exists "Allow authenticated read" on public.factuurbaas_hypotheek_berekeningen;
create policy "Allow authenticated read"
  on public.factuurbaas_hypotheek_berekeningen
  for select
  to authenticated
  using (true);

create or replace function public.get_hypotheek_berekening_stats()
returns table (period text, count bigint)
language sql
security definer
set search_path = public
as $$
  select * from get_tool_log_stats('factuurbaas_hypotheek_berekeningen');
$$;
