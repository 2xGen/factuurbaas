'use client';

import { useEffect, useState } from 'react';
import { ArrowIcon, btn } from '@/components/site/editorial';

export default function BookkeeperStickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const form = document.getElementById('boekhouder-formulier');
    if (!form) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(form);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-40 sm:bottom-6 sm:right-6">
      <a href="#boekhouder-formulier" className={`${btn.primary} pointer-events-auto shadow-window`}>
        Vind mijn boekhouder
        <ArrowIcon />
      </a>
    </div>
  );
}
