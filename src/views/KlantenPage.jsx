'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  FilePlus2,
  Loader2,
  Pencil,
  Plus,
  Search,
  Trash2,
  Users,
} from 'lucide-react';
import ClientFormDialog from '@/components/klanten/ClientFormDialog';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { supabase } from '@/lib/customSupabaseClient';
import {
  clientDisplayName,
  deleteClient,
  fetchUserClients,
  upsertClient,
} from '@/lib/clientPersistence';

export default function KlantenPage() {
  const router = useRouter();
  const { toast } = useToast();
  const { user, loading: authLoading } = useAuth();

  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingClient, setEditingClient] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  const loadClients = useCallback(async () => {
    if (!user?.id) {
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    try {
      const data = await fetchUserClients(supabase, user.id);
      setClients(data);
    } catch (error) {
      toast({
        title: 'Fout bij laden klanten',
        description: error.message || 'Er is iets misgegaan.',
        variant: 'destructive',
      });
      setClients([]);
    } finally {
      setIsLoading(false);
    }
  }, [user, toast]);

  useEffect(() => {
    if (authLoading) return;
    if (user?.id) loadClients();
    else setIsLoading(false);
  }, [user, authLoading, loadClients]);

  const filtered = useMemo(() => {
    const q = searchTerm.toLowerCase().trim();
    if (!q) return clients;
    return clients.filter((c) =>
      [c.companyName, c.contactPerson, c.email, c.phone, c.kvk, c.btw, c.notes, c.street, c.postalCode, c.city, c.country]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(q))
    );
  }, [clients, searchTerm]);

  const openCreate = () => {
    setEditingClient(null);
    setDialogOpen(true);
  };

  const openEdit = (client) => {
    setEditingClient(client);
    setDialogOpen(true);
  };

  const handleSave = async (form) => {
    if (!user) return;
    setIsSaving(true);
    try {
      const saved = await upsertClient(supabase, user.id, {
        ...form,
        id: editingClient?.id,
      });
      setClients((prev) => {
        const without = prev.filter((c) => c.id !== saved.id);
        return [...without, saved].sort((a, b) =>
          clientDisplayName(a).localeCompare(clientDisplayName(b), 'nl')
        );
      });
      setDialogOpen(false);
      setEditingClient(null);
      toast({
        title: editingClient?.id ? 'Klant bijgewerkt' : 'Klant opgeslagen',
        description: clientDisplayName(saved),
      });
    } catch (error) {
      toast({
        title: 'Opslaan mislukt',
        description: error.message || 'Probeer het opnieuw.',
        variant: 'destructive',
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (client) => {
    if (!user) return;
    const ok = window.confirm(
      `Klant “${clientDisplayName(client)}” verwijderen? Dit verwijdert niet bestaande facturen.`
    );
    if (!ok) return;

    setDeletingId(client.id);
    try {
      await deleteClient(supabase, user.id, client.id);
      setClients((prev) => prev.filter((c) => c.id !== client.id));
      toast({ title: 'Klant verwijderd' });
    } catch (error) {
      toast({
        title: 'Verwijderen mislukt',
        description: error.message || 'Probeer het opnieuw.',
        variant: 'destructive',
      });
    } finally {
      setDeletingId(null);
    }
  };

  if (authLoading || (isLoading && user)) {
    return (
      <div className="flex h-[70vh] flex-col items-center justify-center bg-[#f7f8fb]">
        <Loader2 className="mb-4 h-10 w-10 animate-spin text-deep-blue" />
        <p className="text-slate-500">Klanten laden…</p>
      </div>
    );
  }

  if (!user && !authLoading) return null;

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-[#f7f8fb]">
      <div className="container mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <div className="mb-8 space-y-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Beheer
                </p>
                <h1 className="mt-1 font-heading text-2xl font-bold tracking-tight text-deep-blue sm:text-3xl">
                  Klanten
                </h1>
                <p className="mt-1 text-sm text-slate-500">
                  {clients.length} opgeslagen · vul ontvangergegevens in één klik
                </p>
              </div>
              <Button
                onClick={openCreate}
                className="rounded-xl bg-deep-blue px-5 font-semibold shadow-sm hover:bg-deep-blue/90"
              >
                <Plus className="mr-2 h-4 w-4" />
                Nieuwe klant
              </Button>
            </div>

            <div className="relative">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                placeholder="Zoek op naam, email of KvK…"
                className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm shadow-sm outline-none transition focus:border-deep-blue/40 focus:ring-2 focus:ring-deep-blue/10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {!clients.length ? (
            <div className="rounded-2xl border border-dashed border-slate-200 bg-white px-6 py-14 text-center shadow-sm">
              <Users className="mx-auto mb-4 h-12 w-12 text-slate-300" strokeWidth={1.5} />
              <h2 className="font-heading text-xl font-semibold text-deep-blue">Nog geen klanten</h2>
              <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
                Sla klantgegevens op en vul ze later met één klik in op een nieuwe factuur.
              </p>
              <Button
                onClick={openCreate}
                className="mt-6 rounded-xl bg-deep-blue px-5 font-semibold hover:bg-deep-blue/90"
              >
                <Plus className="mr-2 h-4 w-4" />
                Eerste klant toevoegen
              </Button>
            </div>
          ) : filtered.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-white px-6 py-12 text-center shadow-sm">
              <p className="text-slate-500">Geen klanten gevonden voor “{searchTerm}”.</p>
            </div>
          ) : (
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-100 text-[11px] uppercase tracking-wide text-slate-400">
                      <th className="px-4 py-3 font-medium">Klant</th>
                      <th className="px-4 py-3 font-medium">Contact</th>
                      <th className="px-4 py-3 font-medium">Email</th>
                      <th className="px-4 py-3 font-medium text-right">Acties</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((client) => (
                      <tr
                        key={client.id}
                        className="border-b border-slate-50 last:border-0 hover:bg-slate-50/80"
                      >
                        <td className="px-4 py-3.5">
                          <p className="font-medium text-deep-blue">{clientDisplayName(client)}</p>
                          {client.companyName && client.contactPerson && (
                            <p className="text-xs text-slate-500">{client.contactPerson}</p>
                          )}
                        </td>
                        <td className="px-4 py-3.5 text-slate-600">
                          {client.phone || '—'}
                        </td>
                        <td className="px-4 py-3.5 text-slate-600">{client.email || '—'}</td>
                        <td className="px-4 py-3.5">
                          <div className="flex items-center justify-end gap-1">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-8 text-deep-blue hover:bg-deep-blue/5"
                              onClick={() =>
                                router.push(`/create-invoice?clientId=${client.id}`)
                              }
                              title="Factuur maken"
                            >
                              <FilePlus2 className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-8 text-slate-600"
                              onClick={() => openEdit(client)}
                              title="Bewerken"
                            >
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-8 text-red-500 hover:bg-red-50 hover:text-red-600"
                              onClick={() => handleDelete(client)}
                              disabled={deletingId === client.id}
                              title="Verwijderen"
                            >
                              {deletingId === client.id ? (
                                <Loader2 className="h-4 w-4 animate-spin" />
                              ) : (
                                <Trash2 className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <p className="mt-6 text-center text-sm text-slate-500">
            Terug naar{' '}
            <Link href="/dashboard" className="font-medium text-deep-blue hover:underline">
              dashboard
            </Link>
          </p>
        </motion.div>
      </div>

      <ClientFormDialog
        open={dialogOpen}
        onClose={() => {
          setDialogOpen(false);
          setEditingClient(null);
        }}
        onSave={handleSave}
        initialClient={editingClient}
        isSaving={isSaving}
      />
    </div>
  );
}
