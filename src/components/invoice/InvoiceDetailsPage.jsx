import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FileText, Save, Send, Printer, ArrowLeft, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import InvoiceForm from "@/components/invoice/InvoiceForm";
import InvoicePreview from "@/components/invoice/InvoicePreview";
import { jsPDF } from "jspdf";
import { format } from "date-fns";
import { nl } from "date-fns/locale";
import html2canvas from 'html2canvas';


const InvoiceDetailsPage = ({ invoice: initialInvoice, onSave, onCancel }) => {
  const { toast } = useToast();
  const [invoice, setInvoice] = useState({...initialInvoice, 
    invoiceDate: initialInvoice.invoiceDate ? new Date(initialInvoice.invoiceDate) : new Date(),
    dueDate: initialInvoice.dueDate ? new Date(initialInvoice.dueDate) : new Date(new Date().setDate(new Date().getDate() + 14)),
  });
  const [showPreview, setShowPreview] = useState(false);
  const fileInputRef = useRef(null);
  const previewRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;

    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setInvoice(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: val
        }
      }));
    } else {
      setInvoice(prev => ({
        ...prev,
        [name]: val
      }));
    }
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setInvoice(prev => ({
          ...prev,
          logo: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleWorkTypeChange = (e) => {
    setInvoice(prev => ({
      ...prev,
      workType: e.target.value,
      hoursWorked: e.target.value === "hourly" ? (prev.hoursWorked.length > 0 ? prev.hoursWorked : [{ date: new Date(), hours: 0 }]) : []
    }));
  };

  const handleAddWorkDay = () => {
    setInvoice(prev => ({
      ...prev,
      hoursWorked: [...prev.hoursWorked, { date: new Date(), hours: 0 }]
    }));
  };

  const handleUpdateWorkDay = (index, field, value) => {
    setInvoice(prev => ({
      ...prev,
      hoursWorked: prev.hoursWorked.map((day, i) => 
        i === index ? { ...day, [field]: value } : day
      )
    }));
  };

  const handleRemoveWorkDay = (index) => {
    setInvoice(prev => ({
      ...prev,
      hoursWorked: prev.hoursWorked.filter((_, i) => i !== index)
    }));
  };

  const handleSave = () => {
    if (!invoice.receiverName || !invoice.email || !invoice.amount || !invoice.dueDate || !invoice.invoiceDate) {
      toast({
        title: "Fout bij opslaan",
        description: "Vul alle verplichte velden in (Ontvanger, Email, Bedrag, Factuurdatum, Vervaldatum).",
        variant: "destructive"
      });
      return;
    }
    onSave(invoice);
    toast({
      title: "Factuur opgeslagen",
      description: "De factuur is succesvol opgeslagen.",
    });
  };

  const handlePrint = async () => {
    if (previewRef.current) {
      const canvas = await html2canvas(previewRef.current, { scale: 2 });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 0; // Or some margin
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save(`${invoice.invoiceName || 'factuur'}.pdf`);
       toast({
        title: "PDF Gecreëerd",
        description: "Uw factuur PDF wordt gedownload.",
      });
    } else {
       toast({
        title: "Fout bij PDF creatie",
        description: "Kon het voorbeeld niet vinden. Schakel naar voorbeeld modus.",
        variant: "destructive",
      });
    }
  };


  const handleSend = () => {
    if (!invoice.receiverName || !invoice.email) {
      toast({
        title: "Kan niet verzenden",
        description: "Vul eerst de ontvanger gegevens in.",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "Factuur verzonden (simulatie)",
      description: "De factuur zou nu verzonden zijn naar de ontvanger.",
    });
  };

  const isPremiumLayoutSelected = invoice.layout === 'modern' || invoice.layout === 'classic';
  // Simulating premium status, replace with actual user status
  const isUserPremium = false; 

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
        <Button
          variant="ghost"
          className="flex items-center text-gray-600 hover:text-gray-900"
          onClick={onCancel}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Terug
        </Button>
        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            className="flex items-center"
            onClick={() => setShowPreview(!showPreview)}
          >
            <FileText className="w-4 h-4 mr-2" />
            {showPreview ? "Bewerken" : "Voorbeeld"}
          </Button>
          <Button
            variant="outline"
            className="flex items-center"
            onClick={handlePrint}
            disabled={!showPreview && isPremiumLayoutSelected && !isUserPremium}
          >
            <Printer className="w-4 h-4 mr-2" />
            PDF
             {isPremiumLayoutSelected && !isUserPremium && <Star className="w-3 h-3 ml-1 text-yellow-500" />}
          </Button>
          <Button
            variant="outline"
            className="flex items-center"
            onClick={handleSave}
          >
            <Save className="w-4 h-4 mr-2" />
            Opslaan
          </Button>
          <Button
            className="flex items-center bg-blue-600 hover:bg-blue-700 text-white"
            onClick={handleSend}
            disabled={isPremiumLayoutSelected && !isUserPremium}
          >
            <Send className="w-4 h-4 mr-2" />
            Verzenden
             {isPremiumLayoutSelected && !isUserPremium && <Star className="w-3 h-3 ml-1" />}
          </Button>
        </div>
      </div>
      
      {isPremiumLayoutSelected && !isUserPremium && !showPreview && (
        <div className="mb-4 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 rounded-md">
          <p className="font-bold">Premium Layout Geselecteerd</p>
          <p>Upgrade naar Premium om deze layout te gebruiken voor verzenden en PDF export. U kunt wel een voorbeeld bekijken.</p>
        </div>
      )}


      <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
        {showPreview ? (
          <InvoicePreview invoice={invoice} ref={previewRef} />
        ) : (
          <div className="p-6 md:p-10">
            <InvoiceForm
              invoice={invoice}
              onInputChange={handleInputChange}
              onLogoUpload={handleLogoUpload}
              onWorkTypeChange={handleWorkTypeChange}
              onAddWorkDay={handleAddWorkDay}
              onUpdateWorkDay={handleUpdateWorkDay}
              onRemoveWorkDay={handleRemoveWorkDay}
              fileInputRef={fileInputRef}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default InvoiceDetailsPage;