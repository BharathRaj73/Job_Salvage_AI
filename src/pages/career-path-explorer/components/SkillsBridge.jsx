import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SkillsBridge = ({ currentRole = "Marketing Manager", targetRole = "Product Marketing Manager" }) => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skillsAnalysis = {
    currentSkills: [
      { name: 'Digital Marketing', level: 90, category: 'marketing' },
      { name: 'Content Strategy', level: 85, category: 'marketing' },
      { name: 'Campaign Management', level: 88, category: 'marketing' },
      { name: 'Analytics & Reporting', level: 75, category: 'analytical' },
      { name: 'Brand Management', level: 80, category: 'marketing' },
      { name: 'Social Media Marketing', level: 85, category: 'marketing' }
    ],
    requiredSkills: [
      { 
        name: 'Product Positioning', 
        currentLevel: 45, 
        requiredLevel: 85, 
        gap: 40,
        category: 'product',
        estimatedTime: '4-6 weeks',
        priority: 'high',
        resources: ['Product Marketing Certification', 'Positioning Workshop', 'Case Study Analysis']
      },
      { 
        name: 'Go-to-Market Strategy', 
        currentLevel: 30, 
        requiredLevel: 90, 
        gap: 60,
        category: 'strategic',
        estimatedTime: '6-8 weeks',
        priority: 'high',
        resources: ['GTM Strategy Course', 'Launch Planning Workshop', 'Mentor Sessions']
      },
      { 
        name: 'Competitive Analysis', 
        currentLevel: 55, 
        requiredLevel: 80, 
        gap: 25,
        category: 'analytical',
        estimatedTime: '3-4 weeks',
        priority: 'medium',
        resources: ['Competitive Intelligence Tools', 'Analysis Framework Training']
      },
      { 
        name: 'Customer Research', 
        currentLevel: 70, 
        requiredLevel: 85, 
        gap: 15,
        category: 'research',
        estimatedTime: '2-3 weeks',
        priority: 'medium',
        resources: ['User Research Methods', 'Interview Techniques Workshop']
      },
      { 
        name: 'Product Analytics', 
        currentLevel: 40, 
        requiredLevel: 75, 
        gap: 35,
        category: 'analytical',
        estimatedTime: '4-5 weeks',
        priority: 'medium',
        resources: ['Product Analytics Course', 'Data Visualization Training']
      },
      { 
        name: 'Cross-functional Collaboration', 
        currentLevel: 75, 
        requiredLevel: 90, 
        gap: 15,
        category: 'soft',
        estimatedTime: '2-3 weeks',
        priority: 'low',
        resources: ['Leadership Communication', 'Stakeholder Management']
      }
    ],
    transferableSkills: [
      { name: 'Analytics & Reporting', transferability: 95, advantage: 'Strong foundation for product analytics' },
      { name: 'Campaign Management', transferability: 80, advantage: 'Applies to product launch campaigns' },
      { name: 'Content Strategy', transferability: 75, advantage: 'Essential for product messaging' },
      { name: 'Brand Management', transferability: 70, advantage: 'Helps with product positioning' }
    ]
  };

  const getCategoryColor = (category) => {
    const colors = {
      marketing: 'bg-blue-100 text-blue-800 border-blue-200',
      analytical: 'bg-green-100 text-green-800 border-green-200',
      product: 'bg-purple-100 text-purple-800 border-purple-200',
      strategic: 'bg-orange-100 text-orange-800 border-orange-200',
      research: 'bg-teal-100 text-teal-800 border-teal-200',
      soft: 'bg-gray-100 text-gray-800 border-gray-200'
    };
    return colors?.[category] || colors?.soft;
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-50 border-red-200';
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'low': return 'text-green-600 bg-green-50 border-green-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const totalLearningTime = skillsAnalysis?.requiredSkills?.reduce((total, skill) => {
      const weeks = parseInt(skill?.estimatedTime?.split('-')?.[1] || skill?.estimatedTime?.split('-')?.[0]);
      return total + weeks;
    }, 0);

  return (
    <div className="bg-white rounded-xl shadow-brand border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-heading font-semibold text-primary">Skills Bridge Analysis</h3>
          <p className="text-sm text-text-secondary mt-1">
            Path from {currentRole} to {targetRole}
          </p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-secondary">{totalLearningTime} weeks</div>
          <div className="text-sm text-text-secondary">Total learning time</div>
        </div>
      </div>
      {/* Progress Overview */}
      <div className="mb-8 p-4 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-lg">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-primary">Overall Readiness</span>
          <span className="text-sm font-semibold text-secondary">68%</span>
        </div>
        <div className="w-full bg-white rounded-full h-3">
          <div className="bg-gradient-to-r from-secondary to-accent h-3 rounded-full transition-all duration-500" style={{ width: '68%' }}></div>
        </div>
        <div className="flex items-center justify-between mt-2 text-xs text-text-secondary">
          <span>Strong foundation with marketing expertise</span>
          <span>6 skills need development</span>
        </div>
      </div>
      {/* Current Strengths */}
      <div className="mb-8">
        <h4 className="font-heading font-semibold text-primary mb-4 flex items-center space-x-2">
          <Icon name="CheckCircle" size={18} className="text-green-600" />
          <span>Your Current Strengths</span>
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {skillsAnalysis?.currentSkills?.map((skill, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Icon name="Check" size={14} className="text-green-600" />
                </div>
                <div>
                  <div className="font-medium text-primary">{skill?.name}</div>
                  <div className={`text-xs px-2 py-1 rounded-full border ${getCategoryColor(skill?.category)}`}>
                    {skill?.category}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-semibold text-green-600">{skill?.level}%</div>
                <div className="text-xs text-text-secondary">proficiency</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Skills to Develop */}
      <div className="mb-8">
        <h4 className="font-heading font-semibold text-primary mb-4 flex items-center space-x-2">
          <Icon name="Target" size={18} className="text-orange-600" />
          <span>Skills to Develop</span>
        </h4>
        <div className="space-y-4">
          {skillsAnalysis?.requiredSkills?.map((skill, index) => (
            <div 
              key={index} 
              className={`border border-border rounded-lg p-4 transition-all duration-200 cursor-pointer ${
                selectedSkill === index ? 'ring-2 ring-secondary shadow-md' : 'hover:shadow-sm'
              }`}
              onClick={() => setSelectedSkill(selectedSkill === index ? null : index)}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Icon name="BookOpen" size={16} className="text-orange-600" />
                  </div>
                  <div>
                    <div className="font-medium text-primary">{skill?.name}</div>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className={`text-xs px-2 py-1 rounded-full border ${getCategoryColor(skill?.category)}`}>
                        {skill?.category}
                      </div>
                      <div className={`text-xs px-2 py-1 rounded-full border ${getPriorityColor(skill?.priority)}`}>
                        {skill?.priority} priority
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-orange-600">Gap: {skill?.gap}%</div>
                  <div className="text-xs text-text-secondary">{skill?.estimatedTime}</div>
                </div>
              </div>

              {/* Skill Progress Bar */}
              <div className="mb-3">
                <div className="flex items-center justify-between text-xs text-text-secondary mb-1">
                  <span>Current: {skill?.currentLevel}%</span>
                  <span>Target: {skill?.requiredLevel}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="relative h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-gray-400 h-full transition-all duration-500" 
                      style={{ width: `${skill?.currentLevel}%` }}
                    ></div>
                    <div 
                      className="bg-orange-500 h-full absolute top-0 transition-all duration-500" 
                      style={{ 
                        left: `${skill?.currentLevel}%`, 
                        width: `${skill?.gap}%` 
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Expanded Details */}
              {selectedSkill === index && (
                <div className="mt-4 pt-4 border-t border-border animate-fade-in">
                  <h5 className="font-medium text-primary mb-2">Recommended Learning Resources</h5>
                  <div className="space-y-2">
                    {skill?.resources?.map((resource, resourceIndex) => (
                      <div key={resourceIndex} className="flex items-center space-x-2 text-sm text-text-secondary">
                        <Icon name="ExternalLink" size={14} />
                        <span>{resource}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-3"
                    iconName="Play"
                    iconPosition="left"
                  >
                    Start Learning Path
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Transferable Skills */}
      <div className="mb-6">
        <h4 className="font-heading font-semibold text-primary mb-4 flex items-center space-x-2">
          <Icon name="ArrowRight" size={18} className="text-secondary" />
          <span>Your Transferable Advantages</span>
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillsAnalysis?.transferableSkills?.map((skill, index) => (
            <div key={index} className="p-4 bg-secondary/5 border border-secondary/20 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="font-medium text-primary">{skill?.name}</div>
                <div className="text-sm font-semibold text-secondary">{skill?.transferability}%</div>
              </div>
              <p className="text-sm text-text-secondary">{skill?.advantage}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Action Footer */}
      <div className="pt-4 border-t border-border">
        <div className="flex items-center justify-between">
          <div className="text-sm text-text-secondary">
            Ready to bridge the skills gap and transition to {targetRole}?
          </div>
          <Button 
            variant="default" 
            className="btn-brand-accent"
            iconName="Zap"
            iconPosition="left"
          >
            Create Learning Roadmap
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SkillsBridge;