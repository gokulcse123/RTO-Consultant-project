import React, { useState } from 'react';
import { CreditCard, Search, AlertTriangle, CheckCircle2, Shield, Camera, MapPin, Calendar } from 'lucide-react';
import Modal from '../common/Modal';
import { sampleChallans } from '../../data/mockData';
import { useLanguage } from '../../context/LanguageContext';

export default function ChallanModal({ isOpen, onClose }) {
  const { t, lang } = useLanguage();
  const [vehicleNo, setVehicleNo] = useState('TN-01-AB-1234');
  const [challans, setChallans] = useState(sampleChallans['TN-01-AB-1234']);
  const [paidMap, setPaidMap] = useState({});
  const [searched, setSearched] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = (e) => {
    e?.preventDefault();
    const cleanNo = vehicleNo.trim().toUpperCase();
    const found = sampleChallans[cleanNo];
    if (found) {
      setChallans(found);
      setNotFound(false);
    } else {
      setChallans([]);
      setNotFound(true);
    }
    setSearched(true);
  };

  const handlePay = (challanNo, amount) => {
    setPaidMap(prev => ({ ...prev, [challanNo]: true }));
    alert(`Payment of ₹${amount} successful for Challan ${challanNo}. e-Receipt issued.`);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={t('challanTitle')}
      subtitle="Tamil Nadu Traffic Police E-Challan Settlement (NTC Facilitation)"
      maxWidth="max-w-3xl"
    >
      <div className="space-y-6">
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-3">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {t('enterVehicleNo')}
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={vehicleNo}
                onChange={(e) => setVehicleNo(e.target.value)}
                placeholder="e.g. TN-01-AB-1234"
                className="w-full px-3 py-2 border rounded-lg border-slate-300 font-mono uppercase text-xs focus:ring-2 focus:ring-tn-blue focus:outline-none"
                required
              />
              <button
                type="submit"
                className="px-5 py-2 bg-tn-blue hover:bg-tn-darkBlue text-white font-bold text-xs rounded-lg shadow-sm transition flex items-center gap-1.5 whitespace-nowrap"
              >
                <Search className="w-3.5 h-3.5" />
                <span>{t('searchChallanBtn')}</span>
              </button>
            </div>
          </div>

          <div className="text-[11px] text-slate-500">
            <span className="font-semibold text-slate-700">{t('demoChallanHint')}</span>
          </div>
        </form>

        {/* Not Found / Clean record */}
        {notFound && (
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-900 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-bold">No Pending Challans:</span> Great news! Vehicle "{vehicleNo}" has no outstanding traffic violation notices on the national portal.
            </div>
          </div>
        )}

        {/* Challans List */}
        {challans && challans.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700">
              <span>Outstanding Notices ({challans.length})</span>
              <span className="text-rose-600">Total Unpaid: ₹{challans.reduce((acc, c) => acc + (paidMap[c.challanNo] ? 0 : c.amount), 0)}</span>
            </div>

            {challans.map((challan) => {
              const isPaid = paidMap[challan.challanNo];
              return (
                <div
                  key={challan.challanNo}
                  className={`border rounded-2xl p-4 transition ${
                    isPaid ? 'border-emerald-300 bg-emerald-50/50' : 'border-rose-200 bg-white shadow-sm'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold font-mono text-slate-900">
                          {challan.challanNo}
                        </span>
                        {isPaid ? (
                          <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                            PAID
                          </span>
                        ) : (
                          <span className="text-[10px] bg-rose-100 text-rose-800 font-bold px-2 py-0.5 rounded-full">
                            UNPAID
                          </span>
                        )}
                      </div>
                      <p className="text-xs font-semibold text-slate-800 mt-1">
                        {lang === 'ta' ? challan.offenceTa : challan.offenceEn}
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="text-lg font-extrabold text-slate-900 font-mono">
                        ₹{challan.amount}
                      </span>
                    </div>
                  </div>

                  {/* Metadata */}
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{challan.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{challan.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:col-span-2">
                      <Camera className="w-3.5 h-3.5 text-slate-400" />
                      <span className="text-slate-500">Evidence: {challan.evidence}</span>
                    </div>
                  </div>

                  {/* Pay button */}
                  {!isPaid && (
                    <div className="mt-4 pt-3 border-t border-slate-100 flex justify-end">
                      <button
                        type="button"
                        onClick={() => handlePay(challan.challanNo, challan.amount)}
                        className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl shadow-sm transition flex items-center gap-1.5"
                      >
                        <CreditCard className="w-3.5 h-3.5" />
                        <span>Pay Fine ₹{challan.amount} Online</span>
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Modal>
  );
}
