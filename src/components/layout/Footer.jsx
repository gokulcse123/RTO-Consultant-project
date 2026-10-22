import React from 'react';
import { ShieldCheck, PhoneCall, MessageCircle, MapPin, Mail, ExternalLink, Heart } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function Footer({ onOpenLlr, onOpenStatus, onOpenMockTest, onOpenChallan, onOpenConsultation, onOpenBranches }) {
  const { t, lang } = useLanguage();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-14 pb-8 border-t-4 border-amber-500 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Proprietor */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-red-600 to-amber-600 text-white flex items-center justify-center font-black text-sm shadow-md">
                NTC
              </div>
              <div>
                <h4 className="text-white font-extrabold text-sm sm:text-base tracking-wide">
                  {lang === 'ta' ? t('brandTamilName') : t('brandName')}
                </h4>
                <p className="text-xs text-amber-400 font-semibold">{t('proprietor')}</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              {t('brandSubtitle')}. Fast, genuine, and reliable RTO documentation and multi-brand vehicle insurance services across Chennai & Tamil Nadu.
            </p>

            <div className="pt-1 flex items-center gap-2 text-xs text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>{t('tagline')}</span>
            </div>
          </div>

          {/* Col 2: Services Offered from Card */}
          <div>
            <h4 className="text-white font-bold text-xs tracking-wider uppercase mb-3 text-amber-400">
              RTO & Licence Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={onOpenLlr} className="hover:text-amber-300 hover:underline transition">
                  • {t('serviceLlrTitle')} (New / Renewal)
                </button>
              </li>
              <li>
                <button onClick={onOpenConsultation} className="hover:text-amber-300 hover:underline transition">
                  • Permanent Driving Licence (DL Test Booking)
                </button>
              </li>
              <li>
                <button onClick={onOpenConsultation} className="hover:text-amber-300 hover:underline transition">
                  • {t('serviceRcTransferTitle')}
                </button>
              </li>
              <li>
                <button onClick={onOpenConsultation} className="hover:text-amber-300 hover:underline transition">
                  • {t('serviceRcRenewTitle')}
                </button>
              </li>
              <li>
                <button onClick={onOpenConsultation} className="hover:text-amber-300 hover:underline transition">
                  • {t('serviceHpCancelTitle')}
                </button>
              </li>
              <li>
                <button onClick={onOpenChallan} className="hover:text-amber-300 hover:underline transition">
                  • {t('serviceChallanTitle')}
                </button>
              </li>
              <li>
                <button onClick={onOpenConsultation} className="hover:text-amber-300 hover:underline transition">
                  • {t('serviceOtherStateTitle')}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Two Chennai Branches from Card */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-xs tracking-wider uppercase text-amber-400">
              Our 2 Chennai Branches
            </h4>

            {/* Branch 1 */}
            <div className="text-xs space-y-1">
              <div className="font-bold text-slate-200 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-rose-500 flex-shrink-0" />
                <span>Nanmangalam (Head Office)</span>
              </div>
              <p className="text-slate-400 pl-5 text-[11px] leading-relaxed">
                No.B, Plot 61/2B, Chrompet Road, Nanmangalam, Chennai - 600 129
              </p>
            </div>

            {/* Branch 2 */}
            <div className="text-xs space-y-1 pt-1 border-t border-slate-800">
              <div className="font-bold text-slate-200 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                <span>Alandur Branch</span>
              </div>
              <p className="text-slate-400 pl-5 text-[11px] leading-relaxed">
                Puthu Street, Commercial Complex, Alandur, Chennai - 600 016
              </p>
            </div>
          </div>

          {/* Col 4: Contact & WhatsApp */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs tracking-wider uppercase text-amber-400">
              Direct Contact
            </h4>
            
            <div className="space-y-2.5 text-xs">
              <a
                href="tel:7550004226"
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition"
              >
                <PhoneCall className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <div>
                  <div className="text-[10px] text-slate-400">Primary Contact / WhatsApp</div>
                  <div className="font-bold text-white font-mono text-sm">75500 04226</div>
                </div>
              </a>

              <a
                href="tel:9087874290"
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition"
              >
                <PhoneCall className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <div>
                  <div className="text-[10px] text-slate-400">Secondary Mobile</div>
                  <div className="font-bold text-white font-mono text-sm">90878 74290</div>
                </div>
              </a>

              <button
                onClick={onOpenConsultation}
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition flex items-center justify-center gap-2 text-xs shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="text-center md:text-left">
            <p className="text-slate-400 font-medium">
              © 2026 {t('brandName')} • {t('proprietor')}
            </p>
            <p className="text-[11px] text-slate-600 mt-0.5">
              {t('disclaimer')}
            </p>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span>Chrompet Rd, Nanmangalam</span>
            <span>•</span>
            <span>Commercial Complex, Alandur</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
