import React, { useState } from 'react';
import { 
  MessageSquare, 
  Users, 
  Search, 
  ClipboardCheck, 
  TrendingUp, 
  Calendar, 
  FileSpreadsheet, 
  Table, 
  Layers, 
  BarChart3, 
  Workflow, 
  Sparkles,
  Check,
  Clock
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const iconMap = {
  MessageSquare,
  Users,
  Search,
  ClipboardCheck,
  TrendingUp,
  Calendar,
  FileSpreadsheet,
  Table,
  Layers,
  BarChart3,
  Workflow,
  Sparkles
};

export default function Skills() {
  const [filter, setFilter] = useState('all'); // 'all' | 'business' | 'technology'

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-28 bg-[#08090C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-5 text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/5 border border-white/15 text-[11px] sm:text-xs font-semibold text-zinc-200 mb-2.5 sm:mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)]"></span>
              Core Competencies
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Skills & Toolset
            </h2>
            <p className="mt-2 sm:mt-3 text-zinc-400 text-sm sm:text-base leading-relaxed">
              A balanced blend of analytical business thinking and practical workflow software. Accurately tagged by current mastery level.
            </p>
          </div>

          {/* Filter Pills (Horizontally scrollable on mobile) */}
          <div className="flex items-center gap-1.5 bg-[#12151C] p-1 sm:p-1.5 rounded-2xl border border-white/10 self-start md:self-auto text-xs font-medium max-w-full overflow-x-auto no-scrollbar">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 sm:px-3.5 py-1.5 rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                filter === 'all'
                  ? 'bg-white text-zinc-950 font-semibold shadow-[0_0_12px_rgba(255,255,255,0.2)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              All ({skillsData.business.length + skillsData.technology.length})
            </button>
            <button
              onClick={() => setFilter('business')}
              className={`px-3 sm:px-3.5 py-1.5 rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                filter === 'business'
                  ? 'bg-white text-zinc-950 font-semibold shadow-[0_0_12px_rgba(255,255,255,0.2)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Business ({skillsData.business.length})
            </button>
            <button
              onClick={() => setFilter('technology')}
              className={`px-3 sm:px-3.5 py-1.5 rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                filter === 'technology'
                  ? 'bg-white text-zinc-950 font-semibold shadow-[0_0_12px_rgba(255,255,255,0.2)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Technology ({skillsData.technology.length})
            </button>
          </div>
        </div>

        {/* Legend (Mobile Responsive) */}
        <div className="mb-6 sm:mb-8 p-3 sm:p-4 rounded-2xl bg-[#12151C]/90 border border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-left">
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-4">
            <span className="text-zinc-400 font-medium text-[11px] sm:text-xs">Framework:</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-white/15 text-white font-semibold border border-white/30 text-[11px] sm:text-xs">
              <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" /> Proficient
              <span className="text-zinc-400 font-normal hidden sm:inline ml-1">— Learned, practiced, and applied</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-zinc-800/80 text-zinc-300 font-semibold border border-zinc-700 text-[11px] sm:text-xs">
              <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-zinc-400" /> Developing
              <span className="text-zinc-400 font-normal hidden sm:inline ml-1">— Hands-on exposure & active practice</span>
            </span>
          </div>
          <span className="text-zinc-500 text-[10px] sm:text-[11px]">Strict authenticity policy</span>
        </div>

        {/* Skills Grid */}
        <div className="space-y-10 sm:space-y-12 text-left">
          {/* Business Skills */}
          {(filter === 'all' || filter === 'business') && (
            <div>
              <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
                <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)]"></span>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Business Development & Operations Skills
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
                {skillsData.business.map((skill, index) => {
                  const Icon = iconMap[skill.icon] || MessageSquare;
                  const isProficient = skill.level === 'Proficient';
                  return (
                    <div
                      key={index}
                      className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#12151C]/80 border border-white/10 hover:border-white/25 hover:bg-[#151922] transition-all shadow-xs flex flex-col justify-between"
                    >
                      <div>
                        {/* Circular icon badge */}
                        <div className="flex items-start justify-between gap-2 mb-3.5">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 text-white border border-white/20 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.08)] shrink-0">
                            <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                          </div>
                          <span
                            className={`px-2.5 sm:px-3 py-0.5 rounded-full text-[10px] sm:text-[11px] font-semibold border ${
                              isProficient
                                ? 'bg-white/15 text-white border-white/30 shadow-[0_0_8px_rgba(255,255,255,0.15)]'
                                : 'bg-zinc-800/80 text-zinc-300 border-zinc-700'
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>
                        <h4 className="text-sm sm:text-base font-bold text-white mb-1.5">{skill.name}</h4>
                        <p className="text-xs text-zinc-400 leading-relaxed mb-3.5">
                          {skill.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-white/10">
                        <div className="flex flex-wrap gap-1.5">
                          {skill.highlights.map((h, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-medium text-zinc-300"
                            >
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Technology Skills */}
          {(filter === 'all' || filter === 'technology') && (
            <div>
              <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
                <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)]"></span>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Technology & Automation Software
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
                {skillsData.technology.map((skill, index) => {
                  const Icon = iconMap[skill.icon] || Workflow;
                  const isProficient = skill.level === 'Proficient';
                  return (
                    <div
                      key={index}
                      className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#12151C]/80 border border-white/10 hover:border-white/25 hover:bg-[#151922] transition-all shadow-xs flex flex-col justify-between"
                    >
                      <div>
                        {/* Circular icon badge */}
                        <div className="flex items-start justify-between gap-2 mb-3.5">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 text-white border border-white/20 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.08)] shrink-0">
                            <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                          </div>
                          <span
                            className={`px-2.5 sm:px-3 py-0.5 rounded-full text-[10px] sm:text-[11px] font-semibold border ${
                              isProficient
                                ? 'bg-white/15 text-white border-white/30 shadow-[0_0_8px_rgba(255,255,255,0.15)]'
                                : 'bg-zinc-800/80 text-zinc-300 border-zinc-700'
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>
                        <h4 className="text-sm sm:text-base font-bold text-white mb-1.5">{skill.name}</h4>
                        <p className="text-xs text-zinc-400 leading-relaxed mb-3.5">
                          {skill.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-white/10">
                        <div className="flex flex-wrap gap-1.5">
                          {skill.highlights.map((h, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-medium text-zinc-300"
                            >
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
