import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const CareerNetworkMap = ({ currentRole, onRoleSelect, selectedRole }) => {
  const [hoveredRole, setHoveredRole] = useState(null);
  const [animationPhase, setAnimationPhase] = useState(0);

  const careerPaths = [
    {
      id: 'current',
      title: currentRole || 'Marketing Manager',
      x: 50,
      y: 50,
      resilience: 'high',
      isCurrent: true,
      connections: ['product-marketing', 'growth-marketing', 'marketing-director', 'brand-manager']
    },
    {
      id: 'product-marketing',
      title: 'Product Marketing Manager',
      x: 25,
      y: 25,
      resilience: 'high',
      salary: '$85K - $125K',
      compatibility: 85,
      connections: ['product-manager', 'marketing-director']
    },
    {
      id: 'growth-marketing',
      title: 'Growth Marketing Manager',
      x: 75,
      y: 25,
      resilience: 'high',
      salary: '$90K - $135K',
      compatibility: 78,
      connections: ['marketing-director', 'data-analyst']
    },
    {
      id: 'marketing-director',
      title: 'Marketing Director',
      x: 50,
      y: 15,
      resilience: 'high',
      salary: '$120K - $180K',
      compatibility: 72,
      connections: ['vp-marketing']
    },
    {
      id: 'brand-manager',
      title: 'Brand Manager',
      x: 20,
      y: 65,
      resilience: 'moderate',
      salary: '$75K - $110K',
      compatibility: 82,
      connections: ['brand-director']
    },
    {
      id: 'product-manager',
      title: 'Product Manager',
      x: 15,
      y: 40,
      resilience: 'high',
      salary: '$95K - $140K',
      compatibility: 68,
      connections: ['senior-product-manager']
    },
    {
      id: 'data-analyst',
      title: 'Marketing Data Analyst',
      x: 85,
      y: 40,
      resilience: 'high',
      salary: '$70K - $105K',
      compatibility: 75,
      connections: ['data-scientist']
    },
    {
      id: 'vp-marketing',
      title: 'VP of Marketing',
      x: 50,
      y: 5,
      resilience: 'high',
      salary: '$180K - $250K',
      compatibility: 65,
      connections: []
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const getResilienceColor = (resilience) => {
    switch (resilience) {
      case 'high': return 'text-green-600 bg-green-50 border-green-200';
      case 'moderate': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getConnectionPath = (from, to) => {
    const fromRole = careerPaths?.find(role => role?.id === from);
    const toRole = careerPaths?.find(role => role?.id === to);
    if (!fromRole || !toRole) return '';
    
    return `M ${fromRole?.x} ${fromRole?.y} Q ${(fromRole?.x + toRole?.x) / 2} ${Math.min(fromRole?.y, toRole?.y) - 5} ${toRole?.x} ${toRole?.y}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-brand border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-heading font-semibold text-primary">Career Network Map</h3>
          <p className="text-sm text-text-secondary mt-1">Explore recession-proof career paths from your current role</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-xs text-text-secondary">High Resilience</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span className="text-xs text-text-secondary">Moderate Risk</span>
          </div>
        </div>
      </div>
      <div className="relative w-full h-96 bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
          {/* Connection Lines */}
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--color-secondary)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          
          {careerPaths?.map(role => 
            role?.connections?.map(connectionId => (
              <path
                key={`${role?.id}-${connectionId}`}
                d={getConnectionPath(role?.id, connectionId)}
                stroke="url(#connectionGradient)"
                strokeWidth="0.3"
                fill="none"
                className={`transition-all duration-500 ${
                  hoveredRole === role?.id || hoveredRole === connectionId 
                    ? 'opacity-100 stroke-2' :'opacity-40'
                }`}
              />
            ))
          )}

          {/* Career Role Nodes */}
          {careerPaths?.map((role, index) => (
            <g key={role?.id} className="cursor-pointer">
              <circle
                cx={role?.x}
                cy={role?.y}
                r={role?.isCurrent ? "4" : "3"}
                className={`transition-all duration-300 ${
                  role?.isCurrent 
                    ? 'fill-primary stroke-primary-foreground stroke-2' 
                    : role?.resilience === 'high' ?'fill-green-500 stroke-white stroke-2 hover:fill-green-600' :'fill-yellow-500 stroke-white stroke-2 hover:fill-yellow-600'
                } ${hoveredRole === role?.id ? 'r-4' : ''}`}
                onMouseEnter={() => setHoveredRole(role?.id)}
                onMouseLeave={() => setHoveredRole(null)}
                onClick={() => onRoleSelect(role)}
                style={{
                  filter: role?.isCurrent ? 'drop-shadow(0 0 8px var(--color-accent))' : 'none',
                  animation: role?.isCurrent ? `pulse 2s infinite` : 'none'
                }}
              />
              
              {/* Role Labels */}
              <text
                x={role?.x}
                y={role?.y - 6}
                textAnchor="middle"
                className={`text-xs font-medium transition-all duration-300 ${
                  role?.isCurrent ? 'fill-primary' : 'fill-gray-700'
                } ${hoveredRole === role?.id ? 'fill-secondary font-semibold' : ''}`}
                onMouseEnter={() => setHoveredRole(role?.id)}
                onMouseLeave={() => setHoveredRole(null)}
                onClick={() => onRoleSelect(role)}
              >
                {role?.title?.length > 20 ? role?.title?.substring(0, 18) + '...' : role?.title}
              </text>

              {/* Compatibility Badge */}
              {!role?.isCurrent && role?.compatibility && (
                <g className={`transition-opacity duration-300 ${hoveredRole === role?.id ? 'opacity-100' : 'opacity-0'}`}>
                  <rect
                    x={role?.x + 4}
                    y={role?.y - 2}
                    width="12"
                    height="4"
                    rx="2"
                    className="fill-accent"
                  />
                  <text
                    x={role?.x + 10}
                    y={role?.y + 0.5}
                    textAnchor="middle"
                    className="text-xs fill-white font-medium"
                  >
                    {role?.compatibility}%
                  </text>
                </g>
              )}
            </g>
          ))}

          {/* Animated Opportunity Pulse */}
          <circle
            cx="75"
            cy="25"
            r={3 + animationPhase}
            className="fill-none stroke-accent stroke-1 opacity-60"
          />
        </svg>

        {/* Floating Info Card */}
        {hoveredRole && (
          <div 
            className="absolute z-10 bg-white rounded-lg shadow-brand border border-border p-4 min-w-64 animate-fade-in"
            style={{
              left: `${careerPaths?.find(r => r?.id === hoveredRole)?.x || 50}%`,
              top: `${(careerPaths?.find(r => r?.id === hoveredRole)?.y || 50) - 15}%`,
              transform: 'translate(-50%, -100%)'
            }}
          >
            {(() => {
              const role = careerPaths?.find(r => r?.id === hoveredRole);
              return (
                <div>
                  <h4 className="font-heading font-semibold text-primary mb-2">{role?.title}</h4>
                  {role?.salary && (
                    <p className="text-sm text-text-secondary mb-1">
                      <Icon name="DollarSign" size={14} className="inline mr-1" />
                      {role?.salary}
                    </p>
                  )}
                  {role?.compatibility && (
                    <p className="text-sm text-text-secondary mb-2">
                      <Icon name="Target" size={14} className="inline mr-1" />
                      {role?.compatibility}% compatibility
                    </p>
                  )}
                  <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getResilienceColor(role?.resilience)}`}>
                    <Icon name="Shield" size={12} className="mr-1" />
                    {role?.resilience === 'high' ? 'High Resilience' : 'Moderate Risk'}
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 text-sm text-text-secondary">
          <Icon name="Info" size={16} />
          <span>Click any role to explore detailed transition path</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
          <span className="text-xs text-text-secondary">Live opportunity radar active</span>
        </div>
      </div>
    </div>
  );
};

export default CareerNetworkMap;