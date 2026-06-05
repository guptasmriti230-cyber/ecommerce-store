const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

// ========== SAMPLE DATA ==========

const products = [
    {
        id: 1,
        name: 'Wireless Headphones',
        category: 'Electronics',
        description: 'High-quality wireless headphones with noise cancellation',
        price: 79.99,
        emoji: '🎧'
    },
    {
        id: 2,
        name: 'Winter Jacket',
        category: 'Clothing',
        description: 'Warm and stylish winter jacket for cold weather',
        price: 129.99,
        emoji: '🧥'
    },
    {
        id: 3,
        name: 'JavaScript Book',
        category: 'Books',
        description: 'Learn JavaScript from basics to advanced concepts',
        price: 49.99,
        emoji: '📕'
    },
    {
        id: 4,
        name: 'Smart Watch',
        category: 'Electronics',
        description: 'Feature-rich smartwatch for fitness tracking',
        price: 199.99,
        emoji: '⌚'
    },
    {
        id: 5,
        name: 'Coffee Maker',
        category: 'Home',
        description: 'Automatic coffee maker for perfect morning brew',
        price: 89.99,
        emoji: '☕'
    },
    {
        id: 6,
        name: 'Running Shoes',
        category: 'Clothing',
        description: 'Comfortable and durable running shoes',
        price: 99.99,
        emoji: '👟'
    }
];

// ========== PRODUCTS API ==========

// Get all products
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Get product by ID
app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
});

// Create product
app.post('/api/products', (req, res) => {
    const newProduct = {
        id: Math.max(...products.map(p => p.id)) + 1,
        ...req.body
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// Update product
app.put('/api/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    Object.assign(product, req.body);
    res.json(product);
});

// Delete product
app.delete('/api/products/:id', (req, res) => {
    const index = products.findIndex(p => p.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).json({ message: 'Product not found' });
    }
    products.splice(index, 1);
    res.json({ message: 'Product deleted successfully' });
});

// ========== AUTHENTICATION API ==========

app.post('/api/auth/register', (req, res) => {
    const { email, password, name } = req.body;
    if (!email || !password || !name) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    res.status(201).json({
        message: 'User registered successfully',
        user: { email, name },
        token: 'demo-token-' + Math.random().toString(36).substr(2, 9)
    });
});

app.post('/api/auth/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }
    res.json({
        message: 'Login successful',
        token: 'demo-token-' + Math.random().toString(36).substr(2, 9),
        user: { email }
    });
});

app.get('/api/auth/logout', (req, res) => {
    res.json({ message: 'Logout successful' });
});

// ========== CART API ==========

app.get('/api/cart', (req, res) => {
    res.json({
        message: 'Cart items',
        items: []
    });
});

app.post('/api/cart', (req, res) => {
    res.status(201).json({
        message: 'Item added to cart',
        item: req.body
    });
});

// ========== ERROR HANDLING ==========

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
});

// ========== START SERVER ==========

app.listen(PORT, () => {
    console.log(`\n🚀 Server running on http://localhost:${PORT}`);
    console.log(`📦 E-Commerce API ready!`);
    console.log(`✅ Open http://localhost:${PORT} in your browser\n`);
});
