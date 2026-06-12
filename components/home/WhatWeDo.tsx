import RevealWrapper from '@/components/shared/RevealWrapper'
import {
  FiLayers, FiGlobe, FiMonitor, FiShield, FiPackage, FiTrendingUp
} from 'react-icons/fi'
import Link from 'next/link'

const services = [
  {
    Icon: FiMonitor,
    title: 'IT Consulting & Solutions',
    desc: 'End-to-end IT strategy, infrastructure design, deployment and managed support tailored to your growth.',
  },
  {
    Icon: FiLayers,
    title: 'Network Infrastructure',
    desc: 'Enterprise-grade structured cabling, switching, wireless and WAN connectivity for any scale.',
  },
  {
    Icon: FiShield,
    title: 'Cybersecurity',
    desc: 'Threat assessments, endpoint protection, SIEM, incident response and continuous monitoring.',
  },
  {
    Icon: FiPackage,
    title: 'Strategic Sourcing',
    desc: 'ICT hardware & software procurement with preferred vendor pricing and logistics management.',
  },
  {
    Icon: FiGlobe,
    title: 'Logistics & Trade',
    desc: 'Cross-border freight, customs clearance, warehousing and last-mile delivery across Africa.',
  },
  {
    Icon: FiTrendingUp,
    title: 'Commodity Trading',
    desc: 'Agricultural and mineral commodity trading with market intelligence and transparent pricing.',
  },
]

export default function WhatWeDo() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-site mx-auto px-4">
        <RevealWrapper>
          <div className="text-center mb-14">
            <span className="text-brand text-xs font-bold uppercase tracking-widest">What We Do</span>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-navy mt-2">
              Six pillars of value
            </h2>
            <p className="text-navy/60 mt-3 max-w-xl mx-auto">
              From bytes to borders — we cover the full technology and trade spectrum.
            </p>
          </div>
        </RevealWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ Icon, title, desc }, i) => (
            <RevealWrapper key={title} delay={i * 0.08}>
              <div className="group relative bg-white border border-navy/8 rounded-2xl p-7 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy/10 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-brand/8 flex items-center justify-center mb-5 group-hover:bg-brand/15 transition-colors">
                  <Icon className="text-brand" size={22} />
                </div>
                <h3 className="font-display text-lg font-bold text-navy mb-2">{title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{desc}</p>
                <div className="mt-5 text-brand text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more →
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>

        <RevealWrapper delay={0.5} className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border-2 border-navy hover:bg-navy hover:text-white text-navy font-semibold px-8 py-3 rounded-full transition-all duration-200"
          >
            View all services
          </Link>
        </RevealWrapper>
      </div>
    </section>
  )
}
