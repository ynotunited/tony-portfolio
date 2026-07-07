export const projects = [
  {
    slug: 'buildledger',
    title: 'BuildLedger',
    description:
      'Multi-tenant SaaS platform for invoices, proposals, contracts, payments, and client workflows.',
    tags: ['Laravel', 'Next.js', 'MySQL', 'TypeScript', 'Docker'],
    link: 'https://buildledger.madeitcodes.online',
    featured: true,
    caseStudy: {
      summary:
        'A multi-tenant SaaS platform that centralizes invoicing, proposals, contracts, payments, and client communication in one operational workspace.',
      problem:
        'Small teams were managing money, approvals, and client updates across spreadsheets, email threads, and scattered tools. That created delays, version confusion, and a weak handoff from sales to delivery.',
      solution:
        'BuildLedger consolidates the full client lifecycle into one app, with tenant isolation, role-based access, invoice and proposal flows, and a secure deployment model that is easy to operate in production.',
      architecture: [
        'Laravel API layer for business rules and auth',
        'Next.js front end for fast client and admin workflows',
        'MySQL schema designed for tenant separation',
        'Dockerized deployment for repeatable releases',
      ],
      outcome: [
        'Clearer handoff from lead to invoice',
        'Less manual admin work for project teams',
        'A foundation ready for billing, reporting, and automation',
      ],
      stack: ['Laravel', 'Next.js', 'MySQL', 'TypeScript', 'Docker', 'Nginx'],
    },
  },
  {
    slug: 'efinder',
    title: 'eFinder',
    description:
      'Lost & found system enabling institutions to manage and reunite people with lost items at scale.',
    tags: ['Laravel', 'MySQL', 'Vue.js'],
    link: '#',
    featured: false,
    caseStudy: {
      summary:
        'A lost-and-found workflow system built for schools and institutions to track items, handle claims, and reduce admin overhead.',
      problem:
        'Institutions needed a reliable way to record found items, manage claims, and keep the process organized without relying on ad-hoc communication.',
      solution:
        'eFinder introduces structured item intake, claim tracking, and searchable records so administrators can process requests quickly and transparently.',
      architecture: [
        'Laravel backend with relational data modeling',
        'Vue.js interface for quick staff workflows',
        'MySQL persistence for searchable claims history',
      ],
      outcome: [
        'Better visibility into incoming and claimed items',
        'Faster administrative turnaround',
        'Improved accountability for staff and users',
      ],
      stack: ['Laravel', 'MySQL', 'Vue.js'],
    },
  },
  {
    slug: 'multivend-marketplace',
    title: 'MultiVend Marketplace',
    description:
      'Multi-vendor e-commerce platform with vendor onboarding, storefront management, and order routing.',
    tags: ['PHP', 'Laravel', 'MySQL', 'Redis'],
    link: '#',
    featured: false,
    caseStudy: {
      summary:
        'A marketplace platform that gives multiple vendors their own storefronts while keeping order routing and operations centralized.',
      problem:
        'Marketplaces need to balance vendor autonomy with operational control, especially when onboarding, orders, and inventory all move at once.',
      solution:
        'MultiVend gives each vendor a managed storefront while the platform owner retains control over onboarding, orders, and platform-wide workflows.',
      architecture: [
        'Laravel services for catalog and order orchestration',
        'Redis-backed queues for async marketplace tasks',
        'MySQL for transactional data and storefront state',
      ],
      outcome: [
        'A scalable pattern for multi-vendor commerce',
        'Cleaner routing for orders and vendor actions',
        'Architecture ready for growth and automation',
      ],
      stack: ['PHP', 'Laravel', 'MySQL', 'Redis'],
    },
  },
  {
    slug: 'ngo-erp',
    title: 'NGO / ERP System',
    description:
      'Enterprise resource planning system for non-profits - managing grants, beneficiaries, and reporting.',
    tags: ['Laravel', 'Livewire', 'MySQL'],
    link: '#',
    featured: false,
    caseStudy: {
      summary:
        'An ERP-style internal system for non-profits to manage grants, beneficiaries, and reporting in one place.',
      problem:
        'Non-profit operations often rely on disconnected tools for funding, record-keeping, and reporting, which makes audits and updates harder than they need to be.',
      solution:
        'This ERP system centralizes grant tracking, beneficiary records, and reporting workflows so teams can work with clearer data and fewer manual steps.',
      architecture: [
        'Laravel backend with Livewire-powered admin interfaces',
        'MySQL for structured records and reporting',
        'Role-aware workflows for internal team access',
      ],
      outcome: [
        'Simplified reporting and oversight',
        'More reliable records for grant and beneficiary management',
        'Less manual reconciliation across systems',
      ],
      stack: ['Laravel', 'Livewire', 'MySQL'],
    },
  },
  {
    slug: 'hospital-management-system',
    title: 'Hospital Management System',
    description:
      'End-to-end HMS covering patient records, appointments, billing, lab results, and staff management.',
    tags: ['PHP', 'Laravel', 'MySQL', 'REST API'],
    link: '#',
    featured: false,
    caseStudy: {
      summary:
        'A hospital management platform covering patient records, appointments, billing, lab results, and staff operations.',
      problem:
        'Healthcare teams need accurate, fast access to operational data while keeping patient records and workflows organized across departments.',
      solution:
        'The HMS organizes clinical and administrative workflows into one system with structured records, access control, and workflow-friendly APIs.',
      architecture: [
        'Laravel application with API-first workflows',
        'MySQL database for patient and billing records',
        'REST endpoints for integration-ready operations',
      ],
      outcome: [
        'Improved operational visibility',
        'Fewer manual handoffs between departments',
        'A maintainable base for future integrations',
      ],
      stack: ['PHP', 'Laravel', 'MySQL', 'REST API'],
    },
  },
]

