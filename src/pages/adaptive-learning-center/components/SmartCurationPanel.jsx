import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SmartCurationPanel = ({ recommendations, filters, onFilterChange, onRefresh }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const filterOptions = {
    provider: ['All Providers', 'Coursera', 'LinkedIn Learning', 'Udemy', 'edX', 'Pluralsight'],
    difficulty: ['All Levels', 'Beginner', 'Intermediate', 'Advanced'],
    duration: ['Any Duration', 'Under 2 hours', '2-10 hours', '10-40 hours', '40+ hours'],
    type: ['All Types', 'Video Course', 'Interactive', 'Reading', 'Project-based'],
    certification: ['All', 'With Certificate', 'No Certificate Required']
  };

  const getRecommendationIcon = (type) => {
    switch (type) {
      case 'skill_gap':
        return 'Target';
      case 'career_growth':
        return 'TrendingUp';
      case 'market_demand':
        return 'BarChart3';
      case 'peer_popular':
        return 'Users';
      default:
        return 'Sparkles';
    }
  };

  const getRecommendationColor = (type) => {
    switch (type) {
      case 'skill_gap':
        return 'text-destructive bg-destructive/10 border-destructive/20';
      case 'career_growth':
        return 'text-success bg-success/10 border-success/20';
      case 'market_demand':
        return 'text-accent bg-accent/10 border-accent/20';
      case 'peer_popular':
        return 'text-primary bg-primary/10 border-primary/20';
      default:
        return 'text-muted-foreground bg-muted border-border';
    }
  };

  const getRecommendationLabel = (type) => {
    switch (type) {
      case 'skill_gap':
        return 'Skill Gap';
      case 'career_growth':
        return 'Career Growth';
      case 'market_demand':
        return 'High Demand';
      case 'peer_popular':
        return 'Peer Favorite';
      default:
        return 'Recommended';
    }
  };

  return (
    <div className="bg-card rounded-xl shadow-brand border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-accent/10 rounded-lg">
            <Icon name="Sparkles" size={20} className="text-accent" />
          </div>
          <div>
            <h2 className="text-xl font-heading font-semibold text-foreground">Smart Curation</h2>
            <p className="text-sm text-muted-foreground">AI-powered course recommendations</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            iconName="RefreshCw"
            iconPosition="left"
            onClick={onRefresh}
          >
            Refresh
          </Button>
          <Button
            variant="ghost"
            size="sm"
            iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            Filters
          </Button>
        </div>
      </div>
      {/* Filters Panel */}
      {isExpanded && (
        <div className="mb-6 p-4 bg-muted/50 rounded-lg border border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(filterOptions)?.map(([key, options]) => (
              <div key={key}>
                <label className="text-xs font-medium text-foreground mb-2 block capitalize">
                  {key?.replace('_', ' ')}
                </label>
                <select
                  value={filters?.[key] || options?.[0]}
                  onChange={(e) => onFilterChange({ ...filters, [key]: e?.target?.value })}
                  className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
          
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
            <span className="text-sm text-muted-foreground">
              {recommendations?.length} courses match your criteria
            </span>
            <Button
              variant="outline"
              size="sm"
              iconName="X"
              iconPosition="left"
              onClick={() => onFilterChange({})}
            >
              Clear Filters
            </Button>
          </div>
        </div>
      )}
      {/* Recommendation Categories */}
      <div className="space-y-6">
        {Object.entries(
          recommendations?.reduce((acc, rec) => {
            const type = rec?.recommendationType;
            if (!acc?.[type]) acc[type] = [];
            acc?.[type]?.push(rec);
            return acc;
          }, {})
        )?.map(([type, recs]) => (
          <div key={type}>
            <div className="flex items-center space-x-3 mb-4">
              <div className={`p-2 rounded-lg border ${getRecommendationColor(type)}`}>
                <Icon name={getRecommendationIcon(type)} size={16} />
              </div>
              <div>
                <h3 className="font-medium text-foreground">{getRecommendationLabel(type)}</h3>
                <p className="text-sm text-muted-foreground">
                  {type === 'skill_gap' && 'Fill critical gaps in your skill set'}
                  {type === 'career_growth' && 'Accelerate your career advancement'}
                  {type === 'market_demand' && 'Learn high-demand skills in your field'}
                  {type === 'peer_popular' && 'Popular among professionals like you'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recs?.slice(0, 4)?.map((rec) => (
                <div key={rec?.id} className="bg-background rounded-lg border border-border p-4 hover-lift">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground mb-1 line-clamp-2">
                        {rec?.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">{rec?.provider}</p>
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-accent ml-3">
                      <Icon name="Star" size={12} />
                      <span>{rec?.relevanceScore}%</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Icon name="Clock" size={12} />
                        <span>{rec?.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="BarChart3" size={12} />
                        <span>{rec?.difficulty}</span>
                      </div>
                    </div>
                    {rec?.certification && (
                      <div className="flex items-center space-x-1 text-success">
                        <Icon name="Award" size={12} />
                        <span>Certificate</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {rec?.skills?.slice(0, 2)?.map((skill, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-muted text-xs font-medium text-muted-foreground rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="Plus"
                      iconPosition="left"
                    >
                      Add to Path
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {recs?.length > 4 && (
              <div className="text-center mt-4">
                <Button variant="ghost" iconName="ChevronDown" iconPosition="right">
                  View {recs?.length - 4} more {getRecommendationLabel(type)?.toLowerCase()} courses
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* AI Insights */}
      <div className="mt-6 p-4 bg-gradient-brand rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Brain" size={20} className="text-white flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-medium text-white mb-2">AI Insight</h4>
            <p className="text-sm text-white/90">
              Based on your career goals and current skill gaps, focusing on data analysis and 
              machine learning courses will give you the highest ROI. The job market shows 
              34% growth in these areas for your target roles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartCurationPanel;