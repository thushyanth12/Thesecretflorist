const products = [
    {
        id: 1,
        name: "Rose Royal indulgence",
        price: 1499,
        image: "assets/1.webp", // Path relative to public folder
        description: "A premium bouquet of roses paired with chocolates for a rich, heartfelt surprise.",
        category: "Romantic"
        
    },
    {
        id: 2,
        name: "Blush Harmony Box",
        price: 3000,
        image: "assets/2.webp",
        description: "Soft pastel blooms and sweet treats arranged for elegant celebrations.",
        category: "Birthday"
    },
    {
        id: 3,
        name: "Midnight Bloom Luxe",
        price: 1500,
        image: "assets/3.webp",
        description: "Bold florals with premium accents, designed for a modern and sophisticated gift.",
        category: "Elegant"
    },
    {
        id: 4,
        name: "Healer’s Honor Bouquet",
        price: 2300,
        image: "assets/4.webp",
        description: "A thoughtful floral arrangement crafted especially to appreciate and celebrate doctors.",
        category: "Birthday"
    },
    {
        id: 5,
        name: "Orchid Bliss Surprise",
        price: 1999,
        image: "assets/5.webp",
        description: "Delicate pink orchids paired with chocolates and gifts for a charming celebration.",
        category: "Romantic"
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
        price: 1699,
        image: "assets/7.webp",
        description: "Hand-wrapped red roses crafted to mark unforgettable moments of love..",
        category: "Casual"

    },
    {
        id: 8,
        name: "Heart of a hundred roses",
        price: 1699,
        image: "assets/8.webp",
        description: "A grand heart-shaped arrangement of red roses, made to express deep devotion.",
        category: "Casual"
    },
    {
        id: 9,
        name: "Hot Wheels Fire",
        price: 1699,
        image: "assets/9.webp",
        description: "A bold Hot Wheels surprise wrapped with vibrant blooms and treats.",
        category: "Casual"
    },
    {
        id: 10,
        name: "Speed & Sparkle Delight",
        price: 1699,
        image: "assets/10.webp",
        description: "An exciting fusion of Hot Wheels fun and colorful floral charm.",
        category: "Casual"
    },
    {
        id: 11,
        name: "Serene Blue Bliss",
        price: 1699,
        image: "assets/11.webp",
        description: "Elegant blue florals paired with balloons for a calm, graceful surprise..",
        category: "Casual"
    },
    {
        id: 12,
        name: "Blush celebration box",
        price: 1699,
        image: "assets/12.webp",
        description: "Soft pink florals and balloons crafted for joyful, heartfelt moments.",
        category: "Casual"
    },
    {
        id: 13,
        name: "Ballooned Blossom Surprise",
        price: 2800,
        image: "assets/13.webp",
        description: "A cheerful floral box accented with balloons, perfect for joyful celebrations..",
        category: "Casual"
    },
    {
        id: 14,
        name: "Azure Romantic Crate",
        price: 1500,
        image: "assets/14.webp",
        description: "Elegant blue and white blooms styled with gourmet treats in a rustic box.",
        category: "Casual"
    },
    {
        id: 15,
        name: "Heirloom Petal Mandala",
        price: 700,
        image: "assets/15.webp",
        description: "An intricate circular floral design crafted as a timeless showpiece..",
        category: "Casual"
    },
    {
        id: 16,
        name: "Money Bouquet",
        price: 3500,
        image: "assets/16.webp",
        description: "A bouqeut full of Rupees.",
        category: "romantic"
    },

    {
        id: 18,
        name: "Forever us Boquet ",
        price: 3800,
        image: "assets/18.webp",
        description: "Romantic red roses blended with photos, chocolates, and a soft keepsake for lasting memories..",
        category: "Casual"
    },
    {
        id: 19,
        name: "Memories in bloom",
        price: 1699,
        image: "assets/19.webp",
        description: "A personalized photo bouquet woven with fresh florals to celebrate cherished moments..",
        category: "romantic"
    },
    {
        id: 21,
        name: "Golden Heart Indulgence",
        price: 1699,
        image: "assets/21.webp",
        description: "A luxurious heart-shaped arrangement of red roses and Ferrero Rocher chocolates.",
        category: "Casual"
    },
    {
        id: 22,
        name: "Velvet Rose Noir",
        price: 1699,
        image: "assets/22.webp",
        description: "Classic red roses wrapped in elegant black for a bold, timeless expression of love.",
        category: "Elegant"
    },
    {
        id: 23,
        name: "Purple Sweet Symphony",
        price: 1699,
        image: "assets/23.webp",
        description: "Soft florals paired with Cadbury Dairy Milk chocolates for a sweet and charming surprise..",
        category: "Casual"        
    },
    {
        id: 24,
        name: "Kinder Joy Celebration Wrap",
        price: 1699,
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
        price: 1699,
        image: "assets/26.webp",
        description: "An adorable arrangement of plush teddies crafted to spread smiles and warmth..",
        category: "Birthday"   
    },
    {
        id: 27,
        name: "Crimson Chocolate Charm",
        price: 1699,
        image: "assets/27.webp",
        description: "Red roses paired with chocolate sticks for a rich and romantic surprise..",
        category: "Romantic"
    },
    {
        id: 28,
        name: "Lily & Rose Symphony",
        price: 1699,
        image: "assets/28.webp",
        description: "Elegant white lilies and roses arranged for timeless beauty and celebration..",
        category: "Elegant"
    },
    {
        id: 29,
        name: "Chocolate Rose Indulgence",
        price: 1699,
        image: "assets/29.webp",
        description: "A rich bouquet of chocolates and red roses crafted for sweet, romantic moments..",
        category: "Elegant"
    },
    {
        id: 30,
        name: "Pink Princess Pamper Box",
        price: 1699,
        image: "assets/30.webp",
        description: "A charming pink-themed gift bouquet with beauty treats and floral accents..",
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

    let message = "Hello The Secret Florist! I would like to order the following:-sunset serenade (x1) - INR 1699 ,Total price: INR 1699 ,please confirm my order";
    

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
        message += `- ${name} (x${details.count}) - INR ${itemTotal}`;
    });

    message += `Total Price: INR ${total}`;
    message += "Please confirm my order.";

    // Replace with the actual business number. Using a dummy number for now.
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

init();


