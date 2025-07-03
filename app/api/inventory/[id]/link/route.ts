import { NextRequest, NextResponse } from 'next/server';
import { validateAdminAuth } from '@/lib/auth';
import { linkInventoryToProduct, unlinkInventoryFromProduct } from '@/lib/data/inventory';

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
    if (!body.productId) {
      return NextResponse.json({ 
        error: 'Missing required field: productId' 
      }, { status: 400 });
    }

    const updatedItem = linkInventoryToProduct(id, body.productId);

    if (!updatedItem) {
      return NextResponse.json({ error: 'Inventory item not found' }, { status: 404 });
    }

    console.log(`🔗 Linked inventory item ${updatedItem.name} to product ${body.productId}`);

    return NextResponse.json({
      item: updatedItem,
      linked: true,
      productId: body.productId
    });
  } catch (error) {
    console.error('Error linking inventory to product:', error);
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
    const updatedItem = unlinkInventoryFromProduct(id);

    if (!updatedItem) {
      return NextResponse.json({ error: 'Inventory item not found' }, { status: 404 });
    }

    console.log(`🔗 Unlinked inventory item ${updatedItem.name} from product`);

    return NextResponse.json({
      item: updatedItem,
      linked: false
    });
  } catch (error) {
    console.error('Error unlinking inventory from product:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 