export const services = [
  {
    icon: 'Layers',
    title: 'SaaS Development',
    description:
      'Full-cycle SaaS product engineering from architecture design to production deployment. Multi-tenancy, billing, and role systems built in.',
    price: 'From $3,000',
  },
  {
    icon: 'Server',
    title: 'Backend API Development',
    description:
      'High-performance, well-documented REST and GraphQL APIs. Built to scale under real production load.',
    price: 'From $1,500',
  },
  {
    icon: 'GitBranch',
    title: 'System Architecture Consulting',
    description:
      'Architecture reviews, database design, and infrastructure planning for teams building complex systems.',
    price: 'From $500',
  },
  {
    icon: 'Zap',
    title: 'Business Automation',
    description:
      'Workflow automation, data pipelines, and system integrations that eliminate manual processes.',
    price: 'From $1,000',
  },
  {
    icon: 'Code2',
    title: 'Full-Stack Development',
    description:
      'End-to-end product development across the entire stack - from database to polished UI.',
    price: 'From $2,000',
  },
]

export const experiences = [
  {
    role: 'Lead Engineer',
    company: 'Webxpress / MadeIT Codes',
    period: '2022 - Present',
    stack: ['Laravel', 'Next.js', 'Docker', 'MySQL'],
    description:
      'Architected and led development of multiple production SaaS products. Defined backend architecture patterns, implemented multi-tenant systems, and delivered scalable APIs serving thousands of users.',
    highlights: ['Multi-tenant SaaS architecture', 'Team technical leadership', 'Production deployments on VPS & Docker'],
  },
  {
    role: 'Full-Stack Developer',
    company: 'NeGSt Technologies',
    period: '2021 - 2022',
    stack: ['Laravel', 'TypeScript', 'REST API', 'MySQL'],
    description:
      'Built internal tools and client-facing web applications. Integrated third-party APIs and payment gateways, reducing manual processing time by 60%.',
    highlights: ['Payment gateway integrations', 'REST API development', 'Client onboarding systems'],
  },
  {
    role: 'Web Administrator',
    company: 'PropertyLink',
    period: '2020 - 2021',
    stack: ['PHP', 'MySQL', 'CMS', 'Search'],
    description:
      'Managed and extended a property listing platform. Implemented search optimization and listing management features that improved user engagement by 40%.',
    highlights: ['Platform optimization', 'Search & filter systems', 'CMS administration'],
  },
  {
    role: 'Web Developer',
    company: 'SIRL Technologies',
    period: '2019 - 2020',
    stack: ['PHP', 'Laravel', 'MySQL', 'APIs'],
    description:
      'Developed custom web solutions for enterprise clients. Delivered database-driven applications with a focus on data integrity and performance.',
    highlights: ['Enterprise client delivery', 'Database design', 'Custom web applications'],
  },
]

export const techStack = ['PHP', 'Laravel', 'Next.js', 'TypeScript', 'Node.js', 'MySQL', 'Docker']

export const heroOutcome = 'I build production-grade SaaS platforms that help businesses automate operations and scale.'

export const proofMetrics = [
  { value: '50+', label: 'Projects delivered' },
  { value: '10+', label: 'Years building software' },
  { value: 'Multi-tenant', label: 'SaaS architecture' },
  { value: '100%', label: 'Built in-house' },
]

export const trustedTechnologies = [
  'Laravel',
  'Next.js',
  'TypeScript',
  'Docker',
  'PostgreSQL',
  'MySQL',
  'GitHub',
  'Paystack',
  'Flutterwave',
]
