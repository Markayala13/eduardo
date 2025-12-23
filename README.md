# Eduardo's Landscaping - Premium Website

A production-ready, ultra-modern landscaping website with Revolution Slider-style hero animations and professional-level SEO optimization. Built with Next.js 14, TypeScript, GSAP, and Swiper.

**Live Site:** https://eduardolandscaping.com

## Features

### Design & UX
- **Revolution-Style Hero Slider**: Full-height hero with GSAP timelines, ken-burns effects, parallax, and autoplay progress bar
- **Smooth Animations**: GSAP ScrollTrigger animations throughout the site
- **Mobile-First Design**: Fully responsive with mobile sticky CTA bar
- **Performance Optimized**: Respects prefers-reduced-motion, disables heavy animations on low-end devices
- **Smooth Scrolling**: Lenis integration with anchor link support
- **Accessible**: WCAG AA compliant, keyboard navigation, proper ARIA attributes

### SEO & Performance
- **Professional SEO**: Complete metadata, Schema markup, OpenGraph, Twitter Cards
- **Static Export Ready**: Optimized for Hostinger/Vercel deployment
- **robots.txt & sitemap.xml**: Configured for search engine indexing
- **PWA Support**: manifest.json for mobile app installation
- **Core Web Vitals Optimized**: Target 90+ on PageSpeed Insights
- **Security Headers**: Configured via .htaccess

## Tech Stack

- Next.js 14.2.15 (App Router)
- TypeScript (strict mode)
- TailwindCSS
- GSAP 3.12.5 + @gsap/react 2.1.1
- Swiper 11.1.14
- Lenis 1.0.42 (smooth scroll)
- Lucide React (icons)

## Installation

1. **Install dependencies**:
```bash
npm install
```

Or use the exact versions:
```bash
npm install next@14.2.15 react@18.3.1 react-dom@18.3.1 typescript @types/node @types/react @types/react-dom tailwindcss postcss autoprefixer swiper@11.1.14 gsap@3.12.5 @gsap/react@2.1.1 @studio-freight/lenis@1.0.42 lucide-react@0.460.0 clsx tailwind-merge
```

2. **Run development server**:
```bash
npm run dev
```

3. **Open browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

## Building for Production

### Build Static Export (for Hostinger)

```bash
npm run build
```

This creates an `out/` folder with static HTML files ready for hosting.

### Build for Vercel (Alternative)

Simply push to your Git repository and Vercel will auto-deploy:

```bash
git push origin main
```

Or deploy manually:

```bash
npm install -g vercel
vercel --prod
```

## Deployment

### Option 1: Hostinger (Current Production)

The `hostinger/` folder contains a ready-to-upload build:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload to Hostinger**:
   - Log into Hostinger File Manager
   - Navigate to `public_html/`
   - Upload all files from `hostinger/` folder
   - Includes `.htaccess` for HTTPS, caching, and security

**See `hostinger/DEPLOYMENT-INSTRUCTIONS.md` for detailed steps**

### Option 2: Vercel (Alternative)

1. **Push to GitHub**:
   ```bash
   git push origin main
   ```

2. **Import in Vercel**:
   - Go to https://vercel.com
   - Click "Import Project"
   - Select your repository
   - Auto-deploys on every push

3. **Configure Domain**:
   - Add custom domain: `eduardolandscaping.com`
   - Vercel handles SSL automatically

**Note:** Remove `output: 'export'` from `next.config.js` for Vercel deployment (Vercel uses server-side rendering by default)

## Using Local Images

The project is configured to use Unsplash images by default. To use your local images from the `pics/` folder:

1. Open the data files:
   - `lib/data/slides.ts`
   - `lib/data/projects.ts`

2. Replace the Unsplash URLs with local paths:
```typescript
// Change from:
image: "https://images.unsplash.com/photo-..."

// To:
image: "/pics/your-image.jpg"
```

3. Update `next.config.js` if needed to handle local images.

## Project Structure

