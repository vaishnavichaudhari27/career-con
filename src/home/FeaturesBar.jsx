import React from 'react';
import { Link } from 'react-router-dom';
import { featuresBarData } from './FeaturesBarData';

export default function FeaturesBar() {
  const renderIcon = (type) => {
    switch (type) {
      case 'certificate':
        // Vibrant yellow/gold badge with certificate document and ribbon seal (matching Image 1)
        return (
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/30 shrink-0 group-hover:scale-105 group-hover:shadow-amber-500/50 transition-all duration-300">
            <svg
              className="w-8 h-8 sm:w-9 sm:h-9 text-white drop-shadow-sm"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" fill="#ffffff" stroke="#f59e0b" strokeWidth="1.5" />
              <path d="M7 8h10" stroke="#0284c7" strokeWidth="2" />
              <path d="M7 12h6" stroke="#94a3b8" strokeWidth="1.8" />
              <path d="M7 16h4" stroke="#94a3b8" strokeWidth="1.8" />
              {/* Ribbon Seal */}
              <circle cx="15.5" cy="15.5" r="2.8" fill="#ef4444" stroke="#dc2626" strokeWidth="1" />
              <path d="M14.5 17.8L14 21l2-1 2 1-.5-3.2" fill="#ef4444" stroke="#b91c1c" strokeWidth="0.8" />
            </svg>
          </div>
        );

      case 'visa':
        // Global Passport with stamped document / globe icon (matching Visa Documentation requirement)
        return (
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30 shrink-0 group-hover:scale-105 group-hover:shadow-blue-500/50 transition-all duration-300">
            <svg
              className="w-8 h-8 sm:w-9 sm:h-9"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Passport Booklet */}
              <rect x="4" y="3" width="13" height="18" rx="2" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
              <circle cx="10.5" cy="9.5" r="3.5" stroke="#fbbf24" strokeWidth="1.5" />
              <path d="M7.5 9.5h6" stroke="#fbbf24" strokeWidth="1.2" />
              <path d="M10.5 6.5v6" stroke="#fbbf24" strokeWidth="1.2" />
              {/* Stamped verification check */}
              <circle cx="17.5" cy="16.5" r="4.5" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
              <path d="M15.5 16.5l1.5 1.5 2.5-3" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </div>
        );

      case 'training':
        // Modern tech-laptop with gear / code screen (matching Real Time Project Training requirement)
        return (
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#a0c828] to-[#7fa318] flex items-center justify-center shadow-lg shadow-[#a0c828]/35 shrink-0 group-hover:scale-105 group-hover:shadow-[#a0c828]/55 transition-all duration-300">
            <svg
              className="w-8 h-8 sm:w-9 sm:h-9"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Laptop Body */}
              <rect x="3" y="5" width="18" height="12" rx="2" fill="#0f172a" stroke="#ffffff" strokeWidth="1.5" />
              <path d="M2 19h20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
              {/* Code brackets on screen */}
              <path d="M7 11l-2-2 2-2" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M11 11l2-2-2-2" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              {/* Gear accent */}
              <circle cx="16" cy="9" r="1.5" stroke="#facc15" strokeWidth="1.5" />
            </svg>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative w-full z-20 select-none bg-gradient-to-r from-slate-100 via-white to-slate-100 border-y border-slate-300/80 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 md:divide-x md:divide-slate-300/80">
          {featuresBarData.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className="group flex items-center justify-center md:justify-center gap-4 px-6 py-2 transition-all duration-300 hover:bg-white/80 rounded-xl"
            >
              {renderIcon(item.type)}
              <div className="flex flex-col text-left">
                <span className="text-base sm:text-lg font-serif font-bold text-slate-800 tracking-tight group-hover:text-[#7fa318] transition-colors duration-200">
                  {item.title}
                </span>
                <span className="text-xs font-semibold text-slate-500 tracking-wide uppercase">
                  {item.tagline}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
