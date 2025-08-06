import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const LearningRoadmap = ({ roadmapData, currentDay, onDaySelect }) => {
  const [selectedWeek, setSelectedWeek] = useState(Math.ceil(currentDay / 7));

  const weeks = Array.from({ length: 4 }, (_, index) => {
    const weekNumber = index + 1;
    const startDay = (weekNumber - 1) * 7 + 1;
    const endDay = Math.min(weekNumber * 7, 30);
    const days = Array.from({ length: endDay - startDay + 1 }, (_, dayIndex) => startDay + dayIndex);
    
    return {
      weekNumber,
      days,
      title: `Week ${weekNumber}`,
      theme: roadmapData?.weeks?.[index]?.theme || `Week ${weekNumber} Focus`
    };
  });

  const getDayStatus = (day) => {
    if (day < currentDay) return 'completed';
    if (day === currentDay) return 'current';
    return 'upcoming';
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return 'CheckCircle2';
      case 'current':
        return 'Play';
      default:
        return 'Circle';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-success bg-success/10 border-success/20';
      case 'current':
        return 'text-accent bg-accent/10 border-accent/20';
      default:
        return 'text-muted-foreground bg-muted border-border';
    }
  };

  return (
    <div className="bg-card rounded-xl shadow-brand border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-heading font-semibold text-foreground">Your Learning Roadmap</h2>
          <p className="text-sm text-muted-foreground mt-1">30-day personalized journey to career resilience</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Icon name="Calendar" size={16} />
          <span>Day {currentDay} of 30</span>
        </div>
      </div>
      {/* Progress Overview */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-foreground">Overall Progress</span>
          <span className="text-sm text-muted-foreground">{Math.round((currentDay / 30) * 100)}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-gradient-brand h-2 rounded-full transition-all duration-500"
            style={{ width: `${(currentDay / 30) * 100}%` }}
          />
        </div>
      </div>
      {/* Week Navigation */}
      <div className="flex space-x-2 mb-6 overflow-x-auto">
        {weeks?.map((week) => (
          <button
            key={week?.weekNumber}
            onClick={() => setSelectedWeek(week?.weekNumber)}
            className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              selectedWeek === week?.weekNumber
                ? 'bg-primary text-primary-foreground shadow-brand'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            {week?.title}
          </button>
        ))}
      </div>
      {/* Selected Week Details */}
      {weeks?.map((week) => (
        selectedWeek === week?.weekNumber && (
          <div key={week?.weekNumber} className="space-y-4">
            <div className="bg-muted/50 rounded-lg p-4">
              <h3 className="font-medium text-foreground mb-1">{week?.theme}</h3>
              <p className="text-sm text-muted-foreground">
                Focus area for this week's learning modules and skill development
              </p>
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-2">
              {week?.days?.map((day) => {
                const status = getDayStatus(day);
                const dayData = roadmapData?.days?.[day - 1];
                
                return (
                  <button
                    key={day}
                    onClick={() => onDaySelect(day)}
                    className={`aspect-square rounded-lg border-2 p-2 transition-all duration-200 hover:scale-105 ${getStatusColor(status)}`}
                  >
                    <div className="flex flex-col items-center justify-center h-full">
                      <Icon name={getStatusIcon(status)} size={16} className="mb-1" />
                      <span className="text-xs font-medium">{day}</span>
                      {dayData?.milestone && (
                        <div className="w-1 h-1 bg-accent rounded-full mt-1" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Week Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="bg-success/10 rounded-lg p-3 border border-success/20">
                <div className="flex items-center space-x-2">
                  <Icon name="Target" size={16} className="text-success" />
                  <span className="text-sm font-medium text-success">Learning Goals</span>
                </div>
                <p className="text-xs text-success/80 mt-1">
                  {week?.days?.filter(day => getDayStatus(day) === 'completed')?.length} of {week?.days?.length} completed
                </p>
              </div>

              <div className="bg-accent/10 rounded-lg p-3 border border-accent/20">
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} className="text-accent" />
                  <span className="text-sm font-medium text-accent">Time Investment</span>
                </div>
                <p className="text-xs text-accent/80 mt-1">
                  ~2-3 hours daily commitment
                </p>
              </div>

              <div className="bg-primary/10 rounded-lg p-3 border border-primary/20">
                <div className="flex items-center space-x-2">
                  <Icon name="Award" size={16} className="text-primary" />
                  <span className="text-sm font-medium text-primary">Milestones</span>
                </div>
                <p className="text-xs text-primary/80 mt-1">
                  {week?.days?.filter(day => roadmapData?.days?.[day - 1]?.milestone)?.length} key achievements
                </p>
              </div>
            </div>
          </div>
        )
      ))}
    </div>
  );
};

export default LearningRoadmap;