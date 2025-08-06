import React from 'react';
import Icon from '../../../components/AppIcon';

const ImpactSection = () => {
  const impactMetrics = [
    {
      number: "50,000+",
      label: "Professionals Empowered",
      description: "Career transformations guided through our platform",
      icon: "Users",
      color: "text-primary"
    },
    {
      number: "89%",
      label: "Success Rate",
      description: "Users who achieved their career goals within 6 months",
      icon: "TrendingUp",
      color: "text-success"
    },
    {
      number: "4.8/5",
      label: "User Satisfaction",
      description: "Average rating from career transformation journeys",
      icon: "Star",
      color: "text-accent"
    },
    {
      number: "35%",
      label: "Average Salary Increase",
      description: "Income improvement after successful transitions",
      icon: "DollarSign",
      color: "text-secondary"
    },
    {
      number: "120+",
      label: "Industries Covered",
      description: "Comprehensive career paths across all major sectors",
      icon: "Building",
      color: "text-trust"
    },
    {
      number: "30 Days",
      label: "Average Time to Results",
      description: "From assessment to actionable career roadmap",
      icon: "Clock",
      color: "text-primary"
    }
  ];

  const communityImpact = [
    {
      title: "Peer Mentorship Network",
      description: "Users who successfully transitioned become mentors, creating a self-sustaining support ecosystem.",
      impact: "15,000+ mentorship connections made",
      icon: "Users"
    },
    {
      title: "Knowledge Sharing Hub",
      description: "Community-generated content including success stories, tips, and industry insights shared across the platform.",
      impact: "25,000+ community contributions",
      icon: "BookOpen"
    },
    {
      title: "Industry Partnerships",
      description: "Collaborations with leading companies to create direct pathways from our platform to employment opportunities.",
      impact: "500+ hiring partner companies",
      icon: "Handshake"
    },
    {
      title: "Economic Resilience",
      description: "Helping communities build economic stability by preparing professionals for recession-proof careers.",
      impact: "$2.1B+ in increased earning potential",
      icon: "Shield"
    }
  ];

  const testimonials = [
    {
      quote: "Job Salvage AI didn't just help me find a new job—it helped me discover a career path I never knew existed. The AI analysis revealed transferable skills I hadn't considered, and the 30-day roadmap was incredibly actionable.",
      author: "Maria Santos",
      role: "Former Retail Manager → UX Researcher",
      company: "Now at Microsoft",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
      outcome: "150% salary increase"
    },
    {
      quote: "The platform's recession-proof career recommendations were spot-on. While my industry was struggling, I was already positioned in a growing field thanks to their market intelligence and personalized guidance.",
      author: "David Kim",
      role: "Former Marketing Coordinator → Data Analyst",
      company: "Now at Salesforce",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      outcome: "Career pivot in 45 days"
    },
    {
      quote: "What impressed me most was the human touch behind the AI. The recommendations felt personal and considerate of my family situation and career goals. The community support was invaluable during my transition.",
      author: "Jennifer Lopez",
      role: "Former Teacher → Technical Writer",
      company: "Now at Amazon",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      outcome: "Remote work achieved"
    }
  ];

  const globalReach = [
    { country: "United States", users: "32,000+", flag: "🇺🇸" },
    { country: "Canada", users: "8,500+", flag: "🇨🇦" },
    { country: "United Kingdom", users: "6,200+", flag: "🇬🇧" },
    { country: "Australia", users: "2,800+", flag: "🇦🇺" },
    { country: "Germany", users: "1,900+", flag: "🇩🇪" },
    { country: "Others", users: "3,600+", flag: "🌍" }
  ];

  return (
    <section className="py-20 lg:py-32 bg-muted">
      <div className="container-brand">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 rounded-full px-6 py-3 mb-6">
            <Icon name="BarChart3" size={20} className="text-success" />
            <span className="text-sm font-medium text-success">Our Impact</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Transforming Lives,
            <span className="text-secondary block mt-2">Building Resilience</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Our success is measured not just in numbers, but in the real career transformations and economic resilience we help create for professionals worldwide.
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {impactMetrics?.map((metric, index) => (
            <div key={index} className="bg-card rounded-xl p-8 text-center shadow-brand hover:shadow-accent transition-all duration-300 hover-lift">
              <div className={`w-16 h-16 bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 ${metric?.color?.replace('text-', 'bg-')}/10`}>
                <Icon name={metric?.icon} size={32} className={metric?.color} />
              </div>
              <div className={`text-4xl font-bold mb-2 ${metric?.color}`}>
                {metric?.number}
              </div>
              <h3 className="text-lg font-heading font-semibold text-primary mb-2">
                {metric?.label}
              </h3>
              <p className="text-sm text-text-secondary">
                {metric?.description}
              </p>
            </div>
          ))}
        </div>

        {/* Community Impact */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              Community Impact & Ripple Effects
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Our platform creates positive ripple effects that extend far beyond individual career transformations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communityImpact?.map((impact, index) => (
              <div key={index} className="bg-background rounded-xl p-6 shadow-md">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Icon name={impact?.icon} size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-primary mb-2">
                      {impact?.title}
                    </h4>
                    <p className="text-sm text-text-secondary leading-relaxed mb-3">
                      {impact?.description}
                    </p>
                    <div className="text-sm font-medium text-accent">
                      {impact?.impact}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              Real Success Stories
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Hear from professionals who transformed their careers through our platform during challenging economic times.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials?.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-brand hover:shadow-accent transition-all duration-300">
                <div className="mb-4">
                  <Icon name="Quote" size={24} className="text-accent mb-3" />
                  <p className="text-text-secondary leading-relaxed text-sm mb-4">
                    "{testimonial?.quote}"
                  </p>
                </div>
                
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src={testimonial?.image} 
                      alt={testimonial?.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-primary text-sm">
                      {testimonial?.author}
                    </h4>
                    <p className="text-xs text-text-secondary">
                      {testimonial?.role}
                    </p>
                    <p className="text-xs text-secondary font-medium">
                      {testimonial?.company}
                    </p>
                  </div>
                </div>
                
                <div className="bg-success/10 rounded-lg p-3 text-center">
                  <span className="text-sm font-medium text-success">
                    {testimonial?.outcome}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Reach */}
        <div className="bg-gradient-brand rounded-2xl p-8 lg:p-12 text-white text-center">
          <Icon name="Globe" size={48} className="text-accent mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-6">
            Global Career Resilience
          </h3>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Empowering professionals across continents to build recession-proof careers and economic stability.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {globalReach?.map((location, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl mb-2">{location.flag}</div>
                <div className="text-lg font-bold text-accent mb-1">
                  {location.users}
                </div>
                <div className="text-sm text-white/80">
                  {location.country}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;