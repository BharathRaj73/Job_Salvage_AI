import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import CareerNetworkMap from './components/CareerNetworkMap';
import OpportunityRadar from './components/OpportunityRadar';
import RoleDetailPanel from './components/RoleDetailPanel';
import PathFilters from './components/PathFilters';
import SkillsBridge from './components/SkillsBridge';

const CareerPathExplorer = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [currentRole, setCurrentRole] = useState('Marketing Manager');
  const [filters, setFilters] = useState({});
  const [viewMode, setViewMode] = useState('network'); // 'network', 'list', 'skills'

  useEffect(() => {
    document.title = 'Career Path Explorer - Job Salvage AI';
  }, []);

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  const handleStartTransition = (role) => {
    console.log('Starting transition roadmap for:', role?.title);
    setSelectedRole(null);
    // This would typically navigate to the learning center
  };

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
  };

  const quickStats = [
    {
      label: 'Recession-Proof Paths',
      value: '247',
      icon: 'Shield',
      color: 'text-green-600 bg-green-50 border-green-200'
    },
    {
      label: 'Avg. Transition Time',
      value: '4.2 months',
      icon: 'Clock',
      color: 'text-secondary bg-secondary/10 border-secondary/20'
    },
    {
      label: 'Success Rate',
      value: '78%',
      icon: 'TrendingUp',
      color: 'text-accent bg-accent/10 border-accent/20'
    },
    {
      label: 'Active Opportunities',
      value: '1,847',
      icon: 'Briefcase',
      color: 'text-primary bg-primary/10 border-primary/20'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container-brand">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center shadow-brand">
                <Icon name="Map" size={24} className="text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary">
                Career Path Explorer
              </h1>
            </div>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Transform career uncertainty into strategic opportunity. Discover recession-proof paths, 
              visualize skill bridges, and explore your next career move with AI-powered insights.
            </p>
            
            {/* Current Role Selector */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className="text-sm font-medium text-primary">Starting from:</span>
              <div className="relative">
                <select
                  value={currentRole}
                  onChange={(e) => setCurrentRole(e?.target?.value)}
                  className="px-4 py-2 bg-white border border-border rounded-lg text-primary font-medium focus:ring-2 focus:ring-secondary focus:border-transparent appearance-none pr-10"
                >
                  <option value="Marketing Manager">Marketing Manager</option>
                  <option value="Sales Manager">Sales Manager</option>
                  <option value="Project Manager">Project Manager</option>
                  <option value="Business Analyst">Business Analyst</option>
                  <option value="Software Developer">Software Developer</option>
                </select>
                <Icon name="ChevronDown" size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary pointer-events-none" />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {quickStats?.map((stat, index) => (
                <div key={index} className={`p-4 rounded-lg border ${stat?.color}`}>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Icon name={stat?.icon} size={20} />
                    <span className="text-2xl font-bold">{stat?.value}</span>
                  </div>
                  <div className="text-sm font-medium">{stat?.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section className="py-12">
        <div className="container-brand">
          {/* View Mode Toggle */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2 bg-muted rounded-lg p-1">
              <button
                onClick={() => setViewMode('network')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  viewMode === 'network' ?'bg-white text-primary shadow-sm' :'text-text-secondary hover:text-primary'
                }`}
              >
                <Icon name="GitBranch" size={16} />
                <span>Network View</span>
              </button>
              <button
                onClick={() => setViewMode('skills')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  viewMode === 'skills' ?'bg-white text-primary shadow-sm' :'text-text-secondary hover:text-primary'
                }`}
              >
                <Icon name="Target" size={16} />
                <span>Skills Bridge</span>
              </button>
            </div>

            <div className="flex items-center space-x-3">
              <Button variant="outline" iconName="Download" iconPosition="left">
                Export Analysis
              </Button>
              <Button variant="default" className="btn-brand-accent" iconName="Zap" iconPosition="left">
                AI Career Consultation
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Filters */}
            <div className="lg:col-span-1 space-y-6">
              <PathFilters onFiltersChange={handleFiltersChange} activeFilters={filters} />
              
              {/* AI Insights Panel */}
              <div className="bg-white rounded-xl shadow-brand border border-border p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent to-secondary rounded-lg flex items-center justify-center">
                    <Icon name="Brain" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-primary">AI Insights</h3>
                    <p className="text-sm text-text-secondary">Personalized recommendations</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <Icon name="Lightbulb" size={16} className="text-secondary mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-primary">Top Recommendation</p>
                        <p className="text-sm text-text-secondary">
                          Product Marketing Manager shows 85% compatibility based on your analytical skills and marketing experience.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <Icon name="TrendingUp" size={16} className="text-accent mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-primary">Market Trend</p>
                        <p className="text-sm text-text-secondary">
                          AI-enhanced marketing roles are growing 45% faster than traditional marketing positions.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <Icon name="Shield" size={16} className="text-green-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-primary">Recession Insight</p>
                        <p className="text-sm text-text-secondary">
                          Your current skill set aligns well with recession-resistant roles in product and growth marketing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {viewMode === 'network' && (
                <>
                  <CareerNetworkMap 
                    currentRole={currentRole}
                    onRoleSelect={handleRoleSelect}
                    selectedRole={selectedRole}
                  />
                  <OpportunityRadar />
                </>
              )}

              {viewMode === 'skills' && (
                <SkillsBridge 
                  currentRole={currentRole}
                  targetRole="Product Marketing Manager"
                />
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Success Stories Section */}
      <section className="py-16 bg-muted/30">
        <div className="container-brand">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">
              Success Stories from Career Explorers
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Real professionals who used our Career Path Explorer to navigate successful transitions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Chen',
                role: 'Marketing Manager → Product Marketing Manager',
                company: 'TechFlow Inc.',
                timeline: '4 months',
                image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
                quote: 'The network visualization helped me see connections I never considered. The skills bridge analysis was spot-on.',
                results: '+35% salary increase, recession-proof role'
              },
              {
                name: 'Michael Rodriguez',
                role: 'Sales Manager → Growth Marketing Manager',
                company: 'StartupX',
                timeline: '5 months',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
                quote: 'The AI insights were incredibly accurate. It identified my transferable skills and showed me the perfect path.',
                results: '+28% salary, high-growth industry'
              },
              {
                name: 'Emily Watson',
                role: 'Project Manager → Product Manager',
                company: 'InnovateCorp',
                timeline: '6 months',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
                quote: 'The learning roadmap was perfectly tailored. I felt confident throughout the entire transition process.',
                results: '+42% salary, leadership role'
              }
            ]?.map((story, index) => (
              <div key={index} className="bg-white rounded-xl shadow-brand border border-border p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={story?.image}
                    alt={story?.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-heading font-semibold text-primary">{story?.name}</h4>
                    <p className="text-sm text-text-secondary">{story?.role}</p>
                  </div>
                </div>
                
                <blockquote className="text-sm text-text-secondary italic mb-4 border-l-4 border-secondary pl-4">
                  "{story?.quote}"
                </blockquote>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">Timeline:</span>
                    <span className="font-medium text-primary">{story?.timeline}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">Company:</span>
                    <span className="font-medium text-primary">{story?.company}</span>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <p className="text-sm font-medium text-green-600">{story?.results}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-brand text-white">
        <div className="container-brand text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Ready to Explore Your Career Path?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who've transformed career uncertainty into strategic opportunity
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Button variant="secondary" size="lg" iconName="Upload" iconPosition="left">
              Upload Resume for Analysis
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
              Start Free Assessment
            </Button>
          </div>
        </div>
      </section>
      {/* Role Detail Modal */}
      {selectedRole && (
        <RoleDetailPanel
          selectedRole={selectedRole}
          onClose={() => setSelectedRole(null)}
          onStartTransition={handleStartTransition}
        />
      )}
    </div>
  );
};

export default CareerPathExplorer;