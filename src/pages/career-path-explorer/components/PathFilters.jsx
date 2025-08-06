import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PathFilters = ({ onFiltersChange, activeFilters = {} }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [localFilters, setLocalFilters] = useState({
    salaryRange: activeFilters?.salaryRange || [60000, 200000],
    timeline: activeFilters?.timeline || 'any',
    industries: activeFilters?.industries || [],
    workStyle: activeFilters?.workStyle || 'any',
    resilience: activeFilters?.resilience || 'any',
    location: activeFilters?.location || 'any'
  });

  const salaryRanges = [
    { value: [50000, 80000], label: '$50K - $80K' },
    { value: [80000, 120000], label: '$80K - $120K' },
    { value: [120000, 160000], label: '$120K - $160K' },
    { value: [160000, 250000], label: '$160K - $250K+' }
  ];

  const timelineOptions = [
    { value: 'any', label: 'Any Timeline' },
    { value: '1-3', label: '1-3 months' },
    { value: '3-6', label: '3-6 months' },
    { value: '6-12', label: '6-12 months' },
    { value: '12+', label: '12+ months' }
  ];

  const industryOptions = [
    { value: 'technology', label: 'Technology', icon: 'Laptop' },
    { value: 'healthcare', label: 'Healthcare', icon: 'Heart' },
    { value: 'finance', label: 'Finance', icon: 'DollarSign' },
    { value: 'education', label: 'Education', icon: 'BookOpen' },
    { value: 'consulting', label: 'Consulting', icon: 'Users' },
    { value: 'ecommerce', label: 'E-commerce', icon: 'ShoppingCart' }
  ];

  const workStyleOptions = [
    { value: 'any', label: 'Any Style' },
    { value: 'remote', label: 'Remote' },
    { value: 'hybrid', label: 'Hybrid' },
    { value: 'onsite', label: 'On-site' }
  ];

  const resilienceOptions = [
    { value: 'any', label: 'Any Resilience' },
    { value: 'high', label: 'High Resilience Only' },
    { value: 'moderate', label: 'Moderate+ Resilience' }
  ];

  const locationOptions = [
    { value: 'any', label: 'Any Location' },
    { value: 'sf-bay', label: 'San Francisco Bay Area' },
    { value: 'nyc', label: 'New York City' },
    { value: 'seattle', label: 'Seattle' },
    { value: 'austin', label: 'Austin' },
    { value: 'remote', label: 'Remote Opportunities' }
  ];

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...localFilters, [filterType]: value };
    setLocalFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const handleIndustryToggle = (industry) => {
    const currentIndustries = localFilters?.industries;
    const newIndustries = currentIndustries?.includes(industry)
      ? currentIndustries?.filter(i => i !== industry)
      : [...currentIndustries, industry];
    
    handleFilterChange('industries', newIndustries);
  };

  const clearAllFilters = () => {
    const defaultFilters = {
      salaryRange: [60000, 200000],
      timeline: 'any',
      industries: [],
      workStyle: 'any',
      resilience: 'any',
      location: 'any'
    };
    setLocalFilters(defaultFilters);
    onFiltersChange(defaultFilters);
  };

  const getActiveFilterCount = () => {
    let count = 0;
    if (localFilters?.timeline !== 'any') count++;
    if (localFilters?.industries?.length > 0) count++;
    if (localFilters?.workStyle !== 'any') count++;
    if (localFilters?.resilience !== 'any') count++;
    if (localFilters?.location !== 'any') count++;
    if (localFilters?.salaryRange?.[0] !== 60000 || localFilters?.salaryRange?.[1] !== 200000) count++;
    return count;
  };

  return (
    <div className="bg-white rounded-xl shadow-brand border border-border p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Icon name="Filter" size={20} className="text-secondary" />
          <h3 className="text-lg font-heading font-semibold text-primary">Path Filters</h3>
          {getActiveFilterCount() > 0 && (
            <span className="px-2 py-1 bg-secondary text-white text-xs rounded-full">
              {getActiveFilterCount()} active
            </span>
          )}
        </div>
        <div className="flex items-center space-x-2">
          {getActiveFilterCount() > 0 && (
            <Button variant="ghost" size="sm" onClick={clearAllFilters}>
              Clear All
            </Button>
          )}
          <Button
            variant="ghost"
            size="sm"
            iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
            iconPosition="right"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Less' : 'More'} Filters
          </Button>
        </div>
      </div>
      {/* Quick Filters - Always Visible */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-primary mb-2">Salary Range</label>
          <select
            value={`${localFilters?.salaryRange?.[0]}-${localFilters?.salaryRange?.[1]}`}
            onChange={(e) => {
              const [min, max] = e?.target?.value?.split('-')?.map(Number);
              handleFilterChange('salaryRange', [min, max]);
            }}
            className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:ring-2 focus:ring-secondary focus:border-transparent"
          >
            {salaryRanges?.map((range) => (
              <option key={`${range?.value?.[0]}-${range?.value?.[1]}`} value={`${range?.value?.[0]}-${range?.value?.[1]}`}>
                {range?.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-primary mb-2">Timeline</label>
          <select
            value={localFilters?.timeline}
            onChange={(e) => handleFilterChange('timeline', e?.target?.value)}
            className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:ring-2 focus:ring-secondary focus:border-transparent"
          >
            {timelineOptions?.map((option) => (
              <option key={option?.value} value={option?.value}>
                {option?.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-primary mb-2">Resilience Level</label>
          <select
            value={localFilters?.resilience}
            onChange={(e) => handleFilterChange('resilience', e?.target?.value)}
            className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:ring-2 focus:ring-secondary focus:border-transparent"
          >
            {resilienceOptions?.map((option) => (
              <option key={option?.value} value={option?.value}>
                {option?.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* Expanded Filters */}
      {isExpanded && (
        <div className="space-y-6 pt-4 border-t border-border animate-fade-in">
          {/* Industries */}
          <div>
            <label className="block text-sm font-medium text-primary mb-3">Industries</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {industryOptions?.map((industry) => (
                <button
                  key={industry?.value}
                  onClick={() => handleIndustryToggle(industry?.value)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    localFilters?.industries?.includes(industry?.value)
                      ? 'bg-secondary text-white' :'bg-muted text-text-secondary hover:bg-secondary/10 hover:text-secondary'
                  }`}
                >
                  <Icon name={industry?.icon} size={16} />
                  <span>{industry?.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Work Style & Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-primary mb-2">Work Style</label>
              <select
                value={localFilters?.workStyle}
                onChange={(e) => handleFilterChange('workStyle', e?.target?.value)}
                className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:ring-2 focus:ring-secondary focus:border-transparent"
              >
                {workStyleOptions?.map((option) => (
                  <option key={option?.value} value={option?.value}>
                    {option?.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-primary mb-2">Location</label>
              <select
                value={localFilters?.location}
                onChange={(e) => handleFilterChange('location', e?.target?.value)}
                className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:ring-2 focus:ring-secondary focus:border-transparent"
              >
                {locationOptions?.map((option) => (
                  <option key={option?.value} value={option?.value}>
                    {option?.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Advanced Options */}
          <div className="bg-muted/50 rounded-lg p-4">
            <h4 className="font-medium text-primary mb-3 flex items-center space-x-2">
              <Icon name="Settings" size={16} />
              <span>Advanced Preferences</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-border" />
                <span className="text-text-secondary">Show only roles with high growth potential</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-border" />
                <span className="text-text-secondary">Include emerging/new roles</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-border" />
                <span className="text-text-secondary">Prioritize roles with certification paths</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-border" />
                <span className="text-text-secondary">Show international opportunities</span>
              </label>
            </div>
          </div>
        </div>
      )}
      {/* Filter Summary */}
      {getActiveFilterCount() > 0 && (
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-secondary">
              Showing paths matching {getActiveFilterCount()} filter{getActiveFilterCount() !== 1 ? 's' : ''}
            </span>
            <span className="text-secondary font-medium">
              247 opportunities found
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default PathFilters;