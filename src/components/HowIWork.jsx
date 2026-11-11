import React, { useState } from 'react';
import { 
  Search, 
  AlertTriangle, 
  ClipboardList, 
  Cpu, 
  GitMerge, 
  CheckCircle,
  ArrowRight,
  FileText,
  UserCheck
} from 'lucide-react';
import { workflowSteps } from '../data/portfolioData';

const stepIcons = [
  Search,
  AlertTriangle,
  ClipboardList,
  Cpu,
  GitMerge,
  CheckCircle
];

export default function HowIWork() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-i-work" className="py-16 sm:py-20 lg:py-28 bg-[#0B0D12] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/5 border border-white/15 text-[11px] sm:text-xs font-semibold text-zinc-200 mb-2.5 sm:mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)]"></span>
            Structured Methodology
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            How I Work: From Problem to Production
          </h2>
          <p className="mt-2 sm:mt-3 text-zinc-400 text-sm sm:text-lg leading-relaxed">
            A disciplined six-phase engagement process designed to eliminate ambiguity, align technical feasibility with commercial objectives, and deliver dependable outcomes.
          </p>
        </div>

        {/* Mobile Horizontal Step Bar (Swipeable on mobile) */}
        <div className="flex lg:hidden overflow-x-auto no-scrollbar gap-2 pb-3 mb-4 text-left">
          {workflowSteps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`px-3 py-2 rounded-xl border text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
                  isSelected
                    ? 'bg-white text-zinc-950 border-white shadow-[0_0_12px_rgba(255,255,255,0.2)]'
                    : 'bg-[#12151C] text-zinc-400 border-white/10 hover:border-white/20'
                }`}
              >
                <span className="font-mono">{step.number}</span>
                <span>{step.title.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Desktop Connected Timeline */}
        <div className="hidden lg:grid grid-cols-6 gap-3 mb-10 relative">
          <div className="absolute top-1/2 left-6 right-6 h-0.5 bg-zinc-800 -translate-y-1/2 z-0" />

          {workflowSteps.map((step, idx) => {
            const Icon = stepIcons[idx];
            const isSelected = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`relative z-10 p-4 rounded-3xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-white text-zinc-950 border-white shadow-[0_0_20px_rgba(255,255,255,0.25)]'
                    : 'bg-[#12151C]/90 text-zinc-300 border-white/10 hover:border-white/25 hover:bg-[#151922]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${isSelected ? 'text-zinc-950' : 'text-zinc-500'}`}>
                    {step.number}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isSelected ? 'bg-zinc-950 text-white' : 'bg-white/10 text-white'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <h4 className={`text-xs font-bold line-clamp-1 ${isSelected ? 'text-zinc-950' : 'text-white'}`}>
                  {step.title}
                </h4>
                <p className={`text-[11px] mt-0.5 line-clamp-1 ${isSelected ? 'text-zinc-700' : 'text-zinc-400'}`}>
                  {step.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Card */}
        <div className="bg-[#12151C]/80 rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl p-4 sm:p-8 lg:p-10 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Left Column: Step Description */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white text-zinc-950 font-mono font-extrabold text-base sm:text-lg flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.2)] shrink-0">
                  {workflowSteps[activeStep].number}
                </span>
                <div>
                  <span className="text-[10px] sm:text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                    Phase {activeStep + 1} of 6
                  </span>
                  <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {workflowSteps[activeStep].title}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {workflowSteps[activeStep].description}
              </p>

              {/* Deliverable Pill */}
              <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-white/[0.04] border border-white/10 space-y-1.5 sm:space-y-2">
                <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-zinc-400">
                  <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white shrink-0" />
                  <span>Key Phase Deliverable</span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-white leading-relaxed">
                  {workflowSteps[activeStep].deliverable}
                </p>
              </div>

              {/* Ownership Tag */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400 pt-1">
                <UserCheck className="w-4 h-4 text-white shrink-0" />
                <span className="font-medium text-[11px] sm:text-xs">Responsibility:</span>
                <span className="font-semibold text-white bg-white/10 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-white/15 text-[11px] sm:text-xs">
                  {workflowSteps[activeStep].role}
                </span>
              </div>
            </div>

            {/* Right Column: Step Progress Navigation */}
            <div className="lg:col-span-5 bg-[#0E1015] p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/10 space-y-3 sm:space-y-4">
              <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-zinc-400">
                Process Progression
              </h4>

              <div className="space-y-1.5 sm:space-y-2">
                {workflowSteps.map((step, idx) => {
                  const isCurrent = activeStep === idx;
                  const isCompleted = activeStep > idx;
                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveStep(idx)}
                      className={`p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl cursor-pointer transition-all flex items-center justify-between text-xs ${
                        isCurrent
                          ? 'bg-white text-zinc-950 font-bold shadow-[0_0_12px_rgba(255,255,255,0.2)]'
                          : isCompleted
                          ? 'bg-white/[0.05] border border-white/15 text-zinc-200 hover:border-white/30'
                          : 'bg-white/[0.02] border border-white/5 text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[11px] sm:text-xs">{step.number}</span>
                        <span className="truncate">{step.title}</span>
                      </div>
                      {isCompleted && <span className="text-[9px] sm:text-[10px] text-zinc-300 bg-white/10 px-1.5 py-0.5 rounded-full shrink-0">Done</span>}
                      {isCurrent && <span className="text-[9px] sm:text-[10px] bg-zinc-900 text-white px-2 py-0.5 rounded-full shrink-0">Viewing</span>}
                    </div>
                  );
                })}
              </div>

              {/* Next/Prev Navigation */}
              <div className="pt-2 flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  disabled={activeStep === 0}
                  className="px-3 sm:px-3.5 py-2 rounded-xl text-xs font-semibold text-zinc-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                >
                  ← Previous
                </button>
                <button
                  onClick={() => setActiveStep((prev) => Math.min(workflowSteps.length - 1, prev + 1))}
                  disabled={activeStep === workflowSteps.length - 1}
                  className="px-3 sm:px-3.5 py-2 rounded-xl text-xs font-bold text-zinc-950 bg-white hover:bg-zinc-200 disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1 shadow-[0_0_10px_rgba(255,255,255,0.2)] cursor-pointer"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
