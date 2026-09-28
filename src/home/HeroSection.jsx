import React, { useState, useEffect } from 'react';
import { navItems } from '../navbar/NavbarData';

const carouselSlides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    tag: 'Career Growth & Advisory',
    title: 'Accelerate Your Next Career Milestone',
    description: '100% Genuine work experience certificates & professional documentation compliant with top MNC background verification.',
    stat: '14,800+ Careers Guided',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
    tag: 'Global Visa Assistance',
    title: 'Apostille & Embassy-Grade Visa Documentation',
    description: 'End-to-end visa paperwork for work, permanent residency, and study permits verified for USA, UK, Canada & Europe.',
    stat: '99.4% Approval Rate',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    tag: 'Corporate Training',
    title: 'Hands-on Real Time Projects Training',
    description: 'Live production codebases, enterprise architecture, and technical interview defense led by industry architects.',
    stat: '30+ Live Enterprise Repos',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    tag: 'Verification Shield',
    title: 'Telephonic & Official Email Verification',
    description: 'Active HR domain email verification and dedicated telephonic BGC response support across 30+ Indian commercial hubs.',
    stat: 'Pan-India BGC Clear',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80',
    tag: 'Trusted Nationwide',
    title: 'Proven Credibility for 12+ Years',
    description: 'Empowering ambitious professionals across Bengaluru, Hyderabad, Pune, Mumbai, Gurugram, Noida, and 24 other cities.',
    stat: 'ISO 9001:2015 Certified',
  },
];

// Append clone of first slide for seamless infinite forward looping
const extendedSlides = [...carouselSlides, { ...carouselSlides[0], id: 'clone-0' }];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Extract cities from NavbarData location items
  const locationItem = navItems.find((item) => item.id === 'location');
  const cities = locationItem ? locationItem.dropdownItems : [];

  // Carousel timer: every 3 seconds (3000ms) smoothly advances forward
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentSlide((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Handle seamless infinite loop reset
  const handleTransitionEnd = () => {
    if (currentSlide >= carouselSlides.length) {
      setIsTransitioning(false);
      setCurrentSlide(0);
    }
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + 1);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    if (currentSlide === 0) {
      setIsTransitioning(false);
      setCurrentSlide(carouselSlides.length);
      setTimeout(() => {
        setIsTransitioning(true);
        setCurrentSlide(carouselSlides.length - 1);
      }, 20);
    } else {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please enter your name and phone number.');
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <section className="relative w-full min-h-[calc(100vh-105px)] flex items-center justify-center overflow-hidden py-10 lg:py-14 select-none">
      {/* Targeted Homepage Ambient Dimmer: Only on Homepage to make Carousel and Form pop with maximum brightness and contrast */}
      <div className="absolute inset-0 bg-slate-950/40 backdrop-brightness-[0.88] pointer-events-none z-0" />

      {/* Main Content Grid: Left Carousel + Right Request Information Form */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ================= LEFT SIDE: FULL BRIGHTNESS SEAMLESS CAROUSEL ================= */}
          <div
            className="lg:col-span-7 flex flex-col justify-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Carousel Container Card with High-Contrast Vivid Border & Glow */}
            <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_35px_rgba(160,200,40,0.2)] border-2 border-white/35 bg-slate-950/90 backdrop-blur-xl group">
              {/* Image Slide Rail - Ultra-Smooth Continuous Forward Motion */}
              <div className="relative w-full h-[340px] sm:h-[420px] overflow-hidden">
                <div
                  className={`flex w-full h-full ${
                    isTransitioning
                      ? 'transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]'
                      : 'transition-none'
                  }`}
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  onTransitionEnd={handleTransitionEnd}
                >
                  {extendedSlides.map((slide, index) => (
                    <div
                      key={`${slide.id}-${index}`}
                      className="w-full h-full shrink-0 relative overflow-hidden"
                    >
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover brightness-110 contrast-105"
                      />
                      {/* Dark gradient for text visibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent" />

                      {/* Slide Caption Box */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white z-20">
                        <div className="flex items-center gap-2 mb-2.5">
                          <span className="bg-[#a0c828] text-slate-950 text-[10px] sm:text-xs font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-md shadow-[#a0c828]/40">
                            {slide.tag}
                          </span>
                          <span className="text-[11px] font-bold text-emerald-300 bg-white/15 px-2.5 py-0.5 rounded-full backdrop-blur-xs border border-white/20">
                            ✓ {slide.stat}
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-3xl font-black tracking-tight text-white leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                          {slide.title}
                        </h3>

                        <p className="mt-2 text-xs sm:text-sm text-slate-100 line-clamp-2 leading-relaxed drop-shadow-[0_1px_5px_rgba(0,0,0,0.8)] font-medium">
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
                onClick={handlePrev}
                aria-label="Previous Slide"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-950/75 hover:bg-[#a0c828] text-white hover:text-slate-950 border border-white/30 flex items-center justify-center transition-all duration-200 opacity-80 group-hover:opacity-100 hover:scale-110 shadow-lg cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Slide"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-950/75 hover:bg-[#a0c828] text-white hover:text-slate-950 border border-white/30 flex items-center justify-center transition-all duration-200 opacity-80 group-hover:opacity-100 hover:scale-110 shadow-lg cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* 3-Second Active Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20 overflow-hidden">
                <div
                  key={currentSlide}
                  className="h-full bg-[#a0c828] transition-all duration-[3000ms] ease-linear shadow-[0_0_8px_#a0c828]"
                  style={{ width: isPaused ? '100%' : '100%' }}
                />
              </div>
            </div>

            {/* Quick Trust Bar under Carousel */}
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

          {/* ================= RIGHT SIDE: FULL BRIGHTNESS REQUEST INFORMATION FORM ================= */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-slate-950/90 sm:bg-slate-900/95 backdrop-blur-2xl border-2 border-white/30 p-6 sm:p-8 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(160,200,40,0.22)] relative">
              
              {/* Form Title (Matching User Screenshot: Request Information) with High Brightness */}
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
                    className="mt-3 text-xs text-[#a0c828] hover:underline font-semibold"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Field 1: Enter Name (Full Width) */}
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter Name"
                      required
                      className="w-full bg-white text-slate-950 placeholder:text-slate-500 px-4 py-3 rounded-lg text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#a0c828] shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-all"
                    />
                  </div>

                  {/* Field 2 & 3: Email and Phone (Side by Side 2-Columns) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
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
                        onChange={handleChange}
                        placeholder="Phone"
                        required
                        className="w-full bg-white text-slate-950 placeholder:text-slate-500 px-4 py-3 rounded-lg text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#a0c828] shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-all"
                      />
                    </div>
                  </div>

                  {/* Field 4: Choose City (Dropdown with Cities) */}
                  <div className="relative">
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
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
                    {/* Custom Down Arrow Icon */}
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-600">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Field 5: Enter Message (Textarea) */}
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter Message"
                      rows={3}
                      className="w-full bg-white text-slate-950 placeholder:text-slate-500 px-4 py-3 rounded-lg text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#a0c828] shadow-[0_2px_8px_rgba(0,0,0,0.15)] resize-none transition-all"
                    />
                  </div>

                  {/* Field 6: Submit Request Button (Matching lime-green from screenshot with glowing shadow) */}
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

              {/* Bottom Quick Call info */}
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
  );
}
