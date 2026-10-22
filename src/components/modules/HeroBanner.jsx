import React, { useState } from 'react';
import { Search, Sparkles, Shield, ArrowRight, MessageCircle, Phone, CheckCircle2, Award, Zap, Building2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function HeroBanner({
  onOpenLlr,
  onOpenStatus,
  onOpenMockTest,
  onOpenChallan,
  onOpenConsultation,
  onOpenBranches
}) {
  const { t, lang } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const serviceIndex = [
    { name: 'Apply for New Learner\'s Licence (LLR)', nameTa: 'புதிய LLR விண்ணப்பிக்க', action: onOpenLlr, tag: 'LLR' },
    { name: 'Vehicle RC Ownership Transfer (Name Change)', nameTa: 'RC பெயர் மாற்றம் (உரிமையாளர் மாற்றம்)', action: onOpenConsultation, tag: 'RC' },
    { name: 'Motor Vehicle Insurance (Bike/Car)', nameTa: 'வாகன இன்சூரன்ஸ் (பைக்/கார்)', action: onOpenConsultation, tag: 'Insurance' },
    { name: 'Driving Licence Renewal / Duplicate', nameTa: 'ஓட்டுநர் உரிமம் புதுப்பித்தல்', action: onOpenConsultation, tag: 'DL' },
    { name: 'Track Application Status Online', nameTa: 'விண்ணப்ப நிலை கண்காணிப்பு', action: onOpenStatus, tag: 'Status' },
    { name: 'RC Renewal & Fitness Certificate (FC)', nameTa: 'RC புதுப்பித்தல் & FC', action: onOpenConsultation, tag: 'FC' },
    { name: 'Traffic e-Challan Fine Payment', nameTa: 'e-சலான் அபராதம் செலுத்துதல்', action: onOpenChallan, tag: 'Challan' },
    { name: 'LLR Online Practice Mock Test', nameTa: 'LLR ஆன்லைன் மாதிரித் தேர்வு', action: onOpenMockTest, tag: 'Exam' },
  ];

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchQuery(val);
    if (!val.trim()) {
      setSearchResults([]);
      return;
    }
    const q = val.toLowerCase();
    const filtered = serviceIndex.filter(item =>
      item.name.toLowerCase().includes(q) || item.nameTa.toLowerCase().includes(q) || item.tag.toLowerCase().includes(q)
    );
    setSearchResults(filtered);
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-950 via-tn-navy to-slate-900 text-white overflow-hidden py-8 sm:py-14 px-3 sm:px-4 border-b border-slate-800">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Heading, CTAs & Search */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-red-600/20 border border-red-500/40 text-red-300 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>NTC DRIVING & RTO CONSULTANT</span>
              </span>

              <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>G. Sathish (Proprietor)</span>
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              {lang === 'ta' ? (
                <>
                  அனைத்து <span className="text-amber-400">RTO ஆன்லைன் சேவைகள்</span> & குறைந்த கட்டண இன்சூரன்ஸ்
                </>
              ) : (
                <>
                  All RTO Online Works Done & <span className="text-amber-400">Lowest Cost Insurance</span>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-2xl font-normal">
              {t('heroDesc')}
            </p>

            {/* Primary Action Buttons: WhatsApp & Call */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-1">
              {/* WhatsApp Direct */}
              <button
                onClick={onOpenConsultation}
                className="px-5 py-3 sm:px-6 sm:py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs sm:text-sm shadow-xl hover:shadow-2xl transition-all transform active:scale-95 flex items-center justify-center gap-2.5 border border-emerald-400/30"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
                <span>WhatsApp: 75500 04226</span>
              </button>

              <div className="grid grid-cols-2 sm:flex sm:items-center gap-2 sm:gap-3">
                {/* Call Direct */}
                <a
                  href="tel:7550004226"
                  className="px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Call 75500 04226</span>
                </a>

                {/* Apply LLR Online */}
                <button
                  onClick={onOpenLlr}
                  className="px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl bg-gradient-to-r from-tn-blue to-tn-darkBlue hover:opacity-90 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 shadow-md"
                >
                  <span>{t('btnApplyLlr')}</span>
                  <ArrowRight className="w-4 h-4 flex-shrink-0" />
                </button>
              </div>
            </div>

            {/* Interactive Search Bar */}
            <div className="relative max-w-xl pt-2">
              <div className="relative flex items-center">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder={t('searchPlaceholder')}
                  className="w-full pl-12 pr-4 py-3.5 bg-white text-slate-900 placeholder-slate-400 rounded-2xl shadow-xl text-xs sm:text-sm font-medium focus:outline-none focus:ring-4 focus:ring-amber-400/50"
                />
              </div>

              {/* Live Search Suggestions Dropdown */}
              {searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white text-slate-800 rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-40 max-h-64 overflow-y-auto">
                  <div className="p-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50 border-b border-slate-100">
                    Suggested Services
                  </div>
                  {searchResults.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        item.action();
                        setSearchQuery('');
                        setSearchResults([]);
                      }}
                      className="px-4 py-3 hover:bg-amber-50 cursor-pointer flex items-center justify-between border-b border-slate-100 last:border-0 transition"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded">
                          {item.tag}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-800">
                          {lang === 'ta' ? item.nameTa : item.name}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Interactive NTC Digital Visiting Card Showcase */}
          <div className="lg:col-span-5">
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-2 border-amber-500/40 rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-2xl text-white space-y-4 sm:space-y-5">
              
              {/* Card Header */}
              <div className="flex items-start justify-between border-b border-slate-700/80 pb-4">
                <div>
                  <div className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">
                    NTC DRIVING & CONSULTANT
                  </div>
                  <h3 className="text-lg font-black text-white mt-0.5">
                    G. SATHISH
                  </h3>
                  <span className="text-xs text-slate-300 font-medium">Proprietor / உரிமையாளர்</span>
                </div>

                <div className="text-right">
                  <span className="text-2xl" role="img" aria-label="Car">🚗</span>
                  <div className="text-[10px] font-bold text-emerald-400 mt-1">ONLINE RTO</div>
                </div>
              </div>

              {/* Tagline Box from card */}
              <div className="p-3 bg-red-950/60 border border-red-600/40 rounded-xl text-center">
                <span className="text-xs font-extrabold text-amber-300 tracking-wide block">
                  OUR SERVICE: ALL RTO ONLINE DONE
                </span>
                <span className="text-[11px] text-slate-200 block mt-0.5">
                  ALL KIND OF MOTOR INSURANCE
                </span>
              </div>

              {/* 4 Core pillars from card */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 bg-slate-800/80 rounded-xl border border-slate-700/60">
                  <span className="text-amber-400 font-bold block text-[11px]">1. Driving Licence</span>
                  <span className="text-slate-300 text-[10px]">New LLR, DL Renewal</span>
                </div>
                <div className="p-2.5 bg-slate-800/80 rounded-xl border border-slate-700/60">
                  <span className="text-amber-400 font-bold block text-[11px]">2. Vehicle RC</span>
                  <span className="text-slate-300 text-[10px]">RC Renewal, Address Change</span>
                </div>
                <div className="p-2.5 bg-slate-800/80 rounded-xl border border-slate-700/60">
                  <span className="text-amber-400 font-bold block text-[11px]">3. Name Transfer</span>
                  <span className="text-slate-300 text-[10px]">Ownership Change & NOC</span>
                </div>
                <div className="p-2.5 bg-slate-800/80 rounded-xl border border-slate-700/60">
                  <span className="text-amber-400 font-bold block text-[11px]">4. Motor Insurance</span>
                  <span className="text-slate-300 text-[10px]">FC, Permit, Instant Policy</span>
                </div>
              </div>

              {/* Addresses Highlight */}
              <div className="space-y-2 pt-2 border-t border-slate-700 text-xs">
                <div className="flex items-start gap-2">
                  <Building2 className="w-3.5 h-3.5 text-rose-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-white text-[11px]">Branch 1 (Nanmangalam): </span>
                    <span className="text-slate-400 text-[10px]">Plot 61/2B, Chrompet Road, Nanmangalam, Chennai-129</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Building2 className="w-3.5 h-3.5 text-amber-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-white text-[11px]">Branch 2 (Alandur): </span>
                    <span className="text-slate-400 text-[10px]">Puthu Street, Commercial Complex, Alandur, Chennai-016</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action bar inside card */}
              <div className="pt-2 flex items-center justify-between gap-2">
                <a
                  href="tel:7550004226"
                  className="flex-1 py-2 px-3 bg-slate-700 hover:bg-slate-600 rounded-xl text-center font-bold text-xs text-white transition font-mono flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-300" />
                  <span>75500 04226</span>
                </a>

                <button
                  onClick={onOpenConsultation}
                  className="flex-1 py-2 px-3 bg-emerald-600 hover:bg-emerald-500 rounded-xl text-center font-bold text-xs text-white transition flex items-center justify-center gap-1.5 shadow-md"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>WhatsApp Msg</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
