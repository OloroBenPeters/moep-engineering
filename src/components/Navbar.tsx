import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { Logo } from './Logo';
import { Menu, X, PhoneCall, ChevronRight, HardHat, Mail } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-navigation-bar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#233746] shadow-xl border-b border-[#233746]/80 py-3'
          : 'bg-[#233746] border-b border-[#2c4457] py-4'
      }`}
    >
      {/* Top micro-bar for direct contact & emergency site hotline */}
      <div className="hidden lg:block border-b border-[#2c4457]/70 pb-2 mb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs text-[#F0E7D9]/70">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#FBC215] animate-pulse"></span>
              <span className="text-[#F0E7D9]/90 font-medium">COREN Certified Practice:</span> EF/2004/0821
            </span>
            <span className="text-[#F0E7D9]/40">|</span>
            <span>ISO 9001:2015 &amp; ISO 45001:2018 Certified</span>
            <span className="text-[#F0E7D9]/40">|</span>
            <span className="text-[#F0E7D9]/90">Site HSE Record: 4.2M+ Safe Hours</span>
          </div>
          <div className="flex items-center gap-4 text-[#F0E7D9]/90">
            <a
              href="tel:+2348076176939"
              className="flex items-center gap-1.5 text-[#FBC215] hover:text-white transition-colors cursor-pointer font-medium"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#FBC215]" />
              <span>+234 807 617 6939</span>
            </a>
            <span className="text-[#F0E7D9]/40">|</span>
            <a
              href="mailto:MOEPengineeringservicesltd@gmail.com"
              className="flex items-center gap-1.5 text-[#F0E7D9] hover:text-[#FBC215] transition-colors cursor-pointer font-medium"
            >
              <Mail className="w-3.5 h-3.5 text-[#FBC215]" />
              <span>MOEPengineeringservicesltd@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo: Mobile collapsed view uses logo-mark.png alone; tablet/desktop uses logo-full.png */}
          <Logo variant="responsive" size="header" onClick={() => handleNavClick('home')} />

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-6">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-xs lg:text-sm font-semibold uppercase tracking-wider transition-colors cursor-pointer py-1 ${
                    isActive
                      ? 'text-[#FBC215] border-b-2 border-[#FBC215]'
                      : 'text-[#F0E7D9] hover:text-[#BD1E3C]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Primary CTA button: Structural Red */}
          <div className="hidden md:flex items-center gap-3">
            <button
              id="nav-cta-quote"
              onClick={() => handleNavClick('contact')}
              className="flex items-center gap-2 bg-[#BD1E3C] hover:bg-[#9e1832] text-[#F0E7D9] text-xs uppercase tracking-wider font-bold px-5 py-2.5 rounded-sm transition-all duration-200 shadow-sm hover:shadow-md hover:translate-y-[-1px] cursor-pointer"
            >
              <HardHat className="w-4 h-4 text-[#FBC215]" />
              <span>Request Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F0E7D9] hover:text-[#BD1E3C] transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-menu"
          className="md:hidden bg-[#192733] border-b border-[#2c4457] px-4 pt-4 pb-6 mt-3 shadow-2xl transition-all"
        >
          {/* Expanded Full Logo lockup in Open Mobile Menu */}
          <div className="pb-3.5 mb-3 border-b border-[#2c4457] flex items-center justify-between">
            <Logo variant="full" size="md" onClick={() => handleNavClick('home')} />
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#FBC215]">Directory</span>
          </div>

          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded text-sm font-semibold transition-colors text-left ${
                    isActive
                      ? 'bg-[#233746] text-[#FBC215] border-l-4 border-[#BD1E3C]'
                      : 'text-[#F0E7D9] hover:text-[#BD1E3C] hover:bg-[#233746]/50'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#F0E7D9]/40" />
                </button>
              );
            })}
            <div className="pt-3 mt-2 border-t border-[#2c4457]">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full flex items-center justify-center gap-2 bg-[#BD1E3C] hover:bg-[#9e1832] text-[#F0E7D9] font-bold text-xs uppercase tracking-wider py-3 rounded-sm transition-colors"
              >
                <HardHat className="w-4 h-4 text-[#FBC215]" />
                <span>Request Consultation &amp; Tender</span>
              </button>
              <div className="mt-3 text-center text-xs text-[#F0E7D9]/70 space-y-2">
                <a
                  href="tel:+2348076176939"
                  className="hover:text-[#FBC215] transition-colors flex items-center justify-center gap-1.5 font-medium text-sm text-[#F0E7D9]"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#FBC215]" />
                  <span>+234 807 617 6939</span>
                </a>
                <a
                  href="mailto:MOEPengineeringservicesltd@gmail.com"
                  className="hover:text-[#FBC215] transition-colors break-all flex items-center justify-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-[#FBC215]" />
                  <span>MOEPengineeringservicesltd@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
