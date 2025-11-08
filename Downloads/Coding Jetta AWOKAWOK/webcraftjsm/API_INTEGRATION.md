# API Integration Guide

## Overview

This project integrates with the webcraftapi backend (FastAPI + PostgreSQL).

## API Services Created

### 1. Authentication Service (`authService.js`)

- `login(email, password)` - User login
- `register(userData)` - User registration
- `logout()` - Clear session
- `getCurrentUser()` - Get logged in user
- `isAuthenticated()` - Check auth status

### 2. Menu Service (`menuService.js`)

- `getAll()` - Get all menu items
- `getById(id)` - Get single menu item
- `getByKantin(kantinId)` - Get menu items by kantin
- `search({ name, price })` - Search menu items
- `create(menuData)` - Add new menu item
- `update(id, menuData)` - Update menu item
- `delete(id)` - Delete menu item

### 3. Order Service (`orderService.js`)

- `getAll()` - Get all orders
- `getById(id)` - Get order with details
- `getByUser(userId)` - Get user's orders
- `getByKantin(kantinId)` - Get kantin's orders
- `getByStatus(status)` - Filter by payment status
- `create(orderData)` - Create new order
- `update(id, orderData)` - Update order
- `delete(id)` - Delete order

## Setup Instructions

### 1. Environment Configuration

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:8000/api
```

For production, update to your deployed API URL.

### 2. Backend Setup

Clone and run the backend API:

```bash
git clone https://github.com/adnanmaja/webcraftapi.git
cd webcraftapi/backend
pip install -r requirements.txt
uvicorn main:app --reload
```

The API will run on `http://localhost:8000`

### 3. Usage Examples

#### Login Example

```javascript
import { authService } from "@/services";

// In your Login component
const handleLogin = async (email, password) => {
  try {
    const data = await authService.login(email, password);
    console.log("Logged in:", data);
    // Redirect to dashboard
  } catch (error) {
    console.error("Login failed:", error);
  }
};
```

#### Menu Management Example

```javascript
import { menuService } from "@/services";

// Get all menu items
const fetchMenuItems = async () => {
  try {
    const items = await menuService.getAll();
    setMenuItems(items);
  } catch (error) {
    console.error("Error fetching menu:", error);
  }
};

// Add new menu item
const addMenuItem = async (menuData) => {
  try {
    const newItem = await menuService.create({
      kantin_id: 1,
      name: "Nasi Goreng",
      price: 15000,
      image_url: "url_to_image",
      stock: 50,
    });
    console.log("Item added:", newItem);
  } catch (error) {
    console.error("Error adding item:", error);
  }
};
```

#### Order Management Example

```javascript
import { orderService } from "@/services";

// Get all orders
const fetchOrders = async () => {
  try {
    const orders = await orderService.getAll();
    setOrders(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
  }
};

// Create new order
const createOrder = async (orderData) => {
  try {
    const newOrder = await orderService.create({
      user_id: 1,
      kantin_id: 1,
      total_price: 25000,
      payment_status: "pending",
      created_at: new Date().toISOString(),
    });
    console.log("Order created:", newOrder);
  } catch (error) {
    console.error("Error creating order:", error);
  }
};
```

## API Endpoints Reference

### Authentication

- `POST /api/login` - Login
- `POST /api/register` - Register

### Menu Items

- `GET /api/menuitem` - List all
- `GET /api/menuitem/{id}` - Get by ID
- `GET /api/menuitem/kantin/{kantin_id}` - Get by kantin
- `GET /api/menuitem/?name=...&price=...` - Search
- `POST /api/menuitem` - Create
- `PUT /api/menuitem/{id}` - Update
- `DELETE /api/menuitem/{id}` - Delete

### Orders

- `GET /api/order` - List all
- `GET /api/order/{id}` - Get with details
- `GET /api/users/{user_id}/orders` - By user
- `GET /api/kantin/{kantin_id}/orders` - By kantin
- `GET /api/orders/status/{status}` - By status
- `POST /api/order` - Create
- `PUT /api/orders/{id}` - Update
- `DELETE /api/orders/{id}` - Delete

## Authentication Flow

1. User logs in via `/login` endpoint
2. Access token is stored in localStorage
3. Token is automatically added to all API requests via axios interceptor
4. If token expires (401 response), user is redirected to login

## Error Handling

All services include error handling. Errors are thrown and should be caught in components:

```javascript
try {
  const data = await menuService.getAll();
} catch (error) {
  if (error.response) {
    // Server responded with error
    console.error("Error:", error.response.data.detail);
  } else {
    // Network error
    console.error("Network error:", error.message);
  }
}
```

## Next Steps

To fully integrate the API into your components:

1. Update `Login.jsx` to use `authService.login()`
2. Update `Register.jsx` to use `authService.register()`
3. Update `Menu.jsx` to fetch and manage menu items with `menuService`
4. Update `Pesanan.jsx` to fetch and manage orders with `orderService`
5. Add authentication guards to protect routes

## Notes

- The API uses JWT tokens for authentication
- Tokens are stored in localStorage
- All authenticated requests include the Bearer token automatically
- Update `VITE_API_URL` in `.env` for different environments
