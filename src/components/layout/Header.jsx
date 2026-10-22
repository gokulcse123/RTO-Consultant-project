import React from 'react';
import { ShieldCheck, Phone, MessageSquare, Car, Award, MapPin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function Header({ onOpenLlr, onOpenConsultation, onOpenBranches }) {
  const { t, lang } = useLanguage();

  return (
    <header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: NTC Brand Logo & Authority details */}
        <div className="flex items-center gap-2.5 sm:gap-4 min-w-0 flex-1">
          {/* Logo Badge */}
          <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-white shadow-md border border-slate-200 ring-2 ring-amber-100 overflow-hidden p-1">
            <img
              src="/ntc.webp"
              alt="NTC - Nishi Travels and Consultants"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="min-w-0 flex-1 leading-tight">
            {/* Top Tagline from card */}
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] sm:text-[11px] font-extrabold uppercase text-red-700 bg-red-50 px-1.5 py-0.5 rounded border border-red-200 truncate max-w-full">
                {lang === 'ta' ? 'அனைத்து RTO ஆன்லைன் சேவைகள் • இன்சூரன்ஸ்' : 'ALL RTO ONLINE • MOTOR INSURANCE'}
              </span>
              <span className="hidden md:inline-block text-[11px] font-bold text-slate-700 flex-shrink-0">
                | {t('proprietor')}
              </span>
            </div>

            {/* Main Brand Title */}
            <h1 className="text-xs sm:text-lg md:text-2xl font-black text-slate-900 tracking-tight mt-0.5 sm:mt-1 flex items-center gap-1.5 leading-snug">
              <span className="truncate">{lang === 'ta' ? t('brandTamilName') : t('brandName')}</span>
              <span className="hidden lg:inline text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex-shrink-0">
                Verified
              </span>
            </h1>

            {/* Subtitle / Branches indication */}
            <p className="text-xs text-slate-500 font-medium hidden sm:flex items-center gap-2 mt-0.5 truncate">
              <span>Nanmangalam (Chrompet Rd) & Alandur Branches</span>
              <span>•</span>
              <span className="text-tn-blue font-semibold">All RTO Works Online • Motor Insurance</span>
            </p>
          </div>
        </div>

        {/* Right: Instant Contact Buttons (Call & WhatsApp) */}
        <div className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
          {/* Direct WhatsApp CTA */}
          <button
            onClick={onOpenConsultation}
            className="hidden md:flex items-center gap-1.5 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-md transition transform active:scale-95"
            title="Chat on WhatsApp: 75500 04226"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-white" />
            <span>WhatsApp (75500 04226)</span>
          </button>

          {/* Quick Apply LLR button */}
          <button
            onClick={onOpenLlr}
            className="text-xs font-bold px-3 sm:px-3.5 py-2 bg-gradient-to-r from-tn-blue to-tn-darkBlue text-white rounded-xl shadow-md hover:shadow-lg transition hover:opacity-95 flex items-center gap-1.5 flex-shrink-0"
            title={t('btnApplyLlr')}
          >
            <Car className="w-3.5 h-3.5 text-amber-300 flex-shrink-0" />
            <span className="hidden sm:inline">{t('btnApplyLlr')}</span>
            <span className="sm:hidden font-bold">Apply LLR</span>
          </button>
        </div>
      </div>
    </header>
  );
}
