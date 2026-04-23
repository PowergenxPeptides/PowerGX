# POWERGENX - Premium Ecommerce Website

A high-converting futuristic luxury biotech website built with Next.js, React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Premium Design**: Futuristic luxury biotech aesthetic with metallic text and glow effects
- **Brand Consistency**: Exact POWERGENX brand colors and identity preservation
- **Mobile-First**: Responsive design optimized for elite mobile experience
- **Performance**: Fast loading with optimized animations and interactions
- **SEO Ready**: Built with Next.js for optimal search engine performance
- **TypeScript**: Full type safety for maintainable code
- **Animations**: Smooth premium animations with Framer Motion

## 🎨 Brand Colors

- Black: `#050505`
- Dark Card: `#101010`
- Silver: `#C8CDD2`
- White: `#FFFFFF`
- Electric Blue: `#007BFF`
- Royal Blue: `#0B3D91`
- Cyan Glow: `#00D8FF`
- Orange CTA: `#FF6A00`

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel/Netlify

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd powergenx-next
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## 🏗 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Homepage component
├── components/
│   ├── Navbar.tsx           # Sticky navigation with mobile menu
│   ├── Hero.tsx             # Hero section with 3D vial effects
│   ├── TrustBar.tsx         # Trust indicators bar
│   ├── BestSellers.tsx      # Product grid with hover animations
│   ├── FeaturedStacks.tsx   # Premium bundle cards
│   ├── WhyChoosePowerGenX.tsx # Split layout features section
│   ├── Reviews.tsx          # Premium testimonial carousel
│   ├── EmailCapture.tsx     # Newsletter signup with animations
│   └── Footer.tsx           # Comprehensive footer with links
└── types/                   # TypeScript type definitions
```

## 🎯 Key Components

### Hero Section
- Premium 3D vial floating animations
- Dark futuristic particles background
- Biotech energy lines overlay
- Responsive headline with glow effects

### Product Cards
- Hover animations with lift effects
- Premium gradient backgrounds
- Rating systems and badges
- Mobile-optimized touch targets

### Animations
- Scroll-triggered reveals
- Floating particle effects
- Glow animations on hover
- Smooth transitions throughout

## 📱 Mobile Optimization

- Large touch targets (44px minimum)
- Optimized button sizes and spacing
- Fast loading with minimal animations on mobile
- Sticky mobile navigation
- Responsive grid layouts

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Netlify
1. Build command: `npm run build`
2. Publish directory: `out` (for static export) or `.next` (for SSR)

## 🔧 Customization

### Colors
Update brand colors in `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      'power-black': '#050505',
      // ... other colors
    }
  }
}
```

### Content
Update product data, testimonials, and content in respective component files.

### Animations
Modify animation timings and effects in component files using Framer Motion.

## 📈 Performance

- Optimized images and assets
- Minimal JavaScript bundle
- CSS-in-JS with Tailwind for optimal loading
- Lazy loading for components
- SEO optimized with Next.js metadata

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary to POWERGENX. All rights reserved.

## 📞 Support

For support or questions, contact the development team.

---

**Built with ❤️ for the elite performance community**