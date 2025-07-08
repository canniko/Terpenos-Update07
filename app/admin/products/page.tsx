import { validateAdminAuth } from '@/lib/auth';
import { getInventoryItemsWithProductStatus } from '@/lib/data/products';
import ProductsClient from './products-client';

export default async function ProductsPage() {
  // Validate admin authentication
  const session = await validateAdminAuth();
  
  // Get inventory data with product status
  const inventoryItems = getInventoryItemsWithProductStatus();

  return (
    <ProductsClient 
      adminId={session.adminId!}
      inventoryItems={inventoryItems}
    />
  );
} 