import React from 'react';
import { Bell, Volume2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function NewsTicker() {
  const { t } = useLanguage();
  const tickerItems = t('tickerItems') || [];

  return (
    <div className="bg-amber-500 text-slate-950 border-b border-amber-600 overflow-hidden flex items-stretch text-xs font-medium select-none shadow-sm">
      {/* Label Badge */}
      <div className="bg-slate-900 text-amber-300 font-bold px-3 py-1.5 flex items-center gap-1.5 z-10 flex-shrink-0 shadow-md">
        <Bell className="w-3.5 h-3.5 animate-bounce" />
        <span className="tracking-wider uppercase text-[11px]">{t('tickerLabel')}</span>
      </div>

      {/* Marquee ticker container */}
      <div className="flex-1 overflow-hidden relative flex items-center py-1">
        <div className="animate-marquee flex items-center gap-10 whitespace-nowrap">
          {tickerItems.map((item, index) => (
            <span key={index} className="inline-flex items-center gap-2 font-semibold">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-900" />
              <span>{item}</span>
            </span>
          ))}
          {/* Duplicate loop */}
          {tickerItems.map((item, index) => (
            <span key={`dup-${index}`} className="inline-flex items-center gap-2 font-semibold">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-900" />
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
