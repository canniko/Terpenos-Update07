"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCartContext } from "@/components/providers/cart-provider"
import { X, Minus, Plus, ShoppingCart, Trash2, ArrowRight } from "lucide-react"

interface CartSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCartContext()

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-brand-surface shadow-bold z-50 transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-brand-border">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-green to-brand-accent rounded-lg flex items-center justify-center shadow-neon">
                <ShoppingCart className="h-4 w-4 text-black" />
              </div>
              <h2 className="text-xl font-semibold text-white">Shopping Cart</h2>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="w-8 h-8 rounded-lg hover:bg-brand-alt text-white"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-green to-brand-accent rounded-full flex items-center justify-center mb-4 shadow-neon">
                  <ShoppingCart className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Your cart is empty</h3>
                <p className="text-gray-300 mb-6">Add some products to get started</p>
                <Button onClick={onClose} className="btn-primary">
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.items.map((item) => (
                  <div key={item.product.id} className="bg-brand-alt border border-brand-border rounded-xl p-4 flex justify-between items-center shadow-medium">
                    {/* Product Image */}
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-brand-background">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0 px-4">
                      <h4 className="font-medium text-white truncate">
                        {item.product.name}
                      </h4>
                      <p className="text-sm text-gray-300 mb-2">
                        ${item.product.price}
                      </p>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-8 h-8 p-0 rounded-lg border-brand-border hover:bg-brand-surface text-white"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center text-sm font-medium text-white">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-8 h-8 p-0 rounded-lg border-brand-border hover:bg-brand-surface text-white"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFromCart(item.product.id)}
                      className="w-8 h-8 p-0 text-gray-300 hover:text-red-400 hover:bg-red-500/10 rounded-lg"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.items.length > 0 && (
            <div className="border-t border-brand-border p-6 space-y-4">
              {/* Total */}
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-white">Total</span>
                <span className="text-2xl font-bold text-white">${cart.total.toFixed(2)}</span>
              </div>

              {/* Checkout Button */}
              <Link href="/checkout" onClick={onClose}>
                <Button className="w-full btn-primary h-12 text-base">
                  <div className="flex items-center gap-2">
                    Checkout
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Button>
              </Link>

              {/* Continue Shopping */}
              <Button
                variant="outline"
                onClick={onClose}
                className="w-full btn-outline"
              >
                Continue Shopping
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  )
} 