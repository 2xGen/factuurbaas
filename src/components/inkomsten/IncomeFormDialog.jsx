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
import { Label } from '@/components/ui/label';
import {
  VAT_RATES,
  computeVatBreakdown,
  computeVatBreakdownFromIncl,
} from '@/lib/expensePersistence';
import { PAYMENT_METHODS, emptyIncome } from '@/lib/incomePersistence';
import { formatEuro } from '@/lib/dashboardCockpit';
import { cn } from '@/lib/utils';

const fieldClass =
  'w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-deep-blue/40 focus:ring-2 focus:ring-deep-blue/10';

function moneyInput(n) {
  if (!Number.isFinite(n)) return '';
  return String(Math.round(n * 100) / 100).replace('.', ',');
}

export default function IncomeFormDialog({ open, onClose, onSave, initialIncome, isSaving }) {
  const [form, setForm] = useState(emptyIncome());
  const [amount, setAmount] = useState('');
  const [amountMode, setAmountMode] = useState('incl');
  const isEdit = Boolean(initialIncome?.id);

  useEffect(() => {
    if (!open) return;
    if (initialIncome?.id) {
      setForm({
        ...emptyIncome(),
        incomeDate: initialIncome.incomeDate,
        description: initialIncome.description || '',
        vatRate: initialIncome.vatRate ?? 21,
        paymentMethod: initialIncome.paymentMethod || '',
        notes: initialIncome.notes || '',
      });
      setAmountMode('incl');
      setAmount(
        initialIncome.amountIncl === 0 || initialIncome.amountIncl
          ? moneyInput(Number(initialIncome.amountIncl))
          : moneyInput(
              computeVatBreakdown(initialIncome.amountExcl, initialIncome.vatRate ?? 21).amountIncl
            )
      );
    } else {
      const prefill = initialIncome && !initialIncome.id ? initialIncome : null;
      setForm({
        ...emptyIncome(),
        description: prefill?.description || '',
        vatRate: prefill?.vatRate ?? 21,
      });
      if (prefill?.amountIncl != null && prefill.amountIncl !== '') {
        setAmountMode('incl');
        setAmount(moneyInput(Number(prefill.amountIncl)));
      } else if (prefill?.amountExcl != null && prefill.amountExcl !== '') {
        setAmountMode('excl');
        setAmount(moneyInput(Number(prefill.amountExcl)));
      } else {
        setAmountMode('incl');
        setAmount('');
      }
    }
  }, [open, initialIncome]);

  const breakdown = useMemo(
    () =>
      amountMode === 'incl'
        ? computeVatBreakdownFromIncl(amount, form.vatRate)
        : computeVatBreakdown(amount, form.vatRate),
    [amount, amountMode, form.vatRate]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave?.({
      ...form,
      id: initialIncome?.id,
      amountExcl: breakdown.amountExcl,
      vatRate: breakdown.vatRate,
    });
  };

  return (
    <Dialog open={open} onOpenChange={(next) => !next && onClose?.()}>
      <DialogContent className="max-w-md rounded-2xl">
        <DialogHeader>
          <DialogTitle>{isEdit ? 'Inkomst bewerken' : 'Inkomst toevoegen'}</DialogTitle>
          <DialogDescription>
            Alleen verkopen zonder factuur (winkel, pin, contant). Een factuur die je al hebt
            gemaakt tel je hier niet nog eens.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="income-description">Omschrijving</Label>
            <input
              id="income-description"
              className={fieldClass}
              value={form.description}
              onChange={(e) => setForm((prev) => ({ ...prev, description: e.target.value }))}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="income-date">Datum</Label>
              <input
                id="income-date"
                type="date"
                className={fieldClass}
                value={form.incomeDate}
                onChange={(e) => setForm((prev) => ({ ...prev, incomeDate: e.target.value }))}
                required
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="income-amount">Bedrag</Label>
              <input
                id="income-amount"
                className={fieldClass}
                inputMode="decimal"
                placeholder="0,00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-1 rounded-lg bg-slate-100 p-1">
            {[
              { value: 'incl', label: 'Incl. btw' },
              { value: 'excl', label: 'Excl. btw' },
            ].map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setAmountMode(option.value)}
                className={cn(
                  'h-9 rounded-md text-sm font-medium',
                  amountMode === option.value ? 'bg-white text-deep-blue shadow-sm' : 'text-slate-500'
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
          <div className="space-y-1.5">
            <Label>Btw</Label>
            <div className="grid grid-cols-3 gap-1 rounded-lg bg-slate-100 p-1">
              {VAT_RATES.map((rate) => (
                <button
                  key={rate.value}
                  type="button"
                  onClick={() => setForm((prev) => ({ ...prev, vatRate: rate.value }))}
                  className={cn(
                    'h-9 rounded-md text-sm font-medium',
                    form.vatRate === rate.value ? 'bg-white text-deep-blue shadow-sm' : 'text-slate-500'
                  )}
                >
                  {rate.label}
                </button>
              ))}
            </div>
            <p className="text-xs text-slate-400">
              {amountMode === 'incl'
                ? `Excl. btw ${formatEuro(breakdown.amountExcl)} · waarvan btw ${formatEuro(breakdown.vatAmount)}`
                : `Incl. btw ${formatEuro(breakdown.amountIncl)} · waarvan btw ${formatEuro(breakdown.vatAmount)}`}
            </p>
          </div>
          <div className="space-y-1.5">
            <Label>Betaalmethode</Label>
            <div className="flex flex-wrap gap-2">
              {PAYMENT_METHODS.map((method) => (
                <button
                  key={method}
                  type="button"
                  onClick={() =>
                    setForm((prev) => ({
                      ...prev,
                      paymentMethod: prev.paymentMethod === method ? '' : method,
                    }))
                  }
                  className={cn(
                    'rounded-full border px-3 py-1.5 text-xs font-medium',
                    form.paymentMethod === method
                      ? 'border-deep-blue bg-deep-blue text-white'
                      : 'border-slate-200 text-slate-600'
                  )}
                >
                  {method}
                </button>
              ))}
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose} className="rounded-xl">
              Annuleren
            </Button>
            <Button type="submit" disabled={isSaving} className="rounded-xl">
              {isSaving ? 'Opslaan…' : 'Opslaan'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
