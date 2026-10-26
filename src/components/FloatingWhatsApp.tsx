import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { SITE_INFO, getWhatsAppUrl } from '../data/siteData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3">
      {/* Tooltip bubble (can be dismissed) */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 p-3 rounded-xl bg-[#181818] border border-[#333333] shadow-2xl text-xs text-white max-w-xs animate-fade-in">
          <div className="w-2 h-2 rounded-full bg-[#25D366] shrink-0" />
          <div className="leading-tight">
            <span className="font-semibold block text-[#D4AF37]">Have an Umrah Query?</span>
            <span className="text-[#BDBDBD] text-[11px]">Chat with our Hyderabad team</span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="p-1 text-[#888888] hover:text-white rounded ml-1 cursor-pointer"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-black shadow-2xl shadow-green-900/40 flex items-center justify-center transition-all duration-300 hover:scale-105 group cursor-pointer"
        aria-label="Contact Imaad Travels on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-black text-[#25D366] group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
};
