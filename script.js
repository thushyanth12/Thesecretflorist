const products = [
    {
        id: 1,
        name: "The First step",
        price: 1800,
        image: "assets/child.webp", // Path relative to public folder
        description: "A bouquet for your baby's birthday.",
        category: "Birthday"
        
    },
    {
        id: 2,
        name: "Blush Harmony Box",
        price: 3000,
        image: "assets/one.webp",
        description: "Soft pastel blooms and sweet treats arranged for elegant celebrations.",
        category: "Casual"
    },
    {
        id: 3,
        name: "Midnight Bloom Luxe",
        price: 1500,
        image: "assets/three.webp",
        description: "Bold florals with premium accents, designed for a modern and sophisticated gift.",
        category: "Elegant"
    },
    {
        id: 4,
        name: "Healer's Honor Bouquet",
        price: 2300,
        image: "assets/four.webp",
        description: "A thoughtful floral arrangement crafted especially to appreciate and celebrate doctors.",
        category: "Birthday"
    },

    {
        id: 6,
        name: "Ivory Spring Vase",
        price: 1800,
        image: "assets/6.webp",
        description: "A refreshing mix of white blooms and buds arranged for natural elegance.",
        category: "Casual"
    },
    {
        id: 7,
        name: "Scarlet Signature Wrap",
        price: 2800,
        image: "assets/7.webp",
        description: "Hand-wrapped red roses crafted to mark unforgettable moments of love..",
        category: "Casual"

    },
    {
        id: 8,
        name: "Heart of a three hundred roses",
        price: 80000,
        image: "assets/8.webp",
        description: "A grand heart-shaped arrangement of red roses, made to express deep devotion.",
        category: "Casual"
    },
    {
        id: 9,
        name: "Hot Wheels Fire",
        price: 2800,
        image: "assets/nine.webp",
        description: "A bold Hot Wheels surprise wrapped with vibrant blooms and treats.",
        category: "Casual"
    },
  
    {
        id: 11,
        name: "Serene Blue Bliss",
        price: 700,
        image: "assets/eleven.webp",
        description: "Elegant blue florals paired with balloons for a calm, graceful surprise..",
        category: "Casual"
    },
    {
        id: 12,
        name: "Blush celebration box",
        price: 700,
        image: "assets/twelve.webp",
        description: "Soft pink florals and balloons crafted for joyful, heartfelt moments.",
        category: "Casual"
    },
    
    {
        id: 13,
        name: "Ballooned Blossom Surprise",
        price: 1400,
        image: "assets/thirteen.webp",
        description: "A cheerful floral box accented with balloons, perfect for joyful celebrations..",
        category: "Casual"
    },
    {
        id: 14,
        name: "Azure Romantic Crate",
        price: 1500,
        image: "assets/fourteen.webp",
        description: "Elegant blue and white blooms styled with gourmet treats in a rustic box.",
        category: "Casual"
    },
    {
        id: 15,
        name: "Heirloom Petal Mandala",
        price: 700,
        image: "assets/fifteen.webp",
        description: "An intricate circular floral design crafted as a timeless showpiece..",
        category: "Casual"
    },
    {
        id: 16,
        name: "Money Bouquet",
        price: 3500,
        image: "assets/sixteen.webp",
        description: "A bouqeut full of Rupees.",
        category: "romantic"
    },

    {
        id: 18,
        name: "Forever us Boquet ",
        price: 3800,
        image: "assets/forever.webp",
        description: "Romantic red roses blended with photos, chocolates, and a soft keepsake for lasting memories..",
        category: "Casual"
    },
    {
        id: 19,
        name: "Memories in bloom",
        price: 1000,
        image: "assets/nineteen.webp",
        description: "A personalized photo bouquet woven with fresh florals to celebrate cherished moments..",
        category: "romantic"
    },
    {
        id: 20,
        name: "Ethereal Pastel Garden",
        price: 3200,
        image: "assets/twenty.webp",
        description: "A dreamlike collection of soft-hued blooms, perfect for expressing pure affection.",
        category: "Elegant"
    },
    {
        id: 21,
        name: "Golden Heart Indulgence",
        price: 4200,
        image: "assets/21.webp",
        description: "A luxurious heart-shaped arrangement of red roses and Ferrero Rocher chocolates.",
        category: "Casual"
    },
    {
        id: 22,
        name: "Velvet Rose Noir",
        price: 1200,
        image: "assets/22.webp",
        description: "Classic red roses wrapped in elegant black for a bold, timeless expression of love.",
        category: "Elegant"
    },
    {
        id: 23,
        name: "Purple Sweet Symphony",
        price: 2500,
        image: "assets/23.webp",
        description: "Soft florals paired with Cadbury Dairy Milk chocolates for a sweet and charming surprise..",
        category: "Casual"        
    },
    {
        id: 24,
        name: "Kinder Joy Celebration Wrap",
        price: 1200,
        image: "assets/24.webp",
        description: "A fun and delightful bouquet filled with Kinder Joy treats, perfect for cheerful gifting..",
        category: "Birthday"
    },
    {
        id: 25,
        name: "Blush Tulip Whisper",
        price: 1699,
        image: "assets/25.webp",
        description: "Soft pink and white tulips wrapped in elegance for a gentle, graceful gesture..",
        category: "Elegant"     
    },
    {
        id: 26,
        name: "Cuddle Carnival Bouquet",
        price: 3800,
        image: "assets/26.webp",
        description: "An adorable arrangement of plush teddies crafted to spread smiles and warmth..",
        category: "Birthday"   
    },
    {
        id: 27,
        name: "Crimson Chocolate Charm",
        price: 3800,
        image: "assets/27.webp",
        description: "Red roses paired with chocolate sticks for a rich and romantic surprise..",
        category: "Romantic"
    },
    {
        id: 28,
        name: "Lily & Rose Symphony",
        price: 4500,
        image: "assets/28.webp",
        description: "Elegant white lilies and roses arranged for timeless beauty and celebration..",
        category: "Elegant"
    },
    {
        id: 29,
        name: "Chocolate Rose Indulgence",
        price: 1300,
        image: "assets/29.webp",
        description: "A rich bouquet of chocolates and red roses crafted for sweet, romantic moments..",
        category: "Elegant"
    },
    {
        id: 30,
        name: "Pink Princess Pamper Box",
        price: 2200,
        image: "assets/30.webp",
        description: "A charming pink-themed gift bouquet with beauty treats and floral accents..",
        category: "Romantic"
    },
    {
        id:31,
        name:"The Bouquet of Strong",
        price:1500,
        image:"assets/31.webp",
        description:"A bouquet of strong and powerful women",
        category:"Elegant"
    },
    {
        id:32,
        name:"Bouquet of Beda",
        price:700,
        image:"assets/beda.webp",
        description:"A bouquet  contains Milk Beda",
        category:"Casual"   
    },
    {
        id:33,
        name:"Red Rose Bouquet",
        price:1200,
        image:"assets/flo.webp",
        description:"A timeless arrangement of deep red roses, perfect for love and special moments.",
        category:"Casual"   
    },
    {
        id:34,
        name:"Red Rose Bouquet with cake",
        price:1800,
        image:"assets/combo.webp",
        description:"Fresh red roses paired with a delicious cake to make celebrations extra special.",
        category:"Casual"   
    }


];


