import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SkillsPortfolio = ({ portfolio, onShareBadge, onViewCertificate }) => {
  const getSkillLevelColor = (level) => {
    switch (level) {
      case 'Expert':
        return 'text-purple-600 bg-purple-50 border-purple-200';
      case 'Advanced':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'Intermediate':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'Beginner':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getScoreColor = (score) => {
    if (score >= 90) return 'text-purple-600';
    if (score >= 80) return 'text-blue-600';
    if (score >= 70) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="bg-white rounded-xl shadow-brand border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-heading font-semibold text-primary mb-2">
            Skills Portfolio
          </h3>
          <p className="text-text-secondary">
            Showcase your verified competencies and achievements
          </p>
        </div>
        <Button
          variant="outline"
          iconName="Share2"
          iconPosition="left"
          className="hover:bg-primary hover:text-white"
        >
          Share Portfolio
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {portfolio?.badges?.map((badge) => (
          <div
            key={badge?.id}
            className="relative bg-gradient-to-br from-white to-gray-50 rounded-lg border border-border p-4 hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${getSkillLevelColor(badge?.level)?.replace('text-', 'bg-')?.replace('bg-', 'bg-')?.replace('-600', '-100')}`}>
                  <Icon 
                    name={badge?.icon} 
                    size={20} 
                    className={getSkillLevelColor(badge?.level)?.split(' ')?.[0]}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-primary text-sm">
                    {badge?.skill}
                  </h4>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getSkillLevelColor(badge?.level)}`}>
                    {badge?.level}
                  </span>
                </div>
              </div>
              {badge?.isVerified && (
                <Icon name="BadgeCheck" size={16} className="text-blue-600" />
              )}
            </div>

            <div className="mb-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-text-secondary">Score</span>
                <span className={`text-sm font-semibold ${getScoreColor(badge?.score)}`}>
                  {badge?.score}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${
                    badge?.score >= 90 ? 'bg-purple-600' :
                    badge?.score >= 80 ? 'bg-blue-600' :
                    badge?.score >= 70 ? 'bg-green-600' :
                    badge?.score >= 60 ? 'bg-yellow-600' : 'bg-red-600'
                  }`}
                  style={{ width: `${badge?.score}%` }}
                />
              </div>
            </div>

            <div className="text-xs text-text-secondary mb-3">
              Earned on {badge?.earnedDate}
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                iconName="Share2"
                onClick={() => onShareBadge(badge)}
                className="flex-1 text-xs"
              >
                Share
              </Button>
              {badge?.hasCertificate && (
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="Download"
                  onClick={() => onViewCertificate(badge)}
                  className="flex-1 text-xs"
                >
                  Certificate
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-border pt-6">
        <h4 className="text-lg font-heading font-semibold text-primary mb-4">
          Portfolio Statistics
        </h4>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
            <div className="text-2xl font-bold text-blue-600 mb-1">
              {portfolio?.stats?.totalBadges}
            </div>
            <div className="text-sm text-blue-700">Total Badges</div>
          </div>
          
          <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
            <div className="text-2xl font-bold text-green-600 mb-1">
              {portfolio?.stats?.averageScore}%
            </div>
            <div className="text-sm text-green-700">Average Score</div>
          </div>
          
          <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
            <div className="text-2xl font-bold text-purple-600 mb-1">
              {portfolio?.stats?.expertLevel}
            </div>
            <div className="text-sm text-purple-700">Expert Level</div>
          </div>
          
          <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
            <div className="text-2xl font-bold text-orange-600 mb-1">
              {portfolio?.stats?.certificates}
            </div>
            <div className="text-sm text-orange-700">Certificates</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPortfolio;