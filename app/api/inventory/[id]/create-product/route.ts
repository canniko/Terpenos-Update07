import { NextRequest, NextResponse } from 'next/server';
import { createProductFromInventory } from '@/lib/data/products';
import { validateAdminSession, logAdminActivity, getClientIP } from '@/lib/data/admin';
import { cookies } from 'next/headers';
import { CreateProductFromInventory } from '@/lib/types';

export async function POST(
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

    const { id } = await params;
    const productData: CreateProductFromInventory = await request.json();

    // Validate required fields
    if (!productData.price || productData.price <= 0) {
      return NextResponse.json(
        { error: 'Valid price is required' },
        { status: 400 }
      );
    }

    if (!productData.description?.trim()) {
      return NextResponse.json(
        { error: 'Product description is required' },
        { status: 400 }
      );
    }

    // Get the inventory item to use its data
    const { getInventoryItemById } = require('@/lib/data/inventory');
    const inventoryItem = getInventoryItemById(id);
    
    if (!inventoryItem) {
      return NextResponse.json(
        { error: 'Inventory item not found' },
        { status: 404 }
      );
    }

    // Create product from inventory item
    const product = createProductFromInventory(id, {
      ...productData,
      // Use inventory item's name and category
      description: productData.description,
      price: productData.price,
      image: productData.image || '',
      tags: productData.tags || inventoryItem.tags || [],
      details: productData.details
    });

    // Log admin activity
    const clientIP = getClientIP(request);
    logAdminActivity(
      session.adminId,
      'create_product_from_inventory',
      'product',
      product.item_id,
      `Created product from inventory item: ${id}`,
      clientIP
    );

    return NextResponse.json({
      product,
      message: 'Product created successfully from inventory item',
    });
  } catch (error) {
    console.error('Error creating product from inventory:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to create product' },
      { status: 500 }
    );
  }
} 