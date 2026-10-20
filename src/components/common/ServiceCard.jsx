import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({
  title,
  desc,
  icon: Icon,
  badgeText,
  badgeColor = 'green',
  actionText = 'Access Service',
  onClick,
  accentColor = 'blue'
}) {
  const accentClasses = {
    blue: 'bg-blue-50 text-tn-blue group-hover:bg-tn-blue group-hover:text-white',
    orange: 'bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white',
    green: 'bg-emerald-50 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white',
    purple: 'bg-indigo-50 text-indigo-700 group-hover:bg-indigo-700 group-hover:text-white',
  };

  const badgeClasses = {
    green: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    amber: 'bg-amber-100 text-amber-800 border-amber-200',
    blue: 'bg-blue-100 text-blue-800 border-blue-200',
  };

  return (
    <div
      onClick={onClick}
      className="group relative bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1 hover:border-tn-blue"
    >
      <div>
        {/* Top Header with Icon and Badge */}
        <div className="flex items-start justify-between gap-3">
          <div className={`p-3.5 rounded-xl transition-colors duration-300 ${accentClasses[accentColor] || accentClasses.blue}`}>
            {Icon && <Icon className="w-6 h-6 transition-transform group-hover:scale-110 duration-200" />}
          </div>
          {badgeText && (
            <span className={`text-[11px] px-2.5 py-1 rounded-full font-bold border ${badgeClasses[badgeColor] || badgeClasses.green}`}>
              {badgeText}
            </span>
          )}
        </div>

        {/* Title & Description */}
        <div className="mt-5">
          <h3 className="font-bold text-slate-900 text-lg group-hover:text-tn-blue transition-colors">
            {title}
          </h3>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            {desc}
          </p>
        </div>
      </div>

      {/* Bottom CTA Arrow */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-tn-blue">
        <span>{actionText}</span>
        <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-tn-blue group-hover:text-white flex items-center justify-center transition-all duration-200">
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </div>
  );
}
