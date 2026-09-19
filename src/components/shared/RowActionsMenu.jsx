'use client';

import React, { useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

/**
 * Compact “Acties” dropdown for table rows.
 * Portaled + fixed so it isn’t clipped by overflow on table wrappers.
 * items: { id, label, onSelect, destructive?, disabled? }[]
 */
export default function RowActionsMenu({ items = [], align = 'right', label = 'Acties' }) {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0, width: 168 });
  const [mounted, setMounted] = useState(false);
  const triggerRef = useRef(null);
  const menuRef = useRef(null);
  const menuId = useId();

  useEffect(() => {
    setMounted(true);
  }, []);

  const visible = items.filter(Boolean);

  const updatePosition = () => {
    const el = triggerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const menuHeight = menuRef.current?.offsetHeight || visible.length * 40 + 8;
    const menuWidth = Math.max(168, rect.width);
    const left =
      align === 'right'
        ? Math.min(rect.right - menuWidth, window.innerWidth - menuWidth - 8)
        : Math.max(8, rect.left);
    const spaceBelow = window.innerHeight - rect.bottom - 8;
    const openUp = spaceBelow < menuHeight && rect.top > spaceBelow;
    const top = openUp
      ? Math.max(8, rect.top - menuHeight - 4)
      : rect.bottom + 4;
    setCoords({
      top,
      left: Math.max(8, left),
      width: menuWidth,
    });
  };

  useLayoutEffect(() => {
    if (!open) return;
    updatePosition();
    const id = requestAnimationFrame(updatePosition);
    return () => cancelAnimationFrame(id);
  }, [open, align, visible.length]);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => {
      const t = e.target;
      if (triggerRef.current?.contains(t) || menuRef.current?.contains(t)) return;
      setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const onReposition = () => updatePosition();
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    window.addEventListener('scroll', onReposition, true);
    window.addEventListener('resize', onReposition);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('scroll', onReposition, true);
      window.removeEventListener('resize', onReposition);
    };
  }, [open, align]);

  const menu =
    open &&
    mounted &&
    createPortal(
      <div
        ref={menuRef}
        id={menuId}
        role="menu"
        style={{
          position: 'fixed',
          top: coords.top,
          left: coords.left,
          minWidth: coords.width,
          zIndex: 80,
        }}
        className="overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-lg"
      >
        {visible.map((item) => (
          <button
            key={item.id}
            type="button"
            role="menuitem"
            disabled={item.disabled}
            className={cn(
              'flex w-full px-3 py-2 text-left text-sm transition disabled:opacity-50',
              item.destructive
                ? 'text-red-600 hover:bg-red-50'
                : 'text-slate-700 hover:bg-slate-50'
            )}
            onClick={() => {
              if (item.disabled) return;
              setOpen(false);
              item.onSelect?.();
            }}
          >
            {item.label}
          </button>
        ))}
      </div>,
      document.body
    );

  return (
    <div className="inline-flex justify-end">
      <Button
        ref={triggerRef}
        type="button"
        variant="outline"
        size="sm"
        className="h-8 rounded-lg border-slate-200 bg-white px-2.5 text-xs font-medium text-slate-700"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <ChevronDown className={cn('ml-1 h-3.5 w-3.5 transition', open && 'rotate-180')} />
      </Button>
      {menu}
    </div>
  );
}
