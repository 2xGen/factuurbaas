import React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Trash2, AlertTriangle } from 'lucide-react';

const DeleteInvoiceDialog = ({ isOpen, onClose, onConfirm, invoice }) => {
  if (!invoice) return null;

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center text-xl font-semibold text-red-600">
            <AlertTriangle className="w-6 h-6 mr-2 text-red-500" />
            Factuur Verwijderen
          </AlertDialogTitle>
          <AlertDialogDescription className="pt-2">
            Weet je zeker dat je factuur <strong>#{invoice.id}</strong> ({invoice.invoiceName || 'Geen naam'}) wilt verwijderen? Deze actie kan niet ongedaan worden gemaakt.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-4">
          <AlertDialogCancel asChild>
            <Button variant="outline">Annuleren</Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button variant="destructive" onClick={onConfirm}>
              <Trash2 className="w-4 h-4 mr-2" /> Verwijder Factuur
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteInvoiceDialog;