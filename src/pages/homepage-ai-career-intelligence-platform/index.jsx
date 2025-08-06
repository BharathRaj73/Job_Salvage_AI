import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import CareerHealthWidget from './components/CareerHealthWidget';
import CorePillarsSection from './components/CorePillarsSection';
import SuccessStoriesSection from './components/SuccessStoriesSection';
import TrustSection from './components/TrustSection';
import Footer from './components/Footer';

const Homepage = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Job Salvage AI - Transform Career Uncertainty Into Strategic Opportunity';
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription?.setAttribute('content', 'AI-powered career intelligence platform that transforms uncertainty into opportunity. Get personalized career analysis, discover recession-proof paths, and build resilience through strategic upskilling.');
    }

    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section with Dynamic Metrics */}
        <HeroSection />
        
        {/* Interactive Career Health Assessment */}
        <CareerHealthWidget />
        
        {/* Four Core Pillars */}
        <CorePillarsSection />
        
        {/* Success Stories with Transformations */}
        <div id="success-stories">
          <SuccessStoriesSection />
        </div>
        
        {/* Trust & Security Section */}
        <TrustSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Homepage;