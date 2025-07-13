import { validateAdminAuth } from '@/lib/auth';
import AddInventoryItemClient from './add-inventory-item-client';

export default async function AddInventoryItemPage() {
  const session = await validateAdminAuth();
  
  return <AddInventoryItemClient adminId={session.adminId!} />;
} 