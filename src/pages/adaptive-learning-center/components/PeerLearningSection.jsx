import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const PeerLearningSection = ({ studyGroups, learningBuddies, onJoinGroup, onConnectBuddy }) => {
  const [activeTab, setActiveTab] = useState('groups');

  const StudyGroupCard = ({ group }) => (
    <div className="bg-card rounded-lg shadow-brand border border-border p-4 hover-lift">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h4 className="font-medium text-foreground mb-1">{group?.name}</h4>
          <p className="text-sm text-muted-foreground line-clamp-2">{group?.description}</p>
        </div>
        <div className="flex items-center space-x-1 text-xs text-muted-foreground ml-3">
          <Icon name="Users" size={12} />
          <span>{group?.memberCount}/{group?.maxMembers}</span>
        </div>
      </div>

      <div className="flex items-center space-x-4 mb-3 text-xs text-muted-foreground">
        <div className="flex items-center space-x-1">
          <Icon name="Calendar" size={12} />
          <span>{group?.schedule}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Icon name="Clock" size={12} />
          <span>{group?.duration}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Icon name="Target" size={12} />
          <span>{group?.focusArea}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex -space-x-2">
          {group?.members?.slice(0, 3)?.map((member, index) => (
            <Image
              key={index}
              src={member?.avatar}
              alt={member?.name}
              className="w-6 h-6 rounded-full border-2 border-white"
            />
          ))}
          {group?.memberCount > 3 && (
            <div className="w-6 h-6 rounded-full bg-muted border-2 border-white flex items-center justify-center">
              <span className="text-xs font-medium text-muted-foreground">+{group?.memberCount - 3}</span>
            </div>
          )}
        </div>
        
        <Button
          variant={group?.isJoined ? "outline" : "default"}
          size="sm"
          iconName={group?.isJoined ? "Check" : "Plus"}
          iconPosition="left"
          onClick={() => onJoinGroup(group?.id)}
          disabled={group?.memberCount >= group?.maxMembers && !group?.isJoined}
        >
          {group?.isJoined ? 'Joined' : 'Join Group'}
        </Button>
      </div>
    </div>
  );

  const LearningBuddyCard = ({ buddy }) => (
    <div className="bg-card rounded-lg shadow-brand border border-border p-4 hover-lift">
      <div className="flex items-start space-x-3">
        <div className="relative">
          <Image
            src={buddy?.avatar}
            alt={buddy?.name}
            className="w-12 h-12 rounded-full"
          />
          <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
            buddy?.isOnline ? 'bg-success' : 'bg-muted-foreground'
          }`} />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <h4 className="font-medium text-foreground">{buddy?.name}</h4>
            {buddy?.isVerified && (
              <Icon name="BadgeCheck" size={14} className="text-primary" />
            )}
          </div>
          <p className="text-sm text-muted-foreground mb-2">{buddy?.title}</p>
          
          <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-3">
            <div className="flex items-center space-x-1">
              <Icon name="MapPin" size={12} />
              <span>{buddy?.location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Clock" size={12} />
              <span>{buddy?.timezone}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1 mb-3">
            {buddy?.sharedSkills?.slice(0, 3)?.map((skill, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-primary/10 text-xs font-medium text-primary rounded-full"
              >
                {skill}
              </span>
            ))}
            {buddy?.sharedSkills?.length > 3 && (
              <span className="px-2 py-1 bg-muted text-xs font-medium text-muted-foreground rounded-full">
                +{buddy?.sharedSkills?.length - 3}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <Icon name="Star" size={12} />
              <span>{buddy?.compatibilityScore}% match</span>
            </div>
            
            <Button
              variant={buddy?.isConnected ? "outline" : "default"}
              size="sm"
              iconName={buddy?.isConnected ? "MessageCircle" : "UserPlus"}
              iconPosition="left"
              onClick={() => onConnectBuddy(buddy?.id)}
            >
              {buddy?.isConnected ? 'Message' : 'Connect'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-card rounded-xl shadow-brand border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-heading font-semibold text-foreground">Peer Learning</h2>
          <p className="text-sm text-muted-foreground mt-1">Connect with fellow learners on similar paths</p>
        </div>
        <div className="flex items-center space-x-2">
          <Icon name="Users" size={16} className="text-primary" />
          <span className="text-sm text-muted-foreground">
            {studyGroups?.filter(g => g?.isJoined)?.length + learningBuddies?.filter(b => b?.isConnected)?.length} connections
          </span>
        </div>
      </div>
      {/* Tab Navigation */}
      <div className="flex space-x-1 mb-6 bg-muted rounded-lg p-1">
        <button
          onClick={() => setActiveTab('groups')}
          className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
            activeTab === 'groups' ?'bg-white text-foreground shadow-sm' :'text-muted-foreground hover:text-foreground'
          }`}
        >
          <Icon name="Users" size={16} />
          <span>Study Groups</span>
          <span className="bg-primary/10 text-primary px-1.5 py-0.5 rounded-full text-xs">
            {studyGroups?.length}
          </span>
        </button>
        <button
          onClick={() => setActiveTab('buddies')}
          className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
            activeTab === 'buddies' ?'bg-white text-foreground shadow-sm' :'text-muted-foreground hover:text-foreground'
          }`}
        >
          <Icon name="UserCheck" size={16} />
          <span>Learning Buddies</span>
          <span className="bg-accent/10 text-accent px-1.5 py-0.5 rounded-full text-xs">
            {learningBuddies?.length}
          </span>
        </button>
      </div>
      {/* Content */}
      <div className="space-y-4">
        {activeTab === 'groups' ? (
          <>
            {studyGroups?.length > 0 ? (
              studyGroups?.map((group) => (
                <StudyGroupCard key={group?.id} group={group} />
              ))
            ) : (
              <div className="text-center py-8">
                <Icon name="Users" size={48} className="text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">No Study Groups Yet</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Study groups will appear here based on your learning path and preferences.
                </p>
                <Button variant="outline" iconName="Plus" iconPosition="left">
                  Create Study Group
                </Button>
              </div>
            )}
          </>
        ) : (
          <>
            {learningBuddies?.length > 0 ? (
              learningBuddies?.map((buddy) => (
                <LearningBuddyCard key={buddy?.id} buddy={buddy} />
              ))
            ) : (
              <div className="text-center py-8">
                <Icon name="UserCheck" size={48} className="text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">No Learning Buddies Yet</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  We'll suggest compatible learning partners based on your goals and progress.
                </p>
                <Button variant="outline" iconName="Search" iconPosition="left">
                  Find Learning Buddies
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default PeerLearningSection;