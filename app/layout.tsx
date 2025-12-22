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

// SEO Metadata
export const metadata: Metadata = {
  title: "Eduardo's Landscaping | Licensed Lawn Care & Yard Maintenance",
  description:
    "Professional landscaping services including lawn mowing, trimming, cleanup, and maintenance. Licensed & insured. Fast quotes via text. Call 480-869-5216.",
  keywords: [
    "landscaping",
    "lawn care",
    "yard maintenance",
    "grass cutting",
    "hedge trimming",
    "weed control",
    "yard cleanup",
  ],
  openGraph: {
    title: "Eduardo's Landscaping | Licensed Lawn Care & Yard Maintenance",
    description:
      "Professional landscaping services including lawn mowing, trimming, cleanup, and maintenance. Licensed & insured. Fast quotes via text.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${poppins.variable} font-body antialiased bg-[#fafafa] text-charcoal`}
      >
        {children}
      </body>
    </html>
  );
}
