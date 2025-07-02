import { CheckoutForm } from '@/components/checkout/checkout-form';

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-brand-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Checkout</h1>
            <p className="text-gray-300">Complete your purchase securely</p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Checkout Form */}
            <div className="flex-1">
              <CheckoutForm />
            </div>
            
            {/* Order Summary Sidebar */}
            <div className="lg:w-80">
              <div className="bg-brand-surface rounded-lg shadow-bold border border-brand-border p-6 sticky top-4">
                <h3 className="text-lg font-semibold text-white mb-4">Order Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Subtotal</span>
                    <span className="font-medium text-white">$0.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Shipping</span>
                    <span className="font-medium text-white">Free</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Tax</span>
                    <span className="font-medium text-white">Calculated at checkout</span>
                  </div>
                  <div className="border-t border-brand-border pt-3">
                    <div className="flex justify-between font-semibold">
                      <span className="text-white">Total</span>
                      <span className="text-white">$0.00</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 space-y-3">
                  <div className="flex items-center text-sm text-gray-300">
                    <svg className="w-4 h-4 mr-2 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Secure payment processing
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <svg className="w-4 h-4 mr-2 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Free shipping on orders over $50
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <svg className="w-4 h-4 mr-2 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    30-day money-back guarantee
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 