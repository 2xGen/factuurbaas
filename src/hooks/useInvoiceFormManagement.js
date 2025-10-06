import { useState, useCallback } from 'react';
import { defaultInvoice } from '@/config/invoiceDefaults';

export const useInvoiceFormManagement = (initialInvoice = defaultInvoice) => {
  const [invoice, setInvoice] = useState(initialInvoice);

  const handleInputChange = useCallback((e) => {
    const { name, value, type, checked, dataset } = e.target;
    const section = dataset ? dataset.section : undefined;

    setInvoice(prev => {
      if (section === 'companyDetails') {
        return {
          ...prev,
          companyDetails: {
            ...prev.companyDetails,
            [name]: value,
          },
        };
      }
      return {
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  }, []);
  
  const handleDirectInputChange = useCallback((name, value, section) => {
    setInvoice(prev => {
      if (section === 'companyDetails') {
        return {
          ...prev,
          companyDetails: {
            ...prev.companyDetails,
            [name]: value,
          },
        };
      }
      return {
        ...prev,
        [name]: value,
      };
    });
  }, []);


  const handleDateChange = useCallback((name, date) => {
    setInvoice(prev => ({
      ...prev,
      [name]: date instanceof Date && !isNaN(date) ? date : null,
    }));
  }, []);

  const handleLogoUpload = useCallback((e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setInvoice(prev => ({ ...prev, logo: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleWorkTypeChange = useCallback((value) => {
    setInvoice(prev => ({ ...prev, workType: value }));
  }, []);

  const handleSelectLayout = useCallback((layout) => {
    setInvoice(prev => ({ ...prev, layout }));
  }, []);

  const handleAddItem = useCallback(() => {
    setInvoice(prev => ({
      ...prev,
      items: [...(prev.items || []), { id: Date.now(), itemName: '', itemDescription: '', quantity: 1, price: 0 }],
    }));
  }, []);

  const handleUpdateItem = useCallback((index, field, value) => {
    setInvoice(prev => {
      const newItems = [...(prev.items || [])];
      newItems[index] = { ...newItems[index], [field]: value };
      return { ...prev, items: newItems };
    });
  }, []);

  const handleRemoveItem = useCallback((index) => {
    setInvoice(prev => ({
      ...prev,
      items: (prev.items || []).filter((_, i) => i !== index),
    }));
  }, []);

  const handleAddWorkDay = useCallback(() => {
    setInvoice(prev => ({
      ...prev,
      hoursWorked: [...(prev.hoursWorked || []), { id: Date.now(), date: new Date(), taskDescription: '', hours: 0 }],
    }));
  }, []);
  
  const handleUpdateWorkDay = useCallback((index, field, value) => {
    setInvoice(prev => {
      const newHoursWorked = [...(prev.hoursWorked || [])];
      if (field === 'date' && !(value instanceof Date && !isNaN(value))) {
        newHoursWorked[index] = { ...newHoursWorked[index], [field]: null };
      } else {
        newHoursWorked[index] = { ...newHoursWorked[index], [field]: value };
      }
      return { ...prev, hoursWorked: newHoursWorked };
    });
  }, []);

  const handleRemoveWorkDay = useCallback((index) => {
    setInvoice(prev => ({
      ...prev,
      hoursWorked: (prev.hoursWorked || []).filter((_, i) => i !== index),
    }));
  }, []);

  const handleAddItemBasedOnWorkType = useCallback(() => {
    if (invoice.workType === 'fixed') {
      handleAddItem();
    } else if (invoice.workType === 'hourly') {
      handleAddWorkDay();
    }
  }, [invoice.workType, handleAddItem, handleAddWorkDay]);

  const handleUpdateItemBasedOnWorkType = useCallback((index, field, value) => {
    if (invoice.workType === 'fixed') {
      handleUpdateItem(index, field, value);
    } else if (invoice.workType === 'hourly') {
      handleUpdateWorkDay(index, field, value);
    }
  }, [invoice.workType, handleUpdateItem, handleUpdateWorkDay]);
  
  const handleRemoveItemBasedOnWorkType = useCallback((index) => {
    if (invoice.workType === 'fixed') {
      handleRemoveItem(index);
    } else if (invoice.workType === 'hourly') {
      handleRemoveWorkDay(index);
    }
  }, [invoice.workType, handleRemoveItem, handleRemoveWorkDay]);


  return {
    invoice,
    setInvoice,
    handleInputChange,
    handleDirectInputChange,
    handleDateChange,
    handleLogoUpload,
    handleWorkTypeChange,
    handleAddItem,
    handleUpdateItem,
    handleRemoveItem,
    handleAddWorkDay,
    handleUpdateWorkDay,
    handleRemoveWorkDay,
    handleSelectLayout,
    handleAddItemBasedOnWorkType,
    handleUpdateItemBasedOnWorkType,
    handleRemoveItemBasedOnWorkType,
  };
};