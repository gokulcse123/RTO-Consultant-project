import React from 'react';
import { Shield, Sparkles, Check, ArrowRight, MessageSquare, Phone } from 'lucide-react';
import { insurancePartners } from '../../data/mockData';
import { useLanguage } from '../../context/LanguageContext';

export default function InsurancePartnersSection({ onOpenConsultation }) {
  const { t } = useLanguage();

  return (
    <section id="insurance-section" className="py-14 px-4 bg-gradient-to-b from-slate-50 via-slate-100/70 to-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full mb-2 border border-amber-200">
            <Shield className="w-3.5 h-3.5" />
            <span>Multi-Brand Vehicle Insurance</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {t('insuranceTitle')}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl mx-auto">
            {t('insuranceSubtitle')}. Lowest premiums for 2-Wheelers, Private Cars, Taxis, Autos & Commercial Goods Carriers.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {insurancePartners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:border-amber-500/50"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-300 font-bold flex items-center justify-center text-sm shadow-sm">
                    🛡️
                  </div>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                    {partner.badge}
                  </span>
                </div>

                <div className="mt-4">
                  <h3 className="font-extrabold text-slate-900 text-base group-hover:text-amber-600 transition-colors">
                    {partner.name}
                  </h3>
                  {partner.tagline && (
                    <span className="text-[11px] font-bold text-amber-600 block mt-0.5 tracking-wide">
                      "{partner.tagline}"
                    </span>
                  )}
                  <p className="text-xs text-slate-500 mt-1">
                    {partner.category}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-600 space-y-1.5">
                  <div className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-[11px] leading-snug">{partner.features}</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-400">Instant Policy in 10 mins</span>
                <button
                  onClick={onOpenConsultation}
                  className="px-3 py-1.5 bg-slate-900 hover:bg-emerald-600 text-white text-xs font-semibold rounded-lg transition flex items-center gap-1 shadow-sm"
                >
                  <MessageSquare className="w-3 h-3 text-emerald-400" />
                  <span>Get Quote</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick CTA banner */}
        <div className="mt-10 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-extrabold text-white">
              Need Instant Insurance Renewal for Your Vehicle?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 font-light">
              Send your RC photo on WhatsApp to <strong>75500 04226</strong>. We'll send quote comparisons in 5 minutes!
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold text-xs sm:text-sm rounded-xl shadow-lg transition flex items-center gap-2 transform active:scale-95"
            >
              <MessageSquare className="w-4 h-4 fill-slate-950" />
              <span>WhatsApp RC Copy (75500 04226)</span>
            </button>
            <a
              href="tel:7550004226"
              className="px-4 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm rounded-xl border border-white/20 transition flex items-center gap-1.5"
            >
              <Phone className="w-4 h-4 text-amber-300" />
              <span>Call G. Sathish</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
