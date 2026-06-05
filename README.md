# 🛍️ ShopHub - E-Commerce Store

A beginner-friendly e-commerce web application built with HTML, CSS, JavaScript, Node.js, and Express.js. Perfect for learning full-stack web development!

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Learning Resources](#learning-resources)
- [Future Enhancements](#future-enhancements)
- [License](#license)

---

## ✨ Features

### Customer Features
- 🏠 **Homepage** - Browse featured products
- 📦 **Product Listing** - View all products with details
- 🔍 **Search & Filter** - Search by name and filter by category
- 🛒 **Shopping Cart** - Add/remove items, adjust quantities
- 💰 **Checkout** - Calculate total with tax
- 📱 **Responsive Design** - Works on mobile, tablet, and desktop

### Admin Features
- ➕ **Add Products** - Create new products
- ✏️ **Edit Products** - Modify existing products
- 🗑️ **Delete Products** - Remove products from store

---

## 📁 Project Structure

```
ecommerce-store/
│
├── frontend/                    # Frontend application
│   ├── index.html              # Homepage
│   ├── css/
│   │   └── style.css           # All styling
│   ├── js/
│   │   ├── api.js              # API calls
│   │   ├── cart.js             # Shopping cart logic
│   │   └── app.js              # Main application logic
│   └── pages/
│       ├── products.html       # Products page
│       ├── cart.html           # Cart page
│       └── checkout.html       # Checkout page
│
├── backend/                     # Backend server
│   ├── server.js               # Express server
│   └── data/
│       └── products.json       # Sample products data
│
├── package.json                 # Dependencies
├── .gitignore                   # Git ignore rules
└── README.md                    # This file
```

---

## 🚀 Installation

### Prerequisites

Before you begin, make sure you have installed:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** - [Download](https://git-scm.com/)
- A **Code Editor** (VS Code recommended)

### Setup Instructions

#### 1. Clone the Repository

```bash
git clone https://github.com/guptasmriti230-cyber/ecommerce-store.git
cd ecommerce-store
```

#### 2. Install Dependencies

```bash
npm install
```

#### 3. Start the Server

```bash
# Production mode
npm start

# Development mode (auto-reload)
npm run dev
```

#### 4. Open in Browser

```
http://localhost:5000
```

---

## 💻 Usage

### For Customers

1. **Browse Products** - Visit the homepage to see featured products
2. **Search & Filter** - Find products by name or category
3. **Add to Cart** - Click "Add to Cart" button
4. **Manage Cart** - Adjust quantities or remove items
5. **Checkout** - Click "Proceed to Checkout"

### For Developers

#### Adding a New Product

Edit `backend/server.js` and add to the products array:

```javascript
{
    id: 7,
    name: 'Product Name',
    category: 'Category',
    description: 'Product description',
    price: 99.99,
    emoji: '🎁'
}
```

---

## 🔌 API Endpoints

### Base URL
```
http://localhost:5000/api
```

### Products API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/products` | Get all products |
| GET | `/products/:id` | Get single product |
| POST | `/products` | Create product |
| PUT | `/products/:id` | Update product |
| DELETE | `/products/:id` | Delete product |

### Authentication API

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/register` | Register user |
| POST | `/auth/login` | Login user |
| GET | `/auth/logout` | Logout user |

---

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Markup
- **CSS3** - Styling & Responsive Design
- **JavaScript (ES6+)** - Interactivity & Logic
- **Fetch API** - API Communication
- **LocalStorage** - Cart persistence

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **CORS** - Cross-origin requests

### Tools
- **Git** - Version control
- **npm** - Package manager
- **VS Code** - Code editor

---

## 📚 Learning Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [JavaScript.info](https://javascript.info/)
- [Express.js Official Docs](https://expressjs.com/)
- [freeCodeCamp](https://www.freecodecamp.org/)

---

## 🚀 Future Enhancements

- [ ] Database Integration (MongoDB/PostgreSQL)
- [ ] Real Payment Processing (Stripe/PayPal)
- [ ] User Authentication with JWT
- [ ] Admin Dashboard
- [ ] Email Notifications
- [ ] Product Reviews & Ratings
- [ ] Wishlist Feature
- [ ] Order History
- [ ] Deployment (Heroku/Railway)

---

## 📄 License

This project is licensed under the **MIT License** - free to use and modify.

---

## 🙋 FAQ

**Q: How do I change the port?**
A: Edit `backend/server.js` and change `const PORT = 5000;`

**Q: How do I add more products?**
A: Edit the products array in `backend/server.js`

**Q: How do I connect a database?**
A: Install MongoDB and replace JSON storage with database queries

---

## 👨‍💻 Author

**Smriti Gupta**
- GitHub: [@guptasmriti230-cyber](https://github.com/guptasmriti230-cyber)

---

**Happy Learning! 🚀**
