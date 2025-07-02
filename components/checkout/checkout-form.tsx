'use client';

import { useState, useEffect } from 'react';
import { useCartContext } from '@/components/providers/cart-provider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CartItem } from '@/lib/types';

export function CheckoutForm() {
  const { cart, clearCart } = useCartContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    if (cart.items.length === 0) {
      setError('Your cart is empty');
      return;
    }

    // Check if Stripe key is configured
    if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || 
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === 'pk_test_your_stripe_publishable_key_here') {
      setError('Payment system not configured. Please contact support.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      console.log('Starting checkout process...');
      
      // Create checkout session
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: cart.items,
          currency: 'USD',
        }),
      });

      console.log('Checkout session response status:', response.status);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Checkout session error:', errorData);
        throw new Error(errorData.error || 'Failed to create checkout session');
      }

      const { url } = await response.json();
      console.log('Checkout session created successfully');

      if (!url) {
        throw new Error('No checkout URL received');
      }

      // Redirect to Stripe Checkout
      window.location.href = url;

    } catch (err) {
      console.error('Checkout error:', err);
      setError(err instanceof Error ? err.message : 'Checkout failed');
    } finally {
      setIsLoading(false);
    }
  };

  if (cart.items.length === 0) {
    return (
      <Card className="w-full max-w-md mx-auto bg-brand-surface border-brand-border shadow-bold">
        <CardHeader>
          <CardTitle className="text-center text-white">Your Cart is Empty</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-300 mb-4">
            Add some products to your cart to proceed with checkout.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-brand-surface border-brand-border shadow-bold">
      <CardHeader>
        <CardTitle className="text-center text-white">Checkout</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Order Summary */}
        <div className="space-y-2">
          <h3 className="font-semibold text-white">Order Summary</h3>
          {cart.items.map((item: CartItem) => (
            <div key={item.product.id} className="flex justify-between items-center py-2 border-b border-brand-border">
              <div className="flex-1">
                <p className="font-medium text-white">{item.product.name}</p>
                <p className="text-sm text-gray-300">Qty: {item.quantity}</p>
              </div>
              <p className="font-semibold text-white">
                ${(item.product.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
          <div className="flex justify-between items-center pt-2 border-t-2 border-brand-border">
            <p className="font-bold text-lg text-white">Total</p>
            <p className="font-bold text-lg text-white">${cart.total.toFixed(2)}</p>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="p-3 bg-red-900/20 border border-red-500/30 rounded-lg">
            <p className="text-red-300 text-sm">{error}</p>
          </div>
        )}

        {/* Checkout Button */}
        <Button
          onClick={handleCheckout}
          disabled={isLoading}
          className="w-full btn-primary h-12 text-base"
        >
          {isLoading ? 'Processing...' : `Pay $${cart.total.toFixed(2)}`}
        </Button>

        {/* Security Notice */}
        <div className="text-center space-y-2">
          <p className="text-xs text-gray-300">
            🔒 Secure payment powered by Stripe
          </p>
          <div className="bg-brand-alt border border-brand-border rounded-lg p-2">
            <p className="text-xs text-brand-accent font-medium">
              🧪 Test Mode - Use test card: 4242424242424242
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 