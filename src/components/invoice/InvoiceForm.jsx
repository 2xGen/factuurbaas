import React from 'react';
import { motion } from 'framer-motion';
import { Info, FileText, Users as UsersIcon, Palette, Briefcase, Bell } from 'lucide-react';

import InvoiceFormSection from '@/components/invoice/formSections/InvoiceFormSection';
import CompanyDetailsForm from '@/components/invoice/formSections/CompanyDetailsForm';
import InvoiceMetaForm from '@/components/invoice/formSections/InvoiceMetaForm';
import ReceiverDetailsForm from '@/components/invoice/formSections/ReceiverDetailsForm';
import WorkItemsForm from '@/components/invoice/formSections/WorkItemsForm';
import LayoutSelector from '@/components/invoice/LayoutSelector';
import FeatureUpdatesSignup from '@/components/invoice/FeatureUpdatesSignup';

const CompanyInfoSection = ({
  invoice,
  onInputChange,
  onLogoUpload,
  onRememberChange,
  fileInputRef,
}) => (
  <InvoiceFormSection title="Jouw Bedrijfsgegevens" icon={<Info className="w-5 h-5 text-blue-600" />}>
    <CompanyDetailsForm
      companyDetails={invoice.companyDetails}
      logo={invoice.logo}
      rememberCompanyDetails={invoice.rememberCompanyDetails}
      onInputChange={onInputChange}
      onLogoUpload={onLogoUpload}
      onRememberChange={onRememberChange}
      fileInputRef={fileInputRef}
    />
  </InvoiceFormSection>
);

const PrimaryDetailsSection = ({
  invoice,
  onInputChange,
  onDateChange,
  onPaymentTermChange,
}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <InvoiceFormSection title="Factuur Details" icon={<FileText className="w-5 h-5 text-blue-600" />}>
      <InvoiceMetaForm
        invoiceName={invoice.invoiceName}
        invoiceNumber={invoice.invoice_number}
        invoiceDate={invoice.invoiceDate}
        dueDate={invoice.dueDate}
        paymentTermDays={invoice.paymentTermDays}
        currency={invoice.currency}
        pdfLanguage={invoice.pdfLanguage}
        onInputChange={onInputChange}
        onDateChange={onDateChange}
        onPaymentTermChange={onPaymentTermChange}
      />
    </InvoiceFormSection>

    <InvoiceFormSection title="Gegevens Ontvanger" icon={<UsersIcon className="w-5 h-5 text-blue-600" />}>
      <ReceiverDetailsForm
        receiverDetails={invoice.receiverDetails}
        onInputChange={onInputChange}
      />
    </InvoiceFormSection>
  </div>
);

const WorkAndLayoutSection = ({
  invoice,
  onWorkTypeChange,
  onInputChange,
  onAddItem,
  onUpdateItem,
  onRemoveItem,
  onAddWorkDay,
  onUpdateWorkDay,
  onRemoveWorkDay,
  onSelectLayout,
}) => (
  <>
    <InvoiceFormSection title="Werkzaamheden & Specificaties" icon={<Briefcase className="w-5 h-5 text-blue-600" />}>
      <WorkItemsForm
        invoice={invoice}
        onWorkTypeChange={onWorkTypeChange}
        onInputChange={onInputChange}
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
  onDateChange,
  onPaymentTermChange,
  onRememberChange,
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
        onLogoUpload={onLogoUpload}
        onRememberChange={onRememberChange}
        fileInputRef={fileInputRef}
      />

      <PrimaryDetailsSection
        invoice={invoice}
        onInputChange={onInputChange}
        onDateChange={onDateChange}
        onPaymentTermChange={onPaymentTermChange}
      />

      <WorkAndLayoutSection
        invoice={invoice}
        onWorkTypeChange={onWorkTypeChange}
        onInputChange={onInputChange}
        onAddItem={onAddItem}
        onUpdateItem={onUpdateItem}
        onRemoveItem={onRemoveItem}
        onAddWorkDay={onAddWorkDay}
        onUpdateWorkDay={onUpdateWorkDay}
        onRemoveWorkDay={onRemoveWorkDay}
        onSelectLayout={onSelectLayout}
      />

      <InvoiceFormSection title="Blijf op de hoogte (optioneel)" icon={<Bell className="w-5 h-5 text-blue-600" />}>
        <FeatureUpdatesSignup companyEmail={invoice.companyDetails?.email} />
      </InvoiceFormSection>
    </motion.div>
  );
};

export default InvoiceForm;
