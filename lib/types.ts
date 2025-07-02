export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  inStock: boolean
  rating: number
  reviews: number
  tags: string[]
  details: {
    weight?: string
    volume?: string
    ingredients: string[]
    benefits: string[]
  }
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface Cart {
  items: CartItem[]
  total: number
}

export interface OrderItem {
  productId: string
  productName: string
  quantity: number
  price: number
  image: string
}

export interface Order {
  id: string
  sessionId: string
  customerEmail: string
  customerName: string
  items: OrderItem[]
  total: number
  status: 'pending' | 'paid' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  paymentStatus: 'pending' | 'paid' | 'failed'
  createdAt: Date
  updatedAt: Date
  shippingAddress?: {
    line1: string
    line2?: string
    city: string
    state: string
    postalCode: string
    country: string
  }
  notes?: string
}

export interface StripeWebhookEvent {
  id: string
  type: string
  data: {
    object: any
  }
} 