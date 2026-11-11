export const personalInfo = {
  name: "Rashi",
  fullName: "Raj",
  role: "Business Development & Operations",
  subRole: "AI & Automation Enthusiast | 2nd-Year BBA Student",
  location: "Open to Remote Opportunities",
  tagline: "Connecting Business Problems with Smarter Technology.",
  bio: "I'm a BBA student passionate about business strategy, operations and technology-driven solutions. I work at the intersection of business understanding and practical automation to help simplify everyday business processes.",
  
  academic: {
    degree: "Bachelor of Business Administration (BBA)",
    year: "Second Year",
    institution: "[University / Business School Name]",
    expectedGraduation: "2028",
    focusAreas: [
      "Business Operations & Strategy",
      "Customer Relationship Management (CRM)",
      "Business Analytics & Financial Literacy",
      "Process Optimization & Modern Workflows"
    ],
    extracurriculars: [

    ]
  },

  contact: {
    email: "rashiraj1686@gmail.com", 
    linkedin: "",
    calendarLink: "#contact",
    availability: "Available for Internships & Projects"
  }
};

export const skillsData = {
  business: [
    {
      name: "Business Communication",
      level: "Proficient",
      description: "Crafting structured client presentations, emails, and executive summaries with clarity.",
      icon: "MessageSquare",
      highlights: ["Executive Briefings", "Client Inquiries", "Cross-team Liaison"]
    },
    {
      name: "Client Relationship Management",
      level: "Proficient",
      description: "Managing client expectations, onboarding conversations, and sustained professional partnerships.",
      icon: "Users",
      highlights: ["Client Onboarding", "Stakeholder Alignment", "Feedback Loops"]
    },
    {
      name: "Business Research",
      level: "Proficient",
      description: "Conducting industry benchmarking, competitive analysis, and identifying market operational standards.",
      icon: "Search",
      highlights: ["Market Analysis", "Competitor Audits", "Industry Benchmarks"]
    },
    {
      name: "Requirement Gathering",
      level: "Proficient",
      description: "Translating ambiguous client bottlenecks into precise operational workflows and technical specs.",
      icon: "ClipboardCheck",
      highlights: ["Pain-point Discovery", "Scope Definition", "Functional Specifications"]
    },
    {
      name: "Sales & Lead Management",
      level: "Developing",
      description: "Structuring inbound lead capture, qualification criteria, and follow-up rhythm in CRM pipelines.",
      icon: "TrendingUp",
      highlights: ["Lead Qualification", "Pipeline Hygiene", "Follow-up Cadence"]
    },
    {
      name: "Project Coordination",
      level: "Proficient",
      description: "Tracking task deliverables, milestones, and deadlines between client stakeholders and technical partner.",
      icon: "Calendar",
      highlights: ["Milestone Tracking", "Resource Coordination", "Status Reporting"]
    }
  ],
  technology: [
    {
      name: "Microsoft Excel",
      level: "Proficient",
      description: "Data modeling, multi-criteria VLOOKUP/XLOOKUP, Pivot Tables, scenario analysis, and sales tables.",
      icon: "FileSpreadsheet",
      highlights: ["Pivot Tables & Charts", "XLOOKUP & Index/Match", "Data Validation & Models"]
    },
    {
      name: "Google Sheets",
      level: "Proficient",
      description: "Collaborative trackers, custom formulas (QUERY, ARRAYFORMULA), and data consolidation pipelines.",
      icon: "Table",
      highlights: ["Real-time Collaboration", "QUERY & FILTER Formulas", "Connected App Trackers"]
    },
    {
      name: "HubSpot CRM",
      level: "Developing",
      description: "Setting up deal pipelines, contact properties, automated email sequences, and lifecycle stages.",
      icon: "Layers",
      highlights: ["Deal Pipelines", "Contact Lifecycle Stages", "Basic Automation Triggers"]
    },
    {
      name: "Power BI",
      level: "Developing",
      description: "Building interactive dashboards, visual KPI scorecards, and connecting business datasets.",
      icon: "BarChart3",
      highlights: ["Interactive Reports", "Sales KPI Scorecards", "Data Visualizations"]
    },
    {
      name: "Make.com (Integromat)",
      level: "Developing",
      description: "Designing multi-step webhook scenarios connecting web forms, Google Sheets, CRMs, and email alerts.",
      icon: "Workflow",
      highlights: ["Visual Scenario Design", "Webhook Ingestion", "App Integrations"]
    },
    {
      name: "ChatGPT & AI Productivity Tools",
      level: "Proficient",
      description: "Prompt engineering for market research, draft proposal synthesis, and workflow brainstorming.",
      icon: "Sparkles",
      highlights: ["Prompt Engineering", "Research Acceleration", "Workflow Brainstorming"]
    }
  ]
};

