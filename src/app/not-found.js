import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-4xl font-bold text-deep-blue font-heading mb-2">404</h1>
      <p className="text-slate-600 mb-6">Deze pagina bestaat niet.</p>
      <Link href="/" className="text-warm-orange hover:underline font-semibold">
        Terug naar home
      </Link>
    </div>
  );
}
