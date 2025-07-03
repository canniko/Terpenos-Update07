import { Product } from '@/lib/types';
import { getInventoryItemByProductId, adjustInventoryQuantity } from './inventory';

// Server-side only database operations
let db: any = null;
let isInitialized = false;

// Initialize database only on server side
function initializeDatabase() {
  if (typeof window !== 'undefined') {
    // Client-side: return empty functions
    return;
  }

  if (isInitialized) return;

  try {
    const Database = require('better-sqlite3');
    const path = require('path');
    
    const dbPath = path.join(process.cwd(), 'orders.db');
    db = new Database(dbPath);

    // Create products tables
    db.exec(`
    CREATE TABLE IF NOT EXISTS products (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      description TEXT,
      price REAL NOT NULL,
      image TEXT,
      category TEXT,
      inStock BOOLEAN DEFAULT 1,
      rating REAL DEFAULT 0,
      reviews INTEGER DEFAULT 0,
      tags TEXT,
      inventory_item_id TEXT,
      createdAt TEXT,
      updatedAt TEXT,
      FOREIGN KEY (inventory_item_id) REFERENCES inventory_items(id) ON DELETE SET NULL
    );

    CREATE TABLE IF NOT EXISTS product_details (
      productId TEXT PRIMARY KEY,
      weight TEXT,
      volume TEXT,
      ingredients TEXT,
      benefits TEXT,
      FOREIGN KEY (productId) REFERENCES products(id)
    );
    `);

    // Initialize with sample data if table is empty
    const productCount = db.prepare('SELECT COUNT(*) as count FROM products').get() as { count: number };
    if (productCount.count === 0) {
      console.log('Initializing products database with sample data...');
      
      const sampleProducts = [
        {
          id: "terpene-blend-1",
          name: "Premium Terpene Blend - Citrus",
          description: "A carefully crafted blend of citrus terpenes including limonene, linalool, and myrcene. Perfect for enhancing flavor profiles and therapeutic effects.",
          price: 29.99,
          image: "/images/terpene-skin-care.png",
          category: "terpenes",
          inStock: true,
          rating: 4.8,
          reviews: 127,
          tags: JSON.stringify(["citrus", "limonene", "linalool", "myrcene"]),
          inventory_item_id: "inv-terpene-citrus-001",
          details: {
            weight: "10ml",
            ingredients: ["Limonene", "Linalool", "Myrcene", "Pinene", "Terpinolene"],
            benefits: ["Mood enhancement", "Stress relief", "Anti-inflammatory", "Antioxidant"]
          }
        },
        {
          id: "terpene-blend-2",
          name: "Relaxation Terpene Blend",
          description: "A soothing blend designed for relaxation and stress relief, featuring lavender, chamomile, and valerian terpenes.",
          price: 34.99,
          image: "/images/terpene-skin-care.jpeg",
          category: "terpenes",
          inStock: true,
          rating: 4.9,
          reviews: 89,
          tags: JSON.stringify(["relaxation", "lavender", "chamomile", "valerian"]),
          inventory_item_id: "inv-terpene-relaxation-001",
          details: {
            weight: "10ml",
            ingredients: ["Linalool", "Bisabolol", "Valerenic acid", "Caryophyllene"],
            benefits: ["Sleep aid", "Anxiety relief", "Muscle relaxation", "Calming effects"]
          }
        },
        {
          id: "cannabis-oil-1",
          name: "Full-Spectrum Cannabis Oil",
          description: "Premium full-spectrum cannabis oil with naturally occurring cannabinoids and terpenes. Lab-tested for purity and potency.",
          price: 79.99,
          image: "/cannabis-infused-oil.png",
          category: "cannabis",
          inStock: true,
          rating: 4.7,
          reviews: 203,
          tags: JSON.stringify(["full-spectrum", "cannabinoids", "terpenes", "lab-tested"]),
          inventory_item_id: "inv-cannabis-oil-001",
          details: {
            volume: "30ml",
            ingredients: ["Cannabis sativa extract", "MCT oil", "Natural terpenes"],
            benefits: ["Pain relief", "Anti-inflammatory", "Anxiety reduction", "Sleep support"]
          }
        },
        {
          id: "terpene-blend-3",
          name: "Energy & Focus Terpene Blend",
          description: "An invigorating blend of terpenes known for their energizing and focus-enhancing properties.",
          price: 27.99,
          image: "/images/terpenos-lab.png",
          category: "terpenes",
          inStock: true,
          rating: 4.6,
          reviews: 156,
          tags: JSON.stringify(["energy", "focus", "mental clarity", "stimulating"]),
          inventory_item_id: null,
          details: {
            weight: "10ml",
            ingredients: ["Pinene", "Terpinolene", "Ocimene", "Camphene"],
            benefits: ["Mental clarity", "Energy boost", "Focus enhancement", "Memory support"]
          }
        },
        {
          id: "cannabis-oil-2",
          name: "CBD Isolate Oil",
          description: "Pure CBD isolate oil with 99%+ purity. Perfect for those seeking the benefits of CBD without other cannabinoids.",
          price: 59.99,
          image: "/cannabis-infused-oil.jpeg",
          category: "cannabis",
          inStock: true,
          rating: 4.5,
          reviews: 178,
          tags: JSON.stringify(["cbd", "isolate", "pure", "thc-free"]),
          inventory_item_id: null,
          details: {
            volume: "30ml",
            ingredients: ["CBD isolate", "MCT oil"],
            benefits: ["Pain relief", "Anti-anxiety", "Anti-inflammatory", "Sleep support"]
          }
        },
        {
          id: "terpene-blend-4",
          name: "Pain Relief Terpene Blend",
          description: "A therapeutic blend of terpenes specifically formulated for pain relief and anti-inflammatory effects.",
          price: 32.99,
          image: "/images/terpenos-lab-technician.png",
          category: "terpenes",
          inStock: false,
          rating: 4.7,
          reviews: 94,
          tags: JSON.stringify(["pain relief", "anti-inflammatory", "therapeutic", "analgesic"]),
          inventory_item_id: null,
          details: {
            weight: "10ml",
            ingredients: ["Caryophyllene", "Myrcene", "Linalool", "Humulene"],
            benefits: ["Pain relief", "Anti-inflammatory", "Muscle relaxation", "Joint support"]
          }
        },
        {
          id: "smyle-labs-car-key-penjamin",
          name: "Car Key Penjamin Battery",
          description: "Car Key Penjamin by Smyle™ Labs",
          price: 24.99,
          image: "/smyle-car-key.png",
          category: "battery",
          inStock: true,
          rating: 5.0,
          reviews: 228,
          tags: JSON.stringify(["battery", "penjamin", "car", "key"]),
          inventory_item_id: null,
          details: {
            weight: "2kg",
            ingredients: ["Premium materials"],
            benefits: ["Discreet", "Novel", "Smoke", "Battery"]
          }
        },
        {
          id: "smyle-labs-raygun-penjamin",
          name: "Raygun Battery",
          description: "Raygun Penjamin by Smyle™ Labs",
          price: 39.99,
          image: "/smyle-raygun.png",
          category: "battery",
          inStock: true,
          rating: 3.2,
          reviews: 87,
          tags: JSON.stringify(["battery", "penjamin", "raygun", "toy"]),
          inventory_item_id: null,
          details: {
            weight: "2kg",
            ingredients: ["Premium materials"],
            benefits: ["toy", "Novel", "Smoke", "Battery"]
          }
        }
      ];

      const insertProduct = db.prepare(`
        INSERT INTO products (id, name, description, price, image, category, inStock, rating, reviews, tags, inventory_item_id, createdAt, updatedAt)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `);

      const insertProductDetails = db.prepare(`
        INSERT INTO product_details (productId, weight, volume, ingredients, benefits)
        VALUES (?, ?, ?, ?, ?)
      `);

      const transaction = db.transaction(() => {
        for (const product of sampleProducts) {
          const now = new Date().toISOString();
          insertProduct.run(
            product.id,
            product.name,
            product.description,
            product.price,
            product.image,
            product.category,
            product.inStock ? 1 : 0,
            product.rating,
            product.reviews,
            product.tags,
            product.inventory_item_id,
            now,
            now
          );

          insertProductDetails.run(
            product.id,
            product.details.weight || null,
            product.details.volume || null,
            JSON.stringify(product.details.ingredients),
            JSON.stringify(product.details.benefits)
          );
        }
      });

      transaction();
      console.log(`Initialized products database with ${sampleProducts.length} products`);
    }
    
    isInitialized = true;
  } catch (error) {
    console.error('Failed to initialize database:', error);
  }
}

