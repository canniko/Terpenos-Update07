'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Search, 
  Package, 
  DollarSign, 
  Tag,
  Eye,
  LogOut,
  Activity,
  User
} from 'lucide-react';
import Link from 'next/link';

interface AdminProductsClientProps {
  adminId: number;
  activityLogs: any[];
}

export default function AdminProductsClient({ adminId, activityLogs }: AdminProductsClientProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [showActivity, setShowActivity] = useState(false);
  const router = useRouter();

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/products');
      if (response.ok) {
        const data = await response.json();
        // Ensure we always have an array
        const allProducts = Array.isArray(data) ? data : [];
        setProducts(allProducts);
      } else {
        console.error('Failed to load products');
        setProducts([]); // Ensure products is always an array
      }
    } catch (error) {
      console.error('Error loading products:', error);
      setProducts([]); // Ensure products is always an array
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProduct = async (productId: string) => {
    if (!confirm('Are you sure you want to delete this product?')) {
      return;
    }

    try {
      const response = await fetch(`/api/products/${productId}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        await loadProducts(); // Reload the list
        alert('Product deleted successfully');
      } else {
        alert('Failed to delete product');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Error deleting product');
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/admin/logout', {
        method: 'POST',
      });
      
      if (response.ok) {
        router.push('/admin/login');
      } else {
        alert('Logout failed');
      }
    } catch (error) {
      console.error('Error logging out:', error);
      alert('Error logging out');
    }
  };

  const filteredProducts = (products || []).filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'terpenes':
        return 'bg-blue-100 text-blue-800';
      case 'cannabis':
        return 'bg-green-100 text-green-800';
      case 'battery':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-white">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <section className="bg-white/10 backdrop-blur-lg border-b border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Product Management
              </h1>
              <p className="text-gray-300">
                Manage your product catalog and inventory
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/admin">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <Package className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
              <Button
                onClick={() => setShowActivity(!showActivity)}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                <Activity className="w-4 h-4 mr-2" />
                Activity
              </Button>
              <Link href="/admin/products/new">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Product
                </Button>
              </Link>
              <Link href="/admin/orders">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  View Orders
                </Button>
              </Link>
              <Button
                onClick={handleLogout}
                variant="outline"
                className="border-red-500/50 text-red-400 hover:bg-red-500/10"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Activity Panel */}
      {showActivity && (
        <section className="bg-white/5 backdrop-blur-lg border-b border-white/10">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-4 h-4 mr-2" />
                Recent Activity
              </h3>
              <Button
                onClick={() => setShowActivity(false)}
                variant="ghost"
                className="text-gray-400 hover:text-white"
              >
                ×
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {activityLogs.slice(0, 6).map((log) => (
                <Card key={log.id} className="bg-white/10 border-white/20">
                  <CardContent className="p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white text-sm font-medium">{log.action}</p>
                        <p className="text-gray-400 text-xs">{log.username}</p>
                      </div>
                      <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                        {new Date(log.created_at).toLocaleDateString()}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Search and Stats */}
      <section className="bg-white/5 backdrop-blur-lg border-b border-white/10 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 rounded-lg border-white/20 focus:border-purple-500 focus:ring-purple-500 bg-white/10 text-white placeholder-gray-400"
              />
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{(products || []).length}</div>
                <div className="text-sm text-gray-400">Total Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">
                  {(products || []).filter(p => p.inStock).length}
                </div>
                <div className="text-sm text-gray-400">In Stock</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">
                  {(products || []).filter(p => !p.inStock).length}
                </div>
                <div className="text-sm text-gray-400">Out of Stock</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Table */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Package className="w-5 h-5" />
                Products ({filteredProducts.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">No products found</h3>
                  <p className="text-gray-400 mb-4">
                    {searchQuery ? 'Try adjusting your search criteria.' : 'Get started by adding your first product.'}
                  </p>
                  {!searchQuery && (
                    <Link href="/admin/products/new">
                      <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                        <Plus className="w-4 h-4 mr-2" />
                        Add First Product
                      </Button>
                    </Link>
                  )}
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">Product</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">Category</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">Price</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">Stock</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">Rating</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-gray-300">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredProducts.map((product) => (
                        <tr key={product.id} className="border-b border-white/10 hover:bg-white/5">
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                                <Package className="w-6 h-6 text-gray-400" />
                              </div>
                              <div>
                                <div className="font-medium text-white">{product.name}</div>
                                <div className="text-sm text-gray-400 truncate max-w-xs">
                                  {product.description}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <Badge className={`${getCategoryColor(product.category)} capitalize`}>
                              {product.category}
                            </Badge>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-1 text-white">
                              <DollarSign className="w-4 h-4" />
                              <span className="font-medium">{product.price}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <Badge className={product.inStock ? 'bg-green-500/20 text-green-300 border-green-500/30' : 'bg-red-500/20 text-red-300 border-red-500/30'}>
                              {product.inStock ? 'In Stock' : 'Out of Stock'}
                            </Badge>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-1">
                              <span className="text-white">{product.rating}</span>
                              <span className="text-gray-400">({product.reviews})</span>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center justify-end gap-2">
                              <Link href={`/products/${product.id}`}>
                                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-white/10">
                                  <Eye className="w-4 h-4" />
                                </Button>
                              </Link>
                              <Link href={`/admin/products/${product.id}/edit`}>
                                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-white/10">
                                  <Edit className="w-4 h-4" />
                                </Button>
                              </Link>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                                onClick={() => handleDeleteProduct(product.id)}
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
} 