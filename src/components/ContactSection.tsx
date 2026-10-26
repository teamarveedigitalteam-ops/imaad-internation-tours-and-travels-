import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { SITE_INFO, getWhatsAppUrl } from '../data/siteData';

interface ContactSectionProps {
  initialPackage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialPackage }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    packageChoice: initialPackage || 'Standard Umrah Package',
    travelMonth: 'November 2026',
    travellersCount: '2',
    notes: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      setFormStatus('error');
      return;
    }

    // Build prefilled WhatsApp message
    const customMessage = `Assalamu Alaikum Imaad Travels.
Name: ${formData.name}
Phone: ${formData.phone}
Package: ${formData.packageChoice}
Preferred Travel: ${formData.travelMonth}
Pilgrims Count: ${formData.travellersCount}
Additional Notes: ${formData.notes || 'None'}`;

    const waUrl = getWhatsAppUrl(customMessage);
    setGeneratedWhatsAppUrl(waUrl);
    setFormStatus('success');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#0B0B0B] border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-display mb-4">
            Consultation & Enquiries
          </h2>
          <p className="text-sm sm:text-base text-[#BDBDBD] leading-relaxed">
            Speak directly with our pilgrimage travel advisors in Hyderabad or visit our office in Rahmath Nagar, Bandlaguda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Verified Contact Information & Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#141414] border border-[#2B2B2B]">
              <h3 className="text-xl font-bold text-white font-display mb-6">
                Hyderabad Head Office
              </h3>

              <div className="space-y-5 text-xs sm:text-sm text-[#BDBDBD]">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#1E1E1E] border border-[#333333] flex items-center justify-center text-[#D4AF37] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">Office Address</strong>
                    <p className="leading-relaxed text-white/80 mt-0.5">{SITE_INFO.address}</p>
                    <a
                      href={SITE_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-xs font-semibold text-[#D4AF37] hover:underline"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#1E1E1E] border border-[#333333] flex items-center justify-center text-[#D4AF37] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">Telephone & Direct Lines</strong>
                    <div className="mt-1 space-y-1">
                      <div>
                        <a href={`tel:${SITE_INFO.phonePrimaryRaw}`} className="text-white hover:text-[#D4AF37] transition-colors font-mono">
                          {SITE_INFO.phonePrimary} (Primary)
                        </a>
                      </div>
                      <div>
                        <a href={`tel:${SITE_INFO.phoneSecondaryRaw}`} className="text-white hover:text-[#D4AF37] transition-colors font-mono">
                          {SITE_INFO.phoneSecondary} (Support)
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#1E1E1E] border border-[#333333] flex items-center justify-center text-[#D4AF37] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">Official Email</strong>
                    <a href={`mailto:${SITE_INFO.email}`} className="text-white hover:text-[#D4AF37] transition-colors mt-0.5 block break-all">
                      {SITE_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#1E1E1E] border border-[#333333] flex items-center justify-center text-[#D4AF37] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">Visiting Hours</strong>
                    <p className="mt-0.5 text-white/80">{SITE_INFO.operatingHours}</p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Primary Button */}
              <div className="mt-8 pt-6 border-t border-[#222222]">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 text-xs font-bold rounded-lg bg-[#25D366] text-black hover:bg-[#20ba59] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-black text-[#25D366]" />
                  <span>Instant Chat on WhatsApp (+91 79891 15941)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Quotation Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#141414] border border-[#2B2B2B]">
              <h3 className="text-xl font-bold text-white font-display mb-2">
                Request a Custom Package Quotation
              </h3>
              <p className="text-xs sm:text-sm text-[#A0A0A0] mb-6">
                Fill out the details below to receive a formal itemized quotation for your family or group.
              </p>

              {formStatus === 'success' ? (
                <div className="p-6 rounded-xl bg-[#1A1A1A] border border-[#25D366]/40 space-y-4">
                  <div className="flex items-center gap-3 text-[#25D366]">
                    <CheckCircle2 className="w-6 h-6 shrink-0" />
                    <h4 className="text-base font-bold text-white font-display">
                      Quotation Request Prepared!
                    </h4>
                  </div>
                  <p className="text-xs text-[#BDBDBD] leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Your enquiry details for the <strong>{formData.packageChoice}</strong> ({formData.travellersCount} pilgrims) have been formatted.
                  </p>
                  <p className="text-xs text-[#CCCCCC]">
                    To receive an immediate response and confirmed airline slots, click the button below to send your request directly to our lead coordinator on WhatsApp:
                  </p>

                  <a
                    href={generatedWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 text-xs font-bold rounded-lg bg-[#25D366] text-black hover:bg-[#20ba59] transition-colors cursor-pointer shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4 fill-black text-[#25D366]" />
                    <span>Send Form to WhatsApp for Instant Review</span>
                  </a>

                  <button
                    onClick={() => setFormStatus('idle')}
                    className="text-xs text-[#D4AF37] hover:underline block mx-auto pt-2 cursor-pointer"
                  >
                    Modify details or submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {formStatus === 'error' && (
                    <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-500/50 text-xs text-rose-300 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>Please provide your Name and valid Phone Number.</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#BDBDBD] mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Mohammed Farooq"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#1B1B1B] border border-[#303030] text-xs text-white placeholder-white/30 focus:border-[#D4AF37] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#BDBDBD] mb-1.5">
                        Mobile / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#1B1B1B] border border-[#303030] text-xs text-white placeholder-white/30 focus:border-[#D4AF37] focus:outline-none transition-colors font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#BDBDBD] mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@gmail.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#1B1B1B] border border-[#303030] text-xs text-white placeholder-white/30 focus:border-[#D4AF37] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#BDBDBD] mb-1.5">
                        Package Selection
                      </label>
                      <select
                        value={formData.packageChoice}
                        onChange={(e) => setFormData({ ...formData, packageChoice: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#1B1B1B] border border-[#303030] text-xs text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                      >
                        <option value="Basic Umrah Package (₹79,000)">Basic Umrah Package (₹79,000 draft)</option>
                        <option value="Standard Umrah Package (₹95,000)">Standard Umrah Package (₹95,000 draft)</option>
                        <option value="Deluxe Umrah Package (₹1,10,000)">Deluxe Umrah Package (₹1,10,000 draft)</option>
                        <option value="Custom Family Group / VIP Suite">Custom Family Group / VIP Suite</option>
                        <option value="Ziyarat & Transport Only">Ziyarat & Transport Only</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#BDBDBD] mb-1.5">
                        Preferred Travel Period
                      </label>
                      <select
                        value={formData.travelMonth}
                        onChange={(e) => setFormData({ ...formData, travelMonth: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#1B1B1B] border border-[#303030] text-xs text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                      >
                        <option value="November 2026">November 2026</option>
                        <option value="December 2026 (Winter Break)">December 2026 (Winter Break)</option>
                        <option value="January 2027">January 2027</option>
                        <option value="February 2027">February 2027</option>
                        <option value="Ramadan 2027">Ramadan 2027 Season</option>
                        <option value="Flexible / Immediate Availability">Flexible / Immediate Availability</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#BDBDBD] mb-1.5">
                        Number of Pilgrims
                      </label>
                      <select
                        value={formData.travellersCount}
                        onChange={(e) => setFormData({ ...formData, travellersCount: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#1B1B1B] border border-[#303030] text-xs text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                      >
                        <option value="1 Pilgrim (Single sharing)">1 Pilgrim</option>
                        <option value="2 Pilgrims (Twin / Couple)">2 Pilgrims (Twin / Couple)</option>
                        <option value="3 Pilgrims (Triple sharing)">3 Pilgrims (Triple sharing)</option>
                        <option value="4 Pilgrims (Quad Family)">4 Pilgrims (Quad Family)</option>
                        <option value="5+ Pilgrims (Family Group)">5+ Pilgrims (Family Group)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#BDBDBD] mb-1.5">
                      Specific Requirements (Elderly assistance, Wheelchair, Direct flights)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. Traveling with elderly parents, prefer hotel closer than 300m, need child cot..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#1B1B1B] border border-[#303030] text-xs text-white placeholder-white/30 focus:border-[#D4AF37] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <p className="text-[11px] text-[#777777]">
                      We do not share your contact info with third parties.
                    </p>

                    <button
                      type="submit"
                      className="px-6 py-2.5 text-xs font-semibold rounded-lg bg-[#D4AF37] text-black hover:bg-[#C5A253] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Prepare Quotation Request</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
