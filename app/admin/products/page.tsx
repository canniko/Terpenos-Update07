import { validateAdminAuth } from '@/lib/auth';
import { getAdminActivityLogs } from '@/lib/data/admin';
import AdminProductsClient from './admin-products-client';

export default async function AdminProductsPage() {
  // Validate admin authentication
  const session = await validateAdminAuth();
  
  // Get recent activity logs for this admin
  const activityLogs = getAdminActivityLogs(10);

  return (
    <AdminProductsClient 
      adminId={session.adminId!}
      activityLogs={activityLogs}
    />
  );
} 