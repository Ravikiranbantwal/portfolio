import React, { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Navigation } from '@/components/layout/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';

// Lazy load other sections for better performance
const AboutSection = React.lazy(() => import('@/components/sections/AboutSection'));
const ProjectsSection = React.lazy(() => import('@/components/sections/ProjectsSection'));
const SkillsSection = React.lazy(() => import('@/components/sections/SkillsSection'));
const ExperienceSection = React.lazy(() => import('@/components/sections/ExperienceSection'));
const ContactSection = React.lazy(() => import('@/components/sections/ContactSection'));

// Loading component
const SectionLoader: React.FC = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="loading-dots">
      <div className="loading-dot bg-primary-500"></div>
      <div className="loading-dot bg-accent-500"></div>
      <div className="loading-dot bg-primary-500"></div>
    </div>
  </div>
);

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-950 text-white overflow-x-hidden">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section id="home">
          <HeroSection />
        </section>

        {/* About Section */}
        <section id="about">
          <Suspense fallback={<SectionLoader />}>
            <AboutSection />
          </Suspense>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <Suspense fallback={<SectionLoader />}>
            <ProjectsSection />
          </Suspense>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <Suspense fallback={<SectionLoader />}>
            <SkillsSection />
          </Suspense>
        </section>

        {/* Experience Section */}
        <section id="experience">
          <Suspense fallback={<SectionLoader />}>
            <ExperienceSection />
          </Suspense>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Suspense fallback={<SectionLoader />}>
            <ContactSection />
          </Suspense>
        </section>
      </main>

      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: 'rgba(15, 23, 42, 0.9)',
            color: '#f8fafc',
            border: '1px solid rgba(148, 163, 184, 0.2)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
          },
          success: {
            iconTheme: {
              primary: '#0ea5e9',
              secondary: '#f8fafc',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#f8fafc',
            },
          },
        }}
      />
    </div>
  );
};