// Cart is now an array of { product, quantity } objects
let cart = [];
let currentCategory = 'all';
let searchTerm = '';
let maxPrice = 100000;
let occasionFilter = 'all';
let wishlist = new Set();
let selectedProductForModal = null;
let modalQuantity = 1;

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
const productModal = document.getElementById('product-modal');
const productModalOverlay = document.getElementById('product-modal-overlay');
const previewFlower = document.getElementById('preview-flower');
const previewWrap = document.getElementById('preview-wrap');
const previewMessage = document.getElementById('preview-message');
const previewPrice = document.getElementById('preview-price');
const customizeBtn = document.getElementById('customize-btn');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const orderStatus = document.getElementById('order-status');

function init() {
    setupPageLoader();
    setupCategoryFilters();
    setupSearchFilters();
    setupProductInteractions();
    setupCustomizer();
    setupLightbox();
    setupProductModal();
    setupScrollAnimations();
    setupRipple();
    setupNavbarScroll();
    setupScrollToTop();
    createToastContainer();
    renderProducts();
    updateCartUI();
}

// ================== TOAST NOTIFICATION ==================
function createToastContainer() {
    if (document.getElementById('toast-container')) return;
    const container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
}

function showToast(productName, productImage) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'cart-toast';
    toast.innerHTML = `
        <div class="toast-icon">
            <img src="${productImage}" alt="${productName}">
        </div>
        <div class="toast-body">
            <span class="toast-check"><i class="fas fa-check-circle"></i></span>
            <span class="toast-text"><strong>${productName}</strong> added to cart</span>
        </div>
        <button class="toast-view-cart" onclick="toggleCart(true); this.closest('.cart-toast').remove();">
            View Cart
        </button>
        <button class="toast-close" onclick="this.closest('.cart-toast').remove();">&times;</button>
    `;
    container.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => {
        toast.classList.add('show');
    });

    // Auto-remove after 3.5 seconds
    setTimeout(() => {
        toast.classList.add('hiding');
        setTimeout(() => toast.remove(), 400);
    }, 3500);
}

