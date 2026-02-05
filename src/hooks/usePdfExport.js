import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { supabase } from '@/lib/supabaseClient'; 

export const usePdfExport = (previewRef, toast) => {
  const logInvoiceCreation = async () => {
    try {
      const { error } = await supabase.from('invoice_creations_log').insert([{}]);
      if (error) {
        console.error('Error logging invoice creation:', error);
      }
    } catch (error) {
      console.error('Supabase client error logging invoice creation:', error);
    }
  };

  const exportToPdf = async (invoiceData, invoiceBreakdown, fileName = 'invoice.pdf') => {
    const input = previewRef.current;
    if (input) {
      try {
        const canvas = await html2canvas(input, {
          scale: 3, // Increased scale for better quality
          useCORS: true,
          logging: false, 
          imageTimeout: 15000, 
          backgroundColor: null, // Use transparent background for canvas if layout has gradient
          width: input.offsetWidth, // Explicitly set canvas width
          height: input.offsetHeight, // Explicitly set canvas height
          windowWidth: input.scrollWidth,
          windowHeight: input.scrollHeight,
        });

        const imgData = canvas.toDataURL('image/png', 1.0); // Use PNG with max quality
        
        const pdf = new jsPDF({
          orientation: 'p', // portrait
          unit: 'mm', // millimeters
          format: 'a4', // A4 page size
          putOnlyUsedFonts: true,
          floatPrecision: 16 // or "smart"
        });

        const pdfWidth = pdf.internal.pageSize.getWidth(); // A4 width in mm
        const pdfHeight = pdf.internal.pageSize.getHeight(); // A4 height in mm

        // Calculate the aspect ratio of the image and the PDF page
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const imgAspectRatio = imgWidth / imgHeight;
        const pdfAspectRatio = pdfWidth / pdfHeight;

        let finalImgWidth, finalImgHeight, imgX, imgY;

        // Fit image to page width, adjust height proportionally
        finalImgWidth = pdfWidth;
        finalImgHeight = pdfWidth / imgAspectRatio;
        
        // If scaled height is greater than PDF height, scale to PDF height
        if (finalImgHeight > pdfHeight) {
            finalImgHeight = pdfHeight;
            finalImgWidth = pdfHeight * imgAspectRatio;
        }

        imgX = (pdfWidth - finalImgWidth) / 2; // Center horizontally
        imgY = (pdfHeight - finalImgHeight) / 2; // Center vertically

        // If content is meant to be top-aligned, set imgY to 0
        // For full A4 fitting, centering might be okay if the content itself fills the A4 preview
        imgY = 0;


        pdf.addImage(imgData, 'PNG', imgX, imgY, finalImgWidth, finalImgHeight);
        pdf.save(fileName);
        
        await logInvoiceCreation();

        if (toast) {
          toast({
            title: "PDF Gecreëerd",
            description: "Uw factuur PDF wordt gedownload.",
          });
        }
      } catch (error) {
        console.error("Error generating PDF:", error);
        if (toast) {
          toast({
            title: "Fout bij PDF creatie",
            description: "Er is een fout opgetreden bij het genereren van de PDF. Probeer het opnieuw.",
            variant: "destructive",
          });
        }
      }
    } else {
      if (toast) {
        toast({
          title: "Fout bij PDF creatie",
          description: "Kon het voorbeeld niet vinden. Zorg dat het voorbeeld zichtbaar is.",
          variant: "destructive",
        });
      }
    }
  };

  return { exportToPdf };
};