import { InventoryItem } from '@/lib/types';

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

    // Create inventory table
    db.exec(`
    CREATE TABLE IF NOT EXISTS inventory_items (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      description TEXT,
      quantity_in_stock INTEGER DEFAULT 0,
      location TEXT,
      is_listed_as_product BOOLEAN DEFAULT 0,
      linked_product_id TEXT,
      created_at TEXT,
      updated_at TEXT,
      FOREIGN KEY (linked_product_id) REFERENCES products(id) ON DELETE SET NULL
    );
    `);

    // Initialize with sample data if table is empty
    const inventoryCount = db.prepare('SELECT COUNT(*) as count FROM inventory_items').get() as { count: number };
    if (inventoryCount.count === 0) {
      console.log('Initializing inventory database with sample data...');
      
      const sampleInventory = [
        {
          id: "inv-terpene-citrus-001",
          name: "Citrus Terpene Blend - Bulk",
          description: "Bulk supply of citrus terpene blend for product manufacturing",
          quantity_in_stock: 50,
          location: "Warehouse A - Shelf 3",
          is_listed_as_product: true,
          linked_product_id: "terpene-blend-1",
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        },
        {
          id: "inv-cannabis-oil-001",
          name: "Full-Spectrum Cannabis Oil - Bulk",
          description: "Bulk supply of full-spectrum cannabis oil",
          quantity_in_stock: 25,
          location: "Warehouse B - Refrigerated",
          is_listed_as_product: true,
          linked_product_id: "cannabis-oil-1",
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        },
        {
          id: "inv-bottles-001",
          name: "10ml Glass Bottles",
          description: "Empty 10ml glass bottles for product packaging",
          quantity_in_stock: 200,
          location: "Warehouse A - Packaging",
          is_listed_as_product: false,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        },
        {
          id: "inv-labels-001",
          name: "Product Labels",
          description: "Custom product labels for packaging",
          quantity_in_stock: 500,
          location: "Warehouse A - Packaging",
          is_listed_as_product: false,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        },
        {
          id: "inv-terpene-relaxation-001",
          name: "Relaxation Terpene Blend - Bulk",
          description: "Bulk supply of relaxation terpene blend",
          quantity_in_stock: 30,
          location: "Warehouse A - Shelf 4",
          is_listed_as_product: true,
          linked_product_id: "terpene-blend-2",
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }
      ];

      const insertInventory = db.prepare(`
        INSERT INTO inventory_items (id, name, description, quantity_in_stock, location, is_listed_as_product, linked_product_id, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `);

      for (const item of sampleInventory) {
        insertInventory.run(
          item.id,
          item.name,
          item.description,
          item.quantity_in_stock,
          item.location,
          item.is_listed_as_product ? 1 : 0,
          item.linked_product_id,
          item.created_at,
          item.updated_at
        );
      }

      console.log('Initialized inventory database with', sampleInventory.length, 'items');
    }

    isInitialized = true;
  } catch (error) {
    console.error('Error initializing inventory database:', error);
  }
}

function rowToInventoryItem(row: any): InventoryItem {
  return {
    id: row.id,
    name: row.name,
    description: row.description,
    quantity_in_stock: row.quantity_in_stock,
    location: row.location,
    is_listed_as_product: Boolean(row.is_listed_as_product),
    linked_product_id: row.linked_product_id,
    created_at: row.created_at,
    updated_at: row.updated_at
  };
}

export const getAllInventoryItems = (): InventoryItem[] => {
  initializeDatabase();
  
  if (!db) return [];

  try {
    const stmt = db.prepare(`
      SELECT * FROM inventory_items 
      ORDER BY created_at DESC
    `);
    
    const rows = stmt.all();
    return rows.map(rowToInventoryItem);
  } catch (error) {
    console.error('Error fetching inventory items:', error);
    return [];
  }
};

export const getInventoryItemById = (id: string): InventoryItem | undefined => {
  initializeDatabase();
  
  if (!db) return undefined;

  try {
    const stmt = db.prepare('SELECT * FROM inventory_items WHERE id = ?');
    const row = stmt.get(id);
    
    return row ? rowToInventoryItem(row) : undefined;
  } catch (error) {
    console.error('Error fetching inventory item:', error);
    return undefined;
  }
};

