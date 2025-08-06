import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CorePillarsSection = () => {
  const pillars = [
    {
      id: 'resume-intelligence',
      title: 'Resume Intelligence',
      description: 'AI-powered analysis reveals hidden strengths, identifies gaps, and provides actionable improvement recommendations.',
      icon: 'FileText',
      color: 'primary',
      link: '/resume-intelligence-dashboard',
      features: [
        'ATS Optimization Score',
        'Skill Gap Analysis',
        'Industry Benchmarking',
        'Keyword Enhancement'
      ],
      preview: {
        score: 92,
        improvements: 5,
        keywords: 23
      }
    },
    {
      id: 'career-paths',
      title: 'Career Path Discovery',
      description: 'Explore recession-proof opportunities with interactive maps showing salary potential and growth trajectories.',
      icon: 'Map',
      color: 'secondary',
      link: '/career-path-explorer',
      features: [
        'Recession-Proof Roles',
        'Salary Projections',
        'Skill Transferability',
        'Growth Opportunities'
      ],
      preview: {
        paths: 12,
        avgSalary: '$85K',
        growth: '+15%'
      }
    },
    {
      id: 'adaptive-learning',
      title: 'Adaptive Learning',
      description: 'Personalized 30-day roadmaps with curated courses, progress tracking, and achievement gamification.',
      icon: 'BookOpen',
      color: 'accent',
      link: '/adaptive-learning-center',
      features: [
        'Custom Roadmaps',
        'Progress Tracking',
        'Skill Certifications',
        'Learning Analytics'
      ],
      preview: {
        courses: 47,
        completion: 78,
        certificates: 3
      }
    },
    {
      id: 'market-intelligence',
      title: 'Market Intelligence',
      description: 'Real-time insights on trending skills, salary benchmarks, and industry demand forecasting.',
      icon: 'TrendingUp',
      color: 'success',
      link: '/skills-assessment-arena',
      features: [
        'Trending Skills',
        'Salary Insights',
        'Demand Forecasting',
        'Industry Reports'
      ],
      preview: {
        trends: 8,
        demand: 'High',
        growth: '+22%'
      }
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      primary: {
        bg: 'bg-primary',
        text: 'text-primary',
        border: 'border-primary',
        hover: 'hover:bg-primary/5'
      },
      secondary: {
        bg: 'bg-secondary',
        text: 'text-secondary',
        border: 'border-secondary',
        hover: 'hover:bg-secondary/5'
      },
      accent: {
        bg: 'bg-accent',
        text: 'text-accent',
        border: 'border-accent',
        hover: 'hover:bg-accent/5'
      },
      success: {
        bg: 'bg-success',
        text: 'text-success',
        border: 'border-success',
        hover: 'hover:bg-success/5'
      }
    };
    return colorMap?.[color] || colorMap?.primary;
  };

  return (
    <section className="py-20 bg-white">
      <div className="container-brand">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Zap" size={16} />
            <span>Four Core Pillars</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Your Complete Career Intelligence Ecosystem
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Transform uncertainty into opportunity with our integrated platform designed 
            to build career resilience in any economic climate.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {pillars?.map((pillar, index) => {
            const colors = getColorClasses(pillar?.color);
            
            return (
              <div
                key={pillar?.id}
                className={`group bg-white rounded-2xl shadow-brand border border-border p-8 transition-all duration-300 hover:shadow-xl ${colors?.hover} animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-12 h-12 ${colors?.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon name={pillar?.icon} size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-2">{pillar?.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{pillar?.description}</p>
                  </div>
                </div>
                {/* Preview Dashboard */}
                <div className="bg-muted rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-text-secondary">Live Preview</span>
                    <div className={`w-2 h-2 ${colors?.bg} rounded-full animate-pulse-brand`}></div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(pillar?.preview)?.map(([key, value]) => (
                      <div key={key} className="text-center">
                        <p className={`text-lg font-bold ${colors?.text}`}>{value}</p>
                        <p className="text-xs text-text-secondary capitalize">{key?.replace(/([A-Z])/g, ' $1')}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Features List */}
                <div className="mb-6">
                  <div className="grid grid-cols-2 gap-2">
                    {pillar?.features?.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <Icon name="Check" size={14} className={colors?.text} />
                        <span className="text-sm text-text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* CTA */}
                <Link to={pillar?.link}>
                  <Button
                    variant="outline"
                    fullWidth
                    iconName="ArrowRight"
                    iconPosition="right"
                    className={`${colors?.border} ${colors?.text} hover:${colors?.bg} hover:text-white group-hover:shadow-md transition-all duration-300`}
                  >
                    Explore {pillar?.title}
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Ready to Transform Your Career?
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Join thousands of professionals who have already strengthened their career resilience 
              with our AI-powered platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/resume-intelligence-dashboard">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Upload"
                  iconPosition="left"
                  className="btn-brand-accent hover-scale"
                >
                  Start Free Analysis
                </Button>
              </Link>
              <Link to="/about-career-resilience-mission">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Info"
                  iconPosition="left"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorePillarsSection;