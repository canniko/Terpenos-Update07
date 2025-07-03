import { NextRequest, NextResponse } from 'next/server';
import { validateAdminAuth } from '@/lib/auth';
import { adjustInventoryQuantity } from '@/lib/data/inventory';

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Validate admin authentication
    const session = await validateAdminAuth();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const body = await request.json();

    // Validate required fields
    if (body.adjustment === undefined) {
      return NextResponse.json({ 
        error: 'Missing required field: adjustment' 
      }, { status: 400 });
    }

    // Validate adjustment is a number
    if (typeof body.adjustment !== 'number') {
      return NextResponse.json({ 
        error: 'Adjustment must be a number' 
      }, { status: 400 });
    }

    const reason = body.reason || 'Manual adjustment';
    const updatedItem = adjustInventoryQuantity(id, body.adjustment, reason);

    if (!updatedItem) {
      return NextResponse.json({ error: 'Inventory item not found' }, { status: 404 });
    }

    console.log(`📦 Adjusted inventory: ${updatedItem.name} ${body.adjustment > 0 ? '+' : ''}${body.adjustment} (${reason})`);

    return NextResponse.json({
      item: updatedItem,
      adjustment: body.adjustment,
      reason
    });
  } catch (error) {
    console.error('Error adjusting inventory:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 