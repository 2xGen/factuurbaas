import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PlusCircle, Trash2, CalendarDays, Clock } from 'lucide-react';
import FormInput from '@/components/invoice/formElements/FormInput';
import FormTextarea from '@/components/invoice/formElements/FormTextarea';
import FormSelect from '@/components/invoice/formElements/FormSelect';
import FormDatePicker from '@/components/invoice/formElements/FormDatePicker';
import MeerOpties from '@/components/invoice/formElements/MeerOpties';
import { TAX_OPTIONS, LINE_TAX_OPTIONS } from '@/lib/invoiceConfig';
import { cn } from '@/lib/utils';

const VAT_HINTS = {
  '21': 'Het meest gebruikelijke tarief.',
  '9': 'Laag tarief, bijvoorbeeld voor eten of boeken.',
  '0': '0% BTW.',
  exempt: 'Geen BTW in rekening gebracht.',
  reverse: 'BTW verlegd naar de afnemer.',
  custom: 'Vul zelf een percentage in.',
};

const SIMPLE_TAX_OPTIONS = TAX_OPTIONS.map((opt) => ({
  value: opt.value,
  label:
    opt.value === '21'
      ? '21%'
      : opt.value === '9'
        ? '9%'
        : opt.value === '0'
          ? '0%'
          : opt.value === 'exempt'
            ? 'Vrijgesteld'
            : opt.value === 'reverse'
              ? 'Verlegd'
              : 'Anders %',
}));