// Helper function to convert database row to Product object
function rowToProduct(row: any, details: any): Product {
  return {
    id: row.id,
    name: row.name,
    description: row.description,
    price: row.price,
    image: row.image,
    category: row.category,
    inStock: Boolean(row.inStock),
    rating: row.rating,
    reviews: row.reviews,
    tags: JSON.parse(row.tags || '[]'),
    details: {
      weight: details?.weight,
      volume: details?.volume,
      ingredients: details?.ingredients ? JSON.parse(details.ingredients) : [],
      benefits: details?.benefits ? JSON.parse(details.benefits) : []
    },
    inventory_item_id: row.inventory_item_id,
    createdAt: row.createdAt,
    updatedAt: row.updatedAt
  };
}

// Get all products
export const getAllProducts = (): Product[] => {
  if (typeof window !== 'undefined') {
    // Client-side: return empty array
    return [];
  }

  initializeDatabase();
  
  if (!db) {
    console.error('Database not initialized');
    return [];
  }

  try {
    const products = db.prepare(`
      SELECT p.*, pd.weight, pd.volume, pd.ingredients, pd.benefits
      FROM products p
      LEFT JOIN product_details pd ON p.id = pd.productId
      ORDER BY p.name
    `).all();

    return products.map((row: any) => rowToProduct(row, row));
  } catch (error) {
    console.error('Error getting all products:', error);
    return [];
  }
};

