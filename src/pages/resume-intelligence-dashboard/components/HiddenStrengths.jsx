import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HiddenStrengths = () => {
  const [selectedStrength, setSelectedStrength] = useState(null);

  const hiddenStrengths = [
    {
      id: 1,
      title: "Cross-Functional Collaboration",
      description: "Your experience spans multiple departments, indicating strong adaptability and communication skills",
      evidence: [
        "Worked with design, engineering, and marketing teams",
        "Successfully managed stakeholder relationships",
        "Translated technical concepts for non-technical audiences"
      ],
      transferableTo: ["Product Management", "Business Analysis", "Consulting"],
      confidence: 92,
      icon: "Users",
      color: "secondary"
    },
    {
      id: 2,
      title: "Problem-Solving Methodology",
      description: "You demonstrate systematic approaches to complex challenges across different contexts",
      evidence: [
        "Implemented process improvements that reduced costs by 25%",
        "Debugged complex technical issues systematically",
        "Created documentation and training materials"
      ],
      transferableTo: ["Operations Management", "Process Engineering", "Quality Assurance"],
      confidence: 88,
      icon: "Lightbulb",
      color: "accent"
    },
    {
      id: 3,
      title: "Data-Driven Decision Making",
      description: "Your background shows consistent use of metrics and analytics to guide decisions",
      evidence: [
        "Used analytics tools to track performance metrics",
        "Created reports and dashboards for stakeholders",
        "Made recommendations based on data analysis"
      ],
      transferableTo: ["Data Analysis", "Business Intelligence", "Strategy Consulting"],
      confidence: 85,
      icon: "BarChart3",
      color: "success"
    },
    {
      id: 4,
      title: "Learning Agility",
      description: "You've quickly adapted to new technologies and methodologies throughout your career",
      evidence: [
        "Mastered 3 new programming languages in 2 years",
        "Successfully transitioned between different project methodologies",
        "Self-taught advanced skills through online courses"
      ],
      transferableTo: ["Technical Training", "Change Management", "Innovation Roles"],
      confidence: 90,
      icon: "TrendingUp",
      color: "primary"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      primary: { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary/20' },
      secondary: { bg: 'bg-secondary/10', text: 'text-secondary', border: 'border-secondary/20' },
      accent: { bg: 'bg-accent/10', text: 'text-accent', border: 'border-accent/20' },
      success: { bg: 'bg-success/10', text: 'text-success', border: 'border-success/20' }
    };
    return colors?.[color] || colors?.primary;
  };

  return (
    <div className="bg-white rounded-xl border border-border p-6 shadow-brand">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-primary mb-1">
            Hidden Strengths Discovery
          </h3>
          <p className="text-sm text-text-secondary">
            AI-identified transferable skills you may not recognize
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Icon name="Eye" size={16} className="text-trust" />
          <span className="text-xs text-trust">Click to explore</span>
        </div>
      </div>
      <div className="grid gap-4 mb-6">
        {hiddenStrengths?.map((strength) => {
          const colorClasses = getColorClasses(strength?.color);
          const isSelected = selectedStrength === strength?.id;
          
          return (
            <div key={strength?.id} className="space-y-4">
              <div
                className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 hover:shadow-md ${
                  isSelected 
                    ? `${colorClasses?.bg} ${colorClasses?.border} shadow-md` 
                    : 'bg-muted/30 border-border/50 hover:bg-muted/50'
                }`}
                onClick={() => setSelectedStrength(isSelected ? null : strength?.id)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colorClasses?.bg}`}>
                    <Icon name={strength?.icon} size={20} className={colorClasses?.text} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-primary">{strength?.title}</h4>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <Icon name="Zap" size={14} className={colorClasses?.text} />
                          <span className={`text-sm font-medium ${colorClasses?.text}`}>
                            {strength?.confidence}%
                          </span>
                        </div>
                        <Icon 
                          name={isSelected ? "ChevronUp" : "ChevronDown"} 
                          size={16} 
                          className="text-trust" 
                        />
                      </div>
                    </div>
                    <p className="text-sm text-text-secondary">{strength?.description}</p>
                  </div>
                </div>
              </div>
              {/* Expanded Details */}
              {isSelected && (
                <div className="ml-14 space-y-4 animate-fade-in">
                  {/* Evidence */}
                  <div className="p-4 bg-muted/30 rounded-lg border border-border/50">
                    <h5 className="font-medium text-primary mb-3 flex items-center space-x-2">
                      <Icon name="CheckCircle" size={16} className="text-success" />
                      <span>Supporting Evidence</span>
                    </h5>
                    <ul className="space-y-2">
                      {strength?.evidence?.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm text-text-secondary">
                          <Icon name="ArrowRight" size={14} className="text-trust flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Transferable Roles */}
                  <div className="p-4 bg-muted/30 rounded-lg border border-border/50">
                    <h5 className="font-medium text-primary mb-3 flex items-center space-x-2">
                      <Icon name="Target" size={16} className={colorClasses?.text} />
                      <span>Transferable To</span>
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {strength?.transferableTo?.map((role, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 rounded-full text-sm font-medium ${colorClasses?.bg} ${colorClasses?.text} border ${colorClasses?.border}`}
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="ExternalLink"
                    iconPosition="right"
                    className="ml-auto"
                  >
                    Explore Career Paths
                  </Button>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {/* AI Insight */}
      <div className="p-4 bg-gradient-brand/5 rounded-lg border border-secondary/20">
        <div className="flex items-start space-x-3">
          <Icon name="Brain" size={20} className="text-secondary flex-shrink-0 mt-0.5" />
          <div>
            <h5 className="font-medium text-secondary mb-2">AI Analysis Insight</h5>
            <p className="text-sm text-text-secondary mb-3">
              Your project management experience translates well to product management roles. 
              The combination of technical background and stakeholder management creates unique value.
            </p>
            <div className="flex items-center space-x-4 text-xs text-trust">
              <div className="flex items-center space-x-1">
                <Icon name="Database" size={12} />
                <span>15,000+ profiles analyzed</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="TrendingUp" size={12} />
                <span>94% accuracy rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiddenStrengths;