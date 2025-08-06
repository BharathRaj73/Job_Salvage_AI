import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ResilienceScore = ({ score = 78 }) => {
  const [animatedScore, setAnimatedScore] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      let current = 0;
      const increment = score / 50;
      const interval = setInterval(() => {
        current += increment;
        if (current >= score) {
          setAnimatedScore(score);
          clearInterval(interval);
        } else {
          setAnimatedScore(Math.floor(current));
        }
      }, 20);
    }, 500);

    return () => clearTimeout(timer);
  }, [score]);

  const getScoreColor = (score) => {
    if (score >= 80) return { color: 'text-success', bg: 'bg-success', ring: 'ring-success' };
    if (score >= 60) return { color: 'text-accent', bg: 'bg-accent', ring: 'ring-accent' };
    return { color: 'text-error', bg: 'bg-error', ring: 'ring-error' };
  };

  const getScoreLevel = (score) => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    return 'Needs Improvement';
  };

  const scoreStyle = getScoreColor(score);
  const circumference = 2 * Math.PI * 45;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (animatedScore / 100) * circumference;

  const recommendations = [
    {
      id: 1,
      title: "Diversify Technical Skills",
      description: "Add cloud computing certifications to increase market value",
      impact: "+8 points",
      priority: "high",
      icon: "Cloud"
    },
    {
      id: 2,
      title: "Strengthen Leadership Profile",
      description: "Highlight team management and project leadership experience",
      impact: "+5 points",
      priority: "medium",
      icon: "Users"
    },
    {
      id: 3,
      title: "Industry Networking",
      description: "Build connections in emerging tech sectors",
      impact: "+4 points",
      priority: "medium",
      icon: "Network"
    },
    {
      id: 4,
      title: "Continuous Learning",
      description: "Complete relevant online courses and certifications",
      impact: "+6 points",
      priority: "high",
      icon: "BookOpen"
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-error bg-error/10 border-error/20';
      case 'medium': return 'text-accent bg-accent/10 border-accent/20';
      default: return 'text-trust bg-muted border-border';
    }
  };

  return (
    <div className="bg-white rounded-xl border border-border p-6 shadow-brand">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-primary mb-1">
            Career Resilience Score
          </h3>
          <p className="text-sm text-text-secondary">
            Your adaptability in changing markets
          </p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          iconName={showDetails ? "ChevronUp" : "ChevronDown"}
          iconPosition="right"
          onClick={() => setShowDetails(!showDetails)}
        >
          Details
        </Button>
      </div>
      <div className="flex items-center justify-center mb-8">
        <div className="relative">
          {/* Circular Progress */}
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
            {/* Background Circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#e2e8f0"
              strokeWidth="8"
              fill="none"
            />
            {/* Progress Circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              className={`transition-all duration-1000 ease-out ${scoreStyle?.color}`}
            />
          </svg>
          
          {/* Score Display */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className={`text-3xl font-bold ${scoreStyle?.color}`}>
                {animatedScore}
              </div>
              <div className="text-xs text-trust font-medium">
                {getScoreLevel(score)}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Score Breakdown */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center p-3 bg-muted/30 rounded-lg">
          <div className="text-lg font-semibold text-success">85%</div>
          <div className="text-xs text-trust">Skills Match</div>
        </div>
        <div className="text-center p-3 bg-muted/30 rounded-lg">
          <div className="text-lg font-semibold text-accent">72%</div>
          <div className="text-xs text-trust">Adaptability</div>
        </div>
        <div className="text-center p-3 bg-muted/30 rounded-lg">
          <div className="text-lg font-semibold text-secondary">76%</div>
          <div className="text-xs text-trust">Market Demand</div>
        </div>
      </div>
      {/* Detailed Recommendations */}
      {showDetails && (
        <div className="space-y-4 animate-fade-in">
          <h4 className="font-medium text-primary mb-3">Improvement Recommendations</h4>
          {recommendations?.map((rec) => (
            <div key={rec?.id} className="p-4 bg-muted/30 rounded-lg border border-border/50">
              <div className="flex items-start space-x-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${scoreStyle?.bg}/10`}>
                  <Icon name={rec?.icon} size={16} className={scoreStyle?.color} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h5 className="font-medium text-primary text-sm">{rec?.title}</h5>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(rec?.priority)}`}>
                        {rec?.priority}
                      </span>
                      <span className="text-xs font-medium text-success">{rec?.impact}</span>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary">{rec?.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Action Button */}
      <div className="mt-6 pt-4 border-t border-border">
        <Button
          variant="default"
          fullWidth
          iconName="Target"
          iconPosition="left"
          className="btn-brand-accent hover-scale"
        >
          Create Improvement Plan
        </Button>
      </div>
      {/* AI Explanation */}
      <div className="mt-4 p-3 bg-accent/5 rounded-lg border border-accent/20">
        <div className="flex items-start space-x-2">
          <Icon name="Info" size={16} className="text-accent flex-shrink-0 mt-0.5" />
          <p className="text-xs text-text-secondary">
            This score is calculated using 15+ factors including skill relevance, market demand, 
            industry growth, and career progression potential.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResilienceScore;