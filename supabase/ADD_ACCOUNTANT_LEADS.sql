-- Bookkeeper lead form (/boekhouder-vinden).
-- Only the server (service role) can read or write these rows.
-- Run in Supabase → SQL Editor.

create table if not exists public.accountant_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  company_form text not null,
  services text[] not null default '{}',
  company_name text not null,
  description text,
  contact_name text not null,
  city text not null,
  email text not null,
  phone text not null,
  source text not null default 'boekhouder-vinden',
  business_type text,
  kvk_confirmed boolean not null default false,
  source_page text,
  source_type text,
  partner text,
  utm jsonb
);

alter table public.accountant_leads add column if not exists business_type text;
alter table public.accountant_leads add column if not exists kvk_confirmed boolean not null default false;
alter table public.accountant_leads add column if not exists source_page text;
alter table public.accountant_leads add column if not exists source_type text;
alter table public.accountant_leads add column if not exists partner text;
alter table public.accountant_leads add column if not exists utm jsonb;
alter table public.accountant_leads alter column services set default '{}';

alter table public.accountant_leads enable row level security;

revoke all on table public.accountant_leads from public, anon, authenticated;
grant all on table public.accountant_leads to service_role;

notify pgrst, 'reload schema';
