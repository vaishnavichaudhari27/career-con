import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { topBarData, brandData, navItems, whatsappContact } from './NavbarData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [locationSearch, setLocationSearch] = useState('');

  const toggleDropdown = (id) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  return (
    <header className="w-full font-sans sticky top-0 z-50 select-none">
      {/* 1. Minimal Top Bar - Only Social Icons on Right */}
      <div className="bg-slate-950 text-slate-300 border-b border-slate-800/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-end text-xs">
          {/* Social Icons */}
          <div className="flex items-center gap-1.5">
              {topBarData.socialLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="w-6 h-6 rounded-lg bg-slate-900 hover:bg-emerald-500 text-slate-400 hover:text-white border border-slate-800 flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-[0_0_10px_rgba(16,185,129,0.4)]"
                >
                  {item.iconType === 'facebook' && (
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.52-.14-2.71-.14C12.28 2 10 3.6 10 7.5v2H7v4h3V22h4v-8.5z" />
                    </svg>
                  )}
                  {item.iconType === 'linkedin' && (
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.86 0 1.56-.7 1.56-1.56a1.56 1.56 0 1 0-3.12 0c0 .86.7 1.56 1.56 1.56m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                    </svg>
                  )}
                  {item.iconType === 'whatsapp' && (
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
        </div>
      </div>

      {/* 2. Glassmorphic Main Navigation Bar */}
      <nav className="backdrop-blur-xl bg-white/95 border-b border-slate-200/80 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.06)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[68px]">
            {/* Left Brand Area: Luxury Logo + Typography + VIP Concierge WhatsApp Button */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              <Link
                to={brandData.homePath}
                className="flex items-center gap-3 group focus:outline-none"
              >
                {/* 3D Geometric Crystal Logo Mark */}
                <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-tr from-slate-950 via-emerald-950 to-slate-900 p-0.5 shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/35 transition-all duration-300 group-hover:scale-105">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center p-2 relative overflow-hidden">
                    {/* Glowing background aura */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-emerald-500/30 rounded-full blur-xs" />
                    
                    {/* Architectural Rising Trajectory & Star SVG */}
                    <svg viewBox="0 0 36 36" className="w-full h-full fill-none relative z-10">
                      <defs>
                        <linearGradient id="careerGold" x1="0%" y1="100%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#10b981" />
                          <stop offset="50%" stopColor="#34d399" />
                          <stop offset="100%" stopColor="#a3e635" />
                        </linearGradient>
                      </defs>
                      {/* Step 1 */}
                      <rect x="5" y="21" width="5" height="9" rx="2" fill="url(#careerGold)" opacity="0.6" />
                      {/* Step 2 */}
                      <rect x="12.5" y="14" width="5" height="16" rx="2" fill="url(#careerGold)" opacity="0.85" />
                      {/* Step 3 */}
                      <rect x="20" y="7" width="5" height="23" rx="2" fill="url(#careerGold)" />
                      {/* Dynamic Rocket Arrow Swoosh */}
                      <path
                        d="M4 25 C10 20, 16 16, 29 5"
                        stroke="#ffffff"
                        strokeWidth="2.8"
                        strokeLinecap="round"
                      />
                      <path
                        d="M21 5 H29 V13"
                        stroke="#ffffff"
                        strokeWidth="2.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      {/* Polished Star Accent */}
                      <polygon
                        points="30,3 31,5.5 33.5,6.5 31,7.5 30,10 29,7.5 26.5,6.5 29,5.5"
                        fill="#fef08a"
                      />
                    </svg>
                  </div>
                </div>

                {/* Brand Name Typography */}
                <div className="flex flex-col leading-none">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-950 font-sans">
                      {brandData.title}
                    </span>
                    <span className="hidden sm:inline-flex items-center gap-0.5 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 text-emerald-800 text-[9px] font-extrabold px-1.5 py-0.5 rounded-full border border-emerald-500/30 uppercase tracking-wider">
                      <svg className="w-2.5 h-2.5 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      {brandData.badge}
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-extrabold tracking-[0.32em] text-emerald-600 uppercase mt-0.5">
                    {brandData.subtitle}
                  </span>
                </div>
              </Link>

              {/* VIP Concierge WhatsApp Button - Directly Beside Brand */}
              <div className="hidden sm:block h-8 w-px bg-slate-200/90 mx-0.5" />
              <a
                href={whatsappContact.link}
                target="_blank"
                rel="noopener noreferrer"
                title="Chat with Priority Verification Head"
                className="group relative inline-flex items-center gap-2.5 bg-gradient-to-r from-emerald-50/90 via-teal-50/40 to-white hover:from-emerald-100 hover:to-emerald-50 border border-emerald-300/80 hover:border-emerald-400 p-1 sm:p-1.5 sm:pr-4 rounded-2xl shadow-xs hover:shadow-md hover:shadow-emerald-500/15 transition-all duration-300 cursor-pointer"
              >
                {/* Icon Sphere with Active Pulse */}
                <div className="relative w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 ring-2 ring-white" />
                  </span>
                  {/* WhatsApp SVG */}
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.44C8.94 7.44 8.68 7.5 8.46 7.74C8.24 7.97 7.62 8.56 7.62 9.75C7.62 10.94 8.49 12.09 8.61 12.25C8.73 12.42 10.3 14.83 12.72 15.87C13.29 16.12 13.74 16.27 14.09 16.38C14.68 16.57 15.22 16.54 15.65 16.48C16.13 16.41 17.11 15.88 17.32 15.31C17.52 14.73 17.52 14.23 17.46 14.13C17.4 14.03 17.25 13.97 17.03 13.86C16.81 13.75 15.73 13.22 15.53 13.15C15.33 13.08 15.18 13.04 15.03 13.26C14.88 13.48 14.46 13.97 14.33 14.12C14.21 14.26 14.08 14.28 13.86 14.17C13.64 14.06 12.94 13.83 12.1 13.08C11.45 12.5 11.01 11.78 10.89 11.56C10.76 11.34 10.87 11.23 10.99 11.12C11.09 11.02 11.21 10.86 11.32 10.73C11.43 10.6 11.47 10.5 11.54 10.35C11.62 10.21 11.58 10.08 11.52 9.97C11.47 9.86 11.02 8.76 10.84 8.32C10.66 7.89 10.48 7.95 10.34 7.94H9.92C9.7 7.94 9.35 8.02 9.11 8.26" />
                  </svg>
                </div>

                {/* Text Hierarchy */}
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-[9px] font-bold text-emerald-700 uppercase tracking-wider hidden sm:block">
                    {whatsappContact.label}
                  </span>
                  <span className="font-extrabold text-slate-900 tracking-tight text-xs sm:text-[13px] group-hover:text-emerald-700 transition-colors">
                    {whatsappContact.number}
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation Links - Aligned completely to Right with Luxury Pills */}
            <div className="hidden lg:flex items-center justify-end gap-1.5 ml-auto">
              {navItems.map((item) => {
                if (item.hasDropdown) {
                  return (
                    <div
                      key={item.id}
                      className="relative group py-2"
                      onMouseEnter={() => setOpenDropdown(item.id)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button
                        type="button"
                        onClick={() => toggleDropdown(item.id)}
                        className={`px-3.5 py-2 rounded-xl text-[13px] font-bold transition-all duration-200 flex items-center gap-1.5 cursor-pointer focus:outline-none ${
                          openDropdown === item.id
                            ? 'bg-slate-100 text-emerald-700 shadow-2xs'
                            : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/70'
                        }`}
                      >
                        <span>{item.title}</span>
                        <svg
                          className={`w-3.5 h-3.5 transition-transform duration-200 stroke-current text-slate-400 group-hover:text-emerald-600 ${
                            openDropdown === item.id ? 'rotate-180 text-emerald-600' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2.5"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {/* Dropdown Card */}
                      <div
                        className={`absolute top-full z-50 transition-all duration-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.18)] backdrop-blur-2xl bg-white/98 border border-slate-200/90 rounded-2xl p-4 ${
                          item.id === 'location' ? 'w-[680px] right-0' : 'w-[420px] right-0'
                        } ${
                          openDropdown === item.id
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                        }`}
                      >
                        {item.id === 'location' ? (
                          <div>
                            {/* Location Header with Live Stats & Search */}
                            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                              <div>
                                <h4 className="text-sm font-black text-slate-950 flex items-center gap-2">
                                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                  Pan-India Presence: 30 Tech & Commercial Hubs
                                </h4>
                                <p className="text-[11px] text-slate-500 mt-0.5">
                                  On-ground verification & courier documentation delivered nationwide.
                                </p>
                              </div>
                              <span className="bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
                                30 Cities Active
                              </span>
                            </div>

                            {/* 3-Column Luxury City Grid */}
                            <div className="grid grid-cols-3 gap-2 max-h-[360px] overflow-y-auto pr-1.5 custom-scrollbar">
                              {item.dropdownItems.map((city) => (
                                <NavLink
                                  key={city.path}
                                  to={city.path}
                                  className={({ isActive }) =>
                                    `p-2.5 rounded-xl transition-all duration-200 flex flex-col justify-between border ${
                                      isActive
                                        ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-transparent shadow-sm'
                                        : 'bg-slate-50/60 hover:bg-emerald-50/70 border-slate-200/60 hover:border-emerald-300 text-slate-800'
                                    }`
                                  }
                                >
                                  {({ isActive }) => (
                                    <>
                                      <div className="flex items-center justify-between">
                                        <span className="font-bold text-xs truncate">
                                          {city.title}
                                        </span>
                                        <span
                                          className={`text-[9px] font-semibold px-1.5 py-0.2 rounded-full ${
                                            isActive
                                              ? 'bg-white/20 text-white'
                                              : 'bg-slate-200/70 text-slate-600'
                                          }`}
                                        >
                                          {city.state}
                                        </span>
                                      </div>
                                      <span
                                        className={`text-[10px] mt-1 truncate ${
                                          isActive ? 'text-emerald-100' : 'text-slate-400'
                                        }`}
                                      >
                                        📍 {city.hub}
                                      </span>
                                    </>
                                  )}
                                </NavLink>
                              ))}
                            </div>

                            <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                              <span>⚡ Instant document dispatch via Blue Dart & DTDC Priority.</span>
                              <span className="font-bold text-emerald-600">All India Delivery</span>
                            </div>
                          </div>
                        ) : (
                          <div>
                            {/* Services Header */}
                            <div className="pb-3 mb-2 border-b border-slate-100 flex items-center justify-between">
                              <div>
                                <h4 className="text-sm font-black text-slate-950">
                                  Enterprise Solutions & Verification
                                </h4>
                                <p className="text-[11px] text-slate-500 mt-0.5">
                                  Authorized career documentation backed by legal verification standards.
                                </p>
                              </div>
                            </div>

                            {/* 3 Showcase Services Cards */}
                            <div className="space-y-2.5">
                              {item.dropdownItems.map((sub) => (
                                <NavLink
                                  key={sub.path}
                                  to={sub.path}
                                  className={({ isActive }) =>
                                    `p-3.5 rounded-2xl transition-all duration-200 border flex items-start gap-3.5 group/card ${
                                      isActive
                                        ? 'bg-slate-950 text-white border-slate-900 shadow-md'
                                        : 'bg-white hover:bg-slate-50/80 border-slate-200/70 hover:border-emerald-300 shadow-2xs hover:shadow-xs'
                                    }`
                                  }
                                >
                                  {({ isActive }) => (
                                    <>
                                      {/* Icon Box with Gradient Badge */}
                                      <div
                                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover/card:scale-105 shadow-sm ${
                                          isActive
                                            ? 'bg-gradient-to-tr from-emerald-500 to-teal-400 text-white'
                                            : `bg-gradient-to-tr ${sub.gradient} text-white`
                                        }`}
                                      >
                                        {sub.icon === 'file-text' && (
                                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                          </svg>
                                        )}
                                        {sub.icon === 'globe' && (
                                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                          </svg>
                                        )}
                                        {sub.icon === 'laptop' && (
                                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                          </svg>
                                        )}
                                      </div>

                                      {/* Content Details */}
                                      <div className="flex-1">
                                        <div className="flex items-center justify-between">
                                          <span className={`text-xs font-black tracking-tight ${isActive ? 'text-white' : 'text-slate-900'}`}>
                                            {sub.title}
                                          </span>
                                          {sub.badge && (
                                            <span
                                              className={`text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                                                isActive
                                                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                                                  : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                              }`}
                                            >
                                              {sub.badge}
                                            </span>
                                          )}
                                        </div>
                                        <p
                                          className={`text-[11px] mt-1 leading-snug ${
                                            isActive ? 'text-slate-300' : 'text-slate-500'
                                          }`}
                                        >
                                          {sub.desc}
                                        </p>

                                        {/* Highlights Pill Tags */}
                                        <div className="flex flex-wrap gap-1.5 mt-2">
                                          {sub.highlights.map((h, i) => (
                                            <span
                                              key={i}
                                              className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md ${
                                                isActive
                                                  ? 'bg-white/10 text-emerald-200'
                                                  : 'bg-slate-100 text-slate-600'
                                              }`}
                                            >
                                              ✓ {h}
                                            </span>
                                          ))}
                                        </div>
                                      </div>
                                    </>
                                  )}
                                </NavLink>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={item.id}
                    to={item.path}
                    end={item.path === '/'}
                    className={({ isActive }) =>
                      isActive
                        ? 'bg-slate-950 text-white font-bold text-[13px] px-4 py-2 rounded-xl shadow-md shadow-slate-950/20 border border-slate-800 flex items-center gap-1.5 transition-all duration-200'
                        : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/70 font-bold text-[13px] px-3.5 py-2 rounded-xl transition-all duration-200'
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />}
                        <span>{item.title}</span>
                      </>
                    )}
                  </NavLink>
                );
              })}
            </div>

            {/* Mobile Menu Hamburger Button */}
            <div className="lg:hidden flex items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:text-emerald-600 hover:bg-slate-100 transition-colors focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white/98 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top duration-200">
            {/* Mobile VIP WhatsApp Pill */}
            <div className="pb-2.5 border-b border-slate-100">
              <a
                href={whatsappContact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-2.5 rounded-xl font-bold text-xs shadow-md shadow-emerald-500/25"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                </span>
                <span>Official WhatsApp: {whatsappContact.number}</span>
              </a>
            </div>

            {navItems.map((item) => {
              if (item.hasDropdown) {
                const isOpen = openDropdown === item.id;
                return (
                  <div key={item.id} className="border-b border-slate-100 pb-2">
                    <button
                      type="button"
                      onClick={() => toggleDropdown(item.id)}
                      className="w-full flex items-center justify-between py-2 text-sm font-bold text-slate-900"
                    >
                      <span>{item.title}</span>
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          isOpen ? 'rotate-180 text-emerald-600' : 'text-slate-400'
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {isOpen && (
                      <div className={`pl-2 pt-1 ${item.id === 'location' ? 'grid grid-cols-2 gap-1.5 max-h-60 overflow-y-auto pr-1' : 'space-y-1.5'}`}>
                        {item.dropdownItems.map((sub) => (
                          <NavLink
                            key={sub.path}
                            to={sub.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className={({ isActive }) =>
                              `block py-2 px-2.5 rounded-xl text-xs font-semibold border ${
                                isActive
                                  ? 'bg-slate-950 text-white border-slate-900 font-bold'
                                  : 'bg-slate-50 text-slate-700 border-slate-200/60 hover:text-emerald-600'
                              }`
                            }
                          >
                            <span className="block truncate">{sub.title}</span>
                            {sub.state && (
                              <span className="block text-[10px] opacity-60 truncate">
                                {sub.state}
                              </span>
                            )}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.id}
                  to={item.path}
                  end={item.path === '/'}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-xl font-bold text-sm transition-all ${
                      isActive
                        ? 'bg-slate-950 text-white shadow-sm'
                        : 'text-slate-800 hover:bg-slate-50 hover:text-emerald-600'
                    }`
                  }
                >
                  {item.title}
                </NavLink>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
}
