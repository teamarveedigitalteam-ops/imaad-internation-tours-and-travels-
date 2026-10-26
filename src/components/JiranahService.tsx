import React from 'react';
import { MessageCircle, Compass, CheckCircle2, AlertCircle } from 'lucide-react';
import { JIRANAH_SERVICE, getWhatsAppUrl } from '../data/siteData';

export const JiranahService: React.FC = () => {
  return (
    <section className="py-16 bg-[#111111] border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#181818] border border-[#2F2F2F] rounded-2xl overflow-hidden p-6 sm:p-10 lg:p-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Visual Asset */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#0A0A0A] border border-[#333333]">
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80"
                  alt="Masjid al-Ji'ranah sacred Miqat destination"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Verified spelling notice tag */}
              <div className="mt-3 p-3 rounded-lg bg-[#0F0F0F] border border-[#262626] text-[11px] text-[#A0A0A0] flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{JIRANAH_SERVICE.verifiedSpellingNote}</span>
              </div>
            </div>

            {/* Right Column: Service Details */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-2">
                <Compass className="w-3.5 h-3.5" />
                <span>Specialized Miqat Coordination</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold text-white font-display mb-3">
                {JIRANAH_SERVICE.title}
              </h2>

              <p className="text-sm text-[#BDBDBD] leading-relaxed mb-6">
                {JIRANAH_SERVICE.description}
              </p>

              {/* Service Features List */}
              <div className="space-y-2.5 mb-6">
                {JIRANAH_SERVICE.servicesArranged.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#CCCCCC]">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Religious Fiqh Note */}
              <div className="p-3.5 rounded-lg bg-[#141414] border border-[#2B2B2B] text-xs text-[#999999] mb-6">
                <p className="font-semibold text-white/90 mb-1">Religious Guidance Note:</p>
                <p>{JIRANAH_SERVICE.guidanceNote}</p>
              </div>

              {/* WhatsApp Call to Action */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={getWhatsAppUrl("Assalamu Alaikum. I would like to arrange private AC transportation for Umrah from Masjid al-Ji'ranah during my stay in Makkah. Please share timings and vehicle options.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 text-xs font-bold rounded-lg bg-[#25D366] text-black hover:bg-[#20ba59] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-black text-[#25D366]" />
                  <span>Enquire on WhatsApp for Ji'ranah Transport</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
