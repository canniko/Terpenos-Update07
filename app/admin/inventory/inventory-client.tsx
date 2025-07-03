'use client';

import { useState, useEffect } from 'react';
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
  Link, 
  Unlink,
  Minus,
  Plus as PlusIcon,
  Search,
  Filter,
  ArrowLeft
} from 'lucide-react';
import { InventoryItem } from '@/lib/types';

interface InventoryClientProps {
  adminId: number;
  inventoryItems: InventoryItem[];
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
  const [inventoryItems, setInventoryItems] = useState<InventoryItem[]>(initialItems);
  const [stats, setStats] = useState(initialStats);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingItem, setEditingItem] = useState<InventoryItem | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    quantity_in_stock: 0,
    location: '',
    is_listed_as_product: false,
    linked_product_id: ''
  });

  const filteredItems = inventoryItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterType === 'all' ||
                         (filterType === 'linked' && item.is_listed_as_product) ||
                         (filterType === 'unlinked' && !item.is_listed_as_product) ||
                         (filterType === 'low-stock' && item.quantity_in_stock <= 10);

    return matchesSearch && matchesFilter;
  });

  const handleAddItem = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/inventory', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const newItem = await response.json();
        setInventoryItems(prev => [newItem, ...prev]);
        setStats(prev => ({ ...prev, totalItems: prev.totalItems + 1 }));
        setShowAddForm(false);
        resetForm();
      } else {
        const error = await response.json();
        alert(`Error: ${error.error}`);
      }
    } catch (error) {
      console.error('Error adding inventory item:', error);
      alert('Error adding inventory item');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateItem = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;
    setLoading(true);

    try {
      const response = await fetch(`/api/inventory/${editingItem.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const updatedItem = await response.json();
        setInventoryItems(prev => 
          prev.map(item => item.id === editingItem.id ? updatedItem : item)
        );
        setEditingItem(null);
        resetForm();
      } else {
        const error = await response.json();
        alert(`Error: ${error.error}`);
      }
    } catch (error) {
      console.error('Error updating inventory item:', error);
      alert('Error updating inventory item');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteItem = async (id: string) => {
    if (!confirm('Are you sure you want to delete this inventory item?')) return;

    try {
      const response = await fetch(`/api/inventory/${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        setInventoryItems(prev => prev.filter(item => item.id !== id));
        setStats(prev => ({ ...prev, totalItems: prev.totalItems - 1 }));
      } else {
        const error = await response.json();
        alert(`Error: ${error.error}`);
      }
    } catch (error) {
      console.error('Error deleting inventory item:', error);
      alert('Error deleting inventory item');
    }
  };

  const handleAdjustQuantity = async (id: string, adjustment: number, reason: string) => {
    try {
      const response = await fetch(`/api/inventory/${id}/adjust`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ adjustment, reason })
      });

      if (response.ok) {
        const result = await response.json();
        setInventoryItems(prev => 
          prev.map(item => item.id === id ? result.item : item)
        );
      } else {
        const error = await response.json();
        alert(`Error: ${error.error}`);
      }
    } catch (error) {
      console.error('Error adjusting quantity:', error);
      alert('Error adjusting quantity');
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
          prev.map(item => item.id === id ? result.item : item)
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
          prev.map(item => item.id === id ? result.item : item)
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

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      quantity_in_stock: 0,
      location: '',
      is_listed_as_product: false,
      linked_product_id: ''
    });
  };

  const startEdit = (item: InventoryItem) => {
    setEditingItem(item);
    setFormData({
      name: item.name,
      description: item.description,
      quantity_in_stock: item.quantity_in_stock,
      location: item.location || '',
      is_listed_as_product: item.is_listed_as_product,
      linked_product_id: item.linked_product_id || ''
    });
  };

  const cancelEdit = () => {
    setEditingItem(null);
    resetForm();
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
            <Button
              onClick={() => setShowAddForm(true)}
              className="bg-purple-600 hover:bg-purple-700"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Item
            </Button>
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
                    <Link className="w-6 h-6 text-green-400" />
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
                <SelectItem value="linked">Linked to Products</SelectItem>
                <SelectItem value="unlinked">Not Linked</SelectItem>
                <SelectItem value="low-stock">Low Stock (≤10)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Add/Edit Form */}
      {(showAddForm || editingItem) && (
        <section className="py-4">
          <div className="container mx-auto px-4">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white">
                  {editingItem ? 'Edit Inventory Item' : 'Add New Inventory Item'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={editingItem ? handleUpdateItem : handleAddItem} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-white">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        required
                        className="bg-white/10 border-white/20 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="quantity" className="text-white">Quantity in Stock *</Label>
                      <Input
                        id="quantity"
                        type="number"
                        min="0"
                        value={formData.quantity_in_stock}
                        onChange={(e) => setFormData(prev => ({ ...prev, quantity_in_stock: parseInt(e.target.value) || 0 }))}
                        required
                        className="bg-white/10 border-white/20 text-white"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="description" className="text-white">Description *</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                      required
                      className="bg-white/10 border-white/20 text-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="location" className="text-white">Location</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                        placeholder="e.g., Warehouse A - Shelf 3"
                        className="bg-white/10 border-white/20 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="linked_product_id" className="text-white">Linked Product ID</Label>
                      <Input
                        id="linked_product_id"
                        value={formData.linked_product_id}
                        onChange={(e) => setFormData(prev => ({ ...prev, linked_product_id: e.target.value }))}
                        placeholder="product-id (optional)"
                        className="bg-white/10 border-white/20 text-white"
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="is_listed_as_product"
                      checked={formData.is_listed_as_product}
                      onChange={(e) => setFormData(prev => ({ ...prev, is_listed_as_product: e.target.checked }))}
                      className="rounded border-white/20 bg-white/10"
                    />
                    <Label htmlFor="is_listed_as_product" className="text-white">
                      Listed as Product
                    </Label>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      type="submit"
                      disabled={loading}
                      className="bg-purple-600 hover:bg-purple-700"
                    >
                      {loading ? 'Saving...' : (editingItem ? 'Update Item' : 'Add Item')}
                    </Button>
                    <Button
                      type="button"
                      onClick={editingItem ? cancelEdit : () => setShowAddForm(false)}
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Inventory List */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="grid gap-4">
            {filteredItems.map((item) => (
              <Card key={item.id} className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                        <div className="flex gap-2">
                          {item.is_listed_as_product && (
                            <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                              <Link className="w-3 h-3 mr-1" />
                              Linked
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
                        {item.linked_product_id && (
                          <span>Product ID: <span className="text-white">{item.linked_product_id}</span></span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      {/* Quantity Adjustment */}
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleAdjustQuantity(item.id, -1, 'Manual adjustment')}
                          className="border-white/20 text-white hover:bg-white/10"
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleAdjustQuantity(item.id, 1, 'Manual adjustment')}
                          className="border-white/20 text-white hover:bg-white/10"
                        >
                          <PlusIcon className="w-3 h-3" />
                        </Button>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => startEdit(item)}
                          className="border-white/20 text-white hover:bg-white/10"
                        >
                          <Edit className="w-3 h-3" />
                        </Button>
                        
                        {item.is_listed_as_product ? (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleUnlinkFromProduct(item.id)}
                            className="border-white/20 text-white hover:bg-white/10"
                            title="Unlink from product"
                          >
                            <Unlink className="w-3 h-3" />
                          </Button>
                        ) : (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => {
                              const productId = prompt('Enter product ID to link:');
                              if (productId) handleLinkToProduct(item.id, productId);
                            }}
                            className="border-white/20 text-white hover:bg-white/10"
                            title="Link to product"
                          >
                            <Link className="w-3 h-3" />
                          </Button>
                        )}
                        
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDeleteItem(item.id)}
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
    </div>
  );
} 