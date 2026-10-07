import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy } from 'lucide-react';
import { format } from "date-fns";
import { nl } from "date-fns/locale";
import { calculateInvoiceTotal, parseDateSafe } from "@/lib/invoiceUtils";
import { formatEuro } from '@/lib/dashboardCockpit';

const ReminderDialog = ({ isOpen, onClose, invoice, onActionLog, user, profile }) => {
  const [reminderText, setReminderText] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('vriendelijk');
  const { toast } = useToast();

  const userName =
    profile?.full_name ||
    user?.user_metadata?.full_name ||
    user?.user_metadata?.name ||
    user?.email?.split('@')[0] ||
    'Je naam';
  const userCompanyName = profile?.company_name || '';
  const userContactInfo = user?.email || '[Jouw e-mail]';

  const generateReminderText = (templateType, currentInvoiceObject) => {
    if (!currentInvoiceObject) return '';

    const due = parseDateSafe(currentInvoiceObject.dueDate);
    const dueDateFormatted = due ? format(due, 'd MMMM yyyy', { locale: nl }) : '[Datum]';
    const totalAmount =
      Number(currentInvoiceObject.total_incl) || calculateInvoiceTotal(currentInvoiceObject);
    const invoiceNumber =
      currentInvoiceObject.invoice_number ||
      currentInvoiceObject.invoiceNumber ||
      '[Factuurnummer]';
    const customerName = currentInvoiceObject.receiverName || '[Klantnaam]';
    const invoiceDescription = currentInvoiceObject.invoiceName || '[product/dienst]';
    const amountLabel = formatEuro(totalAmount);

    let subject = '';
    let body = '';

    if (templateType === 'vriendelijk') {
      subject = `Vriendelijke herinnering: openstaande factuur ${invoiceNumber}`;
      body =
        `Beste ${customerName},\n\n` +
        `Er staat nog een bedrag open voor factuur ${invoiceNumber} van ${dueDateFormatted}. Misschien is deze per ongeluk blijven liggen?\n\n` +
        `Factuurnummer: ${invoiceNumber}\n` +
        `Vervaldatum: ${dueDateFormatted}\n` +
        `Bedrag: ${amountLabel}\n\n` +
        `Als de betaling al is gedaan: hartelijk dank!\n\n` +
        `Laat het vooral weten als er vragen zijn.\n\n` +
        `Met vriendelijke groet,\n${userName}` +
        (userCompanyName ? `\n${userCompanyName}` : '');
    } else {
      subject = `Herinnering: openstaande factuur ${invoiceNumber}`;
      body =
        `Geachte ${customerName},\n\n` +
        `Factuur ${invoiceNumber} voor ${invoiceDescription}, vervallen op ${dueDateFormatted}, is nog niet voldaan.\n\n` +
        `Factuurnummer: ${invoiceNumber}\n` +
        `Bedrag: ${amountLabel}\n\n` +
        `Gelieve de betaling zo spoedig mogelijk af te handelen. Negeer dit bericht bij ontvangst van het bedrag.\n\n` +
        `Voor vragen kun je contact opnemen via ${userContactInfo}.\n\n` +
        `Hoogachtend,\n${userName}` +
        (userCompanyName ? `\n${userCompanyName}` : '');
    }
    return `Onderwerp: ${subject}\n\n${body}`;
  };

  useEffect(() => {
    if (isOpen && invoice) {
      setReminderText(generateReminderText(selectedTemplate, invoice));
    }
  }, [isOpen, invoice, selectedTemplate, user, profile]);

  const handleCopyToClipboard = async () => {
    if (!reminderText) return;
    try {
      await navigator.clipboard.writeText(reminderText);
      toast({
        title: 'Gekopieerd',
        description: 'Plak de tekst in een e-mail of WhatsApp naar je klant.',
      });
      if (onActionLog && invoice?.id) {
        onActionLog(invoice, `Herinnering template (${selectedTemplate}) gekopieerd.`);
      }
      onClose();
    } catch (err) {
      toast({
        title: 'Kopiëren mislukt',
        description: 'Kon de tekst niet naar het klembord kopiëren.',
        variant: 'destructive',
      });
    }
  };

  if (!invoice) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl text-deep-blue">
            Herinnering kopiëren
          </DialogTitle>
          <DialogDescription>
            Kies een toon, kopieer de tekst en stuur hem zelf naar je klant. We versturen nog geen e-mail.
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
              className="mt-2 rounded-md border-gray-300 bg-gray-50 p-3 shadow-sm focus:border-deep-blue focus:ring-deep-blue"
            />
          </TabsContent>
          <TabsContent value="zakelijk">
            <Textarea
              value={reminderText}
              readOnly
              rows={15}
              className="mt-2 rounded-md border-gray-300 bg-gray-50 p-3 shadow-sm focus:border-deep-blue focus:ring-deep-blue"
            />
          </TabsContent>
        </Tabs>

        <DialogFooter className="mt-6">
          <Button variant="outline" onClick={onClose}>Annuleren</Button>
          <Button onClick={handleCopyToClipboard} className="bg-deep-blue hover:bg-deep-blue/90">
            <Copy className="mr-2 h-4 w-4" /> Kopieer tekst
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ReminderDialog;
