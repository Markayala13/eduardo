'use client';

import { Phone, MessageSquare, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-semibold uppercase tracking-wide">
              Get Started
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
            Ready to Upgrade Your Yard?
          </h2>
          <p className="text-lg text-zinc-600">
            Get a fast, free quote today. We typically respond within minutes.
          </p>
        </div>

        {/* Main CTA Cards */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mb-12">
          {/* Call Card */}
          <div
            className={cn(
              'group relative bg-gradient-to-br from-primary to-primary/90 rounded-3xl p-8 md:p-10',
              'shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer'
            )}
          >
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">
                Call Now
              </h3>

              {/* Phone Number */}
              <p className="text-white/90 text-lg md:text-xl mb-4">
                480-869-5216
              </p>

              {/* Description */}
              <p className="text-white/80 text-sm">
                Speak directly with Eduardo. Perfect for urgent needs or
                detailed questions.
              </p>

              {/* Arrow */}
              <div className="mt-6 flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all">
                Tap to call
                <svg
                  className="w-5 h-5"
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
              </div>
            </div>
          </div>

          {/* Text Card */}
          <div
            className={cn(
              'group relative bg-gradient-to-br from-accent to-accent/90 rounded-3xl p-8 md:p-10',
              'shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer'
            )}
          >
            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 mb-4">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="text-white text-xs font-semibold">
                  FASTEST RESPONSE
                </span>
              </div>

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">
                Text for Quote
              </h3>

              {/* Description */}
              <p className="text-white/80 text-sm mb-4">
                Send us a quick text with your address + a photo of your yard
                for the fastest quote.
              </p>

              {/* Arrow */}
              <div className="mt-6 flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all">
                Send a text
                <svg
                  className="w-5 h-5"
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
              </div>
            </div>
          </div>
        </div>

        {/* Microcopy */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6">
            <p className="text-accent font-medium">
              💡 <strong>Pro tip:</strong> Text your address + a photo of the
              yard for the fastest, most accurate quote.
            </p>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="font-semibold text-primary">Fast Quotes</p>
                <p className="text-sm text-zinc-600">Usually under 1 hour</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="font-semibold text-primary">
                  Same-Week Service
                </p>
                <p className="text-sm text-zinc-600">No long waits</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
