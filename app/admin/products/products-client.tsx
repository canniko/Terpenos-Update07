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
  Plus, 
  Edit, 
  Trash2, 
  Search, 
  Filter, 
  ArrowLeft, 
  ShoppingCart, 
  Eye, 
  EyeOff,
  X 
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
  const [showViewModal, setShowViewModal] = useState(false);
  const [viewingItem, setViewingItem] = useState<InventoryItemWithProductStatus | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [loading, setLoading] = useState(false);
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
    // Navigate to customer-facing product page instead of showing modal
    if (item.productId) {
      const url = item.productVisibility ? `/products/${item.productId}` : `/products/${item.productId}?preview=1`;
      window.open(url, '_blank');
    }
  };

  const handleViewItem = (inventoryItem: InventoryItemWithProductStatus) => {
    setViewingItem(inventoryItem);
    setShowViewModal(true);
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
                            if (item.productId) {
                              const url = item.productVisibility ? `/products/${item.productId}` : `/products/${item.productId}?preview=1`;
                              window.open(url, '_blank');
                            }
                          }}
                          title="Click to view product page"
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
                        <span>Inventory ID: <span 
                          className="text-white cursor-pointer hover:text-blue-300 transition-colors"
                          onClick={() => handleViewItem(item)}
                          title="Click to view inventory details"
                        >{item.item_id}</span></span>
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

      {/* View Item Modal */}
      {showViewModal && viewingItem && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-white text-2xl">
                    {viewingItem.name}
                  </CardTitle>
                  <p className="text-gray-300">
                    Inventory Item Details
                  </p>
                </div>
                <Button
                  onClick={() => {
                    setShowViewModal(false);
                    setViewingItem(null);
                  }}
                  variant="ghost"
                  className="text-white hover:bg-white/10"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label className="text-gray-400 text-sm">Item ID</Label>
                    <p className="text-white font-mono text-sm">{viewingItem.item_id}</p>
                  </div>
                  
                  <div>
                    <Label className="text-gray-400 text-sm">Category</Label>
                    <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                      {viewingItem.category}
                    </Badge>
                  </div>
                  
                  <div>
                    <Label className="text-gray-400 text-sm">Location</Label>
                    <p className="text-white">{viewingItem.location || 'Not specified'}</p>
                  </div>
                  
                  <div>
                    <Label className="text-gray-400 text-sm">Vendor</Label>
                    <p className="text-white">{viewingItem.vendor || 'Not specified'}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Label className="text-gray-400 text-sm">Stock Level</Label>
                    <div className="flex items-center gap-2">
                      <span className={`text-2xl font-bold ${
                        viewingItem.quantity_in_stock > 10 ? 'text-green-400' : 
                        viewingItem.quantity_in_stock > 0 ? 'text-yellow-400' : 'text-red-400'
                      }`}>
                        {viewingItem.quantity_in_stock}
                      </span>
                      <span className="text-gray-400">units</span>
                      {viewingItem.quantity_in_stock <= 10 && (
                        <Badge className="bg-red-500/20 text-red-300 border-red-500/30">
                          Low Stock
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <Label className="text-gray-400 text-sm">Unit Cost</Label>
                    <p className="text-white">${viewingItem.unit_cost?.toFixed(2) || '0.00'}</p>
                  </div>
                  
                  <div>
                    <Label className="text-gray-400 text-sm">Total Value</Label>
                    <p className="text-white font-semibold">
                      ${((viewingItem.quantity_in_stock || 0) * (viewingItem.unit_cost || 0)).toFixed(2)}
                    </p>
                  </div>
                  
                  <div>
                    <Label className="text-gray-400 text-sm">Product Status</Label>
                    <div className="flex items-center gap-2">
                      {viewingItem.hasProduct ? (
                        <>
                          <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                            Has Product
                          </Badge>
                          <span className="text-gray-400 text-sm">
                            ID: {viewingItem.productId}
                          </span>
                        </>
                      ) : (
                        <Badge className="bg-gray-500/20 text-gray-300 border-gray-500/30">
                          No Product
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <Label className="text-gray-400 text-sm">Description</Label>
                <div className="bg-white/5 rounded-lg p-4 mt-2">
                  <p className="text-white whitespace-pre-wrap">
                    {viewingItem.description || 'No description provided'}
                  </p>
                </div>
              </div>

              {/* Tags */}
              {viewingItem.tags && viewingItem.tags.length > 0 && (
                <div>
                  <Label className="text-gray-400 text-sm">Tags</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {viewingItem.tags.map((tag, index) => (
                      <Badge key={index} className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Timestamps */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div>
                  <Label className="text-gray-400 text-sm">Created</Label>
                  <p className="text-white text-sm">
                    {new Date(viewingItem.created_at).toLocaleString()}
                  </p>
                </div>
                <div>
                  <Label className="text-gray-400 text-sm">Last Updated</Label>
                  <p className="text-white text-sm">
                    {new Date(viewingItem.updated_at).toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6 border-t border-white/10">
                <Button
                  onClick={() => {
                    setShowViewModal(false);
                    setViewingItem(null);
                    router.push(`/admin/inventory/${viewingItem.item_id}/edit`);
                  }}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Item
                </Button>
                
                {viewingItem.hasProduct && (
                  <Link href={`/admin/products/${viewingItem.productId}/edit`}>
                    <Button
                      variant="outline"
                      className="border-green-500/50 text-green-400 hover:bg-green-500/10"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Edit Product
                    </Button>
                  </Link>
                )}
                
                <Button
                  onClick={() => {
                    setShowViewModal(false);
                    setViewingItem(null);
                  }}
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Close
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
} 