import type { NextConfig } from 'next'
import withPWA from '@ducanh2912/next-pwa'

// Set STATIC_EXPORT=true to emit a fully static site into ./out for upload
// to static hosting (e.g. Namecheap cPanel public_html).
const isStatic = process.env.STATIC_EXPORT === 'true'

const nextConfig: NextConfig = {
  // authInterrupts powers the 403/401 pages; it needs a server, so it is
  // dropped for the static export (those pages can't run on static hosting).
  ...(isStatic
    ? { output: 'export', images: { unoptimized: true }, trailingSlash: true }
    : { experimental: { authInterrupts: true } }),
}

export default withPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
})(nextConfig)
