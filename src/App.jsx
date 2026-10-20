import React, { useState } from 'react';
import TopHelplineBar from './components/layout/TopHelplineBar';
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import NewsTicker from './components/layout/NewsTicker';
import Footer from './components/layout/Footer';

import HeroBanner from './components/modules/HeroBanner';
import ServicesGrid from './components/modules/ServicesGrid';
import InsurancePartnersSection from './components/modules/InsurancePartnersSection';
import BranchesSection from './components/modules/BranchesSection';
import WhatsAppFloatingWidget from './components/modules/WhatsAppFloatingWidget';
import QuickConsultationModal from './components/modules/QuickConsultationModal';

import LlrWizardModal from './components/modules/LlrWizardModal';
import StatusTrackerModal from './components/modules/StatusTrackerModal';
import MockTestModal from './components/modules/MockTestModal';
import ChallanModal from './components/modules/ChallanModal';
import FaqSection from './components/modules/FaqSection';

import { useLanguage } from './context/LanguageContext';
import { Phone, MessageSquare, Shield, Clock, Award, CheckCircle2 } from 'lucide-react';

export default function App() {
  const { t, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState('home');

  // Modal open states
  const [llrOpen, setLlrOpen] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);
  const [mockTestOpen, setMockTestOpen] = useState(false);
  const [challanOpen, setChallanOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedConsultService, setSelectedConsultService] = useState('');

  const openConsultWithService = (serviceName = '') => {
    setSelectedConsultService(serviceName);
    setConsultationOpen(true);
  };

  const scrollToBranches = () => {
    const el = document.getElementById('branches-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToInsurance = () => {
    const el = document.getElementById('insurance-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFaq = () => {
    const el = document.getElementById('faq-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800">
      {/* 1. Top Contact Bar with G. Sathish numbers & WhatsApp */}
      <TopHelplineBar
        onOpenFaq={scrollToFaq}
        onOpenConsultation={() => openConsultWithService('General Inquiry')}
      />

      {/* 2. Official Header with NTC Brand & Visiting Card info */}
      <Header
        onOpenLlr={() => setLlrOpen(true)}
        onOpenConsultation={() => openConsultWithService('RTO Consultation')}
        onOpenBranches={scrollToBranches}
      />

      {/* 3. Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenLlr={() => setLlrOpen(true)}
        onOpenStatus={() => setStatusOpen(true)}
        onOpenMockTest={() => setMockTestOpen(true)}
        onOpenChallan={() => setChallanOpen(true)}
        onOpenConsultation={() => openConsultWithService('Direct WhatsApp')}
        onOpenBranches={scrollToBranches}
        onScrollToInsurance={scrollToInsurance}
      />

      {/* 4. Live News Marquee Ticker */}
      <NewsTicker />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Banner with NTC Visiting Card details & CTAs */}
        <HeroBanner
          onOpenLlr={() => setLlrOpen(true)}
          onOpenStatus={() => setStatusOpen(true)}
          onOpenMockTest={() => setMockTestOpen(true)}
          onOpenChallan={() => setChallanOpen(true)}
          onOpenConsultation={() => openConsultWithService('LLR / DL / RC Support')}
          onOpenBranches={scrollToBranches}
        />

        {/* Highlight Stats Bar from card & experience */}
        <div className="bg-white border-b border-slate-200 py-6 px-4 shadow-sm">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3">
              <div className="text-2xl sm:text-3xl font-extrabold text-red-700">12+ Years</div>
              <div className="text-xs text-slate-500 font-semibold mt-1">{t('statYears')}</div>
            </div>
            <div className="p-3 border-l border-slate-200">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">15,000+</div>
              <div className="text-xs text-slate-500 font-semibold mt-1">{t('statClients')}</div>
            </div>
            <div className="p-3 border-l border-slate-200">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-500">2 Branches</div>
              <div className="text-xs text-slate-500 font-semibold mt-1">Nanmangalam & Alandur</div>
            </div>
            <div className="p-3 border-l border-slate-200">
              <div className="text-2xl sm:text-3xl font-extrabold text-tn-blue">4.9 ★</div>
              <div className="text-xs text-slate-500 font-semibold mt-1">{t('statRating')}</div>
            </div>
          </div>
        </div>

        {/* Services Grid (LLR, DL, RC Transfer, FC, HP Cancel, etc.) */}
        <ServicesGrid
          onOpenLlr={() => setLlrOpen(true)}
          onOpenStatus={() => setStatusOpen(true)}
          onOpenMockTest={() => setMockTestOpen(true)}
          onOpenChallan={() => setChallanOpen(true)}
          onOpenConsultation={() => openConsultWithService('RTO Service')}
          onScrollToInsurance={scrollToInsurance}
        />

        {/* Multi-Brand Motor Insurance Partners (Digit, Shriram, New India, HDFC ERGO, National, Royal Sundaram) */}
        <InsurancePartnersSection
          onOpenConsultation={() => openConsultWithService('Vehicle Insurance Quote')}
        />

        {/* Two Chennai Branches from card (Nanmangalam & Alandur) */}
        <BranchesSection
          onOpenConsultation={() => openConsultWithService('Branch Appointment')}
        />

        {/* Feature Spotlight: Fast & Reliable with Lowest Fee */}
        <section className="py-12 px-4 max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden border border-slate-800">
            <div className="relative z-10 max-w-3xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-400/20 px-3 py-1 rounded-full border border-amber-300/30">
                {t('tagline')}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black">
                Avoid Long Queues at RTO. Let NTC Consultant Handle Your Documentation.
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                From new LLR applications and driving test slot booking to complex RC ownership name transfers and instant commercial vehicle insurance, <strong>G. Sathish (Proprietor)</strong> ensures error-free filing and door-step document pickup.
              </p>

              <div className="pt-4 flex flex-wrap gap-3">
                <button
                  onClick={() => openConsultWithService('Immediate Documentation Help')}
                  className="px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg transition transform active:scale-95 flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>WhatsApp: 75500 04226</span>
                </button>
                <a
                  href="tel:7550004226"
                  className="px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 transition flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call 75500 04226</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <FaqSection />
      </main>

      {/* Footer with both branches and G. Sathish contact info */}
      <Footer
        onOpenLlr={() => setLlrOpen(true)}
        onOpenStatus={() => setStatusOpen(true)}
        onOpenMockTest={() => setMockTestOpen(true)}
        onOpenChallan={() => setChallanOpen(true)}
        onOpenConsultation={() => openConsultWithService('General Inquiry')}
        onOpenBranches={scrollToBranches}
      />

      {/* Floating WhatsApp Widget */}
      <WhatsAppFloatingWidget
        onOpenConsultation={() => openConsultWithService('WhatsApp Floating Button')}
      />

      {/* MODALS */}
      <QuickConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        preselectedService={selectedConsultService}
      />
      <LlrWizardModal isOpen={llrOpen} onClose={() => setLlrOpen(false)} />
      <StatusTrackerModal isOpen={statusOpen} onClose={() => setStatusOpen(false)} />
      <MockTestModal isOpen={mockTestOpen} onClose={() => setMockTestOpen(false)} />
      <ChallanModal isOpen={challanOpen} onClose={() => setChallanOpen(false)} />
    </div>
  );
}
