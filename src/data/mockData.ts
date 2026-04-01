// Static data extracted from the Aether Pharma AI CSR Dashboard design

export const navLinks = [
  { label: 'Dashboard', icon: 'dashboard', active: true },
  { label: 'Data Analysis', icon: 'analytics', active: false },
  { label: 'Report Builder', icon: 'edit_note', active: false },
  { label: 'Compliance', icon: 'verified_user', active: false },
]

export const bottomLinks = [
  { label: 'Help Center', icon: 'help' },
  { label: 'Log Out', icon: 'logout' },
]

export const appMeta = {
  logoIcon: 'medical_services',
  logoTitle: 'Pharma CSR',
  logoSubtitle: 'Clinical Reporting',
  appTitle: 'Clinical Curator AI',
  searchPlaceholder: 'Search reports or data...',
  userAvatar: {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvU7Gu2-pSk-cgHNHHN4e12fErGZK46ydYh8u89Cc-2KJggBqyVj8YXD2aHkcb_wa2j7w5KyWBnNp_7BCGmZ9D8M7fvwrRfnpl29aboXRyVG6IuAL_9L99STtPk_rjE-CE_qbcUT7D_D-pO8iN3aKDof6vMIGuVchkd-SmQBbTTJaSL8NqAAI_TTF9AtQrDbwehmWXmeJxjyOB63i3TNVvdMyUXj5daXEpVqqAEuGMQottmEzIxvXMdIaQiBGfxuSkJCx_fH7sFaU',
    alt: 'User profile avatar',
  },
}

export const activeReport = {
  badge: 'Active Generation',
  timeLeft: '12m left',
  title: '2025 Clinical Impact Report',
  phase: 'Phase 3: Environmental Analysis',
  progress: 65,
  description:
    'The AI is currently correlating clinical trial environmental waste data with global sustainability benchmarks.',
  actions: [
    { label: 'Preview Draft', variant: 'secondary' as const },
    { label: 'View Logs', variant: 'text' as const },
  ],
}

export const complianceMetric = {
  label: 'Compliance Confidence',
  value: '98%',
  footnote: 'Against EMA/FDA Sustainability Standards',
  icon: 'verified',
}

export const efficiencyMetric = {
  value: '120',
  unit: 'hrs',
  label: 'Efficiency Gains This Month',
  icon: 'timer',
}

export const actionCardItems = [
  {
    icon: 'add_chart',
    title: 'Start New Report',
    description: 'Generate tailored CSR documents from raw data.',
  },
  {
    icon: 'cloud_upload',
    title: 'Upload Source Data',
    description: 'Sync clinical trial logs or supply chain metrics.',
  },
]

export const pendingApprovals = {
  count: 3,
  label: 'Pending Approvals',
  description: '3 reports require executive sign-off.',
}

export type DraftStatus = 'AI Draft' | 'Reviewing' | 'Ready'

export interface DraftItem {
  id: string
  icon: string
  iconBg: string
  iconColor: string
  title: string
  meta: string
  status: DraftStatus
  statusStyle: string
  collaborators: Array<{ src: string; alt: string } | { initials: string; bg: string }>
}

export const recentDrafts: DraftItem[] = [
  {
    id: 'draft-1',
    icon: 'description',
    iconBg: 'bg-blue-50',
    iconColor: 'text-primary',
    title: 'Q4 2024 Supply Chain Resilience',
    meta: 'Modified 2 hours ago • By Sarah Chen',
    status: 'AI Draft',
    statusStyle: 'bg-secondary-container/10 text-secondary',
    collaborators: [
      {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUqJ-HpET4zxVCgdGNS_8cxcxzs0x7COd81ArrERky2SYfjFtQ4jaospX8tcJGPQXsfBj5sjktq7lZYoA-YB33pdyyTSYxpVoYiekyiMfjixv7R5psaKCUWKeq8KOFtEuE1T-ProUiJMJZFGgNOOMZgsC6X_HaR9Y1YaIzq_Rl_8IpTkLVS7cVYMM12FxXg_gNm_9snPkLKmF0ZhDH2-CTgXJ_N2xfJea3W8q9w_tJTN80VU3YQrsvIMKG1jBzs_NjO9XHF0pknjY',
        alt: 'AI Agent',
      },
      {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvBvASkTB5UsCApLOQE0ZaG_eciP_KbDDOy33010SvxXQqIMTUEu_-G-8WB_t7buyuFfcSfKufRxkp97NkGdmz59IVRFWkkDVC-0jCm0JJve6qkb9U1jR_SamRoCAwXMjUk7CUXULL-TnbLTvcfvDEqBlR-llxveqqTkqoq3us9P6p9yJQwDLVPa8jd7ADvUQoAXbUhPqLd0MTxpe0IDF_bjN_8UzNVv_-BnZFqMFNUuf_XDdu65W9Ya-ZzICGdVK129fxAO4TL78',
        alt: 'Sarah C',
      },
    ],
  },
  {
    id: 'draft-2',
    icon: 'eco',
    iconBg: 'bg-tertiary/10',
    iconColor: 'text-tertiary',
    title: 'Global Decarbonization Roadmap',
    meta: 'Modified yesterday • By Dr. Michael Voss',
    status: 'Reviewing',
    statusStyle: 'bg-surface-container-high text-on-surface-variant',
    collaborators: [
      {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZh767Kml0gloNF3m1u5kge-pItZKsAfVS4x4u0p1mcdbhj7voo-wJWPox4Ap0j9qfAQn3XnYwq9QZ7exq2_91bHuCoARXzzBUSBvWaZxbpTmwowuoZOf16SP4QqEOYVKQtv57NzML-E4BiyX5Mm01E1LakBsUWJDKaqv0t7ZD_KlxLXUSl8M6Dq7P0AFtxZ_kLQwA43BfPBla7Rq63dc3Sqn_cEKrMWKrvs6JujcCn85aRIxifAp8YKUIZu-bpTgn4rESd4e-i4E',
        alt: 'Michael V',
      },
    ],
  },
  {
    id: 'draft-3',
    icon: 'fact_check',
    iconBg: 'bg-blue-50',
    iconColor: 'text-primary',
    title: 'H1 Patient Accessibility Report',
    meta: 'Modified 3 days ago • System Verified',
    status: 'Ready',
    statusStyle: 'bg-tertiary/10 text-tertiary',
    collaborators: [{ initials: 'SY', bg: 'bg-tertiary' }],
  },
]

export const aiInsight = {
  icon: 'auto_awesome',
  title: 'Curator Insight: Data Anomalies Detected',
  body: "I've noticed a 14% discrepancy in water usage reporting between the Swiss and Singapore manufacturing hubs. Suggesting a",
  linkText: 'targeted audit',
  bodyEnd: 'to maintain your 98% compliance confidence score before final generation.',
  actions: [
    { label: 'Dismiss', variant: 'ghost' as const },
    { label: 'Auto-Reconcile', variant: 'filled' as const },
  ],
}
