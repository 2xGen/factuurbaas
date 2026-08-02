-- Welcome email tracking (Resend)
-- Run in Supabase SQL Editor once.

alter table public.profiles
  add column if not exists welcome_email_sent_at timestamptz;

-- Existing accounts: don't send a welcome blast on next login
update public.profiles
set welcome_email_sent_at = coalesce(welcome_email_sent_at, now())
where welcome_email_sent_at is null;
