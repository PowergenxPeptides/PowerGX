/* ================================
   MOBILE MENU FUNCTIONALITY
   ================================ */
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
});

/* ================================
   PRODUCT PAGE FUNCTIONALITY
   ================================ */

// Get URL parameters
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Product data
const products = {
    retatutide: {
        name: 'RETATUTIDE',
        title: 'RETATUTIDE',
        description: 'Advanced GLP-1 Receptor Agonist',
        price: '€149.99',
        purity: '99.8%',
        quantity: '10mg per vial'
    },
    hgh: {
        name: 'HGH FRAG 176-191',
        title: 'HGH FRAG 176-191',
        description: 'Human Growth Hormone Fragment',
        price: '€89.99',
        purity: '99.5%',
        quantity: '5mg per vial'
    },
    ghkcu: {
        name: 'GHK-CU',
        title: 'GHK-CU PEPTIDE',
        description: 'Copper Peptide Complex',
        price: '€119.99',
        purity: '99.3%',
        quantity: '10mg per vial'
    },
    melanotan: {
        name: 'MELANOTAN II',
        title: 'MELANOTAN II',
        description: 'Advanced Melanin Stimulator',
        price: '€99.99',
        purity: '99.7%',
        quantity: '10mg per vial'
    },
    bpc157: {
        name: 'BPC-157',
        title: 'BPC-157',
        description: 'Body Protective Compound',
        price: '€79.99',
        purity: '99.4%',
        quantity: '5mg per vial'
    },
    tb500: {
        name: 'TB-500',
        title: 'TB-500',
        description: 'Thymosin Beta-4 Peptide',
        price: '€89.99',
        purity: '99.6%',
        quantity: '5mg per vial'
    }
};

// Load product details if on product page
window.addEventListener('load', function() {
    const productId = getUrlParameter('id') || 'retatutide';
    const product = products[productId];

    if (product && document.getElementById('productName')) {
        document.getElementById('productName').textContent = product.name;
        document.getElementById('productTitle').textContent = product.title;
        document.getElementById('productPrice').textContent = product.price;
        
        // Update other elements if they exist
        const categoryEl = document.querySelector('.product-category');
        if (categoryEl) categoryEl.textContent = product.description;
    }
});

/* ================================
   QUANTITY SELECTOR
   ================================ */
const quantityInput = document.getElementById('quantity');
const decreaseBtn = document.getElementById('decreaseQty');
const increaseBtn = document.getElementById('increaseQty');

if (decreaseBtn) {
    decreaseBtn.addEventListener('click', function() {
        const currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });
}

if (increaseBtn) {
    increaseBtn.addEventListener('click', function() {
        const currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
    });
}

/* ================================
   ADD TO CART
   ================================ */
const addToCartBtn = document.getElementById('addToCartBtn');
if (addToCartBtn) {
    addToCartBtn.addEventListener('click', function() {
        const quantity = document.getElementById('quantity').value;
        const productName = document.getElementById('productTitle').textContent;
        
        // Store in local storage (cart simulation)
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const productId = getUrlParameter('id') || 'retatutide';
        const product = products[productId];
        
        cart.push({
            id: productId,
            name: productName,
            quantity: quantity,
            price: product.price
        });
        
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Show feedback
        alert(`${quantity}x ${productName} toegevoegd aan winkelwagen!`);
    });
}

/* ================================
   CONTACT FORM
   ================================ */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (name && email && subject && message) {
            alert(`Dank je wel ${name}! We ontvangen je bericht en reageren snel.`);
            contactForm.reset();
        } else {
            alert('Vul alstublieft alle verplichte velden in.');
        }
    });
}

/* ================================
   FAQ ACCORDION
   ================================ */
document.querySelectorAll('.faq-toggle').forEach(toggle => {
    toggle.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        const isVisible = answer.style.display === 'block';
        
        // Close all other answers
        document.querySelectorAll('.faq-answer').forEach(ans => {
            ans.style.display = 'none';
        });
        
        // Toggle current answer
        answer.style.display = isVisible ? 'none' : 'block';
    });
});

/* ================================
   SMOOTH SCROLL
   ================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

/* ================================
   ACTIVE NAV LINK
   ================================ */
document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (currentLocation.includes(href.split('/').pop())) {
            link.classList.add('active');
        }
    });
});

/* ================================
   SCROLL ANIMATIONS
   ================================ */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.product-card, .feature-card, .value-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

/* ================================
   UTILITY FUNCTIONS
   ================================ */

// Format price
function formatPrice(price) {
    return new Intl.NumberFormat('nl-NL', {
        style: 'currency',
        currency: 'EUR'
    }).format(price);
}

// Log page load
console.log('PowerGenX website loaded successfully! 🚀');
