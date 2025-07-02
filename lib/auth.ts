import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { validateAdminSession } from '@/lib/data/admin';

export async function validateAdminAuth() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get('admin_session')?.value;

  if (!sessionToken) {
    redirect('/admin/login');
  }

  const session = validateAdminSession(sessionToken);
  
  if (!session.valid) {
    // Clear invalid session
    cookieStore.delete('admin_session');
    redirect('/admin/login');
  }

  return session;
}

export async function getAdminSession() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get('admin_session')?.value;

  if (!sessionToken) {
    return null;
  }

  return validateAdminSession(sessionToken);
} 