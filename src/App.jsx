import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import HeroSection from './home/HeroSection';
import FloatingContacts from './components/FloatingContacts';
import { LocationsPage } from './pages/PageViews';
import heroBg from './assets/hero-bg.jpg';

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-slate-950 flex flex-col font-sans overflow-x-hidden">
        {/* 1. Global Background Image - Enhanced Brightness & Crystal Clear Soft Focus */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src={heroBg}
            alt="Career Consultancy Executive Background"
            className="w-full h-full object-cover scale-100 brightness-110 contrast-105 filter blur-[1px]"
          />
          {/* Lighter, Balanced Gradient Overlay for High Clarity & Vibrancy */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/55 via-slate-900/35 to-slate-950/60" />
          {/* Subtle grid mesh texture */}
          <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        </div>

        {/* 2. Top Executive Navbar */}
        <Navbar />

        {/* 3. Page Routes Content */}
        <main className="relative z-10 flex-1">
          <Routes>
            <Route path="/" element={<HeroSection />} />
            {/* Why Us, Our Services, Blog, and Contact Us kept clean with only the background image */}
            <Route path="/why-us" element={null} />
            <Route path="/services/*" element={null} />
            <Route path="/location/*" element={<LocationsPage />} />
            <Route path="/blog" element={null} />
            <Route path="/contact" element={null} />
            <Route path="*" element={<HeroSection />} />
          </Routes>
        </main>

        {/* 4. Left-Side Fixed Floating Action Buttons (Phone & WhatsApp) */}
        <FloatingContacts />
      </div>
    </Router>
  );
}
