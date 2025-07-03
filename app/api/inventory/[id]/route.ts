import { NextRequest, NextResponse } from 'next/server';
import { validateAdminAuth } from '@/lib/auth';
import { 
  getInventoryItemById, 
  updateInventoryItem, 
  deleteInventoryItem,
  adjustInventoryQuantity,
  linkInventoryToProduct,
  unlinkInventoryFromProduct
} from '@/lib/data/inventory';

export async function GET(
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
    const item = getInventoryItemById(id);

    if (!item) {
      return NextResponse.json({ error: 'Inventory item not found' }, { status: 404 });
    }

    return NextResponse.json(item);
  } catch (error) {
    console.error('Error fetching inventory item:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(
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

    // Validate quantity if provided
    if (body.quantity_in_stock !== undefined && body.quantity_in_stock < 0) {
      return NextResponse.json({ 
        error: 'Quantity cannot be negative' 
      }, { status: 400 });
    }

    const updatedItem = updateInventoryItem(id, body);

    if (!updatedItem) {
      return NextResponse.json({ error: 'Inventory item not found' }, { status: 404 });
    }

    console.log(`📦 Updated inventory item: ${updatedItem.name}`);

    return NextResponse.json(updatedItem);
  } catch (error) {
    console.error('Error updating inventory item:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(
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
    const success = deleteInventoryItem(id);

    if (!success) {
      return NextResponse.json({ error: 'Inventory item not found' }, { status: 404 });
    }

    console.log(`🗑️ Deleted inventory item: ${id}`);

    return NextResponse.json({ message: 'Inventory item deleted successfully' });
  } catch (error) {
    console.error('Error deleting inventory item:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 