const WorkItemsForm = ({
  invoice,
  onInputChange,
  onAddItem,
  onUpdateItem,
  onRemoveItem,
  onAddWorkDay,
  onUpdateWorkDay,
  onRemoveWorkDay,
}) => {
  const [pendingType, setPendingType] = useState('product');

  const handleTaxRateChange = (e) => {
    onInputChange({ target: { name: 'tax', value: e.target.value } });
  };

  const handleExtraCostChange = (e) => {
    onInputChange({
      target: {
        name: e.target.name,
        value: e.target.value,
        dataset: { section: 'extraCosts' },
      },
    });
  };

  const invoiceLevelSpecial = ['exempt', 'reverse'].includes(invoice.tax);
  const allowPerLineTax = !invoiceLevelSpecial;
  const extra = invoice.extraCosts || {};
  const hasExtraCosts = Boolean(extra.travel || extra.shipping || extra.material);
  const [showExtraCosts, setShowExtraCosts] = useState(hasExtraCosts);
  const taxIsNonDefault = invoice.tax !== '21' || invoice.taxIncluded;

  const items = invoice.items || [];
  const hoursWorked = invoice.hoursWorked || [];
  const hasLines = items.length > 0 || hoursWorked.length > 0;

  const lineTaxValue = (item) =>
    item.tax != null && item.tax !== '' ? String(item.tax) : String(invoice.tax || '21');

  const handleAddLine = () => {
    if (pendingType === 'hours') onAddWorkDay();
    else onAddItem();
  };

  return (
    <div className="space-y-5">
      {!hasLines && (
        <p className="rounded-lg border border-dashed border-slate-200 bg-slate-50 px-4 py-6 text-center text-sm text-slate-500">
          Voeg hieronder toe wat je hebt geleverd.
        </p>
      )}

      {items.length > 0 && (
        <div className="space-y-3">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="relative space-y-3 rounded-xl border border-slate-200 bg-white p-4"
            >
              <FormInput
                label="Omschrijving"
                placeholder="Bijv. Website ontwerp, bouten, schilderwerk"
                value={item.itemName || ''}
                onChange={(e) => onUpdateItem(index, 'itemName', e.target.value)}
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
                  label="Prijs"
                  type="number"
                  min="0"
                  step="0.01"
                  value={item.price || ''}
                  onChange={(e) => onUpdateItem(index, 'price', parseFloat(e.target.value) || 0)}
                  inputClassName="text-sm"
                  labelClassName="text-xs"
                />
              </div>
              {allowPerLineTax && (
                <div className="grid grid-cols-2 gap-3">
                  <FormSelect
                    label="BTW"
                    name={`item-tax-${index}`}
                    value={lineTaxValue(item)}
                    onChange={(e) => onUpdateItem(index, 'tax', e.target.value)}
                    options={LINE_TAX_OPTIONS}
                    labelClassName="text-xs"
                  />
                  {lineTaxValue(item) === 'custom' && (
                    <FormInput
                      label="Percentage"
                      type="number"
                      min="0"
                      max="100"
                      step="0.01"
                      value={item.customTaxRate ?? ''}
                      onChange={(e) =>
                        onUpdateItem(
                          index,
                          'customTaxRate',
                          e.target.value === '' ? '' : parseFloat(e.target.value)
                        )
                      }
                      placeholder="Bijv. 13"
                      inputClassName="text-sm"
                      labelClassName="text-xs"
                    />
                  )}
                </div>
              )}
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-2 top-2 text-red-500 hover:bg-red-50 hover:text-red-700"
                onClick={() => onRemoveItem(index)}
                aria-label="Regel verwijderen"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      )}

      {hoursWorked.length > 0 && (
        <div className="space-y-3">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h4 className="text-sm font-semibold text-slate-800">Uren</h4>
            <div className="w-full max-w-[10rem]">
              <FormInput
                label="Uurtarief"
                name="amount"
                type="number"
                value={invoice.amount || ''}
                onChange={onInputChange}
                placeholder="75"
                min="0"
                step="0.01"
                inputClassName="text-sm"
                labelClassName="text-xs"
              />
            </div>
          </div>
          {hoursWorked.map((log, index) => (
            <div
              key={log.id}
              className="relative space-y-3 rounded-xl border border-slate-200 bg-white p-4"
            >
              <FormInput
                label="Omschrijving"
                placeholder="Bijv. Advieswerk, montage"
                value={log.taskDescription || ''}
                onChange={(e) => onUpdateWorkDay(index, 'taskDescription', e.target.value)}
                inputClassName="text-sm"
                labelClassName="text-xs"
              />
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <FormInput
                  label="Uren"
                  type="number"
                  min="0"
                  step="0.25"
                  value={log.hours || ''}
                  onChange={(e) => onUpdateWorkDay(index, 'hours', parseFloat(e.target.value) || 0)}
                  inputClassName="text-sm"
                  labelClassName="text-xs"
                  icon={<Clock className="h-4 w-4 text-gray-400" />}
                />
                <FormDatePicker
                  label="Datum"
                  selected={log.date}
                  onChange={(date) => onUpdateWorkDay(index, 'date', date)}
                  dateFormat="dd/MM/yyyy"
                  labelClassName="text-xs"
                  inputClassName="text-sm"
                  icon={<CalendarDays className="h-4 w-4 text-gray-400" />}
                />
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-2 top-2 text-red-500 hover:bg-red-50 hover:text-red-700"
                onClick={() => onRemoveWorkDay(index)}
                aria-label="Urenregel verwijderen"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      )}

      <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3">
        <p className="mb-2 text-xs font-medium text-slate-600">Type</p>
        <div className="mb-3 flex gap-2">
          <button
            type="button"
            onClick={() => setPendingType('product')}
            className={cn(
              'rounded-lg px-3 py-1.5 text-sm font-medium transition-colors',
              pendingType === 'product'
                ? 'bg-deep-blue text-white'
                : 'bg-white text-slate-600 ring-1 ring-slate-200'
            )}
          >
            Product
          </button>
          <button
            type="button"
            onClick={() => setPendingType('hours')}
            className={cn(
              'rounded-lg px-3 py-1.5 text-sm font-medium transition-colors',
              pendingType === 'hours'
                ? 'bg-deep-blue text-white'
                : 'bg-white text-slate-600 ring-1 ring-slate-200'
            )}
          >
            Uren
          </button>
        </div>
        <Button type="button" variant="outline" onClick={handleAddLine} className="w-full sm:w-auto">
          <PlusCircle className="mr-2 h-4 w-4" /> Regel toevoegen
        </Button>
      </div>

      <MeerOpties defaultOpen={taxIsNonDefault} label="BTW-instellingen">
        <div>
          <FormSelect
            label="BTW"
            name="tax"
            value={invoice.tax}
            onChange={handleTaxRateChange}
            options={SIMPLE_TAX_OPTIONS}
          />
          <p className="mt-1.5 text-xs text-slate-500">
            {VAT_HINTS[invoice.tax] || VAT_HINTS['21']}
          </p>
          {invoice.tax === 'custom' && (
            <div className="mt-3">
              <FormInput
                label="Percentage"
                name="customTaxRate"
                type="number"
                min="0"
                max="100"
                step="0.01"
                value={invoice.customTaxRate ?? ''}
                onChange={onInputChange}
                placeholder="Bijv. 13"
              />
            </div>
          )}
        </div>
      </MeerOpties>

      <MeerOpties defaultOpen={showExtraCosts} label="Extra kosten of notities">
        <label className="flex cursor-pointer items-center gap-3">
          <input
            type="checkbox"
            checked={showExtraCosts}
            onChange={(e) => setShowExtraCosts(e.target.checked)}
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-sm text-gray-700">Voorrijden, verzending of materiaal</span>
        </label>
        {showExtraCosts && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <FormInput
              label="Voorrijkosten"
              name="travel"
              type="number"
              min="0"
              step="0.01"
              value={extra.travel || ''}
              onChange={handleExtraCostChange}
              placeholder="0,00"
            />
            <FormInput
              label="Verzendkosten"
              name="shipping"
              type="number"
              min="0"
              step="0.01"
              value={extra.shipping || ''}
              onChange={handleExtraCostChange}
              placeholder="0,00"
            />
            <FormInput
              label="Materiaalkosten"
              name="material"
              type="number"
              min="0"
              step="0.01"
              value={extra.material || ''}
              onChange={handleExtraCostChange}
              placeholder="0,00"
            />
          </div>
        )}
        <FormTextarea
          label="Notitie"
          name="notes"
          value={invoice.notes}
          onChange={onInputChange}
          placeholder="Optioneel"
          rows={2}
        />
        <FormTextarea
          label="Betaalvoorwaarden"
          name="terms"
          value={invoice.terms}
          onChange={onInputChange}
          placeholder="Wordt automatisch ingevuld via de betaaltermijn"
          rows={2}
        />
      </MeerOpties>
    </div>
  );
};

export default WorkItemsForm;
