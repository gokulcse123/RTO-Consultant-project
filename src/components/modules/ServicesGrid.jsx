import React, { useState } from 'react';
import {
  FileText,
  RefreshCw,
  Award,
  Search,
  CreditCard,
  Car,
  Shield,
  FileCheck2,
  Users,
  Repeat,
  Truck,
  Globe
} from 'lucide-react';
import ServiceCard from '../common/ServiceCard';
import { useLanguage } from '../../context/LanguageContext';

export default function ServicesGrid({
  onOpenLlr,
  onOpenStatus,
  onOpenMockTest,
  onOpenChallan,
  onOpenConsultation,
  onScrollToInsurance
}) {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: t('catAll') },
    { id: 'licence', label: t('catLicence') },
    { id: 'vehicle', label: t('catVehicle') },
    { id: 'insurance', label: t('catInsurance') },
    { id: 'commercial', label: t('catCommercial') },
  ];

  const services = [
    {
      id: 'llr',
      category: 'licence',
      title: t('serviceLlrTitle'),
      desc: t('serviceLlrDesc'),
      icon: FileText,
      badgeText: 'Aadhaar e-KYC / Fast',
      badgeColor: 'green',
      accentColor: 'blue',
      actionText: t('actionApplyNow'),
      action: onOpenLlr,
    },
    {
      id: 'rcTransfer',
      category: 'vehicle',
      title: t('serviceRcTransferTitle'),
      desc: t('serviceRcTransferDesc'),
      icon: Users,
      badgeText: 'Name Transfer / Fast',
      badgeColor: 'amber',
      accentColor: 'orange',
      actionText: 'Request Transfer',
      action: onOpenConsultation,
    },
    {
      id: 'insurance',
      category: 'insurance',
      title: t('serviceInsuranceTitle'),
      desc: t('serviceInsuranceDesc'),
      icon: Shield,
      badgeText: 'Lowest Premium',
      badgeColor: 'green',
      accentColor: 'green',
      actionText: 'Get Free Quote',
      action: onScrollToInsurance,
    },
    {
      id: 'dlRenew',
      category: 'licence',
      title: t('serviceDlRenewTitle'),
      desc: t('serviceDlRenewDesc'),
      icon: RefreshCw,
      badgeText: 'Smart Card DL',
      badgeColor: 'blue',
      accentColor: 'blue',
      actionText: 'Renew DL',
      action: onOpenConsultation,
    },
    {
      id: 'rcRenew',
      category: 'vehicle',
      title: t('serviceRcRenewTitle'),
      desc: t('serviceRcRenewDesc'),
      icon: FileCheck2,
      badgeText: '15-Yr Fitness Renewal',
      badgeColor: 'amber',
      accentColor: 'orange',
      actionText: 'Renew RC / FC',
      action: onOpenConsultation,
    },
    {
      id: 'hpCancel',
      category: 'vehicle',
      title: t('serviceHpCancelTitle'),
      desc: t('serviceHpCancelDesc'),
      icon: Repeat,
      badgeText: 'Bank Loan Removal',
      badgeColor: 'blue',
      accentColor: 'purple',
      actionText: 'Remove HP',
      action: onOpenConsultation,
    },
    {
      id: 'challan',
      category: 'commercial',
      title: t('serviceChallanTitle'),
      desc: t('serviceChallanDesc'),
      icon: CreditCard,
      badgeText: 'Instant Receipt',
      badgeColor: 'amber',
      accentColor: 'orange',
      actionText: t('actionPayNow'),
      action: onOpenChallan,
    },
    {
      id: 'mockTest',
      category: 'licence',
      title: t('serviceMockTestTitle'),
      desc: t('serviceMockTestDesc'),
      icon: Award,
      badgeText: 'Free 10 Qs Quiz',
      badgeColor: 'green',
      accentColor: 'blue',
      actionText: t('actionStartTest'),
      action: onOpenMockTest,
    },
    {
      id: 'otherState',
      category: 'vehicle',
      title: t('serviceOtherStateTitle'),
      desc: t('serviceOtherStateDesc'),
      icon: Globe,
      badgeText: 'All States / NOC & Re-Reg',
      badgeColor: 'blue',
      accentColor: 'purple',
      actionText: 'Request Other State NOC',
      action: () => onOpenConsultation('Other State Vehicle NOC & Re-Registration'),
    },
  ];

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(s => s.category === activeCategory);

  return (
    <section id="services-section" className="py-14 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <span className="text-xs font-bold text-red-700 uppercase tracking-widest bg-red-50 px-3 py-1 rounded-md border border-red-200">
            NTC Online Service Portfolio
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
            {t('navServices')} & Facilitation
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-xl">
            Complete doorstep and online RTO processing by <strong>G. Sathish (Proprietor)</strong>. Lowest service fees with guaranteed genuine work.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-1.5 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
                activeCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredServices.map(service => (
          <ServiceCard
            key={service.id}
            title={service.title}
            desc={service.desc}
            icon={service.icon}
            badgeText={service.badgeText}
            badgeColor={service.badgeColor}
            accentColor={service.accentColor}
            actionText={service.actionText}
            onClick={service.action}
          />
        ))}
      </div>
    </section>
  );
}
