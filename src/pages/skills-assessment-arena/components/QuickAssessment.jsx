import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuickAssessment = ({ assessment, onComplete, onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(assessment?.timeLimit * 60);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (timeLeft > 0 && !showResults) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleSubmit();
    }
  }, [timeLeft, showResults]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs?.toString()?.padStart(2, '0')}`;
  };

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleNext = () => {
    if (currentQuestion < assessment?.questions?.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    // Calculate score based on correct answers
    let correctAnswers = 0;
    assessment?.questions?.forEach(question => {
      if (answers?.[question?.id] === question?.correctAnswer) {
        correctAnswers++;
      }
    });
    
    const finalScore = Math.round((correctAnswers / assessment?.questions?.length) * 100);
    setScore(finalScore);
    setShowResults(true);
  };

  const getScoreMessage = (score) => {
    if (score >= 90) return { message: "Outstanding! You're a true expert!", color: "text-purple-600", icon: "Trophy" };
    if (score >= 80) return { message: "Excellent work! You have strong skills!", color: "text-blue-600", icon: "Star" };
    if (score >= 70) return { message: "Good job! You're on the right track!", color: "text-green-600", icon: "ThumbsUp" };
    if (score >= 60) return { message: "Not bad! There's room for improvement!", color: "text-yellow-600", icon: "Target" };
    return { message: "Keep learning! Practice makes perfect!", color: "text-red-600", icon: "BookOpen" };
  };

  if (showResults) {
    const scoreInfo = getScoreMessage(score);
    
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={scoreInfo?.icon} size={32} className="text-white" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-2">
                Assessment Complete!
              </h2>
              <p className={`text-lg font-semibold ${scoreInfo?.color} mb-2`}>
                {scoreInfo?.message}
              </p>
              <div className="text-4xl font-bold text-primary mb-2">
                {score}%
              </div>
              <p className="text-text-secondary">
                You answered {Object.keys(answers)?.length} out of {assessment?.questions?.length} questions
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-primary mb-3">Performance Breakdown</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Correct Answers:</span>
                  <span className="font-semibold text-green-600">
                    {Math.round((score / 100) * assessment?.questions?.length)} / {assessment?.questions?.length}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Time Taken:</span>
                  <span className="font-semibold text-text-primary">
                    {formatTime((assessment?.timeLimit * 60) - timeLeft)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Difficulty Level:</span>
                  <span className="font-semibold text-text-primary">
                    {assessment?.difficulty}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-blue-700 mb-2 flex items-center">
                <Icon name="Lightbulb" size={16} className="mr-2" />
                Recommendations
              </h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Practice more {assessment?.category?.toLowerCase()} problems</li>
                <li>• Review concepts you found challenging</li>
                <li>• Consider taking our advanced course in this area</li>
                <li>• Connect with peers who excel in these skills</li>
              </ul>
            </div>

            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                fullWidth
                iconName="RotateCcw"
                iconPosition="left"
                onClick={() => {
                  setCurrentQuestion(0);
                  setAnswers({});
                  setTimeLeft(assessment?.timeLimit * 60);
                  setShowResults(false);
                  setScore(0);
                }}
              >
                Retake Assessment
              </Button>
              <Button
                variant="default"
                fullWidth
                iconName="CheckCircle"
                iconPosition="left"
                onClick={() => onComplete(score)}
                className="btn-brand-primary"
              >
                Save Results
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = assessment?.questions?.[currentQuestion];
  const progress = ((currentQuestion + 1) / assessment?.questions?.length) * 100;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-heading font-semibold text-primary">
                {assessment?.title}
              </h2>
              <p className="text-text-secondary">
                Question {currentQuestion + 1} of {assessment?.questions?.length}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-text-secondary">
                <Icon name="Clock" size={16} />
                <span className={`font-mono ${timeLeft < 300 ? 'text-red-600' : ''}`}>
                  {formatTime(timeLeft)}
                </span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                iconName="X"
                onClick={onClose}
              />
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-brand h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Content */}
        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-primary mb-4">
              {question?.question}
            </h3>
            
            {question?.type === 'multiple-choice' && (
              <div className="space-y-3">
                {question?.options?.map((option, index) => (
                  <label
                    key={index}
                    className={`flex items-center p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                      answers?.[question?.id] === option
                        ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50 hover:bg-gray-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${question?.id}`}
                      value={option}
                      checked={answers?.[question?.id] === option}
                      onChange={(e) => handleAnswer(question?.id, e?.target?.value)}
                      className="sr-only"
                    />
                    <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${
                      answers?.[question?.id] === option
                        ? 'border-primary bg-primary' :'border-gray-300'
                    }`}>
                      {answers?.[question?.id] === option && (
                        <div className="w-2 h-2 rounded-full bg-white" />
                      )}
                    </div>
                    <span className="text-text-primary">{option}</span>
                  </label>
                ))}
              </div>
            )}

            {question?.type === 'drag-drop' && (
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-text-secondary mb-4">
                  Drag and drop items to arrange them in the correct order:
                </p>
                <div className="space-y-2">
                  {question?.items?.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white p-3 rounded-lg border border-border cursor-move hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        <Icon name="GripVertical" size={16} className="text-gray-400" />
                        <span>{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              iconName="ChevronLeft"
              iconPosition="left"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              Previous
            </Button>

            <div className="flex items-center space-x-2">
              {assessment?.questions?.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentQuestion
                      ? 'bg-primary'
                      : answers?.[assessment?.questions?.[index]?.id]
                      ? 'bg-green-500' :'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="default"
              iconName={currentQuestion === assessment?.questions?.length - 1 ? "CheckCircle" : "ChevronRight"}
              iconPosition="right"
              onClick={handleNext}
              disabled={!answers?.[question?.id]}
              className="btn-brand-primary"
            >
              {currentQuestion === assessment?.questions?.length - 1 ? "Submit" : "Next"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickAssessment;