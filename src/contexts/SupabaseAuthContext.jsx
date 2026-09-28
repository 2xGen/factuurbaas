import React, { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';
import { supabase } from '@/lib/customSupabaseClient';
import { friendlyAuthError } from '@/lib/authSideEffects';
import { useToast } from '@/components/ui/use-toast';

const AuthContext = createContext(undefined);
const AUTH_INIT_TIMEOUT_MS = 12_000;

function getRedirectOrigin() {
  if (typeof window !== 'undefined') return window.location.origin;
  return process.env.NEXT_PUBLIC_SITE_URL || 'https://factuurbaas.nl';
}

export const AuthProvider = ({ children }) => {
  const { toast } = useToast();
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleSession = useCallback((nextSession) => {
    setSession(nextSession);
    setUser(nextSession?.user ?? null);
    setLoading(false);
  }, []);

  useEffect(() => {
    let mounted = true;

    const safetyTimeout = setTimeout(() => {
      if (mounted) setLoading(false);
    }, AUTH_INIT_TIMEOUT_MS);

    (async () => {
      try {
        const {
          data: { session: current },
        } = await supabase.auth.getSession();
        if (!mounted) return;

        if (!current) {
          handleSession(null);
          return;
        }

        const {
          data: { user: verified },
          error,
        } = await supabase.auth.getUser();
        if (!mounted) return;

        if (error || !verified) {
          // Stale/invalid refresh tokens are common after storage races — clear locally.
          await supabase.auth.signOut({ scope: 'local' });
          handleSession(null);
          return;
        }

        handleSession(current);
      } catch (err) {
        console.warn('Auth init failed:', err?.message || err);
        if (mounted) handleSession(null);
      } finally {
        clearTimeout(safetyTimeout);
      }
    })();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      handleSession(nextSession);
    });

    return () => {
      mounted = false;
      clearTimeout(safetyTimeout);
      subscription.unsubscribe();
    };
  }, [handleSession]);

  const signInWithGoogle = useCallback(
    async (redirectPath = '/dashboard') => {
      const redirectTo = `${getRedirectOrigin()}/auth/callback?next=${encodeURIComponent(redirectPath)}`;
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo,
          // Avoid forcing consent every login — reduces invalid_grant / code reuse issues.
          queryParams: { access_type: 'offline', prompt: 'select_account' },
        },
      });

      if (error) {
        toast({
          variant: 'destructive',
          title: 'Inloggen mislukt',
          description: friendlyAuthError(error),
        });
      }

      return { error };
    },
    [toast]
  );

  const signIn = useCallback(
    async (email, password) => {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (error) {
        toast({
          variant: 'destructive',
          title: 'Inloggen mislukt',
          description: friendlyAuthError(error),
        });
        return { data: null, error };
      }

      return { data, error: null };
    },
    [toast]
  );

  const signUp = useCallback(
    async (email, password, redirectPath = '/dashboard') => {
      const emailRedirectTo = `${getRedirectOrigin()}/auth/callback?next=${encodeURIComponent(redirectPath)}`;
      const { data, error } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: { emailRedirectTo },
      });

      if (error) {
        toast({
          variant: 'destructive',
          title: 'Registreren mislukt',
          description: friendlyAuthError(error),
        });
        return { data: null, error, needsEmailConfirmation: false };
      }

      // Supabase may return a user with empty identities when the email is already taken
      // (to avoid account enumeration) — treat as "check email" / already exists.
      const identities = data?.user?.identities;
      if (Array.isArray(identities) && identities.length === 0) {
        const already = new Error('User already registered');
        toast({
          variant: 'destructive',
          title: 'Account bestaat al',
          description: friendlyAuthError(already),
        });
        return { data: null, error: already, needsEmailConfirmation: false };
      }

      const needsEmailConfirmation = !data?.session;
      return { data, error: null, needsEmailConfirmation };
    },
    [toast]
  );

  const signOut = useCallback(async () => {
    // Global revoke fails when the auth user was already deleted (account delete).
    const { error } = await supabase.auth.signOut({ scope: 'global' });
    if (error) {
      await supabase.auth.signOut({ scope: 'local' });
      handleSession(null);

      const msg = error.message || '';
      const sessionAlreadyGone =
        /jwt does not exist|sub claim|session_not_found|user not found|User from.*jwt/i.test(
          msg
        );
      if (!sessionAlreadyGone) {
        toast({
          variant: 'destructive',
          title: 'Uitloggen mislukt',
          description: msg || 'Er ging iets mis.',
        });
        return { error };
      }
    }
    return { error: null };
  }, [toast, handleSession]);

  const value = useMemo(
    () => ({
      user,
      session,
      loading,
      signInWithGoogle,
      signIn,
      signUp,
      signOut,
    }),
    [user, session, loading, signInWithGoogle, signIn, signUp, signOut]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
