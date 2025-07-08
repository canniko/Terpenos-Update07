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

    // Create inventory_items table
    db.prepare(`
      CREATE TABLE IF NOT EXISTS inventory_items (
        item_id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        category TEXT NOT NULL,
        description TEXT,
        quantity_in_stock INTEGER NOT NULL DEFAULT 0,
        location TEXT,
        unit_cost REAL,
        vendor TEXT,
        tags TEXT,
        is_listed_as_product INTEGER DEFAULT 0,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL
      )
    `).run();

    // Check if we have any data
    const count = db.prepare('SELECT COUNT(*) as count FROM inventory_items').get() as { count: number };
    
    if (count.count === 0) {
      console.log('📦 Initializing inventory database with sample data...');
      
      const sampleInventory: InventoryItem[] = [
        {
          item_id: 'inv-terpene-relaxation-001',
          name: 'Terpene Relaxation Blend',
          category: 'Terpenes',
          description: 'A calming blend of terpenes for relaxation and stress relief',
          quantity_in_stock: 50,
          location: 'Warehouse A',
          unit_cost: 15.99,
          vendor: 'Terpene Labs',
          tags: ['relaxation', 'stress-relief', 'natural'],
          is_listed_as_product: true,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        },
        {
          item_id: 'inv-terpene-energy-002',
          name: 'Terpene Energy Blend',
          category: 'Terpenes',
          description: 'An energizing blend of terpenes for focus and vitality',
          quantity_in_stock: 30,
          location: 'Warehouse B',
          unit_cost: 18.99,
          vendor: 'Terpene Labs',
          tags: ['energy', 'focus', 'vitality'],
          is_listed_as_product: false,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }
      ];

      const insertInventory = db.prepare(`
        INSERT INTO inventory_items (item_id, name, category, description, quantity_in_stock, location, unit_cost, vendor, tags, is_listed_as_product, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `);

      for (const item of sampleInventory) {
        insertInventory.run(
          item.item_id,
          item.name,
          item.category,
          item.description,
          item.quantity_in_stock,
          item.location,
          item.unit_cost,
          item.vendor,
          item.tags ? JSON.stringify(item.tags) : null,
          item.is_listed_as_product ? 1 : 0,
          item.created_at,
          item.updated_at
        );
      }

      console.log('✅ Initialized inventory database with sample data');
    }

    isInitialized = true;
  } catch (error) {
    console.error('❌ Error initializing inventory database:', error);
  }
}

function rowToInventoryItem(row: any): InventoryItem {
  return {
    item_id: row.item_id,
    name: row.name,
    category: row.category || 'General',
    description: row.description,
    quantity_in_stock: row.quantity_in_stock,
    location: row.location || undefined,
    unit_cost: row.unit_cost || undefined,
    vendor: row.vendor || undefined,
    tags: row.tags ? JSON.parse(row.tags) : undefined,
    is_listed_as_product: Boolean(row.is_listed_as_product),
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
    const stmt = db.prepare('SELECT * FROM inventory_items WHERE item_id = ?');
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
    const stmt = db.prepare('SELECT * FROM inventory_items WHERE item_id = ?');
    const row = stmt.get(productId);
    
    return row ? rowToInventoryItem(row) : undefined;
  } catch (error) {
    console.error('Error fetching inventory item by product ID:', error);
    return undefined;
  }
};

export const createInventoryItem = (itemData: Omit<InventoryItem, 'created_at' | 'updated_at'>): InventoryItem => {
  initializeDatabase();
  
  if (!db) throw new Error('Database not initialized');

  try {
    // Use provided item_id or generate one
    const itemId = itemData.item_id && itemData.item_id.trim() ? itemData.item_id.trim() : `inv-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const now = new Date().toISOString();

    const stmt = db.prepare(`
      INSERT INTO inventory_items (item_id, name, category, description, quantity_in_stock, location, unit_cost, vendor, tags, is_listed_as_product, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    stmt.run(
      itemId,
      itemData.name,
      itemData.category,
      itemData.description,
      itemData.quantity_in_stock,
      itemData.location,
      itemData.unit_cost,
      itemData.vendor,
      itemData.tags ? JSON.stringify(itemData.tags) : null,
      itemData.is_listed_as_product ? 1 : 0,
      now,
      now
    );

    return {
      ...itemData,
      item_id: itemId,
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
      SET name = ?, category = ?, description = ?, quantity_in_stock = ?, location = ?, unit_cost = ?, vendor = ?, tags = ?, is_listed_as_product = ?, updated_at = ?
      WHERE item_id = ?
    `);

    stmt.run(
      updatedItem.name,
      updatedItem.category,
      updatedItem.description,
      updatedItem.quantity_in_stock,
      updatedItem.location,
      updatedItem.unit_cost,
      updatedItem.vendor,
      updatedItem.tags ? JSON.stringify(updatedItem.tags) : null,
      updatedItem.is_listed_as_product ? 1 : 0,
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
    // Import product helpers
    const { getProductByInventoryItemId, deleteProduct } = require('./products');
    // If a product is linked, delete it first
    const linkedProduct = getProductByInventoryItemId(id);
    if (linkedProduct) {
      deleteProduct(linkedProduct.item_id);
    }
    const stmt = db.prepare('DELETE FROM inventory_items WHERE item_id = ?');
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
      item_id: productId,
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
      item_id: undefined,
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
      WHERE item_id IS NULL
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
      WHERE item_id IS NOT NULL
      ORDER BY created_at DESC
    `);
    
    const rows = stmt.all();
    return rows.map(rowToInventoryItem);
  } catch (error) {
    console.error('Error fetching linked inventory items:', error);
    return [];
  }
}; 