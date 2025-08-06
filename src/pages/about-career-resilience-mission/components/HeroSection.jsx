import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-brand text-white py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-20 h-20 border border-white/20 rounded-full"></div>
      </div>

      <div className="container-brand relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Mission Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Icon name="Target" size={20} className="text-accent" />
            <span className="text-sm font-medium">Our Mission</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
            Transforming Career 
            <span className="text-accent block mt-2">Uncertainty into Opportunity</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            We believe that professional disruption isn't a crisis—it's a catalyst for strategic reinvention and unprecedented growth.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">50,000+</div>
              <div className="text-white/80">Professionals Empowered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">89%</div>
              <div className="text-white/80">Career Transition Success</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">4.8/5</div>
              <div className="text-white/80">User Satisfaction Score</div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              variant="secondary"
              size="lg"
              iconName="Zap"
              iconPosition="left"
              className="bg-white text-primary hover:bg-white/90 shadow-xl"
            >
              Start Your Journey
            </Button>
            <Button
              variant="ghost"
              size="lg"
              iconName="Play"
              iconPosition="left"
              className="text-white border-white/30 hover:bg-white/10"
            >
              Watch Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;