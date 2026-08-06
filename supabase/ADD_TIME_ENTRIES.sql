-- =============================================================================
-- FactuurBaas — time entries (uren → factuur)
-- Run in Supabase → SQL Editor
-- =============================================================================

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
