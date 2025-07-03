# Inventory Management System Test Guide

## Overview
The Inventory Management System has been successfully implemented with the following features:

### Database Schema
- **inventory_items** table with fields:
  - id (TEXT PRIMARY KEY)
  - name (TEXT NOT NULL)
  - description (TEXT)
  - quantity_in_stock (INTEGER DEFAULT 0)
  - location (TEXT, optional)
  - is_listed_as_product (BOOLEAN DEFAULT 0)
  - linked_product_id (TEXT, nullable FK to products table)
  - created_at (TEXT)
  - updated_at (TEXT)

### Core Features Implemented

#### 1. Inventory Management Interface
- **Location**: `/admin/inventory`
- **Features**:
  - View all inventory items with search and filtering
  - Add new inventory items
  - Edit existing items
  - Delete items
  - Manual quantity adjustments (+/- buttons)
  - Link/unlink items to products
  - Low stock indicators (≤10 units)

#### 2. Product Integration
- **Automatic Stock Sync**: When inventory items are linked to products, product stock status automatically syncs
- **Purchase Integration**: When customers purchase products, inventory automatically decreases
- **Stock Validation**: Products with 0 inventory are marked as out of stock

#### 3. API Endpoints
- `GET /api/inventory` - List all inventory items with stats
- `POST /api/inventory` - Create new inventory item
- `GET /api/inventory/[id]` - Get specific inventory item
- `PUT /api/inventory/[id]` - Update inventory item
- `DELETE /api/inventory/[id]` - Delete inventory item
- `POST /api/inventory/[id]/adjust` - Adjust quantity with reason
- `POST /api/inventory/[id]/link` - Link to product
- `DELETE /api/inventory/[id]/link` - Unlink from product

#### 4. Dashboard Integration
- **Admin Dashboard**: Added inventory stats card showing total items and low stock count
- **Quick Actions**: Added "Inventory" button in admin dashboard
- **Navigation**: Inventory management accessible from admin menu

## Testing Steps

### 1. Access Inventory Management
1. Go to `/admin/login`
2. Login with admin credentials (admin / admin123)
3. Click "Inventory" button in Quick Actions or navigate to `/admin/inventory`

### 2. Test Basic CRUD Operations
1. **Create Item**: Click "Add Item" and create a new inventory item
2. **Edit Item**: Click edit button on any item and modify details
3. **Delete Item**: Click delete button (with confirmation)
4. **Search/Filter**: Use search bar and filter dropdown

### 3. Test Quantity Adjustments
1. Use +/- buttons to adjust quantities
2. Verify quantities update in real-time
3. Check that quantities cannot go below 0

### 4. Test Product Linking
1. **Link to Product**: Click link button and enter a product ID
2. **Verify Sync**: Check that product stock status updates
3. **Unlink**: Click unlink button to remove connection

### 5. Test Purchase Integration
1. **Make Purchase**: Go to products page and purchase a linked product
2. **Check Inventory**: Verify inventory decreases automatically
3. **Check Product Status**: Verify product goes out of stock when inventory reaches 0

### 6. Test Edge Cases
1. **Insufficient Stock**: Try to purchase more than available inventory
2. **Manual Adjustments**: Use quantity adjustment for in-person sales
3. **Bulk Materials**: Create inventory items not linked to products

## Sample Data
The system comes with sample inventory data:
- Citrus Terpene Blend - Bulk (50 units, linked to terpene-blend-1)
- Full-Spectrum Cannabis Oil - Bulk (25 units, linked to cannabis-oil-1)
- 10ml Glass Bottles (200 units, not linked)
- Product Labels (500 units, not linked)
- Relaxation Terpene Blend - Bulk (30 units, linked to terpene-blend-2)

## Expected Behavior

### Inventory ↔ Product Sync
- ✅ When inventory quantity > 0 → Product inStock = true
- ✅ When inventory quantity = 0 → Product inStock = false
- ✅ When product purchased → Inventory quantity decreases
- ✅ When inventory unlinked → Product keeps last known stock status

### Manual Adjustments
- ✅ Admin can manually add/subtract inventory for in-person sales
- ✅ All adjustments are logged with reasons
- ✅ Quantities cannot go below 0

### Low Stock Alerts
- ✅ Items with ≤10 units show "Low Stock" badge
- ✅ Dashboard shows count of low stock items
- ✅ Filter option to show only low stock items

## Troubleshooting

### Common Issues
1. **Database not initialized**: Run `npm run dev` to trigger database creation
2. **Import errors**: Ensure all files are properly saved
3. **Permission errors**: Make sure you're logged in as admin

### Logs to Monitor
- Inventory adjustments: `📦 Inventory adjustment: [item] +/-[quantity] ([reason])`
- Stock sync: `🔄 Syncing stock for [product]: [old] -> [new] (inventory: [quantity])`
- Purchase processing: `📦 Inventory updates: [list of updates]`

## Next Steps
The inventory system is fully functional and ready for production use. Consider adding:
- Email notifications for low stock
- Bulk import/export functionality
- Advanced reporting and analytics
- Barcode scanning integration
- Supplier management 