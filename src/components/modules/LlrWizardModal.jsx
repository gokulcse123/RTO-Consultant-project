import React, { useState } from 'react';
import {
  FileText,
  User,
  MapPin,
  Car,
  Upload,
  CreditCard,
  CheckCircle2,
  AlertCircle,
  Download,
  Printer,
  ShieldCheck,
  Bike,
  Sparkles
} from 'lucide-react';
import Modal from '../common/Modal';
import Stepper from '../common/Stepper';
import { rtoOffices } from '../../data/mockData';
import { useLanguage } from '../../context/LanguageContext';

export default function LlrWizardModal({ isOpen, onClose }) {
  const { t, lang } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);

  // Form State
  const [formData, setFormData] = useState({
    fullName: 'Karthikeyan Subramanian',
    fatherName: 'Subramanian V.',
    dob: '1998-05-14',
    gender: 'Male',
    bloodGroup: 'O+',
    mobile: '9840123456',
    aadhaarNo: '482910485921',
    email: 'karthik.sub@example.com',
    district: 'Chennai',
    rtoCode: 'TN-07',
    address: 'No. 42, 2nd Cross Street, Thiruvanmiyur',
    pincode: '600041',
    mcwog: false,
    mcwg: true,
    lmv: true,
    paymentMethod: 'UPI',
    agreeTerms: true,
  });

  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(true);
  const [otpCode, setOtpCode] = useState('');
  const [applicationId, setApplicationId] = useState('TN-LLR-2026-89421');

  const steps = [
    { id: 1, title: t('step1') },
    { id: 2, title: t('step2') },
    { id: 3, title: t('step3') },
    { id: 4, title: t('step4') },
    { id: 5, title: t('step5') },
    { id: 6, title: t('step6') },
  ];

  // Fee calculation: ₹200 per category (₹150 application + ₹50 test fee)
  const selectedCount = (formData.mcwog ? 1 : 0) + (formData.mcwg ? 1 : 0) + (formData.lmv ? 1 : 0);
  const totalFee = selectedCount * 200;

  const handleChange = (field, val) => {
    setFormData(prev => ({ ...prev, [field]: val }));
  };

  const handleSendOtp = () => {
    setOtpSent(true);
    setOtpVerified(false);
  };

  const handleVerifyOtp = () => {
    setOtpVerified(true);
  };

  const handleNext = () => {
    if (currentStep === 5) {
      // Generate unique application ID
      const randomNum = Math.floor(10000 + Math.random() * 90000);
      setApplicationId(`TN-LLR-2026-${randomNum}`);
    }
    setCurrentStep(prev => Math.min(prev + 1, 6));
  };

  const handlePrev = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleReset = () => {
    setCurrentStep(1);
    onClose();
  };

  const selectedRto = rtoOffices.find(r => r.code === formData.rtoCode) || rtoOffices[4];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={t('wizardTitle')}
      subtitle="NTC Online Service Facilitation (G. Sathish, Proprietor)"
      maxWidth="max-w-3xl"
    >
      <div className="space-y-6">
        {/* Stepper Header */}
        <Stepper
          steps={steps}
          currentStep={currentStep}
          onStepClick={(step) => step < currentStep && setCurrentStep(step)}
        />

        {/* STEP 1: Personal Details */}
        {currentStep === 1 && (
          <div className="space-y-4 animate-fadeIn">
            <div className="bg-blue-50 border border-blue-200 p-3 rounded-xl flex items-start gap-2.5 text-xs text-blue-900">
              <ShieldCheck className="w-4 h-4 text-tn-blue mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-bold">Aadhaar Authentication:</span> Your demographic details can be verified online via UIDAI OTP for zero physical office visits.
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">{t('fullName')}</label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleChange('fullName', e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg border-slate-300 focus:ring-2 focus:ring-tn-blue focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">{t('fatherName')}</label>
                <input
                  type="text"
                  value={formData.fatherName}
                  onChange={(e) => handleChange('fatherName', e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg border-slate-300 focus:ring-2 focus:ring-tn-blue focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">{t('dob')}</label>
                <input
                  type="date"
                  value={formData.dob}
                  onChange={(e) => handleChange('dob', e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg border-slate-300 focus:ring-2 focus:ring-tn-blue focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">{t('gender')}</label>
                  <select
                    value={formData.gender}
                    onChange={(e) => handleChange('gender', e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg border-slate-300 focus:ring-2 focus:ring-tn-blue focus:outline-none bg-white"
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Transgender</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">{t('bloodGroup')}</label>
                  <select
                    value={formData.bloodGroup}
                    onChange={(e) => handleChange('bloodGroup', e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg border-slate-300 focus:ring-2 focus:ring-tn-blue focus:outline-none bg-white"
                  >
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>O+</option>
                    <option>O-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">{t('mobile')}</label>
                <input
                  type="tel"
                  value={formData.mobile}
                  onChange={(e) => handleChange('mobile', e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg border-slate-300 focus:ring-2 focus:ring-tn-blue focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">{t('aadhaarNo')}</label>
                <div className="flex gap-2">
                  <input
                    type="password"
                    maxLength={12}
                    value={formData.aadhaarNo}
                    onChange={(e) => handleChange('aadhaarNo', e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg border-slate-300 focus:ring-2 focus:ring-tn-blue focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={handleSendOtp}
                    className="px-3 py-1.5 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 text-[11px] whitespace-nowrap"
                  >
                    {otpVerified ? 'Verified ✓' : otpSent ? 'Resend' : 'Send OTP'}
                  </button>
                </div>
                {otpSent && !otpVerified && (
                  <div className="mt-2 flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter 6-digit OTP (e.g. 123456)"
                      value={otpCode}
                      onChange={(e) => setOtpCode(e.target.value)}
                      className="w-full px-2 py-1 border rounded text-xs"
                    />
                    <button
                      type="button"
                      onClick={handleVerifyOtp}
                      className="px-3 py-1 bg-emerald-600 text-white font-semibold rounded text-xs"
                    >
                      Verify
                    </button>
                  </div>
                )}
                {otpVerified && (
                  <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1 mt-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Aadhaar e-KYC Verified Successfully
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: Address & RTO */}
        {currentStep === 2 && (
          <div className="space-y-4 animate-fadeIn text-xs">
            <div className="bg-amber-50 border border-amber-200 p-3 rounded-xl flex items-start gap-2.5 text-amber-900">
              <MapPin className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-bold">Jurisdiction Notice:</span> Please select the Regional Transport Office (RTO) that governs your permanent or residential pincode.
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">{t('district')}</label>
                <select
                  value={formData.district}
                  onChange={(e) => handleChange('district', e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg border-slate-300 focus:ring-2 focus:ring-tn-blue focus:outline-none bg-white"
                >
                  <option>Chennai</option>
                  <option>Coimbatore</option>
                  <option>Madurai</option>
                  <option>Salem</option>
                  <option>Tiruchirappalli</option>
                  <option>Tirunelveli</option>
                  <option>Kanchipuram</option>
                  <option>Erode</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">{t('rtoOffice')}</label>
                <select
                  value={formData.rtoCode}
                  onChange={(e) => handleChange('rtoCode', e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg border-slate-300 focus:ring-2 focus:ring-tn-blue focus:outline-none bg-white font-medium"
                >
                  {rtoOffices.map((rto) => (
                    <option key={rto.code} value={rto.code}>
                      {rto.code} - {rto.name} ({rto.district})
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block font-semibold text-slate-700 mb-1">{t('address')}</label>
                <textarea
                  rows={2}
                  value={formData.address}
                  onChange={(e) => handleChange('address', e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg border-slate-300 focus:ring-2 focus:ring-tn-blue focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">{t('pincode')}</label>
                <input
                  type="text"
                  maxLength={6}
                  value={formData.pincode}
                  onChange={(e) => handleChange('pincode', e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg border-slate-300 focus:ring-2 focus:ring-tn-blue focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">{t('email')}</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg border-slate-300 focus:ring-2 focus:ring-tn-blue focus:outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: Vehicle Category */}
        {currentStep === 3 && (
          <div className="space-y-4 animate-fadeIn">
            <div>
              <h4 className="font-bold text-slate-900 text-sm">{t('vehicleClassTitle')}</h4>
              <p className="text-xs text-slate-500 mt-0.5">{t('feePerClass')}</p>
            </div>

            <div className="space-y-3">
              {/* Category 1: MCWOG */}
              <label
                className={`flex items-start gap-3 p-4 border rounded-xl cursor-pointer transition ${
                  formData.mcwog
                    ? 'border-tn-blue bg-blue-50/70 ring-1 ring-tn-blue'
                    : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <input
                  type="checkbox"
                  checked={formData.mcwog}
                  onChange={(e) => handleChange('mcwog', e.target.checked)}
                  className="mt-1 h-4 w-4 text-tn-blue rounded focus:ring-tn-blue"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-xs sm:text-sm">
                      {t('mcwog')}
                    </span>
                    <span className="text-xs font-bold text-tn-blue">₹200</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Applicable for non-geared two-wheelers such as Activa, Jupiter, Access, electric scooters. Minimum age: 16 years.
                  </p>
                </div>
              </label>

              {/* Category 2: MCWG */}
              <label
                className={`flex items-start gap-3 p-4 border rounded-xl cursor-pointer transition ${
                  formData.mcwg
                    ? 'border-tn-blue bg-blue-50/70 ring-1 ring-tn-blue'
                    : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <input
                  type="checkbox"
                  checked={formData.mcwg}
                  onChange={(e) => handleChange('mcwg', e.target.checked)}
                  className="mt-1 h-4 w-4 text-tn-blue rounded focus:ring-tn-blue"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-xs sm:text-sm">
                      {t('mcwg')}
                    </span>
                    <span className="text-xs font-bold text-tn-blue">₹200</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Applicable for geared motorcycles, sports bikes, and manual two-wheelers. Minimum age: 18 years.
                  </p>
                </div>
              </label>

              {/* Category 3: LMV */}
              <label
                className={`flex items-start gap-3 p-4 border rounded-xl cursor-pointer transition ${
                  formData.lmv
                    ? 'border-tn-blue bg-blue-50/70 ring-1 ring-tn-blue'
                    : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <input
                  type="checkbox"
                  checked={formData.lmv}
                  onChange={(e) => handleChange('lmv', e.target.checked)}
                  className="mt-1 h-4 w-4 text-tn-blue rounded focus:ring-tn-blue"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-xs sm:text-sm">
                      {t('lmv')}
                    </span>
                    <span className="text-xs font-bold text-tn-blue">₹200</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Applicable for cars, SUVs, Jeeps, private light motor vehicles. Minimum age: 18 years.
                  </p>
                </div>
              </label>
            </div>

            {/* Total Summary */}
            <div className="bg-slate-900 text-white p-4 rounded-xl flex items-center justify-between text-xs sm:text-sm">
              <div>
                <span className="text-slate-300">Selected Categories: </span>
                <span className="font-bold text-amber-300">{selectedCount}</span>
              </div>
              <div>
                <span className="text-slate-300">Total Statutory Fee: </span>
                <span className="text-base sm:text-lg font-extrabold text-amber-400">₹{totalFee}</span>
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: Documents Upload */}
        {currentStep === 4 && (
          <div className="space-y-4 animate-fadeIn text-xs">
            <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-xl flex items-start gap-2.5 text-emerald-900">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-bold">Paperless Verification:</span> Since your Aadhaar e-KYC was authenticated, your photo, address, and age proofs are automatically populated from the Government database.
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 border rounded-xl bg-slate-50 border-slate-200">
                <span className="font-bold text-slate-800 block">1. Proof of Age (Aadhaar / Birth Cert)</span>
                <div className="mt-2 flex items-center gap-2 text-emerald-700 bg-emerald-100/60 px-3 py-1.5 rounded-lg text-[11px] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Aadhaar_eKYC_DOB_Verified.pdf</span>
                </div>
              </div>

              <div className="p-4 border rounded-xl bg-slate-50 border-slate-200">
                <span className="font-bold text-slate-800 block">2. Proof of Address</span>
                <div className="mt-2 flex items-center gap-2 text-emerald-700 bg-emerald-100/60 px-3 py-1.5 rounded-lg text-[11px] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Aadhaar_Resident_Address.pdf</span>
                </div>
              </div>

              <div className="p-4 border rounded-xl bg-slate-50 border-slate-200">
                <span className="font-bold text-slate-800 block">3. Applicant Photograph</span>
                <div className="mt-2 flex items-center gap-3">
                  <div className="w-12 h-14 bg-slate-200 rounded border border-slate-300 flex items-center justify-center text-slate-500 font-bold text-[10px]">
                    PHOTO
                  </div>
                  <span className="text-[11px] text-slate-600 font-medium">Digital Aadhaar Specimen</span>
                </div>
              </div>

              <div className="p-4 border rounded-xl bg-slate-50 border-slate-200">
                <span className="font-bold text-slate-800 block">4. Applicant Signature Specimen</span>
                <div className="mt-2 border-2 border-dashed border-slate-300 rounded-lg p-2 text-center hover:bg-slate-100 cursor-pointer">
                  <Upload className="w-4 h-4 mx-auto text-slate-400" />
                  <span className="text-[10px] text-slate-500 block mt-1">Click to sign or re-upload signature</span>
                </div>
              </div>
            </div>

            <label className="flex items-start gap-2.5 pt-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.agreeTerms}
                onChange={(e) => handleChange('agreeTerms', e.target.checked)}
                className="mt-0.5 h-4 w-4 text-tn-blue rounded"
              />
              <span className="text-[11px] text-slate-600 leading-snug">
                {t('termsAgree')}
              </span>
            </label>
          </div>
        )}

        {/* STEP 5: Payment */}
        {currentStep === 5 && (
          <div className="space-y-4 animate-fadeIn text-xs">
            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm">Fee Breakdown</h4>
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-600">Application Fee for {selectedCount} Class(es):</span>
                <span className="font-semibold text-slate-800">₹{selectedCount * 150}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-600">Online Driving Knowledge Test Fee:</span>
                <span className="font-semibold text-slate-800">₹{selectedCount * 50}</span>
              </div>
              <div className="flex justify-between py-1 text-sm font-bold text-tn-navy">
                <span>Total Amount Payable:</span>
                <span className="text-emerald-700 font-extrabold text-base">₹{totalFee}</span>
              </div>
            </div>

            {/* Payment Method selector */}
            <div className="space-y-2">
              <label className="font-bold text-slate-800 block">Select Payment Mode</label>
              <div className="grid grid-cols-3 gap-3">
                {['UPI', 'NetBanking', 'DebitCard'].map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => handleChange('paymentMethod', mode)}
                    className={`p-3 rounded-xl border text-center font-bold transition ${
                      formData.paymentMethod === mode
                        ? 'border-tn-blue bg-blue-50 text-tn-blue ring-2 ring-tn-blue/30'
                        : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {mode === 'UPI' && '⚡ UPI / QR'}
                    {mode === 'NetBanking' && '🏛️ Net Banking'}
                    {mode === 'DebitCard' && '💳 Card'}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-[11px]">
              🔒 Secured with State Bank of India (e-Pay) / TN Treasury Portal 256-bit encryption.
            </div>
          </div>
        )}

        {/* STEP 6: Acknowledgement Receipt */}
        {currentStep === 6 && (
          <div className="space-y-4 animate-fadeIn">
            <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-2xl flex items-center gap-3">
              <div className="p-2.5 bg-emerald-600 text-white rounded-xl">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-emerald-950 text-sm sm:text-base">
                  {t('appSuccessTitle')}
                </h4>
                <p className="text-xs text-emerald-800 mt-0.5">
                  Payment of ₹{totalFee} confirmed via {formData.paymentMethod}.
                </p>
              </div>
            </div>

            {/* Printable Receipt Card */}
            <div className="p-5 border-2 border-slate-300 rounded-2xl bg-white shadow-sm space-y-4 text-xs font-mono">
              <div className="flex items-center justify-between border-b pb-3">
                <div>
                  <div className="font-bold text-slate-900 text-sm">GOVERNMENT OF TAMIL NADU</div>
                  <div className="text-[11px] text-slate-600 font-sans">Transport Department - Form 2 Acknowledgement</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-slate-400">BARCODE</div>
                  <div className="tracking-widest font-bold text-slate-800">||| |||| || ||||| |||</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-[11px] font-sans">
                <div>
                  <span className="text-slate-500 block">Application Number:</span>
                  <span className="font-bold text-tn-blue text-sm">{applicationId}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Jurisdiction RTO:</span>
                  <span className="font-semibold text-slate-800">{selectedRto.code} ({selectedRto.name})</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Applicant Name:</span>
                  <span className="font-semibold text-slate-800">{formData.fullName}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Date of Application:</span>
                  <span className="font-semibold text-slate-800">20 Oct 2026</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Applied Classes:</span>
                  <span className="font-semibold text-slate-800">
                    {[formData.mcwog && 'MCWOG', formData.mcwg && 'MCWG', formData.lmv && 'LMV'].filter(Boolean).join(', ')}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block">Online Test Status:</span>
                  <span className="font-bold text-emerald-700">Eligible (Take test from Home)</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-500 font-sans">
                {t('receiptNotice')}
              </div>
            </div>

            {/* Print & Download Action buttons */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => window.print()}
                className="px-4 py-2 border border-slate-300 rounded-xl font-semibold text-xs text-slate-700 hover:bg-slate-100 flex items-center gap-1.5"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Receipt</span>
              </button>
              <button
                type="button"
                onClick={() => alert(`Receipt ${applicationId} downloaded successfully.`)}
                className="px-4 py-2 bg-emerald-600 text-white rounded-xl font-bold text-xs hover:bg-emerald-700 flex items-center gap-1.5 shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </button>
            </div>
          </div>
        )}

        {/* Bottom Nav Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-200">
          {currentStep > 1 && currentStep < 6 ? (
            <button
              type="button"
              onClick={handlePrev}
              className="px-4 py-2 border border-slate-300 text-slate-700 font-semibold text-xs rounded-xl hover:bg-slate-100"
            >
              {t('prevBtn')}
            </button>
          ) : <div />}

          {currentStep < 5 && (
            <button
              type="button"
              disabled={selectedCount === 0 && currentStep === 3}
              onClick={handleNext}
              className="px-5 py-2.5 bg-tn-blue hover:bg-tn-darkBlue text-white font-bold text-xs rounded-xl shadow-md transition disabled:opacity-50"
            >
              {t('nextBtn')}
            </button>
          )}

          {currentStep === 5 && (
            <button
              type="button"
              onClick={handleNext}
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-lg transition"
            >
              {t('submitPayBtn')} {totalFee}
            </button>
          )}

          {currentStep === 6 && (
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-2.5 bg-tn-blue text-white font-bold text-xs rounded-xl shadow-md"
            >
              Close
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
}
