import Database from 'better-sqlite3';
import { Order, OrderItem } from '@/lib/types';
import path from 'path';

// SQLite DB setup
const dbPath = path.join(process.cwd(), 'orders.db');
const db = new Database(dbPath);

db.exec(`
CREATE TABLE IF NOT EXISTS orders (
  id TEXT PRIMARY KEY,
  sessionId TEXT,
  customerEmail TEXT,
  customerName TEXT,
  total REAL,
  status TEXT,
  paymentStatus TEXT,
  createdAt TEXT,
  updatedAt TEXT
);
CREATE TABLE IF NOT EXISTS order_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  orderId TEXT,
  productId TEXT,
  productName TEXT,
  quantity INTEGER,
  price REAL,
  image TEXT
);
`);

export const createOrder = (orderData: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>): Order => {
  const orderId = generateOrderId();
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;
  db.prepare(
    `INSERT INTO orders (id, sessionId, customerEmail, customerName, total, status, paymentStatus, createdAt, updatedAt)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
  ).run(
    orderId,
    orderData.sessionId,
    orderData.customerEmail,
    orderData.customerName,
    orderData.total,
    orderData.status,
    orderData.paymentStatus,
    createdAt,
    updatedAt
  );
  for (const item of orderData.items) {
    db.prepare(
      `INSERT INTO order_items (orderId, productId, productName, quantity, price, image)
       VALUES (?, ?, ?, ?, ?, ?)`
    ).run(
      orderId,
      item.productId,
      item.productName,
      item.quantity,
      item.price,
      item.image
    );
  }
  const order: Order = {
    ...orderData,
    id: orderId,
    createdAt: new Date(createdAt),
    updatedAt: new Date(updatedAt),
  };
  console.log('🛒 NEW ORDER CREATED (sqlite):', {
    orderId,
    sessionId: orderData.sessionId,
    customerEmail: orderData.customerEmail,
    total: orderData.total,
    items: orderData.items.length,
    timestamp: createdAt,
  });
  return order;
};

export const getOrderById = (id: string): Order | undefined => {
  const row = db.prepare('SELECT * FROM orders WHERE id = ?').get(id);
  if (!row) return undefined;
  const items = db.prepare('SELECT * FROM order_items WHERE orderId = ?').all(id);
  return rowToOrder(row, items);
};

export const getOrderBySessionId = (sessionId: string): Order | undefined => {
  const row = db.prepare('SELECT * FROM orders WHERE sessionId = ?').get(sessionId);
  if (!row) return undefined;
  const items = db.prepare('SELECT * FROM order_items WHERE orderId = ?').all(row.id);
  return rowToOrder(row, items);
};

export const updateOrderStatus = (id: string, status: Order['status']): Order | null => {
  const updatedAt = new Date().toISOString();
  db.prepare('UPDATE orders SET status = ?, updatedAt = ? WHERE id = ?').run(status, updatedAt, id);
  const order = getOrderById(id);
  if (!order) return null;
  console.log('📦 ORDER STATUS UPDATED (sqlite):', {
    orderId: id,
    newStatus: status,
    timestamp: updatedAt,
  });
  return order;
};

export const getAllOrders = (): Order[] => {
  const rows = db.prepare('SELECT * FROM orders ORDER BY createdAt DESC').all();
  return rows.map(row => {
    const items = db.prepare('SELECT * FROM order_items WHERE orderId = ?').all(row.id);
    return rowToOrder(row, items);
  });
};

export const getOrdersByStatus = (status: Order['status']): Order[] => {
  const rows = db.prepare('SELECT * FROM orders WHERE status = ? ORDER BY createdAt DESC').all(status);
  return rows.map(row => {
    const items = db.prepare('SELECT * FROM order_items WHERE orderId = ?').all(row.id);
    return rowToOrder(row, items);
  });
};

const generateOrderId = (): string => {
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.random().toString(36).substring(2, 5).toUpperCase();
  return `ORD-${timestamp}-${random}`;
};

export const getOrdersNeedingFulfillment = (): Order[] => {
  const rows = db.prepare('SELECT * FROM orders WHERE paymentStatus = ? AND (status = ? OR status = ?) ORDER BY createdAt DESC').all('paid', 'pending', 'processing');
  return rows.map(row => {
    const items = db.prepare('SELECT * FROM order_items WHERE orderId = ?').all(row.id);
    return rowToOrder(row, items);
  });
};

export const getRecentOrders = (limit: number = 10): Order[] => {
  const rows = db.prepare('SELECT * FROM orders ORDER BY createdAt DESC LIMIT ?').all(limit);
  return rows.map(row => {
    const items = db.prepare('SELECT * FROM order_items WHERE orderId = ?').all(row.id);
    return rowToOrder(row, items);
  });
};

function rowToOrder(row: any, items: any[]): Order {
  return {
    id: row.id,
    sessionId: row.sessionId,
    customerEmail: row.customerEmail,
    customerName: row.customerName,
    items: items.map(item => ({
      productId: item.productId,
      productName: item.productName,
      quantity: item.quantity,
      price: item.price,
      image: item.image,
    })),
    total: row.total,
    status: row.status,
    paymentStatus: row.paymentStatus,
    createdAt: new Date(row.createdAt),
    updatedAt: new Date(row.updatedAt),
  };
} 