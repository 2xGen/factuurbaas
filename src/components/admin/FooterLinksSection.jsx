'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { PlusCircle, Trash2, Edit3, Link as LinkIcon, ExternalLink, Loader2 } from 'lucide-react';

const FooterLinksSection = () => {
  const { toast } = useToast();
  const [managedLinks, setManagedLinks] = useState([]);
  const [isLoadingManagedLinks, setIsLoadingManagedLinks] = useState(false);
  const [newLinkTitle, setNewLinkTitle] = useState('');
  const [newLinkUrl, setNewLinkUrl] = useState('');
  const [editingLink, setEditingLink] = useState(null);

  const fetchManagedLinks = useCallback(async () => {
    setIsLoadingManagedLinks(true);
    try {
      const { data, error } = await supabase
        .from('managed_blog_links')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      setManagedLinks(data || []);
    } catch (error) {
      toast({ title: "Fout bij laden footer blog links", description: error.message, variant: "destructive" });
    } finally {
      setIsLoadingManagedLinks(false);
    }
  }, [toast]);

  useEffect(() => {
    fetchManagedLinks();
  }, [fetchManagedLinks]);

  const handleAddManagedLink = async () => {
    if (!newLinkTitle.trim() || !newLinkUrl.trim()) {
      toast({ title: "Validatie Fout", description: "Titel en URL zijn verplicht.", variant: "destructive" });
      return;
    }
    try {
      const { data, error } = await supabase
        .from('managed_blog_links')
        .insert([{ title: newLinkTitle, url: newLinkUrl }])
        .select();
      if (error) throw error;
      setManagedLinks(prev => [data[0], ...prev]);
      setNewLinkTitle('');
      setNewLinkUrl('');
      toast({ title: "Blog Link Toegevoegd", description: "Link succesvol opgeslagen voor footer." });
    } catch (error) {
      toast({ title: "Fout bij toevoegen link", description: error.message, variant: "destructive" });
    }
  };

  const handleUpdateManagedLink = async () => {
    if (!editingLink || !editingLink.title.trim() || !editingLink.url.trim()) {
      toast({ title: "Validatie Fout", description: "Titel en URL zijn verplicht.", variant: "destructive" });
      return;
    }
    try {
      const { data, error } = await supabase
        .from('managed_blog_links')
        .update({ title: editingLink.title, url: editingLink.url, updated_at: new Date().toISOString() })
        .eq('id', editingLink.id)
        .select();
      if (error) throw error;
      setManagedLinks(prev => prev.map(link => (link.id === data[0].id ? data[0] : link)));
      setEditingLink(null);
      toast({ title: "Blog Link Bijgewerkt", description: "Link succesvol bijgewerkt." });
    } catch (error) {
      toast({ title: "Fout bij bijwerken link", description: error.message, variant: "destructive" });
    }
  };

  const handleDeleteManagedLink = async (linkId) => {
    try {
      const { error } = await supabase.from('managed_blog_links').delete().eq('id', linkId);
      if (error) throw error;
      setManagedLinks(prev => prev.filter(link => link.id !== linkId));
      toast({ title: "Blog Link Verwijderd" });
    } catch (error) {
      toast({ title: "Fout bij verwijderen link", description: error.message, variant: "destructive" });
    }
  };

  return (
    <Card className="mb-8 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl text-sky-700 font-heading flex items-center">
          <LinkIcon size={28} className="mr-3 text-sky-600" />
          Beheer Footer Blog Links
        </CardTitle>
        <CardDescription>Links die in de website footer getoond worden naar `blog.factuurbaas.nl`.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div>
            <Label htmlFor="newLinkTitleFooter">Link Titel</Label>
            <Input id="newLinkTitleFooter" value={newLinkTitle} onChange={e => setNewLinkTitle(e.target.value)} placeholder="Titel van blog post" />
          </div>
          <div>
            <Label htmlFor="newLinkUrlFooter">Link URL</Label>
            <Input id="newLinkUrlFooter" type="url" value={newLinkUrl} onChange={e => setNewLinkUrl(e.target.value)} placeholder="https://blog.factuurbaas.nl/artikel-url" />
          </div>
        </div>
        <Button onClick={handleAddManagedLink} className="bg-sky-600 hover:bg-sky-700 text-white">
          <PlusCircle size={18} className="mr-2" /> Link Toevoegen
        </Button>
        
        {isLoadingManagedLinks ? <Loader2 className="animate-spin h-8 w-8 text-sky-600 mx-auto mt-4" /> : (
          managedLinks.length > 0 ? (
            <div className="mt-6 max-h-96 overflow-y-auto">
              <Table>
                <TableHeader><TableRow><TableHead>Titel</TableHead><TableHead>URL</TableHead><TableHead>Acties</TableHead></TableRow></TableHeader>
                <TableBody>
                  {managedLinks.map(link => (
                    <TableRow key={link.id}>
                      <TableCell>{link.title}</TableCell>
                      <TableCell><a href={link.url} target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline truncate max-w-xs inline-block">{link.url} <ExternalLink size={14} className="inline ml-1" /></a></TableCell>
                      <TableCell className="space-x-2">
                         <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" onClick={() => setEditingLink({...link})}><Edit3 size={16} className="text-amber-600" /></Button>
                          </DialogTrigger>
                          {editingLink && editingLink.id === link.id && (
                          <DialogContent>
                            <DialogHeader><DialogTitle>Bewerk Footer Blog Link</DialogTitle></DialogHeader>
                            <div className="space-y-4 py-4">
                              <div><Label htmlFor="editLinkTitleFooter">Titel</Label><Input id="editLinkTitleFooter" value={editingLink.title} onChange={e => setEditingLink(prev => ({...prev, title: e.target.value}))} /></div>
                              <div><Label htmlFor="editLinkUrlFooter">URL</Label><Input id="editLinkUrlFooter" type="url" value={editingLink.url} onChange={e => setEditingLink(prev => ({...prev, url: e.target.value}))} /></div>
                            </div>
                            <DialogFooter>
                              <DialogClose asChild><Button variant="outline" onClick={() => setEditingLink(null)}>Annuleren</Button></DialogClose>
                              <Button onClick={() => { handleUpdateManagedLink(); if (editingLink) document.dispatchEvent(new KeyboardEvent('keydown', {'key': 'Escape'})); }}>Opslaan</Button>
                            </DialogFooter>
                          </DialogContent>
                          )}
                        </Dialog>
                        <Button variant="outline" size="sm" onClick={() => handleDeleteManagedLink(link.id)}><Trash2 size={16} className="text-red-600" /></Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : <p className="text-slate-500 mt-4">Nog geen footer links toegevoegd.</p>
        )}
      </CardContent>
    </Card>
  );
};

export default FooterLinksSection;