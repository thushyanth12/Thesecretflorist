const products = [
    {
        id: 1,
        name: "Crimson Passion",
        price: 1499,
        image: "assets/1.webp", // Path relative to public folder
        description: "A classic arrangement of 20 premium red roses suitable for expressing deep love.",
        category: "Romantic"
        
    },
    {
        id: 2,
        name: "Pastel Dreams",
        price: 1899,
        image: "assets/2.webp",
        description: "A mix of seasonal wildflowers in soft pastel hues, perfect for birthdays and cheer.",
        category: "Birthday"
    },
    {
        id: 3,
        name: "Pure Elegance",
        price: 2499,
        image: "assets/3.webp",
        description: "Stunning white lilies paired with exotic orchids for a sophisticated statement.",
        category: "Elegant"
    },
    {
        id: 4,
        name: "Sunny Delight",
        price: 1299,
        image: "assets/4.webp",
        description: "Bright and cheerful bouquet with sunflowers and daisies.",
        category: "Birthday"
    },
    {
        id: 5,
        name: "Mystic Purple",
        price: 1999,
        image: "assets/5.webp",
        description: "Enchanting purple roses for a mysterious and romantic touch.",
        category: "Romantic"
    },
    {
        id: 6,
        name: "Garden Fresh",
        price: 1699,
        image: "assets/6.webp",
        description: "Fresh wildflowers straight from the garden.",
        category: "Casual"
    },
    {
        id: 7,
        name: "golden moments",
        price: 1699,
        image: "assets/7.webp",
        description: "Fresh wildflowers straight from the garden.",
        category: "Casual"

    },
    {
        id: 8,
        name: "blushing beauty",
        price: 1699,
        image: "assets/8.webp",
        description: "Fresh wildflowers straight from the garden.",
        category: "Casual"
    },
    {
        id: 9,
        name: "radiant charm",
        price: 1699,
        image: "assets/9.webp",
        description: "Fresh wildflowers straight from the garden.",
        category: "Casual"
    },
    {
        id: 10,
        name: "elegant embrace",
        price: 1699,
        image: "assets/10.webp",
        description: "Fresh wildflowers straight from the garden.",
        category: "Casual"
    },
    {
        id: 11,
        name: "serene splendor",
        price: 1699,
        image: "assets/11.webp",
        description: "Fresh wildflowers straight from the garden.",
        category: "Casual"
    },
    {
        id: 12,
        name: "vibrant vogue",
        price: 1699,
        image: "assets/12.webp",
        description: "Fresh wildflowers straight from the garden.",
        category: "Casual"
    },
    {
        id: 13,
        name: "charming cascade",
        price: 1699,
        image: "assets/13.webp",
        description: "Fresh wildflowers straight from the garden.",
        category: "Casual"
    },
    {
        id: 14,
        name: "blissful bloom",
        price: 1699,
        image: "assets/14.webp",
        description: "Fresh wildflowers straight from the garden.",
        category: "Casual"
    },
    {
        id: 15,
        name: "radiant romance",
        price: 1699,
        image: "assets/15.webp",
        description: "Fresh wildflowers straight from the garden.",
        category: "Casual"
    },
    {
        id: 16,
        name: "timeless treasure",
        price: 1699,
        image: "assets/16.webp",
        description: "Fresh wildflowers straight from the garden.",
        category: "romantic"
    },
    {
        id: 17,
        name: "enchanting elegance",
        price: 1699,
        image: "assets/17.webp",
        description: "Fresh wildflowers straight from the garden.",
        category: "Elegant"
    },
    {
        id: 18,
        name: "whimsical wonder",
        price: 1699,
        image: "assets/18.webp",
        description: "Fresh wildflowers straight from the garden.",
        category: "Casual"
    },
    {
        id: 19,
        name: "floral fantasy",
        price: 1699,
        image: "assets/19.webp",
        description: "Fresh wildflowers straight from the garden.",
        category: "romantic"
    },
    {
        id: 20,
        name: "garden gala",
        price: 1699,
        image: "assets/20.webp",
        description: "Fresh wildflowers straight from the garden.",
        category: "Casual"
    },
    {
        id: 21,
        name: "blooming bliss",
        price: 1699,
        image: "assets/21.webp",
        description: "Fresh wildflowers straight from the garden.",
        category: "Casual"
    },
    {
        id: 22,
        name: "petal perfection",
        price: 1699,
        image: "assets/22.webp",
        description: "Fresh wildflowers straight from the garden.",
        category: "Elegant"
    },
    {
        id: 23,
        name: "serenade of scents",
        price: 1699,
        image: "assets/23.webp",
        description: "Fresh wildflowers straight from the garden.",
        category: "Casual"        
    },
    {
        id: 24,
        name: "floral fiesta",
        price: 1699,
        image: "assets/24.webp",
        description: "Fresh wildflowers straight from the garden.",
        category: "Birthday"
    },
    {
        id: 25,
        name: "lavish lavender",
        price: 1699,
        image: "assets/25.webp",
        description: "Fresh wildflowers straight from the garden.",
        category: "Elegant"     
    },
    {
        id: 26,
        name: "daisy delight",
        price: 1699,
        image: "assets/26.webp",
        description: "Fresh wildflowers straight from the garden.",
        category: "Birthday"   
    },
    {
        id: 27,
        name: "rose radiance",
        price: 1699,
        image: "assets/27.webp",
        description: "Fresh wildflowers straight from the garden.",
        category: "Romantic"
    },
    {
        id: 28,
        name: "tulip treasure",
        price: 1699,
        image: "assets/28.webp",
        description: "Fresh wildflowers straight from the garden.",
        category: "Elegant"
    },
    {
        id: 29,
        name: "orchid opulence",
        price: 1699,
        image: "assets/29.webp",
        description: "Fresh wildflowers straight from the garden.",
        category: "Elegant"
    },
    {
        id: 30,
        name: "sunset serenade",
        price: 1699,
        image: "assets/30.webp",
        description: "Fresh wildflowers straight from the garden.",
        category: "Romantic"
    }


];


