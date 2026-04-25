# PowerGenX - Premium Peptides Website

A modern, professional website template for PowerGenX peptides. Built with clean HTML, CSS, and JavaScript with no dependencies required.

## 📁 Project Structure

```
powergenx-site/
├── index.html           # Homepage
├── products.html        # Products listing
├── product.html         # Product detail page
├── about.html          # About us page
├── contact.html        # Contact form page
│
├── css/
│   └── styles.css      # Main stylesheet
│
├── js/
│   └── script.js       # JavaScript functionality
│
└── assets/
    └── (your logo and images here)
```

## 🎨 Color Scheme

Based on PowerGenX branding:
- **Primary**: `#0b2a3c` (Dark Navy)
- **Secondary**: `#123a5c` (Medium Navy)
- **Accent**: `#ff6a00` (Orange)
- **Teal**: `#2bb3a3` (Teal)
- **Light**: `#f4f7fa` (Light Background)

## 🚀 Features

✅ **Fully Responsive Design** - Works perfectly on mobile, tablet, and desktop
✅ **Professional Layout** - Modern, clean, and premium feel
✅ **Multiple Pages** - Home, Products, Product Details, About, Contact
✅ **Mobile Menu** - Hamburger menu for mobile devices
✅ **Product Gallery** - Product showcase with hover effects
✅ **FAQ Accordion** - Interactive FAQ section
✅ **Contact Form** - Functional contact form with validation
✅ **Smooth Animations** - CSS animations and transitions throughout
✅ **SEO Friendly** - Proper meta tags and semantic HTML
✅ **Easy to Customize** - Well-organized CSS with variables

## 📝 Quick Start

1. **Clone or download** the repository
2. **Replace logo** - Add your PowerGenX logo to `/assets/`
3. **Customize content** - Update product names, descriptions, and prices in HTML files
4. **Update colors** - Modify CSS variables in `css/styles.css`
5. **Open `index.html`** in your browser to preview

### No Build Process Needed!
Simply open `index.html` in your browser or upload to a web server.

## 🛠️ Customization Guide

### Update Colors
Edit the CSS variables at the top of `css/styles.css`:

```css
:root {
    --primary: #0b2a3c;
    --secondary: #123a5c;
    --accent: #ff6a00;
    --teal: #2bb3a3;
    /* ... */
}
```

### Update Products
Edit product data in `js/script.js`:

```javascript
const products = {
    retatutide: {
        name: 'RETATUTIDE',
        price: '€149.99',
        purity: '99.8%',
        quantity: '10mg per vial'
    },
    // Add more products here
};
```

### Update Contact Information
Edit contact details in `contact.html`:

```html
<p><a href="mailto:info@powergenx.nl">info@powergenx.nl</a></p>
<p><a href="tel:+31612345678">+31 6 123 45 678</a></p>
```

## 📱 Pages Included

1. **index.html** - Homepage with hero section, features, products preview
2. **products.html** - Complete product listing with 6+ products
3. **product.html** - Detailed product page with specs, reviews, FAQ
4. **about.html** - Company info, team, certifications, timeline
5. **contact.html** - Contact form and contact information

## ⚙️ JavaScript Features

- Mobile hamburger menu
- Product page dynamic loading
- Quantity selector
- Add to cart functionality (localStorage)
- Contact form validation
- FAQ accordion
- Smooth scrolling
- Active nav link highlighting
- Scroll animations

## 📦 What's Included

- **Responsive Grid Layouts** - Auto-adapting columns
- **Hover Effects** - Smooth transitions and transforms
- **Gradient Backgrounds** - Modern gradient overlays
- **Mobile First Design** - Optimized for all screen sizes
- **Accessibility** - Semantic HTML and proper labels
- **Performance** - No external dependencies or frameworks

## 🎯 Next Steps (Optional Enhancements)

Consider adding:
- 🛒 **E-commerce Integration** - Stripe or payment gateway
- 🌙 **Dark Mode Toggle** - Dark/light theme switcher
- 🔍 **Search Functionality** - Product search feature
- 📊 **Analytics** - Google Analytics integration
- 💬 **Live Chat** - Customer support widget
- 🎬 **Video Content** - Product demonstration videos
- 📧 **Newsletter** - Email subscription form

## 💾 Deployment

Deploy to any hosting service:

### Netlify
```bash
drag and drop the folder
```

### GitHub Pages
```bash
push to gh-pages branch
```

### Traditional Hosting
```bash
Upload via FTP to your server
```

## 📄 License

Free to use and modify for your PowerGenX business.

## 🤝 Support

For questions about customization or implementation:
- Check the HTML comments
- Review CSS variables at top of styles.css
- Inspect JavaScript comments in script.js

---

**Built with ❤️ for PowerGenX**

Ready to launch? Update the content and deploy! 🚀
