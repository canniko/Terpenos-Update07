'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Package, 
  Edit, 
  Trash2, 
  Search,
  Filter,
  ArrowLeft,
  ShoppingCart,
  Eye,
  EyeOff
} from 'lucide-react';
import { InventoryItemWithProductStatus } from '@/lib/types';
import Link from 'next/link';

interface ProductsClientProps {
  adminId: number;
  inventoryItems: InventoryItemWithProductStatus[];
}

export default function ProductsClient({ 
  adminId, 
  inventoryItems: initialItems
}: ProductsClientProps) {
  const [inventoryItems, setInventoryItems] = useState<InventoryItemWithProductStatus[]>(initialItems);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [loading, setLoading] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [previewItem, setPreviewItem] = useState<InventoryItemWithProductStatus | null>(null);
  const [previewProduct, setPreviewProduct] = useState<any>(null);
  const [previewInventoryItem, setPreviewInventoryItem] = useState<any>(null);
  const [previewLoading, setPreviewLoading] = useState(false);
  const router = useRouter();

  // Filter to show only items that have products
  const productsOnly = inventoryItems.filter(item => item.hasProduct);
  
  const filteredProducts = productsOnly.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterType === 'all' ||
                         (filterType === 'in-stock' && item.quantity_in_stock > 0) ||
                         (filterType === 'out-of-stock' && item.quantity_in_stock <= 0) ||
                         (filterType === 'visible' && item.hasProduct) ||
                         (filterType === 'hidden' && !item.hasProduct);

    return matchesSearch && matchesFilter;
  });

  const handleDeleteProduct = async (inventoryItem: InventoryItemWithProductStatus) => {
    if (!inventoryItem.productId) return;

    if (!confirm('Are you sure you want to delete this product? This action cannot be undone.')) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`/api/admin/products/${inventoryItem.productId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('✅ Product deleted successfully!');
        // Refresh the page to show updated data
        window.location.reload();
      } else {
        const error = await response.json();
        alert(`Error: ${error.error}`);
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Error deleting product');
    } finally {
      setLoading(false);
    }
  };

  const handleToggleVisibility = async (inventoryItem: InventoryItemWithProductStatus) => {
    if (!inventoryItem.productId) return;

    setLoading(true);

    try {
      // Get current product to check visibility
      const response = await fetch(`/api/admin/products/${inventoryItem.productId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch product');
      }
      
      const result = await response.json();
      const product = result.product; // API returns { product: Product }
      const newVisibility = !product.visibility;

      const updateResponse = await fetch(`/api/admin/products/${inventoryItem.productId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ visibility: newVisibility })
      });

      if (updateResponse.ok) {
        alert(`✅ Product ${newVisibility ? 'made visible' : 'hidden'} successfully!`);
        // Refresh the page to show updated data
        window.location.reload();
      } else {
        const error = await updateResponse.json();
        alert(`Error: ${error.error}`);
      }
    } catch (error) {
      console.error('Error toggling visibility:', error);
      alert('Error updating product visibility');
    } finally {
      setLoading(false);
    }
  };

  const handlePreviewItem = async (item: InventoryItemWithProductStatus) => {
    console.log('Preview item clicked:', item.name);
    console.log('Setting modal state...');
    setPreviewItem(item);
    setShowPreviewModal(true);
    setPreviewLoading(true);
    console.log('Modal state set, fetching data...');

    try {
      // Fetch the actual product data
      if (item.productId) {
        console.log('Fetching product data for ID:', item.productId);
        const productResponse = await fetch(`/api/admin/products/${item.productId}`);
        console.log('Product response status:', productResponse.status);
        if (productResponse.ok) {
          const productData = await productResponse.json();
          console.log('Product data received:', productData);
          setPreviewProduct(productData.product);
        } else {
          console.error('Failed to fetch product data');
        }
      }

      // Fetch the inventory item data
      console.log('Fetching inventory data for ID:', item.item_id);
      const inventoryResponse = await fetch(`/api/inventory/${item.item_id}`);
      console.log('Inventory response status:', inventoryResponse.status);
      if (inventoryResponse.ok) {
        const inventoryData = await inventoryResponse.json();
        console.log('Inventory data received:', inventoryData);
        setPreviewInventoryItem(inventoryData);
      } else {
        console.error('Failed to fetch inventory data');
      }
    } catch (error) {
      console.error('Error fetching preview data:', error);
    } finally {
      setPreviewLoading(false);
      console.log('Preview loading finished');
    }
  };

  const closePreviewModal = () => {
    setShowPreviewModal(false);
    setPreviewItem(null);
    setPreviewProduct(null);
    setPreviewInventoryItem(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <section className="bg-white/10 backdrop-blur-lg border-b border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Button
                onClick={() => router.push('/admin')}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">
                  Product Management
                </h1>
                <p className="text-gray-300">
                  Manage customer-facing products derived from inventory
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button
                onClick={() => router.push('/admin/inventory')}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                <Package className="w-4 h-4 mr-2" />
                Manage Inventory
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Total Products</p>
                    <p className="text-2xl font-bold text-white">{productsOnly.length}</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <ShoppingCart className="w-6 h-6 text-purple-400" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">In Stock</p>
                    <p className="text-2xl font-bold text-white">
                      {productsOnly.filter(item => item.quantity_in_stock > 0).length}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-green-400" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Out of Stock</p>
                    <p className="text-2xl font-bold text-white">
                      {productsOnly.filter(item => item.quantity_in_stock <= 0).length}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <EyeOff className="w-6 h-6 text-red-400" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Categories</p>
                    <p className="text-2xl font-bold text-white">
                      {new Set(productsOnly.map(item => item.category)).size}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Package className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-400"
                />
              </div>
            </div>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-full md:w-48 bg-white/10 border-white/20 text-white">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent className="bg-white/10 border-white/20">
                <SelectItem value="all">All Products</SelectItem>
                <SelectItem value="in-stock">In Stock</SelectItem>
                <SelectItem value="out-of-stock">Out of Stock</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Products List */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="grid gap-4">
            {filteredProducts.map((item) => (
              <Card key={item.item_id} className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 
                          className="text-lg font-semibold text-white cursor-pointer hover:text-blue-300 transition-colors"
                          onClick={() => {
                            alert('Product name clicked: ' + item.name);
                            console.log('Product name clicked!');
                            console.log('Item:', item);
                            handlePreviewItem(item);
                          }}
                          title="Click to preview product"
                        >
                          {item.name}
                        </h3>
                        <div className="flex gap-2">
                          {item.quantity_in_stock > 0 ? (
                            <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                              In Stock
                            </Badge>
                          ) : (
                            <Badge className="bg-red-500/20 text-red-300 border-red-500/30">
                              Out of Stock
                            </Badge>
                          )}
                          <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                            {item.category}
                          </Badge>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-2">{item.description}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <span>Product ID: <span className="text-white">{item.productId}</span></span>
                        <span>Inventory ID: <span className="text-white">{item.item_id}</span></span>
                        <span>Location: <span className="text-white">{item.location || 'N/A'}</span></span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <Link href={`/admin/products/${item.productId}/edit`}>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-white/20 text-white hover:bg-white/10"
                            title="Edit Product"
                          >
                            <Edit className="w-3 h-3" />
                          </Button>
                        </Link>
                        
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleToggleVisibility(item)}
                          className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10"
                          title={`${item.productVisibility ? 'Hide' : 'Show'} Product`}
                          disabled={loading}
                        >
                          {item.productVisibility ? (
                            <Eye className="w-3 h-3" />
                          ) : (
                            <EyeOff className="w-3 h-3" />
                          )}
                        </Button>
                        
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDeleteProduct(item)}
                          className="border-red-500/50 text-red-400 hover:bg-red-500/10"
                          title="Delete Product"
                          disabled={loading}
                        >
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-12 text-center">
                <ShoppingCart className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">No products found</h3>
                <p className="text-gray-400">
                  {searchTerm || filterType !== 'all' 
                    ? 'Try adjusting your search or filter criteria'
                    : 'No inventory items have been converted to products yet. Visit the Inventory tab to create products.'
                  }
                </p>
                <Button
                  onClick={() => router.push('/admin/inventory')}
                  className="mt-4 bg-purple-600 hover:bg-purple-700"
                >
                  <Package className="w-4 h-4 mr-2" />
                  Go to Inventory
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Product Preview Modal */}
      {showPreviewModal && previewItem && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 w-full max-w-6xl mx-4 max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Customer Preview
                </CardTitle>
                <Button
                  onClick={closePreviewModal}
                  variant="ghost"
                  className="text-gray-400 hover:text-white"
                >
                  ×
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {previewLoading ? (
                <div className="flex items-center justify-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
                  <span className="ml-3 text-white">Loading preview...</span>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Product Image */}
                  <div className="space-y-6">
                    <div className="relative aspect-square bg-gradient-to-br from-slate-900 to-purple-900 rounded-2xl overflow-hidden shadow-lg">
                      {previewProduct?.image ? (
                        <img
                          src={previewProduct.image}
                          alt={previewItem.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-white/10 flex items-center justify-center">
                          <Package className="w-16 h-16 text-gray-400" />
                        </div>
                      )}
                      
                      {/* Category Badge */}
                      <div className="absolute top-6 left-6">
                        <Badge className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {previewItem.category}
                        </Badge>
                      </div>

                      {/* Rating */}
                      {previewProduct && (
                        <div className="absolute top-6 right-6 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                          <span className="text-yellow-400">⭐</span>
                          <span className="text-sm font-medium text-gray-900">{previewProduct.rating || 4.5}</span>
                          <span className="text-sm text-gray-600">({previewProduct.reviews || 10})</span>
                        </div>
                      )}
                    </div>

                    {/* Product Features */}
                    <div className="grid grid-cols-2 gap-4">
                      <Card className="bg-white/10 border-white/20">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                              <span className="text-white text-sm">🧬</span>
                            </div>
                            <div>
                              <h4 className="font-medium text-white">Biotech Formulation</h4>
                              <p className="text-xs text-gray-400">Advanced technology</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="bg-white/10 border-white/20">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                              <span className="text-white text-sm">✨</span>
                            </div>
                            <div>
                              <h4 className="font-medium text-white">Premium Quality</h4>
                              <p className="text-xs text-gray-400">Lab tested</p>
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
                      <div className="flex items-center gap-2 text-purple-400">
                        <span className="text-sm font-medium">Biotech Innovation</span>
                      </div>
                      
                      <h1 className="text-3xl font-bold text-white leading-tight">
                        {previewItem.name}
                      </h1>
                      
                      {/* Short Description from Inventory */}
                      {previewInventoryItem && (
                        <p className="text-lg text-gray-300 leading-relaxed">
                          {previewInventoryItem.description}
                        </p>
                      )}

                      {/* Price */}
                      {previewProduct && (
                        <div className="flex items-baseline gap-3">
                          <span className="text-4xl font-bold text-white">
                            ${previewProduct.price}
                          </span>
                          <span className="text-sm text-gray-400">USD</span>
                        </div>
                      )}
                    </div>

                    {/* Tags */}
                    {previewProduct?.tags && Array.isArray(previewProduct.tags) && previewProduct.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {previewProduct.tags.map((tag: string) => (
                          <Badge 
                            key={tag} 
                            variant="outline" 
                            className="border-white/20 text-gray-300 hover:border-purple-500 hover:text-purple-300 transition-all duration-200"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}

                    {/* Stock Status */}
                    <div className="flex items-center gap-2 text-sm">
                      <div className={`w-2 h-2 rounded-full ${previewItem.quantity_in_stock > 0 ? 'bg-green-500' : 'bg-red-500'}`} />
                      <span className={previewItem.quantity_in_stock > 0 ? 'text-green-400' : 'text-red-400'}>
                        {previewItem.quantity_in_stock > 0 ? 'In Stock' : 'Out of Stock'}
                      </span>
                    </div>

                    {/* Product Details */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white">Product Details</h3>
                      
                      {/* Full Description from Product */}
                      {previewProduct?.description && (
                        <div className="bg-white/5 border border-white/20 rounded-lg p-4">
                          <h4 className="font-medium text-white mb-2">Description</h4>
                          <p className="text-sm text-gray-300 leading-relaxed">
                            {previewProduct.description}
                          </p>
                        </div>
                      )}
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {previewProduct?.details?.weight && (
                          <div className="bg-white/5 border border-white/20 rounded-lg p-4">
                            <h4 className="font-medium text-white mb-1">Weight</h4>
                            <p className="text-sm text-gray-300">{previewProduct.details.weight}</p>
                          </div>
                        )}
                        {previewProduct?.details?.volume && (
                          <div className="bg-white/5 border border-white/20 rounded-lg p-4">
                            <h4 className="font-medium text-white mb-1">Volume</h4>
                            <p className="text-sm text-gray-300">{previewProduct.details.volume}</p>
                          </div>
                        )}
                      </div>
                      
                      {previewProduct?.details?.ingredients && previewProduct.details.ingredients.length > 0 && (
                        <div className="bg-white/5 border border-white/20 rounded-lg p-4">
                          <h4 className="font-medium text-white mb-2">Ingredients</h4>
                          <div className="flex flex-wrap gap-2">
                            {previewProduct.details.ingredients.map((ingredient: string) => (
                              <Badge key={ingredient} className="bg-green-500/20 text-green-300 border-green-500/30 text-xs">
                                {ingredient}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {previewProduct?.details?.benefits && previewProduct.details.benefits.length > 0 && (
                        <div className="bg-white/5 border border-white/20 rounded-lg p-4">
                          <h4 className="font-medium text-white mb-2">Benefits</h4>
                          <ul className="space-y-1">
                            {previewProduct.details.benefits.map((benefit: string) => (
                              <li key={benefit} className="flex items-center gap-2 text-sm text-gray-300">
                                <span className="text-green-400">✓</span>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
} 