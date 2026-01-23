const products = [
    {
        id: 1,
        name: "Crimson Passion",
        price: 1499,
        image: "assets/rose.png", // Path relative to public folder
        description: "A classic arrangement of 20 premium red roses suitable for expressing deep love.",
        category: "Romantic"
        
    },
    {
        id: 2,
        name: "Pastel Dreams",
        price: 1899,
        image: "assets/wildflower.png",
        description: "A mix of seasonal wildflowers in soft pastel hues, perfect for birthdays and cheer.",
        category: "Birthday"
    },
    {
        id: 3,
        name: "Pure Elegance",
        price: 2499,
        image: "assets/lily.png",
        description: "Stunning white lilies paired with exotic orchids for a sophisticated statement.",
        category: "Elegant"
    },
    {
        id: 4,
        name: "Sunny Delight",
        price: 1299,
        image: "assets/hero.png",
        description: "Bright and cheerful bouquet with sunflowers and daisies.",
        category: "Birthday"
    },
    {
        id: 5,
        name: "Mystic Purple",
        price: 1999,
        image: "assets/rose.png",
        description: "Enchanting purple roses for a mysterious and romantic touch.",
        category: "Romantic"
    },
    {
        id: 6,
        name: "Garden Fresh",
        price: 1699,
        image: "assets/wildflower.png",
        description: "Fresh wildflowers straight from the garden.",
        category: "Casual"
    }
];

let cart = [];
let currentCategory = 'all';

const productGrid = document.getElementById('product-grid');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const cartCountElement = document.getElementById('cart-count');
const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.querySelector('.cart-overlay');

function init() {
    setupCategoryFilters();
    renderProducts();
    updateCartUI();
}

function setupCategoryFilters() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Update current category
            currentCategory = button.dataset.category;
            // Re-render products
            renderProducts();
        });
    });
}

function renderProducts() {
    const filteredProducts = currentCategory === 'all' ? products : products.filter(product => product.category === currentCategory);
    productGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">₹${product.price}</div>
                <button class="add-btn" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartUI();
        toggleCart(true); // Open cart when item added
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function updateCartUI() {
    // Update count
    cartCountElement.textContent = cart.length;

    // Update items list
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart-msg">Your cart is empty</div>';
    } else {
        cartItemsContainer.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <span class="item-title">${item.name}</span>
                    <span class="item-price">₹${item.price}</span>
                    <button class="item-remove" onclick="removeFromCart(${index})">Remove</button>
                </div>
            </div>
        `).join('');
    }

    // Update total
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotalElement.textContent = `₹${total}`;
}

function toggleCart(forceOpen = null) {
    if (forceOpen === true) {
        cartSidebar.classList.add('active');
        cartOverlay.classList.add('active');
    } else if (forceOpen === false) {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
    } else {
        cartSidebar.classList.toggle('active');
        cartOverlay.classList.toggle('active');
    }
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let message = "Hello The Secret Florist! I would like to order the following:%0A%0A";

    // Group items for cleaner message
    const itemMap = new Map();
    cart.forEach(item => {
        if (itemMap.has(item.name)) {
            itemMap.set(item.name, { ...item, count: itemMap.get(item.name).count + 1 });
        } else {
            itemMap.set(item.name, { ...item, count: 1 });
        }
    });

    let total = 0;
    itemMap.forEach((details, name) => {
        const itemTotal = details.price * details.count;
        total += itemTotal;
        message += `• ${name} (x${details.count}) - ₹${itemTotal}%0A`;
    });

    message += `%0A*Total Price: ₹${total}*`;
    message += "%0A%0APlease confirm my order.";

    // Replace with the actual business number. Using a dummy number for now.
    const phoneNumber = "919994588076";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappUrl, '_blank');
}

// Close cart when clicking outside
cartOverlay.addEventListener('click', () => toggleCart(false));

init();
