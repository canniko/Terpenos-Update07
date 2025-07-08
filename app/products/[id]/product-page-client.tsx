"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useCartContext } from "@/components/providers/cart-provider"
import { ArrowLeft, ShoppingCart, Star, Dna, Sparkles, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Product, InventoryItem } from "@/lib/types"

interface ProductPageClientProps {
  product: Product
}

export default function ProductPageClient({ product }: ProductPageClientProps) {
  const { addToCart } = useCartContext()
  const [quantity, setQuantity] = useState(1)
  const [isAddingToCart, setIsAddingToCart] = useState(false)
  const [inventoryItem, setInventoryItem] = useState<InventoryItem | null>(null)
  const [loading, setLoading] = useState(true)

  // Fetch inventory item data
  useEffect(() => {
    const fetchInventoryItem = async () => {
      try {
        const response = await fetch(`/api/inventory/${product.inventory_item_id}`)
        if (response.ok) {
          const data = await response.json()
          setInventoryItem(data)
        }
      } catch (error) {
        console.error('Error fetching inventory item:', error)
      } finally {
        setLoading(false)
      }
    }

    if (product.inventory_item_id) {
      fetchInventoryItem()
    } else {
      setLoading(false)
    }
  }, [product.inventory_item_id])

  const handleAddToCart = () => {
    setIsAddingToCart(true)
    addToCart(product, quantity)
    setTimeout(() => setIsAddingToCart(false), 1000)
  }

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity)
    }
  }

  return (
    <div className="min-h-screen bg-brand-background">
      {/* Breadcrumb */}
      <div className="bg-brand-surface border-b border-brand-border py-4">
        <div className="container container-padding">
          <Link 
            href="/products" 
            className="inline-flex items-center gap-2 text-sm text-brand-muted hover:text-brand-green transition-all duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>
        </div>
      </div>

      <div className="container container-padding py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-6">
            <div className="relative aspect-square bg-gradient-to-br from-brand-background to-brand-alt rounded-2xl overflow-hidden shadow-bold">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              
              {/* Biotech Badge */}
              <div className="absolute top-6 left-6">
                <Badge className="bg-brand-green text-brand-background px-3 py-1 rounded-full text-sm font-medium shadow-neon">
                  {product.category}
                </Badge>
              </div>

              {/* Rating */}
              <div className="absolute top-6 right-6 flex items-center gap-1 bg-brand-surface/90 backdrop-blur-sm px-3 py-1 rounded-full">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-sm font-medium text-brand-text">{product.rating}</span>
                <span className="text-sm text-brand-muted">({product.reviews})</span>
              </div>
            </div>

            {/* Product Features */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="card-modern">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-brand-green to-brand-accent rounded-lg flex items-center justify-center shadow-neon">
                      <Dna className="h-4 w-4 text-brand-background" />
                    </div>
                    <div>
                      <h4 className="font-medium text-brand-text">Biotech Formulation</h4>
                      <p className="text-xs text-brand-muted">Advanced technology</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-modern">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-brand-green to-brand-accent rounded-lg flex items-center justify-center shadow-neon">
                      <Sparkles className="h-4 w-4 text-brand-background" />
                    </div>
                    <div>
                      <h4 className="font-medium text-brand-text">Premium Quality</h4>
                      <p className="text-xs text-brand-muted">Lab tested</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-brand-accent">
                <Dna className="h-5 w-5" />
                <span className="section-label">Biotech Innovation</span>
              </div>
              
              <h1 className="section-title leading-tight">
                {product.name}
              </h1>
              
              {/* Short Description from Inventory */}
              {!loading && inventoryItem && (
                <p className="text-lg text-brand-muted leading-relaxed">
                  {inventoryItem.description}
                </p>
              )}

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-brand-text">
                  ${product.price}
                </span>
                <span className="text-sm text-brand-muted">USD</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag: string) => (
                <Badge 
                  key={tag} 
                  variant="outline" 
                  className="border-brand-border text-brand-muted hover:border-brand-green hover:text-brand-green transition-all duration-200"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Add to Cart Section */}
            <div className="space-y-6">
              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-brand-text">Quantity:</span>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuantityChange(quantity - 1)}
                    disabled={quantity <= 1}
                    className="w-10 h-10 p-0 rounded-lg border-brand-border hover:bg-brand-surface text-brand-text"
                  >
                    -
                  </Button>
                  <span className="w-12 text-center text-lg font-medium text-brand-text">
                    {quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="w-10 h-10 p-0 rounded-lg border-brand-border hover:bg-brand-surface text-brand-text"
                  >
                    +
                  </Button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <Button
                onClick={handleAddToCart}
                disabled={isAddingToCart}
                className="w-full btn-primary h-14 text-lg"
              >
                {isAddingToCart ? (
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    Added to Cart!
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5" />
                    Add to Cart
                  </div>
                )}
              </Button>

              {/* Stock Status */}
              <div className="flex items-center gap-2 text-sm">
                <div className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
                <span className={product.inStock ? 'text-green-500' : 'text-red-500'}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-brand-text">Product Details</h3>
              
              {/* Full Description from Product */}
              {product.description && (
                <div className="bg-brand-alt border border-brand-border rounded-lg p-4">
                  <h4 className="font-medium text-brand-text mb-2">Description</h4>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    {product.description}
                  </p>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.details?.weight && (
                  <div className="bg-brand-alt border border-brand-border rounded-lg p-4">
                    <h4 className="font-medium text-brand-text mb-1">Weight</h4>
                    <p className="text-sm text-brand-muted">{product.details.weight}</p>
                  </div>
                )}
                {product.details?.volume && (
                  <div className="bg-brand-alt border border-brand-border rounded-lg p-4">
                    <h4 className="font-medium text-brand-text mb-1">Volume</h4>
                    <p className="text-sm text-brand-muted">{product.details.volume}</p>
                  </div>
                )}
              </div>
              
              {product.details?.ingredients && product.details.ingredients.length > 0 && (
                <div className="bg-brand-alt border border-brand-border rounded-lg p-4">
                  <h4 className="font-medium text-brand-text mb-2">Ingredients</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.details.ingredients.map((ingredient: string) => (
                      <Badge key={ingredient} variant="secondary" className="text-xs">
                        {ingredient}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              
              {product.details?.benefits && product.details.benefits.length > 0 && (
                <div className="bg-brand-alt border border-brand-border rounded-lg p-4">
                  <h4 className="font-medium text-brand-text mb-2">Benefits</h4>
                  <ul className="space-y-1">
                    {product.details.benefits.map((benefit: string) => (
                      <li key={benefit} className="flex items-center gap-2 text-sm text-brand-muted">
                        <CheckCircle className="h-3 w-3 text-brand-green" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 