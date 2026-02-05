import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy } from 'lucide-react';
import { format } from "date-fns";
import { nl } from "date-fns/locale";
import { calculateInvoiceTotal } from "@/lib/invoiceUtils";

const ReminderDialog = ({ isOpen, onClose, invoice, onActionLog, user }) => {
  const [reminderText, setReminderText] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('vriendelijk');
  const { toast } = useToast();

  const userName = user?.name || "Je Naam";
  const userCompanyName = user?.companyDetails?.name || "";
  const userContactInfo = user?.email || "[Jouw Telefoon/E-mail]";


  const generateReminderText = (templateType, currentInvoice) => {
    if (!currentInvoice) return "";

    const dueDateFormatted = currentInvoice.dueDate ? format(new Date(currentInvoice.dueDate), "d MMMM yyyy", { locale: nl }) : '[Datum]';
    const totalAmount = calculateInvoiceTotal(currentInvoice);
    const invoiceNumber = currentInvoice.id || '[Factuurnummer]';
    const customerName = currentInvoice.receiverName || '[Klantnaam]';
    const invoiceDescription = currentInvoice.invoiceName || '[product/dienst]';

    let subject = "";
    let body = "";

    if (templateType === 'vriendelijk') {
      subject = `Vriendelijke herinnering: openstaande factuur #${invoiceNumber}`;
      body = `Beste ${customerName},\n\n` +
             `Er is nog een openstaand bedrag voor factuur #${invoiceNumber} van ${dueDateFormatted}. Misschien is deze per ongeluk blijven liggen?\n\n` +
             `Details:\n` +
             `Factuurnummer: #${invoiceNumber}\n` +
             `Vervaldatum: ${dueDateFormatted}\n` +
             `Bedrag: €${totalAmount.toFixed(2)}\n\n` +
             `Als de betaling al is gedaan: hartelijk dank!\n\n` +
             `Laat het vooral weten als er vragen zijn.\n\n` +
             `Met vriendelijke groet,\n${userName}` +
             (userCompanyName ? `\n${userCompanyName}` : "");
    } else { // zakelijk
      subject = `Herinnering: openstaande factuur #${invoiceNumber}`;
      body = `Geachte ${customerName},\n\n` +
             `Factuur #${invoiceNumber} voor ${invoiceDescription}, vervallen op ${dueDateFormatted}, is nog niet voldaan.\n\n` +
             `Te betalen:\n` +
             `Factuurnummer: #${invoiceNumber}\n` +
             `Bedrag: €${totalAmount.toFixed(2)}\n\n`+
             `Gelieve de betaling zo spoedig mogelijk af te handelen. Negeer deze e-mail bij ontvangst van het bedrag.\n\n` +
             `Voor vragen kun je contact opnemen via ${userContactInfo}.\n\n` +
             `Hoogachtend,\n${userName}` +
             (userCompanyName ? `\n${userCompanyName}` : "");
    }
    return `Onderwerp: ${subject}\n\nTekst:\n${body}`;
  };

  useEffect(() => {
    if (isOpen && invoice) {
      setReminderText(generateReminderText(selectedTemplate, invoice));
    }
  }, [isOpen, invoice, selectedTemplate, user]);

  const handleCopyToClipboard = async () => {
    if (!reminderText) return;
    try {
      await navigator.clipboard.writeText(reminderText);
      toast({
        title: "Gekopieerd!",
        description: "Herinneringstekst is naar het klembord gekopieerd.",
      });
      if (onActionLog && invoice && invoice.id) {
        onActionLog(invoice, `Herinnering template (${selectedTemplate}) gekopieerd.`);
      } else if (!invoice || !invoice.id) {
        console.warn("Attempted to log reminder copy for an invoice without an ID.", invoice);
      }
      onClose();
    } catch (err) {
      toast({
        title: "Kopiëren Mislukt",
        description: "Kon de tekst niet naar het klembord kopiëren.",
        variant: "destructive",
      });
      console.error('Failed to copy text: ', err);
    }
  };

  if (!invoice) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading text-deep-blue">Herinnering Template Kopiëren</DialogTitle>
          <DialogDescription>
            Kies een template en kopieer de tekst om naar je klant te sturen.
          </DialogDescription>
        </DialogHeader>
        
        <Tabs value={selectedTemplate} onValueChange={setSelectedTemplate} className="mt-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="vriendelijk">Vriendelijk</TabsTrigger>
            <TabsTrigger value="zakelijk">Zakelijk</TabsTrigger>
          </TabsList>
          <TabsContent value="vriendelijk">
            <Textarea
              value={reminderText}
              readOnly
              rows={15}
              className="mt-2 p-3 border-gray-300 rounded-md shadow-sm focus:ring-deep-blue focus:border-deep-blue bg-gray-50"
            />
          </TabsContent>
          <TabsContent value="zakelijk">
            <Textarea
              value={reminderText}
              readOnly
              rows={15}
              className="mt-2 p-3 border-gray-300 rounded-md shadow-sm focus:ring-deep-blue focus:border-deep-blue bg-gray-50"
            />
          </TabsContent>
        </Tabs>

        <DialogFooter className="mt-6">
          <Button variant="outline" onClick={onClose}>Annuleren</Button>
          <Button onClick={handleCopyToClipboard} className="bg-deep-blue hover:bg-deep-blue/90">
            <Copy className="w-4 h-4 mr-2" /> Kopieer Template
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ReminderDialog;