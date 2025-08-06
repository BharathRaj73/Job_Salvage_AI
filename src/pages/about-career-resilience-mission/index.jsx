import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import VisionSection from './components/VisionSection';
import FoundingStorySection from './components/FoundingStorySection';
import ApproachSection from './components/ApproachSection';
import TeamSection from './components/TeamSection';
import TrustSection from './components/TrustSection';
import ImpactSection from './components/ImpactSection';
import CommitmentSection from './components/CommitmentSection';

const AboutCareerResilienceMission = () => {
  useEffect(() => {
    // Set page title
    document.title = 'About - Career Resilience Mission | Job Salvage AI';
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription?.setAttribute('content', 'Learn about Job Salvage AI\'s mission to transform career uncertainty into strategic opportunity through AI-powered career intelligence and personalized guidance.');
    }

    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Vision Section */}
        <VisionSection />
        
        {/* Founding Story Section */}
        <FoundingStorySection />
        
        {/* Approach Section */}
        <ApproachSection />
        
        {/* Team Section */}
        <TeamSection />
        
        {/* Trust & Transparency Section */}
        <TrustSection />
        
        {/* Impact Section */}
        <ImpactSection />
        
        {/* Commitment Section */}
        <CommitmentSection />
      </main>
      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container-brand">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M12 2L2 7L12 12L22 7L12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 17L12 22L22 17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12L12 17L22 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold">Job Salvage AI</h3>
                  <p className="text-sm text-white/80">Career Intelligence Platform</p>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed mb-4">
                Transforming career uncertainty into strategic opportunity through AI-powered intelligence and personalized guidance.
              </p>
              <p className="text-sm text-white/60">
                © {new Date()?.getFullYear()} Job Salvage AI. All rights reserved.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/resume-intelligence-dashboard" className="text-white/80 hover:text-white transition-colors">Resume Analysis</a></li>
                <li><a href="/career-path-explorer" className="text-white/80 hover:text-white transition-colors">Career Paths</a></li>
                <li><a href="/adaptive-learning-center" className="text-white/80 hover:text-white transition-colors">Learning Center</a></li>
                <li><a href="/skills-assessment-arena" className="text-white/80 hover:text-white transition-colors">Skills Assessment</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Support Center</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutCareerResilienceMission;