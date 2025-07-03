import { NextRequest, NextResponse } from 'next/server';
import { validateAdminAuth } from '@/lib/auth';
import { 
  getAllInventoryItems, 
  createInventoryItem, 
  getInventoryStats 
} from '@/lib/data/inventory';
import { InventoryItem } from '@/lib/types';

export async function GET() {
  try {
    // Validate admin authentication
    const session = await validateAdminAuth();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const inventoryItems = getAllInventoryItems();
    const stats = getInventoryStats();

    return NextResponse.json({
      items: inventoryItems,
      stats
    });
  } catch (error) {
    console.error('Error fetching inventory:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    // Validate admin authentication
    const session = await validateAdminAuth();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    
    // Validate required fields
    if (!body.name || !body.description || body.quantity_in_stock === undefined) {
      return NextResponse.json({ 
        error: 'Missing required fields: name, description, quantity_in_stock' 
      }, { status: 400 });
    }

    // Validate quantity
    if (body.quantity_in_stock < 0) {
      return NextResponse.json({ 
        error: 'Quantity cannot be negative' 
      }, { status: 400 });
    }

    const newItem = createInventoryItem({
      name: body.name,
      description: body.description,
      quantity_in_stock: body.quantity_in_stock,
      location: body.location,
      is_listed_as_product: body.is_listed_as_product || false,
      linked_product_id: body.linked_product_id
    });

    console.log(`📦 Created inventory item: ${newItem.name} (${newItem.quantity_in_stock} units)`);

    return NextResponse.json(newItem, { status: 201 });
  } catch (error) {
    console.error('Error creating inventory item:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 