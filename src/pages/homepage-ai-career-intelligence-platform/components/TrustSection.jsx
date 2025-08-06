import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustSection = () => {
  const trustFeatures = [
    {
      icon: 'Shield',
      title: 'AI Transparency',
      description: 'Our algorithms are explainable and auditable. You always know how recommendations are generated.',
      details: [
        'Open-source analysis methods',
        'Bias detection and mitigation',
        'Regular algorithm audits',
        'Clear decision explanations'
      ]
    },
    {
      icon: 'Lock',
      title: 'Data Security',
      description: 'Enterprise-grade security protects your personal and professional information at every step.',
      details: [
        'End-to-end encryption',
        'SOC 2 Type II certified',
        'GDPR compliant',
        'Zero data selling policy'
      ]
    },
    {
      icon: 'Users',
      title: 'Expert Partnership',
      description: 'Validated by certified career counselors and industry professionals across multiple sectors.',
      details: [
        'Certified career counselors',
        'Industry expert validation',
        'Continuous feedback loops',
        'Professional oversight'
      ]
    }
  ];

  const certifications = [
    {
      name: 'SOC 2 Type II',
      icon: 'Shield',
      description: 'Security & Privacy Certified'
    },
    {
      name: 'GDPR Compliant',
      icon: 'Globe',
      description: 'Data Protection Compliant'
    },
    {
      name: 'ISO 27001',
      icon: 'Award',
      description: 'Information Security Standard'
    },
    {
      name: 'Career Counselor Approved',
      icon: 'CheckCircle',
      description: 'Professionally Validated'
    }
  ];

  const partners = [
    {
      name: 'National Career Development Association',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop',
      type: 'Professional Association'
    },
    {
      name: 'Society for Human Resource Management',
      logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=120&h=60&fit=crop',
      type: 'HR Partnership'
    },
    {
      name: 'International Coach Federation',
      logo: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=120&h=60&fit=crop',
      type: 'Coaching Standards'
    },
    {
      name: 'Career Development Institute',
      logo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=60&fit=crop',
      type: 'Industry Standards'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-brand">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-trust/10 text-trust px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Shield" size={16} />
            <span>Trust & Security</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Built on Trust, Powered by Transparency
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Your career data deserves the highest level of protection and transparency. 
            We're committed to ethical AI and professional standards.
          </p>
        </div>

        {/* Trust Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {trustFeatures?.map((feature, index) => (
            <div
              key={feature?.title}
              className="bg-muted rounded-2xl p-8 text-center hover:shadow-brand transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name={feature?.icon} size={32} className="text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-primary mb-4">{feature?.title}</h3>
              <p className="text-text-secondary mb-6 leading-relaxed">{feature?.description}</p>
              
              <div className="space-y-2">
                {feature?.details?.map((detail) => (
                  <div key={detail} className="flex items-center justify-center space-x-2">
                    <Icon name="Check" size={14} className="text-success" />
                    <span className="text-sm text-text-secondary">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 mb-16 border border-border">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">
            Security Certifications & Compliance
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications?.map((cert) => (
              <div key={cert?.name} className="bg-white rounded-lg p-4 text-center shadow-md border border-border">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name={cert?.icon} size={20} className="text-white" />
                </div>
                <h4 className="font-semibold text-primary text-sm mb-1">{cert?.name}</h4>
                <p className="text-xs text-text-secondary">{cert?.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Partners */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Trusted by Professional Organizations
          </h3>
          <p className="text-text-secondary mb-8">
            Our platform is validated and endorsed by leading career development organizations
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners?.map((partner) => (
              <div key={partner?.name} className="group">
                <div className="bg-white rounded-lg p-6 shadow-md border border-border hover:shadow-brand transition-all duration-300">
                  <img
                    src={partner?.logo}
                    alt={partner?.name}
                    className="w-full h-12 object-contain mb-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <h4 className="font-medium text-primary text-sm mb-1">{partner?.name}</h4>
                  <p className="text-xs text-text-secondary">{partner?.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy Promise */}
        <div className="bg-white rounded-2xl shadow-brand border border-border p-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Heart" size={32} className="text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-primary mb-4">Our Privacy Promise</h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              Your career journey is personal. We never sell your data, never share your information 
              without explicit consent, and always give you complete control over your privacy settings. 
              Your trust is the foundation of everything we do.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <Icon name="X" size={16} className="text-error" />
                <span className="text-text-secondary">No data selling</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="X" size={16} className="text-error" />
                <span className="text-text-secondary">No spam emails</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-success" />
                <span className="text-text-secondary">Full data control</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-success" />
                <span className="text-text-secondary">Transparent practices</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;