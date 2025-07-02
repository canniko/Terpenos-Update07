'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Package, Home, ShoppingBag, Copy, ChevronDown, ChevronUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Order } from '@/lib/types';

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [isLoading, setIsLoading] = useState(true);
  const [orderDetails, setOrderDetails] = useState<Order | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (sessionId) {
      fetchOrderDetails(sessionId);
    } else {
      setIsLoading(false);
    }
  }, [sessionId]);

  const fetchOrderDetails = async (sessionId: string) => {
    try {
      const response = await fetch(`/api/orders/session/${sessionId}`);
      if (response.ok) {
        const data = await response.json();
        setOrderDetails(data.order);
      } else {
        // Fallback to session ID if order not found
        setOrderDetails({
          id: 'Processing...',
          sessionId,
          customerEmail: 'Processing...',
          customerName: 'Processing...',
          items: [],
          total: 0,
          status: 'pending',
          paymentStatus: 'paid',
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }
    } catch (error) {
      console.error('Error fetching order details:', error);
      // Fallback
      setOrderDetails({
        id: 'Processing...',
        sessionId,
        customerEmail: 'Processing...',
        customerName: 'Processing...',
        items: [],
        total: 0,
        status: 'pending',
        paymentStatus: 'paid',
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    } finally {
      setIsLoading(false);
    }
  };

  const shortenOrderId = (id: string) => {
    if (id.length <= 12) return id;
    return `${id.substring(0, 8)}...${id.substring(id.length - 4)}`;
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-600/20 text-yellow-300 border-yellow-500/30';
      case 'processing': return 'bg-blue-600/20 text-blue-300 border-blue-500/30';
      case 'shipped': return 'bg-purple-600/20 text-purple-300 border-purple-500/30';
      case 'delivered': return 'bg-green-600/20 text-green-300 border-green-500/30';
      default: return 'bg-gray-600/20 text-gray-300 border-gray-500/30';
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-brand-surface flex items-center justify-center">
        <Card className="w-full max-w-md mx-auto bg-brand-surface border-brand-border shadow-bold">
          <CardContent className="p-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-accent mx-auto mb-4"></div>
            <p className="text-white">Verifying your payment...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-surface flex items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto bg-brand-surface border-brand-border shadow-bold">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-green-400" />
          </div>
          <CardTitle className="text-2xl font-bold text-white">
            Payment Successful!
          </CardTitle>
          <p className="text-gray-300 mt-2">
            Thank you for your order. We'll process it right away.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Order Details */}
          {orderDetails && (
            <div className="bg-brand-alt/20 border border-brand-border rounded-lg p-4">
              <h3 className="font-semibold text-white mb-3 flex items-center">
                <Package className="w-4 h-4 mr-2" />
                Order Details
              </h3>
              <div className="space-y-3">
                {/* Order ID with expand/collapse */}
                <div className="flex justify-between items-start">
                  <span className="text-gray-300 text-sm">Order ID:</span>
                  <div className="flex items-center gap-2">
                    <div className="text-right">
                      <div className="text-white font-mono text-sm">
                        {isExpanded ? orderDetails.id : shortenOrderId(orderDetails.id)}
                      </div>
                      {!isExpanded && orderDetails.id.length > 12 && (
                        <button
                          onClick={() => setIsExpanded(true)}
                          className="text-brand-accent text-xs hover:underline flex items-center gap-1"
                        >
                          Show full ID
                          <ChevronDown className="w-3 h-3" />
                        </button>
                      )}
                      {isExpanded && (
                        <button
                          onClick={() => setIsExpanded(false)}
                          className="text-brand-accent text-xs hover:underline flex items-center gap-1"
                        >
                          Show less
                          <ChevronUp className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(orderDetails.id)}
                      className="w-8 h-8 p-0 text-gray-300 hover:text-brand-accent hover:bg-brand-accent/10 rounded-lg"
                      title="Copy order ID"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                {/* Copy confirmation */}
                {copied && (
                  <div className="text-green-400 text-xs text-center">
                    ✓ Order ID copied to clipboard
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">Status:</span>
                  <Badge className={getStatusColor(orderDetails.status)}>
                    {orderDetails.status}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">Total:</span>
                  <span className="text-white font-semibold">${orderDetails.total.toFixed(2)}</span>
                </div>
                {orderDetails.items.length > 0 && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">Items:</span>
                    <span className="text-white">{orderDetails.items.length}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Next Steps */}
          <div className="bg-brand-alt/10 border border-brand-border rounded-lg p-4">
            <h3 className="font-semibold text-white mb-2">What's Next?</h3>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• You'll receive an email confirmation shortly</li>
              <li>• We'll process your order within 24 hours</li>
              <li>• Shipping updates will be sent to your email</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Link href="/" className="block">
              <Button className="w-full btn-primary">
                <Home className="w-4 h-4 mr-2" />
                Return Home
              </Button>
            </Link>
            <Link href="/products" className="block">
              <Button variant="outline" className="w-full border-brand-border text-white hover:bg-brand-alt/20">
                <ShoppingBag className="w-4 h-4 mr-2" />
                Continue Shopping
              </Button>
            </Link>
          </div>

          {/* Support Info */}
          <div className="text-center pt-4 border-t border-brand-border">
            <p className="text-xs text-gray-400">
              Questions? Contact us at{' '}
              <a href="mailto:support@terpenos.com" className="text-brand-accent hover:underline">
                support@terpenos.com
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 