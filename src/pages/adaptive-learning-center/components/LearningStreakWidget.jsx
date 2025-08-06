import React from 'react';
import Icon from '../../../components/AppIcon';

const LearningStreakWidget = ({ streakData, achievements }) => {
  const { currentStreak, longestStreak, weeklyGoal, completedThisWeek } = streakData;
  const weekProgress = (completedThisWeek / weeklyGoal) * 100;

  const getStreakIcon = (streak) => {
    if (streak >= 30) return 'Crown';
    if (streak >= 14) return 'Flame';
    if (streak >= 7) return 'Zap';
    return 'Target';
  };

  const getStreakColor = (streak) => {
    if (streak >= 30) return 'text-accent';
    if (streak >= 14) return 'text-destructive';
    if (streak >= 7) return 'text-success';
    return 'text-muted-foreground';
  };

  return (
    <div className="bg-card rounded-xl shadow-brand border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-heading font-semibold text-foreground">Learning Streak</h3>
        <div className={`p-2 rounded-lg bg-accent/10 ${getStreakColor(currentStreak)}`}>
          <Icon name={getStreakIcon(currentStreak)} size={20} />
        </div>
      </div>
      {/* Current Streak */}
      <div className="text-center mb-6">
        <div className="text-3xl font-heading font-bold text-foreground mb-1">
          {currentStreak}
        </div>
        <p className="text-sm text-muted-foreground">
          {currentStreak === 1 ? 'day streak' : 'days streak'}
        </p>
        {currentStreak > 0 && (
          <p className="text-xs text-accent mt-1">
            Keep it up! You're on fire! 🔥
          </p>
        )}
      </div>
      {/* Weekly Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-foreground">This Week's Goal</span>
          <span className="text-sm text-muted-foreground">{completedThisWeek}/{weeklyGoal} days</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2 mb-2">
          <div 
            className="bg-gradient-brand h-2 rounded-full transition-all duration-500"
            style={{ width: `${Math.min(weekProgress, 100)}%` }}
          />
        </div>
        <p className="text-xs text-muted-foreground">
          {weekProgress >= 100 ? 'Goal achieved! 🎉' : `${Math.round(weekProgress)}% complete`}
        </p>
      </div>
      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center p-3 bg-muted/50 rounded-lg">
          <div className="text-lg font-heading font-semibold text-foreground">
            {longestStreak}
          </div>
          <p className="text-xs text-muted-foreground">Longest Streak</p>
        </div>
        <div className="text-center p-3 bg-muted/50 rounded-lg">
          <div className="text-lg font-heading font-semibold text-foreground">
            {achievements?.filter(a => a?.earned)?.length}
          </div>
          <p className="text-xs text-muted-foreground">Badges Earned</p>
        </div>
      </div>
      {/* Recent Achievements */}
      <div>
        <h4 className="text-sm font-medium text-foreground mb-3">Recent Achievements</h4>
        <div className="space-y-2">
          {achievements?.slice(0, 3)?.map((achievement) => (
            <div 
              key={achievement?.id}
              className={`flex items-center space-x-3 p-2 rounded-lg transition-all duration-200 ${
                achievement?.earned 
                  ? 'bg-success/10 border border-success/20' :'bg-muted/50 opacity-60'
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                achievement?.earned ? 'bg-success/20' : 'bg-muted'
              }`}>
                <Icon 
                  name={achievement?.icon} 
                  size={16} 
                  className={achievement?.earned ? 'text-success' : 'text-muted-foreground'} 
                />
              </div>
              <div className="flex-1">
                <p className={`text-sm font-medium ${
                  achievement?.earned ? 'text-foreground' : 'text-muted-foreground'
                }`}>
                  {achievement?.title}
                </p>
                <p className="text-xs text-muted-foreground">
                  {achievement?.description}
                </p>
              </div>
              {achievement?.earned && achievement?.earnedDate && (
                <div className="text-xs text-success">
                  {new Date(achievement.earnedDate)?.toLocaleDateString()}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Motivation Message */}
      <div className="mt-6 p-4 bg-gradient-brand rounded-lg text-center">
        <Icon name="Heart" size={16} className="text-white mx-auto mb-2" />
        <p className="text-sm text-white font-medium">
          {currentStreak === 0 
            ? "Start your learning journey today!" 
            : currentStreak < 7 
            ? "You're building great habits!" 
            : currentStreak < 14 
            ? "Amazing consistency! Keep going!" :"You're a learning champion! 🏆"
          }
        </p>
      </div>
    </div>
  );
};

export default LearningStreakWidget;