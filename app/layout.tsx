import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
// Font configurations - Ultra Modern with gradients
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
  preload: true,
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
});

// SEO Metadata - Professional Level
export const metadata: Metadata = {
  metadataBase: new URL('https://eduardolandscaping.com'),
  title: {
    default: "Eduardo's Landscaping | Professional Lawn Care & Yard Maintenance Phoenix",
    template: "%s | Eduardo's Landscaping"
  },
  description:
    "Transform your outdoor space with Eduardo's Landscaping - Phoenix's premier lawn care service. Professional mowing, trimming, cleanup & maintenance. Licensed & insured. Same-day quotes. Call 480-869-5216 for a free estimate!",
  keywords: [
    "landscaping Phoenix",
    "lawn care Phoenix",
    "yard maintenance Phoenix",
    "professional landscaping",
    "grass cutting Phoenix",
    "lawn mowing service",
    "hedge trimming Phoenix",
    "weed control Arizona",
    "yard cleanup Phoenix",
    "landscape maintenance",
    "commercial landscaping",
    "residential lawn care",
    "Eduardo's Landscaping",
    "Phoenix landscaper",
    "Arizona lawn service",
    "licensed landscaping",
    "landscape design Phoenix",
    "tree trimming Phoenix",
    "garden maintenance",
    "outdoor maintenance Phoenix"
  ],
  authors: [{ name: "Eduardo's Landscaping" }],
  creator: "Eduardo's Landscaping",
  publisher: "Eduardo's Landscaping",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eduardolandscaping.com",
    siteName: "Eduardo's Landscaping",
    title: "Eduardo's Landscaping | Professional Lawn Care Phoenix",
    description:
      "Transform your outdoor space with Eduardo's Landscaping - Phoenix's premier lawn care service. Licensed & insured. Same-day quotes. Call 480-869-5216!",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Eduardo's Landscaping - Professional Lawn Care Phoenix",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eduardo's Landscaping | Professional Lawn Care Phoenix",
    description:
      "Transform your outdoor space with Phoenix's premier lawn care service. Licensed & insured. Same-day quotes!",
    images: ["/images/twitter-image.jpg"],
    creator: "@eduardoslandscaping",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://eduardolandscaping.com",
  },
  category: "Landscaping & Lawn Care",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Search Engine Verification */}
        <meta name="msvalidate.01" content="your-bing-verification-code" />

        {/* Theme Color */}
        <meta name="theme-color" content="#10b981" />
        <meta name="msapplication-TileColor" content="#10b981" />

        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/images/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/icon-192x192.png" />

        {/* Additional SEO Meta Tags */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Eduardo's Landscaping" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body
        className={`${montserrat.variable} ${poppins.variable} font-body antialiased bg-[#fafafa] text-charcoal`}
      >
        {children}
      </body>
    </html>
  );
}
