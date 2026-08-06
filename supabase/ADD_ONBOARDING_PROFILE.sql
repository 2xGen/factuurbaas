-- =============================================================================
-- FactuurBaas — soft onboarding (branche + partnership)
-- Run in Supabase → SQL Editor
-- =============================================================================

alter table public.profiles
  add column if not exists industry text;

alter table public.profiles
  add column if not exists industry_other text;

alter table public.profiles
  add column if not exists billing_style text;

alter table public.profiles
  add column if not exists partnership_open text;

-- Set when user completes or skips the soft onboarding prompt
alter table public.profiles
  add column if not exists onboarding_completed_at timestamptz;