export const getInventoryItemByProductId = (productId: string): InventoryItem | undefined => {
  initializeDatabase();
  
  if (!db) return undefined;

  try {
    const stmt = db.prepare('SELECT * FROM inventory_items WHERE linked_product_id = ?');
    const row = stmt.get(productId);
    
    return row ? rowToInventoryItem(row) : undefined;
  } catch (error) {
    console.error('Error fetching inventory item by product ID:', error);
    return undefined;
  }
};

export const createInventoryItem = (itemData: Omit<InventoryItem, 'id' | 'created_at' | 'updated_at'>): InventoryItem => {
  initializeDatabase();
  
  if (!db) throw new Error('Database not initialized');

  try {
    const id = `inv-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const now = new Date().toISOString();

    const stmt = db.prepare(`
      INSERT INTO inventory_items (id, name, description, quantity_in_stock, location, is_listed_as_product, linked_product_id, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    stmt.run(
      id,
      itemData.name,
      itemData.description,
      itemData.quantity_in_stock,
      itemData.location,
      itemData.is_listed_as_product ? 1 : 0,
      itemData.linked_product_id,
      now,
      now
    );

    return {
      ...itemData,
      id,
      created_at: now,
      updated_at: now
    };
  } catch (error) {
    console.error('Error creating inventory item:', error);
    throw error;
  }
};

export const updateInventoryItem = (id: string, updates: Partial<InventoryItem>): InventoryItem | undefined => {
  initializeDatabase();
  
  if (!db) return undefined;

  try {
    const existingItem = getInventoryItemById(id);
    if (!existingItem) return undefined;

    const updatedItem = { ...existingItem, ...updates, updated_at: new Date().toISOString() };

    const stmt = db.prepare(`
      UPDATE inventory_items 
      SET name = ?, description = ?, quantity_in_stock = ?, location = ?, 
          is_listed_as_product = ?, linked_product_id = ?, updated_at = ?
      WHERE id = ?
    `);

    stmt.run(
      updatedItem.name,
      updatedItem.description,
      updatedItem.quantity_in_stock,
      updatedItem.location,
      updatedItem.is_listed_as_product ? 1 : 0,
      updatedItem.linked_product_id,
      updatedItem.updated_at,
      id
    );

    return updatedItem;
  } catch (error) {
    console.error('Error updating inventory item:', error);
    return undefined;
  }
};

export const deleteInventoryItem = (id: string): boolean => {
  initializeDatabase();
  
  if (!db) return false;

  try {
    const stmt = db.prepare('DELETE FROM inventory_items WHERE id = ?');
    const result = stmt.run(id);
    return result.changes > 0;
  } catch (error) {
    console.error('Error deleting inventory item:', error);
    return false;
  }
};

export const adjustInventoryQuantity = (id: string, adjustment: number, reason: string = 'Manual adjustment'): InventoryItem | undefined => {
  initializeDatabase();
  
  if (!db) return undefined;

  try {
    const existingItem = getInventoryItemById(id);
    if (!existingItem) return undefined;

    const newQuantity = Math.max(0, existingItem.quantity_in_stock + adjustment);
    
    const updatedItem = updateInventoryItem(id, { 
      quantity_in_stock: newQuantity 
    });

    // Log the adjustment
    console.log(`📦 Inventory adjustment: ${existingItem.name} ${adjustment > 0 ? '+' : ''}${adjustment} (${reason})`);

    return updatedItem;
  } catch (error) {
    console.error('Error adjusting inventory quantity:', error);
    return undefined;
  }
};

export const linkInventoryToProduct = (inventoryId: string, productId: string): InventoryItem | undefined => {
  initializeDatabase();
  
  if (!db) return undefined;

  try {
    return updateInventoryItem(inventoryId, {
      linked_product_id: productId,
      is_listed_as_product: true
    });
  } catch (error) {
    console.error('Error linking inventory to product:', error);
    return undefined;
  }
};

export const unlinkInventoryFromProduct = (inventoryId: string): InventoryItem | undefined => {
  initializeDatabase();
  
  if (!db) return undefined;

  try {
    return updateInventoryItem(inventoryId, {
      linked_product_id: undefined,
      is_listed_as_product: false
    });
  } catch (error) {
    console.error('Error unlinking inventory from product:', error);
    return undefined;
  }
};

export const getLowStockItems = (threshold: number = 10): InventoryItem[] => {
  initializeDatabase();
  
  if (!db) return [];

  try {
    const stmt = db.prepare(`
      SELECT * FROM inventory_items 
      WHERE quantity_in_stock <= ? 
      ORDER BY quantity_in_stock ASC
    `);
    
    const rows = stmt.all(threshold);
    return rows.map(rowToInventoryItem);
  } catch (error) {
    console.error('Error fetching low stock items:', error);
    return [];
  }
};

export const getInventoryStats = () => {
  initializeDatabase();
  
  if (!db) return { totalItems: 0, totalValue: 0, lowStockCount: 0 };

  try {
    const totalItems = db.prepare('SELECT COUNT(*) as count FROM inventory_items').get() as { count: number };
    const lowStockCount = db.prepare('SELECT COUNT(*) as count FROM inventory_items WHERE quantity_in_stock <= 10').get() as { count: number };
    
    return {
      totalItems: totalItems.count,
      lowStockCount: lowStockCount.count
    };
  } catch (error) {
    console.error('Error fetching inventory stats:', error);
    return { totalItems: 0, lowStockCount: 0 };
  }
};

// Link a product to an inventory item
export const linkProductToInventory = (productId: string, inventoryId: string): boolean => {
  initializeDatabase();
  
  if (!db) return false;

  try {
    // Check if inventory item exists
    const inventoryItem = getInventoryItemById(inventoryId);
    if (!inventoryItem) {
      console.log(`Inventory item ${inventoryId} not found`);
      return false;
    }

    // Import the updateProduct function from products
    const { updateProduct } = require('./products');
    
    // Update the product with the inventory item ID
    const updatedProduct = updateProduct(productId, { inventory_item_id: inventoryId });
    
    if (updatedProduct) {
      console.log(`✅ Linked product ${productId} to inventory item ${inventoryId}`);
      return true;
    } else {
      console.log(`Failed to link product ${productId} to inventory item ${inventoryId}`);
      return false;
    }
  } catch (error) {
    console.error('Error linking product to inventory:', error);
    return false;
  }
};

// Unlink a product from its inventory item
export const unlinkProductFromInventory = (productId: string): boolean => {
  initializeDatabase();
  
  if (!db) return false;

  try {
    // Import the updateProduct function from products
    const { updateProduct } = require('./products');
    
    // Update the product to remove the inventory item ID
    const updatedProduct = updateProduct(productId, { inventory_item_id: null });
    
    if (updatedProduct) {
      console.log(`✅ Unlinked product ${productId} from inventory`);
      return true;
    } else {
      console.log(`Failed to unlink product ${productId} from inventory`);
      return false;
    }
  } catch (error) {
    console.error('Error unlinking product from inventory:', error);
    return false;
  }
};

// Get inventory items that are not linked to any product
export const getUnlinkedInventoryItems = (): InventoryItem[] => {
  initializeDatabase();
  
  if (!db) return [];

  try {
    const stmt = db.prepare(`
      SELECT * FROM inventory_items 
      WHERE linked_product_id IS NULL
      ORDER BY created_at DESC
    `);
    
    const rows = stmt.all();
    return rows.map(rowToInventoryItem);
  } catch (error) {
    console.error('Error fetching unlinked inventory items:', error);
    return [];
  }
};

// Get inventory items that are linked to products
export const getLinkedInventoryItems = (): InventoryItem[] => {
  initializeDatabase();
  
  if (!db) return [];

  try {
    const stmt = db.prepare(`
      SELECT * FROM inventory_items 
      WHERE linked_product_id IS NOT NULL
      ORDER BY created_at DESC
    `);
    
    const rows = stmt.all();
    return rows.map(rowToInventoryItem);
  } catch (error) {
    console.error('Error fetching linked inventory items:', error);
    return [];
  }
}; 