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
import ImageUpload from '@/components/image-upload';
import { 
  Package, 
  Plus, 
  Edit, 
  Trash2, 
  Link as LinkIcon, 
  Unlink, 
  Search, 
  Filter, 
  ArrowLeft, 
  Download, 
  ShoppingCart, 
  Eye, 
  X 
} from 'lucide-react';
import { InventoryItemWithProductStatus } from '@/lib/types';
import Link from 'next/link';

interface InventoryClientProps {
  adminId: number;
  inventoryItems: InventoryItemWithProductStatus[];
  stats: {
    totalItems: number;
    lowStockCount: number;
  };
}

export default function InventoryClient({ 
  adminId, 
  inventoryItems: initialItems, 
  stats: initialStats 
}: InventoryClientProps) {
  const [inventoryItems, setInventoryItems] = useState<InventoryItemWithProductStatus[]>(initialItems);
  const [stats, setStats] = useState(initialStats);
  const [showViewModal, setShowViewModal] = useState(false);
  const [viewingItem, setViewingItem] = useState<InventoryItemWithProductStatus | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Categories for dropdown
  const [categories, setCategories] = useState<string[]>(['Battery','Terpenes', 'Cannabis Products', 'Packaging', 'Equipment', 'Supplies']);
  const [newCategory, setNewCategory] = useState('');
  const [showNewCategoryInput, setShowNewCategoryInput] = useState(false);

  // Debug logging for state changes
  useEffect(() => {
    console.log('State changed - showViewModal:', showViewModal, 'viewingItem:', viewingItem);
  }, [showViewModal, viewingItem]);

  const filteredItems = inventoryItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterType === 'all' ||
                         (filterType === 'linked' && item.hasProduct) ||
                         (filterType === 'unlinked' && !item.hasProduct) ||
                         (filterType === 'low-stock' && item.quantity_in_stock <= 10);

    return matchesSearch && matchesFilter;
  });

  const handleDeleteItem = async (id: string) => {
    if (!confirm('Are you sure you want to delete this inventory item? This action cannot be undone.')) {
      return;
    }

    try {
      const response = await fetch(`/api/inventory/${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        setInventoryItems(prev => prev.filter(item => item.item_id !== id));
        setStats(prev => ({ ...prev, totalItems: prev.totalItems - 1 }));
        alert('Inventory item deleted successfully');
      } else {
        const error = await response.json();
        alert(`Error: ${error.error}`);
      }
    } catch (error) {
      console.error('Error deleting inventory item:', error);
      alert('Error deleting inventory item');
    }
  };

  const handleLinkToProduct = async (id: string, productId: string) => {
    try {
      const response = await fetch(`/api/inventory/${id}/link`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId })
      });

      if (response.ok) {
        const result = await response.json();
        setInventoryItems(prev => 
          prev.map(item => item.item_id === id ? result.item : item)
        );
      } else {
        const error = await response.json();
        alert(`Error: ${error.error}`);
      }
    } catch (error) {
      console.error('Error linking to product:', error);
      alert('Error linking to product');
    }
  };

  const handleUnlinkFromProduct = async (id: string) => {
    try {
      const response = await fetch(`/api/inventory/${id}/link`, {
        method: 'DELETE'
      });

      if (response.ok) {
        const result = await response.json();
        setInventoryItems(prev => 
          prev.map(item => item.item_id === id ? result.item : item)
        );
      } else {
        const error = await response.json();
        alert(`Error: ${error.error}`);
      }
    } catch (error) {
      console.error('Error unlinking from product:', error);
      alert('Error unlinking from product');
    }
  };

  const handleDownloadCSV = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/inventory/export');
      
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `inventory-${new Date().toISOString().split('T')[0]}.csv`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        alert('✅ Inventory exported successfully!');
      } else {
        const error = await response.json();
        alert(`Error: ${error.error}`);
      }
    } catch (error) {
      console.error('Error downloading CSV:', error);
      alert('Error downloading inventory CSV');
    } finally {
      setLoading(false);
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
                  Inventory Management
                </h1>
                <p className="text-gray-300">
                  Track and manage all inventory items
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button
                onClick={handleDownloadCSV}
                disabled={loading}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                <Download className="w-4 h-4 mr-2" />
                {loading ? 'Exporting...' : 'Export CSV'}
              </Button>
              <Button
                onClick={() => router.push('/admin/inventory/new')}
                className="bg-purple-600 hover:bg-purple-700"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Item
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Total Items</p>
                    <p className="text-2xl font-bold text-white">{stats.totalItems}</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Package className="w-6 h-6 text-purple-400" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Low Stock Items</p>
                    <p className="text-2xl font-bold text-white">{stats.lowStockCount}</p>
                    <p className="text-red-400 text-sm">≤ 10 units</p>
                  </div>
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <Package className="w-6 h-6 text-red-400" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Linked Products</p>
                    <p className="text-2xl font-bold text-white">
                      {inventoryItems.filter(item => item.is_listed_as_product).length}
                    </p>
                    <p className="text-green-400 text-sm">Active</p>
                  </div>
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <LinkIcon className="w-6 h-6 text-green-400" />
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
                  placeholder="Search inventory items..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-400"
                />
              </div>
            </div>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-full md:w-48 bg-white/10 border-white/20 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Items</SelectItem>
                <SelectItem value="linked">Has Product</SelectItem>
                <SelectItem value="unlinked">Inventory Only</SelectItem>
                <SelectItem value="low-stock">Low Stock (≤10)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Inventory List */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="grid gap-4">
            {filteredItems.map((item) => (
              <Card key={item.item_id} className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 
                          className="text-lg font-semibold text-white cursor-pointer hover:text-blue-300 transition-colors"
                          onClick={() => handleViewItem(item)}
                          title="Click to view details"
                        >
                          {item.name}
                        </h3>
                        <div className="flex gap-2">
                          {item.hasProduct ? (
                            <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                              <ShoppingCart className="w-3 h-3 mr-1" />
                              Has Product
                            </Badge>
                          ) : (
                            <Badge className="bg-gray-500/20 text-gray-300 border-gray-500/30">
                              <Package className="w-3 h-3 mr-1" />
                              Inventory Only
                            </Badge>
                          )}
                          {item.quantity_in_stock <= 10 && (
                            <Badge className="bg-red-500/20 text-red-300 border-red-500/30">
                              Low Stock
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-2">{item.description}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <span>Quantity: <span className="text-white font-semibold">{item.quantity_in_stock}</span></span>
                        {item.location && (
                          <span>Location: <span className="text-white">{item.location}</span></span>
                        )}
                        {item.item_id && (
                          <span>Item ID: <span className="text-white">{item.item_id}</span></span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => router.push(`/admin/inventory/${item.item_id}/edit`)}
                          className="border-white/20 text-white hover:bg-white/10"
                        >
                          <Edit className="w-3 h-3" />
                        </Button>
                        
                        {item.hasProduct ? (
                          <Link href={`/admin/products/${item.productId}/edit`}>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-green-500/50 text-green-400 hover:bg-green-500/10"
                              title="Edit Product"
                            >
                              <ShoppingCart className="w-3 h-3" />
                            </Button>
                          </Link>
                        ) : null}
                        
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDeleteItem(item.item_id)}
                          className="border-red-500/50 text-red-400 hover:bg-red-500/10"
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

          {filteredItems.length === 0 && (
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-12 text-center">
                <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">No inventory items found</h3>
                <p className="text-gray-400">
                  {searchTerm || filterType !== 'all' 
                    ? 'Try adjusting your search or filter criteria'
                    : 'Get started by adding your first inventory item'
                  }
                </p>
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