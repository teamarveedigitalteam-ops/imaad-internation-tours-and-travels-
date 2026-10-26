import React, { useState } from 'react';
import { MessageSquare, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { getWhatsAppUrl } from '../data/siteData';

export const CustomerReviews: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [feedback, setFeedback] = useState({
    name: '',
    phone: '',
    yearOfTravel: '2026',
    packageTraveled: 'Standard Umrah Package',
    comments: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16 bg-black border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#141414] border border-[#2B2B2B] rounded-2xl p-6 sm:p-10 max-w-4xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Authentic Pilgrim Feedback Policy</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display mb-2">
              Share Your Pilgrimage Experience
            </h2>
            <p className="text-xs sm:text-sm text-[#A0A0A0]">
              In accordance with our commitment to transparency, we publish verified feedback received directly from our traveling pilgrims and their families.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 rounded-xl bg-[#1A1A1A] border border-[#25D366]/40 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-[#25D366] mx-auto" />
              <h3 className="text-lg font-bold text-white font-display">JazakAllah Khair for Your Valuable Feedback!</h3>
              <p className="text-xs text-[#BDBDBD] max-w-md mx-auto">
                Your feedback has been received by the Imaad Travels management team. We continuously refine our services to better serve future pilgrims.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 text-xs text-[#D4AF37] hover:underline cursor-pointer"
              >
                Submit another response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#BDBDBD] mb-1.5">
                    Your Name / Head of Family *
                  </label>
                  <input
                    type="text"
                    required
                    value={feedback.name}
                    onChange={(e) => setFeedback({ ...feedback, name: e.target.value })}
                    placeholder="e.g. Mohammed Farooq"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#1B1B1B] border border-[#303030] text-xs text-white placeholder-white/30 focus:border-[#D4AF37] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#BDBDBD] mb-1.5">
                    Contact / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={feedback.phone}
                    onChange={(e) => setFeedback({ ...feedback, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#1B1B1B] border border-[#303030] text-xs text-white placeholder-white/30 focus:border-[#D4AF37] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#BDBDBD] mb-1.5">
                    Package Traveled With Us
                  </label>
                  <select
                    value={feedback.packageTraveled}
                    onChange={(e) => setFeedback({ ...feedback, packageTraveled: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#1B1B1B] border border-[#303030] text-xs text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                  >
                    <option value="Basic Umrah Package">Basic Umrah Package</option>
                    <option value="Standard Umrah Package">Standard Umrah Package</option>
                    <option value="Deluxe Umrah Package">Deluxe Umrah Package</option>
                    <option value="Custom Group / Ziyarat Package">Custom Group / Ziyarat Package</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#BDBDBD] mb-1.5">
                    Year of Travel
                  </label>
                  <select
                    value={feedback.yearOfTravel}
                    onChange={(e) => setFeedback({ ...feedback, yearOfTravel: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#1B1B1B] border border-[#303030] text-xs text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                  >
                    <option value="2026">2026</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#BDBDBD] mb-1.5">
                  Your Experience & Suggestions (Hotel, Food, Transport, Guide) *
                </label>
                <textarea
                  required
                  rows={3}
                  value={feedback.comments}
                  onChange={(e) => setFeedback({ ...feedback, comments: e.target.value })}
                  placeholder="Share details regarding hotel proximity, guide coordination, food arrangements, or suggestions..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#1B1B1B] border border-[#303030] text-xs text-white placeholder-white/30 focus:border-[#D4AF37] focus:outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <p className="text-[11px] text-[#777777]">
                  Your review will be verified prior to being published on our site.
                </p>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href={getWhatsAppUrl("Assalamu Alaikum Imaad Travels. I recently traveled with your agency and would like to share my feedback directly.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-semibold rounded-lg bg-[#25D366] text-black hover:bg-[#20ba59] transition-colors flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-black" />
                    <span>Send on WhatsApp</span>
                  </a>

                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-semibold rounded-lg bg-[#D4AF37] text-black hover:bg-[#C5A253] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Feedback</span>
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
