-- =============================================================================
-- Lock factuurbaas_emails + page_views so only the server (service role) can
-- read them. Anon/authenticated may still INSERT (waitlist + page-view logger).
-- Run in Supabase → SQL Editor.
-- =============================================================================

-- Waitlist: drop the "any logged-in user can SELECT everything" policy
drop policy if exists "emails_auth_read" on public.factuurbaas_emails;

revoke all on table public.factuurbaas_emails from public;
revoke select, update, delete on table public.factuurbaas_emails from anon, authenticated;
grant insert on table public.factuurbaas_emails to anon, authenticated;

-- Page views: same lock
drop policy if exists "page_views_auth_read" on public.page_views;

revoke all on table public.page_views from public;
revoke select, update, delete on table public.page_views from anon, authenticated;
grant insert on table public.page_views to anon, authenticated;

-- SECURITY DEFINER stats RPCs used to be executable by any authenticated user
revoke all on function public.get_page_view_stats() from public, anon, authenticated;
revoke all on function public.get_page_views_by_path() from public, anon, authenticated;
grant execute on function public.get_page_view_stats() to service_role;
grant execute on function public.get_page_views_by_path() to service_role;

notify pgrst, 'reload schema';
