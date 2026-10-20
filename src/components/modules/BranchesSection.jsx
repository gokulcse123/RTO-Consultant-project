import React from 'react';
import { MapPin, Phone, MessageSquare, ExternalLink, Clock, Building2, CheckCircle2 } from 'lucide-react';
import { ntcBranches } from '../../data/mockData';
import { useLanguage } from '../../context/LanguageContext';

export default function BranchesSection({ onOpenConsultation }) {
  const { t, lang } = useLanguage();

  return (
    <section id="branches-section" className="py-14 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-tn-blue uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full mb-2 border border-blue-100">
          <Building2 className="w-3.5 h-3.5" />
          <span>Our Office Locations</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          {t('branchesTitle')}
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl mx-auto">
          {t('branchesSubtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ntcBranches.map((branch) => {
          const title = lang === 'ta' ? branch.titleTa : branch.titleEn;
          const address = lang === 'ta' ? branch.addressTa : branch.addressEn;
          const landmark = lang === 'ta' ? branch.landmarkTa : branch.landmarkEn;

          return (
            <div
              key={branch.id}
              className={`relative bg-white rounded-3xl p-6 sm:p-7 border transition-all duration-300 shadow-sm hover:shadow-xl ${
                branch.isHeadOffice
                  ? 'border-tn-blue/40 ring-1 ring-tn-blue/20'
                  : 'border-slate-200'
              }`}
            >
              {branch.isHeadOffice && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-tn-blue to-tn-darkBlue text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  Head Office
                </div>
              )}

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-100 border border-amber-300 flex items-center justify-center text-2xl flex-shrink-0 shadow-inner">
                  📍
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">
                    {title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    Landmark: {landmark}
                  </p>
                </div>
              </div>

              {/* Address Card */}
              <div className="mt-5 p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2 text-xs">
                <div className="flex items-start gap-2.5 text-slate-700">
                  <MapPin className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
                  <span className="font-medium leading-relaxed">{address}</span>
                </div>

                <div className="flex items-center gap-2.5 text-slate-500 pt-1 border-t border-slate-200/60">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span className="text-[11px]">{t('branchTimings')}</span>
                </div>
              </div>

              {/* Proprietor & Direct Contact Bar */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold block">Contact Person</span>
                  <span className="font-bold text-slate-900">{t('proprietor')}</span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={`tel:${branch.phone1.replace(/\s+/g, '')}`}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold rounded-xl transition flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-tn-blue" />
                    <span className="font-mono">{branch.phone1}</span>
                  </a>

                  <button
                    onClick={onOpenConsultation}
                    className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition flex items-center gap-1.5 shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>

              {/* Google Map Link */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className="text-emerald-700 font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  Doorstep Document Collection Available
                </span>
                <a
                  href={`https://maps.google.com/?q=${branch.mapQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tn-blue font-bold hover:underline flex items-center gap-1"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
