'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Package, 
  ShoppingCart, 
  Activity, 
  Users, 
  DollarSign, 
  TrendingUp,
  LogOut,
  Settings,
  Eye,
  Warehouse
} from 'lucide-react';
import Link from 'next/link';

interface AdminDashboardClientProps {
  adminId: number;
  stats: {
    totalProducts: number;
    inStockProducts: number;
    totalOrders: number;
    pendingOrders: number;
    deliveredOrders: number;
    recentActivity: number;
    totalInventoryItems: number;
    lowStockItems: number;
  };
  activityLogs: any[];
  recentOrders: any[];
}

export default function AdminDashboardClient({ 
  adminId, 
  stats, 
  activityLogs, 
  recentOrders 
}: AdminDashboardClientProps) {
  const [showActivity, setShowActivity] = useState(false);
  const router = useRouter();

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'processing':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'shipped':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'delivered':
        return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'cancelled':
        return 'bg-red-500/20 text-red-300 border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <section className="bg-white/10 backdrop-blur-lg border-b border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Admin Dashboard
              </h1>
              <p className="text-gray-300">
                Welcome back! Here's what's happening with your store.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button
                onClick={() => setShowActivity(!showActivity)}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                <Activity className="w-4 h-4 mr-2" />
                Activity
              </Button>
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
              {activityLogs.slice(0, 9).map((log) => (
                <Card key={log.id} className="bg-white/10 border-white/20">
                  <CardContent className="p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white text-sm font-medium">{log.action}</p>
                        <p className="text-gray-400 text-xs">{log.username}</p>
                        {log.details && (
                          <p className="text-gray-500 text-xs mt-1">{log.details}</p>
                        )}
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

      {/* Stats Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            {/* Products Stats */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Total Products</p>
                    <p className="text-2xl font-bold text-white">{stats.totalProducts}</p>
                    <p className="text-green-400 text-sm">{stats.inStockProducts} in stock</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Package className="w-6 h-6 text-purple-400" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Orders Stats */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Total Orders</p>
                    <p className="text-2xl font-bold text-white">{stats.totalOrders}</p>
                    <p className="text-yellow-400 text-sm">{stats.pendingOrders} pending</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <ShoppingCart className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Revenue Stats */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Delivered Orders</p>
                    <p className="text-2xl font-bold text-white">{stats.deliveredOrders}</p>
                    <p className="text-green-400 text-sm">Completed</p>
                  </div>
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-400" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Inventory Stats */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Inventory Items</p>
                    <p className="text-2xl font-bold text-white">{stats.totalInventoryItems}</p>
                    <p className="text-red-400 text-sm">{stats.lowStockItems} low stock</p>
                  </div>
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <Warehouse className="w-6 h-6 text-orange-400" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Activity Stats */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Recent Activity</p>
                    <p className="text-2xl font-bold text-white">{stats.recentActivity}</p>
                    <p className="text-purple-400 text-sm">Actions logged</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Activity className="w-6 h-6 text-purple-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Quick Actions */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Link href="/admin/products">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                      <Package className="w-4 h-4 mr-2" />
                      Manage Products
                    </Button>
                  </Link>
                  <Link href="/admin/inventory">
                    <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white">
                      <Warehouse className="w-4 h-4 mr-2" />
                      Inventory
                    </Button>
                  </Link>
                  <Link href="/admin/orders">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      View Orders
                    </Button>
                  </Link>
                  <Link href="/admin/products/new">
                    <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                      <Package className="w-4 h-4 mr-2" />
                      Add Product
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Recent Orders */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Recent Orders</CardTitle>
              </CardHeader>
              <CardContent>
                {recentOrders.length === 0 ? (
                  <p className="text-gray-400 text-center py-4">No recent orders</p>
                ) : (
                  <div className="space-y-3">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                        <div>
                          <p className="text-white text-sm font-medium">{order.id}</p>
                          <p className="text-gray-400 text-xs">{order.customerEmail}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className={getStatusColor(order.status)}>
                            {order.status}
                          </Badge>
                          <Link href={`/admin/orders`}>
                            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                              <Eye className="w-4 h-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
} 