import React from 'react';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyChoose } from './components/WhyChoose';
import { Services } from './components/Services';
import { GalleryCarousel } from './components/GalleryCarousel';
import { ServiceQuality } from './components/ServiceQuality';
import { Testimonials, ClientLogos } from './components/SocialProof';
import { CTASection } from './components/CTASection';
import { Footer, FloatingMobileCTA } from './components/Footer';
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  // Initialize scroll reveal animations
  useIntersectionObserver();

  return (
    <div className="relative flex flex-col min-h-screen bg-brand-bg font-sans selection:bg-brand-primary selection:text-white">
      {/* Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Intro Section */}
        <Hero />
        
        {/* Core Differentiation */}
        <WhyChoose />
        
        {/* Technical Services */}
        <Services />
        
        {/* Real World Projects */}
        <GalleryCarousel />
        
        {/* Commitment to Quality */}
        <ServiceQuality />
        
        {/* Trust Factors */}
        <Testimonials />
        <ClientLogos />
        
        {/* Direct Contact */}
        <CTASection />
      </main>

      {/* Persistence and Mobility */}
      <Footer />
      <FloatingMobileCTA />
      <Analytics />
    </div>
  );
}
