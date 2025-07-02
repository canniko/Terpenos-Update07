"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCartContext } from "@/components/providers/cart-provider"
import { useEffect, useState } from "react"

interface CartIconProps {
  onCartClick: () => void
}

export function CartIcon({ onCartClick }: CartIconProps) {
  const { cart } = useCartContext()
  const totalItems = cart.itemCount
  const [isAnimating, setIsAnimating] = useState(false)

  // Animate when item count changes
  useEffect(() => {
    if (totalItems > 0) {
      setIsAnimating(true)
      const timer = setTimeout(() => setIsAnimating(false), 300)
      return () => clearTimeout(timer)
    }
  }, [totalItems])

  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative w-10 h-10 rounded-lg hover:bg-brand-alt hover:text-brand-green transition-all duration-200 text-white"
      onClick={onCartClick}
    >
      <ShoppingCart className="h-5 w-5" />
      {totalItems > 0 && (
        <Badge 
          className={`absolute -top-2 -right-2 w-5 h-5 rounded-full bg-brand-green text-black text-xs font-bold p-0 flex items-center justify-center shadow-neon transition-all duration-300 ${
            isAnimating ? 'scale-125 animate-pulse' : 'scale-100'
          }`}
        >
          {totalItems > 99 ? "99+" : totalItems}
        </Badge>
      )}
      <span className="sr-only">Open cart</span>
    </Button>
  )
} 