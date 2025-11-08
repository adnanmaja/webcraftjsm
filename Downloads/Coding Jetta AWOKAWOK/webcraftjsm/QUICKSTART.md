# Quick Start Guide 🚀

## Setup in 3 Steps

### Step 1: Start the Backend API

```bash
# Clone the API repository (if not already cloned)
git clone https://github.com/adnanmaja/webcraftapi.git

# Navigate to backend folder
cd webcraftapi/backend

# Install Python dependencies
pip install -r requirements.txt

# Start the API server
uvicorn main:app --reload
```

✅ API should be running on `http://localhost:8000`

---

### Step 2: Configure Frontend

```bash
# Make sure you're in the frontend directory
cd webcraftjsm

# Install dependencies (if not already installed)
npm install

# The .env file is already created with:
# VITE_API_URL=http://localhost:8000/api
```

---

### Step 3: Start Frontend

```bash
npm run dev
```

✅ Frontend should be running on `http://localhost:5173`

---

## Test the Integration

### 1. Test Menu Page

- Navigate to: `http://localhost:5173/menu`
- You should see menu items from the database
- Try adding a new menu item
- Try updating availability
- Try deleting an item

### 2. Test Orders Page

- Navigate to: `http://localhost:5173/pesanan`
- You should see orders from the database
- Try changing order status
- Try canceling an order

### 3. Test Authentication

**Login:**

- Navigate to: `http://localhost:5173/login`
- Use credentials from your database
- Should redirect to menu on success

**Register:**

- Navigate to: `http://localhost:5173/register`
- Create a new account
- Should redirect to login

---

## Troubleshooting

### Issue: "Failed to load menu/orders"

**Solution:** Make sure the backend API is running on `http://localhost:8000`

### Issue: "Login failed"

**Solution:**

- Check if user exists in database
- Verify password is correct
- Check browser console for detailed error

### Issue: "CORS error"

**Solution:** Backend already has CORS enabled. If still occurring, check backend logs.

### Issue: Changes not saving

**Solution:**

- Check browser console for errors
- Verify API is running
- Check network tab in DevTools

---

## File Structure

```
webcraftjsm/
├── src/
│   ├── pages/
│   │   ├── Menu.jsx         ✅ Integrated
│   │   ├── Pesanan.jsx      ✅ Integrated
│   │   ├── Login.jsx        ✅ Integrated
│   │   ├── Register.jsx     ✅ Integrated
│   │   └── Analytics.jsx    (Not integrated)
│   ├── services/
│   │   ├── api.js           ✅ Axios config
│   │   ├── authService.js   ✅ Auth functions
│   │   ├── menuService.js   ✅ Menu functions
│   │   ├── orderService.js  ✅ Order functions
│   │   └── index.js         ✅ Exports
│   └── components/
│       └── Navbar.jsx
├── .env                     ✅ API URL config
└── package.json
```

---

## API Documentation

View full API docs at: `http://localhost:8000/docs` (when API is running)

---

## Need Help?

Check these files:

- `API_INTEGRATION.md` - Detailed integration guide
- `INTEGRATION_COMPLETE.md` - Feature summary
- Browser Console - For runtime errors
- Network Tab - For API request/response

---

**Everything is ready! Start coding! 💻**