export const projectsData = [
  {
    id: "lead-management",
    title: "Automated Lead Management System",
    category: "Workflow Automation & CRM",
    badge: "Demonstration Project",
    tagline: "Eliminating manual lead leaks and missed follow-ups through instant multi-channel CRM routing.",
    businessProblem: "Small businesses and agencies frequently capture leads through disparate web forms and social channels. Manually copying contact data into spreadsheets leads to delayed response times (often exceeding 24 hours), missed follow-ups, and lost sales opportunities.",
    businessRequirements: [
      "Capture inbound leads instantly across all inquiry channels (24/7).",
      "Automatically validate and populate contact records in HubSpot CRM without manual copy-pasting.",
      "Dispatch immediate confirmation to the prospective client and instant alert to sales team.",
      "Schedule automatic follow-up reminders at Day 2 and Day 5 if status remains uncontacted."
    ],
    proposedSolution: "A zero-latency automation workflow orchestrated via Make.com. The scenario parses inbound submissions from web forms and landing pages, checks for duplicates, creates a structured Deal & Contact record in HubSpot, logs the entry into a backup Google Sheet, and triggers an instant Slack notification to the lead owner.",
    mansiContribution: [
      "Conducted research on typical SMB lead response time benchmarks and drop-off rates.",
      "Mapped out the end-to-end customer journey from form submission to first consultation call.",
      "Designed the HubSpot CRM pipeline stages: Inbound -> Qualified -> Needs Analysis -> Proposal -> Won/Lost.",
      "Drafted personalized, brand-aligned email follow-up notification templates.",
      "Prepared functional requirements document for the technical development partner."
    ],
    technicalPartnerExecution: [
      "Configured custom Webhook endpoints to ingest raw payload data.",
      "Built multi-branch Make.com scenario with conditional routers (checking lead interest & budget tier).",
      "Integrated HubSpot CRM REST API for idempotent contact upserting.",
      "Engineered fallback error handling and error-retry notifications via webhook alert."
    ],
    tools: ["Make.com", "HubSpot CRM", "Google Sheets", "Slack API", "Gmail"],
    metricsPreview: {
      responseTime: "< 60 seconds (down from 24h manual)",
      dataIntegrity: "100% automated logging",
      status: "Fully functional demonstration architecture"
    },
    demoSteps: [
      { step: "1. Inbound Ingestion", detail: "Form payload received via encrypted HTTPS webhook." },
      { step: "2. Data Cleansing", detail: "Email formatted, phone standardized, name capitalized." },
      { step: "3. CRM Upsert", detail: "HubSpot creates/updates contact and initializes deal in 'New Inbound'." },
      { step: "4. Notification & Backup", detail: "Google Sheets receives timestamped row; Slack alert pinged to team." }
    ]
  },
  {
    id: "bi-dashboard",
    title: "Executive Business Intelligence Dashboard",
    category: "Analytics & Data Visualization",
    badge: "Demonstration Project",
    tagline: "Translating disparate transaction records into clear, actionable executive sales insights.",
    businessProblem: "Business owners and department heads often struggle to get a timely, consolidated view of revenue performance. Data is buried in fragmented CSVs and monthly transaction logs, making it difficult to spot regional drops, rep performance, or high-margin product opportunities.",
    businessRequirements: [
      "Consolidate monthly sales records across regions, product categories, and sales reps.",
      "Provide executive-level KPI cards: Total Revenue, Gross Margin, Average Order Value (AOV), and MoM Growth.",
      "Enable dynamic filtering by date range, region, and product category with instant visualization update.",
      "Highlight underperforming regions to support quick operational interventions."
    ],
    proposedSolution: "An interactive Business Intelligence model built with Microsoft Excel and Power BI. Raw sales data is cleaned, structured with relational schema, and connected to visual dashboards featuring revenue trends, regional performance heatmaps, and target-vs-actual variance tracking.",
    mansiContribution: [
      "Defined key business performance indicators (KPIs) tailored for executive decision-makers.",
      "Structured reporting requirements by interviewing simulated business stakeholders.",
      "Created paper wireframes and visual hierarchy for the executive dashboard layout.",
      "Formulated analysis narrative highlighting top-performing product lines and seasonal patterns.",
      "Organized data dictionary defining metric calculations (Gross Margin %, AOV, MoM %)."
    ],
    technicalPartnerExecution: [
      "Constructed star-schema data model linking Fact_Sales with Dim_Product, Dim_Region, and Dim_Date.",
      "Wrote optimized DAX formulas for dynamic Year-to-Date (YTD) and Previous Period comparisons.",
      "Configured automated data refresh connectors and row-level visual interactivity.",
      "Ensured mobile view responsiveness for tablet and smartphone executive checks."
    ],
    tools: ["Microsoft Excel", "Power BI", "Google Sheets", "DAX"],
    metricsPreview: {
      metricsTracked: "Revenue, Margin %, Regional Volume, Rep Quota",
      decisionSpeed: "Immediate visual clarity vs. hours of spreadsheet review",
      status: "Interactive prototype available for review"
    },
    demoSteps: [
      { step: "1. Data Normalization", detail: "Multi-year transaction files imported and schema standardized." },
      { step: "2. Relational Modeling", detail: "Date dimension, customer segments, and product catalogs connected." },
      { step: "3. Measure Calculation", detail: "DAX formulas calculate dynamic profit margins and MoM variances." },
      { step: "4. Visual Dashboard", detail: "Interactive slicers allow drill-down into specific territories & reps." }
    ]
  },
  {
    id: "recruitment-automation",
    title: "Recruitment Pipeline & Applicant Tracking Automation",
    category: "Operations & HR Tech",
    badge: "Demonstration Project",
    tagline: "Streamlining candidate intake, screening notifications, and interview scheduling workflows.",
    businessProblem: "Early-stage companies and growing teams manage hiring across email inboxes and scattered spreadsheets. Resumes get buried, candidate response times lag, and scheduling interviews requires cumbersome back-and-forth email chains.",
    businessRequirements: [
      "Centralize candidate applications from Google Forms into a single real-time Applicant Tracker.",
      "Trigger automated confirmation email to candidates acknowledging application receipt.",
      "Auto-tag candidate profiles based on years of experience and desired role.",
      "Notify hiring managers on Slack with direct resume links when candidate passes preliminary criteria."
    ],
    proposedSolution: "An automated applicant tracking workflow using Google Forms, Google Sheets, Make.com, and automated messaging. Every submission instantly creates a normalized applicant record, sends a personalized confirmation email, updates the recruitment pipeline dashboard, and alerts the hiring coordinator.",
    mansiContribution: [
      "Mapped the entire candidate experience journey from application to final interview offer.",
      "Designed the applicant screening questionnaire to extract quantitative criteria without friction.",
      "Created standardized email communication templates for each stage (Receipt, Review, Interview Invite).",
      "Established pipeline SLAs (e.g., maximum 48-hour window for candidate review notification).",
      "Documented privacy and data-handling guidelines for applicant information."
    ],
    technicalPartnerExecution: [
      "Configured Google Workspace webhook triggers on form submission.",
      "Built parsing scenario in Make.com to extract candidate metadata and format CV links.",
      "Implemented conditional logic to route engineering vs. marketing candidates to respective team channels.",
      "Integrated calendar invite dispatch automation upon status update in master tracker."
    ],
    tools: ["Google Forms", "Google Sheets", "Make.com", "Slack", "Gmail API"],
    metricsPreview: {
      intakeLatency: "Instant candidate record creation (< 15 seconds)",
      candidateExperience: "100% receipt acknowledgment rate",
      status: "Demonstration workflow operational"
    },
    demoSteps: [
      { step: "1. Form Submission", detail: "Applicant submits profile, portfolio links, and resume." },
      { step: "2. Automated Ingestion", detail: "Make.com extracts fields, validates email, and assigns Candidate ID." },
      { step: "3. Pipeline Logging", detail: "Master Google Sheet populated with status 'Under Review'." },
      { step: "4. Multi-party Alerts", detail: "Applicant receives branded email; hiring manager gets Slack summary." }
    ]
  }
];

