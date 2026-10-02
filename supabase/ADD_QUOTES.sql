-- FactuurBaas: saved quotes (offertes) with strict RLS.
-- Run once in Supabase SQL Editor after accounts_invoices.sql.
--
-- Security: every policy scopes to auth.uid(). Anon has ZERO access to quote content.

create table if not exists public.quotes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  quote_number text,
  quote_date timestamptz,
  valid_until timestamptz,
  status text not null default 'concept'
    check (status in ('concept', 'sent', 'accepted', 'rejected', 'converted')),
  company_details jsonb not null default '{}'::jsonb,
  client_details jsonb not null default '{}'::jsonb,
  items jsonb not null default '[]'::jsonb,
  options jsonb not null default '{}'::jsonb,
  tax_rate numeric default 21,
  tax text default '21',
  custom_tax_rate numeric,
  tax_included boolean default false,
  hours_worked jsonb not null default '[]'::jsonb,
  amount numeric default 0,
  notes text,
  terms text,
  layout text default 'plain',
  pdf_language text default 'nl',
  logo text,
  activity_log jsonb not null default '[]'::jsonb,
  total_excl numeric not null default 0,
  total_btw numeric not null default 0,
  total_incl numeric not null default 0,
  converted_invoice_id uuid references public.invoices (id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists quotes_user_created_idx
  on public.quotes (user_id, created_at desc);

create index if not exists quotes_user_status_idx
  on public.quotes (user_id, status);

alter table public.quotes enable row level security;

drop policy if exists "quotes_select_own" on public.quotes;
create policy "quotes_select_own"
  on public.quotes for select
  to authenticated
  using (user_id = auth.uid());

drop policy if exists "quotes_insert_own" on public.quotes;
create policy "quotes_insert_own"
  on public.quotes for insert
  to authenticated
  with check (user_id = auth.uid());

drop policy if exists "quotes_update_own" on public.quotes;
create policy "quotes_update_own"
  on public.quotes for update
  to authenticated
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

drop policy if exists "quotes_delete_own" on public.quotes;
create policy "quotes_delete_own"
  on public.quotes for delete
  to authenticated
  using (user_id = auth.uid());

-- Idempotent upgrades if an earlier ADD_QUOTES was already applied
alter table public.quotes add column if not exists tax text default '21';
alter table public.quotes add column if not exists custom_tax_rate numeric;
alter table public.quotes add column if not exists hours_worked jsonb default '[]'::jsonb;
alter table public.quotes add column if not exists amount numeric default 0;

update public.quotes set hours_worked = '[]'::jsonb where hours_worked is null;
update public.quotes set amount = 0 where amount is null;

