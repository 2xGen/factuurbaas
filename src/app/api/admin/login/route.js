import { NextResponse } from 'next/server';
import {
  ADMIN_COOKIE,
  adminCookieOptions,
  adminSessionToken,
  getAdminPassword,
  passwordMatches,
} from '@/lib/adminAuth';

export async function POST(request) {
  if (!getAdminPassword()) {
    return NextResponse.json(
      { error: 'Admin login is not configured (ADMIN_PASSWORD).' },
      { status: 503 }
    );
  }

  let password = '';
  try {
    const body = await request.json();
    password = body?.password ?? '';
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  if (!passwordMatches(password)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const token = adminSessionToken();
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, token, adminCookieOptions());
  return res;
}
