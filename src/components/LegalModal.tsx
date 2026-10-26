import React, { useEffect } from 'react';
import { X, ShieldCheck, Printer, ArrowLeft } from 'lucide-react';
import { LEGAL_POLICIES } from '../data/legalPolicies';

interface LegalModalProps {
  policyId: string | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ policyId, onClose }) => {
  if (!policyId || !LEGAL_POLICIES[policyId]) return null;

  const policy = LEGAL_POLICIES[policyId];

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#121212] border border-[#2F2F2F] rounded-2xl shadow-2xl max-h-[92vh] flex flex-col overflow-hidden">
        {/* Modal Sticky Header */}
        <div className="p-6 border-b border-[#252525] bg-[#161616] flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#222222] border border-[#333333] flex items-center justify-center text-[#D4AF37]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-semibold block">
                Official Business Policy • Last Updated {policy.lastUpdated}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
                {policy.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 text-[#999999] hover:text-white rounded-lg bg-[#202020] border border-[#303030] transition-colors hidden sm:flex items-center gap-1.5 text-xs cursor-pointer"
              title="Print Policy"
            >
              <Printer className="w-4 h-4" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 text-[#999999] hover:text-white rounded-lg bg-[#202020] border border-[#303030] transition-colors cursor-pointer"
              aria-label="Close policy"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-sm text-[#CCCCCC] leading-relaxed">
          {/* Policy Summary */}
          <div className="p-4 rounded-xl bg-[#181818] border border-[#2A2A2A] text-xs text-[#E0E0E0] italic">
            {policy.summary}
          </div>

          {/* Policy Sections */}
          <div className="space-y-6">
            {policy.sections.map((sec, idx) => (
              <div key={idx} className="space-y-3 pb-4 border-b border-[#222222] last:border-b-0">
                <h3 className="text-base font-bold text-white font-display text-[#D4AF37]">
                  {sec.heading}
                </h3>
                <div className="space-y-2 text-xs sm:text-sm text-[#BDBDBD]">
                  {sec.content.map((paragraph, pIdx) => (
                    <p key={pIdx} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Legal Review Disclaimer */}
          <div className="p-4 rounded-xl bg-[#151515] border border-[#252525] text-xs text-[#888888]">
            <p>
              Imaad International Tours & Travels operates in full compliance with the Consumer Protection Act (2019) and Ministry of External Affairs pilgrimage advisories. For direct verification or inquiries, visit our Hyderabad office or write to <span className="text-white">imaadinternationaltravels@gmail.com</span>.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#161616] border-t border-[#252525] flex items-center justify-between shrink-0 text-xs">
          <span className="text-[#888888]">Imaad International Tours & Travels • Hyderabad</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#D4AF37] text-black font-semibold hover:bg-[#C5A253] transition-colors cursor-pointer"
          >
            Close Policy
          </button>
        </div>
      </div>
    </div>
  );
};
