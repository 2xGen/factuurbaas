'use client';
import React, { useRef } from 'react';
import InvoiceForm from '@/components/invoice/InvoiceForm';
import InvoiceSidebar from '@/components/invoice/InvoiceSidebar';
import { useInvoiceFormManagement } from '@/hooks/useInvoiceFormManagement';
import { motion } from 'framer-motion';

const InvoiceDetailsPage = () => {
  const fileInputRef = useRef(null); 
  const {
    invoice,
    setInvoice,
    handleInputChange,
    handleDateChange,
    handleAddItem,
    handleUpdateItem,
    handleRemoveItem,
    handleWorkTypeChange,
    handleSelectLayout, 
    handleSaveInvoice,
    handleLoadInvoice,
    handleDeleteInvoice,
    handleResetInvoice,
    handleHoursWorkedChange,
    handleAddWorkDay,
    handleUpdateWorkDay,
    handleRemoveWorkDay,
    handleLogoUpload, 
    handleAddItemBasedOnWorkType,
    handleUpdateItemBasedOnWorkType,
    handleRemoveItemBasedOnWorkType,
    handleDirectInputChange,
  } = useInvoiceFormManagement();

  const previewRef = useRef(null);
  const headerHeight = '6rem'; 

  return (
    <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="container mx-auto px-4 sm:px-6 py-8"
      >
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className={`lg:col-span-2 min-h-[calc(100vh-${headerHeight})]`}>
            <InvoiceForm
              invoice={invoice}
              onInputChange={handleInputChange}
              onDirectInputChange={handleDirectInputChange}
              onDateChange={handleDateChange}
              onAddItem={handleAddItemBasedOnWorkType}
              onUpdateItem={handleUpdateItemBasedOnWorkType}
              onRemoveItem={handleRemoveItemBasedOnWorkType}
              onWorkTypeChange={handleWorkTypeChange}
              onSelectLayout={handleSelectLayout} 
              onAddWorkDay={handleAddWorkDay}
              onUpdateWorkDay={handleUpdateWorkDay}
              onRemoveWorkDay={handleRemoveWorkDay}
              setInvoice={setInvoice}
              fileInputRef={fileInputRef} 
              onLogoUpload={handleLogoUpload}
            />
          </div>
          <div className="lg:col-span-1 self-start lg:sticky lg:top-[calc(var(--header-height,6rem)+1.5rem)]">
            <InvoiceSidebar 
              invoice={invoice} 
              previewRef={previewRef}
              onSelectLayout={handleSelectLayout}
            />
          </div>
        </div>
      </motion.div>
  );
};

export default InvoiceDetailsPage;