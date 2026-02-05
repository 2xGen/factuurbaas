import React, { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { PlusCircle, Trash2, Edit3, ExternalLink, Loader2, Image as ImageIcon } from 'lucide-react';
import { Switch } from "@/components/ui/switch";

const BlogListingsSection = () => {
  const { toast } = useToast();
  const [blogListings, setBlogListings] = useState([]);
  const [isLoadingBlogListings, setIsLoadingBlogListings] = useState(false);
  const [newListingTitle, setNewListingTitle] = useState('');
  const [newListingImageUrl, setNewListingImageUrl] = useState('');
  const [newListingExternalUrl, setNewListingExternalUrl] = useState('');
  const [editingListing, setEditingListing] = useState(null);

  const fetchBlogListings = useCallback(async () => {
    setIsLoadingBlogListings(true);
    try {
      const { data, error } = await supabase
        .from('blog_post_listings')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      setBlogListings(data || []);
    } catch (error) {
      toast({ title: "Fout bij laden blog listings", description: error.message, variant: "destructive" });
    } finally {
      setIsLoadingBlogListings(false);
    }
  }, [toast]);

  useEffect(() => {
    fetchBlogListings();
  }, [fetchBlogListings]);

  const handleAddBlogListing = async () => {
    if (!newListingTitle.trim() || !newListingExternalUrl.trim()) {
      toast({ title: "Validatie Fout", description: "Titel en Externe URL zijn verplicht.", variant: "destructive" });
      return;
    }
    if (newListingImageUrl.trim() && !newListingImageUrl.startsWith('http')) {
         toast({ title: "Validatie Fout", description: "Afbeelding URL moet een geldige URL zijn.", variant: "destructive" });
        return;
    }

    try {
      const { data, error } = await supabase
        .from('blog_post_listings')
        .insert([{ 
          title: newListingTitle, 
          image_url: newListingImageUrl || null, 
          external_url: newListingExternalUrl,
          is_published: true 
        }])
        .select();
      if (error) throw error;
      setBlogListings(prev => [data[0], ...prev]);
      setNewListingTitle('');
      setNewListingImageUrl('');
      setNewListingExternalUrl('');
      toast({ title: "Blog Listing Toegevoegd", description: "Blog listing succesvol aangemaakt." });
    } catch (error) {
      toast({ title: "Fout bij toevoegen listing", description: error.message, variant: "destructive" });
    }
  };

  const handleUpdateBlogListing = async () => {
     if (!editingListing || !editingListing.title.trim() || !editingListing.external_url.trim()) {
      toast({ title: "Validatie Fout", description: "Titel en Externe URL zijn verplicht.", variant: "destructive" });
      return;
    }
    if (editingListing.image_url && editingListing.image_url.trim() && !editingListing.image_url.startsWith('http')) {
         toast({ title: "Validatie Fout", description: "Afbeelding URL moet een geldige URL zijn.", variant: "destructive" });
        return;
    }

    try {
      const { data, error } = await supabase
        .from('blog_post_listings')
        .update({ 
          title: editingListing.title, 
          image_url: editingListing.image_url || null,
          external_url: editingListing.external_url,
          is_published: editingListing.is_published,
          updated_at: new Date().toISOString()
        })
        .eq('id', editingListing.id)
        .select();
      if (error) throw error;
      setBlogListings(prev => prev.map(item => (item.id === data[0].id ? data[0] : item)));
      setEditingListing(null);
      toast({ title: "Blog Listing Bijgewerkt", description: "Listing succesvol bijgewerkt." });
    } catch (error) {
      toast({ title: "Fout bij bijwerken listing", description: error.message, variant: "destructive" });
    }
  };

  const handleDeleteBlogListing = async (listingId) => {
    try {
      const { error } = await supabase.from('blog_post_listings').delete().eq('id', listingId);
      if (error) throw error;
      setBlogListings(prev => prev.filter(item => item.id !== listingId));
      toast({ title: "Blog Listing Verwijderd" });
    } catch (error) {
      toast({ title: "Fout bij verwijderen listing", description: error.message, variant: "destructive" });
    }
  };

  const togglePublishStatus = async (listing) => {
    try {
      const { data, error } = await supabase
        .from('blog_post_listings')
        .update({ is_published: !listing.is_published, updated_at: new Date().toISOString() })
        .eq('id', listing.id)
        .select();
      if (error) throw error;
      setBlogListings(prev => prev.map(item => (item.id === data[0].id ? data[0] : item)));
      toast({ title: "Publicatiestatus gewijzigd" });
    } catch (error) {
      toast({ title: "Fout bij wijzigen status", description: error.message, variant: "destructive" });
    }
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl text-sky-700 font-heading flex items-center">
          <ImageIcon size={28} className="mr-3 text-sky-600" />
          Beheer Blog Pagina (`/blog`)
        </CardTitle>
        <CardDescription>Content voor de blog overzichtspagina op `factuurbaas.nl`.</CardDescription>
      </CardHeader>
      <CardContent>
         <Dialog>
          <DialogTrigger asChild>
            <Button className="mb-6 bg-sky-600 hover:bg-sky-700 text-white">
              <PlusCircle size={18} className="mr-2" /> Blog Listing Toevoegen
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader><DialogTitle>Nieuwe Blog Listing</DialogTitle><DialogDescription>Voeg een nieuw blog item toe voor de `/blog` pagina.</DialogDescription></DialogHeader>
            <div className="space-y-4 py-4">
              <div><Label htmlFor="newListingTitleBlog">Titel</Label><Input id="newListingTitleBlog" value={newListingTitle} onChange={e => setNewListingTitle(e.target.value)} placeholder="Blog Titel" /></div>
              <div><Label htmlFor="newListingImageUrlBlog">Afbeelding URL (optioneel)</Label><Input id="newListingImageUrlBlog" type="url" value={newListingImageUrl} onChange={e => setNewListingImageUrl(e.target.value)} placeholder="https://voorbeeld.com/afbeelding.jpg" /></div>
              <div><Label htmlFor="newListingExternalUrlBlog">Externe URL (naar `blog.factuurbaas.nl`)</Label><Input id="newListingExternalUrlBlog" type="url" value={newListingExternalUrl} onChange={e => setNewListingExternalUrl(e.target.value)} placeholder="https://blog.factuurbaas.nl/volledig-artikel" /></div>
            </div>
            <DialogFooter>
              <DialogClose asChild><Button variant="outline">Annuleren</Button></DialogClose>
              <Button onClick={() => { handleAddBlogListing(); if (newListingTitle) document.dispatchEvent(new KeyboardEvent('keydown', {'key': 'Escape'})); }}>Toevoegen</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        
        {isLoadingBlogListings ? <Loader2 className="animate-spin h-8 w-8 text-sky-600 mx-auto mt-4" /> : (
          blogListings.length > 0 ? (
            <div className="mt-6 max-h-[600px] overflow-y-auto">
              <Table>
                <TableHeader><TableRow><TableHead>Titel</TableHead><TableHead>Afbeelding</TableHead><TableHead>Externe URL</TableHead><TableHead>Gepubliceerd</TableHead><TableHead>Acties</TableHead></TableRow></TableHeader>
                <TableBody>
                  {blogListings.map(listing => (
                    <TableRow key={listing.id}>
                      <TableCell className="font-semibold">{listing.title}</TableCell>
                      <TableCell>
                        {listing.image_url ? 
                          <img-replace src={listing.image_url} alt={listing.title} className="h-10 w-16 object-cover rounded" /> : 
                          <span className="text-xs text-slate-400">Geen</span>}
                      </TableCell>
                      <TableCell><a href={listing.external_url} target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline truncate max-w-xs inline-block">{listing.external_url} <ExternalLink size={14} className="inline ml-1" /></a></TableCell>
                      <TableCell>
                        <Switch
                          checked={listing.is_published}
                          onCheckedChange={() => togglePublishStatus(listing)}
                          aria-label="Publiceer status"
                        />
                      </TableCell>
                      <TableCell className="space-x-2">
                        <Dialog>
                          <DialogTrigger asChild>
                             <Button variant="outline" size="sm" onClick={() => setEditingListing({...listing})}><Edit3 size={16} className="text-amber-600" /></Button>
                          </DialogTrigger>
                          {editingListing && editingListing.id === listing.id && (
                          <DialogContent className="sm:max-w-lg">
                            <DialogHeader><DialogTitle>Bewerk Blog Listing</DialogTitle></DialogHeader>
                            <div className="space-y-4 py-4">
                              <div><Label htmlFor="editListingTitleBlog">Titel</Label><Input id="editListingTitleBlog" value={editingListing.title} onChange={e => setEditingListing(prev => ({...prev, title: e.target.value}))} /></div>
                              <div><Label htmlFor="editListingImageUrlBlog">Afbeelding URL</Label><Input id="editListingImageUrlBlog" type="url" value={editingListing.image_url || ''} onChange={e => setEditingListing(prev => ({...prev, image_url: e.target.value}))} /></div>
                              <div><Label htmlFor="editListingExternalUrlBlog">Externe URL</Label><Input id="editListingExternalUrlBlog" type="url" value={editingListing.external_url} onChange={e => setEditingListing(prev => ({...prev, external_url: e.target.value}))} /></div>
                              <div className="flex items-center space-x-2"><Switch id="editListingPublishedBlog" checked={editingListing.is_published} onCheckedChange={checked => setEditingListing(prev => ({...prev, is_published: checked}))} /><Label htmlFor="editListingPublishedBlog">Gepubliceerd</Label></div>
                            </div>
                            <DialogFooter>
                              <DialogClose asChild><Button variant="outline" onClick={() => setEditingListing(null)}>Annuleren</Button></DialogClose>
                              <Button onClick={() => { handleUpdateBlogListing(); if (editingListing) document.dispatchEvent(new KeyboardEvent('keydown', {'key': 'Escape'})); }}>Opslaan</Button>
                            </DialogFooter>
                          </DialogContent>
                          )}
                        </Dialog>
                        <Button variant="outline" size="sm" onClick={() => handleDeleteBlogListing(listing.id)}><Trash2 size={16} className="text-red-600" /></Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : <p className="text-slate-500 mt-4">Nog geen blog listings toegevoegd.</p>
        )}
      </CardContent>
    </Card>
  );
};

export default BlogListingsSection;