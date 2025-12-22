# Quick Start Guide

Get Eduardo's Landscaping website running in 3 simple steps:

## 1. Install Dependencies
```bash
npm install
```

## 2. Run Development Server
```bash
npm run dev
```

## 3. Open Browser
Navigate to: **http://localhost:3000**

---

## Replace Images with Your Own

### Hero Slider Images (3 images)
1. Add images to `pics/` folder: `hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg`
2. Edit `lib/data/slides.ts`
3. Change URLs from Unsplash to `/pics/hero-X.jpg`

### Project Images (15 images)
1. Add images to `pics/` folder: `project-1.jpg` through `project-15.jpg`
2. Edit `lib/data/projects.ts`
3. Change URLs from Unsplash to `/pics/project-X.jpg`

**Recommended dimensions:**
- Hero: 1920x1080 (landscape)
- Projects: 800x450 (landscape)

---

## Customize Business Info

### Phone Number
Currently set to: **480-869-5216**

To change, update in these files:
- `lib/data/slides.ts` (hero CTAs)
- `components/layout/Navbar.tsx` (navbar CTAs)
- `components/sections/Contact.tsx` (contact cards)
- `components/ui/MobileStickyCTA.tsx` (mobile bar)
- `app/page.tsx` (JSON-LD schema)

### Services
Edit `lib/data/services.ts` to add/remove/modify services

---

## Build for Production
```bash
npm run build
npm start
```

---

## Deploy to Vercel
1. Push to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Deploy automatically

---

**Need help?** Check `SETUP.md` for detailed instructions or `README.md` for full documentation.
