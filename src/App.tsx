import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickServices } from './components/QuickServices';
import { UmrahPackagesSection } from './components/UmrahPackagesSection';
import { ZiyaratSection } from './components/ZiyaratSection';
import { JiranahService } from './components/JiranahService';
import { HotelsSection } from './components/HotelsSection';
import { GallerySection } from './components/GallerySection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutUsSection } from './components/AboutUsSection';
import { CustomerReviews } from './components/CustomerReviews';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { UmrahPackage } from './data/siteData';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [activeLegalPolicy, setActiveLegalPolicy] = useState<string | null>(null);
  const [quoteRequestedPackage, setQuoteRequestedPackage] = useState<string | undefined>(undefined);

  // Sync hash routing on initial load and popstate
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['packages', 'makkah-ziyarat', 'madinah-ziyarat', 'hotels', 'gallery', 'about', 'contact', 'home'].includes(hash)) {
        setCurrentView(hash);
      } else if (['privacy-policy', 'terms-and-conditions', 'cancellation-refund-policy', 'booking-payment-policy', 'disclaimer'].includes(hash)) {
        setActiveLegalPolicy(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (view: string) => {
    setCurrentView(view);
    window.location.hash = view;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenLegal = (policyId: string) => {
    setActiveLegalPolicy(policyId);
  };

  const handleOpenQuoteModal = (pkg: UmrahPackage) => {
    setQuoteRequestedPackage(pkg.name);
    setCurrentView('contact');
    window.location.hash = 'contact';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col selection:bg-[#D4AF37]/30 selection:text-white">
      {/* Premium Sticky Navigation */}
      <Navbar currentView={currentView} onNavigate={handleNavigate} />

      {/* Main View Switcher */}
      <main className="flex-1">
        {currentView === 'home' && (
          <>
            {/* Section A: Hero */}
            <Hero
              onExplorePackages={() => handleNavigate('packages')}
              onExploreZiyarat={() => handleNavigate('makkah-ziyarat')}
            />

            {/* Section B: Quick Service Categories */}
            <QuickServices onSelectService={handleNavigate} />

            {/* Section C: Featured Umrah Packages */}
            <UmrahPackagesSection onOpenQuoteModal={handleOpenQuoteModal} />

            {/* Section D: Why Choose Us */}
            <WhyChooseUs />

            {/* Section E: Makkah & Madinah Ziyarat Preview */}
            <ZiyaratSection
              initialCity="All"
              showAllLocations={false}
              onExploreFullZiyarat={() => handleNavigate('makkah-ziyarat')}
            />

            {/* Section 9: Special Umrah from Masjid al-Ji'ranah */}
            <JiranahService />

            {/* Section F: Hotel Preview */}
            <HotelsSection />

            {/* Section G: Gallery Preview */}
            <GallerySection />

            {/* Section H: About Company */}
            <AboutUsSection onContactClick={() => handleNavigate('contact')} />

            {/* Section I: Verified Customer Feedback Invitation */}
            <CustomerReviews />

            {/* Section J: Contact & Quotation Generator */}
            <ContactSection initialPackage={quoteRequestedPackage} />
          </>
        )}

        {/* Dedicated Umrah Packages Page */}
        {currentView === 'packages' && (
          <div className="py-8">
            <UmrahPackagesSection onOpenQuoteModal={handleOpenQuoteModal} isStandalonePage={true} />
            <WhyChooseUs />
            <ContactSection initialPackage={quoteRequestedPackage} />
          </div>
        )}

        {/* Dedicated Makkah Ziyarat Page */}
        {currentView === 'makkah-ziyarat' && (
          <div className="py-8">
            <ZiyaratSection initialCity="Makkah" showAllLocations={true} />
            <JiranahService />
          </div>
        )}

        {/* Dedicated Madinah Ziyarat Page */}
        {currentView === 'madinah-ziyarat' && (
          <div className="py-8">
            <ZiyaratSection initialCity="Madinah" showAllLocations={true} />
          </div>
        )}

        {/* Dedicated Hotels Page */}
        {currentView === 'hotels' && (
          <div className="py-8">
            <HotelsSection />
          </div>
        )}

        {/* Dedicated Gallery Page */}
        {currentView === 'gallery' && (
          <div className="py-8">
            <GallerySection isStandalonePage={true} />
          </div>
        )}

        {/* Dedicated About Us Page */}
        {currentView === 'about' && (
          <div className="py-8">
            <AboutUsSection onContactClick={() => handleNavigate('contact')} isStandalonePage={true} />
            <WhyChooseUs />
            <CustomerReviews />
          </div>
        )}

        {/* Dedicated Contact Us Page */}
        {currentView === 'contact' && (
          <div className="py-8">
            <ContactSection initialPackage={quoteRequestedPackage} />
          </div>
        )}
      </main>

      {/* Global Footer with all 13 Links */}
      <Footer onNavigate={handleNavigate} onOpenLegal={handleOpenLegal} />

      {/* Legal Modal Drawer */}
      <LegalModal
        policyId={activeLegalPolicy}
        onClose={() => setActiveLegalPolicy(null)}
      />

      {/* Floating Instant WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
