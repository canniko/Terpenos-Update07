import Stripe from 'stripe';

export const getStripe = () => {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('STRIPE_SECRET_KEY is not set in environment variables');
  }
  
  return new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2025-06-30.basil',
    typescript: true,
  });
};

export const formatAmountForStripe = (amount: number, currency: string): number => {
  const currencies = ['USD', 'EUR', 'GBP', 'CAD', 'AUD'];
  const multiplier = currencies.includes(currency.toUpperCase()) ? 100 : 1;
  return Math.round(amount * multiplier);
};

export const formatAmountFromStripe = (amount: number, currency: string): number => {
  const currencies = ['USD', 'EUR', 'GBP', 'CAD', 'AUD'];
  const divisor = currencies.includes(currency.toUpperCase()) ? 100 : 1;
  return amount / divisor;
}; 