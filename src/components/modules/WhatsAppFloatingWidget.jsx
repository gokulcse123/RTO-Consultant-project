import React, { useState } from 'react';
import { MessageCircle, Phone, X, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function WhatsAppFloatingWidget({ onOpenConsultation }) {
  const { t } = useLanguage();
  const [showTooltip, setShowTooltip] = useState(true);

  const directWhatsAppLink = "https://wa.me/917550004226?text=Hi%20NTC%20Consultant,%20I%20need%20assistance%20with%20RTO%20Services%20/%20Insurance.";

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip Pop */}
      {showTooltip && (
        <div className="relative mb-2 bg-white text-slate-900 border border-slate-200 px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2 text-xs max-w-xs animate-bounce">
          <div className="flex-1">
            <span className="font-bold text-emerald-700 block">Chat with G. Sathish</span>
            <span className="text-[11px] text-slate-500">Fast RTO & Insurance Support</span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Action buttons stack */}
      <div className="flex items-center gap-2">
        {/* Quick Call pill */}
        <a
          href="tel:7550004226"
          className="hidden sm:flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-3.5 py-2.5 rounded-full shadow-lg transition transform hover:scale-105 border border-slate-700"
          title="Direct Phone Call"
        >
          <Phone className="w-3.5 h-3.5 text-amber-300" />
          <span className="font-mono">75500 04226</span>
        </a>

        {/* WhatsApp Main Bubble */}
        <button
          onClick={onOpenConsultation}
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl transition transform hover:scale-110 active:scale-95"
          aria-label="Chat on WhatsApp"
        >
          {/* Ping ripple effect */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping -z-10" />

          {/* WhatsApp SVG / Lucide Icon */}
          <MessageCircle className="w-8 h-8 fill-white" />

          {/* Badge */}
          <span className="absolute -top-1 -right-1 bg-amber-400 text-slate-950 font-extrabold text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-md">
            1
          </span>
        </button>
      </div>
    </div>
  );
}
