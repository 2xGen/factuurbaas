'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { BookmarkPlus, Loader2, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { supabase } from '@/lib/customSupabaseClient';
import {
  clientDisplayName,
  clientToReceiverDetails,
  fetchUserClients,
  receiverDetailsToClient,
  upsertClient,
} from '@/lib/clientPersistence';

export default function ClientPicker({ receiverDetails, onApply }) {
  const { user } = useAuth();
  const { toast } = useToast();
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [selectedId, setSelectedId] = useState('');

  const load = useCallback(async () => {
    if (!user?.id) return;
    setLoading(true);
    try {
      const data = await fetchUserClients(supabase, user.id);
      setClients(data);
    } catch {
      setClients([]);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    load();
  }, [load]);

  if (!user) return null;

  const handleSelect = (e) => {
    const id = e.target.value;
    setSelectedId(id);
    if (!id) return;
    const client = clients.find((c) => c.id === id);
    if (client) onApply(clientToReceiverDetails(client));
  };

  const handleSaveAsClient = async () => {
    const payload = receiverDetailsToClient(receiverDetails);
    if (!payload.companyName?.trim() && !payload.contactPerson?.trim()) {
      toast({
        title: 'Vul eerst een naam in',
        description: 'Bedrijfsnaam of contactpersoon is nodig om op te slaan.',
        variant: 'destructive',
      });
      return;
    }

    setSaving(true);
    try {
      const saved = await upsertClient(supabase, user.id, payload);
      setClients((prev) => {
        const without = prev.filter((c) => c.id !== saved.id);
        return [...without, saved].sort((a, b) =>
          clientDisplayName(a).localeCompare(clientDisplayName(b), 'nl')
        );
      });
      setSelectedId(saved.id);
      toast({
        title: 'Klant opgeslagen',
        description: `${clientDisplayName(saved)} staat nu onder Klanten.`,
      });
    } catch (error) {
      toast({
        title: 'Opslaan mislukt',
        description: error.message || 'Probeer het opnieuw.',
        variant: 'destructive',
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="mb-4 space-y-2 rounded-xl border border-slate-200 bg-slate-50/80 p-3">
      <div className="flex items-center justify-between gap-2">
        <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
          <User className="h-3.5 w-3.5" />
          Opgeslagen klant
        </label>
        <Link href="/klanten" className="text-xs font-medium text-warm-orange hover:underline">
          Beheer klanten
        </Link>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row">
        <div className="relative min-w-0 flex-1">
          <select
            value={selectedId}
            onChange={handleSelect}
            disabled={loading || !clients.length}
            className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-3 pr-8 text-sm text-deep-blue outline-none focus:border-deep-blue/40 focus:ring-2 focus:ring-deep-blue/10 disabled:opacity-60"
          >
            <option value="">
              {loading
                ? 'Laden…'
                : clients.length
                  ? 'Kies een klant…'
                  : 'Nog geen klanten opgeslagen'}
            </option>
            {clients.map((c) => (
              <option key={c.id} value={c.id}>
                {clientDisplayName(c)}
              </option>
            ))}
          </select>
        </div>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="shrink-0 rounded-lg border-slate-200 bg-white"
          onClick={handleSaveAsClient}
          disabled={saving}
        >
          {saving ? (
            <Loader2 className="mr-1.5 h-3.5 w-3.5 animate-spin" />
          ) : (
            <BookmarkPlus className="mr-1.5 h-3.5 w-3.5" />
          )}
          Opslaan als klant
        </Button>
      </div>
    </div>
  );
}
