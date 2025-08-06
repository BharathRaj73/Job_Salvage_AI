import React from 'react';

import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AssessmentCard = ({ assessment, onStart }) => {
  const getDifficultyColor = (level) => {
    switch (level) {
      case 'Beginner':
        return 'text-green-600 bg-green-50';
      case 'Intermediate':
        return 'text-yellow-600 bg-yellow-50';
      case 'Advanced':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getIconColor = (category) => {
    switch (category) {
      case 'Technical':
        return 'text-blue-600';
      case 'Analytical':
        return 'text-purple-600';
      case 'Creative':
        return 'text-pink-600';
      case 'Leadership':
        return 'text-orange-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-brand border border-border hover:shadow-accent transition-all duration-300 hover-lift overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`p-3 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10`}>
              <Icon 
                name={assessment?.icon} 
                size={24} 
                className={getIconColor(assessment?.category)}
              />
            </div>
            <div>
              <h3 className="text-lg font-heading font-semibold text-primary mb-1">
                {assessment?.title}
              </h3>
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(assessment?.difficulty)}`}>
                {assessment?.difficulty}
              </span>
            </div>
          </div>
          {assessment?.isNew && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-accent text-white">
              New
            </span>
          )}
        </div>

        <p className="text-text-secondary text-sm mb-4 line-clamp-2">
          {assessment?.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-text-secondary">
            <div className="flex items-center space-x-1">
              <Icon name="Clock" size={16} />
              <span>{assessment?.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="HelpCircle" size={16} />
              <span>{assessment?.questions} questions</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Star" size={16} className="text-yellow-500" />
            <span className="text-sm font-medium text-text-primary">
              {assessment?.rating}
            </span>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-text-primary">Skills Covered</span>
            <span className="text-xs text-text-secondary">{assessment?.skills?.length} skills</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {assessment?.skills?.slice(0, 3)?.map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-muted text-text-secondary"
              >
                {skill}
              </span>
            ))}
            {assessment?.skills?.length > 3 && (
              <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-muted text-text-secondary">
                +{assessment?.skills?.length - 3} more
              </span>
            )}
          </div>
        </div>

        {assessment?.completedAt && (
          <div className="mb-4 p-3 bg-success/10 rounded-lg border border-success/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircle" size={16} className="text-success" />
                <span className="text-sm font-medium text-success">Completed</span>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-success">
                  {assessment?.score}%
                </div>
                <div className="text-xs text-text-secondary">
                  {assessment?.completedAt}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center space-x-3">
          <Button
            variant={assessment?.completedAt ? "outline" : "default"}
            fullWidth
            iconName={assessment?.completedAt ? "RotateCcw" : "Play"}
            iconPosition="left"
            onClick={() => onStart(assessment)}
            className={assessment?.completedAt ? "" : "btn-brand-primary"}
          >
            {assessment?.completedAt ? "Retake Assessment" : "Start Assessment"}
          </Button>
          {assessment?.completedAt && (
            <Button
              variant="ghost"
              size="icon"
              iconName="Eye"
              className="flex-shrink-0"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AssessmentCard;