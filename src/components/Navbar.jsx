import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'how-i-work', 'collaboration', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'How I Work', href: '#how-i-work', id: 'how-i-work' },
    { name: 'Collaboration', href: '#collaboration', id: 'collaboration' },
  ];

  const scrollTo = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08090C]/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3'
          : 'bg-[#08090C]/80 backdrop-blur-xs py-3.5 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => scrollTo(e, '#home')}
            className="group flex items-center gap-2.5 focus:outline-none shrink-0"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white text-zinc-950 flex items-center justify-center font-extrabold text-sm sm:text-base tracking-tight shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover:bg-zinc-200 transition-colors">
              M
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-white text-sm sm:text-base tracking-tight leading-tight group-hover:text-zinc-200 transition-colors">
                Mansi
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium text-zinc-400 leading-none">
                BizDev & Operations
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Pill Style) */}
          <nav className="hidden md:flex items-center gap-1 bg-[#12151B]/80 p-1 rounded-full border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-white text-zinc-950 shadow-[0_0_12px_rgba(255,255,255,0.2)] font-semibold'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Button (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-white/5 text-zinc-300 border border-white/15">
              <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] animate-pulse"></span>
              Open to Opportunities
            </span>
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, '#contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 active:bg-zinc-300 transition-all shadow-[0_0_15px_rgba(255,255,255,0.18)]"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Action & Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, '#contact')}
              className="px-3 py-1.5 rounded-full text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 active:bg-zinc-300 transition-colors shadow-xs"
            >
              Connect
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-zinc-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none active:bg-white/15"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu with Backdrop Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop Click to Close */}
          <div 
            className="fixed inset-0 top-[57px] bg-black/60 backdrop-blur-xs z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Menu */}
          <div className="md:hidden fixed inset-x-0 top-[57px] bg-[#0E1016]/98 backdrop-blur-xl border-b border-white/10 shadow-2xl px-5 pt-4 pb-6 transition-all text-left z-50 max-h-[calc(100vh-57px)] overflow-y-auto">
            <div className="flex flex-col space-y-1.5">
              <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                Navigation
              </div>
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className={`px-3.5 py-3 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-white text-zinc-950 font-bold shadow-[0_0_12px_rgba(255,255,255,0.2)]'
                        : 'text-zinc-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-zinc-950"></span>}
                  </a>
                );
              })}

              <div className="pt-4 border-t border-white/10 mt-3 space-y-3">
                <div className="px-1 flex items-center gap-2 text-xs text-zinc-400">
                  <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)] animate-pulse"></span>
                  <span>Available for BizDev & Operations Inquiries</span>
                </div>
                <a
                  href="#contact"
                  onClick={(e) => scrollTo(e, '#contact')}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-zinc-950 bg-white hover:bg-zinc-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                >
                  <span>Let's Connect</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
