# Admin Authentication System

## Overview
This project includes a secure admin authentication system with activity tracking and session management.

## Features

### 🔐 Authentication
- **Username/Password Login**: Secure admin login with bcrypt password hashing
- **Session Management**: 24-hour secure sessions with automatic expiration
- **Route Protection**: All `/admin/*` routes are protected by middleware
- **Automatic Logout**: Sessions expire automatically and redirect to login

### 📊 Activity Tracking
- **Login/Logout Logging**: Track when admins sign in and out
- **Action Logging**: Log all admin actions (create, update, delete products/orders)
- **IP Tracking**: Record IP addresses for security monitoring
- **Audit Trail**: Complete history of admin activities

### 🛡️ Security Features
- **HTTP-Only Cookies**: Secure session storage
- **Password Hashing**: bcrypt with salt rounds
- **Session Validation**: Server-side session verification
- **IP Address Logging**: Track admin access locations

## Default Admin Credentials

**Username**: `admin`  
**Password**: `admin123`

⚠️ **Important**: Change these credentials in production!

## Database Schema

### Admin Users Table
```sql
CREATE TABLE admin_users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  last_login DATETIME,
  is_active BOOLEAN DEFAULT 1
);
```

### Admin Sessions Table
```sql
CREATE TABLE admin_sessions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  admin_id INTEGER,
  session_token TEXT UNIQUE NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  expires_at DATETIME,
  ip_address TEXT,
  user_agent TEXT,
  FOREIGN KEY (admin_id) REFERENCES admin_users (id)
);
```

### Admin Activity Logs Table
```sql
CREATE TABLE admin_activity_logs (
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
```

## Admin Routes

### Public Routes
- `/admin/login` - Admin login page

### Protected Routes
- `/admin` - Main dashboard
- `/admin/products` - Product management
- `/admin/orders` - Order management
- `/api/admin/*` - Admin API endpoints

## API Endpoints

### Authentication
- `POST /api/admin/login` - Admin login
- `POST /api/admin/logout` - Admin logout

### Products (Protected)
- `GET /api/products` - List products (public)
- `POST /api/products` - Create product (admin only)
- `PUT /api/products/[id]` - Update product (admin only)
- `DELETE /api/products/[id]` - Delete product (admin only)

### Orders (Protected)
- `GET /api/admin/orders` - List orders (admin only)
- `PUT /api/admin/orders/[id]/status` - Update order status (admin only)

## Activity Logging

The system automatically logs the following admin actions:

### Product Actions
- `create_product` - When a new product is created
- `update_product` - When a product is updated
- `delete_product` - When a product is deleted

### Order Actions
- `update_order_status` - When order status is changed

### Authentication Actions
- `login` - When admin logs in
- `logout` - When admin logs out

## Usage

### 1. Access Admin Panel
Navigate to `/admin/login` and enter credentials.

### 2. Manage Products
- View all products at `/admin/products`
- Add new products
- Edit existing products
- Delete products

### 3. Manage Orders
- View all orders at `/admin/orders`
- Update order status
- Track order fulfillment

### 4. View Activity
- Click "Activity" button to view recent admin actions
- See who performed what actions and when

## Security Best Practices

1. **Change Default Password**: Update the default admin password immediately
2. **Use Strong Passwords**: Implement password complexity requirements
3. **Monitor Activity**: Regularly review activity logs
4. **Limit Access**: Only grant admin access to trusted users
5. **Regular Updates**: Keep the system updated with security patches

## Future Enhancements

### Phase 2: Advanced Features
- **Multi-Admin Support**: Multiple admin users with different roles
- **Role-Based Access**: Different permissions for different admin levels
- **Two-Factor Authentication**: Additional security layer
- **Email Notifications**: Alert admins of important events

### Phase 3: Enterprise Features
- **Audit Reports**: Detailed activity reports
- **Session Management**: View and manage active sessions
- **IP Whitelisting**: Restrict admin access to specific IP ranges
- **Advanced Logging**: More detailed activity tracking

## Troubleshooting

### Common Issues

1. **"Unauthorized" Error**: Session expired, log in again
2. **"Invalid session" Error**: Clear browser cookies and log in again
3. **Database Errors**: Check SQLite file permissions and integrity

### Reset Admin Password
If you need to reset the admin password, you can:
1. Delete the `orders.db` file
2. Restart the application
3. The default admin user will be recreated

## Development

### Adding New Admin Actions
To log new admin actions, use the `logAdminActivity` function:

```typescript
import { logAdminActivity } from '@/lib/data/admin';

logAdminActivity(
  adminId,
  'custom_action',
  'resource_type',
  'resource_id',
  'Action description',
  clientIP
);
```

### Extending Admin Features
The admin system is designed to be easily extensible. Add new routes, features, and logging as needed while maintaining the security model. 