export const workflowSteps = [
  {
    number: "01",
    title: "Understand the Business",
    subtitle: "Discovery & Context",
    description: "Deep dive into your business model, customer touchpoints, and existing operational processes through structured inquiry.",
    deliverable: "Business Context Document & Process Overview",
    role: "Mansi (Business Development & Research)"
  },
  {
    number: "02",
    title: "Identify Operational Inefficiencies",
    subtitle: "Bottleneck Mapping",
    description: "Uncover where time is lost, follow-ups are dropped, or repetitive manual tasks slow down day-to-day revenue generation.",
    deliverable: "Bottleneck Audit & Opportunity Matrix",
    role: "Mansi (Business Analysis)"
  },
  {
    number: "03",
    title: "Gather Client Requirements",
    subtitle: "Specification & Scoping",
    description: "Translate high-level business goals into concrete operational requirements, user flows, and success metrics.",
    deliverable: "Scope of Work & Requirements Document",
    role: "Mansi (Client Liaison)"
  },
  {
    number: "04",
    title: "Collaborate on Technical Solutions",
    subtitle: "Architecture & Feasibility",
    description: "Partner closely with my technical development partner to select the right tools, APIs, and automation logic.",
    deliverable: "Solution Architecture & Integration Plan",
    role: "Joint (Mansi + Technical Partner)"
  },
  {
    number: "05",
    title: "Coordinate Implementation",
    subtitle: "Execution & Milestone Tracking",
    description: "Keep the project on schedule, ensure client visibility, and manage iterative testing while technical partner builds.",
    deliverable: "Sprint Updates & Milestone Reviews",
    role: "Mansi (Project Coordination) + Partner (Engineering)"
  },
  {
    number: "06",
    title: "Review & Refine Delivery",
    subtitle: "Quality Assurance & Handover",
    description: "Conduct user-acceptance testing, verify operational outcomes against initial requirements, and provide clear handover guides.",
    deliverable: "Verified Solution & User Documentation",
    role: "Joint (Client Handover & Support)"
  }
];

