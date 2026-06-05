// Main Application Logic

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadFeaturedProducts();
    checkUserLogin();
});

// Load featured products on homepage
async function loadFeaturedProducts() {
    const featuredContainer = document.getElementById('featuredProducts');
    if (!featuredContainer) return;

    const products = await fetchProducts();
    const featured = products.slice(0, 6);

    featuredContainer.innerHTML = featured.map(product => `
        <div class="product-card" onclick="viewProduct(${product.id})">
            <div class="product-image">${product.emoji || '📦'}</div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-category">${product.category}</p>
                <p class="product-description">${product.description}</p>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <div class="product-actions">
                    <button class="btn btn-primary btn-small" onclick="addToCart(event, ${product.id})">Add to Cart</button>
                    <button class="btn btn-secondary btn-small" onclick="viewProduct(${product.id})">Details</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Add product to cart
function addToCart(event, productId) {
    event.stopPropagation();
    
    fetchProductById(productId).then(product => {
        if (product) {
            cart.addItem(product, 1);
            showNotification(`${product.name} added to cart!`);
        }
    });
}

// View product details
function viewProduct(productId) {
    window.location.href = `pages/products.html?id=${productId}`;
}

// Check if user is logged in
function checkUserLogin() {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const logoutBtn = document.getElementById('logoutBtn');

    if (token && user) {
        if (loginBtn) loginBtn.style.display = 'none';
        if (registerBtn) registerBtn.style.display = 'none';
        if (logoutBtn) logoutBtn.style.display = 'block';
    } else {
        if (loginBtn) loginBtn.style.display = 'block';
        if (registerBtn) registerBtn.style.display = 'block';
        if (logoutBtn) logoutBtn.style.display = 'none';
    }
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background-color: #27ae60;
        color: white;
        padding: 1rem 2rem;
        border-radius: 5px;
        z-index: 1000;
        animation: slideIn 0.3s ease-in-out;
    `;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
