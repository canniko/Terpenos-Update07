# Shopping Cart Functionality

This document describes the shopping cart functionality that has been added to the Terpenos website.

## Features Added

### 1. Shopping Cart System
- **Cart State Management**: Custom hook (`useCart`) for managing cart state with localStorage persistence
- **Cart Provider**: React context provider to share cart state across components
- **Cart Icon**: Displays in navbar with item count badge
- **Cart Sidebar**: Slide-out cart panel with item management

### 2. Product Management
- **Product Types**: TypeScript interfaces for products and cart items
- **Dummy Products**: 6 sample products (terpenes and cannabis oils) with realistic data
- **Product Cards**: Grid display with add to cart functionality
- **Product Detail Pages**: Individual product pages with full details

### 3. Product Catalog
- **Products Page**: Updated from "Coming Soon" to full product catalog
- **Search Functionality**: Search products by name, description, or tags
- **Category Filtering**: Filter by terpenes or cannabis categories
- **Responsive Grid**: Mobile-friendly product grid layout

## Components Created

### Core Components
- `lib/types.ts` - TypeScript interfaces for products and cart
- `lib/data/products.ts` - Product data and utility functions
- `lib/hooks/useCart.ts` - Cart state management hook

### UI Components
- `components/cart/cart-icon.tsx` - Cart icon with item count
- `components/cart/cart-sidebar.tsx` - Cart sidebar with item management
- `components/product/product-card.tsx` - Product display card
- `components/providers/cart-provider.tsx` - Cart context provider

### Pages
- `app/products/page.tsx` - Updated products catalog page
- `app/products/[id]/page.tsx` - Individual product detail pages

## Product Data

The application includes 6 dummy products:

### Terpene Blends
1. **Premium Terpene Blend - Citrus** ($29.99)
   - Citrus terpenes (limonene, linalool, myrcene)
   - Mood enhancement and stress relief

2. **Relaxation Terpene Blend** ($34.99)
   - Lavender, chamomile, valerian terpenes
   - Sleep aid and anxiety relief

3. **Energy & Focus Terpene Blend** ($27.99)
   - Stimulating terpenes (pinene, terpinolene)
   - Mental clarity and energy boost

4. **Pain Relief Terpene Blend** ($32.99) - *Out of Stock*
   - Therapeutic blend for pain relief
   - Anti-inflammatory effects

### Cannabis Oils
5. **Full-Spectrum Cannabis Oil** ($79.99)
   - Complete cannabinoid profile
   - Lab-tested for purity

6. **CBD Isolate Oil** ($59.99)
   - 99%+ pure CBD
   - THC-free option

## Cart Features

### State Management
- Persistent cart data using localStorage
- Real-time cart updates across components
- Automatic total and item count calculation

### Cart Operations
- Add items to cart
- Remove items from cart
- Update item quantities
- Clear entire cart
- View cart contents

### User Experience
- Cart icon shows item count
- Slide-out cart sidebar
- Quantity controls for each item
- Total price calculation
- Checkout button (placeholder)

## Navigation Updates

### Navbar Changes
- Added cart icon to desktop and mobile navigation
- Cart icon displays item count badge
- Cart sidebar integration

### Layout Updates
- Added CartProvider to app layout
- Cart context available throughout application

## Technical Implementation

### State Management
- React hooks for local state
- Context API for global cart state
- localStorage for persistence

### TypeScript
- Strong typing for all components
- Interface definitions for products and cart
- Type safety throughout the application

### Responsive Design
- Mobile-first approach
- Responsive product grid
- Mobile-friendly cart sidebar

## Future Enhancements

### Potential Additions
1. **Checkout Process**: Implement actual checkout flow
2. **Payment Integration**: Add payment processing
3. **User Accounts**: User registration and order history
4. **Inventory Management**: Real-time stock updates
5. **Wishlist**: Save products for later
6. **Product Reviews**: User review system
7. **Related Products**: Product recommendations
8. **Discount Codes**: Coupon system

### Backend Integration
- Database for product management
- User authentication
- Order processing
- Payment gateway integration
- Inventory tracking

## Usage

1. **Browse Products**: Visit `/products` to see all available products
2. **Search & Filter**: Use search bar and category filters
3. **View Details**: Click on product cards to see detailed information
4. **Add to Cart**: Use "Add to Cart" buttons on product cards or detail pages
5. **Manage Cart**: Click cart icon to open sidebar and manage items
6. **Checkout**: Use checkout button in cart sidebar (currently placeholder)

The shopping cart functionality is now fully integrated into the existing Terpenos website design and maintains the same visual style and user experience patterns. 