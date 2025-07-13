export interface Product {
  item_id: string
  name: string
  description: string
  price: number
  images: string[] // Changed from single image to array of images
  category: string
  inStock: boolean
  rating: number
  reviews: number
  tags: string[]
  inventory_item_id: string
  visibility: boolean
  details: {
    weight?: string
    volume?: string
    ingredients: string[]
    benefits: string[]
  }
  createdAt: string
  updatedAt: string
}

export interface InventoryItem {
  item_id: string
  name: string
  category: string
  description: string
  quantity_in_stock: number
  location: string
  unit_cost: number
  vendor: string
  tags: string[]
  is_listed_as_product: boolean
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

// New interface for creating products from inventory items
export interface CreateProductFromInventory {
  inventoryItemId: string
  price: number
  description: string
  image?: string
  tags: string[]
  visibility?: boolean
  details: {
    weight?: string
    volume?: string
    ingredients: string[]
    benefits: string[]
  }
}

// New interface for inventory item display with product status
export interface InventoryItemWithProductStatus extends InventoryItem {
  hasProduct: boolean
  productId?: string
  productVisibility?: boolean
} 