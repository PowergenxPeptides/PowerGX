## 📦 Installation

1. install node dependencies: ``npm install``
2. build to static site: ``npx next build``

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