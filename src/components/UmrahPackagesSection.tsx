import React, { useState } from 'react';
import { MessageCircle, Check, X, Info, Calendar, MapPin, Plane, Hotel, Utensils, Bus, FileText, ChevronRight } from 'lucide-react';
import { UMRAH_PACKAGES, UmrahPackage, getWhatsAppUrl } from '../data/siteData';

interface UmrahPackagesSectionProps {
  onOpenQuoteModal?: (packageItem: UmrahPackage) => void;
  isStandalonePage?: boolean;
}

export const UmrahPackagesSection: React.FC<UmrahPackagesSectionProps> = ({
  onOpenQuoteModal,
  isStandalonePage = false,
}) => {
  const [selectedPackage, setSelectedPackage] = useState<UmrahPackage | null>(null);

  return (
    <section id="packages" className={`py-16 sm:py-24 bg-black border-b border-[#222222]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">
            Tailored Pilgrimage Programs
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-display mb-4">
            Featured Umrah Packages
          </h2>
          <p className="text-sm sm:text-base text-[#BDBDBD] leading-relaxed">
            Curated 15-day pilgrimage itineraries from Rajiv Gandhi International Airport (HYD) with verified accommodations and dedicated on-ground assistance.
          </p>

          {/* Pricing transparency disclaimer banner */}
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#141414] border border-[#2A2A2A] text-xs text-[#C5A253]">
            <Info className="w-4 h-4 shrink-0 text-[#D4AF37]" />
            <span>Indicative draft tariffs. Final price confirmed upon booking based on airline tariffs and forex rates.</span>
          </div>
        </div>

        {/* 3 Package Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {UMRAH_PACKAGES.map((pkg) => {
            const isStandard = pkg.tier === 'Standard';

            return (
              <div
                key={pkg.id}
                className={`relative bg-[#181818] rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 ${
                  isStandard
                    ? 'border-2 border-[#D4AF37] shadow-xl shadow-[#D4AF37]/10'
                    : 'border border-[#2C2C2C] hover:border-[#D4AF37]/40'
                }`}
              >
                {/* Badge ribbon if any */}
                {pkg.badge && (
                  <div
                    className={`absolute top-4 right-4 z-10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded ${
                      isStandard ? 'bg-[#D4AF37] text-black' : 'bg-white/10 text-white backdrop-blur-md'
                    }`}
                  >
                    {pkg.badge}
                  </div>
                )}

                {/* Package Image */}
                <div className="relative aspect-[16/9] overflow-hidden bg-[#111111]">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover brightness-90 hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 text-xs text-white/80 flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{pkg.duration}</span>
                    <span className="text-white/40">·</span>
                    <Plane className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Ex-Hyderabad</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 font-display">
                      {pkg.name}
                    </h3>

                    {/* Price Block */}
                    <div className="mb-4 pb-4 border-b border-[#282828]">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl sm:text-4xl font-bold text-[#D4AF37] font-mono tabular-nums">
                          {pkg.price}
                        </span>
                        <span className="text-xs text-[#BDBDBD]">/ person</span>
                      </div>
                      <p className="text-[11px] text-[#888888] mt-1">{pkg.priceNote}</p>
                    </div>

                    {/* Quick Specs List */}
                    <div className="space-y-3 mb-6 text-xs text-[#BDBDBD]">
                      <div className="flex items-start gap-2.5">
                        <Hotel className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-white font-medium">Makkah Hotel</p>
                          <p className="text-[#999999]">{pkg.makkahHotel.distance}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <Hotel className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-white font-medium">Madinah Hotel</p>
                          <p className="text-[#999999]">{pkg.madinahHotel.distance}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <Utensils className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-white font-medium">Catering</p>
                          <p className="text-[#999999]">{pkg.foodArrangements}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <Bus className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-white font-medium">Transport & Ziyarat</p>
                          <p className="text-[#999999]">AC Coach with full Makkah & Madinah visits</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2 pt-2">
                    <button
                      onClick={() => setSelectedPackage(pkg)}
                      className="w-full py-2.5 px-4 text-xs font-semibold rounded-lg bg-[#222222] text-white hover:bg-[#2C2C2C] border border-[#333333] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>View Full Inclusions & Details</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                    </button>

                    <a
                      href={getWhatsAppUrl(`Assalamu Alaikum. I am interested in the ${pkg.name} (${pkg.price}/person) from Hyderabad. Please share available dates and final quotation.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 text-xs font-bold rounded-lg bg-[#25D366] text-black hover:bg-[#20ba59] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 fill-black text-[#25D366]" />
                      <span>Enquire on WhatsApp</span>
                    </a>

                    {onOpenQuoteModal && (
                      <button
                        onClick={() => onOpenQuoteModal(pkg)}
                        className="w-full py-2 px-4 text-xs font-medium rounded-lg text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors text-center cursor-pointer"
                      >
                        Request Written Quotation
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Package Detail Modal */}
      {selectedPackage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-[#141414] border border-[#333333] rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedPackage(null)}
              className="absolute top-4 right-4 p-2 text-[#888888] hover:text-white rounded-lg bg-[#202020] cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
                {selectedPackage.tier} Category Itinerary
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mt-1">
                {selectedPackage.name}
              </h3>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl font-bold text-[#D4AF37] font-mono tabular-nums">
                  {selectedPackage.price}
                </span>
                <span className="text-xs text-[#BDBDBD]">per person (Quad sharing base)</span>
              </div>
              <p className="text-xs text-[#888888] mt-1">{selectedPackage.priceNote}</p>
            </div>

            {/* Itinerary & Logistics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 p-4 rounded-xl bg-[#1A1A1A] border border-[#282828] text-xs">
              <div>
                <span className="text-[#888888] block">Departure & Duration</span>
                <span className="text-white font-medium">{selectedPackage.departureCity} • {selectedPackage.duration}</span>
              </div>
              <div>
                <span className="text-[#888888] block">Flight Coordination</span>
                <span className="text-white font-medium">{selectedPackage.flightInfo}</span>
              </div>
              <div>
                <span className="text-[#888888] block">Makkah Hotel Proximity</span>
                <span className="text-white font-medium">{selectedPackage.makkahHotel.distance}</span>
              </div>
              <div>
                <span className="text-[#888888] block">Madinah Hotel Proximity</span>
                <span className="text-white font-medium">{selectedPackage.madinahHotel.distance}</span>
              </div>
            </div>

            {/* Room Sharing Options */}
            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-2">
                Room Sharing Arrangements
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {selectedPackage.roomArrangements.map((room, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-[#1C1C1C] border border-[#2D2D2D] text-xs text-white">
                    {room}
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-xs uppercase tracking-wider text-[#25D366] font-semibold mb-3 flex items-center gap-1.5">
                  <Check className="w-4 h-4" />
                  <span>Package Inclusions</span>
                </h4>
                <ul className="space-y-2 text-xs text-[#BDBDBD]">
                  {selectedPackage.inclusions.map((inc, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] mt-1.5 shrink-0" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-rose-400 font-semibold mb-3 flex items-center gap-1.5">
                  <X className="w-4 h-4" />
                  <span>Package Exclusions</span>
                </h4>
                <ul className="space-y-2 text-xs text-[#888888]">
                  {selectedPackage.exclusions.map((exc, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500/70 mt-1.5 shrink-0" />
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Booking Terms */}
            <div className="mb-6 p-4 rounded-xl bg-[#161616] border border-[#282828]">
              <h4 className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-2 flex items-center gap-1.5">
                <FileText className="w-4 h-4" />
                <span>Important Booking & Passport Terms</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-[#999999]">
                {selectedPackage.bookingTerms.map((term, idx) => (
                  <li key={idx}>• {term}</li>
                ))}
              </ul>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-[#252525]">
              <a
                href={getWhatsAppUrl(`Assalamu Alaikum. I would like to book the ${selectedPackage.name} (${selectedPackage.price}/person) for my family. Please share next departure dates and payment process.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-3 px-4 text-xs font-bold rounded-lg bg-[#25D366] text-black hover:bg-[#20ba59] transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-black text-[#25D366]" />
                <span>Enquire via WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setSelectedPackage(null);
                  if (onOpenQuoteModal) onOpenQuoteModal(selectedPackage);
                }}
                className="w-full sm:w-auto py-3 px-5 text-xs font-semibold rounded-lg bg-[#D4AF37] text-black hover:bg-[#C5A253] transition-colors"
              >
                Request Quotation Form
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
