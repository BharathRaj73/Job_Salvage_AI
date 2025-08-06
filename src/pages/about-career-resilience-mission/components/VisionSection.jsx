import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const VisionSection = () => {
  const visionPoints = [
    {
      icon: "TrendingUp",
      title: "Proactive Career Intelligence",
      description: "Moving beyond reactive job searching to strategic career positioning through AI-powered market insights and trend analysis."
    },
    {
      icon: "Shield",
      title: "Recession-Proof Resilience",
      description: "Building careers that thrive during economic uncertainty by identifying stable industries and transferable skills."
    },
    {
      icon: "Users",
      title: "Community-Driven Growth",
      description: "Creating a supportive ecosystem where professionals share knowledge, celebrate successes, and navigate challenges together."
    },
    {
      icon: "Lightbulb",
      title: "Continuous Adaptation",
      description: "Evolving with market changes to provide relevant, timely guidance that keeps professionals ahead of industry shifts."
    }
  ];

  const successStories = [
    {
      name: "Sarah Chen",
      role: "Marketing Manager → Data Scientist",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      story: "Transitioned from marketing to data science during the 2023 tech layoffs, now earning 40% more in a recession-proof role."
    },
    {
      name: "Marcus Rodriguez",
      role: "Retail Manager → UX Designer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      story: "Leveraged transferable leadership skills to break into tech design, securing remote work flexibility and career growth."
    },
    {
      name: "Jennifer Park",
      role: "Teacher → Technical Writer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      story: "Applied communication expertise to technical writing, doubling salary while maintaining work-life balance."
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container-brand">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 rounded-full px-6 py-3 mb-6">
            <Icon name="Eye" size={20} className="text-secondary" />
            <span className="text-sm font-medium text-secondary">Our Vision</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Empowering Professionals to 
            <span className="text-secondary block mt-2">Thrive, Not Just Survive</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            We envision a world where career uncertainty becomes a catalyst for growth, where every professional has the tools and confidence to navigate any economic climate with strategic intelligence.
          </p>
        </div>

        {/* Vision Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {visionPoints?.map((point, index) => (
            <div key={index} className="bg-card rounded-xl p-8 shadow-brand hover:shadow-accent transition-all duration-300 hover-lift">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Icon name={point?.icon} size={24} className="text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                    {point?.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {point?.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="bg-muted rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              Transformation Success Stories
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Real professionals who turned career uncertainty into strategic opportunity through our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories?.map((story, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-md hover:shadow-brand transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image 
                      src={story?.image} 
                      alt={story?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-heading font-semibold text-primary mb-1">
                    {story?.name}
                  </h4>
                  <p className="text-sm text-secondary font-medium mb-3">
                    {story?.role}
                  </p>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed text-center">
                  "{story?.story}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;