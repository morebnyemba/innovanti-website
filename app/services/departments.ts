import type { IconType } from 'react-icons'
import { FiServer, FiTruck, FiTrendingUp } from 'react-icons/fi'

export type Capability = {
  title: string
  /** Short supporting line (used by Procurement & Trading). */
  desc?: string
  /** Bullet list of specifics (used by Technology). */
  items?: string[]
}

export type ProcessStep = { title: string; desc: string }
export type Faq = { q: string; a: string }

export type Department = {
  slug: string
  index: string
  eyebrow: string
  /** Short name for nav, cards and cross-links. */
  name: string
  /** Section / capability title. */
  title: string
  /** Hero headline on the detail page. */
  heroTitle: string
  /** One-line summary used on the hub and homepage cards. */
  summary: string
  /** Longer intro used as the hero subtitle and overview lead. */
  intro: string
  /** Second overview paragraph — adds depth to the detail page. */
  overview: string
  /** Quick stat highlights shown on the detail page. */
  stats: { value: string; label: string }[]
  Icon: IconType
  image?: string
  capabilities: Capability[]
  /** What an engagement delivers — shown on the detail page. */
  outcomes: string[]
  /** How we work — staged process shown on the detail page. */
  approach: ProcessStep[]
  /** Department-specific frequently asked questions. */
  faqs: Faq[]
}

