import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AssessmentInsights = ({ insights, onExploreCareer }) => {
  const getMarketDemandColor = (demand) => {
    switch (demand) {
      case 'Very High':
        return 'text-green-600 bg-green-50';
      case 'High':
        return 'text-blue-600 bg-blue-50';
      case 'Medium':
        return 'text-yellow-600 bg-yellow-50';
      case 'Low':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getSalaryTrendIcon = (trend) => {
    switch (trend) {
      case 'increasing':
        return 'TrendingUp';
      case 'stable':
        return 'Minus';
      case 'decreasing':
        return 'TrendingDown';
      default:
        return 'Minus';
    }
  };

  const getSalaryTrendColor = (trend) => {
    switch (trend) {
      case 'increasing':
        return 'text-green-600';
      case 'stable':
        return 'text-blue-600';
      case 'decreasing':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-brand border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-heading font-semibold text-primary mb-2">
            Assessment Insights
          </h3>
          <p className="text-text-secondary">
            Discover how your skills connect to career opportunities
          </p>
        </div>
        <Button
          variant="outline"
          iconName="BarChart3"
          iconPosition="left"
          className="hover:bg-primary hover:text-white"
        >
          View Full Report
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {insights?.skillConnections?.map((skill) => (
          <div
            key={skill?.id}
            className="bg-gradient-to-br from-gray-50 to-white rounded-lg border border-border p-5 hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Icon name={skill?.icon} size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">
                    {skill?.name}
                  </h4>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getMarketDemandColor(skill?.marketDemand)}`}>
                    {skill?.marketDemand} Demand
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-primary">
                  {skill?.yourScore}%
                </div>
                <div className="text-xs text-text-secondary">Your Score</div>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-text-primary">
                  Salary Impact
                </span>
                <div className="flex items-center space-x-1">
                  <Icon 
                    name={getSalaryTrendIcon(skill?.salaryTrend)} 
                    size={14} 
                    className={getSalaryTrendColor(skill?.salaryTrend)}
                  />
                  <span className={`text-sm font-medium ${getSalaryTrendColor(skill?.salaryTrend)}`}>
                    {skill?.salaryRange}
                  </span>
                </div>
              </div>
              <div className="text-sm text-text-secondary mb-3">
                {skill?.salaryDescription}
              </div>
            </div>

            <div className="mb-4">
              <h5 className="text-sm font-medium text-text-primary mb-2">
                Related Career Paths
              </h5>
              <div className="flex flex-wrap gap-2">
                {skill?.careerPaths?.slice(0, 3)?.map((path, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-secondary/10 text-secondary cursor-pointer hover:bg-secondary/20 transition-colors"
                    onClick={() => onExploreCareer(path)}
                  >
                    {path}
                  </span>
                ))}
                {skill?.careerPaths?.length > 3 && (
                  <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-muted text-text-secondary">
                    +{skill?.careerPaths?.length - 3} more
                  </span>
                )}
              </div>
            </div>

            <Button
              variant="ghost"
              size="sm"
              iconName="ArrowRight"
              iconPosition="right"
              onClick={() => onExploreCareer(skill?.name)}
              className="w-full justify-between text-primary hover:bg-primary/10"
            >
              Explore Opportunities
            </Button>
          </div>
        ))}
      </div>
      <div className="border-t border-border pt-6">
        <h4 className="text-lg font-heading font-semibold text-primary mb-4">
          Market Intelligence Summary
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-2">
              <Icon name="TrendingUp" size={20} className="text-blue-600" />
              <span className="font-semibold text-blue-700">Growing Skills</span>
            </div>
            <div className="text-2xl font-bold text-blue-600 mb-1">
              {insights?.marketSummary?.growingSkills}
            </div>
            <div className="text-sm text-blue-700">
              Skills in high demand
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-2">
              <Icon name="DollarSign" size={20} className="text-green-600" />
              <span className="font-semibold text-green-700">Avg. Salary Boost</span>
            </div>
            <div className="text-2xl font-bold text-green-600 mb-1">
              {insights?.marketSummary?.avgSalaryBoost}
            </div>
            <div className="text-sm text-green-700">
              With skill improvement
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-2">
              <Icon name="Target" size={20} className="text-purple-600" />
              <span className="font-semibold text-purple-700">Career Paths</span>
            </div>
            <div className="text-2xl font-bold text-purple-600 mb-1">
              {insights?.marketSummary?.careerPaths}
            </div>
            <div className="text-sm text-purple-700">
              Available opportunities
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentInsights;