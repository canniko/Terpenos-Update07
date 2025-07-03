# Product-Inventory Link Implementation Test Guide

## Overview
This document outlines the implementation of the foreign key relationship between products and inventory items, ensuring proper stock synchronization and purchase validation.

## Database Schema Changes

### 1. Products Table Updates
- Added `inventory_item_id TEXT` field to products table
- Added foreign key constraint: `FOREIGN KEY (inventory_item_id) REFERENCES inventory_items(id) ON DELETE SET NULL`

### 2. Inventory Items Table
- Existing `linked_product_id` field provides bidirectional relationship
- Foreign key constraint: `FOREIGN KEY (linked_product_id) REFERENCES products(id) ON DELETE SET NULL`

## Implementation Features

### 1. Type Definitions
- ✅ `Product` type includes `inventory_item_id?: string`
- ✅ `InventoryItem` type includes `linked_product_id?: string`

### 2. Database Functions

#### Products (`lib/data/products.ts`)
- ✅ `createProduct()` - includes `inventory_item_id` in INSERT
- ✅ `updateProduct()` - includes `inventory_item_id` in UPDATE
- ✅ `rowToProduct()` - includes `inventory_item_id` in mapping
- ✅ `isProductPurchaseable()` - validates inventory link and stock
- ✅ `getPurchaseableProducts()` - returns only linked, in-stock products
- ✅ `syncProductStockWithInventory()` - syncs product stock with inventory
- ✅ `decreaseProductStock()` - decreases inventory on purchase

#### Inventory (`lib/data/inventory.ts`)
- ✅ `linkProductToInventory()` - links product to inventory item
- ✅ `unlinkProductFromInventory()` - unlinks product from inventory
- ✅ `getUnlinkedInventoryItems()` - returns items not linked to products
- ✅ `getLinkedInventoryItems()` - returns items linked to products

### 3. Validation Logic
- ✅ Products must be linked to inventory items to be purchaseable
- ✅ Stock validation ensures sufficient inventory before purchase
- ✅ Checkout API validates product purchaseability before creating session

### 4. Sample Data
- ✅ First 3 products linked to existing inventory items:
  - `terpene-blend-1` → `inv-terpene-citrus-001`
  - `terpene-blend-2` → `inv-terpene-relaxation-001`
  - `cannabis-oil-1` → `inv-cannabis-oil-001`
- ✅ Remaining products have `inventory_item_id: null` (not purchaseable)

## Testing Steps

### 1. Database Migration
```bash
# Run migrations to update schema
curl -X POST http://localhost:3000/api/migrations/run
```

### 2. Verify Database Schema
```sql
-- Check products table structure
PRAGMA table_info(products);

-- Check foreign key constraints
PRAGMA foreign_key_list(products);
```

### 3. Test Product-Inventory Linking

#### A. Check Current Product Status
```bash
# Get all products
curl http://localhost:3000/api/products

# Expected: First 3 products should have inventory_item_id set
# Expected: Last 5 products should have inventory_item_id: null
```

#### B. Test Purchase Validation
```bash
# Try to purchase a linked product (should work)
curl -X POST http://localhost:3000/api/create-payment-intent \
  -H "Content-Type: application/json" \
  -d '{
    "items": [{"product": {"id": "terpene-blend-1", "name": "Premium Terpene Blend - Citrus", "price": 29.99, "image": "/images/terpene-skin-care.png", "description": "A carefully crafted blend..."}, "quantity": 1}]
  }'

# Try to purchase an unlinked product (should fail)
curl -X POST http://localhost:3000/api/create-payment-intent \
  -H "Content-Type: application/json" \
  -d '{
    "items": [{"product": {"id": "terpene-blend-3", "name": "Energy & Focus Terpene Blend", "price": 27.99, "image": "/images/terpenos-lab.png", "description": "An invigorating blend..."}, "quantity": 1}]
  }'
```

### 4. Test Inventory Management

#### A. Link Product to Inventory
```bash
# Link a product to an unlinked inventory item
curl -X POST http://localhost:3000/api/inventory/link \
  -H "Content-Type: application/json" \
  -d '{"productId": "terpene-blend-3", "inventoryId": "inv-bottles-001"}'
```

#### B. Unlink Product from Inventory
```bash
# Unlink a product from inventory
curl -X POST http://localhost:3000/api/inventory/unlink \
  -H "Content-Type: application/json" \
  -d '{"productId": "terpene-blend-1"}'
```

### 5. Test Stock Synchronization

#### A. Adjust Inventory Quantity
```bash
# Decrease inventory quantity
curl -X POST http://localhost:3000/api/inventory/inv-terpene-citrus-001/adjust \
  -H "Content-Type: application/json" \
  -d '{"adjustment": -5, "reason": "Test adjustment"}'

# Verify product stock status updated
curl http://localhost:3000/api/products/terpene-blend-1
```

#### B. Test Purchase Stock Decrease
```bash
# Complete a purchase (simulate webhook)
curl -X POST http://localhost:3000/api/webhooks/stripe \
  -H "Content-Type: application/json" \
  -d '{
    "type": "checkout.session.completed",
    "data": {
      "object": {
        "metadata": {
          "items": "[{\"id\":\"terpene-blend-1\",\"quantity\":2}]"
        }
      }
    }
  }'

# Verify inventory decreased
curl http://localhost:3000/api/inventory/inv-terpene-citrus-001
```

### 6. Test Admin Interface

#### A. Access Inventory Management
1. Login to admin dashboard: `http://localhost:3000/admin/login`
2. Navigate to Inventory section
3. Verify linked products show in inventory items
4. Test linking/unlinking products to inventory

#### B. Product Management
1. Navigate to Products section
2. Edit a product and verify inventory link field
3. Test creating new product with inventory link

## Expected Results

### 1. Purchase Validation
- ✅ Linked products with sufficient stock: Purchase allowed
- ✅ Unlinked products: Purchase blocked with error message
- ✅ Linked products with insufficient stock: Purchase blocked

### 2. Stock Synchronization
- ✅ Inventory quantity changes reflect in product stock status
- ✅ Purchase completion decreases inventory quantity
- ✅ Product stock status updates automatically

### 3. Admin Interface
- ✅ Inventory items show linked product information
- ✅ Products show linked inventory information
- ✅ Linking/unlinking functionality works correctly

### 4. Data Integrity
- ✅ Foreign key constraints prevent orphaned references
- ✅ Bidirectional relationship maintained
- ✅ Cascade updates work correctly

## Troubleshooting

### Common Issues

1. **Migration Fails**
   - Check database file permissions
   - Verify SQLite is properly installed
   - Check console for detailed error messages

2. **Products Not Linking**
   - Verify inventory items exist
   - Check foreign key constraints
   - Ensure sample data is properly loaded

3. **Purchase Validation Fails**
   - Verify product has `inventory_item_id` set
   - Check inventory quantity is sufficient
   - Ensure product `inStock` is true

4. **Stock Not Syncing**
   - Verify inventory item exists
   - Check `syncProductStockWithInventory()` function
   - Ensure webhook is properly configured

### Debug Commands

```bash
# Check database schema
sqlite3 orders.db ".schema products"
sqlite3 orders.db ".schema inventory_items"

# Check sample data
sqlite3 orders.db "SELECT id, name, inventory_item_id FROM products;"
sqlite3 orders.db "SELECT id, name, linked_product_id FROM inventory_items;"

# Check foreign keys
sqlite3 orders.db "PRAGMA foreign_key_check;"
```

## Next Steps

1. **Production Deployment**
   - Run migrations on production database
   - Verify all existing products are properly linked
   - Test purchase flow end-to-end

2. **Enhancements**
   - Add inventory alerts for low stock
   - Implement automatic reorder points
   - Add inventory reporting features

3. **Monitoring**
   - Monitor purchase validation logs
   - Track inventory synchronization
   - Alert on failed stock updates 