// Get product by ID
export const getProductById = (id: string): Product | undefined => {
  if (typeof window !== 'undefined') {
    // Client-side: return undefined
    return undefined;
  }

  initializeDatabase();
  
  if (!db) {
    console.error('Database not initialized');
    return undefined;
  }

  try {
    const product = db.prepare(`
      SELECT p.*, pd.weight, pd.volume, pd.ingredients, pd.benefits
      FROM products p
      LEFT JOIN product_details pd ON p.id = pd.productId
      WHERE p.id = ?
    `).get(id);

    if (!product) return undefined;
    return rowToProduct(product, product);
  } catch (error) {
    console.error('Error getting product by ID:', error);
    return undefined;
  }
};

// Get products by category
export const getProductsByCategory = (category: string): Product[] => {
  if (typeof window !== 'undefined') {
    // Client-side: return empty array
    return [];
  }

  initializeDatabase();
  
  if (!db) {
    console.error('Database not initialized');
    return [];
  }

  try {
    const products = db.prepare(`
      SELECT p.*, pd.weight, pd.volume, pd.ingredients, pd.benefits
      FROM products p
      LEFT JOIN product_details pd ON p.id = pd.productId
      WHERE p.category = ?
      ORDER BY p.name
    `).all(category);

    return products.map((row: any) => rowToProduct(row, row));
  } catch (error) {
    console.error('Error getting products by category:', error);
    return [];
  }
};

// Search products
export const searchProducts = (query: string): Product[] => {
  if (typeof window !== 'undefined') {
    // Client-side: return empty array
    return [];
  }

  initializeDatabase();
  
  if (!db) {
    console.error('Database not initialized');
    return [];
  }

  try {
    const lowercaseQuery = `%${query.toLowerCase()}%`;
    const products = db.prepare(`
      SELECT p.*, pd.weight, pd.volume, pd.ingredients, pd.benefits
      FROM products p
      LEFT JOIN product_details pd ON p.id = pd.productId
      WHERE LOWER(p.name) LIKE ? OR LOWER(p.description) LIKE ? OR LOWER(p.tags) LIKE ?
      ORDER BY p.name
    `).all(lowercaseQuery, lowercaseQuery, lowercaseQuery);

    return products.map((row: any) => rowToProduct(row, row));
  } catch (error) {
    console.error('Error searching products:', error);
    return [];
  }
};

// Create new product
export const createProduct = (productData: Omit<Product, 'id' | 'rating' | 'reviews'>): Product => {
  if (typeof window !== 'undefined') {
    throw new Error('Cannot create product on client side');
  }

  initializeDatabase();
  
  if (!db) {
    throw new Error('Database not initialized');
  }

  try {
    const id = `product-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const now = new Date().toISOString();

    const insertProduct = db.prepare(`
      INSERT INTO products (id, name, description, price, image, category, inStock, rating, reviews, tags, inventory_item_id, createdAt, updatedAt)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const insertProductDetails = db.prepare(`
      INSERT INTO product_details (productId, weight, volume, ingredients, benefits)
      VALUES (?, ?, ?, ?, ?)
    `);

    const transaction = db.transaction(() => {
      insertProduct.run(
        id,
        productData.name,
        productData.description,
        productData.price,
        productData.image,
        productData.category,
        productData.inStock ? 1 : 0,
        0, // default rating
        0, // default reviews
        JSON.stringify(productData.tags),
        productData.inventory_item_id || null,
        now,
        now
      );

      insertProductDetails.run(
        id,
        productData.details.weight || null,
        productData.details.volume || null,
        JSON.stringify(productData.details.ingredients),
        JSON.stringify(productData.details.benefits)
      );
    });

    transaction();

    return getProductById(id)!;
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
};

// Update product
export const updateProduct = (id: string, updates: Partial<Product>): Product | undefined => {
  if (typeof window !== 'undefined') {
    throw new Error('Cannot update product on client side');
  }

  initializeDatabase();
  
  if (!db) {
    throw new Error('Database not initialized');
  }

  try {
    const existingProduct = getProductById(id);
    if (!existingProduct) return undefined;

    const now = new Date().toISOString();
    
    const updateProduct = db.prepare(`
      UPDATE products 
      SET name = ?, description = ?, price = ?, image = ?, category = ?, inStock = ?, tags = ?, inventory_item_id = ?, updatedAt = ?
      WHERE id = ?
    `);

    const updateProductDetails = db.prepare(`
      UPDATE product_details 
      SET weight = ?, volume = ?, ingredients = ?, benefits = ?
      WHERE productId = ?
    `);

    const transaction = db.transaction(() => {
      updateProduct.run(
        updates.name || existingProduct.name,
        updates.description || existingProduct.description,
        updates.price || existingProduct.price,
        updates.image || existingProduct.image,
        updates.category || existingProduct.category,
        updates.inStock !== undefined ? (updates.inStock ? 1 : 0) : (existingProduct.inStock ? 1 : 0),
        JSON.stringify(updates.tags || existingProduct.tags),
        updates.inventory_item_id || existingProduct.inventory_item_id || null,
        now,
        id
      );

      updateProductDetails.run(
        updates.details?.weight || existingProduct.details.weight || null,
        updates.details?.volume || existingProduct.details.volume || null,
        JSON.stringify(updates.details?.ingredients || existingProduct.details.ingredients),
        JSON.stringify(updates.details?.benefits || existingProduct.details.benefits),
        id
      );
    });

    transaction();

    return getProductById(id);
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
};

// Delete product
export const deleteProduct = (id: string): boolean => {
  if (typeof window !== 'undefined') {
    throw new Error('Cannot delete product on client side');
  }

  initializeDatabase();
  
  if (!db) {
    throw new Error('Database not initialized');
  }

  try {
    const deleteProductDetails = db.prepare('DELETE FROM product_details WHERE productId = ?');
    const deleteProduct = db.prepare('DELETE FROM products WHERE id = ?');

    const transaction = db.transaction(() => {
      deleteProductDetails.run(id);
      deleteProduct.run(id);
    });

    transaction();
    return true;
  } catch (error) {
    console.error('Error deleting product:', error);
    return false;
  }
};

// Get all categories
export const getCategories = (): string[] => {
  if (typeof window !== 'undefined') {
    // Client-side: return empty array
    return [];
  }

  initializeDatabase();
  
  if (!db) {
    console.error('Database not initialized');
    return [];
  }

  try {
    const categories = db.prepare('SELECT DISTINCT category FROM products WHERE category IS NOT NULL ORDER BY category').all();
    return categories.map((row: any) => row.category);
  } catch (error) {
    console.error('Error getting categories:', error);
    return [];
  }
};

// Sync product stock with inventory
export const syncProductStockWithInventory = (productId: string): Product | undefined => {
  if (typeof window !== 'undefined') {
    throw new Error('Cannot sync stock on client side');
  }

  try {
    const inventoryItem = getInventoryItemByProductId(productId);
    if (!inventoryItem) {
      console.log(`No inventory item linked to product ${productId}`);
      return undefined;
    }

    const product = getProductById(productId);
    if (!product) {
      console.log(`Product ${productId} not found`);
      return undefined;
    }

    // Update product stock based on inventory
    const newInStock = inventoryItem.quantity_in_stock > 0;
    if (product.inStock !== newInStock) {
      console.log(`🔄 Syncing stock for ${product.name}: ${product.inStock} -> ${newInStock} (inventory: ${inventoryItem.quantity_in_stock})`);
      return updateProduct(productId, { inStock: newInStock });
    }

    return product;
  } catch (error) {
    console.error('Error syncing product stock with inventory:', error);
    return undefined;
  }
};

// Decrease product stock (for purchases)
export const decreaseProductStock = (productId: string, quantity: number): boolean => {
  if (typeof window !== 'undefined') {
    throw new Error('Cannot decrease stock on client side');
  }

  try {
    const inventoryItem = getInventoryItemByProductId(productId);
    if (!inventoryItem) {
      console.log(`No inventory item linked to product ${productId}, cannot decrease stock`);
      return false;
    }

    if (inventoryItem.quantity_in_stock < quantity) {
      console.log(`Insufficient stock for product ${productId}: ${inventoryItem.quantity_in_stock} < ${quantity}`);
      return false;
    }

    // Decrease inventory quantity
    const updatedInventory = adjustInventoryQuantity(inventoryItem.id, -quantity, `Online purchase: ${quantity} units`);
    if (!updatedInventory) {
      console.log(`Failed to decrease inventory for product ${productId}`);
      return false;
    }

    // Sync product stock status
    syncProductStockWithInventory(productId);

    console.log(`✅ Decreased stock for product ${productId}: ${quantity} units (new inventory: ${updatedInventory.quantity_in_stock})`);
    return true;
  } catch (error) {
    console.error('Error decreasing product stock:', error);
    return false;
  }
};

// Validate if a product is purchaseable (has inventory link and sufficient stock)
export const isProductPurchaseable = (productId: string, quantity: number = 1): boolean => {
  if (typeof window !== 'undefined') {
    throw new Error('Cannot validate product on client side');
  }

  try {
    const product = getProductById(productId);
    if (!product) {
      console.log(`Product ${productId} not found`);
      return false;
    }

    // Check if product has inventory link
    if (!product.inventory_item_id) {
      console.log(`Product ${productId} is not linked to any inventory item`);
      return false;
    }

    // Check if product is in stock
    if (!product.inStock) {
      console.log(`Product ${productId} is out of stock`);
      return false;
    }

    // Check inventory quantity
    const inventoryItem = getInventoryItemByProductId(productId);
    if (!inventoryItem) {
      console.log(`No inventory item found for product ${productId}`);
      return false;
    }

    if (inventoryItem.quantity_in_stock < quantity) {
      console.log(`Insufficient inventory for product ${productId}: ${inventoryItem.quantity_in_stock} < ${quantity}`);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error validating product purchaseability:', error);
    return false;
  }
};

// Get products that are ready for purchase (linked to inventory and in stock)
export const getPurchaseableProducts = (): Product[] => {
  if (typeof window !== 'undefined') {
    return [];
  }

  try {
    const allProducts = getAllProducts();
    return allProducts.filter(product => 
      product.inventory_item_id && 
      product.inStock && 
      isProductPurchaseable(product.id, 1)
    );
  } catch (error) {
    console.error('Error getting purchaseable products:', error);
    return [];
  }
};

// Legacy export for backward compatibility (client-side safe)
export const products = getAllProducts(); 