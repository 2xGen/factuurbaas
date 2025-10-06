import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { format } from 'date-fns';
import { nl } from 'date-fns/locale';
import { PlusCircle, MessageSquare as MessageSquareText } from 'lucide-react';

const ActivityLogDialog = ({ isOpen, onClose, invoice, onAddEntry }) => {
  const [newEntry, setNewEntry] = useState('');

  if (!invoice) return null;

  const handleAdd = () => {
    onAddEntry(invoice, newEntry);
    setNewEntry(''); 
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading text-deep-blue">
            Activiteitenlogboek voor Factuur #{invoice.id}
          </DialogTitle>
          <DialogDescription>
            Bekijk en voeg activiteiten toe gerelateerd aan deze factuur.
          </DialogDescription>
        </DialogHeader>

        <div className="my-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
            <MessageSquareText className="w-5 h-5 mr-2 text-warm-orange"/>
            Bestaande Logs
            </h3>
          {invoice.activityLog && invoice.activityLog.length > 0 ? (
            <ScrollArea className="h-48 border rounded-md p-3 bg-gray-50">
              {invoice.activityLog
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .map((log, index) => (
                  <div key={index} className="mb-3 pb-3 border-b last:border-b-0 border-gray-200">
                    <p className="text-sm text-gray-800">{log.description}</p>
                    <p className="text-xs text-gray-500">
                      {format(new Date(log.date), "d MMM yyyy, HH:mm", { locale: nl })}
                    </p>
                  </div>
              ))}
            </ScrollArea>
          ) : (
            <p className="text-sm text-gray-500 italic">Nog geen activiteiten gelogd.</p>
          )}
        </div>

        <div className="space-y-2">
            <label htmlFor="newEntry" className="block text-sm font-medium text-gray-700">Nieuwe log toevoegen:</label>
            <Textarea
                id="newEntry"
                value={newEntry}
                onChange={(e) => setNewEntry(e.target.value)}
                placeholder="Bijv. Herinnering gestuurd, betalingsafspraak gemaakt..."
                className="focus:ring-deep-blue focus:border-deep-blue"
            />
            <Button onClick={handleAdd} size="sm" className="bg-deep-blue hover:bg-deep-blue/90">
                <PlusCircle className="w-4 h-4 mr-2" /> Toevoegen
            </Button>
        </div>

        <DialogFooter className="mt-6">
          <Button variant="outline" onClick={onClose}>Sluiten</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ActivityLogDialog;