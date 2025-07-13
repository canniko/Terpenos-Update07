import { redirect } from 'next/navigation';
import { getAdminSession } from '@/lib/auth';
import AddProductClient from './add-product-client';
import { getInventoryItemWithProductStatus } from '@/lib/data/products';

export default async function AddProductPage({ searchParams }: { searchParams: { inventoryId?: string } }) {
  const session = await getAdminSession();
  if (!session || !session.valid) {
    redirect('/admin/login');
  }

  let inventoryItem = null;
  let linkedProductId = null;
  if (searchParams?.inventoryId) {
    inventoryItem = getInventoryItemWithProductStatus(searchParams.inventoryId);
    if (inventoryItem?.productId) {
      // If a product already exists, redirect to edit product page
      redirect(`/admin/products/${inventoryItem.productId}/edit`);
    }
  }

  return <AddProductClient adminId={session.adminId} inventoryItem={inventoryItem} />;
} 