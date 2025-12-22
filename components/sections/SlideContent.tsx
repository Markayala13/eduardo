'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { Slide } from '@/lib/data/slides';

interface SlideContentProps {
  slide: Slide;
  isActive: boolean;
  onEnter: () => void;
  onExit: () => void;
}

export default function SlideContent({
  slide,
  isActive,
  onEnter,
  onExit,
}: SlideContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  // Parallax and Ken-burns DISABLED for better performance

  // Simplified animations - just fade in/out
  useEffect(() => {
    if (!contentRef.current) return;

    if (isActive) {
      gsap.to(contentRef.current.children, {
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
      });
      onEnter();
    } else {
      gsap.to(contentRef.current.children, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
      });
      onExit();
    }
  }, [isActive, onEnter, onExit]);

  const getIcon = (type: string) => {
    switch (type) {
      case 'call':
        return <Phone className="w-5 h-5" />;
      case 'text':
        return <MessageSquare className="w-5 h-5" />;
      default:
        return <ArrowRight className="w-5 h-5" />;
    }
  };

  return (
    <div className="relative w-full h-full">
      {/* Background Image with Ken Burns */}
      <div ref={imageRef} className="absolute inset-0 w-full h-full">
        <Image
          src={slide.image}
          alt={slide.imageAlt}
          fill
          priority={slide.id === 1}
          sizes="100vw"
          className="object-cover object-center"
          quality={75}
          unoptimized={true}
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
        {/* Grain Overlay */}
        <div className="absolute inset-0 grain-overlay opacity-30" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 container mx-auto px-4 h-full flex items-center"
      >
        <div className="max-w-2xl text-white">
          {/* Eyebrow Badge */}
          <div
            className="eyebrow inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6"
          >
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium">{slide.eyebrow}</span>
          </div>

          {/* Headline */}
          <h1
            className="headline font-heading text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight bg-gradient-to-r from-white via-white to-accent bg-clip-text text-transparent"
          >
            {slide.headline}
          </h1>

          {/* Subtitle */}
          <p
            className="subtitle text-xl md:text-2xl mb-6 text-white/90"
          >
            {slide.subtitle}
          </p>

          {/* Bullets */}
          <ul
            className="bullets flex flex-wrap gap-4 mb-8"
          >
            {slide.bullets.map((bullet, index) => (
              <li
                key={index}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
              >
                <svg
                  className="w-5 h-5 text-accent"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm md:text-base">{bullet}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="ctas flex flex-wrap gap-4">
            <Button
              variant="primary"
              size="lg"
              className="gap-2"
            >
              {getIcon(slide.ctas.primary.type)}
              {slide.ctas.primary.text}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 border-white text-white hover:bg-white hover:text-primary"
            >
              {getIcon(slide.ctas.secondary.type)}
              {slide.ctas.secondary.text}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
