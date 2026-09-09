import React, { useState, useEffect } from 'react';
import { PageId, ProjectItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';
import { ProjectModal } from './components/ProjectModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [inquirySubject, setInquirySubject] = useState<string>('');

  // Synchronize with URL hash for browser history & direct links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['home', 'about', 'services', 'projects', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProject = (project: ProjectItem) => {
    setSelectedProject(project);
  };

  const handleCloseProjectModal = () => {
    setSelectedProject(null);
  };

  const handleInquireFromProject = (projectTitle: string) => {
    setInquirySubject(`Consultation regarding: ${projectTitle}`);
    setSelectedProject(null);
    handleNavigate('contact');
  };

  const handleInquireFromService = (serviceTitle: string) => {
    setInquirySubject(`Engineering scope inquiry: ${serviceTitle}`);
    handleNavigate('contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F0E7D9] text-[#233746] font-sans antialiased">
      {/* Persistent Top Navigation Bar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectProject={handleSelectProject}
            onQuickInquiry={handleInquireFromService}
          />
        )}

        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onInquireService={handleInquireFromService}
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsPage
            onNavigate={handleNavigate}
            onSelectProject={handleSelectProject}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage initialSubject={inquirySubject} />
        )}
      </main>

      {/* Persistent Dark Steel Blue Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Detailed Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={handleCloseProjectModal}
        onInquire={handleInquireFromProject}
      />
    </div>
  );
}
