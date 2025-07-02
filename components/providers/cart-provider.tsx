"use client"

import { createContext, useContext, ReactNode } from "react"
import { useCart } from "@/lib/hooks/useCart"
import { Cart } from "@/lib/types"

interface CartContextType {
  cart: Cart
  addToCart: (product: any, quantity?: number) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  getItemQuantity: (productId: string) => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCartContext = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCartContext must be used within a CartProvider")
  }
  return context
}

interface CartProviderProps {
  children: ReactNode
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const cartHook = useCart()

  return (
    <CartContext.Provider value={cartHook}>
      {children}
    </CartContext.Provider>
  )
} 