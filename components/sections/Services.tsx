'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as LucideIcons from 'lucide-react';
import { services } from '@/lib/data/services';
import { cn } from '@/lib/utils/cn';
import { prefersReducedMotion } from '@/lib/utils/motion';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !cardsRef.current) return;

      const cards = cardsRef.current.querySelectorAll('.service-card');

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 60,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    },
    { scope: sectionRef }
  );

  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? <Icon className="w-8 h-8" /> : null;
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 md:py-32 bg-white"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-semibold uppercase tracking-wide">
              Our Services
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
            Everything Your Yard Needs
          </h2>
          <p className="text-lg text-zinc-600">
            Professional landscaping services to keep your property looking its
            best year-round. Licensed, insured, and ready to help.
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <div
              key={service.id}
              className={cn(
                'service-card group relative bg-white border-2 border-zinc-200 rounded-3xl p-6',
                'transition-all duration-300 hover:border-accent hover:shadow-2xl hover:-translate-y-2',
                'focus-within:border-accent focus-within:shadow-2xl'
              )}
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-accent/10 transition-all duration-300 pointer-events-none" />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  {getIcon(service.icon)}
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-bold text-primary mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Get Quote Link */}
                <button
                  className="inline-flex items-center gap-2 text-accent font-medium text-sm hover:gap-3 transition-all duration-200"
                >
                  Get quote
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-zinc-600 mb-6">
            Don&apos;t see what you need? We handle custom requests too.
          </p>
          <button
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-2xl font-semibold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            <LucideIcons.Phone className="w-5 h-5" />
            Call for Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
}
