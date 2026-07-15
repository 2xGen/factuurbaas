import { redirect } from 'next/navigation';

export default async function GidsenIndexRedirect({ searchParams }) {
  const resolved = typeof searchParams?.then === 'function' ? await searchParams : searchParams;
  const params = new URLSearchParams();

  if (resolved?.pillar) params.set('pillar', resolved.pillar);
  if (resolved?.page) params.set('page', resolved.page);

  const qs = params.toString();
  redirect(qs ? `/blogs?${qs}` : '/blogs');
}
