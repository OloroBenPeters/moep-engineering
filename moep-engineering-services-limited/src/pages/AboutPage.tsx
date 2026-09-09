import React from 'react';
import { PageId } from '../types';
import {
  Target,
  UserCheck,
  Scale,
  HardHat,
  ChevronRight,
  Camera,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div id="about-page" className="w-full">
      {/* =========================================================================
          SECTION 1 — Page Header (dark steel blue background)
          Heading: "About MOEP Engineering Services Limited"
          Subtext: "Built on years of international engineering experience.
          Driven by a personal commitment to every client."
         ========================================================================= */}
      <section
        id="about-header-section"
        className="bg-[#233746] text-[#F0E7D9] pt-32 sm:pt-40 pb-16 sm:pb-20 border-b border-[#2c4457] bg-dark-grid-pattern relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none bg-dark-grid-pattern" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="w-12 h-1 bg-[#FBC215] mb-4" />
          <h1 className="font-heading text-3xl sm:text-5xl font-black text-[#F0E7D9] tracking-tight uppercase">
            About MOEP Engineering Services Limited
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#F0E7D9]/85 max-w-3xl leading-relaxed">
            Built on years of international engineering experience. Driven by a personal commitment to every client.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — The Story (cream background, image placeholder + text)
          Image placeholder: "Founder Portrait / Job Site Photo"
          Heading: "From International Projects To Independent Practice"
          Body text: "MOEP Engineering Services Limited was founded to bring the same
          standards of precision, safety, and professionalism found on major
          international construction projects directly to individual and business
          clients. After years of experience working within large international
          engineering and construction companies, our founder set out to build a
          firm where clients deal directly with an experienced engineer — not a call
          center, and not a rotating cast of subcontractors. Every project, whether
          a home renovation or a commercial build, is handled with the same rigor
          and attention to detail as the largest international developments."
         ========================================================================= */}
      <section
        id="about-story-section"
        className="py-20 sm:py-28 bg-[#F0E7D9] bg-grid-pattern"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center pb-3 mb-12 border-b border-[#233746]/10">
            <div className="w-10 h-1 bg-[#FBC215]" />
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#BD1E3C]">
              01 / 03 — OUR ORIGIN
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Image Placeholder labeled "Founder Portrait / Job Site Photo" (5 cols) */}
            <div className="lg:col-span-5">
              <div
                id="story-image-placeholder-container"
                className="relative bg-white border-4 border-[#233746] shadow-elegant-lg overflow-hidden group"
              >
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1000&q=80"
                  alt="Founder Portrait / Job Site Photo - MOEP Engineering Services Limited"
                  className="w-full h-96 sm:h-[440px] object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Explicit Label: "Founder Portrait / Job Site Photo" */}
                <div
                  id="image-placeholder-badge"
                  className="absolute top-4 left-4 bg-[#233746] text-[#F0E7D9] border border-[#2c4457] px-3.5 py-1.5 flex items-center gap-2 shadow-md"
                >
                  <Camera className="w-4 h-4 text-[#FBC215]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FBC215]">
                    Founder Portrait / Job Site Photo
                  </span>
                </div>

                {/* Bottom Overlay Frame */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#233746]/95 border-t-2 border-[#BD1E3C] p-4 text-[#F0E7D9] backdrop-blur-xs">
                  <div className="font-heading text-sm font-bold uppercase tracking-wide">
                    MOEP Engineering In The Field
                  </div>
                  <div className="text-xs text-[#F0E7D9]/75 mt-0.5">
                    Rigorous site supervision &amp; personal engineering leadership
                  </div>
                </div>
              </div>
            </div>

            {/* Right: The Story Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="w-12 h-1 bg-[#BD1E3C]" />

              <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#233746] tracking-tight uppercase leading-tight">
                From International Projects To Independent Practice
              </h2>

              <div className="bg-white p-6 sm:p-8 border-l-4 border-[#233746] shadow-elegant">
                <p className="text-base sm:text-lg text-[#233746]/85 leading-relaxed font-normal">
                  MOEP Engineering Services Limited was founded to bring the same standards of
                  precision, safety, and professionalism found on major international construction
                  projects directly to individual and business clients. After years of experience
                  working within large international engineering and construction companies, our
                  founder set out to build a firm where clients deal directly with an experienced
                  engineer — not a call center, and not a rotating cast of subcontractors. Every
                  project, whether a home renovation or a commercial build, is handled with the
                  same rigor and attention to detail as the largest international developments.
                </p>
              </div>

              {/* Technical Sign-off Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
                <div className="p-3.5 bg-white border-l-2 border-[#BD1E3C] text-[#233746]">
                  <span className="font-bold block uppercase text-[#BD1E3C]">Direct Line Of Contact</span>
                  <span>Consult directly with senior engineers on every critical phase.</span>
                </div>
                <div className="p-3.5 bg-white border-l-2 border-[#FBC215] text-[#233746]">
                  <span className="font-bold block uppercase text-[#233746]">Zero Subcontract Pass-Through</span>
                  <span>Direct accountability and single-source project responsibility.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — Values (dark steel blue background, 3 or 4 icon columns)
          Heading: "How We Work"
          - "Precision" — "Every measurement, every material, every detail matters."
          - "Accountability" — "You always know who is responsible for your project —
            because it's the same person from start to finish."
          - "Integrity" — "Honest timelines, honest pricing, no surprises."
          - "Safety" — "International-standard safety practices on every site, every time."
         ========================================================================= */}
      <section
        id="about-values-section"
        className="py-20 sm:py-28 bg-[#233746] text-[#F0E7D9] border-t border-b border-[#2c4457] bg-dark-grid-pattern"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4 pb-4 border-b border-[#F0E7D9]/10">
            <div>
              <div className="w-10 h-1 bg-[#FBC215] mb-3" />
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F0E7D9] font-heading tracking-tight uppercase">
                How We Work
              </h2>
              <p className="text-sm sm:text-base text-[#F0E7D9]/80 mt-2 max-w-xl">
                The core operating principles guiding every residential and commercial undertaking.
              </p>
            </div>
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#FBC215] whitespace-nowrap">
              02 / 03 — VALUES
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Value 1: Precision */}
            <div
              id="value-card-precision"
              className="bg-[#192733] p-7 border-l-4 border-[#BD1E3C] shadow-elegant hover:shadow-elegant-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 mb-6 bg-[#233746] text-[#FBC215] group-hover:bg-[#BD1E3C] group-hover:text-white transition-colors flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-extrabold mb-3 text-[#F0E7D9] font-heading uppercase tracking-wide">
                  Precision
                </h3>
                <p className="text-sm leading-relaxed text-[#F0E7D9]/80">
                  Every measurement, every material, every detail matters.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#2c4457] flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FBC215]">
                <span className="w-2 h-2 bg-[#FBC215]" />
                <span>Zero Margin For Error</span>
              </div>
            </div>

            {/* Value 2: Accountability */}
            <div
              id="value-card-accountability"
              className="bg-[#192733] p-7 border-l-4 border-[#FBC215] shadow-elegant hover:shadow-elegant-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 mb-6 bg-[#233746] text-[#FBC215] group-hover:bg-[#BD1E3C] group-hover:text-white transition-colors flex items-center justify-center">
                  <UserCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-extrabold mb-3 text-[#F0E7D9] font-heading uppercase tracking-wide">
                  Accountability
                </h3>
                <p className="text-sm leading-relaxed text-[#F0E7D9]/80">
                  You always know who is responsible for your project — because it&apos;s the same person from start to finish.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#2c4457] flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FBC215]">
                <span className="w-2 h-2 bg-[#FBC215]" />
                <span>Single-Point Leadership</span>
              </div>
            </div>

            {/* Value 3: Integrity */}
            <div
              id="value-card-integrity"
              className="bg-[#192733] p-7 border-l-4 border-[#BD1E3C] shadow-elegant hover:shadow-elegant-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 mb-6 bg-[#233746] text-[#FBC215] group-hover:bg-[#BD1E3C] group-hover:text-white transition-colors flex items-center justify-center">
                  <Scale className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-extrabold mb-3 text-[#F0E7D9] font-heading uppercase tracking-wide">
                  Integrity
                </h3>
                <p className="text-sm leading-relaxed text-[#F0E7D9]/80">
                  Honest timelines, honest pricing, no surprises.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#2c4457] flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FBC215]">
                <span className="w-2 h-2 bg-[#FBC215]" />
                <span>Transparent Delivery</span>
              </div>
            </div>

            {/* Value 4: Safety */}
            <div
              id="value-card-safety"
              className="bg-[#192733] p-7 border-l-4 border-[#FBC215] shadow-elegant hover:shadow-elegant-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 mb-6 bg-[#233746] text-[#FBC215] group-hover:bg-[#BD1E3C] group-hover:text-white transition-colors flex items-center justify-center">
                  <HardHat className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-extrabold mb-3 text-[#F0E7D9] font-heading uppercase tracking-wide">
                  Safety
                </h3>
                <p className="text-sm leading-relaxed text-[#F0E7D9]/80">
                  International-standard safety practices on every site, every time.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#2c4457] flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FBC215]">
                <span className="w-2 h-2 bg-[#FBC215]" />
                <span>Zero-Harm Standard</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — CTA (cream background, centered)
          Heading: "Work Directly With An Experienced Engineer"
          Button (red): "Start a Conversation" → links to Contact page
         ========================================================================= */}
      <section
        id="about-cta-section"
        className="py-20 sm:py-24 bg-[#F0E7D9] text-[#233746] text-center border-t border-[#233746]/10 bg-grid-pattern relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="w-12 h-1 bg-[#FBC215] mx-auto mb-4" />

          <h2 className="font-heading text-3xl sm:text-5xl font-black tracking-tight text-[#233746] uppercase">
            Work Directly With An Experienced Engineer
          </h2>

          <p className="text-base sm:text-lg text-[#233746]/80 max-w-2xl mx-auto font-normal leading-relaxed">
            Ready to discuss your commercial or residential project with personal engineering accountability?
          </p>

          <div className="pt-4">
            <button
              id="about-start-conversation-btn"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center gap-2 bg-[#BD1E3C] hover:bg-[#9e1832] text-[#F0E7D9] text-xs sm:text-sm font-bold uppercase tracking-wider px-10 py-4 shadow-elegant hover:scale-[1.03] transition-all cursor-pointer"
            >
              <span>Start a Conversation</span>
              <ChevronRight className="w-4 h-4 text-[#FBC215]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
