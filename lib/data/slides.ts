// Hero Slider Data
// To use local images from pics/ folder, replace image URLs with: "/pics/your-image.jpg"

export interface Slide {
  id: number;
  image: string;
  imageAlt: string;
  eyebrow: string;
  headline: string;
  subtitle: string;
  bullets: string[];
  ctas: {
    primary: { text: string; href: string; type: 'call' | 'text' | 'link' };
    secondary: { text: string; href: string; type: 'call' | 'text' | 'link' };
  };
}

export const slides: Slide[] = [
  {
    id: 1,
    image: "/pics/picsv2/1.jpg",
    imageAlt: "Eduardo's Landscaping: perfectly maintained residential lawn with professional landscaping",
    eyebrow: "Professional Service",
    headline: "Your Yard. Upgraded.",
    subtitle: "Professional Landscaping Service",
    bullets: ["Fast quotes", "Same-week availability", "Local experts"],
    ctas: {
      primary: { text: "Call Now", href: "tel:4808695216", type: "call" },
      secondary: { text: "Text Us", href: "sms:4808695216", type: "text" },
    },
  },
  {
    id: 2,
    image: "/pics/picsv2/2.jpg",
    imageAlt: "Eduardo's Landscaping: before and after yard transformation showing cleanup service",
    eyebrow: "Same-Week Service",
    headline: "From Messy to Fresh—Fast.",
    subtitle: "Same-Week Cleanup & Maintenance",
    bullets: ["Yard cleanup", "Trash removal", "Pet waste removal"],
    ctas: {
      primary: { text: "Text Us", href: "sms:4808695216", type: "text" },
      secondary: { text: "View Projects", href: "#projects", type: "link" },
    },
  },
  {
    id: 3,
    image: "/pics/picsv2/3.jpg",
    imageAlt: "Eduardo's Landscaping: expertly trimmed hedges and maintained garden landscape",
    eyebrow: "Weekly Programs",
    headline: "Clean Lines. Clean Look.",
    subtitle: "Weekly Maintenance Programs",
    bullets: ["Lawn mowing", "Trimming", "Weed control"],
    ctas: {
      primary: { text: "Call Now", href: "tel:4808695216", type: "call" },
      secondary: { text: "Text Us", href: "sms:4808695216", type: "text" },
    },
  },
];
