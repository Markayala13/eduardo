import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSlider from '@/components/sections/HeroSlider';
import Stats from '@/components/sections/Stats';
import Services from '@/components/sections/Services';
import ProjectsCarousel from '@/components/sections/ProjectsCarousel';
import Contact from '@/components/sections/Contact';
import ServingAreas from '@/components/sections/ServingAreas';

export default function Home() {
  // JSON-LD Structured Data for Local Business
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    additionalType: 'LawnCareService',
    name: "Eduardo's Landscaping",
    telephone: '480-869-5216',
    priceRange: '$$',
    areaServed: {
      '@type': 'City',
      name: 'Phoenix Area', // Update with actual city
    },
    description:
      'Professional landscaping services including lawn mowing, trimming, cleanup, and maintenance. Licensed & insured.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Landscaping Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Lawn Mowing',
            description: 'Professional grass cutting with precision edging',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Trimming Shrubs',
            description: 'Expert hedge and shrub trimming',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Yard Cleanup',
            description: 'Complete yard transformation and debris removal',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Weed Control',
            description: 'Professional herbicide application',
          },
        },
      ],
    },
    knowsAbout: [
      'Lawn Care',
      'Landscaping',
      'Yard Maintenance',
      'Hedge Trimming',
      'Weed Control',
      'Yard Cleanup',
    ],
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main id="main-content">
        <HeroSlider />
        <Stats />
        <Services />
        <ProjectsCarousel />
        <Contact />
        <ServingAreas />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
