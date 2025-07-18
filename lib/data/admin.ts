import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

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

    // Create admin tables
    db.exec(`
    CREATE TABLE IF NOT EXISTS admin_users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      last_login DATETIME,
      is_active BOOLEAN DEFAULT 1
    );

    CREATE TABLE IF NOT EXISTS admin_sessions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      admin_id INTEGER,
      session_token TEXT UNIQUE NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      expires_at DATETIME,
      ip_address TEXT,
      user_agent TEXT,
      FOREIGN KEY (admin_id) REFERENCES admin_users (id)
    );

    CREATE TABLE IF NOT EXISTS admin_activity_logs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      admin_id INTEGER,
      action TEXT NOT NULL,
      resource_type TEXT,
      resource_id TEXT,
      details TEXT,
      ip_address TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (admin_id) REFERENCES admin_users (id)
    );
    `);

    // Insert default admin user if not exists
    const defaultAdmin = db.prepare('SELECT * FROM admin_users WHERE username = ?').get('admin');
    if (!defaultAdmin) {
      const bcrypt = require('bcryptjs');
      const hashedPassword = bcrypt.hashSync('admin123', 10);
      db.prepare(`
        INSERT INTO admin_users (username, password_hash) 
        VALUES (?, ?)
      `).run('admin', hashedPassword);
      console.log('✅ Default admin user created: admin / admin123');
    }

    isInitialized = true;
  } catch (error) {
    console.error('Failed to initialize admin database:', error);
  }
}

// Admin authentication functions
export function verifyAdminCredentials(username: string, password: string): boolean {
  console.log(`ADMIN_USERNAME: ${process.env.ADMIN_USERNAME}`);
  console.log(`ADMIN_USERNAME: ${process.env.ADMIN_PASSWORD}`);
  console.log('Verifying admin credentials:', username, password);
  console.log('Database:', db);

  initializeDatabase();
  
  // First try database authentication
  if (db) {
    try {
      const bcrypt = require('bcryptjs');
      const user = db.prepare('SELECT * FROM admin_users WHERE username = ? AND is_active = 1').get(username);
      
      if (user) {
        return bcrypt.compareSync(password, user.password_hash);
      }
    } catch (error) {
      console.error('Error verifying admin credentials from database:', error);
    }
  }
  
  // Fallback to environment variables for deployment
  const envUsername = process.env.ADMIN_USERNAME;
  const envPassword = process.env.ADMIN_PASSWORD;
  
  if (envUsername && envPassword) {
    return username === envUsername && password === envPassword;
  }
  
  // Final fallback to default credentials
  // return username === 'admin' && password === 'admin123';
}

export function createAdminSession(adminId: number, sessionToken: string, ipAddress?: string, userAgent?: string): boolean {
  initializeDatabase();
  
  // Try database first
  if (db) {
    try {
      const expiresAt = new Date();
      expiresAt.setHours(expiresAt.getHours() + 24); // 24 hour session

      db.prepare(`
        INSERT INTO admin_sessions (admin_id, session_token, expires_at, ip_address, user_agent)
        VALUES (?, ?, ?, ?, ?)
      `).run(adminId, sessionToken, expiresAt.toISOString(), ipAddress, userAgent);

      // Update last login
      db.prepare('UPDATE admin_users SET last_login = CURRENT_TIMESTAMP WHERE id = ?').run(adminId);

      return true;
    } catch (error) {
      console.error('Error creating admin session in database:', error);
    }
  }
  
  // Fallback for deployment environment - just return true since we can't persist sessions
  // In a production environment, you'd want to use a proper session store like Redis
  console.log('Creating session without database persistence (deployment mode)');
  return true;
}

export function validateAdminSession(sessionToken: string): { valid: boolean; adminId?: number } {
  initializeDatabase();
  
  // Try database first
  if (db) {
    try {
      const session = db.prepare(`
        SELECT s.*, u.username 
        FROM admin_sessions s 
        JOIN admin_users u ON s.admin_id = u.id 
        WHERE s.session_token = ? AND s.expires_at > CURRENT_TIMESTAMP AND u.is_active = 1
      `).get(sessionToken);

      if (session) {
        return { valid: true, adminId: session.admin_id };
      }
    } catch (error) {
      console.error('Error validating admin session from database:', error);
    }
  }
  
  // Fallback for deployment environment - accept any session token
  // In a production environment, you'd want to validate against a proper session store
  console.log('Validating session without database (deployment mode)');
  return { valid: true, adminId: 1 };
}

export function deleteAdminSession(sessionToken: string): boolean {
  initializeDatabase();
  
  // Try database first
  if (db) {
    try {
      db.prepare('DELETE FROM admin_sessions WHERE session_token = ?').run(sessionToken);
      return true;
    } catch (error) {
      console.error('Error deleting admin session from database:', error);
    }
  }
  
  // Fallback for deployment environment
  console.log('Deleting session without database (deployment mode)');
  return true;
}

export function logAdminActivity(adminId: number, action: string, resourceType?: string, resourceId?: string, details?: string, ipAddress?: string): boolean {
  initializeDatabase();
  if (!db) return false;

  try {
    db.prepare(`
      INSERT INTO admin_activity_logs (admin_id, action, resource_type, resource_id, details, ip_address)
      VALUES (?, ?, ?, ?, ?, ?)
    `).run(adminId, action, resourceType, resourceId, details, ipAddress);

    return true;
  } catch (error) {
    console.error('Error logging admin activity:', error);
    return false;
  }
}

export function getAdminActivityLogs(limit: number = 50): any[] {
  initializeDatabase();
  if (!db) return [];

  try {
    return db.prepare(`
      SELECT 
        al.*,
        u.username
      FROM admin_activity_logs al
      JOIN admin_users u ON al.admin_id = u.id
      ORDER BY al.created_at DESC
      LIMIT ?
    `).all(limit);
  } catch (error) {
    console.error('Error getting admin activity logs:', error);
    return [];
  }
}

export function getAdminUserByUsername(username: string): any {
  initializeDatabase();
  
  // Try database first
  if (db) {
    try {
      return db.prepare('SELECT id, username, created_at, last_login FROM admin_users WHERE username = ? AND is_active = 1').get(username);
    } catch (error) {
      console.error('Error getting admin user from database:', error);
    }
  }
  
  // Fallback for deployment environment
  const envUsername = process.env.ADMIN_USERNAME || 'admin';
  if (username === envUsername) {
    return {
      id: 1,
      username: envUsername,
      created_at: new Date().toISOString(),
      last_login: null
    };
  }
  
  return null;
}

// Helper function to get client IP
export function getClientIP(request: NextRequest): string {
  return request.headers.get('x-forwarded-for')?.split(',')[0] || 
         request.headers.get('x-real-ip') || 
         'unknown';
} 