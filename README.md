# Eduardo's Landscaping - Premium Website

A production-ready, ultra-modern landscaping website with Revolution Slider-style hero animations, built with Next.js 14, TypeScript, GSAP, and Swiper.

## Features

- **Revolution-Style Hero Slider**: Full-height hero with GSAP timelines, ken-burns effects, parallax, and autoplay progress bar
- **Smooth Animations**: GSAP ScrollTrigger animations throughout the site
- **Mobile-First Design**: Fully responsive with mobile sticky CTA bar
- **Performance Optimized**: Respects prefers-reduced-motion, disables heavy animations on low-end devices
- **SEO Optimized**: Complete metadata, JSON-LD structured data for local business
- **Accessible**: WCAG AA compliant, keyboard navigation, proper ARIA attributes
- **Smooth Scrolling**: Lenis integration with anchor link support

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

```bash
npm run build
npm start
```

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
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles & Tailwind imports
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Fixed navbar with scroll detection
│   │   ├── Footer.tsx      # Site footer
│   │   └── SmoothScrollProvider.tsx  # Lenis integration
│   ├── sections/
│   │   ├── HeroSlider.tsx  # Main hero slider with Swiper
│   │   ├── SlideContent.tsx # Individual slide with GSAP
│   │   ├── Services.tsx    # Services grid with animations
│   │   ├── ProjectsCarousel.tsx # Projects with lightbox
│   │   └── Contact.tsx     # Contact section with CTAs
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
├── package.json
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
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

## SEO

- Optimized metadata in `app/layout.tsx`
- JSON-LD structured data for LocalBusiness
- Semantic HTML throughout
- Descriptive alt text on all images
- OpenGraph tags for social sharing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## License

Built for Eduardo's Landscaping. All rights reserved.