// ================== PAGE LOADER ==================
function setupPageLoader() {
    const loader = document.getElementById('page-loader');
    if (!loader) return;
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 800);
    });
    
    // Fallback: hide loader after 3 seconds max
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 3000);
}

// ================== SCROLL TO TOP ==================
function setupScrollToTop() {
    const scrollTopBtn = document.getElementById('scroll-top');
    if (!scrollTopBtn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function setupNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
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
    if (!flowerSelect || !wrapSelect || !previewFlower || !previewWrap || !previewMessage) {
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
        if (previewPrice) {
            previewPrice.textContent = `INR ${total}`;
        }
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

            addProductToCart(customProduct, 1);
            showToast(customProduct.name, customProduct.image);
        });
    }

    updatePreview();
}

function setupLightbox() {
    if (!lightbox || !lightboxImage) {
        return;
    }

    // Use event delegation for dynamic images
    document.addEventListener('click', (event) => {
        const target = event.target.closest('.gallery-image, .product-image');
        if (target && target.tagName === 'IMG') {
            lightboxImage.src = target.src;
            lightbox.classList.add('active');
        }
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

function setupProductModal() {
    // Close modal with ESC key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeProductModal();
        }
    });

    // Close modal if clicking on overlay
    if (productModalOverlay) {
        productModalOverlay.addEventListener('click', (event) => {
            if (event.target === productModalOverlay) {
                closeProductModal();
            }
        });
    }
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
    }, { threshold: 0.15 });

    revealElements.forEach(el => observer.observe(el));
}

