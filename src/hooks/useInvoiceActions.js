import { useToast } from "@/components/ui/use-toast";
import { defaultInvoiceItem, defaultHourlyLog } from '@/config/invoiceDefaults';

export const useInvoiceActions = (setInvoice, toastInstance) => {
  const defaultToast = useToast();
  const toast = toastInstance ? toastInstance.toast : defaultToast.toast;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const [section, field] = name.split(".");

    setInvoice((prev) => {
      if (section && field) {
        return {
          ...prev,
          [section]: {
            ...prev[section],
            [field]: type === "checkbox" ? checked : value,
          },
        };
      }
      
      let valToSet = value;
      if (type === "checkbox") {
        valToSet = checked;
      } else if (type === "number") {
        valToSet = parseFloat(value) || '';
      } else if (name === "taxIncluded" && typeof value === "string") {
        valToSet = value === "true";
      }


      return {
        ...prev,
        [name]: valToSet,
      };
    });
  };
  
  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) { 
        toast({
          title: "Bestand te groot",
          description: "Logo mag niet groter zijn dan 2MB.",
          variant: "destructive",
        });
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setInvoice((prev) => ({ ...prev, logo: reader.result }));
        toast({
          title: "Logo Geüpload",
          description: "Je logo is succesvol toegevoegd.",
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleWorkTypeChange = (e) => {
    const newWorkType = e.target.value;
    setInvoice((prev) => ({
      ...prev,
      workType: newWorkType,
      items: newWorkType === 'fixed' && (!prev.items || prev.items.length === 0) ? [{ ...defaultInvoiceItem }] : prev.items,
      hoursWorked: newWorkType === 'hourly' && (!prev.hoursWorked || prev.hoursWorked.length === 0) ? [{ ...defaultHourlyLog }] : prev.hoursWorked,
      amount: newWorkType === 'hourly' ? prev.amount || '' : '', 
    }));
  };

  const handleAddWorkDay = () => {
    setInvoice((prev) => ({
      ...prev,
      hoursWorked: [...(prev.hoursWorked || []), { ...defaultHourlyLog, date: new Date().toISOString() }],
    }));
  };

  const handleUpdateWorkDay = (index, field, value) => {
    setInvoice((prev) => {
      const updatedHoursWorked = [...(prev.hoursWorked || [])];
      updatedHoursWorked[index] = {
        ...updatedHoursWorked[index],
        [field]: field === 'date' && value instanceof Date ? value.toISOString() : value,
      };
      return { ...prev, hoursWorked: updatedHoursWorked };
    });
  };

  const handleRemoveWorkDay = (index) => {
    setInvoice((prev) => ({
      ...prev,
      hoursWorked: (prev.hoursWorked || []).filter((_, i) => i !== index),
    }));
  };
  
  const handleAddItem = () => {
    setInvoice((prev) => ({
      ...prev,
      items: [...(prev.items || []), { ...defaultInvoiceItem }],
    }));
  };

  const handleUpdateItem = (index, field, value) => {
    setInvoice((prev) => {
      const updatedItems = [...(prev.items || [])];
      updatedItems[index] = { ...updatedItems[index], [field]: value };
      return { ...prev, items: updatedItems };
    });
  };

  const handleRemoveItem = (index) => {
    setInvoice((prev) => ({
      ...prev,
      items: (prev.items || []).filter((_, i) => i !== index),
    }));
  };

  return {
    handleInputChange,
    handleLogoUpload,
    handleWorkTypeChange,
    handleAddWorkDay,
    handleUpdateWorkDay,
    handleRemoveWorkDay,
    handleAddItem,
    handleUpdateItem,
    handleRemoveItem
  };
};