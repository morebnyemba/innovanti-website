import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import InnerHero from '@/components/shared/InnerHero'
import RevealWrapper from '@/components/shared/RevealWrapper'
import { FiZap, FiAward, FiUsers, FiTarget, FiCheckCircle } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Innovanti Solutions — our story, mission, values and commitment to Zimbabwe.',
}

const values = [
  { Icon: FiZap,    title: 'Innovation',  desc: 'We continuously seek smarter, faster and more effective ways to solve complex problems.' },
  { Icon: FiAward,  title: 'Excellence',  desc: 'Every engagement is measured against the highest standards of quality and delivery.' },
  { Icon: FiUsers,  title: 'Partnership', desc: 'We invest in long-term relationships — your success is our success.' },
  { Icon: FiTarget, title: 'Integrity',   desc: 'Transparent pricing, honest advice and ethical conduct in every interaction.' },
]

const responsibilities = [
  'Supporting local skills development through ICT training',
  'Partnering with Zimbabwean SMEs to build technology capacity',
  'Sustainable procurement practices with responsible sourcing',
  'Mentoring the next generation of technology professionals',
]

export default function AboutPage() {
  return (
    <>
      <InnerHero
        title="About Innovanti"
        subtitle="A Harare-based technology partner serving businesses, institutions and governments across Zimbabwe and Africa."
      />

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-site mx-auto px-4 grid md:grid-cols-2 gap-14 items-center">
          <RevealWrapper>
            <span className="text-brand text-xs font-bold uppercase tracking-widest">Our Story</span>
            <h2 className="font-display text-4xl font-extrabold text-navy mt-3 leading-tight">
              Born in Zimbabwe, built for Africa
            </h2>
            <div className="space-y-4 mt-5 text-navy/65 leading-relaxed">
              <p>
                Innovanti Solutions was founded on a simple conviction: that African businesses deserve
                access to world-class technology solutions at competitive prices, with partners who
                understand the local context.
              </p>
              <p>
                From our base in Harare, we have grown into a diversified partner offering IT consulting,
                cybersecurity, procurement, logistics and commodity trading services to a broad client base
                spanning government, financial services, telecoms, manufacturing and NGOs.
              </p>
              <p>
                Our team brings deep technical expertise and genuine business acumen — we don&apos;t just
                implement technology, we help our clients extract lasting value from it.
              </p>
            </div>
          </RevealWrapper>

          <RevealWrapper delay={0.15}>
            <div className="relative rounded-2xl overflow-hidden h-80 md:h-96">
              <Image
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80"
                alt="Innovanti office"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 to-transparent" />
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-site mx-auto px-4">
          <RevealWrapper>
            <div className="text-center mb-12">
              <span className="text-brand text-xs font-bold uppercase tracking-widest">Our Values</span>
              <h2 className="font-display text-4xl font-extrabold text-navy mt-2">
                Principles we live by
              </h2>
            </div>
          </RevealWrapper>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ Icon, title, desc }, i) => (
              <RevealWrapper key={title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl border border-navy/8 p-7 hover:shadow-lg hover:shadow-navy/8 transition-all">
                  <div className="w-11 h-11 rounded-xl bg-brand/8 flex items-center justify-center mb-4">
                    <Icon className="text-brand" size={20} />
                  </div>
                  <h3 className="font-display font-bold text-navy mb-2">{title}</h3>
                  <p className="text-navy/60 text-sm leading-relaxed">{desc}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate responsibility */}
      <section className="py-20 bg-navy">
        <div className="max-w-site mx-auto px-4 grid md:grid-cols-2 gap-14 items-center">
          <RevealWrapper>
            <span className="text-brand-light text-xs font-bold uppercase tracking-widest">Corporate Responsibility</span>
            <h2 className="font-display text-4xl font-extrabold text-white mt-3 leading-tight">
              Investing in our community
            </h2>
            <p className="text-white/60 mt-4 leading-relaxed">
              We believe technology should uplift communities, not just corporations. Our corporate
              responsibility commitments reflect our role as a Zimbabwean company with a stake in
              the country&apos;s future.
            </p>
            <ul className="mt-6 space-y-3">
              {responsibilities.map((r) => (
                <li key={r} className="flex items-start gap-2.5 text-white/70 text-sm">
                  <FiCheckCircle className="text-brand-light mt-0.5 shrink-0" size={15} />
                  {r}
                </li>
              ))}
            </ul>
          </RevealWrapper>

          <RevealWrapper delay={0.15}>
            <div className="relative rounded-2xl overflow-hidden h-72">
              <Image
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80"
                alt="Community"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-navy/30" />
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <RevealWrapper>
          <div className="max-w-site mx-auto px-4">
            <h3 className="font-display text-3xl font-extrabold text-navy">Work with us</h3>
            <p className="text-navy/60 mt-3 max-w-md mx-auto">
              Ready to partner with a team that truly understands your market?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-7 bg-brand hover:bg-brand-hover text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-brand/30"
            >
              Get in touch →
            </Link>
          </div>
        </RevealWrapper>
      </section>
    </>
  )
}
