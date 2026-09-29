import React from 'react';
import HeroSection from './HeroSection';
import FeaturesBar from './FeaturesBar';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      {/* 1. Existing Hero Section (Untouched: Carousel on left, Form on right) */}
      <HeroSection />

      {/* 2. Horizontal Features Bar (Directly below Hero Section) */}
      <FeaturesBar />

      {/* 3. About Us Section (About Career Consultancy - 3-Column Equal Split) */}
      <AboutSection />

      {/* 4. Our Services Section (3D Flip Cards with Dynamic Accent Colors) */}
      <ServicesSection />
    </div>
  );
}
