import { NextRequest, NextResponse } from 'next/server';
import { getOrderBySessionId } from '@/lib/data/orders';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ sessionId: string }> }
) {
  try {
    const { sessionId } = await params;
    const order = getOrderBySessionId(sessionId);

    if (!order) {
      return NextResponse.json(
        { error: 'Order not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      order,
    });
  } catch (error) {
    console.error('Error fetching order by session ID:', error);
    return NextResponse.json(
      { error: 'Failed to fetch order' },
      { status: 500 }
    );
  }
} 