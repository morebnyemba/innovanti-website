import type { Metadata } from 'next'
import Image from 'next/image'
import InnerHero from '@/components/shared/InnerHero'
import RevealWrapper from '@/components/shared/RevealWrapper'
import ContactForm from '@/components/contact/ContactForm'
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Innovanti Solutions — Harare, Zimbabwe.',
}

const info = [
  {
    Icon: FiMapPin,
    label: 'Visit us',
    value: 'No. 42 Tigere Mansions, Corner 6th & Central Avenue, Harare, Zimbabwe',
  },
  { Icon: FiPhone, label: 'Call us', value: '0712 538 836' },
  { Icon: FiMail,  label: 'Email us', value: 'info@innovantisolutions.co.zw' },
  { Icon: FiClock, label: 'Office hours', value: 'Monday – Friday, 08:00 – 17:00' },
]

export default function ContactPage() {
  return (
    <>
      <InnerHero
        title="Contact Us"
        subtitle="We'd love to hear from you. Fill in the form or reach us directly."
      />

      <section className="py-20 bg-white">
        <div className="max-w-site mx-auto px-4 grid md:grid-cols-2 gap-14">
          {/* Info column */}
          <RevealWrapper>
            <div>
              <h2 className="font-display text-2xl font-extrabold text-navy mb-8">Get in touch</h2>

              <ul className="space-y-6 mb-10">
                {info.map(({ Icon, label, value }) => (
                  <li key={label} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand/8 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="text-brand" size={18} />
                    </div>
                    <div>
                      <div className="text-navy text-xs font-bold uppercase tracking-wider mb-0.5">{label}</div>
                      <div className="text-navy/65 text-sm leading-relaxed">{value}</div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Office image */}
              <div className="relative rounded-2xl overflow-hidden h-56">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                  alt="Office"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="font-display font-bold">Innovanti Solutions</div>
                  <div className="text-white/70 text-sm">Harare, Zimbabwe</div>
                </div>
              </div>
            </div>
          </RevealWrapper>

          {/* Form column */}
          <RevealWrapper delay={0.15}>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="font-display text-2xl font-extrabold text-navy mb-6">Send a message</h2>
              <ContactForm />
            </div>
          </RevealWrapper>
        </div>
      </section>
    </>
  )
}