let cart = [];
let currentCategory = 'all';
let searchTerm = '';
let maxPrice = 2500;
let occasionFilter = 'all';
let wishlist = new Set();

const productGrid = document.getElementById('product-grid');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const cartCountElement = document.getElementById('cart-count');
const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.querySelector('.cart-overlay');
const searchInput = document.getElementById('search-input');
const priceRange = document.getElementById('price-range');
const priceOutput = document.getElementById('price-output');
const occasionSelect = document.getElementById('occasion-filter');
const flowerSelect = document.getElementById('flower-select');
const wrapSelect = document.getElementById('wrap-select');
const messageInput = document.getElementById('message-input');
const previewFlower = document.getElementById('preview-flower');
const previewWrap = document.getElementById('preview-wrap');
const previewMessage = document.getElementById('preview-message');
const previewPrice = document.getElementById('preview-price');
const customizeBtn = document.getElementById('customize-btn');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const orderStatus = document.getElementById('order-status');

function init() {
    setupCategoryFilters();
    setupSearchFilters();
    setupProductInteractions();
    setupCustomizer();
    setupLightbox();
    setupScrollAnimations();
    setupRipple();
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

function setupSearchFilters() {
    if (searchInput) {
        searchInput.addEventListener('input', (event) => {
            searchTerm = event.target.value.trim().toLowerCase();
            renderProducts();
        });
    }

    if (priceRange && priceOutput) {
        maxPrice = Number(priceRange.value);
        priceOutput.textContent = `INR ${maxPrice}`;
        priceRange.addEventListener('input', (event) => {
            maxPrice = Number(event.target.value);
            priceOutput.textContent = `INR ${maxPrice}`;
            renderProducts();
        });
    }

    if (occasionSelect) {
        occasionSelect.addEventListener('change', (event) => {
            occasionFilter = event.target.value;
            renderProducts();
        });
    }
}

function setupProductInteractions() {
    if (!productGrid) {
        return;
    }

    productGrid.addEventListener('click', (event) => {
        const wishlistButton = event.target.closest('.wishlist-btn');
        const addButton = event.target.closest('.add-btn');

        if (wishlistButton) {
            const id = Number(wishlistButton.dataset.id);
            if (wishlist.has(id)) {
                wishlist.delete(id);
            } else {
                wishlist.add(id);
            }
            renderProducts();
            return;
        }

        if (addButton) {
            const id = Number(addButton.dataset.id);
            addToCart(id);
        }
    });
}

function setupCustomizer() {
    if (!flowerSelect || !wrapSelect || !previewFlower || !previewWrap || !previewMessage || !previewPrice) {
        return;
    }

    const updatePreview = () => {
        const flowerOption = flowerSelect.options[flowerSelect.selectedIndex];
        const wrapOption = wrapSelect.options[wrapSelect.selectedIndex];
        const flowerName = flowerOption.value;
        const wrapName = wrapOption.value;
        const flowerPrice = Number(flowerOption.dataset.price || 0);
        const wrapPrice = Number(wrapOption.dataset.price || 0);
        const total = flowerPrice + wrapPrice;

        previewFlower.textContent = flowerName;
        previewWrap.textContent = `Wrap: ${wrapName}`;
        previewMessage.textContent = messageInput && messageInput.value
            ? `Message: \"${messageInput.value}\"`
            : 'Message: \"Write something sweet...\"';
        previewPrice.textContent = `INR ${total}`;
    };

    flowerSelect.addEventListener('change', updatePreview);
    wrapSelect.addEventListener('change', updatePreview);
    if (messageInput) {
        messageInput.addEventListener('input', updatePreview);
    }

    if (customizeBtn) {
        customizeBtn.addEventListener('click', () => {
            const flowerOption = flowerSelect.options[flowerSelect.selectedIndex];
            const wrapOption = wrapSelect.options[wrapSelect.selectedIndex];
            const flowerName = flowerOption.value;
            const wrapName = wrapOption.value;
            const flowerPrice = Number(flowerOption.dataset.price || 0);
            const wrapPrice = Number(wrapOption.dataset.price || 0);
            const total = flowerPrice + wrapPrice;
            const note = messageInput ? messageInput.value.trim() : '';

            const customProduct = {
                id: Date.now(),
                name: `Custom: ${flowerName}`,
                price: total,
                image: "assets/hero.png",
                description: note ? `Wrap: ${wrapName}. Note: ${note}` : `Wrap: ${wrapName}.`,
                category: "custom"
            };

            cart.push(customProduct);
            updateCartUI();
            toggleCart(true);
        });
    }

    updatePreview();
}

function setupLightbox() {
    if (!lightbox || !lightboxImage) {
        return;
    }

    document.querySelectorAll('.gallery-image').forEach(image => {
        image.addEventListener('click', () => {
            lightboxImage.src = image.src;
            lightbox.classList.add('active');
        });
    });

    const closeLightbox = () => {
        lightbox.classList.remove('active');
    };

    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox || event.target.classList.contains('lightbox-close')) {
            closeLightbox();
        }
    });
}

