import { validateAdminAuth } from '@/lib/auth';
import { getInventoryStats } from '@/lib/data/inventory';
import { getInventoryItemsWithProductStatus } from '@/lib/data/products';
import InventoryClient from './inventory-client';

export default async function InventoryPage() {
  // Validate admin authentication
  const session = await validateAdminAuth();
  
  // Get inventory data with product status
  const inventoryItems = getInventoryItemsWithProductStatus();
  const stats = getInventoryStats();

  return (
    <InventoryClient 
      adminId={session.adminId!}
      inventoryItems={inventoryItems}
      stats={stats}
    />
  );
} 