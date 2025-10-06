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
import { ScrollArea } from '@/components/ui/scroll-area';
import { User } from 'lucide-react';

const ContactSelectorDialog = ({ isOpen, onClose, contacts, onSelectContact }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white rounded-lg shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-800">Selecteer een Contact</DialogTitle>
          <DialogDescription className="text-sm text-gray-600">
            Kies een bestaand contact om de gegevens automatisch in te vullen.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 space-y-4">
          <Input
            type="text"
            placeholder="Zoek contact..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-50"
          />
          {contacts.length === 0 ? (
             <p className="text-sm text-gray-500 text-center py-4">Nog geen contacten opgeslagen.</p>
          ) : (
            <ScrollArea className="h-[250px] w-full rounded-md border p-2 bg-slate-50">
              {filteredContacts.length > 0 ? (
                <ul className="space-y-1">
                  {filteredContacts.map((contact) => (
                    <li key={contact.id}>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-left h-auto py-2 px-3 hover:bg-slate-100"
                        onClick={() => onSelectContact(contact)}
                      >
                        <User className="w-4 h-4 mr-3 text-gray-500" />
                        <div>
                          <p className="font-medium text-sm text-gray-800">{contact.name}</p>
                          <p className="text-xs text-gray-500">{contact.email}</p>
                        </div>
                      </Button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-500 text-center py-4">Geen contacten gevonden.</p>
              )}
            </ScrollArea>
          )}
        </div>
        <DialogFooter className="mt-2">
          <DialogClose asChild>
            <Button variant="outline">Annuleren</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ContactSelectorDialog;