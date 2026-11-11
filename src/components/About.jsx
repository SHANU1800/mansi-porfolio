import React from 'react';
import { 
  GraduationCap, 
  Target, 
  Workflow, 
  BarChart, 
  Users2, 
  Sparkles, 
  BookOpen, 
  CheckCircle,
  Building,
  Calendar,
  Compass
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const focusAreas = [
    {
      title: "Business Strategy",
      description: "Analyzing market opportunities, understanding value propositions, and aligning operational workflows with commercial goals.",
      icon: Target
    },
    {
      title: "Business Operations",
      description: "Mapping day-to-day administrative and sales workflows to eliminate redundancies, reduce turnaround times, and boost team efficiency.",
      icon: Workflow
    },
    {
      title: "Customer Relationship Management",
      description: "Structuring lead capture stages, customer lifecycle touchpoints, and clear follow-up cadences to ensure no prospect falls through.",
      icon: Users2
    },
    {
      title: "Business Analytics",
      description: "Turning raw transaction logs and performance data into clear executive dashboards that support evidence-based decisions.",
      icon: BarChart
    },
    {
      title: "Process Improvement",
      description: "Auditing manual friction points and transforming repetitive tasks into reliable, documented standard operating procedures (SOPs).",
      icon: Compass
    },
    {
      title: "AI & Workflow Automation",
      description: "Exploring practical applications of generative AI and no-code automation (Make.com, webhooks) to streamline operational handoffs.",
      icon: Sparkles
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28 bg-[#0B0D12] border-y border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/5 border border-white/15 text-[11px] sm:text-xs font-semibold text-zinc-200 mb-2.5 sm:mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)]"></span>
            About Me
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Business Thinking. Technology-Driven Solutions.
          </h2>
          <p className="mt-2 sm:mt-4 text-sm sm:text-lg text-zinc-400 leading-relaxed">
            I am currently in my second year of pursuing a Bachelor of Business Administration (BBA). Rather than approaching business solely through theory, I am actively exploring how modern digital tools, CRMs, and automation simplify operational roadblocks for real businesses.
          </p>
        </div>

        {/* 2-Column Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left Column: Academic & Foundation Card */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6 text-left">
            <div className="p-4 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#12151C]/90 border border-white/10 shadow-xl space-y-4 sm:space-y-5">
              <div className="flex items-center gap-3 pb-3.5 sm:pb-4 border-b border-white/10">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-white text-zinc-950 flex items-center justify-center font-bold shadow-[0_0_12px_rgba(255,255,255,0.2)] shrink-0">
                  <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white">Academic Background</h3>
                  <p className="text-[11px] sm:text-xs text-zinc-400 font-medium">BBA • Second Year Student</p>
                </div>
              </div>

              <div className="space-y-3.5 text-xs text-zinc-300">
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <Building className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-white block">Institution / University</span>
                    <span className="text-zinc-400">{personalInfo.academic.institution}</span>
                    <span className="inline-block mt-0.5 text-[9px] sm:text-[10px] bg-white/10 text-zinc-300 px-1.5 py-0.5 rounded font-mono border border-white/10">Editable Placeholder</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 sm:gap-3">
                  <Calendar className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-white block">Expected Graduation</span>
                    <span className="text-zinc-400">Class of {personalInfo.academic.expectedGraduation}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 sm:gap-3">
                  <BookOpen className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-white block">Relevant Coursework</span>
                    <p className="text-zinc-400 mt-0.5 leading-relaxed text-[11px] sm:text-xs">
                      Business Organization & Management, Principles of Marketing, Financial Accounting, Operations Fundamentals, Business Communication, and Microeconomics.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3.5 border-t border-white/10">
                <h4 className="text-xs font-semibold text-white mb-2">Activities & Learning</h4>
                <ul className="space-y-1.5 text-[11px] sm:text-xs text-zinc-400">
                  {personalInfo.academic.extracurriculars.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-white mt-0.5 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Practical Mindset Callout */}
            <div className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/15 space-y-1.5 sm:space-y-2">
              <span className="text-[10px] sm:text-[11px] font-bold text-white uppercase tracking-wider">
                My Core Approach
              </span>
              <p className="text-xs text-zinc-300 leading-relaxed">
                "Technology only creates value when it solves an actual business friction. My goal is to understand what keeps team members bogged down, translate those pains into clear operational workflows, and coordinate with technical minds to implement clean, reliable automation."
              </p>
            </div>
          </div>

          {/* Right Column: Key Areas of Interest */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-4 text-left">
            <div className="mb-1 sm:mb-2">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Core Domains of Interest & Application
              </h3>
              <p className="text-xs text-zinc-400 mt-0.5 sm:mt-1">
                Combining business foundational study with hands-on exploratory tools:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
              {focusAreas.map((area, index) => {
                const IconComponent = area.icon;
                return (
                  <div
                    key={index}
                    className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#12151C]/70 border border-white/10 hover:border-white/25 hover:bg-[#151922] transition-all shadow-xs"
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3 mb-2">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-white/10 text-white border border-white/15 flex items-center justify-center shrink-0">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">{area.title}</h4>
                    </div>
                    <p className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Note on Authenticity */}
            <div className="mt-3 sm:mt-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 text-[11px] sm:text-xs text-zinc-400 flex items-start sm:items-center gap-2.5 sm:gap-3">
              <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.7)] shrink-0 mt-1 sm:mt-0"></span>
              <p className="leading-relaxed">
                <span className="font-semibold text-white">Authentic Learning Curve:</span> I do not claim decade-long industry tenure. I bring high-energy dedication, structured business research, structured communication, and a disciplined approach to process design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
