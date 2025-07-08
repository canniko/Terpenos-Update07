'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowLeft, Plus, Save, X, Upload, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';
// import ImageUpload from '@/components/image-upload';

interface AddProductClientProps {
  adminId: number;
}

export default function AddProductClient({ adminId }: AddProductClientProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  
  // Form state - same as inventory but with createProduct pre-checked
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    quantity_in_stock: 0,
    location: '',
    unit_cost: 0,
    vendor: '',
    tags: [] as string[],
    is_listed_as_product: true, // Pre-checked for Add Product page
    item_id: ''
  });

  // Product-specific fields (shown when is_listed_as_product is true)
  const [productData, setProductData] = useState({
    price: 0,
    images: [] as string[],
    ingredients: [] as string[],
    benefits: [] as string[],
    weight: '',
    volume: ''
  });

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
      // Prepare the request data
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
          volume: productData.volume
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
    } catch (error) {
      console.error('Error creating product:', error);
      alert('❌ Error creating product. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/admin/products">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Add New Product</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Create New Product</CardTitle>
          <p className="text-muted-foreground">
            This will create both an inventory item (for internal tracking) and a public product listing (for customers to purchase).
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Inventory Item Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Inventory Information</h3>
                
                <div>
                  <Label htmlFor="item_id">Item ID (Optional)</Label>
                  <Input
                    id="item_id"
                    type="text"
                    placeholder="Leave blank to auto-generate"
                    value={formData.item_id}
                    onChange={(e) => handleInputChange('item_id', e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="category">Category *</Label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                    <SelectTrigger>
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
                </div>

                <div>
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    required
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="quantity_in_stock">Quantity in Stock *</Label>
                  <Input
                    id="quantity_in_stock"
                    type="number"
                    min="0"
                    required
                    value={formData.quantity_in_stock === 0 ? '' : formData.quantity_in_stock}
                    onChange={(e) => handleInputChange('quantity_in_stock', parseInt(e.target.value) || 0)}
                  />
                </div>

                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    type="text"
                    placeholder="e.g., Warehouse A, Shelf 3"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="unit_cost">Unit Cost ($)</Label>
                  <Input
                    id="unit_cost"
                    type="number"
                    min="0"
                    step="0.01"
                    value={formData.unit_cost === 0 ? '' : formData.unit_cost}
                    onChange={(e) => handleInputChange('unit_cost', parseFloat(e.target.value) || 0)}
                  />
                </div>

                <div>
                  <Label htmlFor="vendor">Vendor</Label>
                  <Input
                    id="vendor"
                    type="text"
                    placeholder="Supplier name"
                    value={formData.vendor}
                    onChange={(e) => handleInputChange('vendor', e.target.value)}
                  />
                </div>

                <div>
                  <Label>Tags</Label>
                  <Input
                    value={formData.tags.join(', ')}
                    onChange={(e) => {
                      const value = e.target.value;
                      const newTags = value.split(',').map(tag => tag.trim());
                      setFormData(prev => ({ ...prev, tags: newTags }));
                    }}
                    placeholder="tag1, tag2, tag3 (comma separated)"
                  />
                </div>
              </div>

              {/* Product Fields */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="is_listed_as_product"
                    checked={formData.is_listed_as_product}
                    onCheckedChange={(checked) => handleInputChange('is_listed_as_product', checked as boolean)}
                  />
                  <Label htmlFor="is_listed_as_product" className="text-lg font-semibold">
                    Create as Public Product
                  </Label>
                </div>

                {formData.is_listed_as_product && (
                  <>
                    <h3 className="text-lg font-semibold">Product Information</h3>
                    
                    <div>
                      <Label htmlFor="price">Price ($) *</Label>
                      <Input
                        id="price"
                        type="number"
                        min="0"
                        step="0.01"
                        required={formData.is_listed_as_product}
                        value={productData.price === 0 ? '' : productData.price}
                        onChange={(e) => handleProductDataChange('price', parseFloat(e.target.value) || 0)}
                      />
                    </div>

                    <div>
                      <Label>Product Images</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-500">
                          Image upload functionality temporarily disabled
                        </p>
                      </div>
                      {/* <ImageUpload
                        images={imageUrls}
                        onChange={setImageUrls}
                        maxImages={5}
                      /> */}
                    </div>

                    <div>
                      <Label htmlFor="weight">Weight</Label>
                      <Input
                        id="weight"
                        type="text"
                        placeholder="e.g., 5ml, 100g"
                        value={productData.weight}
                        onChange={(e) => handleProductDataChange('weight', e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="volume">Volume</Label>
                      <Input
                        id="volume"
                        type="text"
                        placeholder="e.g., 30ml, 1oz"
                        value={productData.volume}
                        onChange={(e) => handleProductDataChange('volume', e.target.value)}
                      />
                    </div>

                    <div>
                      <Label>Ingredients</Label>
                      <Input
                        value={productData.ingredients.join(', ')}
                        onChange={(e) => {
                          const newIngredients = e.target.value.split(',').map(ing => ing.trim());
                          setProductData(prev => ({ ...prev, ingredients: newIngredients }));
                        }}
                        placeholder="ingredient1, ingredient2, ingredient3 (comma separated)"
                      />
                    </div>

                    <div>
                      <Label>Benefits</Label>
                      <Input
                        value={productData.benefits.join(', ')}
                        onChange={(e) => {
                          const newBenefits = e.target.value.split(',').map(ben => ben.trim());
                          setProductData(prev => ({ ...prev, benefits: newBenefits }));
                        }}
                        placeholder="benefit1, benefit2, benefit3 (comma separated)"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              <Button type="submit" disabled={loading}>
                {loading ? 'Creating...' : 'Create Product'}
                <Save className="h-4 w-4 ml-2" />
              </Button>
              <Link href="/admin/products">
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
} 