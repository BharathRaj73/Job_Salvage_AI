import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const MarketPositioning = () => {
  const [activeTab, setActiveTab] = useState('performance');

  const performanceData = [
    { role: 'Software Engineer', yourScore: 85, marketAvg: 72, applications: 45 },
    { role: 'Senior Developer', yourScore: 78, marketAvg: 75, applications: 32 },
    { role: 'Tech Lead', yourScore: 82, marketAvg: 68, applications: 28 },
    { role: 'Product Manager', yourScore: 71, marketAvg: 70, applications: 18 },
    { role: 'Engineering Manager', yourScore: 75, marketAvg: 73, applications: 15 }
  ];

  const competitionData = [
    { name: 'You', value: 85, color: '#319795' },
    { name: 'Top 10%', value: 92, color: '#38a169' },
    { name: 'Average', value: 72, color: '#d69e2e' },
    { name: 'Bottom 25%', value: 58, color: '#e53e3e' }
  ];

  const marketTrends = [
    {
      skill: 'Cloud Computing',
      demand: 'High',
      growth: '+25%',
      yourLevel: 'Intermediate',
      recommendation: 'Strengthen with AWS certification',
      priority: 'high'
    },
    {
      skill: 'Machine Learning',
      demand: 'Very High',
      growth: '+40%',
      yourLevel: 'Beginner',
      recommendation: 'Start with Python ML libraries',
      priority: 'high'
    },
    {
      skill: 'DevOps',
      demand: 'High',
      growth: '+18%',
      yourLevel: 'Advanced',
      recommendation: 'Maintain current expertise',
      priority: 'medium'
    },
    {
      skill: 'Mobile Development',
      demand: 'Medium',
      growth: '+12%',
      yourLevel: 'Intermediate',
      recommendation: 'Consider React Native specialization',
      priority: 'low'
    }
  ];

  const tabs = [
    { id: 'performance', name: 'Resume Performance', icon: 'BarChart3' },
    { id: 'competition', name: 'Market Competition', icon: 'Users' },
    { id: 'trends', name: 'Skill Trends', icon: 'TrendingUp' }
  ];

  const getDemandColor = (demand) => {
    switch (demand?.toLowerCase()) {
      case 'very high': return 'text-success bg-success/10 border-success/20';
      case 'high': return 'text-secondary bg-secondary/10 border-secondary/20';
      case 'medium': return 'text-accent bg-accent/10 border-accent/20';
      default: return 'text-trust bg-muted border-border';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-error bg-error/10 border-error/20';
      case 'medium': return 'text-accent bg-accent/10 border-accent/20';
      default: return 'text-trust bg-muted border-border';
    }
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload?.length) {
      return (
        <div className="bg-white p-3 border border-border rounded-lg shadow-brand">
          <p className="font-medium text-primary mb-2">{label}</p>
          {payload?.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry?.color }}>
              {entry?.dataKey === 'yourScore' ? 'Your Score' : 'Market Average'}: {entry?.value}%
            </p>
          ))}
          <p className="text-xs text-trust mt-1">
            Applications: {payload?.[0]?.payload?.applications || 0}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-xl border border-border p-6 shadow-brand">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-primary mb-1">
            Market Positioning Analysis
          </h3>
          <p className="text-sm text-text-secondary">
            How your resume performs against similar roles
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Icon name="RefreshCw" size={16} className="text-trust" />
          <span className="text-xs text-trust">Updated daily</span>
        </div>
      </div>
      {/* Tab Navigation */}
      <div className="flex space-x-1 mb-6 bg-muted/30 p-1 rounded-lg">
        {tabs?.map((tab) => (
          <Button
            key={tab?.id}
            variant={activeTab === tab?.id ? "default" : "ghost"}
            size="sm"
            iconName={tab?.icon}
            iconPosition="left"
            onClick={() => setActiveTab(tab?.id)}
            className={`flex-1 ${activeTab === tab?.id ? "btn-brand-secondary shadow-sm" : ""}`}
          >
            {tab?.name}
          </Button>
        ))}
      </div>
      {/* Resume Performance Tab */}
      {activeTab === 'performance' && (
        <div className="space-y-6">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis 
                  dataKey="role" 
                  tick={{ fontSize: 12, fill: '#4a5568' }}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis tick={{ fontSize: 12, fill: '#718096' }} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="yourScore" fill="#319795" name="Your Score" radius={[2, 2, 0, 0]} />
                <Bar dataKey="marketAvg" fill="#d69e2e" name="Market Average" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-success/5 rounded-lg border border-success/20">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="TrendingUp" size={16} className="text-success" />
                <span className="text-sm font-medium text-success">Strong Match</span>
              </div>
              <p className="text-xs text-text-secondary">
                Your profile exceeds market average for Software Engineer roles
              </p>
            </div>
            <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Target" size={16} className="text-accent" />
                <span className="text-sm font-medium text-accent">Growth Opportunity</span>
              </div>
              <p className="text-xs text-text-secondary">
                Product Manager roles show potential with skill development
              </p>
            </div>
            <div className="p-4 bg-secondary/5 rounded-lg border border-secondary/20">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Award" size={16} className="text-secondary" />
                <span className="text-sm font-medium text-secondary">Competitive Edge</span>
              </div>
              <p className="text-xs text-text-secondary">
                Tech Lead positions align well with your experience
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Market Competition Tab */}
      {activeTab === 'competition' && (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="h-64">
              <h4 className="font-medium text-primary mb-4">Your Position vs Competition</h4>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={competitionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {competitionData?.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry?.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium text-primary">Competition Analysis</h4>
              {competitionData?.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: item?.color }}
                    />
                    <span className="text-sm font-medium text-primary">{item?.name}</span>
                  </div>
                  <span className="text-sm font-semibold" style={{ color: item?.color }}>
                    {item?.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-secondary/5 rounded-lg border border-secondary/20">
            <div className="flex items-start space-x-3">
              <Icon name="Info" size={20} className="text-secondary flex-shrink-0 mt-0.5" />
              <div>
                <h5 className="font-medium text-secondary mb-2">Market Position Summary</h5>
                <p className="text-sm text-text-secondary">
                  You're performing above market average but have room to reach the top 10%. 
                  Focus on cloud computing and leadership skills to improve your competitive position.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Skill Trends Tab */}
      {activeTab === 'trends' && (
        <div className="space-y-4">
          <h4 className="font-medium text-primary">Market Skill Trends</h4>
          {marketTrends?.map((trend, index) => (
            <div key={index} className="p-4 bg-muted/30 rounded-lg border border-border/50">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h5 className="font-medium text-primary">{trend?.skill}</h5>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getDemandColor(trend?.demand)}`}>
                      {trend?.demand} Demand
                    </span>
                    <span className="text-sm font-medium text-success">{trend?.growth}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-text-secondary">
                    <span>Your Level: <span className="font-medium text-primary">{trend?.yourLevel}</span></span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(trend?.priority)}`}>
                      {trend?.priority} priority
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-text-secondary mb-3">{trend?.recommendation}</p>
              <Button
                variant="outline"
                size="sm"
                iconName="ArrowRight"
                iconPosition="right"
              >
                View Learning Path
              </Button>
            </div>
          ))}
        </div>
      )}
      {/* Action Section */}
      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center justify-between">
          <div>
            <h5 className="font-medium text-primary mb-1">Ready to improve your position?</h5>
            <p className="text-sm text-text-secondary">Get personalized recommendations to boost your market value</p>
          </div>
          <Button
            variant="default"
            iconName="Rocket"
            iconPosition="left"
            className="btn-brand-accent hover-scale"
          >
            Get Action Plan
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MarketPositioning;