import { redirect } from 'next/navigation';
import { getAdminSession } from '@/lib/auth';
import AddProductClient from './add-product-client';

export default async function AddProductPage() {
  const session = await getAdminSession();
  
  if (!session || !session.valid) {
    redirect('/admin/login');
  }

  return <AddProductClient adminId={session.adminId} />;
} 