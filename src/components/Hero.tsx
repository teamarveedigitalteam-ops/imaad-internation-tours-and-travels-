import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Hotel, Compass, Clock } from 'lucide-react';
import { SITE_INFO, getWhatsAppUrl } from '../data/siteData';

interface HeroProps {
  onExplorePackages: () => void;
  onExploreZiyarat: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplorePackages, onExploreZiyarat }) => {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[88vh] flex flex-col justify-between bg-black overflow-hidden border-b border-[#252525]">
      {/* Background Hero Image with Measured Gradient Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=2000&q=85"
          alt="The Holy Kaaba and Masjid al-Haram during tranquil evening prayer"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.45] scale-[1.02] transition-transform duration-1000 ease-out"
        />
        {/* Subtle radial and gradient scrims to ensure 4.5:1 text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/50 to-black" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-12 my-auto w-full">
        <div className="max-w-3xl">
          {/* Official Logo Emblem & Editorial Kicker */}
          <div className="inline-flex items-center gap-3 p-1.5 pr-4 mb-6 rounded-xl bg-black/60 backdrop-blur-md border border-[#D4AF37]/40 shadow-lg">
            <div className="h-8 px-2 py-0.5 bg-white rounded-lg flex items-center justify-center">
              <img
                src={SITE_INFO.logoUrl}
                alt={SITE_INFO.brandName}
                className="h-full w-auto object-contain max-h-7"
              />
            </div>
            <span className="text-xs uppercase tracking-wider font-semibold text-[#D4AF37]">
              Hyderabad's Trusted Pilgrimage Specialist
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15] mb-6 font-display" style={{ textWrap: 'balance' }}>
            Your Sacred Journey, <span className="gold-gradient-text">Beautifully Planned.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-xl text-[#BDBDBD] font-normal leading-relaxed mb-8 max-w-2xl">
            {SITE_INFO.subTagline}
          </p>

          <p className="text-sm text-white/70 mb-8 max-w-xl">
            Departing from Rajiv Gandhi International Airport (HYD) with verified close-to-Haram hotels, guided historic Ziyarat, authentic Hyderabadi catering, and dedicated on-ground assistance.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onExplorePackages}
              className="px-6 py-3.5 text-sm font-semibold rounded-lg bg-[#D4AF37] text-black hover:bg-[#C5A253] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/20 whitespace-nowrap cursor-pointer"
            >
              <span>Explore Umrah Packages</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={getWhatsAppUrl('Assalamu Alaikum. I would like to inquire about current Umrah packages departing from Hyderabad. Please share package details and dates.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 text-sm font-semibold rounded-lg bg-[#25D366] text-black hover:bg-[#20ba59] transition-colors flex items-center justify-center gap-2 whitespace-nowrap shadow-md cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-black text-[#25D366]" />
              <span>Enquire on WhatsApp</span>
            </a>

            <button
              onClick={onExploreZiyarat}
              className="px-5 py-3.5 text-sm font-medium rounded-lg border border-[#303030] text-[#BDBDBD] hover:text-white hover:border-[#D4AF37]/50 transition-colors flex items-center justify-center whitespace-nowrap cursor-pointer"
            >
              <span>View Sacred Ziyarat</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4-Item Proof & Trust Strip Below Hero */}
      <div className="relative z-10 bg-[#0B0B0B]/90 backdrop-blur-md border-t border-[#252525] py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-xs text-[#BDBDBD]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#181818] border border-[#303030] flex items-center justify-center text-[#D4AF37] shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold text-white">Direct & 1-Stop Flights</p>
              <p className="text-white/60">Hyderabad (RGIA) Departures</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#181818] border border-[#303030] flex items-center justify-center text-[#D4AF37] shrink-0">
              <Hotel className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold text-white">Verified Haram Hotels</p>
              <p className="text-white/60">Walking Distance & Free Shuttle</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#181818] border border-[#303030] flex items-center justify-center text-[#D4AF37] shrink-0">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold text-white">Guided Sacred Ziyarat</p>
              <p className="text-white/60">12 Makkah + 6 Madinah Sites</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#181818] border border-[#303030] flex items-center justify-center text-[#D4AF37] shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold text-white">24/7 Ground Assistance</p>
              <p className="text-white/60">Urdu & Hindi Speaking Guides</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
