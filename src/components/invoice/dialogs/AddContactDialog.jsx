import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from 'lucide-react';

const AddContactDialog = ({ isOpen, onClose, onAddContact, onSuccess }) => {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    address: '',
    company_name: '', 
  });
  const [isSaving, setIsSaving] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!contactData.name) {
      toast({ title: "Naam vereist", description: "Vul alsjeblieft een naam in voor het contact.", variant: "destructive" });
      return;
    }
    setIsSaving(true);
    const result = await onAddContact(contactData);
    setIsSaving(false);

    if (result && !result.error) {
      toast({ title: "Contact Opgeslagen", description: `${contactData.name} is toegevoegd aan je contacten.` });
      if (onSuccess) onSuccess(result);
      setContactData({ name: '', email: '', address: '', company_name: '' }); // Reset form
      onClose();
    } else {
      // Error toast is handled by AppContext
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent className="sm:max-w-lg bg-white rounded-lg shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-800">Nieuw Contact Toevoegen</DialogTitle>
          <DialogDescription className="text-sm text-gray-600">
            Voer de gegevens in van je nieuwe contactpersoon.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="py-4 grid gap-4">
            <div>
              <Label htmlFor="contact-name" className="text-sm font-medium text-gray-700">Naam <span className="text-red-500">*</span></Label>
              <Input id="contact-name" name="name" value={contactData.name} onChange={handleChange} placeholder="Volledige naam" required className="mt-1" />
            </div>
            <div>
              <Label htmlFor="contact-email" className="text-sm font-medium text-gray-700">E-mail</Label>
              <Input id="contact-email" name="email" type="email" value={contactData.email} onChange={handleChange} placeholder="email@voorbeeld.com" className="mt-1" />
            </div>
             <div>
              <Label htmlFor="contact-company-name" className="text-sm font-medium text-gray-700">Bedrijfsnaam (optioneel)</Label>
              <Input id="contact-company-name" name="company_name" value={contactData.company_name} onChange={handleChange} placeholder="Naam van het bedrijf" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="contact-address" className="text-sm font-medium text-gray-700">Adres</Label>
              <Textarea id="contact-address" name="address" value={contactData.address} onChange={handleChange} placeholder="Straat, Postcode Plaats" rows={3} className="mt-1" />
            </div>
          </div>
          <DialogFooter className="mt-2">
            <DialogClose asChild>
              <Button type="button" variant="outline" disabled={isSaving}>Annuleren</Button>
            </DialogClose>
            <Button type="submit" disabled={isSaving}>
              {isSaving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
              {isSaving ? "Opslaan..." : "Contact Opslaan"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddContactDialog;