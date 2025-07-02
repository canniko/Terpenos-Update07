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
import { ArrowLeft, Plus, Save, X, Upload, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';

interface AddProductClientProps {
  adminId: number;
}

export default function AddProductClient({ adminId }: AddProductClientProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState('');
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [newIngredient, setNewIngredient] = useState('');
  const [benefits, setBenefits] = useState<string[]>([]);
  const [newBenefit, setNewBenefit] = useState('');
  const [showCustomCategory, setShowCustomCategory] = useState(false);
  const [customCategory, setCustomCategory] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    imageUrl: '',
    inStock: true,
    rating: '4.5',
    reviews: '0'
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

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCategoryChange = (value: string) => {
    if (value === 'custom') {
      setShowCustomCategory(true);
      setFormData(prev => ({ ...prev, category: '' }));
    } else {
      setShowCustomCategory(false);
      setCustomCategory('');
      setFormData(prev => ({ ...prev, category: value }));
    }
  };

  const handleCustomCategoryChange = (value: string) => {
    setCustomCategory(value);
    setFormData(prev => ({ ...prev, category: value }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
      setFormData(prev => ({ ...prev, imageUrl: '' })); // Clear URL when file is selected
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUrlChange = (url: string) => {
    setFormData(prev => ({ ...prev, imageUrl: url }));
    setImageFile(null);
    setImagePreview('');
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview('');
    setFormData(prev => ({ ...prev, imageUrl: '' }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const addIngredient = () => {
    if (newIngredient.trim() && !ingredients.includes(newIngredient.trim())) {
      setIngredients([...ingredients, newIngredient.trim()]);
      setNewIngredient('');
    }
  };

  const removeIngredient = (ingredientToRemove: string) => {
    setIngredients(ingredients.filter(ingredient => ingredient !== ingredientToRemove));
  };

  const addBenefit = () => {
    if (newBenefit.trim() && !benefits.includes(newBenefit.trim())) {
      setBenefits([...benefits, newBenefit.trim()]);
      setNewBenefit('');
    }
  };

  const removeBenefit = (benefitToRemove: string) => {
    setBenefits(benefits.filter(benefit => benefit !== benefitToRemove));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let finalImageUrl = formData.imageUrl;

      // Handle image upload if file is selected
      if (imageFile) {
        const formDataFile = new FormData();
        formDataFile.append('image', imageFile);
        
        const uploadResponse = await fetch('/api/upload-image', {
          method: 'POST',
          body: formDataFile,
        });

        if (uploadResponse.ok) {
          const uploadResult = await uploadResponse.json();
          finalImageUrl = uploadResult.imageUrl;
        } else {
          console.error('Failed to upload image');
          // Fallback to data URL for now
          finalImageUrl = imagePreview;
        }
      }

      const productData = {
        ...formData,
        image: finalImageUrl,
        price: parseFloat(formData.price),
        rating: parseFloat(formData.rating),
        reviews: parseInt(formData.reviews),
        tags,
        details: {
          ingredients,
          benefits
        },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        router.push('/admin/products');
      } else {
        console.error('Failed to create product');
      }
    } catch (error) {
      console.error('Error creating product:', error);
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
                <h1 className="text-2xl font-bold text-white">Add New Product</h1>
                <p className="text-gray-400">Create a new product for your store</p>
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
                <Plus className="w-5 h-5" />
                Product Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">Product Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                      placeholder="Enter product name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category" className="text-white">Category *</Label>
                    <Select value={formData.category} onValueChange={handleCategoryChange}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
                          </SelectItem>
                        ))}
                        <SelectItem value="custom">+ Add Custom Category</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    {showCustomCategory && (
                      <div className="mt-2">
                        <Input
                          value={customCategory}
                          onChange={(e) => handleCustomCategoryChange(e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                          placeholder="Enter custom category name"
                          required
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-white">Description *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 min-h-[100px]"
                    placeholder="Enter product description"
                    required
                  />
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

                  <div className="space-y-2">
                    <Label htmlFor="rating" className="text-white">Rating</Label>
                    <Input
                      id="rating"
                      type="number"
                      step="0.1"
                      min="0"
                      max="5"
                      value={formData.rating}
                      onChange={(e) => handleInputChange('rating', e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                      placeholder="4.5"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reviews" className="text-white">Reviews Count</Label>
                    <Input
                      id="reviews"
                      type="number"
                      min="0"
                      value={formData.reviews}
                      onChange={(e) => handleInputChange('reviews', e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                      placeholder="0"
                    />
                  </div>
                </div>

                {/* Image Upload/URL */}
                <div className="space-y-4">
                  <Label className="text-white">Product Image</Label>
                  
                  {/* Image Upload */}
                  <div className="space-y-2">
                    <Label htmlFor="imageUpload" className="text-white text-sm">Upload Image</Label>
                    <div className="flex items-center gap-4">
                      <Button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        variant="outline"
                        className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10"
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        Choose File
                      </Button>
                      <input
                        ref={fileInputRef}
                        type="file"
                        id="imageUpload"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                      {imageFile && (
                        <span className="text-green-400 text-sm">
                          {imageFile.name}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Image Preview */}
                  {imagePreview && (
                    <div className="relative inline-block">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-32 h-32 object-cover rounded-lg border border-white/20"
                      />
                      <Button
                        type="button"
                        onClick={removeImage}
                        variant="ghost"
                        size="sm"
                        className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-6 h-6 p-0"
                      >
                        <X className="w-3 h-3" />
                      </Button>
                    </div>
                  )}

                  {/* OR Divider */}
                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-px bg-white/20"></div>
                    <span className="text-white/60 text-sm">OR</span>
                    <div className="flex-1 h-px bg-white/20"></div>
                  </div>

                  {/* Image URL */}
                  <div className="space-y-2">
                    <Label htmlFor="imageUrl" className="text-white text-sm">Image URL</Label>
                    <Input
                      id="imageUrl"
                      type="url"
                      value={formData.imageUrl}
                      onChange={(e) => handleImageUrlChange(e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                      placeholder="https://example.com/image.jpg"
                      disabled={!!imageFile}
                    />
                  </div>
                </div>

                {/* Stock Status */}
                <div className="space-y-2">
                  <Label className="text-white">Stock Status</Label>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        checked={formData.inStock}
                        onChange={() => handleInputChange('inStock', true)}
                        className="text-purple-600"
                      />
                      <span className="text-white">In Stock</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        checked={!formData.inStock}
                        onChange={() => handleInputChange('inStock', false)}
                        className="text-purple-600"
                      />
                      <span className="text-white">Out of Stock</span>
                    </label>
                  </div>
                </div>

                {/* Tags */}
                <div className="space-y-2">
                  <Label className="text-white">Tags</Label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {tags.map((tag) => (
                      <Badge key={tag} className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                        {tag}
                        <button
                          type="button"
                          onClick={() => removeTag(tag)}
                          className="ml-1 hover:text-red-300"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Input
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 flex-1"
                      placeholder="Add a tag"
                    />
                    <Button
                      type="button"
                      onClick={addTag}
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
                    {ingredients.map((ingredient) => (
                      <Badge key={ingredient} className="bg-green-500/20 text-green-300 border-green-500/30">
                        {ingredient}
                        <button
                          type="button"
                          onClick={() => removeIngredient(ingredient)}
                          className="ml-1 hover:text-red-300"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Input
                      value={newIngredient}
                      onChange={(e) => setNewIngredient(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addIngredient())}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 flex-1"
                      placeholder="Add an ingredient"
                    />
                    <Button
                      type="button"
                      onClick={addIngredient}
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
                    {benefits.map((benefit) => (
                      <Badge key={benefit} className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                        {benefit}
                        <button
                          type="button"
                          onClick={() => removeBenefit(benefit)}
                          className="ml-1 hover:text-red-300"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Input
                      value={newBenefit}
                      onChange={(e) => setNewBenefit(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addBenefit())}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 flex-1"
                      placeholder="Add a benefit"
                    />
                    <Button
                      type="button"
                      onClick={addBenefit}
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