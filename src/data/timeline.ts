export interface TimelineEntry {
  id: string;
  period: string;
  company: string;
  role: string;
  title: string;
  description: string;
  tags: string[];
  companyUrl?: string;
  featured?: boolean;
}

export const timelineEntries: TimelineEntry[] = [
  {
    id: 'wabtec-sourcing',
    period: '2023 - Present',
    company: 'Wabtec, Texas',
    role: 'Senior Software Developer Level 2',
    title: 'Sourcing Application',
    description:
      'Built sourcing platform features to streamline procurement and vendor lifecycle workflows across enterprise teams.',
    tags: ['React', 'TypeScript', 'Enterprise'],
    companyUrl: 'https://www.wabteccorp.com/',
    featured: true,
  },
  {
    id: 'wabtec-taskflow',
    period: '2023 - 2024',
    company: 'Wabtec, Texas',
    role: 'Senior Software Developer Level 2',
    title: 'Task Flow Manager - Job Scheduling',
    description:
      'Designed a scheduling engine for database scripts, API orchestration, and repeatable automation jobs.',
    tags: ['Scheduling', 'APIs', 'Automation'],
    companyUrl: 'https://www.wabteccorp.com/',
  },
  {
    id: 'wabtec-multitenant',
    period: '2023 - 2024',
    company: 'Wabtec, Texas',
    role: 'Senior Software Developer',
    title: 'Multi-Tenant Platform Support',
    description:
      'Made frontend and backend layers tenant-aware and database-agnostic, including Oracle integration paths.',
    tags: ['Multi-Tenant', 'Oracle', 'Architecture'],
    companyUrl: 'https://www.wabteccorp.com/',
  },
  {
    id: 'wabtec-angular-migration',
    period: '2021 - 2022',
    company: 'Wabtec, Texas',
    role: 'Staff Software Developer',
    title: 'Supply Chain Connect - Angular Migration',
    description:
      'Led incremental migration from AngularJS to Angular using a hybrid delivery strategy for zero-disruption rollout.',
    tags: ['Angular', 'Migration', 'Leadership'],
    companyUrl: 'https://www.wabteccorp.com/',
  },
  {
    id: 'ge-oracle-migration',
    period: '2018 - 2019',
    company: 'General Electric, New Orleans, LA',
    role: 'Software Developer',
    title: 'Oracle to PostgreSQL Data Migration',
    description:
      'Built a Node.js-based migration utility to move Oracle data safely into PostgreSQL for modernized services.',
    tags: ['Node.js', 'PostgreSQL', 'Data Migration'],
  },
  {
    id: 'ge-supply-chain',
    period: '2016 - 2023',
    company: 'General Electric, New Orleans, LA',
    role: 'Software Developer',
    title: 'Supply Chain Connect Platform',
    description:
      'Delivered enterprise modules across AngularJS, Java, and PostgreSQL for high-availability supply chain operations.',
    tags: ['AngularJS', 'Java', 'Supply Chain'],
  },
  {
    id: 'upmc-mobile',
    period: '2014 - 2015',
    company: 'UPMC',
    role: 'Software Developer Contractor',
    title: 'UPMC Mobile Application',
    description:
      'Developed healthcare mobile features using Backbone.js and Java Spring for patient-facing workflows.',
    tags: ['Backbone.js', 'Spring', 'Healthcare'],
    companyUrl: 'https://www.upmc.com/',
  },
];
