import React, { useState } from 'react';
import { MapPin, Search, Phone, ExternalLink } from 'lucide-react';
import Modal from '../common/Modal';
import { rtoOffices } from '../../data/mockData';
import { useLanguage } from '../../context/LanguageContext';

export default function RtoLocatorModal({ isOpen, onClose }) {
  const { t } = useLanguage();
  const [filterText, setFilterText] = useState('');

  const filteredOffices = rtoOffices.filter(rto =>
    rto.code.toLowerCase().includes(filterText.toLowerCase()) ||
    rto.name.toLowerCase().includes(filterText.toLowerCase()) ||
    rto.district.toLowerCase().includes(filterText.toLowerCase()) ||
    rto.address.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={t('locatorTitle')}
      subtitle="Find RTO office address, jurisdiction and telephone helpline"
      maxWidth="max-w-3xl"
    >
      <div className="space-y-5">
        {/* Filter input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            placeholder={t('searchRto')}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium focus:ring-2 focus:ring-tn-blue focus:outline-none"
          />
        </div>

        {/* List of RTOs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[60vh] overflow-y-auto pr-1">
          {filteredOffices.map((rto) => (
            <div
              key={rto.code}
              className="p-4 border border-slate-200 rounded-2xl bg-white hover:border-tn-blue transition hover:shadow-sm space-y-2 text-xs"
            >
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-tn-blue font-mono text-sm bg-blue-50 px-2.5 py-0.5 rounded-lg border border-blue-200">
                  {rto.code}
                </span>
                <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                  {rto.district}
                </span>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                  {rto.name}
                </h4>
                <p className="text-slate-500 text-[11px] mt-1 flex items-start gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 mt-0.5 flex-shrink-0" />
                  <span>{rto.address}</span>
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600">
                <span className="flex items-center gap-1 font-medium text-emerald-800">
                  <Phone className="w-3 h-3 text-emerald-600" />
                  <span>{rto.phone}</span>
                </span>
                <a
                  href={`https://maps.google.com/?q=RTO+Office+${rto.name}+${rto.district}+Tamil+Nadu`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tn-blue font-semibold hover:underline flex items-center gap-0.5"
                >
                  <span>Map</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
}
