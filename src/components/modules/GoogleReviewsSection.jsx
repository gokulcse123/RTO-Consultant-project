import React, { useState } from 'react';
import { Star, CheckCircle, ExternalLink, MessageCircle, Phone, ThumbsUp, ShieldCheck } from 'lucide-react';
import { googleReviews } from '../../data/mockData';
import { useLanguage } from '../../context/LanguageContext';

export default function GoogleReviewsSection({ onOpenConsultation }) {
  const { t, lang } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', labelEn: 'All Reviews (185+)', labelTa: 'அனைத்து மதிப்புரைகள் (185+)' },
    { id: 'llr', labelEn: 'LLR & DL', labelTa: 'LLR & ஓட்டுநர் உரிமம்' },
    { id: 'rc', labelEn: 'RC & Name Transfer', labelTa: 'RC & பெயர் மாற்றம்' },
    { id: 'otherstate', labelEn: 'Other State NOC', labelTa: 'பிற மாநில வாகனங்கள்' },
    { id: 'insurance', labelEn: 'Motor Insurance', labelTa: 'வாகன இன்சூரன்ஸ்' },
  ];

  const filteredReviews = activeFilter === 'all'
    ? googleReviews
    : googleReviews.filter(r => r.serviceCat === activeFilter);

  // Direct Google Search / Google Maps Reviews URL for NTC Driving & RTO Consultant
  const googleMapsReviewUrl = "https://www.google.com/search?q=NTC+Driving+and+RTO+Consultant+Nanmangalam+Chennai#lrd=0x0:0x0,1";

  // Official Google G SVG
  const GoogleGLogo = () => (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );

  return (
    <section id="reviews-section" className="py-14 px-3 sm:px-4 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block: Google Rating Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
            {/* Big Google G Badge */}
            <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center justify-center p-3 flex-shrink-0">
              <GoogleGLogo />
            </div>

            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
                <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">4.9</span>
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-slate-500">
                  (185+ {lang === 'ta' ? 'மதிப்புரைகள்' : 'Google Reviews'})
                </span>
              </div>

              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
                {lang === 'ta' ? 'வாடிக்கையாளர்களின் கூகுள் மதிப்புரைகள் (Google Reviews)' : 'Verified Customer Google Reviews'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                {lang === 'ta'
                  ? 'NTC ஆட்டோ & டிரைவிங் கன்சல்டன்ட் (G. சதீஷ்) மீது சென்னை மக்களின் நன்மதிப்பு!'
                  : 'Real feedback from satisfied clients across Nanmangalam, Chrompet, Alandur & Chennai.'}
              </p>
            </div>
          </div>

          {/* Right Action buttons */}
          <div className="flex flex-wrap items-center gap-2.5 justify-center sm:justify-end">
            <a
              href={googleMapsReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition flex items-center gap-1.5 border border-slate-200"
            >
              <GoogleGLogo />
              <span>{lang === 'ta' ? 'கூகுளில் பார்க்க' : 'View on Google'}</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <button
              onClick={() => onOpenConsultation('Google Review Inquiry')}
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition shadow-md flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>{lang === 'ta' ? 'வாட்ஸ்அப் ஆலோசனை' : 'WhatsApp Us'}</span>
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-6 scrollbar-none">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition whitespace-nowrap flex-shrink-0 ${
                activeFilter === f.id
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {lang === 'ta' ? f.labelTa : f.labelEn}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredReviews.map((rev) => (
            <a
              key={rev.id}
              href={googleMapsReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:border-blue-400 block"
              title={lang === 'ta' ? 'கூகுளில் இந்த மதிப்புரையைப் பார்க்க கிளிக் செய்யவும்' : 'Click to view on Google Maps'}
            >
              <div>
                {/* Reviewer Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className={`w-10 h-10 rounded-full ${rev.avatarBg} text-white font-bold flex items-center justify-center text-sm shadow-sm flex-shrink-0`}>
                      {rev.name.charAt(0)}
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-900 text-sm leading-snug group-hover:text-blue-600 transition-colors">
                        {rev.name}
                      </h4>
                      <p className="text-[11px] text-slate-400">{rev.location}</p>
                    </div>
                  </div>

                  {/* Google Icon */}
                  <div className="w-7 h-7 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-xs group-hover:border-blue-300 transition-colors">
                    <GoogleGLogo />
                  </div>
                </div>

                {/* Rating & Verified row */}
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center text-amber-400 gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-[11px] text-slate-400 ml-1.5">{rev.date}</span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                    Verified
                  </span>
                </div>

                {/* Review Body */}
                <p className="mt-3 text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
                  "{lang === 'ta' ? rev.reviewTa : rev.reviewEn}"
                </p>
              </div>

              {/* Tag & Direct Google Link */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[10px] font-bold text-tn-blue bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
                  {rev.serviceTag}
                </span>

                <span className="flex items-center gap-1 text-[11px] font-bold text-blue-600 group-hover:underline">
                  <span>{lang === 'ta' ? 'கூகுளில் பார்க்க' : 'Read on Google'}</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Trust Banner */}
        <div className="mt-8 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-800 shadow-md">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="font-extrabold text-white text-sm">
                {lang === 'ta' ? '15,000+ வாடிக்கையாளர்களின் நம்பிக்கை' : '15,000+ Satisfied Chennai Customers'}
              </div>
              <div className="text-xs text-slate-300">
                {lang === 'ta'
                  ? 'நேரடி ஆலோசனைகளுக்கு சதீஷ் அவர்களை அழைக்கவும்: 75500 04226'
                  : 'For personal assistance and doorstep pickup, call G. Sathish directly.'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="tel:7550004226"
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold text-xs rounded-xl transition border border-slate-700 flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call 75500 04226</span>
            </a>

            <button
              onClick={() => onOpenConsultation('From Reviews Section')}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition flex items-center gap-1.5 shadow-md"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp Msg</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
