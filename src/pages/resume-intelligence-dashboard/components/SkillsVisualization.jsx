import React, { useState } from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Legend } from 'recharts';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SkillsVisualization = ({ skillsData }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Skills', icon: 'Target' },
    { id: 'technical', name: 'Technical', icon: 'Code' },
    { id: 'leadership', name: 'Leadership', icon: 'Users' },
    { id: 'communication', name: 'Communication', icon: 'MessageCircle' },
    { id: 'analytical', name: 'Analytical', icon: 'BarChart3' }
  ];

  const mockSkillsData = [
    {
      skill: 'JavaScript',
      current: 85,
      market: 90,
      category: 'technical',
      trend: 'high'
    },
    {
      skill: 'Project Management',
      current: 78,
      market: 85,
      category: 'leadership',
      trend: 'stable'
    },
    {
      skill: 'Data Analysis',
      current: 72,
      market: 88,
      category: 'analytical',
      trend: 'high'
    },
    {
      skill: 'Team Leadership',
      current: 80,
      market: 82,
      category: 'leadership',
      trend: 'stable'
    },
    {
      skill: 'Public Speaking',
      current: 65,
      market: 75,
      category: 'communication',
      trend: 'growing'
    },
    {
      skill: 'React',
      current: 88,
      market: 92,
      category: 'technical',
      trend: 'high'
    },
    {
      skill: 'Strategic Planning',
      current: 70,
      market: 80,
      category: 'analytical',
      trend: 'stable'
    },
    {
      skill: 'Client Relations',
      current: 82,
      market: 78,
      category: 'communication',
      trend: 'stable'
    }
  ];

  const filteredData = selectedCategory === 'all' 
    ? mockSkillsData 
    : mockSkillsData?.filter(skill => skill?.category === selectedCategory);

  const getSkillGap = (current, market) => {
    const gap = market - current;
    if (gap <= 5) return { level: 'minimal', color: 'text-success', bg: 'bg-success/10' };
    if (gap <= 15) return { level: 'moderate', color: 'text-accent', bg: 'bg-accent/10' };
    return { level: 'significant', color: 'text-error', bg: 'bg-error/10' };
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'high': return 'TrendingUp';
      case 'growing': return 'ArrowUp';
      case 'stable': return 'Minus';
      default: return 'TrendingUp';
    }
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'high': return 'text-success';
      case 'growing': return 'text-secondary';
      case 'stable': return 'text-trust';
      default: return 'text-trust';
    }
  };

  return (
    <div className="bg-white rounded-xl border border-border p-6 shadow-brand">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-primary mb-1">
            Skills Visualization
          </h3>
          <p className="text-sm text-text-secondary">
            Your competencies vs. market demand
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Icon name="Info" size={16} className="text-trust" />
          <span className="text-xs text-trust">Hover for details</span>
        </div>
      </div>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories?.map((category) => (
          <Button
            key={category?.id}
            variant={selectedCategory === category?.id ? "default" : "outline"}
            size="sm"
            iconName={category?.icon}
            iconPosition="left"
            onClick={() => setSelectedCategory(category?.id)}
            className={selectedCategory === category?.id ? "btn-brand-secondary" : ""}
          >
            {category?.name}
          </Button>
        ))}
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Radar Chart */}
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={filteredData}>
              <PolarGrid stroke="#e2e8f0" />
              <PolarAngleAxis 
                dataKey="skill" 
                tick={{ fontSize: 12, fill: '#4a5568' }}
                className="text-xs"
              />
              <PolarRadiusAxis 
                angle={90} 
                domain={[0, 100]} 
                tick={{ fontSize: 10, fill: '#718096' }}
                tickCount={5}
              />
              <Radar
                name="Your Skills"
                dataKey="current"
                stroke="#319795"
                fill="#319795"
                fillOpacity={0.2}
                strokeWidth={2}
              />
              <Radar
                name="Market Demand"
                dataKey="market"
                stroke="#d69e2e"
                fill="#d69e2e"
                fillOpacity={0.1}
                strokeWidth={2}
                strokeDasharray="5 5"
              />
              <Legend 
                wrapperStyle={{ fontSize: '12px' }}
                iconType="line"
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Skills List */}
        <div className="space-y-3">
          <h4 className="font-medium text-primary mb-4">Skill Breakdown</h4>
          <div className="max-h-64 overflow-y-auto space-y-3">
            {filteredData?.map((skill, index) => {
              const gap = getSkillGap(skill?.current, skill?.market);
              return (
                <div key={index} className="p-3 bg-muted/30 rounded-lg border border-border/50">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-primary text-sm">{skill?.skill}</span>
                      <Icon 
                        name={getTrendIcon(skill?.trend)} 
                        size={14} 
                        className={getTrendColor(skill?.trend)}
                      />
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${gap?.bg} ${gap?.color}`}>
                      {gap?.level} gap
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-trust">Your Level</span>
                      <span className="font-medium text-secondary">{skill?.current}%</span>
                    </div>
                    <div className="w-full bg-border rounded-full h-1.5">
                      <div 
                        className="h-full bg-secondary rounded-full transition-all duration-300"
                        style={{ width: `${skill?.current}%` }}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-trust">Market Demand</span>
                      <span className="font-medium text-accent">{skill?.market}%</span>
                    </div>
                    <div className="w-full bg-border rounded-full h-1.5">
                      <div 
                        className="h-full bg-accent rounded-full transition-all duration-300"
                        style={{ width: `${skill?.market}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Insights */}
      <div className="mt-6 p-4 bg-secondary/5 rounded-lg border border-secondary/20">
        <div className="flex items-start space-x-3">
          <Icon name="Lightbulb" size={20} className="text-secondary flex-shrink-0 mt-0.5" />
          <div>
            <h5 className="font-medium text-secondary mb-2">AI Insights</h5>
            <ul className="text-sm text-text-secondary space-y-1">
              <li>• Your technical skills are well-aligned with market demands</li>
              <li>• Consider strengthening data analysis capabilities for better positioning</li>
              <li>• Public speaking skills show growth potential in your field</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsVisualization;