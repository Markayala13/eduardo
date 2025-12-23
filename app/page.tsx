import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSlider from '@/components/sections/HeroSlider';
import Stats from '@/components/sections/Stats';
import Services from '@/components/sections/Services';
import ProjectsCarousel from '@/components/sections/ProjectsCarousel';
import Contact from '@/components/sections/Contact';
import ServingAreas from '@/components/sections/ServingAreas';

export default function Home() {
  // JSON-LD Structured Data for Local Business - Professional SEO Level
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://eduardolandscaping.com/#business',
    additionalType: 'LawnCareService',
    name: "Eduardo's Landscaping",
    alternateName: "Eduardo's Lawn Care & Landscaping",
    url: 'https://eduardolandscaping.com',
    logo: 'https://eduardolandscaping.com/images/logo.png',
    image: [
      'https://eduardolandscaping.com/images/hero-1.jpg',
      'https://eduardolandscaping.com/images/hero-2.jpg',
      'https://eduardolandscaping.com/images/hero-3.jpg'
    ],
    telephone: '480-869-5216',
    priceRange: '$$',
    email: 'info@eduardolandscaping.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Your Street Address',
      addressLocality: 'Phoenix',
      addressRegion: 'AZ',
      postalCode: 'Your Zip',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 'Your Latitude',
      longitude: 'Your Longitude'
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Phoenix',
        '@id': 'https://en.wikipedia.org/wiki/Phoenix,_Arizona'
      },
      {
        '@type': 'City',
        name: 'Scottsdale',
      },
      {
        '@type': 'City',
        name: 'Tempe',
      },
      {
        '@type': 'City',
        name: 'Mesa',
      },
      {
        '@type': 'City',
        name: 'Glendale',
      }
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '16:00'
      }
    ],
    description:
      "Transform your outdoor space with Eduardo's Landscaping - Phoenix's premier lawn care and landscaping service. Professional mowing, trimming, cleanup & maintenance. Licensed & insured. Same-day quotes!",
    slogan: 'Your Yard, Our Pride',
    foundingDate: '2015',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Landscaping Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            serviceType: 'Lawn Mowing',
            name: 'Professional Lawn Mowing Service',
            description: 'Expert grass cutting with precision edging and striping patterns. Weekly and bi-weekly service available.',
            provider: {
              '@type': 'LocalBusiness',
              name: "Eduardo's Landscaping"
            },
            areaServed: 'Phoenix Metropolitan Area'
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            serviceType: 'Hedge Trimming',
            name: 'Trimming & Shrub Maintenance',
            description: 'Expert hedge and shrub trimming for perfect landscape aesthetics',
            provider: {
              '@type': 'LocalBusiness',
              name: "Eduardo's Landscaping"
            },
            areaServed: 'Phoenix Metropolitan Area'
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            serviceType: 'Yard Cleanup',
            name: 'Complete Yard Cleanup',
            description: 'Complete yard transformation, debris removal, and seasonal cleanup services',
            provider: {
              '@type': 'LocalBusiness',
              name: "Eduardo's Landscaping"
            },
            areaServed: 'Phoenix Metropolitan Area'
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            serviceType: 'Weed Control',
            name: 'Professional Weed Control',
            description: 'Professional herbicide application and weed prevention programs',
            provider: {
              '@type': 'LocalBusiness',
              name: "Eduardo's Landscaping"
            },
            areaServed: 'Phoenix Metropolitan Area'
          },
        },
      ],
    },
    knowsAbout: [
      'Lawn Care',
      'Professional Landscaping',
      'Yard Maintenance',
      'Hedge Trimming',
      'Weed Control',
      'Yard Cleanup',
      'Landscape Design',
      'Tree Trimming',
      'Garden Maintenance'
    ],
    sameAs: [
      'https://facebook.com/eduardoslandscaping',
      'https://instagram.com/eduardoslandscaping',
      'https://twitter.com/eduardoslandscaping',
      'https://www.youtube.com/@eduardoslandscaping',
      'https://www.linkedin.com/company/eduardoslandscaping'
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1'
    },
    paymentAccepted: 'Cash, Credit Card, Debit Card, Venmo, Zelle',
    currenciesAccepted: 'USD',
    hasMap: 'https://maps.google.com/?q=Eduardo\'s+Landscaping+Phoenix+AZ'
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
