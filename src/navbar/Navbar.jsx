import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { topBarData, brandData, navItems, ctaButton } from './NavbarData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  return (
    <header className="w-full font-sans sticky top-0 z-50 select-none">
      {/* 1. Ultra-Modern Top Bar */}
      <div className="bg-slate-900 text-slate-300 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between text-xs">
          {/* Left: Active Live Support WhatsApp Pill */}
          <a
            href={topBarData.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-slate-800/90 hover:bg-emerald-950/60 border border-slate-700/60 hover:border-emerald-500/50 px-3 py-1 rounded-full text-slate-200 hover:text-emerald-400 transition-all duration-300"
          >
            {/* Pulsing Live Dot */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>

            {/* WhatsApp SVG */}
            <svg
              className="w-3.5 h-3.5 fill-current text-emerald-400 group-hover:scale-110 transition-transform"
              viewBox="0 0 24 24"
            >
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.44C8.94 7.44 8.68 7.5 8.46 7.74C8.24 7.97 7.62 8.56 7.62 9.75C7.62 10.94 8.49 12.09 8.61 12.25C8.73 12.42 10.3 14.83 12.72 15.87C13.29 16.12 13.74 16.27 14.09 16.38C14.68 16.57 15.22 16.54 15.65 16.48C16.13 16.41 17.11 15.88 17.32 15.31C17.52 14.73 17.52 14.23 17.46 14.13C17.4 14.03 17.25 13.97 17.03 13.86C16.81 13.75 15.73 13.22 15.53 13.15C15.33 13.08 15.18 13.04 15.03 13.26C14.88 13.48 14.46 13.97 14.33 14.12C14.21 14.26 14.08 14.28 13.86 14.17C13.64 14.06 12.94 13.83 12.1 13.08C11.45 12.5 11.01 11.78 10.89 11.56C10.76 11.34 10.87 11.23 10.99 11.12C11.09 11.02 11.21 10.86 11.32 10.73C11.43 10.6 11.47 10.5 11.54 10.35C11.62 10.21 11.58 10.08 11.52 9.97C11.47 9.86 11.02 8.76 10.84 8.32C10.66 7.89 10.48 7.95 10.34 7.94H9.92C9.7 7.94 9.35 8.02 9.11 8.26" />
            </svg>
            <span className="font-medium text-slate-300 group-hover:text-emerald-300">
              {topBarData.whatsappText}:
            </span>
            <span className="font-semibold text-white tracking-wide">
              {topBarData.whatsappNumber}
            </span>
          </a>

          {/* Center: Trust Badge (Desktop Only) */}
          <div className="hidden md:flex items-center gap-1.5 text-slate-400 font-medium tracking-wide">
            <span>{topBarData.trustBadge}</span>
          </div>

          {/* Right: Modern Social Media Icons */}
          <div className="flex items-center gap-1.5">
            {topBarData.socialLinks.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                className="w-6 h-6 rounded-full bg-slate-800 hover:bg-emerald-500 text-slate-400 hover:text-white border border-slate-700/60 flex items-center justify-center transition-all duration-200 hover:scale-110"
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
      <nav className="backdrop-blur-md bg-white/95 border-b border-slate-100 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.06)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Modern Logo */}
            <Link
              to={brandData.homePath}
              className="flex items-center gap-3 group shrink-0"
            >
              {/* High-tech Gradient Icon Mark */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 via-emerald-500 to-lime-500 p-0.5 shadow-md shadow-emerald-500/20 group-hover:shadow-emerald-500/35 group-hover:scale-105 transition-all duration-300">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-emerald-400 group-hover:rotate-12 transition-transform duration-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                </div>
              </div>

              {/* Brand Typography & Badge */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    {brandData.title}
                  </span>
                  <span className="bg-emerald-50 text-emerald-700 text-[9px] font-bold px-1.5 py-0.5 rounded-full border border-emerald-200/60 uppercase tracking-wider">
                    {brandData.badge}
                  </span>
                </div>
                <span className="text-[10px] font-bold tracking-[0.25em] text-emerald-600 uppercase">
                  {brandData.subtitle}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1">
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
                        className="px-3.5 py-1.5 rounded-full text-[14px] font-semibold text-slate-700 hover:text-emerald-600 hover:bg-slate-50 transition-all flex items-center gap-1 cursor-pointer focus:outline-none"
                      >
                        <span>{item.title}</span>
                        <svg
                          className={`w-3.5 h-3.5 transition-transform duration-200 text-slate-400 group-hover:text-emerald-600 ${
                            openDropdown === item.id ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {/* Dropdown Card */}
                      <div
                        className={`absolute top-full left-0 z-50 transition-all duration-200 shadow-2xl backdrop-blur-xl bg-white/98 border border-slate-100 rounded-2xl p-2.5 ${
                          item.id === 'location' ? 'w-88' : 'w-80'
                        } ${
                          openDropdown === item.id
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                        }`}
                      >
                        {item.id === 'location' ? (
                          <div>
                            <div className="px-3 py-1.5 mb-1.5 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                              Major Service Locations
                            </div>
                            <div className="grid grid-cols-2 gap-1.5">
                              {item.dropdownItems.map((city) => (
                                <NavLink
                                  key={city.path}
                                  to={city.path}
                                  className={({ isActive }) =>
                                    `px-3 py-2 rounded-xl text-xs font-semibold transition-all flex flex-col ${
                                      isActive
                                        ? 'bg-emerald-600 text-white shadow-sm'
                                        : 'text-slate-700 hover:bg-emerald-50 hover:text-emerald-700'
                                    }`
                                  }
                                >
                                  <span>{city.title}</span>
                                  <span className="text-[10px] font-normal opacity-70">
                                    {city.state}
                                  </span>
                                </NavLink>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <div>
                            <div className="px-3 py-1.5 mb-1 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                              Documentation Solutions
                            </div>
                            <div className="space-y-1">
                              {item.dropdownItems.map((sub) => (
                                <NavLink
                                  key={sub.path}
                                  to={sub.path}
                                  className={({ isActive }) =>
                                    `flex items-start gap-3 p-2.5 rounded-xl transition-all group/item ${
                                      isActive
                                        ? 'bg-emerald-600 text-white shadow-sm'
                                        : 'hover:bg-slate-50 text-slate-700'
                                    }`
                                  }
                                >
                                  {({ isActive }) => (
                                    <>
                                      {/* Icon Box */}
                                      <div
                                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                                          isActive
                                            ? 'bg-white/20 text-white'
                                            : 'bg-emerald-50 text-emerald-600 group-hover/item:bg-emerald-600 group-hover/item:text-white'
                                        }`}
                                      >
                                        <svg
                                          className="w-4 h-4"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                          strokeWidth="2"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                          />
                                        </svg>
                                      </div>

                                      <div className="flex-1">
                                        <div className="flex items-center gap-2">
                                          <span className="text-xs font-semibold leading-tight">
                                            {sub.title}
                                          </span>
                                          {sub.badge && (
                                            <span
                                              className={`text-[9px] font-bold px-1.5 py-0.2 rounded-full uppercase ${
                                                isActive
                                                  ? 'bg-white/20 text-white'
                                                  : 'bg-amber-100 text-amber-700'
                                              }`}
                                            >
                                              {sub.badge}
                                            </span>
                                          )}
                                        </div>
                                        <div
                                          className={`text-[11px] mt-0.5 line-clamp-1 leading-snug ${
                                            isActive
                                              ? 'text-emerald-100'
                                              : 'text-slate-400'
                                          }`}
                                        >
                                          {sub.desc}
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
                        ? 'bg-gradient-to-r from-emerald-600 to-lime-600 text-white font-semibold text-[14px] px-4 py-1.5 rounded-full shadow-md shadow-emerald-600/25 transition-all'
                        : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50 font-semibold text-[14px] px-3.5 py-1.5 rounded-full transition-all'
                    }
                  >
                    {item.title}
                  </NavLink>
                );
              })}
            </div>

            {/* Right Action: Enquire Now Button (Desktop) */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={ctaButton.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 via-emerald-500 to-lime-600 hover:from-emerald-700 hover:to-lime-700 text-white font-semibold text-xs px-4 py-2 rounded-full shadow-md shadow-emerald-500/25 hover:shadow-lg hover:shadow-emerald-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>{ctaButton.text}</span>
                <svg
                  className="w-3.5 h-3.5 fill-none stroke-current"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
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
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top duration-200">
            {navItems.map((item) => {
              if (item.hasDropdown) {
                const isOpen = openDropdown === item.id;
                return (
                  <div key={item.id} className="border-b border-slate-100 pb-2">
                    <button
                      type="button"
                      onClick={() => toggleDropdown(item.id)}
                      className="w-full flex items-center justify-between py-2 text-sm font-semibold text-slate-800"
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
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {isOpen && (
                      <div className="pl-3 pt-1 space-y-1">
                        {item.dropdownItems.map((sub) => (
                          <NavLink
                            key={sub.path}
                            to={sub.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className={({ isActive }) =>
                              `block py-1.5 px-2.5 rounded-lg text-xs ${
                                isActive
                                  ? 'bg-emerald-50 text-emerald-700 font-bold'
                                  : 'text-slate-600 hover:text-emerald-600'
                              }`
                            }
                          >
                            {sub.title}
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
                    `block py-2 px-3 rounded-xl font-semibold text-sm transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-emerald-600 to-lime-600 text-white shadow-sm'
                        : 'text-slate-800 hover:bg-slate-50 hover:text-emerald-600'
                    }`
                  }
                >
                  {item.title}
                </NavLink>
              );
            })}

            {/* Mobile Action CTA Button */}
            <div className="pt-3">
              <a
                href={ctaButton.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-lime-600 text-white py-2.5 rounded-xl font-semibold text-xs shadow-md shadow-emerald-500/25"
              >
                <span>{ctaButton.text}</span>
                <svg
                  className="w-3.5 h-3.5 fill-none stroke-current"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
