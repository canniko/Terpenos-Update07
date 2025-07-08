import { NextRequest, NextResponse } from 'next/server';
import { getAllInventoryItems } from '@/lib/data/inventory';
import { validateAdminAuth } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    // Validate admin authentication
    const session = await validateAdminAuth();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get all inventory items
    const inventoryItems = getAllInventoryItems();

    // Create CSV content
    const csvHeaders = [
      'Item ID',
      'Name',
      'Category',
      'Description',
      'Quantity in Stock',
      'Location',
      'Unit Cost',
      'Vendor',
      'Tags',
      'Is Listed as Product',
      'Created At',
      'Updated At'
    ];

    const csvRows = inventoryItems.map(item => [
      item.item_id,
      `"${item.name}"`,
      `"${item.category}"`,
      `"${item.description || ''}"`,
      item.quantity_in_stock,
      `"${item.location || ''}"`,
      item.unit_cost || 0,
      `"${item.vendor || ''}"`,
      `"${item.tags.join(', ') || ''}"`,
      item.is_listed_as_product ? 'Yes' : 'No',
      item.created_at,
      item.updated_at
    ]);

    const csvContent = [
      csvHeaders.join(','),
      ...csvRows.map(row => row.join(','))
    ].join('\n');

    // Set response headers for CSV download
    const response = new NextResponse(csvContent);
    response.headers.set('Content-Type', 'text/csv');
    response.headers.set('Content-Disposition', `attachment; filename="inventory-${new Date().toISOString().split('T')[0]}.csv"`);
    
    return response;

  } catch (error) {
    console.error('Error exporting inventory to CSV:', error);
    return NextResponse.json({ error: 'Failed to export inventory' }, { status: 500 });
  }
} 