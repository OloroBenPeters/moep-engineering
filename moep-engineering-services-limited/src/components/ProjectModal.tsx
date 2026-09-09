import React, { useEffect } from 'react';
import { ProjectItem } from '../types';
import { X, MapPin, Calendar, Building, CheckCircle2, ChevronRight, HardHat } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquire: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="project-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-[#F0E7D9] text-[#233746] w-full max-w-4xl shadow-elegant-lg border border-[#233746]/20 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar (Dark Steel Blue) */}
        <div className="bg-[#233746] text-[#F0E7D9] px-6 py-4 flex items-center justify-between border-b border-[#2c4457] relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#FBC215]" />
          <div className="flex items-center gap-2">
            <span className="bg-[#BD1E3C] text-[#F0E7D9] text-[10px] uppercase font-bold tracking-wider px-2 py-0.5">
              {project.categoryLabel}
            </span>
            <span className="text-xs text-[#FBC215] font-semibold">
              Project Code: MOEP-PRJ-{project.id.toUpperCase().slice(0, 5)}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#F0E7D9]/80 hover:text-[#BD1E3C] hover:bg-[#192733] transition-colors cursor-pointer"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {/* Main Title & Image Header */}
          <div className="mb-6">
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#233746] tracking-tight mb-2 uppercase">
              {project.title}
            </h2>
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-[#233746]/80 font-medium">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#BD1E3C]" />
                {project.location}
              </span>
              <span className="text-[#233746]/30">|</span>
              <span className="flex items-center gap-1">
                <Building className="w-3.5 h-3.5 text-[#233746]/70" />
                Client: {project.client}
              </span>
              <span className="text-[#233746]/30">|</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#233746]/70" />
                Completed: {project.year}
              </span>
              <span className="text-[#233746]/30">|</span>
              <span className="bg-[#233746]/10 text-[#233746] font-bold px-2 py-0.5">
                {project.scale}
              </span>
            </div>
          </div>

          {/* Hero Project Image */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden mb-8 border border-[#233746]/15 shadow-elegant">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover grayscale contrast-125"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#233746]/85 via-transparent to-transparent flex items-end p-4">
              <span className="text-[#F0E7D9] text-xs font-semibold bg-[#233746]/90 px-3 py-1 border border-[#F0E7D9]/20">
                Turnkey Engineering &amp; EPC Execution by MOEP
              </span>
            </div>
          </div>

          {/* Project Summary */}
          <div className="mb-8 bg-white p-6 border-l-4 border-[#233746] shadow-elegant">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#BD1E3C] mb-2">
              Scope of Engineering
            </h4>
            <p className="text-sm sm:text-base text-[#233746]/90 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Challenge & Solution Grid (Industrial contrast cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border-l-4 border-[#BD1E3C] p-5 shadow-elegant">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#BD1E3C]" />
                <h5 className="font-heading text-sm font-bold text-[#233746] uppercase tracking-wide">
                  The Engineering Challenge
                </h5>
              </div>
              <p className="text-xs sm:text-sm text-[#233746]/80 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="bg-white border-l-4 border-[#233746] p-5 shadow-elegant">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#FBC215]" />
                <h5 className="font-heading text-sm font-bold text-[#233746] uppercase tracking-wide">
                  MOEP Engineering Solution
                </h5>
              </div>
              <p className="text-xs sm:text-sm text-[#233746]/80 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Deliverables & Technical Highlights */}
          <div className="mb-8 bg-white p-6 border-l-4 border-[#FBC215] shadow-elegant">
            <h4 className="font-heading text-sm font-bold text-[#233746] uppercase tracking-wide mb-4 flex items-center gap-2">
              <HardHat className="w-4 h-4 text-[#BD1E3C]" />
              <span>Structural Deliverables &amp; Technical Highlights</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#233746]/85">
                  <CheckCircle2 className="w-4 h-4 text-[#BD1E3C] flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Action CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#233746]/15">
            <div className="text-xs text-[#233746]/70">
              Need similar infrastructure solutions for your capital development?
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="px-4 py-2.5 border border-[#233746]/30 text-xs font-semibold text-[#233746] hover:bg-[#233746]/10 transition-colors cursor-pointer w-full sm:w-auto"
              >
                Close Case Study
              </button>
              <button
                onClick={() => {
                  onInquire(project.title);
                  onClose();
                }}
                className="flex items-center justify-center gap-2 bg-[#BD1E3C] hover:bg-[#9e1832] text-[#F0E7D9] px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-transform hover:scale-[1.02] cursor-pointer w-full sm:w-auto"
              >
                <span>Discuss Similar Scope</span>
                <ChevronRight className="w-4 h-4 text-[#FBC215]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
