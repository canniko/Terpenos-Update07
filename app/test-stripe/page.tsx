'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TestStripePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const testCheckoutSession = async () => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: [
            {
              product: {
                id: 'test-product',
                name: 'Test Product',
                description: 'A test product for Stripe checkout',
                price: 10.00,
                image: '/images/terpene-skin-care.png',
              },
              quantity: 1,
            },
          ],
          currency: 'USD',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session');
      }

      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Test failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-surface flex items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto bg-brand-surface border-brand-border shadow-bold">
        <CardHeader>
          <CardTitle className="text-center text-white">Stripe Checkout Test</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            onClick={testCheckoutSession}
            disabled={isLoading}
            className="w-full btn-primary"
          >
            {isLoading ? 'Testing...' : 'Test Checkout Session'}
          </Button>

          {error && (
            <div className="p-3 bg-red-900/20 border border-red-500/30 rounded-lg">
              <p className="text-red-300 text-sm font-medium">Error:</p>
              <p className="text-red-300 text-sm">{error}</p>
            </div>
          )}

          {result && (
            <div className="p-3 bg-green-900/20 border border-green-500/30 rounded-lg">
              <p className="text-green-300 text-sm font-medium">Success!</p>
              <div className="text-green-300 text-sm space-y-1">
                <p>Session ID: {result.sessionId}</p>
                <p>Checkout URL: {result.url ? 'Available' : 'Not available'}</p>
              </div>
              {result.url && (
                <Button
                  onClick={() => window.open(result.url, '_blank')}
                  className="w-full mt-2 btn-primary"
                >
                  Open Checkout
                </Button>
              )}
            </div>
          )}

          <div className="text-center pt-4 border-t border-brand-border">
            <p className="text-xs text-gray-400">
              This tests the checkout session creation with proper image URL handling.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 