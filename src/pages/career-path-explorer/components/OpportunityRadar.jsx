import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const OpportunityRadar = ({ location = "San Francisco, CA" }) => {
  const [activeTab, setActiveTab] = useState('trending');
  const [radarSweep, setRadarSweep] = useState(0);

  const trendingOpportunities = [
    {
      id: 1,
      title: 'AI Product Marketing Manager',
      company: 'TechFlow Inc.',
      location: 'San Francisco, CA',
      salary: '$110K - $150K',
      growth: '+45%',
      urgency: 'high',
      posted: '2 days ago',
      matchScore: 92,
      skills: ['Product Marketing', 'AI/ML', 'Data Analysis']
    },
    {
      id: 2,
      title: 'Growth Marketing Lead',
      company: 'StartupX',
      location: 'San Francisco, CA',
      salary: '$95K - $130K',
      growth: '+38%',
      urgency: 'medium',
      posted: '1 day ago',
      matchScore: 87,
      skills: ['Growth Hacking', 'Analytics', 'A/B Testing']
    },
    {
      id: 3,
      title: 'Digital Marketing Director',
      company: 'Enterprise Corp',
      location: 'San Francisco, CA',
      salary: '$130K - $170K',
      growth: '+28%',
      urgency: 'medium',
      posted: '3 days ago',
      matchScore: 79,
      skills: ['Digital Strategy', 'Team Leadership', 'Budget Management']
    }
  ];

  const emergingFields = [
    {
      id: 1,
      field: 'AI Marketing Automation',
      growth: '+156%',
      avgSalary: '$125K',
      openings: 847,
      description: 'Combining marketing expertise with AI tools for automated campaign optimization'
    },
    {
      id: 2,
      field: 'Sustainability Marketing',
      growth: '+89%',
      avgSalary: '$95K',
      openings: 423,
      description: 'Marketing roles focused on environmental and social responsibility messaging'
    },
    {
      id: 3,
      field: 'Web3 Community Marketing',
      growth: '+134%',
      avgSalary: '$115K',
      openings: 312,
      description: 'Building and engaging communities around blockchain and decentralized products'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRadarSweep(prev => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'high': return 'text-red-600 bg-red-50 border-red-200';
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'low': return 'text-green-600 bg-green-50 border-green-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-brand border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Radar" size={20} className="text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          <div>
            <h3 className="text-xl font-heading font-semibold text-primary">Opportunity Radar</h3>
            <p className="text-sm text-text-secondary">Live market intelligence for {location}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 bg-muted rounded-lg p-1">
          <button
            onClick={() => setActiveTab('trending')}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              activeTab === 'trending' ?'bg-white text-primary shadow-sm' :'text-text-secondary hover:text-primary'
            }`}
          >
            Trending Roles
          </button>
          <button
            onClick={() => setActiveTab('emerging')}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              activeTab === 'emerging' ?'bg-white text-primary shadow-sm' :'text-text-secondary hover:text-primary'
            }`}
          >
            Emerging Fields
          </button>
        </div>
      </div>
      {/* Radar Visualization */}
      <div className="relative w-full h-32 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg mb-6 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 100">
          {/* Radar Grid */}
          <defs>
            <radialGradient id="radarGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
            </radialGradient>
          </defs>
          
          {/* Grid Circles */}
          {[20, 40, 60, 80]?.map(radius => (
            <circle
              key={radius}
              cx="100"
              cy="50"
              r={radius / 2}
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="0.5"
            />
          ))}
          
          {/* Grid Lines */}
          {[0, 45, 90, 135, 180, 225, 270, 315]?.map(angle => (
            <line
              key={angle}
              x1="100"
              y1="50"
              x2={100 + 40 * Math.cos((angle - 90) * Math.PI / 180)}
              y2={50 + 40 * Math.sin((angle - 90) * Math.PI / 180)}
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="0.5"
            />
          ))}
          
          {/* Radar Sweep */}
          <line
            x1="100"
            y1="50"
            x2={100 + 40 * Math.cos((radarSweep - 90) * Math.PI / 180)}
            y2={50 + 40 * Math.sin((radarSweep - 90) * Math.PI / 180)}
            stroke="var(--color-accent)"
            strokeWidth="2"
            opacity="0.8"
          />
          
          {/* Opportunity Blips */}
          {trendingOpportunities?.slice(0, 5)?.map((opp, index) => {
            const angle = (index * 72) + (radarSweep / 5);
            const distance = 15 + (opp?.matchScore / 100) * 25;
            const x = 100 + distance * Math.cos((angle - 90) * Math.PI / 180);
            const y = 50 + distance * Math.sin((angle - 90) * Math.PI / 180);
            
            return (
              <circle
                key={opp?.id}
                cx={x}
                cy={y}
                r="2"
                fill="var(--color-accent)"
                className="animate-pulse"
              />
            );
          })}
        </svg>
        
        <div className="absolute bottom-2 left-2 text-xs text-white/60">
          Scanning market opportunities...
        </div>
        <div className="absolute bottom-2 right-2 text-xs text-white/60">
          {trendingOpportunities?.length} active signals
        </div>
      </div>
      {/* Content Tabs */}
      {activeTab === 'trending' && (
        <div className="space-y-4">
          {trendingOpportunities?.map((opportunity) => (
            <div key={opportunity?.id} className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="font-heading font-semibold text-primary mb-1">{opportunity?.title}</h4>
                  <p className="text-sm text-text-secondary">{opportunity?.company} • {opportunity?.location}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className={`px-2 py-1 rounded-full text-xs font-medium border ${getUrgencyColor(opportunity?.urgency)}`}>
                    {opportunity?.urgency === 'high' ? 'Hot' : opportunity?.urgency === 'medium' ? 'Active' : 'Stable'}
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-primary">{opportunity?.matchScore}%</div>
                    <div className="text-xs text-text-secondary">match</div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1 text-sm text-text-secondary">
                    <Icon name="DollarSign" size={14} />
                    <span>{opportunity?.salary}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-green-600">
                    <Icon name="TrendingUp" size={14} />
                    <span>{opportunity?.growth} growth</span>
                  </div>
                </div>
                <span className="text-xs text-text-secondary">{opportunity?.posted}</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {opportunity?.skills?.map((skill, index) => (
                  <span key={index} className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      {activeTab === 'emerging' && (
        <div className="space-y-4">
          {emergingFields?.map((field) => (
            <div key={field?.id} className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="font-heading font-semibold text-primary mb-1">{field?.field}</h4>
                  <p className="text-sm text-text-secondary">{field?.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-green-600">{field?.growth}</div>
                  <div className="text-xs text-text-secondary">YoY growth</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1 text-sm text-text-secondary">
                    <Icon name="DollarSign" size={14} />
                    <span>{field?.avgSalary} avg</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-text-secondary">
                    <Icon name="Briefcase" size={14} />
                    <span>{field?.openings} openings</span>
                  </div>
                </div>
                <button className="text-sm text-secondary hover:text-secondary/80 font-medium">
                  Explore Field →
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center justify-between text-sm text-text-secondary">
          <div className="flex items-center space-x-2">
            <Icon name="Clock" size={16} />
            <span>Last updated: 2 minutes ago</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="MapPin" size={16} />
            <span>Expand to 50-mile radius</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunityRadar;