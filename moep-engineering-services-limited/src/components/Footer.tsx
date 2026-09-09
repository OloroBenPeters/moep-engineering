import React from 'react';
import { PageId } from '../types';
import { Logo } from './Logo';
import {
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  ArrowUp,
  Globe,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer
      id="main-footer"
      className="bg-[#233746] text-[#F0E7D9] border-t-4 border-[#BD1E3C] bg-dark-grid-pattern relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Column 1: Brand / Logo & Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Logo variant="full" size="md" onClick={() => handleNav('home')} />
            <div className="w-12 h-1 bg-[#FBC215]" />
            <p className="text-sm text-[#F0E7D9]/80 max-w-md leading-relaxed font-normal">
              MOEP Engineering Services Limited delivers residential and commercial construction
              backed by years of international engineering experience — now working directly for you.
            </p>

            {/* Social Icons (Placeholders) */}
            <div className="pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#FBC215] mb-3">
                Connect With Us
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="#social-linkedin"
                  aria-label="LinkedIn placeholder"
                  onClick={(e) => e.preventDefault()}
                  className="w-9 h-9 bg-[#192733] border border-[#2c4457] hover:border-[#BD1E3C] hover:bg-[#BD1E3C] text-[#F0E7D9] flex items-center justify-center transition-all cursor-pointer shadow-xs"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#social-twitter"
                  aria-label="Twitter / X placeholder"
                  onClick={(e) => e.preventDefault()}
                  className="w-9 h-9 bg-[#192733] border border-[#2c4457] hover:border-[#BD1E3C] hover:bg-[#BD1E3C] text-[#F0E7D9] flex items-center justify-center transition-all cursor-pointer shadow-xs"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#social-instagram"
                  aria-label="Instagram placeholder"
                  onClick={(e) => e.preventDefault()}
                  className="w-9 h-9 bg-[#192733] border border-[#2c4457] hover:border-[#BD1E3C] hover:bg-[#BD1E3C] text-[#F0E7D9] flex items-center justify-center transition-all cursor-pointer shadow-xs"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#social-facebook"
                  aria-label="Facebook placeholder"
                  onClick={(e) => e.preventDefault()}
                  className="w-9 h-9 bg-[#192733] border border-[#2c4457] hover:border-[#BD1E3C] hover:bg-[#BD1E3C] text-[#F0E7D9] flex items-center justify-center transition-all cursor-pointer shadow-xs"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links to All Pages (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-heading text-sm font-bold tracking-widest text-[#FBC215] uppercase flex items-center gap-2">
              <span>Quick Links</span>
              <span className="w-3 h-0.5 bg-[#BD1E3C]" />
            </h3>
            <ul className="space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    id={`footer-nav-${link.id}`}
                    onClick={() => handleNav(link.id)}
                    className="text-[#F0E7D9]/80 hover:text-[#BD1E3C] transition-colors cursor-pointer flex items-center gap-2 group font-medium"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#FBC215] group-hover:translate-x-1 transition-transform" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info Repeated (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-heading text-sm font-bold tracking-widest text-[#FBC215] uppercase flex items-center gap-2">
              <span>Contact Information</span>
              <span className="w-3 h-0.5 bg-[#BD1E3C]" />
            </h3>

            <div className="space-y-3.5 text-sm text-[#F0E7D9]/85">
              {/* Address */}
              <div className="flex items-start gap-3 bg-[#192733] p-3.5 border-l-2 border-[#FBC215]">
                <MapPin className="w-4 h-4 text-[#FBC215] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs uppercase font-bold text-[#F0E7D9]/60">Address</div>
                  <div className="font-medium text-[#F0E7D9] leading-snug">
                    13 Tangayika Crescent, Crown Estate, Lekki, Lagos
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 bg-[#192733] p-3.5 border-l-2 border-[#BD1E3C]">
                <Mail className="w-4 h-4 text-[#FBC215] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs uppercase font-bold text-[#F0E7D9]/60">Email</div>
                  <a
                    href="mailto:MOEPengineeringservicesltd@gmail.com"
                    className="hover:text-[#FBC215] transition-colors font-medium break-all text-[#F0E7D9]"
                  >
                    MOEPengineeringservicesltd@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3 bg-[#192733] p-3.5 border-l-2 border-[#FBC215]">
                <Phone className="w-4 h-4 text-[#FBC215] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs uppercase font-bold text-[#F0E7D9]/60">Phone</div>
                  <a
                    href="tel:+2348076176939"
                    className="hover:text-[#FBC215] transition-colors font-medium text-[#F0E7D9] inline-block"
                  >
                    +234 807 617 6939
                  </a>
                </div>
              </div>

              {/* Service Area */}
              <div className="flex items-start gap-3 bg-[#192733] p-3.5 border-l-2 border-[#BD1E3C]">
                <Globe className="w-4 h-4 text-[#FBC215] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs uppercase font-bold text-[#F0E7D9]/60">Service Area</div>
                  <span className="font-medium text-[#F0E7D9]">
                    Nationwide / Remote Consulting Available
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright Line & Scroll-To-Top */}
        <div className="mt-14 pt-8 border-t border-[#2c4457] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F0E7D9]/70">
          <div>
            &copy; {currentYear} MOEP Engineering Services Limited. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#FBC215] hover:text-[#F0E7D9] transition-colors cursor-pointer font-bold uppercase tracking-wider"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
