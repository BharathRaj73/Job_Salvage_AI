import React from 'react';
import Icon from '../../../components/AppIcon';


const FoundingStorySection = () => {
  const timelineEvents = [
    {
      year: "2022",
      title: "The Realization",
      description: "During the tech industry layoffs, we witnessed thousands of talented professionals struggling with outdated career advice that failed during economic turbulence.",
      icon: "AlertTriangle"
    },
    {
      year: "2023",
      title: "The Research Phase",
      description: "Our team of AI researchers and career counselors spent months analyzing successful career transitions during recessions, identifying patterns and strategies.",
      icon: "Search"
    },
    {
      year: "2023",
      title: "Platform Development",
      description: "We built the first AI-powered career resilience platform, combining machine learning with human expertise to provide personalized guidance.",
      icon: "Code"
    },
    {
      year: "2024",
      title: "Community Launch",
      description: "Job Salvage AI launched with 1,000 beta users, achieving an 89% success rate in career transitions within the first six months.",
      icon: "Rocket"
    },
    {
      year: "2025",
      title: "Global Impact",
      description: "Today, we've empowered over 50,000 professionals worldwide, with our AI continuously learning and adapting to market changes.",
      icon: "Globe"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="container-brand">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-6 py-3 mb-6">
            <Icon name="BookOpen" size={20} className="text-accent" />
            <span className="text-sm font-medium text-accent">Our Story</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Born from Crisis,
            <span className="text-accent block mt-2">Built for Resilience</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Job Salvage AI emerged from a simple yet powerful observation: traditional career advice crumbles during economic uncertainty, leaving professionals vulnerable when they need guidance most.
          </p>
        </div>

        {/* Problem Statement */}
        <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-8 mb-16">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
              <Icon name="AlertCircle" size={24} className="text-destructive" />
            </div>
            <div>
              <h3 className="text-xl font-heading font-semibold text-primary mb-4">
                The Problem We Recognized
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-text-secondary">
                <div>
                  <h4 className="font-medium text-primary mb-2">Market Volatility</h4>
                  <p className="text-sm leading-relaxed">
                    Job markets shift rapidly during economic downturns, making traditional career planning obsolete overnight.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-2">Generic Advice</h4>
                  <p className="text-sm leading-relaxed">
                    One-size-fits-all career guidance fails to address individual circumstances and market realities.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-2">Reactive Approach</h4>
                  <p className="text-sm leading-relaxed">
                    Most career services only activate after job loss, missing opportunities for proactive positioning.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-2">Information Overload</h4>
                  <p className="text-sm leading-relaxed">
                    Professionals struggle to filter relevant opportunities from overwhelming amounts of career information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-secondary/20 hidden md:block"></div>
          
          <div className="space-y-12">
            {timelineEvents?.map((event, index) => (
              <div key={index} className="relative flex items-start space-x-8">
                {/* Timeline Dot */}
                <div className="hidden md:flex flex-shrink-0 w-16 h-16 bg-secondary rounded-full items-center justify-center shadow-brand relative z-10">
                  <Icon name={event.icon} size={24} className="text-white" />
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-background rounded-xl p-8 shadow-md hover:shadow-brand transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="md:hidden w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                      <Icon name={event.icon} size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-secondary mb-1">{event.year}</div>
                      <h3 className="text-xl font-heading font-semibold text-primary">
                        {event.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Founding Vision */}
        <div className="mt-20 bg-gradient-brand rounded-2xl p-8 lg:p-12 text-white text-center">
          <Icon name="Compass" size={48} className="text-accent mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-6">
            Our Founding Vision
          </h3>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            "What if career disruption could become career acceleration? What if uncertainty could be transformed into strategic advantage? We built Job Salvage AI to answer these questions with intelligent, personalized, and actionable solutions."
          </p>
          <div className="mt-8 text-white/80">
            <p className="font-medium">— The Job Salvage AI Founding Team</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundingStorySection;