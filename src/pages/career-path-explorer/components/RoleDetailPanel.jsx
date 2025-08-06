import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RoleDetailPanel = ({ selectedRole, onClose, onStartTransition }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!selectedRole) return null;

  const mockRoleData = {
    'product-marketing': {
      title: 'Product Marketing Manager',
      description: 'Drive product positioning, messaging, and go-to-market strategies while collaborating with product, sales, and marketing teams.',
      salaryRange: '$85K - $125K',
      compatibility: 85,
      resilience: 'high',
      transitionTime: '3-6 months',
      successProbability: 78,
      requiredSkills: [
        { name: 'Product Positioning', level: 'Advanced', hasSkill: true },
        { name: 'Market Research', level: 'Intermediate', hasSkill: true },
        { name: 'Competitive Analysis', level: 'Advanced', hasSkill: false },
        { name: 'Go-to-Market Strategy', level: 'Advanced', hasSkill: false },
        { name: 'Customer Insights', level: 'Intermediate', hasSkill: true },
        { name: 'Product Analytics', level: 'Intermediate', hasSkill: false }
      ],
      learningPath: [
        { skill: 'Competitive Analysis', estimatedTime: '2-3 weeks', priority: 'high' },
        { skill: 'Go-to-Market Strategy', estimatedTime: '4-6 weeks', priority: 'high' },
        { skill: 'Product Analytics', estimatedTime: '3-4 weeks', priority: 'medium' }
      ],
      successStories: [
        {
          name: 'Sarah Chen',
          previousRole: 'Marketing Manager',
          timeline: '4 months',
          company: 'TechStart Inc.',
          quote: 'The transition was smoother than expected. My marketing background gave me a strong foundation.'
        },
        {
          name: 'Michael Rodriguez',
          previousRole: 'Brand Manager',
          timeline: '5 months',
          company: 'InnovateCorp',
          quote: 'Product marketing combines creativity with data - perfect for someone with my background.'
        }
      ],
      marketDemand: {
        growth: '+32%',
        openings: 1247,
        topCompanies: ['Google', 'Microsoft', 'Salesforce', 'HubSpot', 'Slack']
      }
    }
  };

  const roleData = mockRoleData?.[selectedRole?.id] || {
    title: selectedRole?.title,
    description: 'Detailed information about this role is being analyzed...',
    salaryRange: selectedRole?.salary || 'Salary data pending',
    compatibility: selectedRole?.compatibility || 70,
    resilience: selectedRole?.resilience || 'moderate',
    transitionTime: '4-8 months',
    successProbability: 65,
    requiredSkills: [],
    learningPath: [],
    successStories: [],
    marketDemand: { growth: 'N/A', openings: 0, topCompanies: [] }
  };

  const getSkillColor = (hasSkill) => {
    return hasSkill 
      ? 'text-green-600 bg-green-50 border-green-200' :'text-orange-600 bg-orange-50 border-orange-200';
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-50 border-red-200';
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'low': return 'text-green-600 bg-green-50 border-green-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center">
              <Icon name="Target" size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-heading font-bold text-primary">{roleData?.title}</h2>
              <div className="flex items-center space-x-4 mt-1">
                <span className="text-sm text-text-secondary">{roleData?.salaryRange}</span>
                <div className="flex items-center space-x-1">
                  <Icon name="Shield" size={14} className="text-green-600" />
                  <span className="text-sm text-green-600 capitalize">{roleData?.resilience} resilience</span>
                </div>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <Icon name="X" size={20} />
          </Button>
        </div>

        {/* Compatibility Score */}
        <div className="p-6 bg-gradient-to-r from-secondary/10 to-accent/10 border-b border-border">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-heading font-semibold text-primary mb-2">Compatibility Analysis</h3>
              <p className="text-text-secondary">Based on your marketing background and analytical skills</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-secondary">{roleData?.compatibility}%</div>
              <div className="text-sm text-text-secondary">Match Score</div>
            </div>
          </div>
          
          <div className="mt-4 grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-lg font-semibold text-primary">{roleData?.transitionTime}</div>
              <div className="text-sm text-text-secondary">Transition Time</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-primary">{roleData?.successProbability}%</div>
              <div className="text-sm text-text-secondary">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-green-600">{roleData?.marketDemand?.growth}</div>
              <div className="text-sm text-text-secondary">Market Growth</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border">
          {[
            { id: 'overview', label: 'Overview', icon: 'FileText' },
            { id: 'skills', label: 'Skills Bridge', icon: 'Target' },
            { id: 'learning', label: 'Learning Path', icon: 'BookOpen' },
            { id: 'stories', label: 'Success Stories', icon: 'Users' }
          ]?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium transition-colors duration-200 ${
                activeTab === tab?.id
                  ? 'text-primary border-b-2 border-primary bg-primary/5' :'text-text-secondary hover:text-primary'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span>{tab?.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto max-h-96">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h4 className="font-heading font-semibold text-primary mb-2">Role Description</h4>
                <p className="text-text-secondary leading-relaxed">{roleData?.description}</p>
              </div>
              
              <div>
                <h4 className="font-heading font-semibold text-primary mb-3">Market Demand</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="TrendingUp" size={16} className="text-green-600" />
                      <span className="text-sm font-medium">Growth Rate</span>
                    </div>
                    <div className="text-xl font-bold text-green-600">{roleData?.marketDemand?.growth}</div>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="Briefcase" size={16} className="text-secondary" />
                      <span className="text-sm font-medium">Open Positions</span>
                    </div>
                    <div className="text-xl font-bold text-secondary">{roleData?.marketDemand?.openings?.toLocaleString()}</div>
                  </div>
                </div>
              </div>

              {roleData?.marketDemand?.topCompanies?.length > 0 && (
                <div>
                  <h4 className="font-heading font-semibold text-primary mb-3">Top Hiring Companies</h4>
                  <div className="flex flex-wrap gap-2">
                    {roleData?.marketDemand?.topCompanies?.map((company, index) => (
                      <span key={index} className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                        {company}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="space-y-6">
              <div>
                <h4 className="font-heading font-semibold text-primary mb-3">Skills Assessment</h4>
                <div className="space-y-3">
                  {roleData?.requiredSkills?.map((skill, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Icon 
                          name={skill?.hasSkill ? "CheckCircle" : "Circle"} 
                          size={20} 
                          className={skill?.hasSkill ? "text-green-600" : "text-orange-600"} 
                        />
                        <div>
                          <div className="font-medium text-primary">{skill?.name}</div>
                          <div className="text-sm text-text-secondary">{skill?.level} level required</div>
                        </div>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium border ${getSkillColor(skill?.hasSkill)}`}>
                        {skill?.hasSkill ? 'Have Skill' : 'Need to Learn'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'learning' && (
            <div className="space-y-6">
              <div>
                <h4 className="font-heading font-semibold text-primary mb-3">Recommended Learning Path</h4>
                <div className="space-y-3">
                  {roleData?.learningPath?.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                          <span className="text-sm font-semibold text-secondary">{index + 1}</span>
                        </div>
                        <div>
                          <div className="font-medium text-primary">{item?.skill}</div>
                          <div className="text-sm text-text-secondary">Estimated time: {item?.estimatedTime}</div>
                        </div>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(item?.priority)}`}>
                        {item?.priority} priority
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-accent/10 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Lightbulb" size={16} className="text-accent" />
                  <span className="font-medium text-primary">Pro Tip</span>
                </div>
                <p className="text-sm text-text-secondary">
                  Focus on high-priority skills first. Your existing marketing experience will accelerate learning in product positioning and customer insights.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'stories' && (
            <div className="space-y-6">
              <div>
                <h4 className="font-heading font-semibold text-primary mb-3">Others Like You Who Made This Transition</h4>
                <div className="space-y-4">
                  {roleData?.successStories?.map((story, index) => (
                    <div key={index} className="border border-border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="font-medium text-primary">{story?.name}</div>
                          <div className="text-sm text-text-secondary">{story?.previousRole} → {roleData?.title}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-secondary">{story?.timeline}</div>
                          <div className="text-xs text-text-secondary">transition time</div>
                        </div>
                      </div>
                      <blockquote className="text-sm text-text-secondary italic border-l-4 border-secondary pl-4">
                        "{story?.quote}"
                      </blockquote>
                      <div className="mt-2 text-xs text-text-secondary">
                        Now at {story?.company}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border bg-muted/30">
          <div className="flex items-center justify-between">
            <div className="text-sm text-text-secondary">
              Ready to start your transition to {roleData?.title}?
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" onClick={onClose}>
                Explore More Roles
              </Button>
              <Button 
                variant="default" 
                className="btn-brand-accent"
                iconName="ArrowRight"
                iconPosition="right"
                onClick={() => onStartTransition(selectedRole)}
              >
                Start 30-Day Roadmap
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleDetailPanel;