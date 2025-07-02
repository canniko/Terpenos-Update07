# Stripe Integration Setup Guide

This guide will help you set up Stripe payment processing for your e-commerce site.

## Prerequisites

1. A Stripe account (sign up at [stripe.com](https://stripe.com))
2. Your Stripe API keys

## Step 1: Get Your Stripe API Keys

1. Log into your Stripe Dashboard
2. Go to **Developers** → **API keys**
3. Copy your **Publishable key** and **Secret key**
4. Make sure you're using **Test keys** for development

## Step 2: Configure Environment Variables

1. Open the `.env.local` file in your project root
2. Replace the placeholder values with your actual Stripe keys:

```env
# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_your_actual_secret_key_here
STRIPE_PUBLISHABLE_KEY=pk_test_your_actual_publishable_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_actual_publishable_key_here

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Step 3: Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Add products to your cart
3. Navigate to `/checkout`
4. Click "Pay" to test the Stripe checkout flow

## Step 4: Test Payment Methods

Stripe provides test card numbers for testing:

### Successful Payments
- **Visa**: `4242424242424242`
- **Mastercard**: `5555555555554444`
- **American Express**: `378282246310005`

### Failed Payments
- **Declined**: `4000000000000002`
- **Insufficient Funds**: `4000000000009995`
- **Expired Card**: `4000000000000069`

### 3D Secure Authentication
- **Visa**: `4000002500003155`
- **Mastercard**: `5200828282828210`

## Step 5: Production Setup

When ready for production:

1. Switch to **Live keys** in your Stripe Dashboard
2. Update your environment variables with live keys
3. Deploy your application
4. Test with real payment methods

## Features Implemented

✅ **Payment Intent Creation**: Secure payment processing
✅ **Checkout Flow**: Complete checkout experience
✅ **Success/Failure Handling**: Proper error handling
✅ **Cart Integration**: Seamless cart to checkout flow
✅ **Responsive Design**: Works on all devices
✅ **Security**: PCI compliant through Stripe

## API Endpoints

- `POST /api/create-payment-intent`: Creates Stripe payment intent
- `GET /checkout`: Checkout page
- `GET /checkout/success`: Success page after payment

## Components

- `CheckoutForm`: Main checkout component with Stripe integration
- `CartSidebar`: Updated with checkout button
- `CheckoutPage`: Complete checkout page layout
- `CheckoutSuccessPage`: Success/failure handling

## Security Notes

- Never expose your secret key in client-side code
- Always use HTTPS in production
- Validate all payment data server-side
- Use Stripe's webhook verification for production

## Troubleshooting

### Common Issues

1. **"Stripe not loaded" error**
   - Check your `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` is set correctly
   - Ensure the key starts with `pk_test_` or `pk_live_`

2. **"Payment intent creation failed"**
   - Verify your `STRIPE_SECRET_KEY` is correct
   - Check the server logs for detailed error messages

3. **"Invalid amount" error**
   - Ensure amounts are in cents (e.g., $10.00 = 1000)
   - Check the `formatAmountForStripe` function

### Testing Tips

- Use Stripe's test mode for all development
- Test with various card types and scenarios
- Monitor the Stripe Dashboard for payment events
- Check browser console for client-side errors

## Support

For Stripe-specific issues:
- [Stripe Documentation](https://stripe.com/docs)
- [Stripe Support](https://support.stripe.com)

For application-specific issues:
- Check the browser console for errors
- Review server logs for API errors
- Verify environment variables are set correctly 