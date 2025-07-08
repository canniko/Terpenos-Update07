import { NextRequest, NextResponse } from 'next/server';
import { getAdminActivityLogs } from '@/lib/data/admin';
import { validateAdminSession } from '@/lib/data/admin';
import { cookies } from 'next/headers';

export async function GET(request: NextRequest) {
  try {
    // Validate admin session
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get('admin_session')?.value;
    
    if (!sessionToken) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const session = validateAdminSession(sessionToken);
    if (!session.valid || !session.adminId) {
      return NextResponse.json(
        { error: 'Invalid session' },
        { status: 401 }
      );
    }

    // Get activity logs (last 20 entries)
    const activityLogs = getAdminActivityLogs(20);
    
    return NextResponse.json(activityLogs);
  } catch (error) {
    console.error('Error fetching admin activity:', error);
    return NextResponse.json(
      { error: 'Failed to fetch activity logs' },
      { status: 500 }
    );
  }
} 