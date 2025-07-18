import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { isProductPurchaseable } from '@/lib/data/products';

export async function POST(request: NextRequest) {
  try {
    // Initialize Stripe only when the function is called
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2025-06-30.basil',
    });
    
    const { items, currency = 'USD' } = await request.json();

    console.log('Creating checkout session for:', { items: items.length, totalAmount: items.reduce((sum: number, item: any) => sum + (item.product.price * item.quantity), 0), currency });

    // Validate that all products are purchaseable (linked to inventory and in stock)
    for (const item of items) {
      const productId = item.product.id;
      const quantity = item.quantity;
      
      if (!isProductPurchaseable(productId, quantity)) {
        return NextResponse.json(
          { error: `Product "${item.product.name}" is not available for purchase. It may be out of stock or not properly linked to inventory.` },
          { status: 400 }
        );
      }
    }

    // Calculate total amount
    const totalAmount = items.reduce((sum: number, item: any) => sum + (item.product.price * item.quantity), 0);

    // Get the origin for absolute URLs
    const origin = request.headers.get('origin') || process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: items.map((item: any) => {
        // Convert relative image path to absolute URL
        let imageUrl = item.product.image;
        if (imageUrl.startsWith('/')) {
          imageUrl = `${origin}${imageUrl}`;
        }

        return {
          price_data: {
            currency: currency.toLowerCase(),
            product_data: {
              name: item.product.name,
              description: item.product.description,
              images: [imageUrl],
            },
            unit_amount: Math.round(item.product.price * 100), // Convert to cents
          },
          quantity: item.quantity,
        };
      }),
      mode: 'payment',
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout`,
      metadata: {
        items: JSON.stringify(items.map((item: any) => ({
          id: item.product.id,
          name: item.product.name,
          quantity: item.quantity,
          price: item.product.price,
        }))),
      },
    });

    console.log('Checkout session created:', session.id);

    return NextResponse.json({
      sessionId: session.id,
      url: session.url,
    });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    
    if (error instanceof Stripe.errors.StripeError) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
} 