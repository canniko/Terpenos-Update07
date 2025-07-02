import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifyAdminCredentials, createAdminSession, getAdminUserByUsername, getClientIP } from '@/lib/data/admin';
import { logAdminActivity } from '@/lib/data/admin';

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    // Validate input
    if (!username || !password) {
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      );
    }

    // Verify credentials
    const isValid = verifyAdminCredentials(username, password);
    
    if (!isValid) {
      return NextResponse.json(
        { error: 'Invalid username or password' },
        { status: 401 }
      );
    }

    // Get admin user details
    const adminUser = getAdminUserByUsername(username);
    if (!adminUser) {
      return NextResponse.json(
        { error: 'Admin user not found' },
        { status: 500 }
      );
    }

    // Generate session token
    const sessionToken = crypto.randomUUID();
    const clientIP = getClientIP(request);
    const userAgent = request.headers.get('user-agent') || 'unknown';

    // Create session in database
    const sessionCreated = createAdminSession(
      adminUser.id,
      sessionToken,
      clientIP,
      userAgent
    );

    if (!sessionCreated) {
      return NextResponse.json(
        { error: 'Failed to create session' },
        { status: 500 }
      );
    }

    // Log login activity
    logAdminActivity(
      adminUser.id,
      'login',
      'admin',
      adminUser.id.toString(),
      `Admin login from ${clientIP}`,
      clientIP
    );

    // Set secure cookie
    const cookieStore = await cookies();
    cookieStore.set('admin_session', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 24 * 60 * 60, // 24 hours
      path: '/',
    });

    return NextResponse.json({
      success: true,
      message: 'Login successful',
      user: {
        id: adminUser.id,
        username: adminUser.username,
      }
    });

  } catch (error) {
    console.error('Admin login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 