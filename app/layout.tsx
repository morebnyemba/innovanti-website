import type { Metadata } from 'next'
import { Archivo, Hanken_Grotesk } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BackToTop from '@/components/shared/BackToTop'
import WhatsAppButton from '@/components/shared/WhatsAppButton'

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  weight: ['500', '600', '700', '800'],
  display: 'swap',
})

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-hanken',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://innovantisolutions.co.zw'),
  title: { default: 'Innovanti Solutions', template: '%s — Innovanti Solutions' },
  description: 'Innovanti Solutions is a diversified partner in IT, cybersecurity, procurement and trade — helping businesses, institutions and governments operate with confidence and grow with purpose.',
  keywords: ['IT solutions', 'cybersecurity', 'procurement', 'Zimbabwe', 'Harare', 'technology'],
  manifest: '/manifest.json',
  openGraph: {
    siteName: 'Innovanti Solutions',
    locale: 'en_ZW',
    type: 'website',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export const viewport = {
  themeColor: '#15213f',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${hanken.variable}`}>
      <body className="font-sans text-navy antialiased bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
        <WhatsAppButton />
      </body>
    </html>
  )
}
