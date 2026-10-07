import { createHmac, timingSafeEqual } from 'crypto';
import { cookies } from 'next/headers';

export const ADMIN_COOKIE = 'fb_admin';
const SESSION_PURPOSE = 'factuurbaas-admin-v1';
const COMPARE_PURPOSE = 'fb-admin-compare';

export function getAdminPassword() {
  const password = process.env.ADMIN_PASSWORD;
  return password && password.length > 0 ? password : null;
}

function hmacHex(secret, value) {
  return createHmac('sha256', secret).update(value).digest('hex');
}

function equalHex(a, b) {
  try {
    const left = Buffer.from(String(a), 'hex');
    const right = Buffer.from(String(b), 'hex');
    if (left.length === 0 || left.length !== right.length) return false;
    return timingSafeEqual(left, right);
  } catch {
    return false;
  }
}

export function passwordMatches(provided) {
  const expected = getAdminPassword();
  if (!expected || provided == null) return false;
  return equalHex(hmacHex(COMPARE_PURPOSE, String(provided)), hmacHex(COMPARE_PURPOSE, expected));
}

export function adminSessionToken(password = getAdminPassword()) {
  if (!password) return null;
  return hmacHex(password, SESSION_PURPOSE);
}

export function adminCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 12,
  };
}

export async function isAdminRequest() {
  const password = getAdminPassword();
  const expected = adminSessionToken(password);
  if (!expected) return false;
  const jar = await cookies();
  return equalHex(jar.get(ADMIN_COOKIE)?.value, expected);
}
