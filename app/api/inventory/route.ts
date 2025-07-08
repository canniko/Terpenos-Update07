import { NextRequest, NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/auth';
import { 
  getAllInventoryItems, 
  createInventoryItem, 
  getInventoryStats 
} from '@/lib/data/inventory';
import { createProduct } from '@/lib/data/products';
import { InventoryItem } from '@/lib/types';

export async function GET() {
  try {
    // Validate admin authentication
    const session = await getAdminSession();
    if (!session || !session.valid) {
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
    const session = await getAdminSession();
    if (!session || !session.valid) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    
    // Handle both old format and new format
    const inventoryData = body.inventoryItem || body;
    const createProductData = body.createProduct;
    
    // Validate required fields
    if (!inventoryData.name || !inventoryData.category || !inventoryData.description || inventoryData.quantity_in_stock === undefined) {
      return NextResponse.json({ 
        error: 'Missing required fields: name, category, description, quantity_in_stock' 
      }, { status: 400 });
    }

    // Validate quantity
    if (inventoryData.quantity_in_stock < 0) {
      return NextResponse.json({ 
        error: 'Quantity cannot be negative' 
      }, { status: 400 });
    }

    let createdProduct = null;

    // Create the inventory item first
    const newItem = createInventoryItem({
      item_id: inventoryData.item_id,
      name: inventoryData.name,
      category: inventoryData.category,
      description: inventoryData.description,
      quantity_in_stock: inventoryData.quantity_in_stock,
      location: inventoryData.location,
      unit_cost: inventoryData.unit_cost,
      vendor: inventoryData.vendor,
      tags: inventoryData.tags,
      is_listed_as_product: createProductData ? true : (inventoryData.is_listed_as_product || false)
    });

    console.log(`📦 Created inventory item: ${newItem.name} (${newItem.quantity_in_stock} units)`);

    // Create product if requested
    if (createProductData) {
      try {
        const newProduct = createProduct({
          name: inventoryData.name,
          description: createProductData.details,
          price: createProductData.price,
          image: createProductData.images && createProductData.images.length > 0 
            ? createProductData.images[0] 
            : '/images/placeholder-logo.png',
          category: inventoryData.category,
          inStock: inventoryData.quantity_in_stock > 0,
          tags: inventoryData.tags || [],
          inventory_item_id: newItem.item_id, // Link to the inventory item
          visibility: true, // Default to visible
          details: {
            weight: createProductData.weight,
            volume: createProductData.weight,
            ingredients: createProductData.ingredients || [],
            benefits: createProductData.benefits || []
          }
        });

        createdProduct = newProduct;
        console.log(`🛍️ Created product: ${newProduct.name} ($${newProduct.price}) linked to inventory ${newItem.item_id}`);
      } catch (productError) {
        console.error('Error creating product:', productError);
        // Continue with inventory creation even if product creation fails
      }
    }

    return NextResponse.json({
      inventoryItem: newItem,
      product: createdProduct
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating inventory item:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 