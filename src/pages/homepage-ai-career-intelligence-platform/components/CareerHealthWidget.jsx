import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CareerHealthWidget = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 'experience',
      question: 'How many years of professional experience do you have?',
      options: [
        { value: '0-2', label: '0-2 years' },
        { value: '3-5', label: '3-5 years' },
        { value: '6-10', label: '6-10 years' },
        { value: '10+', label: '10+ years' }
      ]
    },
    {
      id: 'industry',
      question: 'Which industry best describes your current role?',
      options: [
        { value: 'tech', label: 'Technology' },
        { value: 'finance', label: 'Finance' },
        { value: 'healthcare', label: 'Healthcare' },
        { value: 'marketing', label: 'Marketing' },
        { value: 'other', label: 'Other' }
      ]
    },
    {
      id: 'concern',
      question: 'What is your biggest career concern right now?',
      options: [
        { value: 'job-security', label: 'Job Security' },
        { value: 'skill-gaps', label: 'Skill Gaps' },
        { value: 'career-growth', label: 'Career Growth' },
        { value: 'industry-change', label: 'Industry Change' }
      ]
    },
    {
      id: 'learning',
      question: 'How much time can you dedicate to upskilling weekly?',
      options: [
        { value: '1-3', label: '1-3 hours' },
        { value: '4-6', label: '4-6 hours' },
        { value: '7-10', label: '7-10 hours' },
        { value: '10+', label: '10+ hours' }
      ]
    }
  ];

  const handleAnswer = (value) => {
    const newAnswers = { ...answers, [questions?.[currentQuestion]?.id]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions?.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const getPersonalizedInsight = () => {
    const insights = {
      'tech-job-security': "Your tech background positions you well! Focus on emerging technologies like AI and cloud computing to stay ahead.",
      'finance-skill-gaps': "Financial services are evolving rapidly. Consider upskilling in fintech, data analysis, or regulatory technology.",
      'healthcare-career-growth': "Healthcare offers excellent growth opportunities. Consider specializing in digital health or healthcare analytics.",
      'marketing-industry-change': "Marketing is transforming with AI and data. Focus on digital marketing, analytics, and automation skills.",
      'default': "Based on your profile, we recommend focusing on recession-proof skills and exploring adjacent career opportunities."
    };

    const key = `${answers?.industry}-${answers?.concern}`;
    return insights?.[key] || insights?.default;
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  if (showResults) {
    return (
      <section className="py-16 bg-white">
        <div className="container-brand">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 border border-border">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="CheckCircle" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Your Career Health Snapshot</h3>
                <p className="text-text-secondary">Personalized insights based on your responses</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-lg p-6 shadow-md border border-border">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-success rounded-full flex items-center justify-center">
                      <Icon name="Shield" size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Resilience Score</h4>
                      <p className="text-2xl font-bold text-success">78%</p>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary">Good foundation with room for improvement</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md border border-border">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-warning rounded-full flex items-center justify-center">
                      <Icon name="Target" size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Priority Areas</h4>
                      <p className="text-2xl font-bold text-warning">2</p>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary">Key areas needing attention</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md border border-border">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                      <Icon name="TrendingUp" size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Growth Potential</h4>
                      <p className="text-2xl font-bold text-secondary">High</p>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary">Strong potential for advancement</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 mb-6 border border-border">
                <h4 className="font-semibold text-primary mb-3 flex items-center">
                  <Icon name="Lightbulb" size={20} className="mr-2 text-accent" />
                  Personalized Insight
                </h4>
                <p className="text-text-secondary leading-relaxed">{getPersonalizedInsight()}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="default"
                  iconName="FileText"
                  iconPosition="left"
                  className="btn-brand-accent"
                >
                  Get Full Career Analysis
                </Button>
                <Button
                  variant="outline"
                  iconName="RotateCcw"
                  iconPosition="left"
                  onClick={resetAssessment}
                >
                  Retake Assessment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-muted">
      <div className="container-brand">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Quick Career Health Assessment
            </h2>
            <p className="text-lg text-text-secondary">
              Get personalized insights in under 2 minutes
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-brand p-8 border border-border">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-text-secondary">
                  Question {currentQuestion + 1} of {questions?.length}
                </span>
                <span className="text-sm font-medium text-secondary">
                  {Math.round(((currentQuestion + 1) / questions?.length) * 100)}%
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-gradient-brand h-2 rounded-full transition-all duration-500"
                  style={{ width: `${((currentQuestion + 1) / questions?.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Question */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-6">
                {questions?.[currentQuestion]?.question}
              </h3>

              <div className="grid gap-3">
                {questions?.[currentQuestion]?.options?.map((option) => (
                  <button
                    key={option?.value}
                    onClick={() => handleAnswer(option?.value)}
                    className="text-left p-4 rounded-lg border border-border hover:border-secondary hover:bg-secondary/5 transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-text-primary group-hover:text-secondary">
                        {option?.label}
                      </span>
                      <Icon 
                        name="ChevronRight" 
                        size={20} 
                        className="text-text-secondary group-hover:text-secondary opacity-0 group-hover:opacity-100 transition-all duration-200" 
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation */}
            {currentQuestion > 0 && (
              <div className="flex justify-start">
                <Button
                  variant="ghost"
                  iconName="ChevronLeft"
                  iconPosition="left"
                  onClick={() => setCurrentQuestion(currentQuestion - 1)}
                >
                  Previous
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerHealthWidget;