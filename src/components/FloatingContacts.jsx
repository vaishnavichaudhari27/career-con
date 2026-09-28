import React from 'react';
import { whatsappContact } from '../navbar/NavbarData';

export default function FloatingContacts() {
  return (
    <div
      className="fixed left-4 sm:left-6 bottom-8 z-50 flex flex-col items-center gap-3.5 select-none"
      aria-label="Floating Quick Contact Options"
    >
      {/* 1. Phone Call Floating Button (Blue Circle - floats continuously) */}
      <a
        href={`tel:${whatsappContact.rawNumber}`}
        title={`Call Us Directly: ${whatsappContact.number}`}
        className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#1877f2] hover:bg-[#0d65d9] text-white flex items-center justify-center shadow-[0_8px_20px_rgba(24,119,242,0.45)] hover:scale-110 active:scale-95 transition-transform duration-200 cursor-pointer animate-float-slow group relative ring-2 ring-white/30"
      >
        {/* Telephone Receiver SVG */}
        <svg
          className="w-6 h-6 fill-current group-hover:rotate-12 transition-transform duration-200"
          viewBox="0 0 24 24"
        >
          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z" />
        </svg>

        {/* Tooltip on hover */}
        <span className="absolute left-full ml-3 px-2.5 py-1 bg-slate-900 text-white text-xs font-semibold rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-lg border border-slate-700">
          Call: {whatsappContact.number}
        </span>
      </a>

      {/* 2. WhatsApp Floating Button (Green Circle - floats continuously) */}
      <a
        href={whatsappContact.link}
        target="_blank"
        rel="noopener noreferrer"
        title={`Chat on WhatsApp: ${whatsappContact.number}`}
        className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-[0_8px_20px_rgba(37,211,102,0.45)] hover:scale-110 active:scale-95 transition-transform duration-200 cursor-pointer animate-float-delayed group relative ring-2 ring-white/30"
      >
        {/* WhatsApp Logo SVG */}
        <svg
          className="w-6 h-6 fill-current group-hover:scale-110 transition-transform duration-200"
          viewBox="0 0 24 24"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.44C8.94 7.44 8.68 7.5 8.46 7.74C8.24 7.97 7.62 8.56 7.62 9.75C7.62 10.94 8.49 12.09 8.61 12.25C8.73 12.42 10.3 14.83 12.72 15.87C13.29 16.12 13.74 16.27 14.09 16.38C14.68 16.57 15.22 16.54 15.65 16.48C16.13 16.41 17.11 15.88 17.32 15.31C17.52 14.73 17.52 14.23 17.46 14.13C17.4 14.03 17.25 13.97 17.03 13.86C16.81 13.75 15.73 13.22 15.53 13.15C15.33 13.08 15.18 13.04 15.03 13.26C14.88 13.48 14.46 13.97 14.33 14.12C14.21 14.26 14.08 14.28 13.86 14.17C13.64 14.06 12.94 13.83 12.1 13.08C11.45 12.5 11.01 11.78 10.89 11.56C10.76 11.34 10.87 11.23 10.99 11.12C11.09 11.02 11.21 10.86 11.32 10.73C11.43 10.6 11.47 10.5 11.54 10.35C11.62 10.21 11.58 10.08 11.52 9.97C11.47 9.86 11.02 8.76 10.84 8.32C10.66 7.89 10.48 7.95 10.34 7.94H9.92C9.7 7.94 9.35 8.02 9.11 8.26" />
        </svg>

        {/* Tooltip on hover */}
        <span className="absolute left-full ml-3 px-2.5 py-1 bg-slate-900 text-white text-xs font-semibold rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-lg border border-slate-700">
          WhatsApp: {whatsappContact.number}
        </span>
      </a>
    </div>
  );
}
