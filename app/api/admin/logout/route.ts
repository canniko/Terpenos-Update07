import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { validateAdminSession, deleteAdminSession, logAdminActivity, getClientIP } from '@/lib/data/admin';

export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get('admin_session')?.value;

    if (sessionToken) {
      // Validate session to get admin ID for logging
      const session = validateAdminSession(sessionToken);
      
      if (session.valid && session.adminId) {
        const clientIP = getClientIP(request);
        
        // Log logout activity
        logAdminActivity(
          session.adminId,
          'logout',
          'admin',
          session.adminId.toString(),
          `Admin logout from ${clientIP}`,
          clientIP
        );
      }

      // Delete session from database
      deleteAdminSession(sessionToken);
    }

    // Clear cookie
    cookieStore.delete('admin_session');

    return NextResponse.json({
      success: true,
      message: 'Logout successful'
    });

  } catch (error) {
    console.error('Admin logout error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 