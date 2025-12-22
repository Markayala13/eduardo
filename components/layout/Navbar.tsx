'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import Button from '@/components/ui/Button';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-zinc-200 py-3 transition-all duration-300"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              className="flex items-center gap-3 transition-opacity hover:opacity-80"
            >
              <img
                src="/logo/ChatGPT_Image_21_dic_2025__06_58_07_p.m.-removebg-preview.png"
                alt="Eduardo's Landscaping Logo"
                className="h-24 md:h-28 w-auto"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-medium text-charcoal transition-colors hover:text-primary"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                className="gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                Text
              </Button>
              <Button
                variant="primary"
                size="sm"
                className="gap-2"
              >
                <Phone className="w-4 h-4" />
                Call
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-primary hover:bg-primary/10 transition-colors"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 md:hidden transition-opacity duration-300',
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Menu Panel */}
        <div
          className={cn(
            'absolute top-0 right-0 bottom-0 w-[85%] max-w-sm shadow-2xl transition-transform duration-300 ease-out',
            'bg-gradient-to-br from-primary via-primary/95 to-accent',
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex flex-col h-full relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-3xl translate-y-24 -translate-x-24" />

            {/* Header with close button */}
            <div className="flex items-center justify-between p-6 pb-4 border-b border-white/10 relative z-10">
              <span className="text-xl font-heading font-bold text-white">
                Menu
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            <div className="flex flex-col h-full p-6 relative z-10">
              {/* Navigation Links */}
              <nav className="flex flex-col gap-2 mb-8 mt-4">
                {navLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      'text-xl font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-all py-4 px-5 rounded-xl',
                      'transform transition-all duration-300 backdrop-blur-sm',
                      isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                    )}
                    style={{
                      transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms'
                    }}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              {/* Mobile CTAs */}
              <div className="flex flex-col gap-3 mt-auto pb-2">
                <button
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white text-primary font-semibold hover:bg-white/90 transition-all shadow-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <MessageSquare className="w-5 h-5" />
                  Text for Quote
                </button>
                <button
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-md text-white font-semibold hover:bg-white/20 transition-all border border-white/20"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Phone className="w-5 h-5" />
                  Call 480-869-5216
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
