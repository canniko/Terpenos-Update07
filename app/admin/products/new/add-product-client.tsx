'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowLeft, Plus, Save, X, Upload, Image as ImageIcon, Package, MapPin, DollarSign, Building, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import ImageUpload from '@/components/image-upload';

interface AddProductClientProps {
  adminId: number;
  inventoryItem?: any;
}

export default function AddProductClient({ adminId, inventoryItem }: AddProductClientProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  
  // Form state
  const [formData, setFormData] = useState({
    name: inventoryItem?.name || '',
    category: inventoryItem?.category || '',
    description: inventoryItem?.description || '',
    quantity_in_stock: inventoryItem?.quantity_in_stock || 0,
    location: inventoryItem?.location || '',
    unit_cost: inventoryItem?.unit_cost || 0,
    vendor: inventoryItem?.vendor || '',
    tags: inventoryItem?.tags || [],
    is_listed_as_product: true,
    item_id: inventoryItem?.item_id || ''
  });

  // Product-specific fields
  const [productData, setProductData] = useState({
    price: 0,
    images: [] as string[],
    ingredients: [] as string[],
    benefits: [] as string[],
    weight: '',
    volume: '',
    details: '' // Added details field
  });

  useEffect(() => {
    if (inventoryItem) {
      setFormData({
        name: inventoryItem.name || '',
        category: inventoryItem.category || '',
        description: inventoryItem.description || '',
        quantity_in_stock: inventoryItem.quantity_in_stock || 0,
        location: inventoryItem.location || '',
        unit_cost: inventoryItem.unit_cost || 0,
        vendor: inventoryItem.vendor || '',
        tags: inventoryItem.tags || [],
        is_listed_as_product: true,
        item_id: inventoryItem.item_id || ''
      });
    }
  }, [inventoryItem]);

  // Enhanced categories list
  const categories = [
    'terpenes',
    'cannabis',
    'wellness',
    'skincare',
    'supplements',
    'battery',
    'accessories',
    'tinctures',
    'topicals',
    'edibles',
    'vapes',
    'lab-equipment',
    'research',
    'education',
    'other'
  ];

  const handleInputChange = (field: string, value: string | number | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleProductDataChange = (field: string, value: string | number | string[]) => {
    setProductData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (inventoryItem) {
        // If inventory item exists, only create the product and link it
        const newProductData = {
          name: formData.name,
          description: productData.details, // Use product details as product description
          price: productData.price,
          images: imageUrls,
          category: formData.category,
          inStock: formData.quantity_in_stock > 0,
          tags: formData.tags,
          inventory_item_id: inventoryItem.item_id,
          visibility: true,
          details: {
            weight: productData.weight,
            volume: productData.volume,
            ingredients: productData.ingredients,
            benefits: productData.benefits,
          },
        };

        const response = await fetch('/api/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newProductData),
        });

        if (response.ok) {
          const result = await response.json();
          alert(`✅ Product created successfully and linked to inventory item: ${inventoryItem.item_id}`);
          router.push('/admin/products');
        } else {
          const errorData = await response.json();
          alert(`❌ Error: ${errorData.error || 'Failed to create product'}`);
        }
      } else {
        // If no inventory item, create both inventory and product
        const requestData = {
          inventoryItem: {
            ...formData,
            tags: formData.tags
          },
          createProduct: formData.is_listed_as_product ? {
            price: productData.price,
            images: imageUrls,
            ingredients: productData.ingredients,
            benefits: productData.benefits,
            weight: productData.weight,
            volume: productData.volume,
            details: productData.details // Add product details
          } : null
        };

        const response = await fetch('/api/inventory', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
        });

        if (response.ok) {
          const result = await response.json();
          
          if (formData.is_listed_as_product && result.product) {
            alert(`✅ Product created successfully!\nItem ID: ${result.product.item_id}`);
          } else {
            alert('✅ Inventory item created successfully!');
          }
          
          router.push('/admin/products');
        } else {
          const errorData = await response.json();
          alert(`❌ Error: ${errorData.error || 'Failed to create product'}`);
        }
      }
    } catch (error) {
      console.error('Error creating product:', error);
      alert('❌ Error creating product. Please try again.');
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
                <h1 className="text-2xl font-bold text-white">
                  {inventoryItem ? 'Create Product from Inventory Item' : 'Add New Product'}
                </h1>
                <p className="text-gray-400">
                  {inventoryItem 
                    ? `Creating a product linked to inventory item: ${inventoryItem.name}`
                    : 'Create both inventory item and public product listing'
                  }
                </p>
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
                {inventoryItem ? 'Product Information' : 'Product & Inventory Information'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Inventory Information */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Package className="w-5 h-5 text-blue-400" />
                    <h3 className="text-lg font-semibold text-white">Inventory Information</h3>
                    {inventoryItem && (
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Read-only</Badge>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className={inventoryItem ? "bg-white/5 border-white/10 text-gray-300 cursor-not-allowed" : "bg-white/10 border-white/20 text-white placeholder-gray-400"}
                        readOnly={!!inventoryItem}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="category" className="text-white">Category *</Label>
                      {inventoryItem ? (
                        <Input
                          value={formData.category}
                          className="bg-white/5 border-white/10 text-gray-300 cursor-not-allowed"
                          readOnly
                        />
                      ) : (
                        <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                          <SelectTrigger className="bg-white/10 border-white/20 text-white">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map((category) => (
                              <SelectItem key={category} value={category}>
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="quantity_in_stock" className="text-white">Quantity in Stock *</Label>
                      <Input
                        id="quantity_in_stock"
                        type="number"
                        min="0"
                        required
                        value={formData.quantity_in_stock === 0 ? '' : formData.quantity_in_stock}
                        onChange={(e) => handleInputChange('quantity_in_stock', parseInt(e.target.value) || 0)}
                        className={inventoryItem ? "bg-white/5 border-white/10 text-gray-300 cursor-not-allowed" : "bg-white/10 border-white/20 text-white placeholder-gray-400"}
                        readOnly={!!inventoryItem}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="item_id" className="text-white">Item ID</Label>
                      <Input
                        id="item_id"
                        type="text"
                        placeholder="Leave blank to auto-generate"
                        value={formData.item_id}
                        onChange={(e) => handleInputChange('item_id', e.target.value)}
                        className={inventoryItem ? "bg-white/5 border-white/10 text-gray-300 cursor-not-allowed" : "bg-white/10 border-white/20 text-white placeholder-gray-400"}
                        readOnly={!!inventoryItem}
                      />
                    </div>
                  </div>

                  {/* Inventory Description */}
                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-white">
                      {inventoryItem ? 'Inventory Description' : 'Short Description *'}
                    </Label>
                    <Textarea
                      id="description"
                      required={!inventoryItem}
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      placeholder="Brief description for internal inventory tracking"
                      className={`min-h-[80px] ${inventoryItem ? 'bg-white/5 border-white/10 text-gray-300 cursor-not-allowed' : 'bg-white/10 border-white/20 text-white placeholder-gray-400'}`}
                      readOnly={!!inventoryItem}
                    />
                    <p className="text-sm text-gray-400">
                      {inventoryItem 
                        ? 'This description is from the existing inventory item and cannot be edited from the product creation page.'
                        : 'Short description for internal inventory management'
                      }
                    </p>
                  </div>

                  {/* Additional Inventory Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/10">
                    <div className="space-y-2">
                      <Label htmlFor="location" className="text-white flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Location
                      </Label>
                      <Input
                        id="location"
                        type="text"
                        placeholder="e.g., Warehouse A, Shelf 3"
                        value={formData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        className={inventoryItem ? "bg-white/5 border-white/10 text-gray-300 cursor-not-allowed" : "bg-white/10 border-white/20 text-white placeholder-gray-400"}
                        readOnly={!!inventoryItem}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="unit_cost" className="text-white flex items-center gap-2">
                        <DollarSign className="w-4 h-4" />
                        Unit Cost ($)
                      </Label>
                      <Input
                        id="unit_cost"
                        type="number"
                        min="0"
                        step="0.01"
                        value={formData.unit_cost === 0 ? '' : formData.unit_cost}
                        onChange={(e) => handleInputChange('unit_cost', parseFloat(e.target.value) || 0)}
                        className={inventoryItem ? "bg-white/5 border-white/10 text-gray-300 cursor-not-allowed" : "bg-white/10 border-white/20 text-white placeholder-gray-400"}
                        readOnly={!!inventoryItem}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="vendor" className="text-white flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        Vendor
                      </Label>
                      <Input
                        id="vendor"
                        type="text"
                        placeholder="Supplier name"
                        value={formData.vendor}
                        onChange={(e) => handleInputChange('vendor', e.target.value)}
                        className={inventoryItem ? "bg-white/5 border-white/10 text-gray-300 cursor-not-allowed" : "bg-white/10 border-white/20 text-white placeholder-gray-400"}
                        readOnly={!!inventoryItem}
                      />
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="space-y-2">
                    <Label className="text-white">Tags</Label>
                    <Input
                      value={formData.tags.join(', ')}
                      onChange={(e) => {
                        const value = e.target.value;
                        const newTags = value.split(',').map(tag => tag.trim());
                        setFormData(prev => ({ ...prev, tags: newTags }));
                      }}
                      placeholder="tag1, tag2, tag3 (comma separated)"
                      className={inventoryItem ? "bg-white/5 border-white/10 text-gray-300 cursor-not-allowed" : "bg-white/10 border-white/20 text-white placeholder-gray-400"}
                      readOnly={!!inventoryItem}
                    />
                  </div>
                </div>

                {/* Product Information */}
                {!inventoryItem && (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="is_listed_as_product"
                        checked={formData.is_listed_as_product}
                        onCheckedChange={(checked) => handleInputChange('is_listed_as_product', checked as boolean)}
                        className="text-purple-600"
                      />
                      <Label htmlFor="is_listed_as_product" className="text-white text-lg font-semibold">
                        Create as Public Product
                      </Label>
                    </div>
                  </div>
                )}

                {/* Product Fields */}
                {(formData.is_listed_as_product || inventoryItem) && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <ShoppingCart className="w-5 h-5 text-purple-400" />
                      <h3 className="text-lg font-semibold text-white">Product Information</h3>
                      <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Editable</Badge>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="productDetails" className="text-white">Details *</Label>
                      <Textarea
                        id="productDetails"
                        required={formData.is_listed_as_product || !!inventoryItem}
                        value={productData.details || ''}
                        onChange={(e) => handleProductDataChange('details', e.target.value)}
                        placeholder="Detailed product information for customers (features, benefits, usage instructions, etc.)"
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400 min-h-[120px]"
                      />
                      <p className="text-sm text-gray-400">
                        Detailed description shown to customers
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="price" className="text-white">Price (USD) *</Label>
                        <Input
                          id="price"
                          type="number"
                          min="0"
                          step="0.01"
                          required={formData.is_listed_as_product || !!inventoryItem}
                          value={productData.price === 0 ? '' : productData.price}
                          onChange={(e) => handleProductDataChange('price', parseFloat(e.target.value) || 0)}
                          className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                          placeholder="0.00"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="weight" className="text-white">Weight</Label>
                        <Input
                          id="weight"
                          type="text"
                          placeholder="e.g., 5ml, 100g"
                          value={productData.weight}
                          onChange={(e) => handleProductDataChange('weight', e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="volume" className="text-white">Volume</Label>
                        <Input
                          id="volume"
                          type="text"
                          placeholder="e.g., 30ml, 1oz"
                          value={productData.volume}
                          onChange={(e) => handleProductDataChange('volume', e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder-gray-400"
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
                        images={imageUrls}
                        onChange={setImageUrls}
                        maxImages={5}
                        className="text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-white">Ingredients</Label>
                      <Input
                        value={productData.ingredients.join(', ')}
                        onChange={(e) => {
                          const newIngredients = e.target.value.split(',').map(ing => ing.trim());
                          setProductData(prev => ({ ...prev, ingredients: newIngredients }));
                        }}
                        placeholder="ingredient1, ingredient2, ingredient3 (comma separated)"
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-white">Benefits</Label>
                      <Input
                        value={productData.benefits.join(', ')}
                        onChange={(e) => {
                          const newBenefits = e.target.value.split(',').map(ben => ben.trim());
                          setProductData(prev => ({ ...prev, benefits: newBenefits }));
                        }}
                        placeholder="benefit1, benefit2, benefit3 (comma separated)"
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                      />
                    </div>
                  </div>
                )}

                {/* Submit Buttons */}
                <div className="flex gap-4 pt-6">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white flex-1"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    {loading ? 'Creating...' : 'Create Product'}
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