function setupScrollAnimations() {
    const revealElements = document.querySelectorAll('.reveal, .slide-in');
    if (!('IntersectionObserver' in window) || revealElements.length === 0) {
        revealElements.forEach(el => el.classList.add('in-view'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, { threshold: 0.2 });

    revealElements.forEach(el => observer.observe(el));
}

function setupRipple() {
    document.addEventListener('click', (event) => {
        const target = event.target.closest('.ripple');
        if (!target) {
            return;
        }
        const circle = document.createElement('span');
        const diameter = Math.max(target.clientWidth, target.clientHeight);
        const radius = diameter / 2;
        const rect = target.getBoundingClientRect();
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - rect.left - radius}px`;
        circle.style.top = `${event.clientY - rect.top - radius}px`;
        circle.classList.add('ripple-effect');

        const existing = target.querySelector('.ripple-effect');
        if (existing) {
            existing.remove();
        }
        target.appendChild(circle);
    });
}

function normalizeCategory(product) {
    const rawCategory = product.category || product.cartegory || '';
    return String(rawCategory).toLowerCase();
}

function renderProducts() {
    if (!productGrid) {
        return;
    }
    const filteredProducts = products.filter(product => {
        const productCategory = normalizeCategory(product);
        const matchesCategory = currentCategory === 'all' || productCategory === currentCategory;
        const matchesOccasion = occasionFilter === 'all' || productCategory === occasionFilter;
        const matchesSearch = !searchTerm || product.name.toLowerCase().includes(searchTerm) || product.description.toLowerCase().includes(searchTerm);
        const matchesPrice = product.price <= maxPrice;
        return matchesCategory && matchesOccasion && matchesSearch && matchesPrice;
    });

    if (filteredProducts.length === 0) {
        productGrid.innerHTML = '<div class="empty-state">No bouquets match your filters.</div>';
        return;
    }

    productGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card reveal">
            <button class="wishlist-btn ${wishlist.has(product.id) ? 'active' : ''}" data-id="${product.id}">
                <i class="fas fa-heart"></i>
            </button>
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <div class="product-meta">
                    <h3 class="product-title">${product.name}</h3>
                </div>
                <p class="product-desc">${product.description}</p>
                <div class="product-price">INR ${product.price}</div>
                <button class="add-btn ripple" data-id="${product.id}">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');

    setupScrollAnimations();
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
                    <span class="item-price">INR ${item.price}</span>
                    <button class="item-remove" onclick="removeFromCart(${index})">Remove</button>
                </div>
            </div>
        `).join('');
    }

    // Update total
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotalElement.textContent = `INR ${total}`;
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

    if (orderStatus) {
        orderStatus.classList.add('active', 'loading');
        orderStatus.classList.remove('success');
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
        message += `- ${name} (x${details.count}) - INR ${itemTotal}%0A`;
    });

    message += `%0A*Total Price: INR ${total}*`;
    message += "%0A%0APlease confirm my order.";

    // Replace with the actual business number. Using a dummy number for now.
    const phoneNumber = "919994588076";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    setTimeout(() => {
        if (orderStatus) {
            orderStatus.classList.remove('loading');
            orderStatus.classList.add('success');
        }
        window.open(whatsappUrl, '_blank');
        setTimeout(() => {
            if (orderStatus) {
                orderStatus.classList.remove('active', 'success');
            }
        }, 1200);
    }, 600);
}

// Close cart when clicking outside
if (cartOverlay) {
    cartOverlay.addEventListener('click', () => toggleCart(false));
}

init();


