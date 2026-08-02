-- Privacy consent tracking (login / account).
-- Run in Supabase SQL editor.

alter table public.profiles
  add column if not exists privacy_accepted_at timestamptz;

alter table public.profiles
  add column if not exists privacy_policy_version text;

comment on column public.profiles.privacy_accepted_at is
  'When the user accepted the privacy policy / terms (checkbox before Google login or on profile).';

comment on column public.profiles.privacy_policy_version is
  'Version string of the privacy policy the user accepted (e.g. 2026-08-01).';

notify pgrst, 'reload schema';
