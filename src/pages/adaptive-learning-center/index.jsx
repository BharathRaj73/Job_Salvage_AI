import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import LearningRoadmap from './components/LearningRoadmap';
import LearningModuleCard from './components/LearningModuleCard';
import LearningStreakWidget from './components/LearningStreakWidget';
import PeerLearningSection from './components/PeerLearningSection';
import FocusModeWidget from './components/FocusModeWidget';
import SmartCurationPanel from './components/SmartCurationPanel';

const AdaptiveLearningCenter = () => {
  const [currentDay, setCurrentDay] = useState(12);
  const [selectedView, setSelectedView] = useState('roadmap');
  const [userProgress, setUserProgress] = useState({});
  const [focusMode, setFocusMode] = useState({
    isActive: false,
    settings: {
      sessionDuration: 25,
      breakDuration: 5,
      notifications: true,
      autoStartBreaks: false
    }
  });
  const [curationFilters, setCurationFilters] = useState({});

  // Mock data for 30-day roadmap
  const roadmapData = {
    weeks: [
      { theme: "Foundation Building - Core Skills Assessment" },
      { theme: "Skill Development - Technical Competencies" },
      { theme: "Application & Practice - Real-world Projects" },
      { theme: "Mastery & Certification - Career Advancement" }
    ],
    days: Array.from({ length: 30 }, (_, index) => ({
      day: index + 1,
      milestone: (index + 1) % 7 === 0,
      completed: index < currentDay - 1,
      tasks: [
        "Complete daily learning module",
        "Practice new skills",
        "Review progress"
      ]
    }))
  };

  // Mock learning modules data
  const learningModules = [
    {
      id: "python-data-analysis",
      title: "Python for Data Analysis: Complete Bootcamp",
      description: "Master Python programming for data analysis with pandas, numpy, and matplotlib. Build real-world projects and gain practical experience.",
      provider: "Coursera",
      duration: "6-8 hours",
      difficulty: "Intermediate",
      rating: 4.8,
      enrolledCount: 45230,
      relevanceScore: 95,
      isRecommended: true,
      skills: ["Python", "Data Analysis", "Pandas", "NumPy", "Matplotlib"],
      learningOutcomes: [
        "Master Python fundamentals for data science",
        "Analyze real datasets using pandas and numpy",
        "Create compelling data visualizations",
        "Build end-to-end data analysis projects"
      ],
      videoCount: 42,
      articleCount: 15,
      exerciseCount: 28
    },
    {
      id: "machine-learning-basics",
      title: "Machine Learning Fundamentals for Career Growth",
      description: "Learn the essential concepts of machine learning and how to apply them in business contexts. No prior experience required.",
      provider: "LinkedIn Learning",
      duration: "4-5 hours",
      difficulty: "Beginner",
      rating: 4.6,
      enrolledCount: 32100,
      relevanceScore: 88,
      isRecommended: true,
      skills: ["Machine Learning", "AI", "Data Science", "Business Intelligence"],
      learningOutcomes: [
        "Understand core ML concepts and algorithms",
        "Identify ML opportunities in business",
        "Evaluate ML model performance",
        "Communicate ML insights to stakeholders"
      ],
      videoCount: 28,
      articleCount: 8,
      exerciseCount: 15
    },
    {
      id: "sql-database-mastery",
      title: "SQL Database Design and Optimization",
      description: "Advanced SQL techniques for database design, query optimization, and performance tuning. Perfect for data professionals.",
      provider: "Udemy",
      duration: "12-15 hours",
      difficulty: "Advanced",
      rating: 4.9,
      enrolledCount: 18750,
      relevanceScore: 82,
      isRecommended: false,
      skills: ["SQL", "Database Design", "Query Optimization", "Performance Tuning"],
      learningOutcomes: [
        "Design efficient database schemas",
        "Write complex SQL queries",
        "Optimize database performance",
        "Implement advanced SQL features"
      ],
      videoCount: 65,
      articleCount: 22,
      exerciseCount: 45
    },
    {
      id: "project-management-agile",
      title: "Agile Project Management Certification Prep",
      description: "Comprehensive preparation for agile project management certification with real-world case studies and practical exercises.",
      provider: "Coursera",
      duration: "8-10 hours",
      difficulty: "Intermediate",
      rating: 4.7,
      enrolledCount: 28900,
      relevanceScore: 76,
      isRecommended: false,
      skills: ["Project Management", "Agile", "Scrum", "Leadership"],
      learningOutcomes: [
        "Master agile methodologies and frameworks",
        "Lead cross-functional teams effectively",
        "Manage project timelines and deliverables",
        "Prepare for PMI-ACP certification"
      ],
      videoCount: 38,
      articleCount: 18,
      exerciseCount: 32
    }
  ];

  // Mock user progress data
  const mockUserProgress = {
    "python-data-analysis": 65,
    "machine-learning-basics": 100,
    "sql-database-mastery": 25,
    "project-management-agile": 0
  };

  // Mock streak data
  const streakData = {
    currentStreak: 8,
    longestStreak: 15,
    weeklyGoal: 5,
    completedThisWeek: 4
  };

  // Mock achievements data
  const achievements = [
    {
      id: "first-week",
      title: "First Week Complete",
      description: "Completed your first week of learning",
      icon: "Calendar",
      earned: true,
      earnedDate: "2025-07-28"
    },
    {
      id: "streak-master",
      title: "Streak Master",
      description: "Maintained a 7-day learning streak",
      icon: "Flame",
      earned: true,
      earnedDate: "2025-08-01"
    },
    {
      id: "skill-builder",
      title: "Skill Builder",
      description: "Completed 3 learning modules",
      icon: "Award",
      earned: false,
      earnedDate: null
    }
  ];

  // Mock study groups data
  const studyGroups = [
    {
      id: "python-data-group",
      name: "Python Data Analysis Study Group",
      description: "Weekly sessions focusing on Python for data analysis. We work through projects together and share insights.",
      memberCount: 8,
      maxMembers: 12,
      schedule: "Tuesdays 7PM EST",
      duration: "1.5 hours",
      focusArea: "Data Analysis",
      isJoined: true,
      members: [
        { name: "Sarah Chen", avatar: "https://randomuser.me/api/portraits/women/32.jpg" },
        { name: "Mike Rodriguez", avatar: "https://randomuser.me/api/portraits/men/45.jpg" },
        { name: "Lisa Park", avatar: "https://randomuser.me/api/portraits/women/28.jpg" }
      ]
    },
    {
      id: "ml-beginners",
      name: "Machine Learning for Beginners",
      description: "Perfect for those starting their ML journey. We cover fundamentals and work on simple projects together.",
      memberCount: 15,
      maxMembers: 20,
      schedule: "Saturdays 2PM EST",
      duration: "2 hours",
      focusArea: "Machine Learning",
      isJoined: false,
      members: [
        { name: "David Kim", avatar: "https://randomuser.me/api/portraits/men/22.jpg" },
        { name: "Emma Wilson", avatar: "https://randomuser.me/api/portraits/women/35.jpg" }
      ]
    }
  ];

  // Mock learning buddies data
  const learningBuddies = [
    {
      id: "buddy-1",
      name: "Alex Thompson",
      title: "Data Analyst transitioning to ML Engineer",
      location: "San Francisco, CA",
      timezone: "PST",
      avatar: "https://randomuser.me/api/portraits/men/34.jpg",
      isOnline: true,
      isVerified: true,
      isConnected: true,
      compatibilityScore: 92,
      sharedSkills: ["Python", "Data Analysis", "Machine Learning", "SQL", "Statistics"]
    },
    {
      id: "buddy-2",
      name: "Maria Garcia",
      title: "Business Analyst learning Data Science",
      location: "Austin, TX",
      timezone: "CST",
      avatar: "https://randomuser.me/api/portraits/women/41.jpg",
      isOnline: false,
      isVerified: true,
      isConnected: false,
      compatibilityScore: 87,
      sharedSkills: ["Business Intelligence", "SQL", "Python", "Data Visualization"]
    }
  ];

  // Mock smart curation recommendations
  const smartRecommendations = [
    {
      id: "rec-1",
      title: "Advanced Python Data Structures",
      provider: "edX",
      duration: "3-4 hours",
      difficulty: "Intermediate",
      relevanceScore: 94,
      certification: true,
      skills: ["Python", "Data Structures", "Algorithms"],
      recommendationType: "skill_gap"
    },
    {
      id: "rec-2",
      title: "Leadership in Tech: Managing Data Teams",
      provider: "LinkedIn Learning",
      duration: "2-3 hours",
      difficulty: "Advanced",
      relevanceScore: 89,
      certification: true,
      skills: ["Leadership", "Team Management", "Data Strategy"],
      recommendationType: "career_growth"
    },
    {
      id: "rec-3",
      title: "Cloud Computing with AWS",
      provider: "Coursera",
      duration: "8-10 hours",
      difficulty: "Intermediate",
      relevanceScore: 91,
      certification: true,
      skills: ["AWS", "Cloud Computing", "DevOps"],
      recommendationType: "market_demand"
    },
    {
      id: "rec-4",
      title: "Data Visualization with Tableau",
      provider: "Udemy",
      duration: "6-8 hours",
      difficulty: "Beginner",
      relevanceScore: 85,
      certification: false,
      skills: ["Tableau", "Data Visualization", "Business Intelligence"],
      recommendationType: "peer_popular"
    }
  ];

  useEffect(() => {
    setUserProgress(mockUserProgress);
  }, []);

  const handleDaySelect = (day) => {
    console.log(`Selected day: ${day}`);
  };

  const handleStartModule = (moduleId) => {
    setUserProgress(prev => ({ ...prev, [moduleId]: 1 }));
    console.log(`Starting module: ${moduleId}`);
  };

  const handleContinueModule = (moduleId) => {
    console.log(`Continuing module: ${moduleId}`);
  };

  const handleJoinGroup = (groupId) => {
    console.log(`Joining group: ${groupId}`);
  };

  const handleConnectBuddy = (buddyId) => {
    console.log(`Connecting with buddy: ${buddyId}`);
  };

  const handleToggleFocusMode = (isActive) => {
    setFocusMode(prev => ({ ...prev, isActive }));
  };

  const handleUpdateFocusSettings = (settings) => {
    setFocusMode(prev => ({ ...prev, settings }));
  };

  const handleRefreshRecommendations = () => {
    console.log('Refreshing recommendations...');
  };

  const viewOptions = [
    { id: 'roadmap', label: 'Learning Roadmap', icon: 'Map' },
    { id: 'modules', label: 'Course Library', icon: 'BookOpen' },
    { id: 'progress', label: 'Progress & Streaks', icon: 'TrendingUp' },
    { id: 'community', label: 'Peer Learning', icon: 'Users' },
    { id: 'focus', label: 'Focus Mode', icon: 'Focus' },
    { id: 'recommendations', label: 'Smart Curation', icon: 'Sparkles' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-brand text-white py-12">
          <div className="container-brand">
            <div className="max-w-4xl">
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="GraduationCap" size={32} />
                <h1 className="text-3xl lg:text-4xl font-heading font-bold">
                  Adaptive Learning Center
                </h1>
              </div>
              <p className="text-xl text-white/90 mb-6">
                Your personalized journey to career resilience through intelligent skill development
              </p>
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Icon name="Calendar" size={16} />
                  <span>Day {currentDay} of 30</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Target" size={16} />
                  <span>{Math.round((currentDay / 30) * 100)}% Complete</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Flame" size={16} />
                  <span>{streakData?.currentStreak} Day Streak</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="bg-white border-b border-border sticky top-16 z-40">
          <div className="container-brand">
            <div className="flex items-center space-x-1 py-4 overflow-x-auto">
              {viewOptions?.map((option) => (
                <button
                  key={option?.id}
                  onClick={() => setSelectedView(option?.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    selectedView === option?.id
                      ? 'bg-primary text-primary-foreground shadow-brand'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={option?.icon} size={16} />
                  <span>{option?.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8">
          <div className="container-brand">
            {selectedView === 'roadmap' && (
              <div className="space-y-8">
                <LearningRoadmap
                  roadmapData={roadmapData}
                  currentDay={currentDay}
                  onDaySelect={handleDaySelect}
                />
                
                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-card rounded-xl shadow-brand border border-border p-6 text-center">
                    <Icon name="Play" size={32} className="text-accent mx-auto mb-4" />
                    <h3 className="font-heading font-semibold text-foreground mb-2">Continue Learning</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Resume your current module where you left off
                    </p>
                    <Button variant="default" className="btn-brand-accent">
                      Continue Module
                    </Button>
                  </div>
                  
                  <div className="bg-card rounded-xl shadow-brand border border-border p-6 text-center">
                    <Icon name="Users" size={32} className="text-primary mx-auto mb-4" />
                    <h3 className="font-heading font-semibold text-foreground mb-2">Join Study Group</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Connect with peers on similar learning paths
                    </p>
                    <Button variant="outline">
                      Find Groups
                    </Button>
                  </div>
                  
                  <div className="bg-card rounded-xl shadow-brand border border-border p-6 text-center">
                    <Icon name="Target" size={32} className="text-success mx-auto mb-4" />
                    <h3 className="font-heading font-semibold text-foreground mb-2">Take Assessment</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Evaluate your progress and identify skill gaps
                    </p>
                    <Button variant="outline">
                      Start Assessment
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {selectedView === 'modules' && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-heading font-bold text-foreground">Course Library</h2>
                    <p className="text-muted-foreground mt-1">
                      Curated courses tailored to your career goals and skill gaps
                    </p>
                  </div>
                  <Button variant="outline" iconName="Filter" iconPosition="left">
                    Filter Courses
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {learningModules?.map((module) => (
                    <LearningModuleCard
                      key={module.id}
                      module={module}
                      userProgress={userProgress}
                      onStart={handleStartModule}
                      onContinue={handleContinueModule}
                    />
                  ))}
                </div>
              </div>
            )}

            {selectedView === 'progress' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <LearningStreakWidget
                  streakData={streakData}
                  achievements={achievements}
                />
                
                {/* Progress Overview */}
                <div className="bg-card rounded-xl shadow-brand border border-border p-6">
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-6">Learning Progress</h3>
                  
                  <div className="space-y-4">
                    {learningModules?.map((module) => {
                      const progress = userProgress?.[module.id] || 0;
                      return (
                        <div key={module.id} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-foreground">{module.title}</span>
                            <span className="text-sm text-muted-foreground">{progress}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div 
                              className="bg-gradient-brand h-2 rounded-full transition-all duration-500"
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-heading font-bold text-foreground">
                          {Object.values(userProgress)?.filter(p => p >= 100)?.length}
                        </div>
                        <p className="text-sm text-muted-foreground">Completed</p>
                      </div>
                      <div>
                        <div className="text-2xl font-heading font-bold text-foreground">
                          {Object.values(userProgress)?.filter(p => p > 0 && p < 100)?.length}
                        </div>
                        <p className="text-sm text-muted-foreground">In Progress</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedView === 'community' && (
              <PeerLearningSection
                studyGroups={studyGroups}
                learningBuddies={learningBuddies}
                onJoinGroup={handleJoinGroup}
                onConnectBuddy={handleConnectBuddy}
              />
            )}

            {selectedView === 'focus' && (
              <div className="max-w-2xl mx-auto">
                <FocusModeWidget
                  isActive={focusMode?.isActive}
                  onToggle={handleToggleFocusMode}
                  settings={focusMode?.settings}
                  onUpdateSettings={handleUpdateFocusSettings}
                />
              </div>
            )}

            {selectedView === 'recommendations' && (
              <SmartCurationPanel
                recommendations={smartRecommendations}
                filters={curationFilters}
                onFilterChange={setCurationFilters}
                onRefresh={handleRefreshRecommendations}
              />
            )}
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container-brand">
          <div className="text-center">
            <h3 className="text-xl font-heading font-semibold mb-4">
              Ready to Accelerate Your Learning?
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Join thousands of professionals who are building recession-proof careers through 
              strategic skill development and continuous learning.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Button variant="secondary" iconName="Zap" iconPosition="left">
                Upgrade to Premium
              </Button>
              <Button variant="outline" iconName="Share" iconPosition="left">
                Share Progress
              </Button>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
            <p>&copy; {new Date()?.getFullYear()} Job Salvage AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AdaptiveLearningCenter;