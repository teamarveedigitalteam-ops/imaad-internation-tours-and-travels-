import React, { useState } from 'react';
import { MessageCircle, Hotel, MapPin, CheckCircle, Info } from 'lucide-react';
import { HOTELS_DATA, HotelData, getWhatsAppUrl } from '../data/siteData';

interface HotelsSectionProps {
  onOpenConsultation?: () => void;
}

export const HotelsSection: React.FC<HotelsSectionProps> = ({ onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Hotel Exterior',
    'Reception & Lobby',
    'Guest Rooms',
    'Twin, Triple & Quad Rooms',
    'Bathrooms',
    'Dining Facilities',
  ];

  const filteredHotels =
    selectedCategory === 'All'
      ? HOTELS_DATA
      : HOTELS_DATA.filter((h) => h.category === selectedCategory);

  return (
    <section id="hotels" className="py-16 sm:py-24 bg-black border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">
            Comfort Near The Holy Sanctuaries
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-display mb-4">
            Hotels & Accommodation
          </h2>
          <p className="text-sm sm:text-base text-[#BDBDBD] leading-relaxed">
            Carefully inspected properties in Makkah and Madinah with walking proximity to the Harams, ensuite washrooms, lift access, and hygienic Indian dining.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#141414] border border-[#2A2A2A] text-xs text-[#C5A253]">
            <Info className="w-4 h-4 shrink-0 text-[#D4AF37]" />
            <span>Actual room configurations and views confirmed at time of booking voucher issuance.</span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#D4AF37] text-black shadow-sm'
                  : 'bg-[#161616] text-[#BDBDBD] hover:text-white border border-[#2B2B2B]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Hotel Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHotels.map((hotel) => (
            <div
              key={hotel.id}
              className="group bg-[#181818] border border-[#2A2A2A] rounded-xl overflow-hidden hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#111111]">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />

                <div className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-semibold rounded bg-black/75 backdrop-blur-md text-[#D4AF37] border border-[#303030]">
                  {hotel.city} • {hotel.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors mb-2 font-display">
                    {hotel.name}
                  </h3>

                  <div className="flex items-center gap-2 text-xs text-[#C5A253] mb-4">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span>{hotel.distanceFromHaram}</span>
                  </div>

                  {/* Room Types */}
                  <div className="mb-4">
                    <span className="text-[11px] uppercase tracking-wider text-[#888888] font-medium block mb-1">
                      Available Room Configs:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {hotel.roomTypes.map((rt, idx) => (
                        <span key={idx} className="text-xs text-[#E0E0E0] bg-[#222222] px-2 py-0.5 rounded border border-[#333333]">
                          {rt}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Facilities */}
                  <div className="space-y-1.5 mb-4 text-xs text-[#BDBDBD]">
                    {hotel.facilities.map((fac, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <span>{fac}</span>
                      </div>
                    ))}
                  </div>

                  {/* Package inclusion note */}
                  <div className="p-2.5 rounded bg-[#131313] border border-[#252525] text-[11px] text-[#A0A0A0] mb-4">
                    {hotel.packageNote}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#252525]">
                  <a
                    href={getWhatsAppUrl(`Assalamu Alaikum. I would like to inquire about hotel accommodation for ${hotel.name} in ${hotel.city}. Please share rates for my dates.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 text-xs font-semibold rounded-lg bg-[#25D366] text-black hover:bg-[#20ba59] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-black text-[#25D366]" />
                    <span>Enquire Hotel on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
