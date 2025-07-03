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
  inventory_item_id?: string
  createdAt: string
  updatedAt: string
}

export interface InventoryItem {
  id: string
  name: string
  description: string
  quantity_in_stock: number
  location?: string
  is_listed_as_product: boolean
  linked_product_id?: string
  created_at: string
  updated_at: string
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