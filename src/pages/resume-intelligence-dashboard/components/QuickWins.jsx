import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuickWins = () => {
  const [completedWins, setCompletedWins] = useState(new Set());

  const quickWins = [
    {
      id: 1,
      title: "Add Quantified Achievements",
      description: "Include specific numbers and percentages in your accomplishments",
      impact: "+12 points",
      timeToComplete: "15 min",
      difficulty: "Easy",
      category: "Content",
      icon: "BarChart3",
      example: "Instead of \'Improved team efficiency\' write \'Improved team efficiency by 35% through process optimization'",
      priority: "high"
    },
    {
      id: 2,
      title: "Optimize Keywords",
      description: "Include industry-relevant keywords that ATS systems look for",
      impact: "+8 points",
      timeToComplete: "20 min",
      difficulty: "Easy",
      category: "SEO",
      icon: "Search",
      example: "Add keywords like 'Agile methodology', 'Cross-functional collaboration', 'Data-driven decisions'",
      priority: "high"
    },
    {
      id: 3,
      title: "Update Skills Section",
      description: "Add trending technologies and remove outdated ones",
      impact: "+6 points",
      timeToComplete: "10 min",
      difficulty: "Easy",
      category: "Skills",
      icon: "Code",
      example: "Add: React 18, TypeScript, Docker. Remove: jQuery, Flash, Internet Explorer support",
      priority: "medium"
    },
    {
      id: 4,
      title: "Improve Action Verbs",
      description: "Replace weak verbs with powerful action words",
      impact: "+5 points",
      timeToComplete: "25 min",
      difficulty: "Medium",
      category: "Content",
      icon: "Zap",
      example: "Replace 'Responsible for' with 'Led', 'Managed', 'Orchestrated', 'Spearheaded'",
      priority: "medium"
    },
    {
      id: 5,
      title: "Add Professional Summary",
      description: "Create a compelling 2-3 line summary at the top",
      impact: "+10 points",
      timeToComplete: "30 min",
      difficulty: "Medium",
      category: "Structure",
      icon: "FileText",
      example: "Senior Software Engineer with 5+ years building scalable web applications, leading cross-functional teams, and driving 40% performance improvements",
      priority: "high"
    },
    {
      id: 6,
      title: "Format Consistency",
      description: "Ensure consistent formatting, fonts, and spacing throughout",
      impact: "+4 points",
      timeToComplete: "15 min",
      difficulty: "Easy",
      category: "Format",
      icon: "Layout",
      example: "Use consistent bullet points, date formats (MM/YYYY), and section headers",
      priority: "low"
    }
  ];

  const handleCompleteWin = (winId) => {
    setCompletedWins(prev => new Set([...prev, winId]));
  };

  const handleUndoWin = (winId) => {
    setCompletedWins(prev => {
      const newSet = new Set(prev);
      newSet?.delete(winId);
      return newSet;
    });
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty?.toLowerCase()) {
      case 'easy': return 'text-success bg-success/10 border-success/20';
      case 'medium': return 'text-accent bg-accent/10 border-accent/20';
      case 'hard': return 'text-error bg-error/10 border-error/20';
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

  const getCategoryColor = (category) => {
    const colors = {
      'Content': 'text-primary bg-primary/10',
      'SEO': 'text-secondary bg-secondary/10',
      'Skills': 'text-accent bg-accent/10',
      'Structure': 'text-success bg-success/10',
      'Format': 'text-trust bg-muted'
    };
    return colors?.[category] || 'text-trust bg-muted';
  };

  const totalImpact = quickWins?.reduce((sum, win) => {
    if (completedWins?.has(win?.id)) {
      return sum + parseInt(win?.impact?.replace('+', '')?.replace(' points', ''));
    }
    return sum;
  }, 0);

  const completionRate = (completedWins?.size / quickWins?.length) * 100;

  return (
    <div className="bg-white rounded-xl border border-border p-6 shadow-brand">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-primary mb-1">
            Quick Wins
          </h3>
          <p className="text-sm text-text-secondary">
            Immediate improvements to boost your resilience score
          </p>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-accent">+{totalImpact} points</div>
          <div className="text-xs text-trust">earned so far</div>
        </div>
      </div>
      {/* Progress Overview */}
      <div className="mb-6 p-4 bg-gradient-brand/5 rounded-lg border border-secondary/20">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-primary">Progress</span>
          <span className="text-sm font-medium text-secondary">{Math.round(completionRate)}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
          <div 
            className="h-full bg-gradient-brand transition-all duration-300 ease-out rounded-full"
            style={{ width: `${completionRate}%` }}
          />
        </div>
        <div className="flex items-center justify-between mt-2 text-xs text-trust">
          <span>{completedWins?.size} of {quickWins?.length} completed</span>
          <span>Potential: +{quickWins?.reduce((sum, win) => sum + parseInt(win?.impact?.replace('+', '')?.replace(' points', '')), 0)} points</span>
        </div>
      </div>
      {/* Quick Wins List */}
      <div className="space-y-4">
        {quickWins?.map((win) => {
          const isCompleted = completedWins?.has(win?.id);
          
          return (
            <div
              key={win?.id}
              className={`p-4 rounded-lg border transition-all duration-200 ${
                isCompleted 
                  ? 'bg-success/5 border-success/20 opacity-75' :'bg-muted/30 border-border/50 hover:bg-muted/50'
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  isCompleted ? 'bg-success text-white' : 'bg-primary/10 text-primary'
                }`}>
                  {isCompleted ? (
                    <Icon name="Check" size={20} />
                  ) : (
                    <Icon name={win?.icon} size={20} />
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className={`font-medium ${isCompleted ? 'text-success line-through' : 'text-primary'}`}>
                      {win?.title}
                    </h4>
                    <div className="flex items-center space-x-2 ml-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(win?.priority)}`}>
                        {win?.priority}
                      </span>
                      <span className="text-sm font-bold text-accent">{win?.impact}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-text-secondary mb-3">{win?.description}</p>
                  
                  <div className="flex items-center space-x-4 mb-3 text-xs">
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={12} className="text-trust" />
                      <span className="text-trust">{win?.timeToComplete}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full font-medium border ${getDifficultyColor(win?.difficulty)}`}>
                      {win?.difficulty}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(win?.category)}`}>
                      {win?.category}
                    </span>
                  </div>
                  
                  <div className="p-3 bg-accent/5 rounded-lg border border-accent/20 mb-3">
                    <div className="flex items-start space-x-2">
                      <Icon name="Lightbulb" size={14} className="text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-medium text-accent mb-1">Example:</p>
                        <p className="text-xs text-text-secondary">{win?.example}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {isCompleted ? (
                      <Button
                        variant="outline"
                        size="sm"
                        iconName="RotateCcw"
                        iconPosition="left"
                        onClick={() => handleUndoWin(win?.id)}
                      >
                        Mark as Incomplete
                      </Button>
                    ) : (
                      <Button
                        variant="default"
                        size="sm"
                        iconName="Check"
                        iconPosition="left"
                        onClick={() => handleCompleteWin(win?.id)}
                        className="btn-brand-secondary"
                      >
                        Mark as Complete
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      iconName="ExternalLink"
                      iconPosition="right"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* Summary */}
      {completedWins?.size > 0 && (
        <div className="mt-6 p-4 bg-success/5 rounded-lg border border-success/20">
          <div className="flex items-center space-x-3">
            <Icon name="Award" size={20} className="text-success" />
            <div>
              <h5 className="font-medium text-success mb-1">Great Progress!</h5>
              <p className="text-sm text-text-secondary">
                You've completed {completedWins?.size} improvements and earned {totalImpact} resilience points. 
                Keep going to maximize your career potential!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickWins;