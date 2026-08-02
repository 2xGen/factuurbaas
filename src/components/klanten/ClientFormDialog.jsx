'use client';

import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import FormInput from '@/components/invoice/formElements/FormInput';
import FormTextarea from '@/components/invoice/formElements/FormTextarea';
import { emptyClient } from '@/lib/clientPersistence';

export default function ClientFormDialog({ open, onClose, onSave, initialClient, isSaving }) {
  const [form, setForm] = useState(emptyClient());

  useEffect(() => {
    if (open) {
      setForm(initialClient ? { ...emptyClient(), ...initialClient } : emptyClient());
    }
  }, [open, initialClient]);

  const setField = (name, value) => setForm((prev) => ({ ...prev, [name]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.companyName?.trim() && !form.contactPerson?.trim()) return;
    onSave(form);
  };

  const canSave = Boolean(form.companyName?.trim() || form.contactPerson?.trim());

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-heading text-deep-blue">
            {initialClient?.id ? 'Klant bewerken' : 'Nieuwe klant'}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-2">
          <FormInput
            label="Bedrijfsnaam"
            name="companyName"
            value={form.companyName}
            onChange={(e) => setField('companyName', e.target.value)}
            placeholder="Naam van het bedrijf"
          />
          <FormInput
            label="Contactpersoon"
            name="contactPerson"
            value={form.contactPerson}
            onChange={(e) => setField('contactPerson', e.target.value)}
            placeholder="Naam contactpersoon"
          />
          <FormInput
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={(e) => setField('email', e.target.value)}
            placeholder="email@klant.nl"
          />
          <FormInput
            label="Telefoon"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => setField('phone', e.target.value)}
            placeholder="+31 6 12345678"
          />
          <FormInput
            label="Straatnaam en nummer"
            name="street"
            value={form.street}
            onChange={(e) => setField('street', e.target.value)}
            placeholder="Bijv. Hoofdstraat 12"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormInput
              label="Postcode"
              name="postalCode"
              value={form.postalCode}
              onChange={(e) => setField('postalCode', e.target.value)}
              placeholder="1234 AB"
            />
            <FormInput
              label="Plaats"
              name="city"
              value={form.city}
              onChange={(e) => setField('city', e.target.value)}
              placeholder="Amsterdam"
            />
          </div>
          <FormInput
            label="Land"
            name="country"
            value={form.country}
            onChange={(e) => setField('country', e.target.value)}
            placeholder="Nederland"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormInput
              label="KvK"
              name="kvk"
              value={form.kvk}
              onChange={(e) => setField('kvk', e.target.value)}
              placeholder="KVK-nummer"
            />
            <FormInput
              label="BTW-nummer"
              name="btw"
              value={form.btw}
              onChange={(e) => setField('btw', e.target.value)}
              placeholder="BTW-nummer"
            />
          </div>
          <FormTextarea
            label="Notities (optioneel)"
            name="notes"
            value={form.notes}
            onChange={(e) => setField('notes', e.target.value)}
            placeholder="Interne notities over deze klant"
            rows={2}
          />

          <DialogFooter className="gap-2 pt-2 sm:gap-0">
            <Button type="button" variant="outline" onClick={onClose} disabled={isSaving}>
              Annuleren
            </Button>
            <Button
              type="submit"
              disabled={!canSave || isSaving}
              className="bg-deep-blue hover:bg-deep-blue/90"
            >
              {isSaving ? 'Opslaan…' : 'Opslaan'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
