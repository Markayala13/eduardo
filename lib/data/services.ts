// Services Data

export interface Service {
  id: number;
  icon: string; // Lucide icon name
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: 1,
    icon: "Scissors",
    title: "Lawn Mowing",
    description: "Professional grass cutting with precision edging for a crisp, clean finish every time.",
  },
  {
    id: 2,
    icon: "Leaf",
    title: "Trimming Shrubs",
    description: "Expert hedge and shrub trimming to maintain beautiful shapes and healthy growth.",
  },
  {
    id: 3,
    icon: "CalendarClock",
    title: "Maintenance Programs",
    description: "Weekly or bi-weekly scheduled service to keep your property looking pristine year-round.",
  },
  {
    id: 4,
    icon: "Sparkles",
    title: "Yard Cleanup",
    description: "Complete yard transformation: debris removal, leaf cleanup, and seasonal preparation.",
  },
  {
    id: 5,
    icon: "Droplets",
    title: "Weed Control",
    description: "Professional herbicide application to eliminate weeds and prevent future growth.",
  },
  {
    id: 6,
    icon: "Trash2",
    title: "Trash Removal",
    description: "Hauling and disposal of yard waste, junk, and unwanted items from your property.",
  },
  {
    id: 7,
    icon: "Home",
    title: "Garage Cleanouts",
    description: "Full garage cleaning and organization with responsible disposal of unwanted items.",
  },
  {
    id: 8,
    icon: "Bone",
    title: "Pet Waste Cleanup",
    description: "Thorough and discreet removal of pet waste to keep your yard fresh and safe.",
  },
];
