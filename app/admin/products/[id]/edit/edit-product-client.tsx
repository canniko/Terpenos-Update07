'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Save, X, Upload, Image as ImageIcon, Plus, Package, Eye, EyeOff, ShoppingCart, MapPin, DollarSign, Building } from 'lucide-react';
import Link from 'next/link';
import { Product, InventoryItem } from '@/lib/types';
import ImageUpload from '@/components/image-upload';

interface EditProductClientProps {
  adminId: number;
  product: Product;
}

export default function EditProductClient({ adminId, product }: EditProductClientProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<string[]>(product.images || []);
  const [inventoryItem, setInventoryItem] = useState<InventoryItem | null>(null);
  
  // Only product-specific fields are editable
  const [formData, setFormData] = useState({
    description: product.description,
    price: product.price === 0 ? '' : product.price.toString(),
    visibility: product.visibility
  });

  // Fetch linked inventory item
  useEffect(() => {
    const fetchInventoryItem = async () => {
      if (product.inventory_item_id) {
        try {
          const response = await fetch(`/api/inventory/${product.inventory_item_id}`);
          if (response.ok) {
            const data = await response.json();
            setInventoryItem(data.item);
          }
        } catch (error) {
          console.error('Error fetching inventory item:', error);
        }
      }
    };

    fetchInventoryItem();
  }, [product.inventory_item_id]);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Only update product-specific fields
      const productData = {
        description: formData.description,
        price: parseFloat(formData.price),
        images: images,
        visibility: formData.visibility,
        tags: product.tags, // Keep existing tags for now
        details: {
          ingredients: product.details?.ingredients || [],
          benefits: product.details?.benefits || []
        }
      };

      const response = await fetch(`/api/products/${product.item_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        router.push('/admin/products');
      } else {
        const error = await response.json();
        alert(`Error updating product: ${error.error}`);
      }
    } catch (error) {
      console.error('Error updating product:', error);
      alert('Error updating product');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <section className="bg-white/5 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/admin/products">
                <Button variant="ghost" className="text-gray-400 hover:text-white">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Products
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-white">Edit Product</h1>
                <p className="text-gray-400">Update product information</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Save className="w-5 h-5" />
                Product Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Inventory Information (Read-only) */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Package className="w-5 h-5 text-blue-400" />
                    <h3 className="text-lg font-semibold text-white">Inventory Information</h3>
                    <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Read-only</Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-white">Product Name</Label>
                      <Input
                        value={product.name}
                        className="bg-white/5 border-white/10 text-gray-300 cursor-not-allowed"
                        readOnly
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-white">Category</Label>
                      <Input
                        value={product.category}
                        className="bg-white/5 border-white/10 text-gray-300 cursor-not-allowed"
                        readOnly
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-white">Stock Status</Label>
                      <div className="flex items-center gap-2">
                        {product.inStock ? (
                          <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                            In Stock
                          </Badge>
                        ) : (
                          <Badge className="bg-red-500/20 text-red-300 border-red-500/30">
                            Out of Stock
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-white">Inventory Item ID</Label>
                      <Input
                        value={product.inventory_item_id}
                        className="bg-white/5 border-white/10 text-gray-300 cursor-not-allowed"
                        readOnly
                      />
                    </div>
                  </div>

                  {/* Inventory Description */}
                  {inventoryItem && (
                    <div className="space-y-2">
                      <Label className="text-white">Inventory Description</Label>
                      <Textarea
                        value={inventoryItem.description || 'No description provided'}
                        className="bg-white/5 border-white/10 text-gray-300 cursor-not-allowed min-h-[80px]"
                        readOnly
                        placeholder="Brief inventory description"
                      />
                      <p className="text-sm text-gray-400">
                        This short description is set when creating the inventory item and cannot be edited from the product page.
                      </p>
                    </div>
                  )}
                  
                  {/* Additional Inventory Fields */}
                  {inventoryItem && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/10">
                      <div className="space-y-2">
                        <Label className="text-white flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          Location
                        </Label>
                        <Input
                          value={inventoryItem.location || 'Not specified'}
                          className="bg-white/5 border-white/10 text-gray-300 cursor-not-allowed"
                          readOnly
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label className="text-white flex items-center gap-2">
                          <DollarSign className="w-4 h-4" />
                          Unit Cost
                        </Label>
                        <Input
                          value={inventoryItem.unit_cost ? `$${inventoryItem.unit_cost.toFixed(2)}` : 'Not specified'}
                          className="bg-white/5 border-white/10 text-gray-300 cursor-not-allowed"
                          readOnly
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label className="text-white flex items-center gap-2">
                          <Building className="w-4 h-4" />
                          Vendor
                        </Label>
                        <Input
                          value={inventoryItem.vendor || 'Not specified'}
                          className="bg-white/5 border-white/10 text-gray-300 cursor-not-allowed"
                          readOnly
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Product-Specific Information */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <ShoppingCart className="w-5 h-5 text-purple-400" />
                    <h3 className="text-lg font-semibold text-white">Product Information</h3>
                    <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Editable</Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-white">Details *</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 min-h-[100px]"
                      placeholder="Enter detailed product information for customers"
                      required
                    />
                    <p className="text-sm text-gray-400">
                      This detailed description is shown to customers and can include features, benefits, usage instructions, etc.
                    </p>
                  </div>
                </div>

                {/* Pricing and Stock */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="price" className="text-white">Price (USD) *</Label>
                    <Input
                      id="price"
                      type="number"
                      step="0.01"
                      min="0"
                      value={formData.price}
                      onChange={(e) => handleInputChange('price', e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                      placeholder="0.00"
                      required
                    />
                  </div>
                </div>

                {/* Product Images */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <ImageIcon className="w-5 h-5 text-purple-400" />
                    <h3 className="text-lg font-semibold text-white">Product Images</h3>
                  </div>
                  
                  <ImageUpload
                    images={images}
                    onChange={setImages}
                    maxImages={5}
                    className="text-white"
                  />
                </div>

                {/* Product Visibility */}
                <div className="space-y-2">
                  <Label className="text-white">Product Visibility</Label>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        checked={formData.visibility}
                        onChange={() => handleInputChange('visibility', true)}
                        className="text-purple-600"
                      />
                      <span className="text-white">Visible to Customers</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        checked={!formData.visibility}
                        onChange={() => handleInputChange('visibility', false)}
                        className="text-purple-600"
                      />
                      <span className="text-white">Hidden from Customers</span>
                    </label>
                  </div>
                  <p className="text-sm text-gray-400">
                    Note: Stock status is automatically managed based on inventory levels
                  </p>
                </div>

                {/* Tags */}
                <div className="space-y-2">
                  <Label className="text-white">Tags</Label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {product.tags.map((tag) => (
                      <Badge key={tag} className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                        {tag}
                        <button
                          type="button"
                          onClick={() => {}} // No longer needed
                          className="ml-1 hover:text-red-300"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Input
                      value={''} // No longer needed
                      onChange={(e) => {}} // No longer needed
                      onKeyPress={(e) => {}} // No longer needed
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 flex-1"
                      placeholder="Add a tag"
                    />
                    <Button
                      type="button"
                      onClick={() => {}} // No longer needed
                      variant="outline"
                      className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Ingredients */}
                <div className="space-y-2">
                  <Label className="text-white">Ingredients</Label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {product.details?.ingredients.map((ingredient) => (
                      <Badge key={ingredient} className="bg-green-500/20 text-green-300 border-green-500/30">
                        {ingredient}
                        <button
                          type="button"
                          onClick={() => {}} // No longer needed
                          className="ml-1 hover:text-red-300"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Input
                      value={''} // No longer needed
                      onChange={(e) => {}} // No longer needed
                      onKeyPress={(e) => {}} // No longer needed
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 flex-1"
                      placeholder="Add an ingredient"
                    />
                    <Button
                      type="button"
                      onClick={() => {}} // No longer needed
                      variant="outline"
                      className="border-green-500/50 text-green-400 hover:bg-green-500/10"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Benefits */}
                <div className="space-y-2">
                  <Label className="text-white">Benefits</Label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {product.details?.benefits.map((benefit) => (
                      <Badge key={benefit} className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                        {benefit}
                        <button
                          type="button"
                          onClick={() => {}} // No longer needed
                          className="ml-1 hover:text-red-300"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Input
                      value={''} // No longer needed
                      onChange={(e) => {}} // No longer needed
                      onKeyPress={(e) => {}} // No longer needed
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 flex-1"
                      placeholder="Add a benefit"
                    />
                    <Button
                      type="button"
                      onClick={() => {}} // No longer needed
                      variant="outline"
                      className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Submit Buttons */}
                <div className="flex gap-4 pt-6">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white flex-1"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    {loading ? 'Updating...' : 'Update Product'}
                  </Button>
                  <Link href="/admin/products">
                    <Button
                      type="button"
                      variant="outline"
                      className="border-gray-500/50 text-gray-400 hover:bg-gray-500/10"
                    >
                      Cancel
                    </Button>
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
} 