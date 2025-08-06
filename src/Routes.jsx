import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import Homepage from './pages/homepage-ai-career-intelligence-platform';
import ResumeIntelligenceDashboard from './pages/resume-intelligence-dashboard';
import CareerPathExplorer from './pages/career-path-explorer';
import AboutCareerResilienceMission from './pages/about-career-resilience-mission';
import SkillsAssessmentArena from './pages/skills-assessment-arena';
import AdaptiveLearningCenter from './pages/adaptive-learning-center';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<AboutCareerResilienceMission />} />
        <Route path="/homepage-ai-career-intelligence-platform" element={<Homepage />} />
        <Route path="/resume-intelligence-dashboard" element={<ResumeIntelligenceDashboard />} />
        <Route path="/career-path-explorer" element={<CareerPathExplorer />} />
        <Route path="/about-career-resilience-mission" element={<AboutCareerResilienceMission />} />
        <Route path="/skills-assessment-arena" element={<SkillsAssessmentArena />} />
        <Route path="/adaptive-learning-center" element={<AdaptiveLearningCenter />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
