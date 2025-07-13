'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Plus, CheckCircle, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { InventoryItemWithProductStatus } from '@/lib/types';

interface EditInventoryItemClientProps {
  adminId: number;
  inventoryItem: InventoryItemWithProductStatus;
}

export default function EditInventoryItemClient({ adminId, inventoryItem }: EditInventoryItemClientProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Form state
  const [formData, setFormData] = useState({
    name: inventoryItem.name,
    category: inventoryItem.category || '',
    description: inventoryItem.description,
    quantity_in_stock: inventoryItem.quantity_in_stock,
    location: inventoryItem.location || '',
    unit_cost: inventoryItem.unit_cost || 0,
    vendor: inventoryItem.vendor || '',
    tags: inventoryItem.tags || [],
    is_listed_as_product: inventoryItem.is_listed_as_product,
    item_id: inventoryItem.item_id || ''
  });

  // Categories for dropdown
  const [categories, setCategories] = useState<string[]>(['Battery','Terpenes', 'Cannabis Products', 'Packaging', 'Equipment', 'Supplies']);
  const [newCategory, setNewCategory] = useState('');
  const [showNewCategoryInput, setShowNewCategoryInput] = useState(false);

  const handleUpdateItem = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Convert empty string to undefined for linked_product_id
      const submitData = {
        ...formData,
        item_id: formData.item_id.trim() || undefined
      };

      const response = await fetch(`/api/inventory/${inventoryItem.item_id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitData)
      });

      if (response.ok) {
        alert('✅ Inventory item updated successfully!');
        router.push('/admin/inventory');
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

  const handleCreateProduct = async () => {
    // First save the inventory item, then redirect to product creation or edit
    setLoading(true);

    try {
      const submitData = {
        ...formData,
        item_id: formData.item_id.trim() || undefined
      };

      const response = await fetch(`/api/inventory/${inventoryItem.item_id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitData)
      });

      if (response.ok) {
        // If product already exists, redirect to edit product page
        if (inventoryItem.hasProduct && inventoryItem.productId) {
          router.push(`/admin/products/${inventoryItem.productId}/edit`);
        } else {
          // Otherwise redirect to product creation page
          router.push(`/admin/products/new?inventoryId=${inventoryItem.item_id}`);
        }
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

  return (
    <div className="min-h-screen bg-brand-background">
      {/* Header */}
      <div className="bg-brand-surface border-b border-brand-border py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                href="/admin/inventory" 
                className="inline-flex items-center gap-2 text-sm text-brand-muted hover:text-brand-green transition-all duration-200"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Inventory
              </Link>
              <h1 className="text-2xl font-bold text-white">Edit Inventory Item</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-white">Edit Inventory Item: {inventoryItem.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleUpdateItem} className="space-y-6">
              {/* Required Fields Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white border-b border-white/20 pb-2">Required Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-white">Item Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                      className="bg-white/10 border-white/20 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="category" className="text-white">Category *</Label>
                    {!showNewCategoryInput ? (
                      <Select 
                        value={formData.category} 
                        onValueChange={(value) => {
                          if (value === 'add-new') {
                            setShowNewCategoryInput(true);
                          } else {
                            setFormData(prev => ({ ...prev, category: value }));
                          }
                        }}
                      >
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((cat) => (
                            <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                          ))}
                          <SelectItem value="add-new" className="text-purple-400 font-medium">
                            <Plus className="w-4 h-4 mr-2 inline" />
                            Add New Category
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    ) : (
                      <div className="space-y-2">
                        <div className="flex gap-2">
                          <Input
                            placeholder="Enter new category name"
                            value={newCategory}
                            onChange={(e) => setNewCategory(e.target.value)}
                            className="bg-white/10 border-white/20 text-white"
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                e.preventDefault();
                                if (newCategory.trim()) {
                                  setCategories(prev => [...prev, newCategory.trim()]);
                                  setFormData(prev => ({ ...prev, category: newCategory.trim() }));
                                  setNewCategory('');
                                  setShowNewCategoryInput(false);
                                }
                              }
                            }}
                          />
                          <Button
                            type="button"
                            onClick={() => {
                              if (newCategory.trim()) {
                                setCategories(prev => [...prev, newCategory.trim()]);
                                setFormData(prev => ({ ...prev, category: newCategory.trim() }));
                                setNewCategory('');
                                setShowNewCategoryInput(false);
                              }
                            }}
                            variant="outline"
                            className="border-green-500/50 text-green-400 hover:bg-green-500/10"
                          >
                            Add
                          </Button>
                          <Button
                            type="button"
                            onClick={() => {
                              setShowNewCategoryInput(false);
                              setNewCategory('');
                            }}
                            variant="outline"
                            className="border-red-500/50 text-red-400 hover:bg-red-500/10"
                          >
                            Cancel
                          </Button>
                        </div>
                        <p className="text-sm text-gray-400">
                          Press Enter or click Add to save the new category
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="description" className="text-white">Short Description *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    required
                    placeholder="Brief description for internal use"
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="quantity" className="text-white">Stock Amount *</Label>
                    <Input
                      id="quantity"
                      type="number"
                      min="0"
                      value={formData.quantity_in_stock === 0 ? '' : formData.quantity_in_stock}
                      onChange={(e) => setFormData(prev => ({ ...prev, quantity_in_stock: parseInt(e.target.value) || 0 }))}
                      required
                      className="bg-white/10 border-white/20 text-white"
                    />
                  </div>
                </div>
              </div>

              {/* Optional Fields Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white border-b border-white/20 pb-2">Optional Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="location" className="text-white">Location</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                      placeholder="e.g., Laboratory, Office, Warehouse A"
                      className="bg-white/10 border-white/20 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="unit_cost" className="text-white">Unit Cost</Label>
                    <Input
                      id="unit_cost"
                      type="number"
                      step="0.01"
                      min="0"
                      value={formData.unit_cost === 0 ? '' : formData.unit_cost}
                      onChange={(e) => setFormData(prev => ({ ...prev, unit_cost: parseFloat(e.target.value) || 0 }))}
                      placeholder="0.00"
                      className="bg-white/10 border-white/20 text-white"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="vendor" className="text-white">Vendor</Label>
                  <Input
                    id="vendor"
                    value={formData.vendor}
                    onChange={(e) => setFormData(prev => ({ ...prev, vendor: e.target.value }))}
                    placeholder="Vendor name or link"
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>

                <div>
                  <Label htmlFor="item_id" className="text-white">Item ID</Label>
                  <Input
                    id="item_id"
                    value={formData.item_id}
                    onChange={(e) => setFormData(prev => ({ ...prev, item_id: e.target.value }))}
                    placeholder="Leave empty to auto-generate"
                    className="bg-white/10 border-white/20 text-white"
                  />
                  <p className="text-sm text-gray-400 mt-1">
                    Optional: Specify a custom item ID. Leave empty to auto-generate.
                  </p>
                </div>

                <div>
                  <Label htmlFor="tags" className="text-white">Tags</Label>
                  <Input
                    id="tags"
                    value={formData.tags.join(', ')}
                    onChange={(e) => {
                      const tags = e.target.value.split(',').map(tag => tag.trim());
                      setFormData(prev => ({ ...prev, tags }));
                    }}
                    placeholder="Enter tags separated by commas"
                    className="bg-white/10 border-white/20 text-white"
                  />
                  <p className="text-sm text-gray-400 mt-1">
                    Separate multiple tags with commas
                  </p>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex gap-4 pt-6">
                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-purple-600 hover:bg-purple-700 flex-1"
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Updating...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      Update Inventory Item
                    </div>
                  )}
                </Button>
                <Button
                  type="button"
                  onClick={handleCreateProduct}
                  disabled={loading}
                  className="bg-green-600 hover:bg-green-700 flex-1"
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Creating...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <ShoppingCart className="h-5 w-5" />
                      {inventoryItem.hasProduct ? 'Edit Linked Product' : 'Create Product'}
                    </div>
                  )}
                </Button>
                <Button
                  type="button"
                  onClick={() => router.push('/admin/inventory')}
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
    </div>
  );
} 