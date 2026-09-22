-- Run once in Supabase SQL Editor — PWA / "install app" counts.
-- Safe to re-run (IF NOT EXISTS / drop policy if exists).

create table if not exists public.factuurbaas_pwa_installs (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  platform text,
  user_id uuid references auth.users (id) on delete set null
);

create index if not exists factuurbaas_pwa_installs_created_at_idx
  on public.factuurbaas_pwa_installs (created_at desc);

alter table public.factuurbaas_pwa_installs enable row level security;

drop policy if exists "Allow anonymous insert" on public.factuurbaas_pwa_installs;
create policy "Allow anonymous insert"
  on public.factuurbaas_pwa_installs
  for insert
  to anon, authenticated
  with check (true);

drop policy if exists "Allow authenticated read" on public.factuurbaas_pwa_installs;
create policy "Allow authenticated read"
  on public.factuurbaas_pwa_installs
  for select
  to authenticated
  using (true);

create or replace function public.get_pwa_install_stats()
returns table (period text, count bigint)
language sql
security definer
set search_path = public
as $$
  select * from get_tool_log_stats('factuurbaas_pwa_installs');
$$;
