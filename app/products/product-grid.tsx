"use client"

import { useState, useMemo } from "react"
import { useLanguage } from "@/lib/i18n/context"
import { ProductCard } from "@/components/product/product-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Dna, Sparkles } from "lucide-react"
import { Product } from "@/lib/types"

interface ProductGridProps {
  initialProducts: Product[]
  categories: string[]
}

export default function ProductGrid({ initialProducts, categories }: ProductGridProps) {
  const { t } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const filteredProducts = useMemo(() => {
    let filtered = initialProducts

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase()
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(q) ||
        product.description?.toLowerCase().includes(q) ||
        (product.tags && product.tags.join(' ').toLowerCase().includes(q))
      )
    }

    return filtered
  }, [searchQuery, selectedCategory, initialProducts])

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const allCategories = ["all", ...categories]

  return (
    <div className="min-h-screen bg-brand-background">
      {/* Hero Section */}
      <section className="bg-gradient-brand section-padding geometric-bg">
        <div className="container container-padding">
          <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-4xl mx-auto">
            <div className="flex items-center gap-3 text-brand-green">
              <Dna className="h-8 w-8 glow-text" />
              <span className="section-label glow-text">Biotech Innovation</span>
            </div>
            <div className="space-y-4">
              <h1 className="section-title text-gradient glow-text">
                {t("products.hero.title")}
              </h1>
              <p className="section-subtitle max-w-2xl mx-auto">
                {t("products.hero.subtitle")}
              </p>
            </div>
            <div className="flex items-center gap-2 text-brand-accent">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-medium">Cutting-edge formulations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-brand-surface border-b border-brand-border py-8">
        <div className="container container-padding">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-brand-muted h-4 w-4" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="pl-12 h-12 rounded-lg border-brand-border focus:border-brand-green focus:ring-brand-green bg-brand-alt text-brand-text"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-brand-muted" />
                <span className="text-sm font-medium text-brand-text">Category:</span>
              </div>
              <div className="flex gap-2">
                {allCategories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleCategoryChange(category)}
                    className={`capitalize rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category 
                        ? 'bg-brand-green text-brand-background hover:bg-brand-hover shadow-neon' 
                        : 'bg-brand-alt text-brand-text border-brand-border hover:bg-brand-surface hover:border-brand-green'
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-brand-alt grid-bg">
        <div className="container container-padding">
          {filteredProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-green to-brand-accent rounded-full flex items-center justify-center mb-6 shadow-neon">
                <Search className="h-10 w-10 text-brand-background" />
              </div>
              <h3 className="section-title mb-3">No products found</h3>
              <p className="section-subtitle mb-6 max-w-md">
                Try adjusting your search or filter criteria to find what you're looking for.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("all")
                }}
                className="btn-outline"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="section-title mb-2">
                    {filteredProducts.length} Product{filteredProducts.length !== 1 ? 's' : ''} Found
                  </h2>
                  <p className="section-subtitle">
                    Discover our cutting-edge biotech solutions
                  </p>
                </div>
                {searchQuery && (
                  <Badge className="bg-brand-green text-brand-background px-3 py-1 rounded-full text-sm font-medium shadow-neon">
                    Search: "{searchQuery}"
                  </Badge>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <div key={product.item_id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  )
} 