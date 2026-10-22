import React from 'react';
import { Phone, Globe, Shield, MessageCircle, HelpCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function TopHelplineBar({ onOpenFaq, onOpenConsultation }) {
  const { lang, toggleLanguage, fontScale, setScale, t } = useLanguage();

  return (
    <div className="bg-slate-950 text-slate-200 text-xs border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-1.5 sm:py-2 flex items-center justify-between gap-2">
        {/* Left: Contact Numbers from Card */}
        <div className="flex items-center gap-2 sm:gap-4 min-w-0">
          <span className="text-[11px] font-semibold text-amber-400 flex items-center gap-1.5 flex-shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-bold text-white hidden xs:inline">{t('proprietor')}:</span>
            <span className="font-bold text-white xs:hidden">G. Sathish:</span>
          </span>

          <a
            href="tel:7550004226"
            className="flex items-center gap-1 text-amber-300 sm:text-slate-300 hover:text-white font-mono font-bold text-[11px] sm:text-xs hover:underline flex-shrink-0"
          >
            <Phone className="w-3 h-3 text-amber-400" />
            <span>75500 04226</span>
          </a>

          <a
            href="tel:9087874290"
            className="hidden md:flex items-center gap-1 text-slate-300 hover:text-white font-mono font-medium hover:underline text-xs"
          >
            <Phone className="w-3.5 h-3.5 text-slate-400" />
            <span>90878 74290</span>
          </a>

          <button
            onClick={onOpenConsultation}
            className="hidden sm:inline-flex items-center gap-1 text-[11px] bg-emerald-700/80 hover:bg-emerald-600 text-white px-2.5 py-0.5 rounded-full font-bold transition shadow-sm"
          >
            <MessageCircle className="w-3 h-3 fill-white" />
            <span>WhatsApp Quick Help</span>
          </button>
        </div>

        {/* Right: Accessibility & Language Switcher */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          {/* Font resizing */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-900 px-2 py-0.5 rounded text-[11px] border border-slate-800">
            <span className="text-slate-400 mr-1">{t('fontSize')}:</span>
            <button
              onClick={() => setScale(0.9)}
              className={`px-1.5 rounded hover:bg-slate-700 transition ${fontScale === 0.9 ? 'bg-amber-400 text-slate-900 font-bold' : ''}`}
            >
              A-
            </button>
            <button
              onClick={() => setScale(1)}
              className={`px-1.5 rounded hover:bg-slate-700 transition ${fontScale === 1 ? 'bg-amber-400 text-slate-900 font-bold' : ''}`}
            >
              A
            </button>
            <button
              onClick={() => setScale(1.1)}
              className={`px-1.5 rounded hover:bg-slate-700 transition ${fontScale === 1.1 ? 'bg-amber-400 text-slate-900 font-bold' : ''}`}
            >
              A+
            </button>
          </div>

          {/* Quick FAQ / Help */}
          <button
            onClick={onOpenFaq}
            className="hidden md:flex items-center gap-1 text-slate-400 hover:text-white transition text-[11px]"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FAQ</span>
          </button>

          {/* Tamil / English Toggle Button */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-2 sm:px-3 py-1 rounded-md sm:rounded-lg shadow-sm transition transform active:scale-95 text-[11px] sm:text-xs"
            title="Switch Language"
          >
            <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>{t('languageToggle')}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
