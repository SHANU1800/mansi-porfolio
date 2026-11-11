import React, { useState } from 'react';
import { 
  UserCheck, 
  Code2, 
  AlertCircle, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-28 bg-[#0B0D12] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/5 border border-white/15 text-[11px] sm:text-xs font-semibold text-zinc-200 mb-2.5 sm:mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)]"></span>
            Case Studies & Architecture
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Demonstration Projects
          </h2>
          <p className="mt-2 sm:mt-3 text-zinc-400 text-sm sm:text-lg leading-relaxed">
            Practical solution frameworks designed to solve acute operational bottlenecks. Each project illustrates how business requirement analysis couples with technical automation.
          </p>

          <div className="mt-3.5 sm:mt-4 inline-flex items-start sm:items-center gap-2.5 p-3 px-3.5 sm:px-4 rounded-xl sm:rounded-2xl bg-[#12151C] border border-white/10 text-[11px] sm:text-xs text-zinc-300">
            <AlertCircle className="w-4 h-4 text-white shrink-0 mt-0.5 sm:mt-0" />
            <span className="leading-relaxed">
              <strong className="text-white">Demonstration Notice:</strong> These projects are structured proof-of-concept models and operational templates, transparently labeled to maintain absolute credibility.
            </span>
          </div>
        </div>

        {/* 3 Project Cards */}
        <div className="space-y-6 sm:space-y-10">
          {projectsData.map((project) => {
            return (
              <div
                key={project.id}
                className="rounded-2xl sm:rounded-3xl bg-[#12151C]/80 border border-white/10 hover:border-white/25 transition-all duration-300 overflow-hidden shadow-2xl p-4 sm:p-7 lg:p-10 text-left"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
                  {/* Left Column: Problem & Strategic Context */}
                  <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-white/10 border border-white/15 text-white">
                        {project.category}
                      </span>
                      <span className="px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium bg-zinc-800/80 border border-zinc-700 text-zinc-300">
                        {project.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-zinc-400 mt-1">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Problem Statement Card */}
                    <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 shadow-xs">
                      <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-zinc-300 mb-1 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
                        Business Problem
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        {project.businessProblem}
                      </p>
                    </div>

                    {/* Proposed Solution */}
                    <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-white/[0.05] border border-white/15 shadow-xs">
                      <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-white mb-1 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)]"></span>
                        Proposed Solution & Workflow
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
                        {project.proposedSolution}
                      </p>
                    </div>

                    {/* Tools Used */}
                    <div>
                      <div className="text-[11px] sm:text-xs font-semibold text-zinc-400 mb-2">
                        Technologies & Tools:
                      </div>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.tools.map((tool, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 sm:px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] sm:text-xs font-medium text-zinc-300"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Roles & Architecture Highlights */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-4 sm:space-y-5 bg-[#0E1015] p-4 sm:p-6 lg:p-7 rounded-2xl sm:rounded-3xl border border-white/10 shadow-lg">
                    <div>
                      <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                        Division of Responsibilities
                      </h4>

                      {/* Mansi's Role */}
                      <div className="mb-3.5 pb-3.5 border-b border-white/10">
                        <div className="flex items-center gap-2 mb-1.5">
                          <UserCheck className="w-4 h-4 text-white shrink-0" />
                          <span className="text-xs font-bold text-white">
                            Mansi (BizDev & Ops)
                          </span>
                        </div>
                        <ul className="space-y-1 text-[11px] sm:text-xs text-zinc-400 pl-5 list-disc leading-relaxed">
                          <li>Requirement scoping & customer journey mapping</li>
                          <li>CRM pipeline & lifecycle stage design</li>
                          <li>Communication templates & SLA criteria</li>
                        </ul>
                      </div>

                      {/* Technical Partner Role */}
                      <div className="mb-3.5">
                        <div className="flex items-center gap-2 mb-1.5">
                          <Code2 className="w-4 h-4 text-zinc-300 shrink-0" />
                          <span className="text-xs font-bold text-white">
                            Technical Partner (Engineering)
                          </span>
                        </div>
                        <ul className="space-y-1 text-[11px] sm:text-xs text-zinc-400 pl-5 list-disc leading-relaxed">
                          <li>Webhook ingestion & payload formatting</li>
                          <li>Make.com scenario routing & error logic</li>
                          <li>API authorization & automated triggers</li>
                        </ul>
                      </div>

                      {/* Performance Metric Pill */}
                      <div className="p-3 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-xs text-zinc-300">
                        <span className="font-semibold text-white block mb-0.5 text-[11px]">Benchmark Target:</span>
                        <span className="text-zinc-400 text-[11px] sm:text-xs">{project.metricsPreview.responseTime || project.metricsPreview.metricsTracked || project.metricsPreview.intakeLatency}</span>
                      </div>
                    </div>

                    {/* Action Buttons (Full width on mobile) */}
                    <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl sm:rounded-2xl text-xs font-bold text-zinc-950 bg-white hover:bg-zinc-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.18)] cursor-pointer"
                      >
                        <span>View Architecture & Flow</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl sm:rounded-2xl text-xs font-semibold text-zinc-200 bg-white/5 border border-white/15 hover:bg-white/10 transition-colors cursor-pointer"
                        title="Interactive Flow Simulation"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-white" />
                        <span>Demo Details</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal View */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
