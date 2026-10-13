import { cn } from '@/lib/utils';
import { KPN_AFFILIATE_REL } from '@/lib/zakelijkInternetTelefonie';

export function KpnAffiliateLink({ href, children, className }) {
  return (
    <a
      href={href}
      target="_blank"
      rel={KPN_AFFILIATE_REL}
      className={className}
    >
      {children}
    </a>
  );
}

export default function KpnAffiliateCta({
  href,
  title,
  text,
  label,
  note,
} = {}) {
  return (
    <aside className="my-8 rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-6 not-prose">
      {title ? (
        <p className="font-heading text-base font-semibold text-deep-blue sm:text-lg">{title}</p>
      ) : null}
      {text ? <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p> : null}
      <p className={cn(title || text ? 'mt-4' : '')}>
        <KpnAffiliateLink href={href} className="font-medium text-warm-orange hover:underline">
          {label}
        </KpnAffiliateLink>
      </p>
      {note ? <p className="mt-3 text-xs leading-relaxed text-slate-500">{note}</p> : null}
    </aside>
  );
}
