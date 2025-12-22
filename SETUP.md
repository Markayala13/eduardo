# Setup Instructions

Follow these steps to get Eduardo's Landscaping website running on your machine.

## Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

Check your Node version:
```bash
node --version
```

If you need to install Node.js, download it from [nodejs.org](https://nodejs.org/)

## Step-by-Step Setup

### 1. Install Dependencies

Open your terminal in the project directory (`E:\PROYECTOS\eduardo`) and run:

```bash
npm install
```

This will install all required packages with the exact versions specified in `package.json`.

### 2. Run Development Server

Start the Next.js development server:

```bash
npm run dev
```

You should see output like:
```
▲ Next.js 14.2.15
- Local:        http://localhost:3000
- Ready in 2.5s
```

### 3. Open in Browser

Navigate to [http://localhost:3000](http://localhost:3000) in your web browser.

You should see the homepage with:
- ✅ Full-height hero slider with 3 slides
- ✅ Smooth animations and transitions
- ✅ Services section with 8 service cards
- ✅ Projects carousel with 15 images
- ✅ Contact section with CTA cards
- ✅ Mobile sticky CTA bar (visible on mobile screens)

### 4. Test Responsiveness

- Open Chrome DevTools (F12)
- Click the device toolbar icon (or Ctrl+Shift+M)
- Test different screen sizes:
  - Mobile: 375px, 414px
  - Tablet: 768px, 1024px
  - Desktop: 1440px, 1920px

### 5. Using Your Own Images

#### Replace Hero Slider Images

1. Place your hero images in the `pics/` folder
2. Name them: `hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg`
3. Edit `lib/data/slides.ts`:

```typescript
// Change this:
image: "https://images.unsplash.com/photo-..."

// To this:
image: "/pics/hero-1.jpg"
```

#### Replace Project Images

1. Place your project images in the `pics/` folder
2. Name them: `project-1.jpg`, `project-2.jpg`, etc.
3. Edit `lib/data/projects.ts` and replace URLs with `/pics/project-X.jpg`

**Important:** For best results, use images with these dimensions:
- Hero slides: 1920x1080 (16:9 aspect ratio)
- Projects: 800x450 (16:9 aspect ratio)

### 6. Build for Production

When ready to deploy:

```bash
npm run build
```

This creates an optimized production build in `.next/`

To test the production build locally:

```bash
npm start
```

## Common Issues & Solutions

### Issue: "Module not found" errors

**Solution:** Delete `node_modules` and reinstall:
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

### Issue: Port 3000 already in use

**Solution:** Use a different port:
```bash
npm run dev -- -p 3001
```

### Issue: Images not loading

**Solution:**
- Check if `pics/` folder exists in the project root
- Verify image file names match exactly (case-sensitive)
- Make sure images are in `.jpg`, `.jpeg`, or `.png` format

### Issue: TypeScript errors

**Solution:** Check your TypeScript version and run type checking:
```bash
npm run build
```

This will show all TypeScript errors that need fixing.

## Performance Tips

1. **Optimize Images**: Use tools like [TinyPNG](https://tinypng.com/) to compress images before adding them
2. **Lazy Loading**: Images are already optimized with Next.js Image component
3. **Reduce Motion**: Test with reduced motion enabled in your browser settings

## Next Steps

1. **Update Business Info**: Change phone number, address, etc.
2. **Customize Colors**: Edit `tailwind.config.ts`
3. **Add More Services**: Edit `lib/data/services.ts`
4. **Add Contact Form Backend**: Integrate with EmailJS, SendGrid, or Resend
5. **Deploy**: Deploy to Vercel, Netlify, or your hosting provider

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"

Vercel will automatically:
- Detect Next.js
- Install dependencies
- Build the project
- Deploy to a live URL

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

3. Deploy:
```bash
netlify deploy --prod
```

## Support

If you encounter any issues:

1. Check the console for errors (F12 in browser)
2. Review the README.md for configuration options
3. Ensure all dependencies are installed correctly
4. Check Node.js version compatibility

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Run production server
- `npm run lint` - Run ESLint to check code quality

Happy coding! 🚀
