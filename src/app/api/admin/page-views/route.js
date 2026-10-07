import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';
import { isAdminRequest } from '@/lib/adminAuth';

export async function GET() {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceKey) {
    return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 });
  }

  const admin = createClient(supabaseUrl, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  try {
    const [recentRes, statsRes, byPathRes] = await Promise.all([
      admin
        .from('page_views')
        .select('id, page_path, view_timestamp, user_agent')
        .order('view_timestamp', { ascending: false })
        .limit(100),
      admin.rpc('get_page_view_stats'),
      admin.rpc('get_page_views_by_path'),
    ]);

    if (recentRes.error) throw recentRes.error;
    if (statsRes.error) throw statsRes.error;
    if (byPathRes.error) throw byPathRes.error;

    const stats = (statsRes.data || []).reduce(
      (acc, item) => {
        acc[item.period] = item.count;
        return acc;
      },
      { last_24_hours: 0, last_30_days: 0, all_time: 0 }
    );

    return NextResponse.json({
      recent: recentRes.data || [],
      stats,
      viewsByPage: byPathRes.data || [],
    });
  } catch (err) {
    console.error('page-views admin error:', err);
    return NextResponse.json({ error: err.message || 'Failed to load page views' }, { status: 500 });
  }
}
