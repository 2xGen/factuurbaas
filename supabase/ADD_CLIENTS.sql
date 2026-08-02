-- =============================================================================
-- FactuurBaas — clients (klanten) for fast invoicing
-- Run in Supabase → SQL Editor
-- =============================================================================

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
