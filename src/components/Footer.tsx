import React from 'react';
import { Compass, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { SITE_INFO, getWhatsAppUrl } from '../data/siteData';

interface FooterProps {
  onNavigate: (view: string) => void;
  onOpenLegal: (policyId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLegal }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-[#222222] text-[#BDBDBD] text-xs">
      {/* Upper Footer: Brand, Services & Contact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Summary */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-12 px-3 py-1.5 bg-white rounded-lg border border-[#D4AF37]/50 flex items-center justify-center shadow-md">
                <img
                  src={SITE_INFO.logoUrl}
                  alt={SITE_INFO.brandName}
                  className="h-full w-auto object-contain max-h-9"
                />
              </div>
            </div>

            <p className="text-xs text-[#999999] leading-relaxed">
              Your Sacred Journey, Beautifully Planned. Providing all-inclusive Umrah packages, close-to-Haram hotel bookings, authentic Makkah & Madinah Ziyarat, and round-the-clock pilgrim support.
            </p>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg bg-[#25D366] text-black hover:bg-[#20ba59] transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-black text-[#25D366]" />
                <span>Quick WhatsApp Assistance</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#9E9E9E]">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('packages')}
                  className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer"
                >
                  Umrah Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('makkah-ziyarat')}
                  className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer"
                >
                  Makkah Ziyarat
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('madinah-ziyarat')}
                  className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer"
                >
                  Madinah Ziyarat
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('hotels')}
                  className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer"
                >
                  Hotels
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer"
                >
                  Photo Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Policies Column (All 5 mandatory policies) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">
              Legal & Booking Policies
            </h4>
            <ul className="space-y-2 text-xs text-[#9E9E9E]">
              <li>
                <button
                  onClick={() => onOpenLegal('privacy-policy')}
                  className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('terms-and-conditions')}
                  className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('cancellation-refund-policy')}
                  className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer"
                >
                  Cancellation & Refund Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('booking-payment-policy')}
                  className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer"
                >
                  Booking & Payment Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('disclaimer')}
                  className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer"
                >
                  Website Disclaimer
                </button>
              </li>
            </ul>

            <div className="pt-2 text-[11px] text-[#777777] leading-relaxed">
              All policies comply with applicable Indian Travel and Consumer Protection standards.
            </div>
          </div>

          {/* Office Contact Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">
              Hyderabad Head Office
            </h4>
            <div className="space-y-2 text-xs text-[#9E9E9E]">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{SITE_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`tel:${SITE_INFO.phonePrimaryRaw}`} className="hover:text-white transition-colors">
                  {SITE_INFO.phonePrimary}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`tel:${SITE_INFO.phoneSecondaryRaw}`} className="hover:text-white transition-colors">
                  {SITE_INFO.phoneSecondary}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`mailto:${SITE_INFO.email}`} className="hover:text-white transition-colors break-all">
                  {SITE_INFO.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Compliance */}
      <div className="border-t border-[#1C1C1C] py-6 px-4 sm:px-8 bg-[#070707]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#777777]">
          <div>
            © {currentYear} {SITE_INFO.brandName}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Hyderabad, Telangana, India</span>
            <span>·</span>
            <span>https://imaadinternationaltravels.com/</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
