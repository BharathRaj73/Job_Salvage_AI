import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const AssessmentFilters = ({ 
  filters, 
  onFilterChange, 
  onClearFilters, 
  assessmentCounts 
}) => {
  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    { value: 'Technical', label: 'Technical Skills' },
    { value: 'Analytical', label: 'Analytical Skills' },
    { value: 'Creative', label: 'Creative Skills' },
    { value: 'Leadership', label: 'Leadership Skills' },
    { value: 'Communication', label: 'Communication Skills' }
  ];

  const difficultyOptions = [
    { value: 'all', label: 'All Levels' },
    { value: 'Beginner', label: 'Beginner' },
    { value: 'Intermediate', label: 'Intermediate' },
    { value: 'Advanced', label: 'Advanced' }
  ];

  const statusOptions = [
    { value: 'all', label: 'All Assessments' },
    { value: 'available', label: 'Available' },
    { value: 'completed', label: 'Completed' },
    { value: 'in-progress', label: 'In Progress' }
  ];

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'popular', label: 'Most Popular' },
    { value: 'difficulty-asc', label: 'Easiest First' },
    { value: 'difficulty-desc', label: 'Hardest First' },
    { value: 'duration-asc', label: 'Shortest First' },
    { value: 'duration-desc', label: 'Longest First' }
  ];

  const hasActiveFilters = filters?.category !== 'all' || 
                          filters?.difficulty !== 'all' || 
                          filters?.status !== 'all' || 
                          filters?.sort !== 'newest';

  return (
    <div className="bg-white rounded-xl shadow-brand border border-border p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-heading font-semibold text-primary">
          Filter Assessments
        </h3>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            iconName="X"
            iconPosition="left"
            onClick={onClearFilters}
            className="text-text-secondary hover:text-primary"
          >
            Clear Filters
          </Button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <Select
          label="Category"
          options={categoryOptions}
          value={filters?.category}
          onChange={(value) => onFilterChange('category', value)}
          className="mb-0"
        />

        <Select
          label="Difficulty"
          options={difficultyOptions}
          value={filters?.difficulty}
          onChange={(value) => onFilterChange('difficulty', value)}
          className="mb-0"
        />

        <Select
          label="Status"
          options={statusOptions}
          value={filters?.status}
          onChange={(value) => onFilterChange('status', value)}
          className="mb-0"
        />

        <Select
          label="Sort By"
          options={sortOptions}
          value={filters?.sort}
          onChange={(value) => onFilterChange('sort', value)}
          className="mb-0"
        />
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center space-x-6 text-sm text-text-secondary">
          <div className="flex items-center space-x-2">
            <Icon name="Target" size={16} />
            <span>{assessmentCounts?.total} Total Assessments</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="CheckCircle" size={16} className="text-success" />
            <span>{assessmentCounts?.completed} Completed</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Clock" size={16} className="text-yellow-600" />
            <span>{assessmentCounts?.inProgress} In Progress</span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Icon name="Filter" size={16} className="text-text-secondary" />
          <span className="text-sm text-text-secondary">
            Showing {assessmentCounts?.filtered} results
          </span>
        </div>
      </div>
    </div>
  );
};

export default AssessmentFilters;