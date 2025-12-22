'use client';

import { Phone, MessageSquare } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function HeroSlider() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video/hero-video-optimized.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Heading */}
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-heading font-black mb-6 bg-gradient-to-r from-white via-white to-primary bg-clip-text text-transparent"
              style={{
                filter: 'drop-shadow(0 0 30px rgba(124, 179, 66, 0.6)) drop-shadow(0 4px 20px rgba(0, 0, 0, 0.5))'
              }}
            >
              Transform Your Outdoor Space
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-2xl text-white/90 mb-8 drop-shadow-lg max-w-2xl mx-auto">
              Professional landscaping services to keep your property looking its best
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                className="gap-2 text-lg px-8 py-4 shadow-2xl hover:scale-105 transition-transform"
              >
                <Phone className="w-5 h-5" />
                Call 480-869-5216
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 text-lg px-8 py-4 bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 shadow-2xl hover:scale-105 transition-transform"
              >
                <MessageSquare className="w-5 h-5" />
                Text for Quote
              </Button>
            </div>

            {/* Trust Badge */}
            <div className="mt-12 flex items-center justify-center gap-2 text-white/80">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
              <span className="text-sm md:text-base font-semibold">
                Serving the Phoenix Area with Pride
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors group"
        aria-label="Scroll to services"
      >
        <span className="text-sm font-medium">Scroll</span>
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1 group-hover:border-white transition-colors">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
        </div>
      </a>
    </section>
  );
}
