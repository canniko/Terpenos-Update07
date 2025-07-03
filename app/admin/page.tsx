import { validateAdminAuth } from '@/lib/auth';
import { getAdminActivityLogs } from '@/lib/data/admin';
import { getAllProducts } from '@/lib/data/products';
import { getAllOrders } from '@/lib/data/orders';
import { getInventoryStats } from '@/lib/data/inventory';
import AdminDashboardClient from './admin-dashboard-client';

export default async function AdminDashboardPage() {
  // Validate admin authentication
  const session = await validateAdminAuth();
  
  // Get data for dashboard
  const activityLogs = getAdminActivityLogs(20);
  const products = getAllProducts();
  const orders = getAllOrders();
  const inventoryStats = getInventoryStats();

  // Calculate stats
  const stats = {
    totalProducts: products.length,
    inStockProducts: products.filter(p => p.inStock).length,
    totalOrders: orders.length,
    pendingOrders: orders.filter(o => o.status === 'pending').length,
    deliveredOrders: orders.filter(o => o.status === 'delivered').length,
    recentActivity: activityLogs.length,
    totalInventoryItems: inventoryStats.totalItems,
    lowStockItems: inventoryStats.lowStockCount,
  };

  return (
    <AdminDashboardClient 
      adminId={session.adminId!}
      stats={stats}
      activityLogs={activityLogs}
      recentOrders={orders.slice(0, 5)}
    />
  );
} 