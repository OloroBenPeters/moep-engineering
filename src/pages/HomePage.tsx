import React from 'react';
import { PageId, ProjectItem } from '../types';
import {
  Medal,
  Handshake,
  ShieldCheck,
  Home,
  Building2,
  Hammer,
  ClipboardCheck,
  ArrowRight,
  ChevronRight,
  HardHat,
  UserCheck,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectProject?: (project: ProjectItem) => void;
  onQuickInquiry?: (subject?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div id="home-page" className="w-full">
      {/* =========================================================================
          SECTION 1 — Hero (full-width, dark steel blue #233746 background, cream text)
          Headline: "Engineering Built On Experience. Construction Built On Trust."
          Subheadline: "MOEP Engineering Services Limited delivers residential and
          commercial construction backed by years of international engineering
          experience — now working directly for you."
          Primary CTA button (red #BD1E3C): "Get a Free Consultation" → links to Contact page
          Secondary CTA (outline button): "View Our Services" → links to Services page
         ========================================================================= */}
      <section
        id="hero-section"
        className="relative bg-[#233746] text-[#F0E7D9] pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden bg-dark-grid-pattern border-b border-[#2c4457]"
      >
        {/* Subtle geometric background accents */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none bg-dark-grid-pattern" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 border border-[#F0E7D9]/10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Main Headline & Actions (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              {/* Construction Yellow Accent Bar */}
              <div className="w-12 h-1 bg-[#FBC215]" />

              <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#F0E7D9] leading-[1.15] uppercase">
                Engineering Built On Experience.{' '}
                <span className="text-[#BD1E3C] block sm:inline">
                  Construction Built On Trust.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#F0E7D9]/85 leading-relaxed max-w-2xl font-normal">
                MOEP Engineering Services Limited delivers residential and commercial construction
                backed by years of international engineering experience — now working directly for you.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  id="hero-primary-cta"
                  onClick={() => onNavigate('contact')}
                  className="px-8 py-3.5 bg-[#BD1E3C] hover:bg-[#9e1832] text-[#F0E7D9] font-bold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-elegant hover:scale-[1.02] transition-transform cursor-pointer"
                >
                  <span>Get a Free Consultation</span>
                  <ArrowRight className="w-4 h-4 text-[#FBC215]" />
                </button>

                <button
                  id="hero-secondary-cta"
                  onClick={() => onNavigate('services')}
                  className="px-8 py-3.5 border border-[#F0E7D9]/60 hover:border-[#F0E7D9] hover:bg-white/5 text-[#F0E7D9] font-bold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <HardHat className="w-4 h-4 text-[#FBC215]" />
                  <span>View Our Services</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#F0E7D9]/70">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-[#FBC215]" />
                  Residential &amp; Commercial General Contracting
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-[#FBC215]" />
                  Direct Chartered Engineering Oversight
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-[#FBC215]" />
                  Zero-Harm Safety Standards
                </span>
              </div>
            </div>

            {/* Architectural Visual Side Card (4 cols) */}
            <div className="lg:col-span-4 relative hidden lg:block">
              <div className="relative overflow-hidden border-2 border-[#2c4457] shadow-elegant-lg bg-[#192733]">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1000&q=80"
                  alt="MOEP Engineering Construction Site"
                  className="w-full h-80 object-cover opacity-85 grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#192733] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-[#233746]/95 border-l-4 border-[#BD1E3C] p-4 backdrop-blur-xs">
                  <div className="text-[#FBC215] font-semibold uppercase tracking-wider text-[10px]">
                    Quality Delivery
                  </div>
                  <div className="font-heading font-bold text-sm text-[#F0E7D9] mt-0.5">
                    MOEP Engineering Services Ltd.
                  </div>
                  <div className="text-[11px] text-[#F0E7D9]/70 mt-0.5">
                    Engineering Precision &amp; General Contracting
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — Why MOEP (cream background, 3-column layout with icons)
          Section heading: "Why Clients Choose MOEP"
          Card 1 — Icon: medal/experience
            Title: "Proven International Experience"
            Text: "Years of hands-on experience delivering engineering and construction
            projects with leading international companies."
          Card 2 — Icon: handshake
            Title: "Direct, Personal Accountability"
            Text: "You work directly with the engineer overseeing your project —
            no middlemen, no lost communication, no passing the buck."
          Card 3 — Icon: checkmark/shield
            Title: "Built Right, The First Time"
            Text: "Precision, safety, and structural integrity are non-negotiable on
            every job, residential or commercial."
         ========================================================================= */}
      <section id="why-moep-section" className="py-20 sm:py-28 bg-[#F0E7D9] bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4 pb-4 border-b border-[#233746]/10">
            <div>
              <div className="w-10 h-1 bg-[#FBC215] mb-3" />
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#233746] font-heading tracking-tight uppercase">
                Why Clients Choose MOEP
              </h2>
              <p className="text-sm text-[#233746]/70 mt-1 max-w-xl">
                Combining global contracting standards with direct, attentive client communication.
              </p>
            </div>
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#BD1E3C] whitespace-nowrap">
              01 / 04 — CORE VALUES
            </span>
          </div>

          {/* 3-Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Proven International Experience */}
            <div
              id="why-card-experience"
              className="bg-white p-8 border-l-4 border-[#233746] shadow-elegant hover:shadow-elegant-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 mb-6 bg-[#233746] text-[#FBC215] flex items-center justify-center">
                  <Medal className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-extrabold mb-3 text-[#233746] font-heading uppercase tracking-wide">
                  Proven International Experience
                </h3>
                <p className="text-sm leading-relaxed text-[#233746]/80">
                  Years of hands-on experience delivering engineering and construction projects with leading international companies.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#233746]/10 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#233746]">
                <span className="w-2 h-2 bg-[#FBC215]" />
                <span>Global Technical Standards</span>
              </div>
            </div>

            {/* Card 2: Direct, Personal Accountability */}
            <div
              id="why-card-accountability"
              className="bg-white p-8 border-l-4 border-[#BD1E3C] shadow-elegant hover:shadow-elegant-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 mb-6 bg-[#BD1E3C] text-[#F0E7D9] flex items-center justify-center">
                  <Handshake className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-extrabold mb-3 text-[#233746] font-heading uppercase tracking-wide">
                  Direct, Personal Accountability
                </h3>
                <p className="text-sm leading-relaxed text-[#233746]/80">
                  You work directly with the engineer overseeing your project — no middlemen, no lost communication, no passing the buck.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#233746]/10 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#BD1E3C]">
                <span className="w-2 h-2 bg-[#BD1E3C]" />
                <span>Direct Engineer Access</span>
              </div>
            </div>

            {/* Card 3: Built Right, The First Time */}
            <div
              id="why-card-quality"
              className="bg-white p-8 border-l-4 border-[#FBC215] shadow-elegant hover:shadow-elegant-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 mb-6 bg-[#233746] text-[#FBC215] flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-extrabold mb-3 text-[#233746] font-heading uppercase tracking-wide">
                  Built Right, The First Time
                </h3>
                <p className="text-sm leading-relaxed text-[#233746]/80">
                  Precision, safety, and structural integrity are non-negotiable on every job, residential or commercial.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#233746]/10 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#233746]">
                <span className="w-2 h-2 bg-[#FBC215]" />
                <span>Uncompromised Quality</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — Services Preview (dark steel blue background, cream cards)
          Section heading: "What We Do"
          Short intro: "Full-service general contracting for residential and commercial
          clients, nationwide."
          List 4 service cards (icon + short title only, each linking to Services page):
            - "Residential Construction"
            - "Commercial Construction"
            - "Renovations & Remodeling"
            - "Project Consulting & Management"
          CTA button: "See All Services" → links to Services page
         ========================================================================= */}
      <section
        id="services-preview-section"
        className="py-20 sm:py-28 bg-[#233746] text-[#F0E7D9] border-t border-b border-[#2c4457] bg-dark-grid-pattern"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading & Intro */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4 pb-4 border-b border-[#F0E7D9]/10">
            <div>
              <div className="w-10 h-1 bg-[#FBC215] mb-3" />
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F0E7D9] font-heading tracking-tight uppercase">
                What We Do
              </h2>
              <p className="text-sm sm:text-base text-[#F0E7D9]/80 mt-2 max-w-xl">
                Full-service general contracting for residential and commercial clients, nationwide.
              </p>
            </div>
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#FBC215] whitespace-nowrap">
              02 / 04 — CAPABILITIES
            </span>
          </div>

          {/* 4 Service Cards (Cream cards linking to Services) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Residential Construction */}
            <button
              id="service-card-residential"
              onClick={() => onNavigate('services')}
              className="text-left bg-[#F0E7D9] text-[#233746] p-8 border-l-4 border-[#BD1E3C] shadow-elegant hover:shadow-elegant-lg transition-all duration-200 group hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-[#233746] group-hover:bg-[#BD1E3C] transition-colors flex items-center justify-center text-[#FBC215] group-hover:text-white mb-6">
                  <Home className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-lg text-[#233746] group-hover:text-[#BD1E3C] transition-colors uppercase leading-snug">
                  Residential Construction
                </h3>
              </div>
              <div className="mt-8 pt-4 border-t border-[#233746]/15 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#BD1E3C]">
                <span>Explore Discipline</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </button>

            {/* Card 2: Commercial Construction */}
            <button
              id="service-card-commercial"
              onClick={() => onNavigate('services')}
              className="text-left bg-[#F0E7D9] text-[#233746] p-8 border-l-4 border-[#233746] shadow-elegant hover:shadow-elegant-lg transition-all duration-200 group hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-[#233746] group-hover:bg-[#BD1E3C] transition-colors flex items-center justify-center text-[#FBC215] group-hover:text-white mb-6">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-lg text-[#233746] group-hover:text-[#BD1E3C] transition-colors uppercase leading-snug">
                  Commercial Construction
                </h3>
              </div>
              <div className="mt-8 pt-4 border-t border-[#233746]/15 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#BD1E3C]">
                <span>Explore Discipline</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </button>

            {/* Card 3: Renovations & Remodeling */}
            <button
              id="service-card-renovations"
              onClick={() => onNavigate('services')}
              className="text-left bg-[#F0E7D9] text-[#233746] p-8 border-l-4 border-[#BD1E3C] shadow-elegant hover:shadow-elegant-lg transition-all duration-200 group hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-[#233746] group-hover:bg-[#BD1E3C] transition-colors flex items-center justify-center text-[#FBC215] group-hover:text-white mb-6">
                  <Hammer className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-lg text-[#233746] group-hover:text-[#BD1E3C] transition-colors uppercase leading-snug">
                  Renovations &amp; Remodeling
                </h3>
              </div>
              <div className="mt-8 pt-4 border-t border-[#233746]/15 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#BD1E3C]">
                <span>Explore Discipline</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </button>

            {/* Card 4: Project Consulting & Management */}
            <button
              id="service-card-consulting"
              onClick={() => onNavigate('services')}
              className="text-left bg-[#F0E7D9] text-[#233746] p-8 border-l-4 border-[#233746] shadow-elegant hover:shadow-elegant-lg transition-all duration-200 group hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-[#233746] group-hover:bg-[#BD1E3C] transition-colors flex items-center justify-center text-[#FBC215] group-hover:text-white mb-6">
                  <ClipboardCheck className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-lg text-[#233746] group-hover:text-[#BD1E3C] transition-colors uppercase leading-snug">
                  Project Consulting &amp; Management
                </h3>
              </div>
              <div className="mt-8 pt-4 border-t border-[#233746]/15 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#BD1E3C]">
                <span>Explore Discipline</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </button>
          </div>

          {/* CTA Button */}
          <div className="mt-14 text-center">
            <button
              id="services-preview-cta-btn"
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 bg-[#BD1E3C] hover:bg-[#9e1832] text-[#F0E7D9] text-xs font-bold uppercase tracking-wider px-8 py-3.5 transition-transform hover:scale-[1.02] cursor-pointer shadow-elegant"
            >
              <span>See All Services</span>
              <ChevronRight className="w-4 h-4 text-[#FBC215]" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — About Preview (cream background, image placeholder + text side-by-side)
          Left: image placeholder labeled "Owner/Founder Photo"
          Right:
          Heading: "Meet the Engineer Behind MOEP"
          Text: "MOEP Engineering Services Limited is led by a founder with years of
          experience delivering projects for major international construction and
          engineering firms. Now independent, that same standard of precision and
          professionalism is brought directly to every client."
          CTA link: "Read Our Story →" → links to About page
         ========================================================================= */}
      <section id="about-preview-section" className="py-20 sm:py-28 bg-[#F0E7D9] bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center pb-3 mb-12 border-b border-[#233746]/10">
            <div className="w-10 h-1 bg-[#FBC215]" />
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#BD1E3C]">
              03 / 04 — LEADERSHIP
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: image placeholder labeled "Owner/Founder Photo" (5 cols) */}
            <div className="lg:col-span-5">
              <div
                id="founder-image-container"
                className="relative bg-white border-4 border-[#233746] shadow-elegant-lg overflow-hidden group"
              >
                {/* Engineering Founder Image with Grayscale Aesthetic */}
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                  alt="Owner / Founder Photo - MOEP Engineering Services Limited"
                  className="w-full h-96 sm:h-[420px] object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Explicit Label: "Owner/Founder Photo" */}
                <div className="absolute top-4 left-4 bg-[#233746] text-[#F0E7D9] border border-[#2c4457] px-3.5 py-1.5 flex items-center gap-2 shadow-md">
                  <UserCheck className="w-4 h-4 text-[#FBC215]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FBC215]">
                    Owner/Founder Photo
                  </span>
                </div>

                {/* Subtle bottom blueprint bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#233746]/95 border-t-2 border-[#BD1E3C] p-4 text-[#F0E7D9] backdrop-blur-xs">
                  <div className="font-heading text-sm font-bold uppercase tracking-wide">
                    Principal Executive Engineer
                  </div>
                  <div className="text-xs text-[#F0E7D9]/75 mt-0.5">
                    Chartered Civil &amp; Structural Lead
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Copy & CTA link (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="w-12 h-1 bg-[#BD1E3C]" />

              <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#233746] tracking-tight uppercase">
                Meet the Engineer Behind MOEP
              </h2>

              <p className="text-base sm:text-lg text-[#233746]/85 leading-relaxed bg-white p-6 border-l-4 border-[#233746] shadow-elegant">
                MOEP Engineering Services Limited is led by a founder with years of experience
                delivering projects for major international construction and engineering firms.
                Now independent, that same standard of precision and professionalism is brought
                directly to every client.
              </p>

              <div className="pt-2">
                <button
                  id="about-preview-story-link"
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider text-[#BD1E3C] hover:text-[#9e1832] transition-colors cursor-pointer group"
                >
                  <span className="border-b-2 border-[#BD1E3C] pb-0.5 group-hover:border-[#9e1832]">
                    Read Our Story →
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — Call To Action (red #BD1E3C background, white text, centered)
          Heading: "Ready to Start Your Project?"
          Text: "Tell us what you're building — we'll tell you how to build it right."
          Button (cream background, dark blue text): "Contact Us Today" → links to Contact page
         ========================================================================= */}
      <section
        id="cta-bottom-section"
        className="py-20 sm:py-24 bg-[#BD1E3C] text-white text-center border-t-2 border-[#233746] relative overflow-hidden"
      >
        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-dark-grid-pattern" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="w-12 h-1 bg-[#FBC215] mx-auto mb-4" />

          <h2 className="font-heading text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            Ready to Start Your Project?
          </h2>

          <p className="text-base sm:text-xl text-white/95 max-w-2xl mx-auto font-medium leading-relaxed">
            Tell us what you&apos;re building — we&apos;ll tell you how to build it right.
          </p>

          <div className="pt-4">
            <button
              id="cta-contact-today-btn"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center gap-2 bg-[#F0E7D9] hover:bg-white text-[#233746] text-xs sm:text-sm font-extrabold uppercase tracking-wider px-10 py-4 shadow-elegant hover:scale-[1.03] transition-all cursor-pointer"
            >
              <span>Contact Us Today</span>
              <ChevronRight className="w-4 h-4 text-[#BD1E3C]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
