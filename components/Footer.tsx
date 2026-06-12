import Link from 'next/link'
import Image from 'next/image'
import { FiMapPin, FiPhone, FiGlobe, FiClock, FiMail } from 'react-icons/fi'

const exploreLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
]

const serviceLinks = [
  'IT Consulting',
  'Network Solutions',
  'Cybersecurity',
  'Strategic Sourcing',
  'Logistics & Trade',
  'Commodity Trading',
]

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="max-w-site mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Image
              src="/innovanti-logo.png"
              alt="Innovanti Solutions"
              width={150}
              height={42}
              className="h-10 w-auto mb-4"
            />
            <p className="text-white/55 text-sm leading-relaxed mt-3">
              Innovating technology. Connecting markets. Delivering value across Zimbabwe and beyond.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-display font-bold text-white mb-4 text-xs uppercase tracking-widest">Explore</h4>
            <ul className="space-y-2.5">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/55 hover:text-brand-light text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-white mb-4 text-xs uppercase tracking-widest">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-white/55 hover:text-brand-light text-sm transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white mb-4 text-xs uppercase tracking-widest">Contact</h4>
            <ul className="space-y-3">
              <li className="flex gap-2 text-sm text-white/55">
                <FiMapPin className="text-brand-light mt-0.5 shrink-0" size={14} />
                <span>No. 42 Tigere Mansions, Corner 6th &amp; Central Avenue, Harare, Zimbabwe</span>
              </li>
              <li className="flex gap-2 text-sm text-white/55">
                <FiPhone className="text-brand-light mt-0.5 shrink-0" size={14} />
                <span>0712 538 836</span>
              </li>
              <li className="flex gap-2 text-sm text-white/55">
                <FiMail className="text-brand-light mt-0.5 shrink-0" size={14} />
                <a href="mailto:info@innovantisolutions.co.zw" className="hover:text-brand-light transition-colors">
                  info@innovantisolutions.co.zw
                </a>
              </li>
              <li className="flex gap-2 text-sm text-white/55">
                <FiGlobe className="text-brand-light mt-0.5 shrink-0" size={14} />
                <span>innovantisolutions.co.zw</span>
              </li>
              <li className="flex gap-2 text-sm text-white/55">
                <FiClock className="text-brand-light mt-0.5 shrink-0" size={14} />
                <span>Mon–Fri 08:00–17:00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-site mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Innovanti Solutions. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">Harare, Zimbabwe</p>
        </div>
      </div>
    </footer>
  )
}
