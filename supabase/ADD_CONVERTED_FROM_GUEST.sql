-- Guest → account attribution for retention metrics.
-- Run in Supabase SQL editor after FULL_BOOTSTRAP (or include in new projects).

alter table public.profiles
  add column if not exists converted_from_guest boolean not null default false;

comment on column public.profiles.converted_from_guest is
  'True when user signed up after creating a guest invoice PDF (soft attribution via localStorage).';
