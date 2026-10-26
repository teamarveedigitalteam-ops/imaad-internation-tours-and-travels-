import React from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

interface AboutUsSectionProps {
  onContactClick?: () => void;
  isStandalonePage?: boolean;
}

export const AboutUsSection: React.FC<AboutUsSectionProps> = ({
  onContactClick,
  isStandalonePage = false,
}) => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#0B0B0B] border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image Asset & Office Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#181818] border border-[#2D2D2D] shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=900&q=80"
                alt="Imaad International Tours & Travels pilgrimage dedication"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-semibold block">
                  Registered Travel Office
                </span>
                <p className="text-sm font-medium text-white">
                  Rahmath Nagar, Beside Pista House, Bandlaguda, Hyderabad
                </p>
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="p-6 rounded-xl bg-[#141414] border border-[#262626] text-xs space-y-3">
              <div className="flex items-start gap-3 text-[#BDBDBD]">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{SITE_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3 text-[#BDBDBD]">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{SITE_INFO.operatingHours}</span>
              </div>
              <div className="flex items-center gap-3 text-[#BDBDBD]">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{SITE_INFO.phonePrimary} / {SITE_INFO.phoneSecondary}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Mission and Narrative */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 px-2.5 py-1 bg-white rounded-lg border border-[#D4AF37]/50 shadow-sm flex items-center justify-center">
                <img
                  src={SITE_INFO.logoUrl}
                  alt={SITE_INFO.brandName}
                  className="h-full w-auto object-contain max-h-8"
                />
              </div>
              <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                About The Company
              </div>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white font-display mb-6">
              Serving the Guests of Allah with Dignity & Transparency
            </h2>

            <p className="text-sm sm:text-base text-[#D0D0D0] leading-relaxed mb-4">
              <strong className="text-white">Imaad International Tours & Travels</strong> is a Hyderabad-based pilgrimage travel agency dedicated to facilitating dignified, spiritually peaceful Umrah journeys for individuals, couples, and multi-generational families.
            </p>

            <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed mb-6">
              We understand that embarking on an Umrah is a lifetime spiritual milestone. Our philosophy is rooted in absolute transparency: we provide verified hotel distances, honest pricing, hygienic Hyderabadi catering, and dedicated on-ground Urdu and Hindi speaking team members stationed in Makkah and Madinah to assist pilgrims at every step.
            </p>

            {/* Core Commitments */}
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-white">
                <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span><strong className="text-[#D4AF37]">Personalized Attention:</strong> Tailored quad, triple, or twin accommodation suited for senior citizens and families.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-white">
                <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span><strong className="text-[#D4AF37]">Clear Written Quotations:</strong> Full itemized contracts detailing exact airline baggage, hotel proximity, and meal schedules.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-white">
                <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span><strong className="text-[#D4AF37]">Authentic Guided Ziyarat:</strong> Scholarly and respectful visits to 12 historical landmarks in Makkah and 6 in Madinah.</span>
              </div>
            </div>

            {onContactClick && (
              <button
                onClick={onContactClick}
                className="px-6 py-3 text-xs font-semibold rounded-lg bg-[#D4AF37] text-black hover:bg-[#C5A253] transition-colors inline-flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>Contact Our Hyderabad Office</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
