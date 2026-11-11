import React, { useState } from 'react';
import { 
  Calculator, 
  Sparkles, 
  ArrowRight, 
  Workflow
} from 'lucide-react';

export default function DiagnosticWidget() {
  const [manualHoursPerWeek, setManualHoursPerWeek] = useState(8);
  const [selectedBottleneck, setSelectedBottleneck] = useState('lead_routing');

  const bottlenecks = [
    {
      id: 'lead_routing',
      name: 'Delayed Follow-ups',
      description: 'Leads arrive from web forms and wait hours before being assigned.',
      recommendedTool: 'Make.com + HubSpot + Slack Alerts',
      efficiencyGain: '85%'
    },
    {
      id: 'reporting_ops',
      name: 'Manual Reporting',
      description: 'Transaction records buried in CSV files, requiring hours to compile.',
      recommendedTool: 'Power BI / Excel Models with Sync',
      efficiencyGain: '70%'
    },
    {
      id: 'hiring_flow',
      name: 'Candidate Tracking',
      description: 'Applicant resumes tracked manually in inboxes with delayed replies.',
      recommendedTool: 'Google Forms + Sheets Webhook Pipeline',
      efficiencyGain: '75%'
    }
  ];

  const currentBottleneck = bottlenecks.find(b => b.id === selectedBottleneck) || bottlenecks[0];

  // Calculated estimates
  const monthlyManualHours = manualHoursPerWeek * 4.3;
  const estimatedHoursSaved = Math.round(monthlyManualHours * (parseInt(currentBottleneck.efficiencyGain) / 100));

  const handleApplyToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-14 sm:py-20 bg-[#08090C] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl sm:rounded-3xl bg-[#12151C]/90 text-white p-4 sm:p-8 lg:p-12 shadow-2xl border border-white/10 relative overflow-hidden text-left">
          {/* Subtle Ambient Sheen */}
          <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 sm:w-80 h-60 sm:h-80 bg-zinc-500/[0.04] rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
            {/* Left Column: Interactive Controls */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/10 text-white text-[11px] sm:text-xs font-semibold mb-2.5 sm:mb-3 border border-white/15">
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Interactive Discovery Tool</span>
                </div>
                <h3 className="text-xl sm:text-3xl font-extrabold tracking-tight text-white">
                  Estimate Your Automation Potential
                </h3>
                <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  Discover how replacing repetitive manual handoffs with structured workflows frees up your team to focus on revenue-generating activities.
                </p>
              </div>

              {/* Select Bottleneck */}
              <div>
                <label className="block text-[11px] sm:text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2.5">
                  1. What is your primary bottleneck?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                  {bottlenecks.map((b) => (
                    <button
                      key={b.id}
                      onClick={() => setSelectedBottleneck(b.id)}
                      className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl text-left border transition-all text-xs cursor-pointer ${
                        selectedBottleneck === b.id
                          ? 'bg-white text-zinc-950 font-bold border-white shadow-[0_0_15px_rgba(255,255,255,0.25)]'
                          : 'bg-white/[0.03] border-white/10 text-zinc-300 hover:bg-white/[0.07] hover:border-white/20'
                      }`}
                    >
                      <div className="font-bold mb-1 text-xs sm:text-sm">{b.name}</div>
                      <div className={`text-[11px] leading-relaxed ${selectedBottleneck === b.id ? 'text-zinc-700' : 'text-zinc-400'}`}>
                        {b.description}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider: Manual Hours */}
              <div className="space-y-2.5 pt-1 sm:pt-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-zinc-300 text-[11px] sm:text-xs">
                    2. Manual hours spent weekly:
                  </span>
                  <span className="font-mono text-xs sm:text-sm font-bold text-white bg-white/10 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-lg border border-white/15">
                    {manualHoursPerWeek} hrs / week
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="30"
                  step="1"
                  value={manualHoursPerWeek}
                  onChange={(e) => setManualHoursPerWeek(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white"
                />
                <div className="flex justify-between text-[10px] sm:text-[11px] text-zinc-500">
                  <span>2 hrs (Minor)</span>
                  <span>15 hrs (Moderate)</span>
                  <span>30+ hrs (Acute)</span>
                </div>
              </div>
            </div>

            {/* Right Column: Estimated Impact Scorecard */}
            <div className="lg:col-span-5 bg-[#0E1015] border border-white/15 rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-xl space-y-4 sm:space-y-5 text-left">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 sm:pb-4">
                <span className="text-[11px] sm:text-xs font-mono font-semibold text-zinc-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                  ANALYSIS SUMMARY
                </span>
                <span className="text-[10px] sm:text-[11px] px-2.5 py-0.5 rounded-full bg-white/10 text-white border border-white/20 font-medium">
                  High Feasibility
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.04] border border-white/10">
                  <div className="text-[10px] sm:text-[11px] text-zinc-400 font-medium">Time Saved</div>
                  <div className="text-lg sm:text-2xl font-bold text-white mt-0.5 sm:mt-1">~{estimatedHoursSaved} hrs</div>
                  <div className="text-[9px] sm:text-[10px] text-zinc-400 font-medium mt-0.5">every month</div>
                </div>

                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.04] border border-white/10">
                  <div className="text-[10px] sm:text-[11px] text-zinc-400 font-medium">Efficiency Uplift</div>
                  <div className="text-lg sm:text-2xl font-bold text-white mt-0.5 sm:mt-1">{currentBottleneck.efficiencyGain}</div>
                  <div className="text-[9px] sm:text-[10px] text-zinc-400 font-medium mt-0.5">automation</div>
                </div>
              </div>

              <div className="space-y-1.5 pt-1 text-xs">
                <div className="text-zinc-400 font-semibold text-[11px] sm:text-xs">Recommended Architecture:</div>
                <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/[0.05] border border-white/15 text-zinc-200 font-mono text-[11px] sm:text-xs flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-white shrink-0" />
                  <span className="leading-snug">{currentBottleneck.recommendedTool}</span>
                </div>
              </div>

              <button
                onClick={handleApplyToContact}
                className="w-full py-3 sm:py-3.5 px-4 rounded-xl sm:rounded-2xl text-xs font-bold text-zinc-950 bg-white hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.2)] cursor-pointer"
              >
                <span>Discuss This Workflow</span>
                <ArrowRight className="w-4 h-4 text-zinc-950" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
