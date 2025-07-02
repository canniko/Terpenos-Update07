import { NextRequest, NextResponse } from 'next/server';
import { updateOrderStatus, getOrderById } from '@/lib/data/orders';
import { validateAdminSession, logAdminActivity, getClientIP } from '@/lib/data/admin';
import { cookies } from 'next/headers';

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
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

    const { status } = await request.json();
    const { id: orderId } = await params;

    // Validate status
    const validStatuses = ['pending', 'processing', 'shipped', 'delivered', 'cancelled'];
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { error: 'Invalid status' },
        { status: 400 }
      );
    }

    // Check if order exists
    const existingOrder = getOrderById(orderId);
    if (!existingOrder) {
      return NextResponse.json(
        { error: 'Order not found' },
        { status: 404 }
      );
    }

    // Update order status
    const updatedOrder = updateOrderStatus(orderId, status);
    if (!updatedOrder) {
      return NextResponse.json(
        { error: 'Failed to update order' },
        { status: 500 }
      );
    }

    // Log admin activity
    const clientIP = getClientIP(request);
    logAdminActivity(
      session.adminId,
      'update_order_status',
      'order',
      orderId,
      `Updated order ${orderId} status from ${existingOrder.status} to ${status}`,
      clientIP
    );

    console.log(`📦 Order ${orderId} status updated to: ${status}`);

    return NextResponse.json({
      order: updatedOrder,
      message: `Order status updated to ${status}`,
    });
  } catch (error) {
    console.error('Error updating order status:', error);
    return NextResponse.json(
      { error: 'Failed to update order status' },
      { status: 500 }
    );
  }
} 