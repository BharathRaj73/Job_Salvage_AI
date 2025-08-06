import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerSections = [
    {
      title: 'Platform',
      links: [
        { name: 'Resume Intelligence', path: '/resume-intelligence-dashboard' },
        { name: 'Career Paths', path: '/career-path-explorer' },
        { name: 'Learning Center', path: '/adaptive-learning-center' },
        { name: 'Skills Assessment', path: '/skills-assessment-arena' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about-career-resilience-mission' },
        { name: 'Our Mission', path: '/about-career-resilience-mission' },
        { name: 'Success Stories', path: '/homepage-ai-career-intelligence-platform#success-stories' },
        { name: 'Careers', path: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Career Guides', path: '#' },
        { name: 'Industry Reports', path: '#' },
        { name: 'Skill Trends', path: '#' },
        { name: 'Salary Insights', path: '#' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', path: '#' },
        { name: 'Contact Us', path: '#' },
        { name: 'Privacy Policy', path: '#' },
        { name: 'Terms of Service', path: '#' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: 'Linkedin', url: '#' },
    { name: 'Twitter', icon: 'Twitter', url: '#' },
    { name: 'Facebook', icon: 'Facebook', url: '#' },
    { name: 'YouTube', icon: 'Youtube', url: '#' }
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container-brand py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Mail" size={32} className="text-white" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Ahead of Career Trends
            </h3>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Get weekly insights on market trends, skill demands, and career opportunities 
              delivered straight to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg bg-white text-primary placeholder-text-secondary border-0 focus:ring-2 focus:ring-accent"
                />
              </div>
              <Button
                variant="default"
                iconName="Send"
                iconPosition="right"
                className="bg-accent hover:bg-accent/90 text-white px-6"
              >
                Subscribe
              </Button>
            </div>
            
            <p className="text-xs text-primary-foreground/60 mt-4">
              No spam, unsubscribe anytime. Read our Privacy Policy.
            </p>
          </div>
        </div>
      </div>
      {/* Main Footer Content */}
      <div className="container-brand py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link 
              to="/homepage-ai-career-intelligence-platform" 
              className="flex items-center space-x-3 mb-6"
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-accent to-secondary rounded-lg flex items-center justify-center">
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
              <div>
                <h1 className="text-xl font-heading font-bold text-white">
                  Job Salvage AI
                </h1>
                <p className="text-xs text-primary-foreground/80 -mt-1">
                  Career Intelligence Platform
                </p>
              </div>
            </Link>
            
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Transform career uncertainty into strategic opportunity with AI-powered insights, 
              personalized roadmaps, and recession-proof career guidance.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.url}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-200"
                  aria-label={social?.name}
                >
                  <Icon name={social?.icon} size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections?.map((section) => (
            <div key={section?.title}>
              <h4 className="font-semibold text-white mb-4">{section?.title}</h4>
              <ul className="space-y-3">
                {section?.links?.map((link) => (
                  <li key={link?.name}>
                    <Link
                      to={link?.path}
                      className="text-primary-foreground/80 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-brand py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-primary-foreground/80 text-sm">
                © {currentYear} Job Salvage AI. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-xs text-primary-foreground/60">
                <Link to="#" className="hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
                <span>•</span>
                <Link to="#" className="hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
                <span>•</span>
                <Link to="#" className="hover:text-white transition-colors duration-200">
                  Cookie Policy
                </Link>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-xs text-primary-foreground/60">
                <Icon name="Shield" size={14} />
                <span>SOC 2 Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-primary-foreground/60">
                <Icon name="Globe" size={14} />
                <span>GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;