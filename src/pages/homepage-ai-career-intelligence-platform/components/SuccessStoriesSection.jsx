import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SuccessStoriesSection = () => {
  const [activeStory, setActiveStory] = useState(0);

  const stories = [
    {
      id: 1,
      name: "Sarah Chen",
      beforeRole: "Marketing Manager",
      afterRole: "Data Analyst",
      duration: "90 days",
      salaryIncrease: "+35%",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      company: "Tech Startup → Fortune 500",
      story: `After 8 years in traditional marketing, I felt stuck when my company downsized. Job Salvage AI identified my analytical skills and showed me a clear path to data analysis. The personalized roadmap helped me learn Python and SQL in just 3 months.`,
      beforeMetrics: {
        salary: "$65K",
        jobSecurity: "Low",
        growth: "Limited"
      },
      afterMetrics: {
        salary: "$88K",
        jobSecurity: "High",
        growth: "Excellent"
      },
      skills: ["Python", "SQL", "Tableau", "Statistics"],
      testimonial: "The AI analysis revealed strengths I didn\'t even know I had. The transition roadmap was incredibly detailed and achievable."
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      beforeRole: "Restaurant Manager",
      afterRole: "Project Manager",
      duration: "120 days",
      salaryIncrease: "+42%",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      company: "Hospitality → Healthcare",
      story: `The pandemic hit hospitality hard. I thought my management experience was worthless, but the platform showed me how my skills transferred to project management. Now I'm leading digital transformation projects in healthcare.`,
      beforeMetrics: {
        salary: "$48K",
        jobSecurity: "Very Low",
        growth: "Declining"
      },
      afterMetrics: {
        salary: "$68K",
        jobSecurity: "High",
        growth: "Strong"
      },
      skills: ["Agile", "Scrum", "Risk Management", "Stakeholder Communication"],
      testimonial: "I never imagined my restaurant experience would translate to healthcare project management. The career path mapping was eye-opening."
    },
    {
      id: 3,
      name: "Jennifer Park",
      beforeRole: "Graphic Designer",
      afterRole: "UX Designer",
      duration: "75 days",
      salaryIncrease: "+28%",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      company: "Freelance → Product Company",
      story: `Freelance design work was inconsistent and stressful. The platform identified UX design as a natural evolution of my skills. The structured learning path helped me build a portfolio that landed me a full-time role with benefits.`,
      beforeMetrics: {
        salary: "$45K",
        jobSecurity: "Unstable",
        growth: "Uncertain"
      },
      afterMetrics: {
        salary: "$58K",
        jobSecurity: "Stable",
        growth: "Promising"
      },
      skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
      testimonial: "The transition from graphic to UX design felt natural with the right guidance. The skill gap analysis was spot-on."
    }
  ];

  const currentStory = stories?.[activeStory];

  return (
    <section className="py-20 bg-gradient-to-br from-muted to-background">
      <div className="container-brand">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Star" size={16} />
            <span>Success Stories</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Real Transformations, Real Results
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            See how professionals like you have navigated career transitions and built resilience 
            with our AI-powered guidance.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Story Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {stories?.map((story, index) => (
              <button
                key={story?.id}
                onClick={() => setActiveStory(index)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-lg border transition-all duration-300 ${
                  activeStory === index
                    ? 'bg-primary text-white border-primary shadow-brand'
                    : 'bg-white text-text-secondary border-border hover:border-primary hover:text-primary'
                }`}
              >
                <img
                  src={story?.avatar}
                  alt={story?.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-medium text-sm">{story?.name}</p>
                  <p className="text-xs opacity-80">{story?.duration}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Main Story Display */}
          <div className="bg-white rounded-2xl shadow-brand border border-border overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Left: Story Content */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={currentStory?.avatar}
                    alt={currentStory?.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-primary">{currentStory?.name}</h3>
                    <p className="text-text-secondary">{currentStory?.company}</p>
                  </div>
                </div>

                {/* Transformation Path */}
                <div className="bg-muted rounded-lg p-6 mb-6">
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <p className="text-sm text-text-secondary mb-1">From</p>
                      <p className="font-semibold text-primary">{currentStory?.beforeRole}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="ArrowRight" size={20} className="text-secondary" />
                      <div className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                        {currentStory?.duration}
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-text-secondary mb-1">To</p>
                      <p className="font-semibold text-primary">{currentStory?.afterRole}</p>
                    </div>
                  </div>
                </div>

                {/* Story Text */}
                <blockquote className="text-text-secondary leading-relaxed mb-6 italic">
                  "{currentStory?.story}"
                </blockquote>

                {/* Testimonial */}
                <div className="bg-primary/5 rounded-lg p-4 mb-6">
                  <p className="text-primary font-medium">"{currentStory?.testimonial}"</p>
                </div>

                {/* Skills Gained */}
                <div>
                  <p className="text-sm font-medium text-text-secondary mb-3">Key Skills Acquired:</p>
                  <div className="flex flex-wrap gap-2">
                    {currentStory?.skills?.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Metrics Comparison */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 lg:p-12">
                <h4 className="text-lg font-bold text-primary mb-8 text-center">
                  Career Transformation Metrics
                </h4>

                <div className="space-y-8">
                  {/* Salary Comparison */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-text-secondary">Salary</span>
                      <span className="text-sm font-bold text-success">{currentStory?.salaryIncrease}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex-1 bg-white rounded-lg p-3 text-center">
                        <p className="text-xs text-text-secondary">Before</p>
                        <p className="font-bold text-primary">{currentStory?.beforeMetrics?.salary}</p>
                      </div>
                      <Icon name="TrendingUp" size={20} className="text-success" />
                      <div className="flex-1 bg-white rounded-lg p-3 text-center">
                        <p className="text-xs text-text-secondary">After</p>
                        <p className="font-bold text-success">{currentStory?.afterMetrics?.salary}</p>
                      </div>
                    </div>
                  </div>

                  {/* Job Security */}
                  <div>
                    <p className="text-sm font-medium text-text-secondary mb-3">Job Security</p>
                    <div className="flex items-center space-x-4">
                      <div className="flex-1 bg-white rounded-lg p-3 text-center">
                        <p className="text-xs text-text-secondary">Before</p>
                        <p className="font-bold text-error">{currentStory?.beforeMetrics?.jobSecurity}</p>
                      </div>
                      <Icon name="Shield" size={20} className="text-success" />
                      <div className="flex-1 bg-white rounded-lg p-3 text-center">
                        <p className="text-xs text-text-secondary">After</p>
                        <p className="font-bold text-success">{currentStory?.afterMetrics?.jobSecurity}</p>
                      </div>
                    </div>
                  </div>

                  {/* Growth Potential */}
                  <div>
                    <p className="text-sm font-medium text-text-secondary mb-3">Growth Potential</p>
                    <div className="flex items-center space-x-4">
                      <div className="flex-1 bg-white rounded-lg p-3 text-center">
                        <p className="text-xs text-text-secondary">Before</p>
                        <p className="font-bold text-warning">{currentStory?.beforeMetrics?.growth}</p>
                      </div>
                      <Icon name="Target" size={20} className="text-success" />
                      <div className="flex-1 bg-white rounded-lg p-3 text-center">
                        <p className="text-xs text-text-secondary">After</p>
                        <p className="font-bold text-success">{currentStory?.afterMetrics?.growth}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 text-center">
                  <Button
                    variant="default"
                    iconName="Zap"
                    iconPosition="left"
                    className="btn-brand-accent hover-scale"
                  >
                    Start Your Transformation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <p className="text-3xl font-bold text-primary mb-2">89%</p>
            <p className="text-sm text-text-secondary">Career Transition Success Rate</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-secondary mb-2">+32%</p>
            <p className="text-sm text-text-secondary">Average Salary Increase</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-accent mb-2">95 days</p>
            <p className="text-sm text-text-secondary">Average Transition Time</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-success mb-2">12,456</p>
            <p className="text-sm text-text-secondary">Successful Transformations</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;