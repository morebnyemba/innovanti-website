import type { Metadata } from 'next'
import InnerHero from '@/components/shared/InnerHero'
import RevealWrapper from '@/components/shared/RevealWrapper'
import Link from 'next/link'
import {
  FiMonitor, FiLayers, FiShield, FiPackage, FiGlobe, FiTrendingUp,
  FiCheckCircle,
} from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Services',
  description: 'IT consulting, cybersecurity, procurement and trade services from Innovanti Solutions.',
}

const services = [
  {
    Icon: FiMonitor,
    id: 'it-consulting',
    title: 'IT Consulting & Solutions',
    summary: 'Strategic IT guidance and end-to-end implementation for modern enterprises.',
    features: [
      'IT strategy & roadmap development',
      'Infrastructure design & deployment',
      'Cloud migration & hybrid environments',
      'Managed IT support & helpdesk',
      'Digital transformation advisory',
    ],
  },
  {
    Icon: FiLayers,
    id: 'network',
    title: 'Network Infrastructure',
    summary: 'High-performance, secure networking from structured cabling to enterprise WAN.',
    features: [
      'Structured cabling & data centres',
      'LAN / WAN design & implementation',
      'Wireless (Wi-Fi 6) deployments',
      'SD-WAN & MPLS connectivity',
      'Network monitoring & NOC support',
    ],
  },
  {
    Icon: FiShield,
    id: 'cybersecurity',
    title: 'Cybersecurity',
    summary: 'Proactive protection across endpoints, networks and cloud workloads.',
    features: [
      'Vulnerability & penetration testing',
      'SIEM / SOC implementation',
      'Endpoint detection & response (EDR)',
      'Security awareness training',
      'Incident response & forensics',
    ],
  },
  {
    Icon: FiPackage,
    id: 'procurement',
    title: 'Strategic Sourcing',
    summary: 'Competitive ICT hardware and software procurement with global reach.',
    features: [
      'Hardware & software supply',
      'Vendor management & negotiation',
      'Asset lifecycle management',
      'OEM & reseller partnerships',
      'Import / export coordination',
    ],
  },
  {
    Icon: FiGlobe,
    id: 'logistics',
    title: 'Logistics & Trade',
    summary: 'Cross-border freight, customs clearance and last-mile delivery across Africa.',
    features: [
      'Air, sea & road freight',
      'Customs brokerage & compliance',
      'Warehousing & distribution',
      'Supply chain optimisation',
      'Regional corridor expertise',
    ],
  },
  {
    Icon: FiTrendingUp,
    id: 'commodities',
    title: 'Commodity Trading',
    summary: 'Agricultural and mineral trading with transparent pricing and market insight.',
    features: [
      'Agricultural commodity sourcing',
      'Mineral & mining products',
      'Market intelligence & price discovery',
      'Contract structuring',
      'Trade finance facilitation',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <InnerHero
        title="Our Services"
        subtitle="From IT infrastructure to cross-border trade — six integrated service lines built to deliver real business value."
      />

      <section className="py-20 bg-white">
        <div className="max-w-site mx-auto px-4 space-y-8">
          {services.map(({ Icon, id, title, summary, features }, i) => (
            <RevealWrapper key={id} delay={i * 0.07}>
              <div id={id} className="group grid md:grid-cols-[1fr_2fr] gap-8 bg-white border border-navy/8 rounded-2xl p-8 hover:shadow-xl hover:shadow-navy/8 transition-all duration-300">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-brand/8 flex items-center justify-center mb-4 group-hover:bg-brand/15 transition-colors">
                    <Icon className="text-brand" size={26} />
                  </div>
                  <h2 className="font-display text-2xl font-extrabold text-navy">{title}</h2>
                  <p className="text-navy/60 mt-2 text-sm leading-relaxed">{summary}</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 mt-5 text-brand text-sm font-semibold hover:gap-2.5 transition-all"
                  >
                    Enquire now →
                  </Link>
                </div>
                <ul className="grid sm:grid-cols-2 gap-3 content-start">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-navy/70">
                      <FiCheckCircle className="text-brand mt-0.5 shrink-0" size={15} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-16 bg-navy-dark">
        <div className="max-w-site mx-auto px-4 text-center">
          <h3 className="font-display text-3xl font-extrabold text-white">
            Not sure which service you need?
          </h3>
          <p className="text-white/60 mt-3 max-w-lg mx-auto">
            Our team will assess your situation and recommend the right combination of services.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-7 bg-brand hover:bg-brand-hover text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-brand/30"
          >
            Talk to us
          </Link>
        </div>
      </section>
    </>
  )
}
