import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { aboutSectionData } from './AboutSectionData';

export default function AboutSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const images = aboutSectionData.carouselImages;

  // Auto carousel loop every 3 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isPaused, images.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative w-full py-12 lg:py-16 bg-white/95 text-slate-800 border-b border-slate-200/80 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Standard 3-Column Equal Split Template with Identical Height and Width Constraints */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {/* ================= LEFT COLUMN: SMOOTH IMAGE CAROUSEL (6-7 IMAGES) ================= */}
          <div
            className="relative w-full h-[360px] sm:h-[400px] lg:h-[420px] rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Carousel Slides */}
            <div className="relative w-full h-full">
              {images.map((img, idx) => (
                <div
                  key={img.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="w-full h-full object-cover brightness-100 contrast-105"
                  />
                  {/* Subtle Gradient Overlay for Text & Controls */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20" />
                  
                  {/* Bottom Caption */}
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <span className="inline-block bg-black/60 backdrop-blur-xs text-[#a0c828] text-xs font-bold px-2.5 py-1 rounded-md border border-white/10 shadow-sm">
                      {img.caption}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Navigation Arrow Controls */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous Slide"
              className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-[#a0c828] text-white hover:text-slate-950 flex items-center justify-center transition-all opacity-70 group-hover:opacity-100 cursor-pointer shadow-md"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next Slide"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-[#a0c828] text-white hover:text-slate-950 flex items-center justify-center transition-all opacity-70 group-hover:opacity-100 cursor-pointer shadow-md"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Bottom Dots Indicator (like in user screenshot) */}
            <div className="absolute bottom-2.5 right-3.5 z-20 flex items-center gap-1.5">
              {images.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => setCurrentSlide(dotIdx)}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    dotIdx === currentSlide
                      ? 'w-5 h-2 bg-[#a0c828]'
                      : 'w-2 h-2 bg-white/60 hover:bg-white'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* ================= CENTER COLUMN: TEXT CONTENT & READ MORE CTA ================= */}
          <div className="relative w-full h-[360px] sm:h-[400px] lg:h-[420px] rounded-2xl bg-white p-6 sm:p-8 flex flex-col justify-between items-center text-center shadow-lg border border-slate-200">
            {/* Top Heading + Decorative Underline */}
            <div className="flex flex-col items-center">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
                <span className="text-slate-900">{aboutSectionData.headingPart1} </span>
                <span className="text-[#a0c828] drop-shadow-xs">{aboutSectionData.headingPart2}</span>
              </h2>

              {/* Decorative underline with diamond accent (matching user screenshot 2) */}
              <div className="flex items-center justify-center gap-1 mt-3">
                <div className="w-10 h-0.5 bg-[#a0c828]" />
                <div className="w-2.5 h-2.5 rotate-45 border-2 border-[#a0c828] bg-white" />
                <div className="w-10 h-0.5 bg-[#a0c828]" />
              </div>
            </div>

            {/* Body Text */}
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal px-1 sm:px-2 my-auto">
              {aboutSectionData.summaryText}
            </p>

            {/* Colorful CTA Button */}
            <div className="pt-2">
              <Link
                to={aboutSectionData.readMoreBtn.link}
                className="inline-flex items-center justify-center px-7 py-2.5 rounded-lg bg-[#a0c828] hover:bg-[#8eb322] active:scale-95 text-white font-bold text-sm shadow-md shadow-[#a0c828]/40 hover:shadow-lg hover:shadow-[#a0c828]/50 transition-all duration-200 cursor-pointer tracking-wide"
              >
                {aboutSectionData.readMoreBtn.text}
              </Link>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: STATIC FEATURE IMAGE ================= */}
          <div className="relative w-full h-[360px] sm:h-[400px] lg:h-[420px] rounded-2xl overflow-hidden shadow-lg border border-slate-200 group bg-slate-900">
            <img
              src={aboutSectionData.staticFeature.imageUrl}
              alt={aboutSectionData.staticFeature.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
            />
            {/* Gradient Overlay for Text Legibility (Matching user screenshot 2 "Admission for Spring 40% Off") */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-slate-950/30" />

            {/* Feature Text Overlay on Image */}
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
  );
}
