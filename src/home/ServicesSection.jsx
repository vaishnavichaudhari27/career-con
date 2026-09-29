import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { servicesSectionData } from './ServicesSectionData';

export default function ServicesSection() {
  const [activeFlippedCard, setActiveFlippedCard] = useState(null);

  const toggleMobileFlip = (id) => {
    setActiveFlippedCard((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative w-full py-14 lg:py-20 bg-slate-950/90 text-white select-none overflow-hidden">
      {/* Subtle Background Glow & Grid Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase">
            <span className="text-white drop-shadow-sm">{servicesSectionData.headingPart1} </span>
            <span className="text-[#a0c828] drop-shadow-[0_0_15px_rgba(160,200,40,0.5)]">
              {servicesSectionData.headingPart2}
            </span>
          </h2>

          {/* Elegant Underline Divider with Center Diamond (matching user screenshot 3) */}
          <div className="flex items-center justify-center gap-1.5 mt-3 mb-4">
            <div className="w-12 h-1 bg-[#a0c828] rounded-full" />
            <div className="w-3 h-3 rotate-45 border-2 border-[#a0c828] bg-slate-900" />
            <div className="w-12 h-1 bg-[#a0c828] rounded-full" />
          </div>

          <p className="text-xs sm:text-sm text-slate-300 font-medium">
            {servicesSectionData.subheading}
          </p>
        </div>

        {/* ================= 3-COLUMN 3D FLIP CARDS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {servicesSectionData.cards.map((card) => {
            const isFlipped = activeFlippedCard === card.id;

            return (
              <div
                key={card.id}
                className="perspective-1000 group w-full h-[470px] sm:h-[490px] cursor-pointer"
                onClick={() => toggleMobileFlip(card.id)}
              >
                {/* 3D Flipper Box */}
                <div
                  className={`relative w-full h-full transform-style-3d transition-transform duration-700 ease-[cubic-bezier(0.4,0.2,0.2,1)] ${
                    isFlipped ? 'rotate-y-180' : 'group-hover:rotate-y-180'
                  }`}
                >
                  
                  {/* ================= FRONT SIDE (MATCHING USER SCREENSHOT 3) ================= */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-slate-900 flex flex-col">
                    {/* Top 55%: Image with subtle blur & modern overlay */}
                    <div className="relative w-full h-[54%] overflow-hidden bg-slate-950">
                      <img
                        src={card.frontImage}
                        alt={card.title}
                        className="w-full h-full object-cover brightness-105 contrast-105 group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20" />
                      
                      {/* Interactive Flip Hint Badge */}
                      <div className="absolute top-3 right-3 bg-slate-950/70 backdrop-blur-md text-[10px] font-semibold text-white/90 px-2.5 py-1 rounded-full border border-white/20 flex items-center gap-1.5 shadow-sm">
                        <span>Hover to 3D Flip</span>
                        <svg className="w-3 h-3 text-[#a0c828] animate-spin" style={{ animationDuration: '6s' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </div>
                    </div>

                    {/* Bottom 46%: Vibrant Brand Lime Green Section (Matching user screenshot 3) */}
                    <div className="relative w-full h-[46%] bg-[#a0c828] p-5 sm:p-6 flex flex-col justify-between text-white border-t border-white/30">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight drop-shadow-sm">
                          {card.title}
                        </h3>
                        <p className="mt-2 text-xs sm:text-[13px] text-white/95 leading-relaxed font-normal line-clamp-3">
                          {card.frontDescription}
                        </p>
                      </div>

                      {/* Bottom Dashed Accent Line (Seen in user screenshot 3) */}
                      <div className="w-full pt-2 flex items-center justify-between border-t border-dashed border-white/40 text-[11px] font-bold text-slate-900/80">
                        <span>Tap / Hover to View Full Specs</span>
                        <span className="text-base leading-none">↻</span>
                      </div>
                    </div>
                  </div>

                  {/* ================= BACK SIDE (RICH CONTRAST DYNAMIC ACCENT & FULL CONTENT) ================= */}
                  <div
                    className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/30 p-6 sm:p-7 flex flex-col justify-between bg-gradient-to-br ${card.backAccentGradient}`}
                  >
                    {/* Top: Service Title & Category Badge */}
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

                      {/* Body Description */}
                      <p className="text-xs sm:text-[13px] text-slate-200 leading-relaxed font-normal">
                        {card.backDescription}
                      </p>

                      {/* Highlights with checkmarks */}
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

                    {/* Bottom: Sleek "Read More" Button */}
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
  );
}
