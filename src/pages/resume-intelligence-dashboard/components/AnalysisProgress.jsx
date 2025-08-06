import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const AnalysisProgress = ({ isVisible, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const analysisSteps = [
    {
      id: 1,
      title: "Parsing Resume Content",
      description: "Extracting text and structure from your document",
      icon: "FileText",
      duration: 2000
    },
    {
      id: 2,
      title: "Analyzing Skills",
      description: "Identifying technical and soft skills from your experience",
      icon: "Target",
      duration: 3000
    },
    {
      id: 3,
      title: "Identifying Gaps",
      description: "Comparing your profile against market demands",
      icon: "Search",
      duration: 2500
    },
    {
      id: 4,
      title: "Mapping Opportunities",
      description: "Discovering career paths and growth potential",
      icon: "TrendingUp",
      duration: 3500
    },
    {
      id: 5,
      title: "Generating Insights",
      description: "Creating personalized recommendations and action items",
      icon: "Lightbulb",
      duration: 2000
    }
  ];

  useEffect(() => {
    if (!isVisible) {
      setCurrentStep(0);
      setProgress(0);
      return;
    }

    let stepIndex = 0;
    let progressValue = 0;

    const runAnalysis = () => {
      if (stepIndex < analysisSteps?.length) {
        setCurrentStep(stepIndex);
        
        const step = analysisSteps?.[stepIndex];
        const stepProgress = (stepIndex + 1) / analysisSteps?.length * 100;
        
        // Animate progress for current step
        const progressInterval = setInterval(() => {
          progressValue += 2;
          setProgress(Math.min(progressValue, stepProgress));
          
          if (progressValue >= stepProgress) {
            clearInterval(progressInterval);
            stepIndex++;
            
            if (stepIndex >= analysisSteps?.length) {
              setTimeout(() => {
                onComplete();
              }, 500);
            } else {
              setTimeout(runAnalysis, 300);
            }
          }
        }, step?.duration / 50);
      }
    };

    runAnalysis();
  }, [isVisible, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="bg-white rounded-xl border border-border p-8 shadow-brand">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-brand">
          <Icon name="Zap" size={32} className="text-white" />
        </div>
        <h3 className="text-xl font-semibold text-primary mb-2">
          AI Analysis in Progress
        </h3>
        <p className="text-text-secondary">
          Our advanced algorithms are analyzing your career profile
        </p>
      </div>
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-primary">Overall Progress</span>
          <span className="text-sm font-medium text-secondary">{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
          <div 
            className="h-full bg-gradient-brand transition-all duration-300 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      {/* Analysis Steps */}
      <div className="space-y-4">
        {analysisSteps?.map((step, index) => (
          <div
            key={step?.id}
            className={`flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 ${
              index === currentStep
                ? 'bg-secondary/10 border border-secondary/20'
                : index < currentStep
                ? 'bg-success/5 border border-success/10' :'bg-muted/30 border border-transparent'
            }`}
          >
            <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              index === currentStep
                ? 'bg-secondary text-white animate-pulse'
                : index < currentStep
                ? 'bg-success text-white' :'bg-muted text-trust'
            }`}>
              {index < currentStep ? (
                <Icon name="Check" size={20} />
              ) : (
                <Icon name={step?.icon} size={20} />
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className={`font-medium transition-colors duration-300 ${
                index === currentStep
                  ? 'text-secondary'
                  : index < currentStep
                  ? 'text-success' :'text-trust'
              }`}>
                {step?.title}
              </h4>
              <p className="text-sm text-text-secondary mt-1">
                {step?.description}
              </p>
            </div>
            
            {index === currentStep && (
              <div className="flex-shrink-0">
                <div className="w-5 h-5 border-2 border-secondary border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-8 p-4 bg-accent/10 rounded-lg border border-accent/20">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={20} className="text-accent flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-accent mb-1">
              AI Transparency
            </p>
            <p className="text-xs text-text-secondary">
              Our analysis combines natural language processing, skill taxonomy matching, and market trend data to provide accurate career insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisProgress;