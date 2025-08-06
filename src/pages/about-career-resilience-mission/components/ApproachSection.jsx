import React from 'react';
import Icon from '../../../components/AppIcon';

const ApproachSection = () => {
  const approaches = [
    {
      icon: "Brain",
      title: "AI-Powered Intelligence",
      subtitle: "Smart Analysis, Human Insight",
      description: "Our advanced AI analyzes market trends, skill demands, and career patterns while human experts ensure recommendations remain ethical, practical, and personally relevant.",
      features: [
        "Real-time market analysis",
        "Personalized skill gap identification",
        "Recession-proof opportunity detection",
        "Human oversight and validation"
      ]
    },
    {
      icon: "Target",
      title: "Recession-Proof Focus",
      subtitle: "Stability in Uncertainty",
      description: "We prioritize career paths and skills that remain valuable during economic downturns, helping professionals build resilience against market volatility.",
      features: [
        "Essential industry identification",
        "Transferable skill mapping",
        "Economic stability scoring",
        "Future-proof career planning"
      ]
    },
    {
      icon: "Map",
      title: "Actionable Roadmaps",
      subtitle: "Clear Steps, Measurable Progress",
      description: "Instead of generic advice, we provide specific, time-bound action plans with measurable milestones and progress tracking to ensure real career advancement.",
      features: [
        "30-day sprint planning",
        "Milestone tracking",
        "Progress visualization",
        "Adaptive goal adjustment"
      ]
    },
    {
      icon: "Heart",
      title: "Empathetic Guidance",
      subtitle: "Technology with Humanity",
      description: "We understand that career transitions are deeply personal journeys. Our platform combines data-driven insights with emotional support and community connection.",
      features: [
        "Personalized communication",
        "Peer support networks",
        "Mental health awareness",
        "Celebration of achievements"
      ]
    }
  ];

  const methodology = [
    {
      step: "01",
      title: "Comprehensive Assessment",
      description: "AI-powered analysis of your resume, skills, experience, and career goals to create a complete professional profile."
    },
    {
      step: "02",
      title: "Market Intelligence",
      description: "Real-time analysis of job market trends, industry stability, and emerging opportunities in your field and adjacent areas."
    },
    {
      step: "03",
      title: "Gap Analysis",
      description: "Identification of skill gaps, experience requirements, and strategic positioning needs for your target career path."
    },
    {
      step: "04",
      title: "Personalized Roadmap",
      description: "Custom 30-day action plan with specific learning goals, networking strategies, and application targets."
    },
    {
      step: "05",
      title: "Progress Tracking",
      description: "Continuous monitoring of your advancement with adaptive adjustments based on market changes and personal progress."
    },
    {
      step: "06",
      title: "Community Support",
      description: "Connection with peers, mentors, and success stories to maintain motivation and share knowledge throughout your journey."
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container-brand">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3 mb-6">
            <Icon name="Zap" size={20} className="text-primary" />
            <span className="text-sm font-medium text-primary">Our Approach</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Unique Methodology for
            <span className="text-secondary block mt-2">Career Transformation</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            We've developed a comprehensive approach that combines cutting-edge AI technology with human empathy, focusing on practical outcomes rather than theoretical advice.
          </p>
        </div>

        {/* Core Approaches */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {approaches?.map((approach, index) => (
            <div key={index} className="bg-card rounded-xl p-8 shadow-brand hover:shadow-accent transition-all duration-300 hover-lift">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-brand rounded-xl flex items-center justify-center">
                  <Icon name={approach?.icon} size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-primary mb-1">
                    {approach?.title}
                  </h3>
                  <p className="text-secondary font-medium text-sm">
                    {approach?.subtitle}
                  </p>
                </div>
              </div>
              
              <p className="text-text-secondary leading-relaxed mb-6">
                {approach?.description}
              </p>
              
              <div className="space-y-2">
                {approach?.features?.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <Icon name="Check" size={16} className="text-success flex-shrink-0" />
                    <span className="text-sm text-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Methodology Process */}
        <div className="bg-muted rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              Our 6-Step Methodology
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              A proven process that transforms career uncertainty into strategic opportunity through systematic analysis and personalized guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {methodology?.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-brand transition-all duration-300 h-full">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                      {step?.step}
                    </div>
                    <h4 className="font-heading font-semibold text-primary">
                      {step?.title}
                    </h4>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {step?.description}
                  </p>
                </div>
                
                {/* Connection Line */}
                {index < methodology?.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-secondary/30 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Differentiators */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8">
            What Makes Us Different
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 shadow-md">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="TrendingUp" size={32} className="text-success" />
              </div>
              <h4 className="font-heading font-semibold text-primary mb-3">
                Proactive, Not Reactive
              </h4>
              <p className="text-sm text-text-secondary">
                We help you prepare for market changes before they happen, not after you've been affected.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-md">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-secondary" />
              </div>
              <h4 className="font-heading font-semibold text-primary mb-3">
                Community-Driven
              </h4>
              <p className="text-sm text-text-secondary">
                Learn from peers who've successfully navigated similar transitions and share your own insights.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-md">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={32} className="text-accent" />
              </div>
              <h4 className="font-heading font-semibold text-primary mb-3">
                Actionable Intelligence
              </h4>
              <p className="text-sm text-text-secondary">
                Every insight comes with specific next steps and measurable outcomes, not vague suggestions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;