```
eduardo/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata & meta tags
│   ├── page.tsx            # Main page with Schema markup & sections
│   └── globals.css         # Global styles & Tailwind imports
├── components/
│   ├── analytics/
│   │   ├── GoogleAnalytics.tsx    # GA4 tracking component
│   │   └── GoogleTagManager.tsx   # GTM component
│   ├── layout/
│   │   ├── Navbar.tsx      # Fixed navbar with scroll detection
│   │   ├── Footer.tsx      # Site footer with Antoshkadev credit
│   │   └── SmoothScrollProvider.tsx  # Lenis integration
│   ├── sections/
│   │   ├── HeroSlider.tsx  # Main hero slider with Swiper
│   │   ├── SlideContent.tsx # Individual slide with GSAP
│   │   ├── Services.tsx    # Services grid with animations
│   │   ├── ProjectsCarousel.tsx # Projects with lightbox
│   │   ├── Contact.tsx     # Contact section with CTAs
│   │   └── ServingAreas.tsx # Areas served section
│   └── ui/
│       ├── Button.tsx      # Reusable button component
│       └── MobileStickyCTA.tsx # Bottom sticky bar
├── lib/
│   ├── data/
│   │   ├── slides.ts       # Hero slider data
│   │   ├── services.ts     # Services data
│   │   └── projects.ts     # Portfolio projects
│   └── utils/
│       ├── cn.ts           # Tailwind class merger
│       └── motion.ts       # GSAP & motion utilities
├── public/
│   ├── robots.txt          # Search engine crawling rules
│   ├── sitemap.xml         # Site structure for SEO
│   ├── manifest.json       # PWA configuration
│   ├── google-verification-example.html
│   ├── logo/               # Brand assets
│   ├── pics/               # Project images
│   └── video/              # Video assets
├── hostinger/              # Production-ready build for Hostinger
│   ├── .htaccess           # Server config (HTTPS, caching, security)
│   ├── index.html          # Built homepage
│   ├── robots.txt          # SEO file
│   ├── sitemap.xml         # SEO file
│   ├── manifest.json       # PWA file
│   ├── _next/              # Optimized JS/CSS
│   ├── DEPLOYMENT-INSTRUCTIONS.md
│   └── [other assets]
├── .env.example            # Environment variables template
├── package.json
├── next.config.js          # Next.js config with static export
├── tailwind.config.ts
├── tsconfig.json
├── SEO-SETUP-GUIDE.md      # Complete SEO configuration guide
└── RESUMEN-SEO-Y-DEPLOYMENT.md  # Spanish summary
```

## Customization

### Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: "#1F3D2B",    // Deep green
  accent: "#7CB342",     // Grass green
  charcoal: "#18181b",   // Text color
}
```

### Business Info
Update contact information in:
- `lib/data/slides.ts` (CTA links)
- `app/page.tsx` (JSON-LD schema)
- `components/layout/Navbar.tsx` (phone/text CTAs)
- `components/sections/Contact.tsx` (contact cards)

### Services
Edit `lib/data/services.ts` to add/remove/modify services.

### Projects
Edit `lib/data/projects.ts` to add/remove project images.

## Performance Notes

- Hero slider automatically disables ken-burns and parallax on:
  - Touch devices (mobile/tablet)
  - Devices with <4GB RAM
  - Users with prefers-reduced-motion enabled

- Lenis smooth scroll is disabled when prefers-reduced-motion is true

- First hero slide image is loaded with `priority={true}` for better LCP

## Accessibility

- Full keyboard navigation support
- ARIA labels on interactive elements
- Focus states on all clickable items
- Skip to main content link
- Respects prefers-reduced-motion
- Color contrast WCAG AA compliant

## SEO Configuration

### Professional-Level SEO Implemented

**Metadata & Tags** (`app/layout.tsx`):
- Complete Open Graph tags (Facebook, WhatsApp sharing)
- Twitter Cards for social media
- 20+ targeted keywords for landscaping Phoenix
- Canonical URLs
- Theme colors and PWA meta tags
- DNS prefetch for performance

**Schema Markup** (`app/page.tsx`):
- LocalBusiness structured data
- Complete service catalog (Lawn Mowing, Trimming, Cleanup, Weed Control)
- Business hours and contact information
- Service areas (Phoenix, Scottsdale, Tempe, Mesa, Glendale)
- Aggregate ratings (4.9/5 stars)
- Geolocation coordinates

**SEO Files**:
- `robots.txt` - Optimized crawling rules for Google, Bing
- `sitemap.xml` - Complete site structure with images
- `manifest.json` - PWA configuration for mobile

**Performance & Security** (`.htaccess`):
- Force HTTPS redirect
- Cache headers (1 year for images, 1 week for CSS/JS)
- Gzip compression
- Security headers (XSS protection, frame options)
- Custom 404 page

### SEO Keywords Targeted

Primary: "Phoenix landscaping", "lawn care Phoenix", "landscaping services Phoenix"

Secondary: "yard maintenance Phoenix", "professional landscaper Phoenix", "lawn mowing Phoenix", "landscape design Phoenix", "tree trimming Phoenix"

### Documentation

See `SEO-SETUP-GUIDE.md` for complete configuration instructions including Search Console setup and optimization strategies.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Credits

**Website:** Eduardo's Landscaping
**Development:** [Antoshkadev](https://antoshkadev.com)
**Live Site:** https://eduardolandscaping.com

---

© 2024 Eduardo's Landscaping. All rights reserved.
