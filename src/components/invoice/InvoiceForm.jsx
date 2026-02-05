import React from 'react';
import { motion } from 'framer-motion';
import { Info, FileText, Users as UsersIcon, Palette, Briefcase } from 'lucide-react';

import InvoiceFormSection from '@/components/invoice/formSections/InvoiceFormSection';
import CompanyDetailsForm from '@/components/invoice/formSections/CompanyDetailsForm';
import InvoiceMetaForm from '@/components/invoice/formSections/InvoiceMetaForm';
import ReceiverDetailsForm from '@/components/invoice/formSections/ReceiverDetailsForm';
import WorkItemsForm from '@/components/invoice/formSections/WorkItemsForm';
import LayoutSelector from '@/components/invoice/LayoutSelector';

const CompanyInfoSection = ({ invoice, onInputChange, onLogoUpload, fileInputRef, onDirectInputChange }) => (
  <InvoiceFormSection title="Jouw Bedrijfsgegevens" icon={<Info className="w-5 h-5 text-blue-600" />}>
    <CompanyDetailsForm
      companyDetails={invoice.companyDetails}
      logo={invoice.logo}
      onInputChange={onInputChange} 
      onDirectInputChange={onDirectInputChange}
      onLogoUpload={onLogoUpload}
      fileInputRef={fileInputRef}
    />
  </InvoiceFormSection>
);

const PrimaryDetailsSection = ({ invoice, onInputChange, onDateChange, onDirectInputChange }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <InvoiceFormSection title="Factuur Details" icon={<FileText className="w-5 h-5 text-blue-600" />}>
      <InvoiceMetaForm
        invoiceName={invoice.invoiceName}
        invoiceNumber={invoice.invoice_number} 
        invoiceDate={invoice.invoiceDate}
        dueDate={invoice.dueDate}
        onInputChange={onInputChange}
        onDirectInputChange={onDirectInputChange}
        onDateChange={onDateChange}
      />
    </InvoiceFormSection>

    <InvoiceFormSection title="Gegevens Ontvanger" icon={<UsersIcon className="w-5 h-5 text-blue-600" />}>
      <ReceiverDetailsForm
        receiverName={invoice.receiverName}
        email={invoice.email}
        address={invoice.address}
        onInputChange={onInputChange}
        onDirectInputChange={onDirectInputChange}
        saveContactChecked={false} 
        setSaveContactChecked={() => {}} 
        userLoggedIn={false} 
      />
    </InvoiceFormSection>
  </div>
);

const WorkAndLayoutSection = ({ 
  invoice, 
  onWorkTypeChange, 
  onInputChange,
  onDirectInputChange, 
  onAddItem, 
  onUpdateItem, 
  onRemoveItem, 
  onAddWorkDay, 
  onUpdateWorkDay, 
  onRemoveWorkDay, 
  onSelectLayout 
}) => (
  <>
    <InvoiceFormSection title="Werkzaamheden & Specificaties" icon={<Briefcase className="w-5 h-5 text-blue-600" />}>
      <WorkItemsForm
        invoice={invoice} 
        onWorkTypeChange={onWorkTypeChange}
        onInputChange={onInputChange} 
        onDirectInputChange={onDirectInputChange}
        onAddItem={onAddItem}
        onUpdateItem={onUpdateItem}
        onRemoveItem={onRemoveItem}
        onAddWorkDay={onAddWorkDay}
        onUpdateWorkDay={onUpdateWorkDay}
        onRemoveWorkDay={onRemoveWorkDay}
      />
    </InvoiceFormSection>

    <InvoiceFormSection title="Kies Jouw Factuur Stijl" icon={<Palette className="w-5 h-5 text-blue-600" />}>
      <LayoutSelector currentLayout={invoice.layout} onSelectLayout={onSelectLayout} /> 
    </InvoiceFormSection>
  </>
);


const InvoiceForm = ({
  invoice,
  onInputChange,
  onDirectInputChange,
  onDateChange,
  onLogoUpload,
  onWorkTypeChange,
  onAddItem,
  onUpdateItem,
  onRemoveItem,
  onAddWorkDay,
  onUpdateWorkDay,
  onRemoveWorkDay,
  fileInputRef,
  onSelectLayout,
  setInvoice 
}) => {

  if (!invoice) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <CompanyInfoSection 
        invoice={invoice}
        onInputChange={onInputChange}
        onDirectInputChange={onDirectInputChange}
        onLogoUpload={onLogoUpload}
        fileInputRef={fileInputRef}
      />

      <PrimaryDetailsSection 
        invoice={invoice}
        onInputChange={onInputChange}
        onDirectInputChange={onDirectInputChange}
        onDateChange={onDateChange}
      />

      <WorkAndLayoutSection
        invoice={invoice}
        onWorkTypeChange={onWorkTypeChange}
        onInputChange={onInputChange}
        onDirectInputChange={onDirectInputChange}
        onAddItem={onAddItem}
        onUpdateItem={onUpdateItem}
        onRemoveItem={onRemoveItem}
        onAddWorkDay={onAddWorkDay}
        onUpdateWorkDay={onUpdateWorkDay}
        onRemoveWorkDay={onRemoveWorkDay}
        onSelectLayout={onSelectLayout} 
      />

    </motion.div>
  );
};

export default InvoiceForm;