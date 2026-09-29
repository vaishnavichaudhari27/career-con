import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { navItems } from '../navbar/NavbarData';
import {
  heroCarouselSlides,
  featuresBarData,
  aboutSectionData,
  servicesSectionData,
} from './homeData';

// Extended slides with clone for infinite seamless carousel looping
const extendedHeroSlides = [...heroCarouselSlides, { ...heroCarouselSlides[0], id: 'clone-0' }];

export default function Home() {
  // ================= 1. HERO SECTION STATES =================
  const [heroSlide, setHeroSlide] = useState(0);
  const [heroTransitioning, setHeroTransitioning] = useState(true);
  const [heroPaused, setHeroPaused] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Cities for dropdown
  const locationItem = navItems.find((item) => item.id === 'location');
  const cities = locationItem ? locationItem.dropdownItems : [];

  // Hero carousel timer (3 seconds)
  useEffect(() => {
    if (heroPaused) return;
    const interval = setInterval(() => {
      setHeroTransitioning(true);
      setHeroSlide((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroPaused]);

  const handleHeroTransitionEnd = () => {
    if (heroSlide >= heroCarouselSlides.length) {
      setHeroTransitioning(false);
      setHeroSlide(0);
    }
  };

  const handleHeroNext = () => {
    setHeroTransitioning(true);
    setHeroSlide((prev) => prev + 1);
  };

  const handleHeroPrev = () => {
    setHeroTransitioning(true);
    if (heroSlide === 0) {
      setHeroTransitioning(false);
      setHeroSlide(heroCarouselSlides.length);
      setTimeout(() => {
        setHeroTransitioning(true);
        setHeroSlide(heroCarouselSlides.length - 1);
      }, 20);
    } else {
      setHeroSlide((prev) => prev - 1);
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please enter your name and phone number.');
      return;
    }
    setIsSubmitted(true);
  };

  // ================= 2. ABOUT US CAROUSEL STATES =================
  const [aboutSlide, setAboutSlide] = useState(0);
  const [aboutPaused, setAboutPaused] = useState(false);
  const aboutImages = aboutSectionData.carouselImages;

  useEffect(() => {
    if (aboutPaused) return;
    const interval = setInterval(() => {
      setAboutSlide((prev) => (prev + 1) % aboutImages.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [aboutPaused, aboutImages.length]);

  const handleAboutNext = () => {
    setAboutSlide((prev) => (prev + 1) % aboutImages.length);
  };

  const handleAboutPrev = () => {
    setAboutSlide((prev) => (prev - 1 + aboutImages.length) % aboutImages.length);
  };

  // ================= 3. OUR SERVICES 3D FLIP CARD STATES =================
  const [activeFlippedCard, setActiveFlippedCard] = useState(null);

  const toggleMobileFlip = (id) => {
    setActiveFlippedCard((prev) => (prev === id ? null : id));
  };

  // Helper to render Features Bar Icons
  const renderFeatureIcon = (type) => {
    switch (type) {
      case 'certificate':
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
              <circle cx="15.5" cy="15.5" r="2.8" fill="#ef4444" stroke="#dc2626" strokeWidth="1" />
              <path d="M14.5 17.8L14 21l2-1 2 1-.5-3.2" fill="#ef4444" stroke="#b91c1c" strokeWidth="0.8" />
            </svg>
          </div>
        );

      case 'visa':
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
              <rect x="4" y="3" width="13" height="18" rx="2" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
              <circle cx="10.5" cy="9.5" r="3.5" stroke="#fbbf24" strokeWidth="1.5" />
              <path d="M7.5 9.5h6" stroke="#fbbf24" strokeWidth="1.2" />
              <path d="M10.5 6.5v6" stroke="#fbbf24" strokeWidth="1.2" />
              <circle cx="17.5" cy="16.5" r="4.5" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
              <path d="M15.5 16.5l1.5 1.5 2.5-3" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </div>
        );

      case 'training':
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
              <rect x="3" y="5" width="18" height="12" rx="2" fill="#0f172a" stroke="#ffffff" strokeWidth="1.5" />
              <path d="M2 19h20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
              <path d="M7 11l-2-2 2-2" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M11 11l2-2-2-2" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="16" cy="9" r="1.5" stroke="#facc15" strokeWidth="1.5" />
            </svg>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full flex flex-col">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Left Carousel + Right Request Information Form)          */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-[calc(100vh-105px)] flex items-center justify-center overflow-hidden py-8 lg:py-12 select-none">
        <div className="absolute inset-0 bg-slate-950/40 backdrop-brightness-[0.88] pointer-events-none z-0" />

        <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT SIDE: FULL BRIGHTNESS SEAMLESS CAROUSEL (Full Images without cut off) */}
            <div
              className="lg:col-span-7 flex flex-col justify-center"
              onMouseEnter={() => setHeroPaused(true)}
              onMouseLeave={() => setHeroPaused(false)}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_35px_rgba(160,200,40,0.2)] border-2 border-white/35 bg-slate-950/90 backdrop-blur-xl group">
                {/* Generous Height matching the Form so images are fully visible */}
                <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[510px] overflow-hidden bg-slate-950">
                  <div
                    className={`flex w-full h-full ${
                      heroTransitioning
                        ? 'transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]'
                        : 'transition-none'
                    }`}
                    style={{ transform: `translateX(-${heroSlide * 100}%)` }}
                    onTransitionEnd={handleHeroTransitionEnd}
                  >
                    {extendedHeroSlides.map((slide, index) => (
                      <div
                        key={`${slide.id}-${index}`}
                        className="w-full h-full shrink-0 relative overflow-hidden"
                      >
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-full object-cover object-center brightness-105 contrast-105"
                        />
                        {/* Smooth bottom gradient for title clarity */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                        {/* Slide Caption Box */}
                        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 text-white z-20">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="bg-[#a0c828] text-slate-950 text-[10px] sm:text-xs font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-md shadow-[#a0c828]/40">
                              {slide.tag}
                            </span>
                            <span className="text-[11px] font-bold text-emerald-300 bg-white/15 px-2.5 py-0.5 rounded-full backdrop-blur-xs border border-white/20">
                              ✓ {slide.stat}
                            </span>
                          </div>

                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-white leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                            {slide.title}
                          </h3>

                          <p className="mt-1.5 text-xs sm:text-sm text-slate-100 line-clamp-2 leading-relaxed drop-shadow-[0_1px_5px_rgba(0,0,0,0.8)] font-medium">
                            {slide.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Carousel Navigation Arrow Controls */}
                <button
                  type="button"
                  onClick={handleHeroPrev}
                  aria-label="Previous Slide"
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-950/75 hover:bg-[#a0c828] text-white hover:text-slate-950 border border-white/30 flex items-center justify-center transition-all duration-200 opacity-80 group-hover:opacity-100 hover:scale-110 shadow-lg cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={handleHeroNext}
                  aria-label="Next Slide"
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-950/75 hover:bg-[#a0c828] text-white hover:text-slate-950 border border-white/30 flex items-center justify-center transition-all duration-200 opacity-80 group-hover:opacity-100 hover:scale-110 shadow-lg cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Progress bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20 overflow-hidden">
                  <div
                    key={heroSlide}
                    className="h-full bg-[#a0c828] transition-all duration-[3000ms] ease-linear shadow-[0_0_8px_#a0c828]"
                    style={{ width: '100%' }}
                  />
                </div>
              </div>

              {/* Quick Trust Bar */}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-white px-2 font-medium">
                <span className="flex items-center gap-1.5 drop-shadow-sm">
                  <svg className="w-4 h-4 text-[#a0c828]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  100% Legal & Background Verified
                </span>
                <span className="flex items-center gap-1.5 drop-shadow-sm">
                  <svg className="w-4 h-4 text-[#a0c828]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Top 30+ Hubs Covered
                </span>
                <span className="flex items-center gap-1.5 drop-shadow-sm">
                  <svg className="w-4 h-4 text-[#a0c828]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Infinite Seamless Loop
                </span>
              </div>
            </div>

            {/* RIGHT SIDE: REQUEST INFORMATION FORM */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md bg-slate-950/90 sm:bg-slate-900/95 backdrop-blur-2xl border-2 border-white/30 p-6 sm:p-8 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(160,200,40,0.22)] relative">
                <div className="mb-6">
                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
                    <span className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">Request </span>
                    <span className="text-[#a0c828] drop-shadow-[0_0_12px_rgba(160,200,40,0.5)]">Information</span>
                  </h2>
                  <p className="text-xs text-slate-200 mt-1 font-medium">
                    Fill in your details for quick verification & documentation advice.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="bg-emerald-500/20 border border-emerald-500/50 rounded-2xl p-5 text-center text-white space-y-2 animate-in fade-in duration-300">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-[#a0c828] flex items-center justify-center mx-auto">
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-lg text-white">Thank You, {formData.name}!</h4>
                    <p className="text-xs text-slate-200">
                      Your request has been received. Our senior verification advisor will contact you within 15 minutes on{' '}
                      <span className="text-[#a0c828] font-bold">{formData.phone}</span>.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', city: '', message: '' });
                      }}
                      className="mt-3 text-xs text-[#a0c828] hover:underline font-semibold cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="Enter Name"
                        required
                        className="w-full bg-white text-slate-950 placeholder:text-slate-500 px-4 py-3 rounded-lg text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#a0c828] shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleFormChange}
                          placeholder="Email"
                          required
                          className="w-full bg-white text-slate-950 placeholder:text-slate-500 px-4 py-3 rounded-lg text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#a0c828] shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-all"
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleFormChange}
                          placeholder="Phone"
                          required
                          className="w-full bg-white text-slate-950 placeholder:text-slate-500 px-4 py-3 rounded-lg text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#a0c828] shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-all"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleFormChange}
                        required
                        className="w-full bg-white text-slate-950 px-4 py-3 rounded-lg text-sm font-semibold appearance-none focus:outline-none focus:ring-2 focus:ring-[#a0c828] shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-all cursor-pointer"
                      >
                        <option value="">Choose City</option>
                        {cities.map((city) => (
                          <option key={city.path} value={city.title}>
                            {city.title} ({city.state})
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-600">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>

                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleFormChange}
                        placeholder="Enter Message"
                        rows={3}
                        className="w-full bg-white text-slate-950 placeholder:text-slate-500 px-4 py-3 rounded-lg text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#a0c828] shadow-[0_2px_8px_rgba(0,0,0,0.15)] resize-none transition-all"
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full bg-[#a0c828] hover:bg-[#8eb322] active:scale-[0.99] text-white font-black py-3.5 px-6 rounded-lg text-base shadow-[0_10px_25px_rgba(160,200,40,0.5)] hover:shadow-[0_12px_35px_rgba(160,200,40,0.65)] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 tracking-wide"
                      >
                        <span>Submit Request</span>
                        <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </form>
                )}

                <div className="mt-4 pt-3 border-t border-white/15 text-center">
                  <span className="text-[11px] text-slate-200 font-medium">
                    Need instant response? Call / WhatsApp:{' '}
                    <a
                      href="https://wa.me/919028760099"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#a0c828] font-bold hover:underline"
                    >
                      +91 9028760099
                    </a>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. HORIZONTAL FEATURES BAR (Experience Cert | Visa Doc | Project Training) */}
      {/* ========================================================================= */}
      <div className="relative w-full z-20 select-none bg-gradient-to-r from-slate-100 via-white to-slate-100 border-y border-slate-300/80 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 md:divide-x md:divide-slate-300/80">
            {featuresBarData.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className="group flex items-center justify-center md:justify-center gap-4 px-6 py-2 transition-all duration-300 hover:bg-white/80 rounded-xl"
              >
                {renderFeatureIcon(item.type)}
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

      {/* ========================================================================= */}
      {/* 3. ABOUT US SECTION: "About Career Consultancy" (3-Column Equal Split)     */}
      {/* ========================================================================= */}
      <section className="relative w-full py-12 lg:py-16 bg-white/95 text-slate-800 border-b border-slate-200/80 select-none overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            
            {/* LEFT COLUMN: FULL-FRAME SMOOTH CAROUSEL (NO DOTS, NO CUT OFF) */}
            <div
              className="relative w-full h-[420px] sm:h-[450px] lg:h-[460px] rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 group"
              onMouseEnter={() => setAboutPaused(true)}
              onMouseLeave={() => setAboutPaused(false)}
            >
              <div className="relative w-full h-full">
                {aboutImages.map((img, idx) => (
                  <div
                    key={img.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      idx === aboutSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                  >
                    <img
                      src={img.url}
                      alt={img.alt}
                      className="w-full h-full object-cover object-center brightness-105 contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20" />
                    <div className="absolute bottom-4 left-4 right-4 z-20">
                      <span className="inline-block bg-black/60 backdrop-blur-xs text-[#a0c828] text-xs font-bold px-2.5 py-1 rounded-md border border-white/10 shadow-sm">
                        {img.caption}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                type="button"
                onClick={handleAboutPrev}
                aria-label="Previous Slide"
                className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-[#a0c828] text-white hover:text-slate-950 flex items-center justify-center transition-all opacity-70 group-hover:opacity-100 cursor-pointer shadow-md"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={handleAboutNext}
                aria-label="Next Slide"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-[#a0c828] text-white hover:text-slate-950 flex items-center justify-center transition-all opacity-70 group-hover:opacity-100 cursor-pointer shadow-md"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* CENTER COLUMN: TEXT CONTENT & READ MORE CTA (PERFECTLY FITTED INSIDE CARD) */}
            <div className="relative w-full h-[420px] sm:h-[450px] lg:h-[460px] rounded-2xl bg-white p-6 sm:p-7 lg:p-8 flex flex-col justify-between items-center text-center shadow-lg border border-slate-200 overflow-hidden">
              <div className="flex flex-col items-center">
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
                  <span className="text-slate-900">{aboutSectionData.headingPart1} </span>
                  <span className="text-[#a0c828] drop-shadow-xs">{aboutSectionData.headingPart2}</span>
                </h2>
                <div className="flex items-center justify-center gap-1 mt-2.5">
                  <div className="w-10 h-0.5 bg-[#a0c828]" />
                  <div className="w-2.5 h-2.5 rotate-45 border-2 border-[#a0c828] bg-white" />
                  <div className="w-10 h-0.5 bg-[#a0c828]" />
                </div>
              </div>

              {/* Summary Text comfortably positioned */}
              <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-normal px-1 my-auto">
                {aboutSectionData.summaryText}
              </p>

              {/* Read More Button - 100% inside card with comfortable spacing */}
              <div className="pt-2 pb-1">
                <Link
                  to={aboutSectionData.readMoreBtn.link}
                  className="inline-flex items-center justify-center px-8 py-2.5 rounded-lg bg-[#a0c828] hover:bg-[#8eb322] active:scale-95 text-white font-bold text-sm shadow-md shadow-[#a0c828]/40 hover:shadow-lg hover:shadow-[#a0c828]/50 transition-all duration-200 cursor-pointer tracking-wide"
                >
                  {aboutSectionData.readMoreBtn.text}
                </Link>
              </div>
            </div>

            {/* RIGHT COLUMN: STATIC FEATURE IMAGE */}
            <div className="relative w-full h-[420px] sm:h-[450px] lg:h-[460px] rounded-2xl overflow-hidden shadow-lg border border-slate-200 group bg-slate-900">
              <img
                src={aboutSectionData.staticFeature.imageUrl}
                alt={aboutSectionData.staticFeature.alt}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-slate-950/30" />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 text-white z-10">
                <h3 className="text-xl sm:text-2xl font-black drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] tracking-tight">
                  {aboutSectionData.staticFeature.badgeText}
                </h3>
                <div className="mt-1 text-3xl sm:text-4xl font-extrabold text-[#a0c828] drop-shadow-[0_0_12px_rgba(160,200,40,0.6)]">
                  {aboutSectionData.staticFeature.highlightText}
                </div>
                <p className="mt-2 text-xs sm:text-sm text-slate-200 font-medium max-w-xs drop-shadow-sm">
                  {aboutSectionData.staticFeature.subText}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. OUR SERVICES SECTION: 3D Flip Cards (Uniform Size, Premium Colors)     */}
      {/* ========================================================================= */}
      <section className="relative w-full py-14 lg:py-20 bg-slate-950/90 text-white select-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase">
              <span className="text-white drop-shadow-sm">{servicesSectionData.headingPart1} </span>
              <span className="text-[#a0c828] drop-shadow-[0_0_15px_rgba(160,200,40,0.5)]">
                {servicesSectionData.headingPart2}
              </span>
            </h2>

            <div className="flex items-center justify-center gap-1.5 mt-3 mb-4">
              <div className="w-12 h-1 bg-[#a0c828] rounded-full" />
              <div className="w-3 h-3 rotate-45 border-2 border-[#a0c828] bg-slate-900" />
              <div className="w-12 h-1 bg-[#a0c828] rounded-full" />
            </div>

            <p className="text-xs sm:text-sm text-slate-300 font-medium">
              {servicesSectionData.subheading}
            </p>
          </div>

          {/* Equal Width & Height 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {servicesSectionData.cards.map((card) => {
              const isFlipped = activeFlippedCard === card.id;

              return (
                <div
                  key={card.id}
                  className="perspective-1000 group w-full h-[460px] sm:h-[480px] cursor-pointer"
                  onClick={() => toggleMobileFlip(card.id)}
                >
                  <div
                    className={`relative w-full h-full transform-style-3d transition-transform duration-700 ease-[cubic-bezier(0.4,0.2,0.2,1)] ${
                      isFlipped ? 'rotate-y-180' : 'group-hover:rotate-y-180'
                    }`}
                  >
                    {/* FRONT SIDE (Executive Rich Deep Navy/Sapphire Color, Clean Header & Footer) */}
                    <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-slate-900 flex flex-col">
                      {/* Top 52%: Image with soft overlay */}
                      <div className="relative w-full h-[52%] overflow-hidden bg-slate-950">
                        <img
                          src={card.frontImage}
                          alt={card.title}
                          className="w-full h-full object-cover object-center brightness-105 contrast-105 group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20" />
                      </div>

                      {/* Bottom 48%: Executive Deep Navy/Slate Card Body (New Premium Color) */}
                      <div
                        className={`relative w-full h-[48%] bg-gradient-to-b ${card.frontGradient} p-6 sm:p-7 flex flex-col justify-center text-white border-t-2`}
                        style={{ borderTopColor: `${card.frontAccentLine}60` }}
                      >
                        <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight drop-shadow-sm">
                          {card.title}
                        </h3>

                        {/* Elegant Accent Line */}
                        <div
                          className="w-12 h-1 rounded-full my-2.5"
                          style={{ backgroundColor: card.frontAccentLine }}
                        />

                        <p className="text-xs sm:text-[13px] text-slate-200 leading-relaxed font-normal">
                          {card.frontDescription}
                        </p>
                      </div>
                    </div>

                    {/* BACK SIDE (Dynamic Accent Gradient with Read More Button) */}
                    <div
                      className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/30 p-6 sm:p-7 flex flex-col justify-between bg-gradient-to-br ${card.backAccentGradient}`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span
                            className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border shadow-sm"
                            style={{
                              color: card.backAccentColor,
                              borderColor: `${card.backAccentColor}50`,
                              backgroundColor: `${card.backAccentColor}15`,
                            }}
                          >
                            Verified Service
                          </span>
                          <span className="text-xs text-white/60">3D Overview</span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight drop-shadow-md">
                          {card.backTitle}
                        </h3>

                        <div className="w-12 h-1 bg-[#a0c828] rounded-full mt-2 mb-3.5" />

                        <p className="text-xs sm:text-[13px] text-slate-200 leading-relaxed font-normal">
                          {card.backDescription}
                        </p>

                        <ul className="mt-4 space-y-1.5 text-xs text-slate-100 font-medium">
                          {card.highlights.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span className="w-4 h-4 rounded-full bg-[#a0c828]/25 text-[#a0c828] flex items-center justify-center text-[10px] shrink-0 font-bold">
                                ✓
                              </span>
                              <span className="truncate">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-white/15 flex items-center justify-between">
                        <Link
                          to={card.path}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white hover:bg-[#a0c828] text-slate-950 hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-lg hover:shadow-[#a0c828]/40 group/btn cursor-pointer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span>{card.btnText}</span>
                          <svg
                            className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>

                        <span className="text-[11px] text-slate-300 font-medium">
                          Instant Activation
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
}
