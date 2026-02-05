import React from 'react';
import { Button } from "@/components/ui/button";
import { PlusCircle, Trash2, CalendarDays, Clock } from "lucide-react";
import FormInput from "@/components/invoice/formElements/FormInput";
import FormTextarea from "@/components/invoice/formElements/FormTextarea";
import FormSelect from "@/components/invoice/formElements/FormSelect";
import FormDatePicker from "@/components/invoice/formElements/FormDatePicker";

const WorkItemsForm = ({ 
  invoice, 
  onWorkTypeChange, 
  onInputChange, 
  onAddItem, 
  onUpdateItem, 
  onRemoveItem,
  onAddWorkDay,
  onUpdateWorkDay,
  onRemoveWorkDay
}) => {
  
  const handleTaxSettingChange = (e) => {
    onInputChange({ target: { name: 'taxIncluded', value: e.target.value === 'inclusive' } });
  };

  const handleTaxRateChange = (e) => {
    onInputChange({ target: { name: 'tax', value: e.target.value } });
  };
  
  const handleWorkTypeSelectChange = (e) => {
    onWorkTypeChange(e.target.value);
  };


  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
        <FormSelect
          label="Facturatietype"
          name="workType"
          value={invoice.workType}
          onChange={handleWorkTypeSelectChange}
          options={[
            { value: 'fixed', label: 'Vaste prijs (per item/project)' },
            { value: 'hourly', label: 'Uurtarief (per uur gewerkt)' },
          ]}
        />
        {invoice.workType === 'hourly' && (
          <FormInput
            label="Uurtarief" 
            name="amount" 
            type="number"
            value={invoice.amount || ''} 
            onChange={onInputChange}
            placeholder="Bijv. 50"
            min="0"
            step="0.01"
          />
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
        <FormSelect
            label="BTW Tarief"
            name="tax"
            value={invoice.tax}
            onChange={handleTaxRateChange}
            options={[
              { value: '21', label: '21% (Standaard tarief)' },
              { value: '9', label: '9% (Laag tarief)' },
              { value: '0', label: '0% (BTW verlegd / Vrijgesteld)' },
            ]}
          />
        <FormSelect
          label="Prijsweergave"
          name="taxSetting" 
          value={invoice.taxIncluded ? 'inclusive' : 'exclusive'}
          onChange={handleTaxSettingChange}
          options={[
            { value: 'exclusive', label: 'Prijzen excl. BTW' },
            { value: 'inclusive', label: 'Prijzen incl. BTW' },
          ]}
          />
      </div>

      {invoice.workType === 'fixed' && (
        <div className="space-y-4">
          <h4 className="text-md font-semibold text-gray-700 border-b pb-2">Items/Diensten</h4>
          {(invoice.items || []).map((item, index) => (
            <div key={item.id} className="p-4 border rounded-lg bg-gray-50/50 space-y-3 relative">
              <FormInput
                label="Item/Dienst naam"
                placeholder="Bijv. Webdesign, Advies"
                value={item.itemName || ''}
                onChange={(e) => onUpdateItem(index, 'itemName', e.target.value)}
                inputClassName="text-sm"
                labelClassName="text-xs"
              />
              <FormTextarea
                label="Omschrijving (optioneel)"
                placeholder="Korte toelichting"
                value={item.itemDescription || ''}
                onChange={(e) => onUpdateItem(index, 'itemDescription', e.target.value)}
                rows={2}
                inputClassName="text-sm"
                labelClassName="text-xs"
              />
              <div className="grid grid-cols-2 gap-3">
                <FormInput
                  label="Aantal"
                  type="number"
                  min="0"
                  value={item.quantity || ''}
                  onChange={(e) => onUpdateItem(index, 'quantity', parseFloat(e.target.value) || 0)}
                  inputClassName="text-sm"
                  labelClassName="text-xs"
                />
                <FormInput
                  label="Prijs per stuk" // Changed label
                  type="number"
                  min="0"
                  step="0.01"
                  value={item.price || ''}
                  onChange={(e) => onUpdateItem(index, 'price', parseFloat(e.target.value) || 0)}
                  inputClassName="text-sm"
                  labelClassName="text-xs"
                />
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 text-red-500 hover:text-red-700 hover:bg-red-100"
                onClick={() => onRemoveItem(index)}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          ))}
          <Button type="button" variant="outline" onClick={onAddItem} className="w-full sm:w-auto text-sm">
            <PlusCircle className="w-4 h-4 mr-2" /> Item Toevoegen
          </Button>
        </div>
      )}

      {invoice.workType === 'hourly' && (
        <div className="space-y-4">
          <h4 className="text-md font-semibold text-gray-700 border-b pb-2">Gewerkte Uren</h4>
          {(invoice.hoursWorked || []).map((log, index) => (
            <div key={log.id} className="p-4 border rounded-lg bg-gray-50/50 space-y-3 relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <FormDatePicker
                  label="Datum"
                  selected={log.date}
                  onChange={(date) => onUpdateWorkDay(index, 'date', date)}
                  dateFormat="dd/MM/yyyy"
                  labelClassName="text-xs"
                  inputClassName="text-sm"
                  icon={<CalendarDays className="w-4 h-4 text-gray-400" />}
                />
                <FormInput
                  label="Aantal Uren"
                  type="number"
                  min="0"
                  step="0.25"
                  value={log.hours || ''}
                  onChange={(e) => onUpdateWorkDay(index, 'hours', parseFloat(e.target.value) || 0)}
                  inputClassName="text-sm"
                  labelClassName="text-xs"
                  icon={<Clock className="w-4 h-4 text-gray-400" />}
                />
              </div>
              <FormTextarea
                label="Taakomschrijving"
                placeholder="Beschrijf de uitgevoerde werkzaamheden"
                value={log.taskDescription || ''}
                onChange={(e) => onUpdateWorkDay(index, 'taskDescription', e.target.value)}
                rows={2}
                inputClassName="text-sm"
                labelClassName="text-xs"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 text-red-500 hover:text-red-700 hover:bg-red-100"
                onClick={() => onRemoveWorkDay(index)}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          ))}
          <Button type="button" variant="outline" onClick={onAddWorkDay} className="w-full sm:w-auto text-sm">
            <PlusCircle className="w-4 h-4 mr-2" /> Urenregel Toevoegen
          </Button>
        </div>
      )}

       <div className="space-y-4 pt-4 border-t">
          <FormTextarea 
            label="Notities (optioneel)"
            name="notes"
            value={invoice.notes}
            onChange={onInputChange}
            placeholder="Bijv. extra details over de factuur, een persoonlijke boodschap..."
            rows={2}
          />
          <FormTextarea
            label="Betaalvoorwaarden (optioneel)"
            name="terms"
            value={invoice.terms}
            onChange={onInputChange}
            placeholder="Bijv. Betaling binnen 14 dagen na factuurdatum."
            rows={2}
          />
        </div>

    </div>
  );
};

export default WorkItemsForm;