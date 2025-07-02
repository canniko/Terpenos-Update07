import { redirect } from 'next/navigation';
import { getAdminSession } from '@/lib/auth';
import { getProductById } from '@/lib/data/products';
import EditProductClient from './edit-product-client';

interface EditProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditProductPage({ params }: EditProductPageProps) {
  const session = await getAdminSession();
  
  if (!session || !session.valid) {
    redirect('/admin/login');
  }

  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    redirect('/admin/products');
  }

  return <EditProductClient adminId={session.adminId} product={product} />;
} 