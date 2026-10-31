import React from 'react';
import { ArrowRight, Phone, MessageSquare, MapPin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { servicePages } from '../../data/sitePages';
import BranchesSection from './BranchesSection';

export default function ServicePage({ page, onOpenConsultation }) {
  const { lang } = useLanguage();
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 pt-6">
        <nav aria-label={lang === 'ta' ? 'பக்க வழிகாட்டி' : 'Breadcrumb'} className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <a href="/" className="hover:text-tn-blue hover:underline">{lang === 'ta' ? 'முகப்பு' : 'Home'}</a>
          <span aria-hidden="true">/</span>
          <span aria-current="page" className="text-slate-800">{page.label[lang]}</span>
        </nav>
      </div>
      <article className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
        <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-10 lg:p-12 border border-slate-800">
          <p className="text-amber-300 text-xs sm:text-sm font-bold mb-4">NTC Auto Consultant · Chennai</p>
          <h1 className="text-2xl sm:text-4xl font-extrabold leading-snug max-w-4xl">{page.heading[lang]}</h1>
          <p className="mt-5 text-sm sm:text-base text-slate-200 leading-relaxed max-w-4xl">{page.intro[lang]}</p>
          <div className="mt-7 flex flex-col sm:flex-row sm:flex-wrap gap-3">
            <button onClick={onOpenConsultation} className="inline-flex justify-center items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 px-5 py-3 text-sm font-bold">
              <MessageSquare className="w-4 h-4 shrink-0" />
              {lang === 'ta' ? 'WhatsApp ஆலோசனை' : 'WhatsApp Consultation'}
            </button>
            <a href="tel:7550004226" className="inline-flex justify-center items-center gap-2 rounded-xl border border-slate-500 hover:bg-slate-800 px-5 py-3 text-sm font-bold">
              <Phone className="w-4 h-4 shrink-0 text-amber-300" />75500 04226
            </a>
          </div>
        </div>
        <div className="grid lg:grid-cols-[minmax(0,1fr)_18rem] gap-8 lg:gap-12 mt-10">
          <div className="min-w-0 space-y-9">
            {page.sections.map(section => (
              <section key={section.heading.en}>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">{section.heading[lang]}</h2>
                {section.body && <p className="text-sm sm:text-base leading-relaxed text-slate-600">{section.body[lang]}</p>}
                {section.items && <ul className="list-disc pl-5 space-y-3 text-sm sm:text-base leading-relaxed text-slate-600">
                  {section.items.map(item => <li key={item.en}>{item[lang]}</li>)}
                </ul>}
              </section>
            ))}
            {page.officialLink && <a href={page.officialLink.href} className="inline-flex items-center gap-2 text-sm font-semibold text-tn-blue underline underline-offset-4">
              {page.officialLink.label[lang]}<ArrowRight className="w-4 h-4 shrink-0" />
            </a>}
          </div>
          <aside className="min-w-0 rounded-2xl bg-white border border-slate-200 p-6 self-start space-y-4">
            <h2 className="text-lg font-bold text-slate-900">{lang === 'ta' ? 'எங்கள் கிளைகளில் ஆலோசனை' : 'Talk to our Chennai team'}</h2>
            <p className="text-sm text-slate-600">G. Sathish · {lang === 'ta' ? 'உரிமையாளர்' : 'Proprietor'}</p>
            <a href="tel:7550004226" className="block font-bold text-tn-blue hover:underline">75500 04226</a>
            {page.kind === 'contact' && <button type="button" onClick={onOpenConsultation} className="block text-left font-bold text-emerald-700 hover:underline">WhatsApp: 90878 74290</button>}
            <p className="text-sm text-slate-600 leading-relaxed">{lang === 'ta' ? 'நன்மங்கலம் தலைமை அலுவலகம் & ஆலந்தூர் துணைக் கிளை' : 'Nanmangalam head office & Alandur sub-branch'}</p>
            <a href={page.kind === 'branches' ? '#branches-section' : '/branches/'} className="inline-flex items-center gap-2 text-sm font-semibold text-tn-blue hover:underline">
              <MapPin className="w-4 h-4 shrink-0" />{lang === 'ta' ? 'முகவரிகள் & வழிகள்' : 'Addresses & directions'}
            </a>
          </aside>
        </div>
      </article>
      {page.kind === 'branches' && <BranchesSection onOpenConsultation={onOpenConsultation} />}
      <nav aria-label={lang === 'ta' ? 'மேலும் சேவைகள்' : 'Explore NTC services'} className="max-w-7xl mx-auto px-4 pb-4">
        <h2 className="text-xl font-bold text-slate-900 mb-4">{lang === 'ta' ? 'மேலும் அறிய' : 'Explore more at NTC'}</h2>
        <div className="flex flex-wrap gap-3">
          {servicePages.filter(item => item.id !== page.id).map(item => <a key={item.id} href={item.path} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white hover:border-tn-blue px-4 py-3 text-sm font-semibold text-tn-blue">
            {item.label[lang]}<ArrowRight className="w-4 h-4 shrink-0" />
          </a>)}
        </div>
      </nav>
    </>
  );
}
