import React from 'react';
import { PageId } from '../types';
import {
  Home,
  Building2,
  Hammer,
  ClipboardCheck,
  ChevronRight,
  HardHat,
  MessageSquare,
  FileSpreadsheet,
  CheckCircle2,
  Camera,
  ArrowRight,
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onInquireService?: (serviceTitle: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onInquireService,
}) => {
  const handleInquire = (serviceTitle: string) => {
    if (onInquireService) {
      onInquireService(serviceTitle);
    } else {
      onNavigate('contact');
    }
  };

  const services = [
    {
      id: 'residential-construction',
      title: 'Residential Construction',
      text: 'New home builds and residential construction managed with the same precision as large-scale commercial work. From foundation to finishing, every stage is planned and supervised directly.',
      icon: Home,
      image:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
      label: 'Residential Construction Photo',
      sublabel: 'Custom Home Construction & Supervision',
      borderColor: 'border-[#BD1E3C]',
      iconBg: 'bg-[#BD1E3C]',
      iconColor: 'text-[#F0E7D9]',
    },
    {
      id: 'commercial-construction',
      title: 'Commercial Construction',
      text: 'Commercial builds for businesses that need a contractor who understands scale, code compliance, and deadlines — informed by years of experience on major international projects.',
      icon: Building2,
      image:
        'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1000&q=80',
      label: 'Commercial Construction Photo',
      sublabel: 'Multi-Storey & Enterprise Facilities',
      borderColor: 'border-[#233746]',
      iconBg: 'bg-[#233746]',
      iconColor: 'text-[#FBC215]',
    },
    {
      id: 'renovations-remodeling',
      title: 'Renovations & Remodeling',
      text: 'Structural renovations, extensions, and remodels handled with full engineering oversight, so upgrades are as sound as they are beautiful.',
      icon: Hammer,
      image:
        'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80',
      label: 'Renovations & Remodeling Photo',
      sublabel: 'Structural Retrofit & Modern Extensions',
      borderColor: 'border-[#BD1E3C]',
      iconBg: 'bg-[#BD1E3C]',
      iconColor: 'text-[#F0E7D9]',
    },
    {
      id: 'project-consulting-management',
      title: 'Project Consulting & Management',
      text: 'Engineering consultation and project management for clients who need expert oversight on an existing build, design review, or contractor coordination.',
      icon: ClipboardCheck,
      image:
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80',
      label: 'Project Consulting Photo',
      sublabel: 'Engineering Audits & Owner Representation',
      borderColor: 'border-[#233746]',
      iconBg: 'bg-[#233746]',
      iconColor: 'text-[#FBC215]',
    },
  ];

  const processSteps = [
    {
      stepNumber: '01',
      title: 'Consultation',
      desc: 'We discuss your project, goals, and budget.',
      icon: MessageSquare,
    },
    {
      stepNumber: '02',
      title: 'Planning & Design',
      desc: 'Engineering review, planning, and scope definition.',
      icon: FileSpreadsheet,
    },
    {
      stepNumber: '03',
      title: 'Construction',
      desc: 'Hands-on, directly supervised execution.',
      icon: HardHat,
    },
    {
      stepNumber: '04',
      title: 'Handover',
      desc: 'Final inspection, walkthrough, and sign-off.',
      icon: CheckCircle2,
    },
  ];

  return (
    <div id="services-page" className="w-full">
      {/* =========================================================================
          SECTION 1 — Page Header (dark steel blue background)
          Heading: "Our Services"
          Subtext: "General contracting for residential and commercial clients,
          nationwide — from first consultation to final handover."
         ========================================================================= */}
      <section
        id="services-header-section"
        className="bg-[#233746] text-[#F0E7D9] pt-32 sm:pt-40 pb-16 sm:pb-20 border-b border-[#2c4457] bg-dark-grid-pattern relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none bg-dark-grid-pattern" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="w-12 h-1 bg-[#FBC215] mb-4" />
          <h1 className="font-heading text-3xl sm:text-5xl font-black text-[#F0E7D9] tracking-tight uppercase">
            Our Services
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#F0E7D9]/85 max-w-3xl leading-relaxed">
            General contracting for residential and commercial clients, nationwide — from first consultation to final handover.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — Service Detail Blocks (cream background, alternating
          image-left/image-right layout, image placeholders)
          Service 1: Residential Construction
          Service 2: Commercial Construction
          Service 3: Renovations & Remodeling
          Service 4: Project Consulting & Management
         ========================================================================= */}
      <section
        id="services-detail-section"
        className="py-20 sm:py-28 bg-[#F0E7D9] bg-grid-pattern"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center pb-3 mb-16 border-b border-[#233746]/10">
            <div className="w-10 h-1 bg-[#FBC215]" />
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#BD1E3C]">
              01 / 03 — DETAILED SCOPE
            </span>
          </div>

          <div className="space-y-20 sm:space-y-28">
            {services.map((service, index) => {
              const isEven = index % 2 === 1; // 0: image left, 1: image right, 2: image left, 3: image right
              const IconComponent = service.icon;

              return (
                <div
                  key={service.id}
                  id={`service-block-${service.id}`}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center"
                >
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-6 ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="relative bg-white border-4 border-[#233746] shadow-elegant-lg overflow-hidden group">
                      {/* Image Placeholder */}
                      <img
                        src={service.image}
                        alt={`${service.title} - MOEP Engineering Services Limited`}
                        className="w-full h-80 sm:h-96 object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
                        referrerPolicy="no-referrer"
                      />

                      {/* Explicit Placeholder Badge */}
                      <div className="absolute top-4 left-4 bg-[#233746] text-[#F0E7D9] border border-[#2c4457] px-3.5 py-1.5 flex items-center gap-2 shadow-md">
                        <Camera className="w-4 h-4 text-[#FBC215]" />
                        <span className="text-xs font-bold uppercase tracking-wider text-[#FBC215]">
                          {service.label}
                        </span>
                      </div>

                      {/* Bottom Blueprint Accent Bar */}
                      <div className="absolute bottom-0 left-0 right-0 bg-[#233746]/95 border-t-2 border-[#BD1E3C] p-4 text-[#F0E7D9] backdrop-blur-xs flex items-center justify-between">
                        <div>
                          <div className="font-heading text-xs font-bold uppercase tracking-wider text-[#FBC215]">
                            Discipline {index + 1} of {services.length}
                          </div>
                          <div className="text-sm font-bold text-[#F0E7D9]">
                            {service.sublabel}
                          </div>
                        </div>
                        <div className="w-8 h-8 bg-[#192733] border border-[#2c4457] flex items-center justify-center text-[#FBC215]">
                          <IconComponent className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Text Column */}
                  <div
                    className={`lg:col-span-6 space-y-6 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 ${service.iconBg} ${service.iconColor} flex items-center justify-center shadow-xs`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#BD1E3C]">
                        Contracting Discipline
                      </span>
                    </div>

                    <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#233746] tracking-tight uppercase leading-tight">
                      {service.title}
                    </h2>

                    <div
                      className={`bg-white p-6 sm:p-8 border-l-4 ${service.borderColor} shadow-elegant`}
                    >
                      <p className="text-base sm:text-lg text-[#233746]/85 leading-relaxed font-normal">
                        {service.text}
                      </p>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                      <button
                        id={`btn-inquire-${service.id}`}
                        onClick={() => handleInquire(service.title)}
                        className="inline-flex items-center justify-center gap-2 bg-[#BD1E3C] hover:bg-[#9e1832] text-[#F0E7D9] text-xs font-bold uppercase tracking-wider px-6 py-3.5 transition-transform hover:scale-[1.02] cursor-pointer shadow-elegant"
                      >
                        <span>Discuss {service.title}</span>
                        <ChevronRight className="w-4 h-4 text-[#FBC215]" />
                      </button>

                      <button
                        onClick={() => onNavigate('contact')}
                        className="inline-flex items-center justify-center gap-2 border border-[#233746]/30 hover:border-[#233746] text-[#233746] text-xs font-bold uppercase tracking-wider px-6 py-3.5 hover:bg-[#233746]/5 transition-colors cursor-pointer"
                      >
                        <span>Get Scope Quote</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — Process (dark steel blue background, 4-step horizontal timeline)
          Heading: "Our Process"
          Step 1: "Consultation" — "We discuss your project, goals, and budget."
          Step 2: "Planning & Design" — "Engineering review, planning, and scope definition."
          Step 3: "Construction" — "Hands-on, directly supervised execution."
          Step 4: "Handover" — "Final inspection, walkthrough, and sign-off."
         ========================================================================= */}
      <section
        id="services-process-section"
        className="py-20 sm:py-28 bg-[#233746] text-[#F0E7D9] border-t border-b border-[#2c4457] bg-dark-grid-pattern relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4 pb-4 border-b border-[#F0E7D9]/10">
            <div>
              <div className="w-10 h-1 bg-[#FBC215] mb-3" />
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F0E7D9] font-heading tracking-tight uppercase">
                Our Process
              </h2>
              <p className="text-sm sm:text-base text-[#F0E7D9]/80 mt-2 max-w-xl">
                A disciplined, 4-stage engineering lifecycle providing transparency from initial brief to key turnover.
              </p>
            </div>
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#FBC215] whitespace-nowrap">
              02 / 03 — EXECUTION TIMELINE
            </span>
          </div>

          {/* 4-Step Horizontal Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {processSteps.map((step, idx) => {
              const StepIcon = step.icon;
              const isAccent = idx % 2 === 1;

              return (
                <div
                  key={step.stepNumber}
                  id={`process-step-${idx + 1}`}
                  className={`bg-[#192733] p-7 border-l-4 ${
                    isAccent ? 'border-[#FBC215]' : 'border-[#BD1E3C]'
                  } shadow-elegant hover:shadow-elegant-lg transition-all flex flex-col justify-between group relative`}
                >
                  <div>
                    {/* Step Number & Icon Header */}
                    <div className="flex items-center justify-between mb-5">
                      <span
                        className={`text-2xl font-black font-heading tracking-tight ${
                          isAccent ? 'text-[#FBC215]' : 'text-[#BD1E3C]'
                        }`}
                      >
                        {step.stepNumber}
                      </span>
                      <div className="w-10 h-10 bg-[#233746] flex items-center justify-center text-[#FBC215] group-hover:bg-[#BD1E3C] group-hover:text-white transition-colors">
                        <StepIcon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-lg font-extrabold mb-3 text-[#F0E7D9] font-heading uppercase tracking-wide">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-sm leading-relaxed text-[#F0E7D9]/80">
                      {step.desc}
                    </p>
                  </div>

                  {/* Step Footer Tracker */}
                  <div className="pt-6 mt-6 border-t border-[#2c4457] flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#F0E7D9]/60">
                    <span>Phase {idx + 1}</span>
                    <span className="text-[#FBC215] flex items-center gap-1">
                      <span>Ready</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — CTA (red background, white text)
          Heading: "Not Sure Which Service You Need?"
          Text: "Tell us about your project and we'll recommend the right approach."
          Button (cream): "Request a Consultation" → links to Contact page
         ========================================================================= */}
      <section
        id="services-cta-section"
        className="py-20 sm:py-24 bg-[#BD1E3C] text-white text-center border-t-2 border-[#233746] relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-dark-grid-pattern" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="w-12 h-1 bg-[#FBC215] mx-auto mb-4" />

          <h2 className="font-heading text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            Not Sure Which Service You Need?
          </h2>

          <p className="text-base sm:text-xl text-white/95 max-w-2xl mx-auto font-medium leading-relaxed">
            Tell us about your project and we&apos;ll recommend the right approach.
          </p>

          <div className="pt-4">
            <button
              id="services-cta-consultation-btn"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center gap-2 bg-[#F0E7D9] hover:bg-white text-[#233746] text-xs sm:text-sm font-extrabold uppercase tracking-wider px-10 py-4 shadow-elegant hover:scale-[1.03] transition-all cursor-pointer"
            >
              <span>Request a Consultation</span>
              <ChevronRight className="w-4 h-4 text-[#BD1E3C]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
