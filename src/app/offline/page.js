export const metadata = {
  title: 'Offline | FactuurBaas',
  robots: { index: false, follow: false },
};

export default function OfflinePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-warm-orange">FactuurBaas</p>
      <h1 className="mt-2 text-2xl font-heading font-bold text-deep-blue">Je bent offline</h1>
      <p className="mt-3 max-w-sm text-slate-600">
        Geen verbinding. Controleer je internet en probeer opnieuw — je facturen staan veilig in de
        cloud.
      </p>
      <a
        href="/dashboard"
        className="mt-8 inline-flex rounded-md bg-deep-blue px-5 py-2.5 text-sm font-semibold text-white hover:bg-deep-blue/90"
      >
        Opnieuw proberen
      </a>
    </main>
  );
}
