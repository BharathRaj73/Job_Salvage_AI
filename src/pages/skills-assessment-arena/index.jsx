import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Header from '../../components/ui/Header';
import AssessmentCard from './components/AssessmentCard';
import AssessmentFilters from './components/AssessmentFilters';
import SkillsPortfolio from './components/SkillsPortfolio';
import AssessmentInsights from './components/AssessmentInsights';
import QuickAssessment from './components/QuickAssessment';

const SkillsAssessmentArena = () => {
  const [activeTab, setActiveTab] = useState('assessments');
  const [filters, setFilters] = useState({
    category: 'all',
    difficulty: 'all',
    status: 'all',
    sort: 'newest'
  });
  const [selectedAssessment, setSelectedAssessment] = useState(null);
  const [showQuickAssessment, setShowQuickAssessment] = useState(false);

  // Mock data for assessments
  const assessments = [
    {
      id: 1,
      title: "Data Analysis Mastery",
      description: "Test your ability to analyze complex datasets, create meaningful visualizations, and derive actionable insights from raw data.",
      category: "Analytical",
      difficulty: "Intermediate",
      duration: "25 min",
      questions: 20,
      rating: 4.8,
      icon: "BarChart3",
      skills: ["Excel", "SQL", "Python", "Statistics", "Data Visualization"],
      isNew: true,
      completedAt: null,
      score: null
    },
    {
      id: 2,
      title: "JavaScript Fundamentals",
      description: "Evaluate your understanding of core JavaScript concepts including ES6+, async programming, and modern development practices.",
      category: "Technical",
      difficulty: "Beginner",
      duration: "30 min",
      questions: 25,
      rating: 4.9,
      icon: "Code2",
      skills: ["JavaScript", "ES6", "DOM", "Async/Await", "Functions"],
      isNew: false,
      completedAt: "Dec 28, 2024",
      score: 87
    },
    {
      id: 3,
      title: "Creative Problem Solving",
      description: "Challenge your creative thinking abilities with scenarios that require innovative solutions and out-of-the-box approaches.",
      category: "Creative",
      difficulty: "Advanced",
      duration: "35 min",
      questions: 15,
      rating: 4.7,
      icon: "Lightbulb",
      skills: ["Design Thinking", "Innovation", "Brainstorming", "Ideation"],
      isNew: false,
      completedAt: null,
      score: null
    },
    {
      id: 4,
      title: "Leadership & Team Management",
      description: "Assess your leadership capabilities, team management skills, and ability to drive organizational success.",
      category: "Leadership",
      difficulty: "Advanced",
      duration: "40 min",
      questions: 30,
      rating: 4.6,
      icon: "Users",
      skills: ["Team Management", "Communication", "Decision Making", "Conflict Resolution"],
      isNew: false,
      completedAt: "Dec 25, 2024",
      score: 92
    },
    {
      id: 5,
      title: "Digital Marketing Analytics",
      description: "Test your knowledge of digital marketing metrics, campaign optimization, and ROI analysis techniques.",
      category: "Analytical",
      difficulty: "Intermediate",
      duration: "28 min",
      questions: 22,
      rating: 4.5,
      icon: "TrendingUp",
      skills: ["Google Analytics", "SEO", "PPC", "Social Media", "Conversion Tracking"],
      isNew: true,
      completedAt: null,
      score: null
    },
    {
      id: 6,
      title: "UI/UX Design Principles",
      description: "Evaluate your understanding of user experience design, interface principles, and usability best practices.",
      category: "Creative",
      difficulty: "Intermediate",
      duration: "32 min",
      questions: 18,
      rating: 4.8,
      icon: "Palette",
      skills: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
      isNew: false,
      completedAt: null,
      score: null
    }
  ];

  // Mock data for skills portfolio
  const portfolio = {
    badges: [
      {
        id: 1,
        skill: "JavaScript",
        level: "Advanced",
        score: 87,
        icon: "Code2",
        earnedDate: "Dec 28, 2024",
        isVerified: true,
        hasCertificate: true
      },
      {
        id: 2,
        skill: "Leadership",
        level: "Expert",
        score: 92,
        icon: "Users",
        earnedDate: "Dec 25, 2024",
        isVerified: true,
        hasCertificate: true
      },
      {
        id: 3,
        skill: "Data Analysis",
        level: "Intermediate",
        score: 78,
        icon: "BarChart3",
        earnedDate: "Dec 20, 2024",
        isVerified: false,
        hasCertificate: false
      },
      {
        id: 4,
        skill: "Project Management",
        level: "Advanced",
        score: 85,
        icon: "Target",
        earnedDate: "Dec 15, 2024",
        isVerified: true,
        hasCertificate: true
      }
    ],
    stats: {
      totalBadges: 12,
      averageScore: 85,
      expertLevel: 3,
      certificates: 8
    }
  };

  // Mock data for assessment insights
  const insights = {
    skillConnections: [
      {
        id: 1,
        name: "JavaScript",
        icon: "Code2",
        yourScore: 87,
        marketDemand: "Very High",
        salaryRange: "$75K - $120K",
        salaryTrend: "increasing",
        salaryDescription: "JavaScript developers see 15% average salary growth year-over-year",
        careerPaths: ["Frontend Developer", "Full Stack Developer", "React Developer", "Node.js Developer"]
      },
      {
        id: 2,
        name: "Data Analysis",
        icon: "BarChart3",
        yourScore: 78,
        marketDemand: "High",
        salaryRange: "$65K - $110K",
        salaryTrend: "increasing",
        salaryDescription: "Data analysts are in high demand across all industries",
        careerPaths: ["Data Analyst", "Business Analyst", "Data Scientist", "Research Analyst"]
      },
      {
        id: 3,
        name: "Leadership",
        icon: "Users",
        yourScore: 92,
        marketDemand: "High",
        salaryRange: "$90K - $150K",
        salaryTrend: "stable",
        salaryDescription: "Leadership skills command premium salaries across all sectors",
        careerPaths: ["Team Lead", "Project Manager", "Director", "VP of Operations"]
      },
      {
        id: 4,
        name: "UI/UX Design",
        icon: "Palette",
        yourScore: 0,
        marketDemand: "Very High",
        salaryRange: "$70K - $130K",
        salaryTrend: "increasing",
        salaryDescription: "Design skills are increasingly valuable in digital transformation",
        careerPaths: ["UX Designer", "Product Designer", "Design Lead", "Creative Director"]
      }
    ],
    marketSummary: {
      growingSkills: 8,
      avgSalaryBoost: "23%",
      careerPaths: 45
    }
  };

  // Mock quick assessment data
  const quickAssessmentData = {
    id: 'quick-js',
    title: 'JavaScript Quick Assessment',
    category: 'Technical',
    difficulty: 'Intermediate',
    timeLimit: 10, // minutes
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'What is the correct way to declare a variable in modern JavaScript?',
        options: ['var myVar = 5;', 'let myVar = 5;', 'const myVar = 5;', 'Both let and const are correct'],
        correctAnswer: 'Both let and const are correct'
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: 'Which method is used to add an element to the end of an array?',
        options: ['push()', 'pop()', 'shift()', 'unshift()'],
        correctAnswer: 'push()'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'What does the "this" keyword refer to in JavaScript?',
        options: ['The current function', 'The global object', 'The object that owns the method', 'It depends on the context'],
        correctAnswer: 'It depends on the context'
      },
      {
        id: 4,
        type: 'drag-drop',
        question: 'Arrange these JavaScript concepts from basic to advanced:',
        items: ['Variables', 'Functions', 'Closures', 'Promises', 'Async/Await'],
        correctOrder: ['Variables', 'Functions', 'Closures', 'Promises', 'Async/Await']
      },
      {
        id: 5,
        type: 'multiple-choice',
        question: 'Which of the following is NOT a JavaScript data type?',
        options: ['String', 'Boolean', 'Integer', 'Object'],
        correctAnswer: 'Integer'
      }
    ]
  };

  const filteredAssessments = assessments?.filter(assessment => {
    if (filters?.category !== 'all' && assessment?.category !== filters?.category) return false;
    if (filters?.difficulty !== 'all' && assessment?.difficulty !== filters?.difficulty) return false;
    if (filters?.status !== 'all') {
      if (filters?.status === 'completed' && !assessment?.completedAt) return false;
      if (filters?.status === 'available' && assessment?.completedAt) return false;
    }
    return true;
  });

  const assessmentCounts = {
    total: assessments?.length,
    completed: assessments?.filter(a => a?.completedAt)?.length,
    inProgress: 2, // Mock data
    filtered: filteredAssessments?.length
  };

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      category: 'all',
      difficulty: 'all',
      status: 'all',
      sort: 'newest'
    });
  };

  const handleStartAssessment = (assessment) => {
    setSelectedAssessment(assessment);
    // For demo purposes, show quick assessment for any selection
    setShowQuickAssessment(true);
  };

  const handleQuickAssessmentComplete = (score) => {
    console.log('Assessment completed with score:', score);
    setShowQuickAssessment(false);
    setSelectedAssessment(null);
    // Here you would typically update the user's portfolio
  };

  const handleShareBadge = (badge) => {
    console.log('Sharing badge:', badge);
    // Implement share functionality
  };

  const handleViewCertificate = (badge) => {
    console.log('Viewing certificate for:', badge);
    // Implement certificate viewing
  };

  const handleExploreCareer = (career) => {
    console.log('Exploring career:', career);
    // Navigate to career explorer
  };

  const tabs = [
    { id: 'assessments', label: 'Assessments', icon: 'Target', count: assessments?.length },
    { id: 'portfolio', label: 'Skills Portfolio', icon: 'Award', count: portfolio?.badges?.length },
    { id: 'insights', label: 'Career Insights', icon: 'BarChart3', count: insights?.skillConnections?.length }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-brand text-white py-16">
          <div className="container-brand">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
                  <Icon name="Target" size={32} className="text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Skills Assessment Arena
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Discover your superpowers through engaging, game-like assessments. 
                Transform skill evaluation into an exciting journey of self-discovery and growth.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="secondary"
                  size="lg"
                  iconName="Play"
                  iconPosition="left"
                  onClick={() => setShowQuickAssessment(true)}
                  className="bg-white text-primary hover:bg-white/90"
                >
                  Take Quick Assessment
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="BarChart3"
                  iconPosition="left"
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  View My Progress
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white border-b border-border">
          <div className="container-brand">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-text-secondary">Skill Assessments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">25K+</div>
                <div className="text-text-secondary">Assessments Taken</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">95%</div>
                <div className="text-text-secondary">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success mb-2">4.9</div>
                <div className="text-text-secondary">User Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container-brand">
            {/* Tab Navigation */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-1 bg-white rounded-lg p-1 shadow-brand border border-border">
                {tabs?.map((tab) => (
                  <button
                    key={tab?.id}
                    onClick={() => setActiveTab(tab?.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      activeTab === tab?.id
                        ? 'bg-primary text-white shadow-brand'
                        : 'text-text-secondary hover:text-primary hover:bg-gray-50'
                    }`}
                  >
                    <Icon name={tab?.icon} size={16} />
                    <span>{tab?.label}</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      activeTab === tab?.id
                        ? 'bg-white/20 text-white' :'bg-gray-100 text-text-secondary'
                    }`}>
                      {tab?.count}
                    </span>
                  </button>
                ))}
              </div>

              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  iconName="Download"
                  iconPosition="left"
                  className="hidden md:flex"
                >
                  Export Results
                </Button>
                <Button
                  variant="default"
                  iconName="Plus"
                  iconPosition="left"
                  className="btn-brand-accent"
                >
                  Create Custom Assessment
                </Button>
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === 'assessments' && (
              <div className="space-y-6">
                <AssessmentFilters
                  filters={filters}
                  onFilterChange={handleFilterChange}
                  onClearFilters={handleClearFilters}
                  assessmentCounts={assessmentCounts}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredAssessments?.map((assessment) => (
                    <AssessmentCard
                      key={assessment?.id}
                      assessment={assessment}
                      onStart={handleStartAssessment}
                    />
                  ))}
                </div>

                {filteredAssessments?.length === 0 && (
                  <div className="text-center py-12">
                    <Icon name="Search" size={48} className="text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      No assessments found
                    </h3>
                    <p className="text-text-secondary mb-4">
                      Try adjusting your filters to see more results
                    </p>
                    <Button
                      variant="outline"
                      onClick={handleClearFilters}
                    >
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'portfolio' && (
              <SkillsPortfolio
                portfolio={portfolio}
                onShareBadge={handleShareBadge}
                onViewCertificate={handleViewCertificate}
              />
            )}

            {activeTab === 'insights' && (
              <AssessmentInsights
                insights={insights}
                onExploreCareer={handleExploreCareer}
              />
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container-brand">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-bold text-primary mb-4">
                Ready to Unlock Your Potential?
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                Join thousands of professionals who have discovered their strengths and 
                accelerated their careers through our intelligent assessment platform.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Zap"
                  iconPosition="left"
                  className="btn-brand-primary"
                >
                  Start Your Journey
                </Button>
                <Link to="/career-path-explorer">
                  <Button
                    variant="outline"
                    size="lg"
                    iconName="ArrowRight"
                    iconPosition="right"
                  >
                    Explore Career Paths
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container-brand">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <Icon name="Target" size={20} className="text-primary" />
                </div>
                <span className="text-xl font-heading font-bold">Job Salvage AI</span>
              </div>
              <p className="text-white/80 text-sm">
                Transform your career uncertainty into strategic opportunity through intelligent assessments.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Assessments</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><Link to="#" className="hover:text-white">Technical Skills</Link></li>
                <li><Link to="#" className="hover:text-white">Leadership</Link></li>
                <li><Link to="#" className="hover:text-white">Creative Thinking</Link></li>
                <li><Link to="#" className="hover:text-white">Data Analysis</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><Link to="#" className="hover:text-white">Study Guides</Link></li>
                <li><Link to="#" className="hover:text-white">Practice Tests</Link></li>
                <li><Link to="#" className="hover:text-white">Skill Roadmaps</Link></li>
                <li><Link to="#" className="hover:text-white">Certificates</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><Link to="#" className="hover:text-white">Help Center</Link></li>
                <li><Link to="#" className="hover:text-white">Contact Us</Link></li>
                <li><Link to="#" className="hover:text-white">Community</Link></li>
                <li><Link to="#" className="hover:text-white">Feedback</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
            <p>&copy; {new Date()?.getFullYear()} Job Salvage AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
      {/* Quick Assessment Modal */}
      {showQuickAssessment && (
        <QuickAssessment
          assessment={quickAssessmentData}
          onComplete={handleQuickAssessmentComplete}
          onClose={() => setShowQuickAssessment(false)}
        />
      )}
    </div>
  );
};

export default SkillsAssessmentArena;