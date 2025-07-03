import { Product, InventoryItem } from '@/lib/types';

// Server-side only database operations
let db: any = null;

// Initialize database only on server side
function initializeDatabase() {
  if (typeof window !== 'undefined') {
    // Client-side: return empty functions
    return;
  }

  try {
    const Database = require('better-sqlite3');
    const path = require('path');
    
    const dbPath = path.join(process.cwd(), 'orders.db');
    db = new Database(dbPath);
  } catch (error) {
    console.error('Error initializing database for migration:', error);
  }
}

// Migration to add inventory_item_id field to products table
export const migrateAddInventoryItemId = (): boolean => {
  initializeDatabase();
  
  if (!db) return false;

  try {
    console.log('🔄 Starting migration: Add inventory_item_id to products table...');

    // Check if the column already exists
    const tableInfo = db.prepare("PRAGMA table_info(products)").all();
    const hasInventoryItemId = tableInfo.some((col: any) => col.name === 'inventory_item_id');

    if (!hasInventoryItemId) {
      // Add the inventory_item_id column
      db.prepare('ALTER TABLE products ADD COLUMN inventory_item_id TEXT').run();
      
      // Add foreign key constraint
      db.prepare(`
        CREATE TABLE IF NOT EXISTS products_new (
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
        )
      `).run();

      // Copy data to new table
      db.prepare(`
        INSERT INTO products_new 
        SELECT id, name, description, price, image, category, inStock, rating, reviews, tags, inventory_item_id, createdAt, updatedAt 
        FROM products
      `).run();

      // Drop old table and rename new table
      db.prepare('DROP TABLE products').run();
      db.prepare('ALTER TABLE products_new RENAME TO products').run();

      console.log('✅ Successfully added inventory_item_id column to products table');
    } else {
      console.log('ℹ️ inventory_item_id column already exists in products table');
    }

    return true;
  } catch (error) {
    console.error('❌ Error during migration:', error);
    return false;
  }
};

// Migration to link existing products to inventory items
export const migrateLinkProductsToInventory = (): boolean => {
  initializeDatabase();
  
  if (!db) return false;

  try {
    console.log('🔄 Starting migration: Link products to inventory items...');

    // Get all products that don't have inventory_item_id set
    const unlinkedProducts = db.prepare(`
      SELECT p.* FROM products p 
      WHERE p.inventory_item_id IS NULL
    `).all();

    // Get all inventory items that are marked as listed as products
    const availableInventory = db.prepare(`
      SELECT * FROM inventory_items 
      WHERE is_listed_as_product = 1 AND linked_product_id IS NULL
    `).all();

    console.log(`Found ${unlinkedProducts.length} unlinked products and ${availableInventory.length} available inventory items`);

    let linkedCount = 0;

    // Link products to available inventory items
    for (const product of unlinkedProducts) {
      // Find a matching inventory item by name similarity
      const matchingInventory = availableInventory.find((inv: InventoryItem) => {
        const productName = product.name.toLowerCase();
        const inventoryName = inv.name.toLowerCase();
        
        // Check if names are similar (basic matching)
        return productName.includes(inventoryName.split(' ')[0]) || 
               inventoryName.includes(productName.split(' ')[0]);
      });

      if (matchingInventory) {
        // Update product with inventory_item_id
        db.prepare(`
          UPDATE products 
          SET inventory_item_id = ? 
          WHERE id = ?
        `).run(matchingInventory.id, product.id);

        // Update inventory item with linked_product_id
        db.prepare(`
          UPDATE inventory_items 
          SET linked_product_id = ? 
          WHERE id = ?
        `).run(product.id, matchingInventory.id);

        console.log(`✅ Linked product "${product.name}" to inventory "${matchingInventory.name}"`);
        linkedCount++;

        // Remove from available inventory to avoid double-linking
        availableInventory.splice(availableInventory.indexOf(matchingInventory), 1);
      }
    }

    console.log(`✅ Migration completed: Linked ${linkedCount} products to inventory items`);
    return true;
  } catch (error) {
    console.error('❌ Error during migration:', error);
    return false;
  }
};

// Run all migrations
export const runMigrations = (): boolean => {
  console.log('🚀 Starting database migrations...');
  
  const migration1 = migrateAddInventoryItemId();
  const migration2 = migrateLinkProductsToInventory();
  
  if (migration1 && migration2) {
    console.log('✅ All migrations completed successfully');
    return true;
  } else {
    console.log('❌ Some migrations failed');
    return false;
  }
};

// Export for manual execution
export default runMigrations; 