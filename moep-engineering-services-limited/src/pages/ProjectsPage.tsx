import React from 'react';
import { PageId, ProjectItem } from '../types';
import {
  Camera,
  ChevronRight,
  HardHat,
  ArrowRight,
  Building2,
  Home,
  Hammer,
} from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (page: PageId) => void;
  onSelectProject?: (project: ProjectItem) => void;
}

interface PlaceholderCard {
  id: string;
  title: string;
  category: string;
  categoryType: 'Residential' | 'Commercial' | 'Renovation';
  image: string;
  placeholderLabel: string;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  const placeholderCards: PlaceholderCard[] = [
    {
      id: 'placeholder-1',
      title: 'Project Title',
      category: 'Residential',
      categoryType: 'Residential',
      image:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      placeholderLabel: 'Residential Build Placeholder',
    },
    {
      id: 'placeholder-2',
      title: 'Project Title',
      category: 'Commercial',
      categoryType: 'Commercial',
      image:
        'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=800&q=80',
      placeholderLabel: 'Commercial Facility Placeholder',
    },
    {
      id: 'placeholder-3',
      title: 'Project Title',
      category: 'Renovation',
      categoryType: 'Renovation',
      image:
        'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
      placeholderLabel: 'Renovation & Extension Placeholder',
    },
    {
      id: 'placeholder-4',
      title: 'Project Title',
      category: 'Residential',
      categoryType: 'Residential',
      image:
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      placeholderLabel: 'Residential Construction Placeholder',
    },
    {
      id: 'placeholder-5',
      title: 'Project Title',
      category: 'Commercial',
      categoryType: 'Commercial',
      image:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      placeholderLabel: 'Commercial Space Placeholder',
    },
    {
      id: 'placeholder-6',
      title: 'Project Title',
      category: 'Renovation',
      categoryType: 'Renovation',
      image:
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
      placeholderLabel: 'Remodeling & Structural Upgrade Placeholder',
    },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Residential':
        return <Home className="w-3.5 h-3.5" />;
      case 'Commercial':
        return <Building2 className="w-3.5 h-3.5" />;
      case 'Renovation':
        return <Hammer className="w-3.5 h-3.5" />;
      default:
        return <HardHat className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div id="projects-page" className="w-full">
      {/* =========================================================================
          SECTION 1 — Page Header (dark steel blue background)
          Heading: "Our Projects"
          Subtext: "A growing portfolio of residential and commercial work."
         ========================================================================= */}
      <section
        id="projects-header-section"
        className="bg-[#233746] text-[#F0E7D9] pt-32 sm:pt-40 pb-16 sm:pb-20 border-b border-[#2c4457] bg-dark-grid-pattern relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none bg-dark-grid-pattern" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="w-12 h-1 bg-[#FBC215] mb-4" />
          <h1 className="font-heading text-3xl sm:text-5xl font-black text-[#F0E7D9] tracking-tight uppercase">
            Our Projects
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#F0E7D9]/85 max-w-2xl leading-relaxed">
            A growing portfolio of residential and commercial work.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — Portfolio Grid (cream background, responsive image grid,
          6 placeholder project cards)
          Each card: image placeholder, project title placeholder (e.g. "Project Title"),
          one-line category tag (e.g. "Residential" / "Commercial" / "Renovation")
          Add a small note below the grid in italics:
          "Portfolio currently being updated — new projects added regularly."
         ========================================================================= */}
      <section
        id="portfolio-grid-section"
        className="py-20 sm:py-28 bg-[#F0E7D9] bg-grid-pattern"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Tracker */}
          <div className="flex justify-between items-center pb-3 mb-12 border-b border-[#233746]/10">
            <div className="w-10 h-1 bg-[#FBC215]" />
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#BD1E3C]">
              01 / 02 — RECENT WORKS
            </span>
          </div>

          {/* 6 Responsive Placeholder Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {placeholderCards.map((card, idx) => {
              const isAccent = idx % 2 === 1;

              return (
                <div
                  key={card.id}
                  id={`project-card-${idx + 1}`}
                  className={`bg-white border-l-4 ${
                    isAccent ? 'border-[#BD1E3C]' : 'border-[#233746]'
                  } shadow-elegant hover:shadow-elegant-lg transition-all duration-300 flex flex-col justify-between group overflow-hidden`}
                >
                  <div>
                    {/* Image Placeholder */}
                    <div className="relative h-64 w-full overflow-hidden bg-[#233746]">
                      <img
                        src={card.image}
                        alt={`${card.title} - ${card.category}`}
                        className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                        referrerPolicy="no-referrer"
                      />

                      {/* Explicit Placeholder Badge */}
                      <div className="absolute top-3 left-3 bg-[#233746]/95 border border-[#2c4457] text-[#F0E7D9] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md backdrop-blur-xs">
                        <Camera className="w-3.5 h-3.5 text-[#FBC215]" />
                        <span className="text-[#FBC215]">Photo Placeholder</span>
                      </div>

                      {/* Bottom Blueprint Strip */}
                      <div className="absolute bottom-0 left-0 right-0 bg-[#233746]/90 p-2 text-center text-[10px] text-[#F0E7D9]/80 uppercase tracking-widest border-t border-[#2c4457]">
                        {card.placeholderLabel}
                      </div>
                    </div>

                    {/* Card Content: Title & One-line Category Tag */}
                    <div className="p-6">
                      {/* One-line Category Tag */}
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider ${
                            card.category === 'Residential'
                              ? 'bg-[#233746] text-[#F0E7D9]'
                              : card.category === 'Commercial'
                              ? 'bg-[#BD1E3C] text-white'
                              : 'bg-[#FBC215] text-[#233746]'
                          }`}
                        >
                          {getCategoryIcon(card.category)}
                          <span>{card.category}</span>
                        </span>
                      </div>

                      {/* Project Title Placeholder */}
                      <h3 className="font-heading text-xl font-extrabold text-[#233746] group-hover:text-[#BD1E3C] transition-colors uppercase tracking-tight mt-3">
                        {card.title}
                      </h3>

                      <p className="text-xs text-[#233746]/60 mt-1 font-mono">
                        Reference Scope #{idx + 101}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Action */}
                  <div className="px-6 pb-6 pt-2 border-t border-[#233746]/10 flex items-center justify-between">
                    <button
                      onClick={() => onNavigate('contact')}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#BD1E3C] hover:text-[#9e1832] transition-colors cursor-pointer"
                    >
                      <span>Inquire About Similar Build</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Small note below the grid in italics */}
          <div className="mt-14 pt-6 border-t border-[#233746]/15 text-center">
            <p className="italic text-sm text-[#233746]/75">
              Portfolio currently being updated — new projects added regularly.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — CTA (dark steel blue background, centered)
          Heading: "Your Project Could Be Next"
          Button (red): "Start Your Project" → links to Contact page
         ========================================================================= */}
      <section
        id="projects-cta-section"
        className="py-20 sm:py-24 bg-[#233746] text-[#F0E7D9] text-center border-t border-[#2c4457] bg-dark-grid-pattern relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-dark-grid-pattern" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="w-12 h-1 bg-[#FBC215] mx-auto mb-4" />

          <h2 className="font-heading text-3xl sm:text-5xl font-black tracking-tight text-[#F0E7D9] uppercase">
            Your Project Could Be Next
          </h2>

          <p className="text-base sm:text-lg text-[#F0E7D9]/80 max-w-xl mx-auto font-normal leading-relaxed">
            Partner directly with our principal engineers for your next residential or commercial development.
          </p>

          <div className="pt-4">
            <button
              id="projects-start-project-btn"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center gap-2 bg-[#BD1E3C] hover:bg-[#9e1832] text-[#F0E7D9] text-xs sm:text-sm font-bold uppercase tracking-wider px-10 py-4 shadow-elegant hover:scale-[1.03] transition-all cursor-pointer"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 text-[#FBC215]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
