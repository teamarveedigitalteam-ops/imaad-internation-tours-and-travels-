import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, MapPin } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/siteData';

interface GallerySectionProps {
  isStandalonePage?: boolean;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ isStandalonePage = false }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Photos');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    'All Photos',
    'Makkah',
    'Madinah',
    'Umrah & Pilgrims',
    'Makkah Ziyarat',
    'Madinah Ziyarat',
    'Hotels & Rooms',
    'Hotel Facilities',
    'Flights & Travel',
  ];

  const filteredItems =
    selectedCategory === 'All Photos'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! + 1) % filteredItems.length);
    }
  }, [lightboxIndex, filteredItems.length]);

  const showPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
    }
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, showNext, showPrev]);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#0B0B0B] border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">
            Visual Highlights
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-display mb-4">
            Sacred Destinations & Hospitality
          </h2>
          <p className="text-sm sm:text-base text-[#BDBDBD] leading-relaxed">
            Authentic photographs of the holy cities, contracted accommodations, guided Ziyarat excursions, and group pilgrimages.
          </p>
        </div>

        {/* Interactive Category Filter Bar */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#D4AF37] text-black shadow-sm'
                  : 'bg-[#181818] text-[#BDBDBD] hover:text-white border border-[#2B2B2B]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/3] bg-[#141414] border border-[#282828] rounded-xl overflow-hidden cursor-pointer hover:border-[#D4AF37]/50 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Overlay Content */}
              <div className="absolute bottom-0 inset-x-0 p-4 flex items-end justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-medium block">
                    {item.category}
                  </span>
                  <h3 className="text-base font-bold text-white font-display">{item.title}</h3>
                  <div className="flex items-center gap-1.5 text-xs text-white/70 mt-1">
                    <MapPin className="w-3 h-3 text-[#D4AF37]" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-lg bg-black/60 border border-white/20 flex items-center justify-center text-white/80 group-hover:text-white group-hover:border-[#D4AF37] transition-colors shrink-0">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-lg bg-[#181818] border border-[#333333] text-white hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors cursor-pointer z-50"
            aria-label="Close image viewer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 border border-[#333333] text-white hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors cursor-pointer z-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 border border-[#333333] text-white hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors cursor-pointer z-50"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Lightbox Image & Caption */}
          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <div className="relative overflow-hidden rounded-xl bg-black border border-[#2B2B2B] max-h-[70vh]">
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            {/* Caption bar */}
            <div className="mt-4 text-center max-w-xl">
              <span className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-semibold">
                {filteredItems[lightboxIndex].category} ({lightboxIndex + 1} of {filteredItems.length})
              </span>
              <h3 className="text-xl font-bold text-white font-display mt-0.5">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-xs text-[#BDBDBD] mt-1">
                {filteredItems[lightboxIndex].caption}
              </p>
              <p className="text-[11px] text-[#888888] mt-1 flex items-center justify-center gap-1">
                <MapPin className="w-3 h-3 text-[#D4AF37]" />
                {filteredItems[lightboxIndex].location}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
