import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentMetric, setCurrentMetric] = useState(0);
  const [animatedCounts, setAnimatedCounts] = useState({
    professionals: 0,
    pivots: 0,
    skills: 0
  });

  const metrics = [
    { label: 'Professionals Empowered', value: 47832, key: 'professionals' },
    { label: 'Career Pivots Successful', value: 12456, key: 'pivots' },
    { label: 'Skills Upgraded', value: 89234, key: 'skills' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics?.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animateCount = (key, targetValue) => {
      let current = 0;
      const increment = targetValue / 100;
      const timer = setInterval(() => {
        current += increment;
        if (current >= targetValue) {
          current = targetValue;
          clearInterval(timer);
        }
        setAnimatedCounts(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, 20);
    };

    metrics?.forEach(metric => {
      animateCount(metric?.key, metric?.value);
    });
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-muted to-background overflow-hidden">
      {/* Animated Background Network */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="var(--color-primary)" opacity="0.3">
                <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
              </circle>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network)" />
          <g stroke="var(--color-secondary)" strokeWidth="1" opacity="0.2">
            <line x1="100" y1="100" x2="300" y2="200">
              <animate attributeName="opacity" values="0.2;0.6;0.2" dur="4s" repeatCount="indefinite" />
            </line>
            <line x1="300" y1="200" x2="500" y2="150">
              <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3.5s" repeatCount="indefinite" />
            </line>
            <line x1="500" y1="150" x2="700" y2="300">
              <animate attributeName="opacity" values="0.2;0.6;0.2" dur="4.5s" repeatCount="indefinite" />
            </line>
          </g>
        </svg>
      </div>
      <div className="relative container-brand pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                <Icon name="TrendingUp" size={16} />
                <span>AI-Powered Career Intelligence</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary leading-tight">
                Transform Career{' '}
                <span className="text-gradient-brand">Uncertainty</span>
                <br />
                Into Strategic{' '}
                <span className="text-secondary">Opportunity</span>
              </h1>
              
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl">
                Navigate economic turbulence with AI-powered insights. Get personalized career analysis, 
                discover recession-proof paths, and build resilience through strategic upskilling.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/resume-intelligence-dashboard">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Zap"
                  iconPosition="left"
                  className="btn-brand-accent hover-scale w-full sm:w-auto"
                >
                  Analyze My Career Health
                </Button>
              </Link>
              
              <Link to="/career-path-explorer">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Map"
                  iconPosition="left"
                  className="w-full sm:w-auto"
                >
                  Explore Recession-Proof Paths
                </Button>
              </Link>
            </div>

            {/* Live Metrics */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-brand border border-border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-text-secondary mb-1">Live Impact</p>
                  <p className="text-2xl font-bold text-primary">
                    {animatedCounts?.[metrics?.[currentMetric]?.key]?.toLocaleString()}
                  </p>
                  <p className="text-sm font-medium text-secondary">
                    {metrics?.[currentMetric]?.label}
                  </p>
                </div>
                <div className="w-12 h-12 bg-gradient-brand rounded-full flex items-center justify-center">
                  <Icon name="Users" size={24} className="text-white" />
                </div>
              </div>
              
              <div className="flex space-x-1 mt-4">
                {metrics?.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                      index === currentMetric ? 'bg-secondary' : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative animate-slide-up">
            <div className="relative bg-white rounded-2xl shadow-brand p-8 border border-border">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-primary">Career Health Dashboard</h3>
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse-brand"></div>
                </div>
                
                {/* Mock Dashboard Elements */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                        <Icon name="CheckCircle" size={16} className="text-white" />
                      </div>
                      <span className="text-sm font-medium">Resume Strength</span>
                    </div>
                    <span className="text-sm font-bold text-success">92%</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-warning rounded-full flex items-center justify-center">
                        <Icon name="AlertTriangle" size={16} className="text-white" />
                      </div>
                      <span className="text-sm font-medium">Skill Gaps</span>
                    </div>
                    <span className="text-sm font-bold text-warning">3 Found</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                        <Icon name="TrendingUp" size={16} className="text-white" />
                      </div>
                      <span className="text-sm font-medium">Market Demand</span>
                    </div>
                    <span className="text-sm font-bold text-secondary">High</span>
                  </div>
                </div>
                
                <Button
                  variant="outline"
                  fullWidth
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="mt-4"
                >
                  View Full Analysis
                </Button>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-accent animate-pulse-brand">
              <Icon name="Brain" size={24} className="text-white" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-brand">
              <Icon name="Target" size={16} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;