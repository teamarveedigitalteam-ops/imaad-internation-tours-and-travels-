import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { QUICK_SERVICES } from '../data/siteData';

interface QuickServicesProps {
  onSelectService: (view: string) => void;
}

export const QuickServices: React.FC<QuickServicesProps> = ({ onSelectService }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#0B0B0B] border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">
              Our Core Offerings
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white font-display">
              Dedicated Pilgrimage Services
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm text-[#BDBDBD] max-w-md">
            Everything organized end-to-end so you and your family can immerse in worship with tranquility and complete peace of mind.
          </p>
        </div>

        {/* 6 Category Image Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {QUICK_SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative bg-[#181818] border border-[#2A2A2A] rounded-xl overflow-hidden hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Frame with fallback support */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#111111]">
                <img
                  src={service.image}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent opacity-80" />
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors mb-2 font-display">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#BDBDBD] leading-relaxed mb-6">
                    {service.tagline}
                  </p>
                </div>

                <div>
                  <button
                    onClick={() => onSelectService(service.view)}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] hover:text-white transition-colors cursor-pointer"
                  >
                    <span>Explore Service</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
