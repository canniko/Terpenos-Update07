import { NextRequest, NextResponse } from 'next/server';
import { getAllOrders, getOrdersNeedingFulfillment } from '@/lib/data/orders';
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

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const limit = parseInt(searchParams.get('limit') || '50');

    let orders;
    
    if (status === 'needs-fulfillment') {
      orders = getOrdersNeedingFulfillment();
    } else if (status) {
      // Filter by specific status
      orders = getAllOrders().filter(order => order.status === status);
    } else {
      orders = getAllOrders();
    }

    // Apply limit
    orders = orders.slice(0, limit);

    return NextResponse.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json(
      { error: 'Failed to fetch orders' },
      { status: 500 }
    );
  }
} 