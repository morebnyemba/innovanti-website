import RevealWrapper from '@/components/shared/RevealWrapper'
import { FiZap, FiAward, FiUsers, FiTarget } from 'react-icons/fi'

const values = [
  { Icon: FiZap,    title: 'Innovation',   desc: 'We continuously seek smarter, faster, more effective ways to solve complex problems.' },
  { Icon: FiAward,  title: 'Excellence',   desc: 'Every engagement is measured against the highest standards of quality and delivery.' },
  { Icon: FiUsers,  title: 'Partnership',  desc: 'We invest in long-term relationships, not transactions — your success is our success.' },
  { Icon: FiTarget, title: 'Integrity',    desc: 'Transparent pricing, honest advice and ethical conduct in every interaction.' },
]

export default function Values() {
  return (
    <section className="py-24 relative overflow-hidden bg-navy">
      {/* Diagonal pattern */}
      <div className="absolute inset-0 bg-diag-navy pointer-events-none" />

      <div className="relative max-w-site mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <RevealWrapper>
            <span className="text-brand-light text-xs font-bold uppercase tracking-widest">Our Values</span>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mt-3 leading-tight">
              Principles that guide everything we do
            </h2>
            <p className="text-white/55 mt-4 text-lg leading-relaxed">
              Since our founding, these four values have shaped our culture, our decisions and the outcomes we deliver for clients.
            </p>
          </RevealWrapper>

          <div className="grid grid-cols-2 gap-5">
            {values.map(({ Icon, title, desc }, i) => (
              <RevealWrapper key={title} delay={0.1 + i * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-brand/15 flex items-center justify-center mb-4">
                    <Icon className="text-brand-light" size={18} />
                  </div>
                  <h3 className="font-display font-bold text-white mb-2">{title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
