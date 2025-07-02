import { validateAdminAuth } from '@/lib/auth';
import { getAdminActivityLogs } from '@/lib/data/admin';
import AdminOrdersClient from './admin-orders-client';

export default async function AdminOrdersPage() {
  // Validate admin authentication
  const session = await validateAdminAuth();
  
  // Get recent activity logs for this admin
  const activityLogs = getAdminActivityLogs(10);

  return (
    <AdminOrdersClient 
      adminId={session.adminId!}
      activityLogs={activityLogs}
    />
  );
} 