export const departments: Department[] = [
  {
    slug: 'technology',
    index: '01',
    eyebrow: 'Technology',
    name: 'Technology',
    title: 'Information Technology Solutions',
    heroTitle: 'Technology that runs reliably and scales with you.',
    summary: 'Strategy, infrastructure and digital transformation built around how you operate.',
    intro:
      'Comprehensive IT services that help organisations leverage technology for efficiency, security and growth — from strategy and infrastructure to security and day-to-day support.',
    overview:
      'We act as a single, accountable technology partner: assessing where you are today, designing the right infrastructure and security, then implementing and supporting it so your systems stay fast, available and protected. Whether you need a one-off project or fully managed IT, every engagement is sized to your operations and budget.',
    stats: [
      { value: '24/7', label: 'Monitoring & support coverage' },
      { value: '4', label: 'Core technology disciplines' },
      { value: '100%', label: 'Vendor-neutral recommendations' },
    ],
    Icon: FiServer,
    image: '/services-technology.jpg',
    capabilities: [
      { title: 'IT Consulting', items: ['IT strategy development', 'Digital transformation planning', 'Technology assessments', 'IT infrastructure design'] },
      { title: 'Network Solutions', items: ['Network design & deployment', 'LAN / WAN implementation', 'Wireless & structured cabling', 'Monitoring & management'] },
      { title: 'Managed IT Services', items: ['Support & maintenance', 'Helpdesk & remote monitoring', 'Infrastructure & sys admin', 'Preventive maintenance'] },
      { title: 'Cybersecurity', items: ['Security & vulnerability testing', 'Firewall & endpoint protection', 'Security awareness training', 'Data protection solutions'] },
    ],
    outcomes: [
      'Reduced downtime through proactive monitoring and maintenance',
      'A security posture aligned to recognised standards',
      'Infrastructure that scales without re-platforming',
      'One accountable team across strategy, build and support',
    ],
    approach: [
      { title: 'Discovery & assessment', desc: 'We audit your current systems, workflows and risks to establish a clear baseline.' },
      { title: 'Strategy & design', desc: 'We design infrastructure, security and a roadmap aligned to your goals and budget.' },
      { title: 'Implementation', desc: 'We deploy, configure and integrate with minimal disruption to day-to-day operations.' },
      { title: 'Support & optimisation', desc: 'We monitor, maintain and continuously improve once you are live.' },
    ],
    faqs: [
      { q: 'Can you work with our existing IT systems?', a: 'Yes. We integrate with your current infrastructure wherever possible and recommend upgrades only where they deliver clear, measurable value.' },
      { q: 'How do you approach cybersecurity?', a: 'We layer vulnerability testing, firewall and endpoint protection, data-protection controls and staff awareness training into a defence aligned to recognised standards — not a single product.' },
      { q: 'Do you support remote and hybrid teams?', a: 'Absolutely. Our managed services include remote monitoring, helpdesk and secure access so distributed teams stay productive and protected.' },
      { q: 'What size of organisation do you work with?', a: 'From small businesses to large enterprises. Engagements scale from a single project to fully managed, end-to-end IT.' },
      { q: 'How quickly can you respond to issues?', a: 'Managed-service clients get defined response targets through our helpdesk and remote monitoring, with preventive maintenance to reduce incidents in the first place.' },
    ],
  },
  {
    slug: 'procurement',
    index: '02',
    eyebrow: 'Sourcing',
    name: 'Procurement',
    title: 'Procurement & Supply Chain',
    heroTitle: 'Sourcing you can trust, delivered on time.',
    summary: 'Strategic sourcing that secures quality products at competitive prices.',
    intro:
      'Strategic procurement that helps organisations obtain quality products and services at competitive prices, with transparent sourcing and dependable delivery to your site.',
    overview:
      'We take the complexity out of buying — clarifying requirements, running competitive tenders, vetting suppliers and coordinating logistics so you receive the right goods, at the right price, on time. From IT hardware and software to office equipment and specialised goods, we manage the process end to end and keep it transparent throughout.',
    stats: [
      { value: 'End-to-end', label: 'From sourcing to delivery' },
      { value: 'Vetted', label: 'Supplier network' },
      { value: 'On-time', label: 'Coordinated fulfilment' },
    ],
    Icon: FiTruck,
    capabilities: [
      { title: 'Strategic Sourcing', desc: 'Identifying and securing the right suppliers for quality and price.' },
      { title: 'Vendor Management', desc: 'Competitive tendering, evaluation and supplier relationships.' },
      { title: 'Logistics & Delivery', desc: 'Coordinated supply, delivery and fulfilment to your site.' },
      { title: 'Quality Assurance', desc: 'Compliance and standards upheld across every order.' },
    ],
    outcomes: [
      'Competitive pricing through a vetted supplier network',
      'Transparent tendering and supplier evaluation',
      'Reliable fulfilment and delivery to site',
      'Compliance and standards upheld on every order',
    ],
    approach: [
      { title: 'Requirement definition', desc: 'We clarify specifications, volumes, timelines and budget up front.' },
      { title: 'Sourcing & tendering', desc: 'We identify and evaluate suppliers through competitive, transparent tendering.' },
      { title: 'Quality & compliance', desc: 'We verify goods against agreed standards before they reach you.' },
      { title: 'Logistics & delivery', desc: 'We coordinate supply and fulfilment all the way to your site.' },
    ],
    faqs: [
      { q: 'What types of goods and services can you procure?', a: 'From IT hardware and software to office equipment, consumables and specialised goods across sectors. If you can specify it, we can source it.' },
      { q: 'How do you ensure competitive pricing?', a: 'Through a vetted supplier network and competitive tendering, we secure quality at the best available price rather than defaulting to a single vendor.' },
      { q: 'Can you manage end-to-end delivery?', a: 'Yes. We coordinate sourcing, quality assurance, logistics and delivery to your site so you deal with one accountable partner.' },
      { q: 'Do you handle supplier vetting and compliance?', a: 'We evaluate suppliers and uphold compliance and quality standards on every order, with documentation to match.' },
      { q: 'Can you procure internationally?', a: 'Yes. Our network and trading division support cross-border sourcing where a requirement calls for it.' },
    ],
  },
  {
    slug: 'trading',
    index: '03',
    eyebrow: 'Trade',
    name: 'Trading',
    title: 'Trading & Commodity Brokerage',
    heroTitle: 'Connecting markets with intelligence and integrity.',
    summary: 'Commodity brokerage and general trade connecting markets end to end.',
    intro:
      'Bridging suppliers, manufacturers and end-users with market intelligence and trusted facilitation across commodities, hardware and general goods.',
    overview:
      'Our trading division connects the right buyers and sellers and sees the transaction through — from market analysis and matching to documentation, logistics and settlement. We broker commodities, supply IT and business hardware, and deliver software implementation, applying market intelligence and a transparent, integrity-first approach at every step.',
    stats: [
      { value: 'Global', label: 'Network of buyers & sellers' },
      { value: 'Market-led', label: 'Intelligence on every trade' },
      { value: 'Trusted', label: 'Transparent facilitation' },
    ],
    Icon: FiTrendingUp,
    capabilities: [
      { title: 'Commodity Brokerage', desc: 'Connecting buyers and sellers across markets with integrity.' },
      { title: 'General Trading', desc: 'Sourcing and supplying goods across diverse categories.' },
      { title: 'Hardware Supply', desc: 'Procurement and support for IT and business hardware.' },
      { title: 'Software Implementation', desc: 'Development and deployment aligned to your workflows.' },
    ],
    outcomes: [
      'Access to a broad network of buyers and sellers',
      'Market intelligence that informs every trade',
      'End-to-end facilitation from sourcing to delivery',
      'Integrity and transparency through the transaction',
    ],
    approach: [
      { title: 'Market analysis', desc: 'We assess markets, pricing and availability to inform every trade.' },
      { title: 'Matching & negotiation', desc: 'We connect the right buyers and sellers and negotiate fair terms.' },
      { title: 'Facilitation', desc: 'We manage documentation, logistics and the transaction end to end.' },
      { title: 'Settlement & delivery', desc: 'We see the deal through to delivery and settlement for both parties.' },
    ],
    faqs: [
      { q: 'What commodities and goods do you trade?', a: 'We broker commodities and trade general goods, IT and business hardware, and software across a diverse range of categories.' },
      { q: 'How does commodity brokerage work with you?', a: 'We connect buyers and sellers, apply market intelligence and facilitate the transaction end to end with integrity and full transparency.' },
      { q: 'Do you supply hardware and software too?', a: 'Yes. We procure and support IT and business hardware and deliver software implementation aligned to your workflows.' },
      { q: 'Can you connect us with international markets?', a: 'We bridge suppliers, manufacturers and end-users across markets, including cross-border facilitation where required.' },
      { q: 'How do you protect both parties in a trade?', a: 'We operate transparently, verify counterparties and manage the documentation so everyone in the transaction is protected.' },
    ],
  },
]

export const departmentSlugs = departments.map((d) => d.slug)

export function getDepartment(slug: string): Department | undefined {
  return departments.find((d) => d.slug === slug)
}
