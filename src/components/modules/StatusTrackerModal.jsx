import React, { useState } from 'react';
import { Search, CheckCircle2, Clock, AlertCircle, Calendar, User, FileText, Download } from 'lucide-react';
import Modal from '../common/Modal';
import StatusBadge from '../common/StatusBadge';
import { sampleApplications } from '../../data/mockData';
import { useLanguage } from '../../context/LanguageContext';

export default function StatusTrackerModal({ isOpen, onClose }) {
  const { t, lang } = useLanguage();
  const [appNumber, setAppNumber] = useState('TN-LLR-2026-89421');
  const [dob, setDob] = useState('1998-05-14');
  const [result, setResult] = useState(sampleApplications['TN-LLR-2026-89421']);
  const [searched, setSearched] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = (e) => {
    e?.preventDefault();
    const cleanId = appNumber.trim().toUpperCase();
    const found = sampleApplications[cleanId];
    if (found) {
      setResult(found);
      setNotFound(false);
    } else {
      setResult(null);
      setNotFound(true);
    }
    setSearched(true);
  };

  const handleSelectDemo = (id) => {
    setAppNumber(id);
    const found = sampleApplications[id];
    setResult(found);
    setNotFound(false);
    setSearched(true);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={t('trackTitle')}
      subtitle={t('trackSubtitle')}
      maxWidth="max-w-3xl"
    >
      <div className="space-y-6">
        {/* Search Form */}
        <form onSubmit={handleSearch} className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                {t('enterAppNo')}
              </label>
              <input
                type="text"
                value={appNumber}
                onChange={(e) => setAppNumber(e.target.value)}
                placeholder="e.g. TN-LLR-2026-89421"
                className="w-full px-3 py-2 border rounded-lg border-slate-300 font-mono uppercase focus:ring-2 focus:ring-tn-blue focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                {t('dob')}
              </label>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg border-slate-300 focus:ring-2 focus:ring-tn-blue focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
            {/* Quick Demo links */}
            <div className="text-[11px] text-slate-500">
              <span className="font-semibold text-slate-700">Quick Test Records: </span>
              <button
                type="button"
                onClick={() => handleSelectDemo('TN-LLR-2026-89421')}
                className="text-tn-blue underline hover:text-blue-800 ml-1 font-mono"
              >
                In-Progress Demo
              </button>
              <span className="mx-1.5">•</span>
              <button
                type="button"
                onClick={() => handleSelectDemo('TN-LLR-2026-10293')}
                className="text-emerald-700 underline hover:text-emerald-900 font-mono"
              >
                Approved e-LLR
              </button>
            </div>

            <button
              type="submit"
              className="px-5 py-2 bg-tn-blue hover:bg-tn-darkBlue text-white font-bold text-xs rounded-lg shadow-sm transition flex items-center gap-1.5"
            >
              <Search className="w-3.5 h-3.5" />
              <span>{t('trackBtn')}</span>
            </button>
          </div>
        </form>

        {/* Not Found Alert */}
        {notFound && (
          <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-800 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-rose-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-bold">Record Not Found:</span> No transport application matches "{appNumber}". Please check the reference number or verify your RTO jurisdiction.
            </div>
          </div>
        )}

        {/* Result Card */}
        {result && (
          <div className="border border-slate-200 rounded-2xl p-5 bg-white shadow-sm space-y-6">
            {/* Application Overview */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-base font-extrabold text-slate-900 font-mono">
                    {result.appNo}
                  </span>
                  <StatusBadge status={result.status} lang={lang} />
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  {result.serviceType} • {result.rto}
                </p>
              </div>

              {result.llrNumber && (
                <div className="bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl text-right">
                  <span className="text-[10px] text-emerald-800 font-bold block uppercase tracking-wider">
                    Issued LLR Number
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-900">
                    {result.llrNumber}
                  </span>
                </div>
              )}
            </div>

            {/* Applicant details grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs bg-slate-50 p-3.5 rounded-xl">
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-semibold">Applicant Name</span>
                <span className="font-bold text-slate-800">{result.applicantName}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-semibold">Guardian Name</span>
                <span className="font-medium text-slate-800">{result.fatherName}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-semibold">Submission Date</span>
                <span className="font-medium text-slate-800">{result.appliedDate}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-semibold">Current State</span>
                <span className="font-bold text-tn-blue">{result.currentStage}</span>
              </div>
            </div>

            {/* Stages Stepper Timeline */}
            <div>
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                Processing Timeline & Stages
              </h4>
              <div className="space-y-3">
                {result.stages.map((stage, idx) => (
                  <div key={stage.id} className="flex items-start gap-3">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          stage.completed
                            ? 'bg-emerald-600 text-white'
                            : stage.current
                            ? 'bg-amber-500 text-slate-950 ring-4 ring-amber-100'
                            : 'bg-slate-200 text-slate-500'
                        }`}
                      >
                        {stage.completed ? '✓' : idx + 1}
                      </div>
                      {idx < result.stages.length - 1 && (
                        <div
                          className={`w-0.5 h-6 ${
                            stage.completed ? 'bg-emerald-500' : 'bg-slate-200'
                          }`}
                        />
                      )}
                    </div>
                    <div className="flex-1 pb-1">
                      <div className="flex items-center justify-between text-xs">
                        <span
                          className={`font-semibold ${
                            stage.completed
                              ? 'text-slate-900'
                              : stage.current
                              ? 'text-amber-800 font-bold'
                              : 'text-slate-400'
                          }`}
                        >
                          {stage.name}
                        </span>
                        <span className="text-[11px] text-slate-400 font-mono">
                          {stage.date}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Remarks / Action Notice */}
            <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-xl text-xs text-blue-900 flex items-start gap-2">
              <Clock className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">Official Remarks: </span>
                {result.remarks}
              </div>
            </div>

            {result.llrNumber && (
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => alert(`Downloading official e-LLR certificate for ${result.llrNumber}`)}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Digital e-LLR Certificate</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </Modal>
  );
}
