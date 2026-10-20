import React, { useState } from 'react';
import { Home, FileText, CheckCircle2, Award, CreditCard, MapPin, Shield, MessageCircle, Menu, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function Navbar({
  activeTab,
  setActiveTab,
  onOpenLlr,
  onOpenStatus,
  onOpenMockTest,
  onOpenChallan,
  onOpenConsultation,
  onOpenBranches,
  onScrollToInsurance
}) {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: t('navHome'), icon: Home, action: () => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); } },
    { id: 'services', label: t('navServices'), icon: FileText, action: () => { setActiveTab('services'); const el = document.getElementById('services-section'); if (el) el.scrollIntoView({ behavior: 'smooth' }); } },
    { id: 'llr', label: t('navLlrApply'), icon: FileText, action: onOpenLlr, highlight: true },
    { id: 'insurance', label: t('navInsurance'), icon: Shield, action: onScrollToInsurance },
    { id: 'branches', label: t('navBranches'), icon: MapPin, action: onOpenBranches },
    { id: 'status', label: t('navStatus'), icon: CheckCircle2, action: onOpenStatus },
    { id: 'mockTest', label: t('navMockTest'), icon: Award, action: onOpenMockTest },
    { id: 'challan', label: t('navChallan'), icon: CreditCard, action: onOpenChallan },
    { id: 'consult', label: 'WhatsApp', icon: MessageCircle, action: onOpenConsultation, whatsapp: true },
  ];

  const handleItemClick = (item) => {
    item.action();
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-slate-900 text-white shadow-md relative z-20 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          {/* Desktop Nav links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition ${
                    item.whatsapp
                      ? 'bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow-sm'
                      : item.highlight
                      ? 'bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold shadow-sm'
                      : isActive
                      ? 'bg-slate-800 text-amber-300'
                      : 'text-slate-200 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Contact badge on right */}
          <div className="hidden lg:flex items-center text-xs text-amber-300 font-medium bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mr-2" />
            <span>Chennai: Nanmangalam & Alandur</span>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center justify-between w-full">
            <span className="text-xs font-bold text-amber-300 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              NTC RTO & Driving Consultant
            </span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-slate-200 hover:bg-slate-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item)}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left text-xs font-semibold ${
                  item.whatsapp
                    ? 'bg-emerald-600 text-white font-bold'
                    : item.highlight
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'text-slate-200 hover:bg-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
}
