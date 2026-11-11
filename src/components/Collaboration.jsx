import React from 'react';
import { 
  Users2, 
  Code2, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  MessageSquareCheck
} from 'lucide-react';
import { collaborationDetails } from '../data/portfolioData';

export default function Collaboration() {
  const { businessColumn, technicalColumn } = collaborationDetails;

  return (
    <section id="collaboration" className="py-16 sm:py-20 lg:py-28 bg-[#08090C] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/5 border border-white/15 text-[11px] sm:text-xs font-semibold text-zinc-200 mb-2.5 sm:mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)]"></span>
            Operational Partnership
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {collaborationDetails.headline}
          </h2>
          <p className="mt-2 sm:mt-4 text-sm sm:text-lg text-zinc-400 leading-relaxed">
            {collaborationDetails.subheadline}
          </p>
        </div>

        {/* Two-Column Collaborative Model */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Column 1: Mansi - Business Development & Operations */}
          <div className="lg:col-span-6 rounded-2xl sm:rounded-3xl bg-[#12151C]/80 border border-white/10 p-5 sm:p-8 flex flex-col justify-between text-left hover:border-white/25 transition-all shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white text-zinc-950 flex items-center justify-center font-bold shadow-[0_0_15px_rgba(255,255,255,0.2)] shrink-0">
                    <Users2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">{businessColumn.title}</h3>
                    <p className="text-xs font-semibold text-zinc-300">Lead: {businessColumn.owner}</p>
                  </div>
                </div>
                <span className="px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold bg-white/10 text-white border border-white/15">
                  Business Lead
                </span>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5 sm:mb-6">
                Focuses entirely on your business reality: uncovering where operational friction slows growth, documenting unambiguous project requirements, and maintaining clear communication.
              </p>

              <div className="space-y-2.5 sm:space-y-3">
                <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Key Responsibilities
                </h4>
                {businessColumn.responsibilities.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 sm:mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)] shrink-0"></span>
              <span className="text-[11px] sm:text-xs">Client-facing alignment & operational clarity</span>
            </div>
          </div>

          {/* Column 2: Technical Development Partner */}
          <div className="lg:col-span-6 rounded-2xl sm:rounded-3xl bg-[#12151C]/80 border border-white/10 p-5 sm:p-8 flex flex-col justify-between text-left hover:border-white/25 transition-all shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-zinc-800 text-white flex items-center justify-center font-bold border border-white/20 shadow-md shrink-0">
                    <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">{technicalColumn.title}</h3>
                    <p className="text-xs font-semibold text-zinc-300">Lead: {technicalColumn.owner}</p>
                  </div>
                </div>
                <span className="px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold bg-white/10 text-white border border-white/15">
                  Engineering Lead
                </span>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5 sm:mb-6">
                Specializes in engineering robust software systems, API connections, custom webhook scenarios, and deploying production-grade automations that run reliably.
              </p>

              <div className="space-y-2.5 sm:space-y-3">
                <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Key Responsibilities
                </h4>
                {technicalColumn.responsibilities.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 sm:mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-zinc-400 shrink-0"></span>
              <span className="text-[11px] sm:text-xs">Software architecture, APIs & backend pipelines</span>
            </div>
          </div>
        </div>

        {/* Synergy Value Banner */}
        <div className="mt-8 sm:mt-10 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#12151C] border border-white/10 text-white text-left shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-center">
            <div className="flex items-start sm:items-center gap-3">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-white/10 flex items-center justify-center text-white shrink-0 border border-white/15">
                <MessageSquareCheck className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold">Zero Translation Loss</h4>
                <p className="text-[11px] sm:text-xs text-zinc-400 mt-0.5">Business needs are scoped cleanly before code is written.</p>
              </div>
            </div>

            <div className="flex items-start sm:items-center gap-3">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-white/10 flex items-center justify-center text-white shrink-0 border border-white/15">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold">Rapid Turnaround</h4>
                <p className="text-[11px] sm:text-xs text-zinc-400 mt-0.5">Direct communication without cumbersome agency overhead.</p>
              </div>
            </div>

            <div className="flex items-start sm:items-center gap-3">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-white/10 flex items-center justify-center text-white shrink-0 border border-white/15">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold">Reliable Execution</h4>
                <p className="text-[11px] sm:text-xs text-zinc-400 mt-0.5">Tested architecture designed for stability and clear ROI.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
