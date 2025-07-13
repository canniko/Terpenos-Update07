import { validateAdminAuth } from '@/lib/auth';
import { getInventoryItemsWithProductStatus } from '@/lib/data/products';
import { notFound } from 'next/navigation';
import EditInventoryItemClient from './edit-inventory-item-client';

interface EditInventoryItemPageProps {
  params: {
    id: string;
  };
}

export default async function EditInventoryItemPage({ params }: EditInventoryItemPageProps) {
  const session = await validateAdminAuth();
  
  // Get all inventory items with product status and find the specific one
  const inventoryItems = getInventoryItemsWithProductStatus();
  const inventoryItem = inventoryItems.find(item => item.item_id === params.id);
  
  if (!inventoryItem) {
    notFound();
  }
  
  return <EditInventoryItemClient adminId={session.adminId!} inventoryItem={inventoryItem} />;
} 