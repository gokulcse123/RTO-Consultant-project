import React from 'react';

const statusConfig = {
  IN_PROGRESS: {
    labelEn: 'In Progress',
    labelTa: 'பரிசீலனையில்',
    color: 'bg-amber-100 text-amber-800 border-amber-300',
    dot: 'bg-amber-500'
  },
  PENDING: {
    labelEn: 'Pending Verification',
    labelTa: 'சரிபார்ப்பு நிலுவையில்',
    color: 'bg-blue-100 text-blue-800 border-blue-300',
    dot: 'bg-blue-500'
  },
  APPROVED: {
    labelEn: 'Approved & Issued',
    labelTa: 'அனுமதிக்கப்பட்டு வழங்கப்பட்டது',
    color: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    dot: 'bg-emerald-500'
  },
  SCRUTINY: {
    labelEn: 'Under RTO Scrutiny',
    labelTa: 'RTO ஆய்வில் உள்ளது',
    color: 'bg-purple-100 text-purple-800 border-purple-300',
    dot: 'bg-purple-500'
  },
  REJECTED: {
    labelEn: 'Rejected',
    labelTa: 'நிராகரிக்கப்பட்டது',
    color: 'bg-rose-100 text-rose-800 border-rose-300',
    dot: 'bg-rose-500'
  },
};

export default function StatusBadge({ status = 'IN_PROGRESS', lang = 'en' }) {
  const current = statusConfig[status] || statusConfig.IN_PROGRESS;
  const label = lang === 'ta' ? current.labelTa : current.labelEn;

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${current.color}`}>
      <span className={`w-2 h-2 rounded-full ${current.dot} animate-pulse`} />
      {label}
    </span>
  );
}
