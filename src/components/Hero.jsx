import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react';
import HeroVisual from './HeroVisual';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Theme atmospheric lighting & diagonal sheen */}
      <div className="absolute top-0 right-1/4 w-[320px] sm:w-[600px] h-[320px] sm:h-[500px] bg-white/[0.03] rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-4 sm:left-10 w-[240px] sm:w-[450px] h-[240px] sm:h-[450px] bg-zinc-500/[0.04] rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Positioning & Copy */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-left">
            {/* Pill Tag (Responsive padding & text) */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-white/5 border border-white/15 text-[11px] sm:text-xs font-semibold text-zinc-200 backdrop-blur-md max-w-full"
            >
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)] animate-pulse shrink-0"></span>
              <span className="truncate">BBA Student • Business Development & Operations</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.15] break-words"
            >
              Connecting Business Problems with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                Smarter Technology.
              </span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="text-sm sm:text-lg text-zinc-400 leading-relaxed max-w-xl"
            >
              {personalInfo.bio}
            </motion.p>

            {/* Credibility & Honest Positioning Note */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="p-3.5 sm:p-4 rounded-2xl bg-[#12151B]/80 border border-white/10 text-xs text-zinc-300 flex items-start gap-2.5 sm:gap-3 max-w-xl backdrop-blur-sm"
            >
              <div className="w-5 h-5 rounded-md bg-white/10 text-white flex items-center justify-center shrink-0 font-bold text-xs mt-0.5 border border-white/20">
                i
              </div>
              <p className="leading-relaxed text-[11px] sm:text-xs">
                <span className="font-semibold text-white">Two-Person Venture Model:</span> I lead business research, client requirement gathering, and operations coordination, partnering with a dedicated technical developer who executes software engineering and backend automation.
              </p>
            </motion.div>

            {/* Call to Actions (Mobile Friendly Full Width Stack) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.25 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1 sm:pt-2"
            >
              <button
                onClick={() => scrollTo('#projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-3 rounded-full text-sm font-semibold text-zinc-950 bg-white hover:bg-zinc-200 active:bg-zinc-300 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.35)] cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollTo('#contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-3 rounded-full text-sm font-semibold text-zinc-300 bg-white/5 hover:bg-white/10 active:bg-white/15 border border-white/15 hover:border-white/30 transition-all cursor-pointer backdrop-blur-md"
              >
                <span>Let's Connect</span>
                <MessageSquare className="w-4 h-4 text-zinc-400" />
              </button>
            </motion.div>

            {/* Value Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="pt-2 sm:pt-4 flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-y-2 gap-x-6 text-[11px] sm:text-xs text-zinc-400 font-medium"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span>Strategic Business Foundations</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span>Process-Oriented Thinking</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span>Technical Feasibility Collaboration</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Console Visualizer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="lg:col-span-6 w-full"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
