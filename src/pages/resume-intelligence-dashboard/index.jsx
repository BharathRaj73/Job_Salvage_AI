import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

// Import components
import UploadZone from './components/UploadZone';
import AnalysisProgress from './components/AnalysisProgress';
import SkillsVisualization from './components/SkillsVisualization';
import ResilienceScore from './components/ResilienceScore';
import HiddenStrengths from './components/HiddenStrengths';
import MarketPositioning from './components/MarketPositioning';
import QuickWins from './components/QuickWins';

const ResumeIntelligenceDashboard = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleFileUpload = (file) => {
    setUploadedFile(file);
    setIsAnalyzing(true);
    setAnalysisComplete(false);
    setShowResults(false);
  };

  const handleAnalysisComplete = () => {
    setIsAnalyzing(false);
    setAnalysisComplete(true);
    setTimeout(() => {
      setShowResults(true);
    }, 500);
  };

  const handleStartOver = () => {
    setUploadedFile(null);
    setIsAnalyzing(false);
    setAnalysisComplete(false);
    setShowResults(false);
  };

  // Mock skills data for visualization
  const mockSkillsData = [
    { skill: 'JavaScript', current: 85, market: 90, category: 'technical' },
    { skill: 'Project Management', current: 78, market: 85, category: 'leadership' },
    { skill: 'Data Analysis', current: 72, market: 88, category: 'analytical' },
    { skill: 'Team Leadership', current: 80, market: 82, category: 'leadership' },
    { skill: 'Public Speaking', current: 65, market: 75, category: 'communication' },
    { skill: 'React', current: 88, market: 92, category: 'technical' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-12">
        <div className="container-brand">
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-secondary/10 rounded-full text-secondary font-medium text-sm mb-4">
              <Icon name="Zap" size={16} />
              <span>AI-Powered Analysis</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
              Resume Intelligence Dashboard
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Transform your resume into a strategic career asset with AI-powered insights, 
              skill gap analysis, and personalized improvement recommendations.
            </p>
          </div>

          {/* Upload Section */}
          {!showResults && (
            <div className="max-w-2xl mx-auto mb-12">
              <UploadZone 
                onFileUpload={handleFileUpload}
                isAnalyzing={isAnalyzing}
              />
            </div>
          )}

          {/* Analysis Progress */}
          {isAnalyzing && (
            <div className="max-w-2xl mx-auto mb-12">
              <AnalysisProgress 
                isVisible={isAnalyzing}
                onComplete={handleAnalysisComplete}
              />
            </div>
          )}

          {/* Results Dashboard */}
          {showResults && (
            <div className="space-y-8 animate-fade-in">
              {/* Header with file info and actions */}
              <div className="flex items-center justify-between p-6 bg-white rounded-xl border border-border shadow-brand">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                    <Icon name="FileText" size={24} className="text-success" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-primary">
                      Analysis Complete
                    </h2>
                    <p className="text-sm text-text-secondary">
                      {uploadedFile?.name} • Analyzed on {new Date()?.toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Download"
                    iconPosition="left"
                  >
                    Export Report
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="RotateCcw"
                    iconPosition="left"
                    onClick={handleStartOver}
                  >
                    Analyze New Resume
                  </Button>
                </div>
              </div>

              {/* Main Dashboard Grid */}
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left Column - Primary Insights */}
                <div className="lg:col-span-2 space-y-8">
                  <ResilienceScore score={78} />
                  <SkillsVisualization skillsData={mockSkillsData} />
                  <MarketPositioning />
                </div>

                {/* Right Column - Secondary Insights */}
                <div className="space-y-8">
                  <QuickWins />
                  <HiddenStrengths />
                </div>
              </div>

              {/* Action Section */}
              <div className="bg-gradient-brand rounded-xl p-8 text-center text-white">
                <div className="max-w-2xl mx-auto">
                  <Icon name="Rocket" size={48} className="mx-auto mb-4 opacity-90" />
                  <h3 className="text-2xl font-heading font-bold mb-4">
                    Ready to Transform Your Career?
                  </h3>
                  <p className="text-lg opacity-90 mb-6">
                    Your analysis reveals significant opportunities. Let's create a personalized 
                    action plan to maximize your career resilience and market value.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      variant="secondary"
                      size="lg"
                      iconName="Map"
                      iconPosition="left"
                      className="bg-white text-primary hover:bg-white/90"
                    >
                      Explore Career Paths
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      iconName="BookOpen"
                      iconPosition="left"
                      className="border-white text-white hover:bg-white/10"
                    >
                      Start Learning Plan
                    </Button>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-white rounded-lg border border-border">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon name="Shield" size={24} className="text-secondary" />
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Secure & Private</h4>
                  <p className="text-sm text-text-secondary">
                    Your resume data is encrypted and never shared with third parties
                  </p>
                </div>
                <div className="text-center p-6 bg-white rounded-lg border border-border">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon name="Brain" size={24} className="text-accent" />
                  </div>
                  <h4 className="font-semibold text-primary mb-2">AI-Powered</h4>
                  <p className="text-sm text-text-secondary">
                    Advanced algorithms trained on 100,000+ successful career transitions
                  </p>
                </div>
                <div className="text-center p-6 bg-white rounded-lg border border-border">
                  <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon name="TrendingUp" size={24} className="text-success" />
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Proven Results</h4>
                  <p className="text-sm text-text-secondary">
                    Users see 40% more interview invitations after implementing our recommendations
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Getting Started Guide (shown when no file uploaded) */}
          {!uploadedFile && !isAnalyzing && !showResults && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">
                  How It Works
                </h2>
                <p className="text-text-secondary">
                  Get comprehensive career insights in just a few minutes
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Upload" size={32} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">1. Upload Resume</h3>
                  <p className="text-text-secondary">
                    Securely upload your resume in PDF, DOC, or DOCX format
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Zap" size={32} className="text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">2. AI Analysis</h3>
                  <p className="text-text-secondary">
                    Our AI analyzes skills, identifies gaps, and maps opportunities
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Target" size={32} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">3. Get Insights</h3>
                  <p className="text-text-secondary">
                    Receive personalized recommendations and action plans
                  </p>
                </div>
              </div>

              <div className="bg-muted/30 rounded-xl p-8 border border-border">
                <div className="flex items-start space-x-4">
                  <Icon name="Info" size={24} className="text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary mb-2">What You'll Discover</h4>
                    <ul className="space-y-2 text-text-secondary">
                      <li className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-success" />
                        <span>Skills visualization compared to market demand</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-success" />
                        <span>Career resilience score with improvement recommendations</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-success" />
                        <span>Hidden strengths and transferable skills analysis</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-success" />
                        <span>Market positioning against similar roles</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-success" />
                        <span>Quick wins for immediate resume improvements</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ResumeIntelligenceDashboard;