import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = ({ className = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    {
      name: 'Dashboard',
      path: '/resume-intelligence-dashboard',
      icon: 'BarChart3'
    },
    {
      name: 'Career Paths',
      path: '/career-path-explorer',
      icon: 'TrendingUp'
    },
    {
      name: 'Learning',
      path: '/adaptive-learning-center',
      icon: 'BookOpen'
    },
    {
      name: 'Skills',
      path: '/skills-assessment-arena',
      icon: 'Target'
    }
  ];

  const moreItems = [
    {
      name: 'About',
      path: '/about-career-resilience-mission',
      icon: 'Info'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const Logo = () => (
    <Link 
      to="/homepage-ai-career-intelligence-platform" 
      className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200"
    >
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-brand rounded-lg flex items-center justify-center shadow-brand">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              d="M12 2L2 7L12 12L22 7L12 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 17L12 22L22 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 12L12 17L22 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse-brand"></div>
      </div>
      <div className="hidden sm:block">
        <h1 className="text-xl font-heading font-bold text-primary">
          Job Salvage AI
        </h1>
        <p className="text-xs text-trust font-medium -mt-1">
          Career Intelligence Platform
        </p>
      </div>
    </Link>
  );

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-brand shadow-brand border-b border-border' 
          : 'bg-white/90 backdrop-blur-sm'
      } ${className}`}
    >
      <div className="container-brand">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActivePath(item?.path)
                    ? 'bg-primary text-primary-foreground shadow-brand'
                    : 'text-text-secondary hover:text-primary hover:bg-muted'
                }`}
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.name}</span>
              </Link>
            ))}
            
            {/* More Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-text-secondary hover:text-primary hover:bg-muted transition-all duration-200">
                <Icon name="MoreHorizontal" size={16} />
                <span>More</span>
              </button>
              
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-brand border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  {moreItems?.map((item) => (
                    <Link
                      key={item?.path}
                      to={item?.path}
                      className={`flex items-center space-x-3 px-4 py-2 text-sm transition-colors duration-200 ${
                        isActivePath(item?.path)
                          ? 'bg-primary/10 text-primary font-medium' :'text-text-secondary hover:text-primary hover:bg-muted'
                      }`}
                    >
                      <Icon name={item?.icon} size={16} />
                      <span>{item?.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              iconName="User"
              iconPosition="left"
              className="text-trust hover:text-primary"
            >
              Sign In
            </Button>
            <Button
              variant="default"
              size="sm"
              iconName="Zap"
              iconPosition="left"
              className="btn-brand-accent hover-scale"
            >
              Analyze Career
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-muted transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            <Icon 
              name={isMobileMenuOpen ? "X" : "Menu"} 
              size={24} 
            />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div 
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-screen opacity-100' :'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="bg-white border-t border-border shadow-brand">
          <div className="container-brand py-4">
            <nav className="space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground shadow-brand'
                      : 'text-text-secondary hover:text-primary hover:bg-muted'
                  }`}
                >
                  <Icon name={item?.icon} size={18} />
                  <span>{item?.name}</span>
                </Link>
              ))}
              
              {moreItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground shadow-brand'
                      : 'text-text-secondary hover:text-primary hover:bg-muted'
                  }`}
                >
                  <Icon name={item?.icon} size={18} />
                  <span>{item?.name}</span>
                </Link>
              ))}
            </nav>
            
            <div className="mt-6 pt-4 border-t border-border space-y-3">
              <Button
                variant="outline"
                fullWidth
                iconName="User"
                iconPosition="left"
                className="justify-center"
              >
                Sign In
              </Button>
              <Button
                variant="default"
                fullWidth
                iconName="Zap"
                iconPosition="left"
                className="btn-brand-accent justify-center"
              >
                Analyze My Career
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;