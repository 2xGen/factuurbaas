import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { INVOICE_LOG_INSERT_TABLE, logToolUsage } from '@/lib/toolUsageLog';
import { markGuestInvoiceCreated } from '@/lib/guestInvoiceAttribution';
import { supabase } from '@/lib/customSupabaseClient';

export const usePdfExport = (previewRef, toast) => {
  const exportToPdf = async (invoiceData, invoiceBreakdown, fileName = 'invoice.pdf') => {
    const input = previewRef.current;
    if (input) {
      try {
        const canvas = await html2canvas(input, {
          scale: 3,
          useCORS: true,
          logging: false,
          imageTimeout: 15000,
          backgroundColor: null,
          width: input.offsetWidth,
          height: input.offsetHeight,
          windowWidth: input.scrollWidth,
          windowHeight: input.scrollHeight,
        });

        const imgData = canvas.toDataURL('image/png', 1.0);

        const pdf = new jsPDF({
          orientation: 'p',
          unit: 'mm',
          format: 'a4',
          putOnlyUsedFonts: true,
          floatPrecision: 16,
        });

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();

        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const imgAspectRatio = imgWidth / imgHeight;

        let finalImgWidth = pdfWidth;
        let finalImgHeight = pdfWidth / imgAspectRatio;

        if (finalImgHeight > pdfHeight) {
          finalImgHeight = pdfHeight;
          finalImgWidth = pdfHeight * imgAspectRatio;
        }

        const imgX = (pdfWidth - finalImgWidth) / 2;
        const imgY = 0;

        pdf.addImage(imgData, 'PNG', imgX, imgY, finalImgWidth, finalImgHeight);
        pdf.save(fileName);

        await logToolUsage(INVOICE_LOG_INSERT_TABLE);

        try {
          const { data: sessionData } = await supabase.auth.getSession();
          if (!sessionData?.session) {
            markGuestInvoiceCreated();
          }
        } catch {
          markGuestInvoiceCreated();
        }

        if (toast) {
          toast({
            title: 'PDF Gecreëerd',
            description: 'Uw factuur PDF wordt gedownload.',
          });
        }
        return true;
      } catch (error) {
        console.error('Error generating PDF:', error);
        if (toast) {
          toast({
            title: 'Fout bij PDF creatie',
            description:
              'Er is een fout opgetreden bij het genereren van de PDF. Probeer het opnieuw.',
            variant: 'destructive',
          });
        }
        return false;
      }
    } else if (toast) {
      toast({
        title: 'Fout bij PDF creatie',
        description: 'Kon het voorbeeld niet vinden. Zorg dat het voorbeeld zichtbaar is.',
        variant: 'destructive',
      });
    }
    return false;
  };

  return { exportToPdf };
};
