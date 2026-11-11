import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Users, 
  Layers, 
  TrendingUp, 
  Inbox, 
  Check, 
  BellRing
} from 'lucide-react';

export default function HeroVisual() {
  const [activeTab, setActiveTab] = useState('workflow'); // 'workflow' | 'analytics' | 'pipeline'
  const [isSimulating, setIsSimulating] = useState(false);
  const [simStep, setSimStep] = useState(3);

  const triggerSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimStep(0);
    const interval = setInterval(() => {
      setSimStep((prev) => {
        if (prev >= 3) {
          clearInterval(interval);
          setIsSimulating(false);
          return 3;
        }
        return prev + 1;
      });
    }, 700);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto lg:max-w-none">
      {/* Subtle Silver Ambient Glow */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-white/[0.08] via-zinc-400/[0.05] to-white/[0.08] rounded-3xl blur-2xl opacity-80 pointer-events-none" />

      {/* Main Console Container (Dark Obsidian) */}
      <div className="relative rounded-2xl sm:rounded-3xl bg-[#0E1016]/95 border border-white/10 shadow-2xl backdrop-blur-xl overflow-hidden">
        {/* Top Control Bar / Chrome Header (Mobile Responsive) */}
        <div className="bg-[#141720]/90 border-b border-white/10 px-3 sm:px-5 py-2.5 sm:py-3.5 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-zinc-700"></span>
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-zinc-700"></span>
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-zinc-700"></span>
            <span className="ml-1 sm:ml-2 text-[10px] sm:text-xs font-mono text-zinc-400 flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] animate-pulse"></span>
              <span className="hidden xs:inline">biz-ops-console</span>
            </span>
          </div>

          {/* Interactive Mode Switcher */}
          <div className="flex items-center gap-1 bg-black/50 p-1 rounded-xl border border-white/10 text-[11px] sm:text-xs">
            <button
              onClick={() => setActiveTab('workflow')}
              className={`px-2.5 sm:px-3 py-1 rounded-lg font-medium transition-all cursor-pointer ${
                activeTab === 'workflow'
                  ? 'bg-white text-zinc-950 font-semibold shadow-[0_0_10px_rgba(255,255,255,0.25)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Workflow
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`px-2.5 sm:px-3 py-1 rounded-lg font-medium transition-all cursor-pointer ${
                activeTab === 'analytics'
                  ? 'bg-white text-zinc-950 font-semibold shadow-[0_0_10px_rgba(255,255,255,0.25)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Analytics
            </button>
            <button
              onClick={() => setActiveTab('pipeline')}
              className={`px-2.5 sm:px-3 py-1 rounded-lg font-medium transition-all cursor-pointer ${
                activeTab === 'pipeline'
                  ? 'bg-white text-zinc-950 font-semibold shadow-[0_0_10px_rgba(255,255,255,0.25)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Ops
            </button>
          </div>
        </div>

        {/* Tab Content Area */}
        <div className="p-3.5 sm:p-6 min-h-[340px] sm:min-h-[380px] flex flex-col justify-between">
          {/* TAB 1: WORKFLOW AUTOMATION */}
          {activeTab === 'workflow' && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="space-y-4 text-left"
            >
              <div className="flex items-center justify-between gap-2">
                <div>
                  <div className="text-[10px] sm:text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                    Automated Operations
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white">
                    Lead Ingestion & CRM Flow
                  </h4>
                </div>
                <button
                  onClick={triggerSimulation}
                  disabled={isSimulating}
                  className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold bg-white text-zinc-950 hover:bg-zinc-200 transition-colors disabled:opacity-50 shadow-[0_0_12px_rgba(255,255,255,0.2)] cursor-pointer shrink-0"
                >
                  <Zap className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} />
                  <span>{isSimulating ? 'Simulating...' : 'Test Trigger'}</span>
                </button>
              </div>

              {/* 4 Connected Pipeline Step Cards (Responsive 2x2 on mobile, 4 in row on tablet/desktop) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 relative">
                {/* Step 1 */}
                <div
                  className={`p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border transition-all ${
                    simStep >= 0
                      ? 'border-white/30 bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.06)]'
                      : 'border-white/5 bg-white/[0.02] opacity-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1 sm:mb-2">
                    <span className="text-[9px] sm:text-[10px] font-mono text-zinc-400 font-semibold">01 INTAKE</span>
                    <Inbox className="w-3.5 h-3.5 text-white" />
                  </div>
                  <p className="text-[11px] sm:text-xs font-semibold text-white truncate">Web Form</p>
                  <p className="text-[10px] text-zinc-400 mt-0.5 truncate">Webhook</p>
                  <div className="mt-1.5 sm:mt-2.5 flex items-center gap-1 text-[9px] sm:text-[10px] text-zinc-300 font-medium">
                    <Check className="w-3 h-3 text-white shrink-0" />
                    <span className="truncate">Parsed</span>
                  </div>
                </div>

                {/* Step 2 */}
                <div
                  className={`p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border transition-all ${
                    simStep >= 1
                      ? 'border-white/30 bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.06)]'
                      : 'border-white/5 bg-white/[0.02] opacity-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1 sm:mb-2">
                    <span className="text-[9px] sm:text-[10px] font-mono text-zinc-400 font-semibold">02 SCORING</span>
                    <Sparkles className="w-3.5 h-3.5 text-white" />
                  </div>
                  <p className="text-[11px] sm:text-xs font-semibold text-white truncate">AI Filter</p>
                  <p className="text-[10px] text-zinc-400 mt-0.5 truncate">Intent Score</p>
                  <div className="mt-1.5 sm:mt-2.5 flex items-center gap-1 text-[9px] sm:text-[10px] text-zinc-200 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0"></span>
                    <span className="truncate">Enterprise</span>
                  </div>
                </div>

                {/* Step 3 */}
                <div
                  className={`p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border transition-all ${
                    simStep >= 2
                      ? 'border-white/30 bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.06)]'
                      : 'border-white/5 bg-white/[0.02] opacity-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1 sm:mb-2">
                    <span className="text-[9px] sm:text-[10px] font-mono text-zinc-400 font-semibold">03 CRM</span>
                    <Layers className="w-3.5 h-3.5 text-white" />
                  </div>
                  <p className="text-[11px] sm:text-xs font-semibold text-white truncate">HubSpot</p>
                  <p className="text-[10px] text-zinc-400 mt-0.5 truncate">Deal Sync</p>
                  <div className="mt-1.5 sm:mt-2.5 flex items-center gap-1 text-[9px] sm:text-[10px] text-zinc-300 font-medium">
                    <Check className="w-3 h-3 text-white shrink-0" />
                    <span className="truncate">Deal #8492</span>
                  </div>
                </div>

                {/* Step 4 */}
                <div
                  className={`p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border transition-all ${
                    simStep >= 3
                      ? 'border-white/30 bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.06)]'
                      : 'border-white/5 bg-white/[0.02] opacity-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1 sm:mb-2">
                    <span className="text-[9px] sm:text-[10px] font-mono text-zinc-400 font-semibold">04 ALERT</span>
                    <BellRing className="w-3.5 h-3.5 text-white" />
                  </div>
                  <p className="text-[11px] sm:text-xs font-semibold text-white truncate">Slack Ping</p>
                  <p className="text-[10px] text-zinc-400 mt-0.5 truncate">Calendar Alert</p>
                  <div className="mt-1.5 sm:mt-2.5 flex items-center gap-1 text-[9px] sm:text-[10px] text-zinc-200 font-medium">
                    <Clock className="w-3 h-3 text-white shrink-0" />
                    <span className="truncate">420ms</span>
                  </div>
                </div>
              </div>

              {/* Live Status Stream (Dark Obsidian Console) */}
              <div className="bg-[#08090C] text-zinc-300 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/10 font-mono text-xs shadow-inner">
                <div className="flex items-center justify-between text-zinc-400 pb-2 border-b border-white/10 text-[10px] sm:text-[11px]">
                  <span className="flex items-center gap-1.5 text-white truncate">
                    <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)] animate-ping shrink-0"></span>
                    LOG: REAL-TIME DISPATCH
                  </span>
                  <span className="text-zinc-400 shrink-0">200 OK</span>
                </div>
                <div className="pt-2 space-y-1 text-[10px] sm:text-[11px]">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-500">Source:</span>
                    <span className="text-white font-medium truncate ml-2">Landing Page</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-500">Lifecycle:</span>
                    <span className="text-zinc-200 truncate ml-2">Sales Qualified (SQL)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-500">Response SLA:</span>
                    <span className="text-white font-semibold flex items-center gap-1 ml-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                      &lt; 60 seconds
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: BI ANALYTICS */}
          {activeTab === 'analytics' && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="space-y-3.5 text-left"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] sm:text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                    Executive Analytics
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white">
                    Sales Operations Performance
                  </h4>
                </div>
                <span className="text-[11px] font-medium text-zinc-300 bg-white/10 px-2.5 py-0.5 rounded-lg border border-white/10">
                  Q2 Review
                </span>
              </div>

              {/* 3 Metric Cards (Responsive Grid) */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <div className="p-2.5 sm:p-3.5 bg-white/[0.04] rounded-xl sm:rounded-2xl border border-white/10">
                  <div className="text-[10px] sm:text-[11px] text-zinc-400 font-medium truncate">Pipeline</div>
                  <div className="text-sm sm:text-xl font-bold text-white mt-0.5 sm:mt-1">$142.8k</div>
                  <div className="text-[9px] sm:text-[10px] text-zinc-300 font-semibold flex items-center gap-0.5 mt-0.5 truncate">
                    <TrendingUp className="w-2.5 h-2.5 text-white shrink-0" />
                    <span>+18% MoM</span>
                  </div>
                </div>
                <div className="p-2.5 sm:p-3.5 bg-white/[0.04] rounded-xl sm:rounded-2xl border border-white/10">
                  <div className="text-[10px] sm:text-[11px] text-zinc-400 font-medium truncate">Avg Response</div>
                  <div className="text-sm sm:text-xl font-bold text-white mt-0.5 sm:mt-1">48 sec</div>
                  <div className="text-[9px] sm:text-[10px] text-zinc-300 font-semibold mt-0.5 truncate">
                    <span>99% on SLA</span>
                  </div>
                </div>
                <div className="p-2.5 sm:p-3.5 bg-white/[0.04] rounded-xl sm:rounded-2xl border border-white/10">
                  <div className="text-[10px] sm:text-[11px] text-zinc-400 font-medium truncate">Conversion</div>
                  <div className="text-sm sm:text-xl font-bold text-white mt-0.5 sm:mt-1">24.6%</div>
                  <div className="text-[9px] sm:text-[10px] text-zinc-300 font-semibold mt-0.5 truncate">
                    <span>+6.2% target</span>
                  </div>
                </div>
              </div>

              {/* Regional Progress Breakdown */}
              <div className="p-3 sm:p-4 bg-white/[0.03] rounded-xl sm:rounded-2xl border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-zinc-300">
                  <span>Regional Breakdown</span>
                  <span className="text-[10px] text-zinc-500 font-normal">Target: $50k</span>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] sm:text-[11px] text-zinc-300 mb-1">
                    <span>North Region</span>
                    <span className="font-semibold text-white">$54.2k (108%)</span>
                  </div>
                  <div className="w-full h-1.5 sm:h-2 rounded-full bg-zinc-800 overflow-hidden">
                    <div className="h-full bg-white rounded-full w-[90%] shadow-[0_0_8px_rgba(255,255,255,0.5)]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] sm:text-[11px] text-zinc-300 mb-1">
                    <span>West Region</span>
                    <span className="font-semibold text-white">$48.9k (98%)</span>
                  </div>
                  <div className="w-full h-1.5 sm:h-2 rounded-full bg-zinc-800 overflow-hidden">
                    <div className="h-full bg-zinc-300 rounded-full w-[78%]"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: OPERATIONS & REQUIREMENT TRACKER */}
          {activeTab === 'pipeline' && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="space-y-3 text-left"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] sm:text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                    Client Coordination
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white">
                    Requirements to Execution
                  </h4>
                </div>
                <span className="text-[10px] sm:text-xs font-semibold text-zinc-200 bg-white/10 border border-white/15 px-2.5 py-0.5 rounded-full">
                  In Progress
                </span>
              </div>

              <div className="space-y-2">
                <div className="p-2.5 sm:p-3 bg-white/[0.04] rounded-xl sm:rounded-2xl border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-lg bg-white/10 text-white flex items-center justify-center font-bold text-xs shrink-0">
                      ✓
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">Discovery Audit</p>
                      <p className="text-[10px] sm:text-[11px] text-zinc-400">14h/week friction logged</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400">Done</span>
                </div>

                <div className="p-2.5 sm:p-3 bg-white/[0.04] rounded-xl sm:rounded-2xl border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-lg bg-white/10 text-white flex items-center justify-center font-bold text-xs shrink-0">
                      ✓
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">Functional Spec</p>
                      <p className="text-[10px] sm:text-[11px] text-zinc-400">Approved by client</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400">Done</span>
                </div>

                <div className="p-2.5 sm:p-3 bg-white/10 rounded-xl sm:rounded-2xl border border-white/20 flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-lg bg-white text-zinc-950 flex items-center justify-center font-bold text-xs shrink-0">
                      •
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">Integration Testing</p>
                      <p className="text-[10px] sm:text-[11px] text-zinc-300">Live webhook validation</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-white font-semibold">Active</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Footer of visual widget */}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] text-zinc-400 font-medium">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <ShieldCheck className="w-3.5 h-3.5 text-white shrink-0" />
              <span>Interactive Prototype</span>
            </span>
            <span className="text-zinc-500">Demonstration</span>
          </div>
        </div>
      </div>
    </div>
  );
}
