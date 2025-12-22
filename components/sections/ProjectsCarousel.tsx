'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard, Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '@/lib/data/projects';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ProjectsCarousel() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle keyboard navigation in lightbox
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxOpen(false);
      } else if (e.key === 'ArrowLeft') {
        handlePrevImage();
      } else if (e.key === 'ArrowRight') {
        handleNextImage();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [lightboxOpen, currentImageIndex]);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-[#fafafa]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-semibold uppercase tracking-wide">
              Our Work
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
            Recent Projects
          </h2>
          <p className="text-lg text-zinc-600">
            See the difference professional landscaping makes. Every property
            tells a story of transformation.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Swiper Carousel */}
          <Swiper
            modules={[Navigation, Keyboard, Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            keyboard={{ enabled: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={{
              nextEl: '.projects-next',
              prevEl: '.projects-prev',
            }}
            pagination={{
              el: '.custom-projects-pagination',
              clickable: true,
              renderBullet: function (index, className) {
                return `<span class="${className} custom-pagination-bullet"></span>`;
              },
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            className="projects-swiper max-w-7xl mx-auto pb-16"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={project.id} className="swiper-slide-custom">
                <div
                  className="group relative aspect-[3/4] max-h-[550px] md:max-h-[650px] rounded-3xl overflow-hidden cursor-pointer shadow-2xl hover:shadow-[0_20px_60px_rgba(124,179,66,0.4)] transition-all duration-500 mx-auto border-4 border-transparent hover:border-accent/30"
                  onClick={() => openLightbox(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      openLightbox(index);
                    }
                  }}
                  aria-label={`View ${project.title} in full screen`}
                >
                  <img
                    src={project.image}
                    alt={project.alt}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Project Number Badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                    <span className="text-white font-heading font-black text-lg">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm rounded-full px-3 py-1 mb-3">
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                        <span className="text-white text-xs font-semibold">COMPLETED PROJECT</span>
                      </div>
                      <h3 className="text-white font-heading font-bold text-xl md:text-2xl mb-2">
                        {project.title}
                      </h3>
                      <p className="text-white/80 text-sm">Click to view full image</p>
                    </div>
                  </div>

                  {/* Zoom Icon */}
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-90">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                      />
                    </svg>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="custom-projects-pagination flex justify-center gap-2 mt-8" />

          {/* Navigation Buttons - Beautiful Style */}
          <button
            className="projects-prev absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 shadow-2xl text-white hover:from-accent hover:to-accent/80 transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-accent/50 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 active:scale-95"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-7 h-7 md:w-8 md:h-8" strokeWidth={3} />
          </button>
          <button
            className="projects-next absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 shadow-2xl text-white hover:from-accent hover:to-accent/80 transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-accent/50 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 active:scale-95"
            aria-label="Next project"
          >
            <ChevronRight className="w-7 h-7 md:w-8 md:h-8" strokeWidth={3} />
          </button>
        </div>

        {/* Custom CSS for Carousel */}
        <style jsx global>{`
          .custom-pagination-bullet {
            width: 12px;
            height: 12px;
            background: #d4d4d8;
            border-radius: 999px;
            transition: all 0.3s ease;
            cursor: pointer;
          }

          .custom-pagination-bullet:hover {
            background: #7CB342;
            transform: scale(1.2);
          }

          .custom-pagination-bullet.swiper-pagination-bullet-active {
            width: 40px;
            background: linear-gradient(to right, #1F3D2B, #7CB342);
            box-shadow: 0 4px 12px rgba(124, 179, 66, 0.4);
          }

          .swiper-slide-custom {
            transition: all 0.5s ease;
            opacity: 1;
          }
        `}</style>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white z-10"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevImage();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNextImage();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image */}
          <div
            className="relative w-full h-full max-w-7xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={projects[currentImageIndex].image}
              alt={projects[currentImageIndex].alt}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
              className="object-contain"
            />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
            {currentImageIndex + 1} / {projects.length}
          </div>
        </div>
      )}
    </section>
  );
}
