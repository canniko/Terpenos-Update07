import { validateAdminAuth } from '@/lib/auth';
import { getAllInventoryItems, getInventoryStats } from '@/lib/data/inventory';
import InventoryClient from './inventory-client';

export default async function InventoryPage() {
  // Validate admin authentication
  const session = await validateAdminAuth();
  
  // Get inventory data
  const inventoryItems = getAllInventoryItems();
  const stats = getInventoryStats();

  return (
    <InventoryClient 
      adminId={session.adminId!}
      inventoryItems={inventoryItems}
      stats={stats}
    />
  );
} 