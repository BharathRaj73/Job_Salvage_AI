import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Dr. Elena Rodriguez",
      role: "Chief AI Officer",
      expertise: "Machine Learning & Career Analytics",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Former Google AI researcher with 12 years in machine learning. Led the development of our career prediction algorithms and market analysis systems.",
      achievements: [
        "PhD in Computer Science, Stanford",
        "15+ published papers on AI applications",
        "Former Senior ML Engineer at Google"
      ],
      linkedin: "#"
    },
    {
      name: "Michael Chen",
      role: "Head of Career Strategy",
      expertise: "Career Counseling & Workforce Development",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Certified career counselor with 15 years helping professionals navigate transitions. Specializes in recession-proof career planning and skill development.",
      achievements: [
        "Master\'s in Career Counseling",
        "Certified Career Development Facilitator",
        "10,000+ successful career transitions"
      ],
      linkedin: "#"
    },
    {
      name: "Sarah Kim",
      role: "VP of Product Experience",
      expertise: "UX Design & Human-Centered AI",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Product design leader focused on making complex AI insights accessible and actionable. Previously led design teams at Airbnb and Spotify.",
      achievements: [
        "10+ years in product design",
        "Former Design Lead at Airbnb",
        "Expert in AI/human interaction"
      ],
      linkedin: "#"
    },
    {
      name: "David Thompson",
      role: "Chief Technology Officer",
      expertise: "Platform Architecture & Data Security",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Full-stack engineer and security expert who ensures our platform scales securely while protecting user data. Former CTO at two successful startups.",
      achievements: [
        "15+ years in tech leadership",
        "Former CTO at TechCorp",
        "Expert in data privacy & security"
      ],
      linkedin: "#"
    },
    {
      name: "Dr. Priya Patel",
      role: "Director of Research",
      expertise: "Labor Economics & Market Analysis",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
      bio: "Labor economist specializing in job market trends and economic resilience. Her research informs our recession-proof career recommendations.",
      achievements: [
        "PhD in Labor Economics, MIT",
        "Former World Bank consultant",
        "Author of \'Future-Proof Careers'"
      ],
      linkedin: "#"
    },
    {
      name: "James Wilson",
      role: "Community Success Manager",
      expertise: "User Engagement & Success Stories",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
      bio: "Career transition success story himself - pivoted from finance to tech during 2020. Now helps others achieve similar transformations through community building.",
      achievements: [
        "Personal career pivot success",
        "5+ years in community management",
        "Expert in peer-to-peer learning"
      ],
      linkedin: "#"
    }
  ];

  const advisors = [
    {
      name: "Prof. Robert Martinez",
      role: "AI Ethics Advisor",
      company: "Harvard Business School",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Lisa Chang",
      role: "Career Development Advisor",
      company: "Former VP at LinkedIn",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Dr. Ahmed Hassan",
      role: "Data Science Advisor",
      company: "Former Chief Data Scientist at Uber",
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="container-brand">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 rounded-full px-6 py-3 mb-6">
            <Icon name="Users" size={20} className="text-success" />
            <span className="text-sm font-medium text-success">Our Team</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Diverse Expertise,
            <span className="text-secondary block mt-2">Shared Mission</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Our team combines AI researchers, career counselors, industry experts, and professionals who have successfully navigated their own career transitions.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {teamMembers?.map((member, index) => (
            <div key={index} className="bg-background rounded-xl p-6 shadow-brand hover:shadow-accent transition-all duration-300 hover-lift">
              {/* Profile Image */}
              <div className="text-center mb-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image 
                    src={member?.image} 
                    alt={member?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-1">
                  {member?.name}
                </h3>
                <p className="text-secondary font-medium mb-2">
                  {member?.role}
                </p>
                <p className="text-sm text-accent font-medium">
                  {member?.expertise}
                </p>
              </div>

              {/* Bio */}
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                {member?.bio}
              </p>

              {/* Achievements */}
              <div className="space-y-2 mb-4">
                {member?.achievements?.map((achievement, achievementIndex) => (
                  <div key={achievementIndex} className="flex items-start space-x-2">
                    <Icon name="Award" size={14} className="text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-text-secondary">{achievement}</span>
                  </div>
                ))}
              </div>

              {/* LinkedIn */}
              <div className="text-center">
                <a 
                  href={member?.linkedin}
                  className="inline-flex items-center space-x-2 text-sm text-secondary hover:text-primary transition-colors duration-200"
                >
                  <Icon name="Linkedin" size={16} />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Board */}
        <div className="bg-muted rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              Advisory Board
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Industry leaders and academic experts who guide our strategic direction and ensure our solutions remain cutting-edge and ethical.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisors?.map((advisor, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image 
                    src={advisor?.image} 
                    alt={advisor?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-heading font-semibold text-primary mb-1">
                  {advisor?.name}
                </h4>
                <p className="text-sm text-secondary font-medium mb-1">
                  {advisor?.role}
                </p>
                <p className="text-xs text-text-secondary">
                  {advisor?.company}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Values */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary text-center mb-12">
            Our Team Values
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" size={32} className="text-primary" />
              </div>
              <h4 className="font-heading font-semibold text-primary mb-2">Empathy First</h4>
              <p className="text-sm text-text-secondary">
                We understand career transitions are deeply personal and emotional journeys.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={32} className="text-secondary" />
              </div>
              <h4 className="font-heading font-semibold text-primary mb-2">Innovation</h4>
              <p className="text-sm text-text-secondary">
                We continuously push boundaries to create better solutions for career challenges.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-accent" />
              </div>
              <h4 className="font-heading font-semibold text-primary mb-2">Integrity</h4>
              <p className="text-sm text-text-secondary">
                We maintain the highest ethical standards in AI development and user privacy.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-success" />
              </div>
              <h4 className="font-heading font-semibold text-primary mb-2">Collaboration</h4>
              <p className="text-sm text-text-secondary">
                We believe in the power of community and peer-to-peer learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;