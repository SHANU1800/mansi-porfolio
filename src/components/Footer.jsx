import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { LinkedInIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090C] text-zinc-300 pt-16 pb-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 text-left">
          {/* Brand & Overview */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-white text-zinc-950 flex items-center justify-center font-bold text-sm shadow-[0_0_12px_rgba(255,255,255,0.2)]">
                M
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                Mansi
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed">
              Bridging business understanding and practical automation. A second-year BBA student focused on operations, client requirements, and streamlined workflows.
            </p>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 text-zinc-300 text-xs border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)]"></span>
              <span>Open to Consultations & Internships</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#home"
                  onClick={(e) => scrollTo(e, '#home')}
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => scrollTo(e, '#about')}
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={(e) => scrollTo(e, '#skills')}
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Skills & Toolset
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => scrollTo(e, '#projects')}
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Featured Projects
                </a>
              </li>
              <li>
                <a
                  href="#how-i-work"
                  onClick={(e) => scrollTo(e, '#how-i-work')}
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  How I Work
                </a>
              </li>
              <li>
                <a
                  href="#collaboration"
                  onClick={(e) => scrollTo(e, '#collaboration')}
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Technical Collaboration
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Social Channels */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Connect Directly
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Available for project discussions, operational analysis, and internship inquiries.
            </p>
            <div className="space-y-2.5 pt-1">
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="flex items-center gap-2.5 text-xs text-zinc-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-white" />
                <span>{personalInfo.contact.email}</span>
              </a>
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-xs text-zinc-300 hover:text-white transition-colors"
              >
                <LinkedInIcon className="w-4 h-4 text-white" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            © {new Date().getFullYear()} Mansi. Designed for professional business communication.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-zinc-400">Demonstration Case Studies</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/10 text-zinc-300 hover:text-white hover:bg-white/20 transition-colors inline-flex items-center gap-1 cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
