import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FocusModeWidget = ({ isActive, onToggle, settings, onUpdateSettings }) => {
  const [timeRemaining, setTimeRemaining] = useState(settings?.sessionDuration * 60);
  const [currentSession, setCurrentSession] = useState(1);
  const [isBreak, setIsBreak] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval = null;
    
    if (isActive && !isPaused && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(time => {
          if (time <= 1) {
            // Session completed
            if (!isBreak) {
              // Work session completed, start break
              setIsBreak(true);
              setTimeRemaining(settings?.breakDuration * 60);
              return settings?.breakDuration * 60;
            } else {
              // Break completed
              setIsBreak(false);
              setCurrentSession(prev => prev + 1);
              setTimeRemaining(settings?.sessionDuration * 60);
              return settings?.sessionDuration * 60;
            }
          }
          return time - 1;
        });
      }, 1000);
    } else if (!isActive) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, isPaused, timeRemaining, isBreak, settings]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins?.toString()?.padStart(2, '0')}:${secs?.toString()?.padStart(2, '0')}`;
  };

  const getProgressPercentage = () => {
    const totalDuration = isBreak ? settings?.breakDuration * 60 : settings?.sessionDuration * 60;
    return ((totalDuration - timeRemaining) / totalDuration) * 100;
  };

  const handleStart = () => {
    onToggle(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  const handleStop = () => {
    onToggle(false);
    setTimeRemaining(settings?.sessionDuration * 60);
    setCurrentSession(1);
    setIsBreak(false);
    setIsPaused(false);
  };

  const handleReset = () => {
    setTimeRemaining(isBreak ? settings?.breakDuration * 60 : settings?.sessionDuration * 60);
    setIsPaused(false);
  };

  return (
    <div className="bg-card rounded-xl shadow-brand border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg ${isActive ? 'bg-accent/10' : 'bg-muted'}`}>
            <Icon 
              name={isActive ? "Focus" : "Timer"} 
              size={20} 
              className={isActive ? 'text-accent' : 'text-muted-foreground'} 
            />
          </div>
          <div>
            <h3 className="text-lg font-heading font-semibold text-foreground">Focus Mode</h3>
            <p className="text-sm text-muted-foreground">
              {isActive 
                ? (isBreak ? 'Break time - relax and recharge' : 'Focus time - minimize distractions')
                : 'Pomodoro technique for better concentration'
              }
            </p>
          </div>
        </div>
        
        {isActive && (
          <div className="flex items-center space-x-2 text-sm">
            <Icon name="RotateCcw" size={14} className="text-muted-foreground" />
            <span className="text-muted-foreground">Session {currentSession}</span>
          </div>
        )}
      </div>
      {/* Timer Display */}
      <div className="text-center mb-6">
        <div className="relative w-32 h-32 mx-auto mb-4">
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-muted"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 45}`}
              strokeDashoffset={`${2 * Math.PI * 45 * (1 - getProgressPercentage() / 100)}`}
              className={`transition-all duration-1000 ${
                isBreak ? 'text-success' : 'text-accent'
              }`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-heading font-bold text-foreground">
                {formatTime(timeRemaining)}
              </div>
              <div className="text-xs text-muted-foreground">
                {isBreak ? 'Break' : 'Focus'}
              </div>
            </div>
          </div>
        </div>

        {/* Status Indicator */}
        <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${
          isActive 
            ? (isBreak 
                ? 'bg-success/10 text-success' :'bg-accent/10 text-accent'
              )
            : 'bg-muted text-muted-foreground'
        }`}>
          <div className={`w-2 h-2 rounded-full ${
            isActive && !isPaused
              ? (isBreak ? 'bg-success animate-pulse' : 'bg-accent animate-pulse')
              : 'bg-muted-foreground'
          }`} />
          <span>
            {!isActive 
              ? 'Ready to focus' 
              : isPaused 
              ? 'Paused' 
              : isBreak 
              ? 'Break time' :'Focus time'
            }
          </span>
        </div>
      </div>
      {/* Controls */}
      <div className="flex items-center justify-center space-x-3 mb-6">
        {!isActive ? (
          <Button
            variant="default"
            iconName="Play"
            iconPosition="left"
            onClick={handleStart}
            className="btn-brand-accent"
          >
            Start Focus Session
          </Button>
        ) : (
          <>
            <Button
              variant="outline"
              size="sm"
              iconName={isPaused ? "Play" : "Pause"}
              onClick={handlePause}
            >
              {isPaused ? 'Resume' : 'Pause'}
            </Button>
            <Button
              variant="outline"
              size="sm"
              iconName="RotateCcw"
              onClick={handleReset}
            >
              Reset
            </Button>
            <Button
              variant="outline"
              size="sm"
              iconName="Square"
              onClick={handleStop}
            >
              Stop
            </Button>
          </>
        )}
      </div>
      {/* Settings */}
      <div className="border-t border-border pt-4">
        <h4 className="text-sm font-medium text-foreground mb-3">Session Settings</h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-muted-foreground mb-1 block">Focus Duration</label>
            <select
              value={settings?.sessionDuration}
              onChange={(e) => onUpdateSettings({ ...settings, sessionDuration: parseInt(e?.target?.value) })}
              disabled={isActive}
              className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
            >
              <option value={15}>15 minutes</option>
              <option value={25}>25 minutes</option>
              <option value={30}>30 minutes</option>
              <option value={45}>45 minutes</option>
              <option value={60}>60 minutes</option>
            </select>
          </div>
          <div>
            <label className="text-xs text-muted-foreground mb-1 block">Break Duration</label>
            <select
              value={settings?.breakDuration}
              onChange={(e) => onUpdateSettings({ ...settings, breakDuration: parseInt(e?.target?.value) })}
              disabled={isActive}
              className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
            >
              <option value={5}>5 minutes</option>
              <option value={10}>10 minutes</option>
              <option value={15}>15 minutes</option>
              <option value={20}>20 minutes</option>
            </select>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={settings?.notifications}
              onChange={(e) => onUpdateSettings({ ...settings, notifications: e?.target?.checked })}
              className="w-4 h-4 text-primary border-border rounded focus:ring-ring"
            />
            <span className="text-sm text-foreground">Enable notifications</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={settings?.autoStartBreaks}
              onChange={(e) => onUpdateSettings({ ...settings, autoStartBreaks: e?.target?.checked })}
              className="w-4 h-4 text-primary border-border rounded focus:ring-ring"
            />
            <span className="text-sm text-foreground">Auto-start breaks</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FocusModeWidget;