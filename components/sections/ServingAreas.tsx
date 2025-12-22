'use client';

import { MapPin } from 'lucide-react';

const cities = [
  'Phoenix',
  'Scottsdale',
  'Tempe',
  'Mesa',
  'Chandler',
  'Gilbert',
  'Glendale',
  'Peoria',
  'Surprise',
  'Avondale',
  'Goodyear',
  'Buckeye',
  'Queen Creek',
  'Apache Junction',
  'Fountain Hills',
  'Paradise Valley',
  'Cave Creek',
  'Carefree',
];

export default function ServingAreas() {
  return (
    <section className="py-16 md:py-20 bg-white border-t border-zinc-200">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-2 mb-4">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Service Area
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-black mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Serving Phoenix, Arizona
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">
            We proudly serve Phoenix and all surrounding cities within a 50-mile radius
          </p>
        </div>

        {/* Cities Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {cities.map((city) => (
              <div
                key={city}
                className="bg-zinc-50 border border-zinc-200 rounded-full px-5 py-2.5 text-zinc-700 font-medium hover:bg-accent/10 hover:border-accent/30 hover:text-accent transition-all duration-200"
              >
                {city}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
