'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { PlusCircle, Trash2, CalendarDays, Clock } from 'lucide-react';
import FormInput from '@/components/invoice/formElements/FormInput';
import FormSelect from '@/components/invoice/formElements/FormSelect';
import FormDatePicker from '@/components/invoice/formElements/FormDatePicker';
import { LINE_TAX_OPTIONS } from '@/lib/invoiceConfig';

/**
 * Quote line items — same UX as invoice Step 4 (product/uren, BTW per regel, incl. BTW).
 */
export default function QuoteWorkItemsForm({
  quote,
  onAddItem,
  onUpdateItem,
  onRemoveItem,
  onAddWorkDay,
  onUpdateWorkDay,
  onRemoveWorkDay,
  onTaxIncludedChange,
  onHourlyRateChange,
  onHoursTaxChange,
  onCustomTaxRateChange,
}) {
  const pricesInclVat = Boolean(quote.taxIncluded);
  const priceLabel = pricesInclVat ? 'Prijs (incl. BTW)' : 'Prijs';
  const hourlyLabel = pricesInclVat ? 'Uurtarief (incl. BTW)' : 'Uurtarief';

  const items = quote.items || [];
  const hoursWorked = quote.hoursWorked || [];
  const hasLines = items.length > 0 || hoursWorked.length > 0;

  const defaultTax = String(quote.tax || quote.taxRate || '21');
  const lineTaxValue = (item) =>
    item.tax != null && item.tax !== '' ? String(item.tax) : defaultTax;

  const hoursTaxValue = ['21', '9', '0', 'reverse', 'exempt', 'custom'].includes(
    String(quote.tax || '')
  )
    ? String(quote.tax)
    : '21';

  return (
    <div className="space-y-5">
      <p className="text-sm text-slate-600">
        Voeg producten of uren toe aan je offerte. Kies de BTW per regel.
      </p>

      <div className="flex flex-col gap-2 sm:flex-row">
        <Button type="button" variant="outline" onClick={onAddItem} className="flex-1">
          <PlusCircle className="mr-2 h-4 w-4" /> Product toevoegen
        </Button>
        <Button type="button" variant="outline" onClick={onAddWorkDay} className="flex-1">
          <PlusCircle className="mr-2 h-4 w-4" /> Uren toevoegen
        </Button>
      </div>

      {!hasLines && (
        <p className="text-center text-sm text-slate-500">
          Kies hierboven wat je wilt toevoegen. Vul daarna de omschrijving, prijs en BTW in.
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
                placeholder="Bijv. Website ontwerp, schilderwerk"
                value={item.description || ''}
                onChange={(e) => onUpdateItem(index, 'description', e.target.value)}
                inputClassName="text-sm"
                labelClassName="text-xs"
              />
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
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
                  label={priceLabel}
                  type="number"
                  min="0"
                  step="0.01"
                  value={item.price || ''}
                  onChange={(e) => onUpdateItem(index, 'price', parseFloat(e.target.value) || 0)}
                  inputClassName="text-sm"
                  labelClassName="text-xs"
                />
                <FormSelect
                  label="BTW"
                  name={`quote-item-tax-${index}`}
                  value={lineTaxValue(item)}
                  onChange={(e) => onUpdateItem(index, 'tax', e.target.value)}
                  options={LINE_TAX_OPTIONS}
                  labelClassName="text-xs"
                />
              </div>
              {lineTaxValue(item) === 'custom' && (
                <FormInput
                  label="BTW-percentage"
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
          <h4 className="text-sm font-semibold text-slate-800">Uren</h4>
          <div
            className={`grid max-w-md gap-3 ${
              hoursTaxValue === 'custom' ? 'grid-cols-3' : 'grid-cols-2'
            }`}
          >
            <FormInput
              label={hourlyLabel}
              type="number"
              value={quote.amount || ''}
              onChange={(e) => onHourlyRateChange(parseFloat(e.target.value) || 0)}
              placeholder="75"
              min="0"
              step="0.01"
              inputClassName="text-sm"
              labelClassName="text-xs"
            />
            <FormSelect
              label="BTW"
              name="quote-hours-tax"
              value={hoursTaxValue}
              onChange={(e) => onHoursTaxChange(e.target.value)}
              options={LINE_TAX_OPTIONS}
              labelClassName="text-xs"
            />
            {hoursTaxValue === 'custom' && (
              <FormInput
                label="%"
                type="number"
                min="0"
                max="100"
                step="0.01"
                value={quote.customTaxRate ?? ''}
                onChange={(e) =>
                  onCustomTaxRateChange(
                    e.target.value === '' ? '' : parseFloat(e.target.value)
                  )
                }
                inputClassName="text-sm"
                labelClassName="text-xs"
              />
            )}
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

      {hasLines && (
        <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
          <input
            type="checkbox"
            checked={Boolean(quote.taxIncluded)}
            onChange={(e) => onTaxIncludedChange(e.target.checked)}
            className="h-4 w-4 rounded border-gray-300 text-deep-blue focus:ring-deep-blue"
          />
          Prijzen zijn inclusief BTW
        </label>
      )}
    </div>
  );
}
