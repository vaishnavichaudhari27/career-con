import React from 'react';
import { Link } from 'react-router-dom';
import { navItems, whatsappContact } from '../navbar/NavbarData';

export function WhyUsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-slate-950/80 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 sm:p-12 shadow-2xl text-white">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#a0c828]/20 text-[#a0c828] uppercase tracking-wider mb-4 border border-[#a0c828]/30">
          The Career Advisory Gold Standard
        </span>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-6">
          Why Choose <span className="text-[#a0c828]">Career Consultancy</span>
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl mb-8">
          We understand that career transitions, overseas visas, and background checks require 100% precision and legal legitimacy. Over 14,800+ professionals have trusted our authenticated documentation and HR support.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-[#a0c828] flex items-center justify-center font-bold text-xl mb-4">
              01
            </div>
            <h3 className="font-bold text-lg text-white mb-2">Telephonic & Email Verification</h3>
            <p className="text-sm text-slate-400">Official HR domain email verification and dedicated BGC telephone response teams.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-[#a0c828] flex items-center justify-center font-bold text-xl mb-4">
              02
            </div>
            <h3 className="font-bold text-lg text-white mb-2">Pan-India Courier Dispatch</h3>
            <p className="text-sm text-slate-400">Physical hard copies with security holograms and authorized seals delivered via Blue Dart.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-[#a0c828] flex items-center justify-center font-bold text-xl mb-4">
              03
            </div>
            <h3 className="font-bold text-lg text-white mb-2">100% Confidential</h3>
            <p className="text-sm text-slate-400">Strict Non-Disclosure Agreement (NDA) protocols to safeguard your personal data.</p>
          </div>
        </div>

        <div className="mt-10 flex gap-4">
          <a
            href={whatsappContact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#a0c828] hover:bg-[#8cb820] text-slate-950 font-bold px-6 py-3 rounded-xl transition-all shadow-lg"
          >
            Speak to Verification Head
          </a>
          <Link
            to="/"
            className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl border border-white/20 transition-all"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export function ServicesPage() {
  const servicesItem = navItems.find((n) => n.id === 'our-services');
  const services = servicesItem ? servicesItem.dropdownItems : [];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-slate-950/80 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 sm:p-12 shadow-2xl text-white">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#a0c828]/20 text-[#a0c828] uppercase tracking-wider mb-4 border border-[#a0c828]/30">
          Core Offerings
        </span>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-6">
          Our Authorized <span className="text-[#a0c828]">Services</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {services.map((srv) => (
            <div key={srv.id} className="p-6 rounded-2xl bg-white/5 border border-white/15 flex flex-col justify-between">
              <div>
                <span className="inline-block bg-[#a0c828] text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full uppercase mb-4">
                  {srv.badge}
                </span>
                <h3 className="font-bold text-xl text-white mb-2">{srv.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">{srv.desc}</p>
                <div className="space-y-1.5 mb-6">
                  {srv.highlights.map((h, i) => (
                    <div key={i} className="text-xs text-emerald-300 flex items-center gap-1.5 font-medium">
                      <span>✓</span> {h}
                    </div>
                  ))}
                </div>
              </div>
              <a
                href={whatsappContact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-[#a0c828] hover:bg-[#8cb820] text-slate-950 font-bold py-2.5 rounded-xl transition-all text-xs"
              >
                Inquire on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function LocationsPage() {
  const locItem = navItems.find((n) => n.id === 'location');
  const cities = locItem ? locItem.dropdownItems : [];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-slate-950/80 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 sm:p-12 shadow-2xl text-white">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#a0c828]/20 text-[#a0c828] uppercase tracking-wider mb-4 border border-[#a0c828]/30">
          Pan-India Coverage
        </span>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
          Top 30 <span className="text-[#a0c828]">Service Locations</span>
        </h1>
        <p className="text-slate-300 text-base mb-8">
          Direct verification and hard-copy courier support across 30 major tech & industrial corridors in India.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-h-[460px] overflow-y-auto pr-2">
          {cities.map((c) => (
            <div key={c.path} className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#a0c828] transition-all">
              <div className="font-bold text-sm text-white">{c.title}</div>
              <div className="text-xs text-slate-400">{c.state}</div>
              <div className="text-[10px] text-emerald-400 mt-1 truncate">📍 {c.hub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-slate-950/80 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 sm:p-12 shadow-2xl text-white">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#a0c828]/20 text-[#a0c828] uppercase tracking-wider mb-4 border border-[#a0c828]/30">
          Knowledge Base
        </span>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-6">
          Career Insights & <span className="text-[#a0c828]">Verification Guides</span>
        </h1>
        <p className="text-slate-300 text-base max-w-2xl mb-8">
          Read expert advice on background verification (BGC), HR compliance standards, international visa document checklists, and resume optimization.
        </p>
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <span className="text-xs text-emerald-400 font-bold">Featured Guide</span>
          <h3 className="text-xl font-bold mt-1 text-white">How Background Verification (BGC) Works in MNCs in 2026</h3>
          <p className="text-sm text-slate-300 mt-2">A comprehensive breakdown of third-party verification agencies (First Advantage, HireRight, AuthBridge) and what documents they cross-verify.</p>
        </div>
      </div>
    </div>
  );
}

export function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-slate-950/80 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 sm:p-12 shadow-2xl text-white">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#a0c828]/20 text-[#a0c828] uppercase tracking-wider mb-4 border border-[#a0c828]/30">
          Get in Touch
        </span>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
          Contact <span className="text-[#a0c828]">Career Consultancy</span>
        </h1>
        <p className="text-slate-300 text-base mb-8">
          Our priority verification and advisory team is available Monday through Saturday.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="font-bold text-lg mb-2 text-white">Direct Phone / WhatsApp</h3>
            <p className="text-2xl font-black text-[#a0c828] mb-2">{whatsappContact.number}</p>
            <p className="text-xs text-slate-400">Available 24/7 for urgent verification requests.</p>
            <a
              href={whatsappContact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-[#a0c828] hover:bg-[#8cb820] text-slate-950 font-bold px-4 py-2 rounded-lg text-xs"
            >
              Open in WhatsApp
            </a>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="font-bold text-lg mb-2 text-white">Working Hours</h3>
            <p className="text-slate-300 text-sm">Mon - Sat: 9:00 AM - 8:00 PM IST</p>
            <p className="text-slate-400 text-xs mt-3">Express courier dispatch available across all 30 Indian cities.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