export const collaborationDetails = {
  headline: "Business Understanding Meets Technical Execution.",
  subheadline: "Why our two-person venture delivers clarity and speed: I bridge the business requirements while my technical partner engineers robust systems.",
  businessColumn: {
    title: "Business Development & Operations",
    owner: "Mansi",
    roleBadge: "Strategy, Client Liaison & Operations",
    responsibilities: [
      "Client Acquisition & Relationship Management",
      "Business Research & Industry Discovery",
      "In-Depth Requirement Gathering & Scoping",
      "Identifying Operational Inefficiencies",
      "Proposal Preparation & Clear Pricing Summaries",
      "Client Communication & Expectation Setting",
      "Project Coordination, Timelines & Milestones",
      "User Acceptance Testing & Handover Documentation"
    ]
  },
  technicalColumn: {
    title: "Technical Engineering & Development",
    owner: "Development Partner",
    roleBadge: "Software, APIs & Automation",
    responsibilities: [
      "System Architecture & Feasibility Design",
      "Custom Software & Web Application Development",
      "API Integrations & Secure Webhook Endpoints",
      "AI Implementation & LLM Agent Workflows",
      "Make.com & Zapier Automation Scenarios",
      "Database Schema Design & Data Pipelines",
      "Cloud Deployment, Hosting & Infrastructure",
      "Ongoing Technical Maintenance & Monitoring"
    ]
  }
};

