import { Product } from '@/lib/types';
import ProductGrid from './product-grid';

async function getProductsData() {
  try {
    // Fetch products from API instead of direct import
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/products`, {
      cache: 'no-store'
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    
    const products = await response.json();
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

async function getCategoriesData() {
  try {
    // For now, return a static list of categories
    // You can create a separate API endpoint for categories if needed
    return ['terpenes', 'cannabis-products', 'lab-equipment', 'supplements'];
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export default async function ProductsPage() {
  // Fetch data server-side
  const products = await getProductsData();
  const categories = await getCategoriesData();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our Products
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our premium selection of terpenes, cannabis products, and innovative solutions
          </p>
        </div>

        <ProductGrid initialProducts={products} categories={categories} />
      </div>
    </div>
  );
}
