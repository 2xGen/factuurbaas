'use client';

import React from 'react';
import Link from 'next/link';
import { Download } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { usePwaInstall } from '@/components/pwa/usePwaInstall';

const GUIDE_HREF = '/blogs/gratis-factuur-app';

/**
 * Footer CTA: triggers native PWA install when the browser allows it,
 * otherwise opens the install guide (iOS / unsupported browsers).
 */
export default function FooterAppInstallLink() {
  const router = useRouter();
  const { user } = useAuth();
  const { canPrompt, isInstalled, promptInstall } = usePwaInstall(user?.id);

  if (isInstalled) return null;

  const onClick = async (event) => {
    if (!canPrompt) return; // let Link navigate to the guide
    event.preventDefault();
    const result = await promptInstall();
    if (!result.ok) {
      router.push(GUIDE_HREF);
    }
  };

  return (
    <p className="mt-3">
      <Link
        href={GUIDE_HREF}
        onClick={onClick}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-deep-blue transition-colors hover:text-warm-orange"
      >
        <Download className="h-4 w-4 shrink-0" aria-hidden />
        Download de gratis app
      </Link>
    </p>
  );
}
