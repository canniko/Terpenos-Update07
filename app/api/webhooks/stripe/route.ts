import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createOrder } from '@/lib/data/orders';
import { getProductById, decreaseProductStock } from '@/lib/data/products';

export async function POST(request: NextRequest) {
  try {
    // Initialize Stripe only when the function is called
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2025-06-30.basil',
    });
    
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;
    
    const body = await request.text();
    const signature = request.headers.get('stripe-signature')!;

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
      console.error('Webhook signature verification failed:', err);
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    console.log('🔔 Stripe webhook received:', event.type);

    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutSessionCompleted(event.data.object as Stripe.Checkout.Session);
        break;
      
      case 'payment_intent.succeeded':
        await handlePaymentIntentSucceeded(event.data.object as Stripe.PaymentIntent);
        break;
      
      case 'payment_intent.payment_failed':
        await handlePaymentIntentFailed(event.data.object as Stripe.PaymentIntent);
        break;
      
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    );
  }
}

async function handleCheckoutSessionCompleted(session: Stripe.Checkout.Session) {
  console.log('💰 Checkout session completed:', session.id);
  
  try {
    // Extract order data from session metadata
    const itemsData = session.metadata?.items;
    if (!itemsData) {
      console.error('No items data in session metadata');
      return;
    }

    const items = JSON.parse(itemsData) as Array<{
      id: string;
      name: string;
      quantity: number;
      price: number;
    }>;

    // Create order items
    const orderItems = items.map(item => ({
      productId: item.id,
      productName: item.name,
      quantity: item.quantity,
      price: item.price,
      image: getProductById(item.id)?.images[0] || '/placeholder.jpg',
    }));

    // Calculate total
    const total = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Update inventory for each item
    const inventoryUpdates = [];
    for (const item of items) {
      try {
        const success = decreaseProductStock(item.id, item.quantity);
        if (success) {
          inventoryUpdates.push(`✅ ${item.name}: -${item.quantity}`);
        } else {
          inventoryUpdates.push(`❌ ${item.name}: Insufficient stock`);
          console.error(`Insufficient stock for product ${item.id} (${item.name})`);
        }
      } catch (error) {
        console.error(`Error updating inventory for product ${item.id}:`, error);
        inventoryUpdates.push(`❌ ${item.name}: Error updating inventory`);
      }
    }

    console.log('📦 Inventory updates:', inventoryUpdates);

    // Create order
    const order = createOrder({
      sessionId: session.id,
      customerEmail: session.customer_details?.email || 'unknown@example.com',
      customerName: session.customer_details?.name || 'Unknown Customer',
      items: orderItems,
      total,
      status: 'pending',
      paymentStatus: 'paid',
    });

    console.log('✅ Order created from webhook:', {
      orderId: order.id,
      sessionId: session.id,
      customerEmail: order.customerEmail,
      total: order.total,
      inventoryUpdates
    });

    // Send admin notification (in production, this would be email/SMS/slack)
    await sendAdminNotification(order);

  } catch (error) {
    console.error('Error processing checkout session:', error);
  }
}

async function handlePaymentIntentSucceeded(paymentIntent: Stripe.PaymentIntent) {
  console.log('💳 Payment intent succeeded:', paymentIntent.id);
  // Handle payment success if needed
}

async function handlePaymentIntentFailed(paymentIntent: Stripe.PaymentIntent) {
  console.log('❌ Payment intent failed:', paymentIntent.id);
  // Handle payment failure if needed
}

async function sendAdminNotification(order: any) {
  // In production, implement actual notifications:
  // - Email to admin@terpenos.com
  // - Slack webhook
  // - SMS notification
  // - Dashboard notification
  
  console.log('📧 ADMIN NOTIFICATION - New Order:', {
    orderId: order.id,
    customerEmail: order.customerEmail,
    customerName: order.customerName,
    total: `$${order.total.toFixed(2)}`,
    items: order.items.length,
    timestamp: new Date().toISOString(),
  });
  
  // Example email notification (implement with your email service)
  // await sendEmail({
  //   to: 'admin@terpenos.com',
  //   subject: `New Order #${order.id}`,
  //   body: `New order received from ${order.customerName} for $${order.total}`
  // });
} 