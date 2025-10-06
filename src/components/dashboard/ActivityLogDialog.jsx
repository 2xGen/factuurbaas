import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { format, parseISO, isValid } from "date-fns";
import { nl } from "date-fns/locale";
import { PlusCircle } from "lucide-react";

const ActivityLogDialog = ({ isOpen, onClose, invoice, onAddEntry }) => {
  const [newEntry, setNewEntry] = useState('');

  if (!invoice) return null;

  const handleAddClick = () => {
    if (newEntry.trim()) {
      onAddEntry(invoice, newEntry.trim());
      setNewEntry('');
    }
  };

  const formatDateSafe = (dateString) => {
    if (!dateString) return 'Onbekende datum';
    const date = parseISO(dateString);
    return isValid(date) ? format(date, "dd MMM yyyy, HH:mm", { locale: nl }) : 'Ongeldige datum';
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg bg-white rounded-lg shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-800">Activiteitenlogboek Factuur #{invoice.id}</DialogTitle>
          <DialogDescription className="text-sm text-gray-600">
            Bekijk en voeg handelingen toe voor factuur: {invoice.invoiceName || 'N/A'}.
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="newActivityEntry" className="text-sm font-medium text-gray-700">Nieuwe log toevoegen</Label>
            <div className="flex items-center space-x-2">
              <Textarea
                id="newActivityEntry"
                value={newEntry}
                onChange={(e) => setNewEntry(e.target.value)}
                placeholder="Beschrijf de actie (bijv. Gebeld met klant, betaling toegezegd)..."
                rows={2}
                className="flex-grow p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
              <Button onClick={handleAddClick} size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                <PlusCircle className="w-4 h-4 mr-1" /> Toevoegen
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-md font-medium text-gray-700 mb-2">Geschiedenis</h3>
            {invoice.activityLog && invoice.activityLog.length > 0 ? (
              <ScrollArea className="h-[200px] w-full rounded-md border p-3 bg-slate-50">
                <ul className="space-y-3">
                  {invoice.activityLog.slice().reverse().map((log, index) => (
                    <li key={index} className="text-sm border-b border-gray-200 pb-2 last:border-b-0">
                      <p className="font-medium text-gray-700">{log.description}</p>
                      <p className="text-xs text-gray-500">{formatDateSafe(log.date)}</p>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            ) : (
              <p className="text-sm text-gray-500 italic">Nog geen activiteiten gelogd.</p>
            )}
          </div>
        </div>
        
        <DialogFooter className="mt-2">
          <DialogClose asChild>
            <Button variant="outline">Sluiten</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ActivityLogDialog;