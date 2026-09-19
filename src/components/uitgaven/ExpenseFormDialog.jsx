'use client';

import React, { useEffect, useMemo, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import {
  EXPENSE_CATEGORIES,
  INTERVAL_PRESETS,
  VAT_RATES,
  computeVatBreakdown,
  emptyExpense,
  previewRecurringCount,
  resolveRecurUntil,
} from '@/lib/expensePersistence';
import { formatEuro } from '@/lib/dashboardCockpit';
import { cn } from '@/lib/utils';

const fieldClass =
  'w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-deep-blue/40 focus:ring-2 focus:ring-deep-blue/10';

function Field({ label, hint, htmlFor, children, className }) {
  return (
    <div className={cn('space-y-1.5', className)}>
      {label && (
        <Label htmlFor={htmlFor} className="text-sm font-medium text-slate-700">
          {label}
        </Label>
      )}
      {children}
      {hint && <p className="text-xs text-slate-400">{hint}</p>}
    </div>
  );
}

export default function ExpenseFormDialog({ open, onClose, onSave, initialExpense, isSaving }) {
  const [form, setForm] = useState(emptyExpense());
  const isEdit = Boolean(initialExpense?.id);

  useEffect(() => {
    if (!open) return;
    if (initialExpense?.id) {
      setForm({
        ...emptyExpense(),
        expenseDate: initialExpense.expenseDate,
        description: initialExpense.description || '',
        supplier: initialExpense.supplier || '',
        category: initialExpense.category || 'overig',
        amountExcl:
          initialExpense.amountExcl === 0 || initialExpense.amountExcl
            ? String(initialExpense.amountExcl)
            : '',
        vatRate: initialExpense.vatRate ?? 21,
        notes: initialExpense.notes || '',
        isRecurring: Boolean(initialExpense.isRecurring),
        intervalDays: initialExpense.intervalDays || 30,
        recurUntil: initialExpense.recurUntil || '',
        recurrenceGroupId: initialExpense.recurrenceGroupId || null,
      });
    } else {
      setForm(emptyExpense());
    }
  }, [open, initialExpense]);

  const setField = (name, value) => setForm((prev) => ({ ...prev, [name]: value }));

  const breakdown = useMemo(
    () => computeVatBreakdown(form.amountExcl, form.vatRate),
    [form.amountExcl, form.vatRate]
  );

  const occurrenceCount = useMemo(() => {
    if (!form.isRecurring || isEdit) return 1;
    return previewRecurringCount(form.expenseDate, form.intervalDays, form.recurUntil || null);
  }, [form.isRecurring, form.expenseDate, form.intervalDays, form.recurUntil, isEdit]);

  const effectiveUntil = useMemo(() => {
    if (!form.isRecurring) return '';
    return resolveRecurUntil(form.expenseDate, form.recurUntil || null);
  }, [form.isRecurring, form.expenseDate, form.recurUntil]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.description?.trim()) return;
    onSave(form);
  };

  const canSave =
    Boolean(form.description?.trim()) && Number(form.amountExcl) >= 0 && form.amountExcl !== '';

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="flex max-h-[92vh] flex-col gap-0 overflow-hidden p-0 sm:max-w-xl">
        <DialogHeader className="shrink-0 border-b border-slate-100 px-5 py-4 sm:px-6">
          <DialogTitle className="font-heading text-xl text-deep-blue">
            {isEdit ? 'Uitgave bewerken' : 'Nieuwe uitgave'}
          </DialogTitle>
          <DialogDescription className="text-sm text-slate-500">
            {isEdit
              ? 'Pas deze ene uitgave aan. Andere herhalingen blijven ongewijzigd.'
              : 'Voeg een uitgave toe — optioneel als terugkerende uitgave.'}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex min-h-0 flex-1 flex-col">
          <div className="flex-1 space-y-6 overflow-y-auto px-5 py-5 sm:px-6">
            {/* What */}
            <section className="space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Wat heb je betaald?
              </p>
              <Field label="Omschrijving" htmlFor="expense-description">
                <input
                  id="expense-description"
                  className={fieldClass}
                  value={form.description}
                  onChange={(e) => setField('description', e.target.value)}
                  placeholder="Bijv. Adobe Creative Cloud"
                  required
                  autoFocus
                />
              </Field>

              <div className="grid gap-3 sm:grid-cols-2">
                <Field label="Datum" htmlFor="expense-date">
                  <input
                    id="expense-date"
                    type="date"
                    className={fieldClass}
                    value={form.expenseDate}
                    onChange={(e) => setField('expenseDate', e.target.value)}
                    required
                  />
                </Field>
                <Field label="Leverancier" htmlFor="expense-supplier" hint="Optioneel">
                  <input
                    id="expense-supplier"
                    className={fieldClass}
                    value={form.supplier}
                    onChange={(e) => setField('supplier', e.target.value)}
                    placeholder="Bijv. Coolblue"
                  />
                </Field>
              </div>

              <Field label="Categorie">
                <div className="flex flex-wrap gap-1.5">
                  {EXPENSE_CATEGORIES.map((c) => {
                    const active = form.category === c.id;
                    return (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => setField('category', c.id)}
                        className={cn(
                          'rounded-full px-3 py-1.5 text-xs font-medium transition',
                          active
                            ? 'bg-deep-blue text-white'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        )}
                      >
                        {c.label}
                      </button>
                    );
                  })}
                </div>
              </Field>
            </section>

            {/* Amount */}
            <section className="space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Bedrag
              </p>
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/80">
                <div className="grid gap-3 p-4 sm:grid-cols-[1.4fr_1fr]">
                  <Field label="Excl. btw" htmlFor="expense-amount">
                    <div className="relative">
                      <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-slate-400">
                        €
                      </span>
                      <input
                        id="expense-amount"
                        type="number"
                        inputMode="decimal"
                        step="0.01"
                        min="0"
                        className={cn(fieldClass, 'pl-8 font-semibold tabular-nums')}
                        value={form.amountExcl}
                        onChange={(e) => setField('amountExcl', e.target.value)}
                        placeholder="0,00"
                        required
                      />
                    </div>
                  </Field>
                  <Field label="BTW" htmlFor="expense-vat">
                    <div className="flex gap-1.5">
                      {VAT_RATES.map((r) => {
                        const active = Number(form.vatRate) === r.value;
                        return (
                          <button
                            key={r.value}
                            type="button"
                            onClick={() => setField('vatRate', r.value)}
                            className={cn(
                              'flex-1 rounded-xl border py-2.5 text-sm font-semibold transition',
                              active
                                ? 'border-deep-blue bg-deep-blue text-white'
                                : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                            )}
                          >
                            {r.label}
                          </button>
                        );
                      })}
                    </div>
                  </Field>
                </div>
                <div className="flex items-center justify-between border-t border-slate-200/80 bg-white px-4 py-3">
                  <div className="text-sm text-slate-500">
                    BTW {formatEuro(breakdown.vatAmount)}
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      Totaal incl. btw
                    </p>
                    <p className="font-heading text-xl font-bold tabular-nums text-deep-blue">
                      {formatEuro(breakdown.amountIncl)}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Recurring */}
            <section className="overflow-hidden rounded-2xl border border-slate-200">
              <div className="flex items-center justify-between gap-3 bg-white px-4 py-3.5">
                <div>
                  <p className="text-sm font-semibold text-deep-blue">Terugkerende uitgave</p>
                  <p className="text-xs text-slate-500">
                    {isEdit
                      ? 'Metadata van deze regel — bewerkt niet de hele reeks.'
                      : 'Bijv. abonnement of huur: FactuurBaas maakt de herhalingen aan.'}
                  </p>
                </div>
                <Switch
                  checked={form.isRecurring}
                  onCheckedChange={(v) => setField('isRecurring', v)}
                  aria-label="Terugkerende uitgave"
                />
              </div>

              {form.isRecurring && (
                <div className="space-y-4 border-t border-slate-100 bg-slate-50/60 px-4 py-4">
                  <Field label="Hoe vaak?">
                    <div className="flex flex-wrap gap-1.5">
                      {INTERVAL_PRESETS.map((p) => {
                        const active = Number(form.intervalDays) === p.days;
                        return (
                          <button
                            key={p.days}
                            type="button"
                            onClick={() => setField('intervalDays', p.days)}
                            className={cn(
                              'rounded-full px-3 py-1.5 text-xs font-medium transition',
                              active
                                ? 'bg-deep-blue text-white'
                                : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-100'
                            )}
                          >
                            {p.label}
                          </button>
                        );
                      })}
                    </div>
                  </Field>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <Field
                      label="Elke … dagen"
                      htmlFor="expense-interval"
                      hint="Of kies een preset hierboven"
                    >
                      <input
                        id="expense-interval"
                        type="number"
                        min={1}
                        max={730}
                        className={fieldClass}
                        value={form.intervalDays}
                        onChange={(e) =>
                          setField('intervalDays', Math.max(1, Number(e.target.value) || 1))
                        }
                      />
                    </Field>
                    <Field
                      label="Einddatum"
                      htmlFor="expense-until"
                      hint={
                        isEdit
                          ? 'Alleen ter informatie bij bewerken'
                          : 'Optioneel — laat leeg als de uitgave doorloopt'
                      }
                    >
                      <input
                        id="expense-until"
                        type="date"
                        className={fieldClass}
                        value={form.recurUntil}
                        min={form.expenseDate}
                        onChange={(e) => setField('recurUntil', e.target.value)}
                      />
                    </Field>
                  </div>

                  {!isEdit && (
                    <p className="rounded-xl bg-white px-3 py-2 text-sm text-slate-600 ring-1 ring-slate-200">
                      Dit maakt{' '}
                      <span className="font-semibold text-deep-blue">{occurrenceCount}</span>{' '}
                      {occurrenceCount === 1 ? 'uitgave' : 'uitgaven'} aan
                      {occurrenceCount > 1
                        ? ` · samen ${formatEuro(breakdown.amountExcl * occurrenceCount)} excl. btw`
                        : ''}
                      {!form.recurUntil ? ` · tot ${effectiveUntil}` : ''}.
                    </p>
                  )}
                </div>
              )}
            </section>

            <Field label="Notitie" htmlFor="expense-notes" hint="Optioneel">
              <textarea
                id="expense-notes"
                rows={2}
                className={cn(fieldClass, 'resize-none')}
                value={form.notes}
                onChange={(e) => setField('notes', e.target.value)}
                placeholder="Extra toelichting voor jezelf"
              />
            </Field>
          </div>

          <DialogFooter className="shrink-0 gap-2 border-t border-slate-100 bg-white px-5 py-4 sm:px-6">
            <Button type="button" variant="outline" className="rounded-xl" onClick={onClose}>
              Annuleren
            </Button>
            <Button
              type="submit"
              disabled={!canSave || isSaving}
              className="rounded-xl bg-deep-blue font-semibold hover:bg-deep-blue/90"
            >
              {isSaving
                ? 'Opslaan…'
                : !isEdit && form.isRecurring && occurrenceCount > 1
                  ? `${occurrenceCount} uitgaven opslaan`
                  : 'Opslaan'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
