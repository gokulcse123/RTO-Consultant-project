import React from 'react';
import { ShieldCheck, Phone, MessageSquare, Car, Award, MapPin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function Header({ onOpenLlr, onOpenConsultation, onOpenBranches }) {
  const { t, lang } = useLanguage();

  return (
    <header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Left: NTC Brand Logo & Authority details */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Logo Badge */}
          <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-rose-600 via-red-600 to-amber-600 text-white shadow-md border-2 border-white ring-2 ring-red-100">
            <div className="text-center">
              <span className="text-xs font-black tracking-tighter block leading-none">NTC</span>
              <span className="text-[10px] font-bold block mt-0.5 opacity-90">RTO</span>
            </div>
          </div>

          <div className="leading-tight">
            {/* Top Tagline from card */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] md:text-[11px] font-extrabold uppercase text-red-700 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                {lang === 'ta' ? 'அனைத்து RTO வேலைகளும் ஆன்லைனில் செய்து தரப்படும்' : 'ALL RTO ONLINE DONE • ALL MOTOR INSURANCE'}
              </span>
              <span className="hidden sm:inline-block text-[11px] font-bold text-slate-700">
                | {t('proprietor')}
              </span>
            </div>

            {/* Main Brand Title */}
            <h1 className="text-base sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight mt-1 flex items-center gap-2">
              <span>{lang === 'ta' ? t('brandTamilName') : t('brandName')}</span>
              <span className="hidden lg:inline text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                Verified
              </span>
            </h1>

            {/* Subtitle / Branches indication */}
            <p className="text-xs text-slate-500 font-medium hidden sm:flex items-center gap-2 mt-0.5">
              <span>Nanmangalam (Chrompet Rd) & Alandur Branches</span>
              <span>•</span>
              <span className="text-tn-blue font-semibold">All RTO Works Online • Motor Insurance</span>
            </p>
          </div>
        </div>

        {/* Right: Instant Contact Buttons (Call & WhatsApp) */}
        <div className="flex items-center gap-2.5">
          {/* Direct WhatsApp CTA */}
          <button
            onClick={onOpenConsultation}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-md transition transform active:scale-95"
            title="Chat on WhatsApp: 75500 04226"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-white" />
            <span>WhatsApp (75500 04226)</span>
          </button>

          {/* Quick Apply LLR button */}
          <button
            onClick={onOpenLlr}
            className="text-xs font-bold px-3.5 py-2 bg-gradient-to-r from-tn-blue to-tn-darkBlue text-white rounded-xl shadow-md hover:shadow-lg transition hover:opacity-95 flex items-center gap-1.5"
          >
            <Car className="w-3.5 h-3.5 text-amber-300" />
            <span className="hidden xs:inline">{t('btnApplyLlr')}</span>
            <span className="xs:hidden">LLR</span>
          </button>
        </div>
      </div>
    </header>
  );
}
