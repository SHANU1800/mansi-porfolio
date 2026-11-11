import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  UserCheck, 
  Code2, 
  Play
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'roles' | 'architecture'
  const [simStep, setSimStep] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);

  if (!project) return null;

  const handleSimulate = () => {
    setIsSimulating(true);
    setSimStep(0);
    const interval = setInterval(() => {
      setSimStep((prev) => {
        if (prev >= project.demoSteps.length - 1) {
          clearInterval(interval);
          setIsSimulating(false);
          return project.demoSteps.length - 1;
        }
        return prev + 1;
      });
    }, 700);
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={onClose}
    >
      <div 
        className="relative bg-[#0E1016] rounded-t-3xl sm:rounded-3xl max-w-3xl w-full border border-white/15 shadow-2xl overflow-hidden max-h-[92vh] sm:max-h-[90vh] flex flex-col text-left animate-in fade-in slide-in-from-bottom-4 sm:zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header (Compact on mobile) */}
        <div className="p-4 sm:p-6 border-b border-white/10 flex items-start justify-between bg-[#13161E]/90 gap-3">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-semibold bg-white/10 text-white border border-white/15 truncate">
                {project.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-medium bg-zinc-800 text-zinc-300 border border-zinc-700 truncate">
                Demonstration
              </span>
            </div>
            <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight truncate">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-0.5 sm:mt-1 line-clamp-1 sm:line-clamp-none">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 transition-colors shrink-0 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation (Horizontally scrollable for mobile) */}
        <div className="flex border-b border-white/10 bg-[#0E1016] px-3 sm:px-6 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-3 sm:px-4 text-xs font-semibold border-b-2 transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'overview'
                ? 'border-white text-white'
                : 'border-transparent text-zinc-400 hover:text-white'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('roles')}
            className={`py-3 px-3 sm:px-4 text-xs font-semibold border-b-2 transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'roles'
                ? 'border-white text-white'
                : 'border-transparent text-zinc-400 hover:text-white'
            }`}
          >
            Roles (Mansi vs Partner)
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`py-3 px-3 sm:px-4 text-xs font-semibold border-b-2 transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'architecture'
                ? 'border-white text-white'
                : 'border-transparent text-zinc-400 hover:text-white'
            }`}
          >
            Flow Simulation
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 sm:p-7 overflow-y-auto space-y-5 sm:space-y-6">
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-4 sm:space-y-6">
              {/* Problem & Solution Side by Side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10">
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-zinc-400 block mb-1.5 sm:mb-2">
                    The Business Problem
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {project.businessProblem}
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/[0.05] border border-white/15">
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-white block mb-1.5 sm:mb-2">
                    The Proposed Solution
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
                    {project.proposedSolution}
                  </p>
                </div>
              </div>

              {/* Business Requirements */}
              <div>
                <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2.5">
                  Core Business Requirements
                </h4>
                <div className="space-y-2">
                  {project.businessRequirements.map((req, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 p-2.5 sm:p-3 rounded-xl bg-white/[0.03] border border-white/10">
                      <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & Tech Stack */}
              <div>
                <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                  Tools & Technologies
                </h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tools.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-xl bg-white/5 text-[11px] sm:text-xs font-medium text-zinc-300 border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ROLES BREAKDOWN */}
          {activeTab === 'roles' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.04] border border-white/15 text-xs text-zinc-300 leading-relaxed">
                <span className="font-bold text-white">Transparent Division of Labor:</span> In our two-person venture, I drive the business requirements, process mapping, and client alignment, while my engineering partner builds backend integrations and automation pipelines.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                {/* Mansi's Contribution */}
                <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                  <div className="flex items-center gap-2 pb-2.5 border-b border-white/10">
                    <UserCheck className="w-4 h-4 text-white shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-white">Mansi's Contribution</h4>
                      <p className="text-[10px] text-zinc-400">Business Development & Operations</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-xs text-zinc-300">
                    {project.mansiContribution.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0"></span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Partner Execution */}
                <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                  <div className="flex items-center gap-2 pb-2.5 border-b border-white/10">
                    <Code2 className="w-4 h-4 text-zinc-400 shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-white">Technical Partner Execution</h4>
                      <p className="text-[10px] text-zinc-400">Software & Automation Engineering</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-xs text-zinc-300">
                    {project.technicalPartnerExecution.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-1.5 shrink-0"></span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: INTERACTIVE FLOW SIMULATION */}
          {activeTab === 'architecture' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">Architecture Simulation</h4>
                  <p className="text-[11px] sm:text-xs text-zinc-400">Walk through simulated operational execution</p>
                </div>
                <button
                  onClick={handleSimulate}
                  disabled={isSimulating}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white text-zinc-950 hover:bg-zinc-200 transition-colors disabled:opacity-50 shadow-[0_0_12px_rgba(255,255,255,0.2)] cursor-pointer shrink-0"
                >
                  <Play className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} />
                  <span>{isSimulating ? 'Running...' : 'Play Scenario'}</span>
                </button>
              </div>

              <div className="space-y-2 sm:space-y-3">
                {project.demoSteps.map((step, idx) => {
                  const isActive = simStep === idx;
                  const isPassed = simStep > idx;
                  return (
                    <div
                      key={idx}
                      onClick={() => setSimStep(idx)}
                      className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border transition-all cursor-pointer ${
                        isActive
                          ? 'border-white/50 bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.08)]'
                          : isPassed
                          ? 'border-white/20 bg-white/[0.04]'
                          : 'border-white/5 bg-white/[0.02] opacity-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white">{step.step}</span>
                        {isPassed && (
                          <span className="text-[9px] sm:text-[10px] font-semibold text-zinc-200 bg-white/10 border border-white/20 px-2 py-0.5 rounded-full">
                            Executed
                          </span>
                        )}
                        {isActive && (
                          <span className="text-[9px] sm:text-[10px] font-semibold text-zinc-950 bg-white px-2 py-0.5 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                            Active Step
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] sm:text-xs text-zinc-300 mt-1 leading-relaxed">{step.detail}</p>
                    </div>
                  );
                })}
              </div>

              {/* Interactive Visual Preview Box based on Project ID */}
              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-black border border-white/10 text-white space-y-2 sm:space-y-3 font-mono text-[11px] sm:text-xs">
                <div className="flex items-center justify-between text-zinc-400 border-b border-white/10 pb-2">
                  <span className="text-[10px] sm:text-[11px] text-zinc-200 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)] animate-pulse shrink-0"></span>
                    <span>RUNTIME MONITOR</span>
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-zinc-400">STEP {simStep + 1} OF {project.demoSteps.length}</span>
                </div>

                {project.id === 'lead-management' && (
                  <div className="space-y-1.5 pt-1">
                    <div className="flex justify-between text-zinc-300">
                      <span className="text-zinc-500">Source:</span>
                      <span className="text-zinc-200 truncate ml-2">LandingPage_Webhook</span>
                    </div>
                    <div className="flex justify-between text-zinc-300">
                      <span className="text-zinc-500">HubSpot:</span>
                      <span className="text-white truncate ml-2">Created (ID #49281)</span>
                    </div>
                    <div className="flex justify-between text-zinc-300">
                      <span className="text-zinc-500">Follow-up:</span>
                      <span className="text-white truncate ml-2">Scheduled (Day 2 @ 10am)</span>
                    </div>
                  </div>
                )}

                {project.id === 'bi-dashboard' && (
                  <div className="space-y-1.5 pt-1">
                    <div className="flex justify-between text-zinc-300">
                      <span className="text-zinc-500">Schema:</span>
                      <span className="text-zinc-200 truncate ml-2">Star Schema (Sales + Dims)</span>
                    </div>
                    <div className="flex justify-between text-zinc-300">
                      <span className="text-zinc-500">Margin:</span>
                      <span className="text-white truncate ml-2">38.4% (+4.2% YoY)</span>
                    </div>
                    <div className="flex justify-between text-zinc-300">
                      <span className="text-zinc-500">Status:</span>
                      <span className="text-white truncate ml-2">Power BI Refreshed</span>
                    </div>
                  </div>
                )}

                {project.id === 'recruitment-automation' && (
                  <div className="space-y-1.5 pt-1">
                    <div className="flex justify-between text-zinc-300">
                      <span className="text-zinc-500">Intake:</span>
                      <span className="text-zinc-200 truncate ml-2">Google Form Ingested</span>
                    </div>
                    <div className="flex justify-between text-zinc-300">
                      <span className="text-zinc-500">Score:</span>
                      <span className="text-white truncate ml-2">92/100 (Criteria Met)</span>
                    </div>
                    <div className="flex justify-between text-zinc-300">
                      <span className="text-zinc-500">Alert:</span>
                      <span className="text-white truncate ml-2">Slack #hiring-ops pinged</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-3 bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 text-[11px] sm:text-xs text-zinc-400 flex items-center justify-between">
                <span>Sandbox Verified</span>
                <span className="font-mono text-[10px] sm:text-[11px] text-zinc-400">Latency: ~340ms</span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Footer (Full width stacked on mobile) */}
        <div className="p-4 sm:p-5 border-t border-white/10 bg-[#13161E]/90 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="text-[11px] text-zinc-400 text-center sm:text-left">
            Need this workflow customized for your company?
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-4 py-2.5 text-xs font-semibold text-zinc-400 hover:text-white transition-colors cursor-pointer border border-white/10 sm:border-transparent rounded-xl"
            >
              Close
            </button>
            <a
              href="#contact"
              onClick={() => {
                onClose();
                const el = document.querySelector('#contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-xs font-bold text-zinc-950 bg-white hover:bg-zinc-200 transition-colors shadow-[0_0_12px_rgba(255,255,255,0.2)] text-center cursor-pointer"
            >
              Discuss Solution
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
