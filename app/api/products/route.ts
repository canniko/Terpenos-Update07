import { NextRequest, NextResponse } from 'next/server';
import { getAllProducts, getVisibleProducts, createProduct } from '@/lib/data/products';
import { validateAdminSession, logAdminActivity, getClientIP } from '@/lib/data/admin';
import { cookies } from 'next/headers';
import { Product } from '@/lib/types';

export async function GET() {
  try {
    console.log('API: Fetching visible products...');
    // For customer-facing requests, only return visible products
    const products = getVisibleProducts();
    console.log('API: Found products:', products.length);
    console.log('API: First product:', products[0]);
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
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

    const productData = await request.json();
    
    // Validate required fields
    if (!productData.name || !productData.price || !productData.category) {
      return NextResponse.json(
        { error: 'Missing required fields: name, price, category' },
        { status: 400 }
      );
    }

    // Create the product
    const newProduct = createProduct({
      name: productData.name,
      description: productData.description || '',
      price: productData.price,
      images: productData.images || [],
      category: productData.category,
      inStock: productData.inStock !== undefined ? productData.inStock : true,
      tags: productData.tags || [],
      inventory_item_id: productData.inventory_item_id || '',
      visibility: productData.visibility !== undefined ? productData.visibility : true,
      details: {
        weight: productData.details?.weight || '',
        volume: productData.details?.volume || '',
        ingredients: productData.details?.ingredients || [],
        benefits: productData.details?.benefits || [],
      },
    });

    // Log admin activity
    const clientIP = getClientIP(request);
    logAdminActivity(
      session.adminId,
      'create_product',
      'product',
      newProduct.item_id,
      `Created product: ${newProduct.name}`,
      clientIP
    );

    return NextResponse.json({
      product: newProduct,
      message: 'Product created successfully',
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 500 }
    );
  }
} 