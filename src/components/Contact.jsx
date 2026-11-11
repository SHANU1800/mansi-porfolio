import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  ArrowUpRight,
  Clock,
  Sparkles
} from 'lucide-react';
import { LinkedInIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: 'Lead Management & CRM Automation',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email format (e.g. name@company.com).';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please describe your business inquiry or question.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters so I can understand your requirements.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      inquiryType: 'Lead Management & CRM Automation',
      message: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-28 bg-[#0B0D12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/5 border border-white/15 text-[11px] sm:text-xs font-semibold text-zinc-200 mb-2.5 sm:mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)]"></span>
            Get in Touch
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Have a Business Problem? Let's Talk.
          </h2>
          <p className="mt-2 sm:mt-3 text-zinc-400 text-sm sm:text-lg leading-relaxed">
            Whether you want to explore an automated lead flow, audit operational bottlenecks, or discuss an internship / project opportunity, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start text-left">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#12151C]/90 border border-white/10 shadow-xl space-y-4 sm:space-y-6">
              <h3 className="text-sm sm:text-base font-bold text-white">Direct Contact Channels</h3>

              {/* Email Card */}
              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 flex items-start justify-between gap-2.5 sm:gap-3">
                <div className="flex items-start gap-2.5 sm:gap-3 min-w-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/10 text-white border border-white/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] sm:text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block">
                      Email Inquiries
                    </span>
                    <a
                      href={`mailto:${personalInfo.contact.email}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-zinc-300 transition-colors block truncate"
                    >
                      {personalInfo.contact.email}
                    </a>
                    <span className="block text-[10px] sm:text-[11px] text-zinc-500 mt-0.5">Placeholder • Replace with yours</span>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn Card */}
              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 flex items-start justify-between gap-2.5 sm:gap-3">
                <div className="flex items-start gap-2.5 sm:gap-3 min-w-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/10 text-white border border-white/15 flex items-center justify-center shrink-0 mt-0.5">
                    <LinkedInIcon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] sm:text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block">
                      LinkedIn Profile
                    </span>
                    <a
                      href={personalInfo.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-semibold text-white hover:text-zinc-300 transition-colors inline-flex items-center gap-1"
                    >
                      <span>Connect on LinkedIn</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                    <span className="block text-[10px] sm:text-[11px] text-zinc-500 mt-0.5">Placeholder • Add your handle</span>
                  </div>
                </div>
              </div>

              {/* Availability Status */}
              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/15 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)] animate-pulse shrink-0"></span>
                <div className="text-xs">
                  <span className="font-bold text-white block text-[11px] sm:text-xs">Current Status</span>
                  <span className="text-zinc-300 text-[11px] sm:text-xs">Open for Inquiries & Summer Internships</span>
                </div>
              </div>
            </div>

            {/* Note on Response Times */}
            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 text-xs text-zinc-400 flex items-start gap-2.5 sm:gap-3">
              <Clock className="w-4 h-4 text-white mt-0.5 shrink-0" />
              <p className="leading-relaxed text-[11px] sm:text-xs">
                <span className="font-semibold text-white">Prompt Response Cadence:</span> I strive to review and reply to all legitimate project briefs and business inquiries within 24 hours.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#12151C]/90 border border-white/10 shadow-xl">
              {isSubmitted ? (
                /* Submission Success State */
                <div className="py-6 sm:py-8 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/10 text-white border border-white/20 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">Message Received!</h3>
                    <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto mt-1 leading-relaxed">
                      Thank you for reaching out, <strong className="text-white">{formData.name}</strong>. Your inquiry regarding <strong className="text-white">{formData.inquiryType}</strong> has been logged in this demonstration preview.
                    </p>
                  </div>

                  <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-xs text-zinc-400 max-w-md mx-auto text-left space-y-1.5">
                    <div className="flex items-center gap-1.5 text-white font-semibold">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Form Status Notice</span>
                    </div>
                    <p className="text-[11px] sm:text-xs">
                      This portfolio runs with a client-side validation flow. To establish direct communication, you can reach out via{' '}
                      <a href={`mailto:${personalInfo.contact.email}`} className="text-white underline font-medium">
                        email
                      </a>{' '}
                      or{' '}
                      <a href={personalInfo.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-white underline font-medium">
                        LinkedIn
                      </a>.
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={resetForm}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-zinc-200 bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                /* The Contact Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="border-b border-white/10 pb-3 mb-3 sm:mb-4">
                    <h3 className="text-base sm:text-lg font-bold text-white">Send an Inquiry</h3>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Fill out the details below. All fields marked with * are required.
                    </p>
                  </div>

                  {/* Name and Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-zinc-300 mb-1.5">
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: null });
                        }}
                        className={`w-full px-3.5 sm:px-4 py-2.5 sm:py-2.5 rounded-xl border text-base sm:text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 transition-all ${
                          errors.name
                            ? 'border-rose-400 focus:ring-rose-400/20 bg-rose-500/10'
                            : 'border-white/10 focus:border-white focus:ring-white/20 bg-white/[0.04]'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-zinc-300 mb-1.5">
                        Email Address <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="e.g. alex@company.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: null });
                        }}
                        className={`w-full px-3.5 sm:px-4 py-2.5 sm:py-2.5 rounded-xl border text-base sm:text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 transition-all ${
                          errors.email
                            ? 'border-rose-400 focus:ring-rose-400/20 bg-rose-500/10'
                            : 'border-white/10 focus:border-white focus:ring-white/20 bg-white/[0.04]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company & Project Area */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    {/* Company */}
                    <div>
                      <label htmlFor="contact-company" className="block text-xs font-semibold text-zinc-300 mb-1.5">
                        Company / Organization <span className="text-zinc-500 font-normal">(Optional)</span>
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        placeholder="e.g. Acme Studio / Independent"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-2.5 rounded-xl border border-white/10 text-base sm:text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-all bg-white/[0.04]"
                      />
                    </div>

                    {/* Inquiry Type */}
                    <div>
                      <label htmlFor="contact-inquiry" className="block text-xs font-semibold text-zinc-300 mb-1.5">
                        Primary Area of Interest
                      </label>
                      <select
                        id="contact-inquiry"
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-2.5 rounded-xl border border-white/10 text-base sm:text-sm text-white focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-all bg-[#12151C]"
                      >
                        <option value="Lead Management & CRM Automation">Lead Management & CRM Automation</option>
                        <option value="Business Intelligence & Reporting">Business Intelligence & Reporting</option>
                        <option value="Recruitment & HR Workflow Automation">Recruitment & HR Workflow Automation</option>
                        <option value="Operational Process Audit">Operational Process Audit</option>
                        <option value="Internship / Full-time Opportunity">Internship / Opportunity Discussion</option>
                        <option value="General Conversation">General Conversation</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      Message / Project Details <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      placeholder="Briefly describe your operational challenge, workflow friction, or project goals..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: null });
                      }}
                      className={`w-full px-3.5 sm:px-4 py-2.5 rounded-xl border text-base sm:text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 transition-all resize-none ${
                        errors.message
                          ? 'border-rose-400 focus:ring-rose-400/20 bg-rose-500/10'
                          : 'border-white/10 focus:border-white focus:ring-white/20 bg-white/[0.04]'
                      }`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <span className="text-[11px] text-zinc-400 text-center sm:text-left">
                      ⚡ Prompt response guaranteed
                    </span>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-3 rounded-xl sm:rounded-2xl text-xs font-bold text-zinc-950 bg-white hover:bg-zinc-200 active:bg-zinc-300 disabled:opacity-50 transition-all shadow-[0_0_18px_rgba(255,255,255,0.25)] cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-zinc-950/30 border-t-zinc-950 rounded-full animate-spin"></span>
                          <span>Validating...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Message</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
