import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustSection = () => {
  const trustPillars = [
    {
      icon: "Shield",
      title: "AI Transparency",
      description: "Our AI decision-making process is explainable and auditable. You'll always understand why we make specific recommendations.",
      features: [
        "Open algorithm explanations",
        "Confidence scores for all recommendations",
        "Bias detection and mitigation",
        "Regular algorithm audits"
      ]
    },
    {
      icon: "Lock",
      title: "Data Privacy",
      description: "Your personal and professional data is encrypted, secure, and never shared without explicit consent.",
      features: [
        "End-to-end encryption",
        "GDPR & CCPA compliant",
        "No data selling to third parties",
        "User-controlled data deletion"
      ]
    },
    {
      icon: "Users",
      title: "Human Oversight",
      description: "Every AI recommendation is reviewed by career experts to ensure ethical, practical, and beneficial guidance.",
      features: [
        "Expert review process",
        "Ethical AI guidelines",
        "Human-in-the-loop validation",
        "Continuous quality monitoring"
      ]
    },
    {
      icon: "Award",
      title: "Industry Standards",
      description: "We adhere to the highest industry standards for AI ethics, data security, and career counseling practices.",
      features: [
        "ISO 27001 certified",
        "SOC 2 Type II compliant",
        "Career counseling best practices",
        "Regular security audits"
      ]
    }
  ];

  const certifications = [
    {
      name: "ISO 27001",
      description: "Information Security Management",
      icon: "Shield"
    },
    {
      name: "SOC 2 Type II",
      description: "Security & Availability Controls",
      icon: "Lock"
    },
    {
      name: "GDPR Compliant",
      description: "European Data Protection",
      icon: "Globe"
    },
    {
      name: "CCPA Compliant",
      description: "California Consumer Privacy",
      icon: "FileText"
    }
  ];

  const ethicalPrinciples = [
    {
      principle: "Fairness",
      description: "Our AI algorithms are designed to provide equal opportunities regardless of background, gender, age, or other protected characteristics."
    },
    {
      principle: "Transparency",
      description: "We provide clear explanations for all AI recommendations, including confidence levels and reasoning behind suggestions."
    },
    {
      principle: "Accountability",
      description: "We take responsibility for our AI\'s decisions and maintain human oversight to ensure beneficial outcomes for users."
    },
    {
      principle: "Privacy",
      description: "User data is protected with the highest security standards and used only to improve individual career outcomes."
    },
    {
      principle: "Beneficence",
      description: "Every feature and recommendation is designed to genuinely benefit users\' career development and professional growth."
    },
    {
      principle: "User Control",
      description: "Users maintain full control over their data, recommendations, and how they engage with our platform."
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container-brand">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-trust/10 rounded-full px-6 py-3 mb-6">
            <Icon name="Shield" size={20} className="text-trust" />
            <span className="text-sm font-medium text-trust">Trust & Transparency</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Built on Trust,
            <span className="text-secondary block mt-2">Powered by Ethics</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            We understand that career decisions are deeply personal. That's why we've built our platform with the highest standards of transparency, security, and ethical AI practices.
          </p>
        </div>

        {/* Trust Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {trustPillars?.map((pillar, index) => (
            <div key={index} className="bg-card rounded-xl p-8 shadow-brand hover:shadow-accent transition-all duration-300 hover-lift">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-14 h-14 bg-trust/10 rounded-xl flex items-center justify-center">
                  <Icon name={pillar?.icon} size={28} className="text-trust" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-primary mb-2">
                    {pillar?.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {pillar?.description}
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                {pillar?.features?.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <Icon name="Check" size={16} className="text-success flex-shrink-0" />
                    <span className="text-sm text-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-muted rounded-2xl p-8 lg:p-12 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              Industry Certifications
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              We maintain the highest industry standards through rigorous certification processes and regular audits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications?.map((cert, index) => (
              <div key={index} className="bg-card rounded-xl p-6 text-center shadow-md hover:shadow-brand transition-all duration-300">
                <div className="w-16 h-16 bg-trust/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={cert?.icon} size={32} className="text-trust" />
                </div>
                <h4 className="font-heading font-semibold text-primary mb-2">
                  {cert?.name}
                </h4>
                <p className="text-sm text-text-secondary">
                  {cert?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Ethical AI Principles */}
        <div className="bg-card rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              Our Ethical AI Principles
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              These principles guide every decision we make in developing and deploying AI technology for career guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ethicalPrinciples?.map((item, index) => (
              <div key={index} className="bg-background rounded-xl p-6 shadow-md">
                <h4 className="font-heading font-semibold text-primary mb-3 text-center">
                  {item?.principle}
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed text-center">
                  {item?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Data Usage Transparency */}
        <div className="mt-20 bg-gradient-brand rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center mb-8">
            <Icon name="Eye" size={48} className="text-accent mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-6">
              Complete Data Transparency
            </h3>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              You have complete visibility and control over how your data is used to improve your career outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Database" size={32} className="text-accent" />
              </div>
              <h4 className="font-heading font-semibold mb-2">What We Collect</h4>
              <p className="text-sm text-white/80">
                Only data necessary for career analysis: resume content, skills, goals, and progress metrics.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Cpu" size={32} className="text-accent" />
              </div>
              <h4 className="font-heading font-semibold mb-2">How We Use It</h4>
              <p className="text-sm text-white/80">
                Exclusively for personalized recommendations, market analysis, and improving your career outcomes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="UserCheck" size={32} className="text-accent" />
              </div>
              <h4 className="font-heading font-semibold mb-2">Your Control</h4>
              <p className="text-sm text-white/80">
                View, export, or delete your data anytime. You maintain complete ownership and control.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;