import { getAllProducts, getCategories } from '@/lib/data/products';
import { Product } from '@/lib/types';
import ProductGrid from './product-grid';

export default async function ProductsPage() {
  // Fetch data server-side
  const products = getAllProducts();
  const categories = getCategories();

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
