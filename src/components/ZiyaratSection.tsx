import React, { useState } from 'react';
import { MessageCircle, MapPin, Compass, ChevronRight, ExternalLink, Sparkles } from 'lucide-react';
import { MAKKAH_ZIYARAT, MADINAH_ZIYARAT, ZiyaratPlace, getWhatsAppUrl } from '../data/siteData';

interface ZiyaratSectionProps {
  initialCity?: 'Makkah' | 'Madinah' | 'All';
  showAllLocations?: boolean;
  onExploreFullZiyarat?: () => void;
}

export const ZiyaratSection: React.FC<ZiyaratSectionProps> = ({
  initialCity = 'All',
  showAllLocations = true,
  onExploreFullZiyarat,
}) => {
  const [activeTab, setActiveTab] = useState<'All' | 'Makkah' | 'Madinah'>(initialCity);
  const [selectedPlace, setSelectedPlace] = useState<ZiyaratPlace | null>(null);

  const places =
    activeTab === 'All'
      ? [...MAKKAH_ZIYARAT, ...MADINAH_ZIYARAT]
      : activeTab === 'Makkah'
      ? MAKKAH_ZIYARAT
      : MADINAH_ZIYARAT;

  const displayPlaces = showAllLocations ? places : places.slice(0, 6);

  return (
    <section id="ziyarat" className="py-16 sm:py-24 bg-[#0B0B0B] border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2 flex items-center gap-2">
              <Compass className="w-3.5 h-3.5" />
              <span>Sacred Pilgrimage Heritage</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white font-display">
              Makkah & Madinah Ziyarat
            </h2>
            <p className="mt-3 text-sm text-[#BDBDBD] max-w-2xl">
              Authentic historical sites curated with religious respect. Explore the foundational milestones of early Islam under knowledgeable, experienced Urdu-speaking guidance.
            </p>
          </div>

          {/* Interactive City Filter Tabs (Segmented control) */}
          <div className="mt-6 md:mt-0 flex items-center gap-1.5 p-1 bg-[#161616] border border-[#2B2B2B] rounded-xl self-start md:self-auto">
            <button
              onClick={() => setActiveTab('All')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'All'
                  ? 'bg-[#D4AF37] text-black shadow-sm'
                  : 'text-[#BDBDBD] hover:text-white'
              }`}
            >
              All Sacred Sites ({MAKKAH_ZIYARAT.length + MADINAH_ZIYARAT.length})
            </button>
            <button
              onClick={() => setActiveTab('Makkah')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'Makkah'
                  ? 'bg-[#D4AF37] text-black shadow-sm'
                  : 'text-[#BDBDBD] hover:text-white'
              }`}
            >
              Makkah ({MAKKAH_ZIYARAT.length})
            </button>
            <button
              onClick={() => setActiveTab('Madinah')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'Madinah'
                  ? 'bg-[#D4AF37] text-black shadow-sm'
                  : 'text-[#BDBDBD] hover:text-white'
              }`}
            >
              Madinah ({MADINAH_ZIYARAT.length})
            </button>
          </div>
        </div>

        {/* Places Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayPlaces.map((place) => (
            <div
              key={place.id}
              className="group bg-[#181818] border border-[#2A2A2A] rounded-xl overflow-hidden hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Photo Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#111111]">
                <img
                  src={place.image}
                  alt={place.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />
                
                {/* Location Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-semibold tracking-wide rounded bg-black/75 backdrop-blur-md text-[#D4AF37] border border-[#303030]">
                  {place.city}
                </div>

                {place.arabicName && (
                  <div className="absolute top-3 right-3 text-sm font-medium text-white/80 font-serif" dir="rtl">
                    {place.arabicName}
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors mb-2 font-display">
                    {place.name}
                  </h3>

                  <p className="text-xs text-[#BDBDBD] leading-relaxed mb-4 line-clamp-3">
                    {place.shortDescription}
                  </p>

                  <div className="flex items-center gap-2 text-[11px] text-[#888888] mb-6">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                    <span>{place.locationHint}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#252525] flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedPlace(place)}
                    className="text-xs font-medium text-[#D4AF37] hover:text-white transition-colors cursor-pointer"
                  >
                    Historical Significance →
                  </button>

                  <a
                    href={getWhatsAppUrl(`Assalamu Alaikum. I would like to inquire about arranged Ziyarat transport for ${place.name} in ${place.city}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#25D366] text-black hover:bg-[#20ba59] transition-colors cursor-pointer"
                    title={`Enquire for ${place.name}`}
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-black text-[#25D366]" />
                    <span>Enquire</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Preview Button if on homepage preview */}
        {!showAllLocations && onExploreFullZiyarat && (
          <div className="mt-12 text-center">
            <button
              onClick={onExploreFullZiyarat}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-colors cursor-pointer"
            >
              <span>View All 18 Sacred Ziyarat Destinations</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Place Detail Modal */}
      {selectedPlace && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#141414] border border-[#333333] rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedPlace(null)}
              className="absolute top-4 right-4 p-2 text-[#888888] hover:text-white rounded-lg bg-[#202020] cursor-pointer"
            >
              ✕
            </button>

            <div className="aspect-[16/9] w-full rounded-xl overflow-hidden mb-6 bg-[#111111]">
              <img
                src={selectedPlace.image}
                alt={selectedPlace.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-1">
              <span>{selectedPlace.city} Ziyarat</span>
              {selectedPlace.arabicName && (
                <>
                  <span className="text-white/40">·</span>
                  <span className="text-white/80 font-serif" dir="rtl">{selectedPlace.arabicName}</span>
                </>
              )}
            </div>

            <h3 className="text-2xl font-bold text-white font-display mb-3">
              {selectedPlace.name}
            </h3>

            <p className="text-sm text-[#BDBDBD] leading-relaxed mb-4">
              {selectedPlace.shortDescription}
            </p>

            <div className="p-4 rounded-xl bg-[#1A1A1A] border border-[#282828] mb-6">
              <h4 className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-2">
                Historical Significance
              </h4>
              <p className="text-xs text-[#CCCCCC] leading-relaxed">
                {selectedPlace.historicalSignificance}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#252525]">
              <div className="flex items-center gap-2 text-xs text-[#888888]">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>{selectedPlace.locationHint}</span>
              </div>

              <a
                href={getWhatsAppUrl(`Assalamu Alaikum. Please share details regarding guided Ziyarat to ${selectedPlace.name} in ${selectedPlace.city}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 text-xs font-bold rounded-lg bg-[#25D366] text-black hover:bg-[#20ba59] transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-black text-[#25D366]" />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
