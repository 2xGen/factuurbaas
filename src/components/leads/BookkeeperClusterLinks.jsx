import Link from 'next/link';

export const BOOKKEEPER_CLUSTER_LINKS = [
  { href: '/boekhouder-vinden', label: 'Boekhouder vinden' },
  { href: '/boekhouder-kosten', label: 'Wat kost een boekhouder?' },
  { href: '/tools/boekhouder-kosten-calculator', label: 'Boekhouder kosten calculator' },
  { href: '/boekhouder-zzp', label: "Boekhouder voor zzp'ers" },
  { href: '/boekhouder-bv', label: 'Boekhouder voor BV' },
  { href: '/boekhouder-mkb', label: 'Boekhouder voor MKB' },
  { href: '/boekhouding-uitbesteden', label: 'Boekhouding uitbesteden' },
  { href: '/boekhouder-overstappen', label: 'Boekhouder overstappen' },
  { href: '/online-boekhouder', label: 'Online boekhouder' },
  { href: '/btw-aangifte-uitbesteden', label: 'Btw-aangifte uitbesteden' },
];

export default function BookkeeperClusterLinks({ currentHref }) {
  const links = BOOKKEEPER_CLUSTER_LINKS.filter((item) => item.href !== currentHref);
  return (
    <section className="border-t border-ink/[0.06] py-14 sm:py-16">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">Gerelateerde pagina&apos;s</h2>
        <ul className="mt-5 grid gap-2 sm:grid-cols-2">
          {links.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-[15px] text-ink-700 underline decoration-ink/20 underline-offset-4 hover:decoration-ember"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-ink-500">
          Alle artikelen in dit cluster:{' '}
          <Link href="/blogs?pillar=boekhouder" className="underline decoration-ink/20 underline-offset-4 hover:decoration-ember">
            Boekhouder vinden
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
