"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { useCartContext } from "@/components/providers/cart-provider"
import { Product } from "@/lib/types"
import { ShoppingCart, Eye, Sparkles, Dna } from "lucide-react"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCartContext()
  const [isHovered, setIsHovered] = useState(false)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product, 1)
  }

  return (
    <Link href={`/products/${product.item_id}`}>
      <Card 
        className={`card-neon group cursor-pointer overflow-hidden ${
          isHovered ? 'shadow-glow scale-[1.02]' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden">
          {/* Product Image */}
          <div className="aspect-square relative bg-gradient-to-br from-brand-background to-brand-alt">
            <Image
              src={product.images && product.images.length > 0 ? product.images[0] : '/placeholder.jpg'}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            
            {/* Overlay with neon accent */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <Badge className="bg-brand-green text-black px-3 py-1 rounded-full text-xs font-medium shadow-neon">
                {product.category}
              </Badge>
            </div>

            {/* Quick Actions Overlay */}
            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <Button
                size="icon"
                variant="secondary"
                className="w-8 h-8 bg-brand-surface/90 hover:bg-brand-surface text-white rounded-full shadow-medium"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-4 w-4" />
              </Button>
            </div>

            {/* Biotech Indicator */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-brand-green to-brand-accent rounded-full flex items-center justify-center shadow-neon">
                <Dna className="h-3 w-3 text-black" />
              </div>
              <span className="text-xs font-medium text-white bg-black/80 px-2 py-1 rounded-full backdrop-blur-sm">
                Biotech
              </span>
            </div>
          </div>
        </div>

        <CardContent className="p-6">
          <div className="space-y-3">
            {/* Product Name */}
            <h3 className="text-xl font-semibold text-white group-hover:text-brand-green transition-colors duration-200 line-clamp-2">
              {product.name}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-300 line-clamp-2 leading-relaxed">
              {product.description}
            </p>

            {/* Features */}
            <div className="flex items-center gap-2 text-xs text-brand-accent">
              <Sparkles className="h-3 w-3" />
              <span className="font-medium">Advanced Formulation</span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0">
          <div className="w-full flex items-center justify-between">
            {/* Price */}
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-white">
                ${product.price}
              </span>
            </div>

            {/* Add to Cart Button */}
            <Button
              size="sm"
              className="btn-primary"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add
            </Button>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
} 