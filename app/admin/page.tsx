import { validateAdminAuth } from '@/lib/auth';
import AdminDashboardClient from './admin-dashboard-client';

async function getDashboardData() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    
    // Fetch data from API endpoints
    const [productsResponse, ordersResponse, activityResponse, inventoryResponse] = await Promise.all([
      fetch(`${baseUrl}/api/products`, { cache: 'no-store' }),
      fetch(`${baseUrl}/api/admin/orders`, { cache: 'no-store' }),
      fetch(`${baseUrl}/api/admin/activity`, { cache: 'no-store' }),
      fetch(`${baseUrl}/api/inventory`, { cache: 'no-store' })
    ]);

    const products = productsResponse.ok ? await productsResponse.json() : [];
    const orders = ordersResponse.ok ? await ordersResponse.json() : [];
    const activityLogs = activityResponse.ok ? await activityResponse.json() : [];
    const inventoryStats = inventoryResponse.ok ? await inventoryResponse.json() : { totalItems: 0, lowStockCount: 0 };

    return { products, orders, activityLogs, inventoryStats };
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    return { products: [], orders: [], activityLogs: [], inventoryStats: { totalItems: 0, lowStockCount: 0 } };
  }
}

export default async function AdminDashboardPage() {
  // Validate admin authentication
  const session = await validateAdminAuth();
  
  // Get data for dashboard
  const { products, orders, activityLogs, inventoryStats } = await getDashboardData();

  // Calculate stats
  const stats = {
    totalProducts: products.length,
    inStockProducts: products.filter((p: any) => p.inStock).length,
    totalOrders: orders.length,
    pendingOrders: orders.filter((o: any) => o.status === 'pending').length,
    deliveredOrders: orders.filter((o: any) => o.status === 'delivered').length,
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