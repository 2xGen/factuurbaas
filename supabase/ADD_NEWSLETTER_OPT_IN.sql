-- Marketing / newsletter opt-in (optional, separate from required privacy consent).
-- Run in Supabase SQL editor. Default false — no newsletters until MailerLite is wired.

alter table public.profiles
  add column if not exists newsletter_opt_in boolean not null default false;

alter table public.profiles
  add column if not exists newsletter_opt_in_at timestamptz;

comment on column public.profiles.newsletter_opt_in is
  'User opted in to tips/nieuws (marketing). Unchecked by default at signup. No mail sent until mailing provider is connected.';

comment on column public.profiles.newsletter_opt_in_at is
  'When newsletter_opt_in was last set to true (or last changed).';

notify pgrst, 'reload schema';
