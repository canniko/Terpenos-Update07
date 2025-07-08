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
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingItem, setEditingItem] = useState<InventoryItemWithProductStatus | null>(null);
  const [showCreateProductModal, setShowCreateProductModal] = useState(false);
  const [selectedInventoryItem, setSelectedInventoryItem] = useState<InventoryItemWithProductStatus | null>(null);
  const [showViewModal, setShowViewModal] = useState(false);
  const [viewingItem, setViewingItem] = useState<InventoryItemWithProductStatus | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    quantity_in_stock: 0,
    location: '',
    unit_cost: 0,
    vendor: '',
    tags: [] as string[],
    is_listed_as_product: false,
    item_id: ''
  });

  // Product creation state
  const [createProduct, setCreateProduct] = useState(false);
  const [productData, setProductData] = useState({
    price: 0,
    details: '',
    weight: '',
    ingredients: [] as string[],
    benefits: [] as string[],
    images: [] as string[]
  });

  // New product creation form state
  const [newProductData, setNewProductData] = useState({
    price: 0,
    image: '',
    longDescription: '',
    visibility: true
  });

  // Categories for dropdown
  const [categories, setCategories] = useState<string[]>(['Terpenes', 'Cannabis Products', 'Packaging', 'Equipment', 'Supplies']);
  const [newCategory, setNewCategory] = useState('');
  const [showNewCategoryInput, setShowNewCategoryInput] = useState(false);

  // Debug logging for state changes
  useEffect(() => {
    console.log('State changed - createProduct:', createProduct, 'productData:', productData);
  }, [createProduct, productData]);

  const filteredItems = inventoryItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterType === 'all' ||
                         (filterType === 'linked' && item.hasProduct) ||
                         (filterType === 'unlinked' && !item.hasProduct) ||
                         (filterType === 'low-stock' && item.quantity_in_stock <= 10);

    return matchesSearch && matchesFilter;
  });

  const handleAddItem = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Validate product data if creating a product
      if (createProduct) {
        if (!productData.price || productData.price <= 0) {
          alert('Please enter a valid price for the product');
          setLoading(false);
          return;
        }
        if (!productData.details.trim()) {
          alert('Please enter a product description');
          setLoading(false);
          return;
        }
      }

      // Convert empty string to undefined for linked_product_id
      const submitData = {
        ...formData,
        item_id: formData.item_id.trim() || undefined
      };

      const response = await fetch('/api/inventory', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          inventoryItem: submitData,
          createProduct: createProduct ? productData : null
        })
      });

      if (response.ok) {
        const result = await response.json();
        setInventoryItems(prev => [result.inventoryItem, ...prev]);
        setStats(prev => ({ ...prev, totalItems: prev.totalItems + 1 }));
        setShowAddForm(false);
        resetForm();
        
        if (createProduct && result.product) {
          alert(`✅ Inventory item and product created successfully!\nItem ID: ${result.product.item_id}`);
        } else {
          alert('✅ Inventory item created successfully!');
        }
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
      // Convert empty string to undefined for linked_product_id
      const submitData = {
        ...formData,
        item_id: formData.item_id.trim() || undefined
      };

      // If product creation is enabled and there's a linked product, also update the product
      if (createProduct && editingItem.item_id) {
        try {
          const productUpdateResponse = await fetch(`/api/products/${editingItem.item_id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              price: productData.price,
              details: productData.details,
              image: productData.images[0] || '',
              tags: formData.tags
            })
          });

          if (!productUpdateResponse.ok) {
            console.warn('Failed to update linked product:', await productUpdateResponse.text());
          }
        } catch (error) {
          console.error('Error updating linked product:', error);
        }
      }

      const response = await fetch(`/api/inventory/${editingItem.item_id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitData)
      });

      if (response.ok) {
        const updatedItem = await response.json();
        setInventoryItems(prev => 
          prev.map(item => item.item_id === editingItem.item_id ? updatedItem : item)
        );
        setEditingItem(null);
        resetForm();
        alert('✅ Inventory item updated successfully!');
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

  const resetForm = () => {
    setFormData({
      name: '',
      category: '',
      description: '',
      quantity_in_stock: 0,
      location: '',
      unit_cost: 0,
      vendor: '',
      tags: [],
      is_listed_as_product: false,
      item_id: ''
    });
    setCreateProduct(false);
    setProductData({
      price: 0,
      details: '',
      weight: '',
      ingredients: [],
      benefits: [],
      images: []
    });
    setNewCategory('');
    setShowNewCategoryInput(false);
  };

  const startEdit = async (item: InventoryItemWithProductStatus) => {
    console.log('Starting edit for item:', item);
    setEditingItem(item);
    setFormData({
      name: item.name,
      category: item.category || '',
      description: item.description,
      quantity_in_stock: item.quantity_in_stock,
      location: item.location || '',
      unit_cost: item.unit_cost || 0,
      vendor: item.vendor || '',
      tags: item.tags || [],
      is_listed_as_product: item.is_listed_as_product,
      item_id: item.item_id || ''
    });

    // If this item has a linked product, fetch the product data and populate the form
    if (item.hasProduct && item.productId) {
      console.log('Item has linked product, fetching product data for:', item.productId);
      setCreateProduct(true);
      
      try {
        // Use admin API endpoint to get product data regardless of visibility
        const response = await fetch(`/api/admin/products/${item.productId}`);
        console.log('Product API response status:', response.status);
        
        if (response.ok) {
          const data = await response.json();
          console.log('Fetched product data:', data);
          
          // The API returns { product: { ... } }
          const product = data.product;
          
          if (product) {
            // Populate product data fields
            setProductData({
              price: product.price || 0,
              details: product.description || '',
              weight: product.details?.weight || '',
              ingredients: product.details?.ingredients || [],
              benefits: product.details?.benefits || [],
              images: product.image ? [product.image] : []
            });
            console.log('Product data populated successfully:', {
              price: product.price,
              details: product.description,
              weight: product.details?.weight,
              ingredients: product.details?.ingredients,
              benefits: product.details?.benefits,
              images: product.image ? [product.image] : []
            });
          } else {
            console.warn('No product data found in response');
            // Reset product data to defaults if product not found
            setProductData({
              price: 0,
              details: '',
              weight: '',
              ingredients: [],
              benefits: [],
              images: []
            });
          }
        } else {
          console.warn('Could not fetch product data:', item.productId, 'Status:', response.status);
          // Reset product data to defaults if product not found
          setProductData({
            price: 0,
            details: '',
            weight: '',
            ingredients: [],
            benefits: [],
            images: []
          });
        }
      } catch (error) {
        console.error('Error fetching product:', error);
        // Reset product data to defaults on error
        setProductData({
          price: 0,
          details: '',
          weight: '',
          ingredients: [],
          benefits: [],
          images: []
        });
      }
    } else {
      console.log('Item does not have a linked product, resetting product data');
      // Reset product data and toggle for items not listed as products
      setCreateProduct(false);
      setProductData({
        price: 0,
        details: '',
        weight: '',
        ingredients: [],
        benefits: [],
        images: []
      });
    }
  };

  const cancelEdit = () => {
    setEditingItem(null);
    resetForm();
    setNewCategory('');
    setShowNewCategoryInput(false);
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

  const handleCreateProduct = async (inventoryItem: InventoryItemWithProductStatus) => {
    setSelectedInventoryItem(inventoryItem);
    setShowCreateProductModal(true);
  };

  const handleSubmitProductForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedInventoryItem) return;

    // Validate form data
    if (!newProductData.price || newProductData.price <= 0) {
      alert('Please enter a valid price');
      return;
    }

    if (!newProductData.longDescription.trim()) {
      alert('Please enter a product description');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`/api/inventory/${selectedInventoryItem.item_id}/create-product`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          price: newProductData.price,
          description: newProductData.longDescription,
          image: newProductData.image || '',
          tags: selectedInventoryItem.tags || [],
          details: {
            weight: '',
            volume: '',
            ingredients: [],
            benefits: []
          }
        })
      });

      if (response.ok) {
        const result = await response.json();
        
        // Update the inventory item to show it now has a product
        setInventoryItems(prev => 
          prev.map(item => 
            item.item_id === selectedInventoryItem.item_id 
              ? { ...item, hasProduct: true, productId: result.product.item_id }
              : item
          )
        );
        
        // Close modal and reset form
        setShowCreateProductModal(false);
        setSelectedInventoryItem(null);
        setNewProductData({
          price: 0,
          image: '',
          longDescription: '',
          visibility: true
        });
        
        alert(`✅ Product created successfully!\nProduct ID: ${result.product.item_id}`);
      } else {
        const error = await response.json();
        alert(`Error: ${error.error}`);
      }
    } catch (error) {
      console.error('Error creating product:', error);
      alert('Error creating product');
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
                onClick={() => setShowAddForm(true)}
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
                <form onSubmit={editingItem ? handleUpdateItem : handleAddItem} className="space-y-6">
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
                        placeholder="battery, cart, terpenes (comma separated)"
                        className="bg-white/10 border-white/20 text-white"
                      />
                    </div>
                  </div>

                  {/* Product Creation Toggle */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 p-4 bg-white/5 rounded-lg border border-white/10">
                      <input
                        type="checkbox"
                        id="create_product"
                        checked={createProduct}
                        onChange={(e) => setCreateProduct(e.target.checked)}
                        className="rounded border-white/20 bg-white/10"
                      />
                      <Label htmlFor="create_product" className="text-white font-medium">
                        Create Visible Store Item from this Inventory Item?
                      </Label>
                    </div>

                    <div className={`space-y-4 p-4 bg-white/5 rounded-lg border border-white/10 ${!createProduct ? 'opacity-50' : ''}`}>
                      <h4 className="text-md font-semibold text-white">Product Information</h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="price" className="text-white">Price *</Label>
                          <Input
                            id="price"
                            type="number"
                            step="0.01"
                            min="0"
                            value={productData.price === 0 ? '' : productData.price}
                            onChange={(e) => setProductData(prev => ({ ...prev, price: parseFloat(e.target.value) || 0 }))}
                            required={createProduct}
                            disabled={!createProduct}
                            className={`bg-white/10 border-white/20 text-white ${!createProduct ? 'cursor-not-allowed' : ''}`}
                          />
                        </div>
                        <div>
                          <Label htmlFor="weight" className="text-white">Weight</Label>
                          <Input
                            id="weight"
                            value={productData.weight}
                            onChange={(e) => setProductData(prev => ({ ...prev, weight: e.target.value }))}
                            placeholder="e.g., 10ml, 100g"
                            disabled={!createProduct}
                            className={`bg-white/10 border-white/20 text-white ${!createProduct ? 'cursor-not-allowed' : ''}`}
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="details" className="text-white">Details / Full Description *</Label>
                        <Textarea
                          id="details"
                          value={productData.details}
                          onChange={(e) => setProductData(prev => ({ ...prev, details: e.target.value }))}
                          required={createProduct}
                          placeholder="Detailed product description for customers"
                          disabled={!createProduct}
                          className={`bg-white/10 border-white/20 text-white ${!createProduct ? 'cursor-not-allowed' : ''}`}
                          rows={4}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="ingredients" className="text-white">Ingredients</Label>
                          <Input
                            id="ingredients"
                            value={productData.ingredients.join(', ')}
                            onChange={(e) => {
                              const ingredients = e.target.value.split(',').map(ing => ing.trim());
                              setProductData(prev => ({ ...prev, ingredients }));
                            }}
                            placeholder="ingredient1, ingredient2 (comma separated)"
                            disabled={!createProduct}
                            className={`bg-white/10 border-white/20 text-white ${!createProduct ? 'cursor-not-allowed' : ''}`}
                          />
                        </div>
                        <div>
                          <Label htmlFor="benefits" className="text-white">Benefits / Use-Cases</Label>
                          <Input
                            id="benefits"
                            value={productData.benefits.join(', ')}
                            onChange={(e) => {
                              const benefits = e.target.value.split(',').map(ben => ben.trim());
                              setProductData(prev => ({ ...prev, benefits }));
                            }}
                            placeholder="benefit1, benefit2 (comma separated)"
                            disabled={!createProduct}
                            className={`bg-white/10 border-white/20 text-white ${!createProduct ? 'cursor-not-allowed' : ''}`}
                          />
                        </div>
                      </div>

                      <div>
                        <ImageUpload
                          images={productData.images}
                          onChange={(images) => setProductData(prev => ({ ...prev, images }))}
                          maxImages={5}
                          className={`text-white ${!createProduct ? 'opacity-50 cursor-not-allowed' : ''}`}
                        />
                        <p className="text-sm text-gray-400 mt-1">
                          Leave empty to use "Image Coming Soon" placeholder
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
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
                          onClick={() => handleViewItem(item)}
                          className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10"
                          title="View Details"
                        >
                          <Eye className="w-3 h-3" />
                        </Button>
                        
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => startEdit(item)}
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
                        ) : (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleCreateProduct(item)}
                            className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10"
                            title="Create Product"
                            disabled={loading}
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        )}
                        
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

      {/* Create Product Modal */}
      {showCreateProductModal && selectedInventoryItem && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 w-full max-w-2xl mx-4">
            <CardHeader>
              <CardTitle className="text-white">
                Create Product from Inventory Item
              </CardTitle>
              <p className="text-gray-300">
                Creating product for: <span className="text-white font-semibold">{selectedInventoryItem.name}</span>
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitProductForm} className="space-y-6">
                {/* Price */}
                <div>
                  <Label htmlFor="price" className="text-white">Price (USD)</Label>
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    min="0"
                    value={newProductData.price}
                    onChange={(e) => setNewProductData(prev => ({ ...prev, price: parseFloat(e.target.value) || 0 }))}
                    placeholder="29.99"
                    className="bg-white/10 border-white/20 text-white"
                    required
                  />
                </div>

                {/* Image URL */}
                <div>
                  <Label htmlFor="image" className="text-white">Product Image URL</Label>
                  <Input
                    id="image"
                    type="url"
                    value={newProductData.image}
                    onChange={(e) => setNewProductData(prev => ({ ...prev, image: e.target.value }))}
                    placeholder="https://example.com/image.jpg"
                    className="bg-white/10 border-white/20 text-white"
                  />
                  <p className="text-sm text-gray-400 mt-1">
                    Leave empty to use a placeholder image
                  </p>
                </div>

                {/* Long Description */}
                <div>
                  <Label htmlFor="longDescription" className="text-white">Product Description</Label>
                  <Textarea
                    id="longDescription"
                    value={newProductData.longDescription}
                    onChange={(e) => setNewProductData(prev => ({ ...prev, longDescription: e.target.value }))}
                    placeholder="Detailed description of the product, its benefits, and features..."
                    className="bg-white/10 border-white/20 text-white min-h-[100px]"
                    required
                  />
                </div>

                {/* Visibility Toggle */}
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="visibility"
                    checked={newProductData.visibility}
                    onChange={(e) => setNewProductData(prev => ({ ...prev, visibility: e.target.checked }))}
                    className="rounded border-white/20 bg-white/10 text-purple-600 focus:ring-purple-500"
                  />
                  <Label htmlFor="visibility" className="text-white">
                    Visible on website
                  </Label>
                </div>

                {/* Inventory Item Info */}
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Inventory Item Details</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Name:</span>
                      <span className="text-white ml-2">{selectedInventoryItem.name}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Category:</span>
                      <span className="text-white ml-2">{selectedInventoryItem.category}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Stock:</span>
                      <span className="text-white ml-2">{selectedInventoryItem.quantity_in_stock} units</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Location:</span>
                      <span className="text-white ml-2">{selectedInventoryItem.location || 'N/A'}</span>
                    </div>
                  </div>
                </div>

                {/* Form Actions */}
                <div className="flex gap-4 pt-4">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="bg-purple-600 hover:bg-purple-700"
                  >
                    {loading ? 'Creating...' : 'Create Product'}
                  </Button>
                  <Button
                    type="button"
                    onClick={() => {
                      setShowCreateProductModal(false);
                      setSelectedInventoryItem(null);
                      setNewProductData({
                        price: 0,
                        image: '',
                        longDescription: '',
                        visibility: true
                      });
                    }}
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
      )}

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
                    <p className="text-white">${viewingItem.unit_cost.toFixed(2)}</p>
                  </div>
                  
                  <div>
                    <Label className="text-gray-400 text-sm">Total Value</Label>
                    <p className="text-white font-semibold">
                      ${(viewingItem.quantity_in_stock * viewingItem.unit_cost).toFixed(2)}
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
                    startEdit(viewingItem);
                  }}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Item
                </Button>
                
                {viewingItem.hasProduct ? (
                  <Link href={`/admin/products/${viewingItem.productId}/edit`}>
                    <Button
                      variant="outline"
                      className="border-green-500/50 text-green-400 hover:bg-green-500/10"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Edit Product
                    </Button>
                  </Link>
                ) : (
                  <Button
                    onClick={() => {
                      setShowViewModal(false);
                      setViewingItem(null);
                      handleCreateProduct(viewingItem);
                    }}
                    variant="outline"
                    className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Create Product
                  </Button>
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