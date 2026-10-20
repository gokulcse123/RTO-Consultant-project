import React, { useState } from 'react';
import { Phone, MessageSquare, Send, CheckCircle2, ShieldCheck, Car, User, FileText, ArrowRight } from 'lucide-react';
import Modal from '../common/Modal';
import { useLanguage } from '../../context/LanguageContext';

export default function QuickConsultationModal({ isOpen, onClose, preselectedService = '' }) {
  const { t, lang } = useLanguage();
  const [service, setService] = useState(preselectedService || 'New LLR Application');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicleNo, setVehicleNo] = useState('');
  const [message, setMessage] = useState('');
  const [preferredBranch, setPreferredBranch] = useState('Nanmangalam');

  const servicesList = [
    "New LLR (Learner's Licence)",
    "New Driving Licence (DL) / Driving Test",
    "Driving Licence Renewal / Duplicate DL",
    "RC Ownership Transfer (Name Change)",
    "RC Renewal & Fitness Certificate (FC)",
    "Two-Wheeler / Car Insurance Renewal",
    "Commercial Vehicle Insurance & Permit",
    "Hypothecation (HP) Cancellation",
    "Traffic e-Challan Payment Support"
  ];

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert("Please enter your name and phone number");
      return;
    }

    const text = `*New Inquiry - NTC RTO & Driving Consultant*%0A%0A` +
      `*Name:* ${encodeURIComponent(name.trim())}%0A` +
      `*Phone:* ${encodeURIComponent(phone.trim())}%0A` +
      `*Service Required:* ${encodeURIComponent(service)}%0A` +
      (vehicleNo.trim() ? `*Vehicle/App No:* ${encodeURIComponent(vehicleNo.trim())}%0A` : '') +
      `*Preferred Branch:* ${encodeURIComponent(preferredBranch)}%0A` +
      (message.trim() ? `*Details:* ${encodeURIComponent(message.trim())}%0A` : '') +
      `%0A_Sent via NTC Online Portal_`;

    const whatsappUrl = `https://wa.me/917550004226?text=${text}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={t('quickConsultTitle')}
      subtitle={t('quickConsultSubtitle')}
      maxWidth="max-w-xl"
    >
      <form onSubmit={handleWhatsAppSend} className="space-y-4 text-xs">
        {/* Banner with Proprietor Info */}
        <div className="bg-gradient-to-r from-emerald-500/10 via-emerald-600/15 to-emerald-700/10 border border-emerald-500/30 p-3.5 rounded-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
              💬
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">G. Sathish (Proprietor)</div>
              <div className="text-[11px] text-emerald-800 font-semibold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available on WhatsApp: 75500 04226
              </div>
            </div>
          </div>
          <a
            href="tel:7550004226"
            className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-amber-300 font-bold rounded-xl text-[11px] transition flex items-center gap-1 shadow-sm"
          >
            <Phone className="w-3 h-3 text-amber-300" />
            <span>Call Now</span>
          </a>
        </div>

        {/* Service selector */}
        <div>
          <label className="block font-semibold text-slate-700 mb-1">
            {t('selectService')} *
          </label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full px-3 py-2 border rounded-xl border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-white font-medium"
          >
            {servicesList.map((srv, idx) => (
              <option key={idx} value={srv}>{srv}</option>
            ))}
          </select>
        </div>

        {/* Name and Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              {t('yourName')} *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Anand Kumar"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-xl border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              {t('yourPhone')} *
            </label>
            <input
              type="tel"
              required
              placeholder="e.g. 9840123456"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3 py-2 border rounded-xl border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:outline-none font-mono"
            />
          </div>
        </div>

        {/* Vehicle No and Preferred Branch */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              {t('yourVehicleNo')}
            </label>
            <input
              type="text"
              placeholder="e.g. TN-07-AB-1234 (if applicable)"
              value={vehicleNo}
              onChange={(e) => setVehicleNo(e.target.value)}
              className="w-full px-3 py-2 border rounded-xl border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:outline-none font-mono uppercase"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Select Nearest Branch
            </label>
            <select
              value={preferredBranch}
              onChange={(e) => setPreferredBranch(e.target.value)}
              className="w-full px-3 py-2 border rounded-xl border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-white"
            >
              <option value="Nanmangalam (Chrompet Rd)">Nanmangalam (Chrompet Rd - Head Office)</option>
              <option value="Alandur (Commercial Complex)">Alandur (Commercial Complex)</option>
            </select>
          </div>
        </div>

        {/* Message Query */}
        <div>
          <label className="block font-semibold text-slate-700 mb-1">
            {t('yourMessage')}
          </label>
          <textarea
            rows={2}
            placeholder="Tell us what you need or ask for quote details..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3 py-2 border rounded-xl border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
          />
        </div>

        {/* Submit to WhatsApp */}
        <button
          type="submit"
          className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 transform active:scale-98"
        >
          <MessageSquare className="w-4 h-4 fill-white" />
          <span>{t('sendWhatsAppBtn')}</span>
        </button>

        {/* Alternate Calling Options */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
          <span>Or call directly:</span>
          <div className="flex items-center gap-3">
            <a href="tel:7550004226" className="font-bold text-slate-900 hover:text-emerald-700 underline font-mono">
              75500 04226
            </a>
            <span>•</span>
            <a href="tel:9087874290" className="font-bold text-slate-900 hover:text-emerald-700 underline font-mono">
              90878 74290
            </a>
          </div>
        </div>
      </form>
    </Modal>
  );
}
