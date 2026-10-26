import React from 'react';
import { UserCheck, ShieldCheck, Hotel, Compass, FileCheck, Headphones } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/siteData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-[#D4AF37]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />;
      case 'Hotel':
        return <Hotel className="w-6 h-6 text-[#D4AF37]" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#D4AF37]" />;
      case 'FileCheck':
        return <FileCheck className="w-6 h-6 text-[#D4AF37]" />;
      case 'Headphones':
        return <Headphones className="w-6 h-6 text-[#D4AF37]" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-black border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">
            The Imaad Standards
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display mb-3">
            Why Pilgrims Choose Imaad Travels
          </h2>
          <p className="text-sm text-[#BDBDBD] leading-relaxed">
            Founded on transparency, genuine hospitality, and deep respect for the sacred rites.
          </p>
        </div>

        {/* Minimal 6-box icon grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#141414] border border-[#272727] hover:border-[#D4AF37]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#1D1D1D] border border-[#333333] flex items-center justify-center mb-4">
                  {getIcon(item.iconName)}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-display">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A5A5A5] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
