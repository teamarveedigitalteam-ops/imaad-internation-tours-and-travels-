import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Phone, Compass, MapPin } from 'lucide-react';
import { SITE_INFO, getWhatsAppUrl } from '../data/siteData';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', view: 'home' },
    { label: 'Umrah Packages', view: 'packages' },
    { label: 'Makkah Ziyarat', view: 'makkah-ziyarat' },
    { label: 'Madinah Ziyarat', view: 'madinah-ziyarat' },
    { label: 'Hotels', view: 'hotels' },
    { label: 'Gallery', view: 'gallery' },
    { label: 'About Us', view: 'about' },
    { label: 'Contact', view: 'contact' },
  ];

  const handleLinkClick = (view: string) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top micro-bar for direct contact */}
      <div className="bg-[#0B0B0B] border-b border-[#252525] text-xs text-[#BDBDBD] py-1.5 px-4 sm:px-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-white/80">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              Rahmath Nagar, Bandlaguda, Hyderabad
            </span>
            <span className="text-white/40">|</span>
            <a href={`tel:${SITE_INFO.phonePrimaryRaw}`} className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              {SITE_INFO.phonePrimary}
            </a>
            <a href={`tel:${SITE_INFO.phoneSecondaryRaw}`} className="hover:text-[#D4AF37] transition-colors">
              {SITE_INFO.phoneSecondary}
            </a>
          </div>
          <div className="text-white/60">
            Official Umrah Pilgrimage & Ziyarat Services
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-black/95 backdrop-blur-md border-b border-[#2A2A2A] shadow-lg shadow-black/50 py-3'
            : 'bg-black/80 backdrop-blur-sm border-b border-[#1E1E1E] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Official Brand Logo */}
            <button
              onClick={() => handleLinkClick('home')}
              className="flex items-center gap-3 text-left focus:outline-none group shrink-0"
              aria-label="Imaad International Tours & Travels Home"
            >
              <div className="h-10 sm:h-11 px-2.5 py-1 bg-white rounded-lg border border-[#D4AF37]/50 shadow-md flex items-center justify-center group-hover:border-[#D4AF37] group-hover:shadow-[#D4AF37]/20 transition-all">
                <img
                  src={SITE_INFO.logoUrl}
                  alt={SITE_INFO.brandName}
                  className="h-full w-auto object-contain max-h-8 sm:max-h-9"
                />
              </div>
            </button>

            {/* Zone 2: Navigation Links (single-line, clean hover) */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-[#BDBDBD]">
              {navLinks.map((link) => {
                const isActive = currentView === link.view;
                return (
                  <button
                    key={link.view}
                    onClick={() => handleLinkClick(link.view)}
                    className={`whitespace-nowrap shrink-0 transition-colors py-1 relative ${
                      isActive ? 'text-[#D4AF37] font-semibold' : 'hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4AF37]" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: Primary Action (WhatsApp button) */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-[#25D366] text-black hover:bg-[#20ba59] transition-colors whitespace-nowrap shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-black text-[#25D366]" />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#25D366] hover:text-white"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#BDBDBD] hover:text-white focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] z-50 bg-black/95 backdrop-blur-xl border-t border-[#252525] lg:hidden overflow-y-auto p-6">
          <div className="flex flex-col gap-4 text-base">
            {navLinks.map((link) => (
              <button
                key={link.view}
                onClick={() => handleLinkClick(link.view)}
                className={`text-left py-3 px-3 rounded-lg border-b border-[#1E1E1E] transition-colors ${
                  currentView === link.view
                    ? 'text-[#D4AF37] bg-[#141414] font-semibold'
                    : 'text-[#BDBDBD] hover:text-white hover:bg-[#111111]'
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold rounded-lg bg-[#25D366] text-black hover:bg-[#20ba59] transition-colors"
              >
                <MessageCircle className="w-5 h-5 fill-black text-[#25D366]" />
                <span>Chat on WhatsApp (+91 79891 15941)</span>
              </a>

              <a
                href={`tel:${SITE_INFO.phonePrimaryRaw}`}
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold rounded-lg border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now: +91 79891 15941</span>
              </a>
            </div>

            <div className="mt-6 pt-4 border-t border-[#222222] text-xs text-[#888888] space-y-2">
              <div className="inline-block p-2 bg-white rounded-lg border border-[#D4AF37]/50">
                <img
                  src={SITE_INFO.logoUrl}
                  alt={SITE_INFO.brandName}
                  className="h-8 w-auto object-contain"
                />
              </div>
              <p className="text-white font-medium">{SITE_INFO.brandName}</p>
              <p>{SITE_INFO.address}</p>
              <p>Email: {SITE_INFO.email}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
