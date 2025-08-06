import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CommitmentSection = () => {
  const commitments = [
    {
      icon: "RefreshCw",
      title: "Continuous Innovation",
      description: "We constantly evolve our AI algorithms and platform features to stay ahead of market changes and user needs.",
      details: [
        "Monthly algorithm updates",
        "Quarterly feature releases",
        "Real-time market data integration",
        "User feedback-driven improvements"
      ]
    },
    {
      icon: "TrendingUp",
      title: "Market Adaptation",
      description: "Our platform adapts to changing economic conditions, ensuring recommendations remain relevant and effective.",
      details: [
        "Economic indicator monitoring",
        "Industry trend analysis",
        "Emerging skill identification",
        "Recession-proof career mapping"
      ]
    },
    {
      icon: "Users",
      title: "Community Growth",
      description: "We\'re committed to building a supportive ecosystem where professionals help each other succeed.",
      details: [
        "Peer mentorship programs",
        "Success story sharing",
        "Industry networking events",
        "Collaborative learning initiatives"
      ]
    },
    {
      icon: "Shield",
      title: "Ethical Leadership",
      description: "We maintain the highest standards of AI ethics, data privacy, and user empowerment in everything we do.",
      details: [
        "Transparent AI decision-making",
        "Regular ethical audits",
        "User data sovereignty",
        "Bias-free recommendations"
      ]
    }
  ];

  const futureRoadmap = [
    {
      quarter: "Q2 2025",
      title: "Advanced Skills Prediction",
      description: "AI-powered prediction of future skill demands based on industry trends and technological advancement.",
      status: "In Development"
    },
    {
      quarter: "Q3 2025",
      title: "Global Market Expansion",
      description: "Localized career intelligence for European and Asian markets with region-specific insights.",
      status: "Planning"
    },
    {
      quarter: "Q4 2025",
      title: "Enterprise Solutions",
      description: "Workforce planning and employee development tools for organizations to build resilient teams.",
      status: "Research"
    },
    {
      quarter: "Q1 2026",
      title: "AR/VR Career Simulation",
      description: "Immersive career exploration experiences to help users visualize and prepare for new roles.",
      status: "Concept"
    }
  ];

  const partnerships = [
    {
      type: "Educational Institutions",
      count: "50+",
      description: "Universities and colleges integrating our career intelligence into student services",
      icon: "GraduationCap"
    },
    {
      type: "Industry Leaders",
      count: "500+",
      description: "Companies partnering with us for talent pipeline development and hiring",
      icon: "Building"
    },
    {
      type: "Career Counselors",
      count: "1,200+",
      description: "Professional counselors using our platform to enhance their client services",
      icon: "UserCheck"
    },
    {
      type: "Government Agencies",
      count: "25+",
      description: "Workforce development programs leveraging our career resilience insights",
      icon: "Flag"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container-brand">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-6 py-3 mb-6">
            <Icon name="Compass" size={20} className="text-accent" />
            <span className="text-sm font-medium text-accent">Our Commitment</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Committed to Your
            <span className="text-secondary block mt-2">Long-term Success</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Our commitment extends beyond individual career transformations to building a more resilient and adaptable workforce for the future economy.
          </p>
        </div>

        {/* Core Commitments */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {commitments?.map((commitment, index) => (
            <div key={index} className="bg-card rounded-xl p-8 shadow-brand hover:shadow-accent transition-all duration-300 hover-lift">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Icon name={commitment?.icon} size={28} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-primary mb-2">
                    {commitment?.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {commitment?.description}
                  </p>
                </div>
              </div>
              
              <div className="space-y-2">
                {commitment?.details?.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-center space-x-3">
                    <Icon name="ArrowRight" size={14} className="text-secondary flex-shrink-0" />
                    <span className="text-sm text-text-secondary">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Future Roadmap */}
        <div className="bg-muted rounded-2xl p-8 lg:p-12 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              Innovation Roadmap
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Our planned developments to continue leading the career intelligence revolution and adapting to future workforce needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {futureRoadmap?.map((item, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-lg font-bold text-secondary">
                    {item?.quarter}
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item?.status === 'In Development' ? 'bg-success/10 text-success' :
                    item?.status === 'Planning' ? 'bg-accent/10 text-accent' :
                    item?.status === 'Research'? 'bg-secondary/10 text-secondary' : 'bg-trust/10 text-trust'
                  }`}>
                    {item?.status}
                  </div>
                </div>
                <h4 className="font-heading font-semibold text-primary mb-3">
                  {item?.title}
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Network */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              Growing Partnership Network
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              We collaborate with leading organizations to create comprehensive career resilience ecosystems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships?.map((partnership, index) => (
              <div key={index} className="bg-card rounded-xl p-6 text-center shadow-md hover:shadow-brand transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={partnership?.icon} size={32} className="text-primary" />
                </div>
                <div className="text-3xl font-bold text-secondary mb-2">
                  {partnership?.count}
                </div>
                <h4 className="font-heading font-semibold text-primary mb-3">
                  {partnership?.type}
                </h4>
                <p className="text-sm text-text-secondary">
                  {partnership?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-brand rounded-2xl p-8 lg:p-12 text-white text-center">
          <Icon name="Rocket" size={48} className="text-accent mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-6">
            Join the Career Resilience Revolution
          </h3>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Be part of a community that's transforming how professionals navigate career uncertainty. Your success story could inspire the next person to take control of their career future.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              variant="secondary"
              size="lg"
              iconName="Zap"
              iconPosition="left"
              className="bg-white text-primary hover:bg-white/90 shadow-xl"
            >
              Start Your Transformation
            </Button>
            <Button
              variant="ghost"
              size="lg"
              iconName="Users"
              iconPosition="left"
              className="text-white border-white/30 hover:bg-white/10"
            >
              Join Our Community
            </Button>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-white/80 text-sm">
              Ready to transform career uncertainty into strategic opportunity? 
              <br />
              <span className="font-medium">Your resilient career future starts today.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;