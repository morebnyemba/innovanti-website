import RevealWrapper from '@/components/shared/RevealWrapper'
import Link from 'next/link'

export default function HomeCta() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-site mx-auto px-4">
        <RevealWrapper>
          <div className="bg-white rounded-3xl shadow-xl shadow-navy/8 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-brand text-xs font-bold uppercase tracking-widest">Ready to start?</span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy mt-2">
                Let&apos;s build something together
              </h2>
              <p className="text-navy/60 mt-3 leading-relaxed">
                Whether you need a full IT overhaul, a cybersecurity audit, or procurement support —
                our team is ready to help you move faster and smarter.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-hover text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-brand/30 hover:-translate-y-0.5"
              >
                Request a proposal
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border-2 border-navy/20 hover:border-navy text-navy font-semibold px-7 py-3.5 rounded-full transition-all duration-200"
              >
                View services
              </Link>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