function setupRipple() {
    document.addEventListener('click', (event) => {
        const target = event.target.closest('.ripple');
        if (!target) {
            return;
        }
        
        // Don't apply ripple to quantity buttons
        if (event.target.closest('.qty-btn')) {
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
        productGrid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search" style="font-size: 2rem; opacity: 0.3; margin-bottom: 0.5rem; color: var(--accent-color);"></i>
                <p>No bouquets match your filters.</p>
            </div>`;
        return;
    }

    productGrid.innerHTML = filteredProducts.map((product, index) => `
        <div class="product-card reveal" style="--card-index: ${index}">
            <button class="wishlist-btn ${wishlist.has(product.id) ? 'active' : ''}" data-id="${product.id}">
                <i class="fas fa-heart"></i>
            </button>
            <img src="${product.image}" alt="${product.name}" class="product-image gallery-image" loading="lazy">
            <div class="product-info">
                <div class="product-meta">
                    <h3 class="product-title">${product.name}</h3>
                </div>
                <p class="product-desc">${product.description}</p>
                <div class="product-price">INR ${product.price.toLocaleString('en-IN')}</div>
                <button class="add-btn ripple" data-id="${product.id}">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
            </div>
        </div>
    `).join('');

    setupScrollAnimations();
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        selectedProductForModal = product;
        modalQuantity = 1; // Reset quantity for new modal
        showProductModal(product);
    }
}

function showProductModal(product) {
    const modalProductImage = document.getElementById('modal-product-image');
    const modalProductName = document.getElementById('modal-product-name');
    const modalProductDescription = document.getElementById('modal-product-description');
    const modalProductPrice = document.getElementById('modal-product-price');

    modalProductImage.src = product.image;
    modalProductImage.alt = product.name;
    modalProductName.textContent = product.name;
    modalProductDescription.textContent = product.description;
    modalProductPrice.textContent = `INR ${product.price.toLocaleString('en-IN')}`;

    // Update quantity display
    const qtyDisplay = document.getElementById('modal-qty-value');
    if (qtyDisplay) qtyDisplay.textContent = modalQuantity;

    if (productModal && productModalOverlay) {
        productModal.classList.add('active');
        productModalOverlay.classList.add('active');
    }
}

function closeProductModal() {
    if (productModal && productModalOverlay) {
        productModal.classList.remove('active');
        productModalOverlay.classList.remove('active');
    }
    selectedProductForModal = null;
    modalQuantity = 1;
}

// Modal quantity controls
function modalQtyMinus() {
    if (modalQuantity > 1) {
        modalQuantity--;
        const qtyDisplay = document.getElementById('modal-qty-value');
        if (qtyDisplay) qtyDisplay.textContent = modalQuantity;
    }
}

function modalQtyPlus() {
    if (modalQuantity < 99) {
        modalQuantity++;
        const qtyDisplay = document.getElementById('modal-qty-value');
        if (qtyDisplay) qtyDisplay.textContent = modalQuantity;
    }
}

// Add product to cart with quantity support
function addProductToCart(product, quantity) {
    const existingIndex = cart.findIndex(item => item.product.id === product.id);
    if (existingIndex !== -1) {
        cart[existingIndex].quantity += quantity;
    } else {
        cart.push({ product: product, quantity: quantity });
    }
    updateCartUI();

    // Bump animation on cart count
    cartCountElement.classList.add('bump');
    setTimeout(() => cartCountElement.classList.remove('bump'), 400);
}

function confirmAddToCart() {
    if (selectedProductForModal) {
        addProductToCart(selectedProductForModal, modalQuantity);
        showToast(selectedProductForModal.name, selectedProductForModal.image);
        closeProductModal();
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function updateCartQty(index, delta) {
    if (!cart[index]) return;
    cart[index].quantity += delta;

    // If quantity reaches 0, remove the item and do a full re-render
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
        updateCartUI();
        return;
    }

    // --- Targeted in-place update (no flicker) ---
    const cartItem = cartItemsContainer.querySelector(`.cart-item[data-index="${index}"]`);
    if (cartItem) {
        // Update only the quantity number
        const qtySpan = cartItem.querySelector('.qty-value');
        if (qtySpan) qtySpan.textContent = cart[index].quantity;

        // Update the item price
        const priceSpan = cartItem.querySelector('.item-price');
        if (priceSpan) priceSpan.textContent = `INR ${(cart[index].product.price * cart[index].quantity).toLocaleString('en-IN')}`;
    }

    // Update cart count badge and total
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElement.textContent = totalItems;
    const total = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    cartTotalElement.textContent = `INR ${total.toLocaleString('en-IN')}`;
}

function updateCartUI() {
    // Update count — total number of items
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElement.textContent = totalItems;

    // Update items list
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart-msg">
                <i class="fas fa-basket-shopping"></i>
                <p>Your cart is empty</p>
            </div>`;
    } else {
        cartItemsContainer.innerHTML = cart.map((entry, index) => `
            <div class="cart-item" data-index="${index}">
                <img src="${entry.product.image}" alt="${entry.product.name}">
                <div class="item-details">
                    <span class="item-title">${entry.product.name}</span>
                    <span class="item-price">INR ${(entry.product.price * entry.quantity).toLocaleString('en-IN')}</span>
                    <div class="cart-qty-controls">
                        <button class="qty-btn" onclick="updateCartQty(${index}, -1)" aria-label="Decrease quantity">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="qty-value">${entry.quantity}</span>
                        <button class="qty-btn" onclick="updateCartQty(${index}, 1)" aria-label="Increase quantity">
                            <i class="fas fa-plus"></i>
                        </button>
                        <button class="item-remove" onclick="removeFromCart(${index})">
                            <i class="fas fa-trash-alt"></i> Remove
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Update total
    const total = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    cartTotalElement.textContent = `INR ${total.toLocaleString('en-IN')}`;
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
    const customMessage = messageInput ? messageInput.value.trim() : '';

    if (cart.length === 0 && !customMessage) {
        alert("Your cart is empty! Please add a bouquet or write a custom message.");
        return;
    }

    if (orderStatus) {
        orderStatus.classList.add('active', 'loading');
        orderStatus.classList.remove('success');
    }

    let message = "Hello The Secret Florist!\n\n";
    
    if (customMessage) {
        message += `*Custom Message/Request:* ${customMessage}\n\n`;
    }

    if (cart.length > 0) {
        message += "*Order Details:*\n";
        let total = 0;
        cart.forEach(entry => {
            const itemTotal = entry.product.price * entry.quantity;
            total += itemTotal;
            message += `- ${entry.product.name} (x${entry.quantity}) - INR ${itemTotal.toLocaleString('en-IN')}\n`;
        });

        message += `\n*Total Price: INR ${total.toLocaleString('en-IN')}*\n`;
    }

    message += "\nPlease confirm my order. Thank you!";

    const phoneNumber = "919994588076";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
        if (orderStatus) {
            orderStatus.classList.remove("loading");
            orderStatus.classList.add("success");
        }
        window.open(whatsappUrl, '_blank');
        setTimeout(() => {
            if (orderStatus) {
                orderStatus.classList.remove("active", "success");
            }
        }, 1200);
    }, 1200);
}

// Close cart when clicking outside
if (cartOverlay) {
    cartOverlay.addEventListener('click', () => toggleCart(false));
}

// Ensure DOM is fully loaded before initializing
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
