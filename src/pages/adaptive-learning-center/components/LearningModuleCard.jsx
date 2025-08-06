import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LearningModuleCard = ({ module, onStart, onContinue, userProgress }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const progress = userProgress?.[module.id] || 0;
  const isCompleted = progress >= 100;
  const isStarted = progress > 0;

  const getDifficultyColor = (level) => {
    switch (level) {
      case 'Beginner':
        return 'text-success bg-success/10 border-success/20';
      case 'Intermediate':
        return 'text-accent bg-accent/10 border-accent/20';
      case 'Advanced':
        return 'text-destructive bg-destructive/10 border-destructive/20';
      default:
        return 'text-muted-foreground bg-muted border-border';
    }
  };

  const getProviderIcon = (provider) => {
    switch (provider) {
      case 'Coursera':
        return 'GraduationCap';
      case 'LinkedIn Learning':
        return 'Linkedin';
      case 'Udemy':
        return 'Play';
      default:
        return 'BookOpen';
    }
  };

  const getRelevanceColor = (score) => {
    if (score >= 90) return 'text-success';
    if (score >= 70) return 'text-accent';
    return 'text-muted-foreground';
  };

  return (
    <div className="bg-card rounded-xl shadow-brand border border-border hover:shadow-accent transition-all duration-300 hover-lift">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name={getProviderIcon(module.provider)} size={16} className="text-primary" />
              <span className="text-xs font-medium text-primary">{module.provider}</span>
              {module.isRecommended && (
                <div className="flex items-center space-x-1 bg-accent/10 px-2 py-1 rounded-full">
                  <Icon name="Sparkles" size={12} className="text-accent" />
                  <span className="text-xs font-medium text-accent">AI Recommended</span>
                </div>
              )}
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-2 line-clamp-2">
              {module.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {module.description}
            </p>
          </div>
          
          {isCompleted && (
            <div className="flex-shrink-0 ml-4">
              <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center">
                <Icon name="CheckCircle2" size={16} className="text-success" />
              </div>
            </div>
          )}
        </div>

        {/* Progress Bar */}
        {isStarted && (
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-foreground">Progress</span>
              <span className="text-xs text-muted-foreground">{progress}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-gradient-brand h-2 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Module Details */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Icon name="Clock" size={12} />
              <span>{module.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Users" size={12} />
              <span>{module.enrolledCount?.toLocaleString()} enrolled</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Star" size={12} />
              <span>{module.rating}/5</span>
            </div>
          </div>
          
          <div className={`px-2 py-1 rounded-full border text-xs font-medium ${getDifficultyColor(module.difficulty)}`}>
            {module.difficulty}
          </div>
        </div>

        {/* Relevance Score */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Icon name="Target" size={14} className={getRelevanceColor(module.relevanceScore)} />
            <span className="text-sm font-medium text-foreground">Career Relevance</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-16 bg-muted rounded-full h-1.5">
              <div 
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  module.relevanceScore >= 90 ? 'bg-success' : 
                  module.relevanceScore >= 70 ? 'bg-accent' : 'bg-muted-foreground'
                }`}
                style={{ width: `${module.relevanceScore}%` }}
              />
            </div>
            <span className={`text-sm font-medium ${getRelevanceColor(module.relevanceScore)}`}>
              {module.relevanceScore}%
            </span>
          </div>
        </div>

        {/* Skills Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {module.skills?.slice(0, 3)?.map((skill, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-muted text-xs font-medium text-muted-foreground rounded-full"
            >
              {skill}
            </span>
          ))}
          {module.skills?.length > 3 && (
            <span className="px-2 py-1 bg-muted text-xs font-medium text-muted-foreground rounded-full">
              +{module.skills?.length - 3} more
            </span>
          )}
        </div>

        {/* Expandable Content */}
        {isExpanded && (
          <div className="border-t border-border pt-4 mb-4 space-y-3">
            <div>
              <h4 className="text-sm font-medium text-foreground mb-2">What you'll learn:</h4>
              <ul className="space-y-1">
                {module.learningOutcomes?.map((outcome, index) => (
                  <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                    <Icon name="Check" size={12} className="text-success mt-0.5 flex-shrink-0" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-foreground mb-2">Course Structure:</h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Icon name="PlayCircle" size={12} />
                  <span>{module.videoCount} videos</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="FileText" size={12} />
                  <span>{module.articleCount} articles</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="PenTool" size={12} />
                  <span>{module.exerciseCount} exercises</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Award" size={12} />
                  <span>Certificate included</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center space-x-1 text-sm text-primary hover:text-primary/80 transition-colors duration-200"
          >
            <span>{isExpanded ? 'Show less' : 'Show more'}</span>
            <Icon name={isExpanded ? 'ChevronUp' : 'ChevronDown'} size={14} />
          </button>
          
          <div className="flex items-center space-x-2">
            {isCompleted ? (
              <Button variant="outline" size="sm" iconName="RotateCcw" iconPosition="left">
                Review
              </Button>
            ) : isStarted ? (
              <Button 
                variant="default" 
                size="sm" 
                iconName="Play" 
                iconPosition="left"
                onClick={() => onContinue(module.id)}
                className="btn-brand-accent"
              >
                Continue
              </Button>
            ) : (
              <Button 
                variant="default" 
                size="sm" 
                iconName="Play" 
                iconPosition="left"
                onClick={() => onStart(module.id)}
                className="btn-brand-primary"
              >
                Start Learning
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningModuleCard;