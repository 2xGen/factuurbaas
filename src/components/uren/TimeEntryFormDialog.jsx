'use client';

import React, { useEffect, useMemo, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import FormInput from '@/components/invoice/formElements/FormInput';
import FormTextarea from '@/components/invoice/formElements/FormTextarea';
import { emptyTimeEntry } from '@/lib/timeEntryPersistence';
import { clientDisplayName } from '@/lib/clientPersistence';
import { cn } from '@/lib/utils';

function todayIsoDate() {
  return emptyTimeEntry().entryDate;
}

function toIsoDate(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function parseIso(iso) {
  return new Date(`${iso}T12:00:00`);
}

function formatShortNl(iso) {
  try {
    return parseIso(iso).toLocaleDateString('nl-NL', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
    });
  } catch {
    return iso;
  }
}

/** Mon–Fri for the given year/month (0-based month). */
function weekdaysInMonth(year, monthIndex) {
  const dates = [];
  const d = new Date(year, monthIndex, 1);
  while (d.getMonth() === monthIndex) {
    const day = d.getDay(); // 0 Sun … 6 Sat
    if (day >= 1 && day <= 5) dates.push(toIsoDate(d));
    d.setDate(d.getDate() + 1);
  }
  return dates;
}

/** Mon–Fri of the week containing `fromIso` (Mon start). */
function weekdaysThisWeek(fromIso = todayIsoDate()) {
  const d = parseIso(fromIso);
  const day = d.getDay();
  const mondayOffset = day === 0 ? -6 : 1 - day;
  const monday = new Date(d);
  monday.setDate(d.getDate() + mondayOffset);
  const dates = [];
  for (let i = 0; i < 5; i += 1) {
    const x = new Date(monday);
    x.setDate(monday.getDate() + i);
    dates.push(toIsoDate(x));
  }
  return dates;
}

function currentMonthLabel() {
  const now = new Date();
  return now.toLocaleDateString('nl-NL', { month: 'long', year: 'numeric' });
}

export default function TimeEntryFormDialog({
  open,
  onClose,
  onSave,
  initialEntry,
  clients = [],
  isSaving,
}) {
  const isEdit = Boolean(initialEntry?.id);

  const [clientId, setClientId] = useState('');
  const [hourlyRate, setHourlyRate] = useState('');
  const [hoursPerDay, setHoursPerDay] = useState('8');
  const [description, setDescription] = useState('');
  const [selectedDates, setSelectedDates] = useState([]);
  const [manualDate, setManualDate] = useState(todayIsoDate());

  // Edit mode single fields
  const [editDate, setEditDate] = useState(todayIsoDate());
  const [editHours, setEditHours] = useState('');

  useEffect(() => {
    if (!open) return;
    if (initialEntry?.id) {
      setClientId(initialEntry.clientId || '');
      setHourlyRate(initialEntry.hourlyRate != null ? String(initialEntry.hourlyRate) : '');
      setDescription(initialEntry.description || '');
      setEditDate(initialEntry.entryDate || todayIsoDate());
      setEditHours(initialEntry.hours != null ? String(initialEntry.hours) : '');
      setSelectedDates([]);
      setHoursPerDay('8');
      setManualDate(todayIsoDate());
    } else {
      setClientId('');
      setHourlyRate('');
      setHoursPerDay('8');
      setDescription('');
      setSelectedDates([]);
      setManualDate(todayIsoDate());
      setEditDate(todayIsoDate());
      setEditHours('');
    }
  }, [open, initialEntry]);

  const sortedDates = useMemo(
    () => [...selectedDates].sort((a, b) => a.localeCompare(b)),
    [selectedDates]
  );

  const hoursNum = Number(hoursPerDay);
  const canSaveCreate =
    sortedDates.length > 0 && Number.isFinite(hoursNum) && hoursNum > 0;

  const canSaveEdit =
    Boolean(editDate) && Number.isFinite(Number(editHours)) && Number(editHours) > 0;

  const toggleDate = (iso) => {
    setSelectedDates((prev) =>
      prev.includes(iso) ? prev.filter((d) => d !== iso) : [...prev, iso]
    );
  };

  const applyPreset = (isos) => {
    setSelectedDates((prev) => {
      const set = new Set(prev);
      isos.forEach((d) => set.add(d));
      return [...set];
    });
  };

  const addManualDate = () => {
    if (!manualDate) return;
    setSelectedDates((prev) => (prev.includes(manualDate) ? prev : [...prev, manualDate]));
  };

  const clearDates = () => setSelectedDates([]);

  const handleWeekdaysThisMonth = () => {
    const now = new Date();
    applyPreset(weekdaysInMonth(now.getFullYear(), now.getMonth()));
  };

  const handleWeekdaysThisWeek = () => {
    applyPreset(weekdaysThisWeek());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const rate = hourlyRate === '' ? null : Number(hourlyRate);
    const sharedClient = clientId || null;

    if (isEdit) {
      if (!canSaveEdit) return;
      onSave({
        id: initialEntry.id,
        entryDate: editDate,
        hours: Number(editHours),
        description: description.trim(),
        clientId: sharedClient,
        hourlyRate: rate,
      });
      return;
    }

    if (!canSaveCreate) return;
    onSave(
      sortedDates.map((entryDate) => ({
        entryDate,
        hours: hoursNum,
        description: description.trim(),
        clientId: sharedClient,
        hourlyRate: rate,
      }))
    );
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-heading text-deep-blue">
            {isEdit ? 'Uren bewerken' : 'Uren toevoegen'}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 py-2">
          {/* 1. Klant */}
          <div>
            <label
              htmlFor="time-entry-client"
              className="mb-1.5 block text-sm font-medium text-slate-700"
            >
              Voor welke klant?
            </label>
            <select
              id="time-entry-client"
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-deep-blue/40 focus:ring-2 focus:ring-deep-blue/10"
              value={clientId}
              onChange={(e) => setClientId(e.target.value)}
            >
              <option value="">Geen klant / later kiezen</option>
              {clients.map((c) => (
                <option key={c.id} value={c.id}>
                  {clientDisplayName(c)}
                </option>
              ))}
            </select>
          </div>

          {/* 2. Tarief */}
          <FormInput
            label="Wat is je uurtarief? (optioneel)"
            name="hourlyRate"
            type="number"
            step="0.01"
            min="0"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(e.target.value)}
            placeholder="bijv. 75 — of later op de factuur"
          />

          {isEdit ? (
            <>
              <FormInput
                label="Datum"
                name="editDate"
                type="date"
                value={editDate}
                onChange={(e) => setEditDate(e.target.value)}
                required
              />
              <FormInput
                label="Aantal uren"
                name="editHours"
                type="number"
                step="0.25"
                min="0.25"
                value={editHours}
                onChange={(e) => setEditHours(e.target.value)}
                required
              />
            </>
          ) : (
            <>
              {/* 3. Dagen */}
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-slate-700">Welke dagen heb je gewerkt?</p>
                  <p className="mt-0.5 text-xs text-slate-500">
                    Kies een snelkoppeling of voeg dagen handmatig toe.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="h-8 text-xs"
                    onClick={handleWeekdaysThisWeek}
                  >
                    Werkdagen deze week
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="h-8 text-xs"
                    onClick={handleWeekdaysThisMonth}
                  >
                    Elke werkdag {currentMonthLabel()}
                  </Button>
                  {sortedDates.length > 0 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="h-8 text-xs text-slate-500"
                      onClick={clearDates}
                    >
                      Wissen
                    </Button>
                  )}
                </div>

                <div className="flex gap-2">
                  <input
                    type="date"
                    className="min-w-0 flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-deep-blue/40 focus:ring-2 focus:ring-deep-blue/10"
                    value={manualDate}
                    onChange={(e) => setManualDate(e.target.value)}
                  />
                  <Button type="button" variant="outline" onClick={addManualDate}>
                    + Dag
                  </Button>
                </div>

                {sortedDates.length > 0 ? (
                  <div className="flex flex-wrap gap-1.5 rounded-xl border border-slate-200 bg-slate-50/80 p-2.5">
                    {sortedDates.map((iso) => (
                      <button
                        key={iso}
                        type="button"
                        onClick={() => toggleDate(iso)}
                        title="Klik om te verwijderen"
                        className={cn(
                          'rounded-lg border border-deep-blue/20 bg-white px-2 py-1 text-xs font-medium text-deep-blue',
                          'transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-600'
                        )}
                      >
                        {formatShortNl(iso)} ×
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="rounded-xl border border-dashed border-slate-200 px-3 py-4 text-center text-xs text-slate-400">
                    Nog geen dagen gekozen
                  </p>
                )}
              </div>

              {/* 4. Uren per dag */}
              <div>
                <FormInput
                  label="Hoeveel uur per dag? (zelfde voor alle dagen)"
                  name="hoursPerDay"
                  type="number"
                  step="0.25"
                  min="0.25"
                  value={hoursPerDay}
                  onChange={(e) => setHoursPerDay(e.target.value)}
                  placeholder="bijv. 8"
                  required
                />
                {canSaveCreate && (
                  <p className="mt-1.5 text-xs text-slate-500">
                    {sortedDates.length} dag{sortedDates.length === 1 ? '' : 'en'} × {hoursNum} uur ={' '}
                    <span className="font-medium text-deep-blue">
                      {(sortedDates.length * hoursNum).toLocaleString('nl-NL', {
                        maximumFractionDigits: 2,
                      })}{' '}
                      uur totaal
                    </span>
                  </p>
                )}
              </div>
            </>
          )}

          <FormTextarea
            label="Omschrijving (optioneel)"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Wat heb je gedaan?"
            rows={2}
          />

          <DialogFooter className="gap-2 pt-2 sm:gap-0">
            <Button type="button" variant="outline" onClick={onClose} disabled={isSaving}>
              Annuleren
            </Button>
            <Button
              type="submit"
              disabled={(isEdit ? !canSaveEdit : !canSaveCreate) || isSaving}
              className="bg-deep-blue hover:bg-deep-blue/90"
            >
              {isSaving
                ? 'Opslaan…'
                : isEdit
                  ? 'Opslaan'
                  : sortedDates.length > 1
                    ? `${sortedDates.length} dagen opslaan`
                    : 'Opslaan'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
