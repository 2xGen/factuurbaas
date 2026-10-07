import { NextResponse } from 'next/server';
import { isAdminRequest } from '@/lib/adminAuth';

export async function GET() {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  return NextResponse.json({ ok: true });
}
